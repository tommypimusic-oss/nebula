(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yy={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),RE=Symbol.for("react.portal"),kE=Symbol.for("react.fragment"),CE=Symbol.for("react.strict_mode"),PE=Symbol.for("react.profiler"),NE=Symbol.for("react.provider"),xE=Symbol.for("react.context"),DE=Symbol.for("react.forward_ref"),OE=Symbol.for("react.suspense"),VE=Symbol.for("react.memo"),bE=Symbol.for("react.lazy"),Mp=Symbol.iterator;function LE(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var _y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vy=Object.assign,wy={};function fs(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||_y}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ey(){}Ey.prototype=fs.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||_y}var id=rd.prototype=new Ey;id.constructor=rd;vy(id,fs.prototype);id.isPureReactComponent=!0;var Up=Array.isArray,Ty=Object.prototype.hasOwnProperty,sd={current:null},Iy={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ty.call(e,r)&&!Iy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:sd.current}}function ME(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function UE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UE(""+t.key):e.toString(36)}function tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case RE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ec(o,0):r,Up(i)?(n="",t!=null&&(n=t.replace(Fp,"$&/")+"/"),tl(i,e,n,"",function(h){return h})):i!=null&&(od(i)&&(i=ME(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Up(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ec(s,l);o+=tl(s,e,n,u,i)}else if(u=LE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ec(s,l++),o+=tl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var r=[],i=0;return tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},nl={transition:null},zE={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:nl,ReactCurrentOwner:sd};function Ay(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=fs;oe.Fragment=kE;oe.Profiler=PE;oe.PureComponent=rd;oe.StrictMode=CE;oe.Suspense=OE;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;oe.act=Ay;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ty.call(e,u)&&!Iy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:xE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NE,_context:t},t.Consumer=t};oe.createElement=Sy;oe.createFactory=function(t){var e=Sy.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:DE,render:t}};oe.isValidElement=od;oe.lazy=function(t){return{$$typeof:bE,_payload:{_status:-1,_result:t},_init:FE}};oe.memo=function(t,e){return{$$typeof:VE,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};oe.unstable_act=Ay;oe.useCallback=function(t,e){return Rt.current.useCallback(t,e)};oe.useContext=function(t){return Rt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Rt.current.useEffect(t,e)};oe.useId=function(){return Rt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Rt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};oe.useRef=function(t){return Rt.current.useRef(t)};oe.useState=function(t){return Rt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Rt.current.useTransition()};oe.version="18.3.1";yy.exports=oe;var se=yy.exports;const V=AE(se);var Bc={},Ry={exports:{}},Bt={},ky={exports:{}},Cy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var Y=$.length;$.push(G);e:for(;0<Y;){var we=Y-1>>>1,ne=$[we];if(0<i(ne,G))$[we]=G,$[Y]=ne,Y=we;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],Y=$.pop();if(Y!==G){$[0]=Y;e:for(var we=0,ne=$.length,Ie=ne>>>1;we<Ie;){var qt=2*(we+1)-1,Pe=$[qt],ht=qt+1,Ve=$[ht];if(0>i(Pe,Y))ht<ne&&0>i(Ve,Pe)?($[we]=Ve,$[ht]=Y,we=ht):($[we]=Pe,$[qt]=Y,we=qt);else if(ht<ne&&0>i(Ve,Y))$[we]=Ve,$[ht]=Y,we=ht;else break e}}return G}function i($,G){var Y=$.sortIndex-G.sortIndex;return Y!==0?Y:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,A=!1,P=!1,O=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=$)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function D($){if(O=!1,S($),!P)if(n(u)!==null)P=!0,pn(F);else{var G=n(h);G!==null&&Zt(D,G.startTime-$)}}function F($,G){P=!1,O&&(O=!1,I(g),g=-1),A=!0;var Y=y;try{for(S(G),m=n(u);m!==null&&(!(m.expirationTime>G)||$&&!R());){var we=m.callback;if(typeof we=="function"){m.callback=null,y=m.priorityLevel;var ne=we(m.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(u)&&r(u),S(G)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var qt=n(h);qt!==null&&Zt(D,qt.startTime-G),Ie=!1}return Ie}finally{m=null,y=Y,A=!1}}var B=!1,w=null,g=-1,v=5,E=-1;function R(){return!(t.unstable_now()-E<v)}function C(){if(w!==null){var $=t.unstable_now();E=$;var G=!0;try{G=w(!0,$)}finally{G?T():(B=!1,w=null)}}else B=!1}var T;if(typeof _=="function")T=function(){_(C)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Ht=ae.port2;ae.port1.onmessage=C,T=function(){Ht.postMessage(null)}}else T=function(){b(C,0)};function pn($){w=$,B||(B=!0,T())}function Zt($,G){g=b(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,pn(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var Y=y;y=G;try{return $()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=y;y=$;try{return G()}finally{y=Y}},t.unstable_scheduleCallback=function($,G,Y){var we=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?we+Y:we):Y=we,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Y+ne,$={id:f++,callback:G,priorityLevel:$,startTime:Y,expirationTime:ne,sortIndex:-1},Y>we?($.sortIndex=Y,e(h,$),n(u)===null&&$===n(h)&&(O?(I(g),g=-1):O=!0,Zt(D,Y-we))):($.sortIndex=ne,e(u,$),P||A||(P=!0,pn(F))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var G=y;return function(){var Y=y;y=G;try{return $.apply(this,arguments)}finally{y=Y}}}})(Cy);ky.exports=Cy;var BE=ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE=se,zt=BE;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Py=new Set,wo={};function fi(t,e){Zi(t,e),Zi(t+"Capture",e)}function Zi(t,e){for(wo[t]=e,t=0;t<e.length;t++)Py.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,$E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zp={},Bp={};function HE(t){return jc.call(Bp,t)?!0:jc.call(zp,t)?!1:$E.test(t)?Bp[t]=!0:(zp[t]=!0,!1)}function qE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WE(t,e,n,r){if(e===null||typeof e>"u"||qE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ad,ld);lt[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ad,ld);lt[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ad,ld);lt[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WE(e,n,i,r)&&(n=null),r||i===null?HE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=jE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),xy=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Dy=Symbol.for("react.offscreen"),jp=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,tc;function Qs(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function KE(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Ni:return"Portal";case $c:return"Profiler";case cd:return"StrictMode";case Hc:return"Suspense";case qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xy:return(t.displayName||"Context")+".Consumer";case Ny:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function GE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QE(t){var e=Oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=QE(t))}function Vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kc(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function by(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function Gc(t,e){by(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qc(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qc(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Xs(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function Ly(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function My(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?My(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,Uy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XE=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){XE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function Fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function zy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YE=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(YE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,Hi=null,qi=null;function Kp(t){if(t=Xo(t)){if(typeof th!="function")throw Error(U(280));var e=t.stateNode;e&&(e=fu(e),th(t.stateNode,t.type,e))}}function By(t){Hi?qi?qi.push(t):qi=[t]:Hi=t}function jy(){if(Hi){var t=Hi,e=qi;if(qi=Hi=null,Kp(t),e)for(t=0;t<e.length;t++)Kp(e[t])}}function $y(t,e){return t(e)}function Hy(){}var ic=!1;function qy(t,e,n){if(ic)return t(e,n);ic=!0;try{return $y(t,e,n)}finally{ic=!1,(Hi!==null||qi!==null)&&(Hy(),jy())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var nh=!1;if(Fn)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){nh=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{nh=!1}function JE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var io=!1,Il=null,Sl=!1,rh=null,ZE={onError:function(t){io=!0,Il=t}};function eT(t,e,n,r,i,s,o,l,u){io=!1,Il=null,JE.apply(ZE,arguments)}function tT(t,e,n,r,i,s,o,l,u){if(eT.apply(this,arguments),io){if(io){var h=Il;io=!1,Il=null}else throw Error(U(198));Sl||(Sl=!0,rh=h)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(pi(t)!==t)throw Error(U(188))}function nT(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gp(i),t;if(s===r)return Gp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Ky(t){return t=nT(t),t!==null?Gy(t):null}function Gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gy(t);if(e!==null)return e;t=t.sibling}return null}var Qy=zt.unstable_scheduleCallback,Qp=zt.unstable_cancelCallback,rT=zt.unstable_shouldYield,iT=zt.unstable_requestPaint,Be=zt.unstable_now,sT=zt.unstable_getCurrentPriorityLevel,pd=zt.unstable_ImmediatePriority,Xy=zt.unstable_UserBlockingPriority,Al=zt.unstable_NormalPriority,oT=zt.unstable_LowPriority,Yy=zt.unstable_IdlePriority,uu=null,_n=null;function aT(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:cT,lT=Math.log,uT=Math.LN2;function cT(t){return t>>>=0,t===0?32:31-(lT(t)/uT|0)|0}var ba=64,La=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ys(l):(s&=o,s!==0&&(r=Ys(s)))}else o=n&~i,o!==0?r=Ys(o):s!==0&&(r=Ys(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function hT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=hT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jy(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function fT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function Zy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e_,gd,t_,n_,r_,sh=!1,Ma=[],mr=null,gr=null,yr=null,Io=new Map,So=new Map,sr=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xo(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mT(t,e,n,r,i){switch(e){case"focusin":return mr=zs(mr,t,e,n,r,i),!0;case"dragenter":return gr=zs(gr,t,e,n,r,i),!0;case"mouseover":return yr=zs(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Io.set(s,zs(Io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,So.set(s,zs(So.get(s)||null,t,e,n,r,i)),!0}return!1}function i_(t){var e=Kr(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=Wy(n),e!==null){t.blockedOn=e,r_(t.priority,function(){t_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);eh=r,n.target.dispatchEvent(r),eh=null}else return e=Xo(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function Yp(t,e,n){rl(t)&&n.delete(e)}function gT(){sh=!1,mr!==null&&rl(mr)&&(mr=null),gr!==null&&rl(gr)&&(gr=null),yr!==null&&rl(yr)&&(yr=null),Io.forEach(Yp),So.forEach(Yp)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,gT)))}function Ao(t){function e(i){return Bs(i,t)}if(0<Ma.length){Bs(Ma[0],t);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Bs(mr,t),gr!==null&&Bs(gr,t),yr!==null&&Bs(yr,t),Io.forEach(e),So.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)i_(n),n.blockedOn===null&&sr.shift()}var Wi=Gn.ReactCurrentBatchConfig,kl=!0;function yT(t,e,n,r){var i=ye,s=Wi.transition;Wi.transition=null;try{ye=1,yd(t,e,n,r)}finally{ye=i,Wi.transition=s}}function _T(t,e,n,r){var i=ye,s=Wi.transition;Wi.transition=null;try{ye=4,yd(t,e,n,r)}finally{ye=i,Wi.transition=s}}function yd(t,e,n,r){if(kl){var i=oh(t,e,n,r);if(i===null)mc(t,e,r,Cl,n),Xp(t,r);else if(mT(i,t,e,n,r))r.stopPropagation();else if(Xp(t,r),e&4&&-1<pT.indexOf(t)){for(;i!==null;){var s=Xo(i);if(s!==null&&e_(s),s=oh(t,e,n,r),s===null&&mc(t,e,r,Cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var Cl=null;function oh(t,e,n,r){if(Cl=null,t=fd(r),t=Kr(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function s_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sT()){case pd:return 1;case Xy:return 4;case Al:case oT:return 16;case Yy:return 536870912;default:return 16}default:return 16}}var dr=null,_d=null,il=null;function o_(){if(il)return il;var t,e=_d,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return il=i.slice(t,1<r?1-r:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function Jp(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:Jp,this.isPropagationStopped=Jp,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=jt(ps),Qo=De({},ps,{view:0,detail:0}),vT=jt(Qo),oc,ac,js,cu=De({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(oc=t.screenX-js.screenX,ac=t.screenY-js.screenY):ac=oc=0,js=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Zp=jt(cu),wT=De({},cu,{dataTransfer:0}),ET=jt(wT),TT=De({},Qo,{relatedTarget:0}),lc=jt(TT),IT=De({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),ST=jt(IT),AT=De({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RT=jt(AT),kT=De({},ps,{data:0}),em=jt(kT),CT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NT[t])?!!e[t]:!1}function wd(){return xT}var DT=De({},Qo,{key:function(t){if(t.key){var e=CT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OT=jt(DT),VT=De({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=jt(VT),bT=De({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),LT=jt(bT),MT=De({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),UT=jt(MT),FT=De({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zT=jt(FT),BT=[9,13,27,32],Ed=Fn&&"CompositionEvent"in window,so=null;Fn&&"documentMode"in document&&(so=document.documentMode);var jT=Fn&&"TextEvent"in window&&!so,a_=Fn&&(!Ed||so&&8<so&&11>=so),nm=String.fromCharCode(32),rm=!1;function l_(t,e){switch(t){case"keyup":return BT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function $T(t,e){switch(t){case"compositionend":return u_(e);case"keypress":return e.which!==32?null:(rm=!0,nm);case"textInput":return t=e.data,t===nm&&rm?null:t;default:return null}}function HT(t,e){if(Di)return t==="compositionend"||!Ed&&l_(t,e)?(t=o_(),il=_d=dr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a_&&e.locale!=="ko"?null:e.data;default:return null}}var qT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qT[t.type]:e==="textarea"}function c_(t,e,n,r){By(r),e=Pl(e,"onChange"),0<e.length&&(n=new vd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oo=null,Ro=null;function WT(t){E_(t,0)}function hu(t){var e=bi(t);if(Vy(e))return t}function KT(t,e){if(t==="change")return e}var h_=!1;if(Fn){var uc;if(Fn){var cc="oninput"in document;if(!cc){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),cc=typeof sm.oninput=="function"}uc=cc}else uc=!1;h_=uc&&(!document.documentMode||9<document.documentMode)}function om(){oo&&(oo.detachEvent("onpropertychange",d_),Ro=oo=null)}function d_(t){if(t.propertyName==="value"&&hu(Ro)){var e=[];c_(e,Ro,t,fd(t)),qy(WT,e)}}function GT(t,e,n){t==="focusin"?(om(),oo=e,Ro=n,oo.attachEvent("onpropertychange",d_)):t==="focusout"&&om()}function QT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(Ro)}function XT(t,e){if(t==="click")return hu(e)}function YT(t,e){if(t==="input"||t==="change")return hu(e)}function JT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:JT;function ko(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jc.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,e){var n=am(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=am(n)}}function f_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p_(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZT(t){var e=p_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f_(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lm(n,s);var o=lm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eI=Fn&&"documentMode"in document&&11>=document.documentMode,Oi=null,ah=null,ao=null,lh=!1;function um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||Oi==null||Oi!==Tl(r)||(r=Oi,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&ko(ao,r)||(ao=r,r=Pl(ah,"onSelect"),0<r.length&&(e=new vd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},hc={},m_={};Fn&&(m_=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function du(t){if(hc[t])return hc[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m_)return hc[t]=e[n];return t}var g_=du("animationend"),y_=du("animationiteration"),__=du("animationstart"),v_=du("transitionend"),w_=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){w_.set(t,e),fi(e,[t])}for(var dc=0;dc<cm.length;dc++){var fc=cm[dc],tI=fc.toLowerCase(),nI=fc[0].toUpperCase()+fc.slice(1);Vr(tI,"on"+nI)}Vr(g_,"onAnimationEnd");Vr(y_,"onAnimationIteration");Vr(__,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(v_,"onTransitionEnd");Zi("onMouseEnter",["mouseout","mouseover"]);Zi("onMouseLeave",["mouseout","mouseover"]);Zi("onPointerEnter",["pointerout","pointerover"]);Zi("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tT(r,e,void 0,t),t.currentTarget=null}function E_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;hm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;hm(i,l,h),s=u}}}if(Sl)throw t=rh,Sl=!1,rh=null,t}function Ae(t,e){var n=e[fh];n===void 0&&(n=e[fh]=new Set);var r=t+"__bubble";n.has(r)||(T_(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),T_(n,t,r,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[za]){t[za]=!0,Py.forEach(function(n){n!=="selectionchange"&&(rI.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,pc("selectionchange",!1,e))}}function T_(t,e,n,r){switch(s_(e)){case 1:var i=yT;break;case 4:i=_T;break;default:i=yd}n=i.bind(null,e,n,t),i=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qy(function(){var h=s,f=fd(n),m=[];e:{var y=w_.get(t);if(y!==void 0){var A=vd,P=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":A=OT;break;case"focusin":P="focus",A=lc;break;case"focusout":P="blur",A=lc;break;case"beforeblur":case"afterblur":A=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=ET;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=LT;break;case g_:case y_:case __:A=ST;break;case v_:A=UT;break;case"scroll":A=vT;break;case"wheel":A=zT;break;case"copy":case"cut":case"paste":A=RT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=tm}var O=(e&4)!==0,b=!O&&t==="scroll",I=O?y!==null?y+"Capture":null:y;O=[];for(var _=h,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=To(_,I),D!=null&&O.push(Po(_,D,S)))),b)break;_=_.return}0<O.length&&(y=new A(y,P,null,n,f),m.push({event:y,listeners:O}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==eh&&(P=n.relatedTarget||n.fromElement)&&(Kr(P)||P[zn]))break e;if((A||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Kr(P):null,P!==null&&(b=pi(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(O=Zp,D="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(O=tm,D="onPointerLeave",I="onPointerEnter",_="pointer"),b=A==null?y:bi(A),S=P==null?y:bi(P),y=new O(D,_+"leave",A,n,f),y.target=b,y.relatedTarget=S,D=null,Kr(f)===h&&(O=new O(I,_+"enter",P,n,f),O.target=S,O.relatedTarget=b,D=O),b=D,A&&P)t:{for(O=A,I=P,_=0,S=O;S;S=Ri(S))_++;for(S=0,D=I;D;D=Ri(D))S++;for(;0<_-S;)O=Ri(O),_--;for(;0<S-_;)I=Ri(I),S--;for(;_--;){if(O===I||I!==null&&O===I.alternate)break t;O=Ri(O),I=Ri(I)}O=null}else O=null;A!==null&&dm(m,y,A,O,!1),P!==null&&b!==null&&dm(m,b,P,O,!0)}}e:{if(y=h?bi(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var F=KT;else if(im(y))if(h_)F=YT;else{F=QT;var B=GT}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=XT);if(F&&(F=F(t,h))){c_(m,F,n,f);break e}B&&B(t,y,h),t==="focusout"&&(B=y._wrapperState)&&B.controlled&&y.type==="number"&&Qc(y,"number",y.value)}switch(B=h?bi(h):window,t){case"focusin":(im(B)||B.contentEditable==="true")&&(Oi=B,ah=h,ao=null);break;case"focusout":ao=ah=Oi=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,um(m,n,f);break;case"selectionchange":if(eI)break;case"keydown":case"keyup":um(m,n,f)}var w;if(Ed)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Di?l_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(a_&&n.locale!=="ko"&&(Di||g!=="onCompositionStart"?g==="onCompositionEnd"&&Di&&(w=o_()):(dr=f,_d="value"in dr?dr.value:dr.textContent,Di=!0)),B=Pl(h,g),0<B.length&&(g=new em(g,t,null,n,f),m.push({event:g,listeners:B}),w?g.data=w:(w=u_(n),w!==null&&(g.data=w)))),(w=jT?$T(t,n):HT(t,n))&&(h=Pl(h,"onBeforeInput"),0<h.length&&(f=new em("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}E_(m,e)})}function Po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=To(t,n),s!=null&&r.unshift(Po(t,s,i)),s=To(t,e),s!=null&&r.push(Po(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=To(n,s),u!=null&&o.unshift(Po(n,u,l))):i||(u=To(n,s),u!=null&&o.push(Po(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iI=/\r\n?/g,sI=/\u0000|\uFFFD/g;function fm(t){return(typeof t=="string"?t:""+t).replace(iI,`
`).replace(sI,"")}function Ba(t,e,n){if(e=fm(e),fm(t)!==e&&n)throw Error(U(425))}function Nl(){}var uh=null,ch=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,oI=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,aI=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(lI)}:dh;function lI(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),yn="__reactFiber$"+ms,No="__reactProps$"+ms,zn="__reactContainer$"+ms,fh="__reactEvents$"+ms,uI="__reactListeners$"+ms,cI="__reactHandles$"+ms;function Kr(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mm(t);t!==null;){if(n=t[yn])return n;t=mm(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[yn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function fu(t){return t[No]||null}var ph=[],Li=-1;function br(t){return{current:t}}function ke(t){0>Li||(t.current=ph[Li],ph[Li]=null,Li--)}function Te(t,e){Li++,ph[Li]=t.current,t.current=e}var Cr={},wt=br(Cr),Nt=br(!1),ni=Cr;function es(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function xl(){ke(Nt),ke(wt)}function gm(t,e,n){if(wt.current!==Cr)throw Error(U(168));Te(wt,e),Te(Nt,n)}function I_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,GE(t)||"Unknown",i));return De({},n,r)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ni=wt.current,Te(wt,t),Te(Nt,Nt.current),!0}function ym(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=I_(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,ke(Nt),ke(wt),Te(wt,t)):ke(Nt),Te(Nt,n)}var Nn=null,pu=!1,yc=!1;function S_(t){Nn===null?Nn=[t]:Nn.push(t)}function hI(t){pu=!0,S_(t)}function Lr(){if(!yc&&Nn!==null){yc=!0;var t=0,e=ye;try{var n=Nn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,pu=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),Qy(pd,Lr),i}finally{ye=e,yc=!1}}return null}var Mi=[],Ui=0,Ol=null,Vl=0,Wt=[],Kt=0,ri=null,xn=1,Dn="";function Hr(t,e){Mi[Ui++]=Vl,Mi[Ui++]=Ol,Ol=t,Vl=e}function A_(t,e,n){Wt[Kt++]=xn,Wt[Kt++]=Dn,Wt[Kt++]=ri,ri=t;var r=xn;t=Dn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-cn(e)+i|n<<i|r,Dn=s+t}else xn=1<<s|n<<i|r,Dn=t}function Id(t){t.return!==null&&(Hr(t,1),A_(t,1,0))}function Sd(t){for(;t===Ol;)Ol=Mi[--Ui],Mi[Ui]=null,Vl=Mi[--Ui],Mi[Ui]=null;for(;t===ri;)ri=Wt[--Kt],Wt[Kt]=null,Dn=Wt[--Kt],Wt[Kt]=null,xn=Wt[--Kt],Wt[Kt]=null}var Ut=null,Lt=null,Ce=!1,an=null;function R_(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ri!==null?{id:xn,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Lt=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(Ce){var e=Lt;if(e){var n=e;if(!_m(t,e)){if(mh(t))throw Error(U(418));e=_r(n.nextSibling);var r=Ut;e&&_m(t,e)?R_(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Ut=t)}}else{if(mh(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ce=!1,Ut=t}}}function vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function ja(t){if(t!==Ut)return!1;if(!Ce)return vm(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=Lt)){if(mh(t))throw k_(),Error(U(418));for(;e;)R_(t,e),e=_r(e.nextSibling)}if(vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Ut?_r(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=Lt;t;)t=_r(t.nextSibling)}function ts(){Lt=Ut=null,Ce=!1}function Ad(t){an===null?an=[t]:an.push(t)}var dI=Gn.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function C_(t){function e(I,_){if(t){var S=I.deletions;S===null?(I.deletions=[_],I.flags|=16):S.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=Tr(I,_),I.index=0,I.sibling=null,I}function s(I,_,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<_?(I.flags|=2,_):S):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,S,D){return _===null||_.tag!==6?(_=Sc(S,I.mode,D),_.return=I,_):(_=i(_,S),_.return=I,_)}function u(I,_,S,D){var F=S.type;return F===xi?f(I,_,S.props.children,D,S.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===rr&&wm(F)===_.type)?(D=i(_,S.props),D.ref=$s(I,_,S),D.return=I,D):(D=dl(S.type,S.key,S.props,null,I.mode,D),D.ref=$s(I,_,S),D.return=I,D)}function h(I,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Ac(S,I.mode,D),_.return=I,_):(_=i(_,S.children||[]),_.return=I,_)}function f(I,_,S,D,F){return _===null||_.tag!==7?(_=Jr(S,I.mode,D,F),_.return=I,_):(_=i(_,S),_.return=I,_)}function m(I,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Sc(""+_,I.mode,S),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:return S=dl(_.type,_.key,_.props,null,I.mode,S),S.ref=$s(I,null,_),S.return=I,S;case Ni:return _=Ac(_,I.mode,S),_.return=I,_;case rr:var D=_._init;return m(I,D(_._payload),S)}if(Xs(_)||Us(_))return _=Jr(_,I.mode,S,null),_.return=I,_;$a(I,_)}return null}function y(I,_,S,D){var F=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(I,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:return S.key===F?u(I,_,S,D):null;case Ni:return S.key===F?h(I,_,S,D):null;case rr:return F=S._init,y(I,_,F(S._payload),D)}if(Xs(S)||Us(S))return F!==null?null:f(I,_,S,D,null);$a(I,S)}return null}function A(I,_,S,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,l(_,I,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Da:return I=I.get(D.key===null?S:D.key)||null,u(_,I,D,F);case Ni:return I=I.get(D.key===null?S:D.key)||null,h(_,I,D,F);case rr:var B=D._init;return A(I,_,S,B(D._payload),F)}if(Xs(D)||Us(D))return I=I.get(S)||null,f(_,I,D,F,null);$a(_,D)}return null}function P(I,_,S,D){for(var F=null,B=null,w=_,g=_=0,v=null;w!==null&&g<S.length;g++){w.index>g?(v=w,w=null):v=w.sibling;var E=y(I,w,S[g],D);if(E===null){w===null&&(w=v);break}t&&w&&E.alternate===null&&e(I,w),_=s(E,_,g),B===null?F=E:B.sibling=E,B=E,w=v}if(g===S.length)return n(I,w),Ce&&Hr(I,g),F;if(w===null){for(;g<S.length;g++)w=m(I,S[g],D),w!==null&&(_=s(w,_,g),B===null?F=w:B.sibling=w,B=w);return Ce&&Hr(I,g),F}for(w=r(I,w);g<S.length;g++)v=A(w,I,g,S[g],D),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?g:v.key),_=s(v,_,g),B===null?F=v:B.sibling=v,B=v);return t&&w.forEach(function(R){return e(I,R)}),Ce&&Hr(I,g),F}function O(I,_,S,D){var F=Us(S);if(typeof F!="function")throw Error(U(150));if(S=F.call(S),S==null)throw Error(U(151));for(var B=F=null,w=_,g=_=0,v=null,E=S.next();w!==null&&!E.done;g++,E=S.next()){w.index>g?(v=w,w=null):v=w.sibling;var R=y(I,w,E.value,D);if(R===null){w===null&&(w=v);break}t&&w&&R.alternate===null&&e(I,w),_=s(R,_,g),B===null?F=R:B.sibling=R,B=R,w=v}if(E.done)return n(I,w),Ce&&Hr(I,g),F;if(w===null){for(;!E.done;g++,E=S.next())E=m(I,E.value,D),E!==null&&(_=s(E,_,g),B===null?F=E:B.sibling=E,B=E);return Ce&&Hr(I,g),F}for(w=r(I,w);!E.done;g++,E=S.next())E=A(w,I,g,E.value,D),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?g:E.key),_=s(E,_,g),B===null?F=E:B.sibling=E,B=E);return t&&w.forEach(function(C){return e(I,C)}),Ce&&Hr(I,g),F}function b(I,_,S,D){if(typeof S=="object"&&S!==null&&S.type===xi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:e:{for(var F=S.key,B=_;B!==null;){if(B.key===F){if(F=S.type,F===xi){if(B.tag===7){n(I,B.sibling),_=i(B,S.props.children),_.return=I,I=_;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===rr&&wm(F)===B.type){n(I,B.sibling),_=i(B,S.props),_.ref=$s(I,B,S),_.return=I,I=_;break e}n(I,B);break}else e(I,B);B=B.sibling}S.type===xi?(_=Jr(S.props.children,I.mode,D,S.key),_.return=I,I=_):(D=dl(S.type,S.key,S.props,null,I.mode,D),D.ref=$s(I,_,S),D.return=I,I=D)}return o(I);case Ni:e:{for(B=S.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(I,_.sibling),_=i(_,S.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=Ac(S,I.mode,D),_.return=I,I=_}return o(I);case rr:return B=S._init,b(I,_,B(S._payload),D)}if(Xs(S))return P(I,_,S,D);if(Us(S))return O(I,_,S,D);$a(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,S),_.return=I,I=_):(n(I,_),_=Sc(S,I.mode,D),_.return=I,I=_),o(I)):n(I,_)}return b}var ns=C_(!0),P_=C_(!1),bl=br(null),Ll=null,Fi=null,Rd=null;function kd(){Rd=Fi=Ll=null}function Cd(t){var e=bl.current;ke(bl),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ki(t,e){Ll=t,Rd=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(Ll===null)throw Error(U(308));Fi=t,Ll.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Gr=null;function Pd(t){Gr===null?Gr=[t]:Gr.push(t)}function N_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,Pd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}function Em(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,O=l;switch(y=e,A=n,O.tag){case 1:if(P=O.payload,typeof P=="function"){m=P.call(A,m,y);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=O.payload,y=typeof P=="function"?P.call(A,m,y):P,y==null)break e;m=De({},m,y);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);si|=o,t.lanes=o,t.memoizedState=m}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Yo={},vn=br(Yo),xo=br(Yo),Do=br(Yo);function Qr(t){if(t===Yo)throw Error(U(174));return t}function xd(t,e){switch(Te(Do,e),Te(xo,t),Te(vn,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}ke(vn),Te(vn,e)}function rs(){ke(vn),ke(xo),ke(Do)}function D_(t){Qr(Do.current);var e=Qr(vn.current),n=Yc(e,t.type);e!==n&&(Te(xo,t),Te(vn,n))}function Dd(t){xo.current===t&&(ke(vn),ke(xo))}var Ne=br(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Od(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var al=Gn.ReactCurrentDispatcher,vc=Gn.ReactCurrentBatchConfig,ii=0,xe=null,Ke=null,Je=null,Fl=!1,lo=!1,Oo=0,fI=0;function pt(){throw Error(U(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function bd(t,e,n,r,i,s){if(ii=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?yI:_I,t=n(r,i),lo){s=0;do{if(lo=!1,Oo=0,25<=s)throw Error(U(301));s+=1,Je=Ke=null,e.updateQueue=null,al.current=vI,t=n(r,i)}while(lo)}if(al.current=zl,e=Ke!==null&&Ke.next!==null,ii=0,Je=Ke=xe=null,Fl=!1,e)throw Error(U(300));return t}function Ld(){var t=Oo!==0;return Oo=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?xe.memoizedState=Je=t:Je=Je.next=t,Je}function Jt(){if(Ke===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Je===null?xe.memoizedState:Je.next;if(e!==null)Je=e,Ke=t;else{if(t===null)throw Error(U(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?xe.memoizedState=Je=t:Je=Je.next=t}return Je}function Vo(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((ii&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=f,si|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,dn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function O_(){}function V_(t,e){var n=xe,r=Jt(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,Md(M_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,bo(9,L_.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(U(349));ii&30||b_(n,e,i)}return i}function b_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,r){e.value=n,e.getSnapshot=r,U_(e)&&F_(t)}function M_(t,e,n){return n(function(){U_(e)&&F_(t)})}function U_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function F_(t){var e=Bn(t,1);e!==null&&hn(e,t,1,-1)}function Im(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=gI.bind(null,xe,t),[e.memoizedState,t]}function bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function z_(){return Jt().memoizedState}function ll(t,e,n,r){var i=gn();xe.flags|=t,i.memoizedState=bo(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&Vd(r,o.deps)){i.memoizedState=bo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=bo(1|e,n,s,r)}function Sm(t,e){return ll(8390656,8,t,e)}function Md(t,e){return mu(2048,8,t,e)}function B_(t,e){return mu(4,2,t,e)}function j_(t,e){return mu(4,4,t,e)}function $_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function H_(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,$_.bind(null,e,t),n)}function Ud(){}function q_(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function W_(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return ii&21?(dn(n,e)||(n=Jy(),xe.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function pI(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=vc.transition;vc.transition={};try{t(!1),e()}finally{ye=n,vc.transition=r}}function G_(){return Jt().memoizedState}function mI(t,e,n){var r=Er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Q_(t))X_(e,n);else if(n=N_(t,e,n,r),n!==null){var i=At();hn(n,t,r,i),Y_(n,e,r)}}function gI(t,e,n){var r=Er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q_(t))X_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,o)){var u=e.interleaved;u===null?(i.next=i,Pd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=N_(t,e,i,r),n!==null&&(i=At(),hn(n,t,r,i),Y_(n,e,r))}}function Q_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function X_(t,e){lo=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}var zl={readContext:Yt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},yI={readContext:Yt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,$_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mI.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:Ud,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=pI.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=gn();if(Ce){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ze===null)throw Error(U(349));ii&30||b_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sm(M_.bind(null,r,s,t),[t]),r.flags|=2048,bo(9,L_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=Ze.identifierPrefix;if(Ce){var n=Dn,r=xn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_I={readContext:Yt,useCallback:q_,useContext:Yt,useEffect:Md,useImperativeHandle:H_,useInsertionEffect:B_,useLayoutEffect:j_,useMemo:W_,useReducer:wc,useRef:z_,useState:function(){return wc(Vo)},useDebugValue:Ud,useDeferredValue:function(t){var e=Jt();return K_(e,Ke.memoizedState,t)},useTransition:function(){var t=wc(Vo)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:V_,useId:G_,unstable_isNewReconciler:!1},vI={readContext:Yt,useCallback:q_,useContext:Yt,useEffect:Md,useImperativeHandle:H_,useInsertionEffect:B_,useLayoutEffect:j_,useMemo:W_,useReducer:Ec,useRef:z_,useState:function(){return Ec(Vo)},useDebugValue:Ud,useDeferredValue:function(t){var e=Jt();return Ke===null?e.memoizedState=t:K_(e,Ke.memoizedState,t)},useTransition:function(){var t=Ec(Vo)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:V_,useId:G_,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=Er(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(hn(e,t,i,r),ol(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=Er(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(hn(e,t,i,r),ol(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=Er(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(hn(e,t,r,n),ol(e,t,r))}};function Am(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(n,r)||!ko(i,s):!0}function J_(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=xt(e)?ni:wt.current,r=e.contextTypes,s=(r=r!=null)?es(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=xt(e)?ni:wt.current,i.context=es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Ml(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e){try{var n="",r=e;do n+=KE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wI=typeof WeakMap=="function"?WeakMap:Map;function Z_(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,Nh=r),wh(t,e)},n}function ev(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wh(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VI.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var EI=Gn.ReactCurrentOwner,Pt=!1;function St(t,e,n,r){e.child=t===null?P_(e,null,n,r):ns(e,t.child,n,r)}function Nm(t,e,n,r,i){n=n.render;var s=e.ref;return Ki(e,i),r=bd(t,e,n,r,s,i),n=Ld(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ce&&n&&Id(e),e.flags|=1,St(t,e,r,i),e.child)}function xm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tv(t,e,s,r,i)):(t=dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function tv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ko(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,jn(t,e,i)}return Eh(t,e,n,r,i)}function nv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Bi,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Bi,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Bi,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Bi,bt),bt|=r;return St(t,e,i,n),e.child}function rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,r,i){var s=xt(n)?ni:wt.current;return s=es(e,s),Ki(e,i),n=bd(t,e,n,r,s,i),r=Ld(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ce&&r&&Id(e),e.flags|=1,St(t,e,n,i),e.child)}function Dm(t,e,n,r,i){if(xt(n)){var s=!0;Dl(e)}else s=!1;if(Ki(e,i),e.stateNode===null)ul(t,e),J_(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Yt(h):(h=xt(n)?ni:wt.current,h=es(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Rm(e,o,r,h),ir=!1;var y=e.memoizedState;o.state=y,Ml(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Nt.current||ir?(typeof f=="function"&&(_h(e,n,f,r),u=e.memoizedState),(l=ir||Am(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,x_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:sn(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=xt(n)?ni:wt.current,u=es(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Rm(e,o,r,u),ir=!1,y=e.memoizedState,o.state=y,Ml(e,r,o,i);var P=e.memoizedState;l!==m||y!==P||Nt.current||ir?(typeof A=="function"&&(_h(e,n,A,r),P=e.memoizedState),(h=ir||Am(e,n,h,r,y,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Th(t,e,n,r,s,i)}function Th(t,e,n,r,i,s){rv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ym(e,n,!1),jn(t,e,s);r=e.stateNode,EI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ns(e,t.child,null,s),e.child=ns(e,null,l,s)):St(t,e,l,s),e.memoizedState=r.state,i&&ym(e,n,!0),e.child}function iv(t){var e=t.stateNode;e.pendingContext?gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(t,e.context,!1),xd(t,e.containerInfo)}function Om(t,e,n,r,i){return ts(),Ad(i),e.flags|=256,St(t,e,n,r),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function sv(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Ne,i&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vu(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Ih,t):Fd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return TI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tr(l,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fd(t,e){return e=vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,r){return r!==null&&Ad(r),ns(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(U(422))),Ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vu({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ns(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return Ha(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Tc(s,r,void 0),Ha(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pt||l){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),hn(r,t,i,-1))}return qd(),r=Tc(Error(U(421))),Ha(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=_r(i.nextSibling),Ut=e,Ce=!0,an=null,t!==null&&(Wt[Kt++]=xn,Wt[Kt++]=Dn,Wt[Kt++]=ri,xn=t.id,Dn=t.overflow,ri=e),e=Fd(e,r.children),e.flags|=4096,e)}function Vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yh(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ov(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(St(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,n,e);else if(t.tag===19)Vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function II(t,e,n){switch(e.tag){case 3:iv(e),ts();break;case 5:D_(e);break;case 1:xt(e.type)&&Dl(e);break;case 4:xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(bl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?sv(t,e,n):(Te(Ne,Ne.current&1),t=jn(t,e,n),t!==null?t.sibling:null);Te(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ov(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,nv(t,e,n)}return jn(t,e,n)}var av,Ah,lv,uv;av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};lv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(vn.current);var s=null;switch(n){case"input":i=Kc(t,i),r=Kc(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Xc(t,i),r=Xc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nl)}Jc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(wo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(wo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ae("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};uv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SI(t,e,n){var r=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return xt(e.type)&&xl(),mt(e),null;case 3:return r=e.stateNode,rs(),ke(Nt),ke(wt),Od(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Oh(an),an=null))),Ah(t,e),mt(e),null;case 5:Dd(e);var i=Qr(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)lv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return mt(e),null}if(t=Qr(vn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[No]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)Ae(Js[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":$p(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":qp(r,s),Ae("invalid",r)}Jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",""+l]):wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Oa(r),Hp(r,s,!0);break;case"textarea":Oa(r),Wp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Nl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=My(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[No]=r,av(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)Ae(Js[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":$p(t,r),i=Kc(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":qp(t,r),i=Xc(t,r),Ae("invalid",t);break;default:i=r}Jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?zy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Eo(t,u):typeof u=="number"&&Eo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&ud(t,s,u,o))}switch(n){case"input":Oa(t),Hp(t,r,!1);break;case"textarea":Oa(t),Wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Qr(Do.current),Qr(vn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return mt(e),null;case 13:if(ke(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Lt!==null&&e.mode&1&&!(e.flags&128))k_(),ts(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[yn]=e}else ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else an!==null&&(Oh(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Ge===0&&(Ge=3):qd())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return rs(),Ah(t,e),t===null&&Co(e.stateNode.containerInfo),mt(e),null;case 10:return Cd(e.type._context),mt(e),null;case 17:return xt(e.type)&&xl(),mt(e),null;case 19:if(ke(Ne),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Hs(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=128,Hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>ss&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return mt(e),null}else 2*Be()-s.renderingStartTime>ss&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=Ne.current,Te(Ne,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function AI(t,e){switch(Sd(e),e.tag){case 1:return xt(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),ke(Nt),ke(wt),Od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(ke(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ne),null;case 4:return rs(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var qa=!1,_t=!1,RI=typeof WeakSet=="function"?WeakSet:Set,H=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Rh(t,e,n){try{n()}catch(r){Le(t,e,r)}}var bm=!1;function kI(t,e){if(uh=kl,t=p_(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)y=m,m=A;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ch={focusedElem:t,selectionRange:n},kl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var O=P.memoizedProps,b=P.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?O:sn(e.type,O),b);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Le(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=bm,bm=!1,P}function uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rh(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cv(t){var e=t.alternate;e!==null&&(t.alternate=null,cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[No],delete e[fh],delete e[uI],delete e[cI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var rt=null,on=!1;function tr(t,e,n){for(n=n.child;n!==null;)dv(t,e,n),n=n.sibling}function dv(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:_t||zi(n,e);case 6:var r=rt,i=on;rt=null,tr(t,e,n),rt=r,on=i,rt!==null&&(on?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(on?(t=rt,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),Ao(t)):gc(rt,n.stateNode));break;case 4:r=rt,i=on,rt=n.stateNode.containerInfo,on=!0,tr(t,e,n),rt=r,on=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rh(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!_t&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,e,l)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,tr(t,e,n),_t=r):tr(t,e,n);break;default:tr(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RI),e.forEach(function(r){var i=LI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,on=!1;break e;case 3:rt=l.stateNode.containerInfo,on=!0;break e;case 4:rt=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(rt===null)throw Error(U(160));dv(s,o,i),rt=null,on=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Le(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fv(e,t),e=e.sibling}function fv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),mn(t),r&4){try{uo(3,t,t.return),yu(3,t)}catch(O){Le(t,t.return,O)}try{uo(5,t,t.return)}catch(O){Le(t,t.return,O)}}break;case 1:rn(e,t),mn(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if(rn(e,t),mn(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{Eo(i,"")}catch(O){Le(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&by(i,s),Zc(l,o);var h=Zc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?zy(i,m):f==="dangerouslySetInnerHTML"?Uy(i,m):f==="children"?Eo(i,m):ud(i,f,m,h)}switch(l){case"input":Gc(i,s);break;case"textarea":Ly(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?$i(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[No]=s}catch(O){Le(t,t.return,O)}}break;case 6:if(rn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){Le(t,t.return,O)}}break;case 3:if(rn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(O){Le(t,t.return,O)}break;case 4:rn(e,t),mn(t);break;case 13:rn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jd=Be())),r&4&&Mm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(h=_t)||f,rn(e,t),_t=h):rn(e,t),mn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(y=H,A=y.child,y.tag){case 0:case 11:case 14:case 15:uo(4,y,y.return);break;case 1:zi(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(O){Le(r,n,O)}}break;case 5:zi(y,y.return);break;case 22:if(y.memoizedState!==null){Fm(m);continue}}A!==null?(A.return=y,H=A):Fm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Fy("display",o))}catch(O){Le(t,t.return,O)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(O){Le(t,t.return,O)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:rn(e,t),mn(t),r&4&&Mm(t);break;case 21:break;default:rn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Eo(i,""),r.flags&=-33);var s=Lm(t);Ph(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lm(t);Ch(t,l,o);break;default:throw Error(U(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CI(t,e,n){H=t,pv(t)}function pv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||_t;l=qa;var h=_t;if(qa=o,(_t=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?zm(i):u!==null?(u.return=o,H=u):zm(i);for(;s!==null;)H=s,pv(s),s=s.sibling;H=i,qa=l,_t=h}Um(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Um(t)}}function Um(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ao(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}_t||e.flags&512&&kh(e)}catch(y){Le(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Fm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function zm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{kh(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{kh(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var PI=Math.ceil,Bl=Gn.ReactCurrentDispatcher,zd=Gn.ReactCurrentOwner,Xt=Gn.ReactCurrentBatchConfig,de=0,Ze=null,He=null,ot=0,bt=0,Bi=br(0),Ge=0,Lo=null,si=0,_u=0,Bd=0,co=null,Ct=null,jd=0,ss=1/0,Pn=null,jl=!1,Nh=null,wr=null,Wa=!1,fr=null,$l=0,ho=0,xh=null,cl=-1,hl=0;function At(){return de&6?Be():cl!==-1?cl:cl=Be()}function Er(t){return t.mode&1?de&2&&ot!==0?ot&-ot:dI.transition!==null?(hl===0&&(hl=Jy()),hl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:s_(t.type)),t):1}function hn(t,e,n,r){if(50<ho)throw ho=0,xh=null,Error(U(185));Go(t,n,r),(!(de&2)||t!==Ze)&&(t===Ze&&(!(de&2)&&(_u|=n),Ge===4&&or(t,ot)),Dt(t,r),n===1&&de===0&&!(e.mode&1)&&(ss=Be()+500,pu&&Lr()))}function Dt(t,e){var n=t.callbackNode;dT(t,e);var r=Rl(t,t===Ze?ot:0);if(r===0)n!==null&&Qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qp(n),e===1)t.tag===0?hI(Bm.bind(null,t)):S_(Bm.bind(null,t)),aI(function(){!(de&6)&&Lr()}),n=null;else{switch(Zy(r)){case 1:n=pd;break;case 4:n=Xy;break;case 16:n=Al;break;case 536870912:n=Yy;break;default:n=Al}n=Tv(n,mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mv(t,e){if(cl=-1,hl=0,de&6)throw Error(U(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=Rl(t,t===Ze?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hl(t,r);else{e=r;var i=de;de|=2;var s=yv();(Ze!==t||ot!==e)&&(Pn=null,ss=Be()+500,Yr(t,e));do try{DI();break}catch(l){gv(t,l)}while(1);kd(),Bl.current=s,de=i,He!==null?e=0:(Ze=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(i=ih(t),i!==0&&(r=i,e=Dh(t,i))),e===1)throw n=Lo,Yr(t,0),or(t,r),Dt(t,Be()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!NI(i)&&(e=Hl(t,r),e===2&&(s=ih(t),s!==0&&(r=s,e=Dh(t,s))),e===1))throw n=Lo,Yr(t,0),or(t,r),Dt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:qr(t,Ct,Pn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=jd+500-Be(),10<e)){if(Rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dh(qr.bind(null,t,Ct,Pn),e);break}qr(t,Ct,Pn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PI(r/1960))-r,10<r){t.timeoutHandle=dh(qr.bind(null,t,Ct,Pn),r);break}qr(t,Ct,Pn);break;case 5:qr(t,Ct,Pn);break;default:throw Error(U(329))}}}return Dt(t,Be()),t.callbackNode===n?mv.bind(null,t):null}function Dh(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Oh(e)),t}function Oh(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function NI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Bd,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function Bm(t){if(de&6)throw Error(U(327));Gi();var e=Rl(t,0);if(!(e&1))return Dt(t,Be()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=Lo,Yr(t,0),or(t,e),Dt(t,Be()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,Ct,Pn),Dt(t,Be()),null}function $d(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(ss=Be()+500,pu&&Lr())}}function oi(t){fr!==null&&fr.tag===0&&!(de&6)&&Gi();var e=de;de|=1;var n=Xt.transition,r=ye;try{if(Xt.transition=null,ye=1,t)return t()}finally{ye=r,Xt.transition=n,de=e,!(de&6)&&Lr()}}function Hd(){bt=Bi.current,ke(Bi)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oI(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:rs(),ke(Nt),ke(wt),Od();break;case 5:Dd(r);break;case 4:rs();break;case 13:ke(Ne);break;case 19:ke(Ne);break;case 10:Cd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(Ze=t,He=t=Tr(t.current,null),ot=bt=e,Ge=0,Lo=null,Bd=_u=si=0,Ct=co=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function gv(t,e){do{var n=He;try{if(kd(),al.current=zl,Fl){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fl=!1}if(ii=0,Je=Ke=xe=null,lo=!1,Oo=0,zd.current=null,n===null||n.return===null){Ge=1,Lo=e,He=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Cm(o);if(A!==null){A.flags&=-257,Pm(A,o,l,s,e),A.mode&1&&km(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var O=new Set;O.add(u),e.updateQueue=O}else P.add(u);break e}else{if(!(e&1)){km(s,h,e),qd();break e}u=Error(U(426))}}else if(Ce&&l.mode&1){var b=Cm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Pm(b,o,l,s,e),Ad(is(u,l));break e}}s=u=is(u,l),Ge!==4&&(Ge=2),co===null?co=[s]:co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Z_(s,u,e);Em(s,I);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(wr===null||!wr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=ev(s,l,e);Em(s,D);break e}}s=s.return}while(s!==null)}vv(n)}catch(F){e=F,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function yv(){var t=Bl.current;return Bl.current=zl,t===null?zl:t}function qd(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ze===null||!(si&268435455)&&!(_u&268435455)||or(Ze,ot)}function Hl(t,e){var n=de;de|=2;var r=yv();(Ze!==t||ot!==e)&&(Pn=null,Yr(t,e));do try{xI();break}catch(i){gv(t,i)}while(1);if(kd(),de=n,Bl.current=r,He!==null)throw Error(U(261));return Ze=null,ot=0,Ge}function xI(){for(;He!==null;)_v(He)}function DI(){for(;He!==null&&!rT();)_v(He)}function _v(t){var e=Ev(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?vv(t):He=e,zd.current=null}function vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AI(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,He=null;return}}else if(n=SI(n,e,bt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ge===0&&(Ge=5)}function qr(t,e,n){var r=ye,i=Xt.transition;try{Xt.transition=null,ye=1,OI(t,e,n,r)}finally{Xt.transition=i,ye=r}return null}function OI(t,e,n,r){do Gi();while(fr!==null);if(de&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fT(t,s),t===Ze&&(He=Ze=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,Tv(Al,function(){return Gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=ye;ye=1;var l=de;de|=4,zd.current=null,kI(t,n),fv(n,t),ZT(ch),kl=!!uh,ch=uh=null,t.current=n,CI(n),iT(),de=l,ye=o,Xt.transition=s}else t.current=n;if(Wa&&(Wa=!1,fr=t,$l=i),s=t.pendingLanes,s===0&&(wr=null),aT(n.stateNode),Dt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=Nh,Nh=null,t;return $l&1&&t.tag!==0&&Gi(),s=t.pendingLanes,s&1?t===xh?ho++:(ho=0,xh=t):ho=0,Lr(),null}function Gi(){if(fr!==null){var t=Zy($l),e=Xt.transition,n=ye;try{if(Xt.transition=null,ye=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,$l=0,de&6)throw Error(U(331));var i=de;for(de|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:uo(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var y=f.sibling,A=f.return;if(cv(f),f===h){H=null;break}if(y!==null){y.return=A,H=y;break}H=A}}}var P=s.alternate;if(P!==null){var O=P.child;if(O!==null){P.child=null;do{var b=O.sibling;O.sibling=null,O=b}while(O!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(F){Le(l,l.return,F)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(de=i,Lr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{ye=n,Xt.transition=e}}return!1}function jm(t,e,n){e=is(n,e),e=Z_(t,e,1),t=vr(t,e,1),e=At(),t!==null&&(Go(t,1,e),Dt(t,e))}function Le(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=is(n,t),t=ev(e,t,1),e=vr(e,t,1),t=At(),e!==null&&(Go(e,1,t),Dt(e,t));break}}e=e.return}}function VI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(ot&n)===n&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>Be()-jd?Yr(t,0):Bd|=n),Dt(t,e)}function wv(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=At();t=Bn(t,e),t!==null&&(Go(t,e,n),Dt(t,n))}function bI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wv(t,n)}function LI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),wv(t,n)}var Ev;Ev=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,II(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,Ce&&e.flags&1048576&&A_(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ul(t,e),t=e.pendingProps;var i=es(e,wt.current);Ki(e,n),i=bd(null,e,r,t,i,n);var s=Ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Dl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nd(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=Th(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&Id(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UI(r),t=sn(r,t),i){case 0:e=Eh(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=Nm(null,e,r,t,n);break e;case 14:e=xm(null,e,r,sn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Eh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Dm(t,e,r,i,n);case 3:e:{if(iv(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,x_(t,e),Ml(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=is(Error(U(423)),e),e=Om(t,e,r,n,i);break e}else if(r!==i){i=is(Error(U(424)),e),e=Om(t,e,r,n,i);break e}else for(Lt=_r(e.stateNode.containerInfo.firstChild),Ut=e,Ce=!0,an=null,n=P_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ts(),r===i){e=jn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return D_(e),t===null&&gh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hh(r,i)?o=null:s!==null&&hh(r,s)&&(e.flags|=32),rv(t,e),St(t,e,o,n),e.child;case 6:return t===null&&gh(e),null;case 13:return sv(t,e,n);case 4:return xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ns(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Nm(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(bl,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Nt.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ki(e,n),i=Yt(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),xm(t,e,r,i,n);case 15:return tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),ul(t,e),e.tag=1,xt(r)?(t=!0,Dl(e)):t=!1,Ki(e,n),J_(e,r,i),vh(e,r,i,n),Th(null,e,r,!0,t,n);case 19:return ov(t,e,n);case 22:return nv(t,e,n)}throw Error(U(156,e.tag))};function Tv(t,e){return Qy(t,e)}function MI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new MI(t,e,n,r)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UI(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===dd)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return Jr(n.children,i,s,e);case cd:o=8,i|=8;break;case $c:return t=Qt(12,n,e,i|2),t.elementType=$c,t.lanes=s,t;case Hc:return t=Qt(13,n,e,i),t.elementType=Hc,t.lanes=s,t;case qc:return t=Qt(19,n,e,i),t.elementType=qc,t.lanes=s,t;case Dy:return vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ny:o=10;break e;case xy:o=9;break e;case hd:o=11;break e;case dd:o=14;break e;case rr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function vu(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=Dy,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,r,i,s,o,l,u){return t=new FI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function zI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Iv(t){if(!t)return Cr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(xt(n))return I_(t,n,e)}return e}function Sv(t,e,n,r,i,s,o,l,u){return t=Kd(n,r,!0,t,i,s,o,l,u),t.context=Iv(null),n=t.current,r=At(),i=Er(n),s=Mn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,Go(t,i,r),Dt(t,r),t}function wu(t,e,n,r){var i=e.current,s=At(),o=Er(i);return n=Iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(hn(t,i,o,s),ol(t,i,o)),o}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function BI(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}Eu.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));wu(t,e,null,null)};Eu.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oi(function(){wu(null,t,null,null)}),e[zn]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=n_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&i_(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function jI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ql(o);s.call(h)}}var o=Sv(e,r,t,0,null,!1,!1,"",Hm);return t._reactRootContainer=o,t[zn]=o.current,Co(t.nodeType===8?t.parentNode:t),oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ql(u);l.call(h)}}var u=Kd(t,0,!1,null,null,!1,!1,"",Hm);return t._reactRootContainer=u,t[zn]=u.current,Co(t.nodeType===8?t.parentNode:t),oi(function(){wu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ql(o);l.call(u)}}wu(e,o,t,i)}else o=jI(n,e,t,i,r);return ql(o)}e_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(md(e,n|1),Dt(e,Be()),!(de&6)&&(ss=Be()+500,Lr()))}break;case 13:oi(function(){var r=Bn(t,1);if(r!==null){var i=At();hn(r,t,1,i)}}),Gd(t,1)}};gd=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=At();hn(e,t,134217728,n)}Gd(t,134217728)}};t_=function(t){if(t.tag===13){var e=Er(t),n=Bn(t,e);if(n!==null){var r=At();hn(n,t,e,r)}Gd(t,e)}};n_=function(){return ye};r_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};th=function(t,e,n){switch(e){case"input":if(Gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(U(90));Vy(r),Gc(r,i)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};$y=$d;Hy=oi;var $I={usingClientEntryPoint:!1,Events:[Xo,bi,fu,By,jy,$d]},qs={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HI={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ky(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||BI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{uu=Ka.inject(HI),_n=Ka}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$I;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(U(200));return zI(t,e,null,n)};Bt.createRoot=function(t,e){if(!Xd(t))throw Error(U(299));var n=!1,r="",i=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,Co(t.nodeType===8?t.parentNode:t),new Qd(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Ky(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return oi(t)};Bt.hydrate=function(t,e,n){if(!Tu(e))throw Error(U(200));return Iu(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sv(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};Bt.render=function(t,e,n){if(!Tu(e))throw Error(U(200));return Iu(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(U(40));return t._reactRootContainer?(oi(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Bt.unstable_batchedUpdates=$d;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Iu(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Ry.exports=Bt;var qI=Ry.exports,qm=qI;Bc.createRoot=qm.createRoot,Bc.hydrateRoot=qm.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(y=64)),r.push(n[f],n[m],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new KI;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GI=function(t){const e=kv(t);return Cv.encodeByteArray(e,!0)},Wl=function(t){return GI(t).replace(/\./g,"")},Pv=function(t){try{return Cv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=()=>QI().__FIREBASE_DEFAULTS__,YI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pv(t[1]);return e&&JSON.parse(e)},Su=()=>{try{return XI()||YI()||JI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nv=t=>{var e,n;return(n=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xv=t=>{const e=Nv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dv=()=>{var t;return(t=Su())===null||t===void 0?void 0:t.config},Ov=t=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Wl(JSON.stringify(n)),Wl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function t1(){var t;const e=(t=Su())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function i1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s1(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function o1(){return!t1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function a1(){try{return typeof indexedDB=="object"}catch{return!1}}function l1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=u1,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?c1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function c1(t,e){return t.replace(h1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const h1=/\{\$([^}]+)}/g;function d1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wm(s)&&Wm(o)){if(!Kl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function f1(t,e){const n=new p1(t,e);return n.subscribe.bind(n)}class p1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");m1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rc),i.error===void 0&&(i.error=Rc),i.complete===void 0&&(i.complete=Rc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_1(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y1(t){return t===Wr?void 0:t}function _1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const w1={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},E1=ce.INFO,T1={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},I1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=T1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yd{constructor(e){this.name=e,this._logLevel=E1,this._logHandler=I1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const S1=(t,e)=>e.some(n=>t instanceof n);let Km,Gm;function A1(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R1(){return Gm||(Gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bv=new WeakMap,Vh=new WeakMap,Lv=new WeakMap,kc=new WeakMap,Jd=new WeakMap;function k1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bv.set(n,t)}).catch(()=>{}),Jd.set(e,t),e}function C1(t){if(Vh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vh.set(t,e)}let bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P1(t){bh=t(bh)}function N1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return Lv.set(r,e.sort?e.sort():[e]),Ir(r)}:R1().includes(t)?function(...e){return t.apply(Cc(this),e),Ir(bv.get(this))}:function(...e){return Ir(t.apply(Cc(this),e))}}function x1(t){return typeof t=="function"?N1(t):(t instanceof IDBTransaction&&C1(t),S1(t,A1())?new Proxy(t,bh):t)}function Ir(t){if(t instanceof IDBRequest)return k1(t);if(kc.has(t))return kc.get(t);const e=x1(t);return e!==t&&(kc.set(t,e),Jd.set(e,t)),e}const Cc=t=>Jd.get(t);function D1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ir(o.result),u.oldVersion,u.newVersion,Ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const O1=["get","getKey","getAll","getAllKeys","count"],V1=["put","add","delete","clear"],Pc=new Map;function Qm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=V1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Pc.set(e,s),s}P1(t=>({...t,get:(e,n,r)=>Qm(e,n)||t.get(e,n,r),has:(e,n)=>!!Qm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function L1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lh="@firebase/app",Xm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Yd("@firebase/app"),M1="@firebase/app-compat",U1="@firebase/analytics-compat",F1="@firebase/analytics",z1="@firebase/app-check-compat",B1="@firebase/app-check",j1="@firebase/auth",$1="@firebase/auth-compat",H1="@firebase/database",q1="@firebase/data-connect",W1="@firebase/database-compat",K1="@firebase/functions",G1="@firebase/functions-compat",Q1="@firebase/installations",X1="@firebase/installations-compat",Y1="@firebase/messaging",J1="@firebase/messaging-compat",Z1="@firebase/performance",eS="@firebase/performance-compat",tS="@firebase/remote-config",nS="@firebase/remote-config-compat",rS="@firebase/storage",iS="@firebase/storage-compat",sS="@firebase/firestore",oS="@firebase/vertexai-preview",aS="@firebase/firestore-compat",lS="firebase",uS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="[DEFAULT]",cS={[Lh]:"fire-core",[M1]:"fire-core-compat",[F1]:"fire-analytics",[U1]:"fire-analytics-compat",[B1]:"fire-app-check",[z1]:"fire-app-check-compat",[j1]:"fire-auth",[$1]:"fire-auth-compat",[H1]:"fire-rtdb",[q1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[K1]:"fire-fn",[G1]:"fire-fn-compat",[Q1]:"fire-iid",[X1]:"fire-iid-compat",[Y1]:"fire-fcm",[J1]:"fire-fcm-compat",[Z1]:"fire-perf",[eS]:"fire-perf-compat",[tS]:"fire-rc",[nS]:"fire-rc-compat",[rS]:"fire-gcs",[iS]:"fire-gcs-compat",[sS]:"fire-fst",[aS]:"fire-fst-compat",[oS]:"fire-vertex","fire-js":"fire-js",[lS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Map,hS=new Map,Uh=new Map;function Ym(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(Uh.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of Gl.values())Ym(n,t);for(const n of hS.values())Ym(n,t);return!0}function Au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function On(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new Jo("app","Firebase",dS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=uS;function Mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=Dv()),!n)throw Sr.create("no-options");const s=Gl.get(i);if(s){if(Kl(n,s.options)&&Kl(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new v1(i);for(const u of Uh.values())o.addComponent(u);const l=new fS(n,r,o);return Gl.set(i,l),l}function Zd(t=Mh){const e=Gl.get(t);if(!e&&t===Mh&&Dv())return Mv();if(!e)throw Sr.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let i=(r=cS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}ai(new Pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="firebase-heartbeat-database",mS=1,Mo="firebase-heartbeat-store";let Nc=null;function Uv(){return Nc||(Nc=D1(pS,mS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function gS(t){try{const n=(await Uv()).transaction(Mo),r=await n.objectStore(Mo).get(Fv(t));return await n.done,r}catch(e){if(e instanceof Rn)$n.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Jm(t,e){try{const r=(await Uv()).transaction(Mo,"readwrite");await r.objectStore(Mo).put(e,Fv(t)),await r.done}catch(n){if(n instanceof Rn)$n.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function Fv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=1024,_S=30*24*60*60*1e3;class vS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ES(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_S}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zm(),{heartbeatsToSend:r,unsentEntries:i}=wS(this._heartbeatsCache.heartbeats),s=Wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function Zm(){return new Date().toISOString().substring(0,10)}function wS(t,e=yS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),eg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),eg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ES{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a1()?l1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function eg(t){return Wl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){ai(new Pr("platform-logger",e=>new b1(e),"PRIVATE")),ai(new Pr("heartbeat",e=>new vS(e),"PRIVATE")),wn(Lh,Xm,t),wn(Lh,Xm,"esm2017"),wn("fire-js","")}TS("");var IS="firebase",SS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(IS,SS,"app");function ef(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AS=zv,Bv=new Jo("auth","Firebase",zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Yd("@firebase/auth");function RS(t,...e){Ql.logLevel<=ce.WARN&&Ql.warn(`Auth (${mi}): ${t}`,...e)}function fl(t,...e){Ql.logLevel<=ce.ERROR&&Ql.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,...e){throw tf(t,...e)}function En(t,...e){return tf(t,...e)}function jv(t,e,n){const r=Object.assign(Object.assign({},AS()),{[e]:n});return new Jo("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return jv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bv.create(t,...e)}function Q(t,e,...n){if(!t)throw tf(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function qn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kS(){return tg()==="http:"||tg()==="https:"}function tg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kS()||r1()||"connection"in navigator)?navigator.onLine:!0}function PS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=e1()||i1()}get(){return CS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=new ea(3e4,6e4);function Ru(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,i={}){return Hv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Zo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return n1()||(h.referrerPolicy="no-referrer"),$v.fetch()(Wv(t,t.config.apiHost,n,l),h)})}async function Hv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NS),e);try{const i=new DS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ga(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jv(t,f,h);Hn(t,f)}}catch(i){if(i instanceof Rn)throw i;Hn(t,"network-request-failed",{message:String(i)})}}async function qv(t,e,n,r,i={}){const s=await gs(t,e,n,r,i);return"mfaPendingCredential"in s&&Hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Wv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`}class DS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function Kv(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(t,e=!1){const n=ut(t),r=await n.getIdToken(e),i=rf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fo(xc(i.auth_time)),issuedAtTime:fo(xc(i.iat)),expirationTime:fo(xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pv(n);return i?JSON.parse(i):(fl("Failed to decode base64 JWT payload"),null)}catch(i){return fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ng(t){const e=rf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&bS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,Kv(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gv(s.providerUserInfo):[],l=US(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function MS(t){const e=ut(t);await Xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function US(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Gv(t){return t.map(e=>{var{providerId:n}=e,r=ef(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t,e){const n=await Hv(t,{},async()=>{const r=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Wv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$v.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zS(t,e){return gs(t,"POST","/v2/accounts:revokeToken",Ru(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=ng(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VS(this,e)}reload(){return MS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await Uo(this,OS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:D,isAnonymous:F,providerData:B,stsTokenManager:w}=n;Q(S&&w,e,"internal-error");const g=Qi.fromJSON(this.name,w);Q(typeof S=="string",e,"internal-error"),nr(m,e.name),nr(y,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof F=="boolean",e,"internal-error"),nr(A,e.name),nr(P,e.name),nr(O,e.name),nr(b,e.name),nr(I,e.name),nr(_,e.name);const v=new bn({uid:S,auth:e,email:y,emailVerified:D,displayName:m,isAnonymous:F,photoURL:P,phoneNumber:A,tenantId:O,stsTokenManager:g,createdAt:I,lastLoginAt:_});return B&&Array.isArray(B)&&(v.providerData=B.map(E=>Object.assign({},E))),b&&(v._redirectEventId=b),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const s=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Gv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Qi;l.updateFromIdToken(r);const u=new bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new Map;function Ln(t){qn(t instanceof Function,"Expected a class definition");let e=rg.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qv.type="NONE";const ig=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(Ln(ig),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Ln(ig);const o=pl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=bn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t0(e))return"Blackberry";if(n0(e))return"Webos";if(Yv(e))return"Safari";if((e.includes("chrome/")||Jv(e))&&!e.includes("edge/"))return"Chrome";if(e0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xv(t=Et()){return/firefox\//i.test(t)}function Yv(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jv(t=Et()){return/crios\//i.test(t)}function Zv(t=Et()){return/iemobile/i.test(t)}function e0(t=Et()){return/android/i.test(t)}function t0(t=Et()){return/blackberry/i.test(t)}function n0(t=Et()){return/webos/i.test(t)}function sf(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BS(t=Et()){var e;return sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jS(){return s1()&&document.documentMode===10}function r0(t=Et()){return sf(t)||e0(t)||n0(t)||t0(t)||/windows phone/i.test(t)||Zv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e=[]){let n;switch(t){case"Browser":n=sg(Et());break;case"Worker":n=`${sg(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e={}){return gs(t,"GET","/v2/passwordPolicy",Ru(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=6;class WS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new og(this),this.idTokenSubscription=new og(this),this.beforeStateQueue=new $S(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kv(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(On(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(On(this.app))return Promise.reject(Ar(this));const n=e?ut(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return On(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HS(this),n=new WS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ku(t){return ut(t)}class og{constructor(e){this.auth=e,this.observer=null,this.addObserver=f1(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GS(t){of=t}function QS(t){return of.loadJS(t)}function XS(){return of.gapiScript}function YS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e){const n=Au(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kl(s,e??{}))return i;Hn(i,"already-initialized")}return n.initialize({options:e})}function ZS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eA(t,e,n){const r=ku(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=s0(e),{host:o,port:l}=tA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nA()}function s0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tA(t){const e=s0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ag(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ag(o)}}}function ag(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return qv(t,"POST","/v1/accounts:signInWithIdp",Ru(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="http://localhost";class li extends o0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ef(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:rA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends a0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ta{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return li._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ta{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ta{constructor(){super("twitter.com")}static credential(e,n){return li._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e){return qv(t,"POST","/v1/accounts:signUp",Ru(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bn._fromIdTokenResponse(e,r,i),o=lg(r);return new Nr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lg(r);return new Nr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t){var e;if(On(t.app))return Promise.reject(Ar(t));const n=ku(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await iA(n,{returnSecureToken:!0}),i=await Nr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yl(e,n,r,i)}}function l0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(t,s,e,r):s})}async function oA(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e,n=!1){const{auth:r}=t;if(On(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const s=await Uo(t,l0(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=rf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Nr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e,n=!1){if(On(t.app))return Promise.reject(Ar(t));const r="signIn",i=await l0(t,r,e),s=await Nr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function uA(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function cA(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const Jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=1e3,dA=10;class c0 extends u0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c0.type="LOCAL";const fA=c0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0 extends u0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h0.type="SESSION";const d0=h0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await pA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=af("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function gA(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function yA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _A(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vA(){return f0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="firebaseLocalStorageDb",wA=1,Zl="firebaseLocalStorage",m0="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pu(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function EA(){const t=indexedDB.deleteDatabase(p0);return new na(t).toPromise()}function Bh(){const t=indexedDB.open(p0,wA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zl,{keyPath:m0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zl)?e(r):(r.close(),await EA(),e(await Bh()))})})}async function ug(t,e,n){const r=Pu(t,!0).put({[m0]:e,value:n});return new na(r).toPromise()}async function TA(t,e){const n=Pu(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function cg(t,e){const n=Pu(t,!0).delete(e);return new na(n).toPromise()}const IA=800,SA=3;class g0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(vA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yA(),!this.activeServiceWorker)return;this.sender=new mA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_A()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bh();return await ug(e,Jl,"1"),await cg(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ug(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pu(i,!1).getAll();return new na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g0.type="LOCAL";const AA=g0;new ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t,e){return e?Ln(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends o0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kA(t){return lA(t.auth,new lf(t),t.bypassAuthState)}function CA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),aA(n,new lf(t),t.bypassAuthState)}async function PA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),oA(n,new lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kA;case"linkViaPopup":case"linkViaRedirect":return PA;case"reauthViaPopup":case"reauthViaRedirect":return CA;default:Hn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new ea(2e3,1e4);class ji extends y0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NA.get())};e()}}ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="pendingRedirect",ml=new Map;class DA extends y0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const r=await OA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OA(t,e){const n=LA(e),r=bA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function VA(t,e){ml.set(t._key(),e)}function bA(t){return Ln(t._redirectPersistence)}function LA(t){return pl(xA,t.config.apiKey,t.name)}async function MA(t,e,n=!1){if(On(t.app))return Promise.reject(Ar(t));const r=ku(t),i=RA(r,e),o=await new DA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=10*60*1e3;class FA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UA&&this.cachedEventUids.clear(),this.cachedEventUids.has(hg(e))}saveEventToCache(e){this.cachedEventUids.add(hg(e)),this.lastProcessedEventTime=Date.now()}}function hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$A=/^https?/;async function HA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BA(t);for(const n of e)try{if(qA(n))return}catch{}Hn(t,"unauthorized-domain")}function qA(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$A.test(n))return!1;if(jA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new ea(3e4,6e4);function dg(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KA(t){return new Promise((e,n)=>{var r,i,s;function o(){dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dg(),n(En(t,"network-request-failed"))},timeout:WA.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tn().gapi)===null||s===void 0)&&s.load)o();else{const l=YS("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},QS(`${XS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw gl=null,e})}let gl=null;function GA(t){return gl=gl||KA(t),gl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new ea(5e3,15e3),XA="__/auth/iframe",YA="emulator/auth/iframe",JA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eR(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,YA):`https://${t.config.authDomain}/${XA}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=ZA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zo(r).slice(1)}`}async function tR(t){const e=await GA(t),n=Tn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:eR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),l=Tn().setTimeout(()=>{s(o)},QA.get());function u(){Tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rR=500,iR=600,sR="_blank",oR="http://localhost";class fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aR(t,e,n,r=rR,i=iR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},nR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Et().toLowerCase();n&&(l=Jv(h)?sR:n),Xv(h)&&(e=e||oR,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[A,P])=>`${y}${A}=${P},`,"");if(BS(h)&&l!=="_self")return lR(e||"",l),new fg(null);const m=window.open(e||"",l,f);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new fg(m)}function lR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="__/auth/handler",cR="emulator/auth/handler",hR=encodeURIComponent("fac");async function pg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof a0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",d1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof ta){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${hR}=${encodeURIComponent(u)}`:"";return`${dR(t)}?${Zo(l).slice(1)}${h}`}function dR({config:t}){return t.emulator?nf(t,cR):`https://${t.authDomain}/${uR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class fR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d0,this._completeRedirectFn=MA,this._overrideRedirectResult=VA}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pg(e,n,r,Fh(),i);return aR(e,o,af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await pg(e,n,r,Fh(),i);return gA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tR(e),r=new FA(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dc];o!==void 0&&n(!!o),Hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r0()||Yv()||sf()}}const pR=fR;var mg="@firebase/auth",gg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yR(t){ai(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i0(t)},h=new KS(r,i,s,u);return ZS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new Pr("auth-internal",e=>{const n=ku(e.getProvider("auth").getImmediate());return(r=>new mR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(mg,gg,gR(t)),wn(mg,gg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=5*60,vR=Ov("authIdTokenMaxAge")||_R;let yg=null;const wR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vR)return;const i=n==null?void 0:n.token;yg!==i&&(yg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ER(t=Zd()){const e=Au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JS(t,{popupRedirectResolver:pR,persistence:[AA,fA,d0]}),r=Ov("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wR(s.toString());cA(n,o,()=>o(n.currentUser)),uA(n,l=>o(l))}}const i=Nv("auth");return i&&eA(n,`http://${i}`),n}function TR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yR("Browser");var _g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,v0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,R,C){for(var T=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)T[ae-2]=arguments[ae];return g.prototype[R].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var R=0;16>R;++R)E[R]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(R=0;16>R;++R)E[R]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],R=w.g[2];var C=w.g[3],T=g+(C^v&(R^C))+E[0]+3614090360&4294967295;g=v+(T<<7&4294967295|T>>>25),T=C+(R^g&(v^R))+E[1]+3905402710&4294967295,C=g+(T<<12&4294967295|T>>>20),T=R+(v^C&(g^v))+E[2]+606105819&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(g^R&(C^g))+E[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=g+(C^v&(R^C))+E[4]+4118548399&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(R^g&(v^R))+E[5]+1200080426&4294967295,C=g+(T<<12&4294967295|T>>>20),T=R+(v^C&(g^v))+E[6]+2821735955&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(g^R&(C^g))+E[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=g+(C^v&(R^C))+E[8]+1770035416&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(R^g&(v^R))+E[9]+2336552879&4294967295,C=g+(T<<12&4294967295|T>>>20),T=R+(v^C&(g^v))+E[10]+4294925233&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(g^R&(C^g))+E[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=g+(C^v&(R^C))+E[12]+1804603682&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(R^g&(v^R))+E[13]+4254626195&4294967295,C=g+(T<<12&4294967295|T>>>20),T=R+(v^C&(g^v))+E[14]+2792965006&4294967295,R=C+(T<<17&4294967295|T>>>15),T=v+(g^R&(C^g))+E[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=g+(R^C&(v^R))+E[1]+4129170786&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(g^v))+E[6]+3225465664&4294967295,C=g+(T<<9&4294967295|T>>>23),T=R+(g^v&(C^g))+E[11]+643717713&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(R^C))+E[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=g+(R^C&(v^R))+E[5]+3593408605&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(g^v))+E[10]+38016083&4294967295,C=g+(T<<9&4294967295|T>>>23),T=R+(g^v&(C^g))+E[15]+3634488961&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(R^C))+E[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=g+(R^C&(v^R))+E[9]+568446438&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(g^v))+E[14]+3275163606&4294967295,C=g+(T<<9&4294967295|T>>>23),T=R+(g^v&(C^g))+E[3]+4107603335&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(R^C))+E[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=g+(R^C&(v^R))+E[13]+2850285829&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^R&(g^v))+E[2]+4243563512&4294967295,C=g+(T<<9&4294967295|T>>>23),T=R+(g^v&(C^g))+E[7]+1735328473&4294967295,R=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(R^C))+E[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=g+(v^R^C)+E[5]+4294588738&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^R)+E[8]+2272392833&4294967295,C=g+(T<<11&4294967295|T>>>21),T=R+(C^g^v)+E[11]+1839030562&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^g)+E[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=g+(v^R^C)+E[1]+2763975236&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^R)+E[4]+1272893353&4294967295,C=g+(T<<11&4294967295|T>>>21),T=R+(C^g^v)+E[7]+4139469664&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^g)+E[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=g+(v^R^C)+E[13]+681279174&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^R)+E[0]+3936430074&4294967295,C=g+(T<<11&4294967295|T>>>21),T=R+(C^g^v)+E[3]+3572445317&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^g)+E[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=g+(v^R^C)+E[9]+3654602809&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^R)+E[12]+3873151461&4294967295,C=g+(T<<11&4294967295|T>>>21),T=R+(C^g^v)+E[15]+530742520&4294967295,R=C+(T<<16&4294967295|T>>>16),T=v+(R^C^g)+E[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=g+(R^(v|~C))+E[0]+4096336452&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~R))+E[7]+1126891415&4294967295,C=g+(T<<10&4294967295|T>>>22),T=R+(g^(C|~v))+E[14]+2878612391&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~g))+E[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=g+(R^(v|~C))+E[12]+1700485571&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~R))+E[3]+2399980690&4294967295,C=g+(T<<10&4294967295|T>>>22),T=R+(g^(C|~v))+E[10]+4293915773&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~g))+E[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=g+(R^(v|~C))+E[8]+1873313359&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~R))+E[15]+4264355552&4294967295,C=g+(T<<10&4294967295|T>>>22),T=R+(g^(C|~v))+E[6]+2734768916&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~g))+E[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=g+(R^(v|~C))+E[4]+4149444226&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~R))+E[11]+3174756917&4294967295,C=g+(T<<10&4294967295|T>>>22),T=R+(g^(C|~v))+E[2]+718787259&4294967295,R=C+(T<<15&4294967295|T>>>17),T=v+(C^(R|~g))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,E=this.B,R=this.h,C=0;C<g;){if(R==0)for(;C<=v;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<g;)if(E[R++]=w.charCodeAt(C++),R==this.blockSize){i(this,E),R=0;break}}else for(;C<g;)if(E[R++]=w[C++],R==this.blockSize){i(this,E),R=0;break}}this.h=R,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)w[v++]=this.g[g]>>>E&255;return w};function s(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function o(w,g){this.h=g;for(var v=[],E=!0,R=w.length-1;0<=R;R--){var C=w[R]|0;E&&C==g||(v[R]=C,E=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return b(h(-w));for(var g=[],v=1,E=0;w>=v;E++)g[E]=w/v|0,v*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return b(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),E=m,R=0;R<w.length;R+=8){var C=Math.min(8,w.length-R),T=parseInt(w.substring(R,R+C),g);8>C?(C=h(Math.pow(g,C)),E=E.j(C).add(h(T))):(E=E.j(v),E=E.add(h(T)))}return E}var m=u(0),y=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(O(this))return-b(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(O(this))return"-"+b(this).toString(w);for(var g=h(Math.pow(w,6)),v=this,E="";;){var R=D(v,g).g;v=I(v,R.j(g));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=R,P(v))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=I(this,w),O(w)?-1:P(w)?0:1};function b(w){for(var g=w.g.length,v=[],E=0;E<g;E++)v[E]=~w.g[E];return new o(v,~w.h).add(y)}t.abs=function(){return O(this)?b(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0,R=0;R<=g;R++){var C=E+(this.i(R)&65535)+(w.i(R)&65535),T=(C>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);E=T>>>16,C&=65535,T&=65535,v[R]=T<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(w,g){return w.add(b(g))}t.j=function(w){if(P(this)||P(w))return m;if(O(this))return O(w)?b(this).j(b(w)):b(b(this).j(w));if(O(w))return b(this.j(b(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var R=0;R<w.g.length;R++){var C=this.i(E)>>>16,T=this.i(E)&65535,ae=w.i(R)>>>16,Ht=w.i(R)&65535;v[2*E+2*R]+=T*Ht,_(v,2*E+2*R),v[2*E+2*R+1]+=C*Ht,_(v,2*E+2*R+1),v[2*E+2*R+1]+=T*ae,_(v,2*E+2*R+1),v[2*E+2*R+2]+=C*ae,_(v,2*E+2*R+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new o(v,0)};function _(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function S(w,g){this.g=w,this.h=g}function D(w,g){if(P(g))throw Error("division by zero");if(P(w))return new S(m,m);if(O(w))return g=D(b(w),g),new S(b(g.g),b(g.h));if(O(g))return g=D(w,b(g)),new S(b(g.g),g.h);if(30<w.g.length){if(O(w)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var v=y,E=g;0>=E.l(w);)v=F(v),E=F(E);var R=B(v,1),C=B(E,1);for(E=B(E,2),v=B(v,2);!P(E);){var T=C.add(E);0>=T.l(w)&&(R=R.add(v),C=T),E=B(E,1),v=B(v,1)}return g=I(w,R.j(g)),new S(R,g)}for(R=m;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=h(v),T=C.j(g);O(T)||0<T.l(w);)v-=E,C=h(v),T=C.j(g);P(C)&&(C=y),R=R.add(C),w=I(w,T)}return new S(R,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&w.i(E);return new o(v,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|w.i(E);return new o(v,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^w.i(E);return new o(v,this.h^w.h)};function F(w){for(var g=w.g.length+1,v=[],E=0;E<g;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(v,w.h)}function B(w,g){var v=g>>5;g%=32;for(var E=w.g.length-v,R=[],C=0;C<E;C++)R[C]=0<g?w.i(C+v)>>>g|w.i(C+v+1)<<32-g:w.i(C+v);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,v0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Zr=o}).apply(typeof _g<"u"?_g:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var w0,Zs,E0,yl,jh,T0,I0,S0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var k=a[p];if(!(k in d))break e;d=d[k]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,k={next:function(){if(!p&&d<a.length){var x=d++;return{value:c(x,a[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,k,x){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return c.prototype[k].apply(p,j)}}function O(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function b(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const k=a.length||0,x=p.length||0;a.length=k+x;for(let j=0;j<x;j++)a[k+j]=p[j]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function B(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(d in p)a[d]=p[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ae{constructor(){this.h=this.g=null}add(c,d){const p=Ht.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Ht=new I(()=>new pn,a=>a.reset());class pn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Zt,$=!1,G=new ae,Y=()=>{const a=l.Promise.resolve(void 0);Zt=()=>{a.then(we)}};var we=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){C(d)}var c=Ht;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Pe(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{D(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ht[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pe.aa.h.call(this)}}P(Pe,Ie);var ht={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Ot=0;function Ts(a,c,d,p,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=k,this.key=++Ot,this.da=this.fa=!1}function Ur(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Qn(a){this.src=a,this.g={},this.h=0}Qn.prototype.add=function(a,c,d,p,k){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var j=Is(a,c,p,k);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new Ts(c,this.src,x,!!p,k),c.fa=d,a.push(c)),c};function _i(a,c){var d=c.type;if(d in a.g){var p=a.g[d],k=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=k)&&Array.prototype.splice.call(p,k,1),x&&(Ur(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Is(a,c,d,p){for(var k=0;k<a.length;++k){var x=a[k];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return k}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),vi={};function ua(a,c,d,p,k){if(p&&p.once)return da(a,c,d,p,k);if(Array.isArray(c)){for(var x=0;x<c.length;x++)ua(a,c[x],d,p,k);return null}return d=ks(d),a&&a[Ve]?a.K(c,d,h(p)?!!p.capture:!!p,k):ca(a,c,d,!1,p,k)}function ca(a,c,d,p,k,x){if(!c)throw Error("Invalid event type");var j=h(k)?!!k.capture:!!k,ve=Rs(a);if(ve||(a[Ss]=ve=new Qn(a)),d=ve.add(c,d,p,j,x),d.proxy)return d;if(p=ha(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)qt||(k=j),k===void 0&&(k=!1),a.addEventListener(c.toString(),p,k);else if(a.attachEvent)a.attachEvent(pa(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ha(){function a(d){return c.call(a.src,a.listener,d)}const c=Bu;return a}function da(a,c,d,p,k){if(Array.isArray(c)){for(var x=0;x<c.length;x++)da(a,c[x],d,p,k);return null}return d=ks(d),a&&a[Ve]?a.L(c,d,h(p)?!!p.capture:!!p,k):ca(a,c,d,!0,p,k)}function fa(a,c,d,p,k){if(Array.isArray(c))for(var x=0;x<c.length;x++)fa(a,c[x],d,p,k);else p=h(p)?!!p.capture:!!p,d=ks(d),a&&a[Ve]?(a=a.i,c=String(c).toString(),c in a.g&&(x=a.g[c],d=Is(x,d,p,k),-1<d&&(Ur(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[c],a.h--)))):a&&(a=Rs(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Is(c,d,p,k)),(d=-1<a?c[a]:null)&&As(d))}function As(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ve])_i(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(pa(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Rs(c))?(_i(d,a),d.h==0&&(d.src=null,c[Ss]=null)):Ur(a)}}}function pa(a){return a in vi?vi[a]:vi[a]="on"+a}function Bu(a,c){if(a.da)a=!0;else{c=new Pe(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&As(a),a=d.call(p,c)}return a}function Rs(a){return a=a[Ss],a instanceof Qn?a:null}var Xn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ks(a){return typeof a=="function"?a:(a[Xn]||(a[Xn]=function(c){return a.handleEvent(c)}),a[Xn])}function Xe(){ne.call(this),this.i=new Qn(this),this.M=this,this.F=null}P(Xe,ne),Xe.prototype[Ve]=!0,Xe.prototype.removeEventListener=function(a,c,d,p){fa(this,a,c,d,p)};function et(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var k=c;c=new Ie(p,a),E(c,k)}if(k=!0,d)for(var x=d.length-1;0<=x;x--){var j=c.g=d[x];k=Fr(j,p,!0,c)&&k}if(j=c.g=a,k=Fr(j,p,!0,c)&&k,k=Fr(j,p,!1,c)&&k,d)for(x=0;x<d.length;x++)j=c.g=d[x],k=Fr(j,p,!1,c)&&k}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Ur(d[p]);delete a.g[c],a.h--}}this.F=null},Xe.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Xe.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Fr(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,x=0;x<c.length;++x){var j=c[x];if(j&&!j.da&&j.capture==d){var ve=j.listener,nt=j.ha||j.src;j.fa&&_i(a.i,j),k=ve.call(nt,p)!==!1&&k}}return k&&!p.defaultPrevented}function ma(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Cs(a){a.g=ma(()=>{a.g=null,a.i&&(a.i=!1,Cs(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class wi extends ne{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(a){ne.call(this),this.h=a,this.g={}}P(Yn,ne);var N=[];function z(a){B(a.g,function(c,d){this.g.hasOwnProperty(d)&&As(c)},a),a.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),z(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ee=l.JSON.stringify,re=l.JSON.parse,me=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function le(){}le.prototype.h=null;function ie(a){return a.h||(a.h=a.i())}function ge(){}var Fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function te(){Ie.call(this,"d")}P(te,Ie);function Ee(){Ie.call(this,"c")}P(Ee,Ie);var je={},tt=null;function Tt(){return tt=tt||new Xe}je.La="serverreachability";function en(a){Ie.call(this,je.La,a)}P(en,Ie);function tn(a){const c=Tt();et(c,new en(c))}je.STAT_EVENT="statevent";function Ei(a,c){Ie.call(this,je.STAT_EVENT,a),this.stat=c}P(Ei,Ie);function We(a){const c=Tt();et(c,new Ei(c,a))}je.Ma="timingevent";function ga(a,c){Ie.call(this,je.Ma,a),this.size=c}P(ga,Ie);function zr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function nE(a,c,d,p,k,x){a.info(function(){if(a.g)if(x)for(var j="",ve=x.split("&"),nt=0;nt<ve.length;nt++){var fe=ve[nt].split("=");if(1<fe.length){var dt=fe[0];fe=fe[1];var ft=dt.split("_");j=2<=ft.length&&ft[1]=="type"?j+(dt+"="+fe+"&"):j+(dt+"=redacted&")}}else j=null;else j=x;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+c+`
`+d+`
`+j})}function rE(a,c,d,p,k,x,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+c+`
`+d+`
`+x+" "+j})}function Ti(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+sE(a,d)+(p?" "+p:"")})}function iE(a,c){a.info(function(){return"TIMEOUT: "+c})}Ps.prototype.info=function(){};function sE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return ee(d)}catch{return c}}var ya={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ju;function _a(){}P(_a,le),_a.prototype.g=function(){return new XMLHttpRequest},_a.prototype.i=function(){return{}},ju=new _a;function Jn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zf}function Zf(){this.i=null,this.g="",this.h=!1}var ep={},$u={};function Hu(a,c,d){a.L=1,a.v=Ta(kn(c)),a.m=d,a.P=!0,tp(a,null)}function tp(a,c){a.F=Date.now(),va(a),a.A=kn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),mp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Zf,a.g=Op(a.j,d?c:null,!a.m),0<a.O&&(a.M=new wi(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(N[0]=k.toString()),k=N);for(var x=0;x<k.length;x++){var j=ua(d,k[x],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),tn(),nE(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Cn(a)==3?c.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=Cn(this.g);var c=this.g.Ba();const Ai=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Tp(this.g)))){this.J||ft!=4||c==7||(c==8||0>=Ai?tn(3):tn(2)),qu(this);var d=this.g.Z();this.X=d;t:if(np(this)){var p=Tp(this.g);a="";var k=p.length,x=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Ns(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(x&&c==k-1)});p.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,rE(this.i,this.u,this.A,this.l,this.R,ft,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,nt=this.g;if((ve=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ve)){var fe=ve;break t}}fe=null}if(d=fe)Ti(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wu(this,d);else{this.o=!1,this.s=3,We(12),Br(this),Ns(this);break e}}if(this.P){d=!0;let nn;for(;!this.J&&this.C<j.length;)if(nn=oE(this,j),nn==$u){ft==4&&(this.s=4,We(14),d=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==ep){this.s=4,We(15),Ti(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Ti(this.i,this.l,nn,null),Wu(this,nn);if(np(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||j.length!=0||this.h.h||(this.s=1,We(16),d=!1),this.o=this.o&&d,!d)Ti(this.i,this.l,j,"[Invalid Chunked Response]"),Br(this),Ns(this);else if(0<j.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ju(dt),dt.M=!0,We(11))}}else Ti(this.i,this.l,j,null),Wu(this,j);ft==4&&Br(this),this.o&&!this.J&&(ft==4?Pp(this.j,this):(this.o=!1,va(this)))}else IE(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),Br(this),Ns(this)}}}catch{}finally{}};function np(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function oE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?$u:(d=Number(c.substring(d,p)),isNaN(d)?ep:(p+=1,p+d>c.length?$u:(c=c.slice(p,p+d),a.C=p+d,c)))}Jn.prototype.cancel=function(){this.J=!0,Br(this)};function va(a){a.S=Date.now()+a.I,rp(a,a.I)}function rp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zr(y(a.ba,a),c)}function qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(iE(this.i,this.A),this.L!=2&&(tn(),We(17)),Br(this),this.s=2,Ns(this)):rp(this,this.S-a)};function Ns(a){a.j.G==0||a.J||Pp(a.j,a)}function Br(a){qu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,z(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Wu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ku(d.h,a))){if(!a.K&&Ku(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ca(d),Ra(d);else break e;Yu(d),We(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=zr(y(d.Za,d),6e3));if(1>=op(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $r(d,11)}else if((a.K||d.g==a)&&Ca(d),!_(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let fe=k[c];if(d.T=fe[0],fe=fe[1],d.G==2)if(fe[0]=="c"){d.K=fe[1],d.ia=fe[2];const dt=fe[3];dt!=null&&(d.la=dt,d.j.info("VER="+d.la));const ft=fe[4];ft!=null&&(d.Aa=ft,d.j.info("SVER="+d.Aa));const Ai=fe[5];Ai!=null&&typeof Ai=="number"&&0<Ai&&(p=1.5*Ai,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const nn=a.g;if(nn){const Na=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Na){var x=p.h;x.g||Na.indexOf("spdy")==-1&&Na.indexOf("quic")==-1&&Na.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Gu(x,x.h),x.h=null))}if(p.D){const Zu=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(p.ya=Zu,Se(p.I,p.D,Zu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=a;if(p.qa=Dp(p,p.J?p.ia:null,p.W),j.K){ap(p.h,j);var ve=j,nt=p.L;nt&&(ve.I=nt),ve.B&&(qu(ve),va(ve)),p.g=j}else kp(p);0<d.i.length&&ka(d)}else fe[0]!="stop"&&fe[0]!="close"||$r(d,7);else d.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?$r(d,7):Xu(d):fe[0]!="noop"&&d.l&&d.l.ta(fe),d.v=0)}}tn(4)}catch{}}var aE=class{constructor(a,c){this.g=a,this.map=c}};function ip(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function op(a){return a.h?1:a.g?a.g.size:0}function Ku(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Gu(a,c){a.g?a.g.add(c):a.h=c}function ap(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ip.prototype.cancel=function(){if(this.i=lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return O(a.i)}function lE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function uE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function up(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=uE(a),p=lE(a),k=p.length,x=0;x<k;x++)c.call(void 0,p[x],d&&d[x],a)}var cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),k=null;if(0<=p){var x=a[d].substring(0,p);k=a[d].substring(p+1)}else x=a[d];c(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jr){this.h=a.h,wa(this,a.j),this.o=a.o,this.g=a.g,Ea(this,a.s),this.l=a.l;var c=a.i,d=new Os;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),hp(this,d),this.m=a.m}else a&&(c=String(a).match(cp))?(this.h=!1,wa(this,c[1]||"",!0),this.o=xs(c[2]||""),this.g=xs(c[3]||"",!0),Ea(this,c[4]),this.l=xs(c[5]||"",!0),hp(this,c[6]||"",!0),this.m=xs(c[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}jr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ds(c,dp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ds(c,dp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ds(d,d.charAt(0)=="/"?fE:dE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ds(d,mE)),a.join("")};function kn(a){return new jr(a)}function wa(a,c,d){a.j=d?xs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ea(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function hp(a,c,d){c instanceof Os?(a.i=c,gE(a.i,a.h)):(d||(c=Ds(c,pE)),a.i=new Os(c,a.h))}function Se(a,c,d){a.i.set(c,d)}function Ta(a){return Se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ds(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,hE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dp=/[#\/\?@]/g,dE=/[#\?:]/g,fE=/[#\?]/g,pE=/[#\?@]/g,mE=/#/g;function Os(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&cE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Os.prototype,t.add=function(a,c){Zn(this),this.i=null,a=Ii(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function fp(a,c){Zn(a),c=Ii(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function pp(a,c){return Zn(a),c=Ii(a,c),a.g.has(c)}t.forEach=function(a,c){Zn(this),this.g.forEach(function(d,p){d.forEach(function(k){a.call(c,k,p,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const k=a[p];for(let x=0;x<k.length;x++)d.push(c[p])}return d},t.V=function(a){Zn(this);let c=[];if(typeof a=="string")pp(this,a)&&(c=c.concat(this.g.get(Ii(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Zn(this),this.i=null,a=Ii(this,a),pp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function mp(a,c,d){fp(a,c),0<d.length&&(a.i=null,a.g.set(Ii(a,c),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var k=x;j[p]!==""&&(k+="="+encodeURIComponent(String(j[p]))),a.push(k)}}return this.i=a.join("&")};function Ii(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function gE(a,c){c&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(d,p){var k=p.toLowerCase();p!=k&&(fp(this,p),mp(this,k,d))},a)),a.j=c}function yE(a,c){const d=new Ps;if(l.Image){const p=new Image;p.onload=A(er,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(er,d,"TestLoadImage: error",!1,c,p),p.onabort=A(er,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(er,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function _E(a,c){const d=new Ps,p=new AbortController,k=setTimeout(()=>{p.abort(),er(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(x=>{clearTimeout(k),x.ok?er(d,"TestPingServer: ok",!0,c):er(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),er(d,"TestPingServer: error",!1,c)})}function er(a,c,d,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(d)}catch{}}function vE(){this.g=new me}function wE(a,c,d){const p=d||"";try{up(a,function(k,x){let j=k;h(k)&&(j=ee(k)),c.push(p+x+"="+encodeURIComponent(j))})}catch(k){throw c.push(p+"type="+encodeURIComponent("_badmap")),k}}function Ia(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ia,le),Ia.prototype.g=function(){return new Sa(this.l,this.j)},Ia.prototype.i=function(a){return function(){return a}}({});function Sa(a,c){Xe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Sa,Xe),t=Sa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,bs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Vs(this):bs(this),this.readyState==3&&gp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Vs(this))},t.Qa=function(a){this.g&&(this.response=a,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yp(a){let c="";return B(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Qu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=yp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Se(a,c,d))}function be(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(be,Xe);var EE=/^https?$/i,TE=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ju.g(),this.v=this.o?ie(this.o):ie(ju),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){_p(this,x);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)d.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(TE,c,void 0))||p||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,j]of d)this.g.setRequestHeader(x,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ep(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){_p(this,x)}};function _p(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,vp(a),Aa(a)}function vp(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,et(this,"complete"),et(this,"abort"),Aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Aa(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wp(this):this.bb())},t.bb=function(){wp(this)};function wp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)ma(a.Ea,0,a);else if(et(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var k=String(a.D).match(cp)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),p=!EE.test(k?k.toLowerCase():"")}d=p}if(d)et(a,"complete"),et(a,"success");else{a.m=6;try{var x=2<Cn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",vp(a)}}finally{Aa(a)}}}}function Aa(a,c){if(a.g){Ep(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||et(a,"ready");try{d.onreadystatechange=p}catch{}}}function Ep(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),re(c)}};function Tp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function IE(a){const c={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=R(a[p]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[k]||[];c[k]=x,x.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Ip(a){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,a),this.cb=Ls("retryDelaySeedMs",1e4,a),this.Wa=Ls("forwardChannelMaxRetries",2,a),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ip(a&&a.concurrentRequestLimit),this.Da=new vE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ip.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){We(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Dp(this,null,this.W),ka(this)};function Xu(a){if(Sp(a),a.G==3){var c=a.U++,d=kn(a.I);if(Se(d,"SID",a.K),Se(d,"RID",c),Se(d,"TYPE","terminate"),Ms(a,d),c=new Jn(a,a.j,c),c.L=2,c.v=Ta(kn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Op(c.j,null),c.g.ea(c.v)),c.F=Date.now(),va(c)}xp(a)}function Ra(a){a.g&&(Ju(a),a.g.cancel(),a.g=null)}function Sp(a){Ra(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ca(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ka(a){if(!sp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Zt||Y(),$||(Zt(),$=!0),G.add(c,a),a.B=0}}function SE(a,c){return op(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zr(y(a.Ga,a,c),Np(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Jn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=g(x),E(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Rp(this,k,c),d=kn(this.I),Se(d,"RID",a),Se(d,"CVER",22),this.D&&Se(d,"X-HTTP-Session-Id",this.D),Ms(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(yp(x)))+"&"+c:this.m&&Qu(d,this.m,x)),Gu(this.h,k),this.Ua&&Se(d,"TYPE","init"),this.P?(Se(d,"$req",c),Se(d,"SID","null"),k.T=!0,Hu(k,d,null)):Hu(k,d,c),this.G=2}}else this.G==3&&(a?Ap(this,a):this.i.length==0||sp(this.h)||Ap(this))};function Ap(a,c){var d;c?d=c.l:d=a.U++;const p=kn(a.I);Se(p,"SID",a.K),Se(p,"RID",d),Se(p,"AID",a.T),Ms(a,p),a.m&&a.o&&Qu(p,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Rp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Gu(a.h,d),Hu(d,p,c)}function Ms(a,c){a.H&&B(a.H,function(d,p){Se(c,p,d)}),a.l&&up({},function(d,p){Se(c,p,d)})}function Rp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var k=a.i;let x=-1;for(;;){const j=["count="+d];x==-1?0<d?(x=k[0].g,j.push("ofs="+x)):x=0:j.push("ofs="+x);let ve=!0;for(let nt=0;nt<d;nt++){let fe=k[nt].g;const dt=k[nt].map;if(fe-=x,0>fe)x=Math.max(0,k[nt].g-100),ve=!1;else try{wE(dt,j,"req"+fe+"_")}catch{p&&p(dt)}}if(ve){p=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function kp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Zt||Y(),$||(Zt(),$=!0),G.add(c,a),a.v=0}}function Yu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zr(y(a.Fa,a),Np(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zr(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Ra(this),Cp(this))};function Ju(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cp(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=kn(a.qa);Se(c,"RID","rpc"),Se(c,"SID",a.K),Se(c,"AID",a.T),Se(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Se(c,"TO",a.ja),Se(c,"TYPE","xmlhttp"),Ms(a,c),a.m&&a.o&&Qu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ta(kn(c)),d.m=null,d.P=!0,tp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ra(this),Yu(this),We(19))};function Ca(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Pp(a,c){var d=null;if(a.g==c){Ca(a),Ju(a),a.g=null;var p=2}else if(Ku(a.h,c))d=c.D,ap(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;p=Tt(),et(p,new ga(p,d)),ka(a)}else kp(a);else if(k=c.s,k==3||k==0&&0<c.X||!(p==1&&SE(a,c)||p==2&&Yu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Np(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function $r(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const k=!p;p=new jr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wa(p,"https"),Ta(p),k?yE(p.toString(),d):_E(p.toString(),d)}else We(2);a.G=0,a.l&&a.l.sa(c),xp(a),Sp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function xp(a){if(a.G=0,a.ka=[],a.l){const c=lp(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ka,c),b(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Dp(a,c,d){var p=d instanceof jr?kn(d):new jr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ea(p,p.s);else{var k=l.location;p=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var x=new jr(null);p&&wa(x,p),c&&(x.g=c),k&&Ea(x,k),d&&(x.l=d),p=x}return d=a.D,c=a.ya,d&&c&&Se(p,d,c),Se(p,"VER",a.la),Ms(a,p),p}function Op(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new be(new Ia({eb:d})):new be(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vp(){}t=Vp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pa(){}Pa.prototype.g=function(a,c){return new Vt(a,c)};function Vt(a,c){Xe.call(this),this.g=new Ip(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Si(this)}P(Vt,Xe),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Xu(this.g)},Vt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ee(a),a=d);c.i.push(new aE(c.Ya++,a)),c.G==3&&ka(c)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Xu(this.g),delete this.g,Vt.aa.N.call(this)};function bp(a){te.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(bp,te);function Lp(){Ee.call(this),this.status=1}P(Lp,Ee);function Si(a){this.g=a}P(Si,Vp),Si.prototype.ua=function(){et(this.g,"a")},Si.prototype.ta=function(a){et(this.g,new bp(a))},Si.prototype.sa=function(a){et(this.g,new Lp)},Si.prototype.ra=function(){et(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,S0=function(){return new Pa},I0=function(){return Tt()},T0=je,jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ya.NO_ERROR=0,ya.TIMEOUT=8,ya.HTTP_ERROR=6,yl=ya,Jf.COMPLETE="complete",E0=Jf,ge.EventType=Fe,Fe.OPEN="a",Fe.CLOSE="b",Fe.ERROR="c",Fe.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,Zs=ge,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,w0=be}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});const vg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Yd("@firebase/firestore");function Ws(){return ui.logLevel}function W(t,...e){if(ui.logLevel<=ce.DEBUG){const n=e.map(uf);ui.debug(`Firestore (${ys}): ${t}`,...n)}}function Wn(t,...e){if(ui.logLevel<=ce.ERROR){const n=e.map(uf);ui.error(`Firestore (${ys}): ${t}`,...n)}}function os(t,...e){if(ui.logLevel<=ce.WARN){const n=e.map(uf);ui.warn(`Firestore (${ys}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function _e(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class SR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AR{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ei,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ei)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new A0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new yt(e)}}class RR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new RR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){_e(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new CR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Qe(0,0))}static max(){return new J(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Fo{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const xR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Fo{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return xR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Re.fromString(e))}static fromName(e){return new K(Re.fromString(e).popFirst(5))}static empty(){return new K(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Re(e.slice()))}}function DR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new xr(i,K.empty(),e)}function OR(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(J.min(),K.empty(),-1)}static max(){return new xr(J.max(),K.empty(),-1)}}function VR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==bR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function MR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cf.oe=-1;function Nu(t){return t==null}function eu(t){return t===0&&1/t==-1/0}function UR(t){return typeof t=="number"&&Number.isInteger(t)&&!eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function k0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eg(this.data.getIterator())}getIteratorFrom(e){return new Eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new ln([])}unionWith(e){let n=new at(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new C0("Invalid base64 string: "+s):s}}(e);return new ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const FR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(_e(!!t),typeof t=="string"){let e=0;const n=FR.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ci(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function zo(t){const e=Dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:jR(t)?9007199254740991:BR(t)?10:11:X()}function An(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dr(i.timestampValue),l=Dr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ci(i.bytesValue).isEqual(ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),l=ze(s.doubleValue);return o===l?eu(o)===eu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(wg(o)!==wg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!An(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function jo(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Tg(t.timestampValue,e.timestampValue);case 4:return Tg(zo(t),zo(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ci(s),u=ci(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=pe(l[h],u[h]);if(f!==0)return f}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=pe(ze(s.latitude),ze(o.latitude));return l!==0?l:pe(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ig(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=y.value)===null||u===void 0?void 0:u.arrayValue,O=pe(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Ig(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ya.mapValue&&o===Ya.mapValue)return 0;if(s===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=pe(u[m],f[m]);if(y!==0)return y;const A=ls(l[u[m]],h[f[m]]);if(A!==0)return A}return pe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Dr(t),r=Dr(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function Ig(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return pe(n.length,r.length)}function us(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$h(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Sg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hh(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function Ag(t){return!!t&&"nullValue"in t}function Rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _l(t){return!!t&&"mapValue"in t}function BR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=po(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());_l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];_l(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_s(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Gt(po(this.value))}}function P0(t){const e=[];return _s(t.fields,(n,r)=>{const i=new st([n]);if(_l(r)){const s=P0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,J.min(),J.min(),J.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,i){return new vt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new vt(e,2,n,J.min(),J.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,J.min(),J.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.position=e,this.inclusive=n}}function kg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function $R(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{}class qe extends N0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qR(e,n,r):n==="array-contains"?new GR(e,r):n==="in"?new QR(e,r):n==="not-in"?new XR(e,r):n==="array-contains-any"?new YR(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WR(e,r):new KR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends N0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return x0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function x0(t){return t.op==="and"}function D0(t){return HR(t)&&x0(t)}function HR(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function qh(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+us(t.value);if(D0(t))return t.filters.map(e=>qh(e)).join(",");{const e=t.filters.map(n=>qh(n)).join(",");return`${t.op}(${e})`}}function O0(t,e){return t instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&An(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&O0(o,i.filters[l]),!0):!1}(t,e):void X()}function V0(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(V0).join(" ,")+"}"}(t):"Filter"}class qR extends qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class WR extends qe{constructor(e,n){super(e,"in",n),this.keys=b0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KR extends qe{constructor(e,n){super(e,"not-in",n),this.keys=b0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class GR extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&jo(n.arrayValue,this.value)}}class QR extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class XR extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jo(this.value.arrayValue,n)}}class YR extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Pg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JR(t,e,n,r,i,s,o)}function pf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.ue=n}return e.ue}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$R(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cg(t.startAt,e.startAt)&&Cg(t.endAt,e.endAt)}function Wh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZR(t,e,n,r,i,s,o,l){return new vs(t,e,n,r,i,s,o,l)}function gf(t){return new vs(t)}function Ng(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L0(t){return t.collectionGroup!==null}function mo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new $o(s,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new $o(st.keyField(),r))}return e.ce}function In(t){const e=Z(t);return e.le||(e.le=ek(e,mo(t))),e.le}function ek(t,e){if(t.limitType==="F")return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $o(i.field,s)});const n=t.endAt?new tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tu(t.startAt.position,t.startAt.inclusive):null;return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kh(t,e){const n=t.filters.concat([e]);return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nu(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return mf(In(t),In(e))&&t.limitType===e.limitType}function M0(t){return`${pf(In(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>V0(i)).join(", ")}]`),Nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=kg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,mo(r),i)||r.endAt&&!function(o,l,u){const h=kg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,mo(r),i))}(t,e)}function tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U0(t){return(e,n)=>{let r=!1;for(const i of mo(t)){const s=nk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ls(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return k0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new Oe(K.comparator);function Kn(){return rk}const F0=new Oe(K.comparator);function eo(...t){let e=F0;for(const n of t)e=e.insert(n.key,n);return e}function z0(t){let e=F0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return go()}function B0(){return go()}function go(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const ik=new Oe(K.comparator),sk=new at(K.comparator);function ue(...t){let e=sk;for(const n of t)e=e.add(n);return e}const ok=new at(pe);function ak(){return ok}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(e)?"-0":e}}function j0(t){return{integerValue:""+t}}function lk(t,e){return UR(e)?j0(e):yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this._=void 0}}function uk(t,e,n){return t instanceof Ho?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hf(s)&&(s=df(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qo?H0(t,e):t instanceof Wo?q0(t,e):function(i,s){const o=$0(i,s),l=xg(o)+xg(i.Pe);return Hh(o)&&Hh(i.Pe)?j0(l):yf(i.serializer,l)}(t,e)}function ck(t,e,n){return t instanceof qo?H0(t,e):t instanceof Wo?q0(t,e):n}function $0(t,e){return t instanceof ru?function(r){return Hh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ho extends Ou{}class qo extends Ou{constructor(e){super(),this.elements=e}}function H0(t,e){const n=W0(e);for(const r of t.elements)n.some(i=>An(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Ou{constructor(e){super(),this.elements=e}}function q0(t,e){let n=W0(e);for(const r of t.elements)n=n.filter(i=>!An(i,r));return{arrayValue:{values:n}}}class ru extends Ou{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xg(t){return ze(t.integerValue||t.doubleValue)}function W0(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.field=e,this.transform=n}}function dk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qo&&i instanceof qo||r instanceof Wo&&i instanceof Wo?as(r.elements,i.elements,An):r instanceof ru&&i instanceof ru?An(r.Pe,i.Pe):r instanceof Ho&&i instanceof Ho}(t.transform,e.transform)}class fk{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vu{}function K0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Q0(t.key,Un.none()):new sa(t.key,t.data,Un.none());{const n=t.data,r=Gt.empty();let i=new at(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gi(t.key,r,new ln(i.toArray()),Un.none())}}function pk(t,e,n){t instanceof sa?function(i,s,o){const l=i.value.clone(),u=Og(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gi?function(i,s,o){if(!vl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Og(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(G0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yo(t,e,n,r){return t instanceof sa?function(s,o,l,u){if(!vl(s.precondition,o))return l;const h=s.value.clone(),f=Vg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof gi?function(s,o,l,u){if(!vl(s.precondition,o))return l;const h=Vg(s.fieldTransforms,u,o),f=o.data;return f.setAll(G0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return vl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=$0(r.transform,i||null);s!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,s))}return n||null}function Dg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&as(r,i,(s,o)=>dk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends Vu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gi extends Vu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function G0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Og(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,ck(o,l,n[i]))}return r}function Vg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uk(s,o,e))}return r}class Q0 extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gk extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=K0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Dg(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Dg(n,r))}}class _f{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length);let i=function(){return ik}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _f(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,he;function wk(t){switch(t){default:return X();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function X0(t){if(t===void 0)return Wn("GRPC error has no .code"),L.UNKNOWN;switch(t){case $e.OK:return L.OK;case $e.CANCELLED:return L.CANCELLED;case $e.UNKNOWN:return L.UNKNOWN;case $e.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case $e.INTERNAL:return L.INTERNAL;case $e.UNAVAILABLE:return L.UNAVAILABLE;case $e.UNAUTHENTICATED:return L.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case $e.NOT_FOUND:return L.NOT_FOUND;case $e.ALREADY_EXISTS:return L.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return L.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case $e.ABORTED:return L.ABORTED;case $e.OUT_OF_RANGE:return L.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return L.UNIMPLEMENTED;case $e.DATA_LOSS:return L.DATA_LOSS;default:return X()}}(he=$e||($e={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new Zr([4294967295,4294967295],0);function bg(t){const e=Ek().encode(t),n=new v0;return n.update(e),new Uint8Array(n.digest())}function Lg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([i,s],0)]}class vf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Zr.fromNumber(r)));return i.compare(Tk)===1&&(i=new Zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=bg(e),[r,i]=Lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=bg(e),[r,i]=Lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bu(J.min(),i,new Oe(pe),Kn(),ue())}}class oa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Y0{constructor(e,n){this.targetId=e,this.me=n}}class J0{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Mg{constructor(){this.fe=0,this.ge=Fg(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new oa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Fg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,_e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ik{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=Ug(),this.Qe=new Oe(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Wh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,vt.newNoDocument(o,J.min()))}else _e(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ci(r).toUint8Array()}catch(u){if(u instanceof C0)return os("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vf(o,i,s)}catch(u){return os(u instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Wh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,vt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ue();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new bu(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=Ug(),this.Qe=new Oe(pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Mg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Mg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ug(){return new Oe(K.comparator)}function Fg(){return new Oe(K.comparator)}const Sk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ak=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Rk=(()=>({and:"AND",or:"OR"}))();class kk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||Nu(e)?e:{value:e}}function iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ck(t,e){return iu(t,e.toTimestamp())}function Sn(t){return _e(!!t),J.fromTimestamp(function(n){const r=Dr(n);return new Qe(r.seconds,r.nanos)}(t))}function wf(t,e){return Qh(t,e).canonicalString()}function Qh(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ew(t){const e=Re.fromString(t);return _e(sw(e)),e}function Xh(t,e){return wf(t.databaseId,e.path)}function Oc(t,e){const n=ew(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(nw(n))}function tw(t,e){return wf(t.databaseId,e)}function Pk(t){const e=ew(t);return e.length===4?Re.emptyPath():nw(e)}function Yh(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nw(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zg(t,e,n){return{name:Xh(t,e),fields:n.value.mapValue.fields}}function Nk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(_e(f===void 0||typeof f=="string"),ct.fromBase64String(f||"")):(_e(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ct.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:X0(h.code);return new q(f,h.message||"")}(o);n=new J0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oc(t,r.document.name),s=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):J.min(),l=new Gt({mapValue:{fields:r.document.fields}}),u=vt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new wl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oc(t,r.document),s=r.readTime?Sn(r.readTime):J.min(),o=vt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new wl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oc(t,r.document),s=r.removedTargetIds||[];n=new wl([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vk(i,s),l=r.targetId;n=new Y0(l,o)}}return n}function xk(t,e){let n;if(e instanceof sa)n={update:zg(t,e.key,e.value)};else if(e instanceof Q0)n={delete:Xh(t,e.key)};else if(e instanceof gi)n={update:zg(t,e.key,e.data),updateMask:zk(e.fieldMask)};else{if(!(e instanceof gk))return X();n={verify:Xh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ru)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ck(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function Dk(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Sn(i.updateTime):Sn(s);return o.isEqual(J.min())&&(o=Sn(s)),new fk(o,i.transformResults||[])}(n,e))):[]}function Ok(t,e){return{documents:[tw(t,e.path)]}}function Vk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tw(t,i);const s=function(h){if(h.length!==0)return iw(fn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Ci(y.field),direction:Mk(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function bk(t){let e=Pk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=rw(m);return y instanceof fn&&D0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(P){return new $o(Pi(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Nu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,A=m.values||[];return new tu(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,A=m.values||[];return new tu(A,y)}(n.endAt)),ZR(e,i,o,s,l,"F",u,h)}function Lk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pi(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pi(n.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>rw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Mk(t){return Sk[t]}function Uk(t){return Ak[t]}function Fk(t){return Rk[t]}function Ci(t){return{fieldPath:t.canonicalString()}}function Pi(t){return st.fromServerFormat(t.fieldPath)}function iw(t){return t instanceof qe?function(n){if(n.op==="=="){if(Rg(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NAN"}};if(Ag(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rg(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NAN"}};if(Ag(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ci(n.field),op:Uk(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>iw(i));return r.length===1?r[0]:{compositeFilter:{op:Fk(n.op),filters:r}}}(t):X()}function zk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.ct=e}}function jk(t){const e=bk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.un=new Hk}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(xr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Hk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new at(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new at(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new cs(0)}static kn(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&yo(r.mutation,i,ln.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=eo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Kn();const o=go(),l=function(){return go()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof gi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),yo(f.mutation,h,f.mutation.getFieldMask(),Qe.now())):o.set(h.key,ln.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new Wk(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=go();let i=new Oe((o,l)=>o-l),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||ln.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||ue()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=B0();f.forEach(y=>{if(!s.has(y)){const A=K0(n.get(y),r.get(y));A!==null&&m.set(y,A),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Xr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ue())).next(f=>({batchId:l,changes:z0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=eo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(m,y){return new vs(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))});let l=eo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&yo(f.mutation,h,ln.empty(),Qe.now()),Du(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Sn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:jk(i.bundledQuery),readTime:Sn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.overlays=new Oe(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Xr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Xr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Xr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _k(n,r));let s=this.Ir.get(n);s===void 0&&(s=ue(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.Tr=new at(Ye.Er),this.dr=new at(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Re([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Re([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ue();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ye.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(pe);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new K(s),0);let l=new at(pe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.Mr=e,this.docs=function(){return new Oe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||VR(OR(f),r)<=0||(i.has(f.key)||Du(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zk(this)}getSize(e){return M.resolve(this.size)}}class Zk extends qk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.persistence=e,this.Nr=new ws(n=>pf(n),mf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ef,this.targetCount=0,this.kr=cs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cf(0),this.Kr=!1,this.Kr=!0,this.$r=new Xk,this.referenceDelegate=e(this),this.Ur=new eC(this),this.indexManager=new $k,this.remoteDocumentCache=function(i){return new Jk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Bk(n),this.Gr=new Gk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Yk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new nC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nC extends LR{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Jr=new Ef,this.Yr=null}static Zr(e){return new Tf(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new If(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return o1()?8:MR(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rC;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ws()<=ce.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Ws()<=ce.DEBUG&&W("QueryEngine","Query:",ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ws()<=ce.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):M.resolve())}Yi(e,n){if(Ng(n))return M.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nu(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,nu(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Ng(n)||i.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Ws()<=ce.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.rs(e,o,n,DR(i,-1)).next(l=>l))})}ts(e,n){let r=new at(U0(e));return n.forEach((i,s)=>{Du(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ws()<=ce.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ki(n)),this.Ji.getDocumentsMatchingQuery(e,n,xr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Oe(pe),this._s=new ws(s=>pf(s),mf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function oC(t,e,n,r){return new sC(t,e,n,r)}async function ow(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ue();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function aC(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let A=M.resolve();return y.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(O=>{const b=h.docVersions.get(P);_e(b!==null),O.version.compareTo(b)<0&&(m.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ue();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aw(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lC(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ct.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(O,b,I){return O.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Kn(),h=ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(uC(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function uC(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function cC(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hC(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jh(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ia(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Bg(t,e,n){const r=Z(t);let i=J.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Z(u),y=m._s.get(f);return y!==void 0?M.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,o,In(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ue())).next(l=>(dC(r,tk(e),l),{documents:l,Ts:s})))}function dC(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class jg{constructor(){this.activeTargetIds=ak()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fC{constructor(){this.so=new jg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new jg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja=null;function Vc(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class yC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Vc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw os("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=mC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Vc();return new Promise((o,l)=>{const u=new w0;u.setWithCredentials(!0),u.listenOnce(E0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case yl.NO_ERROR:const f=u.getResponseJson();W(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case yl.TIMEOUT:W(gt,`RPC '${e}' ${s} timed out`),l(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case yl.HTTP_ERROR:const m=u.getStatus();if(W(gt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const P=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(A.status);l(new q(P,A.message))}else l(new q(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(L.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(gt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(gt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Vc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=S0(),l=I0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(gt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,A=!1;const P=new gC({Io:b=>{A?W(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(y||(W(gt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),W(gt,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},To:()=>m.close()}),O=(b,I,_)=>{b.listen(I,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return O(m,Zs.EventType.OPEN,()=>{A||(W(gt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),O(m,Zs.EventType.CLOSE,()=>{A||(A=!0,W(gt,`RPC '${e}' stream ${i} transport closed`),P.So())}),O(m,Zs.EventType.ERROR,b=>{A||(A=!0,os(gt,`RPC '${e}' stream ${i} transport errored:`,b),P.So(new q(L.UNAVAILABLE,"The operation could not be completed")))}),O(m,Zs.EventType.MESSAGE,b=>{var I;if(!A){const _=b.data[0];_e(!!_);const S=_,D=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(D){W(gt,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let B=function(v){const E=$e[v];if(E!==void 0)return X0(E)}(F),w=D.message;B===void 0&&(B=L.INTERNAL,w="Unknown error status: "+F+" with message "+D.message),A=!0,P.So(new q(B,w)),m.close()}else W(gt,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),O(l,T0.STAT_EVENT,b=>{b.stat===jh.PROXY?W(gt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===jh.NOPROXY&&W(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new kk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new lw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _C extends uw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Nk(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Sn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Yh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Wh(u)?{documents:Ok(s,u)}:{query:Vk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Z0(s,o.resumeToken);const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=iu(s,o.snapshotVersion.toTimestamp());const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Lk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Yh(this.serializer),n.removeTarget=e,this.a_(n)}}class vC extends uw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Dk(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Yh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class EC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{yi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await aa(h),h.q_.set("Unknown"),h.L_.delete(4),await Mu(h)}(this))})}),this.q_=new EC(r,i)}}async function Mu(t){if(yi(t))for(const e of t.B_)await e(!0)}async function aa(t){for(const e of t.B_)await e(!1)}function cw(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),kf(n)?Rf(n):Es(n).r_()&&Af(n,e))}function Sf(t,e){const n=Z(t),r=Es(n);n.N_.delete(e),r.r_()&&hw(n,e),n.N_.size===0&&(r.r_()?r.o_():yi(n)&&n.q_.set("Unknown"))}function Af(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).A_(e)}function hw(t,e){t.Q_.xe(e),Es(t).R_(e)}function Rf(t){t.Q_=new Ik({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.q_.v_()}function kf(t){return yi(t)&&!Es(t).n_()&&t.N_.size>0}function yi(t){return Z(t).L_.size===0}function dw(t){t.Q_=void 0}async function IC(t){t.q_.set("Online")}async function SC(t){t.N_.forEach((e,n)=>{Af(t,e)})}async function AC(t,e){dw(t),kf(t)?(t.q_.M_(e),Rf(t)):t.q_.set("Unknown")}async function RC(t,e,n){if(t.q_.set("Online"),e instanceof J0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof wl?t.Q_.Ke(e):e instanceof Y0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await aw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),hw(s,u);const m=new pr(f.target,u,h,f.sequenceNumber);Af(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await su(t,r)}}async function su(t,e,n){if(!ia(e))throw e;t.L_.add(1),await aa(t),t.q_.set("Offline"),n||(n=()=>aw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Mu(t)})}function fw(t,e){return e().catch(n=>su(t,n,e))}async function Uu(t){const e=Z(t),n=Or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;kC(e);)try{const i=await cC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,CC(e,i)}catch(i){await su(e,i)}pw(e)&&mw(e)}function kC(t){return yi(t)&&t.O_.length<10}function CC(t,e){t.O_.push(e);const n=Or(t);n.r_()&&n.V_&&n.m_(e.mutations)}function pw(t){return yi(t)&&!Or(t).n_()&&t.O_.length>0}function mw(t){Or(t).start()}async function PC(t){Or(t).p_()}async function NC(t){const e=Or(t);for(const n of t.O_)e.m_(n.mutations)}async function xC(t,e,n){const r=t.O_.shift(),i=_f.from(r,e,n);await fw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Uu(t)}async function DC(t,e){e&&Or(t).V_&&await async function(r,i){if(function(o){return wk(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Or(r).s_(),await fw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uu(r)}}(t,e),pw(t)&&mw(t)}async function Hg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.L_.add(3),await aa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Mu(n)}async function OC(t,e){const n=Z(t);e?(n.L_.delete(2),await Mu(n)):e||(n.L_.add(2),await aa(n),n.q_.set("Unknown"))}function Es(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new _C(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:IC.bind(null,t),Ro:SC.bind(null,t),mo:AC.bind(null,t),d_:RC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),kf(t)?Rf(t):t.q_.set("Unknown")):(await t.K_.stop(),dw(t))})),t.K_}function Or(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new vC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:PC.bind(null,t),mo:DC.bind(null,t),f_:NC.bind(null,t),g_:xC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Uu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Cf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),ia(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.W_=new Oe(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hs(e,n,Ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bC{constructor(){this.queries=Wg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Wg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function Wg(){return new ws(t=>M0(t),xu)}async function LC(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Pf(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Nf(n)}async function MC(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UC(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Nf(n)}function FC(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Nf(t){t.Y_.forEach(e=>{e.next()})}var Zh,Kg;(Kg=Zh||(Zh={})).ea="default",Kg.Cache="cache";class zC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.key=e}}class yw{constructor(e){this.key=e}}class BC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=U0(e),this.Ra=new Ji(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new qg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),A=Du(this.query,m)?m:null,P=!!y&&this.mutatedKeys.has(y.key),O=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let b=!1;y&&A?y.data.isEqual(A.data)?P!==O&&(r.track({type:3,doc:A}),b=!0):this.ga(y,A)||(r.track({type:2,doc:A}),b=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),b=!0):y&&!A&&(r.track({type:1,doc:y}),b=!0,(u||h)&&(l=!0)),b&&(A?(o=o.add(A),s=O?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,P){const O=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return O(A)-O(P)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new hs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new yw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new gw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $C{constructor(e){this.key=e,this.va=!1}}class HC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ws(l=>M0(l),xu),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(K.comparator),this.Na=new Map,this.La=new Ef,this.Ba={},this.ka=new Map,this.qa=cs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function qC(t,e,n=!0){const r=Iw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await _w(r,e,n,!0),i}async function WC(t,e){const n=Iw(t);await _w(n,e,!0,!1)}async function _w(t,e,n,r){const i=await hC(t.localStore,In(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&cw(t.remoteStore,i),l}async function KC(t,e,n,r,i){t.Ka=(m,y,A)=>async function(O,b,I,_){let S=b.view.ma(I);S.ns&&(S=await Bg(O.localStore,b.query,!1).then(({documents:w})=>b.view.ma(w,S)));const D=_&&_.targetChanges.get(b.targetId),F=_&&_.targetMismatches.get(b.targetId)!=null,B=b.view.applyChanges(S,O.isPrimaryClient,D,F);return Qg(O,b.targetId,B.wa),B.snapshot}(t,m,y,A);const s=await Bg(t.localStore,e,!0),o=new BC(e,s.Ts),l=o.ma(s.documents),u=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Qg(t,n,h.wa);const f=new jC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function GC(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!xu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sf(r.remoteStore,i.targetId),ed(r,i.targetId)}).catch(ra)):(ed(r,i.targetId),await Jh(r.localStore,i.targetId,!0))}async function QC(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sf(n.remoteStore,r.targetId))}async function XC(t,e,n){const r=rP(t);try{const i=await function(o,l){const u=Z(o),h=Qe.now(),f=l.reduce((A,P)=>A.add(P.key),ue());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Kn(),O=ue();return u.cs.getEntries(A,f).next(b=>{P=b,P.forEach((I,_)=>{_.isValidDocument()||(O=O.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(b=>{m=b;const I=[];for(const _ of l){const S=mk(_,m.get(_.key).overlayedDocument);S!=null&&I.push(new gi(_.key,S,P0(S.value.mapValue),Un.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(b=>{y=b;const I=b.applyToLocalDocumentSet(m,O);return u.documentOverlayCache.saveOverlays(A,b.batchId,I)})}).then(()=>({batchId:y.batchId,changes:z0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Oe(pe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await la(r,i.changes),await Uu(r.remoteStore)}catch(i){const s=Pf(i,"Failed to persist write");n.reject(s)}}async function vw(t,e){const n=Z(t);try{const r=await lC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?_e(o.va):i.removedDocuments.size>0&&(_e(o.va),o.va=!1))}),await la(n,r,e)}catch(r){await ra(r)}}function Gg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&Nf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Oe(K.comparator);o=o.insert(s,vt.newNoDocument(s,J.min()));const l=ue().add(s),u=new bu(J.min(),new Map,new Oe(pe),o,l);await vw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),xf(r)}else await Jh(r.localStore,e,!1).then(()=>ed(r,e,n)).catch(ra)}async function JC(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await aC(n.localStore,e);Ew(n,r,null),ww(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,i)}catch(i){await ra(i)}}async function ZC(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(_e(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Ew(r,e,n),ww(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,i)}catch(i){await ra(i)}}function ww(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Ew(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Tw(t,r)})}function Tw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),xf(t))}function Qg(t,e,n){for(const r of n)r instanceof gw?(t.La.addReference(r.key,e),eP(t,r)):r instanceof yw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Tw(t,r.key)):X()}function eP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),xf(t))}function xf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new $C(n)),t.Oa=t.Oa.insert(n,r),cw(t.remoteStore,new pr(In(gf(n.path)),r,"TargetPurposeLimboResolution",cf.oe))}}async function la(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=If.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,y=>M.forEach(y.$i,A=>f.persistence.referenceDelegate.addReference(m,y.targetId,A)).next(()=>M.forEach(y.Ui,A=>f.persistence.referenceDelegate.removeReference(m,y.targetId,A)))))}catch(m){if(!ia(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const A=f.os.get(y),P=A.snapshotVersion,O=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,O)}}}(r.localStore,s))}async function tP(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await ow(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.hs)}}function nP(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let i=ue();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Iw(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.Ca.d_=UC.bind(null,e.eventManager),e.Ca.$a=FC.bind(null,e.eventManager),e}function rP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZC.bind(null,e),e}class ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return oC(this.persistence,new iC,e.initialUser,this.serializer)}Ga(e){return new tC(Tf.Zr,this.serializer)}Wa(e){return new fC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ou.provider={build:()=>new ou};class td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tP.bind(null,this.syncEngine),await OC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bC}()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=function(s){return new yC(s)}(e.databaseInfo);return function(s,o,l,u){return new wC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new TC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Gg(this.syncEngine,n,0),function(){return $g.D()?new $g:new pC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new HC(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await aa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}td.provider={build:()=>new td};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=R0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ow(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oP(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hg(e.remoteStore,i)),t._onlineComponents=e}async function oP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new ou)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Lc(t,new ou);return t._offlineComponents}async function Sw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Xg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Xg(t,new td))),t._onlineComponents}function aP(t){return Sw(t).then(e=>e.syncEngine)}async function Yg(t){const e=await Sw(t),n=e.eventManager;return n.onListen=qC.bind(null,e.syncEngine),n.onUnlisten=GC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QC.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lP(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zg(t){if(!K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ey(t){if(K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function _o(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fu(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function uP(t,e){if(e<=0)throw new q(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Aw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ty({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ty(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IR;switch(r.type){case"firstParty":return new kR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jg.get(n);r&&(W("ComponentProvider","Removing Datastore"),Jg.delete(n),r.terminate())}(this),Promise.resolve()}}function cP(t,e,n,r={}){var i;const s=(t=_o(t,zu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=Vv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(h)}t._authCredentials=new SR(new A0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Rr extends Mr{constructor(e,n,r){super(e,n,gf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new K(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function ny(t,e,...n){if(t=ut(t),Rw("collection","path",e),t instanceof zu){const r=Re.fromString(e,...n);return ey(r),new Rr(t,null,r)}{if(!(t instanceof Ft||t instanceof Rr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return ey(r),new Rr(t.firestore,null,r)}}function hP(t,e,...n){if(t=ut(t),arguments.length===1&&(e=R0.newId()),Rw("doc","path",e),t instanceof zu){const r=Re.fromString(e,...n);return Zg(r),new Ft(t,null,new K(r))}{if(!(t instanceof Ft||t instanceof Rr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Zg(r),new Ft(t.firestore,t instanceof Rr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new lw(this,"async_queue_retry"),this.Vu=()=>{const r=bc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ei;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ia(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Cf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function iy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class au extends zu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ry,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ry(e),this._firestoreClient=void 0,await e}}}function dP(t,e){const n=typeof t=="object"?t:Zd(),r=typeof t=="string"?t:e||"(default)",i=Au(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xv("firestore");s&&cP(i,...s)}return i}function kw(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fP(t),t._firestoreClient}function fP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new zR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Aw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new sP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(ct.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=/^__.*__$/;class mP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gi(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}function Cw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Lf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return lu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Cw(this.Cu)&&pP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lu(e)}Qu(e,n,r,i=!1){return new Lf({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pw(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new gP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yP(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Dw("Data must be an object, but it was:",o,r);const l=Nw(r,o);let u,h;if(s.merge)u=new ln(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=vP(e,m,n);if(!o.contains(y))throw new q(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);EP(f,y)||f.push(y)}u=new ln(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new mP(new Gt(l),u,h)}class Mf extends Of{_toFieldTransform(e){return new hk(e.path,new Ho)}isEqual(e){return e instanceof Mf}}function _P(t,e,n,r=!1){return Uf(n,t.Qu(r?4:3,e))}function Uf(t,e){if(xw(t=ut(t)))return Dw("Unsupported field value:",e,t),Nw(t,e);if(t instanceof Of)return function(r,i){if(!Cw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Uf(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qe.fromDate(r);return{timestampValue:iu(i.serializer,s)}}if(r instanceof Qe){const s=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:iu(i.serializer,s)}}if(r instanceof Vf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:Z0(i.serializer,r._byteString)};if(r instanceof Ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return yf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Fu(r)}`)}(t,e)}function Nw(t,e){const n={};return k0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(r,i)=>{const s=Uf(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Vf||t instanceof ds||t instanceof Ft||t instanceof Of||t instanceof bf)}function Dw(t,e,n){if(!xw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Fu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function vP(t,e,n){if((e=ut(e))instanceof Df)return e._internalPath;if(typeof e=="string")return Ow(t,e);throw lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const wP=new RegExp("[~\\*/\\[\\]]");function Ow(t,e,n){if(e.search(wP)>=0)throw lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Df(...e.split("."))._internalPath}catch{throw lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function EP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TP extends Vw{data(){return super.data()}}function Ff(t,e){return typeof e=="string"?Ow(t,e):e instanceof Df?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zf{}class Bf extends zf{}function SP(t,e,...n){let r=[];e instanceof zf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof $f).length,l=s.filter(u=>u instanceof jf).length;if(o>1||o>0&&l>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jf extends Bf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jf(e,n,r)}_apply(e){const n=this._parse(e);return bw(e._query,n),new Mr(e.firestore,e.converter,Kh(e._query,n))}_parse(e){const n=Pw(e.firestore);return function(s,o,l,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){oy(m,f);const A=[];for(const P of m)A.push(sy(u,s,P));y={arrayValue:{values:A}}}else y=sy(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||oy(m,f),y=_P(l,o,m,f==="in"||f==="not-in");return qe.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class $f extends zf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)bw(o,u),o=Kh(o,u)}(e._query,n),new Mr(e.firestore,e.converter,Kh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hf extends Bf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $o(s,o)}(e._query,this._field,this._direction);return new Mr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new vs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function AP(t,e="asc"){const n=e,r=Ff("orderBy",t);return Hf._create(r,n)}class qf extends Bf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new qf(e,n,r)}_apply(e){return new Mr(e.firestore,e.converter,nu(e._query,this._limit,this._limitType))}}function RP(t){return uP("limit",t),qf._create("limit",t,"F")}function sy(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!L0(e)&&n.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!K.isDocumentKey(r))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sg(t,new K(r))}if(n instanceof Ft)return Sg(t,n._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fu(n)}.`)}function oy(t,e){if(!Array.isArray(t)||t.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kP{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _s(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ze(o.doubleValue));return new bf(s)}convertGeoPoint(e){return new Vf(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);_e(sw(r));const i=new Bo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lw extends Vw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new El(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ff("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class El extends Lw{data(e={}){return super.data(e)}}class PP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new no(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new El(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new El(i._firestore,i._userDataWriter,l.doc.key,l.doc,new no(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new El(i._firestore,i._userDataWriter,l.doc.key,l.doc,new no(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:NP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class Mw extends kP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function xP(t,e){const n=_o(t.firestore,au),r=hP(t),i=CP(t.converter,e);return OP(n,[yP(Pw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function DP(t,...e){var n,r,i;t=ut(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||iy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(iy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof Ft)h=_o(t.firestore,au),f=gf(t._key.path),u={next:m=>{e[o]&&e[o](VP(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=_o(t,Mr);h=_o(m.firestore,au),f=m._query;const y=new Mw(h);u={next:A=>{e[o]&&e[o](new PP(h,y,m,A))},error:e[o+1],complete:e[o+2]},IP(t._query)}return function(y,A,P,O){const b=new iP(O),I=new zC(A,b,P);return y.asyncQueue.enqueueAndForget(async()=>LC(await Yg(y),I)),()=>{b.Za(),y.asyncQueue.enqueueAndForget(async()=>MC(await Yg(y),I))}}(kw(h),f,l,u)}function OP(t,e){return function(r,i){const s=new ei;return r.asyncQueue.enqueueAndForget(async()=>XC(await aP(r),i,s)),s.promise}(kw(t),e)}function VP(t,e,n){const r=n.docs.get(e._key),i=new Mw(t);return new Lw(t,i,e._key,r,new no(n.hasPendingWrites,n.fromCache),e.converter)}function bP(){return new Mf("serverTimestamp")}(function(e,n=!0){(function(i){ys=i})(mi),ai(new Pr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new au(new AR(r.getProvider("auth-internal")),new PR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),wn(vg,"4.7.3",e),wn(vg,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebasestorage.googleapis.com",Fw="storageBucket",LP=2*60*1e3,MP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Rn{constructor(e,n,r=0){super(Mc(e),`Firebase Storage: ${n} (${Mc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function Mc(t){return"storage/"+t}function Wf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Me.UNKNOWN,t)}function UP(t){return new Ue(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FP(t){return new Ue(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Me.UNAUTHENTICATED,t)}function BP(){return new Ue(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jP(t){return new Ue(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $P(){return new Ue(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HP(){return new Ue(Me.CANCELED,"User canceled the upload/download.")}function qP(t){return new Ue(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function WP(t){return new Ue(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KP(){return new Ue(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Fw+"' property when initializing the app?")}function GP(){return new Ue(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QP(){return new Ue(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XP(t){return new Ue(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function nd(t){return new Ue(Me.INVALID_ARGUMENT,t)}function zw(){return new Ue(Me.APP_DELETED,"The Firebase app was deleted.")}function YP(t){return new Ue(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vo(t,e){return new Ue(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ks(t){throw new Ue(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mt.makeFromUrl(e,n)}catch{return new Mt(e,"")}if(r.path==="")return r;throw WP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${f}/b/${i}/o${y}`,"i"),P={bucket:1,path:3},O=n===Uw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${O}/${i}/${b}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:A,indices:P,postModify:h},{regex:I,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<S.length;D++){const F=S[D],B=F.regex.exec(e);if(B){const w=B[F.indices.bucket];let g=B[F.indices.path];g||(g=""),r=new Mt(w,g),F.postModify(r);break}}if(r==null)throw qP(e);return r}}class JP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...b){h||(h=!0,e.apply(null,b))}function m(b){i=setTimeout(()=>{i=null,t(A,u())},b)}function y(){s&&clearTimeout(s)}function A(b,...I){if(h){y();return}if(b){y(),f.call(null,b,...I);return}if(u()||o){y(),f.call(null,b,...I);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,m(S)}let P=!1;function O(b){P||(P=!0,y(),!h&&(i!==null?(b||(l=2),clearTimeout(i),m(0)):b||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,O(!0)},n),O}function eN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){return t!==void 0}function nN(t){return typeof t=="object"&&!Array.isArray(t)}function Kf(t){return typeof t=="string"||t instanceof String}function ay(t){return Gf()&&t instanceof Blob}function Gf(){return typeof Blob<"u"}function ly(t,e,n,r){if(r<e)throw nd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw nd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Bw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n,r,i,s,o,l,u,h,f,m,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Za(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ti.NO_ERROR,u=s.getStatus();if(!l||rN(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===ti.ABORT;r(!1,new Za(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Za(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());tN(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Wf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?zw():HP();o(u)}else{const u=$P();o(u)}};this.canceled_?n(!1,new Za(!1,null,!0)):this.backoffId_=ZP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Za{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function oN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uN(t,e,n,r,i,s,o=!0){const l=Bw(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return aN(h,e),sN(h,n),oN(h,s),lN(h,r),new iN(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hN(...t){const e=cN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gf())return new Blob(t);throw new Ue(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function dN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){if(typeof atob>"u")throw XP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uc{constructor(e,n){this.data=e,this.contentType=n||null}}function jw(t,e){switch(t){case un.RAW:return new Uc($w(e));case un.BASE64:case un.BASE64URL:return new Uc(Hw(t,e));case un.DATA_URL:return new Uc(mN(e),gN(e))}throw Wf()}function $w(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pN(t){let e;try{e=decodeURIComponent(t)}catch{throw vo(un.DATA_URL,"Malformed data URL.")}return $w(e)}function Hw(t,e){switch(t){case un.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw vo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw vo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=fN(e)}catch(i){throw i.message.includes("polyfill")?i:vo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class qw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vo(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mN(t){const e=new qw(t);return e.base64?Hw(un.BASE64,e.rest):pN(e.rest)}function gN(t){return new qw(t).contentType}function yN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){let r=0,i="";ay(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ay(this.data_)){const r=this.data_,i=dN(r,e,n);return i===null?null:new hr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hr(r,!0)}}static getBlob(...e){if(Gf()){const n=e.map(r=>r instanceof hr?r.data_:r);return new hr(hN.apply(null,n))}else{const n=e.map(o=>Kf(o)?jw(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new hr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){let e;try{e=JSON.parse(t)}catch{return null}return nN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Kw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t,e){return e}class It{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||wN}}let el=null;function EN(t){return!Kf(t)||t.length<2?t:Kw(t)}function Gw(){if(el)return el;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(s,o){return EN(o)}const n=new It("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new It("size");return i.xform=r,t.push(i),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),el=t,el}function TN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Mt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function IN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return TN(r,t),r}function Qw(t,e,n){const r=Ww(e);return r===null?null:IN(t,r,n)}function SN(t,e,n,r){const i=Ww(e);if(i===null||!Kf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=t.bucket,m=t.fullPath,y="/b/"+o(f)+"/o/"+o(m),A=Qf(y,n,r),P=Bw({alt:"media",token:h});return A+P})[0]}function AN(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Xw{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){if(!t)throw Wf()}function RN(t,e){function n(r,i){const s=Qw(t,i,e);return Yw(s!==null),s}return n}function kN(t,e){function n(r,i){const s=Qw(t,i,e);return Yw(s!==null),SN(s,i,t.host,t._protocol)}return n}function Jw(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=BP():i=zP():n.getStatus()===402?i=FP(t.bucket):n.getStatus()===403?i=jP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function CN(t){const e=Jw(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=UP(t.path)),s.serverResponse=i.serverResponse,s}return n}function PN(t,e,n){const r=e.fullServerUrl(),i=Qf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Xw(i,s,kN(t,n),o);return l.errorHandler=CN(e),l}function NN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=NN(null,e)),r}function DN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let D=0;D<2;D++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=xN(e,r,i),f=AN(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+u+"--",A=hr.getBlob(m,r,y);if(A===null)throw GP();const P={name:h.fullPath},O=Qf(s,t.host,t._protocol),b="POST",I=t.maxUploadRetryTime,_=new Xw(O,b,RN(t,n),I);return _.urlParams=P,_.headers=o,_.body=A.uploadData(),_.errorHandler=Jw(e),_}class ON{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ks("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ks("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ks("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ks("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ks("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VN extends ON{initXhr(){this.xhr_.responseType="text"}}function Zw(){return new VN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this._service=e,n instanceof Mt?this._location=n:this._location=Mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new di(e,n)}get root(){const e=new Mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kw(this._location.path)}get storage(){return this._service}get parent(){const e=_N(this._location.path);if(e===null)return null;const n=new Mt(this._location.bucket,e);return new di(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YP(e)}}function bN(t,e,n){t._throwIfRoot("uploadBytes");const r=DN(t.storage,t._location,Gw(),new hr(e,!0),n);return t.storage.makeRequestWithTokens(r,Zw).then(i=>({metadata:i,ref:t}))}function LN(t,e,n=un.RAW,r){t._throwIfRoot("uploadString");const i=jw(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),bN(t,i.data,s)}function MN(t){t._throwIfRoot("getDownloadURL");const e=PN(t.storage,t._location,Gw());return t.storage.makeRequestWithTokens(e,Zw).then(n=>{if(n===null)throw QP();return n})}function UN(t,e){const n=vN(t._location.path,e),r=new Mt(t._location.bucket,n);return new di(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){return/^[A-Za-z]+:\/\//.test(t)}function zN(t,e){return new di(t,e)}function eE(t,e){if(t instanceof Xf){const n=t;if(n._bucket==null)throw KP();const r=new di(n,n._bucket);return e!=null?eE(r,e):r}else return e!==void 0?UN(t,e):t}function BN(t,e){if(e&&FN(e)){if(t instanceof Xf)return zN(t,e);throw nd("To use ref(service, url), the first argument must be a Storage instance.")}else return eE(t,e)}function uy(t,e){const n=e==null?void 0:e[Fw];return n==null?null:Mt.makeFromBucketSpec(n,t)}function jN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Vv(i,t.app.options.projectId))}class Xf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Uw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LP,this._maxUploadRetryTime=MP,this._requests=new Set,i!=null?this._bucket=Mt.makeFromBucketSpec(i,this._host):this._bucket=uy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,e):this._bucket=uy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ly("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ly("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new di(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new JP(zw());{const o=uN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const cy="@firebase/storage",hy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="storage";function $N(t,e,n,r){return t=ut(t),LN(t,e,n,r)}function HN(t){return t=ut(t),MN(t)}function qN(t,e){return t=ut(t),BN(t,e)}function WN(t=Zd(),e){t=ut(t);const r=Au(t,tE).getImmediate({identifier:e}),i=xv("storage");return i&&KN(r,...i),r}function KN(t,e,n,r={}){jN(t,e,n,r)}function GN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xf(n,r,i,e,mi)}function QN(){ai(new Pr(tE,GN,"PUBLIC").setMultipleInstances(!0)),wn(cy,hy,""),wn(cy,hy,"esm2017")}QN();var XN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const YN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),JN=(t,e)=>{const n=se.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},h)=>se.createElement("svg",{ref:h,...XN,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${YN(t)}`,...u},[...e.map(([f,m])=>se.createElement(f,m)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n};var $t=JN;const ZN=$t("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),e2=$t("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]),t2=$t("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),n2=$t("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),r2=$t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),dy=$t("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),i2=$t("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),fy=$t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),py=$t("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]),Fc=$t("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),my=$t("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),s2=$t("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Gs=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),o2={apiKey:"AIzaSyBCBXsY55rxtKUx2HYXA7riczMRTiRKgMA",authDomain:"idea-nebula.firebaseapp.com",projectId:"idea-nebula",storageBucket:"idea-nebula.firebasestorage.app",messagingSenderId:"606687457668",appId:"1:606687457668:web:cdca14efacc9516b2aedd1",measurementId:"G-HGDDEJ8N20"},Yf=Mv(o2),zc=ER(Yf),gy=dP(Yf),a2=WN(Yf),l2=async t=>{if(!t||!t.trim())return"";const e=t.trim(),n=`ascii-signals/${Date.now()}-${Math.random().toString(36).slice(2,10)}.txt`,r=qN(a2,n);return await $N(r,e,"raw",{contentType:"text/plain;charset=utf-8"}),HN(r)},u2=t=>{let e=[];if(t.forEach(s=>{s.split(/[\n.]+/).forEach(l=>{const u=l.trim();u.length>5&&e.push(u)})}),e.length===0)return"The void is silent.";e.sort(()=>Math.random()-.5);const n=[];let r=e.shift();n.push(r);const i=Math.floor(Math.random()*5)+3;for(;n.length<i&&e.length>0;){const s=new Set(r.toLowerCase().match(/\b[a-z]{3,}\b/g)||[]);let o=!1;for(let l=0;l<e.length;l++){const u=e[l],h=new Set(u.toLowerCase().match(/\b[a-z]{3,}\b/g)||[]);if(new Set([...s].filter(m=>h.has(m))).size>0){r=e.splice(l,1)[0],n.push(r),o=!0;break}}o||(r=e.shift(),n.push(r))}return n.join(`
`)};function c2(){var Yn;const[t,e]=se.useState([]),[n,r]=se.useState(null),[i,s]=se.useState(null),[o,l]=se.useState(""),[u,h]=se.useState(!1),[f,m]=se.useState(!1),[y,A]=se.useState(!1),[P,O]=se.useState(""),[b,I]=se.useState([]),[_,S]=se.useState(""),[D,F]=se.useState(""),[B,w]=se.useState(!1),[g,v]=se.useState(""),[E,R]=se.useState(!1),[C,T]=se.useState(""),[ae,Ht]=se.useState(()=>{const N=localStorage.getItem("nebulaFavorites");return N?JSON.parse(N):[]}),[pn,Zt]=se.useState("all"),[$,G]=se.useState(""),[Y,we]=se.useState(null),ne=se.useRef(null),Ie=se.useRef(),qt=se.useRef(null),Pe=se.useRef(null),ht=se.useRef(null),Ve=se.useRef({x:2e3,y:2e3,zoom:1}),Ot=se.useRef({active:!1,startX:0,startY:0,originX:2e3,originY:2e3,pointerId:null,moved:!1});se.useEffect(()=>{localStorage.setItem("nebulaFavorites",JSON.stringify(ae))},[ae]),se.useEffect(()=>{const N=setInterval(()=>{if(ae.length>0){const z={timestamp:new Date().toISOString(),count:ae.length,data:ae};localStorage.setItem("nebulaFavorites_backup",JSON.stringify(z))}},36e5);return()=>clearInterval(N)},[ae]);const Ts=(N,z="collision",ee={})=>{if(!N)return;const re=ae.find(le=>le.text===N);let me;we(N),setTimeout(()=>we(null),600),re?me=ae.filter(le=>le.text!==N):me=[{id:Date.now()+Math.random(),text:N,type:z,date:new Date().toISOString(),timestamp:Date.now(),...ee},...ae],Ht(me)},Ur=N=>ae.some(z=>z.text===N),Qn=ae.filter(N=>!(pn!=="all"&&N.type!==pn||$&&!N.text.toLowerCase().includes($.toLowerCase()))),_i=[...Qn].sort((N,z)=>z.timestamp-N.timestamp),Is=()=>{const N=JSON.stringify(ae,null,2),z="data:application/json;charset=utf-8,"+encodeURIComponent(N),ee=`nebula-favorites-${new Date().toISOString().split("T")[0]}.json`,re=document.createElement("a");re.setAttribute("href",z),re.setAttribute("download",ee),re.click()},Ss=N=>{const z=N.target.files[0];if(!z)return;const ee=new FileReader;ee.onload=re=>{try{const me=JSON.parse(re.target.result);if(Array.isArray(me)){const le=[...ae];me.forEach(ie=>{le.find(ge=>ge.text===ie.text)||le.push({...ie,id:Date.now()+Math.random()})}),Ht(le),alert(`Imported ${me.length} favorites`)}}catch{alert("Invalid file format")}},ee.readAsText(z)};se.useEffect(()=>{sA(zc).then(()=>console.log("Connected to the collective (Anonymous Auth)")).catch(N=>console.error("Auth failed:",N))},[]),se.useEffect(()=>()=>{ht.current&&ht.current.getTracks().forEach(N=>N.stop())},[]);const vi=N=>{let z=0;for(let ee=0;ee<N.length;ee++)z=N.charCodeAt(ee)+((z<<5)-z);return Math.abs(z)},ua=N=>{if(typeof N.x=="number"&&typeof N.y=="number")return[N.x,N.y];const z=`${N.id}-${N.content??""}`,ee=vi(z),re=ee%360*(Math.PI/180),me=1200+ee%1400;return[2e3+Math.cos(re)*me,2e3+Math.sin(re)*me]};se.useEffect(()=>{const N=zc.onAuthStateChanged(z=>{if(z){const ee=SP(ny(gy,"ideas"),AP("timestamp","desc"),RP(2e3)),re=DP(ee,me=>{const le=me.docs.map(ie=>{const ge=ie.data(),[Fe,te]=ua({id:ie.id,...ge});return{id:ie.id,...ge,x:Fe,y:te}});e(le)});return()=>re()}});return()=>N()},[]);const ca=(N,z,ee,re)=>{const le=re,ie=re*.45,ge=Math.PI/5;let Fe=Math.PI/2*3,te=z,Ee=ee;N.beginPath(),N.moveTo(te,Ee-le);for(let je=0;je<5;je++)N.lineTo(te+Math.cos(Fe)*le,Ee+Math.sin(Fe)*le),Fe+=ge,N.lineTo(te+Math.cos(Fe)*ie,Ee+Math.sin(Fe)*ie),Fe+=ge;N.closePath()},ha=()=>{const N=ne.current;if(!N)return;const z=N.getContext("2d");z.setTransform(1,0,0,1,0,0),z.clearRect(0,0,N.width,N.height),z.fillStyle="#000000",z.fillRect(0,0,N.width,N.height);const ee=4e3,re=Math.min(N.width/ee,N.height/ee),{x:me,y:le,zoom:ie}=Ve.current,ge=re*ie;if(z.setTransform(ge,0,0,ge,N.width/2-me*ge,N.height/2-le*ge),t.length>0&&Math.random()<.08){const te=t[Math.floor(Math.random()*t.length)];if(!te.glimmer){const Ee=["#facc15","#ffffff","#fb923c","#ef4444"];te.glimmer={life:1,color:Ee[Math.floor(Math.random()*Ee.length)]}}}const Fe=performance.now()/600;if(t.forEach(te=>{const Ee=o&&te.content.toLowerCase().includes(o.toLowerCase()),je=o&&!Ee;let tt="#ffffff",Tt=2.4,en=0,tn=1;te.id===(i==null?void 0:i.id)||b.includes(te.id)?(tt="#facc15",Tt=4.5,en=20):te.id===(n==null?void 0:n.id)?(tt="#facc15",Tt=3.5,en=14):Ee?(tt="#facc15",Tt=3.2):je?(tt="#333333",tn=.35):te.glimmer&&(tt=te.glimmer.color,Tt=3.2,en=14,tn=.95,te.glimmer.life-=.03,te.glimmer.life<=0&&(te.glimmer=null));const Ei=1+.22*Math.sin(Fe+vi(te.id)%20),We=Math.max(Tt/re*Ei,1.4);z.save(),ca(z,te.x,te.y,We),z.fillStyle=tt,z.globalAlpha=tn,z.shadowBlur=en/re,z.shadowColor=tt,z.fill(),z.restore()}),b.length>1){const te=t.filter(Ee=>b.includes(Ee.id));if(te.length>1){z.beginPath(),z.strokeStyle="#facc15",z.lineWidth=.7/re,z.globalAlpha=.55,z.moveTo(te[0].x,te[0].y);for(let Ee=1;Ee<te.length;Ee++)z.lineTo(te[Ee].x,te[Ee].y);z.lineTo(te[0].x,te[0].y),z.stroke(),z.globalAlpha=1}}Ie.current=requestAnimationFrame(ha)};se.useEffect(()=>{const N=()=>{ne.current&&(ne.current.width=window.innerWidth,ne.current.height=window.innerHeight)};return window.addEventListener("resize",N),N(),Ie.current=requestAnimationFrame(ha),()=>cancelAnimationFrame(Ie.current)},[t,n,i,o,b]);const da=N=>{const z=ne.current;if(!z)return;const ee=z.getBoundingClientRect(),re=N.clientX-ee.left,me=N.clientY-ee.top,le=4e3,ie=Math.min(z.width/le,z.height/le),ge=ie*Ve.current.zoom,Fe=(re-z.width/2)/ge+Ve.current.x,te=(me-z.height/2)/ge+Ve.current.y;let Ee=null;for(let je=t.length-1;je>=0;je--){const tt=t[je];if(Math.hypot(tt.x-Fe,tt.y-te)<15/ie){Ee=tt;break}}r(Ee)},fa=()=>{if(Ot.current.moved){Ot.current.moved=!1;return}n?s(n):(s(null),I([]))},As=N=>{const z=ne.current;z&&(Ot.current={active:!0,startX:N.clientX,startY:N.clientY,originX:Ve.current.x,originY:Ve.current.y,pointerId:N.pointerId,moved:!1},z.setPointerCapture(N.pointerId))},pa=N=>{if(!Ot.current.active||N.pointerId!==Ot.current.pointerId)return;const z=N.clientX-Ot.current.startX,ee=N.clientY-Ot.current.startY;Math.hypot(z,ee)>4&&(Ot.current.moved=!0);const re=ne.current;if(!re)return;const me=4e3,ie=Math.min(re.width/me,re.height/me)*Ve.current.zoom;Ve.current.x=Ot.current.originX-z/ie,Ve.current.y=Ot.current.originY-ee/ie},Bu=N=>{const z=ne.current;z&&(Ot.current.active=!1,z.releasePointerCapture(N.pointerId))},Rs=N=>{if(!ne.current)return;N.preventDefault();const re=-N.deltaY>0?1.08:.92;Ve.current.zoom=Math.min(3.5,Math.max(.35,Ve.current.zoom*re))},Xn=()=>{ht.current&&(ht.current.getTracks().forEach(N=>N.stop()),ht.current=null),Pe.current&&(Pe.current.srcObject=null),w(!1)},ks=async()=>{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){v("Camera access is not supported on this device.");return}try{const N=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}},audio:!1});if(ht.current=N,v(""),w(!0),Pe.current){Pe.current.srcObject=N,Pe.current.muted=!0,Pe.current.playsInline=!0,Pe.current.setAttribute("playsinline","true"),Pe.current.setAttribute("webkit-playsinline","true");try{await Pe.current.play()}catch(z){console.warn("Camera play() was blocked by the browser:",z),v("Camera permission is allowed, but the preview is still loading. Please tap the camera again or refresh the page.")}}}catch(N){console.error(N),v("Camera access was denied. Please allow the camera and try again.")}},Xe=(N,z=32)=>{const ee=" .,:;irsXA253hMHGS#9B&@";return new Promise((re,me)=>{const le=new Image;le.onload=()=>{const ie=document.createElement("canvas"),ge=z/le.width;ie.width=z,ie.height=Math.max(1,Math.round(le.height*ge));const Fe=ie.getContext("2d");Fe.drawImage(le,0,0,ie.width,ie.height);const{data:te}=Fe.getImageData(0,0,ie.width,ie.height);let Ee="";for(let je=0;je<ie.height;je++){let tt="";for(let Tt=0;Tt<ie.width;Tt++){const en=(je*ie.width+Tt)*4,tn=te[en],Ei=te[en+1],We=te[en+2],ga=(tn+Ei+We)/3,zr=Math.floor(ga/255*(ee.length-1));tt+=ee[zr]}Ee+=tt+`
`}re(Ee.trim())},le.onerror=me,le.src=N})},et=async()=>{const N=Pe.current;if(!N)return;const z=document.createElement("canvas"),ee=N.videoWidth||1280,re=N.videoHeight||720;z.width=ee,z.height=re,z.getContext("2d").drawImage(N,0,0,ee,re);const le=z.toDataURL("image/jpeg",.72);try{const ie=await Xe(le,30);F(ie)}catch(ie){console.error("ASCII conversion failed:",ie),F(le)}Xn()},Fr=()=>{F(""),Xn()},ma=async()=>{if(_.trim()){if(!D){alert("Take a photo with the phone camera before releasing a signal.");return}if(!zc.currentUser){alert("Still connecting to the void... please wait a moment.");return}R(!0);try{const N=D.trim(),z=await l2(N);await xP(ny(gy,"ideas"),{content:_,image:z||N,ascii:N,timestamp:bP(),source:"anonymous"}),S(""),F(""),h(!1),Xn()}catch(N){alert("Transmission failed. Check your connection or permissions."),console.error(N)}finally{R(!1)}}},Cs=()=>{if(t.length<3)return;const N=Math.floor(Math.random()*3)+3,ee=[...t].sort(()=>.5-Math.random()).slice(0,N),re=u2(ee.map(ge=>ge.content)),me=ee.filter(ge=>ge.ascii||ge.image),le=me.length?me[Math.floor(Math.random()*me.length)]:t.find(ge=>ge.ascii||ge.image)||{},ie=le.ascii||le.image||"";O(re),T(ie),I(ee.map(ge=>ge.id)),m(!0)},wi=(N,z="")=>N?typeof N=="string"&&N.includes(`
`)?V.createElement("pre",{className:`whitespace-pre text-[6px] sm:text-[7px] leading-[0.7] tracking-[0.02em] text-zinc-100 font-mono bg-black/80 border border-zinc-800 rounded-xl p-3 overflow-auto ${z}`},N):typeof N=="string"&&N.startsWith("http")?V.createElement("img",{src:N,alt:"signal capture",className:`w-full object-cover ${z}`}):V.createElement("img",{src:N,alt:"signal capture",className:`w-full object-cover ${z}`}):null;return V.createElement("div",{className:"w-screen h-screen bg-black overflow-hidden font-sans text-white select-none relative"},V.createElement("canvas",{ref:ne,className:"absolute inset-0 z-0 cursor-grab",onMouseMove:da,onClick:fa,onPointerDown:As,onPointerMove:pa,onPointerUp:Bu,onWheel:Rs}),V.createElement("div",{className:"absolute top-0 left-0 w-full p-4 sm:p-6 z-10 pointer-events-none"},V.createElement("div",{className:"flex flex-col gap-3 md:flex-row md:justify-between md:items-start"},V.createElement("div",{className:"pointer-events-none"},V.createElement("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.2em] text-white opacity-90"},"IDEA NEBULA"),V.createElement("div",{className:"text-xs text-zinc-500 mt-2 font-mono flex items-center gap-2"},V.createElement("span",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),"LIVE COLLECTIVE • ",t.length," NODES")),V.createElement("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end pointer-events-auto w-full md:w-auto"},V.createElement("div",{className:"bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg w-full sm:w-64 focus-within:w-full sm:focus-within:w-80 transition-all min-w-0"},V.createElement(fy,{className:"w-4 h-4 text-zinc-400 shrink-0"}),V.createElement("input",{type:"text",placeholder:"Search the void...",value:o,onChange:N=>l(N.target.value),className:"bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500"})),V.createElement("div",{className:"flex gap-2 sm:gap-3 self-end sm:self-auto"},V.createElement("button",{onClick:()=>A(!0),className:"bg-zinc-100 hover:bg-white text-black p-3 rounded-full shadow-lg transition-transform hover:scale-105 relative"},V.createElement(Fc,{className:"w-5 h-5"}),ae.length>0&&V.createElement("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"},ae.length)),V.createElement("button",{onClick:()=>h(!0),className:"bg-zinc-100 hover:bg-white text-black p-3 rounded-full shadow-lg transition-transform hover:scale-105"},V.createElement(i2,{className:"w-5 h-5"})))))),V.createElement("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-auto"},V.createElement("button",{onClick:Cs,className:"group flex items-center gap-2 bg-zinc-900/90 backdrop-blur border border-zinc-700 hover:border-yellow-500 text-white px-8 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"},V.createElement(py,{className:"w-5 h-5 text-yellow-500 group-hover:animate-spin"}),V.createElement("span",{className:"font-bold tracking-wide group-hover:text-yellow-500 transition-colors"},"COLLIDE"))),u&&V.createElement("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"},V.createElement("div",{className:"bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200"},V.createElement("div",{className:"flex justify-between items-center mb-4"},V.createElement("h2",{className:"text-xl font-light text-white"},"Contribute to the Void"),V.createElement("button",{onClick:()=>{h(!1),Fr()},className:"text-zinc-500 hover:text-white"},V.createElement(Gs,{className:"w-6 h-6"}))),V.createElement("textarea",{value:_,onChange:N=>S(N.target.value),placeholder:"Type a lyric, a thought, or a fragment of a dream...",className:"w-full h-28 bg-black border border-zinc-800 rounded-xl p-4 text-zinc-200 focus:border-yellow-500 outline-none resize-none mb-4"}),V.createElement("div",{className:"mb-4"},D?V.createElement("div",{className:"relative overflow-hidden rounded-2xl border border-zinc-800 bg-black p-3"},wi(D,"max-h-56"),V.createElement("button",{type:"button",onClick:Fr,className:"absolute top-2 right-2 bg-black/70 text-white rounded-full p-2"},V.createElement(Gs,{className:"w-4 h-4"}))):B?V.createElement("div",{className:"rounded-2xl overflow-hidden border border-zinc-800 bg-black"},V.createElement("video",{ref:Pe,className:"w-full h-56 object-cover bg-black",playsInline:!0,autoPlay:!0,muted:!0,onLoadedMetadata:()=>{Pe.current&&Pe.current.play().catch(()=>{})}}),V.createElement("div",{className:"p-3 flex gap-2"},V.createElement("button",{type:"button",onClick:et,className:"flex-1 bg-yellow-500 text-black font-bold py-2 rounded-lg"},"Capture photo"),V.createElement("button",{type:"button",onClick:Xn,className:"bg-zinc-800 text-white px-3 py-2 rounded-lg"},V.createElement(e2,{className:"w-4 h-4"})))):V.createElement("div",{className:"rounded-2xl border border-dashed border-zinc-700 bg-black/40 p-4"},V.createElement("button",{type:"button",onClick:ks,className:"w-full flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white py-3 rounded-xl hover:border-yellow-500 transition-colors"},V.createElement(t2,{className:"w-4 h-4 text-yellow-500"}),"Take photo with camera")),g&&V.createElement("p",{className:"mt-3 text-sm text-red-400"},g)),V.createElement("button",{onClick:ma,disabled:E||!D,className:"w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50"},E?"Transmitting...":"Release to Nebula"),V.createElement("p",{className:"text-center text-xs text-zinc-600 mt-4"},"Photos must be captured from the phone camera, not uploaded."))),f&&V.createElement("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"},V.createElement("div",{className:"bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[80vh] animate-in fade-in zoom-in duration-200"},V.createElement("button",{onClick:()=>m(!1),className:"absolute top-4 right-4 text-zinc-500 hover:text-white"},V.createElement(Gs,{className:"w-6 h-6"})),V.createElement("div",{className:"text-center mb-6"},V.createElement("div",{className:"inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-widest mb-2"},"COLLISION DETECTED")),V.createElement("div",{className:"flex-grow overflow-y-auto custom-scroll bg-black/50 p-6 rounded-xl border border-zinc-800/50 mb-6 relative group space-y-4"},C&&V.createElement("div",{className:"overflow-hidden rounded-2xl border border-zinc-800 bg-black p-3"},wi(C,"max-h-72")),V.createElement("p",{className:"text-lg md:text-xl text-zinc-100 font-serif leading-loose whitespace-pre-wrap text-center"},P),V.createElement("button",{onClick:()=>Ts(P,"collision",{source:"remix",image:C}),className:`absolute top-2 right-2 transition-all ${Y===P?"animate-pulse":""}`},V.createElement(dy,{className:`w-6 h-6 ${Ur(P)?"fill-red-500 text-red-500":"text-zinc-500 hover:text-red-500"}`}))),V.createElement("div",{className:"flex justify-center"},V.createElement("button",{onClick:Cs,className:"flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"},V.createElement(py,{className:"w-4 h-4"})," Reroll")))),y&&V.createElement("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"},V.createElement("div",{className:"bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200"},V.createElement("div",{className:"flex justify-between items-center mb-6 border-b border-zinc-800 pb-4"},V.createElement("h2",{className:"text-xl font-light text-white flex items-center gap-2"},V.createElement(Fc,{className:"w-5 h-5 text-yellow-500 fill-yellow-500"}),"STARRED FRAGMENTS",V.createElement("span",{className:"text-sm text-zinc-500 ml-2"},"(",ae.length,")")),V.createElement("button",{onClick:()=>A(!1),className:"text-zinc-500 hover:text-white"},V.createElement(Gs,{className:"w-6 h-6"}))),V.createElement("div",{className:"grid grid-cols-3 gap-2 mb-6"},V.createElement("div",{className:"bg-black/30 p-3 rounded-lg text-center"},V.createElement("div",{className:"text-2xl font-bold text-white"},ae.length),V.createElement("div",{className:"text-xs text-zinc-500"},"Total")),V.createElement("div",{className:"bg-black/30 p-3 rounded-lg text-center"},V.createElement("div",{className:"text-2xl font-bold text-yellow-500"},ae.filter(N=>N.type==="collision").length),V.createElement("div",{className:"text-xs text-zinc-500"},"Collisions")),V.createElement("div",{className:"bg-black/30 p-3 rounded-lg text-center"},V.createElement("div",{className:"text-2xl font-bold text-blue-500"},ae.filter(N=>N.type==="signal").length),V.createElement("div",{className:"text-xs text-zinc-500"},"Signals"))),V.createElement("div",{className:"flex flex-col md:flex-row gap-3 mb-6"},V.createElement("div",{className:"bg-zinc-800/50 rounded-lg p-2 flex gap-1"},["all","collision","signal"].map(N=>V.createElement("button",{key:N,onClick:()=>Zt(N),className:`px-3 py-1 rounded-md text-xs font-medium transition-colors ${pn===N?"bg-zinc-700 text-white":"text-zinc-400 hover:text-white"}`},N.charAt(0).toUpperCase()+N.slice(1),N!=="all"&&` (${ae.filter(z=>z.type===N).length})`))),V.createElement("div",{className:"bg-black/50 border border-zinc-800 rounded-lg px-3 py-2 flex items-center gap-2 flex-1"},V.createElement(fy,{className:"w-4 h-4 text-zinc-500"}),V.createElement("input",{type:"text",placeholder:"Search favorites...",value:$,onChange:N=>G(N.target.value),className:"bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500"}))),V.createElement("div",{className:"flex-grow overflow-y-auto space-y-3 pr-2"},_i.length===0?V.createElement("div",{className:"text-center text-zinc-500 py-10 italic"},$||pn!=="all"?"No matching stars.":"No stars collected yet. Favorite collisions or signals!"):_i.map(N=>V.createElement("div",{key:N.id,className:"bg-black/40 hover:bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 group transition-all hover:border-zinc-700"},V.createElement("div",{className:"flex justify-between items-start mb-2"},V.createElement("div",{className:"flex items-center gap-2"},V.createElement(Fc,{className:"w-4 h-4 text-yellow-400"}),V.createElement("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${N.type==="collision"?"bg-yellow-500/20 text-yellow-500":"bg-blue-500/20 text-blue-500"}`},N.type),V.createElement("span",{className:"text-xs text-zinc-500"},new Date(N.timestamp).toLocaleDateString()," ",new Date(N.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))),V.createElement("div",{className:"flex gap-2"},V.createElement("button",{onClick:()=>{navigator.clipboard.writeText(N.text)},className:"opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-white transition-all",title:"Copy"},V.createElement(n2,{className:"w-4 h-4"})),V.createElement("button",{onClick:()=>Ts(N.text),className:"text-red-500 hover:text-red-400 transition-colors",title:"Remove"},V.createElement(my,{className:"w-4 h-4"})))),(N.ascii||N.image)&&V.createElement("div",{className:"mb-3 overflow-hidden rounded-xl border border-zinc-800 bg-black p-2"},wi(N.ascii||N.image,"h-40")),V.createElement("p",{className:"text-sm text-zinc-200 font-serif leading-relaxed whitespace-pre-wrap select-text cursor-text line-clamp-3 hover:line-clamp-none transition-all"},N.text),N.text.length>200&&V.createElement("div",{className:"text-xs text-zinc-500 mt-2 italic"},Math.ceil(N.text.split(" ").length)," words")))),ae.length>0&&V.createElement("div",{className:"mt-6 pt-4 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-3"},V.createElement("div",{className:"flex gap-2"},V.createElement("button",{onClick:()=>{if(confirm(`Clear all ${Qn.length} displayed favorites?`)){const N=ae.filter(z=>!Qn.includes(z));Ht(N)}},className:"text-xs text-zinc-500 hover:text-red-500 transition-colors px-3 py-1 rounded border border-zinc-800 hover:border-red-500 flex items-center gap-1"},V.createElement(my,{className:"w-3 h-3"})," Clear Displayed"),V.createElement("button",{onClick:()=>{confirm(`Clear ALL ${ae.length} favorites?`)&&Ht([])},className:"text-xs text-red-500 hover:text-red-400 transition-colors px-3 py-1 rounded border border-red-500/30 hover:border-red-500 flex items-center gap-1"},V.createElement(ZN,{className:"w-3 h-3"})," Clear All")),V.createElement("div",{className:"flex gap-2"},V.createElement("button",{onClick:()=>{var N;return(N=qt.current)==null?void 0:N.click()},className:"text-xs text-zinc-500 hover:text-white transition-colors px-3 py-1 rounded border border-zinc-800 hover:border-zinc-600 flex items-center gap-1"},V.createElement(s2,{className:"w-3 h-3"})," Import"),V.createElement("input",{ref:qt,type:"file",accept:".json",onChange:Ss,className:"hidden"}),V.createElement("button",{onClick:Is,className:"text-xs text-zinc-500 hover:text-white transition-colors px-3 py-1 rounded border border-zinc-800 hover:border-zinc-600 flex items-center gap-1"},V.createElement(r2,{className:"w-3 h-3"})," Export"))))),V.createElement("div",{className:`absolute top-0 right-0 h-full w-full md:w-96 bg-black/95 backdrop-blur border-l border-zinc-800 shadow-2xl transition-transform duration-300 z-40 p-8 overflow-y-auto ${i?"translate-x-0":"translate-x-full"}`},V.createElement("button",{onClick:()=>s(null),className:"absolute top-6 right-6 text-zinc-500 hover:text-white"},V.createElement(Gs,{className:"w-6 h-6"})),V.createElement("div",{className:"mt-12 relative group"},V.createElement("div",{className:"flex justify-between items-center mb-4"},V.createElement("div",{className:"inline-block px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold tracking-widest mb-4"},"ANONYMOUS SIGNAL"),V.createElement("button",{onClick:()=>i&&Ts(i.content,"signal",{nodeId:i.id,image:i.ascii||i.image}),className:`transition-all ${Y===(i==null?void 0:i.content)?"animate-pulse":""}`},V.createElement(dy,{className:`w-6 h-6 ${i&&Ur(i.content)?"fill-red-500 text-red-500":"text-zinc-500 hover:text-red-500"}`}))),((i==null?void 0:i.ascii)||(i==null?void 0:i.image))&&V.createElement("div",{className:"mb-6 overflow-hidden rounded-2xl border border-zinc-800 bg-black p-3"},wi(i.ascii||i.image,"max-h-56")),V.createElement("p",{className:"text-zinc-300 font-mono text-sm leading-relaxed whitespace-pre-wrap border-l-2 border-zinc-800 pl-4"},i==null?void 0:i.content),V.createElement("div",{className:"mt-8 pt-8 border-t border-zinc-900 text-xs text-zinc-600 font-mono"},"RECEIVED: ",(Yn=i==null?void 0:i.timestamp)==null?void 0:Yn.toDate().toLocaleDateString()))),n&&!i&&V.createElement("div",{className:"fixed pointer-events-none z-50 bg-black border border-zinc-800 px-3 py-2 rounded-lg shadow-xl",style:{left:n.x+15,top:n.y+15}},V.createElement("div",{className:"text-xs text-zinc-400 max-w-[200px] truncate"},n.content)))}Bc.createRoot(document.getElementById("root")).render(V.createElement(V.StrictMode,null,V.createElement(c2,null)));
