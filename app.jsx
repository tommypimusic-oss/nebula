import React, { useEffect, useRef, useState, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth'; // Import Auth
import { 
  getFirestore, collection, addDoc, onSnapshot, 
  query, orderBy, limit, serverTimestamp 
} from 'firebase/firestore';
import { Sparkles, Plus, Shuffle, Search, X, Info } from 'lucide-react';

// --- CONFIGURATION ---
// 🔴 PASTE YOUR FIREBASE CONFIG HERE 🔴
const firebaseConfig = {
  apiKey: "AIzaSyBCBXsY55rxtKUx2HYXA7riczMRTiRKgMA",
  authDomain: "idea-nebula.firebaseapp.com",
  projectId: "idea-nebula",
  storageBucket: "idea-nebula.firebasestorage.app",
  messagingSenderId: "606687457668",
  appId: "1:606687457668:web:cdca14efacc9516b2aedd1",
  measurementId: "G-HGDDEJ8N20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const db = getFirestore(app);

// --- COLLIDER LOGIC (JS PORT) ---
const generateRemix = (texts) => {
  let pool = [];
  texts.forEach(text => {
    // Split by newlines or periods
    const lines = text.split(/[\n.]+/);
    lines.forEach(line => {
      const clean = line.trim();
      if (clean.length > 5) pool.push(clean);
    });
  });

  if (pool.length === 0) return "The void is silent.";

  // Shuffle pool
  pool.sort(() => Math.random() - 0.5);

  const output = [];
  let currentLine = pool.shift();
  output.push(currentLine);

  const targetLength = Math.floor(Math.random() * 5) + 3; // 3-8 lines

  while (output.length < targetLength && pool.length > 0) {
    // Extract words (3+ chars)
    const currentWords = new Set(currentLine.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
    
    let foundMatch = false;
    
    for (let i = 0; i < pool.length; i++) {
      const candidate = pool[i];
      const candidateWords = new Set(candidate.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
      
      // Check intersection
      const intersection = new Set([...currentWords].filter(x => candidateWords.has(x)));
      
      if (intersection.size > 0) {
        currentLine = pool.splice(i, 1)[0];
        output.push(currentLine);
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      currentLine = pool.shift(); // Random jump
      output.push(currentLine);
    }
  }

  return output.join('\n');
};

// --- MAIN COMPONENT ---
export default function IdeaNebula() {
  const [ideas, setIdeas] = useState([]);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // UI States
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemixModal, setShowRemixModal] = useState(false);
  const [remixResult, setRemixResult] = useState('');
  const [remixSources, setRemixSources] = useState([]);
  
  // Inputs
  const [newContent, setNewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canvasRef = useRef(null);
  const requestRef = useRef();

  // 0. AUTHENTICATION (NEW)
  useEffect(() => {
    // Sign in the user anonymously as soon as the app loads
    signInAnonymously(auth)
      .then(() => console.log("Connected to the collective (Anonymous Auth)"))
      .catch((error) => console.error("Auth failed:", error));
  }, []);

  // 1. DATA SYNC
  useEffect(() => {
    // Listen to the last 2000 ideas
    const q = query(collection(db, "ideas"), orderBy("timestamp", "desc"), limit(2000));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedIdeas = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          content: data.content,
          // Generate deterministic pseudo-random coords based on ID hash
          // (Since we don't have python embeddings, we scatter them randomly but consistently)
          x: (stringHash(doc.id) % 1000) / 1000 * window.innerWidth, 
          y: (stringHash(doc.id + "y") % 1000) / 1000 * window.innerHeight,
          timestamp: data.timestamp,
          glimmer: null
        };
      });
      setIdeas(loadedIdeas);
    }, (error) => {
      console.error("Data sync error:", error);
    });

    return () => unsubscribe();
  }, []);

  // Helper for consistent random positions
  const stringHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  // 2. CANVAS RENDERING
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Glimmer Logic (Warm Palette)
    if (ideas.length > 0 && Math.random() < 0.1) {
      const target = ideas[Math.floor(Math.random() * ideas.length)];
      if (!target.glimmer) {
        const colors = ['#facc15', '#ffffff', '#fb923c', '#ef4444'];
        target.glimmer = {
          life: 1.0,
          color: colors[Math.floor(Math.random() * colors.length)]
        };
      }
    }

    ideas.forEach(node => {
      // Filter logic
      const matchesSearch = searchTerm && node.content.toLowerCase().includes(searchTerm.toLowerCase());
      const isDimmed = searchTerm && !matchesSearch;
      
      let color = '#ffffff';
      let radius = 2;
      let glow = 0;

      if (node.id === selectedNode?.id || remixSources.includes(node.id)) {
        color = '#facc15'; // Yellow
        radius = 4;
        glow = 15;
      } else if (node.id === hoveredNode?.id) {
        color = '#facc15';
        radius = 3;
        glow = 10;
      } else if (matchesSearch) {
        color = '#facc15';
        radius = 3;
      } else if (isDimmed) {
        color = '#333333';
      } else if (node.glimmer) {
        color = node.glimmer.color;
        radius = 3;
        glow = 10;
        node.glimmer.life -= 0.02;
        if (node.glimmer.life <= 0) node.glimmer = null;
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowBlur = glow;
      ctx.shadowColor = color;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw Constellation Lines for Remix
    if (remixSources.length > 1) {
      const nodes = ideas.filter(i => remixSources.includes(i.id));
      if (nodes.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.6;
        ctx.moveTo(nodes[0].x, nodes[0].y);
        for(let i=1; i<nodes.length; i++) ctx.lineTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[0].x, nodes[0].y);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }
    }

    requestRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    const handleResize = () => {
      if(canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    requestRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(requestRef.current);
  }, [ideas, hoveredNode, selectedNode, searchTerm, remixSources]);

  // 3. INTERACTION HANDLERS
  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    let found = null;
    // Reverse loop to catch top stars first
    for (let i = ideas.length - 1; i >= 0; i--) {
      const node = ideas[i];
      const dist = Math.hypot(node.x - x, node.y - y);
      if (dist < 15) {
        found = node;
        break;
      }
    }
    setHoveredNode(found);
  };

  const handleClick = () => {
    if (hoveredNode) {
      setSelectedNode(hoveredNode);
    } else {
      setSelectedNode(null);
      setRemixSources([]); // Clear constellation
    }
  };

  const handleAddIdea = async () => {
    if (!newContent.trim()) return;
    
    // Safety check: ensure we are authenticated
    if (!auth.currentUser) {
      alert("Still connecting to the void... please wait a moment.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "ideas"), {
        content: newContent,
        timestamp: serverTimestamp(),
        source: "anonymous"
      });
      setNewContent('');
      setShowAddModal(false);
    } catch (e) {
      alert("Transmission failed. Check your connection or permissions.");
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemix = () => {
    if (ideas.length < 3) return;
    
    // Pick 3-5 random ideas
    const count = Math.floor(Math.random() * 3) + 3;
    const shuffled = [...ideas].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    
    const result = generateRemix(selected.map(i => i.content));
    
    setRemixResult(result);
    setRemixSources(selected.map(i => i.id));
    setShowRemixModal(true);
  };

  return (
    <div className="w-screen h-screen bg-black overflow-hidden font-sans text-white select-none relative">
      
      {/* BACKGROUND CANVAS */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10 pointer-events-none">
        <div>
          <h1 className="text-3xl font-light tracking-[0.2em] text-white opacity-90">
            IDEA NEBULA
          </h1>
          <div className="text-xs text-zinc-500 mt-2 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            LIVE COLLECTIVE • {ideas.length} NODES
          </div>
        </div>

        <div className="flex gap-3 pointer-events-auto">
          <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg w-64 focus-within:w-80 transition-all">
            <Search className="w-4 h-4 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search the void..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500"
            />
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-zinc-100 hover:bg-white text-black p-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* REMIX BUTTON */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
        <button 
          onClick={handleRemix}
          className="group flex items-center gap-2 bg-zinc-900/90 backdrop-blur border border-zinc-700 hover:border-yellow-500 text-white px-8 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <Shuffle className="w-5 h-5 text-yellow-500 group-hover:animate-spin" />
          <span className="font-bold tracking-wide group-hover:text-yellow-500 transition-colors">COLLIDE</span>
        </button>
      </div>

      {/* ADD MODAL */}
      {showAddModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-light text-white">Contribute to the Void</h2>
              <button onClick={() => setShowAddModal(false)} className="text-zinc-500 hover:text-white"><X className="w-6 h-6"/></button>
            </div>
            <textarea 
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Type a lyric, a thought, or a fragment of a dream..."
              className="w-full h-40 bg-black border border-zinc-800 rounded-xl p-4 text-zinc-200 focus:border-yellow-500 outline-none resize-none mb-4"
            />
            <button 
              onClick={handleAddIdea}
              disabled={isSubmitting}
              className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Transmitting..." : "Release to Nebula"}
            </button>
            <p className="text-center text-xs text-zinc-600 mt-4">Contributions are anonymous and permanent.</p>
          </div>
        </div>
      )}

      {/* REMIX RESULT MODAL */}
      {showRemixModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[80vh] animate-in fade-in zoom-in duration-200">
            <button onClick={() => setShowRemixModal(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white"><X className="w-6 h-6"/></button>
            
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-widest mb-2">COLLISION DETECTED</div>
            </div>
            
            <div className="flex-grow overflow-y-auto custom-scroll bg-black/50 p-6 rounded-xl border border-zinc-800/50 mb-6">
              <p className="text-lg md:text-xl text-zinc-100 font-serif leading-loose whitespace-pre-wrap text-center">
                {remixResult}
              </p>
            </div>

            <div className="flex justify-center">
              <button onClick={handleRemix} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <Shuffle className="w-4 h-4" /> Reroll
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DETAIL SIDEBAR (Slide-over) */}
      <div className={`absolute top-0 right-0 h-full w-full md:w-96 bg-black/95 backdrop-blur border-l border-zinc-800 shadow-2xl transition-transform duration-300 z-40 p-8 overflow-y-auto ${selectedNode ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setSelectedNode(null)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><X className="w-6 h-6"/></button>
        
        <div className="mt-12">
          <div className="inline-block px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold tracking-widest mb-4">
            ANONYMOUS SIGNAL
          </div>
          <p className="text-zinc-300 font-mono text-sm leading-relaxed whitespace-pre-wrap border-l-2 border-zinc-800 pl-4">
            {selectedNode?.content}
          </p>
          <div className="mt-8 pt-8 border-t border-zinc-900 text-xs text-zinc-600 font-mono">
            RECEIVED: {selectedNode?.timestamp?.toDate().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* HOVER TOOLTIP */}
      {hoveredNode && !selectedNode && (
        <div 
          className="fixed pointer-events-none z-50 bg-black border border-zinc-800 px-3 py-2 rounded-lg shadow-xl"
          style={{ left: hoveredNode.x + 15, top: hoveredNode.y + 15 }}
        >
          <div className="text-xs text-zinc-400 max-w-[200px] truncate">
            {hoveredNode.content}
          </div>
        </div>
      )}

    </div>
  );
}