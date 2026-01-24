const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/part1-CkOiizYu.js","assets/essentials-Ctn0jzoN.js","assets/part1-CH7bol5l.js","assets/part1-DlBai2o-.js"])))=>i.map(i=>d[i]);
function rw(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(o,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function iw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zm={exports:{}},qs={},Gm={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),sw=Symbol.for("react.portal"),lw=Symbol.for("react.fragment"),aw=Symbol.for("react.strict_mode"),cw=Symbol.for("react.profiler"),dw=Symbol.for("react.provider"),uw=Symbol.for("react.context"),pw=Symbol.for("react.forward_ref"),fw=Symbol.for("react.suspense"),hw=Symbol.for("react.memo"),mw=Symbol.for("react.lazy"),yu=Symbol.iterator;function gw(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wm=Object.assign,qm={};function Ho(e,t,n){this.props=e,this.context=t,this.refs=qm,this.updater=n||Hm}Ho.prototype.isReactComponent={};Ho.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ho.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Om(){}Om.prototype=Ho.prototype;function Qc(e,t,n){this.props=e,this.context=t,this.refs=qm,this.updater=n||Hm}var Xc=Qc.prototype=new Om;Xc.constructor=Qc;Wm(Xc,Ho.prototype);Xc.isPureReactComponent=!0;var vu=Array.isArray,Jm=Object.prototype.hasOwnProperty,Zc={current:null},Ym={key:!0,ref:!0,__self:!0,__source:!0};function Km(e,t,n){var o,r={},i=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Jm.call(t,o)&&!Ym.hasOwnProperty(o)&&(r[o]=t[o]);var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];r.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)r[o]===void 0&&(r[o]=c[o]);return{$$typeof:Qr,type:e,key:i,ref:s,props:r,_owner:Zc.current}}function yw(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ed(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function vw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wu=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vw(""+e.key):t.toString(36)}function Bi(e,t,n,o,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qr:case sw:s=!0}}if(s)return s=e,r=r(s),e=o===""?"."+_l(s,0):o,vu(r)?(n="",e!=null&&(n=e.replace(wu,"$&/")+"/"),Bi(r,t,n,"",function(p){return p})):r!=null&&(ed(r)&&(r=yw(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(wu,"$&/")+"/")+e)),t.push(r)),1;if(s=0,o=o===""?".":o+":",vu(e))for(var c=0;c<e.length;c++){i=e[c];var u=o+_l(i,c);s+=Bi(i,t,n,u,r)}else if(u=gw(e),typeof u=="function")for(e=u.call(e),c=0;!(i=e.next()).done;)i=i.value,u=o+_l(i,c++),s+=Bi(i,t,n,u,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function si(e,t,n){if(e==null)return e;var o=[],r=0;return Bi(e,o,"","",function(i){return t.call(n,i,r++)}),o}function ww(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ui={transition:null},xw={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ui,ReactCurrentOwner:Zc};function Qm(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!ed(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Ho;J.Fragment=lw;J.Profiler=cw;J.PureComponent=Qc;J.StrictMode=aw;J.Suspense=fw;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;J.act=Qm;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Wm({},e.props),r=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Zc.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)Jm.call(t,u)&&!Ym.hasOwnProperty(u)&&(o[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){c=Array(u);for(var p=0;p<u;p++)c[p]=arguments[p+2];o.children=c}return{$$typeof:Qr,type:e.type,key:r,ref:i,props:o,_owner:s}};J.createContext=function(e){return e={$$typeof:uw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dw,_context:e},e.Consumer=e};J.createElement=Km;J.createFactory=function(e){var t=Km.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:pw,render:e}};J.isValidElement=ed;J.lazy=function(e){return{$$typeof:mw,_payload:{_status:-1,_result:e},_init:ww}};J.memo=function(e,t){return{$$typeof:hw,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=Ui.transition;Ui.transition={};try{e()}finally{Ui.transition=t}};J.unstable_act=Qm;J.useCallback=function(e,t){return Fe.current.useCallback(e,t)};J.useContext=function(e){return Fe.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};J.useEffect=function(e,t){return Fe.current.useEffect(e,t)};J.useId=function(){return Fe.current.useId()};J.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Fe.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};J.useRef=function(e){return Fe.current.useRef(e)};J.useState=function(e){return Fe.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Fe.current.useTransition()};J.version="18.3.1";Gm.exports=J;var E=Gm.exports;const Se=iw(E),Sw=rw({__proto__:null,default:Se},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bw=E,kw=Symbol.for("react.element"),Cw=Symbol.for("react.fragment"),Tw=Object.prototype.hasOwnProperty,Ew=bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iw={key:!0,ref:!0,__self:!0,__source:!0};function Xm(e,t,n){var o,r={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)Tw.call(t,o)&&!Iw.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:kw,type:e,key:i,ref:s,props:r,_owner:Ew.current}}qs.Fragment=Cw;qs.jsx=Xm;qs.jsxs=Xm;zm.exports=qs;var a=zm.exports,Zm={exports:{}},Ze={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,V){var q=$.length;$.push(V);e:for(;0<q;){var ee=q-1>>>1,te=$[ee];if(0<r(te,V))$[ee]=V,$[q]=te,q=ee;else break e}}function n($){return $.length===0?null:$[0]}function o($){if($.length===0)return null;var V=$[0],q=$.pop();if(q!==V){$[0]=q;e:for(var ee=0,te=$.length,In=te>>>1;ee<In;){var mt=2*(ee+1)-1,Qt=$[mt],Oe=mt+1,jt=$[Oe];if(0>r(Qt,q))Oe<te&&0>r(jt,Qt)?($[ee]=jt,$[Oe]=q,ee=Oe):($[ee]=Qt,$[mt]=q,ee=mt);else if(Oe<te&&0>r(jt,q))$[ee]=jt,$[Oe]=q,ee=Oe;else break e}}return V}function r($,V){var q=$.sortIndex-V.sortIndex;return q!==0?q:$.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var u=[],p=[],f=1,h=null,m=3,g=!1,S=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var V=n(p);V!==null;){if(V.callback===null)o(p);else if(V.startTime<=$)o(p),V.sortIndex=V.expirationTime,t(u,V);else break;V=n(p)}}function b($){if(C=!1,y($),!S)if(n(u)!==null)S=!0,F(T);else{var V=n(p);V!==null&&G(b,V.startTime-$)}}function T($,V){S=!1,C&&(C=!1,w(_),_=-1),g=!0;var q=m;try{for(y(V),h=n(u);h!==null&&(!(h.expirationTime>V)||$&&!B());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,m=h.priorityLevel;var te=ee(h.expirationTime<=V);V=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(u)&&o(u),y(V)}else o(u);h=n(u)}if(h!==null)var In=!0;else{var mt=n(p);mt!==null&&G(b,mt.startTime-V),In=!1}return In}finally{h=null,m=q,g=!1}}var A=!1,I=null,_=-1,P=5,R=-1;function B(){return!(e.unstable_now()-R<P)}function j(){if(I!==null){var $=e.unstable_now();R=$;var V=!0;try{V=I(!0,$)}finally{V?N():(A=!1,I=null)}}else A=!1}var N;if(typeof x=="function")N=function(){x(j)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,W=U.port2;U.port1.onmessage=j,N=function(){W.postMessage(null)}}else N=function(){k(j,0)};function F($){I=$,A||(A=!0,N())}function G($,V){_=k(function(){$(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,F(T))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var q=m;m=V;try{return $()}finally{m=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,V){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var q=m;m=$;try{return V()}finally{m=q}},e.unstable_scheduleCallback=function($,V,q){var ee=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ee+q:ee):q=ee,$){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=q+te,$={id:f++,callback:V,priorityLevel:$,startTime:q,expirationTime:te,sortIndex:-1},q>ee?($.sortIndex=q,t(p,$),n(u)===null&&$===n(p)&&(C?(w(_),_=-1):C=!0,G(b,q-ee))):($.sortIndex=te,t(u,$),S||g||(S=!0,F(T))),$},e.unstable_shouldYield=B,e.unstable_wrapCallback=function($){var V=m;return function(){var q=m;m=V;try{return $.apply(this,arguments)}finally{m=q}}}})(tg);eg.exports=tg;var _w=eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aw=E,Xe=_w;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ng=new Set,Ar={};function Kn(e,t){Ro(e,t),Ro(e+"Capture",t)}function Ro(e,t){for(Ar[e]=t,e=0;e<t.length;e++)ng.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,Pw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},Su={};function Rw(e){return Ca.call(Su,e)?!0:Ca.call(xu,e)?!1:Pw.test(e)?Su[e]=!0:(xu[e]=!0,!1)}function Mw(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $w(e,t,n,o){if(t===null||typeof t>"u"||Mw(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,o,r,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var td=/[\-:]([a-z])/g;function nd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(td,nd);_e[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(td,nd);_e[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(td,nd);_e[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function od(e,t,n,o){var r=_e.hasOwnProperty(t)?_e[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($w(t,n,r,o)&&(n=null),o||r===null?Rw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Ot=Aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),ro=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),rg=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),ig=Symbol.for("react.offscreen"),bu=Symbol.iterator;function Xo(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Al;function ur(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Pl=!1;function Rl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var o=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){o=p}e.call(t.prototype)}else{try{throw Error()}catch(p){o=p}e()}}catch(p){if(p&&o&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),i=o.stack.split(`
`),s=r.length-1,c=i.length-1;1<=s&&0<=c&&r[s]!==i[c];)c--;for(;1<=s&&0<=c;s--,c--)if(r[s]!==i[c]){if(s!==1||c!==1)do if(s--,c--,0>c||r[s]!==i[c]){var u=`
`+r[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=c);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Nw(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function _a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case ro:return"Portal";case Ta:return"Profiler";case rd:return"StrictMode";case Ea:return"Suspense";case Ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rg:return(e.displayName||"Context")+".Consumer";case og:return(e._context.displayName||"Context")+".Provider";case id:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sd:return t=e.displayName||null,t!==null?t:_a(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return _a(e(t))}catch{}}return null}function jw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(t);case 8:return t===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lw(e){var t=sg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){o=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=Lw(e))}function lg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=sg(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Aa(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ag(e,t){t=t.checked,t!=null&&od(e,"checked",t,!1)}function Pa(e,t){ag(e,t);var n=Sn(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ra(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ra(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ra(e,t,n){(t!=="number"||rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function bo(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(pr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function cg(e,t){var n=Sn(t.value),o=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $a(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,ug=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dw=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){Dw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function pg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function fg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=pg(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Bw=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Na(e,t){if(t){if(Bw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var La=null;function ld(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,ko=null,Co=null;function Iu(e){if(e=ei(e)){if(typeof Da!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Qs(t),Da(e.stateNode,e.type,t))}}function hg(e){ko?Co?Co.push(e):Co=[e]:ko=e}function mg(){if(ko){var e=ko,t=Co;if(Co=ko=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function gg(e,t){return e(t)}function yg(){}var Ml=!1;function vg(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return gg(e,t,n)}finally{Ml=!1,(ko!==null||Co!==null)&&(yg(),mg())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var o=Qs(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Ba=!1;if(zt)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Ba=!1}function Uw(e,t,n,o,r,i,s,c,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(f){this.onError(f)}}var xr=!1,is=null,ss=!1,Ua=null,Fw={onError:function(e){xr=!0,is=e}};function Vw(e,t,n,o,r,i,s,c,u){xr=!1,is=null,Uw.apply(Fw,arguments)}function zw(e,t,n,o,r,i,s,c,u){if(Vw.apply(this,arguments),xr){if(xr){var p=is;xr=!1,is=null}else throw Error(M(198));ss||(ss=!0,Ua=p)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _u(e){if(Qn(e)!==e)throw Error(M(188))}function Gw(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return _u(r),e;if(i===o)return _u(r),t;i=i.sibling}throw Error(M(188))}if(n.return!==o.return)n=r,o=i;else{for(var s=!1,c=r.child;c;){if(c===n){s=!0,n=r,o=i;break}if(c===o){s=!0,o=r,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,o=r;break}if(c===o){s=!0,o=i,n=r;break}c=c.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==o)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function xg(e){return e=Gw(e),e!==null?Sg(e):null}function Sg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sg(e);if(t!==null)return t;e=e.sibling}return null}var bg=Xe.unstable_scheduleCallback,Au=Xe.unstable_cancelCallback,Hw=Xe.unstable_shouldYield,Ww=Xe.unstable_requestPaint,pe=Xe.unstable_now,qw=Xe.unstable_getCurrentPriorityLevel,ad=Xe.unstable_ImmediatePriority,kg=Xe.unstable_UserBlockingPriority,ls=Xe.unstable_NormalPriority,Ow=Xe.unstable_LowPriority,Cg=Xe.unstable_IdlePriority,Os=null,Mt=null;function Jw(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Qw,Yw=Math.log,Kw=Math.LN2;function Qw(e){return e>>>=0,e===0?32:31-(Yw(e)/Kw|0)|0}var di=64,ui=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function as(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~r;c!==0?o=fr(c):(i&=s,i!==0&&(o=fr(i)))}else s=n&~r,s!==0?o=fr(s):i!==0&&(o=fr(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-St(t),r=1<<n,o|=e[n],t&=~r;return o}function Xw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zw(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-St(i),c=1<<s,u=r[s];u===-1?(!(c&n)||c&o)&&(r[s]=Xw(c,t)):u<=t&&(e.expiredLanes|=c),i&=~c}}function Fa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tg(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function ex(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-St(n),i=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~i}}function cd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-St(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var X=0;function Eg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ig,dd,_g,Ag,Pg,Va=!1,pi=[],pn=null,fn=null,hn=null,Mr=new Map,$r=new Map,rn=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function er(e,t,n,o,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:i,targetContainers:[r]},t!==null&&(t=ei(t),t!==null&&dd(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function nx(e,t,n,o,r){switch(t){case"focusin":return pn=er(pn,e,t,n,o,r),!0;case"dragenter":return fn=er(fn,e,t,n,o,r),!0;case"mouseover":return hn=er(hn,e,t,n,o,r),!0;case"pointerover":var i=r.pointerId;return Mr.set(i,er(Mr.get(i)||null,e,t,n,o,r)),!0;case"gotpointercapture":return i=r.pointerId,$r.set(i,er($r.get(i)||null,e,t,n,o,r)),!0}return!1}function Rg(e){var t=Mn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=wg(n),t!==null){e.blockedOn=t,Pg(e.priority,function(){_g(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);La=o,n.target.dispatchEvent(o),La=null}else return t=ei(n),t!==null&&dd(t),e.blockedOn=n,!1;t.shift()}return!0}function Ru(e,t,n){Fi(e)&&n.delete(t)}function ox(){Va=!1,pn!==null&&Fi(pn)&&(pn=null),fn!==null&&Fi(fn)&&(fn=null),hn!==null&&Fi(hn)&&(hn=null),Mr.forEach(Ru),$r.forEach(Ru)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Va||(Va=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,ox)))}function Nr(e){function t(r){return tr(r,e)}if(0<pi.length){tr(pi[0],e);for(var n=1;n<pi.length;n++){var o=pi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(pn!==null&&tr(pn,e),fn!==null&&tr(fn,e),hn!==null&&tr(hn,e),Mr.forEach(t),$r.forEach(t),n=0;n<rn.length;n++)o=rn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&rn.shift()}var To=Ot.ReactCurrentBatchConfig,cs=!0;function rx(e,t,n,o){var r=X,i=To.transition;To.transition=null;try{X=1,ud(e,t,n,o)}finally{X=r,To.transition=i}}function ix(e,t,n,o){var r=X,i=To.transition;To.transition=null;try{X=4,ud(e,t,n,o)}finally{X=r,To.transition=i}}function ud(e,t,n,o){if(cs){var r=za(e,t,n,o);if(r===null)Gl(e,t,o,ds,n),Pu(e,o);else if(nx(r,e,t,n,o))o.stopPropagation();else if(Pu(e,o),t&4&&-1<tx.indexOf(e)){for(;r!==null;){var i=ei(r);if(i!==null&&Ig(i),i=za(e,t,n,o),i===null&&Gl(e,t,o,ds,n),i===r)break;r=i}r!==null&&o.stopPropagation()}else Gl(e,t,o,null,n)}}var ds=null;function za(e,t,n,o){if(ds=null,e=ld(o),e=Mn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ds=e,null}function Mg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qw()){case ad:return 1;case kg:return 4;case ls:case Ow:return 16;case Cg:return 536870912;default:return 16}default:return 16}}var ln=null,pd=null,Vi=null;function $g(){if(Vi)return Vi;var e,t=pd,n=t.length,o,r="value"in ln?ln.value:ln.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(o=1;o<=s&&t[n-o]===r[i-o];o++);return Vi=r.slice(e,1<o?1-o:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function Mu(){return!1}function et(e){function t(n,o,r,i,s){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fi:Mu,this.isPropagationStopped=Mu,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fd=et(Wo),Zr=ce({},Wo,{view:0,detail:0}),sx=et(Zr),Nl,jl,nr,Js=ce({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Nl=e.screenX-nr.screenX,jl=e.screenY-nr.screenY):jl=Nl=0,nr=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),$u=et(Js),lx=ce({},Js,{dataTransfer:0}),ax=et(lx),cx=ce({},Zr,{relatedTarget:0}),Ll=et(cx),dx=ce({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=et(dx),px=ce({},Wo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fx=et(px),hx=ce({},Wo,{data:0}),Nu=et(hx),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yx[e])?!!t[e]:!1}function hd(){return vx}var wx=ce({},Zr,{key:function(e){if(e.key){var t=mx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xx=et(wx),Sx=ce({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ju=et(Sx),bx=ce({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),kx=et(bx),Cx=ce({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=et(Cx),Ex=ce({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=et(Ex),_x=[9,13,27,32],md=zt&&"CompositionEvent"in window,Sr=null;zt&&"documentMode"in document&&(Sr=document.documentMode);var Ax=zt&&"TextEvent"in window&&!Sr,Ng=zt&&(!md||Sr&&8<Sr&&11>=Sr),Lu=" ",Du=!1;function jg(e,t){switch(e){case"keyup":return _x.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var so=!1;function Px(e,t){switch(e){case"compositionend":return Lg(t);case"keypress":return t.which!==32?null:(Du=!0,Lu);case"textInput":return e=t.data,e===Lu&&Du?null:e;default:return null}}function Rx(e,t){if(so)return e==="compositionend"||!md&&jg(e,t)?(e=$g(),Vi=pd=ln=null,so=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ng&&t.locale!=="ko"?null:t.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mx[e.type]:t==="textarea"}function Dg(e,t,n,o){hg(o),t=us(t,"onChange"),0<t.length&&(n=new fd("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var br=null,jr=null;function $x(e){Jg(e,0)}function Ys(e){var t=co(e);if(lg(t))return e}function Nx(e,t){if(e==="change")return t}var Bg=!1;if(zt){var Dl;if(zt){var Bl="oninput"in document;if(!Bl){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Bl=typeof Uu.oninput=="function"}Dl=Bl}else Dl=!1;Bg=Dl&&(!document.documentMode||9<document.documentMode)}function Fu(){br&&(br.detachEvent("onpropertychange",Ug),jr=br=null)}function Ug(e){if(e.propertyName==="value"&&Ys(jr)){var t=[];Dg(t,jr,e,ld(e)),vg($x,t)}}function jx(e,t,n){e==="focusin"?(Fu(),br=t,jr=n,br.attachEvent("onpropertychange",Ug)):e==="focusout"&&Fu()}function Lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ys(jr)}function Dx(e,t){if(e==="click")return Ys(t)}function Bx(e,t){if(e==="input"||e==="change")return Ys(t)}function Ux(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Ux;function Lr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Ca.call(t,r)||!Et(e[r],t[r]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var n=Vu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vu(n)}}function Fg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vg(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rs(e.document)}return t}function gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fx(e){var t=Vg(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(o!==null&&gd(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=o.end===void 0?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=zu(n,i);var s=zu(n,o);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vx=zt&&"documentMode"in document&&11>=document.documentMode,lo=null,Ga=null,kr=null,Ha=!1;function Gu(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ha||lo==null||lo!==rs(o)||(o=lo,"selectionStart"in o&&gd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),kr&&Lr(kr,o)||(kr=o,o=us(Ga,"onSelect"),0<o.length&&(t=new fd("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=lo)))}function hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ao={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},Ul={},zg={};zt&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Ks(e){if(Ul[e])return Ul[e];if(!ao[e])return e;var t=ao[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zg)return Ul[e]=t[n];return e}var Gg=Ks("animationend"),Hg=Ks("animationiteration"),Wg=Ks("animationstart"),qg=Ks("transitionend"),Og=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){Og.set(e,t),Kn(t,[e])}for(var Fl=0;Fl<Hu.length;Fl++){var Vl=Hu[Fl],zx=Vl.toLowerCase(),Gx=Vl[0].toUpperCase()+Vl.slice(1);kn(zx,"on"+Gx)}kn(Gg,"onAnimationEnd");kn(Hg,"onAnimationIteration");kn(Wg,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(qg,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Wu(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,zw(o,t,void 0,e),e.currentTarget=null}function Jg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var s=o.length-1;0<=s;s--){var c=o[s],u=c.instance,p=c.currentTarget;if(c=c.listener,u!==i&&r.isPropagationStopped())break e;Wu(r,c,p),i=u}else for(s=0;s<o.length;s++){if(c=o[s],u=c.instance,p=c.currentTarget,c=c.listener,u!==i&&r.isPropagationStopped())break e;Wu(r,c,p),i=u}}}if(ss)throw e=Ua,ss=!1,Ua=null,e}function oe(e,t){var n=t[Ya];n===void 0&&(n=t[Ya]=new Set);var o=e+"__bubble";n.has(o)||(Yg(t,e,2,!1),n.add(o))}function zl(e,t,n){var o=0;t&&(o|=4),Yg(n,e,o,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[mi]){e[mi]=!0,ng.forEach(function(n){n!=="selectionchange"&&(Hx.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,zl("selectionchange",!1,t))}}function Yg(e,t,n,o){switch(Mg(t)){case 1:var r=rx;break;case 4:r=ix;break;default:r=ud}n=r.bind(null,t,n,e),r=void 0,!Ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Gl(e,t,n,o,r){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var c=o.stateNode.containerInfo;if(c===r||c.nodeType===8&&c.parentNode===r)break;if(s===4)for(s=o.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;s=s.return}for(;c!==null;){if(s=Mn(c),s===null)return;if(u=s.tag,u===5||u===6){o=i=s;continue e}c=c.parentNode}}o=o.return}vg(function(){var p=i,f=ld(n),h=[];e:{var m=Og.get(e);if(m!==void 0){var g=fd,S=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":g=xx;break;case"focusin":S="focus",g=Ll;break;case"focusout":S="blur",g=Ll;break;case"beforeblur":case"afterblur":g=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kx;break;case Gg:case Hg:case Wg:g=ux;break;case qg:g=Tx;break;case"scroll":g=sx;break;case"wheel":g=Ix;break;case"copy":case"cut":case"paste":g=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ju}var C=(t&4)!==0,k=!C&&e==="scroll",w=C?m!==null?m+"Capture":null:m;C=[];for(var x=p,y;x!==null;){y=x;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,w!==null&&(b=Rr(x,w),b!=null&&C.push(Br(x,b,y)))),k)break;x=x.return}0<C.length&&(m=new g(m,S,null,n,f),h.push({event:m,listeners:C}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==La&&(S=n.relatedTarget||n.fromElement)&&(Mn(S)||S[Gt]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=p,S=S?Mn(S):null,S!==null&&(k=Qn(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=p),g!==S)){if(C=$u,b="onMouseLeave",w="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(C=ju,b="onPointerLeave",w="onPointerEnter",x="pointer"),k=g==null?m:co(g),y=S==null?m:co(S),m=new C(b,x+"leave",g,n,f),m.target=k,m.relatedTarget=y,b=null,Mn(f)===p&&(C=new C(w,x+"enter",S,n,f),C.target=y,C.relatedTarget=k,b=C),k=b,g&&S)t:{for(C=g,w=S,x=0,y=C;y;y=eo(y))x++;for(y=0,b=w;b;b=eo(b))y++;for(;0<x-y;)C=eo(C),x--;for(;0<y-x;)w=eo(w),y--;for(;x--;){if(C===w||w!==null&&C===w.alternate)break t;C=eo(C),w=eo(w)}C=null}else C=null;g!==null&&qu(h,m,g,C,!1),S!==null&&k!==null&&qu(h,k,S,C,!0)}}e:{if(m=p?co(p):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var T=Nx;else if(Bu(m))if(Bg)T=Bx;else{T=Lx;var A=jx}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=Dx);if(T&&(T=T(e,p))){Dg(h,T,n,f);break e}A&&A(e,m,p),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Ra(m,"number",m.value)}switch(A=p?co(p):window,e){case"focusin":(Bu(A)||A.contentEditable==="true")&&(lo=A,Ga=p,kr=null);break;case"focusout":kr=Ga=lo=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,Gu(h,n,f);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":Gu(h,n,f)}var I;if(md)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else so?jg(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ng&&n.locale!=="ko"&&(so||_!=="onCompositionStart"?_==="onCompositionEnd"&&so&&(I=$g()):(ln=f,pd="value"in ln?ln.value:ln.textContent,so=!0)),A=us(p,_),0<A.length&&(_=new Nu(_,e,null,n,f),h.push({event:_,listeners:A}),I?_.data=I:(I=Lg(n),I!==null&&(_.data=I)))),(I=Ax?Px(e,n):Rx(e,n))&&(p=us(p,"onBeforeInput"),0<p.length&&(f=new Nu("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:p}),f.data=I))}Jg(h,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Rr(e,n),i!=null&&o.unshift(Br(e,i,r)),i=Rr(e,t),i!=null&&o.push(Br(e,i,r))),e=e.return}return o}function eo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qu(e,t,n,o,r){for(var i=t._reactName,s=[];n!==null&&n!==o;){var c=n,u=c.alternate,p=c.stateNode;if(u!==null&&u===o)break;c.tag===5&&p!==null&&(c=p,r?(u=Rr(n,i),u!=null&&s.unshift(Br(n,u,c))):r||(u=Rr(n,i),u!=null&&s.push(Br(n,u,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Ou(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(qx,"")}function gi(e,t,n){if(t=Ou(t),Ou(e)!==t&&n)throw Error(M(425))}function ps(){}var Wa=null,qa=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju<"u"?function(e){return Ju.resolve(null).then(e).catch(Yx)}:Ja;function Yx(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Nr(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Nr(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Rt="__reactFiber$"+qo,Ur="__reactProps$"+qo,Gt="__reactContainer$"+qo,Ya="__reactEvents$"+qo,Kx="__reactListeners$"+qo,Qx="__reactHandles$"+qo;function Mn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yu(e);e!==null;){if(n=e[Rt])return n;e=Yu(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[Rt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function co(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Qs(e){return e[Ur]||null}var Ka=[],uo=-1;function Cn(e){return{current:e}}function ie(e){0>uo||(e.current=Ka[uo],Ka[uo]=null,uo--)}function ne(e,t){uo++,Ka[uo]=e.current,e.current=t}var bn={},je=Cn(bn),He=Cn(!1),zn=bn;function Mo(e,t){var n=e.type.contextTypes;if(!n)return bn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function We(e){return e=e.childContextTypes,e!=null}function fs(){ie(He),ie(je)}function Ku(e,t,n){if(je.current!==bn)throw Error(M(168));ne(je,t),ne(He,n)}function Kg(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(M(108,jw(e)||"Unknown",r));return ce({},n,o)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,zn=je.current,ne(je,e),ne(He,He.current),!0}function Qu(e,t,n){var o=e.stateNode;if(!o)throw Error(M(169));n?(e=Kg(e,t,zn),o.__reactInternalMemoizedMergedChildContext=e,ie(He),ie(je),ne(je,e)):ie(He),ne(He,n)}var Bt=null,Xs=!1,Wl=!1;function Qg(e){Bt===null?Bt=[e]:Bt.push(e)}function Xx(e){Xs=!0,Qg(e)}function Tn(){if(!Wl&&Bt!==null){Wl=!0;var e=0,t=X;try{var n=Bt;for(X=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Bt=null,Xs=!1}catch(r){throw Bt!==null&&(Bt=Bt.slice(e+1)),bg(ad,Tn),r}finally{X=t,Wl=!1}}return null}var po=[],fo=0,ms=null,gs=0,nt=[],ot=0,Gn=null,Ut=1,Ft="";function An(e,t){po[fo++]=gs,po[fo++]=ms,ms=e,gs=t}function Xg(e,t,n){nt[ot++]=Ut,nt[ot++]=Ft,nt[ot++]=Gn,Gn=e;var o=Ut;e=Ft;var r=32-St(o)-1;o&=~(1<<r),n+=1;var i=32-St(t)+r;if(30<i){var s=r-r%5;i=(o&(1<<s)-1).toString(32),o>>=s,r-=s,Ut=1<<32-St(t)+r|n<<r|o,Ft=i+e}else Ut=1<<i|n<<r|o,Ft=e}function yd(e){e.return!==null&&(An(e,1),Xg(e,1,0))}function vd(e){for(;e===ms;)ms=po[--fo],po[fo]=null,gs=po[--fo],po[fo]=null;for(;e===Gn;)Gn=nt[--ot],nt[ot]=null,Ft=nt[--ot],nt[ot]=null,Ut=nt[--ot],nt[ot]=null}var Qe=null,Ke=null,se=!1,xt=null;function Zg(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gn!==null?{id:Ut,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ke=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(se){var t=Ke;if(t){var n=t;if(!Xu(e,t)){if(Qa(e))throw Error(M(418));t=mn(n.nextSibling);var o=Qe;t&&Xu(e,t)?Zg(o,n):(e.flags=e.flags&-4097|2,se=!1,Qe=e)}}else{if(Qa(e))throw Error(M(418));e.flags=e.flags&-4097|2,se=!1,Qe=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function yi(e){if(e!==Qe)return!1;if(!se)return Zu(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=Ke)){if(Qa(e))throw ey(),Error(M(418));for(;t;)Zg(e,t),t=mn(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Qe?mn(e.stateNode.nextSibling):null;return!0}function ey(){for(var e=Ke;e;)e=mn(e.nextSibling)}function $o(){Ke=Qe=null,se=!1}function wd(e){xt===null?xt=[e]:xt.push(e)}var Zx=Ot.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var o=n.stateNode}if(!o)throw Error(M(147,e));var r=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var c=r.refs;s===null?delete c[i]:c[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ep(e){var t=e._init;return t(e._payload)}function ty(e){function t(w,x){if(e){var y=w.deletions;y===null?(w.deletions=[x],w.flags|=16):y.push(x)}}function n(w,x){if(!e)return null;for(;x!==null;)t(w,x),x=x.sibling;return null}function o(w,x){for(w=new Map;x!==null;)x.key!==null?w.set(x.key,x):w.set(x.index,x),x=x.sibling;return w}function r(w,x){return w=wn(w,x),w.index=0,w.sibling=null,w}function i(w,x,y){return w.index=y,e?(y=w.alternate,y!==null?(y=y.index,y<x?(w.flags|=2,x):y):(w.flags|=2,x)):(w.flags|=1048576,x)}function s(w){return e&&w.alternate===null&&(w.flags|=2),w}function c(w,x,y,b){return x===null||x.tag!==6?(x=Xl(y,w.mode,b),x.return=w,x):(x=r(x,y),x.return=w,x)}function u(w,x,y,b){var T=y.type;return T===io?f(w,x,y.props.children,b,y.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===nn&&ep(T)===x.type)?(b=r(x,y.props),b.ref=or(w,x,y),b.return=w,b):(b=Yi(y.type,y.key,y.props,null,w.mode,b),b.ref=or(w,x,y),b.return=w,b)}function p(w,x,y,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Zl(y,w.mode,b),x.return=w,x):(x=r(x,y.children||[]),x.return=w,x)}function f(w,x,y,b,T){return x===null||x.tag!==7?(x=Un(y,w.mode,b,T),x.return=w,x):(x=r(x,y),x.return=w,x)}function h(w,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Xl(""+x,w.mode,y),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case li:return y=Yi(x.type,x.key,x.props,null,w.mode,y),y.ref=or(w,null,x),y.return=w,y;case ro:return x=Zl(x,w.mode,y),x.return=w,x;case nn:var b=x._init;return h(w,b(x._payload),y)}if(pr(x)||Xo(x))return x=Un(x,w.mode,y,null),x.return=w,x;vi(w,x)}return null}function m(w,x,y,b){var T=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:c(w,x,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case li:return y.key===T?u(w,x,y,b):null;case ro:return y.key===T?p(w,x,y,b):null;case nn:return T=y._init,m(w,x,T(y._payload),b)}if(pr(y)||Xo(y))return T!==null?null:f(w,x,y,b,null);vi(w,y)}return null}function g(w,x,y,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(y)||null,c(x,w,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case li:return w=w.get(b.key===null?y:b.key)||null,u(x,w,b,T);case ro:return w=w.get(b.key===null?y:b.key)||null,p(x,w,b,T);case nn:var A=b._init;return g(w,x,y,A(b._payload),T)}if(pr(b)||Xo(b))return w=w.get(y)||null,f(x,w,b,T,null);vi(x,b)}return null}function S(w,x,y,b){for(var T=null,A=null,I=x,_=x=0,P=null;I!==null&&_<y.length;_++){I.index>_?(P=I,I=null):P=I.sibling;var R=m(w,I,y[_],b);if(R===null){I===null&&(I=P);break}e&&I&&R.alternate===null&&t(w,I),x=i(R,x,_),A===null?T=R:A.sibling=R,A=R,I=P}if(_===y.length)return n(w,I),se&&An(w,_),T;if(I===null){for(;_<y.length;_++)I=h(w,y[_],b),I!==null&&(x=i(I,x,_),A===null?T=I:A.sibling=I,A=I);return se&&An(w,_),T}for(I=o(w,I);_<y.length;_++)P=g(I,w,_,y[_],b),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?_:P.key),x=i(P,x,_),A===null?T=P:A.sibling=P,A=P);return e&&I.forEach(function(B){return t(w,B)}),se&&An(w,_),T}function C(w,x,y,b){var T=Xo(y);if(typeof T!="function")throw Error(M(150));if(y=T.call(y),y==null)throw Error(M(151));for(var A=T=null,I=x,_=x=0,P=null,R=y.next();I!==null&&!R.done;_++,R=y.next()){I.index>_?(P=I,I=null):P=I.sibling;var B=m(w,I,R.value,b);if(B===null){I===null&&(I=P);break}e&&I&&B.alternate===null&&t(w,I),x=i(B,x,_),A===null?T=B:A.sibling=B,A=B,I=P}if(R.done)return n(w,I),se&&An(w,_),T;if(I===null){for(;!R.done;_++,R=y.next())R=h(w,R.value,b),R!==null&&(x=i(R,x,_),A===null?T=R:A.sibling=R,A=R);return se&&An(w,_),T}for(I=o(w,I);!R.done;_++,R=y.next())R=g(I,w,_,R.value,b),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?_:R.key),x=i(R,x,_),A===null?T=R:A.sibling=R,A=R);return e&&I.forEach(function(j){return t(w,j)}),se&&An(w,_),T}function k(w,x,y,b){if(typeof y=="object"&&y!==null&&y.type===io&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case li:e:{for(var T=y.key,A=x;A!==null;){if(A.key===T){if(T=y.type,T===io){if(A.tag===7){n(w,A.sibling),x=r(A,y.props.children),x.return=w,w=x;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===nn&&ep(T)===A.type){n(w,A.sibling),x=r(A,y.props),x.ref=or(w,A,y),x.return=w,w=x;break e}n(w,A);break}else t(w,A);A=A.sibling}y.type===io?(x=Un(y.props.children,w.mode,b,y.key),x.return=w,w=x):(b=Yi(y.type,y.key,y.props,null,w.mode,b),b.ref=or(w,x,y),b.return=w,w=b)}return s(w);case ro:e:{for(A=y.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(w,x.sibling),x=r(x,y.children||[]),x.return=w,w=x;break e}else{n(w,x);break}else t(w,x);x=x.sibling}x=Zl(y,w.mode,b),x.return=w,w=x}return s(w);case nn:return A=y._init,k(w,x,A(y._payload),b)}if(pr(y))return S(w,x,y,b);if(Xo(y))return C(w,x,y,b);vi(w,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(w,x.sibling),x=r(x,y),x.return=w,w=x):(n(w,x),x=Xl(y,w.mode,b),x.return=w,w=x),s(w)):n(w,x)}return k}var No=ty(!0),ny=ty(!1),ys=Cn(null),vs=null,ho=null,xd=null;function Sd(){xd=ho=vs=null}function bd(e){var t=ys.current;ie(ys),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Eo(e,t){vs=e,xd=ho=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(xd!==e)if(e={context:e,memoizedValue:t,next:null},ho===null){if(vs===null)throw Error(M(308));ho=e,vs.dependencies={lanes:0,firstContext:e}}else ho=ho.next=e;return t}var $n=null;function kd(e){$n===null?$n=[e]:$n.push(e)}function oy(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,kd(t)):(n.next=r.next,r.next=n),t.interleaved=n,Ht(e,o)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Cd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ry(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Y&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,Ht(e,n)}return r=o.interleaved,r===null?(t.next=t,kd(o)):(t.next=r.next,r.next=t),o.interleaved=t,Ht(e,n)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,cd(e,n)}}function tp(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ws(e,t,n,o){var r=e.updateQueue;on=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var u=c,p=u.next;u.next=null,s===null?i=p:s.next=p,s=u;var f=e.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==s&&(c===null?f.firstBaseUpdate=p:c.next=p,f.lastBaseUpdate=u))}if(i!==null){var h=r.baseState;s=0,f=p=u=null,c=i;do{var m=c.lane,g=c.eventTime;if((o&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var S=e,C=c;switch(m=t,g=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){h=S.call(g,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,m=typeof S=="function"?S.call(g,h,m):S,m==null)break e;h=ce({},h,m);break e;case 2:on=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[c]:m.push(c))}else g={eventTime:g,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(p=f=g,u=h):f=f.next=g,s|=m;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;m=c,c=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(f===null&&(u=h),r.baseState=u,r.firstBaseUpdate=p,r.lastBaseUpdate=f,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);Wn|=s,e.lanes=s,e.memoizedState=h}}function np(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(M(191,r));r.call(o)}}}var ti={},$t=Cn(ti),Fr=Cn(ti),Vr=Cn(ti);function Nn(e){if(e===ti)throw Error(M(174));return e}function Td(e,t){switch(ne(Vr,t),ne(Fr,e),ne($t,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$a(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$a(t,e)}ie($t),ne($t,t)}function jo(){ie($t),ie(Fr),ie(Vr)}function iy(e){Nn(Vr.current);var t=Nn($t.current),n=$a(t,e.type);t!==n&&(ne(Fr,e),ne($t,n))}function Ed(e){Fr.current===e&&(ie($t),ie(Fr))}var le=Cn(0);function xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Id(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Hi=Ot.ReactCurrentDispatcher,Ol=Ot.ReactCurrentBatchConfig,Hn=0,ae=null,ge=null,we=null,Ss=!1,Cr=!1,zr=0,e1=0;function Ae(){throw Error(M(321))}function _d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Ad(e,t,n,o,r,i){if(Hn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?r1:i1,e=n(o,r),Cr){i=0;do{if(Cr=!1,zr=0,25<=i)throw Error(M(301));i+=1,we=ge=null,t.updateQueue=null,Hi.current=s1,e=n(o,r)}while(Cr)}if(Hi.current=bs,t=ge!==null&&ge.next!==null,Hn=0,we=ge=ae=null,Ss=!1,t)throw Error(M(300));return e}function Pd(){var e=zr!==0;return zr=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ae.memoizedState=we=e:we=we.next=e,we}function ut(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?ae.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(M(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?ae.memoizedState=we=e:we=we.next=e}return we}function Gr(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var o=ge,r=o.baseQueue,i=n.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}o.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,o=o.baseState;var c=s=null,u=null,p=i;do{var f=p.lane;if((Hn&f)===f)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),o=p.hasEagerState?p.eagerState:e(o,p.action);else{var h={lane:f,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(c=u=h,s=o):u=u.next=h,ae.lanes|=f,Wn|=f}p=p.next}while(p!==null&&p!==i);u===null?s=o:u.next=c,Et(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=u,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do i=r.lane,ae.lanes|=i,Wn|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);Et(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,o]}function sy(){}function ly(e,t){var n=ae,o=ut(),r=t(),i=!Et(o.memoizedState,r);if(i&&(o.memoizedState=r,Ge=!0),o=o.queue,Rd(dy.bind(null,n,o,e),[e]),o.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Hr(9,cy.bind(null,n,o,r,t),void 0,null),ke===null)throw Error(M(349));Hn&30||ay(n,t,r)}return r}function ay(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cy(e,t,n,o){t.value=n,t.getSnapshot=o,uy(t)&&py(e)}function dy(e,t,n){return n(function(){uy(t)&&py(e)})}function uy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function py(e){var t=Ht(e,1);t!==null&&bt(t,e,1,-1)}function op(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=o1.bind(null,ae,e),[t.memoizedState,e]}function Hr(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function fy(){return ut().memoizedState}function Wi(e,t,n,o){var r=At();ae.flags|=e,r.memoizedState=Hr(1|t,n,void 0,o===void 0?null:o)}function Zs(e,t,n,o){var r=ut();o=o===void 0?null:o;var i=void 0;if(ge!==null){var s=ge.memoizedState;if(i=s.destroy,o!==null&&_d(o,s.deps)){r.memoizedState=Hr(t,n,i,o);return}}ae.flags|=e,r.memoizedState=Hr(1|t,n,i,o)}function rp(e,t){return Wi(8390656,8,e,t)}function Rd(e,t){return Zs(2048,8,e,t)}function hy(e,t){return Zs(4,2,e,t)}function my(e,t){return Zs(4,4,e,t)}function gy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yy(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,gy.bind(null,t,e),n)}function Md(){}function vy(e,t){var n=ut();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&_d(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function wy(e,t){var n=ut();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&_d(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function xy(e,t,n){return Hn&21?(Et(n,t)||(n=Tg(),ae.lanes|=n,Wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function t1(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var o=Ol.transition;Ol.transition={};try{e(!1),t()}finally{X=n,Ol.transition=o}}function Sy(){return ut().memoizedState}function n1(e,t,n){var o=vn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},by(e))ky(t,n);else if(n=oy(e,t,n,o),n!==null){var r=Be();bt(n,e,o,r),Cy(n,t,o)}}function o1(e,t,n){var o=vn(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(by(e))ky(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,c=i(s,n);if(r.hasEagerState=!0,r.eagerState=c,Et(c,s)){var u=t.interleaved;u===null?(r.next=r,kd(t)):(r.next=u.next,u.next=r),t.interleaved=r;return}}catch{}finally{}n=oy(e,t,r,o),n!==null&&(r=Be(),bt(n,e,o,r),Cy(n,t,o))}}function by(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function ky(e,t){Cr=Ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cy(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,cd(e,n)}}var bs={readContext:dt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},r1={readContext:dt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:rp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4194308,4,gy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=At();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=n1.bind(null,ae,e),[o.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:op,useDebugValue:Md,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=op(!1),t=e[0];return e=t1.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ae,r=At();if(se){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),ke===null)throw Error(M(349));Hn&30||ay(o,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,rp(dy.bind(null,o,i,e),[e]),o.flags|=2048,Hr(9,cy.bind(null,o,i,n,t),void 0,null),n},useId:function(){var e=At(),t=ke.identifierPrefix;if(se){var n=Ft,o=Ut;n=(o&~(1<<32-St(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=e1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i1={readContext:dt,useCallback:vy,useContext:dt,useEffect:Rd,useImperativeHandle:yy,useInsertionEffect:hy,useLayoutEffect:my,useMemo:wy,useReducer:Jl,useRef:fy,useState:function(){return Jl(Gr)},useDebugValue:Md,useDeferredValue:function(e){var t=ut();return xy(t,ge.memoizedState,e)},useTransition:function(){var e=Jl(Gr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:sy,useSyncExternalStore:ly,useId:Sy,unstable_isNewReconciler:!1},s1={readContext:dt,useCallback:vy,useContext:dt,useEffect:Rd,useImperativeHandle:yy,useInsertionEffect:hy,useLayoutEffect:my,useMemo:wy,useReducer:Yl,useRef:fy,useState:function(){return Yl(Gr)},useDebugValue:Md,useDeferredValue:function(e){var t=ut();return ge===null?t.memoizedState=e:xy(t,ge.memoizedState,e)},useTransition:function(){var e=Yl(Gr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:sy,useSyncExternalStore:ly,useId:Sy,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ec(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Be(),r=vn(e),i=Vt(o,r);i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,r),t!==null&&(bt(t,e,r,o),Gi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Be(),r=vn(e),i=Vt(o,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,r),t!==null&&(bt(t,e,r,o),Gi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),o=vn(e),r=Vt(n,o);r.tag=2,t!=null&&(r.callback=t),t=gn(e,r,o),t!==null&&(bt(t,e,o,n),Gi(t,e,o))}};function ip(e,t,n,o,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,s):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,o)||!Lr(r,i):!0}function Ty(e,t,n){var o=!1,r=bn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(r=We(t)?zn:je.current,o=t.contextTypes,i=(o=o!=null)?Mo(e,r):bn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function sp(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function tc(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Cd(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=dt(i):(i=We(t)?zn:je.current,r.context=Mo(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ec(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&el.enqueueReplaceState(r,r.state,null),ws(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Lo(e,t){try{var n="",o=t;do n+=Nw(o),o=o.return;while(o);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function Ey(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Cs||(Cs=!0,pc=o),nc(e,t)},n}function Iy(e,t,n){n=Vt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){nc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){nc(e,t),typeof o!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function lp(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new l1;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=S1.bind(null,e,t,n),t.then(e,e))}function ap(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cp(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var a1=Ot.ReactCurrentOwner,Ge=!1;function De(e,t,n,o){t.child=e===null?ny(t,null,n,o):No(t,e.child,n,o)}function dp(e,t,n,o,r){n=n.render;var i=t.ref;return Eo(t,r),o=Ad(e,t,n,o,i,r),n=Pd(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(se&&n&&yd(t),t.flags|=1,De(e,t,o,r),t.child)}function up(e,t,n,o,r){if(e===null){var i=n.type;return typeof i=="function"&&!Fd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_y(e,t,i,o,r)):(e=Yi(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(s,o)&&e.ref===t.ref)return Wt(e,t,r)}return t.flags|=1,e=wn(i,o),e.ref=t.ref,e.return=t,t.child=e}function _y(e,t,n,o,r){if(e!==null){var i=e.memoizedProps;if(Lr(i,o)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=o=i,(e.lanes&r)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Wt(e,t,r)}return oc(e,t,n,o,r)}function Ay(e,t,n){var o=t.pendingProps,r=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(go,Ye),Ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(go,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:n,ne(go,Ye),Ye|=o}else i!==null?(o=i.baseLanes|n,t.memoizedState=null):o=n,ne(go,Ye),Ye|=o;return De(e,t,r,n),t.child}function Py(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oc(e,t,n,o,r){var i=We(n)?zn:je.current;return i=Mo(t,i),Eo(t,r),n=Ad(e,t,n,o,i,r),o=Pd(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(se&&o&&yd(t),t.flags|=1,De(e,t,n,r),t.child)}function pp(e,t,n,o,r){if(We(n)){var i=!0;hs(t)}else i=!1;if(Eo(t,r),t.stateNode===null)qi(e,t),Ty(t,n,o),tc(t,n,o,r),o=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var u=s.context,p=n.contextType;typeof p=="object"&&p!==null?p=dt(p):(p=We(n)?zn:je.current,p=Mo(t,p));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==o||u!==p)&&sp(t,s,o,p),on=!1;var m=t.memoizedState;s.state=m,ws(t,o,s,r),u=t.memoizedState,c!==o||m!==u||He.current||on?(typeof f=="function"&&(ec(t,n,f,o),u=t.memoizedState),(c=on||ip(t,n,c,o,m,u,p))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=u),s.props=o,s.state=u,s.context=p,o=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,ry(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:yt(t.type,c),s.props=p,h=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=We(n)?zn:je.current,u=Mo(t,u));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==h||m!==u)&&sp(t,s,o,u),on=!1,m=t.memoizedState,s.state=m,ws(t,o,s,r);var S=t.memoizedState;c!==h||m!==S||He.current||on?(typeof g=="function"&&(ec(t,n,g,o),S=t.memoizedState),(p=on||ip(t,n,p,o,m,S,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,S,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,S,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),s.props=o,s.state=S,s.context=u,o=p):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return rc(e,t,n,o,i,r)}function rc(e,t,n,o,r,i){Py(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return r&&Qu(t,n,!1),Wt(e,t,i);o=t.stateNode,a1.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=No(t,e.child,null,i),t.child=No(t,null,c,i)):De(e,t,c,i),t.memoizedState=o.state,r&&Qu(t,n,!0),t.child}function Ry(e){var t=e.stateNode;t.pendingContext?Ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ku(e,t.context,!1),Td(e,t.containerInfo)}function fp(e,t,n,o,r){return $o(),wd(r),t.flags|=256,De(e,t,n,o),t.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function sc(e){return{baseLanes:e,cachePool:null,transitions:null}}function My(e,t,n){var o=t.pendingProps,r=le.current,i=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(r&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ne(le,r&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,i?(o=t.mode,i=t.child,s={mode:"hidden",children:s},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=ol(s,o,0,null),e=Un(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=sc(n),t.memoizedState=ic,e):$d(t,s));if(r=e.memoizedState,r!==null&&(c=r.dehydrated,c!==null))return c1(e,t,s,o,c,r,n);if(i){i=o.fallback,s=t.mode,r=e.child,c=r.sibling;var u={mode:"hidden",children:o.children};return!(s&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=u,t.deletions=null):(o=wn(r,u),o.subtreeFlags=r.subtreeFlags&14680064),c!==null?i=wn(c,i):(i=Un(i,s,n,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,s=e.child.memoizedState,s=s===null?sc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=ic,o}return i=e.child,e=i.sibling,o=wn(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function $d(e,t){return t=ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,o){return o!==null&&wd(o),No(t,e.child,null,n),e=$d(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c1(e,t,n,o,r,i,s){if(n)return t.flags&256?(t.flags&=-257,o=Kl(Error(M(422))),wi(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,r=t.mode,o=ol({mode:"visible",children:o.children},r,0,null),i=Un(i,r,s,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&No(t,e.child,null,s),t.child.memoizedState=sc(s),t.memoizedState=ic,i);if(!(t.mode&1))return wi(e,t,s,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var c=o.dgst;return o=c,i=Error(M(419)),o=Kl(i,o,void 0),wi(e,t,s,o)}if(c=(s&e.childLanes)!==0,Ge||c){if(o=ke,o!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Ht(e,r),bt(o,e,r,-1))}return Ud(),o=Kl(Error(M(421))),wi(e,t,s,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=b1.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,Ke=mn(r.nextSibling),Qe=t,se=!0,xt=null,e!==null&&(nt[ot++]=Ut,nt[ot++]=Ft,nt[ot++]=Gn,Ut=e.id,Ft=e.overflow,Gn=t),t=$d(t,o.children),t.flags|=4096,t)}function hp(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Za(e.return,t,n)}function Ql(e,t,n,o,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=n,i.tailMode=r)}function $y(e,t,n){var o=t.pendingProps,r=o.revealOrder,i=o.tail;if(De(e,t,o.children,n),o=le.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,n,t);else if(e.tag===19)hp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ne(le,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&xs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ql(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&xs(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d1(e,t,n){switch(t.tag){case 3:Ry(t),$o();break;case 5:iy(t);break;case 1:We(t.type)&&hs(t);break;case 4:Td(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;ne(ys,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?My(e,t,n):(ne(le,le.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return $y(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ne(le,le.current),o)break;return null;case 22:case 23:return t.lanes=0,Ay(e,t,n)}return Wt(e,t,n)}var Ny,lc,jy,Ly;Ny=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lc=function(){};jy=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Nn($t.current);var i=null;switch(n){case"input":r=Aa(e,r),o=Aa(e,o),i=[];break;case"select":r=ce({},r,{value:void 0}),o=ce({},o,{value:void 0}),i=[];break;case"textarea":r=Ma(e,r),o=Ma(e,o),i=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ps)}Na(n,o);var s;n=null;for(p in r)if(!o.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var c=r[p];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ar.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in o){var u=o[p];if(c=r!=null?r[p]:void 0,o.hasOwnProperty(p)&&u!==c&&(u!=null||c!=null))if(p==="style")if(c){for(s in c)!c.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&c[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(i=i||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&oe("scroll",e),i||c===u||(i=[])):(i=i||[]).push(p,u))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};Ly=function(e,t,n,o){n!==o&&(t.flags|=4)};function rr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function u1(e,t,n){var o=t.pendingProps;switch(vd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return We(t.type)&&fs(),Pe(t),null;case 3:return o=t.stateNode,jo(),ie(He),ie(je),Id(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(mc(xt),xt=null))),lc(e,t),Pe(t),null;case 5:Ed(t);var r=Nn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)jy(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(M(166));return Pe(t),null}if(e=Nn($t.current),yi(t)){o=t.stateNode,n=t.type;var i=t.memoizedProps;switch(o[Rt]=t,o[Ur]=i,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",o),oe("close",o);break;case"iframe":case"object":case"embed":oe("load",o);break;case"video":case"audio":for(r=0;r<hr.length;r++)oe(hr[r],o);break;case"source":oe("error",o);break;case"img":case"image":case"link":oe("error",o),oe("load",o);break;case"details":oe("toggle",o);break;case"input":ku(o,i),oe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},oe("invalid",o);break;case"textarea":Tu(o,i),oe("invalid",o)}Na(n,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="children"?typeof c=="string"?o.textContent!==c&&(i.suppressHydrationWarning!==!0&&gi(o.textContent,c,e),r=["children",c]):typeof c=="number"&&o.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&gi(o.textContent,c,e),r=["children",""+c]):Ar.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&oe("scroll",o)}switch(n){case"input":ai(o),Cu(o,i,!0);break;case"textarea":ai(o),Eu(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=ps)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(n,{is:o.is}):(e=s.createElement(n),n==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,n),e[Rt]=t,e[Ur]=o,Ny(e,t,!1,!1),t.stateNode=e;e:{switch(s=ja(n,o),n){case"dialog":oe("cancel",e),oe("close",e),r=o;break;case"iframe":case"object":case"embed":oe("load",e),r=o;break;case"video":case"audio":for(r=0;r<hr.length;r++)oe(hr[r],e);r=o;break;case"source":oe("error",e),r=o;break;case"img":case"image":case"link":oe("error",e),oe("load",e),r=o;break;case"details":oe("toggle",e),r=o;break;case"input":ku(e,o),r=Aa(e,o),oe("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=ce({},o,{value:void 0}),oe("invalid",e);break;case"textarea":Tu(e,o),r=Ma(e,o),oe("invalid",e);break;default:r=o}Na(n,r),c=r;for(i in c)if(c.hasOwnProperty(i)){var u=c[i];i==="style"?fg(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ug(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Pr(e,u):typeof u=="number"&&Pr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ar.hasOwnProperty(i)?u!=null&&i==="onScroll"&&oe("scroll",e):u!=null&&od(e,i,u,s))}switch(n){case"input":ai(e),Cu(e,o,!1);break;case"textarea":ai(e),Eu(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Sn(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?bo(e,!!o.multiple,i,!1):o.defaultValue!=null&&bo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=ps)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Ly(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(M(166));if(n=Nn(Vr.current),Nn($t.current),yi(t)){if(o=t.stateNode,n=t.memoizedProps,o[Rt]=t,(i=o.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:gi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(o.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Rt]=t,t.stateNode=o}return Pe(t),null;case 13:if(ie(le),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ke!==null&&t.mode&1&&!(t.flags&128))ey(),$o(),t.flags|=98560,i=!1;else if(i=yi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Rt]=t}else $o(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),i=!1}else xt!==null&&(mc(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ye===0&&(ye=3):Ud())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return jo(),lc(e,t),e===null&&Dr(t.stateNode.containerInfo),Pe(t),null;case 10:return bd(t.type._context),Pe(t),null;case 17:return We(t.type)&&fs(),Pe(t),null;case 19:if(ie(le),i=t.memoizedState,i===null)return Pe(t),null;if(o=(t.flags&128)!==0,s=i.rendering,s===null)if(o)rr(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=xs(e),s!==null){for(t.flags|=128,rr(i,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)i=n,e=o,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>Do&&(t.flags|=128,o=!0,rr(i,!1),t.lanes=4194304)}else{if(!o)if(e=xs(s),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!se)return Pe(t),null}else 2*pe()-i.renderingStartTime>Do&&n!==1073741824&&(t.flags|=128,o=!0,rr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=le.current,ne(le,o?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Bd(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ye&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function p1(e,t){switch(vd(t),t.tag){case 1:return We(t.type)&&fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jo(),ie(He),ie(je),Id(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ed(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));$o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return jo(),null;case 10:return bd(t.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var xi=!1,$e=!1,f1=typeof WeakSet=="function"?WeakSet:Set,D=null;function mo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){de(e,t,o)}else n.current=null}function ac(e,t,n){try{n()}catch(o){de(e,t,o)}}var mp=!1;function h1(e,t){if(Wa=cs,e=Vg(),gd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,c=-1,u=-1,p=0,f=0,h=e,m=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(c=s+r),h!==i||o!==0&&h.nodeType!==3||(u=s+o),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++p===r&&(c=s),m===i&&++f===o&&(u=s),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qa={focusedElem:e,selectionRange:n},cs=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,k=S.memoizedState,w=t.stateNode,x=w.getSnapshotBeforeUpdate(t.elementType===t.type?C:yt(t.type,C),k);w.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(b){de(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return S=mp,mp=!1,S}function Tr(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&ac(t,n,i)}r=r.next}while(r!==o)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dy(e){var t=e.alternate;t!==null&&(e.alternate=null,Dy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Ur],delete t[Ya],delete t[Kx],delete t[Qx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function By(e){return e.tag===5||e.tag===3||e.tag===4}function gp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||By(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(o!==4&&(e=e.child,e!==null))for(dc(e,t,n),e=e.sibling;e!==null;)dc(e,t,n),e=e.sibling}function uc(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(uc(e,t,n),e=e.sibling;e!==null;)uc(e,t,n),e=e.sibling}var Te=null,wt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Uy(e,t,n),n=n.sibling}function Uy(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Os,n)}catch{}switch(n.tag){case 5:$e||mo(n,t);case 6:var o=Te,r=wt;Te=null,Zt(e,t,n),Te=o,wt=r,Te!==null&&(wt?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(wt?(e=Te,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),Nr(e)):Hl(Te,n.stateNode));break;case 4:o=Te,r=wt,Te=n.stateNode.containerInfo,wt=!0,Zt(e,t,n),Te=o,wt=r;break;case 0:case 11:case 14:case 15:if(!$e&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ac(n,t,s),r=r.next}while(r!==o)}Zt(e,t,n);break;case 1:if(!$e&&(mo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(c){de(n,t,c)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?($e=(o=$e)||n.memoizedState!==null,Zt(e,t,n),$e=o):Zt(e,t,n);break;default:Zt(e,t,n)}}function yp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new f1),t.forEach(function(o){var r=k1.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Te=c.stateNode,wt=!1;break e;case 3:Te=c.stateNode.containerInfo,wt=!0;break e;case 4:Te=c.stateNode.containerInfo,wt=!0;break e}c=c.return}if(Te===null)throw Error(M(160));Uy(i,s,r),Te=null,wt=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(p){de(r,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fy(t,e),t=t.sibling}function Fy(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),_t(e),o&4){try{Tr(3,e,e.return),tl(3,e)}catch(C){de(e,e.return,C)}try{Tr(5,e,e.return)}catch(C){de(e,e.return,C)}}break;case 1:gt(t,e),_t(e),o&512&&n!==null&&mo(n,n.return);break;case 5:if(gt(t,e),_t(e),o&512&&n!==null&&mo(n,n.return),e.flags&32){var r=e.stateNode;try{Pr(r,"")}catch(C){de(e,e.return,C)}}if(o&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&ag(r,i),ja(c,s);var p=ja(c,i);for(s=0;s<u.length;s+=2){var f=u[s],h=u[s+1];f==="style"?fg(r,h):f==="dangerouslySetInnerHTML"?ug(r,h):f==="children"?Pr(r,h):od(r,f,h,p)}switch(c){case"input":Pa(r,i);break;case"textarea":cg(r,i);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?bo(r,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?bo(r,!!i.multiple,i.defaultValue,!0):bo(r,!!i.multiple,i.multiple?[]:"",!1))}r[Ur]=i}catch(C){de(e,e.return,C)}}break;case 6:if(gt(t,e),_t(e),o&4){if(e.stateNode===null)throw Error(M(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(C){de(e,e.return,C)}}break;case 3:if(gt(t,e),_t(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(C){de(e,e.return,C)}break;case 4:gt(t,e),_t(e);break;case 13:gt(t,e),_t(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Ld=pe())),o&4&&yp(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?($e=(p=$e)||f,gt(t,e),$e=p):gt(t,e),_t(e),o&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!f&&e.mode&1)for(D=e,f=e.child;f!==null;){for(h=D=f;D!==null;){switch(m=D,g=m.child,m.tag){case 0:case 11:case 14:case 15:Tr(4,m,m.return);break;case 1:mo(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){o=m,n=m.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(C){de(o,n,C)}}break;case 5:mo(m,m.return);break;case 22:if(m.memoizedState!==null){wp(h);continue}}g!==null?(g.return=m,D=g):wp(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,p?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=pg("display",s))}catch(C){de(e,e.return,C)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=p?"":h.memoizedProps}catch(C){de(e,e.return,C)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(t,e),_t(e),o&4&&yp(e);break;case 21:break;default:gt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(By(n)){var o=n;break e}n=n.return}throw Error(M(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Pr(r,""),o.flags&=-33);var i=gp(e);uc(e,i,r);break;case 3:case 4:var s=o.stateNode.containerInfo,c=gp(e);dc(e,c,s);break;default:throw Error(M(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function m1(e,t,n){D=e,Vy(e)}function Vy(e,t,n){for(var o=(e.mode&1)!==0;D!==null;){var r=D,i=r.child;if(r.tag===22&&o){var s=r.memoizedState!==null||xi;if(!s){var c=r.alternate,u=c!==null&&c.memoizedState!==null||$e;c=xi;var p=$e;if(xi=s,($e=u)&&!p)for(D=r;D!==null;)s=D,u=s.child,s.tag===22&&s.memoizedState!==null?xp(r):u!==null?(u.return=s,D=u):xp(r);for(;i!==null;)D=i,Vy(i),i=i.sibling;D=r,xi=c,$e=p}vp(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,D=i):vp(e)}}function vp(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||tl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!$e)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&np(t,i,o);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}np(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var f=p.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Nr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}$e||t.flags&512&&cc(t)}catch(m){de(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function wp(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function xp(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(u){de(t,n,u)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(u){de(t,r,u)}}var i=t.return;try{cc(t)}catch(u){de(t,i,u)}break;case 5:var s=t.return;try{cc(t)}catch(u){de(t,s,u)}}}catch(u){de(t,t.return,u)}if(t===e){D=null;break}var c=t.sibling;if(c!==null){c.return=t.return,D=c;break}D=t.return}}var g1=Math.ceil,ks=Ot.ReactCurrentDispatcher,Nd=Ot.ReactCurrentOwner,at=Ot.ReactCurrentBatchConfig,Y=0,ke=null,he=null,Ie=0,Ye=0,go=Cn(0),ye=0,Wr=null,Wn=0,nl=0,jd=0,Er=null,ze=null,Ld=0,Do=1/0,Lt=null,Cs=!1,pc=null,yn=null,Si=!1,an=null,Ts=0,Ir=0,fc=null,Oi=-1,Ji=0;function Be(){return Y&6?pe():Oi!==-1?Oi:Oi=pe()}function vn(e){return e.mode&1?Y&2&&Ie!==0?Ie&-Ie:Zx.transition!==null?(Ji===0&&(Ji=Tg()),Ji):(e=X,e!==0||(e=window.event,e=e===void 0?16:Mg(e.type)),e):1}function bt(e,t,n,o){if(50<Ir)throw Ir=0,fc=null,Error(M(185));Xr(e,n,o),(!(Y&2)||e!==ke)&&(e===ke&&(!(Y&2)&&(nl|=n),ye===4&&sn(e,Ie)),qe(e,o),n===1&&Y===0&&!(t.mode&1)&&(Do=pe()+500,Xs&&Tn()))}function qe(e,t){var n=e.callbackNode;Zw(e,t);var o=as(e,e===ke?Ie:0);if(o===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?Xx(Sp.bind(null,e)):Qg(Sp.bind(null,e)),Jx(function(){!(Y&6)&&Tn()}),n=null;else{switch(Eg(o)){case 1:n=ad;break;case 4:n=kg;break;case 16:n=ls;break;case 536870912:n=Cg;break;default:n=ls}n=Yy(n,zy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zy(e,t){if(Oi=-1,Ji=0,Y&6)throw Error(M(327));var n=e.callbackNode;if(Io()&&e.callbackNode!==n)return null;var o=as(e,e===ke?Ie:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Es(e,o);else{t=o;var r=Y;Y|=2;var i=Hy();(ke!==e||Ie!==t)&&(Lt=null,Do=pe()+500,Bn(e,t));do try{w1();break}catch(c){Gy(e,c)}while(!0);Sd(),ks.current=i,Y=r,he!==null?t=0:(ke=null,Ie=0,t=ye)}if(t!==0){if(t===2&&(r=Fa(e),r!==0&&(o=r,t=hc(e,r))),t===1)throw n=Wr,Bn(e,0),sn(e,o),qe(e,pe()),n;if(t===6)sn(e,o);else{if(r=e.current.alternate,!(o&30)&&!y1(r)&&(t=Es(e,o),t===2&&(i=Fa(e),i!==0&&(o=i,t=hc(e,i))),t===1))throw n=Wr,Bn(e,0),sn(e,o),qe(e,pe()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(M(345));case 2:Pn(e,ze,Lt);break;case 3:if(sn(e,o),(o&130023424)===o&&(t=Ld+500-pe(),10<t)){if(as(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Be(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ja(Pn.bind(null,e,ze,Lt),t);break}Pn(e,ze,Lt);break;case 4:if(sn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var s=31-St(o);i=1<<s,s=t[s],s>r&&(r=s),o&=~i}if(o=r,o=pe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*g1(o/1960))-o,10<o){e.timeoutHandle=Ja(Pn.bind(null,e,ze,Lt),o);break}Pn(e,ze,Lt);break;case 5:Pn(e,ze,Lt);break;default:throw Error(M(329))}}}return qe(e,pe()),e.callbackNode===n?zy.bind(null,e):null}function hc(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=Es(e,t),e!==2&&(t=ze,ze=n,t!==null&&mc(t)),e}function mc(e){ze===null?ze=e:ze.push.apply(ze,e)}function y1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],i=r.getSnapshot;r=r.value;try{if(!Et(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~jd,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),o=1<<n;e[n]=-1,t&=~o}}function Sp(e){if(Y&6)throw Error(M(327));Io();var t=as(e,0);if(!(t&1))return qe(e,pe()),null;var n=Es(e,t);if(e.tag!==0&&n===2){var o=Fa(e);o!==0&&(t=o,n=hc(e,o))}if(n===1)throw n=Wr,Bn(e,0),sn(e,t),qe(e,pe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,ze,Lt),qe(e,pe()),null}function Dd(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Do=pe()+500,Xs&&Tn())}}function qn(e){an!==null&&an.tag===0&&!(Y&6)&&Io();var t=Y;Y|=1;var n=at.transition,o=X;try{if(at.transition=null,X=1,e)return e()}finally{X=o,at.transition=n,Y=t,!(Y&6)&&Tn()}}function Bd(){Ye=go.current,ie(go)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ox(n)),he!==null)for(n=he.return;n!==null;){var o=n;switch(vd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&fs();break;case 3:jo(),ie(He),ie(je),Id();break;case 5:Ed(o);break;case 4:jo();break;case 13:ie(le);break;case 19:ie(le);break;case 10:bd(o.type._context);break;case 22:case 23:Bd()}n=n.return}if(ke=e,he=e=wn(e.current,null),Ie=Ye=t,ye=0,Wr=null,jd=nl=Wn=0,ze=Er=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,i=n.pending;if(i!==null){var s=i.next;i.next=r,o.next=s}n.pending=o}$n=null}return e}function Gy(e,t){do{var n=he;try{if(Sd(),Hi.current=bs,Ss){for(var o=ae.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Ss=!1}if(Hn=0,we=ge=ae=null,Cr=!1,zr=0,Nd.current=null,n===null||n.return===null){ye=1,Wr=t,he=null;break}e:{var i=e,s=n.return,c=n,u=t;if(t=Ie,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,f=c,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ap(s);if(g!==null){g.flags&=-257,cp(g,s,c,i,t),g.mode&1&&lp(i,p,t),t=g,u=p;var S=t.updateQueue;if(S===null){var C=new Set;C.add(u),t.updateQueue=C}else S.add(u);break e}else{if(!(t&1)){lp(i,p,t),Ud();break e}u=Error(M(426))}}else if(se&&c.mode&1){var k=ap(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),cp(k,s,c,i,t),wd(Lo(u,c));break e}}i=u=Lo(u,c),ye!==4&&(ye=2),Er===null?Er=[i]:Er.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var w=Ey(i,u,t);tp(i,w);break e;case 1:c=u;var x=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yn===null||!yn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=Iy(i,c,t);tp(i,b);break e}}i=i.return}while(i!==null)}qy(n)}catch(T){t=T,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Hy(){var e=ks.current;return ks.current=bs,e===null?bs:e}function Ud(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(Wn&268435455)&&!(nl&268435455)||sn(ke,Ie)}function Es(e,t){var n=Y;Y|=2;var o=Hy();(ke!==e||Ie!==t)&&(Lt=null,Bn(e,t));do try{v1();break}catch(r){Gy(e,r)}while(!0);if(Sd(),Y=n,ks.current=o,he!==null)throw Error(M(261));return ke=null,Ie=0,ye}function v1(){for(;he!==null;)Wy(he)}function w1(){for(;he!==null&&!Hw();)Wy(he)}function Wy(e){var t=Jy(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?qy(e):he=t,Nd.current=null}function qy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p1(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,he=null;return}}else if(n=u1(n,t,Ye),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ye===0&&(ye=5)}function Pn(e,t,n){var o=X,r=at.transition;try{at.transition=null,X=1,x1(e,t,n,o)}finally{at.transition=r,X=o}return null}function x1(e,t,n,o){do Io();while(an!==null);if(Y&6)throw Error(M(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ex(e,i),e===ke&&(he=ke=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,Yy(ls,function(){return Io(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var s=X;X=1;var c=Y;Y|=4,Nd.current=null,h1(e,n),Fy(n,e),Fx(qa),cs=!!Wa,qa=Wa=null,e.current=n,m1(n),Ww(),Y=c,X=s,at.transition=i}else e.current=n;if(Si&&(Si=!1,an=e,Ts=r),i=e.pendingLanes,i===0&&(yn=null),Jw(n.stateNode),qe(e,pe()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Cs)throw Cs=!1,e=pc,pc=null,e;return Ts&1&&e.tag!==0&&Io(),i=e.pendingLanes,i&1?e===fc?Ir++:(Ir=0,fc=e):Ir=0,Tn(),null}function Io(){if(an!==null){var e=Eg(Ts),t=at.transition,n=X;try{if(at.transition=null,X=16>e?16:e,an===null)var o=!1;else{if(e=an,an=null,Ts=0,Y&6)throw Error(M(331));var r=Y;for(Y|=4,D=e.current;D!==null;){var i=D,s=i.child;if(D.flags&16){var c=i.deletions;if(c!==null){for(var u=0;u<c.length;u++){var p=c[u];for(D=p;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:Tr(8,f,i)}var h=f.child;if(h!==null)h.return=f,D=h;else for(;D!==null;){f=D;var m=f.sibling,g=f.return;if(Dy(f),f===p){D=null;break}if(m!==null){m.return=g,D=m;break}D=g}}}var S=i.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var k=C.sibling;C.sibling=null,C=k}while(C!==null)}}D=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,D=s;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Tr(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,D=w;break e}D=i.return}}var x=e.current;for(D=x;D!==null;){s=D;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,D=y;else e:for(s=x;D!==null;){if(c=D,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:tl(9,c)}}catch(T){de(c,c.return,T)}if(c===s){D=null;break e}var b=c.sibling;if(b!==null){b.return=c.return,D=b;break e}D=c.return}}if(Y=r,Tn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Os,e)}catch{}o=!0}return o}finally{X=n,at.transition=t}}return!1}function bp(e,t,n){t=Lo(n,t),t=Ey(e,t,1),e=gn(e,t,1),t=Be(),e!==null&&(Xr(e,1,t),qe(e,t))}function de(e,t,n){if(e.tag===3)bp(e,e,n);else for(;t!==null;){if(t.tag===3){bp(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(yn===null||!yn.has(o))){e=Lo(n,e),e=Iy(t,e,1),t=gn(t,e,1),e=Be(),t!==null&&(Xr(t,1,e),qe(t,e));break}}t=t.return}}function S1(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ie&n)===n&&(ye===4||ye===3&&(Ie&130023424)===Ie&&500>pe()-Ld?Bn(e,0):jd|=n),qe(e,t)}function Oy(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=Be();e=Ht(e,t),e!==null&&(Xr(e,t,n),qe(e,n))}function b1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Oy(e,n)}function k1(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(M(314))}o!==null&&o.delete(t),Oy(e,n)}var Jy;Jy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,d1(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,se&&t.flags&1048576&&Xg(t,gs,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;qi(e,t),e=t.pendingProps;var r=Mo(t,je.current);Eo(t,n),r=Ad(null,t,o,e,r,n);var i=Pd();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(o)?(i=!0,hs(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cd(t),r.updater=el,t.stateNode=r,r._reactInternals=t,tc(t,o,e,n),t=rc(null,t,o,!0,i,n)):(t.tag=0,se&&i&&yd(t),De(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=T1(o),e=yt(o,e),r){case 0:t=oc(null,t,o,e,n);break e;case 1:t=pp(null,t,o,e,n);break e;case 11:t=dp(null,t,o,e,n);break e;case 14:t=up(null,t,o,yt(o.type,e),n);break e}throw Error(M(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:yt(o,r),oc(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:yt(o,r),pp(e,t,o,r,n);case 3:e:{if(Ry(t),e===null)throw Error(M(387));o=t.pendingProps,i=t.memoizedState,r=i.element,ry(e,t),ws(t,o,null,n);var s=t.memoizedState;if(o=s.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=Lo(Error(M(423)),t),t=fp(e,t,o,n,r);break e}else if(o!==r){r=Lo(Error(M(424)),t),t=fp(e,t,o,n,r);break e}else for(Ke=mn(t.stateNode.containerInfo.firstChild),Qe=t,se=!0,xt=null,n=ny(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),o===r){t=Wt(e,t,n);break e}De(e,t,o,n)}t=t.child}return t;case 5:return iy(t),e===null&&Xa(t),o=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,Oa(o,r)?s=null:i!==null&&Oa(o,i)&&(t.flags|=32),Py(e,t),De(e,t,s,n),t.child;case 6:return e===null&&Xa(t),null;case 13:return My(e,t,n);case 4:return Td(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=No(t,null,o,n):De(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:yt(o,r),dp(e,t,o,r,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,i=t.memoizedProps,s=r.value,ne(ys,o._currentValue),o._currentValue=s,i!==null)if(Et(i.value,s)){if(i.children===r.children&&!He.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){s=i.child;for(var u=c.firstContext;u!==null;){if(u.context===o){if(i.tag===1){u=Vt(-1,n&-n),u.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var f=p.pending;f===null?u.next=u:(u.next=f.next,f.next=u),p.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Za(i.return,n,t),c.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(M(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Za(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}De(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Eo(t,n),r=dt(r),o=o(r),t.flags|=1,De(e,t,o,n),t.child;case 14:return o=t.type,r=yt(o,t.pendingProps),r=yt(o.type,r),up(e,t,o,r,n);case 15:return _y(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:yt(o,r),qi(e,t),t.tag=1,We(o)?(e=!0,hs(t)):e=!1,Eo(t,n),Ty(t,o,r),tc(t,o,r,n),rc(null,t,o,!0,e,n);case 19:return $y(e,t,n);case 22:return Ay(e,t,n)}throw Error(M(156,t.tag))};function Yy(e,t){return bg(e,t)}function C1(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,o){return new C1(e,t,n,o)}function Fd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T1(e){if(typeof e=="function")return Fd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===id)return 11;if(e===sd)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,o,r,i){var s=2;if(o=e,typeof e=="function")Fd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case io:return Un(n.children,r,i,t);case rd:s=8,r|=8;break;case Ta:return e=lt(12,n,t,r|2),e.elementType=Ta,e.lanes=i,e;case Ea:return e=lt(13,n,t,r),e.elementType=Ea,e.lanes=i,e;case Ia:return e=lt(19,n,t,r),e.elementType=Ia,e.lanes=i,e;case ig:return ol(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case og:s=10;break e;case rg:s=9;break e;case id:s=11;break e;case sd:s=14;break e;case nn:s=16,o=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=lt(s,n,t,r),t.elementType=e,t.type=o,t.lanes=i,t}function Un(e,t,n,o){return e=lt(7,e,o,t),e.lanes=n,e}function ol(e,t,n,o){return e=lt(22,e,o,t),e.elementType=ig,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E1(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vd(e,t,n,o,r,i,s,c,u){return e=new E1(e,t,n,c,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(i),e}function I1(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Ky(e){if(!e)return bn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(We(n))return Kg(e,n,t)}return t}function Qy(e,t,n,o,r,i,s,c,u){return e=Vd(n,o,!0,e,r,i,s,c,u),e.context=Ky(null),n=e.current,o=Be(),r=vn(n),i=Vt(o,r),i.callback=t??null,gn(n,i,r),e.current.lanes=r,Xr(e,r,o),qe(e,o),e}function rl(e,t,n,o){var r=t.current,i=Be(),s=vn(r);return n=Ky(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(i,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=gn(r,t,s),e!==null&&(bt(e,r,s,i),Gi(e,r,s)),s}function Is(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zd(e,t){kp(e,t),(e=e.alternate)&&kp(e,t)}function _1(){return null}var Xy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gd(e){this._internalRoot=e}il.prototype.render=Gd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));rl(e,t,null,null)};il.prototype.unmount=Gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){rl(null,e,null,null)}),t[Gt]=null}};function il(e){this._internalRoot=e}il.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ag();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Rg(e)}};function Hd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function A1(e,t,n,o,r){if(r){if(typeof o=="function"){var i=o;o=function(){var p=Is(s);i.call(p)}}var s=Qy(t,o,e,0,null,!1,!1,"",Cp);return e._reactRootContainer=s,e[Gt]=s.current,Dr(e.nodeType===8?e.parentNode:e),qn(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var c=o;o=function(){var p=Is(u);c.call(p)}}var u=Vd(e,0,!1,null,null,!1,!1,"",Cp);return e._reactRootContainer=u,e[Gt]=u.current,Dr(e.nodeType===8?e.parentNode:e),qn(function(){rl(t,u,n,o)}),u}function ll(e,t,n,o,r){var i=n._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var c=r;r=function(){var u=Is(s);c.call(u)}}rl(t,s,e,r)}else s=A1(n,t,e,r,o);return Is(s)}Ig=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(cd(t,n|1),qe(t,pe()),!(Y&6)&&(Do=pe()+500,Tn()))}break;case 13:qn(function(){var o=Ht(e,1);if(o!==null){var r=Be();bt(o,e,1,r)}}),zd(e,1)}};dd=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Be();bt(t,e,134217728,n)}zd(e,134217728)}};_g=function(e){if(e.tag===13){var t=vn(e),n=Ht(e,t);if(n!==null){var o=Be();bt(n,e,t,o)}zd(e,t)}};Ag=function(){return X};Pg=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Da=function(e,t,n){switch(t){case"input":if(Pa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=Qs(o);if(!r)throw Error(M(90));lg(o),Pa(o,r)}}}break;case"textarea":cg(e,n);break;case"select":t=n.value,t!=null&&bo(e,!!n.multiple,t,!1)}};gg=Dd;yg=qn;var P1={usingClientEntryPoint:!1,Events:[ei,co,Qs,hg,mg,Dd]},ir={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R1={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xg(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||_1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{Os=bi.inject(R1),Mt=bi}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(t))throw Error(M(200));return I1(e,t,null,n)};Ze.createRoot=function(e,t){if(!Hd(e))throw Error(M(299));var n=!1,o="",r=Xy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Vd(e,1,!1,null,null,n,!1,o,r),e[Gt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Gd(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=xg(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return qn(e)};Ze.hydrate=function(e,t,n){if(!sl(t))throw Error(M(200));return ll(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!Hd(e))throw Error(M(405));var o=n!=null&&n.hydratedSources||null,r=!1,i="",s=Xy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qy(t,null,e,1,n??null,r,!1,i,s),e[Gt]=t.current,Dr(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new il(t)};Ze.render=function(e,t,n){if(!sl(t))throw Error(M(200));return ll(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!sl(e))throw Error(M(40));return e._reactRootContainer?(qn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Dd;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!sl(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return ll(e,t,n,!1,o)};Ze.version="18.3.1-next-f1338f8080-20240426";function Zy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zy)}catch(e){console.error(e)}}Zy(),Zm.exports=Ze;var M1=Zm.exports,e0,Tp=M1;e0=Tp.createRoot,Tp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qr.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const Ep="popstate";function $1(e){e===void 0&&(e={});function t(r,i){let{pathname:s="/",search:c="",hash:u=""}=Xn(r.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),gc("",{pathname:s,search:c,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){let s=r.document.querySelector("base"),c="";if(s&&s.getAttribute("href")){let u=r.location.href,p=u.indexOf("#");c=p===-1?u:u.slice(0,p)}return c+"#"+(typeof i=="string"?i:t0(i))}function o(r,i){al(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return j1(t,n,o,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function al(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function N1(){return Math.random().toString(36).substr(2,8)}function Ip(e,t){return{usr:e.state,key:e.key,idx:t}}function gc(e,t,n,o){return n===void 0&&(n=null),qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xn(t):t,{state:n,key:t&&t.key||o||N1()})}function t0(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Xn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function j1(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:i=!1}=o,s=r.history,c=cn.Pop,u=null,p=f();p==null&&(p=0,s.replaceState(qr({},s.state,{idx:p}),""));function f(){return(s.state||{idx:null}).idx}function h(){c=cn.Pop;let k=f(),w=k==null?null:k-p;p=k,u&&u({action:c,location:C.location,delta:w})}function m(k,w){c=cn.Push;let x=gc(C.location,k,w);n&&n(x,k),p=f()+1;let y=Ip(x,p),b=C.createHref(x);try{s.pushState(y,"",b)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(b)}i&&u&&u({action:c,location:C.location,delta:1})}function g(k,w){c=cn.Replace;let x=gc(C.location,k,w);n&&n(x,k),p=f();let y=Ip(x,p),b=C.createHref(x);s.replaceState(y,"",b),i&&u&&u({action:c,location:C.location,delta:0})}function S(k){let w=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof k=="string"?k:t0(k);return x=x.replace(/ $/,"%20"),me(w,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,w)}let C={get action(){return c},get location(){return e(r,s)},listen(k){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(Ep,h),u=k,()=>{r.removeEventListener(Ep,h),u=null}},createHref(k){return t(r,k)},createURL:S,encodeLocation(k){let w=S(k);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:g,go(k){return s.go(k)}};return C}var _p;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_p||(_p={}));function L1(e,t,n){return n===void 0&&(n="/"),D1(e,t,n)}function D1(e,t,n,o){let r=typeof t=="string"?Xn(t):t,i=r0(r.pathname||"/",n);if(i==null)return null;let s=n0(e);B1(s);let c=null;for(let u=0;c==null&&u<s.length;++u){let p=K1(i);c=O1(s[u],p)}return c}function n0(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(i,s,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(me(u.relativePath.startsWith(o),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(o.length));let p=Fn([o,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(me(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),n0(i.children,t,f,p)),!(i.path==null&&!i.index)&&t.push({path:p,score:W1(p,i.index),routesMeta:f})};return e.forEach((i,s)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))r(i,s);else for(let u of o0(i.path))r(i,s,u)}),t}function o0(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(o.length===0)return r?[i,""]:[i];let s=o0(o.join("/")),c=[];return c.push(...s.map(u=>u===""?i:[i,u].join("/"))),r&&c.push(...s),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function B1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q1(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const U1=/^:[\w-]+$/,F1=3,V1=2,z1=1,G1=10,H1=-2,Ap=e=>e==="*";function W1(e,t){let n=e.split("/"),o=n.length;return n.some(Ap)&&(o+=H1),t&&(o+=V1),n.filter(r=>!Ap(r)).reduce((r,i)=>r+(U1.test(i)?F1:i===""?z1:G1),o)}function q1(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function O1(e,t,n){let{routesMeta:o}=e,r={},i="/",s=[];for(let c=0;c<o.length;++c){let u=o[c],p=c===o.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=J1({path:u.relativePath,caseSensitive:u.caseSensitive,end:p},f),m=u.route;if(!h)return null;Object.assign(r,h.params),s.push({params:r,pathname:Fn([i,h.pathname]),pathnameBase:tS(Fn([i,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(i=Fn([i,h.pathnameBase]))}return s}function J1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Y1(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],s=i.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:o.reduce((p,f,h)=>{let{paramName:m,isOptional:g}=f;if(m==="*"){let C=c[h]||"";s=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const S=c[h];return g&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:i,pathnameBase:s,pattern:e}}function Y1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),al(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,u)=>(o.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function K1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return al(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function r0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}const Q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X1=e=>Q1.test(e);function Z1(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?Xn(e):e,i;if(n)if(X1(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),al(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Pp(n.substring(1),"/"):i=Pp(n,t)}else i=t;return{pathname:i,search:nS(o),hash:oS(r)}}function Pp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ea(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function i0(e,t){let n=eS(e);return t?n.map((o,r)=>r===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function s0(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Xn(e):(r=qr({},e),me(!r.pathname||!r.pathname.includes("?"),ea("?","pathname","search",r)),me(!r.pathname||!r.pathname.includes("#"),ea("#","pathname","hash",r)),me(!r.search||!r.search.includes("#"),ea("#","search","hash",r)));let i=e===""||r.pathname==="",s=i?"/":r.pathname,c;if(s==null)c=n;else{let h=t.length-1;if(!o&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;r.pathname=m.join("/")}c=h>=0?t[h]:"/"}let u=Z1(r,c),p=s&&s!=="/"&&s.endsWith("/"),f=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(p||f)&&(u.pathname+="/"),u}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),tS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,oS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const l0=["post","put","patch","delete"];new Set(l0);const iS=["get",...l0];new Set(iS);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Or.apply(this,arguments)}const Wd=E.createContext(null),sS=E.createContext(null),ni=E.createContext(null),cl=E.createContext(null),Jt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),a0=E.createContext(null);function oi(){return E.useContext(cl)!=null}function tt(){return oi()||me(!1),E.useContext(cl).location}function c0(e){E.useContext(ni).static||E.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=E.useContext(Jt);return e?bS():lS()}function lS(){oi()||me(!1);let e=E.useContext(Wd),{basename:t,future:n,navigator:o}=E.useContext(ni),{matches:r}=E.useContext(Jt),{pathname:i}=tt(),s=JSON.stringify(i0(r,n.v7_relativeSplatPath)),c=E.useRef(!1);return c0(()=>{c.current=!0}),E.useCallback(function(p,f){if(f===void 0&&(f={}),!c.current)return;if(typeof p=="number"){o.go(p);return}let h=s0(p,JSON.parse(s),i,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Fn([t,h.pathname])),(f.replace?o.replace:o.push)(h,f.state,f)},[t,o,s,i,e])}const aS=E.createContext(null);function cS(e){let t=E.useContext(Jt).outlet;return t&&E.createElement(aS.Provider,{value:e},t)}function dS(){let{matches:e}=E.useContext(Jt),t=e[e.length-1];return t?t.params:{}}function uS(e,t){return pS(e,t)}function pS(e,t,n,o){oi()||me(!1);let{navigator:r}=E.useContext(ni),{matches:i}=E.useContext(Jt),s=i[i.length-1],c=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let p=tt(),f;if(t){var h;let k=typeof t=="string"?Xn(t):t;u==="/"||(h=k.pathname)!=null&&h.startsWith(u)||me(!1),f=k}else f=p;let m=f.pathname||"/",g=m;if(u!=="/"){let k=u.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=L1(e,{pathname:g}),C=yS(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},c,k.params),pathname:Fn([u,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Fn([u,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,o);return t&&C?E.createElement(cl.Provider,{value:{location:Or({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:cn.Pop}},C):C}function fS(){let e=SS(),t=rS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:r},n):null,null)}const hS=E.createElement(fS,null);class mS extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Jt.Provider,{value:this.props.routeContext},E.createElement(a0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gS(e){let{routeContext:t,match:n,children:o}=e,r=E.useContext(Wd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Jt.Provider,{value:t},o)}function yS(e,t,n,o){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=o)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=(r=n)==null?void 0:r.errors;if(c!=null){let f=s.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);f>=0||me(!1),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,p=-1;if(n&&o&&o.v7_partialHydration)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=f),h.route.id){let{loaderData:m,errors:g}=n,S=h.route.loader&&m[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||S){u=!0,p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}return s.reduceRight((f,h,m)=>{let g,S=!1,C=null,k=null;n&&(g=c&&h.route.id?c[h.route.id]:void 0,C=h.route.errorElement||hS,u&&(p<0&&m===0?(kS("route-fallback"),S=!0,k=null):p===m&&(S=!0,k=h.route.hydrateFallbackElement||null)));let w=t.concat(s.slice(0,m+1)),x=()=>{let y;return g?y=C:S?y=k:h.route.Component?y=E.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=f,E.createElement(gS,{match:h,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?E.createElement(mS,{location:n.location,revalidation:n.revalidation,component:C,error:g,children:x(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):x()},null)}var d0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(d0||{}),u0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(u0||{});function vS(e){let t=E.useContext(Wd);return t||me(!1),t}function wS(e){let t=E.useContext(sS);return t||me(!1),t}function xS(e){let t=E.useContext(Jt);return t||me(!1),t}function p0(e){let t=xS(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function SS(){var e;let t=E.useContext(a0),n=wS(),o=p0();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function bS(){let{router:e}=vS(d0.UseNavigateStable),t=p0(u0.UseNavigateStable),n=E.useRef(!1);return c0(()=>{n.current=!0}),E.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Or({fromRouteId:t},i)))},[e,t])}const Rp={};function kS(e,t,n){Rp[e]||(Rp[e]=!0)}function CS(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function TS(e){let{to:t,replace:n,state:o,relative:r}=e;oi()||me(!1);let{future:i,static:s}=E.useContext(ni),{matches:c}=E.useContext(Jt),{pathname:u}=tt(),p=ht(),f=s0(t,i0(c,i.v7_relativeSplatPath),u,r==="path"),h=JSON.stringify(f);return E.useEffect(()=>p(JSON.parse(h),{replace:n,state:o,relative:r}),[p,h,r,n,o]),null}function ES(e){return cS(e.context)}function ue(e){me(!1)}function IS(e){let{basename:t="/",children:n=null,location:o,navigationType:r=cn.Pop,navigator:i,static:s=!1,future:c}=e;oi()&&me(!1);let u=t.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:u,navigator:i,static:s,future:Or({v7_relativeSplatPath:!1},c)}),[u,c,i,s]);typeof o=="string"&&(o=Xn(o));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:S="default"}=o,C=E.useMemo(()=>{let k=r0(f,u);return k==null?null:{location:{pathname:k,search:h,hash:m,state:g,key:S},navigationType:r}},[u,f,h,m,g,S,r]);return C==null?null:E.createElement(ni.Provider,{value:p},E.createElement(cl.Provider,{children:n,value:C}))}function _S(e){let{children:t,location:n}=e;return uS(yc(t),n)}new Promise(()=>{});function yc(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(o,r)=>{if(!E.isValidElement(o))return;let i=[...t,r];if(o.type===E.Fragment){n.push.apply(n,yc(o.props.children,i));return}o.type!==ue&&me(!1),!o.props.index||!o.props.children||me(!1);let s={id:o.props.id||i.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(s.children=yc(o.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let o=e[n];return t.concat(Array.isArray(o)?o.map(r=>[n,r]):[[n,o]])},[]))}function AS(e,t){let n=vc(e);return t&&t.forEach((o,r)=>{n.has(r)||t.getAll(r).forEach(i=>{n.append(r,i)})}),n}const PS="6";try{window.__reactRouterVersion=PS}catch{}const RS="startTransition",Mp=Sw[RS];function MS(e){let{basename:t,children:n,future:o,window:r}=e,i=E.useRef();i.current==null&&(i.current=$1({window:r,v5Compat:!0}));let s=i.current,[c,u]=E.useState({action:s.action,location:s.location}),{v7_startTransition:p}=o||{},f=E.useCallback(h=>{p&&Mp?Mp(()=>u(h)):u(h)},[u,p]);return E.useLayoutEffect(()=>s.listen(f),[s,f]),E.useEffect(()=>CS(o),[o]),E.createElement(IS,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:o})}var $p;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($p||($p={}));var Np;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Np||(Np={}));function qd(e){let t=E.useRef(vc(e)),n=E.useRef(!1),o=tt(),r=E.useMemo(()=>AS(o.search,n.current?null:t.current),[o.search]),i=ht(),s=E.useCallback((c,u)=>{const p=vc(typeof c=="function"?c(r):c);n.current=!0,i("?"+p,u)},[i,r]);return[r,s]}var be=function(){return be=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},be.apply(this,arguments)};function Bo(e,t,n){if(n||arguments.length===2)for(var o=0,r=t.length,i;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}var re="-ms-",_r="-moz-",Q="-webkit-",f0="comm",dl="rule",Od="decl",$S="@import",h0="@keyframes",NS="@layer",m0=Math.abs,Jd=String.fromCharCode,wc=Object.assign;function jS(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function g0(e){return e.trim()}function Dt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Ki(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function Uo(e,t,n){return e.slice(t,n)}function Pt(e){return e.length}function y0(e){return e.length}function mr(e,t){return t.push(e),e}function LS(e,t){return e.map(t).join("")}function jp(e,t){return e.filter(function(n){return!Dt(n,t)})}var ul=1,Fo=1,v0=0,pt=0,fe=0,Oo="";function pl(e,t,n,o,r,i,s,c){return{value:e,root:t,parent:n,type:o,props:r,children:i,line:ul,column:Fo,length:s,return:"",siblings:c}}function en(e,t){return wc(pl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function to(e){for(;e.root;)e=en(e.root,{children:[e]});mr(e,e.siblings)}function DS(){return fe}function BS(){return fe=pt>0?xe(Oo,--pt):0,Fo--,fe===10&&(Fo=1,ul--),fe}function kt(){return fe=pt<v0?xe(Oo,pt++):0,Fo++,fe===10&&(Fo=1,ul++),fe}function Vn(){return xe(Oo,pt)}function Qi(){return pt}function fl(e,t){return Uo(Oo,e,t)}function xc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function US(e){return ul=Fo=1,v0=Pt(Oo=e),pt=0,[]}function FS(e){return Oo="",e}function ta(e){return g0(fl(pt-1,Sc(e===91?e+2:e===40?e+1:e)))}function VS(e){for(;(fe=Vn())&&fe<33;)kt();return xc(e)>2||xc(fe)>3?"":" "}function zS(e,t){for(;--t&&kt()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return fl(e,Qi()+(t<6&&Vn()==32&&kt()==32))}function Sc(e){for(;kt();)switch(fe){case e:return pt;case 34:case 39:e!==34&&e!==39&&Sc(fe);break;case 40:e===41&&Sc(e);break;case 92:kt();break}return pt}function GS(e,t){for(;kt()&&e+fe!==57;)if(e+fe===84&&Vn()===47)break;return"/*"+fl(t,pt-1)+"*"+Jd(e===47?e:kt())}function HS(e){for(;!xc(Vn());)kt();return fl(e,pt)}function WS(e){return FS(Xi("",null,null,null,[""],e=US(e),0,[0],e))}function Xi(e,t,n,o,r,i,s,c,u){for(var p=0,f=0,h=s,m=0,g=0,S=0,C=1,k=1,w=1,x=0,y="",b=r,T=i,A=o,I=y;k;)switch(S=x,x=kt()){case 40:if(S!=108&&xe(I,h-1)==58){Ki(I+=O(ta(x),"&","&\f"),"&\f",m0(p?c[p-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:I+=ta(x);break;case 9:case 10:case 13:case 32:I+=VS(S);break;case 92:I+=zS(Qi()-1,7);continue;case 47:switch(Vn()){case 42:case 47:mr(qS(GS(kt(),Qi()),t,n,u),u);break;default:I+="/"}break;case 123*C:c[p++]=Pt(I)*w;case 125*C:case 59:case 0:switch(x){case 0:case 125:k=0;case 59+f:w==-1&&(I=O(I,/\f/g,"")),g>0&&Pt(I)-h&&mr(g>32?Dp(I+";",o,n,h-1,u):Dp(O(I," ","")+";",o,n,h-2,u),u);break;case 59:I+=";";default:if(mr(A=Lp(I,t,n,p,f,r,c,y,b=[],T=[],h,i),i),x===123)if(f===0)Xi(I,t,A,A,b,i,h,c,T);else switch(m===99&&xe(I,3)===110?100:m){case 100:case 108:case 109:case 115:Xi(e,A,A,o&&mr(Lp(e,A,A,0,0,r,c,y,r,b=[],h,T),T),r,T,h,c,o?b:T);break;default:Xi(I,A,A,A,[""],T,0,c,T)}}p=f=g=0,C=w=1,y=I="",h=s;break;case 58:h=1+Pt(I),g=S;default:if(C<1){if(x==123)--C;else if(x==125&&C++==0&&BS()==125)continue}switch(I+=Jd(x),x*C){case 38:w=f>0?1:(I+="\f",-1);break;case 44:c[p++]=(Pt(I)-1)*w,w=1;break;case 64:Vn()===45&&(I+=ta(kt())),m=Vn(),f=h=Pt(y=I+=HS(Qi())),x++;break;case 45:S===45&&Pt(I)==2&&(C=0)}}return i}function Lp(e,t,n,o,r,i,s,c,u,p,f,h){for(var m=r-1,g=r===0?i:[""],S=y0(g),C=0,k=0,w=0;C<o;++C)for(var x=0,y=Uo(e,m+1,m=m0(k=s[C])),b=e;x<S;++x)(b=g0(k>0?g[x]+" "+y:O(y,/&\f/g,g[x])))&&(u[w++]=b);return pl(e,t,n,r===0?dl:c,u,p,f,h)}function qS(e,t,n,o){return pl(e,t,n,f0,Jd(DS()),Uo(e,2,-2),0,o)}function Dp(e,t,n,o,r){return pl(e,t,n,Od,Uo(e,0,o),Uo(e,o+1,-1),o,r)}function w0(e,t,n){switch(jS(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return _r+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+_r+e+re+e+e;case 5936:switch(xe(e,t+11)){case 114:return Q+e+re+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+re+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+re+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+re+e+e;case 6165:return Q+e+re+"flex-"+e+e;case 5187:return Q+e+O(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return Q+e+re+"flex-item-"+O(e,/flex-|-self/g,"")+(Dt(e,/flex-|baseline/)?"":re+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return Q+e+re+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+re+O(e,"shrink","negative")+e;case 5292:return Q+e+re+O(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+O(e,"-grow","")+Q+e+re+O(e,"grow","positive")+e;case 4554:return Q+O(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!Dt(e,/flex-|baseline/))return re+"grid-column-align"+Uo(e,t)+e;break;case 2592:case 3360:return re+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(o,r){return t=r,Dt(o.props,/grid-\w+-end/)})?~Ki(e+(n=n[t].value),"span",0)?e:re+O(e,"-start","")+e+re+"grid-row-span:"+(~Ki(n,"span",0)?Dt(n,/\d+/):+Dt(n,/\d+/)-+Dt(e,/\d+/))+";":re+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(o){return Dt(o.props,/grid-\w+-start/)})?e:re+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+_r+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ki(e,"stretch",0)?w0(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,r,i,s,c,u,p){return re+r+":"+i+p+(s?re+r+"-span:"+(c?u:+u-+i)+p:"")+e});case 4949:if(xe(e,t+6)===121)return O(e,":",":"+Q)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(xe(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+re+"$2box$3")+e;case 100:return O(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function _s(e,t){for(var n="",o=0;o<e.length;o++)n+=t(e[o],o,e,t)||"";return n}function OS(e,t,n,o){switch(e.type){case NS:if(e.children.length)break;case $S:case Od:return e.return=e.return||e.value;case f0:return"";case h0:return e.return=e.value+"{"+_s(e.children,o)+"}";case dl:if(!Pt(e.value=e.props.join(",")))return""}return Pt(n=_s(e.children,o))?e.return=e.value+"{"+n+"}":""}function JS(e){var t=y0(e);return function(n,o,r,i){for(var s="",c=0;c<t;c++)s+=e[c](n,o,r,i)||"";return s}}function YS(e){return function(t){t.root||(t=t.return)&&e(t)}}function KS(e,t,n,o){if(e.length>-1&&!e.return)switch(e.type){case Od:e.return=w0(e.value,e.length,n);return;case h0:return _s([en(e,{value:O(e.value,"@","@"+Q)})],o);case dl:if(e.length)return LS(n=e.props,function(r){switch(Dt(r,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":to(en(e,{props:[O(r,/:(read-\w+)/,":"+_r+"$1")]})),to(en(e,{props:[r]})),wc(e,{props:jp(n,o)});break;case"::placeholder":to(en(e,{props:[O(r,/:(plac\w+)/,":"+Q+"input-$1")]})),to(en(e,{props:[O(r,/:(plac\w+)/,":"+_r+"$1")]})),to(en(e,{props:[O(r,/:(plac\w+)/,re+"input-$1")]})),to(en(e,{props:[r]})),wc(e,{props:jp(n,o)});break}return""})}}var QS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Je={},Vo=typeof process<"u"&&Je!==void 0&&(Je.REACT_APP_SC_ATTR||Je.SC_ATTR)||"data-styled",x0="active",S0="data-styled-version",hl="6.1.19",Yd=`/*!sc*/
`,As=typeof window<"u"&&typeof document<"u",XS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Je!==void 0&&Je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Je.REACT_APP_SC_DISABLE_SPEEDY!==""?Je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Je!==void 0&&Je.SC_DISABLE_SPEEDY!==void 0&&Je.SC_DISABLE_SPEEDY!==""&&Je.SC_DISABLE_SPEEDY!=="false"&&Je.SC_DISABLE_SPEEDY),ZS={},ml=Object.freeze([]),zo=Object.freeze({});function b0(e,t,n){return n===void 0&&(n=zo),e.theme!==n.theme&&e.theme||t||n.theme}var k0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tb=/(^-|-$)/g;function Bp(e){return e.replace(eb,"-").replace(tb,"")}var nb=/(a)(d)/gi,ki=52,Up=function(e){return String.fromCharCode(e+(e>25?39:97))};function bc(e){var t,n="";for(t=Math.abs(e);t>ki;t=t/ki|0)n=Up(t%ki)+n;return(Up(t%ki)+n).replace(nb,"$1-$2")}var na,C0=5381,yo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},T0=function(e){return yo(C0,e)};function Kd(e){return bc(T0(e)>>>0)}function ob(e){return e.displayName||e.name||"Component"}function oa(e){return typeof e=="string"&&!0}var E0=typeof Symbol=="function"&&Symbol.for,I0=E0?Symbol.for("react.memo"):60115,rb=E0?Symbol.for("react.forward_ref"):60112,ib={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lb=((na={})[rb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},na[I0]=_0,na);function Fp(e){return("type"in(t=e)&&t.type.$$typeof)===I0?_0:"$$typeof"in e?lb[e.$$typeof]:ib;var t}var ab=Object.defineProperty,cb=Object.getOwnPropertyNames,Vp=Object.getOwnPropertySymbols,db=Object.getOwnPropertyDescriptor,ub=Object.getPrototypeOf,zp=Object.prototype;function A0(e,t,n){if(typeof t!="string"){if(zp){var o=ub(t);o&&o!==zp&&A0(e,o,n)}var r=cb(t);Vp&&(r=r.concat(Vp(t)));for(var i=Fp(e),s=Fp(t),c=0;c<r.length;++c){var u=r[c];if(!(u in sb||n&&n[u]||s&&u in s||i&&u in i)){var p=db(t,u);try{ab(e,u,p)}catch{}}}}return e}function On(e){return typeof e=="function"}function Qd(e){return typeof e=="object"&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ps(e,t){if(e.length===0)return"";for(var n=e[0],o=1;o<e.length;o++)n+=e[o];return n}function Jr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kc(e,t,n){if(n===void 0&&(n=!1),!n&&!Jr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=kc(e[o],t[o]);else if(Jr(t))for(var o in t)e[o]=kc(e[o],t[o]);return e}function Xd(e,t){Object.defineProperty(e,"toString",{value:t})}function Jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pb=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,r=o.length,i=r;t>=i;)if((i<<=1)<0)throw Jn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(c,n[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),r=o+n;this.groupSizes[t]=0;for(var i=o;i<r;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],r=this.indexOfGroup(t),i=r+o,s=r;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Yd);return n},e}(),Zi=new Map,Rs=new Map,es=1,Ci=function(e){if(Zi.has(e))return Zi.get(e);for(;Rs.has(es);)es++;var t=es++;return Zi.set(e,t),Rs.set(t,e),t},fb=function(e,t){es=t+1,Zi.set(e,t),Rs.set(t,e)},hb="style[".concat(Vo,"][").concat(S0,'="').concat(hl,'"]'),mb=new RegExp("^".concat(Vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gb=function(e,t,n){for(var o,r=n.split(","),i=0,s=r.length;i<s;i++)(o=r[i])&&e.registerName(t,o)},yb=function(e,t){for(var n,o=((n=t.textContent)!==null&&n!==void 0?n:"").split(Yd),r=[],i=0,s=o.length;i<s;i++){var c=o[i].trim();if(c){var u=c.match(mb);if(u){var p=0|parseInt(u[1],10),f=u[2];p!==0&&(fb(f,p),gb(e,f,u[3]),e.getTag().insertRules(p,r)),r.length=0}else r.push(c)}}},Gp=function(e){for(var t=document.querySelectorAll(hb),n=0,o=t.length;n<o;n++){var r=t[n];r&&r.getAttribute(Vo)!==x0&&(yb(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function vb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P0=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(c){var u=Array.from(c.querySelectorAll("style[".concat(Vo,"]")));return u[u.length-1]}(n),i=r!==void 0?r.nextSibling:null;o.setAttribute(Vo,x0),o.setAttribute(S0,hl);var s=vb();return s&&o.setAttribute("nonce",s),n.insertBefore(o,i),o},wb=function(){function e(t){this.element=P0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,r=0,i=o.length;r<i;r++){var s=o[r];if(s.ownerNode===n)return s}throw Jn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),xb=function(){function e(t){this.element=P0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Sb=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Hp=As,bb={isServer:!As,useCSSOMInjection:!XS},Ms=function(){function e(t,n,o){t===void 0&&(t=zo),n===void 0&&(n={});var r=this;this.options=be(be({},bb),t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&As&&Hp&&(Hp=!1,Gp(this)),Xd(this,function(){return function(i){for(var s=i.getTag(),c=s.length,u="",p=function(h){var m=function(w){return Rs.get(w)}(h);if(m===void 0)return"continue";var g=i.names.get(m),S=s.getGroup(h);if(g===void 0||!g.size||S.length===0)return"continue";var C="".concat(Vo,".g").concat(h,'[id="').concat(m,'"]'),k="";g!==void 0&&g.forEach(function(w){w.length>0&&(k+="".concat(w,","))}),u+="".concat(S).concat(C,'{content:"').concat(k,'"}').concat(Yd)},f=0;f<c;f++)p(f);return u}(r)})}return e.registerId=function(t){return Ci(t)},e.prototype.rehydrate=function(){!this.server&&As&&Gp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(be(be({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var o=n.useCSSOMInjection,r=n.target;return n.isServer?new Sb(r):o?new wb(r):new xb(r)}(this.options),new pb(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ci(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},e.prototype.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Ci(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ci(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kb=/&/g,Cb=/^\s*\/\/.*$/gm;function R0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=R0(n.children,t)),n})}function Tb(e){var t,n,o,r=zo,i=r.options,s=i===void 0?zo:i,c=r.plugins,u=c===void 0?ml:c,p=function(m,g,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},f=u.slice();f.push(function(m){m.type===dl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(kb,n).replace(o,p))}),s.prefix&&f.push(KS),f.push(OS);var h=function(m,g,S,C){g===void 0&&(g=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,n=g,o=new RegExp("\\".concat(n,"\\b"),"g");var k=m.replace(Cb,""),w=WS(S||g?"".concat(S," ").concat(g," { ").concat(k," }"):k);s.namespace&&(w=R0(w,s.namespace));var x=[];return _s(w,JS(f.concat(YS(function(y){return x.push(y)})))),x};return h.hash=u.length?u.reduce(function(m,g){return g.name||Jn(15),yo(m,g.name)},C0).toString():"",h}var Eb=new Ms,Cc=Tb(),M0=Se.createContext({shouldForwardProp:void 0,styleSheet:Eb,stylis:Cc});M0.Consumer;Se.createContext(void 0);function Tc(){return E.useContext(M0)}var $0=function(){function e(t,n){var o=this;this.inject=function(r,i){i===void 0&&(i=Cc);var s=o.name+i.hash;r.hasNameForId(o.id,s)||r.insertRules(o.id,s,i(o.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Xd(this,function(){throw Jn(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cc),this.name+t.hash},e}(),Ib=function(e){return e>="A"&&e<="Z"};function Wp(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(n===1&&o==="-"&&e[0]==="-")return e;Ib(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var N0=function(e){return e==null||e===!1||e===""},j0=function(e){var t,n,o=[];for(var r in e){var i=e[r];e.hasOwnProperty(r)&&!N0(i)&&(Array.isArray(i)&&i.isCss||On(i)?o.push("".concat(Wp(r),":"),i,";"):Jr(i)?o.push.apply(o,Bo(Bo(["".concat(r," {")],j0(i),!1),["}"],!1)):o.push("".concat(Wp(r),": ").concat((t=r,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in QS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return o};function xn(e,t,n,o){if(N0(e))return[];if(Qd(e))return[".".concat(e.styledComponentId)];if(On(e)){if(!On(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var r=e(t);return xn(r,t,n,o)}var i;return e instanceof $0?n?(e.inject(n,o),[e.getName(o)]):[e]:Jr(e)?j0(e):Array.isArray(e)?Array.prototype.concat.apply(ml,e.map(function(s){return xn(s,t,n,o)})):[e.toString()]}function L0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(On(n)&&!Qd(n))return!1}return!0}var _b=T0(hl),Ab=function(){function e(t,n,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&L0(t),this.componentId=n,this.baseHash=yo(_b,n),this.baseStyle=o,Ms.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,o){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=jn(r,this.staticRulesId);else{var i=Ps(xn(this.rules,t,n,o)),s=bc(yo(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var c=o(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,c)}r=jn(r,s),this.staticRulesId=s}else{for(var u=yo(this.baseHash,o.hash),p="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")p+=h;else if(h){var m=Ps(xn(h,t,n,o));u=yo(u,m+f),p+=m}}if(p){var g=bc(u>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,o(p,".".concat(g),void 0,this.componentId)),r=jn(r,g)}}return r},e}(),Yr=Se.createContext(void 0);Yr.Consumer;function D0(e){var t=Se.useContext(Yr),n=E.useMemo(function(){return function(o,r){if(!o)throw Jn(14);if(On(o)){var i=o(r);return i}if(Array.isArray(o)||typeof o!="object")throw Jn(8);return r?be(be({},r),o):o}(e.theme,t)},[e.theme,t]);return e.children?Se.createElement(Yr.Provider,{value:n},e.children):null}var ra={};function Pb(e,t,n){var o=Qd(e),r=e,i=!oa(e),s=t.attrs,c=s===void 0?ml:s,u=t.componentId,p=u===void 0?function(b,T){var A=typeof b!="string"?"sc":Bp(b);ra[A]=(ra[A]||0)+1;var I="".concat(A,"-").concat(Kd(hl+A+ra[A]));return T?"".concat(T,"-").concat(I):I}(t.displayName,t.parentComponentId):u,f=t.displayName,h=f===void 0?function(b){return oa(b)?"styled.".concat(b):"Styled(".concat(ob(b),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Bp(t.displayName),"-").concat(t.componentId):t.componentId||p,g=o&&r.attrs?r.attrs.concat(c).filter(Boolean):c,S=t.shouldForwardProp;if(o&&r.shouldForwardProp){var C=r.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;S=function(b,T){return C(b,T)&&k(b,T)}}else S=C}var w=new Ab(n,m,o?r.componentStyle:void 0);function x(b,T){return function(A,I,_){var P=A.attrs,R=A.componentStyle,B=A.defaultProps,j=A.foldedComponentIds,N=A.styledComponentId,U=A.target,W=Se.useContext(Yr),F=Tc(),G=A.shouldForwardProp||F.shouldForwardProp,$=b0(I,W,B)||zo,V=function(Qt,Oe,jt){for(var Qo,_n=be(be({},Oe),{className:void 0,theme:jt}),Il=0;Il<Qt.length;Il+=1){var ii=On(Qo=Qt[Il])?Qo(_n):Qo;for(var Xt in ii)_n[Xt]=Xt==="className"?jn(_n[Xt],ii[Xt]):Xt==="style"?be(be({},_n[Xt]),ii[Xt]):ii[Xt]}return Oe.className&&(_n.className=jn(_n.className,Oe.className)),_n}(P,I,$),q=V.as||U,ee={};for(var te in V)V[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&V.theme===$||(te==="forwardedAs"?ee.as=V.forwardedAs:G&&!G(te,q)||(ee[te]=V[te]));var In=function(Qt,Oe){var jt=Tc(),Qo=Qt.generateAndInjectStyles(Oe,jt.styleSheet,jt.stylis);return Qo}(R,V),mt=jn(j,N);return In&&(mt+=" "+In),V.className&&(mt+=" "+V.className),ee[oa(q)&&!k0.has(q)?"class":"className"]=mt,_&&(ee.ref=_),E.createElement(q,ee)}(y,b,T)}x.displayName=h;var y=Se.forwardRef(x);return y.attrs=g,y.componentStyle=w,y.displayName=h,y.shouldForwardProp=S,y.foldedComponentIds=o?jn(r.foldedComponentIds,r.styledComponentId):"",y.styledComponentId=m,y.target=o?r.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=o?function(T){for(var A=[],I=1;I<arguments.length;I++)A[I-1]=arguments[I];for(var _=0,P=A;_<P.length;_++)kc(T,P[_],!0);return T}({},r.defaultProps,b):b}}),Xd(y,function(){return".".concat(y.styledComponentId)}),i&&A0(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function qp(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var Op=function(e){return Object.assign(e,{isCss:!0})};function Ee(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(On(e)||Jr(e))return Op(xn(qp(ml,Bo([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?xn(o):Op(xn(qp(o,t)))}function Ec(e,t,n){if(n===void 0&&(n=zo),!t)throw Jn(1,t);var o=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Ee.apply(void 0,Bo([r],i,!1)))};return o.attrs=function(r){return Ec(e,t,be(be({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},o.withConfig=function(r){return Ec(e,t,be(be({},n),r))},o}var B0=function(e){return Ec(Pb,e)},v=B0;k0.forEach(function(e){v[e]=B0(e)});var Rb=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=L0(t),Ms.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,o,r){var i=r(Ps(xn(this.rules,n,o,r)),""),s=this.componentId+t;o.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,o,r){t>2&&Ms.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,r)},e}();function U0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=Ee.apply(void 0,Bo([e],t,!1)),r="sc-global-".concat(Kd(JSON.stringify(o))),i=new Rb(o,r),s=function(u){var p=Tc(),f=Se.useContext(Yr),h=Se.useRef(p.styleSheet.allocateGSInstance(r)).current;return p.styleSheet.server&&c(h,u,p.styleSheet,f,p.stylis),Se.useLayoutEffect(function(){if(!p.styleSheet.server)return c(h,u,p.styleSheet,f,p.stylis),function(){return i.removeStyles(h,p.styleSheet)}},[h,u,p.styleSheet,f,p.stylis]),null};function c(u,p,f,h,m){if(i.isStatic)i.renderStyles(u,ZS,f,m);else{var g=be(be({},p),{theme:b0(p,h,s.defaultProps)});i.renderStyles(u,g,f,m)}}return Se.memo(s)}function ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=Ps(Ee.apply(void 0,Bo([e],t,!1))),r=Kd(o);return new $0(r,o)}const Mb=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),a.jsx("path",{d:"M8 8h8"}),a.jsx("path",{d:"M8 12h8"}),a.jsx("path",{d:"M8 16h5"})]}),$b=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z"}),a.jsx("path",{d:"M19 11a7 7 0 0 1-14 0"}),a.jsx("path",{d:"M12 19v3"}),a.jsx("path",{d:"M8 22h8"})]}),Nb=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 18v-6a9 9 0 0 1 18 0v6"}),a.jsx("path",{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z"}),a.jsx("path",{d:"M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z"})]}),jb=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 20h9"}),a.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]}),Lb=()=>{const e=ht(),t=tt();return a.jsxs(Db,{children:[a.jsxs(Bb,{children:[a.jsx("h1",{children:"IELTS 全科练习"}),a.jsx("p",{children:"听力 / 口语 / 阅读 / 写作"})]}),a.jsxs(Ub,{children:[a.jsxs(Ti,{onClick:()=>e({pathname:"/listening",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/listening",search:t.search}),children:[a.jsx(Ei,{children:a.jsx(Nb,{})}),a.jsx("h2",{children:"听力 Listening"}),a.jsx("p",{children:"场景词汇（Learn / Practice）"})]}),a.jsxs(Ti,{onClick:()=>e({pathname:"/speaking",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/speaking",search:t.search}),children:[a.jsx(Ei,{children:a.jsx($b,{})}),a.jsx("h2",{children:"口语 Speaking"}),a.jsx("p",{children:"题库 + 词汇联动（单词本共用）"})]}),a.jsxs(Ti,{onClick:()=>e({pathname:"/reading",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/reading",search:t.search}),children:[a.jsx(Ei,{children:a.jsx(Mb,{})}),a.jsx("h2",{children:"阅读 Reading"}),a.jsx("p",{children:"词汇（开发中）"})]}),a.jsxs(Ti,{onClick:()=>e({pathname:"/writing",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/writing",search:t.search}),children:[a.jsx(Ei,{children:a.jsx(jb,{})}),a.jsx("h2",{children:"写作 Writing"}),a.jsx("p",{children:"词汇（开发中）"})]})]})]})},Db=v.div`
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    animation: fadeIn 0.5s ease;
`,Bb=v.header`
    margin-bottom: 2.5rem;

    h1 {
        font-size: 2.75rem;
        font-weight: 800;
        color: ${({theme:e})=>e.colors.header};
        margin: 0 0 0.5rem 0;
    }

    p {
        font-size: 1.1rem;
        color: ${({theme:e})=>e.colors.label};
        margin: 0;
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
    }
`,Ub=v.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`,Ti=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-radius: 22px;
    padding: 2rem;
    text-align: left;
    box-shadow: 0 8px 16px ${({theme:e})=>e.colors.shadow};
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid ${({theme:e})=>e.colors.border};
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }

    h2 {
        font-size: 1.4rem;
        font-weight: 800;
        color: ${({theme:e})=>e.colors.header};
        margin: 0;
    }

    p {
        font-size: 1rem;
        color: ${({theme:e})=>e.colors.label};
        line-height: 1.6;
        margin: 0;
    }
`,Ei=v.div`
    width: 44px;
    height: 44px;
    color: ${({theme:e})=>e.colors.primaryBlue};
`,Fb=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),a.jsx("line",{x1:"12",y1:"8",x2:"16",y2:"8"}),a.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"}),a.jsx("line",{x1:"8",y1:"16",x2:"12",y2:"16"})]}),Jp=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M18 13a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6z"}),a.jsx("path",{d:"M12 19v2"}),a.jsx("path",{d:"M12 3v2"}),a.jsx("path",{d:"M5 12H3"}),a.jsx("path",{d:"M21 12h-2"}),a.jsx("path",{d:"m18.36 18.36-.78-.78"}),a.jsx("path",{d:"m6.42 6.42-.78-.78"}),a.jsx("path",{d:"m18.36 5.64-.78.78"}),a.jsx("path",{d:"m6.42 17.58-.78.78"})]}),Vb=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),a.jsx("path",{d:"M8 8h8"}),a.jsx("path",{d:"M8 12h8"}),a.jsx("path",{d:"M8 16h5"})]}),zb=()=>{const e=ht(),t=tt();return a.jsxs(Gb,{children:[a.jsxs(Hb,{children:[a.jsx("h1",{children:"雅思口语全攻略"}),a.jsx("p",{children:"题库覆盖：2025年 5-8月 / 2025年 9-12月 / 2026年 1-4月"})]}),a.jsxs(Wb,{children:[a.jsxs(Ii,{className:"full-width-card",onClick:()=>e({pathname:"/speaking/scoring",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/speaking/scoring",search:t.search}),children:[a.jsx(vo,{children:a.jsx(Jp,{})}),a.jsx("h2",{children:"评分标准和考试需知"}),a.jsx("p",{children:"深入了解雅思官方口语评分的四大维度、考试基本信息与核心备考建议。"})]}),a.jsxs(Ii,{onClick:()=>e({pathname:"/speaking/tips",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/speaking/tips",search:t.search}),children:[a.jsx(vo,{children:a.jsx(Jp,{})}),a.jsx("h2",{children:"回答技巧"}),a.jsx("p",{children:"学习 Part 1/2/3 的核心答题策略与高分技巧，让你的表达更流利、更有逻辑。"})]}),a.jsxs(Ii,{onClick:()=>e({pathname:"/speaking/bank",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/speaking/bank",search:t.search}),children:[a.jsx(vo,{children:a.jsx(Fb,{})}),a.jsx("h2",{children:"口语题库"}),a.jsx("p",{children:"覆盖 Part 1/2/3 最新题目，包含完整问题列表与高质量参考范文。"})]}),a.jsxs(Ii,{className:"full-width-card",onClick:()=>e({pathname:"/speaking/vocab",search:t.search}),role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e({pathname:"/speaking/vocab",search:t.search}),children:[a.jsx(vo,{children:a.jsx(Vb,{})}),a.jsx("h2",{children:"口语单词汇总"}),a.jsx("p",{children:"按季筛选口语话题词汇，进入学习/练习。"})]})]})]})},Gb=v.div`
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    animation: fadeIn 0.5s ease;
`,Hb=v.header`
    margin-bottom: 3rem;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.2rem;
        color: ${({theme:e})=>e.colors.label};
        margin-top: 0;
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        margin-bottom: 2.5rem;
        h1 {
            font-size: 2.25rem;
        }
        p {
            font-size: 1rem;
        }
    }
`,Wb=v.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    .full-width-card {
        grid-column: 1 / -1;
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        .full-width-card {
            grid-column: auto;
        }
    }
`,vo=v.div`
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
    color: ${({theme:e})=>e.colors.primaryBlue};
`,Ii=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-radius: 24px;
    padding: 2.5rem 2rem;
    text-align: left;
    box-shadow: 0 8px 16px ${({theme:e})=>e.colors.shadow};
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid ${({theme:e})=>e.colors.border};
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.12);
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 600;
        color: ${({theme:e})=>e.colors.header};
        margin: 0 0 0.5rem 0;
    }

    p {
        font-size: 1rem;
        color: ${({theme:e})=>e.colors.label};
        line-height: 1.6;
        margin: 0;
        flex-grow: 1;
    }

    &:nth-child(1) ${vo},
    &:nth-child(2) ${vo} {
        color: ${({theme:e})=>e.colors.primaryOrange};
    }

     &.full-width-card {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 2rem 1.5rem;
        h2 {
            font-size: 1.5rem;
        }
    }
`,qb=({card:e,fromTopicId:t,onCardClick:n,onCardMove:o,vocabCount:r=0,onVocabClick:i})=>{const s=m=>{m.stopPropagation(),m.dataTransfer.setData("cardId",e.id),m.dataTransfer.setData("fromTopicId",t),setTimeout(()=>{m.target.classList.add("dragging")},0)},c=m=>{m.stopPropagation(),m.target.classList.remove("dragging")},u=()=>{(e.part1Questions&&e.part1Questions.length>0||e.part2Title)&&n(e)},p=m=>{m.preventDefault(),m.stopPropagation();const g=m.currentTarget,S=g.getBoundingClientRect(),C=m.clientY<S.top+S.height/2;g.classList.remove("drag-over-top","drag-over-bottom");const k=m.dataTransfer.getData("cardId"),w=m.dataTransfer.getData("fromTopicId");k&&k!==e.id&&o(k,w,t,e.id,C)},f=m=>{m.preventDefault(),m.stopPropagation();const g=m.currentTarget,S=g.getBoundingClientRect();m.clientY<S.top+S.height/2?(g.classList.add("drag-over-top"),g.classList.remove("drag-over-bottom")):(g.classList.add("drag-over-bottom"),g.classList.remove("drag-over-top"))},h=m=>{m.currentTarget.classList.remove("drag-over-top","drag-over-bottom")};return a.jsxs(Yb,{categoryClass:e.categoryClass,draggable:"true",onDragStart:s,onDragEnd:c,onClick:u,onDrop:p,onDragOver:f,onDragLeave:h,role:"button",tabIndex:0,onKeyDown:m=>(m.key==="Enter"||m.key===" ")&&u(),children:[e.status==="New"&&a.jsx(Jb,{children:"New"}),a.jsx(gr,{categoryClass:e.categoryClass,children:e.category}),a.jsx("h3",{children:e.title}),r>0&&i&&a.jsxs(Kb,{type:"button",onClick:m=>{m.stopPropagation(),i()},"aria-label":`打开词汇：${e.title}`,children:[r," 词"]})]})},Ob=Ee`
    ${({categoryClass:e,theme:t})=>{switch(e){case"person-card":return Ee`
                    border-left-color: ${t.colors.person};
                    ${gr} {
                        background-color: ${t.colors.personBg};
                        color: ${t.colors.personText};
                    }
                `;case"event-card":return Ee`
                    border-left-color: ${t.colors.event};
                    ${gr} {
                        background-color: ${t.colors.eventBg};
                        color: ${t.colors.event};
                    }
                `;case"place-card":return Ee`
                    border-left-color: ${t.colors.place};
                    ${gr} {
                        background-color: ${t.colors.placeBg};
                        color: ${t.colors.placeText};
                    }
                `;case"object-card":return Ee`
                    border-left-color: ${t.colors.object};
                    ${gr} {
                        background-color: ${t.colors.objectBg};
                        color: ${t.colors.object};
                    }
                `;default:return""}}}
`,gr=v.div`
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.25em 0.8em;
    border-radius: 9999px;
    display: inline-block;
    white-space: nowrap;
`,Jb=v.div`
    position: absolute;
    top: -10px;
    right: 12px;
    background-color: ${({theme:e})=>e.colors.newTag};
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2em 0.7em;
    border-radius: 9999px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Yb=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-radius: 12px;
    padding: 1.25rem;
    box-shadow: 0 4px 8px ${({theme:e})=>e.colors.shadow};
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative; /* Needed for status tag and drag-over indicator */
    border-left: 6px solid;

    ${Ob}

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 4px;
        background-color: ${({theme:e})=>e.colors.dragOverBorder};
        border-radius: 2px;
        transform: scaleX(0);
        transition: transform 0.2s ease-in-out;
        z-index: 1;
    }

    &.drag-over-top::before {
        top: -8px; 
        transform: scaleX(1);
    }

    &.drag-over-bottom::before {
        bottom: -8px;
        transform: scaleX(1);
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
    }

    &.dragging {
        opacity: 0.5;
        cursor: grabbing;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        transform: scale(1.02);
    }

    h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: ${({theme:e})=>e.colors.header};
        line-height: 1.4;
    }
`,Kb=v.button`
    margin-left: auto;
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 800;
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    border: 1px solid ${({theme:e})=>e.colors.highlightBorder};
    background-color: ${({theme:e})=>e.colors.highlightBg};
    color: ${({theme:e})=>e.colors.primaryBlue};
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
    flex-shrink: 0;

    &:hover {
        transform: translateY(-1px);
        background-color: ${({theme:e})=>e.colors.cardBg};
    }

    &:active {
        transform: translateY(0) scale(0.98);
    }
`,Qb={accompany:{word:"accompany",phonetic:"/əˈkʌmpəni/",definition:"陪伴；陪同",example:"I will accompany you to the doctor's appointment.",emoji:"🚶‍♀️"},artifact:{word:"artifact",phonetic:"/ˈɑːrtɪfækt/",definition:"手工艺品",example:"These ancient artifacts are thousands of years old.",emoji:"🏺"},artwork:{word:"artwork",phonetic:"/ˈɑːrtwɜːrk/",definition:"艺术品",example:"The museum features artwork from various modern artists.",emoji:"🖼️"},aesthetics:{word:"aesthetics",phonetic:"/esˈθetɪks/",definition:"美学",example:"The aesthetics of the painting are truly remarkable.",emoji:"✨"},abstract:{word:"abstract",phonetic:"/ˈæbstrækt/",definition:"抽象的",example:"I enjoy abstract art because it allows for personal interpretation.",emoji:"🌀"},archaeology:{word:"archaeology",phonetic:"/ˌɑːrkiˈɒlədʒi/",definition:"考古学",example:"Archaeology helps us understand ancient civilizations by studying their artifacts.",emoji:"🦴"},"a crowd of people":{word:"a crowd of people",phonetic:"/ə kraʊd əv ˈpiːpl/",definition:"一群人",example:"A crowd of people gathered to watch the street performance.",emoji:"👥"},amenities:{word:"amenities",phonetic:"/əˈmiːnətiz/",definition:"便利设施",example:"The park has excellent amenities, like cafes and restrooms.",emoji:"🚻"},accessible:{word:"accessible",phonetic:"/əkˈsesəbl/",definition:"可进入的",example:"The library is accessible to people with disabilities.",emoji:"♿️"},argue:{word:"argue",phonetic:"/ˈɑːrɡjuː/",definition:"争论；争吵",example:"We sometimes argue, but we always make up quickly.",emoji:"😤"},achieve:{word:"achieve",phonetic:"/əˈtʃiːv/",definition:"实现；达到",example:"With hard work, you can achieve your goals.",emoji:"🎯"},accomplishment:{word:"accomplishment",phonetic:"/əˈkʌmplɪʃmənt/",definition:"成就",example:"Finishing the marathon was a huge accomplishment for her.",emoji:"🏅"},atmosphere:{word:"atmosphere",phonetic:"/ˈætməsfɪər/",definition:"氛围",example:"The cafe has a cozy and relaxed atmosphere.",emoji:"🕯️"},allowed:{word:"allowed",phonetic:"/əˈlaʊd/",definition:"允许的",example:"Students are not allowed to use their phones at school.",emoji:"✅"},annoying:{word:"annoying",phonetic:"/əˈnɔɪɪŋ/",definition:"烦人的",example:"Some rules can be really annoying and unnecessary.",emoji:"😠"},affordable:{word:"affordable",phonetic:"/əˈfɔːrdəbl/",definition:"负担得起的",example:"Looking for affordable yet durable shoes.",emoji:"💰"},"almond shaped toe":{word:"almond shaped toe",phonetic:"/ˈɑːmənd ʃeɪpt toʊ/",definition:"杏仁型（鞋头）",example:"Almond shaped toe shoes look elegant.",emoji:"👞"},antioxidant:{word:"antioxidant",phonetic:"/ˌæntiˈɒksɪdənt/",definition:"抗氧化剂",example:"Dark chocolate is rich in antioxidants that are good for your heart.",emoji:"🛡️"},almond:{word:"almond",phonetic:"/ˈɑːmənd/",definition:"杏仁",example:"Almonds are great for your heart health.",emoji:"🥜"},"artificial colour":{word:"artificial colour",phonetic:"/ˌɑːrtɪˈfɪʃl ˈkʌlər/",definition:"人造色素",example:"Many bright candies contain artificial colour.",emoji:"🎨"},"artificial flavour":{word:"artificial flavour",phonetic:"/ˌɑːrtɪˈfɪʃl ˈfleɪvər/",definition:"人造香料",example:"This snack uses artificial flavour to mimic real fruit.",emoji:"🧪"}},Xb={"bank account":{word:"bank account",phonetic:"/bæŋk əˈkaʊnt/",definition:"银行账户",example:"You need to open a bank account to manage your money.",emoji:"🏦"},borrow:{word:"borrow",phonetic:"/ˈbɔːroʊ/",definition:"借入",example:"I need to borrow a book from the library.",emoji:"⬅️"},busy:{word:"busy",phonetic:"/ˈbɪzi/",definition:"忙碌的；热闹的",example:"The main street is always busy during lunchtime.",emoji:"🏃‍♂️"},bustling:{word:"bustling",phonetic:"/ˈbʌslɪŋ/",definition:"熙熙攘攘的",example:"The market was bustling with shoppers.",emoji:"🏙️"},backyard:{word:"backyard",phonetic:"/ˈbækjɑːrd/",definition:"后院",example:"We have a small vegetable garden in our backyard.",emoji:"🏡"},"bottled water":{word:"bottled water",phonetic:"/ˈbɒtld ˈwɔːtər/",definition:"瓶装水",example:"It's always a good idea to bring some bottled water when you go hiking.",emoji:"💧"},"book a table":{word:"book a table",phonetic:"/bʊk ə ˈteɪbl/",definition:"订座",example:"I'll call the restaurant and book a table for four.",emoji:"📞"},botany:{word:"botany",phonetic:"/ˈbɑːtəni/",definition:"植物学",example:"Botany is the scientific study of plants.",emoji:"🔬"},blossom:{word:"blossom",phonetic:"/ˈblɑːsəm/",definition:"花；开花",example:"The cherry trees are in full blossom.",emoji:"🌸"},bloom:{word:"bloom",phonetic:"/bluːm/",definition:"开花",example:"The flowers will bloom in the spring.",emoji:"🌼"},brand:{word:"brand",phonetic:"/brænd/",definition:"品牌",example:"Nike is a well-known brand of sports shoes.",emoji:"🏷️"},billboard:{word:"billboard",phonetic:"/ˈbɪlbɔːrd/",definition:"广告牌",example:"There was a huge billboard advertising the new movie.",emoji:"🏙️"},"behave well":{word:"behave well",phonetic:"/bɪˈheɪv wel/",definition:"表现良好",example:"Students are expected to behave well in the classroom.",emoji:"😇"},"break the rules":{word:"break the rules",phonetic:"/breɪk ðə ruːlz/",definition:"违反规则",example:"You will be punished if you break the rules.",emoji:"🚫"},benefit:{word:"benefit",phonetic:"/ˈbenɪfɪt/",definition:"益处；好处",example:"Do you think students would benefit more from more rules?",emoji:"👍"},boots:{word:"boots",phonetic:"/buːts/",definition:"靴子",example:"I need a pair of durable boots for hiking.",emoji:"🥾"},breathable:{word:"breathable",phonetic:"/ˈbriːðəbl/",definition:"透气的",example:"Running shoes should be breathable.",emoji:"🍃"},"break in":{word:"break in",phonetic:"/break ɪn/",definition:"（把新鞋）穿软",example:"I need to break in these new boots.",emoji:"👣"},"brand awareness":{word:"brand awareness",phonetic:"/brænd əˈwernəs/",definition:"品牌知名度",example:"The campaign was successful in raising brand awareness.",emoji:"📈"},biscuit:{word:"biscuit",phonetic:"/ˈbɪskɪt/",definition:"饼干",example:"I like to have a biscuit with my tea.",emoji:"🍪"},bread:{word:"bread",phonetic:"/bred/",definition:"面包",example:"Freshly baked bread smells wonderful.",emoji:"🍞"},"beef jerky":{word:"beef jerky",phonetic:"/biːf ˈdʒɜːrki/",definition:"牛肉干",example:"Beef jerky is high in protein and easy to carry.",emoji:"🥩"},"blood sugar level":{word:"blood sugar level",phonetic:"/blʌd ˈʃʊɡər ˈlevl/",definition:"血糖水平",example:"It is important to keep your blood sugar level stable.",emoji:"🩸"},"boost brainpower":{word:"boost brainpower",phonetic:"/buːst ˈbreɪnˌpaʊər/",definition:"提高智力",example:"Some nuts are believed to help boost brainpower.",emoji:"🧠"},"boost energy":{word:"boost energy",phonetic:"/buːst ˈenərdʒi/",definition:"提升能量",example:"A quick snack can help boost energy in the afternoon.",emoji:"⚡"}},Zb={caring:{word:"caring",phonetic:"/ˈkerɪŋ/",definition:"有爱心的",example:"She is a caring person who always helps others in need.",emoji:"🥰"},caretakers:{word:"caretakers",phonetic:"/ˈkerˌteɪkərz/",definition:"照顾者；看护人",example:"Caretakers play a vital role in supporting the elderly.",emoji:"👩‍⚕️"},caregivers:{word:"caregivers",phonetic:"/ˈkerˌɡɪvərz/",definition:"照料者",example:"Many adult children become caregivers for their aging parents.",emoji:"🏠"},"close friend":{word:"close friend",phonetic:"/kloʊs frend/",definition:"密友",example:"She is not just a colleague, she is a close friend.",emoji:"💕"},companionship:{word:"companionship",phonetic:"/kəmˈpænjənʃɪp/",definition:"陪伴",example:"Elderly people often value companionship.",emoji:"🧑‍🤝‍🧑"},contribute:{word:"contribute",phonetic:"/kənˈtrɪbjuːt/",definition:"贡献",example:"Everyone should contribute to the group project.",emoji:"🤲"},cooperate:{word:"cooperate",phonetic:"/koʊˈɑːpəreɪt/",definition:"合作",example:"We need to cooperate to finish the task on time.",emoji:"🤝"},collection:{word:"collection",phonetic:"/kəˈlekʃn/",definition:"收藏品",example:"The museum has an impressive collection of Roman sculptures.",emoji:"🗃️"},"cultural heritage":{word:"cultural heritage",phonetic:"/ˈkʌltʃərəl ˈherɪtɪdʒ/",definition:"文化遗产",example:"Museums help to preserve our cultural heritage.",emoji:"🏛️"},"contemporary art":{word:"contemporary art",phonetic:"/kənˈtempəreri ɑːrt/",definition:"当代艺术",example:"The gallery specializes in contemporary art from the 21st century.",emoji:"💡"},crowded:{word:"crowded",phonetic:"/ˈkraʊdɪd/",definition:"拥挤的",example:"The mall was very crowded on Saturday.",emoji:"👥"},congested:{word:"congested",phonetic:"/kənˈdʒestɪd/",definition:"拥堵的",example:"The roads are always congested during rush hour.",emoji:"🚘"},cosmopolitan:{word:"cosmopolitan",phonetic:"/ˌkɒzməˈpɒlɪtən/",definition:"国际化的",example:"London is a very cosmopolitan city with a diverse population.",emoji:"🌍"},community:{word:"community",phonetic:"/kəˈmjuːnəti/",definition:"社区",example:"The community center is a popular public place.",emoji:"🏘️"},civic:{word:"civic",phonetic:"/ˈsɪvɪk/",definition:"公民的；市民的",example:"It is our civic duty to keep public places clean.",emoji:"🏙️"},conversation:{word:"conversation",phonetic:"/ˌkɑːnvərˈseɪʃn/",definition:"交谈；谈话",example:"We had a long conversation about our future plans.",emoji:"🗣️"},"catch up":{word:"catch up",phonetic:"/kætʃ ʌp/",definition:"叙旧 / 更新近况",example:"Let's meet for coffee and catch up on each other's lives.",emoji:"☕"},chill:{word:"chill",phonetic:"/tʃɪl/",definition:"放松；冷静",example:"Let's just chill and watch a movie tonight.",emoji:"😎"},calm:{word:"calm",phonetic:"/kɑːm/",definition:"平静的",example:"The beach is a very calm and peaceful place.",emoji:"🌊"},converse:{word:"converse",phonetic:"/kənˈvɜːrs/",definition:"交谈",example:"It was pleasant to converse with her.",emoji:"🗣️"},celebrate:{word:"celebrate",phonetic:"/ˈseləbreɪt/",definition:"庆祝",example:"We went out to a fancy restaurant to celebrate her birthday.",emoji:"🥳"},cash:{word:"cash",phonetic:"/kæʃ/",definition:"现金",example:"Some small shops only accept cash.",emoji:"💵"},"credit card":{word:"credit card",phonetic:"/ˈkredɪt kɑːrd/",definition:"信用卡",example:"I usually pay with my credit card for larger purchases.",emoji:"💳"},"check messages":{word:"check messages",phonetic:"/tʃek ˈmesɪdʒɪz/",definition:"看消息",example:"I need to check my messages to see if she replied.",emoji:"💬"},"cannot live without my phone":{word:"cannot live without my phone",phonetic:"/ˈkænɒt lɪv wɪˈðaʊt maɪ foʊn/",definition:"离不开手机",example:"Honestly, I feel like I cannot live without my phone these days.",emoji:"😱"},cultivate:{word:"cultivate",phonetic:"/ˈkʌltɪveɪt/",definition:"栽培；养殖",example:"We cultivate a variety of vegetables in our garden.",emoji:"🌱"},"close to nature":{word:"close to nature",phonetic:"/kloʊs tu ˈneɪtʃər/",definition:"接近自然",example:"Gardening helps me feel close to nature.",emoji:"🌳"},clever:{word:"clever",phonetic:"/ˈklevər/",definition:"聪明的",example:"That was a clever solution to a difficult problem.",emoji:"💡"},champion:{word:"champion",phonetic:"/ˈtʃæmpiən/",definition:"冠军",example:"He is a true champion of the sport.",emoji:"🏆"},commercial:{word:"commercial",phonetic:"/kəˈmɜːrʃl/",definition:"商业广告",example:"I saw a commercial for a new car on TV.",emoji:"📺"},customer:{word:"customer",phonetic:"/ˈkʌstəmər/",definition:"顾客",example:"Good advertisements attract more customers.",emoji:"👤"},consumer:{word:"consumer",phonetic:"/kənˈsuːmər/",definition:"消费者",example:"The new regulations will protect consumers from misleading ads.",emoji:"🛒"},campaign:{word:"campaign",phonetic:"/kæmˈpeɪn/",definition:"广告活动",example:"The company launched a new advertising campaign for its latest phone.",emoji:"🚀"},"consumer behavior":{word:"consumer behavior",phonetic:"/kənˈsuːmər bɪˈheɪvjər/",definition:"消费者行为",example:"Advertisements can influence consumer behavior.",emoji:"🤔"},"celebrity endorsement":{word:"celebrity endorsement",phonetic:"/səˈlebrəti ɪnˈdɔːrsmənt/",definition:"名人代言",example:"Many brands use celebrity endorsement to attract more customers.",emoji:"🌟"},"comply with":{word:"comply with",phonetic:"/kəmˈplaɪ wɪθ/",definition:"遵守",example:"You must comply with the school rules.",emoji:"✅"},"canvas shoes":{word:"canvas shoes",phonetic:"/ˈkænvəs ʃuːz/",definition:"帆布鞋",example:"Canvas shoes are lightweight and perfect for casual wear.",emoji:"👟"},cake:{word:"cake",phonetic:"/keɪk/",definition:"蛋糕",example:"We had a chocolate cake for her birthday.",emoji:"🎂"},chip:{word:"chip",phonetic:"/tʃɪp/",definition:"炸薯条",example:"A bag of potato chips is a common snack.",emoji:"🍟"},cookie:{word:"cookie",phonetic:"/ˈkʊki/",definition:"曲奇饼",example:"My grandmother makes the best oatmeal cookies.",emoji:"🍪"},cracker:{word:"cracker",phonetic:"/ˈkrækər/",definition:"薄脆饼干",example:"Cheese and crackers are a great light snack.",emoji:"🍘"},cashew:{word:"cashew",phonetic:"/ˈkæʃuː/",definition:"腰果",example:"Cashews are creamy and very satisfying.",emoji:"🥜"},"corn chips":{word:"corn chips",phonetic:"/kɔːrn tʃɪps/",definition:"玉米片",example:"Corn chips are delicious with salsa dip.",emoji:"🌽"}},ek={display:{word:"display",phonetic:"/dɪˈspleɪ/",definition:"陈列；展览",example:"The artifacts are on display in the main hall.",emoji:"👀"},downtown:{word:"downtown",phonetic:"/ˈdaʊntaʊn/",definition:"市中心",example:"The main shopping district is in downtown.",emoji:"🏙️"},"due date":{word:"due date",phonetic:"/duː deɪt/",definition:"到期日",example:"The due date for the library book is tomorrow.",emoji:"📅"},damage:{word:"damage",phonetic:"/ˈdæmɪdʒ/",definition:"损坏",example:"If you damage the book, you'll have to pay for it.",emoji:"💔"},"daily life":{word:"daily life",phonetic:"/ˈdeɪli laɪf/",definition:"日常生活",example:"Going out for a walk is a simple pleasure in my daily life.",emoji:"🗓️"},"depends on the situation":{word:"depends on the situation",phonetic:"/dɪˈpendz ɒn ðə ˌsɪtʃuˈeɪʃn/",definition:"看情况",example:"Whether I go out or stay in depends on the situation.",emoji:"🤔"},"decorate the room":{word:"decorate the room",phonetic:"/ˈdekəreɪt ðə ruːm/",definition:"装饰房间",example:"I use green plants to decorate the room.",emoji:"🖼️"},dedicated:{word:"dedicated",phonetic:"/ˈdedɪkeɪtɪd/",definition:"专注的；献身的",example:"Have you ever had a really dedicated teacher?",emoji:"🎯"},detention:{word:"detention",phonetic:"/dɪˈtenʃn/",definition:"留校察看",example:"He got detention for being late to class.",emoji:"⌛"},discount:{word:"discount",phonetic:"/ˈdɪskaʊnt/",definition:"折扣",example:"Can I get a student discount on these shoes?",emoji:"📉"},durable:{word:"durable",phonetic:"/ˈdʊrəbl/",definition:"耐用的",example:"I need durable boots for hiking in the mountains.",emoji:"💪"},"draw attention":{word:"draw attention",phonetic:"/drɔː əˈtenʃn/",definition:"吸引注意力",example:"A good advertisement should draw people’s attention immediately.",emoji:"✨"},doughnut:{word:"doughnut",phonetic:"/ˈdoʊnʌt/",definition:"炸甜甜圈",example:"I grabbed a glazed doughnut on my way to work.",emoji:"🍩"},"dried fruit":{word:"dried fruit",phonetic:"/draɪd fruːt/",definition:"干果",example:"Dried fruits like raisins are naturally sweet.",emoji:"🍇"}},tk={"easy-going":{word:"easy-going",phonetic:"/ˈiːziˌɡoʊɪŋ/",definition:"随和的",example:"He has an easy-going personality and gets along with everyone.",emoji:"😎"},exhibition:{word:"exhibition",phonetic:"/ˌeksɪˈbɪʃn/",definition:"展览会",example:"The art exhibition attracted thousands of visitors.",emoji:"🖼️"},educational:{word:"educational",phonetic:"/ˌedʒuˈkeɪʃənl/",definition:"有教育意义的",example:"Visiting a museum can be a fun and educational experience for children.",emoji:"📚"},"engage in":{word:"engage in",phonetic:"/ɪnˈɡeɪdʒ ɪn/",definition:"参与",example:"He likes to engage in deep conversations.",emoji:"🙋‍♀️"},"express emotions":{word:"express emotions",phonetic:"/ɪkˈspres ɪˈmoʊʃənz/",definition:"表达情感",example:"It's easier to express emotions when you talk face-to-face.",emoji:"😄"},entertainment:{word:"entertainment",phonetic:"/ˌentərˈteɪnmənt/",definition:"娱乐",example:"There are many entertainment options, such as cinemas and theaters.",emoji:"🎭"},"energy bar":{word:"energy bar",phonetic:"/ˈenərdʒi bɑːr/",definition:"能量棒",example:"An energy bar can give you a quick boost of energy during a workout.",emoji:"🍫"},"e-wallet":{word:"e-wallet",phonetic:"/ˈiː ˌwɒlɪt/",definition:"电子钱包",example:"I have several payment methods linked to my e-wallet.",emoji:"👛"},enjoyable:{word:"enjoyable",phonetic:"/ɪnˈdʒɔɪəbl/",definition:"愉快的",example:"Watching the plants grow from seeds is an enjoyable experience.",emoji:"😊"},"easy to grow":{word:"easy to grow",phonetic:"/ˈiːzi tu ɡroʊ/",definition:"容易种植",example:"Herbs like mint and basil are very easy to grow.",emoji:"👍"},"environmental education":{word:"environmental education",phonetic:"/ɪnˌvaɪrənˈmentl ˌedʒuˈkeɪʃn/",definition:"环保教育",example:"School gardens are a great tool for environmental education.",emoji:"🌍"},excel:{word:"excel",phonetic:"/ɪkˈsel/",definition:"擅长；卓越",example:"She has always excelled in science subjects.",emoji:"🌟"},expert:{word:"expert",phonetic:"/ˈekspɜːrt/",definition:"专家",example:"She is an expert in the field of genetics.",emoji:"👩‍🔬"},experience:{word:"experience",phonetic:"/ɪkˈspɪəriəns/",definition:"经验；经历",example:"Practice is the best way to gain experience.",emoji:"🎓"},enough:{word:"enough",phonetic:"/ɪˈnʌf/",definition:"足够的",example:"I think many students don’t have enough self-discipline.",emoji:"🆗"},enforce:{word:"enforce",phonetic:"/ɪnˈfɔːrs/",definition:"执行",example:"The police are there to enforce the traffic rules.",emoji:"👮"},"eye-catching":{word:"eye-catching",phonetic:"/ˈaɪˌkætʃɪŋ/",definition:"引人注目的",example:"The advertisement had an eye-catching design with bright colors.",emoji:"👁️"}},nk={"face-to-face":{word:"face-to-face",phonetic:"/ˌfeɪs tə ˈfeɪs/",definition:"面对面",example:"I prefer having face-to-face conversations.",emoji:"🧑‍🤝‍🧑"},fine:{word:"fine",phonetic:"/faɪn/",definition:"罚款",example:"There is a fine for overdue books.",emoji:"💰"},farm:{word:"farm",phonetic:"/fɑːrm/",definition:"农场",example:"My grandparents live on a farm and grow their own vegetables.",emoji:"🚜"},"fresh air":{word:"fresh air",phonetic:"/freʃ er/",definition:"新鲜空气",example:"Plants help to provide fresh air by producing oxygen.",emoji:"🍃"},"flower shop":{word:"flower shop",phonetic:"/ˈflaʊər ʃɒp/",definition:"花店",example:"I bought a beautiful bouquet from the local flower shop.",emoji:"💐"},fragrance:{word:"fragrance",phonetic:"/ˈfreɪɡrəns/",definition:"香味",example:"I love the fragrance of fresh flowers.",emoji:"👃"},"follow the rules":{word:"follow the rules",phonetic:"/ˈfɒloʊ ðə ruːlz/",definition:"遵守规则",example:"It's important to follow the rules in a school.",emoji:"✅"},fewer:{word:"fewer",phonetic:"/ˈfjuːər/",definition:"更少的",example:"Do you prefer to have more or fewer rules at school?",emoji:"➖"},fair:{word:"fair",phonetic:"/fer/",definition:"公平的",example:"The rules should be fair to all students.",emoji:"⚖️"},focus:{word:"focus",phonetic:"/ˈfoʊkəs/",definition:"集中；专注",example:"With more rules, students can focus more on their studies.",emoji:"🎯"},fashionable:{word:"fashionable",phonetic:"/ˈfæʃənəbl/",definition:"时尚的",example:"She always wears fashionable shoes.",emoji:"👠"},"fit well":{word:"fit well",phonetic:"/fɪt wel/",definition:"合脚",example:"These sneakers fit well and are very comfortable.",emoji:"👍"},footwear:{word:"footwear",phonetic:"/ˈfʊtwɛər/",definition:"鞋类(总称)",example:"The store sells a wide range of footwear.",emoji:"👟"},"flip-flops":{word:"flip-flops",phonetic:"/ˈflɪp flɒps/",definition:"人字拖",example:"Flip-flops are perfect for a casual day at the pool.",emoji:"🩴"}},ok={"get along with":{word:"get along with",phonetic:"/ɡet əˈlɔŋ wɪθ/",definition:"和...相处融洽",example:"I get along with my colleagues very well.",emoji:"😊"},generous:{word:"generous",phonetic:"/ˈdʒenərəs/",definition:"慷慨的",example:"He was generous and shared his lunch with me.",emoji:"🎁"},gentle:{word:"gentle",phonetic:"/ˈdʒentl/",definition:"温柔的",example:"He has a gentle voice that is very calming.",emoji:"🕊️"},"generation gap":{word:"generation gap",phonetic:"/ˌdʒenəˈreɪʃn ɡæp/",definition:"代沟",example:"The generation gap can sometimes cause misunderstandings.",emoji:"👥"},gallery:{word:"gallery",phonetic:"/ˈɡæləri/",definition:"美术馆",example:"We visited an art gallery downtown.",emoji:"🎨"},"green spaces":{word:"green spaces",phonetic:"/ɡriːn ˈspeɪsɪz/",definition:"绿地",example:"Cities need more green spaces for people to relax.",emoji:"🌳"},"give back":{word:"give back",phonetic:"/ɡɪv bæk/",definition:"还给",example:"Don't forget to give back the money you borrowed.",emoji:"🔙"},gathering:{word:"gathering",phonetic:"/ˈɡæðərɪŋ/",definition:"聚会",example:"We're having a small gathering at my place on Friday.",emoji:"🎉"},"get-together":{word:"get-together",phonetic:"/ˈɡet təˌɡeðər/",definition:"非正式聚会",example:"It was a casual get-together with a few close friends.",emoji:"🫂"},"go for a walk":{word:"go for a walk",phonetic:"/ɡoʊ fɔːr ə wɔːk/",definition:"出去散步",example:"Let's go for a walk in the park after dinner.",emoji:"🚶"},"go for a drink":{word:"go for a drink",phonetic:"/ɡoʊ fər ə drɪŋk/",definition:"去喝一杯",example:"After work, we decided to go for a drink.",emoji:"🍻"},"give enough sunlight":{word:"give enough sunlight",phonetic:"/ɡɪv ɪˈnʌf ˈsʌnlaɪt/",definition:"给足阳光",example:"You need to give these plants enough sunlight for them to grow well.",emoji:"☀️"},"green plants":{word:"green plants",phonetic:"/ɡriːn plænts/",definition:"绿色植物",example:"Having green plants in the office can improve productivity.",emoji:"🌿"},"grow beans":{word:"grow beans",phonetic:"/ɡroʊ biːnz/",definition:"种豆子",example:"In my school garden, we grow beans every spring.",emoji:"🌱"},"grow flowers":{word:"grow flowers",phonetic:"/ɡroʊ ˈflaʊərz/",definition:"种花",example:"My grandma likes to grow flowers in her backyard.",emoji:"🌸"},"good at":{word:"good at",phonetic:"/ɡʊd æt/",definition:"擅长于",example:"She is very good at playing the piano.",emoji:"👍"},gum:{word:"gum",phonetic:"/ɡʌm/",definition:"口香糖",example:"Chewing gum can help some people focus.",emoji:"🍬"}},rk={"hang out":{word:"hang out",phonetic:"/hæŋ aʊt/",definition:"一起玩；闲逛",example:"We often hang out at the cafe after school.",emoji:"☕"},"historical site":{word:"historical site",phonetic:"/hɪˈstɔːrɪkl saɪt/",definition:"历史遗迹",example:"The Great Wall of China is a famous historical site.",emoji:"🏰"},"hustle and bustle":{word:"hustle and bustle",phonetic:"/ˈhʌsl ænd ˈbʌsl/",definition:"熙熙攘攘",example:"I love the hustle and bustle of the big city.",emoji:"🏙️"},"have a rest":{word:"have a rest",phonetic:"/hæv ə rest/",definition:"休息一下",example:"I need to have a rest after a long walk.",emoji:"💤"},hobby:{word:"hobby",phonetic:"/ˈhɒbi/",definition:"爱好",example:"My favorite hobby is painting.",emoji:"🎨"},"hang out with friends":{word:"hang out with friends",phonetic:"/hæŋ aʊt wɪθ frendz/",definition:"和朋友一起玩",example:"I like to hang out with friends on weekends.",emoji:"👫"},"homemade food":{word:"homemade food",phonetic:"/ˈhoʊmˈmeɪd fuːd/",definition:"自带食物；家常菜",example:"I prefer homemade food because it's healthier and cheaper.",emoji:"🥪"},harvest:{word:"harvest",phonetic:"/ˈhɑːrvɪst/",definition:"收获",example:"It's time to harvest the ripe tomatoes.",emoji:"🧺"},"home-grown":{word:"home-grown",phonetic:"/ˈhoʊmˈɡroʊn/",definition:"自家种植的",example:"I love the taste of home-grown tomatoes.",emoji:"🍅"},"healthy lifestyle":{word:"healthy lifestyle",phonetic:"/ˈhelθi ˈlaɪfstaɪl/",definition:"健康的生活方式",example:"Eating fresh, home-grown vegetables is part of a healthy lifestyle.",emoji:"🥗"},"hands-on experience":{word:"hands-on experience",phonetic:"/ˌhændzˈɒn ɪkˈspɪəriəns/",definition:"动手实践",example:"The school garden provides hands-on experience in agriculture.",emoji:"🖐️"},houseplants:{word:"houseplants",phonetic:"/ˈhaʊsplænts/",definition:"室内植物",example:"I have several houseplants to decorate my living room.",emoji:"🪴"},horticulture:{word:"horticulture",phonetic:"/ˈhɔːrtɪkʌltʃər/",definition:"园艺",example:"I became interested in horticulture after growing vegetables at home.",emoji:"🪴"},"housewarming gift":{word:"housewarming gift",phonetic:"/ˈhaʊswɔːrmɪŋ ɡɪft/",definition:"乔迁礼物",example:"A potted plant is a popular housewarming gift.",emoji:"🎁"},"hard-working":{word:"hard-working",phonetic:"/ˌhɑːrdˈwɜːrkɪŋ/",definition:"勤奋的",example:"A successful student needs to be hard-working.",emoji:"💪"},hazelnut:{word:"hazelnut",phonetic:"/ˈheɪzlnʌt/",definition:"榛子",example:"Hazelnuts go very well with chocolate.",emoji:"🌰"},"hunger pang":{word:"hunger pang",phonetic:"/ˈhʌŋɡər pæŋ/",definition:"阵发饥饿感",example:"I had a hunger pang right before the meeting started.",emoji:"😫"}},ik={information:{word:"information",phonetic:"/ˌɪnfərˈmeɪʃn/",definition:"信息",example:"Never share your personal information with strangers.",emoji:"📄"},"id card":{word:"ID card",phonetic:"/aɪˈdiː kɑːrd/",definition:"身份证",example:"You need to show your ID card to get a library card.",emoji:"🆔"},infrastructure:{word:"infrastructure",phonetic:"/ˈɪnfrəˌstrʌktʃər/",definition:"基础设施",example:"The city needs to invest more in its public infrastructure.",emoji:"🏗️"},"in good condition":{word:"in good condition",phonetic:"/ɪn ɡʊd kənˈdɪʃn/",definition:"完好无损",example:"Please return the book in good condition.",emoji:"✨"},"indoor plants":{word:"indoor plants",phonetic:"/ˈɪndɔːr plænts/",definition:"室内植物",example:"Indoor plants can make a room feel more alive and welcoming.",emoji:"🌿"},interesting:{word:"interesting",phonetic:"/ˈɪntrəstɪŋ/",definition:"有趣的",example:"It is interesting to see how different plants grow.",emoji:"🤔"},improve:{word:"improve",phonetic:"/ɪmˈpruːv/",definition:"提高；改善",example:"I want to improve my public speaking skills.",emoji:"📈"},"ice cream":{word:"ice cream",phonetic:"/aɪs kriːm/",definition:"冰激凌",example:"Vanilla ice cream is my favorite flavor.",emoji:"🍨"}},sk={"just in case":{word:"just in case",phonetic:"/dʒʌst ɪn keɪs/",definition:"以防万一",example:"I'll bring an umbrella, just in case it rains.",emoji:"🎒"},"just a habit":{word:"just a habit",phonetic:"/dʒʌst ə ˈhæbɪt/",definition:"这就是习惯",example:"Checking my phone first thing in the morning is just a habit.",emoji:"🔄"}},lk={"keep them company":{word:"keep them company",phonetic:"/kiːp ðəm ˈkʌmpəni/",definition:"陪伴他们",example:"I often visit my grandmother to keep her company.",emoji:"☕"},keep:{word:"keep",phonetic:"/kiːp/",definition:"保留",example:"You can keep the book for another week.",emoji:"🔒"},"keep plants at home":{word:"keep plants at home",phonetic:"/kiːp plænts ət hoʊm/",definition:"在家养植物",example:"Many people keep plants at home to purify the air.",emoji:"🏡"}},ak={lend:{word:"lend",phonetic:"/lend/",definition:"借出",example:"Could you lend me your pen for a moment?",emoji:"➡️"},loyal:{word:"loyal",phonetic:"/ˈlɔɪəl/",definition:"忠诚的",example:"A loyal friend will always support you.",emoji:"🐶"},lively:{word:"lively",phonetic:"/ˈlaɪvli/",definition:"活泼的；热闹的",example:"The streets were lively with music and laughter.",emoji:"💃"},landmark:{word:"landmark",phonetic:"/ˈlændmɑːrk/",definition:"地标",example:"The Eiffel Tower is a famous landmark in Paris.",emoji:"🗼"},library:{word:"library",phonetic:"/ˈlaɪbreri/",definition:"图书馆",example:"I borrowed three books from the library yesterday.",emoji:"📚"},"library card":{word:"library card",phonetic:"/ˈlaɪbreri kɑːrd/",definition:"借书卡",example:"I need my library card to borrow books.",emoji:"💳"},leisure:{word:"leisure",phonetic:"/ˈliːʒər/",definition:"休闲",example:"What do you do in your leisure time?",emoji:"⛱️"},loan:{word:"loan",phonetic:"/loʊn/",definition:"借出；贷款",example:"The bank gave him a loan to buy a car.",emoji:"🏦"},learn:{word:"learn",phonetic:"/lɜːrn/",definition:"学习",example:"You are never too old to learn.",emoji:"📚"},"learn responsibility":{word:"learn responsibility",phonetic:"/lɜːrn rɪˌspɒnsəˈbɪləti/",definition:"学会责任感",example:"Taking care of plants helps children learn responsibility.",emoji:"🎓"},lollipop:{word:"lollipop",phonetic:"/ˈlɑːlipɑːp/",definition:"棒棒糖",example:"The child was happily licking a large lollipop.",emoji:"🍭"},"lower cholesterol":{word:"lower cholesterol",phonetic:"/ˈloʊər kəˈlestərɔːl/",definition:"降低胆固醇",example:"A diet rich in fiber can help lower cholesterol.",emoji:"❤️"}},ck={"mobile phone / cellphone":{word:"mobile phone / cellphone",phonetic:"/ˈmoʊbl foʊn / ˈselˌfoʊn/",definition:"手机",example:"I always carry my mobile phone when I go out.",emoji:"📱"},"mobile payment":{word:"mobile payment",phonetic:"/ˈmoʊbl ˈpeɪmənt/",definition:"手机支付",example:"Mobile payment is convenient, so I rarely use cash now.",emoji:"📲"},mutual:{word:"mutual",phonetic:"/ˈmjuːtʃuəl/",definition:"相互的",example:"Friendship is based on mutual trust and sharing.",emoji:"🤝"},masterpiece:{word:"masterpiece",phonetic:"/ˈmæstərpiːs/",definition:"杰作",example:"The Mona Lisa is considered a masterpiece of Renaissance art.",emoji:"🌟"},metropolis:{word:"metropolis",phonetic:"/məˈtrɑːpəlɪs/",definition:"大都市",example:"My hometown has transformed into a bustling metropolis.",emoji:"🌃"},megacity:{word:"megacity",phonetic:"/ˈmeɡəsɪti/",definition:"特大城市",example:"A megacity is a city with a population of over ten million people.",emoji:"🤯"},misunderstand:{word:"misunderstand",phonetic:"/ˌmɪsʌndərˈstænd/",definition:"误解",example:"Don't misunderstand me; I'm not criticizing you.",emoji:"🤔"},misunderstanding:{word:"misunderstanding",phonetic:"/ˌmɪsʌndərˈstændɪŋ/",definition:"误会",example:"There was a misunderstanding, but we cleared it up.",emoji:"😕"},"make up":{word:"make up",phonetic:"/meɪk ʌp/",definition:"和好",example:"Friends sometimes argue, but they always make up.",emoji:"🤗"},"meet up":{word:"meet up",phonetic:"/miːt ʌp/",definition:"见面；聚会",example:"Let's meet up for coffee this weekend.",emoji:"☕"},meaningful:{word:"meaningful",phonetic:"/ˈmiːnɪŋfl/",definition:"有意义的",example:"Growing your own food can be a meaningful way to connect with nature.",emoji:"💖"},"meaningful gift":{word:"meaningful gift",phonetic:"/ˈmiːnɪŋfəl ɡɪft/",definition:"有意义的礼物",example:"A plant you've grown yourself can be a very meaningful gift.",emoji:"💝"},"make the room feel alive":{word:"make the room feel alive",phonetic:"/meɪk ðə ruːm fiːl əˈlaɪv/",definition:"让房间更有生气",example:"Adding some plants can make the room feel alive.",emoji:"✨"},marshmallow:{word:"marshmallow",phonetic:"/ˈmɑːrʃmeloʊ/",definition:"棉花软糖",example:"We roasted marshmallows over the campfire.",emoji:"🍡"},macadamia:{word:"macadamia",phonetic:"/ˌmækəˈdeɪmiə/",definition:"澳洲坚果",example:"Macadamia nuts are known for their buttery taste.",emoji:"🌰"},metabolism:{word:"metabolism",phonetic:"/məˈtæbəlɪzəm/",definition:"新陈代谢",example:"Regular exercise can help speed up your metabolism.",emoji:"🔥"},"maintain weight":{word:"maintain weight",phonetic:"/meɪnˈteɪn weɪt/",definition:"保持体重",example:"Healthy snacking can help you maintain weight.",emoji:"⚖️"}},dk={noisy:{word:"noisy",phonetic:"/ˈnɔɪzi/",definition:"嘈杂的",example:"The restaurant was too noisy for a quiet conversation.",emoji:"🔊"},"navigation app":{word:"navigation app",phonetic:"/ˌnævɪˈɡeɪʃn æp/",definition:"导航应用",example:"I use a navigation app to find the best route.",emoji:"🗺️"}},uk={"online ads":{word:"online ads",phonetic:"/ˈɒnlaɪn ædz/",definition:"网络广告",example:"I see online ads every day when I browse the internet.",emoji:"💻"},"only for small shops":{word:"only for small shops",phonetic:"/ˈoʊnli fɔːr smɔːl ʃɒps/",definition:"只在小店用",example:"I use cash only for small shops that don't accept mobile payments.",emoji:"🏪"},overwhelming:{word:"overwhelming",phonetic:"/ˌoʊvərˈwelmɪŋ/",definition:"令人不知所措的",example:"The noise and the number of people were overwhelming.",emoji:"😵‍💫"},overdue:{word:"overdue",phonetic:"/ˌoʊvərˈduː/",definition:"逾期的",example:"The book is overdue; you have to pay a fine.",emoji:"⏳"},owe:{word:"owe",phonetic:"/oʊ/",definition:"欠",example:"I owe you five dollars.",emoji:"💸"},occasion:{word:"occasion",phonetic:"/əˈkeɪʒən/",definition:"场合",example:"A wedding is a very special occasion.",emoji:"🎁"},"observe the growth":{word:"observe the growth",phonetic:"/əbˈzɜːrv ðə ɡroʊθ/",definition:"观察生长",example:"It's fascinating to observe the growth of a plant from a tiny seed.",emoji:"🔬"},organic:{word:"organic",phonetic:"/ɔːrˈɡænɪk/",definition:"有机的",example:"We prefer to grow organic vegetables without pesticides.",emoji:"🌿"},outstanding:{word:"outstanding",phonetic:"/aʊtˈstændɪŋ/",definition:"杰出的",example:"His performance was outstanding.",emoji:"⭐"}},pk={patient:{word:"patient",phonetic:"/ˈpeɪʃnt/",definition:"有耐心的",example:"You need to be patient when communicating with older people.",emoji:"⏳"},personal:{word:"personal",phonetic:"/ˈpɜːrsənl/",definition:"个人的",example:"It's important to protect your personal information.",emoji:"🔐"},preservation:{word:"preservation",phonetic:"/ˌprezərˈveɪʃn/",definition:"保存；保护",example:"The preservation of historical documents is crucial for future generations.",emoji:"🛡️"},packed:{word:"packed",phonetic:"/pækt/",definition:"拥挤不堪的",example:"The train was so packed I could barely move.",emoji:"👨‍👩‍👧‍👦"},pollution:{word:"pollution",phonetic:"/pəˈluːʃn/",definition:"污染",example:"Air pollution is a serious issue in many big cities.",emoji:"🌫️"},park:{word:"park",phonetic:"/pɑːrk/",definition:"公园",example:"We often go for a walk in the local park.",emoji:"🏞️"},"public transport":{word:"public transport",phonetic:"/ˈpʌblɪk ˈtrænspɔːrt/",definition:"公共交通",example:"Using public transport is better for the environment.",emoji:"🚌"},"pedestrian area":{word:"pedestrian area",phonetic:"/pəˈdestriən ˈeriə/",definition:"步行区",example:"The city center has a large pedestrian area.",emoji:"🚶"},"public realm":{word:"public realm",phonetic:"/ˈpʌblɪk relm/",definition:"公共领域",example:"Improvements to the public realm can enhance community life.",emoji:"🧑‍🤝‍🧑"},private:{word:"private",phonetic:"/ˈpraɪvət/",definition:"私人的",example:"Some topics are too private to discuss with everyone.",emoji:"🤫"},permission:{word:"permission",phonetic:"/pərˈmɪʃn/",definition:"允许",example:"You should ask for permission before borrowing someone's things.",emoji:"🙏"},peaceful:{word:"peaceful",phonetic:"/ˈpiːsfl/",definition:"平静的",example:"I enjoy a peaceful walk in the park.",emoji:"🕊️"},"pack some food":{word:"pack some food",phonetic:"/pæk sʌm fuːd/",definition:"带点吃的",example:"Let's pack some food for the road trip.",emoji:"🍱"},popular:{word:"popular",phonetic:"/ˈpɒpjələr/",definition:"受欢迎的",example:"Gardening has become a very popular hobby.",emoji:"💖"},pleasant:{word:"pleasant",phonetic:"/ˈpleznt/",definition:"愉快的",example:"It was a pleasant afternoon spent in the garden.",emoji:"😊"},practice:{word:"practice",phonetic:"/ˈpræktɪs/",definition:"练习",example:"To become good at anything, you need to practice regularly.",emoji:"🔁"},proud:{word:"proud",phonetic:"/praʊd/",definition:"自豪的",example:"Her parents were very proud of her graduation.",emoji:"😌"},praise:{word:"praise",phonetic:"/preɪz/",definition:"赞扬",example:"The critics praised the film for its originality.",emoji:"👏"},proficient:{word:"proficient",phonetic:"/prəˈfɪʃnt/",definition:"精通的",example:"I am proficient in both spoken and written English.",emoji:"👩‍💻"},product:{word:"product",phonetic:"/ˈprɒdʌkt/",definition:"产品",example:"This advertisement promotes a new skin care product.",emoji:"🧴"},promote:{word:"promote",phonetic:"/prəˈmoʊt/",definition:"推广",example:"Companies use social media to promote their new products.",emoji:"📣"},"pop-up ad":{word:"pop-up ad",phonetic:"/ˈpɒp ʌp æd/",definition:"弹窗广告",example:"Many people use ad blockers to avoid annoying pop-up ads.",emoji:"💥"},persuasive:{word:"persuasive",phonetic:"/pərˈsweɪsɪv/",definition:"有说服力的",example:"Advertisements use persuasive language to attract customers.",emoji:"💡"},punishment:{word:"punishment",phonetic:"/ˈpʌnɪʃmənt/",definition:"惩罚",example:"The punishment for cheating on the exam is severe.",emoji:"🚫"},policy:{word:"policy",phonetic:"/ˈpɑːləsi/",definition:"政策；规定",example:"The company has a no-smoking policy.",emoji:"📄"},"public rules":{word:"public rules",phonetic:"/ˈpʌblɪk ruːlz/",definition:"公共规则",example:"In public places, we should follow public rules like keeping quiet.",emoji:"🤫"},"potted plant":{word:"potted plant",phonetic:"/ˈpɒtɪd plænt/",definition:"盆栽植物",example:"I have a small potted plant on my desk.",emoji:"🪴"},"plant seeds":{word:"plant seeds",phonetic:"/plænt siːdz/",definition:"播种",example:"In spring, we plant seeds in the soil.",emoji:"🤲"},petal:{word:"petal",phonetic:"/ˈpetl/",definition:"花瓣",example:"The flower has soft petals.",emoji:"🥀"},poster:{word:"poster",phonetic:"/ˈpoʊstər/",definition:"海报",example:"She put up a poster of her favorite band on her wall.",emoji:"🖼️"},popcorn:{word:"popcorn",phonetic:"/ˈpɑːpkɔːrn/",definition:"爆米花",example:"Popcorn is the classic snack for watching movies.",emoji:"🍿"},pudding:{word:"pudding",phonetic:"/ˈpʊdɪŋ/",definition:"布丁",example:"Chocolate pudding is a simple and sweet dessert.",emoji:"🍮"},peanut:{word:"peanut",phonetic:"/ˈpiːnʌt/",definition:"花生",example:"I like roasted peanuts with a little salt.",emoji:"🥜"},popsicle:{word:"popsicle",phonetic:"/ˈpɑːpsɪkl/",definition:"冰棒",example:"It was so hot that we all wanted a fruit popsicle.",emoji:"🍦"},"pork jerky":{word:"pork jerky",phonetic:"/pɔːrk ˈdʒɜːrki/",definition:"猪肉干",example:"Pork jerky is a popular snack in many Asian countries.",emoji:"🥓"},plum:{word:"plum",phonetic:"/plʌm/",definition:"李子；梅子",example:"Sour plums are a very refreshing snack.",emoji:"🍑"},"prevent overeating":{word:"prevent overeating",phonetic:"/prɪˈvent ˌoʊvərˈiːtɪŋ/",definition:"防止暴饮暴食",example:"Having small snacks can prevent overeating during dinner.",emoji:"🚫"},pistachio:{word:"pistachio",phonetic:"/pɪˈstæʃioʊ/",definition:"开心果",example:"Pistachios are fun to crack open and eat.",emoji:"🥜"}},fk={"qr code":{word:"QR code",phonetic:"/kjuː ɑːr koʊd/",definition:"二维码",example:"You can scan the QR code to pay.",emoji:"📸"}},hk={reliable:{word:"reliable",phonetic:"/rɪˈlaɪəbl/",definition:"可靠的",example:"He is a very reliable employee who always meets deadlines.",emoji:"🔑"},respectful:{word:"respectful",phonetic:"/rɪˈspektfəl/",definition:"尊敬的",example:"It is important to be respectful to the elderly.",emoji:"🙇‍♂️"},rewarding:{word:"rewarding",phonetic:"/rɪˈwɔːrdɪŋ/",definition:"有益的；值得的",example:"Spending time with my grandparents is a rewarding experience.",emoji:"💖"},restoration:{word:"restoration",phonetic:"/ˌrestəˈreɪʃn/",definition:"修复；恢复",example:"The restoration of the ancient painting took years of careful work.",emoji:"🛠️"},realism:{word:"realism",phonetic:"/ˈriːəlɪzəm/",definition:"现实主义",example:"The artist is known for his incredible realism and attention to detail.",emoji:"📷"},resident:{word:"resident",phonetic:"/ˈrezɪdənt/",definition:"居民",example:"The city has over a million residents.",emoji:"🧑‍🤝‍🧑"},recreational:{word:"recreational",phonetic:"/ˌrekriˈeɪʃənl/",definition:"娱乐的",example:"The park offers many recreational facilities.",emoji:"⚽"},return:{word:"return",phonetic:"/rɪˈtɜːrn/",definition:"归还",example:"Please return the book by Friday.",emoji:"🔙"},responsible:{word:"responsible",phonetic:"/rɪ+spɑːnsəbl/",definition:"负责的",example:"You are responsible for the items you borrow.",emoji:"👨‍⚖️"},replace:{word:"replace",phonetic:"/rɪˈpleɪs/",definition:"替换",example:"If you lose the item, you must replace it.",emoji:"🔄"},recharge:{word:"recharge",phonetic:"/riːˈtʃɑːrdʒ/",definition:"充电",example:"A short break can help you recharge your batteries.",emoji:"🔋"},refresh:{word:"refresh",phonetic:"/rɪˈfreʃ/",definition:"使...精神振作",example:"A cup of coffee can refresh me in the morning.",emoji:"☕"},refreshing:{word:"refreshing",phonetic:"/rɪˈfreʃɪŋ/",definition:"令人清新的",example:"Breathing fresh air in the garden feels refreshing.",emoji:"🍃"},relax:{word:"relax",phonetic:"/rɪˈlæks/",definition:"放松",example:"I just want to relax on the sofa and watch TV.",emoji:"💆‍♂️"},rest:{word:"rest",phonetic:"/rest/",definition:"休息",example:"You look tired, you should get some rest.",emoji:"🛌"},"respect each other":{word:"respect each other",phonetic:"/rɪˈspekt iːtʃ ˈʌðər/",definition:"互相尊重",example:"Good communication requires that we respect each other's opinions.",emoji:"🤝"},"rarely use cash":{word:"rarely use cash",phonetic:"/ˈrerli juːz kæʃ/",definition:"很少用现金",example:"I rarely use cash because mobile payments are so common.",emoji:"💸"},relaxing:{word:"relaxing",phonetic:"/rɪˈlæksɪŋ/",definition:"放松的",example:"Gardening can be a very relaxing hobby.",emoji:"😌"},root:{word:"root",phonetic:"/ruːt/",definition:"根",example:"The roots of the tree go deep into the ground.",emoji:"🪴"},reasonable:{word:"reasonable",phonetic:"/ˈriːznəbl/",definition:"合理的",example:"The school rules are quite reasonable.",emoji:"⚖️"},respect:{word:"respect",phonetic:"/rɪˈspekt/",definition:"尊重",example:"We should respect the school rules and our teachers.",emoji:"🙏"},required:{word:"required",phonetic:"/rɪˈkwaɪərd/",definition:"要求的；必须的",example:"Students are required to finish their homework on time.",emoji:"📋"},regulation:{word:"regulation",phonetic:"/ˌreɡjuˈleɪʃn/",definition:"规章；管理",example:"There are strict safety regulations in this factory.",emoji:"📜"},"return / exchange":{word:"return / exchange",phonetic:"/rɪˈtɜːrn/",definition:"退/换",example:"You can return the shoes if they don't fit well.",emoji:"🔄"},"refined sugar":{word:"refined sugar",phonetic:"/rɪˈfaɪnd ˈʃʊɡər/",definition:"精制糖",example:"Eating too much refined sugar can be bad for your health.",emoji:"🍬"}},mk={sociable:{word:"sociable",phonetic:"/ˈsoʊʃəbl/",definition:"好交际的",example:"My friend is very sociable and loves parties.",emoji:"🥳"},supportive:{word:"supportive",phonetic:"/səˈpɔːrtɪv/",definition:"支持的",example:"My parents are very supportive of my career choice.",emoji:"👍"},sculpture:{word:"sculpture",phonetic:"/ˈskʌlptʃər/",definition:"雕塑",example:"We admired the beautiful marble sculpture in the gallery.",emoji:"🗿"},skyscraper:{word:"skyscraper",phonetic:"/ˈskaɪˌskreɪpər/",definition:"摩天大楼",example:"The skyline of New York is dominated by skyscrapers.",emoji:"🏙️"},skyline:{word:"skyline",phonetic:"/ˈskaɪlaɪn/",definition:"天际线",example:"We admired the beautiful city skyline at sunset.",emoji:"🌇"},suburb:{word:"suburb",phonetic:"/ˈsʌbɜːrb/",definition:"郊区",example:"Many people commute from the suburbs to work in the city.",emoji:"🏡"},subway:{word:"subway",phonetic:"/ˈsʌbweɪ/",definition:"地铁",example:"Taking the subway is the fastest way to get around the city.",emoji:"🚇"},square:{word:"square",phonetic:"/skwer/",definition:"广场",example:"People gathered in the main square for the concert.",emoji:"⛲"},"small talk":{word:"small talk",phonetic:"/smɔːl tɔːk/",definition:"闲聊",example:"We made small talk while waiting for the bus.",emoji:"💬"},"stay in touch":{word:"stay in touch",phonetic:"/steɪ ɪn tʌtʃ/",definition:"保持联系",example:"We promised to stay in touch after we graduated.",emoji:"📧"},"school stuff":{word:"school stuff",phonetic:"/skuːl stʌf/",definition:"学校的事情",example:"We usually talk about school stuff like homework and exams.",emoji:"🏫"},"social media":{word:"social media",phonetic:"/ˈsoʊʃl ˈmiːdiə/",definition:"社交媒体",example:"We stay in touch through social media apps.",emoji:"📱"},snacks:{word:"snacks",phonetic:"/snæks/",definition:"零食",example:"We packed some snacks like chips and fruit for the picnic.",emoji:"🥨"},socialize:{word:"socialize",phonetic:"/ˈsoʊʃəlaɪz/",definition:"社交",example:"Parties are a great opportunity to socialize with new people.",emoji:"👥"},"stay connected":{word:"stay connected",phonetic:"/steɪ kəˈnektɪd/",definition:"保持联系",example:"My phone helps me stay connected with friends and family.",emoji:"🔗"},soil:{word:"soil",phonetic:"/sɔɪl/",definition:"土壤",example:"Good soil is essential for growing healthy plants.",emoji:"🪴"},seeds:{word:"seeds",phonetic:"/siːdz/",definition:"种子",example:"We bought some tomato seeds to plant in our garden.",emoji:"🌱"},sunlight:{word:"sunlight",phonetic:"/ˈsʌnlaɪt/",definition:"阳光",example:"These plants need at least six hours of direct sunlight each day.",emoji:"☀️"},stem:{word:"stem",phonetic:"/stem/",definition:"茎",example:"The stem supports the leaves and flowers.",emoji:"🌿"},sprout:{word:"sprout",phonetic:"/spraʊt/",definition:"发芽",example:"After planting the seed, you have to wait for it to sprout.",emoji:"🌱"},"school garden":{word:"school garden",phonetic:"/skuːl ˈɡɑːrdn/",definition:"校园菜园",example:"The students work together to maintain the school garden.",emoji:"🏫"},"school gardening class":{word:"school gardening class",phonetic:"/skuːl ˈɡɑːrdnɪŋ klæs/",definition:"学校的种植课",example:"I learned about different plants in my school gardening class.",emoji:"👨‍🏫"},"symbol of good luck":{word:"symbol of good luck",phonetic:"/ˈsɪmbəl əv ɡʊd lʌk/",definition:"象征好运",example:"The money tree is often considered a symbol of good luck.",emoji:"🍀"},"special occasions":{word:"special occasions",phonetic:"/ˈspeʃl əˈkeɪʒənz/",definition:"特别场合",example:"Flowers are a popular gift for special occasions like birthdays.",emoji:"🎉"},space:{word:"space",phonetic:"/speɪs/",definition:"空间",example:"You don't need a lot of space to grow some herbs.",emoji:"📏"},succeed:{word:"succeed",phonetic:"/səkˈsiːd/",definition:"成功",example:"She worked hard and finally succeeded in her business.",emoji:"🎉"},successful:{word:"successful",phonetic:"/səkˈsesfəl/",definition:"成功的",example:"He is a successful businessman.",emoji:"💼"},smart:{word:"smart",phonetic:"/smɑːrt/",definition:"聪明的",example:"She is a smart student who always gets good grades.",emoji:"🧠"},skillful:{word:"skillful",phonetic:"/ˈskɪlfəl/",definition:"熟练的",example:"He is a skillful negotiator.",emoji:"🎨"},service:{word:"service",phonetic:"/ˈsɜːrvɪs/",definition:"服务",example:"The ad highlights the excellent customer service they provide.",emoji:"💁"},slogan:{word:"slogan",phonetic:"/ˈsloʊɡən/",definition:"口号；标语",example:`Nike's slogan "Just Do It" is known worldwide.`,emoji:"📣"},strict:{word:"strict",phonetic:"/strɪkt/",definition:"严格的",example:"Have you ever had a really strict teacher?",emoji:"👩‍⚖️"},"school discipline":{word:"school discipline",phonetic:"/skuːl ˈdɪsəplɪn/",definition:"校纪",example:"Good school discipline is important for learning.",emoji:"🏫"},"sneakers / trainers":{word:"sneakers / trainers",phonetic:"/ˈsniːkərz/",definition:"运动鞋",example:"I bought a new pair of sneakers for running.",emoji:"👟"},"sports shoes":{word:"sports shoes",phonetic:"/spɔːrts ʃuːz/",definition:"运动鞋",example:"Sports shoes provide great support for feet.",emoji:"👟"},"short boots":{word:"short boots",phonetic:"/ʃɔːrt buːts/",definition:"短靴",example:"Short boots go perfectly with skinny jeans.",emoji:"🥾"},sandals:{word:"sandals",phonetic:"/ˈsændlz/",definition:"凉鞋",example:"I wear sandals to the beach in the summer.",emoji:"👡"},slippers:{word:"slippers",phonetic:"/ˈslɪpərz/",definition:"拖鞋",example:"I put on my warm slippers as soon as I get home.",emoji:"🏠"},stylish:{word:"stylish",phonetic:"/ˈstaɪlɪʃ/",definition:"时髦的",example:"He bought a pair of stylish leather shoes.",emoji:"😎"},"size chart":{word:"size chart",phonetic:"/saɪz tʃɑːrt/",definition:"尺码表",example:"Check the size chart before ordering shoes online.",emoji:"📏"},"scuff marks":{word:"scuff marks",phonetic:"/skʌf mɑːrks/",definition:"磨损痕迹",example:"I am trying to remove the scuff marks from my leather shoes.",emoji:"🎨"},seaweed:{word:"seaweed",phonetic:"/ˈsiːwiːd/",definition:"海草",example:"Dried seaweed is a healthy, crunchy snack.",emoji:"🌿"},snacker:{word:"snacker",phonetic:"/ˈsnækər/",definition:"在正餐之间吃小吃的人",example:"I am a heavy snacker when I am studying late.",emoji:"😋"},"sugar-free":{word:"sugar-free",phonetic:"/ˈʃʊɡər friː/",definition:"无糖的",example:"I prefer sugar-free gum to protect my teeth.",emoji:"🚫"}},gk={talkative:{word:"talkative",phonetic:"/ˈtɔːkətɪv/",definition:"健谈的",example:"My roommate is very talkative, she can talk for hours.",emoji:"🗣️"},thoughtful:{word:"thoughtful",phonetic:"/ˈθɔːtfl/",definition:"体贴的",example:"It was very thoughtful of you to bring flowers.",emoji:"💐"},topics:{word:"topics",phonetic:"/ˈtɒpɪks/",definition:"话题",example:"We discussed a variety of topics during our conversation.",emoji:"💬"},trust:{word:"trust",phonetic:"/trʌst/",definition:"信任",example:"Trust is the foundation of any strong friendship.",emoji:"🤝"},trustworthy:{word:"trustworthy",phonetic:"/ˈtrʌstˌwɜːrði/",definition:"值得信赖的",example:"She is a trustworthy person; your secret is safe with her.",emoji:"🤝"},teammate:{word:"teammate",phonetic:"/ˈtiːmmeɪt/",definition:"队友",example:"My teammate and I practice together every day.",emoji:"🫂"},traffic:{word:"traffic",phonetic:"/ˈtræfɪk/",definition:"交通",example:"The traffic is always heavy during rush hour.",emoji:"🚗"},"teeming with":{word:"teeming with",phonetic:"/ˈtiːmɪŋ wɪθ/",definition:"充满",example:"The streets were teeming with tourists.",emoji:"🐠"},"take it easy":{word:"take it easy",phonetic:"/teɪk ɪt ˈiːzi/",definition:"放轻松",example:"Just take it easy, everything will be fine.",emoji:"🧘‍♂️"},"take a nap":{word:"take a nap",phonetic:"/teɪk ə næp/",definition:"小睡一下",example:"I usually take a nap after lunch.",emoji:"😴"},"text messages":{word:"text messages",phonetic:"/tekst ˈmesɪdʒɪz/",definition:"短信",example:"I prefer sending text messages because it's quick.",emoji:"💬"},"take my phone with me":{word:"take my phone with me",phonetic:"/teɪk maɪ foʊn wɪθ mi/",definition:"随身带手机",example:"I always take my phone with me when I leave the house.",emoji:"🤳"},"take care of":{word:"take care of",phonetic:"/teɪk ker əv/",definition:"照顾",example:"It is important to take care of the plants properly.",emoji:"👨‍🌾"},"take time and effort":{word:"take time and effort",phonetic:"/teɪk taɪm ænd ˈefərt/",definition:"花费时间和精力",example:"Gardening can take time and effort, but it is worth it.",emoji:"💪"},"take time to grow":{word:"take time to grow",phonetic:"/teɪk taɪm tuː ɡroʊ/",definition:"生长需要时间",example:"You must be patient; plants take time to grow.",emoji:"⏳"},talented:{word:"talented",phonetic:"/ˈtæləntɪd/",definition:"有天赋的",example:"He is a talented musician.",emoji:"✨"},teamwork:{word:"teamwork",phonetic:"/ˈtiːmwɜːrk/",definition:"团队合作",example:"Maintaining a school garden requires a lot of teamwork.",emoji:"🤝"},"target audience":{word:"target audience",phonetic:"/ˈtɑːrɡɪt ˈɔːdiəns/",definition:"目标受众",example:"The ad was designed for a young target audience.",emoji:"🎯"},"try on shoes":{word:"try on shoes",phonetic:"/traɪ ɒn/",definition:"试穿",example:"Always try on shoes before buying them.",emoji:"👣"},"traffic rules":{word:"traffic rules",phonetic:"/ˈtræfɪk ruːlz/",definition:"交通规则",example:"Following traffic rules can prevent accidents.",emoji:"🚦"},"trail mixes":{word:"trail mixes",phonetic:"/treɪl mɪksɪz/",definition:"混合型坚果",example:"Trail mixes usually contain nuts, seeds, and dried fruit.",emoji:"🎒"}},yk={urban:{word:"urban",phonetic:"/ˈɜːrbən/",definition:"都市的",example:"Traffic congestion is a major problem in many urban areas.",emoji:"🏢"},urbanization:{word:"urbanization",phonetic:"/ˌɜːrbənaɪˈzeɪʃn/",definition:"城市化",example:"Rapid urbanization has led to many social and environmental challenges.",emoji:"📈"},unwind:{word:"unwind",phonetic:"/ʌnˈwaɪnd/",definition:"放松",example:"I like to listen to music to unwind after work.",emoji:"😌"}},vk={vibrant:{word:"vibrant",phonetic:"/ˈvaɪbrənt/",definition:"充满活力的",example:"It's a vibrant city with a lively nightlife.",emoji:"🎉"},venue:{word:"venue",phonetic:"/ˈvenjuː/",definition:"场所",example:"The park is a popular venue for outdoor events.",emoji:"📍"},"video call":{word:"video call",phonetic:"/ˈvɪdioʊ kɔːl/",definition:"视频通话",example:"I had a video call with my family last night.",emoji:"📹"}},wk={wise:{word:"wise",phonetic:"/waɪz/",definition:"明智的",example:"My grandfather is a wise man who gives great advice.",emoji:"🦉"},wisdom:{word:"wisdom",phonetic:"/ˈwɪzdəm/",definition:"智慧",example:"Old people often have a lot of wisdom to share.",emoji:"🦉"},"well-maintained":{word:"well-maintained",phonetic:"/ˌwel meɪnˈteɪnd/",definition:"维护良好的",example:"The public gardens are always well-maintained.",emoji:"✨"},water:{word:"water",phonetic:"/ˈwɔːtər/",definition:"水；浇水",example:"Plants need plenty of water and sunlight to grow.",emoji:"💧"},"water the plants":{word:"water the plants",phonetic:"/ˈwɔːtər ðə plænts/",definition:"给植物浇水",example:"Remember to water the plants every morning.",emoji:"🚿"},"wait for it to sprout":{word:"wait for it to sprout",phonetic:"/weɪt fɔːr ɪt tuː spraʊt/",definition:"等它发芽",example:"After planting the seed, you have to wait for it to sprout.",emoji:"🌱"},warning:{word:"warning",phonetic:"/ˈwɔːrnɪŋ/",definition:"警告",example:"The teacher gave him a final warning before taking action.",emoji:"⚠️"},"wear school uniform":{word:"wear school uniform",phonetic:"/wer skuːl ˈjuːnɪfɔːrm/",definition:"穿校服",example:"All students are required to wear a school uniform.",emoji:"👕"},waterproof:{word:"waterproof",phonetic:"/ˈwɔːtərpruːf/",definition:"防水的",example:"These boots are waterproof for rainy days.",emoji:"☔"},"worth the money":{word:"worth the money",phonetic:"/wɜːrθ ðə ˈmʌni/",definition:"物有所值",example:"These shoes are expensive but they are worth the money.",emoji:"💯"},"wear and tear":{word:"wear and tear",phonetic:"/wer ænd ter/",definition:"磨损",example:"The old shoes showed significant wear and tear.",emoji:"🕳️"},walnut:{word:"walnut",phonetic:"/ˈwɔːlnʌt/",definition:"核桃",example:"Walnuts are shaped like a tiny brain.",emoji:"🌰"}},xk={yogurt:{word:"yogurt",phonetic:"/ˈjoʊɡərt/",definition:"酸奶",example:"I often have yogurt with some fruit as a snack.",emoji:"🥛"}},Sk={...Qb,...Xb,...Zb,...ek,...tk,...nk,...ok,...rk,...ik,...sk,...lk,...ak,...ck,...dk,...uk,...pk,...fk,...hk,...mk,...gk,...yk,...vk,...wk,...xk},bk=(e,t)=>{const n=Sk[e.toLowerCase()];return n?{...n,...t}:(console.warn(`Word ID "${e}" not found in pool.`),{word:e,phonetic:"",definition:"Not Found",example:"",emoji:"❓",...t})},z=(e,t)=>e.map(n=>bk(n,t?{level:t}:{})),gl="2025年 9-12月",kk={id:"friends",title:"Friends & Sharing",type:"人物题",color:"yellow",seasons:[gl],wordSections:[{title:"基础词汇",words:z(["get along with","teammate","close friend","talkative","easy-going","caring","topics","trust","hang out","lend","borrow","personal","information","ID card","bank account"],"basic")},{title:"进阶词汇",words:z(["sociable","loyal","trustworthy","supportive","reliable","generous","thoughtful","mutual","contribute","cooperate"],"advanced")}]},Ck={id:"old-people",title:"Staying with old people",type:"事件题",color:"blue",seasons:[gl],words:z(["respectful","patient","generation gap","wisdom","companionship","caretakers","caregivers","gentle","thoughtful","wise","rewarding","keep them company","accompany"])},Tk={id:"chatting",title:"Chatting",type:"事件题",color:"blue",seasons:[gl],wordSections:[{title:"基础词汇",words:z(["conversation","small talk","catch up","stay in touch","lively","school stuff","private","face-to-face","social media","text messages","video call","argue","misunderstand","misunderstanding","make up"],"basic")},{title:"进阶词汇",words:z(["converse","engage in","express emotions","respect each other"],"advanced")}]},Ek={id:"going-out",title:"Going Out",type:"事件题",color:"yellow",isNew:!0,seasons:[gl],wordSections:[{title:"基础词汇",words:z(["meet up","hang out","gathering","get-together","celebrate","occasion","go for a walk","hang out with friends","daily life","snacks","pack some food","bottled water","homemade food","just in case","mobile phone / cellphone","take my phone with me","mobile payment","check messages","cash","rarely use cash","only for small shops","credit card","just a habit","depends on the situation"],"basic")},{title:"进阶词汇",words:z(["socialize","venue","atmosphere","lively","nightlife","entertainment","book a table","reservation","go for a drink","energy bar","cannot live without my phone","navigation app","stay connected","e-wallet","qr code"],"advanced")}]},Zd="2025年 9-12月",Ik={id:"museum",title:"Museum",type:"地点题",color:"green",seasons:[Zd],wordSections:[{title:"基础词汇",words:z(["exhibition","gallery","artifact","artwork","collection","display","sculpture","historical site","educational"],"basic")},{title:"进阶词汇",words:z(["cultural heritage","aesthetics","restoration","masterpiece","abstract","realism","contemporary art","archaeology","preservation"],"advanced")}]},_k={id:"city-crowded-place",title:"Crowded place",type:"地点题",color:"green",seasons:[Zd],wordSections:[{title:"基础词汇",words:z(["crowded","packed","busy","noisy","lively","a crowd of people","skyscraper","skyline","urban","downtown","suburb","traffic","subway","landmark","resident","pollution"],"basic")},{title:"进阶词汇",words:z(["bustling","vibrant","hustle and bustle","overwhelming","teeming with","congested","infrastructure","metropolis","cosmopolitan","urbanization","megacity"],"advanced")}]},Ak={id:"public-places",title:"Public places",type:"地点题",color:"green",seasons:[Zd],wordSections:[{title:"基础词汇",words:z(["amenities","accessible","community","recreational","green spaces","park","library","square","public transport"],"basic")},{title:"进阶词汇",words:z(["civic","venue","pedestrian area","well-maintained","public realm"],"advanced")}]},ri="2025年 9-12月",Pk={id:"sharing",title:"Sharing",type:"事件题",color:"blue",seasons:[ri],words:z(["generous","mutual","contribute","cooperate"])},Rk={id:"break",title:"Having a break",type:"事件题",color:"blue",seasons:[ri],words:z(["unwind","recharge","leisure","have a rest","take it easy","chill","refresh","take a nap","peaceful","relax","rest","calm","hobby"])},Mk={id:"borrowing",title:"Borrowing/lending",type:"事件题",color:"blue",seasons:[ri],wordSections:[{title:"基础词汇",words:z(["lend","borrow","return","keep","give back","due date","library card"],"basic")},{title:"进阶词汇",words:z(["responsible","overdue","fine","loan","owe","permission","trustworthy","in good condition","damage","replace"],"advanced")}]},Yp={id:"gardening",title:"Plants",type:"事件题",color:"blue",seasons:[ri],wordSections:[{title:"基础词汇",words:z(["farm","backyard","soil","seeds","water","sunlight","fresh air","plant seeds","water the plants","root","stem","petal","blossom","bloom","potted plant","houseplants","indoor plants","green plants","flower shop","school garden","grow beans","grow flowers","observe the growth","wait for it to sprout"],"basic")},{title:"进阶词汇",words:z(["cultivate","harvest","organic","horticulture","botany","fragrance","popular","take care of","home-grown","relaxing","enjoyable","interesting","rewarding","meaningful","close to nature","healthy lifestyle","take time and effort","space","easy to grow","hands-on experience","environmental education","learn responsibility","teamwork","keep plants at home","decorate the room","make the room feel alive","give enough sunlight","school gardening class","take time to grow","symbol of good luck","special occasions","housewarming gift","meaningful gift","peaceful","refreshing","pleasant"],"advanced")}]},$k={id:"doing-well",title:"Doing something well",type:"事件题",color:"blue",seasons:[ri],isNew:!0,words:z(["champion","praise","accomplishment","excel","outstanding","proficient","skillful","expert","achieve","succeed","practice","proud","improve","good at","talented","hard-working","smart","clever","experience","learn"])},eu="2025年 9-12月",Nk={id:"advertisement",title:"Advertisement",type:"事物题",color:"purple",seasons:[eu],wordSections:[{title:"基础词汇",words:z(["commercial","brand","product","service","customer","billboard","poster","online ads","pop-up ad","slogan","annoying","promote"],"basic")},{title:"进阶词汇",words:z(["persuasive","target audience","consumer","eye-catching","misleading","draw attention","brand awareness","celebrity endorsement","marketing strategy","consumer behavior","campaign"],"advanced")}]},jk={id:"rules",title:"Rules",type:"事物题",color:"purple",seasons:[eu],wordSections:[{title:"基础词汇",words:z(["allowed","benefit","follow the rules","break the rules","respect","fewer","enough","traffic rules","public rules","no littering","reasonable","annoying","strict","school discipline","behave well","misbehave","wear school uniform","no phones in class","warning","punishment","get into trouble","fair","unfair"],"basic")},{title:"进阶词汇",words:z(["focus","practice","required","rule-free","self-discipline","regulation","policy","comply with","enforce","dedicated","detention"],"advanced")}]},Lk={id:"shoes",title:"Shoes",type:"事物题",color:"purple",seasons:[eu],wordSections:[{title:"1. 鞋子种类 (Shoe Types)",words:z(["sneakers / trainers","sports shoes","high heels","mid heel","low heel","boots","high boots","short boots","sandals","slippers","flip-flops","canvas shoes","open-toed","almond shaped toe","footwear"],"basic")},{title:"2. 描述与形容 (Descriptions)",words:z(["fashionable","affordable","brand","stylish","size chart","durable","versatile","breathable","waterproof"],"advanced")},{title:"3. 地道表达与词组 (Expressions)",words:z(["try on shoes","fit well","on sale","discount","return / exchange","latest trend","worth the money","break in","wear and tear","scuff marks"],"advanced")}]},yl="2025年 5-8月",Dk={id:"p1-study-work",title:"Study or work",type:"基础题",color:"blue",badge:"必考",seasons:[yl],wordSections:[{title:"学习类 (Study)",words:[{word:"major in",level:"basic",phonetic:"/ˈmeɪdʒər ɪn/",definition:"主修",example:"I major in computer science at university.",emoji:"🎓"},{word:"curriculum",level:"advanced",phonetic:"/kəˈrɪkjələm/",definition:"课程",example:"The school is introducing a new curriculum next year.",emoji:"📖"},{word:"assignment",level:"basic",phonetic:"/əˈsaɪnmənt/",definition:"作业/任务",example:"I have a big assignment due next Monday.",emoji:"📝"},{word:"tutorial",level:"advanced",phonetic:"/tuːˈtɔːriəl/",definition:"辅导课",example:"Small group tutorials are very helpful for discussion.",emoji:"🏫"},{word:"overwhelming",level:"advanced",phonetic:"/ˌoʊvərˈwelmɪŋ/",definition:"压力巨大的",example:"The workload can be a bit overwhelming sometimes.",emoji:"😫"}]},{title:"工作类 (Work)",words:[{word:"occupation",level:"basic",phonetic:"/ˌɑːkjuˈpeɪʃn/",definition:"职业",example:"Please state your name and occupation.",emoji:"💼"},{word:"colleague",level:"basic",phonetic:"/ˈkɑːliːɡ/",definition:"同事",example:"I get along very well with my colleagues.",emoji:"🤝"},{word:"workload",level:"basic",phonetic:"/ˈwɜːrkloʊd/",definition:"工作量",example:"The management is trying to reduce the staff workload.",emoji:"📂"},{word:"rewarding",level:"advanced",phonetic:"/rɪˈwɔːrdɪŋ/",definition:"有回报的/值得的",example:"Teaching is a very rewarding career.",emoji:"✨"},{word:"commute",level:"advanced",phonetic:"/kəˈmjuːt/",definition:"通勤",example:"My daily commute takes about 40 minutes.",emoji:"🚆"}]}]},Bk={id:"p1-hometown",title:"Hometown",type:"基础题",color:"green",badge:"必考",seasons:[yl],wordSections:[{title:"基础描述",words:[{word:"birthplace",level:"basic",phonetic:"/ˈbɜːrθpleɪs/",definition:"出生地",example:"Beijing is my birthplace and I grew up there.",emoji:"🏠"},{word:"scenery",level:"basic",phonetic:"/ˈsiːnəri/",definition:"风景",example:"The scenery in my hometown is breathtaking.",emoji:"🏔️"},{word:"residents",level:"basic",phonetic:"/ˈrezɪdənts/",definition:"居民",example:"The local residents are very friendly and welcoming.",emoji:"🧑‍🤝‍🧑"},{word:"historical",level:"basic",phonetic:"/hɪˈstɔːrɪkl/",definition:"历史悠久的",example:"There are many historical buildings in the city center.",emoji:"🏛️"}]},{title:"进阶描述",words:[{word:"urbanization",level:"advanced",phonetic:"/ˌɜːrbənaɪˈzeɪʃn/",definition:"城市化",example:"The town has seen rapid urbanization in recent years.",emoji:"🏙️"},{word:"pace of life",level:"advanced",phonetic:"/peɪs əv laɪf/",definition:"生活节奏",example:"I prefer the slow pace of life in my hometown.",emoji:"⏳"},{word:"metropolis",level:"advanced",phonetic:"/məˈtrɑːpəlɪs/",definition:"大都市",example:"My hometown has transformed into a bustling metropolis.",emoji:"🌃"},{word:"local delicacy",level:"advanced",phonetic:"/ˈloʊkl ˈdelɪkəsi/",definition:"当地美食",example:"You must try the local delicacy when you visit.",emoji:"🍲"},{word:"sentimental value",level:"advanced",phonetic:"/ˌsentɪˈmentl ˈvæljuː/",definition:"情感价值",example:"This old park has great sentimental value to me.",emoji:"💖"}]}]},Uk={id:"p1-accommodation",title:"Accommodation",type:"基础题",color:"yellow",badge:"必考",seasons:[yl],wordSections:[{title:"住所类型",words:[{word:"apartment",level:"basic",phonetic:"/əˈpɑːrtmənt/",definition:"公寓",example:"I live in a small apartment in the city center.",emoji:"🏢"},{word:"spacious",level:"advanced",phonetic:"/ˈspeɪʃəs/",definition:"宽敞的",example:"The living room is very bright and spacious.",emoji:"↔️"},{word:"cozy",level:"basic",phonetic:"/ˈkoʊzi/",definition:"舒适的",example:"My bedroom is very cozy and warm.",emoji:"🛋️"},{word:"well-decorated",level:"advanced",phonetic:"/wel ˈdekəreɪtɪd/",definition:"装修精美的",example:"Her flat is stylish and well-decorated.",emoji:"🖼️"}]},{title:"居住环境",words:[{word:"balcony",level:"basic",phonetic:"/ˈbælkəni/",definition:"阳台",example:"I enjoy having coffee on the balcony.",emoji:"🌅"},{word:"neighborhood",level:"basic",phonetic:"/ˈneɪbərhʊd/",definition:"街区/邻里",example:"It is a safe and quiet neighborhood.",emoji:"🏡"},{word:"amenities",level:"advanced",phonetic:"/əˈmiːnətiz/",definition:"生活设施",example:"The building has great amenities like a gym and a pool.",emoji:"🏪"},{word:"well-lit",level:"advanced",phonetic:"/wel lɪt/",definition:"采光良好的",example:"I prefer a well-lit room with large windows.",emoji:"☀️"},{word:"cluttered",level:"advanced",phonetic:"/ˈklʌtərd/",definition:"凌乱的",example:"My desk is always cluttered with books.",emoji:"📦"}]}]},Fk={id:"p1-area-live-in",title:"The area you live in",type:"基础题",color:"purple",badge:"必考",seasons:[yl],wordSections:[{title:"社区概况",words:[{word:"residential",level:"basic",phonetic:"/ˌrezɪˈdenʃl/",definition:"住宅区的",example:"I live in a quiet residential area.",emoji:"🏘️"},{word:"convenient",level:"basic",phonetic:"/kənˈviːniənt/",definition:"方便的",example:"The area is very convenient for shopping.",emoji:"🛒"},{word:"surroundings",level:"basic",phonetic:"/səˈraʊndɪŋz/",definition:"周边环境",example:"The natural surroundings are quite beautiful.",emoji:"🌳"},{word:"lively",level:"basic",phonetic:"/ˈlaɪvli/",definition:"热闹的",example:"The area becomes quite lively at night.",emoji:"✨"}]},{title:"交通与设施",words:[{word:"public transport",level:"basic",phonetic:"/ˈpʌblɪk ˈtrænspɔːrt/",definition:"公共交通",example:"The area has excellent public transport links.",emoji:"🚌"},{word:"within walking distance",level:"advanced",phonetic:"/wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/",definition:"在步行距离内",example:"The supermarket is within walking distance.",emoji:"🚶"},{word:"greenery",level:"advanced",phonetic:"/ˈɡriːnəri/",definition:"绿色植物/绿化",example:"There is a lot of greenery in our neighborhood.",emoji:"🌿"},{word:"vibrant",level:"advanced",phonetic:"/ˈvaɪbrənt/",definition:"充满活力的",example:"It is a vibrant community with many young people.",emoji:"🔥"},{word:"isolated",level:"advanced",phonetic:"/ˈaɪsəleɪtɪd/",definition:"偏僻的",example:"The area is a bit isolated from the city center.",emoji:"📍"}]}]},F0={id:"snacks",title:"Snacks 零食",type:"事物题",color:"green",wordSections:[{title:"1. 零食种类 (Types of Snacks)",words:[...z(["biscuit","bread","cake","chip","cookie","gum","doughnut","popcorn","pudding","ice cream","nut","peanut","yogurt","energy bar","corn chips"],"basic"),...z(["cracker","lollipop","marshmallow","popsicle","seaweed","beef jerky","pork jerky","jelly bean","walnut","almond","cashew","hazelnut","macadamia","pistachio","trail mixes"],"advanced")]},{title:"2. 描述与味道 (Flavor & Ingredients)",words:[...z(["sugar-free","artificial colour","artificial flavour","dried fruit"],"basic"),...z(["mint","oatmeal","refined sugar","snacker","plum"],"advanced")]},{title:"3. 健康与习惯 (Health & Habits)",words:[...z(["maintain weight","blood sugar level","boost brainpower","boost energy","prevent overeating"],"basic"),...z(["metabolism","hunger pang","lower cholesterol"],"advanced")]}]},V0={id:"social-media",title:"Social Media 社交媒体",type:"事物题",color:"purple",wordSections:[{title:"1. 核心名词与角色 (Key Nouns & Roles)",words:[{word:"blog",level:"basic",phonetic:"/blɒɡ/",definition:"网络日志",example:"She writes a travel blog to share her experiences.",emoji:"✍️"},{word:"comment",level:"basic",phonetic:"/ˈkɒment/",definition:"评论",example:"Please leave a comment below if you enjoyed the video.",emoji:"💬"},{word:"cyberbully",level:"basic",phonetic:"/ˈsaɪbərbʊli/",definition:"网络霸凌",example:"Schools should educate students on how to deal with a cyberbully.",emoji:"👿"},{word:"follower",level:"basic",phonetic:"/ˈfɒloʊər/",definition:"追随者；粉丝",example:"He has millions of followers on his social media account.",emoji:"👥"},{word:"influencer",level:"basic",phonetic:"/ˈɪnfluənsər/",definition:"网红；有影响力的人",example:"Many brands collaborate with influencers to promote products.",emoji:"🌟"},{word:"moments",level:"basic",phonetic:"/ˈmoʊmənts/",definition:"朋友圈",example:"I usually check my moments first thing in the morning.",emoji:"📱"},{word:"notification",level:"basic",phonetic:"/ˌnoʊtɪfɪˈkeɪʃn/",definition:"通知",example:"I turned off my phone notifications to focus on studying.",emoji:"🔔"},{word:"anniversary",level:"basic",phonetic:"/ˌænɪˈvɜːrsəri/",definition:"周年纪念日",example:"We shared a post to celebrate our wedding anniversary.",emoji:"🎉"},{word:"streaming",level:"basic",phonetic:"/ˈstriːmɪŋ/",definition:"直播；流媒体",example:"Live streaming has become a very popular career choice.",emoji:"📡"},{word:"thumbs-up",level:"basic",phonetic:"/ˌθʌmz ˈʌp/",definition:"点赞；赞同",example:"Give me a thumbs-up if you agree with my idea.",emoji:"👍"},{word:"traffic",level:"basic",phonetic:"/ˈtræfɪk/",definition:"（信息/网络）流量",example:"The website gets a lot of traffic after the advertisement.",emoji:"📈"},{word:"vlog",level:"basic",phonetic:"/vlɒɡ/",definition:"视频博客",example:"I decided to start a vlog to record my daily life.",emoji:"🤳"},{word:"vlogger",level:"basic",phonetic:"/ˈvlɒɡər/",definition:"视频创作者",example:"A famous vlogger recommended this new restaurant.",emoji:"🎥"},{word:"private message",level:"basic",phonetic:"/ˈpraɪvət ˈmesɪdʒ/",definition:"私信",example:"You can send me a private message for more details.",emoji:"📩"},{word:"public account",level:"basic",phonetic:"/ˈpʌblɪk əˈkaʊnt/",definition:"公众号",example:"I follow several public accounts for news and tips.",emoji:"📢"},{word:"search engine",level:"basic",phonetic:"/ˈsɜːrtʃ ˈendʒɪn/",definition:"搜索引擎",example:"I use a search engine to find information for my projects.",emoji:"🔍"},{word:"short video",level:"basic",phonetic:"/ʃɔːrt ˈvɪdioʊ/",definition:"短视频",example:"TikTok is a platform famous for sharing short videos.",emoji:"📱"},{word:"social network",level:"basic",phonetic:"/ˈsoʊʃl ˈnetwɜːrk/",definition:"社交网络",example:"Facebook is one of the largest social networks in the world.",emoji:"🌐"},{word:"social status",level:"basic",phonetic:"/ˈsoʊʃl ˈsteɪtəs/",definition:"社会地位",example:"Some people use social media to show off their social status.",emoji:"💎"},{word:"blacklist",level:"advanced",phonetic:"/ˈblæk lɪst/",definition:"黑名单",example:"I had to put that person on my blacklist after the argument.",emoji:"🚫"},{word:"smartphone addict",level:"advanced",phonetic:"/ˈsmɑːrtfoʊn ˈædɪkt/",definition:"智能手机成瘾者",example:"Many teenagers have become smartphone addicts nowadays.",emoji:"📵"},{word:"buzzword",level:"advanced",phonetic:"/ˈbʌzwɜːrd/",definition:"时髦术语；流行语",example:'"AI" has become a major buzzword in the tech industry.',emoji:"🐝"},{word:"smombie",level:"advanced",phonetic:"/ˈsmɒmbi/",definition:"手机低头族 (smartphone + zombie)",example:"Don't be a smombie; watch where you are walking!",emoji:"🧟"},{word:"troll",level:"advanced",phonetic:"/troʊl/",definition:"发挑衅帖子的人；网络杠精",example:"It's best to ignore an online troll rather than arguing.",emoji:"👹"}]},{title:"2. 常见动词与操作 (Verbs & Actions)",words:[{word:"download",level:"basic",phonetic:"/ˌdaʊnˈloʊd/",definition:"下载",example:"You can download the app from the store.",emoji:"📥"},{word:"follow",level:"basic",phonetic:"/ˈfɒloʊ/",definition:"关注",example:"Don't forget to follow me for more updates.",emoji:"➕"},{word:"forward",level:"basic",phonetic:"/ˈfɔːrwərd/",definition:"转发",example:"Could you forward that email to me?",emoji:"➡️"},{word:"post",level:"basic",phonetic:"/poʊst/",definition:"发布；帖子",example:"I just shared a new post on Instagram.",emoji:"📮"},{word:"repost",level:"basic",phonetic:"/ˌriːˈpoʊst/",definition:"转发",example:"Many people reposted the news on their own pages.",emoji:"🔁"},{word:"share",level:"basic",phonetic:"/ʃer/",definition:"分享",example:"Sharing good news with friends makes me happy.",emoji:"📤"},{word:"subscribe",level:"basic",phonetic:"/səbˈskraɪb/",definition:"订阅",example:"Subscribe to my channel for more English lessons.",emoji:"📺"},{word:"unfollow",level:"basic",phonetic:"/ˌʌnˈfɒloʊ/",definition:"取消关注",example:"I decided to unfollow accounts that made me feel bad.",emoji:"❌"},{word:"unfriend",level:"basic",phonetic:"/ˌʌnˈfrend/",definition:"解除好友关系",example:"He unfriended me after we had a big argument.",emoji:"💔"},{word:"upload",level:"basic",phonetic:"/ˌʌpˈloʊd/",definition:"上传",example:"The video is taking a long time to upload.",emoji:"📤"},{word:"interact with",level:"basic",phonetic:"/ˌɪntərˈækt wɪð/",definition:"与...互动",example:"Social media allows us to interact with people globally.",emoji:"🤝"},{word:"get in touch with",level:"basic",phonetic:"/ɡet ɪn tʌtʃ wɪð/",definition:"与...取得联系",example:"I need to get in touch with my old classmates.",emoji:"📞"},{word:"keep in contact with",level:"basic",phonetic:"/kiːp ɪn ˈkɒntækt wɪð/",definition:"与...保持联系",example:"Social media helps me keep in contact with my family.",emoji:"📧"},{word:"keep in touch with",level:"basic",phonetic:"/kiːp ɪn tʌtʃ wɪð/",definition:"与...保持联系",example:"Let's keep in touch after we graduate!",emoji:"👋"},{word:"swipe",level:"advanced",phonetic:"/swaɪp/",definition:"左右滑屏",example:"Just swipe left to see the next photo.",emoji:"↔️"},{word:"scroll",level:"advanced",phonetic:"/skroʊl/",definition:"上下滚动屏幕",example:"I spent too much time scrolling through my feed.",emoji:"↕️"},{word:"keep track of",level:"advanced",phonetic:"/kiːp træk əv/",definition:"追踪；记录",example:"It's hard to keep track of all the new trends.",emoji:"📍"},{word:"scroll through",level:"advanced",phonetic:"/skroʊl θruː/",definition:"滚动浏览",example:"I like to scroll through my photos on the weekend.",emoji:"🖼️"}]},{title:"3. 地道表达与现象 (Expressions & Phenomena)",words:[{word:"in-person",level:"basic",phonetic:"/ˌɪn ˈpɜːrsn/",definition:"亲身的；当面的",example:"I prefer meeting friends in-person rather than online.",emoji:"🚶"},{word:"a heavy user of",level:"basic",phonetic:"/ə ˈhevi ˈjuːzər əv/",definition:"...的重度使用者",example:"I admit I am a heavy user of social media apps.",emoji:"📱"},{word:"be addicted to phone",level:"basic",phonetic:"/biː əˈdɪktɪd tuː foʊn/",definition:"沉迷手机",example:"Many people are addicted to their phones nowadays.",emoji:"😵"},{word:"data privacy",level:"basic",phonetic:"/ˈdeɪtə ˈpraɪvəsi/",definition:"信息隐私",example:"Many users are concerned about their data privacy online.",emoji:"🔒"},{word:"give sb. a like",level:"basic",phonetic:"/ɡɪv ə laɪk/",definition:"给某人点赞",example:"Don't forget to give this video a like!",emoji:"❤️"},{word:"group chat",level:"basic",phonetic:"/ɡruːp tʃæt/",definition:"群聊",example:"We have a group chat for our weekend plans.",emoji:"👨‍👩‍👧‍👦"},{word:"hot topic",level:"basic",phonetic:"/hɒt ˈtɒpɪk/",definition:"热门话题",example:"Sustainability is a hot topic in the fashion world.",emoji:"♨️"},{word:"keep sb. updated",level:"basic",phonetic:"/kiːp ʌpˈdeɪtɪd/",definition:"让某人了解最新动态",example:"Please keep me updated on your progress.",emoji:"📢"},{word:"keep up-to-date with",level:"basic",phonetic:"/kiːp ʌp tu deɪt wɪð/",definition:"跟上...的最新进展",example:"I read news to keep up-to-date with world events.",emoji:"📅"},{word:"latest news",level:"basic",phonetic:"/ˈlɪtɪst nuːz/",definition:"最新消息",example:"Have you heard the latest news about the concert?",emoji:"🆕"},{word:"online advertising",level:"basic",phonetic:"/ˈɒnlaɪn ˈædvərtaɪzɪŋ/",definition:"在线广告",example:"Online advertising can be very targeted and effective.",emoji:"💰"},{word:"online community",level:"basic",phonetic:"/ˈɒnlaɪn kəˈmjuːnəti/",definition:"在线社区",example:"I belong to an online community for photography lovers.",emoji:"🏘️"},{word:"online game",level:"basic",phonetic:"/ˈɒnlaɪn ɡeɪm/",definition:"网络游戏",example:"My brother spends too much time playing online games.",emoji:"🎮"},{word:"online shopping",level:"basic",phonetic:"/ˈɒnlaɪn ˈʃɒpɪŋ/",definition:"网络购物",example:"Online shopping is much more convenient for me.",emoji:"🛒"},{word:"subscribe to",level:"basic",phonetic:"/səbˈskraɪb tuː/",definition:"订阅",example:"You should subscribe to her newsletter.",emoji:"🛎️"},{word:"trending topic",level:"basic",phonetic:"/ˈtrendɪŋ ˈtɒpɪk/",definition:"热门话题",example:"The Olympics is the top trending topic today.",emoji:"🔝"},{word:"video call",level:"basic",phonetic:"/ˈvɪdioʊ kɔːl/",definition:"视频电话",example:"I had a long video call with my parents last night.",emoji:"📹"},{word:"be attached to phone",level:"advanced",phonetic:"/biː əˈtætʃt tuː foʊn/",definition:"沉迷手机 (离不开)",example:"She seems to be constantly attached to her phone.",emoji:"🔗"},{word:"be glued to phone",level:"advanced",phonetic:"/biː ɡluːd tuː foʊn/",definition:"沉迷手机 (粘在手机上)",example:"He was so glued to his phone that he didn't hear me.",emoji:"🧪"},{word:"breaking news",level:"advanced",phonetic:"/ˈbreɪkɪŋ nuːz/",definition:"突发新闻",example:"We interrupted the program to bring you some breaking news.",emoji:"🚨"},{word:"current affair",level:"advanced",phonetic:"/ˈkɜːrənt əˈfer/",definition:"时事",example:"I use social media to keep up with current affairs.",emoji:"🗞️"},{word:"hit a like",level:"advanced",phonetic:"/hɪt ə laɪk/",definition:"点赞",example:"I usually hit a like on my friends' travel photos.",emoji:"🖱️"},{word:"go viral",level:"advanced",phonetic:"/ɡoʊ ˈvaɪrəl/",definition:"病毒式传播；走红",example:"His funny cat video went viral overnight.",emoji:"🔥"},{word:"indulge in phone",level:"advanced",phonetic:"/ɪnˈdʌldʒ ɪn foʊn/",definition:"沉迷手机",example:"We shouldn't indulge in our phones during dinner.",emoji:"🛀"},{word:"instant communication",level:"advanced",phonetic:"/ˈɪnstənt kəˌmjuːnɪˈkeɪʃn/",definition:"即时通信",example:"The internet provides us with instant communication.",emoji:"⚡"},{word:"instant message",level:"advanced",phonetic:"/ˈɪnstənt ˈmesɪdʒ/",definition:"即时消息",example:"I sent him an instant message on WeChat.",emoji:"💬"},{word:"at your fingertips",level:"advanced",phonetic:"/ət jər ˈfɪŋɡərtɪps/",definition:"触手可及；精通",example:"With a smartphone, information is literally at your fingertips.",emoji:"🖐️"},{word:"attention grabber",level:"advanced",phonetic:"/əˈtenʃn ˈɡræbər/",definition:"流量密码；吸引注意的东西",example:"The bright colors were a real attention grabber.",emoji:"👀"},{word:"social butterfly",level:"advanced",phonetic:"/ˈsoʊʃl ˈbʌtərflaɪ/",definition:"社牛",example:"She is a real social butterfly and knows everyone.",emoji:"🦋"},{word:"social media junkie",level:"advanced",phonetic:"/ˈsoʊʃl ˈmiːdiə ˈdʒʌŋki/",definition:"沉迷于社交媒体的人",example:"I used to be a social media junkie, checking my phone every five minutes.",emoji:"🤤"},{word:"social phobia",level:"advanced",phonetic:"/ˈsoʊʃl ˈfoʊbiə/",definition:"社恐",example:"Some people suffer from social phobia in large crowds.",emoji:"😨"}]}]},z0={id:"chocolate",title:"Chocolate 巧克力",type:"事物题",color:"green",wordSections:[{title:"1. 巧克力种类 (Chocolate Types)",words:[{word:"dark chocolate",level:"basic",phonetic:"/dɑːrk ˈtʃɑːklət/",definition:"黑巧克力",example:"Dark chocolate is known for its intense cocoa flavor.",emoji:"🍫"},{word:"milk chocolate",level:"basic",phonetic:"/mɪlk ˈtʃɑːklət/",definition:"牛奶巧克力",example:"Milk chocolate is much sweeter and creamier than dark chocolate.",emoji:"🍫"},{word:"white chocolate",level:"basic",phonetic:"/waɪt ˈtʃɑːklət/",definition:"白巧克力",example:"White chocolate doesn't actually contain cocoa solids.",emoji:"🤍"},{word:"hot chocolate",level:"basic",phonetic:"/hɑːt ˈtʃɑːklət/",definition:"热巧克力",example:"I love drinking hot chocolate on a cold winter day.",emoji:"☕"},{word:"nut chocolate",level:"basic",phonetic:"/nʌt ˈtʃɑːklət/",definition:"果仁巧克力",example:"Nut chocolate provides a nice crunch in every bite.",emoji:"🥜"},{word:"cocoa bean",level:"advanced",phonetic:"/ˈkoʊkoʊ biːn/",definition:"可可豆",example:"Chocolate is made from fermented and roasted cocoa beans.",emoji:"🌰"},{word:"mint chocolate",level:"advanced",phonetic:"/mɪnt ˈtʃɑːklət/",definition:"薄荷巧克力",example:"The combination of mint and chocolate is very refreshing.",emoji:"🌿"},{word:"plain chocolate",level:"advanced",phonetic:"/pleɪn ˈtʃɑːklət/",definition:"纯巧克力",example:"Some people prefer plain chocolate without any added flavors.",emoji:"🍫"},{word:"liqueur chocolate",level:"advanced",phonetic:"/lɪˈkɜːr ˈtʃɑːklət/",definition:"酒心巧克力",example:"Liqueur chocolate is a popular gift for adults.",emoji:"🍾"},{word:"cereal chocolate",level:"advanced",phonetic:"/ˈsɪriəl ˈtʃɑːklət/",definition:"谷物巧克力",example:"Cereal chocolate has a unique, crispy texture.",emoji:"🥣"}]},{title:"2. 描述与口感 (Adjectives & Texture)",words:[{word:"sweetness",level:"basic",phonetic:"/ˈswiːtnəs/",definition:"甜味",example:"The sweetness of the chocolate balances the bitterness of the coffee.",emoji:"🍭"},{word:"texture",level:"basic",phonetic:"/ˈtekstʃər/",definition:"口感",example:"The chocolate has a smooth and velvety texture.",emoji:"👅"},{word:"creamy",level:"basic",phonetic:"/ˈkriːmi/",definition:"像奶油的；光滑细腻的",example:"This milk chocolate is incredibly creamy.",emoji:"🥛"},{word:"silky",level:"advanced",phonetic:"/ˈsɪlki/",definition:"(食物) 口感滑滑的",example:"The ganache was silky and melted in my mouth.",emoji:"✨"},{word:"glossy",level:"advanced",phonetic:"/ˈɡlɒsi/",definition:"光滑的有光泽的",example:"High-quality chocolate should have a glossy finish.",emoji:"💎"},{word:"refreshing",level:"advanced",phonetic:"/rɪˈfreʃɪŋ/",definition:"使人精力充沛的",example:"A piece of dark chocolate can be quite refreshing during a break.",emoji:"⚡"},{word:"intriguing",level:"advanced",phonetic:"/ɪnˈtriːɡɪŋ/",definition:"引人入胜的；有趣的",example:"The combination of chili and chocolate is quite intriguing.",emoji:"🤔"}]},{title:"3. 词组与益处 (Phrases & Benefits)",words:[{word:"melt",level:"basic",phonetic:"/melt/",definition:"融化",example:"Chocolate starts to melt at body temperature.",emoji:"🫠"},{word:"decrease stress",level:"basic",phonetic:"/dɪˈkriːs stres/",definition:"减少压力",example:"Many people eat chocolate to help decrease stress.",emoji:"🧘"},{word:"lower blood pressure",level:"basic",phonetic:"/ˈloʊər blʌd ˈpreʃər/",definition:"降低血压",example:"Studies suggest that dark chocolate may help lower blood pressure.",emoji:"❤️"},{word:"dopamine",level:"advanced",phonetic:"/ˈdoʊpəmiːn/",definition:"多巴胺",example:"Eating chocolate can trigger the release of dopamine in the brain.",emoji:"🧠"},{word:"crave for",level:"advanced",phonetic:"/kreɪv fɔːr/",definition:"渴望；迫切需要",example:"Sometimes I really crave for something sweet after dinner.",emoji:"🤤"},{word:"antioxidant",level:"advanced",phonetic:"/ˌæntiˈɒksɪdənt/",definition:"抗氧化剂",example:"Dark chocolate is rich in antioxidants that are good for your heart.",emoji:"🛡️"}]}]},Z="2025年 5-8月",Vk=[kk,Pk,Rk,Ik,Nk,Mk,Tk,{...Yp,id:"veg-fruits",title:"Growing vegetables/fruits"},_k,Ek,Ck,$k,Lk,jk,Ak,{...Yp,id:"plants",title:"Plants"}],zk=[Dk,Bk,Uk,Fk,{...F0,seasons:[Z]},{...V0,id:"social-media-58",seasons:[Z]},{...z0,seasons:[Z]},{id:"flowers",title:"Flowers",type:"事物题",color:"green",seasons:[Z],words:[]},{id:"puzzles",title:"Puzzles",type:"事物题",color:"purple",seasons:[Z],words:[]},{id:"public-transport",title:"Public transport",type:"地点题",color:"blue",seasons:[Z],words:[]},{id:"names",title:"Names",type:"人物题",color:"yellow",seasons:[Z],words:[]},{id:"geography",title:"Geography",type:"事物题",color:"green",seasons:[Z],words:[]},{id:"jewellery",title:"Jewellery",type:"事物题",color:"purple",seasons:[Z],words:[]},{id:"birthday",title:"Birthday",type:"时间题",color:"yellow",seasons:[Z],words:[]},{id:"staying-up-late",title:"Staying up late",type:"习惯题",color:"blue",seasons:[Z],words:[]},{id:"plans",title:"Plans",type:"习惯题",color:"blue",seasons:[Z],words:[]},{id:"texting-messages",title:"Texting messages",type:"习惯题",color:"blue",seasons:[Z],words:[]},{id:"patience",title:"Patience",type:"心理题",color:"purple",seasons:[Z],words:[]},{id:"machine",title:"Machine",type:"事物题",color:"green",seasons:[Z],words:[]},{id:"memory",title:"Memory",type:"心理题",color:"purple",seasons:[Z],words:[]},{id:"weather",title:"Weather",type:"事物题",color:"blue",seasons:[Z],words:[]},{id:"writing",title:"Writing",type:"习惯题",color:"blue",seasons:[Z],words:[]},{id:"being-alone",title:"Being alone",type:"习惯题",color:"yellow",seasons:[Z],words:[]},{id:"making-a-list",title:"Making a list",type:"习惯题",color:"blue",seasons:[Z],words:[]},{id:"housekeeping-cooking",title:"Housekeeping and cooking",type:"习惯题",color:"green",seasons:[Z],words:[]},{id:"saying-thank-you",title:"Saying thank you",type:"人物题",color:"yellow",seasons:[Z],words:[]},{id:"singing",title:"Singing",type:"习惯题",color:"purple",seasons:[Z],words:[]},{id:"outer-space-stars",title:"Outer space and stars",type:"事物题",color:"blue",seasons:[Z],words:[]},{id:"small-business",title:"Small business",type:"事物题",color:"blue",seasons:[Z],words:[]},{id:"internet",title:"Internet",type:"事物题",color:"blue",seasons:[Z],words:[]},{id:"praising",title:"Praising",type:"人物题",color:"yellow",seasons:[Z],words:[]},{id:"being-busy",title:"Being busy",type:"习惯题",color:"blue",seasons:[Z],words:[]}],G0=[{title:"2025年 考题季 Part 1",section:"Part 1",subTopics:[...Vk,...zk]},{title:"Part 2 & 3 核心词库",section:"Part 2 & 3",subTopics:[{id:"p2-events",title:"Events 事件类",type:"四大题型",color:"blue",section:"Part 2 & 3",words:[]},{id:"p2-objects",title:"Objects 物品类",type:"四大题型",color:"purple",section:"Part 2 & 3",words:[]},{id:"p2-people",title:"People 人物类",type:"四大题型",color:"yellow",section:"Part 2 & 3",words:[]},{id:"p2-places",title:"Places 地点类",type:"四大题型",color:"green",section:"Part 2 & 3",words:[]}]}],tu=G0.flatMap(e=>e.subTopics),Gk=e=>{var t;return e.wordSections&&e.wordSections.length>0?e.wordSections.reduce((n,o)=>{var r;return n+(((r=o.words)==null?void 0:r.length)||0)},0):((t=e.words)==null?void 0:t.length)||0},Hk=new Map(tu.map(e=>[e.id,e])),Wk=new Map(tu.map(e=>[e.id,Gk(e)])),qk={Friends:"friends",Sharing:"sharing","Having a break":"break",Museum:"museum",Advertisement:"advertisement","Borrowing/lending":"borrowing",Chatting:"chatting","Going out":"going-out",Shoes:"shoes",Rules:"rules","Crowded place":"city-crowded-place","Public places":"public-places",Plants:"plants","Growing vegetables/fruits":"veg-fruits","Staying with old people":"old-people","Doing something well":"doing-well"},Ok=e=>{const t=qk[e];if(t)return t;const n=e.trim().toLowerCase();for(const o of Hk.values())if(o.title.trim().toLowerCase()===n)return o.id;return null},Jk=e=>Wk.get(e)||0,Yk=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Kk=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),a.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),Qk=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})}),Xk=({topic:e,onCardMove:t,onTopicUpdate:n,onAddCard:o,onCardClick:r,onOpenVocabTopic:i})=>{const[s,c]=E.useState(!!e.isNew),[u,p]=E.useState(e.title.replace(/^话题: /,"")),[f,h]=E.useState(!1),m=E.useRef(null);E.useEffect(()=>{var b,T;s&&((b=m.current)==null||b.focus(),(T=m.current)==null||T.select())},[s]),E.useEffect(()=>{p(e.title.replace(/^话题: /,""))},[e.title]);const g=()=>{const b=u.trim();b?n(e.id,`话题: ${b}`):p(e.title.replace(/^话题: /,"")),c(!1)},S=b=>{b.key==="Enter"&&g(),b.key==="Escape"&&(p(e.title.replace(/^话题: /,"")),c(!1))},C=b=>{b.preventDefault(),h(!1);const T=b.dataTransfer.getData("cardId"),A=b.dataTransfer.getData("fromTopicId");t(T,A,e.id,null)},k=b=>{b.preventDefault(),h(!0)},w=()=>{h(!1)},x=()=>{o(e.id)},y=()=>s?a.jsxs(a.Fragment,{children:[a.jsx(nC,{ref:m,type:"text",value:u,onChange:b=>p(b.target.value),onBlur:g,onKeyDown:S}),a.jsx(ia,{"aria-label":"保存话题名称",onClick:g,children:a.jsx(Qk,{})})]}):a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:e.title}),a.jsxs(tC,{children:[a.jsx(ia,{"aria-label":"添加新卡片",onClick:x,children:a.jsx(Yk,{})}),a.jsx(ia,{"aria-label":"编辑话题名称",onClick:()=>c(!0),children:a.jsx(Kk,{})})]})]});return a.jsxs(Zk,{id:e.id,isDragOver:f,onDrop:C,onDragOver:k,onDragLeave:w,children:[a.jsx(eC,{children:y()}),a.jsx(oC,{children:e.cards.map(b=>{const T=Ok(b.title),A=T?Jk(T):0;return a.jsx(qb,{card:b,fromTopicId:e.id,onCardClick:r,onCardMove:t,vocabCount:A,onVocabClick:T&&i?()=>i(T):void 0},b.id)})})]})},Zk=v.div`
    background-color: ${({theme:e})=>e.colors.boxBg};
    border-radius: 24px;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    min-height: 300px;
    border: 2px dashed transparent;
    transition: border-color 0.2s ease-in-out, opacity 0.2s ease, background-color 0.2s ease;

    ${({isDragOver:e,theme:t})=>e&&`
        border-color: ${t.colors.dragOverBorder};
    `}
    
    &.dragging-box {
        opacity: 0.4;
        border-style: dashed;
        border-color: ${({theme:e})=>e.colors.dragOverBorder};
        background-color: ${({theme:e})=>e.colors.cardBg};
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1rem;
    }
`,eC=v.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    gap: 0.5rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
        color: ${({theme:e})=>e.colors.header};
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`,tC=v.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`,ia=v.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.label};
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: ${({theme:e})=>e.colors.header};
    }

    svg {
        width: 18px;
        height: 18px;
    }
`,nC=v.input`
    font-family: inherit;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.header};
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.dragOverBorder};
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
    margin: 0;
    flex-grow: 1;
    min-width: 0;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }
`,oC=v.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,Kp=({initialTopics:e,onCardClick:t,onOpenVocabTopic:n})=>{const[o,r]=E.useState(e),[i,s]=E.useState(e.length),[c,u]=E.useState(100);E.useEffect(()=>{r(e),s(e.length)},[e]);const p=(g,S,C,k=null,w=!0)=>{g!==k&&r(x=>{const y=JSON.parse(JSON.stringify(x)),b=y.find(_=>_.id===S),T=y.find(_=>_.id===C);if(!b||!T)return x;const A=b.cards.findIndex(_=>_.id===g);if(A===-1)return x;const[I]=b.cards.splice(A,1);if(k){let _=T.cards.findIndex(P=>P.id===k);_!==-1?(w||_++,T.cards.splice(_,0,I)):T.cards.push(I)}else T.cards.push(I);return y})},f=(g,S)=>{r(C=>C.map(k=>{if(k.id===g){const{isNew:w,...x}=k;return{...x,title:S}}return k}))},h=()=>{const g={id:`box-topic-new-${i}`,title:"新话题",cards:[],isNew:!0};s(i+1),r(S=>[...S,g])},m=g=>{const S={id:`card-new-${c}`,title:"New Card",category:"事物题",categoryClass:"object-card",status:"New"};u(c+1),r(C=>C.map(k=>k.id===g?{...k,cards:[...k.cards,S]}:k))};return a.jsxs(rC,{children:[o.map(g=>a.jsx(Xk,{topic:g,onCardMove:p,onTopicUpdate:f,onAddCard:m,onCardClick:t,onOpenVocabTopic:n},g.id)),a.jsx(Ic,{children:a.jsxs(iC,{"aria-label":"添加新话题",onClick:h,children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),a.jsx("span",{children:"添加新话题"})]})})]})},rC=v.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    max-width: 1800px;
    margin: 0 auto;
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        gap: 1.5rem;
    }
`,Ic=v.div`
    border: 2px dashed ${({theme:e})=>e.colors.border};
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    transition: border-color 0.2s ease, background-color 0.2s ease;
    cursor: pointer;
    background-color: transparent;

    &:hover {
        border-color: ${({theme:e})=>e.colors.dragOverBorder};
        background-color: ${({theme:e})=>e.colors.boxBg};
    }
`,iC=v.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: inherit;
    color: ${({theme:e})=>e.colors.label};
    transition: color 0.2s ease;
    padding: 2rem;
    border-radius: 24px;
    width: 100%;
    height: 100%;

    ${Ic}:hover & {
        color: ${({theme:e})=>e.colors.header};
    }

    svg {
        width: 32px;
        height: 32px;
        transition: transform 0.2s ease;
    }

    ${Ic}:hover & svg {
        transform: scale(1.1);
    }
`,Nt=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),a.jsx("polyline",{points:"12 19 5 12 12 5"})]}),$s=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),a.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),Ns=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})}),sC=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),lC=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24",fill:"none",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("circle",{cx:"12",cy:"12",r:"3"}),a.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"5"}),a.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),a.jsx("line",{x1:"2",y1:"12",x2:"5",y2:"12"}),a.jsx("line",{x1:"19",y1:"12",x2:"22",y2:"12"}),a.jsx("line",{x1:"4.93",y1:"4.93",x2:"7.05",y2:"7.05"}),a.jsx("line",{x1:"16.95",y1:"16.95",x2:"19.07",y2:"19.07"}),a.jsx("line",{x1:"4.93",y1:"19.07",x2:"7.05",y2:"16.95"}),a.jsx("line",{x1:"16.95",y1:"7.05",x2:"19.07",y2:"4.93"})]}),aC=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"15 18 9 12 15 6"})}),cC=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"9 18 15 12 9 6"})}),dC=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Qp=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("polyline",{points:"19 12 12 19 5 12"})]}),nu=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M18 13a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6z"}),a.jsx("path",{d:"M12 19v2"}),a.jsx("path",{d:"M12 3v2"}),a.jsx("path",{d:"M5 12H3"}),a.jsx("path",{d:"M21 12h-2"}),a.jsx("path",{d:"m18.36 18.36-.78-.78"}),a.jsx("path",{d:"m6.42 6.42-.78-.78"}),a.jsx("path",{d:"m18.36 5.64-.78.78"}),a.jsx("path",{d:"m6.42 17.58-.78.78"})]}),uC=({type:e})=>{const t={who:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),what:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),where:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),when:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("polyline",{points:"12 6 12 12 16 14"})]}),why:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),a.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),"why-not":a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),a.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),how:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),point:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),point2:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),reason:a.jsx(nu,{}),example:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})};return t[e]||t.what},pC=v.div`
    color: ${({theme:e,type:t})=>e.colors[`analysis${t.charAt(0).toUpperCase()+t.slice(1)}`]};
    svg {
        width: 20px;
        height: 20px;
    }
`,fC=({type:e})=>{const t={vocab:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),phrase:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 21c3 0 7-1 7-8V5c0-3-3-4-6-4S1 2 1 5v8c0 7 4 8 7 8Z"}),a.jsx("path",{d:"M21 21c-3 0-7-1-7-8V5c0-3 3-4 6-4s5 1 5 4v8c0 7-4 8-7 8Z"})]}),sentence:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),a.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),a.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),a.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),a.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),a.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})};return a.jsx(pC,{type:e,children:t[e]})};function hC(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const H0=({answer:e,analysis:t})=>{const n=new Map;t&&t.length>0&&t.forEach(u=>n.set(u.text,u));const o=u=>{if(!t||t.length===0)return a.jsx(a.Fragment,{children:u});const p=new RegExp(`(${t.map(h=>hC(h.text)).join("|")})`,"g");return u.split(p).filter(h=>h).map((h,m)=>{const g=n.get(h);return g?a.jsx(mC,{type:g.type,children:h},m):a.jsx("span",{children:h},m)})},r=Array.isArray(e)?e.join("<br/><br/>"):e,i=/(\((?:Point|Reason|Example|Contrast|Conclusion)\))/i;if(/\((?:Point|Reason|Example|Contrast|Conclusion)\)/i.test(r)){const u=r.split(i),p=[];let f="",h="point";for(const m of u){if(!m)continue;const g=m.match(i);g?(f.trim()&&p.push({type:h,text:f.trim()}),h=g[0].replace(/[()]/g,"").toLowerCase(),f=""):f+=m}if(f.trim()&&p.push({type:h,text:f.trim()}),p.length>0)return a.jsx(Xp,{children:p.map((m,g)=>a.jsxs("p",{children:[a.jsxs(gC,{type:m.type,children:[m.type.charAt(0).toUpperCase(),":"]}),o(m.text)]},g))})}const c=(Array.isArray(e)?e:e.split(/<br\s*\/?>\s*<br\s*\/?>/gi)).map(u=>u.trim()).filter(Boolean);return a.jsx(Xp,{children:c.map((u,p)=>a.jsx("p",{children:o(u)},p))})},mC=v.span`
    background-color: ${({theme:e,type:t})=>e.colors[`analysis${t.charAt(0).toUpperCase()+t.slice(1)}Bg`]};
    border-bottom: 2px solid ${({theme:e,type:t})=>e.colors[`analysis${t.charAt(0).toUpperCase()+t.slice(1)}`]};
    border-radius: 3px 3px 0 0;
    padding: 0.1em 0.2em;
    font-weight: 500;
`,Xp=v.div`
    line-height: 1.8;
    color: #34495e;

    p {
        margin: 0 0 1em 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
`,gC=v.span`
    font-weight: 700;
    color: ${({theme:e,type:t})=>e.colors[t]||e.colors.point};
    margin-right: 0.5em;
`,sa=e=>{const t=e.trim().toLowerCase().replace(/[“”"]/g,"").replace(/’s|'s/g,"").replace(/[’']/g,"").replace(/[.,/#!$%^&*;:{}=_`~()?()[\]]/g,"").replace(/\s+/g," ").trim();return!t||!/[a-z]/.test(t)||t.split(" ").filter(Boolean).length>6?null:t},W0=E.createContext(void 0),yC=({children:e})=>{const[t,n]=E.useState([]),[o,r]=E.useState(!1),[i,s]=E.useState(""),[c,u]=E.useState(null),[p,f]=E.useState(null),h=E.useRef(null);E.useEffect(()=>{try{const w=localStorage.getItem("ielts-vocabulary");w&&n(JSON.parse(w))}catch(w){console.error("Failed to parse vocabulary from localStorage",w),localStorage.removeItem("ielts-vocabulary")}},[]),E.useEffect(()=>{try{t.length>0?localStorage.setItem("ielts-vocabulary",JSON.stringify(t)):localStorage.removeItem("ielts-vocabulary")}catch(w){console.error("Failed to save vocabulary to localStorage",w)}},[t]);const m=w=>{s(w),setTimeout(()=>{s(x=>x===w?"":x)},3e3)},g=E.useCallback(w=>{n(x=>x.includes(w)?(m(`“${w}” 已在单词本中`),x):(m(`已添加: “${w}”`),[...x,w].sort())),u(null)},[]),S=w=>{n(x=>x.filter(y=>y!==w))},C=()=>{n([])};E.useEffect(()=>{const w=()=>{const b=window.getSelection();if(b){const T=sa(b.toString());T&&g(T)}},x=()=>{h.current&&clearTimeout(h.current),h.current=window.setTimeout(()=>{const b=window.getSelection();if(b&&!b.isCollapsed){const T=sa(b.toString());if(T){const I=b.getRangeAt(0).getBoundingClientRect();f({top:I.top+window.scrollY-40,left:I.left+window.scrollX+I.width/2}),u(T)}else u(null)}},100)},y=()=>{u(null)};return document.addEventListener("dblclick",w),document.addEventListener("mouseup",x),document.addEventListener("touchend",x),document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),window.addEventListener("scroll",y),()=>{document.removeEventListener("dblclick",w),document.removeEventListener("mouseup",x),document.removeEventListener("touchend",x),document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y),window.removeEventListener("scroll",y),h.current&&clearTimeout(h.current)}},[g]);const k={vocabulary:t,isVocabModalOpen:o,toastMessage:i,selectedWord:c,selectionPosition:p,setIsVocabModalOpen:r,handleAddWord:g,handleDeleteWord:S,handleClearVocabulary:C,cleanWord:sa};return a.jsx(W0.Provider,{value:k,children:e})},ou=()=>{const e=E.useContext(W0);if(e===void 0)throw new Error("useVocabulary must be used within a VocabularyProvider");return e},q0=({item:e})=>{const{handleAddWord:t,cleanWord:n}=ou(),o=()=>{const r=n(e.text);r&&t(r)};return a.jsxs(vC,{type:e.type,children:[a.jsxs(wC,{children:[a.jsx(fC,{type:e.type}),a.jsx(xC,{children:e.text}),(e.type==="vocab"||e.type==="phrase")&&a.jsx(bC,{onClick:o,"aria-label":`添加到单词本 ${e.text}`,children:a.jsx(sC,{})})]}),a.jsx(SC,{children:e.explanation})]})},vC=v.div`
    background-color: ${({theme:e})=>e.colors.bg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-left: 4px solid ${({theme:e,type:t})=>e.colors[`analysis${t.charAt(0).toUpperCase()+t.slice(1)}`]};
    border-radius: 8px;
    padding: 0.75rem 1rem;
`,wC=v.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
`,xC=v.div`
    font-weight: 600;
    color: ${({theme:e})=>e.colors.header};
    font-size: 1rem;
`,SC=v.div`
    font-size: 0.95rem;
    color: #34495e;
    line-height: 1.6;
    padding-left: calc(20px + 0.75rem);
    white-space: pre-line;
    word-break: break-word;
`,bC=v.button`
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto;
    padding: 0.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.label};
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: ${({theme:e})=>e.colors.highlightBg};
        color: ${({theme:e})=>e.colors.primaryBlue};
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;v.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
`;const O0=[{id:"common",name:"公共模式",bandToShow:"6.5",notes:"默认配置，使用公共题库和范文。"},{id:"peichun",name:"佩纯",bandToShow:"5.0",lockedBand:"5.0",status:"in_class"},{id:"gaoyutong",name:"高语桐",bandToShow:"5.0",lockedBand:"5.0",status:"in_class"},{id:"zhangqi",name:"张祺",bandToShow:"5.0",lockedBand:"5.0",status:"in_class"}],Zp=new Map(O0.map(e=>[e.id,e])),ef=e=>Zp.get(e)??Zp.get("common"),kC=()=>O0.map(({id:e,name:t,status:n})=>({id:e,name:t,status:n})),CC="ielts-speaking",TC=1,Go="preferences",tf="attempts",ru=typeof indexedDB<"u",J0=()=>new Promise((e,t)=>{if(!ru){t(new Error("IndexedDB not available"));return}const n=indexedDB.open(CC,TC);n.onupgradeneeded=()=>{const o=n.result;if(o.objectStoreNames.contains(Go)||o.createObjectStore(Go,{keyPath:"studentId"}),!o.objectStoreNames.contains(tf)){const r=o.createObjectStore(tf,{keyPath:"id",autoIncrement:!0});r.createIndex("byStudent","studentId",{unique:!1}),r.createIndex("byStudentCard",["studentId","cardId"],{unique:!1})}},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}),EC=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),IC=async e=>{if(!ru)return null;try{const o=(await J0()).transaction(Go,"readonly").objectStore(Go);return await EC(o.get(e))??null}catch(t){return console.warn("Failed to read preferences from IndexedDB",t),null}},_C=async e=>{if(ru)try{(await J0()).transaction(Go,"readwrite").objectStore(Go).put(e)}catch(t){console.warn("Failed to save preferences to IndexedDB",t)}},Kr=["5.0","5.5","6.0","6.5"],Y0=e=>{const t=new Set(e);return Kr.filter(n=>t.has(n))},K0=E.createContext(null),nf=e=>e?new URLSearchParams(e.startsWith("?")?e.substring(1):e).get("student"):null,no=e=>e&&Kr.includes(e)?e:null,AC=({children:e})=>{const t=tt(),[n,o]=E.useState(()=>{const k=window.location.hash,w=k.indexOf("?"),x=w>=0?k.substring(w):"";return nf(x)||"common"}),[r,i]=E.useState(null),[s,c]=E.useState(!1);E.useEffect(()=>{const k=nf(t.search);k&&k!==n&&o(k)},[t.search,n]),E.useEffect(()=>{let k=!1;return c(!0),IC(n).then(w=>{if(k)return;const x=no(ef(n).lockedBand);i(x?null:no(w==null?void 0:w.bandToShow))}).finally(()=>{k||c(!1)}),()=>{k=!0}},[n]);const u=E.useMemo(()=>ef(n),[n]),p=no(u.lockedBand),f=p||no(u.bandToShow)||Kr[Kr.length-1],h=p||no(r)||f,m=k=>{if(p)return;const w=no(k)||f;i(w),_C({studentId:n,bandToShow:w})},g=k=>{o(k),i(null);const[w,x=""]=window.location.hash.split("?"),y=new URLSearchParams(x);y.set("student",k),window.location.hash=`${w}?${y.toString()}`},S=k=>{var T;const w=k.sampleAnswers||[],x=((T=u.customAnswers)==null?void 0:T[k.id])||[];if(x.length===0)return w;const y=new Map(x.map(A=>[A.question,A])),b=w.map(A=>y.get(A.question)||A);return x.forEach(A=>{w.some(_=>_.question===A.question)||b.push(A)}),b},C={student:u,studentId:n,bandToShow:h,isLoading:s,studentList:kC(),setStudentId:g,setBandToShow:m,getSampleAnswersForCard:S};return a.jsx(K0.Provider,{value:C,children:e})},vl=()=>{const e=E.useContext(K0);if(!e)throw new Error("useStudentContext must be used within StudentProvider");return e},PC="modulepreload",RC=function(e){return"/ielts-vocabularies-page/"+e},of={},_o=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=RC(u),u in of)return;of[u]=!0;const p=u.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":PC,p||(h.as="script"),h.crossOrigin="",h.href=u,c&&h.setAttribute("nonce",c),document.head.appendChild(h),p)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return r.then(s=>{for(const c of s||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},MC={id:"2025-05-08",label:"2025年 5-8月",tag:"【2025年 5-8月】"},$C={id:"2025-09-12",label:"2025年 9-12月",tag:"【2025年 9-12月】"},NC={id:"2026-01-04",label:"2026年 1-4月",tag:"【2026年 1-4月】"},wo="2025-09-12",jC={"./seasons/2025-05-08/meta.ts":{default:MC},"./seasons/2025-09-12/meta.ts":{default:$C},"./seasons/2026-01-04/meta.ts":{default:NC}},Q0=Object.values(jC).map(e=>e.default).sort((e,t)=>e.id.localeCompare(t.id)),_c=new Map(Q0.map(e=>[e.id,e])),LC=e=>_c.has(e),iu=e=>e&&LC(e)?_c.get(e):_c.get(wo)||{id:wo,label:wo,tag:`【${wo}】`},rf=(e,t)=>t.map(n=>({...n,cards:n.cards.map(o=>({...o,seasonId:e}))})),DC={"./seasons/2025-05-08/part1.ts":()=>_o(()=>import("./part1-CkOiizYu.js"),__vite__mapDeps([0,1])),"./seasons/2025-09-12/part1.ts":()=>_o(()=>import("./part1-CH7bol5l.js"),__vite__mapDeps([2,1])),"./seasons/2026-01-04/part1.ts":()=>_o(()=>import("./part1-DlBai2o-.js"),__vite__mapDeps([3,1]))},BC={"./seasons/2025-05-08/part2.ts":()=>_o(()=>import("./part2-D2zCeMGe.js"),[]),"./seasons/2025-09-12/part2.ts":()=>_o(()=>import("./part2-BpwOv3Ui.js"),[]),"./seasons/2026-01-04/part2.ts":()=>_o(()=>import("./part2-BS05z3lD.js"),[])},sf=async(e,t,n)=>{const o=`./seasons/${e}/${n}`,r=t[o];return r?(await r()).default:[]},lf=new Map,X0=async e=>{const t=iu(e),n=t.id,o=lf.get(n);if(o)return o;const r=Promise.all([sf(n,DC,"part1.ts"),sf(n,BC,"part2.ts")]).then(([i,s])=>({...t,part1:rf(n,i),part2:rf(n,s)}));return lf.set(n,r),r},UC=ve`from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`,FC=ve`from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; }`,VC=ve`from { opacity: 0; } to { opacity: 1; }`,af=v.div`
    background-color: #f0f3f8;
    border-radius: 24px;
    width: 90%;
    max-width: 800px;
    height: 90vh;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: ${UC} 0.3s ease-out;
    overflow: hidden;
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        width: 100%;
        max-width: 100vw;
        height: 100%;
        max-height: 100vh;
        border-radius: 0;
        animation: ${FC} 0.35s ease-out;
    }
`,cf=v.header`
    background: linear-gradient(135deg, #4a90e2, #2e6ab8);
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 1rem;
    .modal-header-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex-grow: 1;
        min-width: 0;
    }
    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1rem;
        gap: 0.75rem;
        h2 { font-size: 1.25rem; }
    }
`,zC=v.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg { 
        display: block; 
        width: 28px;
        height: 28px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        opacity: 1;
    }
`,df=v.div`
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.8;
`,uf=v.span`
    background-color: ${({theme:e})=>e.colors.primaryOrange};
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    align-self: flex-start;
    margin-left: auto;
    flex-shrink: 0;
`,pf=v.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    opacity: 0.8;
    svg { display: block; }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        opacity: 1;
    }
`,ff=v.main`
    padding: 1.5rem;
    overflow-y: auto;
    flex-grow: 1;
    background-color: ${({theme:e})=>e.colors.cardBg};
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1rem;
    }
`,GC=v.section`
    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        padding-left: 0.5rem;
        border-left: 4px solid ${({theme:e})=>e.colors.primaryBlue};
    }
    ol { margin: 0; padding-left: 1.5rem; }
    li { margin-bottom: 0.75rem; line-height: 1.6; color: ${({theme:e})=>e.colors.text}; }
`,hf=v.footer`
    padding: 0.75rem 1.5rem;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
    flex-shrink: 0;
    background-color: #f0f3f8;
    text-align: center;
`,mf=v.button`
  background: none; border: none; color: #1da1f2; font-weight: 600;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`,HC=v.div`
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
    text-align: center;
    h4 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: ${({theme:e})=>e.colors.label};
    }
`,WC=v.p`
    margin: 0.75rem 0 0;
    color: ${({theme:e})=>e.colors.label};
    font-size: 0.95rem;
`,qC=v.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`,OC=v.button`
    background-color: ${({theme:e})=>e.colors.primaryOrange};
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

    &:hover {
        background-color: #e88f33;
        transform: translateY(-2px);
    }
`,JC=v.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    padding-bottom: 1.5rem;
`,YC=v.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`,KC=v.div`
    display: inline-flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.6rem 0.9rem;
    border-radius: 12px;
    background-color: ${({theme:e,$warn:t})=>t?"#fff4e5":e.colors.boxBg};
    border: 1px dashed ${({theme:e,$warn:t})=>t?"#f2994a":e.colors.border};
    color: ${({theme:e})=>e.colors.header};

    strong {
        font-size: 1rem;
    }
    small {
        color: ${({theme:e})=>e.colors.label};
    }
`,QC=v.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    white-space: nowrap;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover:not(:disabled) {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }

    &:disabled {
        cursor: default;
        color: ${({theme:e})=>e.colors.placeText};
        border-color: ${({theme:e})=>e.colors.placeBg};
        background-color: ${({theme:e})=>e.colors.placeBg};

        svg {
            color: ${({theme:e})=>e.colors.placeText};
        }
    }
`,XC=v.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,ZC=v.div`
    animation: ${VC} 0.4s ease-out;
`,eT=v.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
`,tT=v.p`
    font-weight: 600;
    color: ${({theme:e})=>e.colors.header};
    margin: 0;
    line-height: 1.5;
    flex-grow: 1;
`,nT=v.section`
    margin-top: 1rem;
    border-radius: 16px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    background-color: ${({theme:e})=>e.colors.bg};
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
    overflow: hidden;
`,oT=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,rT=v.h4`
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.header};
`,iT=v.button`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.35rem 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }
`,sT=v.div`
    padding: 1rem;
`,lT=v.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,aT=v.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: transparent;
    border: none;
    border-radius: 9999px;
    padding: 0.3rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover:not(:disabled) {
        color: ${({theme:e})=>e.colors.header};
        background-color: ${({theme:e})=>e.colors.boxBg};
    }

    &:disabled {
        cursor: default;
        color: ${({theme:e})=>e.colors.placeText};
    }
`,cT=({card:e,onClose:t,seasonId:n,seasonTag:o})=>{var B;const{bandToShow:r,getSampleAnswersForCard:i}=vl(),s=i(e),c=s&&s.length>0,u=o||(n?`【${n}】`:"")||(e.seasonId?`【${e.seasonId}】`:"")||`【${wo}】`,p=c?Y0(s.flatMap(j=>j.versions.map(N=>N.score))):[],f=p.join("|"),h=p.includes(r)?r:p[0]||r,[m,g]=E.useState(!1),[S,C]=E.useState(h),[k,w]=E.useState({}),[x,y]=E.useState("idle"),[b,T]=E.useState({});E.useEffect(()=>{g(!1)},[e.id]),E.useEffect(()=>{C(h),w({}),y("idle")},[h,e.id,f]),E.useEffect(()=>{w({}),y("idle"),T({})},[S]);const A=j=>{j.stopPropagation()},I=!p.includes(r),_=j=>{C(j),g(!0)},P=(j,N)=>{const U=j.versions.find($=>$.score===S);if(!U)return;const W=`${N+1}. ${j.question}`;let F="";Array.isArray(U.answer)?F=U.answer.join(`

`):F=U.answer.split(/<br\s*\/?>\s*<br\s*\/?>/gi).map(V=>V.replace(/<\/?[^>]+(>|$)/g,"").trim()).join(`

`);const G=`**${W}**

${F}`;navigator.clipboard.writeText(G).then(()=>{w($=>({...$,[N]:"copied"})),setTimeout(()=>w($=>({...$,[N]:"idle"})),2e3)}).catch($=>{console.error("Could not copy text: ",$)})},R=()=>{if(!s||s.length===0)return;const j=s.map((N,U)=>{const W=N.versions.find($=>$.score===S);if(!W)return"";const F=`${U+1}. ${N.question}`;let G="";return Array.isArray(W.answer)?G=W.answer.join(`

`):G=W.answer.split(/<br\s*\/?>\s*<br\s*\/?>/gi).map(V=>V.replace(/<\/?[^>]+(>|$)/g,"").trim()).join(`

`),`**${F}**

${G}`}).filter(Boolean).join(`


`);j&&navigator.clipboard.writeText(j).then(()=>{y("copied"),setTimeout(()=>y("idle"),2e3)}).catch(N=>{console.error("Could not copy all text: ",N)})};return m?a.jsxs(af,{onClick:A,children:[a.jsxs(cf,{children:[a.jsx(zC,{onClick:()=>g(!1),"aria-label":"返回问题列表",children:a.jsx(Nt,{})}),a.jsxs("div",{className:"modal-header-content",children:[a.jsx(df,{children:u}),a.jsx("h2",{id:"modal-title-p1",children:e.title})]}),e.status==="New"&&a.jsx(uf,{children:"新题"}),a.jsx(pf,{onClick:t,"aria-label":"关闭",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),a.jsxs(ff,{children:[a.jsxs(JC,{children:[a.jsx(YC,{children:a.jsxs(KC,{$warn:I,children:[a.jsx("span",{children:"范文分段"}),a.jsxs("strong",{children:[S," 分"]}),I?a.jsxs("small",{children:["原配置 ",r," 无范文，已展示 ",S," 分。"]}):a.jsx("small",{children:"分段来自学生配置。"})]})}),a.jsx(QC,{onClick:R,disabled:x==="copied",children:x==="copied"?a.jsxs(a.Fragment,{children:[a.jsx(Ns,{}),a.jsx("span",{children:"已复制"})]}):a.jsxs(a.Fragment,{children:[a.jsx($s,{}),a.jsx("span",{children:"复制整页"})]})})]}),a.jsx(XC,{children:s.map((j,N)=>{const U=j.versions.find(G=>G.score===S);if(!U)return null;const W=(U.analysis||[]).filter(G=>G.type==="vocab"||G.type==="phrase"),F=!!b[N];return a.jsxs(ZC,{children:[a.jsxs(eT,{children:[a.jsx(tT,{children:`${N+1}. ${j.question}`}),a.jsx(aT,{onClick:()=>P(j,N),disabled:k[N]==="copied",children:k[N]==="copied"?a.jsx(Ns,{}):a.jsx($s,{})})]}),a.jsx(H0,{answer:U.answer,analysis:U.analysis||[]}),W.length>0&&a.jsxs(nT,{"aria-label":"单词卡",children:[a.jsxs(oT,{children:[a.jsx(rT,{children:"单词卡"}),a.jsx(iT,{type:"button",onClick:()=>T(G=>({...G,[N]:!G[N]})),children:F?"收起":`展开（${W.length}）`})]}),F&&a.jsx(sT,{children:a.jsx(lT,{children:W.map((G,$)=>a.jsx(q0,{item:G},$))})})]})]},N)})})]}),a.jsx(hf,{children:a.jsx(mf,{children:"我要补充"})})]}):a.jsxs(af,{onClick:A,children:[a.jsxs(cf,{children:[a.jsxs("div",{className:"modal-header-content",children:[a.jsx(df,{children:u}),a.jsx("h2",{id:"modal-title-p1",children:e.title})]}),e.status==="New"&&a.jsx(uf,{children:"新题"}),a.jsx(pf,{onClick:t,"aria-label":"关闭",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),a.jsxs(ff,{children:[a.jsxs(GC,{children:[a.jsx("h3",{children:"问题列表"}),a.jsx("ol",{children:(B=e.part1Questions)==null?void 0:B.map((j,N)=>a.jsx("li",{children:j},N))})]}),c&&p.length>0&&a.jsxs(HC,{children:[a.jsxs("h4",{children:["范文分段：",S,"分"]}),a.jsx(qC,{children:a.jsxs(OC,{onClick:()=>_(S),children:["查看",S,"分范文"]})}),I&&a.jsxs(WC,{children:["未找到 ",r," 分范文，已展示 ",S," 分版本。"]})]})]}),a.jsx(hf,{children:a.jsx(mf,{children:"我要补充"})})]})},dT=ve`from { opacity: 0; } to { opacity: 1; }`,uT=v.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`,pT=v.div`
    animation: ${dT} 0.4s ease-out;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`,fT=v.p`
    color: ${({theme:e})=>e.colors.label};
    font-style: italic;
    margin: 0;
`,hT=v.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
`,mT=v.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    white-space: nowrap;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover:not(:disabled) {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }

    &:disabled {
        cursor: default;
        color: ${({theme:e})=>e.colors.placeText};
        border-color: ${({theme:e})=>e.colors.placeBg};
        background-color: ${({theme:e})=>e.colors.placeBg};

        svg {
            color: ${({theme:e})=>e.colors.placeText};
        }
    }
`,gT=v.div`
    display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    padding-bottom: 1.5rem;
`,yT=v.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
`,vT=v.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    white-space: nowrap;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover:not(:disabled) {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }

    &:disabled {
        cursor: default;
        color: ${({theme:e})=>e.colors.placeText};
        border-color: ${({theme:e})=>e.colors.placeBg};
        background-color: ${({theme:e})=>e.colors.placeBg};

        svg {
            color: ${({theme:e})=>e.colors.placeText};
        }
    }
`,wT=v.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.6rem 0.9rem;
    border-radius: 12px;
    background-color: ${({theme:e,$warn:t})=>t?"#fff4e5":e.colors.boxBg};
    border: 1px dashed ${({theme:e,$warn:t})=>t?"#f2994a":e.colors.border};
    color: ${({theme:e})=>e.colors.header};

    strong {
        font-size: 1rem;
    }
    small {
        color: ${({theme:e})=>e.colors.label};
    }
`,xT=v.button`
    font-family: inherit; font-size: 0.9rem; font-weight: 600; padding: 0.5rem 1.2rem;
    border-radius: 9999px; border: 1px solid ${({theme:e})=>e.colors.border};
    background-color: ${({theme:e,$active:t})=>t?e.colors.primaryOrange:"transparent"};
    color: ${({theme:e,$active:t})=>t?"white":e.colors.label};
    cursor: pointer; transition: all 0.2s ease;
    &:hover {
        border-color: ${({theme:e,$active:t})=>t?e.colors.primaryOrange:e.colors.header};
        color: ${({theme:e,$active:t})=>t?"white":e.colors.header};
    }
`,ST=v.p`
    font-weight: 600;
    color: ${({theme:e})=>e.colors.header};
    margin: 0;
    line-height: 1.5;
    flex-grow: 1;
`,bT=v.section`
    margin-top: 1rem;
    border-radius: 16px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    background-color: ${({theme:e})=>e.colors.bg};
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
    overflow: hidden;
`,kT=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,CT=v.h4`
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.header};
`,TT=v.button`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.35rem 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }
`,ET=v.div`
    padding: 1rem;
`,IT=v.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,Z0=({sampleAnswers:e,initialScore:t="6.5",lockedScore:n,questionNumbering:o})=>{const[r,i]=E.useState(n||t),[s,c]=E.useState({}),[u,p]=E.useState("idle"),[f,h]=E.useState({}),m=e&&e.length>0,g=E.useMemo(()=>{if(!m)return[];const y=e.flatMap(b=>b.versions.map(T=>T.score));return Y0(y)},[m,e]),S=g.join("|");E.useEffect(()=>{const y=n||t,b=g.includes(y)?y:g[0]||y;i(b)},[n,t,S]),E.useEffect(()=>{c({}),h({}),p("idle")},[r]);const C=n&&g.includes(n)?n:r,k=!!n&&!g.includes(n),w=(y,b)=>{const T=y.versions.find(j=>j.score===C);if(!T||!T.answer)return;const A=o?o(b,y.question):`${b+1}. ${y.question}`;let I="";const _=Array.isArray(T.answer)?T.answer.join(" "):T.answer,P=/(\((?:Point|Reason|Example|Contrast|Conclusion)\))/i;if(/\((?:Point|Reason|Example|Contrast|Conclusion)\)/i.test(_)){const j=_.split(P),N=[];let U="",W="Point";for(const F of j){if(!F)continue;const G=F.match(P);G?(U.trim()&&N.push({type:W,text:U.trim().replace(/<[^>]+>/g,"")}),W=G[0].replace(/[()]/g,""),U=""):U+=F}U.trim()&&N.push({type:W,text:U.trim().replace(/<[^>]+>/g,"")}),I=N.map(F=>`${F.type.charAt(0)}: ${F.text}`).join(`

`)}else I=_.split(/<br\s*\/?>\s*<br\s*\/?>/gi).map(N=>N.replace(/<[^>]+>/g,"").trim()).join(`

`);const B=`**${A}**

${I}`;navigator.clipboard.writeText(B).then(()=>{c(j=>({...j,[b]:"copied"})),setTimeout(()=>c(j=>({...j,[b]:"idle"})),2e3)}).catch(j=>{console.error("Could not copy text: ",j)})},x=()=>{if(!m)return;const y=e.map((b,T)=>{const A=b.versions.find(j=>j.score===C);if(!A||!A.answer)return"";const I=o?o(T,b.question):`${T+1}. ${b.question}`;let _="";const P=Array.isArray(A.answer)?A.answer.join(" "):A.answer,R=/(\((?:Point|Reason|Example|Contrast|Conclusion)\))/i;if(/\((?:Point|Reason|Example|Contrast|Conclusion)\)/i.test(P)){const j=P.split(R),N=[];let U="",W="Point";for(const F of j){if(!F)continue;const G=F.match(R);G?(U.trim()&&N.push({type:W,text:U.trim().replace(/<[^>]+>/g,"")}),W=G[0].replace(/[()]/g,""),U=""):U+=F}U.trim()&&N.push({type:W,text:U.trim().replace(/<[^>]+>/g,"")}),_=N.map(F=>`${F.type.charAt(0)}: ${F.text}`).join(`

`)}else _=P.split(/<br\s*\/?>\s*<br\s*\/?>/gi).map(N=>N.replace(/<[^>]+>/g,"").trim()).join(`

`);return`**${I}**

${_}`}).filter(Boolean).join(`


`);y&&navigator.clipboard.writeText(y).then(()=>{p("copied"),setTimeout(()=>p("idle"),2e3)}).catch(b=>{console.error("Could not copy all text: ",b)})};return m?a.jsxs(a.Fragment,{children:[a.jsxs(yT,{children:[a.jsx(gT,{children:n?a.jsxs(wT,{$warn:k,children:[a.jsx("div",{children:"范文分段"}),a.jsxs("strong",{children:[C," 分"]}),k&&a.jsxs("small",{children:["原配置 ",n," 无对应范文，已使用可用分段。"]}),!k&&a.jsx("small",{children:"如需切换，请在顶部学生栏修改分段。"})]}):g.map(y=>a.jsxs(xT,{$active:y===C,onClick:()=>i(y),children:[y,"分"]},y))}),a.jsx(vT,{onClick:x,disabled:u==="copied",children:u==="copied"?a.jsxs(a.Fragment,{children:[a.jsx(Ns,{}),a.jsx("span",{children:"已复制"})]}):a.jsxs(a.Fragment,{children:[a.jsx($s,{}),a.jsx("span",{children:"复制整页"})]})})]}),a.jsx(uT,{children:e.map((y,b)=>{const T=y.versions.find(_=>_.score===C),A=T!=null&&T.analysis?T.analysis.filter(_=>_.type==="vocab"||_.type==="phrase"):[],I=!!f[b];return a.jsxs(pT,{children:[a.jsxs(hT,{children:[a.jsx(ST,{children:o?o(b,y.question):`${b+1}. ${y.question}`}),a.jsx(mT,{onClick:()=>w(y,b),disabled:s[b]==="copied","aria-label":"复制范文",children:s[b]==="copied"?a.jsxs(a.Fragment,{children:[a.jsx(Ns,{}),a.jsx("span",{children:"已复制"})]}):a.jsxs(a.Fragment,{children:[a.jsx($s,{}),a.jsx("span",{children:"复制"})]})})]}),T?a.jsxs(a.Fragment,{children:[a.jsx(H0,{answer:T.answer,analysis:T.analysis||[]}),A.length>0&&a.jsxs(bT,{"aria-label":"单词卡",children:[a.jsxs(kT,{children:[a.jsx(CT,{children:"单词卡"}),a.jsx(TT,{type:"button",onClick:()=>h(_=>({..._,[b]:!_[b]})),children:I?"收起":`展开（${A.length}）`})]}),I&&a.jsx(ET,{children:a.jsx(IT,{children:A.map((_,P)=>a.jsx(q0,{item:_},P))})})]})]}):a.jsx(fT,{children:"暂无此分数段范文。"})]},b)})})]}):a.jsx("p",{style:{marginTop:"1rem",color:"#8899a6"},children:"暂无范文解析。"})},Ac=[{id:"2026-01-04-p2-shopping-mall",title:"【2026年 1-4月】商场 (Shopping mall)",prompt:"Describe a shopping mall.",card:{seasonTag:"【2026年 1-4月】",cardTitle:"商场",status:"New",part2Title:"Describe a shopping mall",part2Prompts:["What its name is","Where it is","How often you visit it","And what you usually buy at the mall"],part3Questions:["Why do people buy things they don't need?","Do you think it's a waste of time to go shopping?","Why are some people keen on shopping?","What kind of people like shopping?"]},pools:[{id:"name",title:"🛍️ 商场名字",options:["Grandview Mall","Teemall","Taikoo Hui","Wanda Plaza","a shopping mall near my home"]},{id:"place",title:"📍 在哪里",options:["Tianhe District (Guangzhou)","the city center","near my home","near a subway station","a busy area with lots of shops"]},{id:"frequency",title:"⏱️ 多久去一次",options:["every weekend","once a week","twice a month","from time to time","only during holidays"]},{id:"buy",title:"🛒 常买什么",options:["clothes","shoes","snacks","groceries","skincare products","gifts","stationery"]},{id:"special",title:"✨ 为什么特别",options:["it's really convenient","it has many brands and stores","the food court is amazing","it is clean and comfortable","it has a great cinema","the design is modern and beautiful"]},{id:"feeling",title:"😊 感受",options:["happy","relaxed","excited","comfortable"]}],slots:[{id:"name",title:"1) What its name is（名字）",templates:[{id:"t1",label:"Default",text:"I want to describe a shopping mall called {{name}}.",blanks:[{id:"name",label:"Name",poolId:"name",placeholder:"{{name}}"}]}]},{id:"where",title:"2) Where it is（地点）",templates:[{id:"t1",label:"Default",text:"It is in {{place}}.",blanks:[{id:"place",label:"Place",poolId:"place",placeholder:"{{place}}"}]}]},{id:"frequency",title:"3) How often you visit it（频率）",templates:[{id:"t1",label:"Default",text:"I visit it {{frequency}}.",blanks:[{id:"frequency",label:"Frequency",poolId:"frequency",placeholder:"{{frequency}}"}]}]},{id:"buy",title:"4) What you usually buy（买什么）",templates:[{id:"t1",label:"Default",text:"I usually buy {{buyA}} and {{buyB}} at the mall.",blanks:[{id:"buyA",label:"Buy 1",poolId:"buy",placeholder:"{{buyA}}"},{id:"buyB",label:"Buy 2",poolId:"buy",placeholder:"{{buyB}}"}]}]},{id:"wrap",title:"5) Why it is special + How I feel（原因+感受）",templates:[{id:"t1",label:"Default",text:"I like it because {{special}}, and I feel {{feeling}} when I am there.",blanks:[{id:"special",label:"Reason",poolId:"special",placeholder:"{{special}}"},{id:"feeling",label:"Feeling",poolId:"feeling",placeholder:"{{feeling}}"}]}]}]},{id:"2026-01-04-p2-movie-disappointed",title:"2026-01-04: Movie that disappointed you",prompt:"Describe a movie you watched recently that you felt disappointed about.",pools:[{id:"movie",title:"Movie",options:["Avatar 3","Avengers: Endgame","a recent movie I watched"]},{id:"when",title:"When",options:["two weeks ago","last weekend","last month"]},{id:"where",title:"Where",options:["at the cinema","at home"]},{id:"whyWatch",title:"Why you watched it",options:["I liked the series","my friends recommended it","I wanted to relax","the reviews looked great"]},{id:"whyBad",title:"Why it was disappointing",options:["the story was too slow","there were too many characters","the ending was predictable","it was boring and confusing"]},{id:"feeling",title:"Feelings",options:["disappointed","a bit upset","not satisfied"]}],slots:[{id:"who-what",title:"1) What it is",templates:[{id:"t1",label:"Simple",text:"I want to talk about {{movie}}.",blanks:[{id:"movie",label:"Movie",poolId:"movie",placeholder:"{{movie}}"}]}]},{id:"where-when",title:"2) Where / When",templates:[{id:"t1",label:"1 sentence",text:"I watched it {{when}} {{where}}.",blanks:[{id:"when",label:"When",poolId:"when",placeholder:"{{when}}"},{id:"where",label:"Where",poolId:"where",placeholder:"{{where}}"}]}]},{id:"activities",title:"3) Why you watched it",templates:[{id:"t1",label:"Because",text:"I decided to watch it because {{whyWatch}}.",blanks:[{id:"whyWatch",label:"Reason",poolId:"whyWatch",placeholder:"{{whyWatch}}"}]}]},{id:"special",title:"4) Why it is special",templates:[{id:"t1",label:"Disappointed because",text:"However, I felt disappointed because {{whyBad}}.",blanks:[{id:"whyBad",label:"Reason",poolId:"whyBad",placeholder:"{{whyBad}}"}]}]},{id:"feel",title:"5) How I feel",templates:[{id:"t1",label:"Wrap up",text:"Overall, I felt {{feeling}} after watching it.",blanks:[{id:"feeling",label:"Feeling",poolId:"feeling",placeholder:"{{feeling}}"}]}]}]},{id:"2026-01-04-p2-proud-family-member",title:"2026-01-04: Proud of a family member",prompt:"Describe a time when you felt proud of a family member.",pools:[{id:"person",title:"Person",options:["my mom","my dad","my older sister","a family member of mine"]},{id:"when",title:"When",options:["last year","a few years ago","during high school"]},{id:"whatDid",title:"What they did",options:["worked very hard and got a promotion","passed a tough exam","took care of our family during a difficult time","made a big change and became more responsible"]},{id:"whyProud",title:"Why you felt proud",options:["it showed real responsibility","it proved that hard work pays off","it inspired me a lot","it was not easy, but they never gave up"]},{id:"feeling",title:"Feelings",options:["proud","inspired","warm","grateful"]}],slots:[{id:"who-what",title:"1) Who it is",templates:[{id:"t1",label:"Introduce",text:"I'd like to talk about {{person}}.",blanks:[{id:"person",label:"Person",poolId:"person",placeholder:"{{person}}"}]}]},{id:"where-when",title:"2) When it happened",templates:[{id:"t1",label:"Time",text:"It happened {{when}}.",blanks:[{id:"when",label:"When",poolId:"when",placeholder:"{{when}}"}]}]},{id:"activities",title:"3) What they did",templates:[{id:"t1",label:"Action",text:"This person {{whatDid}}.",blanks:[{id:"whatDid",label:"Action",poolId:"whatDid",placeholder:"{{whatDid}}"}]}]},{id:"special",title:"4) Why it is special",templates:[{id:"t1",label:"Why proud",text:"I felt proud because {{whyProud}}.",blanks:[{id:"whyProud",label:"Reason",poolId:"whyProud",placeholder:"{{whyProud}}"}]}]},{id:"feel",title:"5) How I feel",templates:[{id:"t1",label:"Feeling",text:"It made me feel {{feeling}}.",blanks:[{id:"feeling",label:"Feeling",poolId:"feeling",placeholder:"{{feeling}}"}]}]}]}],Pc=e=>{if(!e)return null;const n={"demo-shopping-mall":"2026-01-04-p2-shopping-mall"}[e]||e;return Ac.find(o=>o.id===n)||null},_T=({card:e,onClose:t,seasonId:n,seasonTag:o})=>{var w,x;const r=ht(),i=tt(),{bandToShow:s,getSampleAnswersForCard:c}=vl(),u=c(e),p=n||e.seasonId||wo,f=o||"【题库】",h=Pc(e.id),[m,g]=E.useState("part2"),[S,C]=E.useState(!1);E.useEffect(()=>{g("part2"),C(!1)},[e.id]);const k=y=>{y.stopPropagation()};return S?a.jsxs(gf,{onClick:k,children:[a.jsxs(yf,{children:[a.jsx(vf,{onClick:()=>C(!1),"aria-label":"返回题卡",children:a.jsx(Nt,{})}),a.jsx("h3",{id:"modal-title-p2-answer",children:"P2 范文解析"}),a.jsx(wf,{"aria-label":"刷新",style:{visibility:"hidden"},children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"})})]}),a.jsx(xf,{children:a.jsx(Z0,{sampleAnswers:u.length?[u[0]]:[],totalQuestions:1,questionNumbering:(y,b)=>b,lockedScore:s})}),a.jsx(kf,{children:a.jsx(la,{onClick:()=>{t(),r({pathname:`/speaking/analysis/${p}/${e.id}`,search:i.search})},children:"查看 Part 3 问题及解析"})})]}):a.jsxs(gf,{onClick:k,children:[a.jsxs(yf,{children:[a.jsx(vf,{onClick:m==="part2"?t:()=>g("part2"),"aria-label":m==="part2"?"返回":"返回 Part 2",children:a.jsx(Nt,{})}),a.jsx("h3",{children:m==="part2"?"P2 题卡":"P3 题卡"}),a.jsx(wf,{"aria-label":"刷新",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M23 4v6h-6"}),a.jsx("path",{d:"M1 20v-6h6"}),a.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L20.5 10a5 5 0 0 0-7.82 5.42L11 17.5"})]})})]}),a.jsx(xf,{children:a.jsxs(PT,{children:[a.jsxs(RT,{children:[a.jsx(lC,{}),a.jsx(MT,{children:f})]}),a.jsxs($T,{children:[e.status==="New"&&a.jsx(NT,{children:"新题"}),a.jsx(jT,{id:"modal-title-p2",children:e.title}),m==="part2"&&a.jsxs(Sf,{children:[a.jsx(bf,{children:"Part 2"}),a.jsx(LT,{children:e.part2Title}),a.jsx("p",{children:a.jsx("strong",{children:e.part2Description})}),a.jsx(DT,{children:(w=e.part2Prompts)==null?void 0:w.map((y,b)=>a.jsx("li",{children:y},b))}),h&&a.jsxs(BT,{children:[a.jsxs(UT,{children:[a.jsx(FT,{children:"积木拼装练习"}),a.jsx(VT,{children:"点词填空 → 自动拼成 5 句"})]}),a.jsx(zT,{onClick:()=>{const y=new URLSearchParams(i.search);y.set("kit",h.id),y.set("from","bank"),y.set("season",p);const b=y.toString();t(),r({pathname:"/speaking/builder/part2",search:b?`?${b}`:""})},children:"打开积木"})]})]}),m==="part3"&&a.jsxs(Sf,{children:[a.jsx(bf,{children:"Part 3"}),a.jsx(GT,{children:(x=e.part3Questions)==null?void 0:x.map((y,b)=>a.jsx("li",{children:y},b))})]})]})]})}),a.jsxs(kf,{children:[a.jsxs(HT,{children:[a.jsxs("button",{disabled:!0,children:[a.jsx(aC,{})," 上一题"]}),a.jsxs("button",{disabled:!0,children:["下一题 ",a.jsx(cC,{})]})]}),a.jsxs(WT,{children:[a.jsx(qT,{onClick:()=>C(!0),children:"Part 2 范文"}),m==="part2"?a.jsx(la,{onClick:()=>g("part3"),children:"查看 Part 3 问题"}):a.jsx(la,{onClick:()=>{t(),r({pathname:`/speaking/analysis/${p}/${e.id}`,search:i.search})},children:"查看 Part 3 解析"})]}),a.jsx(OT,{children:"我要补充"})]})]})},AT=ve`from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`,gf=v.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 760px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${AT} 0.3s ease-out;
  overflow: hidden;
`,yf=v.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #e1e8ed;
  h3 { margin: 0; font-size: 1.2rem; font-weight: 600; }
`,ev=v.button`
  background: none; border: none; cursor: pointer; color: #5b7083; padding: 0.5rem;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  &:hover { background-color: #e8f5fd; color: #1da1f2; }
  svg { width: 22px; height: 22px; }
`,vf=v(ev)``,wf=v(ev)``,xf=v.main`
  flex-grow: 1; overflow-y: auto; padding: 1.5rem; background-color: #f5f8fa;
`,PT=v.div`
  display: flex; gap: 1.5rem; background: white; border-radius: 16px; padding: 1.5rem; border: 1px solid #e1e8ed;
`,RT=v.div`
  background: #1da1f2; color: white; border-radius: 12px; padding: 1rem;
  display: flex; flex-direction: column; align-items: center; text-align: center;
`,MT=v.p`
  margin: 0.5rem 0 0 0; font-weight: 600; font-size: 0.8rem; writing-mode: vertical-rl; text-orientation: mixed;
`,$T=v.div`
  flex-grow: 1; position: relative;
`,NT=v.div`
  position: absolute; top: -2.5rem; right: -1.5rem;
  background-color: #ff9f43; color: white; padding: 0.3rem 1rem;
  font-size: 0.8rem; font-weight: 700; border-radius: 16px 0 0 16px;
`,jT=v.h2`
  margin: 0 0 1.5rem 0; font-size: 1.5rem;
`,Sf=v.section``,bf=v.div`
  font-weight: 700; color: #1da1f2; margin-bottom: 0.5rem;
`,LT=v.p`
  font-size: 1.1rem; font-weight: 600; margin: 0 0 1rem 0;
`,DT=v.ul`
  list-style: none; padding-left: 0; margin: 0;
  li { margin-bottom: 0.5rem; color: #5b7083;
    &::before { content: '•'; color: #1da1f2; margin-right: 0.5rem; }
  }
`,BT=v.div`
  margin-top: 1rem;
  border: 1px solid #c7dfff;
  background: #e9f2ff;
  border-radius: 14px;
  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,UT=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,FT=v.div`
  font-weight: 800;
  color: #1a2533;
`,VT=v.div`
  font-weight: 700;
  color: #5b7083;
  font-size: 0.9rem;
`,zT=v.button`
  padding: 0.65rem 1.1rem;
  border: none;
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  background-color: #1da1f2;
  color: white;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }
`,GT=v.ol`
  padding-left: 1.25rem; margin: 0;
  li { margin-bottom: 0.75rem; }
`,kf=v.footer`
  padding: 1rem 1.5rem; border-top: 1px solid #e1e8ed; display: flex;
  justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;
`,HT=v.div`
  display: flex; gap: 0.5rem;
  button {
    background: none; border: 1px solid #e1e8ed; border-radius: 99px;
    padding: 0.5rem 1rem; font-weight: 600; cursor: not-allowed;
    display: flex; align-items: center; gap: 0.25rem; color: #aab8c2;
  }
`,WT=v.div`
  display: flex; gap: 1rem;
`,tv=v.button`
  padding: 0.75rem 1.5rem; border: none; border-radius: 99px; font-size: 1rem;
  font-weight: 700; cursor: pointer; transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`,qT=v(tv)`
  background-color: #ff9f43; color: white;
`,la=v(tv)`
  background-color: #1da1f2; color: white;
`,OT=v.button`
  background: none; border: none; color: #1da1f2; font-weight: 600;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`,JT=e=>{const t=!!e.card.part2Title;return a.jsx(KT,{onClick:e.onClose,role:"dialog","aria-modal":"true",children:t?a.jsx(_T,{...e}):a.jsx(cT,{...e})})},YT=ve`from { opacity: 0; } to { opacity: 1; }`,KT=v.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: ${YT} 0.3s ease;
`,Cf=()=>{var x,y;const[e,t]=E.useState("part1"),[n,o]=E.useState(null),[r,i]=E.useState(null),[s,c]=E.useState(!1),[u,p]=E.useState(null),f=ht(),h=tt(),[m,g]=qd(),S=iu(m.get("season"));E.useEffect(()=>{const b=h.state;b!=null&&b.part&&t(b.part),b!=null&&b.topicId&&p(b.topicId)},[h.state]),E.useEffect(()=>{o(null)},[S.id]),E.useEffect(()=>{let b=!1;return c(!0),i(null),X0(S.id).then(T=>{b||i(T)}).finally(()=>{b||c(!1)}),()=>{b=!0}},[S.id]),E.useEffect(()=>{if(!u||!r)return;const b=window.setTimeout(()=>{const T=document.getElementById(u);T&&(T.scrollIntoView({behavior:"smooth",block:"start"}),p(null))},100);return()=>window.clearTimeout(b)},[e,u,r]);const C=b=>{o(b)},k=b=>{const T=new URLSearchParams(h.search);T.set("from","bank"),T.set("topicId",b);const A=T.toString();f({pathname:"/speaking/vocab",search:A?`?${A}`:""})},w=()=>{o(null)};return a.jsxs(a.Fragment,{children:[a.jsxs(QT,{children:[a.jsxs(nE,{onClick:()=>f({pathname:"/speaking",search:h.search}),"aria-label":"返回口语主页",children:[a.jsx(Nt,{}),a.jsx("span",{children:"返回"})]}),a.jsxs("h1",{children:["雅思口语 ",S.label," 题库"]}),a.jsx(ZT,{"aria-label":"选择题库季",children:Q0.map(b=>a.jsx(eE,{$active:S.id===b.id,onClick:()=>{const T=new URLSearchParams(m);T.set("season",b.id),g(T,{replace:!0})},children:b.label},b.id))}),a.jsxs(XT,{children:[a.jsx(Tf,{$active:e==="part1",onClick:()=>t("part1"),children:"Part1"}),a.jsx(Tf,{$active:e==="part2",onClick:()=>t("part2"),children:"Part2+3"})]})]}),a.jsxs("div",{id:"page-part1",className:e==="part1"?"":"hidden",children:[s&&a.jsx(_i,{children:"正在加载该季 Part 1 题库…"}),!s&&((x=r==null?void 0:r.part1)==null?void 0:x.length)===0&&a.jsx(_i,{children:"该季 Part 1 题库暂未录入，你可以先添加话题/题目。"}),!s&&r&&a.jsx(Kp,{initialTopics:r.part1,onCardClick:C,onOpenVocabTopic:k},`${S.id}-part1`)]}),a.jsxs("div",{id:"page-part2",className:e==="part2"?"":"hidden",children:[s&&a.jsx(_i,{children:"正在加载该季 Part 2+3 题库…"}),!s&&((y=r==null?void 0:r.part2)==null?void 0:y.length)===0&&a.jsx(_i,{children:"该季 Part 2+3 题库暂未录入，你可以先添加话题/题目。"}),!s&&r&&a.jsx(Kp,{initialTopics:r.part2,onCardClick:C,onOpenVocabTopic:k},`${S.id}-part2`)]}),n&&a.jsx(JT,{card:n,seasonId:S.id,seasonTag:S.tag,onClose:w})]})},QT=v.header`
    text-align: center;
    margin-bottom: 3rem;
    position: relative;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
        margin: 0 6rem; /* Avoids overlap with back button */
    }
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem;
        }
    }
`,XT=v.nav`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
`,ZT=v.nav`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-top: 1.25rem;
`,eE=v.button`
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.55rem 1.1rem;
    border-radius: 9999px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    background-color: ${({theme:e})=>e.colors.cardBg};
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    &:hover {
        background-color: ${({theme:e})=>e.colors.boxBg};
        color: ${({theme:e})=>e.colors.header};
    }
    ${({$active:e,theme:t})=>e&&`
        background-color: ${t.colors.primaryBlue};
        color: white;
        border-color: ${t.colors.primaryBlue};
    `}
`,Tf=v.button`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    background-color: ${({theme:e})=>e.colors.cardBg};
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    &:hover {
        background-color: ${({theme:e})=>e.colors.boxBg};
        color: ${({theme:e})=>e.colors.header};
    }
    ${({$active:e,theme:t})=>e&&`
        background-color: ${t.colors.header};
        color: white;
        border-color: ${t.colors.header};
    `}
     @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
`,tE=v.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    svg { width: 20px; height: 20px; }
    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }
`,nE=v(tE)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 0.6rem;
        top: 0;
        transform: none;
        span { display: none; }
    }
`,_i=v.p`
    max-width: 900px;
    margin: 0 auto 1rem auto;
    padding: 0.75rem 1rem;
    border-radius: 14px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    background-color: ${({theme:e})=>e.colors.cardBg};
    color: ${({theme:e})=>e.colors.label};
    font-weight: 600;
`,oE=[{label:"听音乐",question:"Do you like music?",prompts:[{id:"what",title:"What? (喜欢吗?)",text:"直接回答，清晰表明你的态度。",keywords:["Yes, absolutely","I'm a big fan of music."]},{id:"why",title:"Why? (为什么?)",text:"解释你为什么喜欢音乐，说明它的作用。",keywords:["It's a great way to relax","It helps me de-stress."]},{id:"how",title:"How? (感觉如何?)",text:"描述音乐带给你的感受，增加情感色彩。",keywords:["It puts me in a good mood.","It makes me feel energized."]},{id:"when",title:"When? (何时听?)",text:"说出你听音乐的具体场景，让回答更生动。",keywords:["every day","when commuting","while studying"]}],answer:()=>[{type:"what",text:"Yes, absolutely, I'm a big fan of music"},{type:"text",text:". "},{type:"why",text:"For me, it's a great way to relax after a long day"},{type:"text",text:", and "},{type:"how",text:"it always puts me in a good mood"},{type:"text",text:". I listen to it pretty much every day, "},{type:"when",text:"especially when I'm commuting on the subway"},{type:"text",text:"."}],legend:[{id:"what",text:"Answer"},{id:"why",text:"Why"},{id:"how",text:"How"},{id:"when",text:"When"}]}],rE=[{label:"看电影",question:"Do you like watching movies?",prompts:[{id:"point",title:"P - Point (观点)",text:"直接、清晰地陈述你的核心观点。",keywords:["Yes, I'm a huge fan.","No, not really."]},{id:"reason",title:"R - Reason (理由)",text:"解释你持有该观点的原因。",keywords:["The main reason is...","because..."]},{id:"example",title:"E - Example (例子)",text:"给出一个具体的例子来支撑你的理由。",keywords:["For example,","For instance,"]}],answer:()=>[{type:"point",text:"Yes, I'm quite a movie buff. I really enjoy watching films"},{type:"text",text:". "},{type:"reason",text:"I think it's a fantastic way to unwind and escape from reality for a bit"},{type:"text",text:". "},{type:"example",text:"For instance, last weekend I watched a new sci-fi movie, and it was so engaging that I completely forgot about all my work stress"},{type:"text",text:"."}],legend:[{id:"point",text:"Point"},{id:"reason",text:"Reason"},{id:"example",text:"Example"}]}],Rc={who:{bg:"rgba(26, 188, 156, 0.2)",text:"#117a65"},what:{bg:"rgba(52, 152, 219, 0.2)",text:"#1d6a9f"},where:{bg:"rgba(46, 204, 113, 0.2)",text:"#18894b"},when:{bg:"rgba(243, 156, 18, 0.2)",text:"#b47a00"},why:{bg:"rgba(155, 89, 182, 0.2)",text:"#6d3a82"},whyNot:{bg:"rgba(231, 76, 60, 0.2)",text:"#a43328"},how:{bg:"rgba(230, 126, 34, 0.2)",text:"#a05716"},point:{bg:"rgba(52, 152, 219, 0.2)",text:"#1d6a9f"},reason:{bg:"rgba(230, 126, 34, 0.2)",text:"#a05716"},example:{bg:"rgba(39, 174, 96, 0.2)",text:"#1e8449"},introduction:{bg:"rgba(52, 152, 219, 0.2)",text:"#1d6a9f"},body1:{bg:"rgba(230, 126, 34, 0.2)",text:"#a05716"},body2:{bg:"rgba(39, 174, 96, 0.2)",text:"#1e8449"},conclusion:{bg:"rgba(155, 89, 182, 0.2)",text:"#6d3a82"}},Yn={what:"what",where:"where",when:"when",why:"why","why-not":"whyNot",how:"how",who:"who",point:"point",point2:"point",reason:"reason",example:"example"},Mc=({prompt:e})=>a.jsxs(iE,{type:Yn[e.id],children:[a.jsxs(sE,{children:[a.jsx(uC,{type:e.id}),a.jsx("strong",{children:e.title})]}),a.jsx("p",{children:e.text}),a.jsx(lE,{children:e.keywords.map(t=>a.jsx("code",{children:t},t))})]}),su=v.section`
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primaryBlue}, #2e6ab8);
    color: white;
    padding: 2rem;
    border-radius: 16px;
    margin-bottom: 2.5rem;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);

    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.75rem;
        font-weight: 700;
    }
    p {
        margin: 0;
        font-size: 1.1rem;
        opacity: 0.9;
        line-height: 1.7;
        max-width: 80ch;
    }
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1.5rem;
        h3 { font-size: 1.5rem; }
        p { font-size: 1rem; }
    }
`,js=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1.5rem;
    }
`,rt=v.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`,it=v.span`
    background-color: ${({theme:e})=>e.colors.primaryBlue};
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
    flex-shrink: 0;
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        width: 32px; height: 32px; font-size: 1rem;
    }
`,st=v.h4`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.header};
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        font-size: 1.25rem;
    }
`,Ls=v.p`
    background-color: ${({theme:e})=>e.colors.boxBg};
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({theme:e})=>e.colors.header};
    margin: 1rem 0 0 0;
    border-left: 5px solid ${({theme:e})=>e.colors.primaryBlue};
`,dn=v.p`
    color: ${({theme:e})=>e.colors.label};
    font-size: 1.1rem;
    margin: 0 0 1.5rem 0;
    padding-left: calc(40px + 1rem);
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding-left: 0;
        font-size: 1rem;
    }
`,un=v.hr`
    border: 0;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.border};
    margin: 2.5rem 0;
`,$c=v.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: calc(40px + 1rem);

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding-left: 0;
    }
`,iE=v.div`
    background-color: ${({theme:e})=>e.colors.bg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-left-width: 5px;
    border-radius: 12px;
    padding: 1rem;
    border-left-color: ${({theme:e,type:t})=>e.colors[t]||e.colors.what};

    svg {
      color: ${({theme:e,type:t})=>e.colors[t]||e.colors.what};
    }
`,sE=v.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    svg {
        width: 20px;
        height: 20px;
    }
    strong {
        font-weight: 600;
        color: ${({theme:e})=>e.colors.header};
        font-size: 1.1rem;
    }
`,lE=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    code {
        background-color: ${({theme:e})=>e.colors.cardBg};
        border-radius: 6px;
        padding: 0.3rem 0.7rem;
        font-size: 0.9rem;
        color: ${({theme:e})=>e.colors.text};
        border: 1px solid ${({theme:e})=>e.colors.border};
    }
`,Ds=v.div`
    background-color: ${({theme:e})=>e.colors.highlightBg};
    padding: 1.5rem;
    border-radius: 12px;
    line-height: 1.8;
    color: #34495e;
    font-size: 1.1rem;
    margin-top: 1.5rem;

    p {
        margin: 0 0 1em 0;
        &:last-child {
            margin-bottom: 0;
        }
    }

     @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        font-size: 1rem;
    }
`,vt=v.span`
    background-color: ${({type:e})=>{var t;return((t=Rc[Yn[e]||e])==null?void 0:t.bg)||"transparent"}};
    font-weight: 500;
    color: ${({type:e})=>{var t;return((t=Rc[Yn[e]||e])==null?void 0:t.text)||"inherit"}};
    border-radius: 3px;
    padding: 0.1em 0;
`,Bs=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
    padding-left: 1rem;
`,Ln=v.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
`,Dn=v.span`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: ${({type:e})=>{var t,n;return((n=(t=Rc[Yn[e]||e])==null?void 0:t.bg)==null?void 0:n.replace("0.2","0.4"))||"transparent"}};
`,nv=v.section`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-left: 4px solid ${({theme:e})=>e.colors.primaryOrange};
    border-radius: 16px;
    padding: 1.5rem;
    margin: 2.5rem auto 0 auto;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};

    svg {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        color: ${({theme:e})=>e.colors.primaryOrange};
        margin-top: 3px;
    }

    p {
        margin: 0;
        line-height: 1.7;
        color: ${({theme:e})=>e.colors.text};
        font-size: 1rem;

        strong {
            font-weight: 600;
            color: ${({theme:e})=>e.colors.header};
        }
    }
`,aE=()=>{const[e,t]=E.useState(0),[n,o]=E.useState(0),[r,i]=E.useState("5w1h"),s=oE[e],c=rE[n];return a.jsxs(a.Fragment,{children:[a.jsxs(su,{children:[a.jsx("h3",{children:"Part 1: 快速、连贯地回答"}),a.jsx("p",{children:"在 Part 1 中，目标是给出长度适中（3-5句话）、内容清晰的回答。考官希望看到你能够轻松地谈论日常话题。以下两个技巧将帮助你轻松扩展答案，避免回答过短或逻辑混乱。"})]}),a.jsxs(cE,{children:[a.jsx(Ef,{$active:r==="5w1h",onClick:()=>i("5w1h"),children:"技巧一: 5W1H 扩展法"}),a.jsx(Ef,{$active:r==="pre",onClick:()=>i("pre"),children:"技巧二: PRE 结构法"})]}),r==="5w1h"&&a.jsx("div",{style:{animation:"fadeIn 0.4s ease"},children:a.jsxs(js,{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"1"}),a.jsx(st,{children:"审题：分析问题"})]}),a.jsx(Ls,{children:s.question}),a.jsx(un,{}),a.jsxs(rt,{children:[a.jsx(it,{children:"2"}),a.jsx(st,{children:"拆解：用 5W1H 扩展思路"})]}),a.jsx(dn,{children:"围绕问题，从不同角度发散思考。每个角度都能成为你答案的一部分。"}),a.jsx($c,{children:s.prompts.map(u=>a.jsx(Mc,{prompt:u},u.id))}),a.jsx(un,{}),a.jsxs(rt,{children:[a.jsx(it,{children:"3"}),a.jsx(st,{children:"组合：组织成一个完整的答案"})]}),a.jsx(dn,{children:"将刚才的思路点串联起来，形成一段流暢、详细的回答。"}),a.jsx(Ds,{children:a.jsx("p",{children:s.answer().map((u,p)=>u.type==="text"?a.jsx(Se.Fragment,{children:u.text},p):a.jsx(vt,{type:u.type,children:u.text},p))})}),a.jsx(Bs,{children:s.legend.map(u=>a.jsxs(Ln,{children:[a.jsx(Dn,{type:Yn[u.id]}),u.text]},u.id))})]})},"5w1h"),r==="pre"&&a.jsx("div",{style:{animation:"fadeIn 0.4s ease"},children:a.jsxs(js,{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"1"}),a.jsx(st,{children:"审题：分析问题"})]}),a.jsx(Ls,{children:c.question}),a.jsx(un,{}),a.jsxs(rt,{children:[a.jsx(it,{children:"2"}),a.jsx(st,{children:"拆解：用 PRE 构建思路"})]}),a.jsx(dn,{children:"围绕问题，按照“观点-理由-例子”的顺序组织你的想法。"}),a.jsx($c,{children:c.prompts.map(u=>a.jsx(Mc,{prompt:u},u.id))}),a.jsx(un,{}),a.jsxs(rt,{children:[a.jsx(it,{children:"3"}),a.jsx(st,{children:"组合：组织成一个完整的答案"})]}),a.jsx(dn,{children:"将刚才的思路点串联起来，形成一段逻辑清晰、有理有据的回答。"}),a.jsx(Ds,{children:a.jsx("p",{children:c.answer().map((u,p)=>u.type==="text"?a.jsx(Se.Fragment,{children:u.text},p):a.jsx(vt,{type:u.type,children:u.text},p))})}),a.jsx(Bs,{children:c.legend.map(u=>a.jsxs(Ln,{children:[a.jsx(Dn,{type:Yn[u.id]}),u.text]},u.id))})]})},"pre"),a.jsxs(nv,{children:[a.jsx(nu,{}),a.jsxs("p",{children:[a.jsx("strong",{children:"Part 1 总结:"})," 5W1H 帮助你丰富",a.jsx("strong",{children:"内容"}),"，PRE 帮助你构建",a.jsx("strong",{children:"逻辑"}),"。熟练运用这两个技巧，选择其中2-3个角度展开，就能给出一个既饱满又清晰的答案。"]})]})]})},cE=v.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    margin-bottom: 2.5rem;
`,Ef=v.button`
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({theme:e,$active:t})=>t?e.colors.header:e.colors.label};
    border-bottom: 3px solid ${({$active:e,theme:t})=>e?t.colors.primaryOrange:"transparent"};
    margin-bottom: -1px;
    transition: color 0.2s ease;

    &:hover {
        color: ${({theme:e})=>e.colors.header};
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        font-size: 1rem;
        padding: 0.75rem 1rem;
        flex-grow: 1;
    }
`,dE=()=>a.jsxs(a.Fragment,{children:[a.jsxs(su,{children:[a.jsx("h3",{children:"Part 2: 讲述一个有吸引力的故事"}),a.jsxs("p",{children:["Part 2 的核心是在1分钟准备后，进行1-2分钟的个人陈述。话题卡通常分为",a.jsx("b",{children:"人物、地点、事物、事件"}),"等几大类。本部分考验的是你快速构建思路和讲述一个有结构、有细节故事的能力。5W1H 和 PRE 同样是你的得力助手。"]})]}),a.jsxs(js,{children:[a.jsxs("div",{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"1"}),a.jsx(st,{children:"1分钟准备: 用 5W1H 构建故事蓝图"})]}),a.jsx(dn,{children:"题卡上的提示 (prompts) 其实就是 5W1H 的变体。利用一分钟准备时间，针对每个提示写下关键词，这就是你故事的骨架。"}),a.jsxs(uE,{children:[a.jsxs(pE,{children:[a.jsx("h4",{children:"Describe a good friend..."}),a.jsxs("ul",{children:[a.jsx("li",{children:"Who this person is"}),a.jsx("li",{children:"How you met"}),a.jsx("li",{children:"What you do together"}),a.jsx("li",{children:"Why this person is important"})]})]}),a.jsx(hE,{children:a.jsx(dC,{})}),a.jsxs(fE,{children:[a.jsx("h4",{children:"My Notes (1 min)"}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx(vt,{type:"who",children:"Who:"})," Li Wei, classmate"]}),a.jsxs("li",{children:[a.jsx(vt,{type:"how",children:"How:"})," university project"]}),a.jsxs("li",{children:[a.jsx(vt,{type:"what",children:"What:"})," study, basketball"]}),a.jsxs("li",{children:[a.jsx(vt,{type:"why",children:"Why:"})," supportive (exam), funny"]})]})]})]})]}),a.jsx(un,{}),a.jsxs("div",{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"2"}),a.jsx(st,{children:"充实细节: 用 PRE 让故事更饱满"})]}),a.jsx(dn,{children:"在讲述故事时，特别是解释原因 (Why) 或阐述感受 (How) 时，可以巧妙地使用 PRE 结构，让你的论证更有力、更具说服力。"}),a.jsxs(mE,{children:[a.jsx(gE,{children:'Prompt: "And explain why this person is important to you."'}),a.jsxs(aa,{type:"point",children:[a.jsx(ca,{children:"P - Point"}),a.jsx(da,{children:"He's incredibly supportive, which is the main reason he's so important to me."})]}),a.jsxs(aa,{type:"reason",children:[a.jsx(ca,{children:"R - Reason"}),a.jsx(da,{children:"This is because he always encourages me when I'm facing challenges."})]}),a.jsxs(aa,{type:"example",children:[a.jsx(ca,{children:"E - Example"}),a.jsx(da,{children:"For instance, right before my final exams, I was really stressed out. He spent a whole afternoon helping me review and told me he believed in me. That gesture made a huge difference."})]})]})]}),a.jsx(un,{}),a.jsxs("div",{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"3"}),a.jsx(st,{children:"实战演练：一个完整的故事"})]}),a.jsx(Ls,{children:"Describe an old person you know and respect."}),a.jsxs(Ds,{children:[a.jsx("p",{children:a.jsx(vt,{type:"introduction",children:"I'd like to talk about my grandfather. He's in his late seventies, and he's been a huge influence in my life."})}),a.jsx("p",{children:a.jsx(vt,{type:"body1",children:"One of his main qualities is his incredible patience. (PRE Starts) I remember when I was struggling with a complex math problem. I wanted to give up, but he sat with me for over an hour, calmly explaining it from different angles until I understood. That taught me the value of persistence."})}),a.jsx("p",{children:a.jsx(vt,{type:"body2",children:'Another thing I respect is his optimistic attitude. (PRE Starts) He has faced many challenges, but he always finds something positive. For example, after a knee surgery, he treated the recovery period as a great opportunity to catch up on his reading. His "every cloud has a silver lining" mindset is truly inspiring.'})}),a.jsx("p",{children:a.jsx(vt,{type:"conclusion",children:"So, he is not just a family member to me; he is a role model. His patience and optimism have shaped my character, and that's why I respect him so much."})})]}),a.jsxs(Bs,{children:[a.jsxs(Ln,{children:[a.jsx(Dn,{type:"introduction"})," Introduction"]}),a.jsxs(Ln,{children:[a.jsx(Dn,{type:"body1"})," Story 1 (with PRE)"]}),a.jsxs(Ln,{children:[a.jsx(Dn,{type:"body2"})," Story 2 (with PRE)"]}),a.jsxs(Ln,{children:[a.jsx(Dn,{type:"conclusion"})," Conclusion"]})]})]})]})]}),uE=v.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 1.5rem;
    padding-left: calc(40px + 1rem);

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding-left: 0;
    }
`,ov=v.div`
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 12px;
    padding: 1.5rem;
    background-color: ${({theme:e})=>e.colors.cardBg};
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    height: 100%;

    h4 {
        margin: 0 0 1rem 0;
        font-weight: 600;
        color: ${({theme:e})=>e.colors.header};
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            margin-bottom: 0.5rem;
        }
    }
`,pE=v(ov)`
    background-color: ${({theme:e})=>e.colors.cardYellowBg};
    border-color: #fbe5a2;
    li::before {
        content: '•';
        color: ${({theme:e})=>e.colors.label};
        margin-right: 0.5rem;
    }
`,fE=v(ov)`
    li {
        display: flex;
        gap: 0.5rem;
    }
`,hE=v.div`
    color: ${({theme:e})=>e.colors.label};
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        transform: rotate(90deg);
        margin: 0 auto;
    }
`,mE=v.div`
    padding-left: calc(40px + 1rem);
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding-left: 0;
    }
`,gE=v.div`
    font-style: italic;
    color: ${({theme:e})=>e.colors.label};
    margin-bottom: 0.5rem;
`,aa=v.div`
    border-left: 4px solid;
    padding: 0.75rem 1.25rem;
    border-color: ${({theme:e,type:t})=>e.colors[t]};
    background-color: ${({theme:e,type:t})=>e.colors[`analysis${t.charAt(0).toUpperCase()+t.slice(1)}Bg`]};
    border-radius: 0 8px 8px 0;
`,ca=v.div`
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    color: ${({theme:e})=>e.colors.header};
`,da=v.p`
    margin: 0;
`,yE=[{label:"出国旅行",question:"Do you think it's important for people to travel to other countries?",prompts:[{id:"point",title:"P - Point (观点)",text:"明确地陈述你的观点。",keywords:["Yes, I believe it's extremely important.","I think it is beneficial, but not essential."]},{id:"reason",title:"R - Reason (理由)",text:"解释你为什么这么认为。",keywords:["because it broadens our horizons...","it helps us understand different cultures."]},{id:"example",title:"E - Example (例子)",text:"提供一个具体的例子来支持你的理由。",keywords:["For example, when I visited...","To illustrate this..."]}],answer:()=>[{type:"point",text:"Yes, I believe it's incredibly important for people to travel internationally"},{type:"text",text:". "},{type:"reason",text:"The main reason is that it broadens our horizons and fosters a deeper understanding of different cultures in a way that reading books or watching documentaries simply cannot"},{type:"text",text:". "},{type:"example",text:"For instance, before visiting Japan, I had a very stereotypical image of the country. But after spending time there, interacting with local people and experiencing their daily life, I gained a much more nuanced and respectful perspective on their culture. That kind of personal experience is truly invaluable"},{type:"text",text:"."}],legend:[{id:"point",text:"Point"},{id:"reason",text:"Reason"},{id:"example",text:"Example"}]}],vE=()=>{const e=yE[0];return a.jsxs(a.Fragment,{children:[a.jsxs(su,{children:[a.jsx("h3",{children:"Part 3: 深入探讨，展现思辨能力"}),a.jsx("p",{children:"Part 3 要求你就 Part 2 的相关话题进行更深入、更抽象的讨论。考官希望看到你的逻辑思维和论证能力。PRE 结构是这一部分的关键技巧，能帮助你构建一个逻辑严密、有理有据的回答。"})]}),a.jsxs(js,{children:[a.jsxs("div",{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"1"}),a.jsx(st,{children:"审题：分析问题"})]}),a.jsx(Ls,{children:e.question})]}),a.jsx(un,{}),a.jsxs("div",{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"2"}),a.jsx(st,{children:"拆解：用 PRE 构建论点"})]}),a.jsxs(dn,{children:[a.jsx("b",{children:"P"}),"oint (观点) → ",a.jsx("b",{children:"R"}),"eason (理由) → ",a.jsx("b",{children:"E"}),"xample (例子). 这个经典结构可以帮助你清晰地表达任何观点。"]}),a.jsxs(wE,{children:[a.jsxs(ua,{type:"point",children:[a.jsx(pa,{type:"point",children:"P"}),a.jsx(fa,{children:"I think going to a coffee shop would be a good idea."})]}),a.jsx(If,{children:a.jsx(Qp,{})}),a.jsxs(ua,{type:"reason",children:[a.jsx(pa,{type:"reason",children:"R"}),a.jsx(fa,{children:"Because it is inexpensive, and the atmosphere is quiet and comfortable, so we can spend time together."})]}),a.jsx(If,{children:a.jsx(Qp,{})}),a.jsxs(ua,{type:"example",children:[a.jsx(pa,{type:"example",children:"E"}),a.jsx(fa,{children:"For example, last week I went to a coffee shop near my school. It had nice drinks and snacks, and we could sit and chat for a long time."})]})]}),a.jsx($c,{children:e.prompts.map(t=>a.jsx(Mc,{prompt:t},t.id))})]}),a.jsx(un,{}),a.jsxs("div",{children:[a.jsxs(rt,{children:[a.jsx(it,{children:"3"}),a.jsx(st,{children:"组合：形成一个有说服力的答案"})]}),a.jsx(dn,{children:"将你的观点、理由和例子串联起来，形成一个逻辑连贯的完整回答。"}),a.jsx(Ds,{children:a.jsx("p",{children:e.answer().map((t,n)=>t.type==="text"?a.jsx(Se.Fragment,{children:t.text},n):a.jsx(vt,{type:t.type,children:t.text},n))})}),a.jsx(Bs,{children:e.legend.map(t=>a.jsxs(Ln,{children:[a.jsx(Dn,{type:Yn[t.id]}),t.text]},t.id))})]})]}),a.jsxs(nv,{children:[a.jsx(nu,{}),a.jsxs("p",{children:[a.jsx("strong",{children:"Part 3 总结:"})," 始终尝试用 PRE 结构来组织你的思想。即使你对某个话题不熟悉，这个框架也能帮助你清晰地表达观点。关键是展示你的思考过程，而不仅仅是给出一个简单的答案。"]})]})]})},wE=v.div`
    padding: 1rem 0;
    margin: 1.5rem auto 2.5rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-left: calc(40px + 1rem);

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding-left: 0;
    }
`,ua=v.div`
    background-color: ${({theme:e})=>e.colors.bg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 12px;
    padding: 1.25rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`,pa=v.div`
    background-color: ${({theme:e,type:t})=>e.colors[t]};
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,fa=v.p`
    margin: 0;
    line-height: 1.7;
    color: ${({theme:e})=>e.colors.text};
    padding-top: 0.2rem;
`,If=v.div`
    color: ${({theme:e})=>e.colors.label};
    opacity: 0.5;
`,_f=()=>{const e=ht(),[t,n]=E.useState("part1");return a.jsxs(xE,{children:[a.jsxs(bE,{children:[a.jsxs(kE,{onClick:()=>e("/"),"aria-label":"返回主页",children:[a.jsx(Nt,{}),a.jsx("span",{children:"返回主页"})]}),a.jsx("h1",{children:"雅思口语回答技巧"})]}),a.jsxs(CE,{children:[a.jsx(ha,{$active:t==="part1",onClick:()=>n("part1"),children:"Part 1 技巧"}),a.jsx(ha,{$active:t==="part2",onClick:()=>n("part2"),children:"Part 2 技巧"}),a.jsx(ha,{$active:t==="part3",onClick:()=>n("part3"),children:"Part 3 技巧"})]}),a.jsx("main",{children:a.jsxs(SE,{children:[t==="part1"&&a.jsx(aE,{}),t==="part2"&&a.jsx(dE,{}),t==="part3"&&a.jsx(vE,{})]})})]})},xE=v.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`,SE=v.div`
    animation: fadeIn 0.5s ease;
`,bE=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem; /* Space for back button */
        }
    }
`,kE=v.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 0.6rem;
        gap: 0;
        span {
            display: none;
        }
    }
`,CE=v.nav`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
    border-radius: 999px;
    background-color: ${({theme:e})=>e.colors.boxBg};
    padding: 0.5rem;
    border: 1px solid ${({theme:e})=>e.colors.border};
`,ha=v.button`
    flex: 1;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${({$active:e,theme:t})=>e?t.colors.primaryBlue:"transparent"};
    color: ${({$active:e,theme:t})=>e?"white":t.colors.label};

    &:hover:not(:disabled) {
        color: ${({$active:e,theme:t})=>e?"white":t.colors.header};
    }
`;var TE={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let EE,IE;function _E(){return{geminiUrl:EE,vertexUrl:IE}}function AE(e,t,n,o){var r,i;if(!(e!=null&&e.baseUrl)){const s=_E();return t?(r=s.vertexUrl)!==null&&r!==void 0?r:n:(i=s.geminiUrl)!==null&&i!==void 0?i:o}return e.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Yt{}function L(e,t){const n=/\{([^}]+)\}/g;return e.replace(n,(o,r)=>{if(Object.prototype.hasOwnProperty.call(t,r)){const i=t[r];return i!=null?String(i):""}else throw new Error(`Key '${r}' not found in valueMap.`)})}function d(e,t,n){for(let i=0;i<t.length-1;i++){const s=t[i];if(s.endsWith("[]")){const c=s.slice(0,-2);if(!(c in e))if(Array.isArray(n))e[c]=Array.from({length:n.length},()=>({}));else throw new Error(`Value must be a list given an array path ${s}`);if(Array.isArray(e[c])){const u=e[c];if(Array.isArray(n))for(let p=0;p<u.length;p++){const f=u[p];d(f,t.slice(i+1),n[p])}else for(const p of u)d(p,t.slice(i+1),n)}return}else if(s.endsWith("[0]")){const c=s.slice(0,-3);c in e||(e[c]=[{}]);const u=e[c];d(u[0],t.slice(i+1),n);return}(!e[s]||typeof e[s]!="object")&&(e[s]={}),e=e[s]}const o=t[t.length-1],r=e[o];if(r!==void 0){if(!n||typeof n=="object"&&Object.keys(n).length===0||n===r)return;if(typeof r=="object"&&typeof n=="object"&&r!==null&&n!==null)Object.assign(r,n);else throw new Error(`Cannot set value for an existing key. Key: ${o}`)}else o==="_self"&&typeof n=="object"&&n!==null&&!Array.isArray(n)?Object.assign(e,n):e[o]=n}function l(e,t,n=void 0){try{if(t.length===1&&t[0]==="_self")return e;for(let o=0;o<t.length;o++){if(typeof e!="object"||e===null)return n;const r=t[o];if(r.endsWith("[]")){const i=r.slice(0,-2);if(i in e){const s=e[i];return Array.isArray(s)?s.map(c=>l(c,t.slice(o+1),n)):n}else return n}else e=e[r]}return e}catch(o){if(o instanceof TypeError)return n;throw o}}function PE(e,t){for(const[n,o]of Object.entries(t)){const r=n.split("."),i=o.split("."),s=new Set;let c=-1;for(let u=0;u<r.length;u++)if(r[u]==="*"){c=u;break}if(c!==-1&&i.length>c)for(let u=c;u<i.length;u++){const p=i[u];p!=="*"&&!p.endsWith("[]")&&!p.endsWith("[0]")&&s.add(p)}Nc(e,r,i,0,s)}}function Nc(e,t,n,o,r){if(o>=t.length||typeof e!="object"||e===null)return;const i=t[o];if(i.endsWith("[]")){const s=i.slice(0,-2),c=e;if(s in c&&Array.isArray(c[s]))for(const u of c[s])Nc(u,t,n,o+1,r)}else if(i==="*"){if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const s=e,c=Object.keys(s).filter(p=>!p.startsWith("_")&&!r.has(p)),u={};for(const p of c)u[p]=s[p];for(const[p,f]of Object.entries(u)){const h=[];for(const m of n.slice(o))m==="*"?h.push(p):h.push(m);d(s,h,f)}for(const p of c)delete s[p]}}else{const s=e;i in s&&Nc(s[i],t,n,o+1,r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function lu(e){if(typeof e!="string")throw new Error("fromImageBytes must be a string");return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function RE(e){const t={},n=l(e,["operationName"]);n!=null&&d(t,["operationName"],n);const o=l(e,["resourceName"]);return o!=null&&d(t,["_url","resourceName"],o),t}function ME(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata"]);o!=null&&d(t,["metadata"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["response","generateVideoResponse"]);return s!=null&&d(t,["response"],NE(s)),t}function $E(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata"]);o!=null&&d(t,["metadata"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["response"]);return s!=null&&d(t,["response"],jE(s)),t}function NE(e){const t={},n=l(e,["generatedSamples"]);if(n!=null){let i=n;Array.isArray(i)&&(i=i.map(s=>LE(s))),d(t,["generatedVideos"],i)}const o=l(e,["raiMediaFilteredCount"]);o!=null&&d(t,["raiMediaFilteredCount"],o);const r=l(e,["raiMediaFilteredReasons"]);return r!=null&&d(t,["raiMediaFilteredReasons"],r),t}function jE(e){const t={},n=l(e,["videos"]);if(n!=null){let i=n;Array.isArray(i)&&(i=i.map(s=>DE(s))),d(t,["generatedVideos"],i)}const o=l(e,["raiMediaFilteredCount"]);o!=null&&d(t,["raiMediaFilteredCount"],o);const r=l(e,["raiMediaFilteredReasons"]);return r!=null&&d(t,["raiMediaFilteredReasons"],r),t}function LE(e){const t={},n=l(e,["video"]);return n!=null&&d(t,["video"],GE(n)),t}function DE(e){const t={},n=l(e,["_self"]);return n!=null&&d(t,["video"],HE(n)),t}function BE(e){const t={},n=l(e,["operationName"]);return n!=null&&d(t,["_url","operationName"],n),t}function UE(e){const t={},n=l(e,["operationName"]);return n!=null&&d(t,["_url","operationName"],n),t}function FE(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata"]);o!=null&&d(t,["metadata"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["response"]);return s!=null&&d(t,["response"],VE(s)),t}function VE(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["parent"]);o!=null&&d(t,["parent"],o);const r=l(e,["documentName"]);return r!=null&&d(t,["documentName"],r),t}function rv(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata"]);o!=null&&d(t,["metadata"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["response"]);return s!=null&&d(t,["response"],zE(s)),t}function zE(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["parent"]);o!=null&&d(t,["parent"],o);const r=l(e,["documentName"]);return r!=null&&d(t,["documentName"],r),t}function GE(e){const t={},n=l(e,["uri"]);n!=null&&d(t,["uri"],n);const o=l(e,["encodedVideo"]);o!=null&&d(t,["videoBytes"],lu(o));const r=l(e,["encoding"]);return r!=null&&d(t,["mimeType"],r),t}function HE(e){const t={},n=l(e,["gcsUri"]);n!=null&&d(t,["uri"],n);const o=l(e,["bytesBase64Encoded"]);o!=null&&d(t,["videoBytes"],lu(o));const r=l(e,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Af;(function(e){e.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",e.OUTCOME_OK="OUTCOME_OK",e.OUTCOME_FAILED="OUTCOME_FAILED",e.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Af||(Af={}));var Pf;(function(e){e.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",e.PYTHON="PYTHON"})(Pf||(Pf={}));var Rf;(function(e){e.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",e.SILENT="SILENT",e.WHEN_IDLE="WHEN_IDLE",e.INTERRUPT="INTERRUPT"})(Rf||(Rf={}));var Me;(function(e){e.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT",e.NULL="NULL"})(Me||(Me={}));var Mf;(function(e){e.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",e.SIMPLE_SEARCH="SIMPLE_SEARCH",e.ELASTIC_SEARCH="ELASTIC_SEARCH"})(Mf||(Mf={}));var $f;(function(e){e.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",e.NO_AUTH="NO_AUTH",e.API_KEY_AUTH="API_KEY_AUTH",e.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",e.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",e.OAUTH="OAUTH",e.OIDC_AUTH="OIDC_AUTH"})($f||($f={}));var Nf;(function(e){e.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",e.HTTP_IN_QUERY="HTTP_IN_QUERY",e.HTTP_IN_HEADER="HTTP_IN_HEADER",e.HTTP_IN_PATH="HTTP_IN_PATH",e.HTTP_IN_BODY="HTTP_IN_BODY",e.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(Nf||(Nf={}));var jf;(function(e){e.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",e.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",e.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",e.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(jf||(jf={}));var Lf;(function(e){e.UNSPECIFIED="UNSPECIFIED",e.BLOCKING="BLOCKING",e.NON_BLOCKING="NON_BLOCKING"})(Lf||(Lf={}));var Df;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(Df||(Df={}));var Bf;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE",e.VALIDATED="VALIDATED"})(Bf||(Bf={}));var Uf;(function(e){e.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH",e.MINIMAL="MINIMAL"})(Uf||(Uf={}));var Ff;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",e.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",e.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",e.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",e.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(Ff||(Ff={}));var Vf;(function(e){e.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",e.SEVERITY="SEVERITY",e.PROBABILITY="PROBABILITY"})(Vf||(Vf={}));var zf;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE",e.OFF="OFF"})(zf||(zf={}));var Gf;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.IMAGE_SAFETY="IMAGE_SAFETY",e.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",e.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",e.NO_IMAGE="NO_IMAGE",e.IMAGE_RECITATION="IMAGE_RECITATION",e.IMAGE_OTHER="IMAGE_OTHER"})(Gf||(Gf={}));var Hf;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(Hf||(Hf={}));var Wf;(function(e){e.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",e.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",e.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",e.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",e.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Wf||(Wf={}));var qf;(function(e){e.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",e.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",e.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",e.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",e.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(qf||(qf={}));var Of;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.IMAGE_SAFETY="IMAGE_SAFETY",e.MODEL_ARMOR="MODEL_ARMOR",e.JAILBREAK="JAILBREAK"})(Of||(Of={}));var Jf;(function(e){e.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",e.ON_DEMAND="ON_DEMAND",e.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(Jf||(Jf={}));var Us;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.AUDIO="AUDIO"})(Us||(Us={}));var Yf;(function(e){e.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",e.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",e.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",e.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(Yf||(Yf={}));var Kf;(function(e){e.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",e.TUNING_MODE_FULL="TUNING_MODE_FULL",e.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(Kf||(Kf={}));var Qf;(function(e){e.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",e.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",e.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",e.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",e.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",e.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",e.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(Qf||(Qf={}));var jc;(function(e){e.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",e.JOB_STATE_QUEUED="JOB_STATE_QUEUED",e.JOB_STATE_PENDING="JOB_STATE_PENDING",e.JOB_STATE_RUNNING="JOB_STATE_RUNNING",e.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",e.JOB_STATE_FAILED="JOB_STATE_FAILED",e.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",e.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",e.JOB_STATE_PAUSED="JOB_STATE_PAUSED",e.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",e.JOB_STATE_UPDATING="JOB_STATE_UPDATING",e.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(jc||(jc={}));var Xf;(function(e){e.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",e.TUNING_TASK_I2V="TUNING_TASK_I2V",e.TUNING_TASK_T2V="TUNING_TASK_T2V",e.TUNING_TASK_R2V="TUNING_TASK_R2V"})(Xf||(Xf={}));var Zf;(function(e){e.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",e.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",e.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",e.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",e.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(Zf||(Zf={}));var eh;(function(e){e.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",e.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",e.BALANCED="BALANCED",e.PRIORITIZE_COST="PRIORITIZE_COST"})(eh||(eh={}));var th;(function(e){e.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",e.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(th||(th={}));var nh;(function(e){e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(nh||(nh={}));var oh;(function(e){e.DONT_ALLOW="DONT_ALLOW",e.ALLOW_ADULT="ALLOW_ADULT",e.ALLOW_ALL="ALLOW_ALL"})(oh||(oh={}));var rh;(function(e){e.auto="auto",e.en="en",e.ja="ja",e.ko="ko",e.hi="hi",e.zh="zh",e.pt="pt",e.es="es"})(rh||(rh={}));var ih;(function(e){e.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",e.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",e.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",e.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",e.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(ih||(ih={}));var sh;(function(e){e.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",e.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",e.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",e.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(sh||(sh={}));var lh;(function(e){e.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",e.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",e.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",e.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(lh||(lh={}));var ah;(function(e){e.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",e.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",e.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",e.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",e.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",e.EDIT_MODE_STYLE="EDIT_MODE_STYLE",e.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",e.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(ah||(ah={}));var ch;(function(e){e.FOREGROUND="FOREGROUND",e.BACKGROUND="BACKGROUND",e.PROMPT="PROMPT",e.SEMANTIC="SEMANTIC",e.INTERACTIVE="INTERACTIVE"})(ch||(ch={}));var dh;(function(e){e.ASSET="ASSET",e.STYLE="STYLE"})(dh||(dh={}));var uh;(function(e){e.INSERT="INSERT",e.REMOVE="REMOVE",e.REMOVE_STATIC="REMOVE_STATIC",e.OUTPAINT="OUTPAINT"})(uh||(uh={}));var ph;(function(e){e.OPTIMIZED="OPTIMIZED",e.LOSSLESS="LOSSLESS"})(ph||(ph={}));var fh;(function(e){e.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",e.PREFERENCE_TUNING="PREFERENCE_TUNING"})(fh||(fh={}));var hh;(function(e){e.STATE_UNSPECIFIED="STATE_UNSPECIFIED",e.STATE_PENDING="STATE_PENDING",e.STATE_ACTIVE="STATE_ACTIVE",e.STATE_FAILED="STATE_FAILED"})(hh||(hh={}));var mh;(function(e){e.STATE_UNSPECIFIED="STATE_UNSPECIFIED",e.PROCESSING="PROCESSING",e.ACTIVE="ACTIVE",e.FAILED="FAILED"})(mh||(mh={}));var gh;(function(e){e.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",e.UPLOADED="UPLOADED",e.GENERATED="GENERATED",e.REGISTERED="REGISTERED"})(gh||(gh={}));var yh;(function(e){e.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.RESPONSE_REJECTED="RESPONSE_REJECTED",e.NEED_MORE_INPUT="NEED_MORE_INPUT"})(yh||(yh={}));var vh;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.VIDEO="VIDEO",e.AUDIO="AUDIO",e.DOCUMENT="DOCUMENT"})(vh||(vh={}));var wh;(function(e){e.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",e.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",e.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(wh||(wh={}));var xh;(function(e){e.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",e.ACTIVITY_START="ACTIVITY_START",e.ACTIVITY_END="ACTIVITY_END"})(xh||(xh={}));var Sh;(function(e){e.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",e.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",e.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(Sh||(Sh={}));var bh;(function(e){e.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",e.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",e.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(bh||(bh={}));var kh;(function(e){e.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",e.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",e.NO_INTERRUPTION="NO_INTERRUPTION"})(kh||(kh={}));var Ch;(function(e){e.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",e.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",e.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(Ch||(Ch={}));var Th;(function(e){e.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",e.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",e.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",e.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",e.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",e.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",e.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",e.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",e.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",e.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",e.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",e.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",e.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(Th||(Th={}));var Eh;(function(e){e.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",e.QUALITY="QUALITY",e.DIVERSITY="DIVERSITY",e.VOCALIZATION="VOCALIZATION"})(Eh||(Eh={}));var xo;(function(e){e.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",e.PLAY="PLAY",e.PAUSE="PAUSE",e.STOP="STOP",e.RESET_CONTEXT="RESET_CONTEXT"})(xo||(xo={}));class Lc{constructor(t){const n={};for(const o of t.headers.entries())n[o[0]]=o[1];this.headers=n,this.responseInternal=t}json(){return this.responseInternal.json()}}class sr{get text(){var t,n,o,r,i,s,c,u;if(((r=(o=(n=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let p="",f=!1;const h=[];for(const m of(u=(c=(s=(i=this.candidates)===null||i===void 0?void 0:i[0])===null||s===void 0?void 0:s.content)===null||c===void 0?void 0:c.parts)!==null&&u!==void 0?u:[]){for(const[g,S]of Object.entries(m))g!=="text"&&g!=="thought"&&g!=="thoughtSignature"&&(S!==null||S!==void 0)&&h.push(g);if(typeof m.text=="string"){if(typeof m.thought=="boolean"&&m.thought)continue;f=!0,p+=m.text}}return h.length>0&&console.warn(`there are non-text parts ${h} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),f?p:void 0}get data(){var t,n,o,r,i,s,c,u;if(((r=(o=(n=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let p="";const f=[];for(const h of(u=(c=(s=(i=this.candidates)===null||i===void 0?void 0:i[0])===null||s===void 0?void 0:s.content)===null||c===void 0?void 0:c.parts)!==null&&u!==void 0?u:[]){for(const[m,g]of Object.entries(h))m!=="inlineData"&&(g!==null||g!==void 0)&&f.push(m);h.inlineData&&typeof h.inlineData.data=="string"&&(p+=atob(h.inlineData.data))}return f.length>0&&console.warn(`there are non-data parts ${f} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),p.length>0?btoa(p):void 0}get functionCalls(){var t,n,o,r,i,s,c,u;if(((r=(o=(n=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const p=(u=(c=(s=(i=this.candidates)===null||i===void 0?void 0:i[0])===null||s===void 0?void 0:s.content)===null||c===void 0?void 0:c.parts)===null||u===void 0?void 0:u.filter(f=>f.functionCall).map(f=>f.functionCall).filter(f=>f!==void 0);if((p==null?void 0:p.length)!==0)return p}get executableCode(){var t,n,o,r,i,s,c,u,p;if(((r=(o=(n=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const f=(u=(c=(s=(i=this.candidates)===null||i===void 0?void 0:i[0])===null||s===void 0?void 0:s.content)===null||c===void 0?void 0:c.parts)===null||u===void 0?void 0:u.filter(h=>h.executableCode).map(h=>h.executableCode).filter(h=>h!==void 0);if((f==null?void 0:f.length)!==0)return(p=f==null?void 0:f[0])===null||p===void 0?void 0:p.code}get codeExecutionResult(){var t,n,o,r,i,s,c,u,p;if(((r=(o=(n=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n.content)===null||o===void 0?void 0:o.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const f=(u=(c=(s=(i=this.candidates)===null||i===void 0?void 0:i[0])===null||s===void 0?void 0:s.content)===null||c===void 0?void 0:c.parts)===null||u===void 0?void 0:u.filter(h=>h.codeExecutionResult).map(h=>h.codeExecutionResult).filter(h=>h!==void 0);if((f==null?void 0:f.length)!==0)return(p=f==null?void 0:f[0])===null||p===void 0?void 0:p.output}}class Ih{}class _h{}class WE{}class qE{}class OE{}class JE{}class Ah{}class Ph{}class Rh{}class YE{}class Fs{_fromAPIResponse({apiResponse:t,_isVertexAI:n}){const o=new Fs;let r;const i=t;return n?r=$E(i):r=ME(i),Object.assign(o,r),o}}class Mh{}class $h{}class Nh{}class jh{}class KE{}class QE{}class XE{}class au{_fromAPIResponse({apiResponse:t,_isVertexAI:n}){const o=new au,i=FE(t);return Object.assign(o,i),o}}class ZE{}class eI{}class tI{}class Lh{}class nI{get text(){var t,n,o;let r="",i=!1;const s=[];for(const c of(o=(n=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||n===void 0?void 0:n.parts)!==null&&o!==void 0?o:[]){for(const[u,p]of Object.entries(c))u!=="text"&&u!=="thought"&&p!==null&&s.push(u);if(typeof c.text=="string"){if(typeof c.thought=="boolean"&&c.thought)continue;i=!0,r+=c.text}}return s.length>0&&console.warn(`there are non-text parts ${s} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),i?r:void 0}get data(){var t,n,o;let r="";const i=[];for(const s of(o=(n=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||n===void 0?void 0:n.parts)!==null&&o!==void 0?o:[]){for(const[c,u]of Object.entries(s))c!=="inlineData"&&u!==null&&i.push(c);s.inlineData&&typeof s.inlineData.data=="string"&&(r+=atob(s.inlineData.data))}return i.length>0&&console.warn(`there are non-data parts ${i} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),r.length>0?btoa(r):void 0}}class oI{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class cu{_fromAPIResponse({apiResponse:t,_isVertexAI:n}){const o=new cu,i=rv(t);return Object.assign(o,i),o}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function K(e,t){if(!t||typeof t!="string")throw new Error("model is required and must be a string");if(t.includes("..")||t.includes("?")||t.includes("&"))throw new Error("invalid model parameter");if(e.isVertexAI()){if(t.startsWith("publishers/")||t.startsWith("projects/")||t.startsWith("models/"))return t;if(t.indexOf("/")>=0){const n=t.split("/",2);return`publishers/${n[0]}/models/${n[1]}`}else return`publishers/google/models/${t}`}else return t.startsWith("models/")||t.startsWith("tunedModels/")?t:`models/${t}`}function iv(e,t){const n=K(e,t);return n?n.startsWith("publishers/")&&e.isVertexAI()?`projects/${e.getProject()}/locations/${e.getLocation()}/${n}`:n.startsWith("models/")&&e.isVertexAI()?`projects/${e.getProject()}/locations/${e.getLocation()}/publishers/google/${n}`:n:""}function sv(e){return Array.isArray(e)?e.map(t=>Vs(t)):[Vs(e)]}function Vs(e){if(typeof e=="object"&&e!==null)return e;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof e}`)}function lv(e){const t=Vs(e);if(t.mimeType&&t.mimeType.startsWith("image/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function av(e){const t=Vs(e);if(t.mimeType&&t.mimeType.startsWith("audio/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function Dh(e){if(e==null)throw new Error("PartUnion is required");if(typeof e=="object")return e;if(typeof e=="string")return{text:e};throw new Error(`Unsupported part type: ${typeof e}`)}function cv(e){if(e==null||Array.isArray(e)&&e.length===0)throw new Error("PartListUnion is required");return Array.isArray(e)?e.map(t=>Dh(t)):[Dh(e)]}function Dc(e){return e!=null&&typeof e=="object"&&"parts"in e&&Array.isArray(e.parts)}function Bh(e){return e!=null&&typeof e=="object"&&"functionCall"in e}function Uh(e){return e!=null&&typeof e=="object"&&"functionResponse"in e}function Ne(e){if(e==null)throw new Error("ContentUnion is required");return Dc(e)?e:{role:"user",parts:cv(e)}}function du(e,t){if(!t)return[];if(e.isVertexAI()&&Array.isArray(t))return t.flatMap(n=>{const o=Ne(n);return o.parts&&o.parts.length>0&&o.parts[0].text!==void 0?[o.parts[0].text]:[]});if(e.isVertexAI()){const n=Ne(t);return n.parts&&n.parts.length>0&&n.parts[0].text!==void 0?[n.parts[0].text]:[]}return Array.isArray(t)?t.map(n=>Ne(n)):[Ne(t)]}function ct(e){if(e==null||Array.isArray(e)&&e.length===0)throw new Error("contents are required");if(!Array.isArray(e)){if(Bh(e)||Uh(e))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[Ne(e)]}const t=[],n=[],o=Dc(e[0]);for(const r of e){const i=Dc(r);if(i!=o)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(i)t.push(r);else{if(Bh(r)||Uh(r))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");n.push(r)}}return o||t.push({role:"user",parts:cv(n)}),t}function rI(e,t){e.includes("null")&&(t.nullable=!0);const n=e.filter(o=>o!=="null");if(n.length===1)t.type=Object.values(Me).includes(n[0].toUpperCase())?n[0].toUpperCase():Me.TYPE_UNSPECIFIED;else{t.anyOf=[];for(const o of n)t.anyOf.push({type:Object.values(Me).includes(o.toUpperCase())?o.toUpperCase():Me.TYPE_UNSPECIFIED})}}function Ao(e){const t={},n=["items"],o=["anyOf"],r=["properties"];if(e.type&&e.anyOf)throw new Error("type and anyOf cannot be both populated.");const i=e.anyOf;i!=null&&i.length==2&&(i[0].type==="null"?(t.nullable=!0,e=i[1]):i[1].type==="null"&&(t.nullable=!0,e=i[0])),e.type instanceof Array&&rI(e.type,t);for(const[s,c]of Object.entries(e))if(c!=null)if(s=="type"){if(c==="null")throw new Error("type: null can not be the only possible type for the field.");if(c instanceof Array)continue;t.type=Object.values(Me).includes(c.toUpperCase())?c.toUpperCase():Me.TYPE_UNSPECIFIED}else if(n.includes(s))t[s]=Ao(c);else if(o.includes(s)){const u=[];for(const p of c){if(p.type=="null"){t.nullable=!0;continue}u.push(Ao(p))}t[s]=u}else if(r.includes(s)){const u={};for(const[p,f]of Object.entries(c))u[p]=Ao(f);t[s]=u}else{if(s==="additionalProperties")continue;t[s]=c}return t}function uu(e){return Ao(e)}function pu(e){if(typeof e=="object")return e;if(typeof e=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:e}}};throw new Error(`Unsupported speechConfig type: ${typeof e}`)}function fu(e){if("multiSpeakerVoiceConfig"in e)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return e}function Jo(e){if(e.functionDeclarations)for(const t of e.functionDeclarations)t.parameters&&(Object.keys(t.parameters).includes("$schema")?t.parametersJsonSchema||(t.parametersJsonSchema=t.parameters,delete t.parameters):t.parameters=Ao(t.parameters)),t.response&&(Object.keys(t.response).includes("$schema")?t.responseJsonSchema||(t.responseJsonSchema=t.response,delete t.response):t.response=Ao(t.response));return e}function Yo(e){if(e==null)throw new Error("tools is required");if(!Array.isArray(e))throw new Error("tools is required and must be an array of Tools");const t=[];for(const n of e)t.push(n);return t}function iI(e,t,n,o=1){const r=!t.startsWith(`${n}/`)&&t.split("/").length===o;return e.isVertexAI()?t.startsWith("projects/")?t:t.startsWith("locations/")?`projects/${e.getProject()}/${t}`:t.startsWith(`${n}/`)?`projects/${e.getProject()}/locations/${e.getLocation()}/${t}`:r?`projects/${e.getProject()}/locations/${e.getLocation()}/${n}/${t}`:t:r?`${n}/${t}`:t}function Kt(e,t){if(typeof t!="string")throw new Error("name must be a string");return iI(e,t,"cachedContents")}function dv(e){switch(e){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return e}}function En(e){return lu(e)}function sI(e){return e!=null&&typeof e=="object"&&"name"in e}function lI(e){return e!=null&&typeof e=="object"&&"video"in e}function aI(e){return e!=null&&typeof e=="object"&&"uri"in e}function uv(e){var t;let n;if(sI(e)&&(n=e.name),!(aI(e)&&(n=e.uri,n===void 0))&&!(lI(e)&&(n=(t=e.video)===null||t===void 0?void 0:t.uri,n===void 0))){if(typeof e=="string"&&(n=e),n===void 0)throw new Error("Could not extract file name from the provided input.");if(n.startsWith("https://")){const r=n.split("files/")[1].match(/[a-z0-9]+/);if(r===null)throw new Error(`Could not extract file name from URI ${n}`);n=r[0]}else n.startsWith("files/")&&(n=n.split("files/")[1]);return n}}function pv(e,t){let n;return e.isVertexAI()?n=t?"publishers/google/models":"models":n=t?"models":"tunedModels",n}function fv(e){for(const t of["models","tunedModels","publisherModels"])if(cI(e,t))return e[t];return[]}function cI(e,t){return e!==null&&typeof e=="object"&&t in e}function dI(e,t={}){const n=e,o={name:n.name,description:n.description,parametersJsonSchema:n.inputSchema};return n.outputSchema&&(o.responseJsonSchema=n.outputSchema),t.behavior&&(o.behavior=t.behavior),{functionDeclarations:[o]}}function uI(e,t={}){const n=[],o=new Set;for(const r of e){const i=r.name;if(o.has(i))throw new Error(`Duplicate function name ${i} found in MCP tools. Please ensure function names are unique.`);o.add(i);const s=dI(r,t);s.functionDeclarations&&n.push(...s.functionDeclarations)}return{functionDeclarations:n}}function hv(e,t){let n;if(typeof t=="string")if(e.isVertexAI())if(t.startsWith("gs://"))n={format:"jsonl",gcsUri:[t]};else if(t.startsWith("bq://"))n={format:"bigquery",bigqueryUri:t};else throw new Error(`Unsupported string source for Vertex AI: ${t}`);else if(t.startsWith("files/"))n={fileName:t};else throw new Error(`Unsupported string source for Gemini API: ${t}`);else if(Array.isArray(t)){if(e.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");n={inlinedRequests:t}}else n=t;const o=[n.gcsUri,n.bigqueryUri].filter(Boolean).length,r=[n.inlinedRequests,n.fileName].filter(Boolean).length;if(e.isVertexAI()){if(r>0||o!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(o>0||r!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return n}function pI(e){if(typeof e!="string")return e;const t=e;if(t.startsWith("gs://"))return{format:"jsonl",gcsUri:t};if(t.startsWith("bq://"))return{format:"bigquery",bigqueryUri:t};throw new Error(`Unsupported destination: ${t}`)}function mv(e){if(typeof e!="object"||e===null)return{};const t=e,n=t.inlinedResponses;if(typeof n!="object"||n===null)return e;const r=n.inlinedResponses;if(!Array.isArray(r)||r.length===0)return e;let i=!1;for(const s of r){if(typeof s!="object"||s===null)continue;const u=s.response;if(typeof u!="object"||u===null)continue;if(u.embedding!==void 0){i=!0;break}}return i&&(t.inlinedEmbedContentResponses=t.inlinedResponses,delete t.inlinedResponses),e}function Ko(e,t){const n=t;if(!e.isVertexAI()){if(/batches\/[^/]+$/.test(n))return n.split("/").pop();throw new Error(`Invalid batch job name: ${n}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(n))return n.split("/").pop();if(/^\d+$/.test(n))return n;throw new Error(`Invalid batch job name: ${n}.`)}function gv(e){const t=e;return t==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":t==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":t==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":t==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":t==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":t==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":t==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function fI(e){const t={},n=l(e,["responsesFile"]);n!=null&&d(t,["fileName"],n);const o=l(e,["inlinedResponses","inlinedResponses"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(s=>OI(s))),d(t,["inlinedResponses"],i)}const r=l(e,["inlinedEmbedContentResponses","inlinedResponses"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["inlinedEmbedContentResponses"],i)}return t}function hI(e){const t={},n=l(e,["predictionsFormat"]);n!=null&&d(t,["format"],n);const o=l(e,["gcsDestination","outputUriPrefix"]);o!=null&&d(t,["gcsUri"],o);const r=l(e,["bigqueryDestination","outputUri"]);return r!=null&&d(t,["bigqueryUri"],r),t}function mI(e){const t={},n=l(e,["format"]);n!=null&&d(t,["predictionsFormat"],n);const o=l(e,["gcsUri"]);o!=null&&d(t,["gcsDestination","outputUriPrefix"],o);const r=l(e,["bigqueryUri"]);if(r!=null&&d(t,["bigqueryDestination","outputUri"],r),l(e,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(l(e,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(l(e,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return t}function ts(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata","displayName"]);o!=null&&d(t,["displayName"],o);const r=l(e,["metadata","state"]);r!=null&&d(t,["state"],gv(r));const i=l(e,["metadata","createTime"]);i!=null&&d(t,["createTime"],i);const s=l(e,["metadata","endTime"]);s!=null&&d(t,["endTime"],s);const c=l(e,["metadata","updateTime"]);c!=null&&d(t,["updateTime"],c);const u=l(e,["metadata","model"]);u!=null&&d(t,["model"],u);const p=l(e,["metadata","output"]);return p!=null&&d(t,["dest"],fI(mv(p))),t}function Bc(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["displayName"]);o!=null&&d(t,["displayName"],o);const r=l(e,["state"]);r!=null&&d(t,["state"],gv(r));const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["createTime"]);s!=null&&d(t,["createTime"],s);const c=l(e,["startTime"]);c!=null&&d(t,["startTime"],c);const u=l(e,["endTime"]);u!=null&&d(t,["endTime"],u);const p=l(e,["updateTime"]);p!=null&&d(t,["updateTime"],p);const f=l(e,["model"]);f!=null&&d(t,["model"],f);const h=l(e,["inputConfig"]);h!=null&&d(t,["src"],gI(h));const m=l(e,["outputConfig"]);m!=null&&d(t,["dest"],hI(mv(m)));const g=l(e,["completionStats"]);return g!=null&&d(t,["completionStats"],g),t}function gI(e){const t={},n=l(e,["instancesFormat"]);n!=null&&d(t,["format"],n);const o=l(e,["gcsSource","uris"]);o!=null&&d(t,["gcsUri"],o);const r=l(e,["bigquerySource","inputUri"]);return r!=null&&d(t,["bigqueryUri"],r),t}function yI(e,t){const n={};if(l(t,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(l(t,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(l(t,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const o=l(t,["fileName"]);o!=null&&d(n,["fileName"],o);const r=l(t,["inlinedRequests"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>qI(e,s))),d(n,["requests","requests"],i)}return n}function vI(e){const t={},n=l(e,["format"]);n!=null&&d(t,["instancesFormat"],n);const o=l(e,["gcsUri"]);o!=null&&d(t,["gcsSource","uris"],o);const r=l(e,["bigqueryUri"]);if(r!=null&&d(t,["bigquerySource","inputUri"],r),l(e,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(l(e,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return t}function wI(e){const t={},n=l(e,["data"]);if(n!=null&&d(t,["data"],n),l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function xI(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Ko(e,o)),n}function SI(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Ko(e,o)),n}function bI(e){const t={},n=l(e,["content"]);n!=null&&d(t,["content"],n);const o=l(e,["citationMetadata"]);o!=null&&d(t,["citationMetadata"],kI(o));const r=l(e,["tokenCount"]);r!=null&&d(t,["tokenCount"],r);const i=l(e,["finishReason"]);i!=null&&d(t,["finishReason"],i);const s=l(e,["avgLogprobs"]);s!=null&&d(t,["avgLogprobs"],s);const c=l(e,["groundingMetadata"]);c!=null&&d(t,["groundingMetadata"],c);const u=l(e,["index"]);u!=null&&d(t,["index"],u);const p=l(e,["logprobsResult"]);p!=null&&d(t,["logprobsResult"],p);const f=l(e,["safetyRatings"]);if(f!=null){let m=f;Array.isArray(m)&&(m=m.map(g=>g)),d(t,["safetyRatings"],m)}const h=l(e,["urlContextMetadata"]);return h!=null&&d(t,["urlContextMetadata"],h),t}function kI(e){const t={},n=l(e,["citationSources"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(r=>r)),d(t,["citations"],o)}return t}function yv(e){const t={},n=l(e,["parts"]);if(n!=null){let r=n;Array.isArray(r)&&(r=r.map(i=>e_(i))),d(t,["parts"],r)}const o=l(e,["role"]);return o!=null&&d(t,["role"],o),t}function CI(e,t){const n={},o=l(e,["displayName"]);if(t!==void 0&&o!=null&&d(t,["batch","displayName"],o),l(e,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return n}function TI(e,t){const n={},o=l(e,["displayName"]);t!==void 0&&o!=null&&d(t,["displayName"],o);const r=l(e,["dest"]);return t!==void 0&&r!=null&&d(t,["outputConfig"],mI(pI(r))),n}function Fh(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["src"]);r!=null&&d(n,["batch","inputConfig"],yI(e,hv(e,r)));const i=l(t,["config"]);return i!=null&&CI(i,n),n}function EI(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["model"],K(e,o));const r=l(t,["src"]);r!=null&&d(n,["inputConfig"],vI(hv(e,r)));const i=l(t,["config"]);return i!=null&&TI(i,n),n}function II(e,t){const n={},o=l(e,["displayName"]);return t!==void 0&&o!=null&&d(t,["batch","displayName"],o),n}function _I(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["src"]);r!=null&&d(n,["batch","inputConfig"],jI(e,r));const i=l(t,["config"]);return i!=null&&II(i,n),n}function AI(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Ko(e,o)),n}function PI(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Ko(e,o)),n}function RI(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["name"]);o!=null&&d(t,["name"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);return i!=null&&d(t,["error"],i),t}function MI(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["name"]);o!=null&&d(t,["name"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);return i!=null&&d(t,["error"],i),t}function $I(e,t){const n={},o=l(t,["contents"]);if(o!=null){let i=du(e,o);Array.isArray(i)&&(i=i.map(s=>s)),d(n,["requests[]","request","content"],i)}const r=l(t,["config"]);return r!=null&&(d(n,["_self"],NI(r,n)),PE(n,{"requests[].*":"requests[].request.*"})),n}function NI(e,t){const n={},o=l(e,["taskType"]);t!==void 0&&o!=null&&d(t,["requests[]","taskType"],o);const r=l(e,["title"]);t!==void 0&&r!=null&&d(t,["requests[]","title"],r);const i=l(e,["outputDimensionality"]);if(t!==void 0&&i!=null&&d(t,["requests[]","outputDimensionality"],i),l(e,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(l(e,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return n}function jI(e,t){const n={},o=l(t,["fileName"]);o!=null&&d(n,["file_name"],o);const r=l(t,["inlinedRequests"]);return r!=null&&d(n,["requests"],$I(e,r)),n}function LI(e){const t={};if(l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(e,["fileUri"]);n!=null&&d(t,["fileUri"],n);const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function DI(e){const t={},n=l(e,["id"]);n!=null&&d(t,["id"],n);const o=l(e,["args"]);o!=null&&d(t,["args"],o);const r=l(e,["name"]);if(r!=null&&d(t,["name"],r),l(e,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(e,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function BI(e){const t={},n=l(e,["allowedFunctionNames"]);n!=null&&d(t,["allowedFunctionNames"],n);const o=l(e,["mode"]);if(o!=null&&d(t,["mode"],o),l(e,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function UI(e,t,n){const o={},r=l(t,["systemInstruction"]);n!==void 0&&r!=null&&d(n,["systemInstruction"],yv(Ne(r)));const i=l(t,["temperature"]);i!=null&&d(o,["temperature"],i);const s=l(t,["topP"]);s!=null&&d(o,["topP"],s);const c=l(t,["topK"]);c!=null&&d(o,["topK"],c);const u=l(t,["candidateCount"]);u!=null&&d(o,["candidateCount"],u);const p=l(t,["maxOutputTokens"]);p!=null&&d(o,["maxOutputTokens"],p);const f=l(t,["stopSequences"]);f!=null&&d(o,["stopSequences"],f);const h=l(t,["responseLogprobs"]);h!=null&&d(o,["responseLogprobs"],h);const m=l(t,["logprobs"]);m!=null&&d(o,["logprobs"],m);const g=l(t,["presencePenalty"]);g!=null&&d(o,["presencePenalty"],g);const S=l(t,["frequencyPenalty"]);S!=null&&d(o,["frequencyPenalty"],S);const C=l(t,["seed"]);C!=null&&d(o,["seed"],C);const k=l(t,["responseMimeType"]);k!=null&&d(o,["responseMimeType"],k);const w=l(t,["responseSchema"]);w!=null&&d(o,["responseSchema"],uu(w));const x=l(t,["responseJsonSchema"]);if(x!=null&&d(o,["responseJsonSchema"],x),l(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(l(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const y=l(t,["safetySettings"]);if(n!==void 0&&y!=null){let N=y;Array.isArray(N)&&(N=N.map(U=>t_(U))),d(n,["safetySettings"],N)}const b=l(t,["tools"]);if(n!==void 0&&b!=null){let N=Yo(b);Array.isArray(N)&&(N=N.map(U=>o_(Jo(U)))),d(n,["tools"],N)}const T=l(t,["toolConfig"]);if(n!==void 0&&T!=null&&d(n,["toolConfig"],n_(T)),l(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const A=l(t,["cachedContent"]);n!==void 0&&A!=null&&d(n,["cachedContent"],Kt(e,A));const I=l(t,["responseModalities"]);I!=null&&d(o,["responseModalities"],I);const _=l(t,["mediaResolution"]);_!=null&&d(o,["mediaResolution"],_);const P=l(t,["speechConfig"]);if(P!=null&&d(o,["speechConfig"],pu(P)),l(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const R=l(t,["thinkingConfig"]);R!=null&&d(o,["thinkingConfig"],R);const B=l(t,["imageConfig"]);B!=null&&d(o,["imageConfig"],WI(B));const j=l(t,["enableEnhancedCivicAnswers"]);return j!=null&&d(o,["enableEnhancedCivicAnswers"],j),o}function FI(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["candidates"]);if(o!=null){let u=o;Array.isArray(u)&&(u=u.map(p=>bI(p))),d(t,["candidates"],u)}const r=l(e,["modelVersion"]);r!=null&&d(t,["modelVersion"],r);const i=l(e,["promptFeedback"]);i!=null&&d(t,["promptFeedback"],i);const s=l(e,["responseId"]);s!=null&&d(t,["responseId"],s);const c=l(e,["usageMetadata"]);return c!=null&&d(t,["usageMetadata"],c),t}function VI(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Ko(e,o)),n}function zI(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Ko(e,o)),n}function GI(e){const t={};if(l(e,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const n=l(e,["enableWidget"]);return n!=null&&d(t,["enableWidget"],n),t}function HI(e){const t={};if(l(e,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(e,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const n=l(e,["timeRangeFilter"]);return n!=null&&d(t,["timeRangeFilter"],n),t}function WI(e){const t={},n=l(e,["aspectRatio"]);n!=null&&d(t,["aspectRatio"],n);const o=l(e,["imageSize"]);if(o!=null&&d(t,["imageSize"],o),l(e,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(l(e,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(l(e,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function qI(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["request","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let c=ct(r);Array.isArray(c)&&(c=c.map(u=>yv(u))),d(n,["request","contents"],c)}const i=l(t,["metadata"]);i!=null&&d(n,["metadata"],i);const s=l(t,["config"]);return s!=null&&d(n,["request","generationConfig"],UI(e,s,l(n,["request"],{}))),n}function OI(e){const t={},n=l(e,["response"]);n!=null&&d(t,["response"],FI(n));const o=l(e,["error"]);return o!=null&&d(t,["error"],o),t}function JI(e,t){const n={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);if(t!==void 0&&r!=null&&d(t,["_query","pageToken"],r),l(e,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return n}function YI(e,t){const n={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);t!==void 0&&r!=null&&d(t,["_query","pageToken"],r);const i=l(e,["filter"]);return t!==void 0&&i!=null&&d(t,["_query","filter"],i),n}function KI(e){const t={},n=l(e,["config"]);return n!=null&&JI(n,t),t}function QI(e){const t={},n=l(e,["config"]);return n!=null&&YI(n,t),t}function XI(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["operations"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>ts(s))),d(t,["batchJobs"],i)}return t}function ZI(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["batchPredictionJobs"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>Bc(s))),d(t,["batchJobs"],i)}return t}function e_(e){const t={},n=l(e,["mediaResolution"]);n!=null&&d(t,["mediaResolution"],n);const o=l(e,["codeExecutionResult"]);o!=null&&d(t,["codeExecutionResult"],o);const r=l(e,["executableCode"]);r!=null&&d(t,["executableCode"],r);const i=l(e,["fileData"]);i!=null&&d(t,["fileData"],LI(i));const s=l(e,["functionCall"]);s!=null&&d(t,["functionCall"],DI(s));const c=l(e,["functionResponse"]);c!=null&&d(t,["functionResponse"],c);const u=l(e,["inlineData"]);u!=null&&d(t,["inlineData"],wI(u));const p=l(e,["text"]);p!=null&&d(t,["text"],p);const f=l(e,["thought"]);f!=null&&d(t,["thought"],f);const h=l(e,["thoughtSignature"]);h!=null&&d(t,["thoughtSignature"],h);const m=l(e,["videoMetadata"]);return m!=null&&d(t,["videoMetadata"],m),t}function t_(e){const t={},n=l(e,["category"]);if(n!=null&&d(t,["category"],n),l(e,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const o=l(e,["threshold"]);return o!=null&&d(t,["threshold"],o),t}function n_(e){const t={},n=l(e,["retrievalConfig"]);n!=null&&d(t,["retrievalConfig"],n);const o=l(e,["functionCallingConfig"]);return o!=null&&d(t,["functionCallingConfig"],BI(o)),t}function o_(e){const t={};if(l(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const n=l(e,["computerUse"]);n!=null&&d(t,["computerUse"],n);const o=l(e,["fileSearch"]);o!=null&&d(t,["fileSearch"],o);const r=l(e,["codeExecution"]);if(r!=null&&d(t,["codeExecution"],r),l(e,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const i=l(e,["functionDeclarations"]);if(i!=null){let f=i;Array.isArray(f)&&(f=f.map(h=>h)),d(t,["functionDeclarations"],f)}const s=l(e,["googleMaps"]);s!=null&&d(t,["googleMaps"],GI(s));const c=l(e,["googleSearch"]);c!=null&&d(t,["googleSearch"],HI(c));const u=l(e,["googleSearchRetrieval"]);u!=null&&d(t,["googleSearchRetrieval"],u);const p=l(e,["urlContext"]);return p!=null&&d(t,["urlContext"],p),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var qt;(function(e){e.PAGED_ITEM_BATCH_JOBS="batchJobs",e.PAGED_ITEM_MODELS="models",e.PAGED_ITEM_TUNING_JOBS="tuningJobs",e.PAGED_ITEM_FILES="files",e.PAGED_ITEM_CACHED_CONTENTS="cachedContents",e.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",e.PAGED_ITEM_DOCUMENTS="documents"})(qt||(qt={}));class Zn{constructor(t,n,o,r){this.pageInternal=[],this.paramsInternal={},this.requestInternal=n,this.init(t,o,r)}init(t,n,o){var r,i;this.nameInternal=t,this.pageInternal=n[this.nameInternal]||[],this.sdkHttpResponseInternal=n==null?void 0:n.sdkHttpResponse,this.idxInternal=0;let s={config:{}};!o||Object.keys(o).length===0?s={config:{}}:typeof o=="object"?s=Object.assign({},o):s=o,s.config&&(s.config.pageToken=n.nextPageToken),this.paramsInternal=s,this.pageInternalSize=(i=(r=s.config)===null||r===void 0?void 0:r.pageSize)!==null&&i!==void 0?i:this.pageInternal.length}initNextPage(t){this.init(this.nameInternal,t,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(t){return this.pageInternal[t]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const t=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:t,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const t=await this.requestInternal(this.params);return this.initNextPage(t),this.page}hasNextPage(){var t;return((t=this.params.config)===null||t===void 0?void 0:t.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class r_ extends Yt{constructor(t){super(),this.apiClient=t,this.list=async(n={})=>new Zn(qt.PAGED_ITEM_BATCH_JOBS,o=>this.listInternal(o),await this.listInternal(n),n),this.create=async n=>(this.apiClient.isVertexAI()&&(n.config=this.formatDestination(n.src,n.config)),this.createInternal(n)),this.createEmbeddings=async n=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(n)}}createInlinedGenerateContentRequest(t){const n=Fh(this.apiClient,t),o=n._url,r=L("{model}:batchGenerateContent",o),c=n.batch.inputConfig.requests,u=c.requests,p=[];for(const f of u){const h=Object.assign({},f);if(h.systemInstruction){const m=h.systemInstruction;delete h.systemInstruction;const g=h.request;g.systemInstruction=m,h.request=g}p.push(h)}return c.requests=p,delete n.config,delete n._url,delete n._query,{path:r,body:n}}getGcsUri(t){if(typeof t=="string")return t.startsWith("gs://")?t:void 0;if(!Array.isArray(t)&&t.gcsUri&&t.gcsUri.length>0)return t.gcsUri[0]}getBigqueryUri(t){if(typeof t=="string")return t.startsWith("bq://")?t:void 0;if(!Array.isArray(t))return t.bigqueryUri}formatDestination(t,n){const o=n?Object.assign({},n):{},r=Date.now().toString();if(o.displayName||(o.displayName=`genaiBatchJob_${r}`),o.dest===void 0){const i=this.getGcsUri(t),s=this.getBigqueryUri(t);if(i)i.endsWith(".jsonl")?o.dest=`${i.slice(0,-6)}/dest`:o.dest=`${i}_dest_${r}`;else if(s)o.dest=`${s}_dest_${r}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return o}async createInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=EI(this.apiClient,t);return c=L("batchPredictionJobs",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>Bc(f))}else{const p=Fh(this.apiClient,t);return c=L("{model}:batchGenerateContent",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>ts(f))}}async createEmbeddingsInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=_I(this.apiClient,t);return i=L("{model}:asyncBatchEmbedContent",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>ts(u))}}async get(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=zI(this.apiClient,t);return c=L("batchPredictionJobs/{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>Bc(f))}else{const p=VI(this.apiClient,t);return c=L("batches/{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>ts(f))}}async cancel(t){var n,o,r,i;let s="",c={};if(this.apiClient.isVertexAI()){const u=SI(this.apiClient,t);s=L("batchPredictionJobs/{name}:cancel",u._url),c=u._query,delete u._url,delete u._query,await this.apiClient.request({path:s,queryParams:c,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal})}else{const u=xI(this.apiClient,t);s=L("batches/{name}:cancel",u._url),c=u._query,delete u._url,delete u._query,await this.apiClient.request({path:s,queryParams:c,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal})}}async listInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=QI(t);return c=L("batchPredictionJobs",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=ZI(f),m=new Lh;return Object.assign(m,h),m})}else{const p=KI(t);return c=L("batches",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=XI(f),m=new Lh;return Object.assign(m,h),m})}}async delete(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=PI(this.apiClient,t);return c=L("batchPredictionJobs/{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"DELETE",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>MI(f))}else{const p=AI(this.apiClient,t);return c=L("batches/{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>RI(f))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function i_(e){const t={},n=l(e,["data"]);if(n!=null&&d(t,["data"],n),l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function Vh(e){const t={},n=l(e,["parts"]);if(n!=null){let r=n;Array.isArray(r)&&(r=r.map(i=>__(i))),d(t,["parts"],r)}const o=l(e,["role"]);return o!=null&&d(t,["role"],o),t}function s_(e,t){const n={},o=l(e,["ttl"]);t!==void 0&&o!=null&&d(t,["ttl"],o);const r=l(e,["expireTime"]);t!==void 0&&r!=null&&d(t,["expireTime"],r);const i=l(e,["displayName"]);t!==void 0&&i!=null&&d(t,["displayName"],i);const s=l(e,["contents"]);if(t!==void 0&&s!=null){let f=ct(s);Array.isArray(f)&&(f=f.map(h=>Vh(h))),d(t,["contents"],f)}const c=l(e,["systemInstruction"]);t!==void 0&&c!=null&&d(t,["systemInstruction"],Vh(Ne(c)));const u=l(e,["tools"]);if(t!==void 0&&u!=null){let f=u;Array.isArray(f)&&(f=f.map(h=>P_(h))),d(t,["tools"],f)}const p=l(e,["toolConfig"]);if(t!==void 0&&p!=null&&d(t,["toolConfig"],A_(p)),l(e,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return n}function l_(e,t){const n={},o=l(e,["ttl"]);t!==void 0&&o!=null&&d(t,["ttl"],o);const r=l(e,["expireTime"]);t!==void 0&&r!=null&&d(t,["expireTime"],r);const i=l(e,["displayName"]);t!==void 0&&i!=null&&d(t,["displayName"],i);const s=l(e,["contents"]);if(t!==void 0&&s!=null){let h=ct(s);Array.isArray(h)&&(h=h.map(m=>m)),d(t,["contents"],h)}const c=l(e,["systemInstruction"]);t!==void 0&&c!=null&&d(t,["systemInstruction"],Ne(c));const u=l(e,["tools"]);if(t!==void 0&&u!=null){let h=u;Array.isArray(h)&&(h=h.map(m=>R_(m))),d(t,["tools"],h)}const p=l(e,["toolConfig"]);t!==void 0&&p!=null&&d(t,["toolConfig"],p);const f=l(e,["kmsKeyName"]);return t!==void 0&&f!=null&&d(t,["encryption_spec","kmsKeyName"],f),n}function a_(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["model"],iv(e,o));const r=l(t,["config"]);return r!=null&&s_(r,n),n}function c_(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["model"],iv(e,o));const r=l(t,["config"]);return r!=null&&l_(r,n),n}function d_(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Kt(e,o)),n}function u_(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Kt(e,o)),n}function p_(e){const t={},n=l(e,["sdkHttpResponse"]);return n!=null&&d(t,["sdkHttpResponse"],n),t}function f_(e){const t={},n=l(e,["sdkHttpResponse"]);return n!=null&&d(t,["sdkHttpResponse"],n),t}function h_(e){const t={};if(l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(e,["fileUri"]);n!=null&&d(t,["fileUri"],n);const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function m_(e){const t={},n=l(e,["id"]);n!=null&&d(t,["id"],n);const o=l(e,["args"]);o!=null&&d(t,["args"],o);const r=l(e,["name"]);if(r!=null&&d(t,["name"],r),l(e,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(e,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function g_(e){const t={},n=l(e,["allowedFunctionNames"]);n!=null&&d(t,["allowedFunctionNames"],n);const o=l(e,["mode"]);if(o!=null&&d(t,["mode"],o),l(e,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function y_(e){const t={},n=l(e,["description"]);n!=null&&d(t,["description"],n);const o=l(e,["name"]);o!=null&&d(t,["name"],o);const r=l(e,["parameters"]);r!=null&&d(t,["parameters"],r);const i=l(e,["parametersJsonSchema"]);i!=null&&d(t,["parametersJsonSchema"],i);const s=l(e,["response"]);s!=null&&d(t,["response"],s);const c=l(e,["responseJsonSchema"]);if(c!=null&&d(t,["responseJsonSchema"],c),l(e,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return t}function v_(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Kt(e,o)),n}function w_(e,t){const n={},o=l(t,["name"]);return o!=null&&d(n,["_url","name"],Kt(e,o)),n}function x_(e){const t={};if(l(e,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const n=l(e,["enableWidget"]);return n!=null&&d(t,["enableWidget"],n),t}function S_(e){const t={};if(l(e,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(e,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const n=l(e,["timeRangeFilter"]);return n!=null&&d(t,["timeRangeFilter"],n),t}function b_(e,t){const n={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);return t!==void 0&&r!=null&&d(t,["_query","pageToken"],r),n}function k_(e,t){const n={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);return t!==void 0&&r!=null&&d(t,["_query","pageToken"],r),n}function C_(e){const t={},n=l(e,["config"]);return n!=null&&b_(n,t),t}function T_(e){const t={},n=l(e,["config"]);return n!=null&&k_(n,t),t}function E_(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["cachedContents"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["cachedContents"],i)}return t}function I_(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["cachedContents"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["cachedContents"],i)}return t}function __(e){const t={},n=l(e,["mediaResolution"]);n!=null&&d(t,["mediaResolution"],n);const o=l(e,["codeExecutionResult"]);o!=null&&d(t,["codeExecutionResult"],o);const r=l(e,["executableCode"]);r!=null&&d(t,["executableCode"],r);const i=l(e,["fileData"]);i!=null&&d(t,["fileData"],h_(i));const s=l(e,["functionCall"]);s!=null&&d(t,["functionCall"],m_(s));const c=l(e,["functionResponse"]);c!=null&&d(t,["functionResponse"],c);const u=l(e,["inlineData"]);u!=null&&d(t,["inlineData"],i_(u));const p=l(e,["text"]);p!=null&&d(t,["text"],p);const f=l(e,["thought"]);f!=null&&d(t,["thought"],f);const h=l(e,["thoughtSignature"]);h!=null&&d(t,["thoughtSignature"],h);const m=l(e,["videoMetadata"]);return m!=null&&d(t,["videoMetadata"],m),t}function A_(e){const t={},n=l(e,["retrievalConfig"]);n!=null&&d(t,["retrievalConfig"],n);const o=l(e,["functionCallingConfig"]);return o!=null&&d(t,["functionCallingConfig"],g_(o)),t}function P_(e){const t={};if(l(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const n=l(e,["computerUse"]);n!=null&&d(t,["computerUse"],n);const o=l(e,["fileSearch"]);o!=null&&d(t,["fileSearch"],o);const r=l(e,["codeExecution"]);if(r!=null&&d(t,["codeExecution"],r),l(e,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const i=l(e,["functionDeclarations"]);if(i!=null){let f=i;Array.isArray(f)&&(f=f.map(h=>h)),d(t,["functionDeclarations"],f)}const s=l(e,["googleMaps"]);s!=null&&d(t,["googleMaps"],x_(s));const c=l(e,["googleSearch"]);c!=null&&d(t,["googleSearch"],S_(c));const u=l(e,["googleSearchRetrieval"]);u!=null&&d(t,["googleSearchRetrieval"],u);const p=l(e,["urlContext"]);return p!=null&&d(t,["urlContext"],p),t}function R_(e){const t={},n=l(e,["retrieval"]);n!=null&&d(t,["retrieval"],n);const o=l(e,["computerUse"]);if(o!=null&&d(t,["computerUse"],o),l(e,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const r=l(e,["codeExecution"]);r!=null&&d(t,["codeExecution"],r);const i=l(e,["enterpriseWebSearch"]);i!=null&&d(t,["enterpriseWebSearch"],i);const s=l(e,["functionDeclarations"]);if(s!=null){let h=s;Array.isArray(h)&&(h=h.map(m=>y_(m))),d(t,["functionDeclarations"],h)}const c=l(e,["googleMaps"]);c!=null&&d(t,["googleMaps"],c);const u=l(e,["googleSearch"]);u!=null&&d(t,["googleSearch"],u);const p=l(e,["googleSearchRetrieval"]);p!=null&&d(t,["googleSearchRetrieval"],p);const f=l(e,["urlContext"]);return f!=null&&d(t,["urlContext"],f),t}function M_(e,t){const n={},o=l(e,["ttl"]);t!==void 0&&o!=null&&d(t,["ttl"],o);const r=l(e,["expireTime"]);return t!==void 0&&r!=null&&d(t,["expireTime"],r),n}function $_(e,t){const n={},o=l(e,["ttl"]);t!==void 0&&o!=null&&d(t,["ttl"],o);const r=l(e,["expireTime"]);return t!==void 0&&r!=null&&d(t,["expireTime"],r),n}function N_(e,t){const n={},o=l(t,["name"]);o!=null&&d(n,["_url","name"],Kt(e,o));const r=l(t,["config"]);return r!=null&&M_(r,n),n}function j_(e,t){const n={},o=l(t,["name"]);o!=null&&d(n,["_url","name"],Kt(e,o));const r=l(t,["config"]);return r!=null&&$_(r,n),n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class L_ extends Yt{constructor(t){super(),this.apiClient=t,this.list=async(n={})=>new Zn(qt.PAGED_ITEM_CACHED_CONTENTS,o=>this.listInternal(o),await this.listInternal(n),n)}async create(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=c_(this.apiClient,t);return c=L("cachedContents",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const p=a_(this.apiClient,t);return c=L("cachedContents",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async get(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=w_(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const p=v_(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async delete(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=u_(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"DELETE",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=f_(f),m=new Nh;return Object.assign(m,h),m})}else{const p=d_(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=p_(f),m=new Nh;return Object.assign(m,h),m})}}async update(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=j_(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"PATCH",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const p=N_(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async listInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=T_(t);return c=L("cachedContents",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=I_(f),m=new jh;return Object.assign(m,h),m})}else{const p=C_(t);return c=L("cachedContents",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=E_(f),m=new jh;return Object.assign(m,h),m})}}}function zs(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}function zh(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function H(e){return this instanceof H?(this.v=e,this):new H(e)}function Ct(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),r,i=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(g){return function(S){return Promise.resolve(S).then(g,h)}}function c(g,S){o[g]&&(r[g]=function(C){return new Promise(function(k,w){i.push([g,C,k,w])>1||u(g,C)})},S&&(r[g]=S(r[g])))}function u(g,S){try{p(o[g](S))}catch(C){m(i[0][3],C)}}function p(g){g.value instanceof H?Promise.resolve(g.value.v).then(f,h):m(i[0][2],g)}function f(g){u("next",g)}function h(g){u("throw",g)}function m(g,S){g(S),i.shift(),i.length&&u(i[0][0],i[0][1])}}function Tt(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof zh=="function"?zh(e):e[Symbol.iterator](),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(i){n[i]=e[i]&&function(s){return new Promise(function(c,u){s=e[i](s),r(c,u,s.done,s.value)})}}function r(i,s,c,u){Promise.resolve(u).then(function(p){i({value:p,done:c})},s)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function D_(e){var t;if(e.candidates==null||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;return n===void 0?!1:vv(n)}function vv(e){if(e.parts===void 0||e.parts.length===0)return!1;for(const t of e.parts)if(t===void 0||Object.keys(t).length===0)return!1;return!0}function B_(e){if(e.length!==0){for(const t of e)if(t.role!=="user"&&t.role!=="model")throw new Error(`Role must be user or model, but got ${t.role}.`)}}function Gh(e){if(e===void 0||e.length===0)return[];const t=[],n=e.length;let o=0;for(;o<n;)if(e[o].role==="user")t.push(e[o]),o++;else{const r=[];let i=!0;for(;o<n&&e[o].role==="model";)r.push(e[o]),i&&!vv(e[o])&&(i=!1),o++;i?t.push(...r):t.pop()}return t}class U_{constructor(t,n){this.modelsModule=t,this.apiClient=n}create(t){return new F_(this.apiClient,this.modelsModule,t.model,t.config,structuredClone(t.history))}}class F_{constructor(t,n,o,r={},i=[]){this.apiClient=t,this.modelsModule=n,this.model=o,this.config=r,this.history=i,this.sendPromise=Promise.resolve(),B_(i)}async sendMessage(t){var n;await this.sendPromise;const o=Ne(t.message),r=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(o),config:(n=t.config)!==null&&n!==void 0?n:this.config});return this.sendPromise=(async()=>{var i,s,c;const u=await r,p=(s=(i=u.candidates)===null||i===void 0?void 0:i[0])===null||s===void 0?void 0:s.content,f=u.automaticFunctionCallingHistory,h=this.getHistory(!0).length;let m=[];f!=null&&(m=(c=f.slice(h))!==null&&c!==void 0?c:[]);const g=p?[p]:[];this.recordHistory(o,g,m)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),r}async sendMessageStream(t){var n;await this.sendPromise;const o=Ne(t.message),r=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(o),config:(n=t.config)!==null&&n!==void 0?n:this.config});this.sendPromise=r.then(()=>{}).catch(()=>{});const i=await r;return this.processStreamResponse(i,o)}getHistory(t=!1){const n=t?Gh(this.history):this.history;return structuredClone(n)}processStreamResponse(t,n){return Ct(this,arguments,function*(){var r,i,s,c,u,p;const f=[];try{for(var h=!0,m=Tt(t),g;g=yield H(m.next()),r=g.done,!r;h=!0){c=g.value,h=!1;const S=c;if(D_(S)){const C=(p=(u=S.candidates)===null||u===void 0?void 0:u[0])===null||p===void 0?void 0:p.content;C!==void 0&&f.push(C)}yield yield H(S)}}catch(S){i={error:S}}finally{try{!h&&!r&&(s=m.return)&&(yield H(s.call(m)))}finally{if(i)throw i.error}}this.recordHistory(n,f)})}recordHistory(t,n,o){let r=[];n.length>0&&n.every(i=>i.role!==void 0)?r=n:r.push({role:"model",parts:[]}),o&&o.length>0?this.history.push(...Gh(o)):this.history.push(t),this.history.push(...r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wl extends Error{constructor(t){super(t.message),this.name="ApiError",this.status=t.status,Object.setPrototypeOf(this,wl.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function V_(e){const t={},n=l(e,["file"]);return n!=null&&d(t,["file"],n),t}function z_(e){const t={},n=l(e,["sdkHttpResponse"]);return n!=null&&d(t,["sdkHttpResponse"],n),t}function G_(e){const t={},n=l(e,["name"]);return n!=null&&d(t,["_url","file"],uv(n)),t}function H_(e){const t={},n=l(e,["sdkHttpResponse"]);return n!=null&&d(t,["sdkHttpResponse"],n),t}function W_(e){const t={},n=l(e,["name"]);return n!=null&&d(t,["_url","file"],uv(n)),t}function q_(e,t){const n={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);return t!==void 0&&r!=null&&d(t,["_query","pageToken"],r),n}function O_(e){const t={},n=l(e,["config"]);return n!=null&&q_(n,t),t}function J_(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["files"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["files"],i)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Y_ extends Yt{constructor(t){super(),this.apiClient=t,this.list=async(n={})=>new Zn(qt.PAGED_ITEM_FILES,o=>this.listInternal(o),await this.listInternal(n),n)}async upload(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(t.file,t.config).then(n=>n)}async download(t){await this.apiClient.downloadFile(t)}async listInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=O_(t);return i=L("files",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json().then(p=>{const f=p;return f.sdkHttpResponse={headers:u.headers},f})),r.then(u=>{const p=J_(u),f=new ZE;return Object.assign(f,p),f})}}async createInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=V_(t);return i=L("upload/v1beta/files",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>{const p=z_(u),f=new eI;return Object.assign(f,p),f})}}async get(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=W_(t);return i=L("files/{file}",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>u)}}async delete(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=G_(t);return i=L("files/{file}",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json().then(p=>{const f=p;return f.sdkHttpResponse={headers:u.headers},f})),r.then(u=>{const p=H_(u),f=new tI;return Object.assign(f,p),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ns(e){const t={},n=l(e,["data"]);if(n!=null&&d(t,["data"],n),l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function K_(e){const t={},n=l(e,["parts"]);if(n!=null){let r=n;Array.isArray(r)&&(r=r.map(i=>pA(i))),d(t,["parts"],r)}const o=l(e,["role"]);return o!=null&&d(t,["role"],o),t}function Q_(e){const t={};if(l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(e,["fileUri"]);n!=null&&d(t,["fileUri"],n);const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function X_(e){const t={},n=l(e,["id"]);n!=null&&d(t,["id"],n);const o=l(e,["args"]);o!=null&&d(t,["args"],o);const r=l(e,["name"]);if(r!=null&&d(t,["name"],r),l(e,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(e,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function Z_(e){const t={},n=l(e,["description"]);n!=null&&d(t,["description"],n);const o=l(e,["name"]);o!=null&&d(t,["name"],o);const r=l(e,["parameters"]);r!=null&&d(t,["parameters"],r);const i=l(e,["parametersJsonSchema"]);i!=null&&d(t,["parametersJsonSchema"],i);const s=l(e,["response"]);s!=null&&d(t,["response"],s);const c=l(e,["responseJsonSchema"]);if(c!=null&&d(t,["responseJsonSchema"],c),l(e,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return t}function eA(e){const t={},n=l(e,["modelSelectionConfig"]);n!=null&&d(t,["modelConfig"],n);const o=l(e,["responseJsonSchema"]);o!=null&&d(t,["responseJsonSchema"],o);const r=l(e,["audioTimestamp"]);r!=null&&d(t,["audioTimestamp"],r);const i=l(e,["candidateCount"]);i!=null&&d(t,["candidateCount"],i);const s=l(e,["enableAffectiveDialog"]);s!=null&&d(t,["enableAffectiveDialog"],s);const c=l(e,["frequencyPenalty"]);c!=null&&d(t,["frequencyPenalty"],c);const u=l(e,["logprobs"]);u!=null&&d(t,["logprobs"],u);const p=l(e,["maxOutputTokens"]);p!=null&&d(t,["maxOutputTokens"],p);const f=l(e,["mediaResolution"]);f!=null&&d(t,["mediaResolution"],f);const h=l(e,["presencePenalty"]);h!=null&&d(t,["presencePenalty"],h);const m=l(e,["responseLogprobs"]);m!=null&&d(t,["responseLogprobs"],m);const g=l(e,["responseMimeType"]);g!=null&&d(t,["responseMimeType"],g);const S=l(e,["responseModalities"]);S!=null&&d(t,["responseModalities"],S);const C=l(e,["responseSchema"]);C!=null&&d(t,["responseSchema"],C);const k=l(e,["routingConfig"]);k!=null&&d(t,["routingConfig"],k);const w=l(e,["seed"]);w!=null&&d(t,["seed"],w);const x=l(e,["speechConfig"]);x!=null&&d(t,["speechConfig"],x);const y=l(e,["stopSequences"]);y!=null&&d(t,["stopSequences"],y);const b=l(e,["temperature"]);b!=null&&d(t,["temperature"],b);const T=l(e,["thinkingConfig"]);T!=null&&d(t,["thinkingConfig"],T);const A=l(e,["topK"]);A!=null&&d(t,["topK"],A);const I=l(e,["topP"]);if(I!=null&&d(t,["topP"],I),l(e,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function tA(e){const t={};if(l(e,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const n=l(e,["enableWidget"]);return n!=null&&d(t,["enableWidget"],n),t}function nA(e){const t={};if(l(e,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(e,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const n=l(e,["timeRangeFilter"]);return n!=null&&d(t,["timeRangeFilter"],n),t}function oA(e,t){const n={},o=l(e,["generationConfig"]);t!==void 0&&o!=null&&d(t,["setup","generationConfig"],o);const r=l(e,["responseModalities"]);t!==void 0&&r!=null&&d(t,["setup","generationConfig","responseModalities"],r);const i=l(e,["temperature"]);t!==void 0&&i!=null&&d(t,["setup","generationConfig","temperature"],i);const s=l(e,["topP"]);t!==void 0&&s!=null&&d(t,["setup","generationConfig","topP"],s);const c=l(e,["topK"]);t!==void 0&&c!=null&&d(t,["setup","generationConfig","topK"],c);const u=l(e,["maxOutputTokens"]);t!==void 0&&u!=null&&d(t,["setup","generationConfig","maxOutputTokens"],u);const p=l(e,["mediaResolution"]);t!==void 0&&p!=null&&d(t,["setup","generationConfig","mediaResolution"],p);const f=l(e,["seed"]);t!==void 0&&f!=null&&d(t,["setup","generationConfig","seed"],f);const h=l(e,["speechConfig"]);t!==void 0&&h!=null&&d(t,["setup","generationConfig","speechConfig"],fu(h));const m=l(e,["thinkingConfig"]);t!==void 0&&m!=null&&d(t,["setup","generationConfig","thinkingConfig"],m);const g=l(e,["enableAffectiveDialog"]);t!==void 0&&g!=null&&d(t,["setup","generationConfig","enableAffectiveDialog"],g);const S=l(e,["systemInstruction"]);t!==void 0&&S!=null&&d(t,["setup","systemInstruction"],K_(Ne(S)));const C=l(e,["tools"]);if(t!==void 0&&C!=null){let A=Yo(C);Array.isArray(A)&&(A=A.map(I=>hA(Jo(I)))),d(t,["setup","tools"],A)}const k=l(e,["sessionResumption"]);t!==void 0&&k!=null&&d(t,["setup","sessionResumption"],fA(k));const w=l(e,["inputAudioTranscription"]);t!==void 0&&w!=null&&d(t,["setup","inputAudioTranscription"],w);const x=l(e,["outputAudioTranscription"]);t!==void 0&&x!=null&&d(t,["setup","outputAudioTranscription"],x);const y=l(e,["realtimeInputConfig"]);t!==void 0&&y!=null&&d(t,["setup","realtimeInputConfig"],y);const b=l(e,["contextWindowCompression"]);t!==void 0&&b!=null&&d(t,["setup","contextWindowCompression"],b);const T=l(e,["proactivity"]);if(t!==void 0&&T!=null&&d(t,["setup","proactivity"],T),l(e,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return n}function rA(e,t){const n={},o=l(e,["generationConfig"]);t!==void 0&&o!=null&&d(t,["setup","generationConfig"],eA(o));const r=l(e,["responseModalities"]);t!==void 0&&r!=null&&d(t,["setup","generationConfig","responseModalities"],r);const i=l(e,["temperature"]);t!==void 0&&i!=null&&d(t,["setup","generationConfig","temperature"],i);const s=l(e,["topP"]);t!==void 0&&s!=null&&d(t,["setup","generationConfig","topP"],s);const c=l(e,["topK"]);t!==void 0&&c!=null&&d(t,["setup","generationConfig","topK"],c);const u=l(e,["maxOutputTokens"]);t!==void 0&&u!=null&&d(t,["setup","generationConfig","maxOutputTokens"],u);const p=l(e,["mediaResolution"]);t!==void 0&&p!=null&&d(t,["setup","generationConfig","mediaResolution"],p);const f=l(e,["seed"]);t!==void 0&&f!=null&&d(t,["setup","generationConfig","seed"],f);const h=l(e,["speechConfig"]);t!==void 0&&h!=null&&d(t,["setup","generationConfig","speechConfig"],fu(h));const m=l(e,["thinkingConfig"]);t!==void 0&&m!=null&&d(t,["setup","generationConfig","thinkingConfig"],m);const g=l(e,["enableAffectiveDialog"]);t!==void 0&&g!=null&&d(t,["setup","generationConfig","enableAffectiveDialog"],g);const S=l(e,["systemInstruction"]);t!==void 0&&S!=null&&d(t,["setup","systemInstruction"],Ne(S));const C=l(e,["tools"]);if(t!==void 0&&C!=null){let I=Yo(C);Array.isArray(I)&&(I=I.map(_=>mA(Jo(_)))),d(t,["setup","tools"],I)}const k=l(e,["sessionResumption"]);t!==void 0&&k!=null&&d(t,["setup","sessionResumption"],k);const w=l(e,["inputAudioTranscription"]);t!==void 0&&w!=null&&d(t,["setup","inputAudioTranscription"],w);const x=l(e,["outputAudioTranscription"]);t!==void 0&&x!=null&&d(t,["setup","outputAudioTranscription"],x);const y=l(e,["realtimeInputConfig"]);t!==void 0&&y!=null&&d(t,["setup","realtimeInputConfig"],y);const b=l(e,["contextWindowCompression"]);t!==void 0&&b!=null&&d(t,["setup","contextWindowCompression"],b);const T=l(e,["proactivity"]);t!==void 0&&T!=null&&d(t,["setup","proactivity"],T);const A=l(e,["explicitVadSignal"]);return t!==void 0&&A!=null&&d(t,["setup","explicitVadSignal"],A),n}function iA(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["setup","model"],K(e,o));const r=l(t,["config"]);return r!=null&&d(n,["config"],oA(r,n)),n}function sA(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["setup","model"],K(e,o));const r=l(t,["config"]);return r!=null&&d(n,["config"],rA(r,n)),n}function lA(e){const t={},n=l(e,["musicGenerationConfig"]);return n!=null&&d(t,["musicGenerationConfig"],n),t}function aA(e){const t={},n=l(e,["weightedPrompts"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(r=>r)),d(t,["weightedPrompts"],o)}return t}function cA(e){const t={},n=l(e,["media"]);if(n!=null){let p=sv(n);Array.isArray(p)&&(p=p.map(f=>ns(f))),d(t,["mediaChunks"],p)}const o=l(e,["audio"]);o!=null&&d(t,["audio"],ns(av(o)));const r=l(e,["audioStreamEnd"]);r!=null&&d(t,["audioStreamEnd"],r);const i=l(e,["video"]);i!=null&&d(t,["video"],ns(lv(i)));const s=l(e,["text"]);s!=null&&d(t,["text"],s);const c=l(e,["activityStart"]);c!=null&&d(t,["activityStart"],c);const u=l(e,["activityEnd"]);return u!=null&&d(t,["activityEnd"],u),t}function dA(e){const t={},n=l(e,["media"]);if(n!=null){let p=sv(n);Array.isArray(p)&&(p=p.map(f=>f)),d(t,["mediaChunks"],p)}const o=l(e,["audio"]);o!=null&&d(t,["audio"],av(o));const r=l(e,["audioStreamEnd"]);r!=null&&d(t,["audioStreamEnd"],r);const i=l(e,["video"]);i!=null&&d(t,["video"],lv(i));const s=l(e,["text"]);s!=null&&d(t,["text"],s);const c=l(e,["activityStart"]);c!=null&&d(t,["activityStart"],c);const u=l(e,["activityEnd"]);return u!=null&&d(t,["activityEnd"],u),t}function uA(e){const t={},n=l(e,["setupComplete"]);n!=null&&d(t,["setupComplete"],n);const o=l(e,["serverContent"]);o!=null&&d(t,["serverContent"],o);const r=l(e,["toolCall"]);r!=null&&d(t,["toolCall"],r);const i=l(e,["toolCallCancellation"]);i!=null&&d(t,["toolCallCancellation"],i);const s=l(e,["usageMetadata"]);s!=null&&d(t,["usageMetadata"],gA(s));const c=l(e,["goAway"]);c!=null&&d(t,["goAway"],c);const u=l(e,["sessionResumptionUpdate"]);u!=null&&d(t,["sessionResumptionUpdate"],u);const p=l(e,["voiceActivityDetectionSignal"]);p!=null&&d(t,["voiceActivityDetectionSignal"],p);const f=l(e,["voiceActivity"]);return f!=null&&d(t,["voiceActivity"],yA(f)),t}function pA(e){const t={},n=l(e,["mediaResolution"]);n!=null&&d(t,["mediaResolution"],n);const o=l(e,["codeExecutionResult"]);o!=null&&d(t,["codeExecutionResult"],o);const r=l(e,["executableCode"]);r!=null&&d(t,["executableCode"],r);const i=l(e,["fileData"]);i!=null&&d(t,["fileData"],Q_(i));const s=l(e,["functionCall"]);s!=null&&d(t,["functionCall"],X_(s));const c=l(e,["functionResponse"]);c!=null&&d(t,["functionResponse"],c);const u=l(e,["inlineData"]);u!=null&&d(t,["inlineData"],ns(u));const p=l(e,["text"]);p!=null&&d(t,["text"],p);const f=l(e,["thought"]);f!=null&&d(t,["thought"],f);const h=l(e,["thoughtSignature"]);h!=null&&d(t,["thoughtSignature"],h);const m=l(e,["videoMetadata"]);return m!=null&&d(t,["videoMetadata"],m),t}function fA(e){const t={},n=l(e,["handle"]);if(n!=null&&d(t,["handle"],n),l(e,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function hA(e){const t={};if(l(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const n=l(e,["computerUse"]);n!=null&&d(t,["computerUse"],n);const o=l(e,["fileSearch"]);o!=null&&d(t,["fileSearch"],o);const r=l(e,["codeExecution"]);if(r!=null&&d(t,["codeExecution"],r),l(e,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const i=l(e,["functionDeclarations"]);if(i!=null){let f=i;Array.isArray(f)&&(f=f.map(h=>h)),d(t,["functionDeclarations"],f)}const s=l(e,["googleMaps"]);s!=null&&d(t,["googleMaps"],tA(s));const c=l(e,["googleSearch"]);c!=null&&d(t,["googleSearch"],nA(c));const u=l(e,["googleSearchRetrieval"]);u!=null&&d(t,["googleSearchRetrieval"],u);const p=l(e,["urlContext"]);return p!=null&&d(t,["urlContext"],p),t}function mA(e){const t={},n=l(e,["retrieval"]);n!=null&&d(t,["retrieval"],n);const o=l(e,["computerUse"]);if(o!=null&&d(t,["computerUse"],o),l(e,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const r=l(e,["codeExecution"]);r!=null&&d(t,["codeExecution"],r);const i=l(e,["enterpriseWebSearch"]);i!=null&&d(t,["enterpriseWebSearch"],i);const s=l(e,["functionDeclarations"]);if(s!=null){let h=s;Array.isArray(h)&&(h=h.map(m=>Z_(m))),d(t,["functionDeclarations"],h)}const c=l(e,["googleMaps"]);c!=null&&d(t,["googleMaps"],c);const u=l(e,["googleSearch"]);u!=null&&d(t,["googleSearch"],u);const p=l(e,["googleSearchRetrieval"]);p!=null&&d(t,["googleSearchRetrieval"],p);const f=l(e,["urlContext"]);return f!=null&&d(t,["urlContext"],f),t}function gA(e){const t={},n=l(e,["promptTokenCount"]);n!=null&&d(t,["promptTokenCount"],n);const o=l(e,["cachedContentTokenCount"]);o!=null&&d(t,["cachedContentTokenCount"],o);const r=l(e,["candidatesTokenCount"]);r!=null&&d(t,["responseTokenCount"],r);const i=l(e,["toolUsePromptTokenCount"]);i!=null&&d(t,["toolUsePromptTokenCount"],i);const s=l(e,["thoughtsTokenCount"]);s!=null&&d(t,["thoughtsTokenCount"],s);const c=l(e,["totalTokenCount"]);c!=null&&d(t,["totalTokenCount"],c);const u=l(e,["promptTokensDetails"]);if(u!=null){let g=u;Array.isArray(g)&&(g=g.map(S=>S)),d(t,["promptTokensDetails"],g)}const p=l(e,["cacheTokensDetails"]);if(p!=null){let g=p;Array.isArray(g)&&(g=g.map(S=>S)),d(t,["cacheTokensDetails"],g)}const f=l(e,["candidatesTokensDetails"]);if(f!=null){let g=f;Array.isArray(g)&&(g=g.map(S=>S)),d(t,["responseTokensDetails"],g)}const h=l(e,["toolUsePromptTokensDetails"]);if(h!=null){let g=h;Array.isArray(g)&&(g=g.map(S=>S)),d(t,["toolUsePromptTokensDetails"],g)}const m=l(e,["trafficType"]);return m!=null&&d(t,["trafficType"],m),t}function yA(e){const t={},n=l(e,["type"]);return n!=null&&d(t,["voiceActivityType"],n),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vA(e){const t={},n=l(e,["data"]);if(n!=null&&d(t,["data"],n),l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function wA(e){const t={},n=l(e,["content"]);n!=null&&d(t,["content"],n);const o=l(e,["citationMetadata"]);o!=null&&d(t,["citationMetadata"],xA(o));const r=l(e,["tokenCount"]);r!=null&&d(t,["tokenCount"],r);const i=l(e,["finishReason"]);i!=null&&d(t,["finishReason"],i);const s=l(e,["avgLogprobs"]);s!=null&&d(t,["avgLogprobs"],s);const c=l(e,["groundingMetadata"]);c!=null&&d(t,["groundingMetadata"],c);const u=l(e,["index"]);u!=null&&d(t,["index"],u);const p=l(e,["logprobsResult"]);p!=null&&d(t,["logprobsResult"],p);const f=l(e,["safetyRatings"]);if(f!=null){let m=f;Array.isArray(m)&&(m=m.map(g=>g)),d(t,["safetyRatings"],m)}const h=l(e,["urlContextMetadata"]);return h!=null&&d(t,["urlContextMetadata"],h),t}function xA(e){const t={},n=l(e,["citationSources"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(r=>r)),d(t,["citations"],o)}return t}function SA(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let i=ct(r);Array.isArray(i)&&(i=i.map(s=>s)),d(n,["contents"],i)}return n}function bA(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["tokensInfo"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(i=>i)),d(t,["tokensInfo"],r)}return t}function kA(e){const t={},n=l(e,["values"]);n!=null&&d(t,["values"],n);const o=l(e,["statistics"]);return o!=null&&d(t,["statistics"],CA(o)),t}function CA(e){const t={},n=l(e,["truncated"]);n!=null&&d(t,["truncated"],n);const o=l(e,["token_count"]);return o!=null&&d(t,["tokenCount"],o),t}function xl(e){const t={},n=l(e,["parts"]);if(n!=null){let r=n;Array.isArray(r)&&(r=r.map(i=>$2(i))),d(t,["parts"],r)}const o=l(e,["role"]);return o!=null&&d(t,["role"],o),t}function TA(e){const t={},n=l(e,["controlType"]);n!=null&&d(t,["controlType"],n);const o=l(e,["enableControlImageComputation"]);return o!=null&&d(t,["computeControl"],o),t}function EA(e){const t={};if(l(e,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(l(e,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(l(e,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return t}function IA(e,t){const n={},o=l(e,["systemInstruction"]);t!==void 0&&o!=null&&d(t,["systemInstruction"],Ne(o));const r=l(e,["tools"]);if(t!==void 0&&r!=null){let s=r;Array.isArray(s)&&(s=s.map(c=>bv(c))),d(t,["tools"],s)}const i=l(e,["generationConfig"]);return t!==void 0&&i!=null&&d(t,["generationConfig"],v2(i)),n}function _A(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let s=ct(r);Array.isArray(s)&&(s=s.map(c=>xl(c))),d(n,["contents"],s)}const i=l(t,["config"]);return i!=null&&EA(i),n}function AA(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let s=ct(r);Array.isArray(s)&&(s=s.map(c=>c)),d(n,["contents"],s)}const i=l(t,["config"]);return i!=null&&IA(i,n),n}function PA(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["totalTokens"]);o!=null&&d(t,["totalTokens"],o);const r=l(e,["cachedContentTokenCount"]);return r!=null&&d(t,["cachedContentTokenCount"],r),t}function RA(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["totalTokens"]);return o!=null&&d(t,["totalTokens"],o),t}function MA(e,t){const n={},o=l(t,["model"]);return o!=null&&d(n,["_url","name"],K(e,o)),n}function $A(e,t){const n={},o=l(t,["model"]);return o!=null&&d(n,["_url","name"],K(e,o)),n}function NA(e){const t={},n=l(e,["sdkHttpResponse"]);return n!=null&&d(t,["sdkHttpResponse"],n),t}function jA(e){const t={},n=l(e,["sdkHttpResponse"]);return n!=null&&d(t,["sdkHttpResponse"],n),t}function LA(e,t){const n={},o=l(e,["outputGcsUri"]);t!==void 0&&o!=null&&d(t,["parameters","storageUri"],o);const r=l(e,["negativePrompt"]);t!==void 0&&r!=null&&d(t,["parameters","negativePrompt"],r);const i=l(e,["numberOfImages"]);t!==void 0&&i!=null&&d(t,["parameters","sampleCount"],i);const s=l(e,["aspectRatio"]);t!==void 0&&s!=null&&d(t,["parameters","aspectRatio"],s);const c=l(e,["guidanceScale"]);t!==void 0&&c!=null&&d(t,["parameters","guidanceScale"],c);const u=l(e,["seed"]);t!==void 0&&u!=null&&d(t,["parameters","seed"],u);const p=l(e,["safetyFilterLevel"]);t!==void 0&&p!=null&&d(t,["parameters","safetySetting"],p);const f=l(e,["personGeneration"]);t!==void 0&&f!=null&&d(t,["parameters","personGeneration"],f);const h=l(e,["includeSafetyAttributes"]);t!==void 0&&h!=null&&d(t,["parameters","includeSafetyAttributes"],h);const m=l(e,["includeRaiReason"]);t!==void 0&&m!=null&&d(t,["parameters","includeRaiReason"],m);const g=l(e,["language"]);t!==void 0&&g!=null&&d(t,["parameters","language"],g);const S=l(e,["outputMimeType"]);t!==void 0&&S!=null&&d(t,["parameters","outputOptions","mimeType"],S);const C=l(e,["outputCompressionQuality"]);t!==void 0&&C!=null&&d(t,["parameters","outputOptions","compressionQuality"],C);const k=l(e,["addWatermark"]);t!==void 0&&k!=null&&d(t,["parameters","addWatermark"],k);const w=l(e,["labels"]);t!==void 0&&w!=null&&d(t,["labels"],w);const x=l(e,["editMode"]);t!==void 0&&x!=null&&d(t,["parameters","editMode"],x);const y=l(e,["baseSteps"]);return t!==void 0&&y!=null&&d(t,["parameters","editConfig","baseSteps"],y),n}function DA(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["prompt"]);r!=null&&d(n,["instances[0]","prompt"],r);const i=l(t,["referenceImages"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(u=>U2(u))),d(n,["instances[0]","referenceImages"],c)}const s=l(t,["config"]);return s!=null&&LA(s,n),n}function BA(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(i=>Sl(i))),d(t,["generatedImages"],r)}return t}function UA(e,t){const n={},o=l(e,["taskType"]);t!==void 0&&o!=null&&d(t,["requests[]","taskType"],o);const r=l(e,["title"]);t!==void 0&&r!=null&&d(t,["requests[]","title"],r);const i=l(e,["outputDimensionality"]);if(t!==void 0&&i!=null&&d(t,["requests[]","outputDimensionality"],i),l(e,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(l(e,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return n}function FA(e,t){const n={},o=l(e,["taskType"]);t!==void 0&&o!=null&&d(t,["instances[]","task_type"],o);const r=l(e,["title"]);t!==void 0&&r!=null&&d(t,["instances[]","title"],r);const i=l(e,["outputDimensionality"]);t!==void 0&&i!=null&&d(t,["parameters","outputDimensionality"],i);const s=l(e,["mimeType"]);t!==void 0&&s!=null&&d(t,["instances[]","mimeType"],s);const c=l(e,["autoTruncate"]);return t!==void 0&&c!=null&&d(t,["parameters","autoTruncate"],c),n}function VA(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let c=du(e,r);Array.isArray(c)&&(c=c.map(u=>u)),d(n,["requests[]","content"],c)}const i=l(t,["config"]);i!=null&&UA(i,n);const s=l(t,["model"]);return s!==void 0&&d(n,["requests[]","model"],K(e,s)),n}function zA(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let s=du(e,r);Array.isArray(s)&&(s=s.map(c=>c)),d(n,["instances[]","content"],s)}const i=l(t,["config"]);return i!=null&&FA(i,n),n}function GA(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["embeddings"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["embeddings"],i)}const r=l(e,["metadata"]);return r!=null&&d(t,["metadata"],r),t}function HA(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["predictions[]","embeddings"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(s=>kA(s))),d(t,["embeddings"],i)}const r=l(e,["metadata"]);return r!=null&&d(t,["metadata"],r),t}function WA(e){const t={},n=l(e,["endpoint"]);n!=null&&d(t,["name"],n);const o=l(e,["deployedModelId"]);return o!=null&&d(t,["deployedModelId"],o),t}function qA(e){const t={};if(l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(e,["fileUri"]);n!=null&&d(t,["fileUri"],n);const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function OA(e){const t={},n=l(e,["id"]);n!=null&&d(t,["id"],n);const o=l(e,["args"]);o!=null&&d(t,["args"],o);const r=l(e,["name"]);if(r!=null&&d(t,["name"],r),l(e,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(e,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function JA(e){const t={},n=l(e,["allowedFunctionNames"]);n!=null&&d(t,["allowedFunctionNames"],n);const o=l(e,["mode"]);if(o!=null&&d(t,["mode"],o),l(e,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function YA(e){const t={},n=l(e,["description"]);n!=null&&d(t,["description"],n);const o=l(e,["name"]);o!=null&&d(t,["name"],o);const r=l(e,["parameters"]);r!=null&&d(t,["parameters"],r);const i=l(e,["parametersJsonSchema"]);i!=null&&d(t,["parametersJsonSchema"],i);const s=l(e,["response"]);s!=null&&d(t,["response"],s);const c=l(e,["responseJsonSchema"]);if(c!=null&&d(t,["responseJsonSchema"],c),l(e,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return t}function KA(e,t,n){const o={},r=l(t,["systemInstruction"]);n!==void 0&&r!=null&&d(n,["systemInstruction"],xl(Ne(r)));const i=l(t,["temperature"]);i!=null&&d(o,["temperature"],i);const s=l(t,["topP"]);s!=null&&d(o,["topP"],s);const c=l(t,["topK"]);c!=null&&d(o,["topK"],c);const u=l(t,["candidateCount"]);u!=null&&d(o,["candidateCount"],u);const p=l(t,["maxOutputTokens"]);p!=null&&d(o,["maxOutputTokens"],p);const f=l(t,["stopSequences"]);f!=null&&d(o,["stopSequences"],f);const h=l(t,["responseLogprobs"]);h!=null&&d(o,["responseLogprobs"],h);const m=l(t,["logprobs"]);m!=null&&d(o,["logprobs"],m);const g=l(t,["presencePenalty"]);g!=null&&d(o,["presencePenalty"],g);const S=l(t,["frequencyPenalty"]);S!=null&&d(o,["frequencyPenalty"],S);const C=l(t,["seed"]);C!=null&&d(o,["seed"],C);const k=l(t,["responseMimeType"]);k!=null&&d(o,["responseMimeType"],k);const w=l(t,["responseSchema"]);w!=null&&d(o,["responseSchema"],uu(w));const x=l(t,["responseJsonSchema"]);if(x!=null&&d(o,["responseJsonSchema"],x),l(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(l(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const y=l(t,["safetySettings"]);if(n!==void 0&&y!=null){let N=y;Array.isArray(N)&&(N=N.map(U=>F2(U))),d(n,["safetySettings"],N)}const b=l(t,["tools"]);if(n!==void 0&&b!=null){let N=Yo(b);Array.isArray(N)&&(N=N.map(U=>O2(Jo(U)))),d(n,["tools"],N)}const T=l(t,["toolConfig"]);if(n!==void 0&&T!=null&&d(n,["toolConfig"],q2(T)),l(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const A=l(t,["cachedContent"]);n!==void 0&&A!=null&&d(n,["cachedContent"],Kt(e,A));const I=l(t,["responseModalities"]);I!=null&&d(o,["responseModalities"],I);const _=l(t,["mediaResolution"]);_!=null&&d(o,["mediaResolution"],_);const P=l(t,["speechConfig"]);if(P!=null&&d(o,["speechConfig"],pu(P)),l(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const R=l(t,["thinkingConfig"]);R!=null&&d(o,["thinkingConfig"],R);const B=l(t,["imageConfig"]);B!=null&&d(o,["imageConfig"],k2(B));const j=l(t,["enableEnhancedCivicAnswers"]);return j!=null&&d(o,["enableEnhancedCivicAnswers"],j),o}function QA(e,t,n){const o={},r=l(t,["systemInstruction"]);n!==void 0&&r!=null&&d(n,["systemInstruction"],Ne(r));const i=l(t,["temperature"]);i!=null&&d(o,["temperature"],i);const s=l(t,["topP"]);s!=null&&d(o,["topP"],s);const c=l(t,["topK"]);c!=null&&d(o,["topK"],c);const u=l(t,["candidateCount"]);u!=null&&d(o,["candidateCount"],u);const p=l(t,["maxOutputTokens"]);p!=null&&d(o,["maxOutputTokens"],p);const f=l(t,["stopSequences"]);f!=null&&d(o,["stopSequences"],f);const h=l(t,["responseLogprobs"]);h!=null&&d(o,["responseLogprobs"],h);const m=l(t,["logprobs"]);m!=null&&d(o,["logprobs"],m);const g=l(t,["presencePenalty"]);g!=null&&d(o,["presencePenalty"],g);const S=l(t,["frequencyPenalty"]);S!=null&&d(o,["frequencyPenalty"],S);const C=l(t,["seed"]);C!=null&&d(o,["seed"],C);const k=l(t,["responseMimeType"]);k!=null&&d(o,["responseMimeType"],k);const w=l(t,["responseSchema"]);w!=null&&d(o,["responseSchema"],uu(w));const x=l(t,["responseJsonSchema"]);x!=null&&d(o,["responseJsonSchema"],x);const y=l(t,["routingConfig"]);y!=null&&d(o,["routingConfig"],y);const b=l(t,["modelSelectionConfig"]);b!=null&&d(o,["modelConfig"],b);const T=l(t,["safetySettings"]);if(n!==void 0&&T!=null){let F=T;Array.isArray(F)&&(F=F.map(G=>G)),d(n,["safetySettings"],F)}const A=l(t,["tools"]);if(n!==void 0&&A!=null){let F=Yo(A);Array.isArray(F)&&(F=F.map(G=>bv(Jo(G)))),d(n,["tools"],F)}const I=l(t,["toolConfig"]);n!==void 0&&I!=null&&d(n,["toolConfig"],I);const _=l(t,["labels"]);n!==void 0&&_!=null&&d(n,["labels"],_);const P=l(t,["cachedContent"]);n!==void 0&&P!=null&&d(n,["cachedContent"],Kt(e,P));const R=l(t,["responseModalities"]);R!=null&&d(o,["responseModalities"],R);const B=l(t,["mediaResolution"]);B!=null&&d(o,["mediaResolution"],B);const j=l(t,["speechConfig"]);j!=null&&d(o,["speechConfig"],pu(j));const N=l(t,["audioTimestamp"]);N!=null&&d(o,["audioTimestamp"],N);const U=l(t,["thinkingConfig"]);U!=null&&d(o,["thinkingConfig"],U);const W=l(t,["imageConfig"]);if(W!=null&&d(o,["imageConfig"],C2(W)),l(t,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return o}function Hh(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let s=ct(r);Array.isArray(s)&&(s=s.map(c=>xl(c))),d(n,["contents"],s)}const i=l(t,["config"]);return i!=null&&d(n,["generationConfig"],KA(e,i,n)),n}function Wh(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["contents"]);if(r!=null){let s=ct(r);Array.isArray(s)&&(s=s.map(c=>c)),d(n,["contents"],s)}const i=l(t,["config"]);return i!=null&&d(n,["generationConfig"],QA(e,i,n)),n}function qh(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["candidates"]);if(o!=null){let u=o;Array.isArray(u)&&(u=u.map(p=>wA(p))),d(t,["candidates"],u)}const r=l(e,["modelVersion"]);r!=null&&d(t,["modelVersion"],r);const i=l(e,["promptFeedback"]);i!=null&&d(t,["promptFeedback"],i);const s=l(e,["responseId"]);s!=null&&d(t,["responseId"],s);const c=l(e,["usageMetadata"]);return c!=null&&d(t,["usageMetadata"],c),t}function Oh(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["candidates"]);if(o!=null){let p=o;Array.isArray(p)&&(p=p.map(f=>f)),d(t,["candidates"],p)}const r=l(e,["createTime"]);r!=null&&d(t,["createTime"],r);const i=l(e,["modelVersion"]);i!=null&&d(t,["modelVersion"],i);const s=l(e,["promptFeedback"]);s!=null&&d(t,["promptFeedback"],s);const c=l(e,["responseId"]);c!=null&&d(t,["responseId"],c);const u=l(e,["usageMetadata"]);return u!=null&&d(t,["usageMetadata"],u),t}function XA(e,t){const n={};if(l(e,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(l(e,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const o=l(e,["numberOfImages"]);t!==void 0&&o!=null&&d(t,["parameters","sampleCount"],o);const r=l(e,["aspectRatio"]);t!==void 0&&r!=null&&d(t,["parameters","aspectRatio"],r);const i=l(e,["guidanceScale"]);if(t!==void 0&&i!=null&&d(t,["parameters","guidanceScale"],i),l(e,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const s=l(e,["safetyFilterLevel"]);t!==void 0&&s!=null&&d(t,["parameters","safetySetting"],s);const c=l(e,["personGeneration"]);t!==void 0&&c!=null&&d(t,["parameters","personGeneration"],c);const u=l(e,["includeSafetyAttributes"]);t!==void 0&&u!=null&&d(t,["parameters","includeSafetyAttributes"],u);const p=l(e,["includeRaiReason"]);t!==void 0&&p!=null&&d(t,["parameters","includeRaiReason"],p);const f=l(e,["language"]);t!==void 0&&f!=null&&d(t,["parameters","language"],f);const h=l(e,["outputMimeType"]);t!==void 0&&h!=null&&d(t,["parameters","outputOptions","mimeType"],h);const m=l(e,["outputCompressionQuality"]);if(t!==void 0&&m!=null&&d(t,["parameters","outputOptions","compressionQuality"],m),l(e,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(l(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const g=l(e,["imageSize"]);if(t!==void 0&&g!=null&&d(t,["parameters","sampleImageSize"],g),l(e,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return n}function ZA(e,t){const n={},o=l(e,["outputGcsUri"]);t!==void 0&&o!=null&&d(t,["parameters","storageUri"],o);const r=l(e,["negativePrompt"]);t!==void 0&&r!=null&&d(t,["parameters","negativePrompt"],r);const i=l(e,["numberOfImages"]);t!==void 0&&i!=null&&d(t,["parameters","sampleCount"],i);const s=l(e,["aspectRatio"]);t!==void 0&&s!=null&&d(t,["parameters","aspectRatio"],s);const c=l(e,["guidanceScale"]);t!==void 0&&c!=null&&d(t,["parameters","guidanceScale"],c);const u=l(e,["seed"]);t!==void 0&&u!=null&&d(t,["parameters","seed"],u);const p=l(e,["safetyFilterLevel"]);t!==void 0&&p!=null&&d(t,["parameters","safetySetting"],p);const f=l(e,["personGeneration"]);t!==void 0&&f!=null&&d(t,["parameters","personGeneration"],f);const h=l(e,["includeSafetyAttributes"]);t!==void 0&&h!=null&&d(t,["parameters","includeSafetyAttributes"],h);const m=l(e,["includeRaiReason"]);t!==void 0&&m!=null&&d(t,["parameters","includeRaiReason"],m);const g=l(e,["language"]);t!==void 0&&g!=null&&d(t,["parameters","language"],g);const S=l(e,["outputMimeType"]);t!==void 0&&S!=null&&d(t,["parameters","outputOptions","mimeType"],S);const C=l(e,["outputCompressionQuality"]);t!==void 0&&C!=null&&d(t,["parameters","outputOptions","compressionQuality"],C);const k=l(e,["addWatermark"]);t!==void 0&&k!=null&&d(t,["parameters","addWatermark"],k);const w=l(e,["labels"]);t!==void 0&&w!=null&&d(t,["labels"],w);const x=l(e,["imageSize"]);t!==void 0&&x!=null&&d(t,["parameters","sampleImageSize"],x);const y=l(e,["enhancePrompt"]);return t!==void 0&&y!=null&&d(t,["parameters","enhancePrompt"],y),n}function e2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["prompt"]);r!=null&&d(n,["instances[0]","prompt"],r);const i=l(t,["config"]);return i!=null&&XA(i,n),n}function t2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["prompt"]);r!=null&&d(n,["instances[0]","prompt"],r);const i=l(t,["config"]);return i!=null&&ZA(i,n),n}function n2(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["predictions"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(s=>h2(s))),d(t,["generatedImages"],i)}const r=l(e,["positivePromptSafetyAttributes"]);return r!=null&&d(t,["positivePromptSafetyAttributes"],xv(r)),t}function o2(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["predictions"]);if(o!=null){let i=o;Array.isArray(i)&&(i=i.map(s=>Sl(s))),d(t,["generatedImages"],i)}const r=l(e,["positivePromptSafetyAttributes"]);return r!=null&&d(t,["positivePromptSafetyAttributes"],Sv(r)),t}function r2(e,t){const n={},o=l(e,["numberOfVideos"]);if(t!==void 0&&o!=null&&d(t,["parameters","sampleCount"],o),l(e,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(l(e,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const r=l(e,["durationSeconds"]);if(t!==void 0&&r!=null&&d(t,["parameters","durationSeconds"],r),l(e,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const i=l(e,["aspectRatio"]);t!==void 0&&i!=null&&d(t,["parameters","aspectRatio"],i);const s=l(e,["resolution"]);t!==void 0&&s!=null&&d(t,["parameters","resolution"],s);const c=l(e,["personGeneration"]);if(t!==void 0&&c!=null&&d(t,["parameters","personGeneration"],c),l(e,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const u=l(e,["negativePrompt"]);t!==void 0&&u!=null&&d(t,["parameters","negativePrompt"],u);const p=l(e,["enhancePrompt"]);if(t!==void 0&&p!=null&&d(t,["parameters","enhancePrompt"],p),l(e,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const f=l(e,["lastFrame"]);t!==void 0&&f!=null&&d(t,["instances[0]","lastFrame"],bl(f));const h=l(e,["referenceImages"]);if(t!==void 0&&h!=null){let m=h;Array.isArray(m)&&(m=m.map(g=>sP(g))),d(t,["instances[0]","referenceImages"],m)}if(l(e,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(l(e,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return n}function i2(e,t){const n={},o=l(e,["numberOfVideos"]);t!==void 0&&o!=null&&d(t,["parameters","sampleCount"],o);const r=l(e,["outputGcsUri"]);t!==void 0&&r!=null&&d(t,["parameters","storageUri"],r);const i=l(e,["fps"]);t!==void 0&&i!=null&&d(t,["parameters","fps"],i);const s=l(e,["durationSeconds"]);t!==void 0&&s!=null&&d(t,["parameters","durationSeconds"],s);const c=l(e,["seed"]);t!==void 0&&c!=null&&d(t,["parameters","seed"],c);const u=l(e,["aspectRatio"]);t!==void 0&&u!=null&&d(t,["parameters","aspectRatio"],u);const p=l(e,["resolution"]);t!==void 0&&p!=null&&d(t,["parameters","resolution"],p);const f=l(e,["personGeneration"]);t!==void 0&&f!=null&&d(t,["parameters","personGeneration"],f);const h=l(e,["pubsubTopic"]);t!==void 0&&h!=null&&d(t,["parameters","pubsubTopic"],h);const m=l(e,["negativePrompt"]);t!==void 0&&m!=null&&d(t,["parameters","negativePrompt"],m);const g=l(e,["enhancePrompt"]);t!==void 0&&g!=null&&d(t,["parameters","enhancePrompt"],g);const S=l(e,["generateAudio"]);t!==void 0&&S!=null&&d(t,["parameters","generateAudio"],S);const C=l(e,["lastFrame"]);t!==void 0&&C!=null&&d(t,["instances[0]","lastFrame"],It(C));const k=l(e,["referenceImages"]);if(t!==void 0&&k!=null){let y=k;Array.isArray(y)&&(y=y.map(b=>lP(b))),d(t,["instances[0]","referenceImages"],y)}const w=l(e,["mask"]);t!==void 0&&w!=null&&d(t,["instances[0]","mask"],iP(w));const x=l(e,["compressionQuality"]);return t!==void 0&&x!=null&&d(t,["parameters","compressionQuality"],x),n}function s2(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata"]);o!=null&&d(t,["metadata"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["response","generateVideoResponse"]);return s!=null&&d(t,["response"],d2(s)),t}function l2(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata"]);o!=null&&d(t,["metadata"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["response"]);return s!=null&&d(t,["response"],u2(s)),t}function a2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["prompt"]);r!=null&&d(n,["instances[0]","prompt"],r);const i=l(t,["image"]);i!=null&&d(n,["instances[0]","image"],bl(i));const s=l(t,["video"]);s!=null&&d(n,["instances[0]","video"],kv(s));const c=l(t,["source"]);c!=null&&p2(c,n);const u=l(t,["config"]);return u!=null&&r2(u,n),n}function c2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["prompt"]);r!=null&&d(n,["instances[0]","prompt"],r);const i=l(t,["image"]);i!=null&&d(n,["instances[0]","image"],It(i));const s=l(t,["video"]);s!=null&&d(n,["instances[0]","video"],Cv(s));const c=l(t,["source"]);c!=null&&f2(c,n);const u=l(t,["config"]);return u!=null&&i2(u,n),n}function d2(e){const t={},n=l(e,["generatedSamples"]);if(n!=null){let i=n;Array.isArray(i)&&(i=i.map(s=>g2(s))),d(t,["generatedVideos"],i)}const o=l(e,["raiMediaFilteredCount"]);o!=null&&d(t,["raiMediaFilteredCount"],o);const r=l(e,["raiMediaFilteredReasons"]);return r!=null&&d(t,["raiMediaFilteredReasons"],r),t}function u2(e){const t={},n=l(e,["videos"]);if(n!=null){let i=n;Array.isArray(i)&&(i=i.map(s=>y2(s))),d(t,["generatedVideos"],i)}const o=l(e,["raiMediaFilteredCount"]);o!=null&&d(t,["raiMediaFilteredCount"],o);const r=l(e,["raiMediaFilteredReasons"]);return r!=null&&d(t,["raiMediaFilteredReasons"],r),t}function p2(e,t){const n={},o=l(e,["prompt"]);t!==void 0&&o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["image"]);t!==void 0&&r!=null&&d(t,["instances[0]","image"],bl(r));const i=l(e,["video"]);return t!==void 0&&i!=null&&d(t,["instances[0]","video"],kv(i)),n}function f2(e,t){const n={},o=l(e,["prompt"]);t!==void 0&&o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["image"]);t!==void 0&&r!=null&&d(t,["instances[0]","image"],It(r));const i=l(e,["video"]);return t!==void 0&&i!=null&&d(t,["instances[0]","video"],Cv(i)),n}function h2(e){const t={},n=l(e,["_self"]);n!=null&&d(t,["image"],T2(n));const o=l(e,["raiFilteredReason"]);o!=null&&d(t,["raiFilteredReason"],o);const r=l(e,["_self"]);return r!=null&&d(t,["safetyAttributes"],xv(r)),t}function Sl(e){const t={},n=l(e,["_self"]);n!=null&&d(t,["image"],wv(n));const o=l(e,["raiFilteredReason"]);o!=null&&d(t,["raiFilteredReason"],o);const r=l(e,["_self"]);r!=null&&d(t,["safetyAttributes"],Sv(r));const i=l(e,["prompt"]);return i!=null&&d(t,["enhancedPrompt"],i),t}function m2(e){const t={},n=l(e,["_self"]);n!=null&&d(t,["mask"],wv(n));const o=l(e,["labels"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(i=>i)),d(t,["labels"],r)}return t}function g2(e){const t={},n=l(e,["video"]);return n!=null&&d(t,["video"],oP(n)),t}function y2(e){const t={},n=l(e,["_self"]);return n!=null&&d(t,["video"],rP(n)),t}function v2(e){const t={},n=l(e,["modelSelectionConfig"]);n!=null&&d(t,["modelConfig"],n);const o=l(e,["responseJsonSchema"]);o!=null&&d(t,["responseJsonSchema"],o);const r=l(e,["audioTimestamp"]);r!=null&&d(t,["audioTimestamp"],r);const i=l(e,["candidateCount"]);i!=null&&d(t,["candidateCount"],i);const s=l(e,["enableAffectiveDialog"]);s!=null&&d(t,["enableAffectiveDialog"],s);const c=l(e,["frequencyPenalty"]);c!=null&&d(t,["frequencyPenalty"],c);const u=l(e,["logprobs"]);u!=null&&d(t,["logprobs"],u);const p=l(e,["maxOutputTokens"]);p!=null&&d(t,["maxOutputTokens"],p);const f=l(e,["mediaResolution"]);f!=null&&d(t,["mediaResolution"],f);const h=l(e,["presencePenalty"]);h!=null&&d(t,["presencePenalty"],h);const m=l(e,["responseLogprobs"]);m!=null&&d(t,["responseLogprobs"],m);const g=l(e,["responseMimeType"]);g!=null&&d(t,["responseMimeType"],g);const S=l(e,["responseModalities"]);S!=null&&d(t,["responseModalities"],S);const C=l(e,["responseSchema"]);C!=null&&d(t,["responseSchema"],C);const k=l(e,["routingConfig"]);k!=null&&d(t,["routingConfig"],k);const w=l(e,["seed"]);w!=null&&d(t,["seed"],w);const x=l(e,["speechConfig"]);x!=null&&d(t,["speechConfig"],x);const y=l(e,["stopSequences"]);y!=null&&d(t,["stopSequences"],y);const b=l(e,["temperature"]);b!=null&&d(t,["temperature"],b);const T=l(e,["thinkingConfig"]);T!=null&&d(t,["thinkingConfig"],T);const A=l(e,["topK"]);A!=null&&d(t,["topK"],A);const I=l(e,["topP"]);if(I!=null&&d(t,["topP"],I),l(e,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function w2(e,t){const n={},o=l(t,["model"]);return o!=null&&d(n,["_url","name"],K(e,o)),n}function x2(e,t){const n={},o=l(t,["model"]);return o!=null&&d(n,["_url","name"],K(e,o)),n}function S2(e){const t={};if(l(e,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const n=l(e,["enableWidget"]);return n!=null&&d(t,["enableWidget"],n),t}function b2(e){const t={};if(l(e,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(e,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const n=l(e,["timeRangeFilter"]);return n!=null&&d(t,["timeRangeFilter"],n),t}function k2(e){const t={},n=l(e,["aspectRatio"]);n!=null&&d(t,["aspectRatio"],n);const o=l(e,["imageSize"]);if(o!=null&&d(t,["imageSize"],o),l(e,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(l(e,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(l(e,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function C2(e){const t={},n=l(e,["aspectRatio"]);n!=null&&d(t,["aspectRatio"],n);const o=l(e,["imageSize"]);o!=null&&d(t,["imageSize"],o);const r=l(e,["personGeneration"]);r!=null&&d(t,["personGeneration"],r);const i=l(e,["outputMimeType"]);i!=null&&d(t,["imageOutputOptions","mimeType"],i);const s=l(e,["outputCompressionQuality"]);return s!=null&&d(t,["imageOutputOptions","compressionQuality"],s),t}function T2(e){const t={},n=l(e,["bytesBase64Encoded"]);n!=null&&d(t,["imageBytes"],En(n));const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function wv(e){const t={},n=l(e,["gcsUri"]);n!=null&&d(t,["gcsUri"],n);const o=l(e,["bytesBase64Encoded"]);o!=null&&d(t,["imageBytes"],En(o));const r=l(e,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}function bl(e){const t={};if(l(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const n=l(e,["imageBytes"]);n!=null&&d(t,["bytesBase64Encoded"],En(n));const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function It(e){const t={},n=l(e,["gcsUri"]);n!=null&&d(t,["gcsUri"],n);const o=l(e,["imageBytes"]);o!=null&&d(t,["bytesBase64Encoded"],En(o));const r=l(e,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}function E2(e,t,n){const o={},r=l(t,["pageSize"]);n!==void 0&&r!=null&&d(n,["_query","pageSize"],r);const i=l(t,["pageToken"]);n!==void 0&&i!=null&&d(n,["_query","pageToken"],i);const s=l(t,["filter"]);n!==void 0&&s!=null&&d(n,["_query","filter"],s);const c=l(t,["queryBase"]);return n!==void 0&&c!=null&&d(n,["_url","models_url"],pv(e,c)),o}function I2(e,t,n){const o={},r=l(t,["pageSize"]);n!==void 0&&r!=null&&d(n,["_query","pageSize"],r);const i=l(t,["pageToken"]);n!==void 0&&i!=null&&d(n,["_query","pageToken"],i);const s=l(t,["filter"]);n!==void 0&&s!=null&&d(n,["_query","filter"],s);const c=l(t,["queryBase"]);return n!==void 0&&c!=null&&d(n,["_url","models_url"],pv(e,c)),o}function _2(e,t){const n={},o=l(t,["config"]);return o!=null&&E2(e,o,n),n}function A2(e,t){const n={},o=l(t,["config"]);return o!=null&&I2(e,o,n),n}function P2(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["_self"]);if(r!=null){let i=fv(r);Array.isArray(i)&&(i=i.map(s=>Uc(s))),d(t,["models"],i)}return t}function R2(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["_self"]);if(r!=null){let i=fv(r);Array.isArray(i)&&(i=i.map(s=>Fc(s))),d(t,["models"],i)}return t}function M2(e){const t={},n=l(e,["maskMode"]);n!=null&&d(t,["maskMode"],n);const o=l(e,["segmentationClasses"]);o!=null&&d(t,["maskClasses"],o);const r=l(e,["maskDilation"]);return r!=null&&d(t,["dilation"],r),t}function Uc(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["displayName"]);o!=null&&d(t,["displayName"],o);const r=l(e,["description"]);r!=null&&d(t,["description"],r);const i=l(e,["version"]);i!=null&&d(t,["version"],i);const s=l(e,["_self"]);s!=null&&d(t,["tunedModelInfo"],J2(s));const c=l(e,["inputTokenLimit"]);c!=null&&d(t,["inputTokenLimit"],c);const u=l(e,["outputTokenLimit"]);u!=null&&d(t,["outputTokenLimit"],u);const p=l(e,["supportedGenerationMethods"]);p!=null&&d(t,["supportedActions"],p);const f=l(e,["temperature"]);f!=null&&d(t,["temperature"],f);const h=l(e,["maxTemperature"]);h!=null&&d(t,["maxTemperature"],h);const m=l(e,["topP"]);m!=null&&d(t,["topP"],m);const g=l(e,["topK"]);g!=null&&d(t,["topK"],g);const S=l(e,["thinking"]);return S!=null&&d(t,["thinking"],S),t}function Fc(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["displayName"]);o!=null&&d(t,["displayName"],o);const r=l(e,["description"]);r!=null&&d(t,["description"],r);const i=l(e,["versionId"]);i!=null&&d(t,["version"],i);const s=l(e,["deployedModels"]);if(s!=null){let h=s;Array.isArray(h)&&(h=h.map(m=>WA(m))),d(t,["endpoints"],h)}const c=l(e,["labels"]);c!=null&&d(t,["labels"],c);const u=l(e,["_self"]);u!=null&&d(t,["tunedModelInfo"],Y2(u));const p=l(e,["defaultCheckpointId"]);p!=null&&d(t,["defaultCheckpointId"],p);const f=l(e,["checkpoints"]);if(f!=null){let h=f;Array.isArray(h)&&(h=h.map(m=>m)),d(t,["checkpoints"],h)}return t}function $2(e){const t={},n=l(e,["mediaResolution"]);n!=null&&d(t,["mediaResolution"],n);const o=l(e,["codeExecutionResult"]);o!=null&&d(t,["codeExecutionResult"],o);const r=l(e,["executableCode"]);r!=null&&d(t,["executableCode"],r);const i=l(e,["fileData"]);i!=null&&d(t,["fileData"],qA(i));const s=l(e,["functionCall"]);s!=null&&d(t,["functionCall"],OA(s));const c=l(e,["functionResponse"]);c!=null&&d(t,["functionResponse"],c);const u=l(e,["inlineData"]);u!=null&&d(t,["inlineData"],vA(u));const p=l(e,["text"]);p!=null&&d(t,["text"],p);const f=l(e,["thought"]);f!=null&&d(t,["thought"],f);const h=l(e,["thoughtSignature"]);h!=null&&d(t,["thoughtSignature"],h);const m=l(e,["videoMetadata"]);return m!=null&&d(t,["videoMetadata"],m),t}function N2(e){const t={},n=l(e,["productImage"]);return n!=null&&d(t,["image"],It(n)),t}function j2(e,t){const n={},o=l(e,["numberOfImages"]);t!==void 0&&o!=null&&d(t,["parameters","sampleCount"],o);const r=l(e,["baseSteps"]);t!==void 0&&r!=null&&d(t,["parameters","baseSteps"],r);const i=l(e,["outputGcsUri"]);t!==void 0&&i!=null&&d(t,["parameters","storageUri"],i);const s=l(e,["seed"]);t!==void 0&&s!=null&&d(t,["parameters","seed"],s);const c=l(e,["safetyFilterLevel"]);t!==void 0&&c!=null&&d(t,["parameters","safetySetting"],c);const u=l(e,["personGeneration"]);t!==void 0&&u!=null&&d(t,["parameters","personGeneration"],u);const p=l(e,["addWatermark"]);t!==void 0&&p!=null&&d(t,["parameters","addWatermark"],p);const f=l(e,["outputMimeType"]);t!==void 0&&f!=null&&d(t,["parameters","outputOptions","mimeType"],f);const h=l(e,["outputCompressionQuality"]);t!==void 0&&h!=null&&d(t,["parameters","outputOptions","compressionQuality"],h);const m=l(e,["enhancePrompt"]);t!==void 0&&m!=null&&d(t,["parameters","enhancePrompt"],m);const g=l(e,["labels"]);return t!==void 0&&g!=null&&d(t,["labels"],g),n}function L2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["source"]);r!=null&&B2(r,n);const i=l(t,["config"]);return i!=null&&j2(i,n),n}function D2(e){const t={},n=l(e,["predictions"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(r=>Sl(r))),d(t,["generatedImages"],o)}return t}function B2(e,t){const n={},o=l(e,["prompt"]);t!==void 0&&o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["personImage"]);t!==void 0&&r!=null&&d(t,["instances[0]","personImage","image"],It(r));const i=l(e,["productImages"]);if(t!==void 0&&i!=null){let s=i;Array.isArray(s)&&(s=s.map(c=>N2(c))),d(t,["instances[0]","productImages"],s)}return n}function U2(e){const t={},n=l(e,["referenceImage"]);n!=null&&d(t,["referenceImage"],It(n));const o=l(e,["referenceId"]);o!=null&&d(t,["referenceId"],o);const r=l(e,["referenceType"]);r!=null&&d(t,["referenceType"],r);const i=l(e,["maskImageConfig"]);i!=null&&d(t,["maskImageConfig"],M2(i));const s=l(e,["controlImageConfig"]);s!=null&&d(t,["controlImageConfig"],TA(s));const c=l(e,["styleImageConfig"]);c!=null&&d(t,["styleImageConfig"],c);const u=l(e,["subjectImageConfig"]);return u!=null&&d(t,["subjectImageConfig"],u),t}function xv(e){const t={},n=l(e,["safetyAttributes","categories"]);n!=null&&d(t,["categories"],n);const o=l(e,["safetyAttributes","scores"]);o!=null&&d(t,["scores"],o);const r=l(e,["contentType"]);return r!=null&&d(t,["contentType"],r),t}function Sv(e){const t={},n=l(e,["safetyAttributes","categories"]);n!=null&&d(t,["categories"],n);const o=l(e,["safetyAttributes","scores"]);o!=null&&d(t,["scores"],o);const r=l(e,["contentType"]);return r!=null&&d(t,["contentType"],r),t}function F2(e){const t={},n=l(e,["category"]);if(n!=null&&d(t,["category"],n),l(e,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const o=l(e,["threshold"]);return o!=null&&d(t,["threshold"],o),t}function V2(e){const t={},n=l(e,["image"]);return n!=null&&d(t,["image"],It(n)),t}function z2(e,t){const n={},o=l(e,["mode"]);t!==void 0&&o!=null&&d(t,["parameters","mode"],o);const r=l(e,["maxPredictions"]);t!==void 0&&r!=null&&d(t,["parameters","maxPredictions"],r);const i=l(e,["confidenceThreshold"]);t!==void 0&&i!=null&&d(t,["parameters","confidenceThreshold"],i);const s=l(e,["maskDilation"]);t!==void 0&&s!=null&&d(t,["parameters","maskDilation"],s);const c=l(e,["binaryColorThreshold"]);t!==void 0&&c!=null&&d(t,["parameters","binaryColorThreshold"],c);const u=l(e,["labels"]);return t!==void 0&&u!=null&&d(t,["labels"],u),n}function G2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["source"]);r!=null&&W2(r,n);const i=l(t,["config"]);return i!=null&&z2(i,n),n}function H2(e){const t={},n=l(e,["predictions"]);if(n!=null){let o=n;Array.isArray(o)&&(o=o.map(r=>m2(r))),d(t,["generatedMasks"],o)}return t}function W2(e,t){const n={},o=l(e,["prompt"]);t!==void 0&&o!=null&&d(t,["instances[0]","prompt"],o);const r=l(e,["image"]);t!==void 0&&r!=null&&d(t,["instances[0]","image"],It(r));const i=l(e,["scribbleImage"]);return t!==void 0&&i!=null&&d(t,["instances[0]","scribble"],V2(i)),n}function q2(e){const t={},n=l(e,["retrievalConfig"]);n!=null&&d(t,["retrievalConfig"],n);const o=l(e,["functionCallingConfig"]);return o!=null&&d(t,["functionCallingConfig"],JA(o)),t}function O2(e){const t={};if(l(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const n=l(e,["computerUse"]);n!=null&&d(t,["computerUse"],n);const o=l(e,["fileSearch"]);o!=null&&d(t,["fileSearch"],o);const r=l(e,["codeExecution"]);if(r!=null&&d(t,["codeExecution"],r),l(e,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const i=l(e,["functionDeclarations"]);if(i!=null){let f=i;Array.isArray(f)&&(f=f.map(h=>h)),d(t,["functionDeclarations"],f)}const s=l(e,["googleMaps"]);s!=null&&d(t,["googleMaps"],S2(s));const c=l(e,["googleSearch"]);c!=null&&d(t,["googleSearch"],b2(c));const u=l(e,["googleSearchRetrieval"]);u!=null&&d(t,["googleSearchRetrieval"],u);const p=l(e,["urlContext"]);return p!=null&&d(t,["urlContext"],p),t}function bv(e){const t={},n=l(e,["retrieval"]);n!=null&&d(t,["retrieval"],n);const o=l(e,["computerUse"]);if(o!=null&&d(t,["computerUse"],o),l(e,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const r=l(e,["codeExecution"]);r!=null&&d(t,["codeExecution"],r);const i=l(e,["enterpriseWebSearch"]);i!=null&&d(t,["enterpriseWebSearch"],i);const s=l(e,["functionDeclarations"]);if(s!=null){let h=s;Array.isArray(h)&&(h=h.map(m=>YA(m))),d(t,["functionDeclarations"],h)}const c=l(e,["googleMaps"]);c!=null&&d(t,["googleMaps"],c);const u=l(e,["googleSearch"]);u!=null&&d(t,["googleSearch"],u);const p=l(e,["googleSearchRetrieval"]);p!=null&&d(t,["googleSearchRetrieval"],p);const f=l(e,["urlContext"]);return f!=null&&d(t,["urlContext"],f),t}function J2(e){const t={},n=l(e,["baseModel"]);n!=null&&d(t,["baseModel"],n);const o=l(e,["createTime"]);o!=null&&d(t,["createTime"],o);const r=l(e,["updateTime"]);return r!=null&&d(t,["updateTime"],r),t}function Y2(e){const t={},n=l(e,["labels","google-vertex-llm-tuning-base-model-id"]);n!=null&&d(t,["baseModel"],n);const o=l(e,["createTime"]);o!=null&&d(t,["createTime"],o);const r=l(e,["updateTime"]);return r!=null&&d(t,["updateTime"],r),t}function K2(e,t){const n={},o=l(e,["displayName"]);t!==void 0&&o!=null&&d(t,["displayName"],o);const r=l(e,["description"]);t!==void 0&&r!=null&&d(t,["description"],r);const i=l(e,["defaultCheckpointId"]);return t!==void 0&&i!=null&&d(t,["defaultCheckpointId"],i),n}function Q2(e,t){const n={},o=l(e,["displayName"]);t!==void 0&&o!=null&&d(t,["displayName"],o);const r=l(e,["description"]);t!==void 0&&r!=null&&d(t,["description"],r);const i=l(e,["defaultCheckpointId"]);return t!==void 0&&i!=null&&d(t,["defaultCheckpointId"],i),n}function X2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","name"],K(e,o));const r=l(t,["config"]);return r!=null&&K2(r,n),n}function Z2(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["config"]);return r!=null&&Q2(r,n),n}function eP(e,t){const n={},o=l(e,["outputGcsUri"]);t!==void 0&&o!=null&&d(t,["parameters","storageUri"],o);const r=l(e,["safetyFilterLevel"]);t!==void 0&&r!=null&&d(t,["parameters","safetySetting"],r);const i=l(e,["personGeneration"]);t!==void 0&&i!=null&&d(t,["parameters","personGeneration"],i);const s=l(e,["includeRaiReason"]);t!==void 0&&s!=null&&d(t,["parameters","includeRaiReason"],s);const c=l(e,["outputMimeType"]);t!==void 0&&c!=null&&d(t,["parameters","outputOptions","mimeType"],c);const u=l(e,["outputCompressionQuality"]);t!==void 0&&u!=null&&d(t,["parameters","outputOptions","compressionQuality"],u);const p=l(e,["enhanceInputImage"]);t!==void 0&&p!=null&&d(t,["parameters","upscaleConfig","enhanceInputImage"],p);const f=l(e,["imagePreservationFactor"]);t!==void 0&&f!=null&&d(t,["parameters","upscaleConfig","imagePreservationFactor"],f);const h=l(e,["labels"]);t!==void 0&&h!=null&&d(t,["labels"],h);const m=l(e,["numberOfImages"]);t!==void 0&&m!=null&&d(t,["parameters","sampleCount"],m);const g=l(e,["mode"]);return t!==void 0&&g!=null&&d(t,["parameters","mode"],g),n}function tP(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["_url","model"],K(e,o));const r=l(t,["image"]);r!=null&&d(n,["instances[0]","image"],It(r));const i=l(t,["upscaleFactor"]);i!=null&&d(n,["parameters","upscaleConfig","upscaleFactor"],i);const s=l(t,["config"]);return s!=null&&eP(s,n),n}function nP(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(i=>Sl(i))),d(t,["generatedImages"],r)}return t}function oP(e){const t={},n=l(e,["uri"]);n!=null&&d(t,["uri"],n);const o=l(e,["encodedVideo"]);o!=null&&d(t,["videoBytes"],En(o));const r=l(e,["encoding"]);return r!=null&&d(t,["mimeType"],r),t}function rP(e){const t={},n=l(e,["gcsUri"]);n!=null&&d(t,["uri"],n);const o=l(e,["bytesBase64Encoded"]);o!=null&&d(t,["videoBytes"],En(o));const r=l(e,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}function iP(e){const t={},n=l(e,["image"]);n!=null&&d(t,["_self"],It(n));const o=l(e,["maskMode"]);return o!=null&&d(t,["maskMode"],o),t}function sP(e){const t={},n=l(e,["image"]);n!=null&&d(t,["image"],bl(n));const o=l(e,["referenceType"]);return o!=null&&d(t,["referenceType"],o),t}function lP(e){const t={},n=l(e,["image"]);n!=null&&d(t,["image"],It(n));const o=l(e,["referenceType"]);return o!=null&&d(t,["referenceType"],o),t}function kv(e){const t={},n=l(e,["uri"]);n!=null&&d(t,["uri"],n);const o=l(e,["videoBytes"]);o!=null&&d(t,["encodedVideo"],En(o));const r=l(e,["mimeType"]);return r!=null&&d(t,["encoding"],r),t}function Cv(e){const t={},n=l(e,["uri"]);n!=null&&d(t,["gcsUri"],n);const o=l(e,["videoBytes"]);o!=null&&d(t,["bytesBase64Encoded"],En(o));const r=l(e,["mimeType"]);return r!=null&&d(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function aP(e,t){const n={},o=l(e,["displayName"]);return t!==void 0&&o!=null&&d(t,["displayName"],o),n}function cP(e){const t={},n=l(e,["config"]);return n!=null&&aP(n,t),t}function dP(e,t){const n={},o=l(e,["force"]);return t!==void 0&&o!=null&&d(t,["_query","force"],o),n}function uP(e){const t={},n=l(e,["name"]);n!=null&&d(t,["_url","name"],n);const o=l(e,["config"]);return o!=null&&dP(o,t),t}function pP(e){const t={},n=l(e,["name"]);return n!=null&&d(t,["_url","name"],n),t}function fP(e,t){const n={},o=l(e,["customMetadata"]);if(t!==void 0&&o!=null){let i=o;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["customMetadata"],i)}const r=l(e,["chunkingConfig"]);return t!==void 0&&r!=null&&d(t,["chunkingConfig"],r),n}function hP(e){const t={},n=l(e,["name"]);n!=null&&d(t,["name"],n);const o=l(e,["metadata"]);o!=null&&d(t,["metadata"],o);const r=l(e,["done"]);r!=null&&d(t,["done"],r);const i=l(e,["error"]);i!=null&&d(t,["error"],i);const s=l(e,["response"]);return s!=null&&d(t,["response"],gP(s)),t}function mP(e){const t={},n=l(e,["fileSearchStoreName"]);n!=null&&d(t,["_url","file_search_store_name"],n);const o=l(e,["fileName"]);o!=null&&d(t,["fileName"],o);const r=l(e,["config"]);return r!=null&&fP(r,t),t}function gP(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["parent"]);o!=null&&d(t,["parent"],o);const r=l(e,["documentName"]);return r!=null&&d(t,["documentName"],r),t}function yP(e,t){const n={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);return t!==void 0&&r!=null&&d(t,["_query","pageToken"],r),n}function vP(e){const t={},n=l(e,["config"]);return n!=null&&yP(n,t),t}function wP(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["fileSearchStores"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["fileSearchStores"],i)}return t}function Tv(e,t){const n={},o=l(e,["mimeType"]);t!==void 0&&o!=null&&d(t,["mimeType"],o);const r=l(e,["displayName"]);t!==void 0&&r!=null&&d(t,["displayName"],r);const i=l(e,["customMetadata"]);if(t!==void 0&&i!=null){let c=i;Array.isArray(c)&&(c=c.map(u=>u)),d(t,["customMetadata"],c)}const s=l(e,["chunkingConfig"]);return t!==void 0&&s!=null&&d(t,["chunkingConfig"],s),n}function xP(e){const t={},n=l(e,["fileSearchStoreName"]);n!=null&&d(t,["_url","file_search_store_name"],n);const o=l(e,["config"]);return o!=null&&Tv(o,t),t}function SP(e){const t={},n=l(e,["sdkHttpResponse"]);return n!=null&&d(t,["sdkHttpResponse"],n),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bP="Content-Type",kP="X-Server-Timeout",CP="User-Agent",Vc="x-goog-api-client",TP="1.37.0",EP=`google-genai-sdk/${TP}`,IP="v1beta1",_P="v1beta";class AP{constructor(t){var n,o;this.clientOptions=Object.assign(Object.assign({},t),{project:t.project,location:t.location,apiKey:t.apiKey,vertexai:t.vertexai});const r={};this.clientOptions.vertexai?(r.apiVersion=(n=this.clientOptions.apiVersion)!==null&&n!==void 0?n:IP,r.baseUrl=this.baseUrlFromProjectLocation(),this.normalizeAuthParameters()):(r.apiVersion=(o=this.clientOptions.apiVersion)!==null&&o!==void 0?o:_P,r.baseUrl="https://generativelanguage.googleapis.com/"),r.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=r,t.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(r,t.httpOptions))}baseUrlFromProjectLocation(){return this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location!=="global"?`https://${this.clientOptions.location}-aiplatform.googleapis.com/`:"https://aiplatform.googleapis.com/"}normalizeAuthParameters(){if(this.clientOptions.project&&this.clientOptions.location){this.clientOptions.apiKey=void 0;return}this.clientOptions.project=void 0,this.clientOptions.location=void 0}isVertexAI(){var t;return(t=this.clientOptions.vertexai)!==null&&t!==void 0?t:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}async getAuthHeaders(){const t=new Headers;return await this.clientOptions.auth.addAuthHeaders(t),t}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(t){if(!t||t.baseUrl===void 0||t.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const o=[t.baseUrl.endsWith("/")?t.baseUrl.slice(0,-1):t.baseUrl];return t.apiVersion&&t.apiVersion!==""&&o.push(t.apiVersion),o.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const t=this.getBaseUrl(),n=new URL(t);return n.protocol=n.protocol=="http:"?"ws":"wss",n.toString()}setBaseUrl(t){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=t;else throw new Error("HTTP options are not correctly set.")}constructUrl(t,n,o){const r=[this.getRequestUrlInternal(n)];return o&&r.push(this.getBaseResourcePath()),t!==""&&r.push(t),new URL(`${r.join("/")}`)}shouldPrependVertexProjectPath(t){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||t.path.startsWith("projects/")||t.httpMethod==="GET"&&t.path.startsWith("publishers/google/models"))}async request(t){let n=this.clientOptions.httpOptions;t.httpOptions&&(n=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const o=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,n,o);if(t.queryParams)for(const[s,c]of Object.entries(t.queryParams))r.searchParams.append(s,String(c));let i={};if(t.httpMethod==="GET"){if(t.body&&t.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else i.body=t.body;return i=await this.includeExtraHttpOptionsToRequestInit(i,n,r.toString(),t.abortSignal),this.unaryApiCall(r,i,t.httpMethod)}patchHttpOptions(t,n){const o=JSON.parse(JSON.stringify(t));for(const[r,i]of Object.entries(n))typeof i=="object"?o[r]=Object.assign(Object.assign({},o[r]),i):i!==void 0&&(o[r]=i);return o}async requestStream(t){let n=this.clientOptions.httpOptions;t.httpOptions&&(n=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const o=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,n,o);(!r.searchParams.has("alt")||r.searchParams.get("alt")!=="sse")&&r.searchParams.set("alt","sse");let i={};return i.body=t.body,i=await this.includeExtraHttpOptionsToRequestInit(i,n,r.toString(),t.abortSignal),this.streamApiCall(r,i,t.httpMethod)}async includeExtraHttpOptionsToRequestInit(t,n,o,r){if(n&&n.timeout||r){const i=new AbortController,s=i.signal;if(n.timeout&&(n==null?void 0:n.timeout)>0){const c=setTimeout(()=>i.abort(),n.timeout);c&&typeof c.unref=="function"&&c.unref()}r&&r.addEventListener("abort",()=>{i.abort()}),t.signal=s}return n&&n.extraBody!==null&&PP(t,n.extraBody),t.headers=await this.getHeadersInternal(n,o),t}async unaryApiCall(t,n,o){return this.apiCall(t.toString(),Object.assign(Object.assign({},n),{method:o})).then(async r=>(await Jh(r),new Lc(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}async streamApiCall(t,n,o){return this.apiCall(t.toString(),Object.assign(Object.assign({},n),{method:o})).then(async r=>(await Jh(r),this.processStreamResponse(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}processStreamResponse(t){return Ct(this,arguments,function*(){var o;const r=(o=t==null?void 0:t.body)===null||o===void 0?void 0:o.getReader(),i=new TextDecoder("utf-8");if(!r)throw new Error("Response body is empty");try{let s="";const c="data:",u=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:p,value:f}=yield H(r.read());if(p){if(s.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const h=i.decode(f,{stream:!0});try{const S=JSON.parse(h);if("error"in S){const C=JSON.parse(JSON.stringify(S.error)),k=C.status,w=C.code,x=`got status: ${k}. ${JSON.stringify(S)}`;if(w>=400&&w<600)throw new wl({message:x,status:w})}}catch(S){if(S.name==="ApiError")throw S}s+=h;let m=-1,g=0;for(;;){m=-1,g=0;for(const k of u){const w=s.indexOf(k);w!==-1&&(m===-1||w<m)&&(m=w,g=k.length)}if(m===-1)break;const S=s.substring(0,m);s=s.substring(m+g);const C=S.trim();if(C.startsWith(c)){const k=C.substring(c.length).trim();try{const w=new Response(k,{headers:t==null?void 0:t.headers,status:t==null?void 0:t.status,statusText:t==null?void 0:t.statusText});yield yield H(new Lc(w))}catch(w){throw new Error(`exception parsing stream chunk ${k}. ${w}`)}}}}}finally{r.releaseLock()}})}async apiCall(t,n){return fetch(t,n).catch(o=>{throw new Error(`exception ${o} sending request`)})}getDefaultHeaders(){const t={},n=EP+" "+this.clientOptions.userAgentExtra;return t[CP]=n,t[Vc]=n,t[bP]="application/json",t}async getHeadersInternal(t,n){const o=new Headers;if(t&&t.headers){for(const[r,i]of Object.entries(t.headers))o.append(r,i);t.timeout&&t.timeout>0&&o.append(kP,String(Math.ceil(t.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(o,n),o}getFileName(t){var n;let o="";return typeof t=="string"&&(o=t.replace(/[/\\]+$/,""),o=(n=o.split(/[/\\]/).pop())!==null&&n!==void 0?n:""),o}async uploadFile(t,n){var o;const r={};n!=null&&(r.mimeType=n.mimeType,r.name=n.name,r.displayName=n.displayName),r.name&&!r.name.startsWith("files/")&&(r.name=`files/${r.name}`);const i=this.clientOptions.uploader,s=await i.stat(t);r.sizeBytes=String(s.size);const c=(o=n==null?void 0:n.mimeType)!==null&&o!==void 0?o:s.type;if(c===void 0||c==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");r.mimeType=c;const u={file:r},p=this.getFileName(t),f=L("upload/v1beta/files",u._url),h=await this.fetchUploadUrl(f,r.sizeBytes,r.mimeType,p,u,n==null?void 0:n.httpOptions);return i.upload(t,h,this)}async uploadFileToFileSearchStore(t,n,o){var r;const i=this.clientOptions.uploader,s=await i.stat(n),c=String(s.size),u=(r=o==null?void 0:o.mimeType)!==null&&r!==void 0?r:s.type;if(u===void 0||u==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const p=`upload/v1beta/${t}:uploadToFileSearchStore`,f=this.getFileName(n),h={};o!=null&&Tv(o,h);const m=await this.fetchUploadUrl(p,c,u,f,h,o==null?void 0:o.httpOptions);return i.uploadToFileSearchStore(n,m,this)}async downloadFile(t){await this.clientOptions.downloader.download(t,this)}async fetchUploadUrl(t,n,o,r,i,s){var c;let u={};s?u=s:u={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n}`,"X-Goog-Upload-Header-Content-Type":`${o}`},r?{"X-Goog-Upload-File-Name":r}:{})};const p=await this.request({path:t,body:JSON.stringify(i),httpMethod:"POST",httpOptions:u});if(!p||!(p!=null&&p.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const f=(c=p==null?void 0:p.headers)===null||c===void 0?void 0:c["x-goog-upload-url"];if(f===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return f}}async function Jh(e){var t;if(e===void 0)throw new Error("response is undefined");if(!e.ok){const n=e.status;let o;!((t=e.headers.get("content-type"))===null||t===void 0)&&t.includes("application/json")?o=await e.json():o={error:{message:await e.text(),code:e.status,status:e.statusText}};const r=JSON.stringify(o);throw n>=400&&n<600?new wl({message:r,status:n}):new Error(r)}}function PP(e,t){if(!t||Object.keys(t).length===0)return;if(e.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let n={};if(typeof e.body=="string"&&e.body.length>0)try{const i=JSON.parse(e.body);if(typeof i=="object"&&i!==null&&!Array.isArray(i))n=i;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function o(i,s){const c=Object.assign({},i);for(const u in s)if(Object.prototype.hasOwnProperty.call(s,u)){const p=s[u],f=c[u];p&&typeof p=="object"&&!Array.isArray(p)&&f&&typeof f=="object"&&!Array.isArray(f)?c[u]=o(f,p):(f&&p&&typeof f!=typeof p&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${u}". Original type: ${typeof f}, New type: ${typeof p}. Overwriting.`),c[u]=p)}return c}const r=o(n,t);e.body=JSON.stringify(r)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const RP="mcp_used/unknown";let MP=!1;function Ev(e){for(const t of e)if($P(t)||typeof t=="object"&&"inputSchema"in t)return!0;return MP}function Iv(e){var t;const n=(t=e[Vc])!==null&&t!==void 0?t:"";e[Vc]=(n+` ${RP}`).trimStart()}function $P(e){return e!==null&&typeof e=="object"&&e instanceof hu}function NP(e){return Ct(this,arguments,function*(n,o=100){let r,i=0;for(;i<o;){const s=yield H(n.listTools({cursor:r}));for(const c of s.tools)yield yield H(c),i++;if(!s.nextCursor)break;r=s.nextCursor}})}class hu{constructor(t=[],n){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=t,this.config=n}static create(t,n){return new hu(t,n)}async initialize(){var t,n,o,r;if(this.mcpTools.length>0)return;const i={},s=[];for(const f of this.mcpClients)try{for(var c=!0,u=(n=void 0,Tt(NP(f))),p;p=await u.next(),t=p.done,!t;c=!0){r=p.value,c=!1;const h=r;s.push(h);const m=h.name;if(i[m])throw new Error(`Duplicate function name ${m} found in MCP tools. Please ensure function names are unique.`);i[m]=f}}catch(h){n={error:h}}finally{try{!c&&!t&&(o=u.return)&&await o.call(u)}finally{if(n)throw n.error}}this.mcpTools=s,this.functionNameToMcpClient=i}async tool(){return await this.initialize(),uI(this.mcpTools,this.config)}async callTool(t){await this.initialize();const n=[];for(const o of t)if(o.name in this.functionNameToMcpClient){const r=this.functionNameToMcpClient[o.name];let i;this.config.timeout&&(i={timeout:this.config.timeout});const s=await r.callTool({name:o.name,arguments:o.args},void 0,i);n.push({functionResponse:{name:o.name,response:s.isError?{error:s}:s}})}return n}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function jP(e,t,n){const o=new oI;let r;n.data instanceof Blob?r=JSON.parse(await n.data.text()):r=JSON.parse(n.data),Object.assign(o,r),t(o)}class LP{constructor(t,n,o){this.apiClient=t,this.auth=n,this.webSocketFactory=o}async connect(t){var n,o;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const r=this.apiClient.getWebsocketBaseUrl(),i=this.apiClient.getApiVersion(),s=UP(this.apiClient.getDefaultHeaders()),c=this.apiClient.getApiKey(),u=`${r}/ws/google.ai.generativelanguage.${i}.GenerativeService.BidiGenerateMusic?key=${c}`;let p=()=>{};const f=new Promise(y=>{p=y}),h=t.callbacks,m=function(){p({})},g=this.apiClient,S={onopen:m,onmessage:y=>{jP(g,h.onmessage,y)},onerror:(n=h==null?void 0:h.onerror)!==null&&n!==void 0?n:function(y){},onclose:(o=h==null?void 0:h.onclose)!==null&&o!==void 0?o:function(y){}},C=this.webSocketFactory.create(u,BP(s),S);C.connect(),await f;const x={setup:{model:K(this.apiClient,t.model)}};return C.send(JSON.stringify(x)),new DP(C,this.apiClient)}}class DP{constructor(t,n){this.conn=t,this.apiClient=n}async setWeightedPrompts(t){if(!t.weightedPrompts||Object.keys(t.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const n=aA(t);this.conn.send(JSON.stringify({clientContent:n}))}async setMusicGenerationConfig(t){t.musicGenerationConfig||(t.musicGenerationConfig={});const n=lA(t);this.conn.send(JSON.stringify(n))}sendPlaybackControl(t){const n={playbackControl:t};this.conn.send(JSON.stringify(n))}play(){this.sendPlaybackControl(xo.PLAY)}pause(){this.sendPlaybackControl(xo.PAUSE)}stop(){this.sendPlaybackControl(xo.STOP)}resetContext(){this.sendPlaybackControl(xo.RESET_CONTEXT)}close(){this.conn.close()}}function BP(e){const t={};return e.forEach((n,o)=>{t[o]=n}),t}function UP(e){const t=new Headers;for(const[n,o]of Object.entries(e))t.append(n,o);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const FP="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function VP(e,t,n){const o=new nI;let r;n.data instanceof Blob?r=await n.data.text():n.data instanceof ArrayBuffer?r=new TextDecoder().decode(n.data):r=n.data;const i=JSON.parse(r);if(e.isVertexAI()){const s=uA(i);Object.assign(o,s)}else Object.assign(o,i);t(o)}class zP{constructor(t,n,o){this.apiClient=t,this.auth=n,this.webSocketFactory=o,this.music=new LP(this.apiClient,this.auth,this.webSocketFactory)}async connect(t){var n,o,r,i,s,c;if(t.config&&t.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const u=this.apiClient.getWebsocketBaseUrl(),p=this.apiClient.getApiVersion();let f;const h=this.apiClient.getHeaders();t.config&&t.config.tools&&Ev(t.config.tools)&&Iv(h);const m=qP(h);if(this.apiClient.isVertexAI())f=`${u}/ws/google.cloud.aiplatform.${p}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(m,f);else{const P=this.apiClient.getApiKey();let R="BidiGenerateContent",B="key";P!=null&&P.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),p!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),R="BidiGenerateContentConstrained",B="access_token"),f=`${u}/ws/google.ai.generativelanguage.${p}.GenerativeService.${R}?${B}=${P}`}let g=()=>{};const S=new Promise(P=>{g=P}),C=t.callbacks,k=function(){var P;(P=C==null?void 0:C.onopen)===null||P===void 0||P.call(C),g({})},w=this.apiClient,x={onopen:k,onmessage:P=>{VP(w,C.onmessage,P)},onerror:(n=C==null?void 0:C.onerror)!==null&&n!==void 0?n:function(P){},onclose:(o=C==null?void 0:C.onclose)!==null&&o!==void 0?o:function(P){}},y=this.webSocketFactory.create(f,WP(m),x);y.connect(),await S;let b=K(this.apiClient,t.model);if(this.apiClient.isVertexAI()&&b.startsWith("publishers/")){const P=this.apiClient.getProject(),R=this.apiClient.getLocation();b=`projects/${P}/locations/${R}/`+b}let T={};this.apiClient.isVertexAI()&&((r=t.config)===null||r===void 0?void 0:r.responseModalities)===void 0&&(t.config===void 0?t.config={responseModalities:[Us.AUDIO]}:t.config.responseModalities=[Us.AUDIO]),!((i=t.config)===null||i===void 0)&&i.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const A=(c=(s=t.config)===null||s===void 0?void 0:s.tools)!==null&&c!==void 0?c:[],I=[];for(const P of A)if(this.isCallableTool(P)){const R=P;I.push(await R.tool())}else I.push(P);I.length>0&&(t.config.tools=I);const _={model:b,config:t.config,callbacks:t.callbacks};return this.apiClient.isVertexAI()?T=sA(this.apiClient,_):T=iA(this.apiClient,_),delete T.config,y.send(JSON.stringify(T)),new HP(y,this.apiClient)}isCallableTool(t){return"callTool"in t&&typeof t.callTool=="function"}}const GP={turnComplete:!0};class HP{constructor(t,n){this.conn=t,this.apiClient=n}tLiveClientContent(t,n){if(n.turns!==null&&n.turns!==void 0){let o=[];try{o=ct(n.turns),t.isVertexAI()||(o=o.map(r=>xl(r)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof n.turns}'`)}return{clientContent:{turns:o,turnComplete:n.turnComplete}}}return{clientContent:{turnComplete:n.turnComplete}}}tLiveClienttToolResponse(t,n){let o=[];if(n.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(n.functionResponses)?o=n.functionResponses:o=[n.functionResponses],o.length===0)throw new Error("functionResponses is required.");for(const i of o){if(typeof i!="object"||i===null||!("name"in i)||!("response"in i))throw new Error(`Could not parse function response, type '${typeof i}'.`);if(!t.isVertexAI()&&!("id"in i))throw new Error(FP)}return{toolResponse:{functionResponses:o}}}sendClientContent(t){t=Object.assign(Object.assign({},GP),t);const n=this.tLiveClientContent(this.apiClient,t);this.conn.send(JSON.stringify(n))}sendRealtimeInput(t){let n={};this.apiClient.isVertexAI()?n={realtimeInput:dA(t)}:n={realtimeInput:cA(t)},this.conn.send(JSON.stringify(n))}sendToolResponse(t){if(t.functionResponses==null)throw new Error("Tool response parameters are required.");const n=this.tLiveClienttToolResponse(this.apiClient,t);this.conn.send(JSON.stringify(n))}close(){this.conn.close()}}function WP(e){const t={};return e.forEach((n,o)=>{t[o]=n}),t}function qP(e){const t=new Headers;for(const[n,o]of Object.entries(e))t.append(n,o);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yh=10;function Kh(e){var t,n,o;if(!((t=e==null?void 0:e.automaticFunctionCalling)===null||t===void 0)&&t.disable)return!0;let r=!1;for(const s of(n=e==null?void 0:e.tools)!==null&&n!==void 0?n:[])if(Po(s)){r=!0;break}if(!r)return!0;const i=(o=e==null?void 0:e.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls;return i&&(i<0||!Number.isInteger(i))||i==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",i),!0):!1}function Po(e){return"callTool"in e&&typeof e.callTool=="function"}function OP(e){var t,n,o;return(o=(n=(t=e.config)===null||t===void 0?void 0:t.tools)===null||n===void 0?void 0:n.some(r=>Po(r)))!==null&&o!==void 0?o:!1}function Qh(e){var t;const n=[];return!((t=e==null?void 0:e.config)===null||t===void 0)&&t.tools&&e.config.tools.forEach((o,r)=>{if(Po(o))return;const i=o;i.functionDeclarations&&i.functionDeclarations.length>0&&n.push(r)}),n}function Xh(e){var t;return!(!((t=e==null?void 0:e.automaticFunctionCalling)===null||t===void 0)&&t.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class JP extends Yt{constructor(t){super(),this.apiClient=t,this.generateContent=async n=>{var o,r,i,s,c;const u=await this.processParamsMaybeAddMcpUsage(n);if(this.maybeMoveToResponseJsonSchem(n),!OP(n)||Kh(n.config))return await this.generateContentInternal(u);const p=Qh(n);if(p.length>0){const C=p.map(k=>`tools[${k}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${C}.`)}let f,h;const m=ct(u.contents),g=(i=(r=(o=u.config)===null||o===void 0?void 0:o.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls)!==null&&i!==void 0?i:Yh;let S=0;for(;S<g&&(f=await this.generateContentInternal(u),!(!f.functionCalls||f.functionCalls.length===0));){const C=f.candidates[0].content,k=[];for(const w of(c=(s=n.config)===null||s===void 0?void 0:s.tools)!==null&&c!==void 0?c:[])if(Po(w)){const y=await w.callTool(f.functionCalls);k.push(...y)}S++,h={role:"user",parts:k},u.contents=ct(u.contents),u.contents.push(C),u.contents.push(h),Xh(u.config)&&(m.push(C),m.push(h))}return Xh(u.config)&&(f.automaticFunctionCallingHistory=m),f},this.generateContentStream=async n=>{var o,r,i,s,c;if(this.maybeMoveToResponseJsonSchem(n),Kh(n.config)){const h=await this.processParamsMaybeAddMcpUsage(n);return await this.generateContentStreamInternal(h)}const u=Qh(n);if(u.length>0){const h=u.map(m=>`tools[${m}]`).join(", ");throw new Error(`Incompatible tools found at ${h}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const p=(i=(r=(o=n==null?void 0:n.config)===null||o===void 0?void 0:o.toolConfig)===null||r===void 0?void 0:r.functionCallingConfig)===null||i===void 0?void 0:i.streamFunctionCallArguments,f=(c=(s=n==null?void 0:n.config)===null||s===void 0?void 0:s.automaticFunctionCalling)===null||c===void 0?void 0:c.disable;if(p&&!f)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(n)},this.generateImages=async n=>await this.generateImagesInternal(n).then(o=>{var r;let i;const s=[];if(o!=null&&o.generatedImages)for(const u of o.generatedImages)u&&(u!=null&&u.safetyAttributes)&&((r=u==null?void 0:u.safetyAttributes)===null||r===void 0?void 0:r.contentType)==="Positive Prompt"?i=u==null?void 0:u.safetyAttributes:s.push(u);let c;return i?c={generatedImages:s,positivePromptSafetyAttributes:i,sdkHttpResponse:o.sdkHttpResponse}:c={generatedImages:s,sdkHttpResponse:o.sdkHttpResponse},c}),this.list=async n=>{var o;const s={config:Object.assign(Object.assign({},{queryBase:!0}),n==null?void 0:n.config)};if(this.apiClient.isVertexAI()&&!s.config.queryBase){if(!((o=s.config)===null||o===void 0)&&o.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");s.config.filter="labels.tune-type:*"}return new Zn(qt.PAGED_ITEM_MODELS,c=>this.listInternal(c),await this.listInternal(s),s)},this.editImage=async n=>{const o={model:n.model,prompt:n.prompt,referenceImages:[],config:n.config};return n.referenceImages&&n.referenceImages&&(o.referenceImages=n.referenceImages.map(r=>r.toReferenceImageAPI())),await this.editImageInternal(o)},this.upscaleImage=async n=>{let o={numberOfImages:1,mode:"upscale"};n.config&&(o=Object.assign(Object.assign({},o),n.config));const r={model:n.model,image:n.image,upscaleFactor:n.upscaleFactor,config:o};return await this.upscaleImageInternal(r)},this.generateVideos=async n=>{var o,r,i,s,c,u;if((n.prompt||n.image||n.video)&&n.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((o=n.video)===null||o===void 0)&&o.uri&&(!((r=n.video)===null||r===void 0)&&r.videoBytes)?n.video={uri:n.video.uri,mimeType:n.video.mimeType}:!((s=(i=n.source)===null||i===void 0?void 0:i.video)===null||s===void 0)&&s.uri&&(!((u=(c=n.source)===null||c===void 0?void 0:c.video)===null||u===void 0)&&u.videoBytes)&&(n.source.video={uri:n.source.video.uri,mimeType:n.source.video.mimeType})),await this.generateVideosInternal(n)}}maybeMoveToResponseJsonSchem(t){t.config&&t.config.responseSchema&&(t.config.responseJsonSchema||Object.keys(t.config.responseSchema).includes("$schema")&&(t.config.responseJsonSchema=t.config.responseSchema,delete t.config.responseSchema))}async processParamsMaybeAddMcpUsage(t){var n,o,r;const i=(n=t.config)===null||n===void 0?void 0:n.tools;if(!i)return t;const s=await Promise.all(i.map(async u=>Po(u)?await u.tool():u)),c={model:t.model,contents:t.contents,config:Object.assign(Object.assign({},t.config),{tools:s})};if(c.config.tools=s,t.config&&t.config.tools&&Ev(t.config.tools)){const u=(r=(o=t.config.httpOptions)===null||o===void 0?void 0:o.headers)!==null&&r!==void 0?r:{};let p=Object.assign({},u);Object.keys(p).length===0&&(p=this.apiClient.getDefaultHeaders()),Iv(p),c.config.httpOptions=Object.assign(Object.assign({},t.config.httpOptions),{headers:p})}return c}async initAfcToolsMap(t){var n,o,r;const i=new Map;for(const s of(o=(n=t.config)===null||n===void 0?void 0:n.tools)!==null&&o!==void 0?o:[])if(Po(s)){const c=s,u=await c.tool();for(const p of(r=u.functionDeclarations)!==null&&r!==void 0?r:[]){if(!p.name)throw new Error("Function declaration name is required.");if(i.has(p.name))throw new Error(`Duplicate tool declaration name: ${p.name}`);i.set(p.name,c)}}return i}async processAfcStream(t){var n,o,r;const i=(r=(o=(n=t.config)===null||n===void 0?void 0:n.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls)!==null&&r!==void 0?r:Yh;let s=!1,c=0;const u=await this.initAfcToolsMap(t);return function(p,f,h){return Ct(this,arguments,function*(){for(var m,g,S,C,k,w;c<i;){s&&(c++,s=!1);const T=yield H(p.processParamsMaybeAddMcpUsage(h)),A=yield H(p.generateContentStreamInternal(T)),I=[],_=[];try{for(var x=!0,y=(g=void 0,Tt(A)),b;b=yield H(y.next()),m=b.done,!m;x=!0){C=b.value,x=!1;const P=C;if(yield yield H(P),P.candidates&&(!((k=P.candidates[0])===null||k===void 0)&&k.content)){_.push(P.candidates[0].content);for(const R of(w=P.candidates[0].content.parts)!==null&&w!==void 0?w:[])if(c<i&&R.functionCall){if(!R.functionCall.name)throw new Error("Function call name was not returned by the model.");if(f.has(R.functionCall.name)){const B=yield H(f.get(R.functionCall.name).callTool([R.functionCall]));I.push(...B)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${f.keys()}, mising tool: ${R.functionCall.name}`)}}}}catch(P){g={error:P}}finally{try{!x&&!m&&(S=y.return)&&(yield H(S.call(y)))}finally{if(g)throw g.error}}if(I.length>0){s=!0;const P=new sr;P.candidates=[{content:{role:"user",parts:I}}],yield yield H(P);const R=[];R.push(..._),R.push({role:"user",parts:I});const B=ct(h.contents).concat(R);h.contents=B}else break}})}(this,u,t)}async generateContentInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=Wh(this.apiClient,t);return c=L("{model}:generateContent",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=Oh(f),m=new sr;return Object.assign(m,h),m})}else{const p=Hh(this.apiClient,t);return c=L("{model}:generateContent",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=qh(f),m=new sr;return Object.assign(m,h),m})}}async generateContentStreamInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=Wh(this.apiClient,t);return c=L("{model}:streamGenerateContent?alt=sse",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.requestStream({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}),s.then(function(h){return Ct(this,arguments,function*(){var m,g,S,C;try{for(var k=!0,w=Tt(h),x;x=yield H(w.next()),m=x.done,!m;k=!0){C=x.value,k=!1;const y=C,b=Oh(yield H(y.json()));b.sdkHttpResponse={headers:y.headers};const T=new sr;Object.assign(T,b),yield yield H(T)}}catch(y){g={error:y}}finally{try{!k&&!m&&(S=w.return)&&(yield H(S.call(w)))}finally{if(g)throw g.error}}})})}else{const p=Hh(this.apiClient,t);return c=L("{model}:streamGenerateContent?alt=sse",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.requestStream({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}),s.then(function(h){return Ct(this,arguments,function*(){var m,g,S,C;try{for(var k=!0,w=Tt(h),x;x=yield H(w.next()),m=x.done,!m;k=!0){C=x.value,k=!1;const y=C,b=qh(yield H(y.json()));b.sdkHttpResponse={headers:y.headers};const T=new sr;Object.assign(T,b),yield yield H(T)}}catch(y){g={error:y}}finally{try{!k&&!m&&(S=w.return)&&(yield H(S.call(w)))}finally{if(g)throw g.error}}})})}}async embedContent(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=zA(this.apiClient,t);return c=L("{model}:predict",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=HA(f),m=new Ih;return Object.assign(m,h),m})}else{const p=VA(this.apiClient,t);return c=L("{model}:batchEmbedContents",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=GA(f),m=new Ih;return Object.assign(m,h),m})}}async generateImagesInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=t2(this.apiClient,t);return c=L("{model}:predict",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=o2(f),m=new _h;return Object.assign(m,h),m})}else{const p=e2(this.apiClient,t);return c=L("{model}:predict",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=n2(f),m=new _h;return Object.assign(m,h),m})}}async editImageInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI()){const c=DA(this.apiClient,t);return i=L("{model}:predict",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json().then(p=>{const f=p;return f.sdkHttpResponse={headers:u.headers},f})),r.then(u=>{const p=BA(u),f=new WE;return Object.assign(f,p),f})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI()){const c=tP(this.apiClient,t);return i=L("{model}:predict",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json().then(p=>{const f=p;return f.sdkHttpResponse={headers:u.headers},f})),r.then(u=>{const p=nP(u),f=new qE;return Object.assign(f,p),f})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI()){const c=L2(this.apiClient,t);return i=L("{model}:predict",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>{const p=D2(u),f=new OE;return Object.assign(f,p),f})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI()){const c=G2(this.apiClient,t);return i=L("{model}:predict",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>{const p=H2(u),f=new JE;return Object.assign(f,p),f})}else throw new Error("This method is only supported by the Vertex AI.")}async get(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=x2(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>Fc(f))}else{const p=w2(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Uc(f))}}async listInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=A2(this.apiClient,t);return c=L("{models_url}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=R2(f),m=new Ah;return Object.assign(m,h),m})}else{const p=_2(this.apiClient,t);return c=L("{models_url}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=P2(f),m=new Ah;return Object.assign(m,h),m})}}async update(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=Z2(this.apiClient,t);return c=L("{model}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"PATCH",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>Fc(f))}else{const p=X2(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Uc(f))}}async delete(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=$A(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"DELETE",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=jA(f),m=new Ph;return Object.assign(m,h),m})}else{const p=MA(this.apiClient,t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=NA(f),m=new Ph;return Object.assign(m,h),m})}}async countTokens(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=AA(this.apiClient,t);return c=L("{model}:countTokens",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=RA(f),m=new Rh;return Object.assign(m,h),m})}else{const p=_A(this.apiClient,t);return c=L("{model}:countTokens",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=PA(f),m=new Rh;return Object.assign(m,h),m})}}async computeTokens(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI()){const c=SA(this.apiClient,t);return i=L("{model}:computeTokens",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json().then(p=>{const f=p;return f.sdkHttpResponse={headers:u.headers},f})),r.then(u=>{const p=bA(u),f=new YE;return Object.assign(f,p),f})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=c2(this.apiClient,t);return c=L("{model}:predictLongRunning",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s.then(f=>{const h=l2(f),m=new Fs;return Object.assign(m,h),m})}else{const p=a2(this.apiClient,t);return c=L("{model}:predictLongRunning",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>{const h=s2(f),m=new Fs;return Object.assign(m,h),m})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class YP extends Yt{constructor(t){super(),this.apiClient=t}async getVideosOperation(t){const n=t.operation,o=t.config;if(n.name===void 0||n.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=n.name.split("/operations/")[0];let i;o&&"httpOptions"in o&&(i=o.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:n.name,resourceName:r,config:{httpOptions:i}});return n._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:n.name,config:o});return n._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async get(t){const n=t.operation,o=t.config;if(n.name===void 0||n.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=n.name.split("/operations/")[0];let i;o&&"httpOptions"in o&&(i=o.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:n.name,resourceName:r,config:{httpOptions:i}});return n._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:n.name,config:o});return n._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async getVideosOperationInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=UE(t);return c=L("{operationName}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json()),s}else{const p=BE(t);return c=L("{operationName}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s}}async fetchPredictVideosOperationInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI()){const c=RE(t);return i=L("{resourceName}:fetchPredictOperation",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function KP(e){const t={},n=l(e,["data"]);if(n!=null&&d(t,["data"],n),l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function QP(e){const t={},n=l(e,["parts"]);if(n!=null){let r=n;Array.isArray(r)&&(r=r.map(i=>sR(i))),d(t,["parts"],r)}const o=l(e,["role"]);return o!=null&&d(t,["role"],o),t}function XP(e,t,n){const o={},r=l(t,["expireTime"]);n!==void 0&&r!=null&&d(n,["expireTime"],r);const i=l(t,["newSessionExpireTime"]);n!==void 0&&i!=null&&d(n,["newSessionExpireTime"],i);const s=l(t,["uses"]);n!==void 0&&s!=null&&d(n,["uses"],s);const c=l(t,["liveConnectConstraints"]);n!==void 0&&c!=null&&d(n,["bidiGenerateContentSetup"],iR(e,c));const u=l(t,["lockAdditionalFields"]);return n!==void 0&&u!=null&&d(n,["fieldMask"],u),o}function ZP(e,t){const n={},o=l(t,["config"]);return o!=null&&d(n,["config"],XP(e,o,n)),n}function eR(e){const t={};if(l(e,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const n=l(e,["fileUri"]);n!=null&&d(t,["fileUri"],n);const o=l(e,["mimeType"]);return o!=null&&d(t,["mimeType"],o),t}function tR(e){const t={},n=l(e,["id"]);n!=null&&d(t,["id"],n);const o=l(e,["args"]);o!=null&&d(t,["args"],o);const r=l(e,["name"]);if(r!=null&&d(t,["name"],r),l(e,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(l(e,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function nR(e){const t={};if(l(e,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const n=l(e,["enableWidget"]);return n!=null&&d(t,["enableWidget"],n),t}function oR(e){const t={};if(l(e,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(l(e,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const n=l(e,["timeRangeFilter"]);return n!=null&&d(t,["timeRangeFilter"],n),t}function rR(e,t){const n={},o=l(e,["generationConfig"]);t!==void 0&&o!=null&&d(t,["setup","generationConfig"],o);const r=l(e,["responseModalities"]);t!==void 0&&r!=null&&d(t,["setup","generationConfig","responseModalities"],r);const i=l(e,["temperature"]);t!==void 0&&i!=null&&d(t,["setup","generationConfig","temperature"],i);const s=l(e,["topP"]);t!==void 0&&s!=null&&d(t,["setup","generationConfig","topP"],s);const c=l(e,["topK"]);t!==void 0&&c!=null&&d(t,["setup","generationConfig","topK"],c);const u=l(e,["maxOutputTokens"]);t!==void 0&&u!=null&&d(t,["setup","generationConfig","maxOutputTokens"],u);const p=l(e,["mediaResolution"]);t!==void 0&&p!=null&&d(t,["setup","generationConfig","mediaResolution"],p);const f=l(e,["seed"]);t!==void 0&&f!=null&&d(t,["setup","generationConfig","seed"],f);const h=l(e,["speechConfig"]);t!==void 0&&h!=null&&d(t,["setup","generationConfig","speechConfig"],fu(h));const m=l(e,["thinkingConfig"]);t!==void 0&&m!=null&&d(t,["setup","generationConfig","thinkingConfig"],m);const g=l(e,["enableAffectiveDialog"]);t!==void 0&&g!=null&&d(t,["setup","generationConfig","enableAffectiveDialog"],g);const S=l(e,["systemInstruction"]);t!==void 0&&S!=null&&d(t,["setup","systemInstruction"],QP(Ne(S)));const C=l(e,["tools"]);if(t!==void 0&&C!=null){let A=Yo(C);Array.isArray(A)&&(A=A.map(I=>aR(Jo(I)))),d(t,["setup","tools"],A)}const k=l(e,["sessionResumption"]);t!==void 0&&k!=null&&d(t,["setup","sessionResumption"],lR(k));const w=l(e,["inputAudioTranscription"]);t!==void 0&&w!=null&&d(t,["setup","inputAudioTranscription"],w);const x=l(e,["outputAudioTranscription"]);t!==void 0&&x!=null&&d(t,["setup","outputAudioTranscription"],x);const y=l(e,["realtimeInputConfig"]);t!==void 0&&y!=null&&d(t,["setup","realtimeInputConfig"],y);const b=l(e,["contextWindowCompression"]);t!==void 0&&b!=null&&d(t,["setup","contextWindowCompression"],b);const T=l(e,["proactivity"]);if(t!==void 0&&T!=null&&d(t,["setup","proactivity"],T),l(e,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return n}function iR(e,t){const n={},o=l(t,["model"]);o!=null&&d(n,["setup","model"],K(e,o));const r=l(t,["config"]);return r!=null&&d(n,["config"],rR(r,n)),n}function sR(e){const t={},n=l(e,["mediaResolution"]);n!=null&&d(t,["mediaResolution"],n);const o=l(e,["codeExecutionResult"]);o!=null&&d(t,["codeExecutionResult"],o);const r=l(e,["executableCode"]);r!=null&&d(t,["executableCode"],r);const i=l(e,["fileData"]);i!=null&&d(t,["fileData"],eR(i));const s=l(e,["functionCall"]);s!=null&&d(t,["functionCall"],tR(s));const c=l(e,["functionResponse"]);c!=null&&d(t,["functionResponse"],c);const u=l(e,["inlineData"]);u!=null&&d(t,["inlineData"],KP(u));const p=l(e,["text"]);p!=null&&d(t,["text"],p);const f=l(e,["thought"]);f!=null&&d(t,["thought"],f);const h=l(e,["thoughtSignature"]);h!=null&&d(t,["thoughtSignature"],h);const m=l(e,["videoMetadata"]);return m!=null&&d(t,["videoMetadata"],m),t}function lR(e){const t={},n=l(e,["handle"]);if(n!=null&&d(t,["handle"],n),l(e,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function aR(e){const t={};if(l(e,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const n=l(e,["computerUse"]);n!=null&&d(t,["computerUse"],n);const o=l(e,["fileSearch"]);o!=null&&d(t,["fileSearch"],o);const r=l(e,["codeExecution"]);if(r!=null&&d(t,["codeExecution"],r),l(e,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const i=l(e,["functionDeclarations"]);if(i!=null){let f=i;Array.isArray(f)&&(f=f.map(h=>h)),d(t,["functionDeclarations"],f)}const s=l(e,["googleMaps"]);s!=null&&d(t,["googleMaps"],nR(s));const c=l(e,["googleSearch"]);c!=null&&d(t,["googleSearch"],oR(c));const u=l(e,["googleSearchRetrieval"]);u!=null&&d(t,["googleSearchRetrieval"],u);const p=l(e,["urlContext"]);return p!=null&&d(t,["urlContext"],p),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function cR(e){const t=[];for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const o=e[n];if(typeof o=="object"&&o!=null&&Object.keys(o).length>0){const r=Object.keys(o).map(i=>`${n}.${i}`);t.push(...r)}else t.push(n)}return t.join(",")}function dR(e,t){let n=null;const o=e.bidiGenerateContentSetup;if(typeof o=="object"&&o!==null&&"setup"in o){const i=o.setup;typeof i=="object"&&i!==null?(e.bidiGenerateContentSetup=i,n=i):delete e.bidiGenerateContentSetup}else o!==void 0&&delete e.bidiGenerateContentSetup;const r=e.fieldMask;if(n){const i=cR(n);if(Array.isArray(t==null?void 0:t.lockAdditionalFields)&&(t==null?void 0:t.lockAdditionalFields.length)===0)i?e.fieldMask=i:delete e.fieldMask;else if(t!=null&&t.lockAdditionalFields&&t.lockAdditionalFields.length>0&&r!==null&&Array.isArray(r)&&r.length>0){const s=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let c=[];r.length>0&&(c=r.map(p=>s.includes(p)?`generationConfig.${p}`:p));const u=[];i&&u.push(i),c.length>0&&u.push(...c),u.length>0?e.fieldMask=u.join(","):delete e.fieldMask}else delete e.fieldMask}else r!==null&&Array.isArray(r)&&r.length>0?e.fieldMask=r.join(","):delete e.fieldMask;return e}class uR extends Yt{constructor(t){super(),this.apiClient=t}async create(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const c=ZP(this.apiClient,t);i=L("auth_tokens",c._url),s=c._query,delete c.config,delete c._url,delete c._query;const u=dR(c,t.config);return r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(u),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(p=>p.json()),r.then(p=>p)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pR(e,t){const n={},o=l(e,["force"]);return t!==void 0&&o!=null&&d(t,["_query","force"],o),n}function fR(e){const t={},n=l(e,["name"]);n!=null&&d(t,["_url","name"],n);const o=l(e,["config"]);return o!=null&&pR(o,t),t}function hR(e){const t={},n=l(e,["name"]);return n!=null&&d(t,["_url","name"],n),t}function mR(e,t){const n={},o=l(e,["pageSize"]);t!==void 0&&o!=null&&d(t,["_query","pageSize"],o);const r=l(e,["pageToken"]);return t!==void 0&&r!=null&&d(t,["_query","pageToken"],r),n}function gR(e){const t={},n=l(e,["parent"]);n!=null&&d(t,["_url","parent"],n);const o=l(e,["config"]);return o!=null&&mR(o,t),t}function yR(e){const t={},n=l(e,["sdkHttpResponse"]);n!=null&&d(t,["sdkHttpResponse"],n);const o=l(e,["nextPageToken"]);o!=null&&d(t,["nextPageToken"],o);const r=l(e,["documents"]);if(r!=null){let i=r;Array.isArray(i)&&(i=i.map(s=>s)),d(t,["documents"],i)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vR extends Yt{constructor(t){super(),this.apiClient=t,this.list=async n=>new Zn(qt.PAGED_ITEM_DOCUMENTS,o=>this.listInternal({parent:n.parent,config:o.config}),await this.listInternal(n),n)}async get(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=hR(t);return i=L("{name}",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>u)}}async delete(t){var n,o;let r="",i={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=fR(t);r=L("{name}",s._url),i=s._query,delete s._url,delete s._query,await this.apiClient.request({path:r,queryParams:i,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal})}}async listInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=gR(t);return i=L("{parent}/documents",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>{const p=yR(u),f=new KE;return Object.assign(f,p),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wR extends Yt{constructor(t,n=new vR(t)){super(),this.apiClient=t,this.documents=n,this.list=async(o={})=>new Zn(qt.PAGED_ITEM_FILE_SEARCH_STORES,r=>this.listInternal(r),await this.listInternal(o),o)}async uploadToFileSearchStore(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(t.fileSearchStoreName,t.file,t.config)}async create(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=cP(t);return i=L("fileSearchStores",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>u)}}async get(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=pP(t);return i=L("{name}",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>u)}}async delete(t){var n,o;let r="",i={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=uP(t);r=L("{name}",s._url),i=s._query,delete s._url,delete s._query,await this.apiClient.request({path:r,queryParams:i,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal})}}async listInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=vP(t);return i=L("fileSearchStores",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>{const p=wP(u),f=new QE;return Object.assign(f,p),f})}}async uploadToFileSearchStoreInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=xP(t);return i=L("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>{const p=SP(u),f=new XE;return Object.assign(f,p),f})}}async importFile(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=mP(t);return i=L("{file_search_store_name}:importFile",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json()),r.then(u=>{const p=hP(u),f=new au;return Object.assign(f,p),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let _v=function(){const{crypto:e}=globalThis;if(e!=null&&e.randomUUID)return _v=e.randomUUID.bind(e),e.randomUUID();const t=new Uint8Array(1),n=e?()=>e.getRandomValues(t)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,o=>(+o^n()&15>>+o/4).toString(16))};const xR=()=>_v();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function zc(e){return typeof e=="object"&&e!==null&&("name"in e&&e.name==="AbortError"||"message"in e&&String(e.message).includes("FetchRequestCanceledException"))}const Gc=e=>{if(e instanceof Error)return e;if(typeof e=="object"&&e!==null){try{if(Object.prototype.toString.call(e)==="[object Error]"){const t=new Error(e.message,e.cause?{cause:e.cause}:{});return e.stack&&(t.stack=e.stack),e.cause&&!t.cause&&(t.cause=e.cause),e.name&&(t.name=e.name),t}}catch{}try{return new Error(JSON.stringify(e))}catch{}}return new Error(e)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ft extends Error{}class Ue extends ft{constructor(t,n,o,r){super(`${Ue.makeMessage(t,n,o)}`),this.status=t,this.headers=r,this.error=n}static makeMessage(t,n,o){const r=n!=null&&n.message?typeof n.message=="string"?n.message:JSON.stringify(n.message):n?JSON.stringify(n):o;return t&&r?`${t} ${r}`:t?`${t} status code (no body)`:r||"(no status code or body)"}static generate(t,n,o,r){if(!t||!r)return new kl({message:o,cause:Gc(n)});const i=n;return t===400?new Pv(t,i,o,r):t===401?new Rv(t,i,o,r):t===403?new Mv(t,i,o,r):t===404?new $v(t,i,o,r):t===409?new Nv(t,i,o,r):t===422?new jv(t,i,o,r):t===429?new Lv(t,i,o,r):t>=500?new Dv(t,i,o,r):new Ue(t,i,o,r)}}class Hc extends Ue{constructor({message:t}={}){super(void 0,void 0,t||"Request was aborted.",void 0)}}class kl extends Ue{constructor({message:t,cause:n}){super(void 0,void 0,t||"Connection error.",void 0),n&&(this.cause=n)}}class Av extends kl{constructor({message:t}={}){super({message:t??"Request timed out."})}}class Pv extends Ue{}class Rv extends Ue{}class Mv extends Ue{}class $v extends Ue{}class Nv extends Ue{}class jv extends Ue{}class Lv extends Ue{}class Dv extends Ue{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const SR=/^[a-z][a-z0-9+.-]*:/i,bR=e=>SR.test(e);let Wc=e=>(Wc=Array.isArray,Wc(e));const kR=Wc;let CR=kR;const Zh=CR;function TR(e){if(!e)return!0;for(const t in e)return!1;return!0}function ER(e,t){return Object.prototype.hasOwnProperty.call(e,t)}const IR=(e,t)=>{if(typeof t!="number"||!Number.isInteger(t))throw new ft(`${e} must be an integer`);if(t<0)throw new ft(`${e} must be a positive integer`);return t},_R=e=>{try{return JSON.parse(e)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const AR=e=>new Promise(t=>setTimeout(t,e));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oo="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function PR(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const RR=()=>{var e,t,n,o,r;const i=PR();if(i==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":oo,"X-Stainless-OS":tm(Deno.build.os),"X-Stainless-Arch":em(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:(t=(e=Deno.version)===null||e===void 0?void 0:e.deno)!==null&&t!==void 0?t:"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":oo,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(i==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":oo,"X-Stainless-OS":tm((n=globalThis.process.platform)!==null&&n!==void 0?n:"unknown"),"X-Stainless-Arch":em((o=globalThis.process.arch)!==null&&o!==void 0?o:"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":(r=globalThis.process.version)!==null&&r!==void 0?r:"unknown"};const s=MR();return s?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":oo,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${s.browser}`,"X-Stainless-Runtime-Version":s.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":oo,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function MR(){if(typeof navigator>"u"||!navigator)return null;const e=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:t,pattern:n}of e){const o=n.exec(navigator.userAgent);if(o){const r=o[1]||0,i=o[2]||0,s=o[3]||0;return{browser:t,version:`${r}.${i}.${s}`}}}return null}const em=e=>e==="x32"?"x32":e==="x86_64"||e==="x64"?"x64":e==="arm"?"arm":e==="aarch64"||e==="arm64"?"arm64":e?`other:${e}`:"unknown",tm=e=>(e=e.toLowerCase(),e.includes("ios")?"iOS":e==="android"?"Android":e==="darwin"?"MacOS":e==="win32"?"Windows":e==="freebsd"?"FreeBSD":e==="openbsd"?"OpenBSD":e==="linux"?"Linux":e?`Other:${e}`:"Unknown");let Ai;const $R=()=>Ai??(Ai=RR());/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function NR(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Bv(...e){const t=globalThis.ReadableStream;if(typeof t>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...e)}function jR(e){let t=Symbol.asyncIterator in e?e[Symbol.asyncIterator]():e[Symbol.iterator]();return Bv({start(){},async pull(n){const{done:o,value:r}=await t.next();o?n.close():n.enqueue(r)},async cancel(){var n;await((n=t.return)===null||n===void 0?void 0:n.call(t))}})}function Uv(e){if(e[Symbol.asyncIterator])return e;const t=e.getReader();return{async next(){try{const n=await t.read();return n!=null&&n.done&&t.releaseLock(),n}catch(n){throw t.releaseLock(),n}},async return(){const n=t.cancel();return t.releaseLock(),await n,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function LR(e){var t,n;if(e===null||typeof e!="object")return;if(e[Symbol.asyncIterator]){await((n=(t=e[Symbol.asyncIterator]()).return)===null||n===void 0?void 0:n.call(t));return}const o=e.getReader(),r=o.cancel();o.releaseLock(),await r}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DR=({headers:e,body:t})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(t)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fv=()=>{var e;if(typeof File>"u"){const{process:t}=globalThis,n=typeof((e=t==null?void 0:t.versions)===null||e===void 0?void 0:e.node)=="string"&&parseInt(t.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(n?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function ma(e,t,n){return Fv(),new File(e,t??"unknown_file",n)}function BR(e){return(typeof e=="object"&&e!==null&&("name"in e&&e.name&&String(e.name)||"url"in e&&e.url&&String(e.url)||"filename"in e&&e.filename&&String(e.filename)||"path"in e&&e.path&&String(e.path))||"").split(/[\\/]/).pop()||void 0}const UR=e=>e!=null&&typeof e=="object"&&typeof e[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Vv=e=>e!=null&&typeof e=="object"&&typeof e.size=="number"&&typeof e.type=="string"&&typeof e.text=="function"&&typeof e.slice=="function"&&typeof e.arrayBuffer=="function",FR=e=>e!=null&&typeof e=="object"&&typeof e.name=="string"&&typeof e.lastModified=="number"&&Vv(e),VR=e=>e!=null&&typeof e=="object"&&typeof e.url=="string"&&typeof e.blob=="function";async function zR(e,t,n){if(Fv(),e=await e,FR(e))return e instanceof File?e:ma([await e.arrayBuffer()],e.name);if(VR(e)){const r=await e.blob();return t||(t=new URL(e.url).pathname.split(/[\\/]/).pop()),ma(await qc(r),t,n)}const o=await qc(e);if(t||(t=BR(e)),!(n!=null&&n.type)){const r=o.find(i=>typeof i=="object"&&"type"in i&&i.type);typeof r=="string"&&(n=Object.assign(Object.assign({},n),{type:r}))}return ma(o,t,n)}async function qc(e){var t,n,o,r,i;let s=[];if(typeof e=="string"||ArrayBuffer.isView(e)||e instanceof ArrayBuffer)s.push(e);else if(Vv(e))s.push(e instanceof Blob?e:await e.arrayBuffer());else if(UR(e))try{for(var c=!0,u=Tt(e),p;p=await u.next(),t=p.done,!t;c=!0){r=p.value,c=!1;const f=r;s.push(...await qc(f))}}catch(f){n={error:f}}finally{try{!c&&!t&&(o=u.return)&&await o.call(u)}finally{if(n)throw n.error}}else{const f=(i=e==null?void 0:e.constructor)===null||i===void 0?void 0:i.name;throw new Error(`Unexpected data type: ${typeof e}${f?`; constructor: ${f}`:""}${GR(e)}`)}return s}function GR(e){return typeof e!="object"||e===null?"":`; props: [${Object.getOwnPropertyNames(e).map(n=>`"${n}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class zv{constructor(t){this._client=t}}zv._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Gv(e){return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const nm=Object.freeze(Object.create(null)),HR=(e=Gv)=>function(n,...o){if(n.length===1)return n[0];let r=!1;const i=[],s=n.reduce((f,h,m)=>{var g,S,C;/[?#]/.test(h)&&(r=!0);const k=o[m];let w=(r?encodeURIComponent:e)(""+k);return m!==o.length&&(k==null||typeof k=="object"&&k.toString===((C=Object.getPrototypeOf((S=Object.getPrototypeOf((g=k.hasOwnProperty)!==null&&g!==void 0?g:nm))!==null&&S!==void 0?S:nm))===null||C===void 0?void 0:C.toString))&&(w=k+"",i.push({start:f.length+h.length,length:w.length,error:`Value of type ${Object.prototype.toString.call(k).slice(8,-1)} is not a valid path parameter`})),f+h+(m===o.length?"":w)},""),c=s.split(/[?#]/,1)[0],u=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let p;for(;(p=u.exec(c))!==null;)i.push({start:p.index,length:p[0].length,error:`Value "${p[0]}" can't be safely passed as a path parameter`});if(i.sort((f,h)=>f.start-h.start),i.length>0){let f=0;const h=i.reduce((m,g)=>{const S=" ".repeat(g.start-f),C="^".repeat(g.length);return f=g.start+g.length,m+S+C},"");throw new ft(`Path parameters result in path with invalid segments:
${i.map(m=>m.error).join(`
`)}
${s}
${h}`)}return s},Pi=HR(Gv);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Hv extends zv{create(t,n){var o;const{api_version:r=this._client.apiVersion}=t,i=zs(t,["api_version"]);if("model"in i&&"agent_config"in i)throw new ft("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in i&&"generation_config"in i)throw new ft("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(Pi`/${r}/interactions`,Object.assign(Object.assign({body:i},n),{stream:(o=t.stream)!==null&&o!==void 0?o:!1}))}delete(t,n={},o){const{api_version:r=this._client.apiVersion}=n??{};return this._client.delete(Pi`/${r}/interactions/${t}`,o)}cancel(t,n={},o){const{api_version:r=this._client.apiVersion}=n??{};return this._client.post(Pi`/${r}/interactions/${t}/cancel`,o)}get(t,n={},o){var r;const i=n??{},{api_version:s=this._client.apiVersion}=i,c=zs(i,["api_version"]);return this._client.get(Pi`/${s}/interactions/${t}`,Object.assign(Object.assign({query:c},o),{stream:(r=n==null?void 0:n.stream)!==null&&r!==void 0?r:!1}))}}Hv._key=Object.freeze(["interactions"]);class Wv extends Hv{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function WR(e){let t=0;for(const r of e)t+=r.length;const n=new Uint8Array(t);let o=0;for(const r of e)n.set(r,o),o+=r.length;return n}let Ri;function mu(e){let t;return(Ri??(t=new globalThis.TextEncoder,Ri=t.encode.bind(t)))(e)}let Mi;function om(e){let t;return(Mi??(t=new globalThis.TextDecoder,Mi=t.decode.bind(t)))(e)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Cl{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null}decode(t){if(t==null)return[];const n=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?mu(t):t;this.buffer=WR([this.buffer,n]);const o=[];let r;for(;(r=qR(this.buffer,this.carriageReturnIndex))!=null;){if(r.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=r.index;continue}if(this.carriageReturnIndex!=null&&(r.index!==this.carriageReturnIndex+1||r.carriage)){o.push(om(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null;continue}const i=this.carriageReturnIndex!==null?r.preceding-1:r.preceding,s=om(this.buffer.subarray(0,i));o.push(s),this.buffer=this.buffer.subarray(r.index),this.carriageReturnIndex=null}return o}flush(){return this.buffer.length?this.decode(`
`):[]}}Cl.NEWLINE_CHARS=new Set([`
`,"\r"]);Cl.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function qR(e,t){for(let r=t??0;r<e.length;r++){if(e[r]===10)return{preceding:r,index:r+1,carriage:!1};if(e[r]===13)return{preceding:r,index:r+1,carriage:!0}}return null}function OR(e){for(let o=0;o<e.length-1;o++){if(e[o]===10&&e[o+1]===10||e[o]===13&&e[o+1]===13)return o+2;if(e[o]===13&&e[o+1]===10&&o+3<e.length&&e[o+2]===13&&e[o+3]===10)return o+4}return-1}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gs={off:0,error:200,warn:300,info:400,debug:500},rm=(e,t,n)=>{if(e){if(ER(Gs,e))return e;Le(n).warn(`${t} was set to ${JSON.stringify(e)}, expected one of ${JSON.stringify(Object.keys(Gs))}`)}};function yr(){}function $i(e,t,n){return!t||Gs[e]>Gs[n]?yr:t[e].bind(t)}const JR={error:yr,warn:yr,info:yr,debug:yr};let im=new WeakMap;function Le(e){var t;const n=e.logger,o=(t=e.logLevel)!==null&&t!==void 0?t:"off";if(!n)return JR;const r=im.get(n);if(r&&r[0]===o)return r[1];const i={error:$i("error",n,o),warn:$i("warn",n,o),info:$i("info",n,o),debug:$i("debug",n,o)};return im.set(n,[o,i]),i}const Rn=e=>(e.options&&(e.options=Object.assign({},e.options),delete e.options.headers),e.headers&&(e.headers=Object.fromEntries((e.headers instanceof Headers?[...e.headers]:Object.entries(e.headers)).map(([t,n])=>[t,t.toLowerCase()==="x-goog-api-key"||t.toLowerCase()==="authorization"||t.toLowerCase()==="cookie"||t.toLowerCase()==="set-cookie"?"***":n]))),"retryOfRequestLogID"in e&&(e.retryOfRequestLogID&&(e.retryOf=e.retryOfRequestLogID),delete e.retryOfRequestLogID),e);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class So{constructor(t,n,o){this.iterator=t,this.controller=n,this.client=o}static fromSSEResponse(t,n,o){let r=!1;const i=o?Le(o):console;function s(){return Ct(this,arguments,function*(){var u,p,f,h;if(r)throw new ft("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let m=!1;try{try{for(var g=!0,S=Tt(YR(t,n)),C;C=yield H(S.next()),u=C.done,!u;g=!0){h=C.value,g=!1;const k=h;if(!m)if(k.data.startsWith("[DONE]")){m=!0;continue}else try{yield yield H(JSON.parse(k.data))}catch(w){throw i.error("Could not parse message into JSON:",k.data),i.error("From chunk:",k.raw),w}}}catch(k){p={error:k}}finally{try{!g&&!u&&(f=S.return)&&(yield H(f.call(S)))}finally{if(p)throw p.error}}m=!0}catch(k){if(zc(k))return yield H(void 0);throw k}finally{m||n.abort()}})}return new So(s,n,o)}static fromReadableStream(t,n,o){let r=!1;function i(){return Ct(this,arguments,function*(){var u,p,f,h;const m=new Cl,g=Uv(t);try{for(var S=!0,C=Tt(g),k;k=yield H(C.next()),u=k.done,!u;S=!0){h=k.value,S=!1;const w=h;for(const x of m.decode(w))yield yield H(x)}}catch(w){p={error:w}}finally{try{!S&&!u&&(f=C.return)&&(yield H(f.call(C)))}finally{if(p)throw p.error}}for(const w of m.flush())yield yield H(w)})}function s(){return Ct(this,arguments,function*(){var u,p,f,h;if(r)throw new ft("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let m=!1;try{try{for(var g=!0,S=Tt(i()),C;C=yield H(S.next()),u=C.done,!u;g=!0){h=C.value,g=!1;const k=h;m||k&&(yield yield H(JSON.parse(k)))}}catch(k){p={error:k}}finally{try{!g&&!u&&(f=S.return)&&(yield H(f.call(S)))}finally{if(p)throw p.error}}m=!0}catch(k){if(zc(k))return yield H(void 0);throw k}finally{m||n.abort()}})}return new So(s,n,o)}[Symbol.asyncIterator](){return this.iterator()}tee(){const t=[],n=[],o=this.iterator(),r=i=>({next:()=>{if(i.length===0){const s=o.next();t.push(s),n.push(s)}return i.shift()}});return[new So(()=>r(t),this.controller,this.client),new So(()=>r(n),this.controller,this.client)]}toReadableStream(){const t=this;let n;return Bv({async start(){n=t[Symbol.asyncIterator]()},async pull(o){try{const{value:r,done:i}=await n.next();if(i)return o.close();const s=mu(JSON.stringify(r)+`
`);o.enqueue(s)}catch(r){o.error(r)}},async cancel(){var o;await((o=n.return)===null||o===void 0?void 0:o.call(n))}})}}function YR(e,t){return Ct(this,arguments,function*(){var o,r,i,s;if(!e.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new ft("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new ft("Attempted to iterate over a response with no body");const c=new QR,u=new Cl,p=Uv(e.body);try{for(var f=!0,h=Tt(KR(p)),m;m=yield H(h.next()),o=m.done,!o;f=!0){s=m.value,f=!1;const g=s;for(const S of u.decode(g)){const C=c.decode(S);C&&(yield yield H(C))}}}catch(g){r={error:g}}finally{try{!f&&!o&&(i=h.return)&&(yield H(i.call(h)))}finally{if(r)throw r.error}}for(const g of u.flush()){const S=c.decode(g);S&&(yield yield H(S))}})}function KR(e){return Ct(this,arguments,function*(){var n,o,r,i;let s=new Uint8Array;try{for(var c=!0,u=Tt(e),p;p=yield H(u.next()),n=p.done,!n;c=!0){i=p.value,c=!1;const f=i;if(f==null)continue;const h=f instanceof ArrayBuffer?new Uint8Array(f):typeof f=="string"?mu(f):f;let m=new Uint8Array(s.length+h.length);m.set(s),m.set(h,s.length),s=m;let g;for(;(g=OR(s))!==-1;)yield yield H(s.slice(0,g)),s=s.slice(g)}}catch(f){o={error:f}}finally{try{!c&&!n&&(r=u.return)&&(yield H(r.call(u)))}finally{if(o)throw o.error}}s.length>0&&(yield yield H(s))})}class QR{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(t){if(t.endsWith("\r")&&(t=t.substring(0,t.length-1)),!t){if(!this.event&&!this.data.length)return null;const i={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],i}if(this.chunks.push(t),t.startsWith(":"))return null;let[n,o,r]=XR(t,":");return r.startsWith(" ")&&(r=r.substring(1)),n==="event"?this.event=r:n==="data"&&this.data.push(r),null}}function XR(e,t){const n=e.indexOf(t);return n!==-1?[e.substring(0,n),t,e.substring(n+t.length)]:[e,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function ZR(e,t){const{response:n,requestLogID:o,retryOfRequestLogID:r,startTime:i}=t,s=await(async()=>{var c;if(t.options.stream)return Le(e).debug("response",n.status,n.url,n.headers,n.body),t.options.__streamClass?t.options.__streamClass.fromSSEResponse(n,t.controller,e):So.fromSSEResponse(n,t.controller,e);if(n.status===204)return null;if(t.options.__binaryResponse)return n;const u=n.headers.get("content-type"),p=(c=u==null?void 0:u.split(";")[0])===null||c===void 0?void 0:c.trim();return(p==null?void 0:p.includes("application/json"))||(p==null?void 0:p.endsWith("+json"))?await n.json():await n.text()})();return Le(e).debug(`[${o}] response parsed`,Rn({retryOfRequestLogID:r,url:n.url,status:n.status,body:s,durationMs:Date.now()-i})),s}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gu extends Promise{constructor(t,n,o=ZR){super(r=>{r(null)}),this.responsePromise=n,this.parseResponse=o,this.client=t}_thenUnwrap(t){return new gu(this.client,this.responsePromise,async(n,o)=>t(await this.parseResponse(n,o),o))}asResponse(){return this.responsePromise.then(t=>t.response)}async withResponse(){const[t,n]=await Promise.all([this.parse(),this.asResponse()]);return{data:t,response:n}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(t=>this.parseResponse(this.client,t))),this.parsedPromise}then(t,n){return this.parse().then(t,n)}catch(t){return this.parse().catch(t)}finally(t){return this.parse().finally(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qv=Symbol("brand.privateNullableHeaders");function*eM(e){if(!e)return;if(qv in e){const{values:o,nulls:r}=e;yield*o.entries();for(const i of r)yield[i,null];return}let t=!1,n;e instanceof Headers?n=e.entries():Zh(e)?n=e:(t=!0,n=Object.entries(e??{}));for(let o of n){const r=o[0];if(typeof r!="string")throw new TypeError("expected header name to be a string");const i=Zh(o[1])?o[1]:[o[1]];let s=!1;for(const c of i)c!==void 0&&(t&&!s&&(s=!0,yield[r,null]),yield[r,c])}}const lr=e=>{const t=new Headers,n=new Set;for(const o of e){const r=new Set;for(const[i,s]of eM(o)){const c=i.toLowerCase();r.has(c)||(t.delete(i),r.add(c)),s===null?(t.delete(i),n.add(c)):(t.append(i,s),n.delete(c))}}return{[qv]:!0,values:t,nulls:n}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ga=e=>{var t,n,o,r,i,s;if(typeof globalThis.process<"u")return(o=(n=(t=TE)===null||t===void 0?void 0:t[e])===null||n===void 0?void 0:n.trim())!==null&&o!==void 0?o:void 0;if(typeof globalThis.Deno<"u")return(s=(i=(r=globalThis.Deno.env)===null||r===void 0?void 0:r.get)===null||i===void 0?void 0:i.call(r,e))===null||s===void 0?void 0:s.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Ov;class Tl{constructor(t){var n,o,r,i,s,c,u,{baseURL:p=ga("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:f=(n=ga("GEMINI_API_KEY"))!==null&&n!==void 0?n:null,apiVersion:h="v1beta"}=t,m=zs(t,["baseURL","apiKey","apiVersion"]);const g=Object.assign(Object.assign({apiKey:f,apiVersion:h},m),{baseURL:p||"https://generativelanguage.googleapis.com"});this.baseURL=g.baseURL,this.timeout=(o=g.timeout)!==null&&o!==void 0?o:Tl.DEFAULT_TIMEOUT,this.logger=(r=g.logger)!==null&&r!==void 0?r:console;const S="warn";this.logLevel=S,this.logLevel=(s=(i=rm(g.logLevel,"ClientOptions.logLevel",this))!==null&&i!==void 0?i:rm(ga("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&s!==void 0?s:S,this.fetchOptions=g.fetchOptions,this.maxRetries=(c=g.maxRetries)!==null&&c!==void 0?c:2,this.fetch=(u=g.fetch)!==null&&u!==void 0?u:NR(),this.encoder=DR,this._options=g,this.apiKey=f,this.apiVersion=h,this.clientAdapter=g.clientAdapter}withOptions(t){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),t))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:t,nulls:n}){if(!(t.has("authorization")||t.has("x-goog-api-key"))&&!(this.apiKey&&t.get("x-goog-api-key"))&&!n.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(t){const n=lr([t.headers]);if(!(n.values.has("authorization")||n.values.has("x-goog-api-key"))){if(this.apiKey)return lr([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return lr([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(t){return Object.entries(t).filter(([n,o])=>typeof o<"u").map(([n,o])=>{if(typeof o=="string"||typeof o=="number"||typeof o=="boolean")return`${encodeURIComponent(n)}=${encodeURIComponent(o)}`;if(o===null)return`${encodeURIComponent(n)}=`;throw new ft(`Cannot stringify type ${typeof o}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${oo}`}defaultIdempotencyKey(){return`stainless-node-retry-${xR()}`}makeStatusError(t,n,o,r){return Ue.generate(t,n,o,r)}buildURL(t,n,o){const r=!this.baseURLOverridden()&&o||this.baseURL,i=bR(t)?new URL(t):new URL(r+(r.endsWith("/")&&t.startsWith("/")?t.slice(1):t)),s=this.defaultQuery();return TR(s)||(n=Object.assign(Object.assign({},s),n)),typeof n=="object"&&n&&!Array.isArray(n)&&(i.search=this.stringifyQuery(n)),i.toString()}async prepareOptions(t){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!t.path.startsWith(`/${this.apiVersion}/projects/`)){const n=t.path.slice(this.apiVersion.length+1);t.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${n}`}}async prepareRequest(t,{url:n,options:o}){}get(t,n){return this.methodRequest("get",t,n)}post(t,n){return this.methodRequest("post",t,n)}patch(t,n){return this.methodRequest("patch",t,n)}put(t,n){return this.methodRequest("put",t,n)}delete(t,n){return this.methodRequest("delete",t,n)}methodRequest(t,n,o){return this.request(Promise.resolve(o).then(r=>Object.assign({method:t,path:n},r)))}request(t,n=null){return new gu(this,this.makeRequest(t,n,void 0))}async makeRequest(t,n,o){var r,i,s;const c=await t,u=(r=c.maxRetries)!==null&&r!==void 0?r:this.maxRetries;n==null&&(n=u),await this.prepareOptions(c);const{req:p,url:f,timeout:h}=await this.buildRequest(c,{retryCount:u-n});await this.prepareRequest(p,{url:f,options:c});const m="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),g=o===void 0?"":`, retryOf: ${o}`,S=Date.now();if(Le(this).debug(`[${m}] sending request`,Rn({retryOfRequestLogID:o,method:c.method,url:f,options:c,headers:p.headers})),!((i=c.signal)===null||i===void 0)&&i.aborted)throw new Hc;const C=new AbortController,k=await this.fetchWithTimeout(f,p,h,C).catch(Gc),w=Date.now();if(k instanceof globalThis.Error){const y=`retrying, ${n} attempts remaining`;if(!((s=c.signal)===null||s===void 0)&&s.aborted)throw new Hc;const b=zc(k)||/timed? ?out/i.test(String(k)+("cause"in k?String(k.cause):""));if(n)return Le(this).info(`[${m}] connection ${b?"timed out":"failed"} - ${y}`),Le(this).debug(`[${m}] connection ${b?"timed out":"failed"} (${y})`,Rn({retryOfRequestLogID:o,url:f,durationMs:w-S,message:k.message})),this.retryRequest(c,n,o??m);throw Le(this).info(`[${m}] connection ${b?"timed out":"failed"} - error; no more retries left`),Le(this).debug(`[${m}] connection ${b?"timed out":"failed"} (error; no more retries left)`,Rn({retryOfRequestLogID:o,url:f,durationMs:w-S,message:k.message})),b?new Av:new kl({cause:k})}const x=`[${m}${g}] ${p.method} ${f} ${k.ok?"succeeded":"failed"} with status ${k.status} in ${w-S}ms`;if(!k.ok){const y=await this.shouldRetry(k);if(n&&y){const P=`retrying, ${n} attempts remaining`;return await LR(k.body),Le(this).info(`${x} - ${P}`),Le(this).debug(`[${m}] response error (${P})`,Rn({retryOfRequestLogID:o,url:k.url,status:k.status,headers:k.headers,durationMs:w-S})),this.retryRequest(c,n,o??m,k.headers)}const b=y?"error; no more retries left":"error; not retryable";Le(this).info(`${x} - ${b}`);const T=await k.text().catch(P=>Gc(P).message),A=_R(T),I=A?void 0:T;throw Le(this).debug(`[${m}] response error (${b})`,Rn({retryOfRequestLogID:o,url:k.url,status:k.status,headers:k.headers,message:I,durationMs:Date.now()-S})),this.makeStatusError(k.status,A,I,k.headers)}return Le(this).info(x),Le(this).debug(`[${m}] response start`,Rn({retryOfRequestLogID:o,url:k.url,status:k.status,headers:k.headers,durationMs:w-S})),{response:k,options:c,controller:C,requestLogID:m,retryOfRequestLogID:o,startTime:S}}async fetchWithTimeout(t,n,o,r){const i=n||{},{signal:s,method:c}=i,u=zs(i,["signal","method"]);s&&s.addEventListener("abort",()=>r.abort());const p=setTimeout(()=>r.abort(),o),f=globalThis.ReadableStream&&u.body instanceof globalThis.ReadableStream||typeof u.body=="object"&&u.body!==null&&Symbol.asyncIterator in u.body,h=Object.assign(Object.assign(Object.assign({signal:r.signal},f?{duplex:"half"}:{}),{method:"GET"}),u);c&&(h.method=c.toUpperCase());try{return await this.fetch.call(void 0,t,h)}finally{clearTimeout(p)}}async shouldRetry(t){const n=t.headers.get("x-should-retry");return n==="true"?!0:n==="false"?!1:t.status===408||t.status===409||t.status===429||t.status>=500}async retryRequest(t,n,o,r){var i;let s;const c=r==null?void 0:r.get("retry-after-ms");if(c){const p=parseFloat(c);Number.isNaN(p)||(s=p)}const u=r==null?void 0:r.get("retry-after");if(u&&!s){const p=parseFloat(u);Number.isNaN(p)?s=Date.parse(u)-Date.now():s=p*1e3}if(!(s&&0<=s&&s<60*1e3)){const p=(i=t.maxRetries)!==null&&i!==void 0?i:this.maxRetries;s=this.calculateDefaultRetryTimeoutMillis(n,p)}return await AR(s),this.makeRequest(t,n-1,o)}calculateDefaultRetryTimeoutMillis(t,n){const i=n-t,s=Math.min(.5*Math.pow(2,i),8),c=1-Math.random()*.25;return s*c*1e3}async buildRequest(t,{retryCount:n=0}={}){var o,r,i;const s=Object.assign({},t),{method:c,path:u,query:p,defaultBaseURL:f}=s,h=this.buildURL(u,p,f);"timeout"in s&&IR("timeout",s.timeout),s.timeout=(o=s.timeout)!==null&&o!==void 0?o:this.timeout;const{bodyHeaders:m,body:g}=this.buildBody({options:s}),S=await this.buildHeaders({options:t,method:c,bodyHeaders:m,retryCount:n});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:c,headers:S},s.signal&&{signal:s.signal}),globalThis.ReadableStream&&g instanceof globalThis.ReadableStream&&{duplex:"half"}),g&&{body:g}),(r=this.fetchOptions)!==null&&r!==void 0?r:{}),(i=s.fetchOptions)!==null&&i!==void 0?i:{}),url:h,timeout:s.timeout}}async buildHeaders({options:t,method:n,bodyHeaders:o,retryCount:r}){let i={};this.idempotencyHeader&&n!=="get"&&(t.idempotencyKey||(t.idempotencyKey=this.defaultIdempotencyKey()),i[this.idempotencyHeader]=t.idempotencyKey);const s=await this.authHeaders(t);let c=lr([i,Object.assign(Object.assign({Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r)},t.timeout?{"X-Stainless-Timeout":String(Math.trunc(t.timeout/1e3))}:{}),$R()),this._options.defaultHeaders,o,t.headers,s]);return this.validateHeaders(c),c.values}buildBody({options:{body:t,headers:n}}){if(!t)return{bodyHeaders:void 0,body:void 0};const o=lr([n]);return ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof DataView||typeof t=="string"&&o.values.has("content-type")||globalThis.Blob&&t instanceof globalThis.Blob||t instanceof FormData||t instanceof URLSearchParams||globalThis.ReadableStream&&t instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:t}:typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t&&"next"in t&&typeof t.next=="function")?{bodyHeaders:void 0,body:jR(t)}:this.encoder({body:t,headers:o})}}Tl.DEFAULT_TIMEOUT=6e4;class Ce extends Tl{constructor(){super(...arguments),this.interactions=new Wv(this)}}Ov=Ce;Ce.GeminiNextGenAPIClient=Ov;Ce.GeminiNextGenAPIClientError=ft;Ce.APIError=Ue;Ce.APIConnectionError=kl;Ce.APIConnectionTimeoutError=Av;Ce.APIUserAbortError=Hc;Ce.NotFoundError=$v;Ce.ConflictError=Nv;Ce.RateLimitError=Lv;Ce.BadRequestError=Pv;Ce.AuthenticationError=Rv;Ce.InternalServerError=Dv;Ce.PermissionDeniedError=Mv;Ce.UnprocessableEntityError=jv;Ce.toFile=zR;Ce.Interactions=Wv;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tM(e,t){const n={},o=l(e,["name"]);return o!=null&&d(n,["_url","name"],o),n}function nM(e,t){const n={},o=l(e,["name"]);return o!=null&&d(n,["_url","name"],o),n}function oM(e,t){const n={},o=l(e,["sdkHttpResponse"]);return o!=null&&d(n,["sdkHttpResponse"],o),n}function rM(e,t){const n={},o=l(e,["sdkHttpResponse"]);return o!=null&&d(n,["sdkHttpResponse"],o),n}function iM(e,t,n){const o={};if(l(e,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const r=l(e,["tunedModelDisplayName"]);if(t!==void 0&&r!=null&&d(t,["displayName"],r),l(e,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const i=l(e,["epochCount"]);t!==void 0&&i!=null&&d(t,["tuningTask","hyperparameters","epochCount"],i);const s=l(e,["learningRateMultiplier"]);if(s!=null&&d(o,["tuningTask","hyperparameters","learningRateMultiplier"],s),l(e,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(l(e,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(l(e,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const c=l(e,["batchSize"]);t!==void 0&&c!=null&&d(t,["tuningTask","hyperparameters","batchSize"],c);const u=l(e,["learningRate"]);if(t!==void 0&&u!=null&&d(t,["tuningTask","hyperparameters","learningRate"],u),l(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(l(e,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");return o}function sM(e,t,n){const o={};let r=l(n,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const g=l(e,["validationDataset"]);t!==void 0&&g!=null&&d(t,["supervisedTuningSpec"],sm(g))}else if(r==="PREFERENCE_TUNING"){const g=l(e,["validationDataset"]);t!==void 0&&g!=null&&d(t,["preferenceOptimizationSpec"],sm(g))}const i=l(e,["tunedModelDisplayName"]);t!==void 0&&i!=null&&d(t,["tunedModelDisplayName"],i);const s=l(e,["description"]);t!==void 0&&s!=null&&d(t,["description"],s);let c=l(n,["config","method"]);if(c===void 0&&(c="SUPERVISED_FINE_TUNING"),c==="SUPERVISED_FINE_TUNING"){const g=l(e,["epochCount"]);t!==void 0&&g!=null&&d(t,["supervisedTuningSpec","hyperParameters","epochCount"],g)}else if(c==="PREFERENCE_TUNING"){const g=l(e,["epochCount"]);t!==void 0&&g!=null&&d(t,["preferenceOptimizationSpec","hyperParameters","epochCount"],g)}let u=l(n,["config","method"]);if(u===void 0&&(u="SUPERVISED_FINE_TUNING"),u==="SUPERVISED_FINE_TUNING"){const g=l(e,["learningRateMultiplier"]);t!==void 0&&g!=null&&d(t,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],g)}else if(u==="PREFERENCE_TUNING"){const g=l(e,["learningRateMultiplier"]);t!==void 0&&g!=null&&d(t,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],g)}let p=l(n,["config","method"]);if(p===void 0&&(p="SUPERVISED_FINE_TUNING"),p==="SUPERVISED_FINE_TUNING"){const g=l(e,["exportLastCheckpointOnly"]);t!==void 0&&g!=null&&d(t,["supervisedTuningSpec","exportLastCheckpointOnly"],g)}else if(p==="PREFERENCE_TUNING"){const g=l(e,["exportLastCheckpointOnly"]);t!==void 0&&g!=null&&d(t,["preferenceOptimizationSpec","exportLastCheckpointOnly"],g)}let f=l(n,["config","method"]);if(f===void 0&&(f="SUPERVISED_FINE_TUNING"),f==="SUPERVISED_FINE_TUNING"){const g=l(e,["adapterSize"]);t!==void 0&&g!=null&&d(t,["supervisedTuningSpec","hyperParameters","adapterSize"],g)}else if(f==="PREFERENCE_TUNING"){const g=l(e,["adapterSize"]);t!==void 0&&g!=null&&d(t,["preferenceOptimizationSpec","hyperParameters","adapterSize"],g)}if(l(e,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(l(e,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");const h=l(e,["labels"]);t!==void 0&&h!=null&&d(t,["labels"],h);const m=l(e,["beta"]);return t!==void 0&&m!=null&&d(t,["preferenceOptimizationSpec","hyperParameters","beta"],m),o}function lM(e,t){const n={},o=l(e,["baseModel"]);o!=null&&d(n,["baseModel"],o);const r=l(e,["preTunedModel"]);r!=null&&d(n,["preTunedModel"],r);const i=l(e,["trainingDataset"]);i!=null&&vM(i);const s=l(e,["config"]);return s!=null&&iM(s,n),n}function aM(e,t){const n={},o=l(e,["baseModel"]);o!=null&&d(n,["baseModel"],o);const r=l(e,["preTunedModel"]);r!=null&&d(n,["preTunedModel"],r);const i=l(e,["trainingDataset"]);i!=null&&wM(i,n,t);const s=l(e,["config"]);return s!=null&&sM(s,n,t),n}function cM(e,t){const n={},o=l(e,["name"]);return o!=null&&d(n,["_url","name"],o),n}function dM(e,t){const n={},o=l(e,["name"]);return o!=null&&d(n,["_url","name"],o),n}function uM(e,t,n){const o={},r=l(e,["pageSize"]);t!==void 0&&r!=null&&d(t,["_query","pageSize"],r);const i=l(e,["pageToken"]);t!==void 0&&i!=null&&d(t,["_query","pageToken"],i);const s=l(e,["filter"]);return t!==void 0&&s!=null&&d(t,["_query","filter"],s),o}function pM(e,t,n){const o={},r=l(e,["pageSize"]);t!==void 0&&r!=null&&d(t,["_query","pageSize"],r);const i=l(e,["pageToken"]);t!==void 0&&i!=null&&d(t,["_query","pageToken"],i);const s=l(e,["filter"]);return t!==void 0&&s!=null&&d(t,["_query","filter"],s),o}function fM(e,t){const n={},o=l(e,["config"]);return o!=null&&uM(o,n),n}function hM(e,t){const n={},o=l(e,["config"]);return o!=null&&pM(o,n),n}function mM(e,t){const n={},o=l(e,["sdkHttpResponse"]);o!=null&&d(n,["sdkHttpResponse"],o);const r=l(e,["nextPageToken"]);r!=null&&d(n,["nextPageToken"],r);const i=l(e,["tunedModels"]);if(i!=null){let s=i;Array.isArray(s)&&(s=s.map(c=>Jv(c))),d(n,["tuningJobs"],s)}return n}function gM(e,t){const n={},o=l(e,["sdkHttpResponse"]);o!=null&&d(n,["sdkHttpResponse"],o);const r=l(e,["nextPageToken"]);r!=null&&d(n,["nextPageToken"],r);const i=l(e,["tuningJobs"]);if(i!=null){let s=i;Array.isArray(s)&&(s=s.map(c=>Oc(c))),d(n,["tuningJobs"],s)}return n}function yM(e,t){const n={},o=l(e,["name"]);o!=null&&d(n,["model"],o);const r=l(e,["name"]);return r!=null&&d(n,["endpoint"],r),n}function vM(e,t){const n={};if(l(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(l(e,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const o=l(e,["examples"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(i=>i)),d(n,["examples","examples"],r)}return n}function wM(e,t,n){const o={};let r=l(n,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const s=l(e,["gcsUri"]);t!==void 0&&s!=null&&d(t,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(r==="PREFERENCE_TUNING"){const s=l(e,["gcsUri"]);t!==void 0&&s!=null&&d(t,["preferenceOptimizationSpec","trainingDatasetUri"],s)}let i=l(n,["config","method"]);if(i===void 0&&(i="SUPERVISED_FINE_TUNING"),i==="SUPERVISED_FINE_TUNING"){const s=l(e,["vertexDatasetResource"]);t!==void 0&&s!=null&&d(t,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(i==="PREFERENCE_TUNING"){const s=l(e,["vertexDatasetResource"]);t!==void 0&&s!=null&&d(t,["preferenceOptimizationSpec","trainingDatasetUri"],s)}if(l(e,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return o}function Jv(e,t){const n={},o=l(e,["sdkHttpResponse"]);o!=null&&d(n,["sdkHttpResponse"],o);const r=l(e,["name"]);r!=null&&d(n,["name"],r);const i=l(e,["state"]);i!=null&&d(n,["state"],dv(i));const s=l(e,["createTime"]);s!=null&&d(n,["createTime"],s);const c=l(e,["tuningTask","startTime"]);c!=null&&d(n,["startTime"],c);const u=l(e,["tuningTask","completeTime"]);u!=null&&d(n,["endTime"],u);const p=l(e,["updateTime"]);p!=null&&d(n,["updateTime"],p);const f=l(e,["description"]);f!=null&&d(n,["description"],f);const h=l(e,["baseModel"]);h!=null&&d(n,["baseModel"],h);const m=l(e,["_self"]);return m!=null&&d(n,["tunedModel"],yM(m)),n}function Oc(e,t){const n={},o=l(e,["sdkHttpResponse"]);o!=null&&d(n,["sdkHttpResponse"],o);const r=l(e,["name"]);r!=null&&d(n,["name"],r);const i=l(e,["state"]);i!=null&&d(n,["state"],dv(i));const s=l(e,["createTime"]);s!=null&&d(n,["createTime"],s);const c=l(e,["startTime"]);c!=null&&d(n,["startTime"],c);const u=l(e,["endTime"]);u!=null&&d(n,["endTime"],u);const p=l(e,["updateTime"]);p!=null&&d(n,["updateTime"],p);const f=l(e,["error"]);f!=null&&d(n,["error"],f);const h=l(e,["description"]);h!=null&&d(n,["description"],h);const m=l(e,["baseModel"]);m!=null&&d(n,["baseModel"],m);const g=l(e,["tunedModel"]);g!=null&&d(n,["tunedModel"],g);const S=l(e,["preTunedModel"]);S!=null&&d(n,["preTunedModel"],S);const C=l(e,["supervisedTuningSpec"]);C!=null&&d(n,["supervisedTuningSpec"],C);const k=l(e,["preferenceOptimizationSpec"]);k!=null&&d(n,["preferenceOptimizationSpec"],k);const w=l(e,["tuningDataStats"]);w!=null&&d(n,["tuningDataStats"],w);const x=l(e,["encryptionSpec"]);x!=null&&d(n,["encryptionSpec"],x);const y=l(e,["partnerModelTuningSpec"]);y!=null&&d(n,["partnerModelTuningSpec"],y);const b=l(e,["customBaseModel"]);b!=null&&d(n,["customBaseModel"],b);const T=l(e,["experiment"]);T!=null&&d(n,["experiment"],T);const A=l(e,["labels"]);A!=null&&d(n,["labels"],A);const I=l(e,["outputUri"]);I!=null&&d(n,["outputUri"],I);const _=l(e,["pipelineJob"]);_!=null&&d(n,["pipelineJob"],_);const P=l(e,["serviceAccount"]);P!=null&&d(n,["serviceAccount"],P);const R=l(e,["tunedModelDisplayName"]);R!=null&&d(n,["tunedModelDisplayName"],R);const B=l(e,["veoTuningSpec"]);return B!=null&&d(n,["veoTuningSpec"],B),n}function xM(e,t){const n={},o=l(e,["sdkHttpResponse"]);o!=null&&d(n,["sdkHttpResponse"],o);const r=l(e,["name"]);r!=null&&d(n,["name"],r);const i=l(e,["metadata"]);i!=null&&d(n,["metadata"],i);const s=l(e,["done"]);s!=null&&d(n,["done"],s);const c=l(e,["error"]);return c!=null&&d(n,["error"],c),n}function sm(e,t){const n={},o=l(e,["gcsUri"]);o!=null&&d(n,["validationDatasetUri"],o);const r=l(e,["vertexDatasetResource"]);return r!=null&&d(n,["validationDatasetUri"],r),n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class SM extends Yt{constructor(t){super(),this.apiClient=t,this.list=async(n={})=>new Zn(qt.PAGED_ITEM_TUNING_JOBS,o=>this.listInternal(o),await this.listInternal(n),n),this.get=async n=>await this.getInternal(n),this.tune=async n=>{var o;if(this.apiClient.isVertexAI())if(n.baseModel.startsWith("projects/")){const r={tunedModelName:n.baseModel};!((o=n.config)===null||o===void 0)&&o.preTunedModelCheckpointId&&(r.checkpointId=n.config.preTunedModelCheckpointId);const i=Object.assign(Object.assign({},n),{preTunedModel:r});return i.baseModel=void 0,await this.tuneInternal(i)}else{const r=Object.assign({},n);return await this.tuneInternal(r)}else{const r=Object.assign({},n),i=await this.tuneMldevInternal(r);let s="";return i.metadata!==void 0&&i.metadata.tunedModel!==void 0?s=i.metadata.tunedModel:i.name!==void 0&&i.name.includes("/operations/")&&(s=i.name.split("/operations/")[0]),{name:s,state:jc.JOB_STATE_QUEUED}}}}async getInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=dM(t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>Oc(f))}else{const p=cM(t);return c=L("{name}",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>Jv(f))}}async listInternal(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=hM(t);return c=L("tuningJobs",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=gM(f),m=new Mh;return Object.assign(m,h),m})}else{const p=fM(t);return c=L("tunedModels",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=mM(f),m=new Mh;return Object.assign(m,h),m})}}async cancel(t){var n,o,r,i;let s,c="",u={};if(this.apiClient.isVertexAI()){const p=nM(t);return c=L("{name}:cancel",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=rM(f),m=new $h;return Object.assign(m,h),m})}else{const p=tM(t);return c=L("{name}:cancel",p._url),u=p._query,delete p._url,delete p._query,s=this.apiClient.request({path:c,queryParams:u,body:JSON.stringify(p),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(i=t.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:f.headers},m})),s.then(f=>{const h=oM(f),m=new $h;return Object.assign(m,h),m})}}async tuneInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI()){const c=aM(t,t);return i=L("tuningJobs",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json().then(p=>{const f=p;return f.sdkHttpResponse={headers:u.headers},f})),r.then(u=>Oc(u))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(t){var n,o;let r,i="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const c=lM(t);return i=L("tunedModels",c._url),s=c._query,delete c._url,delete c._query,r=this.apiClient.request({path:i,queryParams:s,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(n=t.config)===null||n===void 0?void 0:n.httpOptions,abortSignal:(o=t.config)===null||o===void 0?void 0:o.abortSignal}).then(u=>u.json().then(p=>{const f=p;return f.sdkHttpResponse={headers:u.headers},f})),r.then(u=>xM(u))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bM{async download(t,n){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const kM=1024*1024*8,CM=3,TM=1e3,EM=2,Hs="x-goog-upload-status";async function IM(e,t,n){var o;const r=await Yv(e,t,n),i=await(r==null?void 0:r.json());if(((o=r==null?void 0:r.headers)===null||o===void 0?void 0:o[Hs])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return i.file}async function _M(e,t,n){var o;const r=await Yv(e,t,n),i=await(r==null?void 0:r.json());if(((o=r==null?void 0:r.headers)===null||o===void 0?void 0:o[Hs])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const s=rv(i),c=new cu;return Object.assign(c,s),c}async function Yv(e,t,n){var o,r;let i=0,s=0,c=new Lc(new Response),u="upload";for(i=e.size;s<i;){const p=Math.min(kM,i-s),f=e.slice(s,s+p);s+p>=i&&(u+=", finalize");let h=0,m=TM;for(;h<CM&&(c=await n.request({path:"",body:f,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:t,headers:{"X-Goog-Upload-Command":u,"X-Goog-Upload-Offset":String(s),"Content-Length":String(p)}}}),!(!((o=c==null?void 0:c.headers)===null||o===void 0)&&o[Hs]));)h++,await PM(m),m=m*EM;if(s+=p,((r=c==null?void 0:c.headers)===null||r===void 0?void 0:r[Hs])!=="active")break;if(i<=s)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return c}async function AM(e){return{size:e.size,type:e.type}}function PM(e){return new Promise(t=>setTimeout(t,e))}class RM{async upload(t,n,o){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await IM(t,n,o)}async uploadToFileSearchStore(t,n,o){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await _M(t,n,o)}async stat(t){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await AM(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class MM{create(t,n,o){return new $M(t,n,o)}}class $M{constructor(t,n,o){this.url=t,this.headers=n,this.callbacks=o}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(t){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(t)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const lm="x-goog-api-key";class NM{constructor(t){this.apiKey=t}async addAuthHeaders(t,n){if(t.get(lm)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");t.append(lm,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const jM="gl-node/";class LM{get interactions(){if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const t=this.httpOptions;t!=null&&t.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const n=new Ce({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:t==null?void 0:t.timeout});return this._interactions=n.interactions,this._interactions}constructor(t){var n;if(t.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(t.project||t.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(n=t.vertexai)!==null&&n!==void 0?n:!1,this.apiKey=t.apiKey;const o=AE(t.httpOptions,t.vertexai,void 0,void 0);o&&(t.httpOptions?t.httpOptions.baseUrl=o:t.httpOptions={baseUrl:o}),this.apiVersion=t.apiVersion,this.httpOptions=t.httpOptions;const r=new NM(this.apiKey);this.apiClient=new AP({auth:r,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:jM+"web",uploader:new RM,downloader:new bM}),this.models=new JP(this.apiClient),this.live=new zP(this.apiClient,r,new MM),this.batches=new r_(this.apiClient),this.chats=new U_(this.models,this.apiClient),this.caches=new L_(this.apiClient),this.files=new Y_(this.apiClient),this.operations=new YP(this.apiClient),this.authTokens=new uR(this.apiClient),this.tunings=new SM(this.apiClient),this.fileSearchStores=new wR(this.apiClient)}}const DM=()=>{const e="PLACEHOLDER_API_KEY";return e!=null&&e.trim()?e.trim():null},BM=({question:e,targetBand:t})=>{const[n,o]=E.useState(""),[r,i]=E.useState(!1),[s,c]=E.useState(null),[u,p]=E.useState(null),f=async()=>{if(!n.trim())return;const h=DM();if(!h){p("未配置 Gemini API Key：请在 `.env.local` 设置 `VITE_GEMINI_API_KEY=你的key` 后重启开发服务。");return}i(!0),p(null),c(null);try{const g=await new LM({apiKey:h}).models.generateContent({model:"gemini-3-flash-preview",contents:`Evaluate the following IELTS Speaking answer for the question: "${e}". 
                The student is aiming for a Band ${t}.
                
                Student Answer: "${n}"`,config:{systemInstruction:"You are an experienced IELTS Speaking Examiner. Provide a strict but constructive evaluation in JSON format. The feedback should be in Chinese (except for the English answer parts).",responseMimeType:"application/json",responseSchema:{type:Me.OBJECT,properties:{overallScore:{type:Me.NUMBER,description:"Estimated band score"},fluency:{type:Me.STRING,description:"Feedback on fluency"},vocabulary:{type:Me.STRING,description:"Feedback on lexical resource"},grammar:{type:Me.STRING,description:"Feedback on grammatical range and accuracy"},improvedAnswer:{type:Me.STRING,description:"A high-scoring (Band 7.5+) version of the student's answer"},tips:{type:Me.ARRAY,items:{type:Me.STRING},description:"3 actionable tips for improvement"}},required:["overallScore","fluency","vocabulary","grammar","improvedAnswer","tips"]}}}),S=JSON.parse(g.text||"{}");c(S)}catch(m){console.error("AI Evaluation failed:",m),p("评价失败，请稍后再试。可能是网络或API问题。")}finally{i(!1)}};return a.jsxs(UM,{children:[a.jsxs(FM,{children:[a.jsx(VM,{children:"输入你的练习文本（可使用语音转文字或手动输入）"}),a.jsx(zM,{placeholder:"在此输入你的回答...",value:n,onChange:h=>o(h.target.value),disabled:r}),a.jsxs(GM,{children:[a.jsx(HM,{onClick:f,disabled:r||!n.trim(),children:r?a.jsx(OM,{}):"开始 AI 评价"}),a.jsx(WM,{onClick:()=>o(""),disabled:r,children:"清空"})]})]}),u&&a.jsx(JM,{children:u}),s&&a.jsxs(YM,{children:[a.jsxs(KM,{children:[a.jsxs(QM,{children:[a.jsx(XM,{children:s.overallScore}),a.jsx(ZM,{children:"估计得分"})]}),a.jsxs(e$,{children:[a.jsxs("p",{children:["目标分数: ",t]}),a.jsxs("p",{children:["AI 评价已生成。你的表达在",s.overallScore>=parseFloat(t)?"达标边缘":"稳步提升中","。"]})]})]}),a.jsxs(t$,{children:[a.jsxs(ya,{children:[a.jsx("strong",{children:"流利度 (FC):"}),a.jsx("p",{children:s.fluency})]}),a.jsxs(ya,{children:[a.jsx("strong",{children:"词汇 (LR):"}),a.jsx("p",{children:s.vocabulary})]}),a.jsxs(ya,{children:[a.jsx("strong",{children:"语法 (GRA):"}),a.jsx("p",{children:s.grammar})]})]}),a.jsxs(n$,{children:[a.jsx("h4",{children:"高分改写参考 (Band 7.5+)"}),a.jsx(o$,{children:s.improvedAnswer})]}),a.jsxs(r$,{children:[a.jsx("h4",{children:"改进建议"}),a.jsx("ul",{children:s.tips.map((h,m)=>a.jsx("li",{children:h},m))})]})]})]})},UM=v.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`,FM=v.div`
    background: ${({theme:e})=>e.colors.boxBg};
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid ${({theme:e})=>e.colors.border};
`,VM=v.div`
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: ${({theme:e})=>e.colors.header};
`,zM=v.textarea`
    width: 100%;
    min-height: 120px;
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
    &:focus {
        outline: none;
        border-color: ${({theme:e})=>e.colors.primaryBlue};
    }
`,GM=v.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`,HM=v.button`
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    transition: transform 0.2s;

    &:hover:not(:disabled) {
        transform: translateY(-2px);
    }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`,WM=v.button`
    background: transparent;
    border: 1px solid ${({theme:e})=>e.colors.border};
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    color: ${({theme:e})=>e.colors.label};
`,qM=ve`
    to { transform: rotate(360deg); }
`,OM=v.div`
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: ${qM} 0.8s linear infinite;
`,JM=v.div`
    color: ${({theme:e})=>e.colors.primaryRed};
    font-weight: 600;
    text-align: center;
    padding: 1rem;
    background: #fff5f5;
    border-radius: 8px;
`,YM=v.div`
    background: white;
    border-radius: 20px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    animation: fadeIn 0.5s ease;
`,KM=v.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,QM=v.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primaryLight};
    border: 4px solid ${({theme:e})=>e.colors.primaryBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,XM=v.div`
    font-size: 2.5rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.primaryBlue};
    line-height: 1;
`,ZM=v.div`
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.label};
`,e$=v.div`
    flex: 1;
    p { margin: 0; line-height: 1.6; }
    p:first-child { font-weight: 800; font-size: 1.1rem; color: ${({theme:e})=>e.colors.header}; }
`,t$=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
`,ya=v.div`
    strong { display: block; margin-bottom: 0.5rem; color: ${({theme:e})=>e.colors.header}; }
    p { font-size: 0.95rem; color: ${({theme:e})=>e.colors.text}; margin: 0; }
`,n$=v.div`
    background: ${({theme:e})=>e.colors.highlightBg};
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    h4 { margin: 0 0 1rem 0; color: ${({theme:e})=>e.colors.primaryBlue}; }
`,o$=v.div`
    font-style: italic;
    line-height: 1.8;
    color: ${({theme:e})=>e.colors.header};
`,r$=v.div`
    h4 { margin: 0 0 1rem 0; }
    ul { padding-left: 1.25rem; margin: 0; }
    li { margin-bottom: 0.5rem; }
`,Ni=()=>{var A;const{seasonId:e,cardId:t}=dS(),n=ht(),o=tt(),{bandToShow:r,getSampleAnswersForCard:i}=vl(),s=iu(e),[c,u]=E.useState(null),[p,f]=E.useState(null),[h,m]=E.useState(!1),[g,S]=E.useState("sample");E.useEffect(()=>{if(!t){u(null),f(null);return}let I=!1;return m(!0),u(null),f(null),X0(s.id).then(_=>{if(I)return;u(_);const R=[..._.part1.flatMap(B=>B.cards),..._.part2.flatMap(B=>B.cards)].find(B=>B.id===t)||null;f(R)}).finally(()=>{I||m(!1)}),()=>{I=!0}},[t,s.id]);const C=()=>{const I=new URLSearchParams(o.search);I.set("season",s.id);const _=I.toString();return _?`?${_}`:""},k=()=>{if(p&&c){let I=null,_="part1";for(const P of c.part2)if(P.cards.some(R=>R.id===p.id)){I=P.id,_="part2";break}if(!I){for(const P of c.part1)if(P.cards.some(R=>R.id===p.id)){I=P.id,_="part1";break}}n({pathname:"/speaking/bank",search:C()},{state:{part:_,topicId:I}})}else n({pathname:"/speaking/bank",search:C()})};if(h)return a.jsx(va,{children:a.jsxs(wa,{children:[a.jsxs(xa,{onClick:()=>n({pathname:"/speaking/bank",search:C()}),"aria-label":"返回题库",children:[a.jsx(Nt,{}),a.jsx("span",{children:"返回题库"})]}),a.jsx("h1",{children:"加载中…"})]})});if(!p)return a.jsxs(va,{children:[a.jsxs(wa,{children:[a.jsxs(xa,{onClick:()=>n({pathname:"/speaking/bank",search:C()}),"aria-label":"返回题库",children:[a.jsx(Nt,{}),a.jsx("span",{children:"返回题库"})]}),a.jsx("h1",{children:"错误"})]}),a.jsx("p",{children:"未找到对应的题库卡片。"})]});const w=p?i(p):[],x=!!(p!=null&&p.part2Title),y=x?w.slice(1):w,b=y.length,T=(I,_)=>x?`${I+1}. ${_}`:_.startsWith("Part 2")?_:`${I+1}. ${_}`;return a.jsxs(va,{children:[a.jsxs(wa,{children:[a.jsxs(xa,{onClick:k,"aria-label":"返回题库",children:[a.jsx(Nt,{}),a.jsx("span",{children:"返回题库"})]}),a.jsxs("h1",{children:[p.title,x?" - Part 3 精讲":""]})]}),a.jsxs(i$,{children:[a.jsx(am,{$active:g==="sample",onClick:()=>S("sample"),children:"范文解析"}),a.jsx(am,{$active:g==="ai",onClick:()=>S("ai"),children:"AI 练习评测"})]}),a.jsx("main",{children:g==="sample"?a.jsxs(Kv,{children:[a.jsx(cm,{children:a.jsx("h4",{children:x?"Part 3 范文精讲":"范文精讲"})}),y.length>0?a.jsx(Z0,{sampleAnswers:y,totalQuestions:b,questionNumbering:T,lockedScore:r}):a.jsx("p",{children:"暂无范文解析。"})]}):a.jsxs(s$,{children:[a.jsxs(cm,{children:[a.jsx("h4",{children:"AI 模拟对话评测"}),a.jsx("small",{children:"基于 Google Gemini 高级模型提供个性化反馈"})]}),a.jsx(BM,{question:x?p.part2Title||p.title:((A=p.part1Questions)==null?void 0:A[0])||p.title,targetBand:r})]})})]})},va=v.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`,wa=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem;
        }
    }
`,i$=v.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,am=v.button`
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 3px solid ${({$active:e,theme:t})=>e?t.colors.primaryBlue:"transparent"};
    color: ${({$active:e,theme:t})=>e?t.colors.header:t.colors.label};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1rem;

    &:hover {
        color: ${({theme:e})=>e.colors.header};
    }
`,xa=v.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 0.6rem;
        gap: 0;
        span {
            display: none;
        }
    }
`,Kv=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1rem;
    }
`,s$=v(Kv)`
    border-color: ${({theme:e})=>e.colors.primaryBlue};
    background: linear-gradient(to bottom, #ffffff, #f9faff);
`,cm=v.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    gap: 0.25rem;

    h4 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 800;
        color: ${({theme:e})=>e.colors.primaryBlue};
    }
    small {
        color: ${({theme:e})=>e.colors.label};
        font-weight: 500;
    }
`,l$=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),a.jsx("polyline",{points:"12 19 5 12 12 5"})]}),a$=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),c$=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("circle",{cx:"12",cy:"12",r:"6"}),a.jsx("circle",{cx:"12",cy:"12",r:"2"})]}),d$=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M16 18a4 4 0 0 0-8 0"}),a.jsx("path",{d:"M12 2v14"}),a.jsx("path",{d:"M8 6a4 4 0 0 0-8 0"}),a.jsx("path",{d:"M16 6a4 4 0 0 1 8 0"})]}),u$=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),p$=[{band:"9",criteria:[{title:"流利性与连贯性",points:["表达流利，极少出现重复或自我纠正的情况；出现犹豫是基于思考内容，而非寻找合适的词汇或语法","表达连贯，衔接手段的使用完全恰当","完全且恰当地展开话题"]},{title:"词汇多样性",points:["准确自如地使用词汇来谈论任何话题","自然且准确地使用习语"]},{title:"语法多样性与准确性",points:["自如得体地使用语法结构","除了以英语为母语者也会出现的口误外，始终使用准确的语法结构"]}]},{band:"8",criteria:[{title:"发音",points:["准确运用丰富多样的发音特点，能表达微妙差异","表达过程中始终灵活地使用各种发音特点","听者理解时毫无障碍"]},{title:"流利性与连贯性",points:["表达流利，偶尔出现重复或自我纠正的情况，出现犹豫通常是基于思考内容，在少数情况下是寻找合适的语言","连贯且恰当地展开话题"]},{title:"词汇多样性",points:["词汇使用丰富，运用灵活自如，表达意思准确","熟练地使用常见的词汇以及习语，偶尔欠准确","按需进行有效的改述"]},{title:"语法多样性与准确性",points:["灵活地使用多种语法结构","除极其偶然情况下出现的不当或非系统性的错误外，大部分语句均准确无误"]},{title:"发音",points:["使用多样的发音特点","表达过程中灵活地使用多种发音特点，但偶尔出现偏差","表达易于听者理解，母语的口音对听者的理解影响极小"]}]},{band:"7",criteria:[{title:"流利性与连贯性",points:["表达详尽，并无明显困难，不失连贯","有时出现与语言相关的犹豫或出现重复及/或自我纠正","具有一定灵活度地使用一系列连接词或语篇标记"]},{title:"词汇多样性",points:["灵活地使用词汇讨论各种话题","使用一些非常见的词汇及习语，对语体及词汇搭配有所认识，但有时词语选择不甚恰当","有效地进行改述"]},{title:"语法多样性与准确性",points:["较灵活地使用一系列复杂的语法结构","虽然反复出现一些语法错误，但语句通常无误"]},{title:"发音",points:["表现出 6 分水平中所有的积极表现，也表现出 8 分水平中的部分积极表现"]}]},{band:"6",criteria:[{title:"流利性与连贯性",points:["表现出充分交流的意愿，但有时由于偶尔的重复、自我纠正或犹豫而缺乏连贯性","能使用一系列连接词及语篇标记，但无法保持一贯恰当"]},{title:"词汇多样性",points:["有足以详尽讨论各种话题的词汇量，虽然有时使用不当但意思表达清晰","基本上能成功地进行改述"]},{title:"语法多样性与准确性",points:["结合使用简单复杂的句型，但灵活性有限","使用复杂结构时经常出现错误，尽管这些错误极少造成理解困难"]},{title:"发音",points:["使用多种发音特点，但掌握程度不一","展现出某些有效使用发音特点的能力，但不能持续表现这一能力","表达过程中听者基本能理解，但有时部分单词或发音不准确导致清晰度下降"]}]}],f$=()=>{const[e,t]=E.useState("9"),n=p$.find(o=>o.band===e);return a.jsxs(y$,{children:[a.jsxs(v$,{children:[a.jsx("h3",{children:"官方评分标准 (Official Band Descriptors)"}),a.jsx("p",{children:"了解雅思口语的四大评分标准至关重要。这能帮助你理解考官的期望，有针对性地进行练习，从而在考试中取得更好的成绩。点击下方分数，查看各级别对应的具体能力要求。"})]}),a.jsx(w$,{children:["9","8","7","6"].map(o=>a.jsx(x$,{$active:e===o,onClick:()=>t(o),children:`评分标准 ${o}分`},o))}),n&&a.jsx(b$,{children:a.jsx(k$,{children:n.criteria.map((o,r)=>a.jsxs(Se.Fragment,{children:[a.jsx(C$,{children:o.title}),a.jsx(T$,{children:a.jsx("ul",{children:o.points.map((i,s)=>a.jsx("li",{children:i},s))})})]},`${o.title}-${r}`))})})]})},dm=()=>{const e=ht();return a.jsxs(h$,{children:[a.jsxs(m$,{children:[a.jsxs(g$,{onClick:()=>e("/"),"aria-label":"返回主页",children:[a.jsx(l$,{}),a.jsx("span",{children:"返回主页"})]}),a.jsx("h1",{children:"雅思口语评分标准和考试需知"})]}),a.jsxs("main",{children:[a.jsx(f$,{}),a.jsx(E$,{children:a.jsx(I$,{children:"备考须知"})}),a.jsxs(_$,{children:[a.jsxs(ji,{accentColor:"#4a90e2",children:[a.jsxs(Li,{accentColor:"#4a90e2",children:[a.jsx(a$,{}),a.jsx("h3",{children:"雅思口语的基本信息"})]}),a.jsx(Di,{children:a.jsxs("ul",{children:[a.jsxs("li",{children:["口语考试时间 ",a.jsx(Re,{children:"11 ~ 14 分钟"}),"。一个口语考官来面试你，他会用录音笔记录你们之间的谈话。"]}),a.jsx("li",{children:"考官会严格控制时间，所以如果他打断你的谈话，你也不要觉得奇怪。"}),a.jsxs("li",{children:["口语分为三个部分：",a.jsxs(A$,{children:[a.jsxs("li",{children:[a.jsx("b",{children:"Part 1 自我介绍:"})," 大概 ",a.jsx(Re,{children:"10 个问题"}),", ",a.jsx(Re,{children:"4 ~ 5 分钟"})]}),a.jsxs("li",{children:[a.jsx("b",{children:"Part 2 话题卡:"})," ",a.jsx(Re,{children:"1 分钟"}),"准备时间, ",a.jsx(Re,{children:"2 分钟"}),"陈述时间"]}),a.jsxs("li",{children:[a.jsx("b",{children:"Part 3 讨论:"})," 大概 ",a.jsx(Re,{children:"5 个问题"}),", ",a.jsx(Re,{children:"4 ~ 5 分钟"})]})]})]})]})})]}),a.jsxs(ji,{accentColor:"#208e4c",children:[a.jsxs(Li,{accentColor:"#208e4c",children:[a.jsx(c$,{}),a.jsx("h3",{children:"不要使用大词、生僻词，要地道表达"})]}),a.jsx(Di,{children:a.jsxs("p",{children:["口语得分高，不是一定要用很多高分词汇、俚语等， 但是这样做的结果往往",a.jsx(ar,{children:"适得其反"}),"，由于掌握词汇的能力还不达标，经常会出现",a.jsx(ar,{children:"词不达意"}),"或与语境不符的情况。建议用",a.jsx(Re,{children:"地道表达"}),"，可能会用一些很简短、很平常的短语，这些词你都认识， 但",a.jsx(Re,{children:"言简意赅"}),"，这便足矣。"]})})]}),a.jsxs(ji,{accentColor:"#f1c40f",children:[a.jsxs(Li,{accentColor:"#f1c40f",children:[a.jsx(d$,{}),a.jsx("h3",{children:"哪一部分更重要？"})]}),a.jsxs(Di,{children:[a.jsxs("p",{children:["口语的三个部分在评分时是",a.jsx(Re,{children:"同样重要"}),"。它们不是分开评分的，考官是根据学生的",a.jsx(ar,{children:"整体表现"}),"来打分的，从这个意义上说，三个部分一样重要。"]}),a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("b",{children:"Part 1"})," 一般问题比较简单（有点像热身），所以如果你只有这部分答得很好的话，是拿不到高分的。"]}),a.jsxs("li",{children:[a.jsx("b",{children:"Part 2"})," 是考官评价你水平的重要部分，这时他对你的口语水平已经有一个整体的印象了。"]}),a.jsxs("li",{children:[a.jsx("b",{children:"Part 3"})," 是考官最后做评分决定的部分。如果你这部分表现得非常棒，绝对可以给自己加分。"]})]}),a.jsxs("p",{children:["所以，总的来说, ",a.jsx(Re,{children:"Part 1 是你给自己预热的环节"}),", ",a.jsx(Re,{children:"Part 2 是考官考察你最重要的环节"}),", ",a.jsx(Re,{children:"Part 3 是你加分的环节"}),"。"]})]})]}),a.jsxs(ji,{accentColor:"#9b59b6",children:[a.jsxs(Li,{accentColor:"#9b59b6",children:[a.jsx(u$,{}),a.jsx("h3",{children:"口语三个部分的实战指导"})]}),a.jsx(Di,{children:a.jsxs("ul",{children:[a.jsxs("li",{children:[a.jsx("b",{children:"Part 1:"})," ",a.jsx(Re,{children:"尽量简单"}),"，在这个部分不要过于炫技。给出一个简短直接的答案，外加一句解释。因为如果你 keep talking,考官是会打断你的。不要害羞，Part 1就是一个热身赛，说出你脑子里那个一闪而过的想法即可。"]}),a.jsxs("li",{children:[a.jsx("b",{children:"Part 2:"})," 考前一定要",a.jsx(Re,{children:"准备好口语大类素材"}),"。专注于",a.jsx(ar,{children:"词汇"}),"，而不是语法或连接词。在拿到话题卡准备的1分钟内，尽量多地把你的想法写在纸上，一定要用准备好的素材，",a.jsx(ar,{children:"现编是绝对不行的"}),"。没有必要把话题卡上的每一个点都说到，可以把某一点说透。尽量用你的亲身经历举一些例子，这样也可以凑一些时间。"]}),a.jsxs("li",{children:[a.jsx("b",{children:"Part 3:"})," 在回答这一部分问题时，建议大家按照",a.jsx(Re,{children:"给出答案、解释答案、举例的结构"}),"来回答，平时练习时还可以加上另一种选择、对立面等。"]})]})})]})]})]})]})},h$=v.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`,m$=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem; /* Space for back button */
        }
    }
`,g$=v.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 0.6rem;
        gap: 0;
        span {
            display: none;
        }
    }
`,y$=v.div`
    animation: fadeIn 0.4s ease;
`,v$=v.section`
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primaryBlue}, #2e6ab8);
    color: white;
    padding: 2rem;
    border-radius: 16px;
    margin-bottom: 2.5rem;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);

    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.75rem;
        font-weight: 700;
    }
    p {
        margin: 0;
        font-size: 1.1rem;
        opacity: 0.9;
        line-height: 1.7;
        max-width: 80ch;

        & + p {
            margin-top: 1rem;
        }
    }
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1.5rem;
        h3 { font-size: 1.5rem; }
        p { font-size: 1rem; }
    }
`,w$=v.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
`,x$=v.button`
    background-color: ${({theme:e,$active:t})=>t?e.colors.primaryOrange:e.colors.cardBg};
    color: ${({theme:e,$active:t})=>t?"white":e.colors.header};
    border: 1px solid ${({theme:e,$active:t})=>t?e.colors.primaryOrange:e.colors.border};
    padding: 0.8rem 1.5rem;
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({theme:e,$active:t})=>t?"#e88f33":e.colors.boxBg};
        border-color: ${({theme:e,$active:t})=>t?"#e88f33":e.colors.label};
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 0.7rem 1.2rem;
        font-size: 0.9rem;
    }
`,S$=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1.5rem;
    }
`,b$=v(S$)`
    padding: 0;
    overflow: hidden;
`,k$=v.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`,C$=v.div`
    background-color: ${({theme:e})=>e.colors.boxBg};
    font-weight: 600;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    border-right: 1px solid ${({theme:e})=>e.colors.border};
    display: flex;
    align-items: center;

    &:last-of-type {
       border-bottom: none;
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        border-right: none;
        padding: 0.75rem 1rem;
    }
`,T$=v.div`
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    
    &:last-of-type {
       border-bottom: none;
    }

    ul {
        margin: 0;
        padding-left: 1.25rem;
    }

    li {
        margin-bottom: 0.5rem;
        line-height: 1.7;
        &:last-child {
            margin-bottom: 0;
        }
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
       padding: 1rem;
       border-left: 3px solid ${({theme:e})=>e.colors.primaryBlue};
       background-color: ${({theme:e})=>e.colors.bg};
    }
`,E$=v.div`
    position: relative;
    text-align: center;
    margin: 4rem 0 2.5rem 0;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${({theme:e})=>e.colors.border};
        z-index: 1;
    }
`,I$=v.span`
    background-color: ${({theme:e})=>e.colors.bg};
    padding: 0 1.5rem;
    position: relative;
    z-index: 2;
    font-weight: 600;
    font-size: 1.25rem;
    color: ${({theme:e})=>e.colors.label};
`,_$=v.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`,ji=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
    border-top: 4px solid ${({accentColor:e})=>e};
    display: flex;
    flex-direction: column;

    h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
    }

    p, li {
        color: ${({theme:e})=>e.colors.text};
        line-height: 1.8;
    }
    
    ul {
        padding-left: 1.25rem;
        margin: 0;
        list-style-position: outside;
    }

    li {
        margin-bottom: 0.5rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
`,Li=v.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: ${({accentColor:e})=>e};
`,Di=v.div`
    flex-grow: 1;
`,Re=v.strong`
    color: ${({theme:e})=>e.colors.primaryOrange};
    font-weight: 600;
`,ar=v.span`
    background-color: ${({theme:e})=>e.colors.highlightBg};
    color: ${({theme:e})=>e.colors.primaryBlue};
    padding: 0.1em 0.4em;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.95em;
`,A$=v.ul`
    margin-top: 0.75rem;
    padding-left: 1rem !important;
`,P$=({message:e})=>e?a.jsx(M$,{children:e},e):null,R$=ve`
    0% { transform: translate(-50%, -100%); opacity: 0; }
    15% { transform: translate(-50%, 0); opacity: 1; }
    85% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, -100%); opacity: 0; }
`,M$=v.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({theme:e})=>e.colors.header};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 2000;
    font-size: 0.9rem;
    font-weight: 500;
    animation: ${R$} 3s ease-in-out forwards;
    white-space: nowrap;
`,$$=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),N$=({count:e,navigateTo:t})=>a.jsxs(j$,{onClick:()=>t("my-words"),"aria-label":`打开单词本, 当前有 ${e} 个单词`,children:[a.jsx($$,{}),e>0&&a.jsx(L$,{children:e})]}),j$=v.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.primaryOrange};
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
    z-index: 1001;

    &:hover {
        transform: scale(1.1);
        background-color: #d35400;
    }

    svg {
        width: 28px;
        height: 28px;
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        bottom: 1rem;
        right: 1rem;
        width: 50px;
        height: 50px;
    }
`,L$=v.span`
    position: absolute;
    top: -4px;
    right: -4px;
    background-color: ${({theme:e})=>e.colors.primaryRed};
    color: white;
    border-radius: 50%;
    min-width: 24px;
    height: 24px;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    border: 2px solid white;
`,D$=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),B$=({position:e,onAdd:t})=>{const n=o=>{o.stopPropagation(),o.preventDefault(),t()};return a.jsxs(F$,{style:{top:`${e.top}px`,left:`${e.left}px`},onClick:n,onMouseDown:o=>o.stopPropagation(),children:[a.jsx(D$,{}),a.jsx("span",{children:"添加"})]})},U$=ve`
    from {
        transform: translate(-50%, 10px);
        opacity: 0;
    }
    to {
        transform: translate(-50%, 0);
        opacity: 1;
    }
`,F$=v.button`
    position: absolute;
    z-index: 1100;
    transform: translateX(-50%);
    background-color: ${({theme:e})=>e.colors.header};
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.3rem 0.8rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    font-weight: 600;
    animation: ${U$} 0.2s ease-out;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #3c4a5c;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`,Qv=E.createContext(null),Xv=({data:e,children:t})=>a.jsx(Qv.Provider,{value:e,children:t}),El=()=>{const e=E.useContext(Qv);if(!e)throw new Error("useVocabData must be used within a VocabDataProvider");return e},V$=({navigateToWordSelection:e})=>{const{ieltsTopics:t,filters:n}=El(),[o,r]=E.useState((n==null?void 0:n.defaultId)||"all"),i=t.map(s=>{const c=s.subTopics.filter(u=>n?n.filterSubTopic(u,o):!0);return{...s,subTopics:c}}).filter(s=>s.subTopics.length>0);return a.jsxs(z$,{children:[n&&n.chips.length>0&&a.jsxs(G$,{children:[a.jsx(H$,{children:"选择分类"}),a.jsx(W$,{children:n.chips.map(s=>a.jsx(q$,{$active:o===s.id,$isEssential:s.isEssential,onClick:()=>r(s.id),children:s.label},s.id))})]}),i.map(s=>a.jsxs(O$,{children:[a.jsxs(J$,{children:[a.jsx("h2",{children:s.title}),a.jsx(Y$,{children:s.subTopics.length})]}),a.jsx(K$,{$isPart1:s.section==="Part 1",children:s.subTopics.map(c=>{var u;return a.jsxs(Q$,{onClick:()=>{((c.words||[]).length>0||(c.wordSections||[]).length>0)&&e(c.id)},$color:c.color,$isEmpty:(c.words||[]).length===0&&(c.wordSections||[]).length===0,children:[a.jsxs(X$,{children:[a.jsx(Z$,{children:c.title}),a.jsx(eN,{children:(c.words||[]).length>0||(c.wordSections||[]).length>0?a.jsxs(tN,{$color:c.color,children:[c.wordSections?c.wordSections.reduce((p,f)=>p+f.words.length,0):(u=c.words)==null?void 0:u.length," 词"]}):a.jsx(nN,{children:"补充中"})})]}),c.badge&&a.jsx(oN,{children:c.badge})]},c.id)})})]},s.title)),i.length===0&&a.jsx(rN,{children:"该分类下暂无对应话题数据。"})]})},z$=v.div`
    width: 100%;
    animation: fadeIn 0.5s ease;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 8rem;
`,G$=v.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`,H$=v.span`
    font-size: 0.8rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.label};
    text-transform: uppercase;
    letter-spacing: 0.05em;
`,W$=v.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.2rem 0;
    &::-webkit-scrollbar { display: none; }
`,q$=v.button`
    white-space: nowrap;
    padding: 0.4rem 1rem;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid ${({theme:e,$active:t})=>t?e.colors.primary:e.colors.border};
    background: ${({theme:e,$active:t})=>t?e.colors.primary:e.colors.cardBg};
    color: ${({theme:e,$active:t})=>t?"white":e.colors.text};

    ${({$isEssential:e,$active:t,theme:n})=>e&&!t&&Ee`
            color: ${n.colors.primaryRed};
            border-color: ${n.colors.primaryRed}66;
            background: ${n.colors.primaryRed}11;
        `}

    &:hover {
        border-color: ${({theme:e,$isEssential:t})=>t?e.colors.primaryRed:e.colors.primary};
    }
`,O$=v.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,J$=v.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    
    h2 {
        margin: 0;
        font-size: 1.2rem;
        color: ${({theme:e})=>e.colors.header};
        font-weight: 800;
    }
`,Y$=v.span`
    background: ${({theme:e})=>e.colors.primaryLight};
    color: ${({theme:e})=>e.colors.primary};
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 800;
`,K$=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${e=>e.$isPart1?"130px":"220px"}, 1fr));
    gap: 0.75rem;
`,Q$=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 14px;
    padding: 0.8rem 1rem;
    cursor: ${e=>e.$isEmpty?"default":"pointer"};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    
    opacity: ${e=>e.$isEmpty?.6:1};

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        bottom: 20%;
        width: 3px;
        border-radius: 0 3px 3px 0;
        background-color: ${({theme:e,$color:t})=>{switch(t){case"yellow":return e.colors.tagYellowText;case"blue":return e.colors.tagBlueText;case"green":return e.colors.tagGreenText;case"purple":return e.colors.tagPurpleText;default:return e.colors.border}}};
    }
    
    &:hover {
        ${e=>!e.$isEmpty&&Ee`
            transform: translateY(-2px);
            border-color: ${({theme:t})=>t.colors.primary}66;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        `}
    }

    @media (max-width: 480px) {
        min-height: 70px;
        padding: 0.6rem 0.8rem;
    }
`,X$=v.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`,Z$=v.span`
    font-weight: 700;
    color: ${({theme:e})=>e.colors.header};
    font-size: 0.95rem;
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,eN=v.div`
    display: flex;
    align-items: center;
`,tN=v.span`
    font-size: 0.7rem;
    font-weight: 800;
    padding: 1px 6px;
    border-radius: 6px;
    color: ${({theme:e,$color:t})=>{switch(t){case"yellow":return e.colors.tagYellowText;case"blue":return e.colors.tagBlueText;case"green":return e.colors.tagGreenText;case"purple":return e.colors.tagPurpleText;default:return e.colors.primary}}};
    background-color: ${({theme:e,$color:t})=>{switch(t){case"yellow":return e.colors.tagYellowBg;case"blue":return e.colors.tagBlueBg;case"green":return e.colors.tagGreenBg;case"purple":return e.colors.tagPurpleBg;default:return e.colors.primaryLight}}};
`,nN=v.span`
    font-size: 0.65rem;
    color: ${({theme:e})=>e.colors.label};
    font-weight: 600;
`,oN=v.span`
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: ${({theme:e})=>e.colors.primaryRed};
    color: white;
    padding: 0 4px;
    border-radius: 3px;
    font-size: 0.55rem;
    font-weight: 900;
`,rN=v.div`
    text-align: center;
    padding: 3rem 0;
    color: ${({theme:e})=>e.colors.label};
    font-size: 0.9rem;
`;let tn=[];const Jc=()=>{tn=window.speechSynthesis.getVoices()};"speechSynthesis"in window&&(Jc(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=Jc));const Ws=e=>{if(!("speechSynthesis"in window)||!e){console.warn("Speech synthesis not supported or no text provided.");return}window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);tn.length===0&&Jc();const n=["Samantha","Google UK English Female","Google US English","Daniel","Microsoft Zira - English (United States)","Karen"];let o=tn.find(r=>n.includes(r.name));o||(o=tn.find(r=>r.lang.startsWith("en-US")&&r.default)),o||(o=tn.find(r=>r.lang.startsWith("en-GB")&&r.name.includes("Google"))),o||(o=tn.find(r=>r.lang.startsWith("en-US")&&r.name.includes("Google"))),o||(o=tn.find(r=>r.lang.startsWith("en-GB"))),o||(o=tn.find(r=>r.lang.startsWith("en-US"))),t.voice=o||null,t.lang=o?o.lang:"en-US",t.rate=.9,window.speechSynthesis.speak(t)},iN=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),a.jsx("polyline",{points:"12 19 5 12 12 5"})]}),sN=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"15 18 9 12 15 6"})}),lN=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"9 18 15 12 9 6"})}),aN=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),a.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),cN=({topic:e,onComplete:t,currentIndex:n,setCurrentIndex:o})=>{if(e.words.length===0)return a.jsxs(pm,{children:[a.jsx("p",{children:"没有选择单词！"}),a.jsx(hm,{onClick:t,children:"返回"})]});const r=e.words[n];E.useEffect(()=>{const c=setTimeout(()=>Ws(r.word),100);return()=>{clearTimeout(c),"speechSynthesis"in window&&window.speechSynthesis.cancel()}},[r]);const i=()=>o(c=>Math.min(c+1,e.words.length-1)),s=()=>o(c=>Math.max(c-1,0));return a.jsxs(pm,{children:[a.jsxs(hN,{children:[a.jsx(mN,{children:r.emoji.startsWith("http")?a.jsx("img",{src:r.emoji,alt:""}):r.emoji}),a.jsxs(gN,{children:[a.jsxs(yN,{children:[a.jsx(wN,{children:r.word}),a.jsx(vN,{onClick:()=>Ws(r.word),"aria-label":`Listen to ${r.word}`,children:a.jsx(aN,{})})]}),a.jsx(xN,{children:r.phonetic}),a.jsx(SN,{children:r.definition}),a.jsxs(bN,{children:['"',r.example,'"']})]})]}),a.jsxs(kN,{children:[a.jsx(fm,{onClick:s,disabled:n===0,children:a.jsx(sN,{})}),a.jsxs(CN,{children:[n+1," / ",e.words.length]}),a.jsx(fm,{onClick:i,disabled:n===e.words.length-1,children:a.jsx(lN,{})})]}),a.jsx(hm,{onClick:t,children:"我学完了"})]})},dN=({topicId:e,words:t,navigateTo:n,onExitToQuestionBank:o})=>{const[r,i]=E.useState(0),{allSubTopics:s}=El(),c=s.find(f=>f.id===e);if(!c)return a.jsxs(um,{children:[a.jsx("p",{children:"主题未找到！"}),a.jsx("button",{onClick:()=>n("home"),children:"返回主页"})]});const u={...c,words:t},p=()=>{t&&t.length>0?n("practice"):n("home")};return a.jsxs(um,{children:[a.jsxs(uN,{children:[a.jsx(pN,{onClick:()=>o?o():n("home"),"aria-label":"返回题库",children:a.jsx(iN,{})}),a.jsx("h1",{children:u.title})]}),a.jsx(fN,{children:a.jsx("main",{children:a.jsx(cN,{topic:u,onComplete:p,currentIndex:r,setCurrentIndex:i})})})]})},Zv=ve`from { opacity: 0; } to { opacity: 1; }`,um=v.div`
    max-width: 900px;
    margin: 0 auto;
    animation: ${Zv} 0.5s ease;
`,uN=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        h1 { font-size: 1.75rem; }
    }
`,pN=v.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.text};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: ${({theme:e})=>e.shadows.subtle};

    &:hover {
        background-color: ${({theme:e})=>e.colors.boxBg};
        color: ${({theme:e})=>e.colors.primary};
        transform: translateY(-50%) scale(1.05);
        box-shadow: ${({theme:e})=>e.shadows.main};
    }
`,fN=v.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 1rem;

    main {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`,pm=v.div`
    animation: ${Zv} 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`,hN=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-radius: 24px;
    box-shadow: ${({theme:e})=>e.shadows.main};
    border: 1px solid ${({theme:e})=>e.colors.border};
    width: 100%;
    max-width: 560px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`,mN=v.div`
    font-size: 5rem;
    text-align: center;
    padding: 2rem;
    background-color: ${({theme:e})=>e.colors.columnBg};
    line-height: 1;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
`,gN=v.div`
    padding: 2rem;
    text-align: center;
    flex-grow: 1;
`,yN=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.25rem;
`,vN=v.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({theme:e})=>e.colors.label};
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, color 0.2s;
    
    &:hover {
        background-color: ${({theme:e})=>e.colors.boxBg};
        color: ${({theme:e})=>e.colors.primary};
    }

    svg {
        width: 28px;
        height: 28px;
    }
`,wN=v.h2`
    font-size: 3rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.text};
    margin: 0;
`,xN=v.p`
    font-size: 1.25rem;
    color: ${({theme:e})=>e.colors.label};
    margin: 0 0 1.5rem 0;
`,SN=v.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({theme:e})=>e.colors.text};
    margin: 0 0 1rem 0;
`,bN=v.p`
    font-size: 1.15rem;
    color: ${({theme:e})=>e.colors.text};
    font-style: italic;
    line-height: 1.5;
    margin: 1.25rem 0 0;
    padding: 0.75rem 1rem;
    background-color: ${({theme:e})=>e.colors.highlightBg};
    border: 1px solid ${({theme:e})=>e.colors.highlightBorder};
    border-radius: 14px;
`,kN=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
`,fm=v.button`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.text};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        background-color: ${({theme:e})=>e.colors.boxBg};
        transform: scale(1.05);
    }
    &:disabled {
        color: ${({theme:e})=>e.colors.label};
        cursor: not-allowed;
        opacity: 0.6;
    }
`,CN=v.div`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.label};
    width: 80px;
    text-align: center;
`,hm=v.button`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background-color: ${({theme:e,$themeColor:t="learn"})=>e.colors[t]};
    color: white;
    box-shadow: 0 4px 10px ${({theme:e,$themeColor:t="learn"})=>`${e.colors[t]}4D`};
    margin-top: 2rem;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 15px ${({theme:e,$themeColor:t="learn"})=>`${e.colors[t]}66`};
    }
`,TN=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),a.jsx("polyline",{points:"12 19 5 12 12 5"})]}),EN=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),a.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),mm=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M5 12h14"}),a.jsx("path",{d:"m12 5 7 7-7 7"}),a.jsx("path",{d:"M12 5V3M5 5.5V3H3m18 18v-2.5m-3.5 2.5h2.5v-2.5M12 19v2m-1.5-11-5-5m0 5 5-5"})]}),IN=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),a.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"})]}),cr=e=>e.sort(()=>Math.random()-.5),_N=()=>Date.now().toString(36)+Math.random().toString(36).substr(2),AN=(e,t)=>{const n=e.words||[];return cr([...n]).map(r=>{const i=n.filter(h=>h.word!==r.word),s=Math.min(3,i.length),c=cr(i).slice(0,s);let u=[],p="",f="";switch(t){case"zh-to-en":p=r.definition,f=r.word,u=cr([r.word,...c.map(h=>h.word)]);break;case"en-to-zh":p=r.word,f=r.definition,u=cr([r.definition,...c.map(h=>h.definition)]);break;case"listening":p=r.word,f=r.word,u=cr([r.word,...c.map(h=>h.word)]);break}return{word:r,options:u,prompt:p,answer:f,uid:_N()}})},PN=({topic:e,gameMode:t,onGameChange:n})=>{const[o,r]=E.useState([]),[i,s]=E.useState(0),[c,u]=E.useState(null),[p,f]=E.useState(null),[h,m]=E.useState(!0),g=E.useCallback(()=>{const y=AN(e,t);r(y),s(y.length),u(null),f(null)},[e,t]);E.useEffect(()=>{m(!0),g()},[g]);const S=o[0],C=t==="en-to-zh"?"zh-to-en":t==="zh-to-en"?"listening":null;E.useEffect(()=>{(t==="listening"||t==="en-to-zh")&&S&&Ws(S.prompt)},[S,t]),E.useEffect(()=>{if(S||!h||!C)return;const y=setTimeout(()=>n(C),900);return()=>clearTimeout(y)},[h,S,C,n]);const k=y=>{if(c)return;const b=y===S.answer;u(y),f(b),setTimeout(()=>{r(b?T=>T.slice(1):T=>{if(T.length<=1)return[...T];const A=[...T],I=A.shift();return I.isRetry=!0,A.splice(1,0,I),A}),u(null),f(null)},300)};if((e.words||[]).length===0)return a.jsx(ym,{children:a.jsx(vm,{children:a.jsx("p",{children:"请至少选择一个单词开始练习！"})})});if(!S)return a.jsxs(qN,{children:[a.jsx("h2",{children:"练习完成!"}),C&&a.jsx("p",{children:t==="en-to-zh"?"英选中完成，准备开始中选英…":"中选英完成，准备开始听音辨词…"}),a.jsxs(ON,{children:[a.jsx(ba,{onClick:()=>{m(!1),g()},children:"再玩一次"}),C?a.jsx(ba,{onClick:()=>n(C),$secondary:!0,children:"立即开始下一项"}):a.jsx(ba,{onClick:()=>n("en-to-zh"),$secondary:!0,children:"从英选中开始"})]})]});const w=y=>c?y===S.answer?"correct":y===c?"incorrect":"disabled":"default",x=i>0?(i-o.length)/i*100:0;return a.jsxs(ym,{children:[a.jsx(BN,{children:a.jsx(UN,{style:{width:`${x}%`}})}),a.jsxs(vm,{children:[t==="listening"?a.jsx(zN,{children:a.jsx(GN,{onClick:()=>Ws(S.prompt),"aria-label":"Play sound",children:a.jsx(EN,{})})}):a.jsxs(VN,{children:[t==="zh-to-en"&&S.word.emoji&&a.jsx(FN,{children:S.word.emoji.startsWith("http")?a.jsx("img",{src:S.word.emoji,alt:""}):S.word.emoji}),a.jsx("span",{children:S.prompt})]}),a.jsx(HN,{$isLongText:t==="en-to-zh",children:S.options.map(y=>{let b;return t==="en-to-zh"&&(b=(e.words||[]).find(T=>T.definition===y)),a.jsxs(WN,{onClick:()=>k(y),disabled:!!c,$state:w(y),children:[b&&a.jsx(ew,{children:b.emoji.startsWith("http")?a.jsx("img",{src:b.emoji,alt:""}):b.emoji}),a.jsx("span",{children:y})]},y)})})]})]})},RN=({topicId:e,words:t,navigateTo:n,onExitToQuestionBank:o})=>{const[r,i]=E.useState("en-to-zh"),{allSubTopics:s}=El(),c=s.find(p=>p.id===e);if(!c)return a.jsxs(gm,{children:[a.jsx("p",{children:"主题未找到！"}),a.jsx("button",{onClick:()=>n("home"),children:"返回主页"})]});const u={...c,words:t};return a.jsxs(gm,{children:[a.jsxs(jN,{children:[a.jsx(LN,{onClick:()=>o?o():n("home"),"aria-label":"返回题库",children:a.jsx(TN,{})}),a.jsx("h1",{children:u.title})]}),a.jsxs("main",{children:[a.jsxs(DN,{children:[a.jsxs(Sa,{$active:r==="en-to-zh",onClick:()=>i("en-to-zh"),children:[a.jsx(mm,{})," 英选中"]}),a.jsxs(Sa,{$active:r==="zh-to-en",onClick:()=>i("zh-to-en"),children:[a.jsx(mm,{})," 中选英"]}),a.jsxs(Sa,{$active:r==="listening",onClick:()=>i("listening"),children:[a.jsx(IN,{})," 听音辨词"]})]}),a.jsx(PN,{topic:u,gameMode:r,onGameChange:i},`${r}-${e}-${t.map(p=>p.word).join("")}`)]})]})},MN=ve`from { opacity: 0; } to { opacity: 1; }`,$N=ve`
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
`,NN=ve`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
`,gm=v.div`
    max-width: 900px;
    margin: 0 auto;
    animation: ${MN} 0.5s ease;
    padding: 0 1.25rem 2.5rem;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`,jN=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        h1 { font-size: 1.75rem; }
    }
`,LN=v.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.text};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({theme:e})=>e.colors.boxBg};
        color: ${({theme:e})=>e.colors.primary};
        transform: translateY(-50%) scale(1.05);
    }
`,DN=v.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
`,Sa=v.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: inherit;
    font-size: 1.05rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid ${({theme:e,$active:t})=>t?"transparent":e.colors.border};
    background: ${({theme:e,$active:t})=>t?`linear-gradient(135deg, ${e.colors.practice} 0%, ${e.colors.games} 100%)`:e.colors.cardBg};
    color: ${({$active:e})=>e?"white":"#475569"};
    box-shadow: ${({theme:e,$active:t})=>t?e.shadows.main:e.shadows.subtle};
    white-space: nowrap;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        transform: translateY(-2px) rotate(-0.5deg);
    }

    &:active {
        transform: translateY(0) scale(0.98);
    }
`,ym=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    box-shadow: ${({theme:e})=>e.shadows.large};
    border-radius: 24px;
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 240px;
        height: 240px;
        border-radius: 9999px;
        filter: blur(22px);
        opacity: 0.55;
        pointer-events: none;
    }

    &::before {
        top: -120px;
        left: -120px;
        background: radial-gradient(circle at 30% 30%, ${({theme:e})=>e.colors.practice} 0%, transparent 70%);
    }

    &::after {
        bottom: -140px;
        right: -140px;
        background: radial-gradient(circle at 30% 30%, ${({theme:e})=>e.colors.games} 0%, transparent 70%);
    }
`,vm=v.div`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 450px;

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
        align-items: center;
        gap: 2rem;
        min-height: 400px;
        padding: 3rem;
    }

    @media (max-width: 520px) {
        padding: 1.5rem;
        min-height: 400px;
    }
`,BN=v.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: ${({theme:e})=>e.colors.columnBg};
    overflow: hidden;
`,UN=v.div`
    height: 100%;
    background-image: linear-gradient(90deg, ${({theme:e})=>e.colors.practice}, ${({theme:e})=>e.colors.games});
    transition: width 0.3s ease;
`,FN=v.div`
    font-size: 4rem;
    line-height: 1;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`,VN=v.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 2.1rem;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.header};
    text-align: center;
    padding: 1.25rem 1.5rem;
    background: ${({theme:e})=>`linear-gradient(180deg, ${e.colors.primaryLight} 0%, ${e.colors.cardBg} 100%)`};
    border: 2px solid ${({theme:e})=>e.colors.highlightBorder};
    border-radius: 22px;
    box-shadow: ${({theme:e})=>e.shadows.subtle};

    span {
        word-break: break-word;
    }

     @media (max-width: 520px) {
        font-size: 1.6rem;
        min-height: 150px;
        margin-bottom: 2rem;
    }
`,zN=v.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 520px) {
        height: 200px;
        margin-bottom: 2rem;
    }
`,GN=v.button`
    background: ${({theme:e})=>`linear-gradient(135deg, ${e.colors.primaryLight} 0%, ${e.colors.highlightBg} 100%)`};
    border: 2px solid ${({theme:e})=>e.colors.highlightBorder};
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({theme:e})=>e.colors.primary};
    transition: all 0.2s ease;
    box-shadow: ${({theme:e})=>e.shadows.main};
    animation: ${NN} 2.2s ease-in-out infinite;
    
    &:hover {
        transform: scale(1.1);
        background-color: ${({theme:e})=>e.colors.highlightBg};
    }

    &:active {
        transform: scale(0.96);
    }
`,HN=v.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    
    @media (max-width: 520px) {
        grid-template-columns: 1fr;
        ${({$isLongText:e})=>e&&"gap: 0.75rem;"}
    }
`,ew=v.div`
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 0.25rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
`,WN=v.button`
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem;
    border-radius: 22px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid ${({theme:e})=>e.colors.border};
    background: ${({theme:e})=>`linear-gradient(180deg, ${e.colors.cardBg} 0%, ${e.colors.bg} 100%)`};
    color: ${({theme:e})=>e.colors.text};
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.4;
    gap: 0.5rem;
    box-shadow: ${({theme:e})=>e.shadows.subtle};

    &:not(:disabled):hover {
        border-color: ${({theme:e})=>e.colors.practice};
        background: ${({theme:e})=>`linear-gradient(180deg, ${e.colors.highlightBg} 0%, ${e.colors.cardBg} 100%)`};
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.shadows.main};
    }

    &:not(:disabled):active {
        transform: translateY(0) scale(0.98);
    }
    
    ${({$state:e,theme:t})=>{switch(e){case"correct":return Ee`
                    background-color: ${t.colors.tagGreenBg};
                    border-color: ${t.colors.learn};
                    color: ${t.colors.tagGreenText};
                    transform: scale(1.05);
                    box-shadow: ${t.shadows.main};
                `;case"incorrect":return Ee`
                    background-color: #fff1f2;
                    border-color: ${t.colors.games};
                    color: ${t.colors.games};
                `;case"disabled":return Ee`
                    opacity: 0.6;
                    cursor: not-allowed;
                `;default:return""}}}

    @media (max-width: 520px) {
        font-size: 1rem;
        padding: 1rem;
        min-height: 80px;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;

        ${ew} {
            font-size: 2rem;
            margin-bottom: 0;
            height: 2rem;
            width: 2rem;
            flex-shrink: 0;
        }
    }
`,qN=v.div`
    text-align: center;
    padding: 4rem 2rem;
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    box-shadow: ${({theme:e})=>e.shadows.large};
    border-radius: 24px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    animation: ${$N} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    h2 { font-size: 2rem; color: ${({theme:e})=>e.colors.header}; margin: 0 0 2rem 0; }
`,ON=v.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`,ba=v.button`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid ${({theme:e,$secondary:t})=>t?e.colors.border:"transparent"};
    background-color: ${({theme:e,$secondary:t})=>t?e.colors.cardBg:e.colors.practice};
    color: ${({$secondary:e})=>e?"#475569":"white"};
    
    &:hover {
        transform: scale(1.05);
        background-color: ${({theme:e,$secondary:t})=>t?e.colors.boxBg:e.colors.practice};
    }
`,JN=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),a.jsx("polyline",{points:"12 19 5 12 12 5"})]}),YN=({words:e,navigateTo:t,onDelete:n,onClear:o})=>{const[r,i]=E.useState(""),s=c=>{if(e.length===0)return;const u=c==="comma"?e.join(", "):e.join(`
`);navigator.clipboard.writeText(u).then(()=>{i("已复制！"),setTimeout(()=>i(""),2e3)},()=>{i("复制失败"),setTimeout(()=>i(""),2e3)})};return a.jsxs(QN,{children:[a.jsxs(XN,{children:[a.jsx(ZN,{onClick:()=>t("home"),"aria-label":"返回主页",children:a.jsx(JN,{})}),a.jsx("h1",{children:"我的单词本"})]}),a.jsxs(ej,{children:[a.jsx(tj,{children:e.length>0?a.jsx(nj,{children:e.map(c=>a.jsxs(oj,{children:[c,a.jsx(rj,{onClick:()=>n(c),"aria-label":`删除单词 ${c}`,children:"×"})]},c))}):a.jsxs(ij,{children:[a.jsx("p",{children:"单词本是空的。"}),a.jsx("p",{children:"在任意页面双击英文单词即可收藏。"})]})}),e.length>0&&a.jsxs(sj,{children:[a.jsxs(lj,{children:[a.jsx(wm,{onClick:()=>s("comma"),children:"复制 (逗号)"}),a.jsx(wm,{onClick:()=>s("newline"),children:"复制 (换行)"}),r&&a.jsx(aj,{children:r})]}),a.jsx(cj,{onClick:o,children:"清空单词本"})]})]})]})},KN=ve`
    from { opacity: 0; }
    to { opacity: 1; }
`,QN=v.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`,XN=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({theme:e})=>e.colors.header};
    }
    
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        h1 { font-size: 1.75rem; }
        margin-bottom: 2rem;
    }
`,ZN=v.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.text};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: ${({theme:e})=>e.shadows.subtle};

    &:hover {
        background-color: ${({theme:e})=>e.colors.boxBg};
        color: ${({theme:e})=>e.colors.primary};
        transform: translateY(-50%) scale(1.05);
        box-shadow: ${({theme:e})=>e.shadows.main};
    }
`,ej=v.main`
    background: ${({theme:e})=>e.colors.cardBg};
    border-radius: 24px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    box-shadow: ${({theme:e})=>e.shadows.main};
    overflow: hidden;
`,tj=v.div`
    padding: 2rem;
    overflow-y: auto;
    flex-grow: 1;
    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1.5rem;
    }
`,nj=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.75rem;
`,oj=v.div`
    background-color: ${({theme:e})=>e.colors.primaryLight};
    color: ${({theme:e})=>e.colors.primary};
    border: 1px solid #BAC8FF;
    padding: 0.5rem 1rem;
    border-radius: 99px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: ${KN} 0.3s ease;
    font-size: 1rem;
    justify-content: space-between;
`,rj=v.button`
    background: ${({theme:e})=>e.colors.primary};
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    padding: 0 0 1px 0;
    transition: background-color 0.2s;
    flex-shrink: 0;

    &:hover {
        background-color: #5C45E8;
    }
`,ij=v.div`
    text-align: center;
    color: ${({theme:e})=>e.colors.label};
    padding: 4rem 0;
    
    p {
        margin: 0.25rem 0;
        font-size: 1.1rem;
    }
`,sj=v.footer`
    padding: 1rem 2rem;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme:e})=>e.colors.boxBg};
    flex-wrap: wrap;
    gap: 1rem;
    flex-shrink: 0;
`,lj=v.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
`,wm=v.button`
    background: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    color: ${({theme:e})=>e.colors.header};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        transform: translateY(-1px);
    }
`,aj=v.span`
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.learn};
    font-weight: 500;
`,cj=v.button`
    background: transparent;
    border: none;
    color: ${({theme:e})=>e.colors.primaryRed};
    font-weight: 600;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0.5rem;
    margin: -0.5rem;

    &:hover {
        text-decoration: underline;
    }
`,dj=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),a.jsx("polyline",{points:"12 19 5 12 12 5"})]}),xm=()=>a.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})}),uj=e=>{if(e.startsWith("http")){const t=e.match(/_([0-9a-fA-F\-]+)\.png$/);if(t&&t[1])try{const n=t[1].split("-").map(o=>parseInt(o,16));return String.fromCodePoint(...n)}catch{return"▫️"}return"▫️"}return e},pj=({topicId:e,navigateTo:t,onStartActivity:n,onExitToQuestionBank:o})=>{const{allSubTopics:r}=El(),i=E.useMemo(()=>r.find(y=>y.id===e),[r,e]),s=E.useMemo(()=>i?i.wordSections&&i.wordSections.length>0?i.wordSections.flatMap(y=>y.words):i.words||[]:[],[i]),[c,u]=E.useState([]),[p,f]=E.useState("");if(E.useEffect(()=>{i&&u(s)},[i,s]),!i)return null;const h=y=>{u(b=>b.find(T=>T.word===y.word)?b.filter(T=>T.word!==y.word):[...b,y])},m=()=>u(s),g=()=>u([]),S=()=>{u(s.filter(y=>(y.level||"basic")==="basic"))},C=()=>{u(s.filter(y=>y.level==="advanced"))},k=()=>{if(c.length===0)return;const y=c.map(b=>`${b.word} ${b.phonetic} ${uj(b.emoji)} ${b.definition}`).join(`
`);navigator.clipboard.writeText(y).then(()=>{f("已复制！"),setTimeout(()=>f(""),2e3)})},w=c.length===s.length,x=c.length===0;return a.jsxs(hj,{children:[a.jsxs(mj,{children:[a.jsx(gj,{onClick:()=>o?o():t("home"),children:a.jsx(dj,{})}),a.jsx("h1",{children:i.title})]}),a.jsxs(yj,{children:[a.jsxs(vj,{children:[a.jsxs(wj,{children:[a.jsx("strong",{children:c.length})," / ",s.length," 词已选"]}),a.jsxs(xj,{children:[p&&a.jsx(Sj,{children:p}),a.jsx(dr,{onClick:k,disabled:x,children:"复制笔记"}),a.jsx(dr,{onClick:S,$color:"red",children:"选基础"}),a.jsx(dr,{onClick:C,$color:"blue",children:"选进阶"}),a.jsx(dr,{onClick:m,disabled:w,children:"全选"}),a.jsx(dr,{onClick:g,disabled:x,children:"重置"})]})]}),a.jsx(bj,{children:i.wordSections&&i.wordSections.length>0?i.wordSections.map(y=>a.jsxs(kj,{children:[a.jsx(Cj,{children:y.title}),a.jsx(Sm,{children:y.words.map(b=>a.jsxs(bm,{onClick:()=>h(b),$isSelected:c.some(T=>T.word===b.word),$level:b.level||"basic",children:[a.jsx(km,{children:b.emoji.startsWith("http")?a.jsx("img",{src:b.emoji,alt:""}):b.emoji}),a.jsxs(Cm,{children:[a.jsx(Tm,{$level:b.level||"basic",children:b.word}),a.jsx(Em,{children:b.definition})]}),a.jsx(Im,{$checked:c.some(T=>T.word===b.word),$level:b.level||"basic",children:c.some(T=>T.word===b.word)&&a.jsx(xm,{})})]},b.word))})]},y.title)):a.jsx(Sm,{children:s.map(y=>a.jsxs(bm,{onClick:()=>h(y),$isSelected:c.some(b=>b.word===y.word),$level:y.level||"basic",children:[a.jsx(km,{children:y.emoji.startsWith("http")?a.jsx("img",{src:y.emoji,alt:""}):y.emoji}),a.jsxs(Cm,{children:[a.jsx(Tm,{$level:y.level||"basic",children:y.word}),a.jsx(Em,{children:y.definition})]}),a.jsx(Im,{$checked:c.some(b=>b.word===y.word),$level:y.level||"basic",children:c.some(b=>b.word===y.word)&&a.jsx(xm,{})})]},y.word))})})]}),a.jsxs(Tj,{children:[a.jsx(_m,{$type:"learn",disabled:x,onClick:()=>n("learn",c),children:"开始学习"}),a.jsx(_m,{$type:"practice",disabled:x,onClick:()=>n("practice",c),children:"开始练习"})]})]})},fj=ve`from { opacity: 0; } to { opacity: 1; }`,hj=v.div`
    animation: ${fj} 0.5s ease;
    padding-bottom: 120px;
    max-width: 1200px;
    margin: 0 auto;
`,mj=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 800;
        color: ${({theme:e})=>e.colors.header};
    }
`,gj=v.button`
    position: absolute;
    left: 0;
    background: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 10px;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme:e})=>e.colors.text};
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        color: ${({theme:e})=>e.colors.primary};
    }
`,yj=v.div`
    background: ${({theme:e})=>e.colors.cardBg};
    border-radius: 20px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    padding: 0.75rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,vj=v.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    flex-wrap: wrap;
    gap: 0.75rem;
`,wj=v.div`
    font-size: 0.8rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.label};
    strong { color: ${({theme:e})=>e.colors.primary}; font-size: 1rem; }
`,xj=v.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
`,dr=v.button`
    background: transparent;
    border: none;
    color: ${({theme:e,$color:t,disabled:n})=>n?e.colors.border:t==="red"?e.colors.primaryRed:t==="blue"?e.colors.primaryBlue:e.colors.primary};
    font-weight: 800;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover:not(:disabled) { opacity: 0.7; }
    &:disabled { color: ${({theme:e})=>e.colors.border}; cursor: not-allowed; }
`,Sj=v.span`
    font-size: 0.75rem;
    color: ${({theme:e})=>e.colors.learn};
    font-weight: 800;
`,bj=v.div`
    max-height: 70vh;
    overflow-y: auto;
    padding: 0.4rem;
    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-thumb { background: ${({theme:e})=>e.colors.border}; border-radius: 10px; }
`,kj=v.section`
    margin-bottom: 1rem;
`,Cj=v.h3`
    color: ${({theme:e})=>e.colors.label};
    font-size: 0.75rem;
    font-weight: 900;
    margin: 0.5rem 0 0.6rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding-left: 0.2rem;
`,Sm=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.5rem;
`,bm=v.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.1s ease;
    height: 48px;

    // 根据 level 决定选中的边框和背景色
    ${({$isSelected:e,$level:t,theme:n})=>{const o=t==="basic"?n.colors.primaryRed:n.colors.primaryBlue;return e?Ee`
            border: 1.5px solid ${o};
            background-color: ${t==="basic"?"#fff5f5":"#eff6ff"};
        `:Ee`
            border: 1.5px solid ${n.colors.border};
            background-color: ${n.colors.cardBg};
        `}}

    &:hover {
        border-color: ${({$level:e,theme:t})=>e==="basic"?t.colors.primaryRed:t.colors.primaryBlue}66;
    }
`,km=v.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    img { height: 100%; width: 100%; object-fit: contain; }
`,Cm=v.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
`,Tm=v.span`
    font-weight: 800;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    // 单词本身的颜色也根据 level 区分
    color: ${({$level:e,theme:t})=>e==="basic"?t.colors.primaryRed:t.colors.primaryBlue};
`,Em=v.span`
    color: ${({theme:e})=>e.colors.label};
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
`,Im=v.div`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.1s;

    ${({$checked:e,$level:t,theme:n})=>{const o=t==="basic"?n.colors.primaryRed:n.colors.primaryBlue;return e?Ee`
            border: 1.5px solid ${o};
            background-color: ${o};
            color: white;
        `:Ee`
            border: 1.5px solid #D1D5DB;
            background-color: transparent;
        `}}
`,Tj=v.footer`
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.6rem 1.2rem;
    display: flex;
    gap: 0.8rem;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    z-index: 100;
`,_m=v.button`
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 800;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    color: white;
    background-color: ${({theme:e,$type:t})=>e.colors[t]};

    &:hover:not(:disabled) { transform: translateY(-1px); filter: brightness(1.1); }
    &:disabled { background-color: ${({theme:e})=>e.colors.border}; color: ${({theme:e})=>e.colors.label}; cursor: not-allowed; }
`,Ej=({page:e,navigateTo:t,navigateToWordSelection:n,onStartActivity:o,activeTopicId:r,activityWords:i,onExitToQuestionBank:s,vocabulary:c,handleDeleteWord:u,handleClearVocabulary:p})=>{switch(e){case"word-selection":return a.jsx(pj,{topicId:r,navigateTo:t,onStartActivity:o,onExitToQuestionBank:s});case"learn":return a.jsx(dN,{topicId:r,words:i,navigateTo:t,onExitToQuestionBank:s});case"practice":return a.jsx(RN,{topicId:r,words:i,navigateTo:t,onExitToQuestionBank:s});case"my-words":return a.jsx(YN,{navigateTo:t,words:c,onDelete:u,onClear:p});case"home":default:return a.jsx(V$,{navigateToWordSelection:n})}},Ij={colors:{bg:"#f8fafc",cardBg:"#FFFFFF",columnBg:"#f1f5f9",boxBg:"#f1f5f9",text:"#475569",header:"#1e293b",border:"#e2e8f0",label:"#64748b",primary:"#4f46e5",primaryLight:"#eef2ff",primaryBlue:"#3b82f6",primaryOrange:"#f59e0b",learn:"#10b981",practice:"#f59e0b",games:"#f43f5e",myWords:"#6366f1",primaryRed:"#ef4444",newTag:"#ef4444",tagYellowText:"#b45309",tagYellowBg:"#fef3c7",tagGreenText:"#047857",tagGreenBg:"#d1fae5",tagBlueText:"#1d4ed8",tagBlueBg:"#dbeafe",tagPurpleText:"#7e22ce",tagPurpleBg:"#f3e8ff",newBadgeText:"#9a3412",newBadgeBg:"#ffedd5",highlightBg:"#eff6ff",highlightBorder:"#bfdbfe"},fonts:{body:"'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"},shadows:{subtle:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",main:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",large:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},breakpoints:{mobile:"768px"}},_j=U0`
    body {
        background-color: #f8fafc;
        color: #475569;
        margin: 0;
        font-family: ${({theme:e})=>e.fonts.body};
        font-size: 16px;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .hidden {
        display: none;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideInMobile {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`,Aj=v.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    background-color: transparent;
    min-height: 100vh;

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1rem;
    }
`,tw=({initialTopicId:e,onExitToQuestionBank:t})=>{const[n,o]=E.useState("home"),[r,i]=E.useState(null),[s,c]=E.useState(null),{vocabulary:u,toastMessage:p,selectedWord:f,selectionPosition:h,handleAddWord:m,handleDeleteWord:g,handleClearVocabulary:S,cleanWord:C}=ou(),k=y=>{window.scrollTo(0,0),o(y),y==="home"&&(i(null),c(null))},w=y=>{window.scrollTo(0,0),i(y),o("word-selection")},x=(y,b)=>{window.scrollTo(0,0),c(b),o(y)};return E.useEffect(()=>{e?(i(e),o("word-selection")):(o("home"),i(null),c(null))},[e]),a.jsxs(D0,{theme:Ij,children:[a.jsx(_j,{}),a.jsx(Aj,{children:a.jsx(Ej,{page:n,navigateTo:k,navigateToWordSelection:w,onStartActivity:x,activeTopicId:r,activityWords:s,onExitToQuestionBank:t,vocabulary:u,handleAddWord:m,handleDeleteWord:g,handleClearVocabulary:S,cleanWord:C})}),f&&h&&a.jsx(B$,{position:h,onAdd:()=>m(f)}),a.jsx(N$,{count:u.length,navigateTo:k}),a.jsx(P$,{message:p})]})},Pj={defaultId:"all",chips:[{id:"all",label:"全部话题"},{id:"essential",label:"必备",isEssential:!0},{id:"2025年5-8月",label:"2025年5-8月"},{id:"2025年9-12月",label:"2025年9-12月"},{id:"2026年1-4月",label:"2026年1-4月"}],filterSubTopic:(e,t)=>{var o;if(t==="all")return!0;if(t==="essential")return e.badge==="必考";const n=((o=e.seasons)==null?void 0:o.includes(t))||!1;return t==="2025年5-8月"?n&&e.badge!=="必考":n}},Rj={id:"speaking",title:"雅思口语词汇",ieltsTopics:G0,allSubTopics:tu,filters:Pj},Mj=()=>{const[e]=qd(),t=tt(),n=ht(),o=e.get("topicId"),r=e.get("from"),i=()=>{n({pathname:"/speaking/bank",search:t.search},{replace:!0})},s=r==="bank";return a.jsx(Xv,{data:Rj,children:a.jsx(tw,{initialTopicId:o,onExitToQuestionBank:s?i:void 0})})},Yc=(e,t,n)=>e.split(t).join(n),Am=(e,t)=>{let n=e.text;return e.blanks.forEach(o=>{const r=t[o.id];n=Yc(n,o.placeholder,r&&r.trim()?r:"___")}),n},ka=e=>{const t={},n={};return e.slots.forEach(o=>{const r=o.templates[0];t[o.id]=r.id,r.blanks.forEach(i=>{n[i.id]=void 0})}),{selectedTemplateBySlot:t,selections:n}},$j=e=>{const t=new Map;return e.blanks.forEach(n=>{const o=t.get(n.poolId);if(o){o.blanks.push({id:n.id,label:n.label});return}t.set(n.poolId,{poolId:n.poolId,blanks:[{id:n.id,label:n.label}]})}),Array.from(t.values())},Pm=e=>{if(!(!e||e.length===0))return e[Math.floor(Math.random()*e.length)]},Rm=e=>{const t=e.split("___");return t.length===1?e:a.jsx(a.Fragment,{children:t.map((n,o)=>a.jsxs(Se.Fragment,{children:[n,o<t.length-1&&a.jsx(i5,{children:"___"})]},o))})},Nj=({kit:e})=>{const t=E.useMemo(()=>new Map(e.pools.map(_=>[_.id,_])),[e.pools]),n=E.useMemo(()=>e.slots.map(_=>({slot:_,template:_.templates[0]})).filter(_=>!!_.template),[e.slots]),[o,r]=E.useState(()=>ka(e).selections),[i,s]=E.useState(!1),[c,u]=E.useState(!1);E.useEffect(()=>{r(ka(e).selections),s(!1),u(!1)},[e]);const p=E.useMemo(()=>n.map(({template:_})=>Am(_,o)),[n,o]),f=E.useMemo(()=>p.map((_,P)=>`${P+1}. ${_}`),[p]),h=E.useMemo(()=>{const _=new Set;return n.forEach(({template:P})=>P.blanks.forEach(R=>_.add(R.id))),Array.from(_)},[n]),m=E.useMemo(()=>h.reduce((_,P)=>_+(o[P]?1:0),0),[o,h]),g=E.useMemo(()=>f.join(`
`),[f]),S=E.useMemo(()=>p.map(_=>Yc(_,"___","").trim()).filter(Boolean).join(" "),[p]),C=(_,P)=>{const R=_.blanks.map(B=>B.id);r(B=>{const j={...B};if(R.length===1){const F=R[0];return j[F]=B[F]===P?void 0:P,j}const N=R.map(F=>B[F]).filter(Boolean),U=N.includes(P);let W;return U?W=N.filter(F=>F!==P):N.length<R.length?W=[...N,P]:W=[...N.slice(0,R.length-1),P],R.forEach((F,G)=>{j[F]=W[G]}),j})},k=_=>{r(P=>{const R={...P};return _.blanks.forEach(B=>{R[B.id]=void 0}),R})},w=_=>{r(P=>{const R={...P},B=new Map;return _.blanks.forEach(j=>{const N=R[j.id],U=B.get(j.poolId)||new Set;if(N){U.add(N),B.set(j.poolId,U);return}const W=t.get(j.poolId);if(!W||W.options.length===0)return;const F=W.options.filter($=>!U.has($)),G=Pm(F.length>0?F:W.options);G&&(R[j.id]=G,U.add(G),B.set(j.poolId,U))}),R})},x=_=>{r(P=>{const R={...P};return _.blanks.forEach(B=>{R[B.id]=void 0}),R})},y=()=>{r(_=>{const P={..._};return n.forEach(({template:R})=>{const B=new Map;R.blanks.forEach(j=>{const N=P[j.id],U=B.get(j.poolId)||new Set;if(N){U.add(N),B.set(j.poolId,U);return}const W=t.get(j.poolId);if(!W||W.options.length===0)return;const F=W.options.filter($=>!U.has($)),G=Pm(F.length>0?F:W.options);G&&(P[j.id]=G,U.add(G),B.set(j.poolId,U))})}),P})},b=()=>{r(ka(e).selections),s(!1),u(!1)},T=async()=>{try{await navigator.clipboard.writeText(g),s(!0),window.setTimeout(()=>s(!1),1500)}catch(_){console.error("Failed to copy",_)}},A=()=>{if(!window.speechSynthesis)return;window.speechSynthesis.cancel();const _=new SpeechSynthesisUtterance(S||Yc(g,`
`," "));_.onend=()=>u(!1),_.onerror=()=>u(!1),u(!0),window.speechSynthesis.speak(_)},I=()=>{window.speechSynthesis&&(window.speechSynthesis.cancel(),u(!1))};return a.jsxs(jj,{children:[a.jsxs(Lj,{children:[a.jsxs(Dj,{children:[a.jsx(Bj,{children:e.title}),a.jsx(Uj,{children:e.prompt}),a.jsx(Fj,{children:"直接点下面的词语按钮填空；每次选择都会同步更新“拼装结果”。"})]}),a.jsxs(Vj,{children:[a.jsx(vr,{type:"button",onClick:y,children:"随机一套"}),a.jsx(vr,{type:"button",onClick:b,children:"清空"}),a.jsx(zj,{type:"button",onClick:T,disabled:f.length===0,children:i?"已复制":`复制 ${f.length} 句`}),window.speechSynthesis&&(c?a.jsx(vr,{type:"button",onClick:I,children:"停止朗读"}):a.jsx(vr,{type:"button",onClick:A,disabled:f.length===0,children:"朗读"}))]})]}),e.card&&a.jsxs(Gj,{"aria-label":"题目卡片",children:[a.jsxs(Hj,{children:[e.card.seasonTag&&a.jsx(Wj,{children:e.card.seasonTag}),e.card.status==="New"&&a.jsx(qj,{children:"新题"})]}),e.card.cardTitle&&a.jsx(Oj,{children:e.card.cardTitle}),e.card.part2Title&&a.jsxs(Jj,{children:[a.jsx(Yj,{children:"Part 2"}),a.jsx(Kj,{children:e.card.part2Title}),e.card.part2Prompts&&e.card.part2Prompts.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Qj,{children:"You should say:"}),a.jsx(Kc,{children:e.card.part2Prompts.map(_=>a.jsx("li",{children:_},_))})]})]}),e.card.part3Questions&&e.card.part3Questions.length>0&&a.jsxs(Xj,{children:[a.jsx("summary",{children:"Part 3（点开查看）"}),a.jsx(Kc,{children:e.card.part3Questions.map(_=>a.jsx("li",{children:_},_))})]})]}),a.jsxs(Zj,{"aria-label":"拼装结果",children:[a.jsxs(e5,{children:[a.jsxs(t5,{children:["拼装结果（",f.length," 句）"]}),a.jsxs(n5,{children:[m,"/",h.length," 已填"]})]}),a.jsx(o5,{children:f.map((_,P)=>a.jsx(r5,{children:Rm(_)},P))})]}),a.jsx(s5,{"aria-label":"填空与选择",children:n.map(({slot:_,template:P},R)=>{const B=$j(P);return a.jsxs(l5,{children:[a.jsxs(a5,{children:[a.jsxs(c5,{children:[a.jsx(d5,{children:R+1}),a.jsxs("div",{children:[a.jsx(u5,{children:_.title}),a.jsx(p5,{children:Rm(Am(P,o))})]})]}),a.jsxs(f5,{children:[a.jsx(Mm,{type:"button",onClick:()=>w(P),children:"随机此句"}),a.jsx(Mm,{type:"button",onClick:()=>x(P),children:"清空此句"})]})]}),a.jsx(h5,{children:B.map(j=>{const N=t.get(j.poolId);if(!N)return null;const U=j.blanks.map(G=>o[G.id]).filter(Boolean),W=j.blanks.length,F=W>1;return a.jsxs(m5,{children:[a.jsxs(g5,{children:[a.jsxs(y5,{children:[N.title,F?a.jsxs(v5,{children:["（选",W,"个）"]}):null]}),a.jsxs(w5,{children:[a.jsx(x5,{children:U.length>0?F?U.map((G,$)=>a.jsxs($m,{children:[$+1,". ",G]},`${G}-${$}`)):a.jsx($m,{children:U[0]}):a.jsx(S5,{children:"未选"})}),a.jsx(b5,{type:"button",onClick:()=>k(j),children:"清空"})]})]}),a.jsx(k5,{children:N.options.map(G=>{const $=U.includes(G);return a.jsx(C5,{type:"button",$active:$,onClick:()=>C(j,G),"aria-label":`选择：${G}`,children:G},G)})})]},`${_.id}:${j.poolId}`)})})]},_.id)})})]})},jj=v.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Lj=v.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,Dj=v.div`
  min-width: 320px;
  flex: 1 1 auto;
`,Bj=v.h2`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.header};
`,Uj=v.p`
  margin: 0.35rem 0 0;
  color: ${({theme:e})=>e.colors.label};
  font-weight: 700;
`,Fj=v.div`
  margin-top: 0.75rem;
  padding: 0.65rem 0.9rem;
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.colors.highlightBorder};
  background-color: ${({theme:e})=>e.colors.highlightBg};
  color: ${({theme:e})=>e.colors.header};
  font-weight: 900;
  line-height: 1.5;
`,Vj=v.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,vr=v.button`
  font-family: inherit;
  border-radius: 9999px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e})=>e.colors.cardBg};
  color: ${({theme:e})=>e.colors.header};
  padding: 0.55rem 1rem;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.12s ease, background-color 0.12s ease;

  &:hover:enabled {
    transform: translateY(-1px);
    background-color: ${({theme:e})=>e.colors.boxBg};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,zj=v(vr)`
  border-color: ${({theme:e})=>e.colors.primaryBlue};
  background-color: ${({theme:e})=>e.colors.primaryBlue};
  color: white;

  &:hover:enabled {
    background-color: ${({theme:e})=>e.colors.header};
    border-color: ${({theme:e})=>e.colors.header};
  }
`,Gj=v.section`
  background-color: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 22px;
  padding: 1rem;
  box-shadow: 0 10px 22px ${({theme:e})=>e.colors.shadow};
`,Hj=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`,Wj=v.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.7rem;
  border-radius: 9999px;
  background-color: ${({theme:e})=>e.colors.primaryBlue};
  color: white;
  font-weight: 1000;
`,qj=v.div`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border-radius: 9999px;
  background-color: ${({theme:e})=>e.colors.primaryOrange};
  color: white;
  font-weight: 1000;
`,Oj=v.h3`
  margin: 0.75rem 0 0;
  font-size: 1.4rem;
  font-weight: 1000;
  color: ${({theme:e})=>e.colors.header};
`,Jj=v.div`
  margin-top: 0.9rem;
  padding: 0.9rem;
  border-radius: 18px;
  border: 1px solid ${({theme:e})=>e.colors.highlightBorder};
  background-color: ${({theme:e})=>e.colors.highlightBg};
`,Yj=v.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.55rem;
  border-radius: 9999px;
  background-color: ${({theme:e})=>e.colors.header};
  color: white;
  font-weight: 1000;
  font-size: 0.85rem;
`,Kj=v.div`
  margin-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 1000;
  color: ${({theme:e})=>e.colors.header};
`,Qj=v.div`
  margin-top: 0.7rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.label};
`,Kc=v.ul`
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
  color: ${({theme:e})=>e.colors.header};
  font-weight: 800;
  line-height: 1.75;
`,Xj=v.details`
  margin-top: 0.9rem;
  border-radius: 18px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e})=>e.colors.boxBg};
  padding: 0.8rem 0.9rem;

  summary {
    cursor: pointer;
    font-weight: 1000;
    color: ${({theme:e})=>e.colors.header};
    outline: none;
  }

  ${Kc} {
    margin-top: 0.8rem;
  }
`,Zj=v.section`
  background-color: ${({theme:e})=>e.colors.cardBg};
  border: 2px solid ${({theme:e})=>e.colors.primaryBlue};
  border-radius: 22px;
  padding: 1rem;
  box-shadow: 0 10px 22px ${({theme:e})=>e.colors.shadow};
`,e5=v.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`,t5=v.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 1000;
  color: ${({theme:e})=>e.colors.header};
`,n5=v.div`
  font-weight: 1000;
  color: ${({theme:e})=>e.colors.label};
`,o5=v.div`
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,r5=v.div`
  background-color: ${({theme:e})=>e.colors.highlightBg};
  border: 1px solid ${({theme:e})=>e.colors.highlightBorder};
  border-radius: 14px;
  padding: 0.75rem 0.85rem;
  line-height: 1.7;
  font-weight: 850;
  color: ${({theme:e})=>e.colors.header};
`,i5=v.span`
  color: ${({theme:e})=>e.colors.primaryOrange};
  font-weight: 1000;
`,s5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
  gap: 1rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,l5=v.section`
  background-color: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 8px 18px ${({theme:e})=>e.colors.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`,a5=v.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`,c5=v.div`
  display: flex;
  gap: 0.85rem;
  min-width: 0;
`,d5=v.div`
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  background-color: ${({theme:e})=>e.colors.header};
  color: white;
  font-weight: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,u5=v.h4`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 1000;
  color: ${({theme:e})=>e.colors.header};
`,p5=v.div`
  margin-top: 0.45rem;
  border-radius: 16px;
  border: 1px dashed ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e})=>e.colors.boxBg};
  padding: 0.75rem 0.85rem;
  line-height: 1.75;
  font-weight: 850;
  color: ${({theme:e})=>e.colors.header};
  word-break: break-word;
`,f5=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-shrink: 0;
`,Mm=v.button`
  font-family: inherit;
  border-radius: 9999px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e})=>e.colors.cardBg};
  color: ${({theme:e})=>e.colors.header};
  padding: 0.45rem 0.85rem;
  font-weight: 900;
  cursor: pointer;
`,h5=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,m5=v.div`
  border-radius: 18px;
  border: 1px solid ${({theme:e})=>e.colors.highlightBorder};
  background-color: ${({theme:e})=>e.colors.highlightBg};
  padding: 0.9rem;
`,g5=v.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`,y5=v.div`
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  font-weight: 1000;
  color: ${({theme:e})=>e.colors.header};
`,v5=v.span`
  color: ${({theme:e})=>e.colors.label};
  font-weight: 900;
`,w5=v.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: flex-end;
`,x5=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
`,$m=v.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.3rem 0.6rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e})=>e.colors.cardBg};
  color: ${({theme:e})=>e.colors.header};
  font-weight: 900;
  font-size: 0.9rem;
`,S5=v.span`
  color: ${({theme:e})=>e.colors.primaryOrange};
  font-weight: 1000;
`,b5=v.button`
  font-family: inherit;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.label};
  font-weight: 1000;
  cursor: pointer;
  padding: 0.25rem 0.4rem;
  border-radius: 10px;

  &:hover {
    background-color: ${({theme:e})=>e.colors.cardBg};
    color: ${({theme:e})=>e.colors.header};
  }
`,k5=v.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`,C5=v.button`
  font-family: inherit;
  border-radius: 9999px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e,$active:t})=>t?e.colors.primaryBlue:e.colors.cardBg};
  color: ${({theme:e,$active:t})=>t?"white":e.colors.header};
  padding: 0.55rem 1rem;
  font-weight: 1000;
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({theme:e})=>e.colors.primaryBlue};
  }
`,Nm=()=>{const e=tt(),t=ht(),[n,o]=qd(),r=n.get("kit"),i=E.useMemo(()=>Pc(r)||Ac[0],[r]),[s,c]=E.useState(i);E.useEffect(()=>{c(i)},[i]);const u=()=>{t({pathname:"/speaking",search:e.search})},p=f=>{const h=Pc(f);if(!h)return;c(h);const m=new URLSearchParams(n);m.set("kit",f),o(m,{replace:!0})};return a.jsxs(T5,{children:[a.jsxs(E5,{children:[a.jsxs(I5,{onClick:u,"aria-label":"返回主页",children:[a.jsx(Nt,{}),a.jsx("span",{children:"返回"})]}),a.jsx("h1",{children:"Part 2 积木拼装（Demo）"})]}),a.jsxs(_5,{children:[a.jsx(A5,{htmlFor:"kit-select",children:"选择题目"}),a.jsx(P5,{id:"kit-select",value:s.id,onChange:f=>p(f.target.value),children:Ac.map(f=>a.jsx("option",{value:f.id,children:f.title},f.id))}),a.jsx(R5,{children:"不影响现有题库/Modal；这是独立试验页。"})]}),a.jsx(Nj,{kit:s})]})},T5=v.div`
  max-width: 1400px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease;
`,E5=v.header`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;

  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.header};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    h1 {
      font-size: 1.4rem;
      margin: 0 3.5rem;
    }
  }
`,I5=v.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({theme:e})=>e.colors.boxBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.label};
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.border};
    color: ${({theme:e})=>e.colors.header};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 0.55rem;
    gap: 0;
    span {
      display: none;
    }
  }
`,_5=v.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  background-color: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 16px;
  padding: 0.85rem 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
`,A5=v.label`
  font-weight: 900;
  color: ${({theme:e})=>e.colors.header};
`,P5=v.select`
  font-family: inherit;
  padding: 0.45rem 0.75rem;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background-color: ${({theme:e})=>e.colors.boxBg};
  color: ${({theme:e})=>e.colors.header};
  min-width: 320px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,R5=v.span`
  color: ${({theme:e})=>e.colors.label};
  font-weight: 700;
`,jm=({title:e})=>{const t=ht(),n=tt();return a.jsxs(M5,{children:[a.jsxs($5,{children:[a.jsxs(N5,{onClick:()=>t({pathname:"/",search:n.search}),"aria-label":"返回总页面",children:[a.jsx(Nt,{}),a.jsx("span",{children:"返回"})]}),a.jsx("h1",{children:e})]}),a.jsx(j5,{children:a.jsx("p",{children:"该模块正在整理中，先把听力/口语词汇与口语题库合并打通。"})})]})},M5=v.div`
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease;
`,$5=v.header`
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 800;
        color: ${({theme:e})=>e.colors.header};
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem;
        }
    }
`,N5=v.button`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
        color: ${({theme:e})=>e.colors.header};
    }
`,j5=v.div`
    background-color: ${({theme:e})=>e.colors.cardBg};
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid ${({theme:e})=>e.colors.border};
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
    color: ${({theme:e})=>e.colors.label};
`,L5={id:"friends",title:"Friends & Sharing",type:"人物题",color:"yellow",wordSections:[{title:"基础词汇",words:z(["get along with","teammate","close friend","talkative","easy-going","caring","topics","trust","hang out","lend","borrow","personal","information","ID card","bank account"],"basic")},{title:"进阶词汇",words:z(["sociable","loyal","trustworthy","supportive","reliable","generous","thoughtful","mutual","contribute","cooperate"],"advanced")}]},D5={id:"sharing",title:"Sharing",type:"事件题",color:"blue",words:z(["generous","mutual","contribute","cooperate"])},B5={id:"break",title:"Having a break",type:"事件题",color:"blue",words:z(["unwind","recharge","leisure","have a rest","take it easy","chill","refresh","take a nap","peaceful","relax","rest","calm","hobby"])},U5={id:"museum",title:"Museum",type:"地点题",color:"green",wordSections:[{title:"基础词汇",words:z(["exhibition","gallery","artifact","artwork","collection","display","sculpture","historical site","educational"],"basic")},{title:"进阶词汇",words:z(["cultural heritage","aesthetics","restoration","masterpiece","abstract","realism","contemporary art","archaeology","preservation"],"advanced")}]},F5={id:"advertisement",title:"Advertisement",type:"事物题",color:"purple",wordSections:[{title:"基础词汇",words:z(["commercial","brand","product","service","customer","billboard","poster","online ads","pop-up ad","slogan","annoying","promote"],"basic")},{title:"进阶词汇",words:z(["persuasive","target audience","consumer","eye-catching","misleading","draw attention","brand awareness","celebrity endorsement","marketing strategy","consumer behavior","campaign"],"advanced")}]},V5={id:"borrowing",title:"Borrowing/lending",type:"事件题",color:"blue",wordSections:[{title:"基础词汇",words:z(["lend","borrow","return","keep","give back","due date","library card"],"basic")},{title:"进阶词汇",words:z(["responsible","overdue","fine","loan","owe","permission","trustworthy","in good condition","damage","replace"],"advanced")}]},z5={id:"chatting",title:"Chatting",type:"事件题",color:"blue",wordSections:[{title:"基础词汇",words:z(["conversation","small talk","catch up","stay in touch","lively","school stuff","private","face-to-face","social media","text messages","video call","argue","misunderstand","misunderstanding","make up"],"basic")},{title:"进阶词汇",words:z(["converse","engage in","express emotions","respect each other"],"advanced")}]},G5={id:"gardening",title:"Growing Plants & Vegetables",type:"事件题",color:"blue",isNew:!0,wordSections:[{title:"基础词汇",words:z(["farm","backyard","soil","seeds","water","sunlight","fresh air","plant seeds","water the plants","root","stem","petal","blossom","bloom","potted plant","houseplants","indoor plants","green plants","flower shop","school garden","grow beans","grow flowers","observe the growth","wait for it to sprout"],"basic")},{title:"进阶词汇",words:z(["cultivate","harvest","organic","horticulture","botany","fragrance","popular","take care of","home-grown","relaxing","enjoyable","interesting","rewarding","meaningful","close to nature","healthy lifestyle","take time and effort","space","easy to grow","hands-on experience","environmental education","learn responsibility","teamwork","keep plants at home","decorate the room","make the room feel alive","give enough sunlight","school gardening class","take time to grow","symbol of good luck","special occasions","housewarming gift","meaningful gift","peaceful","refreshing","pleasant"],"advanced")}]},H5={id:"going-out",title:"Going Out",type:"事件题",color:"yellow",isNew:!0,wordSections:[{title:"基础词汇",words:z(["meet up","hang out","gathering","get-together","celebrate","occasion","go for a walk","hang out with friends","daily life","snacks","pack some food","bottled water","homemade food","just in case","mobile phone / cellphone","take my phone with me","mobile payment","check messages","cash","rarely use cash","only for small shops","credit card","just a habit","depends on the situation"],"basic")},{title:"进阶词汇",words:z(["socialize","venue","atmosphere","lively","nightlife","entertainment","book a table","reservation","go for a drink","energy bar","cannot live without my phone","navigation app","stay connected","e-wallet","qr code"],"advanced")}]},W5={id:"doing-well",title:"Doing something well",type:"事件题",color:"blue",isNew:!0,words:z(["champion","praise","accomplishment","excel","outstanding","proficient","skillful","expert","achieve","succeed","practice","proud","improve","good at","talented","hard-working","smart","clever","experience","learn"])},q5={id:"shoes",title:"Shoes",type:"事物题",color:"purple",wordSections:[{title:"1. 鞋子种类 (Shoe Types)",words:z(["sneakers / trainers","sports shoes","high heels","mid heel","low heel","boots","high boots","short boots","sandals","slippers","flip-flops","canvas shoes","open-toed","almond shaped toe","footwear"],"basic")},{title:"2. 描述与形容 (Descriptions)",words:z(["fashionable","affordable","brand","stylish","size chart","durable","versatile","breathable","waterproof"],"advanced")},{title:"3. 地道表达与词组 (Expressions)",words:z(["try on shoes","fit well","on sale","discount","return / exchange","latest trend","worth the money","break in","wear and tear","scuff marks"],"advanced")}]},O5={id:"rules",title:"Rules",type:"事物题",color:"purple",wordSections:[{title:"基础词汇",words:z(["allowed","benefit","follow the rules","break the rules","respect","fewer","enough","traffic rules","public rules","no littering","reasonable","annoying","strict","school discipline","behave well","misbehave","wear school uniform","no phones in class","warning","punishment","get into trouble","fair","unfair"],"basic")},{title:"进阶词汇",words:z(["focus","practice","required","rule-free","self-discipline","regulation","policy","comply with","enforce","dedicated","detention"],"advanced")}]},J5={id:"p1-study-work",title:"Study or work",type:"基础题",color:"blue",section:"Part 1",wordSections:[{title:"学习类 (Study)",words:[{word:"major in",level:"basic",phonetic:"/ˈmeɪdʒər ɪn/",definition:"主修",example:"I major in computer science at university.",emoji:"🎓"},{word:"curriculum",level:"advanced",phonetic:"/kəˈrɪkjələm/",definition:"课程",example:"The school is introducing a new curriculum next year.",emoji:"📖"},{word:"assignment",level:"basic",phonetic:"/əˈsaɪnmənt/",definition:"作业/任务",example:"I have a big assignment due next Monday.",emoji:"📝"},{word:"tutorial",level:"advanced",phonetic:"/tuːˈtɔːriəl/",definition:"辅导课",example:"Small group tutorials are very helpful for discussion.",emoji:"🏫"},{word:"overwhelming",level:"advanced",phonetic:"/ˌoʊvərˈwelmɪŋ/",definition:"压力巨大的",example:"The workload can be a bit overwhelming sometimes.",emoji:"😫"}]},{title:"工作类 (Work)",words:[{word:"occupation",level:"basic",phonetic:"/ˌɑːkjuˈpeɪʃn/",definition:"职业",example:"Please state your name and occupation.",emoji:"💼"},{word:"colleague",level:"basic",phonetic:"/ˈkɑːliːɡ/",definition:"同事",example:"I get along very well with my colleagues.",emoji:"🤝"},{word:"workload",level:"basic",phonetic:"/ˈwɜːrkloʊd/",definition:"工作量",example:"The management is trying to reduce the staff workload.",emoji:"📂"},{word:"rewarding",level:"advanced",phonetic:"/rɪˈwɔːrdɪŋ/",definition:"有回报的/值得的",example:"Teaching is a very rewarding career.",emoji:"✨"},{word:"commute",level:"advanced",phonetic:"/kəˈmjuːt/",definition:"通勤",example:"My daily commute takes about 40 minutes.",emoji:"🚆"}]}]},Y5={id:"p1-hometown",title:"Hometown",type:"基础题",color:"green",section:"Part 1",wordSections:[{title:"基础描述",words:[{word:"birthplace",level:"basic",phonetic:"/ˈbɜːrθpleɪs/",definition:"出生地",example:"Beijing is my birthplace and I grew up there.",emoji:"🏠"},{word:"scenery",level:"basic",phonetic:"/ˈsiːnəri/",definition:"风景",example:"The scenery in my hometown is breathtaking.",emoji:"🏔️"},{word:"residents",level:"basic",phonetic:"/ˈrezɪdənts/",definition:"居民",example:"The local residents are very friendly and welcoming.",emoji:"🧑‍🤝‍🧑"},{word:"historical",level:"basic",phonetic:"/hɪˈstɔːrɪkl/",definition:"历史悠久的",example:"There are many historical buildings in the city center.",emoji:"🏛️"}]},{title:"进阶描述",words:[{word:"urbanization",level:"advanced",phonetic:"/ˌɜːrbənaɪˈzeɪʃn/",definition:"城市化",example:"The town has seen rapid urbanization in recent years.",emoji:"🏙️"},{word:"pace of life",level:"advanced",phonetic:"/peɪs əv laɪf/",definition:"生活节奏",example:"I prefer the slow pace of life in my hometown.",emoji:"⏳"},{word:"metropolis",level:"advanced",phonetic:"/məˈtrɑːpəlɪs/",definition:"大都市",example:"My hometown has transformed into a bustling metropolis.",emoji:"🌃"},{word:"local delicacy",level:"advanced",phonetic:"/ˈloʊkl ˈdelɪkəsi/",definition:"当地美食",example:"You must try the local delicacy when you visit.",emoji:"🍲"},{word:"sentimental value",level:"advanced",phonetic:"/ˌsentɪˈmentl ˈvæljuː/",definition:"情感价值",example:"This old park has great sentimental value to me.",emoji:"💖"}]}]},K5={id:"p1-accommodation",title:"Accommodation",type:"基础题",color:"yellow",section:"Part 1",wordSections:[{title:"住所类型",words:[{word:"apartment",level:"basic",phonetic:"/əˈpɑːrtmənt/",definition:"公寓",example:"I live in a small apartment in the city center.",emoji:"🏢"},{word:"spacious",level:"advanced",phonetic:"/ˈspeɪʃəs/",definition:"宽敞的",example:"The living room is very bright and spacious.",emoji:"↔️"},{word:"cozy",level:"basic",phonetic:"/ˈkoʊzi/",definition:"舒适的",example:"My bedroom is very cozy and warm.",emoji:"🛋️"},{word:"well-decorated",level:"advanced",phonetic:"/wel ˈdekəreɪtɪd/",definition:"装修精美的",example:"Her flat is stylish and well-decorated.",emoji:"🖼️"}]},{title:"居住环境",words:[{word:"balcony",level:"basic",phonetic:"/ˈbælkəni/",definition:"阳台",example:"I enjoy having coffee on the balcony.",emoji:"🌅"},{word:"neighborhood",level:"basic",phonetic:"/ˈneɪbərhʊd/",definition:"街区/邻里",example:"It is a safe and quiet neighborhood.",emoji:"🏡"},{word:"amenities",level:"advanced",phonetic:"/əˈmiːnətiz/",definition:"生活设施",example:"The building has great amenities like a gym and a pool.",emoji:"🏪"},{word:"well-lit",level:"advanced",phonetic:"/wel lɪt/",definition:"采光良好的",example:"I prefer a well-lit room with large windows.",emoji:"☀️"},{word:"cluttered",level:"advanced",phonetic:"/ˈklʌtərd/",definition:"凌乱的",example:"My desk is always cluttered with books.",emoji:"📦"}]}]},Q5={id:"p1-area-live-in",title:"The area you live in",type:"基础题",color:"purple",section:"Part 1",wordSections:[{title:"社区概况",words:[{word:"residential",level:"basic",phonetic:"/ˌrezɪˈdenʃl/",definition:"住宅区的",example:"I live in a quiet residential area.",emoji:"🏘️"},{word:"convenient",level:"basic",phonetic:"/kənˈviːniənt/",definition:"方便的",example:"The area is very convenient for shopping.",emoji:"🛒"},{word:"surroundings",level:"basic",phonetic:"/səˈraʊndɪŋz/",definition:"周边环境",example:"The natural surroundings are quite beautiful.",emoji:"🌳"},{word:"lively",level:"basic",phonetic:"/ˈlaɪvli/",definition:"热闹的",example:"The area becomes quite lively at night.",emoji:"✨"}]},{title:"交通与设施",words:[{word:"public transport",level:"basic",phonetic:"/ˈpʌblɪk ˈtrænspɔːrt/",definition:"公共交通",example:"The area has excellent public transport links.",emoji:"🚌"},{word:"within walking distance",level:"advanced",phonetic:"/wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/",definition:"在步行距离内",example:"The supermarket is within walking distance.",emoji:"🚶"},{word:"greenery",level:"advanced",phonetic:"/ˈɡriːnəri/",definition:"绿色植物/绿化",example:"There is a lot of greenery in our neighborhood.",emoji:"🌿"},{word:"vibrant",level:"advanced",phonetic:"/ˈvaɪbrənt/",definition:"充满活力的",example:"It is a vibrant community with many young people.",emoji:"🔥"},{word:"isolated",level:"advanced",phonetic:"/ˈaɪsəleɪtɪd/",definition:"偏僻的",example:"The area is a bit isolated from the city center.",emoji:"📍"}]}]},X5=[{...K5,id:"accommodation",title:"Accommodation 租房住宿",badge:"Section 1"},{...Q5,id:"local-area",title:"Local Area 周边环境",badge:"Section 1"},{...Y5,id:"hometown",title:"Hometown 家乡背景"},{...L5,id:"friends",title:"Friends & Neighbours 人际关系",badge:"Section 1"},{...z5,id:"chatting",title:"Chatting & Small Talk 日常交流",badge:"Section 1"},{...D5,id:"sharing",title:"Sharing & Cooperation 分享与合作"},{...B5,id:"break",title:"Leisure & Breaks 休闲与放松"},{...H5,id:"going-out",title:"Social Events 社交与活动",badge:"Section 1"},{...V5,id:"borrowing",title:"Library & Services 图书馆与服务",badge:"Section 1"},{...q5,id:"shopping-clothing",title:"Shopping & Clothing 购物与服装",badge:"Section 2"},{...U5,id:"tourism-culture",title:"Tourism & Culture 旅游与文化",badge:"Section 2"},{...F5,id:"media-marketing",title:"Media & Marketing 媒体与市场"}],Z5=[{...J5,id:"campus-life",title:"Campus Life 校园生活",badge:"Section 3"},{...W5,id:"skills-performance",title:"Skills & Performance 能力与表现",badge:"Section 3"},{...V0,id:"communication",title:"Communication 交流方式"},{...O5,id:"regulations",title:"Regulations 规则与制度"},{...G5,id:"environment",title:"Environment 环境与植物",badge:"Section 4"},{...z0,id:"food-science",title:"Food Science 食品科学"},{...F0,id:"healthy-eating",title:"Healthy Eating 健康饮食"}],nw=[{title:"雅思听力：生活社交场景 (S1 & S2)",section:"Common",subTopics:X5},{title:"雅思听力：学术研究场景 (S3 & S4)",section:"Part 2 & 3",subTopics:Z5}],eL=nw.flatMap(e=>e.subTopics),tL={defaultId:"all",chips:[{id:"all",label:"全部"},{id:"Section 1",label:"Section 1"},{id:"Section 2",label:"Section 2"},{id:"Section 3",label:"Section 3"},{id:"Section 4",label:"Section 4"}],filterSubTopic:(e,t)=>t==="all"?!0:e.badge===t},nL={id:"listening",title:"雅思听力词汇",ieltsTopics:nw,allSubTopics:eL,filters:tL},oL=()=>a.jsx(Xv,{data:nL,children:a.jsx(tw,{})}),rL=({message:e})=>e?a.jsx(sL,{children:e},e):null,iL=ve`
    0% { transform: translate(-50%, -100%); opacity: 0; }
    15% { transform: translate(-50%, 0); opacity: 1; }
    85% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, -100%); opacity: 0; }
`,sL=v.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({theme:e})=>e.colors.header};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 2000;
    font-size: 0.9rem;
    font-weight: 500;
    animation: ${iL} 3s ease-in-out forwards;
    white-space: nowrap;
`,lL=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),a.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),aL=({count:e,onClick:t})=>a.jsxs(cL,{onClick:t,"aria-label":`打开单词本, 当前有 ${e} 个单词`,children:[a.jsx(lL,{}),e>0&&a.jsx(dL,{children:e})]}),cL=v.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.primaryOrange};
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
    z-index: 1001;

    &:hover {
        transform: scale(1.1);
        background-color: #e88f33;
    }

    svg {
        width: 28px;
        height: 28px;
    }

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        bottom: 1rem;
        right: 1rem;
        width: 50px;
        height: 50px;
    }
`,dL=v.span`
    position: absolute;
    top: -4px;
    right: -4px;
    background-color: ${({theme:e})=>e.colors.newTag};
    color: white;
    border-radius: 50%;
    min-width: 24px;
    height: 24px;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    border: 2px solid white;
`,uL=({words:e,onClose:t,onDelete:n,onClear:o})=>{const[r,i]=E.useState(""),s=u=>{if(e.length===0)return;const p=u==="comma"?e.join(", "):e.join(`
`);navigator.clipboard.writeText(p).then(()=>{i("已复制！"),setTimeout(()=>i(""),2e3)},()=>{i("复制失败"),setTimeout(()=>i(""),2e3)})},c=u=>u.stopPropagation();return a.jsx(fL,{onClick:t,role:"dialog","aria-modal":"true","aria-labelledby":"vocab-modal-title",children:a.jsxs(hL,{onClick:c,children:[a.jsxs(mL,{children:[a.jsx("h3",{id:"vocab-modal-title",children:"我的单词本"}),a.jsx(gL,{onClick:t,"aria-label":"关闭",children:"×"})]}),a.jsx(yL,{children:e.length>0?a.jsx(vL,{children:e.map(u=>a.jsxs(wL,{children:[u,a.jsx(xL,{onClick:()=>n(u),"aria-label":`删除单词 ${u}`,children:"×"})]},u))}):a.jsxs(SL,{children:[a.jsx("p",{children:"单词本是空的。"}),a.jsx("p",{children:"双击英文单词，或选中短语后点击“添加”即可加入。"})]})}),e.length>0&&a.jsxs(bL,{children:[a.jsxs(kL,{children:[a.jsx(Lm,{onClick:()=>s("comma"),children:"复制 (逗号)"}),a.jsx(Lm,{onClick:()=>s("newline"),children:"复制 (换行)"}),r&&a.jsx(CL,{children:r})]}),a.jsx(TL,{onClick:o,children:"清空单词本"})]})]})})},ow=ve`
    from { opacity: 0; }
    to { opacity: 1; }
`,pL=ve`
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`,fL=v.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1002;
    animation: ${ow} 0.3s ease;
`,hL=v.div`
    background: ${({theme:e})=>e.colors.cardBg};
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: ${pL} 0.3s ease-out;
`,mL=v.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    flex-shrink: 0;

    h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: ${({theme:e})=>e.colors.header};
    }
`,gL=v.button`
    background: none;
    border: none;
    font-size: 2rem;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    line-height: 1;
    padding: 0;
    &:hover {
        color: ${({theme:e})=>e.colors.header};
    }
`,yL=v.div`
    padding: 1.5rem;
    overflow-y: auto;
    flex-grow: 1;
`,vL=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
`,wL=v.div`
    background-color: ${({theme:e})=>e.colors.highlightBg};
    color: ${({theme:e})=>e.colors.primaryBlue};
    border: 1px solid ${({theme:e})=>e.colors.highlightBorder};
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: ${ow} 0.2s ease;
`,xL=v.button`
    background: ${({theme:e})=>e.colors.primaryBlue};
    color: white;
    border: none;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.9rem;
    line-height: 1;
    padding: 0 0 1px 0;
    transition: background-color 0.2s;
    flex-shrink: 0;

    &:hover {
        background-color: #3a7ac2;
    }
`,SL=v.div`
    text-align: center;
    color: ${({theme:e})=>e.colors.label};
    padding: 2rem 0;
    
    p {
        margin: 0.25rem 0;
    }
`,bL=v.footer`
    padding: 1rem 1.5rem;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme:e})=>e.colors.bg};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    flex-wrap: wrap;
    gap: 1rem;
    flex-shrink: 0;
`,kL=v.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
`,Lm=v.button`
    background: ${({theme:e})=>e.colors.boxBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    color: ${({theme:e})=>e.colors.header};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({theme:e})=>e.colors.border};
    }
`,CL=v.span`
    font-size: 0.9rem;
    color: ${({theme:e})=>e.colors.placeText};
    font-weight: 500;
`,TL=v.button`
    background: transparent;
    border: none;
    color: ${({theme:e})=>e.colors.newTag};
    font-weight: 500;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0.5rem;
    margin: -0.5rem;

    &:hover {
        text-decoration: underline;
    }
`,EL=()=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),a.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),IL=({position:e,onAdd:t})=>{const n=o=>{o.stopPropagation(),o.preventDefault(),t()};return a.jsxs(AL,{style:{top:`${e.top}px`,left:`${e.left}px`},onClick:n,onMouseDown:o=>o.stopPropagation(),children:[a.jsx(EL,{}),a.jsx("span",{children:"添加"})]})},_L=ve`
    from {
        transform: translate(-50%, 10px);
        opacity: 0;
    }
    to {
        transform: translate(-50%, 0);
        opacity: 1;
    }
`,AL=v.button`
    position: absolute;
    z-index: 1100;
    transform: translateX(-50%);
    background-color: ${({theme:e})=>e.colors.header};
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.3rem 0.8rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    font-weight: 600;
    animation: ${_L} 0.2s ease-out;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #3c4a5c;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`,PL=()=>{const{student:e,studentId:t,studentList:n,bandToShow:o,setStudentId:r,setBandToShow:i,isLoading:s}=vl(),[c,u]=E.useState("in_class"),p=!!e.lockedBand,f=p?`该学生固定 ${o} 分`:s?"同步首选项…":"已保存在浏览器 (IndexedDB)",h=E.useMemo(()=>{const m=n.find(S=>S.id==="common")||null,g=n.filter(S=>S.id!=="common"&&S.status===c);return m?[m,...g]:g},[n,c]);return E.useEffect(()=>{!h.some(m=>m.id===t)&&h.length>0&&r(h[0].id)},[r,t,h]),a.jsxs(RL,{children:[a.jsxs(Dm,{children:[a.jsx(Bm,{htmlFor:"student-select",children:"学生"}),a.jsxs(ML,{role:"group","aria-label":"学生分组",children:[a.jsx(Fm,{type:"button",$active:c==="in_class",onClick:()=>u("in_class"),children:"正在上课"}),a.jsx(Fm,{type:"button",$active:c==="completed",onClick:()=>u("completed"),children:"已完课"})]}),a.jsx(Um,{id:"student-select",value:t,onChange:m=>r(m.target.value),children:h.map(m=>a.jsx("option",{value:m.id,children:m.name},m.id))})]}),a.jsx($L,{}),a.jsxs(Dm,{children:[a.jsx(Bm,{htmlFor:"band-select",children:"范文分段"}),a.jsx(Um,{id:"band-select",value:o,onChange:m=>i(m.target.value),disabled:p,children:Kr.map(m=>a.jsx("option",{value:m,children:m},m))}),a.jsx(NL,{children:f})]}),e.notes&&a.jsx(jL,{children:e.notes})]})},RL=v.section`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    background-color: ${({theme:e})=>e.colors.cardBg};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 16px;
    padding: 0.9rem 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow};
`,Dm=v.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`,Bm=v.label`
    font-weight: 700;
    color: ${({theme:e})=>e.colors.header};
`,Um=v.select`
    font-family: inherit;
    padding: 0.45rem 0.75rem;
    border-radius: 10px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    background-color: ${({theme:e})=>e.colors.boxBg};
    color: ${({theme:e})=>e.colors.header};
    min-width: 140px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }
`,ML=v.div`
    display: inline-flex;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: 9999px;
    overflow: hidden;
    background-color: ${({theme:e})=>e.colors.boxBg};
`,Fm=v.button`
    appearance: none;
    border: none;
    background: transparent;
    padding: 0.45rem 0.8rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.label};
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover {
        color: ${({theme:e})=>e.colors.header};
    }

    ${({$active:e,theme:t})=>e&&`
        background-color: ${t.colors.primaryBlue};
        color: white;
    `}
`,$L=v.div`
    width: 1px;
    height: 28px;
    background-color: ${({theme:e})=>e.colors.border};
`,NL=v.span`
    color: ${({theme:e})=>e.colors.label};
    font-size: 0.9rem;
`,jL=v.span`
    color: ${({theme:e})=>e.colors.primaryOrange};
    font-weight: 600;
`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const LL={colors:{bg:"#eef5f9",cardBg:"#ffffff",boxBg:"#e9eef2",cardYellowBg:"#fefbed",text:"#333",header:"#1a2533",border:"#d1d9e0",shadow:"rgba(0, 0, 0, 0.08)",dragOverBorder:"#3498db",label:"#8899a6",primaryBlue:"#4a90e2",primaryOrange:"#ff9f43",highlightBg:"#e9f2ff",highlightBorder:"#c7dfff",person:"#f1c40f",event:"#1d93e2",place:"#2ecc71",object:"#9b59b6",newTag:"#ff9f43",personBg:"rgba(241, 196, 15, 0.15)",eventBg:"rgba(29, 147, 226, 0.15)",placeBg:"rgba(46, 204, 113, 0.15)",objectBg:"rgba(155, 89, 182, 0.15)",personText:"#b49100",placeText:"#208e4c",what:"#3498db",where:"#2ecc71",when:"#f39c12",why:"#9b59b6",whyNot:"#e74c3c",how:"#e67e22",who:"#1abc9c",point:"#3498db",reason:"#e67e22",example:"#27ae60",analysisVocab:"#3498db",analysisPhrase:"#e67e22",analysisSentence:"#27ae60",analysisVocabBg:"rgba(52, 152, 219, 0.1)",analysisPhraseBg:"rgba(230, 126, 34, 0.1)",analysisSentenceBg:"rgba(39, 174, 96, 0.1)"},fonts:{body:"'Noto Sans', sans-serif"},breakpoints:{mobile:"640px",tablet:"1024px"}},DL=U0`
    body {
        background-color: ${({theme:e})=>e.colors.bg};
        color: ${({theme:e})=>e.colors.text};
        margin: 0;
        font-family: ${({theme:e})=>e.fonts.body};
        font-size: 15px;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .hidden {
        display: none;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideIn {
        from { transform: translateY(-30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideInMobile {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`,os=v.div`
    padding: 2rem;
    min-height: 100vh;

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
        padding: 1rem;
    }
`,BL=()=>{const{vocabulary:e,isVocabModalOpen:t,toastMessage:n,selectedWord:o,selectionPosition:r,setIsVocabModalOpen:i,handleAddWord:s,handleDeleteWord:c,handleClearVocabulary:u}=ou();return a.jsxs(a.Fragment,{children:[o&&r&&a.jsx(IL,{position:r,onAdd:()=>s(o)}),a.jsx(aL,{count:e.length,onClick:()=>i(!0)}),t&&a.jsx(uL,{words:e,onClose:()=>i(!1),onDelete:c,onClear:u}),a.jsx(rL,{message:n})]})},UL=()=>a.jsxs(a.Fragment,{children:[a.jsxs(os,{children:[a.jsx(PL,{}),a.jsx(ES,{})]}),a.jsx(BL,{})]}),FL=()=>a.jsxs(D0,{theme:LL,children:[a.jsx(DL,{}),a.jsx(AC,{children:a.jsx(yC,{children:a.jsxs(_S,{children:[a.jsx(ue,{path:"/",element:a.jsx(os,{children:a.jsx(Lb,{})})}),a.jsx(ue,{path:"/listening",element:a.jsx(oL,{})}),a.jsx(ue,{path:"/reading",element:a.jsx(os,{children:a.jsx(jm,{title:"阅读 Reading"})})}),a.jsx(ue,{path:"/writing",element:a.jsx(os,{children:a.jsx(jm,{title:"写作 Writing"})})}),a.jsx(ue,{path:"/speaking/vocab",element:a.jsx(Mj,{})}),a.jsx(ue,{path:"/vocab",element:a.jsx(TS,{to:"/speaking/vocab",replace:!0})}),a.jsxs(ue,{element:a.jsx(UL,{}),children:[a.jsx(ue,{path:"/speaking",element:a.jsx(zb,{})}),a.jsx(ue,{path:"/speaking/bank",element:a.jsx(Cf,{})}),a.jsx(ue,{path:"/speaking/tips",element:a.jsx(_f,{})}),a.jsx(ue,{path:"/speaking/scoring",element:a.jsx(dm,{})}),a.jsx(ue,{path:"/speaking/builder/part2",element:a.jsx(Nm,{})}),a.jsx(ue,{path:"/speaking/analysis/:seasonId/:cardId",element:a.jsx(Ni,{})}),a.jsx(ue,{path:"/speaking/analysis/:cardId",element:a.jsx(Ni,{})}),a.jsx(ue,{path:"/bank",element:a.jsx(Cf,{})}),a.jsx(ue,{path:"/tips",element:a.jsx(_f,{})}),a.jsx(ue,{path:"/scoring",element:a.jsx(dm,{})}),a.jsx(ue,{path:"/builder/part2",element:a.jsx(Nm,{})}),a.jsx(ue,{path:"/analysis/:seasonId/:cardId",element:a.jsx(Ni,{})}),a.jsx(ue,{path:"/analysis/:cardId",element:a.jsx(Ni,{})})]})]})})})]}),Vm=document.getElementById("root");Vm&&e0(Vm).render(a.jsx(Se.StrictMode,{children:a.jsx(MS,{children:a.jsx(FL,{})})}));
