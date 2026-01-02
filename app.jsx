import React, { useEffect, useRef, useState, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { 
  getFirestore, collection, addDoc, onSnapshot, 
  query, orderBy, limit, serverTimestamp 
} from 'firebase/firestore';
import { Sparkles, Plus, Shuffle, Search, X, Info, Star, Heart, Copy, Trash2, Download, Upload, AlertTriangle } from 'lucide-react';

// 🔴 FIREBASE CONFIG 🔴
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
const auth = getAuth(app);
const db = getFirestore(app);

// --- COLLIDER LOGIC ---
const generateRemix = (texts) => {
  let pool = [];
  texts.forEach(text => {
    const lines = text.split(/[\n.]+/);
    lines.forEach(line => {
      const clean = line.trim();
      if (clean.length > 5) pool.push(clean);
    });
  });

  if (pool.length === 0) return "The void is silent.";

  pool.sort(() => Math.random() - 0.5);

  const output = [];
  let currentLine = pool.shift();
  output.push(currentLine);

  const targetLength = Math.floor(Math.random() * 5) + 3;

  while (output.length < targetLength && pool.length > 0) {
    const currentWords = new Set(currentLine.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
    
    let foundMatch = false;
    
    for (let i = 0; i < pool.length; i++) {
      const candidate = pool[i];
      const candidateWords = new Set(candidate.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
      
      const intersection = new Set([...currentWords].filter(x => candidateWords.has(x)));
      
      if (intersection.size > 0) {
        currentLine = pool.splice(i, 1)[0];
        output.push(currentLine);
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      currentLine = pool.shift();
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
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemixModal, setShowRemixModal] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [remixResult, setRemixResult] = useState('');
  const [remixSources, setRemixSources] = useState([]);
  
  const [newContent, setNewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Enhanced Favorites State
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('nebulaFavorites');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [favoritesFilter, setFavoritesFilter] = useState('all');
  const [favoritesSearch, setFavoritesSearch] = useState('');
  const [starAnimation, setStarAnimation] = useState(null);
  
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const importInputRef = useRef(null);

  // Backup favorites to localStorage
  useEffect(() => {
    localStorage.setItem('nebulaFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Auto-backup feature
  useEffect(() => {
    const backupInterval = setInterval(() => {
      if (favorites.length > 0) {
        const backup = {
          timestamp: new Date().toISOString(),
          count: favorites.length,
          data: favorites
        };
        localStorage.setItem('nebulaFavorites_backup', JSON.stringify(backup));
      }
    }, 3600000);
    
    return () => clearInterval(backupInterval);
  }, [favorites]);

  // Enhanced toggleFavorite function
  const toggleFavorite = (text, type = 'collision', metadata = {}) => {
    if (!text) return;
    const exists = favorites.find(f => f.text === text);
    let newFavs;
    
    setStarAnimation(text);
    setTimeout(() => setStarAnimation(null), 600);
    
    if (exists) {
      newFavs = favorites.filter(f => f.text !== text);
    } else {
      newFavs = [{ 
        id: Date.now() + Math.random(),
        text, 
        type,
        date: new Date().toISOString(),
        timestamp: Date.now(),
        ...metadata
      }, ...favorites];
    }
    setFavorites(newFavs);
  };

  const isFav = (text) => favorites.some(f => f.text === text);

  // Filter and sort favorites
  const filteredFavorites = favorites.filter(fav => {
    if (favoritesFilter !== 'all' && fav.type !== favoritesFilter) return false;
    if (favoritesSearch && !fav.text.toLowerCase().includes(favoritesSearch.toLowerCase())) return false;
    return true;
  });

  const sortedFavorites = [...filteredFavorites].sort((a, b) => b.timestamp - a.timestamp);

  // Export/Import functions
  const exportFavorites = () => {
    const dataStr = JSON.stringify(favorites, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `nebula-favorites-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importFavorites = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          const merged = [...favorites];
          imported.forEach(item => {
            if (!merged.find(f => f.text === item.text)) {
              merged.push({...item, id: Date.now() + Math.random()});
            }
          });
          setFavorites(merged);
          alert(`Imported ${imported.length} favorites`);
        }
      } catch (err) {
        alert('Invalid file format');
      }
    };
    reader.readAsText(file);
  };

  // 1. AUTHENTICATION
  useEffect(() => {
    signInAnonymously(auth)
      .then(() => console.log("Connected to the collective (Anonymous Auth)"))
      .catch((error) => console.error("Auth failed:", error));
  }, []);

  // 2. DATA SYNC
  useEffect(() => {
    const q = query(collection(db, "ideas"), orderBy("timestamp", "desc"), limit(2000));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedIdeas = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          content: data.content,
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

  const stringHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  // 3. CANVAS RENDERING
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      const matchesSearch = searchTerm && node.content.toLowerCase().includes(searchTerm.toLowerCase());
      const isDimmed = searchTerm && !matchesSearch;
      
      let color = '#ffffff';
      let radius = 2;
      let glow = 0;

      if (node.id === selectedNode?.id || remixSources.includes(node.id)) {
        color = '#facc15';
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

  // 4. INTERACTION HANDLERS
  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    let found = null;
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
      setRemixSources([]);
    }
  };

  const handleAddIdea = async () => {
    if (!newContent.trim()) return;
    
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
          
          {/* Favorites Button */}
          <button 
            onClick={() => setShowFavorites(true)}
            className="bg-zinc-100 hover:bg-white text-black p-3 rounded-full shadow-lg transition-transform hover:scale-105 relative"
          >
            <Star className="w-5 h-5" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>
          
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
            
            <div className="flex-grow overflow-y-auto custom-scroll bg-black/50 p-6 rounded-xl border border-zinc-800/50 mb-6 relative group">
              <p className="text-lg md:text-xl text-zinc-100 font-serif leading-loose whitespace-pre-wrap text-center">
                {remixResult}
              </p>
              <button 
                onClick={() => toggleFavorite(remixResult, 'collision', { source: 'remix' })} 
                className={`absolute top-2 right-2 transition-all ${starAnimation === remixResult ? 'animate-pulse' : ''}`}
              >
                <Heart className={`w-6 h-6 ${isFav(remixResult) ? 'fill-red-500 text-red-500' : 'text-zinc-500 hover:text-red-500'}`} />
              </button>
            </div>

            <div className="flex justify-center">
              <button onClick={handleRemix} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <Shuffle className="w-4 h-4" /> Reroll
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ENHANCED FAVORITES MODAL */}
      {showFavorites && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
              <h2 className="text-xl font-light text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                STARRED FRAGMENTS
                <span className="text-sm text-zinc-500 ml-2">({favorites.length})</span>
              </h2>
              <button onClick={() => setShowFavorites(false)} className="text-zinc-500 hover:text-white">
                <X className="w-6 h-6"/>
              </button>
            </div>
            
            {/* Statistics Dashboard */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-black/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">{favorites.length}</div>
                <div className="text-xs text-zinc-500">Total</div>
              </div>
              <div className="bg-black/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-500">{favorites.filter(f => f.type === 'collision').length}</div>
                <div className="text-xs text-zinc-500">Collisions</div>
              </div>
              <div className="bg-black/30 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-500">{favorites.filter(f => f.type === 'signal').length}</div>
                <div className="text-xs text-zinc-500">Signals</div>
              </div>
            </div>
            
            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <div className="bg-zinc-800/50 rounded-lg p-2 flex gap-1">
                {['all', 'collision', 'signal'].map(type => (
                  <button
                    key={type}
                    onClick={() => setFavoritesFilter(type)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${favoritesFilter === type ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    {type !== 'all' && ` (${favorites.filter(f => f.type === type).length})`}
                  </button>
                ))}
              </div>
              <div className="bg-black/50 border border-zinc-800 rounded-lg px-3 py-2 flex items-center gap-2 flex-1">
                <Search className="w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search favorites..."
                  value={favoritesSearch}
                  onChange={(e) => setFavoritesSearch(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500"
                />
              </div>
            </div>
            
            {/* Favorites List */}
            <div className="flex-grow overflow-y-auto space-y-3 pr-2">
              {sortedFavorites.length === 0 ? (
                <div className="text-center text-zinc-500 py-10 italic">
                  {favoritesSearch || favoritesFilter !== 'all' 
                    ? "No matching stars." 
                    : "No stars collected yet. Favorite collisions or signals!"}
                </div>
              ) : (
                sortedFavorites.map(fav => (
                  <div key={fav.id} className="bg-black/40 hover:bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 group transition-all hover:border-zinc-700">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${fav.type === 'collision' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-blue-500/20 text-blue-500'}`}>
                          {fav.type}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {new Date(fav.timestamp).toLocaleDateString()} {new Date(fav.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(fav.text);
                          }}
                          className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-white transition-all"
                          title="Copy"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => toggleFavorite(fav.text)}
                          className="text-red-500 hover:text-red-400 transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-200 font-serif leading-relaxed whitespace-pre-wrap select-text cursor-text line-clamp-3 hover:line-clamp-none transition-all">
                      {fav.text}
                    </p>
                    {fav.text.length > 200 && (
                      <div className="text-xs text-zinc-500 mt-2 italic">
                        {Math.ceil(fav.text.split(' ').length)} words
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            
            {/* Actions Bar */}
            {favorites.length > 0 && (
              <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      if (confirm(`Clear all ${filteredFavorites.length} displayed favorites?`)) {
                        const newFavs = favorites.filter(f => !filteredFavorites.includes(f));
                        setFavorites(newFavs);
                      }
                    }}
                    className="text-xs text-zinc-500 hover:text-red-500 transition-colors px-3 py-1 rounded border border-zinc-800 hover:border-red-500 flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Clear Displayed
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm(`Clear ALL ${favorites.length} favorites?`)) {
                        setFavorites([]);
                      }
                    }}
                    className="text-xs text-red-500 hover:text-red-400 transition-colors px-3 py-1 rounded border border-red-500/30 hover:border-red-500 flex items-center gap-1"
                  >
                    <AlertTriangle className="w-3 h-3" /> Clear All
                  </button>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => importInputRef.current?.click()}
                    className="text-xs text-zinc-500 hover:text-white transition-colors px-3 py-1 rounded border border-zinc-800 hover:border-zinc-600 flex items-center gap-1"
                  >
                    <Upload className="w-3 h-3" /> Import
                  </button>
                  <input
                    ref={importInputRef}
                    type="file"
                    accept=".json"
                    onChange={importFavorites}
                    className="hidden"
                  />
                  <button 
                    onClick={exportFavorites}
                    className="text-xs text-zinc-500 hover:text-white transition-colors px-3 py-1 rounded border border-zinc-800 hover:border-zinc-600 flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" /> Export
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DETAIL SIDEBAR */}
      <div className={`absolute top-0 right-0 h-full w-full md:w-96 bg-black/95 backdrop-blur border-l border-zinc-800 shadow-2xl transition-transform duration-300 z-40 p-8 overflow-y-auto ${selectedNode ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setSelectedNode(null)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><X className="w-6 h-6"/></button>
        
        <div className="mt-12 relative group">
          <div className="flex justify-between items-center mb-4">
            <div className="inline-block px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold tracking-widest mb-4">
              ANONYMOUS SIGNAL
            </div>
            <button 
              onClick={() => selectedNode && toggleFavorite(selectedNode.content, 'signal', { nodeId: selectedNode.id })}
              className={`transition-all ${starAnimation === selectedNode?.content ? 'animate-pulse' : ''}`}
            >
              <Heart className={`w-6 h-6 ${selectedNode && isFav(selectedNode.content) ? 'fill-red-500 text-red-500' : 'text-zinc-500 hover:text-red-500'}`} />
            </button>
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