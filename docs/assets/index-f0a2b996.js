(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="157",vc=0,Ca=1,gc=2,Tl=1,_c=2,Rn=3,Nn=0,Zt=1,pn=2,Wn=0,Oi=1,La=2,Pa=3,Ia=4,yc=5,Fi=100,xc=101,Mc=102,Na=103,Da=104,Sc=200,Ec=201,Tc=202,wc=203,wl=204,Al=205,Ac=206,bc=207,Rc=208,Cc=209,Lc=210,Pc=0,Ic=1,Nc=2,js=3,Dc=4,Uc=5,Fc=6,Bc=7,ca=0,Oc=1,zc=2,Xn=0,Vc=1,Hc=2,Gc=3,bl=4,kc=5,Rl=300,Hi=301,Gi=302,$r=303,Ks=304,ss=306,ki=1e3,jt=1001,Jr=1002,Ut=1003,Zs=1004,Kr=1005,Pt=1006,Cl=1007,Yn=1008,qn=1009,Wc=1010,Xc=1011,ha=1012,Ll=1013,kn=1014,sn=1015,Ln=1016,Pl=1017,Il=1018,ci=1020,qc=1021,nn=1023,Yc=1024,jc=1025,hi=1026,Wi=1027,Kc=1028,Nl=1029,Zc=1030,Dl=1031,Ul=1033,us=33776,ds=33777,fs=33778,ps=33779,Ua=35840,Fa=35841,Ba=35842,Oa=35843,$c=36196,za=37492,Va=37496,Ha=37808,Ga=37809,ka=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,ja=37815,Ka=37816,Za=37817,$a=37818,Ja=37819,Qa=37820,eo=37821,ms=36492,to=36494,no=36495,Jc=36283,io=36284,ro=36285,so=36286,vr=2300,Xi=2301,vs=2302,ao=2400,oo=2401,lo=2402,Qc=2500,eh=0,Fl=1,$s=2,Bl=3e3,ui=3001,th=3200,nh=3201,ua=0,ih=1,rn="",Et="srgb",Ft="srgb-linear",da="display-p3",as="display-p3-linear",Qr="linear",Mt="srgb",es="rec709",ts="p3",gs=7680,rh=519,sh=512,ah=513,oh=514,lh=515,ch=516,hh=517,uh=518,dh=519,Js=35044,co="300 es",Qs=1035,Pn=2e3,ns=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ho=1234567;const fr=Math.PI/180,qi=180/Math.PI;function cn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[a&255]+Gt[a>>8&255]+Gt[a>>16&255]+Gt[a>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Vt(a,e,t){return Math.max(e,Math.min(t,a))}function fa(a,e){return(a%e+e)%e}function fh(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function ph(a,e,t){return a!==e?(t-a)/(e-a):0}function pr(a,e,t){return(1-t)*a+t*e}function mh(a,e,t,n){return pr(a,e,1-Math.exp(-t*n))}function vh(a,e=1){return e-Math.abs(fa(a,e*2)-e)}function gh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function _h(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function yh(a,e){return a+Math.floor(Math.random()*(e-a+1))}function xh(a,e){return a+Math.random()*(e-a)}function Mh(a){return a*(.5-Math.random())}function Sh(a){a!==void 0&&(ho=a);let e=ho+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eh(a){return a*fr}function Th(a){return a*qi}function ea(a){return(a&a-1)===0&&a!==0}function Ol(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function is(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function wh(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),f=r((n-e)/2),v=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*d,o*c);break;case"YZY":a.set(l*d,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*d,o*u,o*c);break;case"XZX":a.set(o*u,l*v,l*f,o*c);break;case"YXY":a.set(l*f,o*u,l*v,o*c);break;case"ZYZ":a.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function gt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:fr,RAD2DEG:qi,generateUUID:cn,clamp:Vt,euclideanModulo:fa,mapLinear:fh,inverseLerp:ph,lerp:pr,damp:mh,pingpong:vh,smoothstep:gh,smootherstep:_h,randInt:yh,randFloat:xh,randFloatSpread:Mh,seededRandom:Sh,degToRad:Eh,radToDeg:Th,isPowerOfTwo:ea,ceilPowerOfTwo:Ol,floorPowerOfTwo:is,setQuaternionFromProperEuler:wh,normalize:gt,denormalize:mn};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,i,r,s,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],v=n[8],g=i[0],m=i[3],p=i[6],y=i[1],x=i[4],_=i[7],E=i[2],R=i[5],D=i[8];return r[0]=s*g+o*y+l*E,r[3]=s*m+o*x+l*R,r[6]=s*p+o*_+l*D,r[1]=c*g+u*y+h*E,r[4]=c*m+u*x+h*R,r[7]=c*p+u*_+h*D,r[2]=d*g+f*y+v*E,r[5]=d*m+f*x+v*R,r[8]=d*p+f*_+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*l-u*r,f=c*r-s*l,v=t*h+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*s)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_s.makeScale(e,t)),this}rotate(e){return this.premultiply(_s.makeRotation(-e)),this}translate(e,t){return this.premultiply(_s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _s=new at;function zl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function gr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function bh(){const a=gr("canvas");return a.style.display="block",a}const uo={};function mr(a){a in uo||(uo[a]=!0,console.warn(a))}const fo=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),po=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Ft]:{transfer:Qr,primaries:es,toReference:a=>a,fromReference:a=>a},[Et]:{transfer:Mt,primaries:es,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[as]:{transfer:Qr,primaries:ts,toReference:a=>a.applyMatrix3(po),fromReference:a=>a.applyMatrix3(fo)},[da]:{transfer:Mt,primaries:ts,toReference:a=>a.convertSRGBToLinear().applyMatrix3(po),fromReference:a=>a.applyMatrix3(fo).convertLinearToSRGB()}},Rh=new Set([Ft,as]),pt={enabled:!0,_workingColorSpace:Ft,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Rh.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Mr[e].toReference,i=Mr[t].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Mr[a].primaries},getTransfer:function(a){return a===rn?Qr:Mr[a].transfer}};function zi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ys(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let vi;class Vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=gr("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=zi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=cn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(xs(i[s].image)):r.push(xs(i[s]))}else r=xs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Vl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lh=0;class Ht extends Ji{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=jt,i=jt,r=Pt,s=Yn,o=nn,l=qn,c=Ht.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=cn(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ui?Et:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?ui:Bl}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ui?Et:rn}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Rl;Ht.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(f+1)/2,E=(p+1)/2,R=(u+d)/4,D=(h+g)/4,L=(v+m)/4;return x>_&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=D/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=R/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=D/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ui?Et:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gl extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ih extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],f=r[s+1],v=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==v){let m=1-o;const p=l*d+c*f+u*v+h*g,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),R=Math.atan2(E,p*y);m=Math.sin(m*R)/E,o=Math.sin(o*R)/E}const _=o*y;if(l=l*m+d*_,c=c*m+f*_,u=u*m+v*_,h=h*m+g*_,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],f=r[s+2],v=r[s+3];return e[t]=o*v+u*h+l*f-c*d,e[t+1]=l*v+u*d+c*h-o*f,e[t+2]=c*v+u*f+o*d-l*h,e[t+3]=u*v-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),v=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,d=-r*t-s*n-o*i;return this.x=c*l+d*-r+u*-o-h*-s,this.y=u*l+d*-s+h*-r-c*-o,this.z=h*l+d*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ms=new Q,mo=new Kn;class Dn{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),gi.copy(e.boundingBox),gi.applyMatrix4(e.matrixWorld),this.union(gi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,o=r.count;s<o;s++)Sn.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Sn)}else i.boundingBox===null&&i.computeBoundingBox(),gi.copy(i.boundingBox),gi.applyMatrix4(e.matrixWorld),this.union(gi)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Sr.subVectors(this.max,ir),_i.subVectors(e.a,ir),yi.subVectors(e.b,ir),xi.subVectors(e.c,ir),Un.subVectors(yi,_i),Fn.subVectors(xi,yi),Jn.subVectors(_i,xi);let t=[0,-Un.z,Un.y,0,-Fn.z,Fn.y,0,-Jn.z,Jn.y,Un.z,0,-Un.x,Fn.z,0,-Fn.x,Jn.z,0,-Jn.x,-Un.y,Un.x,0,-Fn.y,Fn.x,0,-Jn.y,Jn.x,0];return!Ss(t,_i,yi,xi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,_i,yi,xi,Sr))?!1:(Er.crossVectors(Un,Fn),t=[Er.x,Er.y,Er.z],Ss(t,_i,yi,xi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Sn=new Q,gi=new Dn,_i=new Q,yi=new Q,xi=new Q,Un=new Q,Fn=new Q,Jn=new Q,ir=new Q,Sr=new Q,Er=new Q,Qn=new Q;function Ss(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Qn.fromArray(a,r);const o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nh=new Dn,rr=new Q,Es=new Q;class gn{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Es)),this.expandByPoint(rr.copy(e.center).sub(Es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new Q,Ts=new Q,Tr=new Q,Bn=new Q,ws=new Q,wr=new Q,As=new Q;class _r{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ts.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Ts);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Tr),o=Bn.dot(this.direction),l=-Bn.dot(Tr),c=Bn.lengthSq(),u=Math.abs(1-s*s);let h,d,f,v;if(u>0)if(h=s*l-o,d=s*o-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const g=1/u;h*=g,d*=g,f=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ts).addScaledVector(Tr,d),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,r){ws.subVectors(t,e),wr.subVectors(n,e),As.crossVectors(ws,wr);let s=this.direction.dot(As),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(Bn,wr));if(l<0)return null;const c=o*this.direction.dot(ws.cross(Bn));if(c<0||l+c>s)return null;const u=-o*Bn.dot(As);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,s,o,l,c,u,h,d,f,v,g,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,u,h,d,f,v,g,m)}set(e,t,n,i,r,s,o,l,c,u,h,d,f,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),s=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,f=s*h,v=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=v+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,v=c*u,g=c*h;t[0]=d+g*o,t[4]=v*o-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,v=c*u,g=c*h;t[0]=d-g*o,t[4]=-s*h,t[8]=v+f*o,t[1]=f+v*o,t[5]=s*u,t[9]=g-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*h,v=o*u,g=o*h;t[0]=l*u,t[4]=v*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=v*h+f,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+v,t[10]=d-g*h}else if(e.order==="XZY"){const d=s*l,f=s*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=s*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dh,e,Uh)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),On.crossVectors(n,Jt),On.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),On.crossVectors(n,Jt)),On.normalize(),Ar.crossVectors(Jt,On),i[0]=On.x,i[4]=Ar.x,i[8]=Jt.x,i[1]=On.y,i[5]=Ar.y,i[9]=Jt.y,i[2]=On.z,i[6]=Ar.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],y=n[3],x=n[7],_=n[11],E=n[15],R=i[0],D=i[4],L=i[8],M=i[12],S=i[1],C=i[5],H=i[9],G=i[13],P=i[2],k=i[6],$=i[10],B=i[14],O=i[3],K=i[7],W=i[11],A=i[15];return r[0]=s*R+o*S+l*P+c*O,r[4]=s*D+o*C+l*k+c*K,r[8]=s*L+o*H+l*$+c*W,r[12]=s*M+o*G+l*B+c*A,r[1]=u*R+h*S+d*P+f*O,r[5]=u*D+h*C+d*k+f*K,r[9]=u*L+h*H+d*$+f*W,r[13]=u*M+h*G+d*B+f*A,r[2]=v*R+g*S+m*P+p*O,r[6]=v*D+g*C+m*k+p*K,r[10]=v*L+g*H+m*$+p*W,r[14]=v*M+g*G+m*B+p*A,r[3]=y*R+x*S+_*P+E*O,r[7]=y*D+x*C+_*k+E*K,r[11]=y*L+x*H+_*$+E*W,r[15]=y*M+x*G+_*B+E*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+t*l*f-t*c*d+r*s*d-i*s*f+i*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*s*h+n*s*f+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],p=e[15],y=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,x=v*d*c-u*m*c-v*l*f+s*m*f+u*l*p-s*d*p,_=u*g*c-v*h*c+v*o*f-s*g*f-u*o*p+s*h*p,E=v*h*l-u*g*l-v*o*d+s*g*d+u*o*m-s*h*m,R=t*y+n*x+i*_+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=y*D,e[1]=(g*d*r-h*m*r-g*i*f+n*m*f+h*i*p-n*d*p)*D,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*D,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*D,e[4]=x*D,e[5]=(u*m*r-v*d*r+v*i*f-t*m*f-u*i*p+t*d*p)*D,e[6]=(v*l*r-s*m*r-v*i*c+t*m*c+s*i*p-t*l*p)*D,e[7]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*f+t*l*f)*D,e[8]=_*D,e[9]=(v*h*r-u*g*r-v*n*f+t*g*f+u*n*p-t*h*p)*D,e[10]=(s*g*r-v*o*r+v*n*c-t*g*c-s*n*p+t*o*p)*D,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*f-t*o*f)*D,e[12]=E*D,e[13]=(u*g*i-v*h*i+v*n*d-t*g*d-u*n*m+t*h*m)*D,e[14]=(v*o*i-s*g*i-v*n*l+t*g*l+s*n*m-t*o*m)*D,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*d+t*o*d)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,d=r*c,f=r*u,v=r*h,g=s*u,m=s*h,p=o*h,y=l*c,x=l*u,_=l*h,E=n.x,R=n.y,D=n.z;return i[0]=(1-(g+p))*E,i[1]=(f+_)*E,i[2]=(v-x)*E,i[3]=0,i[4]=(f-_)*R,i[5]=(1-(d+p))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(v+x)*D,i[9]=(m-y)*D,i[10]=(1-(d+g))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Mi.set(i[0],i[1],i[2]).length();const s=Mi.set(i[4],i[5],i[6]).length(),o=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const c=1/r,u=1/s,h=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s,o=Pn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,v;if(o===Pn)f=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===ns)f=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Pn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(s-r),d=(t+e)*c,f=(n+i)*u;let v,g;if(o===Pn)v=(s+r)*h,g=-2*h;else if(o===ns)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mi=new Q,an=new ot,Dh=new Q(0,0,0),Uh=new Q(1,1,1),On=new Q,Ar=new Q,Jt=new Q,vo=new ot,go=new Kn;class os{constructor(e=0,t=0,n=0,i=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return go.setFromEuler(this),this.setFromQuaternion(go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const _o=new Q,Si=new Kn,Tn=new ot,br=new Q,sr=new Q,Bh=new Q,Oh=new Kn,yo=new Q(1,0,0),xo=new Q(0,1,0),Mo=new Q(0,0,1),zh={type:"added"},Vh={type:"removed"};class Tt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new Q,t=new os,n=new Kn,i=new Q(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new at}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(yo,e)}rotateY(e){return this.rotateOnAxis(xo,e)}rotateZ(e){return this.rotateOnAxis(Mo,e)}translateOnAxis(e,t){return _o.copy(e).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yo,e)}translateY(e){return this.translateOnAxis(xo,e)}translateZ(e){return this.translateOnAxis(Mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(sr,br,this.up):Tn.lookAt(br,sr,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(Tn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new Q(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new Q,wn=new Q,bs=new Q,An=new Q,Ei=new Q,Ti=new Q,So=new Q,Rs=new Q,Cs=new Q,Ls=new Q;let Rr=!1;class ln{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){on.subVectors(i,t),wn.subVectors(n,t),bs.subVectors(e,t);const s=on.dot(on),o=on.dot(wn),l=on.dot(bs),c=wn.dot(wn),u=wn.dot(bs),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,v=(s*u-o*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,i,r,s,o,l){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),this.getInterpolation(e,t,n,i,r,s,o,l)}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,An),l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(s,An.y),l.addScaledVector(o,An.z),l}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),wn.subVectors(e,t),on.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Ei.subVectors(i,n),Ti.subVectors(r,n),Rs.subVectors(e,n);const l=Ei.dot(Rs),c=Ti.dot(Rs);if(l<=0&&c<=0)return t.copy(n);Cs.subVectors(e,i);const u=Ei.dot(Cs),h=Ti.dot(Cs);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Ei,s);Ls.subVectors(e,r);const f=Ei.dot(Ls),v=Ti.dot(Ls);if(v>=0&&f<=v)return t.copy(r);const g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ti,o);const m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return So.subVectors(r,i),o=(h-u)/(h-u+(f-v)),t.copy(i).addScaledVector(So,o);const p=1/(m+g+d);return s=g*p,o=d*p,t.copy(n).addScaledVector(Ei,s).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hh=0;class hn extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Oi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Al,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ps(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=fa(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ps(s,r,e+1/3),this.g=Ps(s,r,e),this.b=Ps(s,r,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=kl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return pt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Vt(kt.r*255,0,255))*65536+Math.round(Vt(kt.g*255,0,255))*256+Math.round(Vt(kt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Et){pt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Cr);const n=pr(zn.h,Cr.h,t),i=pr(zn.s,Cr.s,t),r=pr(zn.l,Cr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new rt;rt.NAMES=kl;class ai extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=Gh();function Gh(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:s,offsetTable:o}}function kh(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=Vt(a,-65504,65504),Cn.floatView[0]=a;const e=Cn.uint32View[0],t=e>>23&511;return Cn.baseTable[t]+((e&8388607)>>Cn.shiftTable[t])}function Wh(a){const e=a>>10;return Cn.uint32View[0]=Cn.mantissaTable[Cn.offsetTable[e]+(a&1023)]+Cn.exponentTable[e],Cn.floatView[0]}const Lr={toHalfFloat:kh,fromHalfFloat:Wh},Ct=new Q,Pr=new ct;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Js,this.updateRange={offset:0,count:-1},this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Wl extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xl extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class In extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xh=0;const en=new ot,Is=new Tt,wi=new Q,Qt=new Dn,ar=new Dn,Dt=new Q;class _n extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zl(e)?Xl:Wl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new In(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Qt.min,ar.min),Qt.expandByPoint(Dt),Dt.addVectors(Qt.max,ar.max),Qt.expandByPoint(Dt)):(Qt.expandByPoint(ar.min),Qt.expandByPoint(ar.max))}Qt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),Dt.add(wi)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<o;S++)c[S]=new Q,u[S]=new Q;const h=new Q,d=new Q,f=new Q,v=new ct,g=new ct,m=new ct,p=new Q,y=new Q;function x(S,C,H){h.fromArray(i,S*3),d.fromArray(i,C*3),f.fromArray(i,H*3),v.fromArray(s,S*2),g.fromArray(s,C*2),m.fromArray(s,H*2),d.sub(h),f.sub(h),g.sub(v),m.sub(v);const G=1/(g.x*m.y-m.x*g.y);isFinite(G)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(G),y.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(G),c[S].add(p),c[C].add(p),c[H].add(p),u[S].add(y),u[C].add(y),u[H].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let S=0,C=_.length;S<C;++S){const H=_[S],G=H.start,P=H.count;for(let k=G,$=G+P;k<$;k+=3)x(n[k+0],n[k+1],n[k+2])}const E=new Q,R=new Q,D=new Q,L=new Q;function M(S){D.fromArray(r,S*3),L.copy(D);const C=c[S];E.copy(C),E.sub(D.multiplyScalar(D.dot(C))).normalize(),R.crossVectors(L,C);const G=R.dot(u[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=G}for(let S=0,C=_.length;S<C;++S){const H=_[S],G=H.start,P=H.count;for(let k=G,$=G+P;k<$;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new Q,r=new Q,s=new Q,o=new Q,l=new Q,c=new Q,u=new Q,h=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[f++]}return new Yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eo=new ot,ei=new _r,Ir=new gn,To=new Q,Ai=new Q,bi=new Q,Ri=new Q,Ns=new Q,Nr=new Q,Dr=new ct,Ur=new ct,Fr=new ct,wo=new Q,Ao=new Q,bo=new Q,Br=new Q,Or=new Q;class Kt extends Tt{constructor(e=new _n,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ns.fromBufferAttribute(h,e),s?Nr.addScaledVector(Ns,u):Nr.addScaledVector(Ns.sub(t),u))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),ei.copy(e.ray).recast(e.near),!(Ir.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ir,To)===null||ei.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(Eo.copy(r).invert(),ei.copy(e.ray).applyMatrix4(Eo),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=s[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=x;_<E;_+=3){const R=o.getX(_),D=o.getX(_+1),L=o.getX(_+2);i=zr(this,p,e,n,c,u,h,R,D,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);i=zr(this,s,e,n,c,u,h,y,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=s[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=x;_<E;_+=3){const R=_,D=_+1,L=_+2;i=zr(this,p,e,n,c,u,h,R,D,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const y=m,x=m+1,_=m+2;i=zr(this,s,e,n,c,u,h,y,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qh(a,e,t,n,i,r,s,o){let l;if(e.side===Zt?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===Nn,o),l===null)return null;Or.copy(o),Or.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:a}}function zr(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,Ai),a.getVertexPosition(l,bi),a.getVertexPosition(c,Ri);const u=qh(a,e,t,n,Ai,bi,Ri,Br);if(u){i&&(Dr.fromBufferAttribute(i,o),Ur.fromBufferAttribute(i,l),Fr.fromBufferAttribute(i,c),u.uv=ln.getInterpolation(Br,Ai,bi,Ri,Dr,Ur,Fr,new ct)),r&&(Dr.fromBufferAttribute(r,o),Ur.fromBufferAttribute(r,l),Fr.fromBufferAttribute(r,c),u.uv1=ln.getInterpolation(Br,Ai,bi,Ri,Dr,Ur,Fr,new ct),u.uv2=u.uv1),s&&(wo.fromBufferAttribute(s,o),Ao.fromBufferAttribute(s,l),bo.fromBufferAttribute(s,c),u.normal=ln.getInterpolation(Br,Ai,bi,Ri,wo,Ao,bo,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Q,materialIndex:0};ln.getNormal(Ai,bi,Ri,h.normal),u.face=h}return u}class Qi extends _n{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,s,r,0),v("z","y","x",1,-1,n,t,-e,s,r,1),v("x","z","y",1,1,e,n,t,i,s,2),v("x","z","y",1,-1,e,n,-t,i,s,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(h,2));function v(g,m,p,y,x,_,E,R,D,L,M){const S=_/D,C=E/L,H=_/2,G=E/2,P=R/2,k=D+1,$=L+1;let B=0,O=0;const K=new Q;for(let W=0;W<$;W++){const A=W*C-G;for(let F=0;F<k;F++){const U=F*S-H;K[g]=U*y,K[m]=A*x,K[p]=P,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=R>0?1:-1,u.push(K.x,K.y,K.z),h.push(F/D),h.push(1-W/L),B+=1}}for(let W=0;W<L;W++)for(let A=0;A<D;A++){const F=d+A+k*W,U=d+A+k*(W+1),I=d+(A+1)+k*(W+1),b=d+(A+1)+k*W;l.push(F,U,b),l.push(U,I,b),O+=6}o.addGroup(f,O,M),f+=O,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(a){const e={};for(let t=0;t<a.length;t++){const n=Yi(a[t]);for(const i in n)e[i]=n[i]}return e}function Yh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ql(a){return a.getRenderTarget()===null?a.outputColorSpace:pt.workingColorSpace}const jh={clone:Yi,merge:Xt};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yl extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends Yl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Li=1;class $h extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(Ci,Li,e,t);i.layers=this.layers,this.add(i);const r=new qt(Ci,Li,e,t);r.layers=this.layers,this.add(r);const s=new qt(Ci,Li,e,t);s.layers=this.layers,this.add(s);const o=new qt(Ci,Li,e,t);o.layers=this.layers,this.add(o);const l=new qt(Ci,Li,e,t);l.layers=this.layers,this.add(l);const c=new qt(Ci,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jl extends Ht{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jh extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ui?Et:rn),this.texture=new jl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qi(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Wn});r.uniforms.tEquirect.value=t;const s=new Kt(i,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Pt),new $h(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Ds=new Q,Qh=new Q,eu=new at;class ii{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ds.subVectors(n,t).cross(Qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ds),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eu.getNormalMatrix(e),i=this.coplanarPoint(Ds).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new gn,Vr=new Q;class ma{constructor(e=new ii,t=new ii,n=new ii,i=new ii,r=new ii,s=new ii){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],v=i[9],g=i[10],m=i[11],p=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+s,d+u,m+v,_+y).normalize(),n[3].setComponents(l-s,d-u,m-v,_-y).normalize(),n[4].setComponents(l-o,d-h,m-g,_-x).normalize(),t===Pn)n[5].setComponents(l+o,d+h,m+g,_+x).normalize();else if(t===ns)n[5].setComponents(o,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function tu(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=a.createBuffer();a.bindBuffer(u,f),a.bufferData(u,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=a.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=a.SHORT;else if(h instanceof Uint32Array)v=a.UNSIGNED_INT;else if(h instanceof Int32Array)v=a.INT;else if(h instanceof Int8Array)v=a.BYTE;else if(h instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,f=u.updateRange;a.bindBuffer(h,c),f.count===-1?a.bufferSubData(h,0,d):(t?a.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class va extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*d-s;for(let x=0;x<c;x++){const _=x*h-r;v.push(_,-y,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,_=y+c*(p+1),E=y+1+c*(p+1),R=y+1+c*p;f.push(x,_,R),f.push(_,E,R)}this.setIndex(f),this.setAttribute("position",new In(v,3)),this.setAttribute("normal",new In(g,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.widthSegments,e.heightSegments)}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,md=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,of=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,If=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:ru,alphamap_pars_fragment:su,alphatest_fragment:au,alphatest_pars_fragment:ou,aomap_fragment:lu,aomap_pars_fragment:cu,begin_vertex:hu,beginnormal_vertex:uu,bsdfs:du,iridescence_fragment:fu,bumpmap_pars_fragment:pu,clipping_planes_fragment:mu,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:yu,color_pars_fragment:xu,color_pars_vertex:Mu,color_vertex:Su,common:Eu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:wu,displacementmap_pars_vertex:Au,displacementmap_vertex:bu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Cu,colorspace_fragment:Lu,colorspace_pars_fragment:Pu,envmap_fragment:Iu,envmap_common_pars_fragment:Nu,envmap_pars_fragment:Du,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:Yu,envmap_vertex:Fu,fog_vertex:Bu,fog_pars_vertex:Ou,fog_fragment:zu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Hu,lightmap_fragment:Gu,lightmap_pars_fragment:ku,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:ju,lights_toon_pars_fragment:Ku,lights_phong_fragment:Zu,lights_phong_pars_fragment:$u,lights_physical_fragment:Ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:ed,lights_fragment_maps:td,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphcolor_vertex:fd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:vd,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:yd,normal_pars_vertex:xd,normal_vertex:Md,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Ad,opaque_fragment:bd,packing:Rd,premultiplied_alpha_fragment:Cd,project_vertex:Ld,dithering_fragment:Pd,dithering_pars_fragment:Id,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Fd,shadowmap_vertex:Bd,shadowmask_pars_fragment:Od,skinbase_vertex:zd,skinning_pars_vertex:Vd,skinning_vertex:Hd,skinnormal_vertex:Gd,specularmap_fragment:kd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:qd,transmission_fragment:Yd,transmission_pars_fragment:jd,uv_pars_fragment:Kd,uv_pars_vertex:Zd,uv_vertex:$d,worldpos_vertex:Jd,background_vert:Qd,background_frag:ef,backgroundCube_vert:tf,backgroundCube_frag:nf,cube_vert:rf,cube_frag:sf,depth_vert:af,depth_frag:of,distanceRGBA_vert:lf,distanceRGBA_frag:cf,equirect_vert:hf,equirect_frag:uf,linedashed_vert:df,linedashed_frag:ff,meshbasic_vert:pf,meshbasic_frag:mf,meshlambert_vert:vf,meshlambert_frag:gf,meshmatcap_vert:_f,meshmatcap_frag:yf,meshnormal_vert:xf,meshnormal_frag:Mf,meshphong_vert:Sf,meshphong_frag:Ef,meshphysical_vert:Tf,meshphysical_frag:wf,meshtoon_vert:Af,meshtoon_frag:bf,points_vert:Rf,points_frag:Cf,shadow_vert:Lf,shadow_frag:Pf,sprite_vert:If,sprite_frag:Nf},Fe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},fn={basic:{uniforms:Xt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Xt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Xt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Xt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Xt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Xt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Xt([Fe.points,Fe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Xt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Xt([Fe.common,Fe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Xt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Xt([Fe.sprite,Fe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Xt([Fe.common,Fe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Xt([Fe.lights,Fe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};fn.physical={uniforms:Xt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Hr={r:0,b:0,g:0};function Df(a,e,t,n,i,r,s){const o=new rt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function v(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);const _=a.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ss)?(u===void 0&&(u=new Kt(new Qi(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Yi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=pt.getTransfer(x.colorSpace)!==Mt,(h!==x||d!==x.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Kt(new va(2,2),new fi({name:"BackgroundMaterial",uniforms:Yi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=pt.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Hr,ql(a)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function Uf(a,e,t,n){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(P,k,$,B,O){let K=!1;if(s){const W=g(B,$,k);c!==W&&(c=W,f(c.object)),K=p(P,B,$,O),K&&y(P,B,$,O)}else{const W=k.wireframe===!0;(c.geometry!==B.id||c.program!==$.id||c.wireframe!==W)&&(c.geometry=B.id,c.program=$.id,c.wireframe=W,K=!0)}O!==null&&t.update(O,a.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,L(P,k,$,B),O!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function d(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?a.bindVertexArray(P):r.bindVertexArrayOES(P)}function v(P){return n.isWebGL2?a.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,k,$){const B=$.wireframe===!0;let O=o[P.id];O===void 0&&(O={},o[P.id]=O);let K=O[k.id];K===void 0&&(K={},O[k.id]=K);let W=K[B];return W===void 0&&(W=m(d()),K[B]=W),W}function m(P){const k=[],$=[],B=[];for(let O=0;O<i;O++)k[O]=0,$[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:B,object:P,attributes:{},index:null}}function p(P,k,$,B){const O=c.attributes,K=k.attributes;let W=0;const A=$.getAttributes();for(const F in A)if(A[F].location>=0){const I=O[F];let b=K[F];if(b===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(b=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(b=P.instanceColor)),I===void 0||I.attribute!==b||b&&I.data!==b.data)return!0;W++}return c.attributesNum!==W||c.index!==B}function y(P,k,$,B){const O={},K=k.attributes;let W=0;const A=$.getAttributes();for(const F in A)if(A[F].location>=0){let I=K[F];I===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(I=P.instanceColor));const b={};b.attribute=I,I&&I.data&&(b.data=I.data),O[F]=b,W++}c.attributes=O,c.attributesNum=W,c.index=B}function x(){const P=c.newAttributes;for(let k=0,$=P.length;k<$;k++)P[k]=0}function _(P){E(P,0)}function E(P,k){const $=c.newAttributes,B=c.enabledAttributes,O=c.attributeDivisors;$[P]=1,B[P]===0&&(a.enableVertexAttribArray(P),B[P]=1),O[P]!==k&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),O[P]=k)}function R(){const P=c.newAttributes,k=c.enabledAttributes;for(let $=0,B=k.length;$<B;$++)k[$]!==P[$]&&(a.disableVertexAttribArray($),k[$]=0)}function D(P,k,$,B,O,K,W){W===!0?a.vertexAttribIPointer(P,k,$,O,K):a.vertexAttribPointer(P,k,$,B,O,K)}function L(P,k,$,B){if(n.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const O=B.attributes,K=$.getAttributes(),W=k.defaultAttributeValues;for(const A in K){const F=K[A];if(F.location>=0){let U=O[A];if(U===void 0&&(A==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),A==="instanceColor"&&P.instanceColor&&(U=P.instanceColor)),U!==void 0){const I=U.normalized,b=U.itemSize,j=t.get(U);if(j===void 0)continue;const se=j.buffer,te=j.type,Z=j.bytesPerElement,he=n.isWebGL2===!0&&(te===a.INT||te===a.UNSIGNED_INT||U.gpuType===Ll);if(U.isInterleavedBufferAttribute){const le=U.data,X=le.stride,Ae=U.offset;if(le.isInstancedInterleavedBuffer){for(let de=0;de<F.locationSize;de++)E(F.location+de,le.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<F.locationSize;de++)_(F.location+de);a.bindBuffer(a.ARRAY_BUFFER,se);for(let de=0;de<F.locationSize;de++)D(F.location+de,b/F.locationSize,te,I,X*Z,(Ae+b/F.locationSize*de)*Z,he)}else{if(U.isInstancedBufferAttribute){for(let le=0;le<F.locationSize;le++)E(F.location+le,U.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let le=0;le<F.locationSize;le++)_(F.location+le);a.bindBuffer(a.ARRAY_BUFFER,se);for(let le=0;le<F.locationSize;le++)D(F.location+le,b/F.locationSize,te,I,b*Z,b/F.locationSize*le*Z,he)}}else if(W!==void 0){const I=W[A];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(F.location,I);break;case 3:a.vertexAttrib3fv(F.location,I);break;case 4:a.vertexAttrib4fv(F.location,I);break;default:a.vertexAttrib1fv(F.location,I)}}}}R()}function M(){H();for(const P in o){const k=o[P];for(const $ in k){const B=k[$];for(const O in B)v(B[O].object),delete B[O];delete k[$]}delete o[P]}}function S(P){if(o[P.id]===void 0)return;const k=o[P.id];for(const $ in k){const B=k[$];for(const O in B)v(B[O].object),delete B[O];delete k[$]}delete o[P.id]}function C(P){for(const k in o){const $=o[k];if($[P.id]===void 0)continue;const B=$[P.id];for(const O in B)v(B[O].object),delete B[O];delete $[P.id]}}function H(){G(),u=!0,c!==l&&(c=l,f(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:G,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:_,disableUnusedAttributes:R}}function Ff(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=a,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function Bf(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,_=s||e.has("OES_texture_float"),E=x&&_,R=s?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:E,maxSamples:R}}function Of(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new ii,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=a.get(h);if(!i||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,x=y*4;let _=p.clippingState||null;l.value=_,_=u(v,d,x,f);for(let E=0;E!==x;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==g;++x,_+=4)s.copy(h[x]).applyMatrix4(y,o),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function zf(a){let e=new WeakMap;function t(s,o){return o===$r?s.mapping=Hi:o===Ks&&(s.mapping=Gi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===$r||o===Ks)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Jh(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ga extends Yl{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,Ro=[.125,.215,.35,.446,.526,.582],si=20,Us=new ga,Co=new rt;let Fs=null;const ri=(1+Math.sqrt(5))/2,Pi=1/ri,Lo=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,ri,Pi),new Q(0,ri,-Pi),new Q(Pi,0,ri),new Q(-Pi,0,ri),new Q(ri,Pi,0),new Q(-ri,Pi,0)];class Po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fs),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ln,format:nn,colorSpace:Ft,depthBuffer:!1},i=Io(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Io(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vf(r)),this._blurMaterial=Hf(r,e,t)}return i}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,n,i){const o=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Co),u.toneMapping=Xn,u.autoClear=!1;const f=new ai({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),v=new Kt(new Qi,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Co),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Gr(i,y*x,p>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hi||e.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Lo[(i-1)%Lo.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*si-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const p=[];let y=0;for(let D=0;D<si;++D){const L=D/g,M=Math.exp(-L*L/2);p.push(M),D===0?y+=M:D<m&&(y+=2*M)}for(let D=0;D<p.length;D++)p[D]=p[D]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const _=this._sizeLods[i],E=3*_*(i>x-Bi?i-x+Bi:0),R=4*(this._cubeSize-_);Gr(t,E,R,3*_,2*_),l.setRenderTarget(t),l.render(h,Us)}}function Vf(a){const e=[],t=[],n=[];let i=a;const r=a-Bi+1+Ro.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-Bi?l=Ro[s-a+Bi-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,g=3,m=2,p=1,y=new Float32Array(g*v*f),x=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let R=0;R<f;R++){const D=R%3*2/3-1,L=R>2?0:-1,M=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];y.set(M,g*v*R),x.set(d,m*v*R);const S=[R,R,R,R,R,R];_.set(S,p*v*R)}const E=new _n;E.setAttribute("position",new Yt(y,g)),E.setAttribute("uv",new Yt(x,m)),E.setAttribute("faceIndex",new Yt(_,p)),e.push(E),i>Bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Io(a,e,t){const n=new di(a,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Hf(a,e,t){const n=new Float32Array(si),i=new Q(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function No(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Do(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function _a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gf(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$r||l===Ks,u=l===Hi||l===Gi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Po(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Po(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function kf(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wf(a,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],a.ARRAY_BUFFER);const f=h.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],a.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,v=h.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let x=0,_=y.length;x<_;x+=3){const E=y[x+0],R=y[x+1],D=y[x+2];d.push(E,R,R,D,D,E)}}else if(v!==void 0){const y=v.array;g=v.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const E=x+0,R=x+1,D=x+2;d.push(E,R,R,D,D,E)}}else return;const m=new(zl(d)?Xl:Wl)(d,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Xf(a,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){a.drawElements(r,f,o,d*l),t.update(f,r,1)}function h(d,f,v){if(v===0)return;let g,m;if(i)g=a,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,f,o,d*l,v),t.update(f,r,v)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function qf(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yf(a,e){return a[0]-e[0]}function jf(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Kf(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let k=function(){G.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var f=k;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),_===!0&&(M=2),E===!0&&(M=3);let S=u.attributes.position.count*M,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const H=new Float32Array(S*C*4*g),G=new Gl(H,S,C,g);G.type=sn,G.needsUpdate=!0;const P=M*4;for(let $=0;$<g;$++){const B=R[$],O=D[$],K=L[$],W=S*C*4*$;for(let A=0;A<B.count;A++){const F=A*P;x===!0&&(s.fromBufferAttribute(B,A),H[W+F+0]=s.x,H[W+F+1]=s.y,H[W+F+2]=s.z,H[W+F+3]=0),_===!0&&(s.fromBufferAttribute(O,A),H[W+F+4]=s.x,H[W+F+5]=s.y,H[W+F+6]=s.z,H[W+F+7]=0),E===!0&&(s.fromBufferAttribute(K,A),H[W+F+8]=s.x,H[W+F+9]=s.y,H[W+F+10]=s.z,H[W+F+11]=K.itemSize===4?s.w:1)}}m={count:g,texture:G,size:new ct(S,C)},r.set(u,m),u.addEventListener("dispose",k)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(a,"morphTargetBaseInfluence",y),h.getUniforms().setValue(a,"morphTargetInfluences",d),h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let _=0;_<v;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<v;_++){const E=g[_];E[0]=_,E[1]=d[_]}g.sort(jf);for(let _=0;_<8;_++)_<v&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Yf);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const E=o[_],R=E[0],D=E[1];R!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+_)!==m[R]&&u.setAttribute("morphTarget"+_,m[R]),p&&u.getAttribute("morphNormal"+_)!==p[R]&&u.setAttribute("morphNormal"+_,p[R]),i[_]=D,y+=D):(m&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",x),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Zf(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Zl=new Ht,$l=new Gl,Jl=new Ih,Ql=new jl,Uo=[],Fo=[],Bo=new Float32Array(16),Oo=new Float32Array(9),zo=new Float32Array(4);function er(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Uo[i];if(r===void 0&&(r=new Float32Array(i),Uo[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function It(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Nt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ls(a,e){let t=Fo[e];t===void 0&&(t=new Int32Array(e),Fo[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function $f(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Jf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2fv(this.addr,e),Nt(t,e)}}function Qf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;a.uniform3fv(this.addr,e),Nt(t,e)}}function ep(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4fv(this.addr,e),Nt(t,e)}}function tp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;zo.set(n),a.uniformMatrix2fv(this.addr,!1,zo),Nt(t,n)}}function np(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Oo.set(n),a.uniformMatrix3fv(this.addr,!1,Oo),Nt(t,n)}}function ip(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Bo.set(n),a.uniformMatrix4fv(this.addr,!1,Bo),Nt(t,n)}}function rp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2iv(this.addr,e),Nt(t,e)}}function ap(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3iv(this.addr,e),Nt(t,e)}}function op(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4iv(this.addr,e),Nt(t,e)}}function lp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function cp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2uiv(this.addr,e),Nt(t,e)}}function hp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3uiv(this.addr,e),Nt(t,e)}}function up(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4uiv(this.addr,e),Nt(t,e)}}function dp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Zl,i)}function fp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jl,i)}function pp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ql,i)}function mp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$l,i)}function vp(a){switch(a){case 5126:return $f;case 35664:return Jf;case 35665:return Qf;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function gp(a,e){a.uniform1fv(this.addr,e)}function _p(a,e){const t=er(e,this.size,2);a.uniform2fv(this.addr,t)}function yp(a,e){const t=er(e,this.size,3);a.uniform3fv(this.addr,t)}function xp(a,e){const t=er(e,this.size,4);a.uniform4fv(this.addr,t)}function Mp(a,e){const t=er(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Sp(a,e){const t=er(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Ep(a,e){const t=er(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Tp(a,e){a.uniform1iv(this.addr,e)}function wp(a,e){a.uniform2iv(this.addr,e)}function Ap(a,e){a.uniform3iv(this.addr,e)}function bp(a,e){a.uniform4iv(this.addr,e)}function Rp(a,e){a.uniform1uiv(this.addr,e)}function Cp(a,e){a.uniform2uiv(this.addr,e)}function Lp(a,e){a.uniform3uiv(this.addr,e)}function Pp(a,e){a.uniform4uiv(this.addr,e)}function Ip(a,e,t){const n=this.cache,i=e.length,r=ls(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Zl,r[s])}function Np(a,e,t){const n=this.cache,i=e.length,r=ls(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Jl,r[s])}function Dp(a,e,t){const n=this.cache,i=e.length,r=ls(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Ql,r[s])}function Up(a,e,t){const n=this.cache,i=e.length,r=ls(t,i);It(n,r)||(a.uniform1iv(this.addr,r),Nt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||$l,r[s])}function Fp(a){switch(a){case 5126:return gp;case 35664:return _p;case 35665:return yp;case 35666:return xp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return bp;case 5125:return Rp;case 36294:return Cp;case 36295:return Lp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Up}}class Bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vp(t.type)}}class Op{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fp(t.type)}}class zp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function Vo(a,e){a.seq.push(e),a.map[e.id]=e}function Vp(a,e,t){const n=a.name,i=n.length;for(Bs.lastIndex=0;;){const r=Bs.exec(n),s=Bs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Vo(t,c===void 0?new Bp(o,a,e):new Op(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new zp(o),Vo(t,h)),t=h}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Vp(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Ho(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Hp=0;function Gp(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function kp(a){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(a);let n;switch(e===t?n="":e===ts&&t===es?n="LinearDisplayP3ToLinearSRGB":e===es&&t===ts&&(n="LinearSRGBToLinearDisplayP3"),a){case Ft:case as:return[n,"LinearTransferOETF"];case Et:case da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function Go(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Gp(a.getShaderSource(e),s)}else return i}function Wp(a,e){const t=kp(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xp(a,e){let t;switch(e){case Vc:t="Linear";break;case Hc:t="Reinhard";break;case Gc:t="OptimizedCineon";break;case bl:t="ACESFilmic";break;case kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function Yp(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jp(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function dr(a){return a!==""}function ko(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wo(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(a){return a.replace(Kp,$p)}const Zp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $p(a,e){let t=st[e];if(t===void 0){const n=Zp.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ta(t)}const Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xo(a){return a.replace(Jp,Qp)}function Qp(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qo(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function em(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function tm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function im(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ca:e="ENVMAP_BLENDING_MULTIPLY";break;case Oc:e="ENVMAP_BLENDING_MIX";break;case zc:e="ENVMAP_BLENDING_ADD";break}return e}function rm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sm(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=em(t),c=tm(t),u=nm(t),h=im(t),d=rm(t),f=t.isWebGL2?"":qp(t),v=Yp(r),g=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[f,qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?st.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Wp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),s=ta(s),s=ko(s,t),s=Wo(s,t),o=ta(o),o=ko(o,t),o=Wo(o,t),s=Xo(s),o=Xo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+s,_=y+p+o,E=Ho(i,i.VERTEX_SHADER,x),R=Ho(i,i.FRAGMENT_SHADER,_);if(i.attachShader(g,E),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const M=i.getProgramInfoLog(g).trim(),S=i.getShaderInfoLog(E).trim(),C=i.getShaderInfoLog(R).trim();let H=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,E,R);else{const P=Go(i,E,"vertex"),k=Go(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+P+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||C==="")&&(G=!1);G&&(this.diagnostics={runnable:H,programLog:M,vertexShader:{log:S,prefix:m},fragmentShader:{log:C,prefix:p}})}i.deleteShader(E),i.deleteShader(R);let D;this.getUniforms=function(){return D===void 0&&(D=new Zr(i,g)),D};let L;return this.getAttributes=function(){return L===void 0&&(L=jp(i,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=R,this}let am=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lm(e),t.set(e,n)),n}}class lm{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}}function cm(a,e,t,n,i,r,s){const o=new pa,l=new om,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,S,C,H,G){const P=H.fog,k=G.geometry,$=M.isMeshStandardMaterial?H.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),O=B&&B.mapping===ss?B.image.height:null,K=v[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const W=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,A=W!==void 0?W.length:0;let F=0;k.morphAttributes.position!==void 0&&(F=1),k.morphAttributes.normal!==void 0&&(F=2),k.morphAttributes.color!==void 0&&(F=3);let U,I,b,j;if(K){const it=fn[K];U=it.vertexShader,I=it.fragmentShader}else U=M.vertexShader,I=M.fragmentShader,l.update(M),b=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);const se=a.getRenderTarget(),te=G.isInstancedMesh===!0,Z=!!M.map,he=!!M.matcap,le=!!B,X=!!M.aoMap,Ae=!!M.lightMap,de=!!M.bumpMap,re=!!M.normalMap,oe=!!M.displacementMap,qe=!!M.emissiveMap,Re=!!M.metalnessMap,Ge=!!M.roughnessMap,ye=M.anisotropy>0,Ze=M.clearcoat>0,et=M.iridescence>0,N=M.sheen>0,w=M.transmission>0,J=ye&&!!M.anisotropyMap,fe=Ze&&!!M.clearcoatMap,ue=Ze&&!!M.clearcoatNormalMap,me=Ze&&!!M.clearcoatRoughnessMap,ze=et&&!!M.iridescenceMap,Te=et&&!!M.iridescenceThicknessMap,Be=N&&!!M.sheenColorMap,je=N&&!!M.sheenRoughnessMap,nt=!!M.specularMap,_e=!!M.specularColorMap,lt=!!M.specularIntensityMap,Ke=w&&!!M.transmissionMap,Ye=w&&!!M.thicknessMap,Xe=!!M.gradientMap,V=!!M.alphaMap,Ee=M.alphaTest>0,xe=!!M.alphaHash,Pe=!!M.extensions,De=!!k.attributes.uv1,ve=!!k.attributes.uv2,We=!!k.attributes.uv3;let Qe=Xn;return M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Qe=a.toneMapping),{isWebGL2:u,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:U,fragmentShader:I,defines:M.defines,customVertexShaderID:b,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:te,instancingColor:te&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:se===null?a.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ft,map:Z,matcap:he,envMap:le,envMapMode:le&&B.mapping,envMapCubeUVHeight:O,aoMap:X,lightMap:Ae,bumpMap:de,normalMap:re,displacementMap:d&&oe,emissiveMap:qe,normalMapObjectSpace:re&&M.normalMapType===ih,normalMapTangentSpace:re&&M.normalMapType===ua,metalnessMap:Re,roughnessMap:Ge,anisotropy:ye,anisotropyMap:J,clearcoat:Ze,clearcoatMap:fe,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,iridescence:et,iridescenceMap:ze,iridescenceThicknessMap:Te,sheen:N,sheenColorMap:Be,sheenRoughnessMap:je,specularMap:nt,specularColorMap:_e,specularIntensityMap:lt,transmission:w,transmissionMap:Ke,thicknessMap:Ye,gradientMap:Xe,opaque:M.transparent===!1&&M.blending===Oi,alphaMap:V,alphaTest:Ee,alphaHash:xe,combine:M.combine,mapUv:Z&&g(M.map.channel),aoMapUv:X&&g(M.aoMap.channel),lightMapUv:Ae&&g(M.lightMap.channel),bumpMapUv:de&&g(M.bumpMap.channel),normalMapUv:re&&g(M.normalMap.channel),displacementMapUv:oe&&g(M.displacementMap.channel),emissiveMapUv:qe&&g(M.emissiveMap.channel),metalnessMapUv:Re&&g(M.metalnessMap.channel),roughnessMapUv:Ge&&g(M.roughnessMap.channel),anisotropyMapUv:J&&g(M.anisotropyMap.channel),clearcoatMapUv:fe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(M.sheenRoughnessMap.channel),specularMapUv:nt&&g(M.specularMap.channel),specularColorMapUv:_e&&g(M.specularColorMap.channel),specularIntensityMapUv:lt&&g(M.specularIntensityMap.channel),transmissionMapUv:Ke&&g(M.transmissionMap.channel),thicknessMapUv:Ye&&g(M.thicknessMap.channel),alphaMapUv:V&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:ve,vertexUv3s:We,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(Z||V),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:F,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Qe,useLegacyLights:a._useLegacyLights,decodeVideoTexture:Z&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Pe&&M.extensions.derivatives===!0,extensionFragDepth:Pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(a.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){const S=v[M.type];let C;if(S){const H=fn[S];C=jh.clone(H.uniforms)}else C=M.uniforms;return C}function E(M,S){let C;for(let H=0,G=c.length;H<G;H++){const P=c[H];if(P.cacheKey===S){C=P,++C.usedTimes;break}}return C===void 0&&(C=new sm(a,S,M,r),c.push(C)),C}function R(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function D(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:R,releaseShaderCache:D,programs:c,dispose:L}}function hm(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function um(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Yo(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function jo(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,f,v,g,m){let p=a[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},a[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,v,g,m){const p=s(h,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,v,g,m){const p=s(h,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||um),n.length>1&&n.sort(d||Yo),i.length>1&&i.sort(d||Yo)}function u(){for(let h=e,d=a.length;h<d;h++){const f=a[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function dm(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new jo,a.set(n,[s])):i>=r.length?(s=new jo,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function fm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new rt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=t,t}}}function pm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let mm=0;function vm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function gm(a,e){const t=new fm,n=pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Q);const r=new Q,s=new ot,o=new ot;function l(u,h){let d=0,f=0,v=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,m=0,p=0,y=0,x=0,_=0,E=0,R=0,D=0,L=0,M=0;u.sort(vm);const S=h===!0?Math.PI:1;for(let H=0,G=u.length;H<G;H++){const P=u[H],k=P.color,$=P.intensity,B=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*$*S,f+=k.g*$*S,v+=k.b*$*S;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],$);M++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const W=P.shadow,A=n.get(P);A.shadowBias=W.bias,A.shadowNormalBias=W.normalBias,A.shadowRadius=W.radius,A.shadowMapSize=W.mapSize,i.directionalShadow[g]=A,i.directionalShadowMap[g]=O,i.directionalShadowMatrix[g]=P.shadow.matrix,_++}i.directional[g]=K,g++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(k).multiplyScalar($*S),K.distance=B,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[p]=K;const W=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,W.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[p]=W.matrix,P.castShadow){const A=n.get(P);A.shadowBias=W.bias,A.shadowNormalBias=W.normalBias,A.shadowRadius=W.radius,A.shadowMapSize=W.mapSize,i.spotShadow[p]=A,i.spotShadowMap[p]=O,R++}p++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(k).multiplyScalar($),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=K,y++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*S),K.distance=P.distance,K.decay=P.decay,P.castShadow){const W=P.shadow,A=n.get(P);A.shadowBias=W.bias,A.shadowNormalBias=W.normalBias,A.shadowRadius=W.radius,A.shadowMapSize=W.mapSize,A.shadowCameraNear=W.camera.near,A.shadowCameraFar=W.camera.far,i.pointShadow[m]=A,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=P.shadow.matrix,E++}i.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar($*S),K.groundColor.copy(P.groundColor).multiplyScalar($*S),i.hemi[x]=K,x++}}y>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=v;const C=i.hash;(C.directionalLength!==g||C.pointLength!==m||C.spotLength!==p||C.rectAreaLength!==y||C.hemiLength!==x||C.numDirectionalShadows!==_||C.numPointShadows!==E||C.numSpotShadows!==R||C.numSpotMaps!==D||C.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=R+D-L,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=M,C.directionalLength=g,C.pointLength=m,C.spotLength=p,C.rectAreaLength=y,C.hemiLength=x,C.numDirectionalShadows=_,C.numPointShadows=E,C.numSpotShadows=R,C.numSpotMaps=D,C.numLightProbes=M,i.version=mm++)}function c(u,h){let d=0,f=0,v=0,g=0,m=0;const p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const _=u[y];if(_.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(_.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),v++}else if(_.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Ko(a,e){const t=new gm(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function _m(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Ko(a,e),t.set(r,[l])):s>=o.length?(l=new Ko(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ym extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xm extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Em(a,e,t){let n=new ma;const i=new ct,r=new ct,s=new xt,o=new ym({depthPacking:nh}),l=new xm,c={},u=t.maxTextureSize,h={[Nn]:Zt,[Zt]:Nn,[pn]:pn},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new _n;v.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Kt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(E,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const L=a.getRenderTarget(),M=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),C=a.state;C.setBlending(Wn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const H=p!==Rn&&this.type===Rn,G=p===Rn&&this.type!==Rn;for(let P=0,k=E.length;P<k;P++){const $=E[P],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const O=B.getFrameExtents();if(i.multiply(O),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/O.x),i.x=r.x*O.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/O.y),i.y=r.y*O.y,B.mapSize.y=r.y)),B.map===null||H===!0||G===!0){const W=this.type!==Rn?{minFilter:Ut,magFilter:Ut}:{};B.map!==null&&B.map.dispose(),B.map=new di(i.x,i.y,W),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}a.setRenderTarget(B.map),a.clear();const K=B.getViewportCount();for(let W=0;W<K;W++){const A=B.getViewport(W);s.set(r.x*A.x,r.y*A.y,r.x*A.z,r.y*A.w),C.viewport(s),B.updateMatrices($,W),n=B.getFrustum(),_(R,D,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Rn&&y(B,D),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(L,M,S)};function y(E,R){const D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(R,null,D,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(R,null,D,f,g,null)}function x(E,R,D,L){let M=null;const S=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)M=S;else if(M=D.isPointLight===!0?l:o,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const C=M.uuid,H=R.uuid;let G=c[C];G===void 0&&(G={},c[C]=G);let P=G[H];P===void 0&&(P=M.clone(),G[H]=P),M=P}if(M.visible=R.visible,M.wireframe=R.wireframe,L===Rn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const C=a.properties.get(M);C.light=D}return M}function _(E,R,D,L,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Rn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const H=e.update(E),G=E.material;if(Array.isArray(G)){const P=H.groups;for(let k=0,$=P.length;k<$;k++){const B=P[k],O=G[B.materialIndex];if(O&&O.visible){const K=x(E,O,L,M);a.renderBufferDirect(D,null,H,K,E,B)}}}else if(G.visible){const P=x(E,G,L,M);a.renderBufferDirect(D,null,H,P,E,null)}}const C=E.children;for(let H=0,G=C.length;H<G;H++)_(C[H],R,D,L,M)}}function Tm(a,e,t){const n=t.isWebGL2;function i(){let V=!1;const Ee=new xt;let xe=null;const Pe=new xt(0,0,0,0);return{setMask:function(De){xe!==De&&!V&&(a.colorMask(De,De,De,De),xe=De)},setLocked:function(De){V=De},setClear:function(De,ve,We,Qe,wt){wt===!0&&(De*=Qe,ve*=Qe,We*=Qe),Ee.set(De,ve,We,Qe),Pe.equals(Ee)===!1&&(a.clearColor(De,ve,We,Qe),Pe.copy(Ee))},reset:function(){V=!1,xe=null,Pe.set(-1,0,0,0)}}}function r(){let V=!1,Ee=null,xe=null,Pe=null;return{setTest:function(De){De?se(a.DEPTH_TEST):te(a.DEPTH_TEST)},setMask:function(De){Ee!==De&&!V&&(a.depthMask(De),Ee=De)},setFunc:function(De){if(xe!==De){switch(De){case Pc:a.depthFunc(a.NEVER);break;case Ic:a.depthFunc(a.ALWAYS);break;case Nc:a.depthFunc(a.LESS);break;case js:a.depthFunc(a.LEQUAL);break;case Dc:a.depthFunc(a.EQUAL);break;case Uc:a.depthFunc(a.GEQUAL);break;case Fc:a.depthFunc(a.GREATER);break;case Bc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}xe=De}},setLocked:function(De){V=De},setClear:function(De){Pe!==De&&(a.clearDepth(De),Pe=De)},reset:function(){V=!1,Ee=null,xe=null,Pe=null}}}function s(){let V=!1,Ee=null,xe=null,Pe=null,De=null,ve=null,We=null,Qe=null,wt=null;return{setTest:function(it){V||(it?se(a.STENCIL_TEST):te(a.STENCIL_TEST))},setMask:function(it){Ee!==it&&!V&&(a.stencilMask(it),Ee=it)},setFunc:function(it,ae,ce){(xe!==it||Pe!==ae||De!==ce)&&(a.stencilFunc(it,ae,ce),xe=it,Pe=ae,De=ce)},setOp:function(it,ae,ce){(ve!==it||We!==ae||Qe!==ce)&&(a.stencilOp(it,ae,ce),ve=it,We=ae,Qe=ce)},setLocked:function(it){V=it},setClear:function(it){wt!==it&&(a.clearStencil(it),wt=it)},reset:function(){V=!1,Ee=null,xe=null,Pe=null,De=null,ve=null,We=null,Qe=null,wt=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,y=null,x=null,_=null,E=null,R=null,D=null,L=null,M=!1,S=null,C=null,H=null,G=null,P=null;const k=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const O=a.getParameter(a.VERSION);O.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(O)[1]),$=B>=1):O.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),$=B>=2);let K=null,W={};const A=a.getParameter(a.SCISSOR_BOX),F=a.getParameter(a.VIEWPORT),U=new xt().fromArray(A),I=new xt().fromArray(F);function b(V,Ee,xe,Pe){const De=new Uint8Array(4),ve=a.createTexture();a.bindTexture(V,ve),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let We=0;We<xe;We++)n&&(V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY)?a.texImage3D(Ee,0,a.RGBA,1,1,Pe,0,a.RGBA,a.UNSIGNED_BYTE,De):a.texImage2D(Ee+We,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,De);return ve}const j={};j[a.TEXTURE_2D]=b(a.TEXTURE_2D,a.TEXTURE_2D,1),j[a.TEXTURE_CUBE_MAP]=b(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(j[a.TEXTURE_2D_ARRAY]=b(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),j[a.TEXTURE_3D]=b(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(a.DEPTH_TEST),l.setFunc(js),oe(!1),qe(Ca),se(a.CULL_FACE),de(Wn);function se(V){d[V]!==!0&&(a.enable(V),d[V]=!0)}function te(V){d[V]!==!1&&(a.disable(V),d[V]=!1)}function Z(V,Ee){return f[V]!==Ee?(a.bindFramebuffer(V,Ee),f[V]=Ee,n&&(V===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=Ee),V===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function he(V,Ee){let xe=g,Pe=!1;if(V)if(xe=v.get(Ee),xe===void 0&&(xe=[],v.set(Ee,xe)),V.isWebGLMultipleRenderTargets){const De=V.texture;if(xe.length!==De.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let ve=0,We=De.length;ve<We;ve++)xe[ve]=a.COLOR_ATTACHMENT0+ve;xe.length=De.length,Pe=!0}}else xe[0]!==a.COLOR_ATTACHMENT0&&(xe[0]=a.COLOR_ATTACHMENT0,Pe=!0);else xe[0]!==a.BACK&&(xe[0]=a.BACK,Pe=!0);Pe&&(t.isWebGL2?a.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function le(V){return m!==V?(a.useProgram(V),m=V,!0):!1}const X={[Fi]:a.FUNC_ADD,[xc]:a.FUNC_SUBTRACT,[Mc]:a.FUNC_REVERSE_SUBTRACT};if(n)X[Na]=a.MIN,X[Da]=a.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(X[Na]=V.MIN_EXT,X[Da]=V.MAX_EXT)}const Ae={[Sc]:a.ZERO,[Ec]:a.ONE,[Tc]:a.SRC_COLOR,[wl]:a.SRC_ALPHA,[Lc]:a.SRC_ALPHA_SATURATE,[Rc]:a.DST_COLOR,[Ac]:a.DST_ALPHA,[wc]:a.ONE_MINUS_SRC_COLOR,[Al]:a.ONE_MINUS_SRC_ALPHA,[Cc]:a.ONE_MINUS_DST_COLOR,[bc]:a.ONE_MINUS_DST_ALPHA};function de(V,Ee,xe,Pe,De,ve,We,Qe){if(V===Wn){p===!0&&(te(a.BLEND),p=!1);return}if(p===!1&&(se(a.BLEND),p=!0),V!==yc){if(V!==y||Qe!==M){if((x!==Fi||R!==Fi)&&(a.blendEquation(a.FUNC_ADD),x=Fi,R=Fi),Qe)switch(V){case Oi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case La:a.blendFunc(a.ONE,a.ONE);break;case Pa:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ia:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Oi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case La:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Pa:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ia:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,E=null,D=null,L=null,y=V,M=Qe}return}De=De||Ee,ve=ve||xe,We=We||Pe,(Ee!==x||De!==R)&&(a.blendEquationSeparate(X[Ee],X[De]),x=Ee,R=De),(xe!==_||Pe!==E||ve!==D||We!==L)&&(a.blendFuncSeparate(Ae[xe],Ae[Pe],Ae[ve],Ae[We]),_=xe,E=Pe,D=ve,L=We),y=V,M=!1}function re(V,Ee){V.side===pn?te(a.CULL_FACE):se(a.CULL_FACE);let xe=V.side===Zt;Ee&&(xe=!xe),oe(xe),V.blending===Oi&&V.transparent===!1?de(Wn):de(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);const Pe=V.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?se(a.SAMPLE_ALPHA_TO_COVERAGE):te(a.SAMPLE_ALPHA_TO_COVERAGE)}function oe(V){S!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),S=V)}function qe(V){V!==vc?(se(a.CULL_FACE),V!==C&&(V===Ca?a.cullFace(a.BACK):V===gc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):te(a.CULL_FACE),C=V}function Re(V){V!==H&&($&&a.lineWidth(V),H=V)}function Ge(V,Ee,xe){V?(se(a.POLYGON_OFFSET_FILL),(G!==Ee||P!==xe)&&(a.polygonOffset(Ee,xe),G=Ee,P=xe)):te(a.POLYGON_OFFSET_FILL)}function ye(V){V?se(a.SCISSOR_TEST):te(a.SCISSOR_TEST)}function Ze(V){V===void 0&&(V=a.TEXTURE0+k-1),K!==V&&(a.activeTexture(V),K=V)}function et(V,Ee,xe){xe===void 0&&(K===null?xe=a.TEXTURE0+k-1:xe=K);let Pe=W[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},W[xe]=Pe),(Pe.type!==V||Pe.texture!==Ee)&&(K!==xe&&(a.activeTexture(xe),K=xe),a.bindTexture(V,Ee||j[V]),Pe.type=V,Pe.texture=Ee)}function N(){const V=W[K];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{a.compressedTexImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{a.texSubImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{a.texSubImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{a.texStorage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{a.texStorage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{a.texImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{a.texImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(V){U.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),U.copy(V))}function lt(V){I.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),I.copy(V))}function Ke(V,Ee){let xe=h.get(Ee);xe===void 0&&(xe=new WeakMap,h.set(Ee,xe));let Pe=xe.get(V);Pe===void 0&&(Pe=a.getUniformBlockIndex(Ee,V.name),xe.set(V,Pe))}function Ye(V,Ee){const Pe=h.get(Ee).get(V);u.get(Ee)!==Pe&&(a.uniformBlockBinding(Ee,Pe,V.__bindingPointIndex),u.set(Ee,Pe))}function Xe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},K=null,W={},f={},v=new WeakMap,g=[],m=null,p=!1,y=null,x=null,_=null,E=null,R=null,D=null,L=null,M=!1,S=null,C=null,H=null,G=null,P=null,U.set(0,0,a.canvas.width,a.canvas.height),I.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:se,disable:te,bindFramebuffer:Z,drawBuffers:he,useProgram:le,setBlending:de,setMaterial:re,setFlipSided:oe,setCullFace:qe,setLineWidth:Re,setPolygonOffset:Ge,setScissorTest:ye,activeTexture:Ze,bindTexture:et,unbindTexture:N,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:je,texImage3D:nt,updateUBOMapping:Ke,uniformBlockBinding:Ye,texStorage2D:Te,texStorage3D:Be,texSubImage2D:fe,texSubImage3D:ue,compressedTexSubImage2D:me,compressedTexSubImage3D:ze,scissor:_e,viewport:lt,reset:Xe}}function wm(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,w){return p?new OffscreenCanvas(N,w):gr("canvas")}function x(N,w,J,fe){let ue=1;if((N.width>fe||N.height>fe)&&(ue=fe/Math.max(N.width,N.height)),ue<1||w===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const me=w?is:Math.floor,ze=me(ue*N.width),Te=me(ue*N.height);g===void 0&&(g=y(ze,Te));const Be=J?y(ze,Te):g;return Be.width=ze,Be.height=Te,Be.getContext("2d").drawImage(N,0,0,ze,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ze+"x"+Te+")."),Be}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function _(N){return ea(N.width)&&ea(N.height)}function E(N){return o?!1:N.wrapS!==jt||N.wrapT!==jt||N.minFilter!==Ut&&N.minFilter!==Pt}function R(N,w){return N.generateMipmaps&&w&&N.minFilter!==Ut&&N.minFilter!==Pt}function D(N){a.generateMipmap(N)}function L(N,w,J,fe,ue=!1){if(o===!1)return w;if(N!==null){if(a[N]!==void 0)return a[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=w;if(w===a.RED&&(J===a.FLOAT&&(me=a.R32F),J===a.HALF_FLOAT&&(me=a.R16F),J===a.UNSIGNED_BYTE&&(me=a.R8)),w===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(me=a.R8UI),J===a.UNSIGNED_SHORT&&(me=a.R16UI),J===a.UNSIGNED_INT&&(me=a.R32UI),J===a.BYTE&&(me=a.R8I),J===a.SHORT&&(me=a.R16I),J===a.INT&&(me=a.R32I)),w===a.RG&&(J===a.FLOAT&&(me=a.RG32F),J===a.HALF_FLOAT&&(me=a.RG16F),J===a.UNSIGNED_BYTE&&(me=a.RG8)),w===a.RGBA){const ze=ue?Qr:pt.getTransfer(fe);J===a.FLOAT&&(me=a.RGBA32F),J===a.HALF_FLOAT&&(me=a.RGBA16F),J===a.UNSIGNED_BYTE&&(me=ze===Mt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT_4_4_4_4&&(me=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(me=a.RGB5_A1)}return(me===a.R16F||me===a.R32F||me===a.RG16F||me===a.RG32F||me===a.RGBA16F||me===a.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function M(N,w,J){return R(N,J)===!0||N.isFramebufferTexture&&N.minFilter!==Ut&&N.minFilter!==Pt?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function S(N){return N===Ut||N===Zs||N===Kr?a.NEAREST:a.LINEAR}function C(N){const w=N.target;w.removeEventListener("dispose",C),G(w),w.isVideoTexture&&v.delete(w)}function H(N){const w=N.target;w.removeEventListener("dispose",H),k(w)}function G(N){const w=n.get(N);if(w.__webglInit===void 0)return;const J=N.source,fe=m.get(J);if(fe){const ue=fe[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&P(N),Object.keys(fe).length===0&&m.delete(J)}n.remove(N)}function P(N){const w=n.get(N);a.deleteTexture(w.__webglTexture);const J=N.source,fe=m.get(J);delete fe[w.__cacheKey],s.memory.textures--}function k(N){const w=N.texture,J=n.get(N),fe=n.get(w);if(fe.__webglTexture!==void 0&&(a.deleteTexture(fe.__webglTexture),s.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(J.__webglFramebuffer[ue]))for(let me=0;me<J.__webglFramebuffer[ue].length;me++)a.deleteFramebuffer(J.__webglFramebuffer[ue][me]);else a.deleteFramebuffer(J.__webglFramebuffer[ue]);J.__webglDepthbuffer&&a.deleteRenderbuffer(J.__webglDepthbuffer[ue])}else{if(Array.isArray(J.__webglFramebuffer))for(let ue=0;ue<J.__webglFramebuffer.length;ue++)a.deleteFramebuffer(J.__webglFramebuffer[ue]);else a.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&a.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&a.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ue=0;ue<J.__webglColorRenderbuffer.length;ue++)J.__webglColorRenderbuffer[ue]&&a.deleteRenderbuffer(J.__webglColorRenderbuffer[ue]);J.__webglDepthRenderbuffer&&a.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ue=0,me=w.length;ue<me;ue++){const ze=n.get(w[ue]);ze.__webglTexture&&(a.deleteTexture(ze.__webglTexture),s.memory.textures--),n.remove(w[ue])}n.remove(w),n.remove(N)}let $=0;function B(){$=0}function O(){const N=$;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),$+=1,N}function K(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function W(N,w){const J=n.get(N);if(N.isVideoTexture&&Ze(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){const fe=N.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(J,N,w);return}}t.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+w)}function A(N,w){const J=n.get(N);if(N.version>0&&J.__version!==N.version){Z(J,N,w);return}t.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+w)}function F(N,w){const J=n.get(N);if(N.version>0&&J.__version!==N.version){Z(J,N,w);return}t.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+w)}function U(N,w){const J=n.get(N);if(N.version>0&&J.__version!==N.version){he(J,N,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+w)}const I={[ki]:a.REPEAT,[jt]:a.CLAMP_TO_EDGE,[Jr]:a.MIRRORED_REPEAT},b={[Ut]:a.NEAREST,[Zs]:a.NEAREST_MIPMAP_NEAREST,[Kr]:a.NEAREST_MIPMAP_LINEAR,[Pt]:a.LINEAR,[Cl]:a.LINEAR_MIPMAP_NEAREST,[Yn]:a.LINEAR_MIPMAP_LINEAR},j={[sh]:a.NEVER,[dh]:a.ALWAYS,[ah]:a.LESS,[lh]:a.LEQUAL,[oh]:a.EQUAL,[uh]:a.GEQUAL,[ch]:a.GREATER,[hh]:a.NOTEQUAL};function se(N,w,J){if(J?(a.texParameteri(N,a.TEXTURE_WRAP_S,I[w.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,I[w.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,I[w.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,b[w.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,b[w.minFilter])):(a.texParameteri(N,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(N,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(w.wrapS!==jt||w.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(N,a.TEXTURE_MAG_FILTER,S(w.magFilter)),a.texParameteri(N,a.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==Ut&&w.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ut||w.minFilter!==Kr&&w.minFilter!==Yn||w.type===sn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ln&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(N,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function te(N,w){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",C));const fe=w.source;let ue=m.get(fe);ue===void 0&&(ue={},m.set(fe,ue));const me=K(w);if(me!==N.__cacheKey){ue[me]===void 0&&(ue[me]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,J=!0),ue[me].usedTimes++;const ze=ue[N.__cacheKey];ze!==void 0&&(ue[N.__cacheKey].usedTimes--,ze.usedTimes===0&&P(w)),N.__cacheKey=me,N.__webglTexture=ue[me].texture}return J}function Z(N,w,J){let fe=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=a.TEXTURE_3D);const ue=te(N,w),me=w.source;t.bindTexture(fe,N.__webglTexture,a.TEXTURE0+J);const ze=n.get(me);if(me.version!==ze.__version||ue===!0){t.activeTexture(a.TEXTURE0+J);const Te=pt.getPrimaries(pt.workingColorSpace),Be=w.colorSpace===rn?null:pt.getPrimaries(w.colorSpace),je=w.colorSpace===rn||Te===Be?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const nt=E(w)&&_(w.image)===!1;let _e=x(w.image,nt,!1,u);_e=et(w,_e);const lt=_(_e)||o,Ke=r.convert(w.format,w.colorSpace);let Ye=r.convert(w.type),Xe=L(w.internalFormat,Ke,Ye,w.colorSpace,w.isVideoTexture);se(fe,w,lt);let V;const Ee=w.mipmaps,xe=o&&w.isVideoTexture!==!0,Pe=ze.__version===void 0||ue===!0,De=M(w,_e,lt);if(w.isDepthTexture)Xe=a.DEPTH_COMPONENT,o?w.type===sn?Xe=a.DEPTH_COMPONENT32F:w.type===kn?Xe=a.DEPTH_COMPONENT24:w.type===ci?Xe=a.DEPTH24_STENCIL8:Xe=a.DEPTH_COMPONENT16:w.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===hi&&Xe===a.DEPTH_COMPONENT&&w.type!==ha&&w.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=kn,Ye=r.convert(w.type)),w.format===Wi&&Xe===a.DEPTH_COMPONENT&&(Xe=a.DEPTH_STENCIL,w.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ci,Ye=r.convert(w.type))),Pe&&(xe?t.texStorage2D(a.TEXTURE_2D,1,Xe,_e.width,_e.height):t.texImage2D(a.TEXTURE_2D,0,Xe,_e.width,_e.height,0,Ke,Ye,null));else if(w.isDataTexture)if(Ee.length>0&&lt){xe&&Pe&&t.texStorage2D(a.TEXTURE_2D,De,Xe,Ee[0].width,Ee[0].height);for(let ve=0,We=Ee.length;ve<We;ve++)V=Ee[ve],xe?t.texSubImage2D(a.TEXTURE_2D,ve,0,0,V.width,V.height,Ke,Ye,V.data):t.texImage2D(a.TEXTURE_2D,ve,Xe,V.width,V.height,0,Ke,Ye,V.data);w.generateMipmaps=!1}else xe?(Pe&&t.texStorage2D(a.TEXTURE_2D,De,Xe,_e.width,_e.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,_e.width,_e.height,Ke,Ye,_e.data)):t.texImage2D(a.TEXTURE_2D,0,Xe,_e.width,_e.height,0,Ke,Ye,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xe&&Pe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,De,Xe,Ee[0].width,Ee[0].height,_e.depth);for(let ve=0,We=Ee.length;ve<We;ve++)V=Ee[ve],w.format!==nn?Ke!==null?xe?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,V.width,V.height,_e.depth,Ke,V.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Xe,V.width,V.height,_e.depth,0,V.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,V.width,V.height,_e.depth,Ke,Ye,V.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ve,Xe,V.width,V.height,_e.depth,0,Ke,Ye,V.data)}else{xe&&Pe&&t.texStorage2D(a.TEXTURE_2D,De,Xe,Ee[0].width,Ee[0].height);for(let ve=0,We=Ee.length;ve<We;ve++)V=Ee[ve],w.format!==nn?Ke!==null?xe?t.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,V.width,V.height,Ke,V.data):t.compressedTexImage2D(a.TEXTURE_2D,ve,Xe,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage2D(a.TEXTURE_2D,ve,0,0,V.width,V.height,Ke,Ye,V.data):t.texImage2D(a.TEXTURE_2D,ve,Xe,V.width,V.height,0,Ke,Ye,V.data)}else if(w.isDataArrayTexture)xe?(Pe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,De,Xe,_e.width,_e.height,_e.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ke,Ye,_e.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,Xe,_e.width,_e.height,_e.depth,0,Ke,Ye,_e.data);else if(w.isData3DTexture)xe?(Pe&&t.texStorage3D(a.TEXTURE_3D,De,Xe,_e.width,_e.height,_e.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ke,Ye,_e.data)):t.texImage3D(a.TEXTURE_3D,0,Xe,_e.width,_e.height,_e.depth,0,Ke,Ye,_e.data);else if(w.isFramebufferTexture){if(Pe)if(xe)t.texStorage2D(a.TEXTURE_2D,De,Xe,_e.width,_e.height);else{let ve=_e.width,We=_e.height;for(let Qe=0;Qe<De;Qe++)t.texImage2D(a.TEXTURE_2D,Qe,Xe,ve,We,0,Ke,Ye,null),ve>>=1,We>>=1}}else if(Ee.length>0&&lt){xe&&Pe&&t.texStorage2D(a.TEXTURE_2D,De,Xe,Ee[0].width,Ee[0].height);for(let ve=0,We=Ee.length;ve<We;ve++)V=Ee[ve],xe?t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ke,Ye,V):t.texImage2D(a.TEXTURE_2D,ve,Xe,Ke,Ye,V);w.generateMipmaps=!1}else xe?(Pe&&t.texStorage2D(a.TEXTURE_2D,De,Xe,_e.width,_e.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ke,Ye,_e)):t.texImage2D(a.TEXTURE_2D,0,Xe,Ke,Ye,_e);R(w,lt)&&D(fe),ze.__version=me.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function he(N,w,J){if(w.image.length!==6)return;const fe=te(N,w),ue=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+J);const me=n.get(ue);if(ue.version!==me.__version||fe===!0){t.activeTexture(a.TEXTURE0+J);const ze=pt.getPrimaries(pt.workingColorSpace),Te=w.colorSpace===rn?null:pt.getPrimaries(w.colorSpace),Be=w.colorSpace===rn||ze===Te?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const je=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let ve=0;ve<6;ve++)!je&&!nt?_e[ve]=x(w.image[ve],!1,!0,c):_e[ve]=nt?w.image[ve].image:w.image[ve],_e[ve]=et(w,_e[ve]);const lt=_e[0],Ke=_(lt)||o,Ye=r.convert(w.format,w.colorSpace),Xe=r.convert(w.type),V=L(w.internalFormat,Ye,Xe,w.colorSpace),Ee=o&&w.isVideoTexture!==!0,xe=me.__version===void 0||fe===!0;let Pe=M(w,lt,Ke);se(a.TEXTURE_CUBE_MAP,w,Ke);let De;if(je){Ee&&xe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,V,lt.width,lt.height);for(let ve=0;ve<6;ve++){De=_e[ve].mipmaps;for(let We=0;We<De.length;We++){const Qe=De[We];w.format!==nn?Ye!==null?Ee?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,Qe.width,Qe.height,Ye,Qe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,V,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,Qe.width,Qe.height,Ye,Xe,Qe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,V,Qe.width,Qe.height,0,Ye,Xe,Qe.data)}}}else{De=w.mipmaps,Ee&&xe&&(De.length>0&&Pe++,t.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,V,_e[0].width,_e[0].height));for(let ve=0;ve<6;ve++)if(nt){Ee?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,_e[ve].width,_e[ve].height,Ye,Xe,_e[ve].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,V,_e[ve].width,_e[ve].height,0,Ye,Xe,_e[ve].data);for(let We=0;We<De.length;We++){const wt=De[We].image[ve].image;Ee?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,wt.width,wt.height,Ye,Xe,wt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,V,wt.width,wt.height,0,Ye,Xe,wt.data)}}else{Ee?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ye,Xe,_e[ve]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,V,Ye,Xe,_e[ve]);for(let We=0;We<De.length;We++){const Qe=De[We];Ee?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Ye,Xe,Qe.image[ve]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,V,Ye,Xe,Qe.image[ve])}}}R(w,Ke)&&D(a.TEXTURE_CUBE_MAP),me.__version=ue.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function le(N,w,J,fe,ue,me){const ze=r.convert(J.format,J.colorSpace),Te=r.convert(J.type),Be=L(J.internalFormat,ze,Te,J.colorSpace);if(!n.get(w).__hasExternalTextures){const nt=Math.max(1,w.width>>me),_e=Math.max(1,w.height>>me);ue===a.TEXTURE_3D||ue===a.TEXTURE_2D_ARRAY?t.texImage3D(ue,me,Be,nt,_e,w.depth,0,ze,Te,null):t.texImage2D(ue,me,Be,nt,_e,0,ze,Te,null)}t.bindFramebuffer(a.FRAMEBUFFER,N),ye(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,ue,n.get(J).__webglTexture,0,Ge(w)):(ue===a.TEXTURE_2D||ue>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,fe,ue,n.get(J).__webglTexture,me),t.bindFramebuffer(a.FRAMEBUFFER,null)}function X(N,w,J){if(a.bindRenderbuffer(a.RENDERBUFFER,N),w.depthBuffer&&!w.stencilBuffer){let fe=o===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(J||ye(w)){const ue=w.depthTexture;ue&&ue.isDepthTexture&&(ue.type===sn?fe=a.DEPTH_COMPONENT32F:ue.type===kn&&(fe=a.DEPTH_COMPONENT24));const me=Ge(w);ye(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,me,fe,w.width,w.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,me,fe,w.width,w.height)}else a.renderbufferStorage(a.RENDERBUFFER,fe,w.width,w.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,N)}else if(w.depthBuffer&&w.stencilBuffer){const fe=Ge(w);J&&ye(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,fe,a.DEPTH24_STENCIL8,w.width,w.height):ye(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,fe,a.DEPTH24_STENCIL8,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,N)}else{const fe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ue=0;ue<fe.length;ue++){const me=fe[ue],ze=r.convert(me.format,me.colorSpace),Te=r.convert(me.type),Be=L(me.internalFormat,ze,Te,me.colorSpace),je=Ge(w);J&&ye(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,je,Be,w.width,w.height):ye(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,je,Be,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Be,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ae(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const fe=n.get(w.depthTexture).__webglTexture,ue=Ge(w);if(w.depthTexture.format===hi)ye(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,fe,0,ue):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,fe,0);else if(w.depthTexture.format===Wi)ye(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,fe,0,ue):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function de(N){const w=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,N)}else if(J){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]=a.createRenderbuffer(),X(w.__webglDepthbuffer[fe],N,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),X(w.__webglDepthbuffer,N,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function re(N,w,J){const fe=n.get(N);w!==void 0&&le(fe.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&de(N)}function oe(N){const w=N.texture,J=n.get(N),fe=n.get(w);N.addEventListener("dispose",H),N.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture()),fe.__version=w.version,s.memory.textures++);const ue=N.isWebGLCubeRenderTarget===!0,me=N.isWebGLMultipleRenderTargets===!0,ze=_(N)||o;if(ue){J.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(o&&w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Te]=[];for(let Be=0;Be<w.mipmaps.length;Be++)J.__webglFramebuffer[Te][Be]=a.createFramebuffer()}else J.__webglFramebuffer[Te]=a.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)J.__webglFramebuffer[Te]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(me)if(i.drawBuffers){const Te=N.texture;for(let Be=0,je=Te.length;Be<je;Be++){const nt=n.get(Te[Be]);nt.__webglTexture===void 0&&(nt.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&ye(N)===!1){const Te=me?w:[w];J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Be=0;Be<Te.length;Be++){const je=Te[Be];J.__webglColorRenderbuffer[Be]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[Be]);const nt=r.convert(je.format,je.colorSpace),_e=r.convert(je.type),lt=L(je.internalFormat,nt,_e,je.colorSpace,N.isXRRenderTarget===!0),Ke=Ge(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,lt,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,J.__webglColorRenderbuffer[Be])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),X(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ue){t.bindTexture(a.TEXTURE_CUBE_MAP,fe.__webglTexture),se(a.TEXTURE_CUBE_MAP,w,ze);for(let Te=0;Te<6;Te++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)le(J.__webglFramebuffer[Te][Be],N,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Be);else le(J.__webglFramebuffer[Te],N,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);R(w,ze)&&D(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const Te=N.texture;for(let Be=0,je=Te.length;Be<je;Be++){const nt=Te[Be],_e=n.get(nt);t.bindTexture(a.TEXTURE_2D,_e.__webglTexture),se(a.TEXTURE_2D,nt,ze),le(J.__webglFramebuffer,N,nt,a.COLOR_ATTACHMENT0+Be,a.TEXTURE_2D,0),R(nt,ze)&&D(a.TEXTURE_2D)}t.unbindTexture()}else{let Te=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?Te=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,fe.__webglTexture),se(Te,w,ze),o&&w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)le(J.__webglFramebuffer[Be],N,w,a.COLOR_ATTACHMENT0,Te,Be);else le(J.__webglFramebuffer,N,w,a.COLOR_ATTACHMENT0,Te,0);R(w,ze)&&D(Te),t.unbindTexture()}N.depthBuffer&&de(N)}function qe(N){const w=_(N)||o,J=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let fe=0,ue=J.length;fe<ue;fe++){const me=J[fe];if(R(me,w)){const ze=N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Te=n.get(me).__webglTexture;t.bindTexture(ze,Te),D(ze),t.unbindTexture()}}}function Re(N){if(o&&N.samples>0&&ye(N)===!1){const w=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],J=N.width,fe=N.height;let ue=a.COLOR_BUFFER_BIT;const me=[],ze=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Te=n.get(N),Be=N.isWebGLMultipleRenderTargets===!0;if(Be)for(let je=0;je<w.length;je++)t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let je=0;je<w.length;je++){me.push(a.COLOR_ATTACHMENT0+je),N.depthBuffer&&me.push(ze);const nt=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(nt===!1&&(N.depthBuffer&&(ue|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ue|=a.STENCIL_BUFFER_BIT)),Be&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Te.__webglColorRenderbuffer[je]),nt===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[ze]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[ze])),Be){const _e=n.get(w[je]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,_e,0)}a.blitFramebuffer(0,0,J,fe,0,0,J,fe,ue,a.NEAREST),f&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Be)for(let je=0;je<w.length;je++){t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,Te.__webglColorRenderbuffer[je]);const nt=n.get(w[je]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Te.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,nt,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function Ge(N){return Math.min(h,N.samples)}function ye(N){const w=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ze(N){const w=s.render.frame;v.get(N)!==w&&(v.set(N,w),N.update())}function et(N,w){const J=N.colorSpace,fe=N.format,ue=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Qs||J!==Ft&&J!==rn&&(pt.getTransfer(J)===Mt?o===!1?e.has("EXT_sRGB")===!0&&fe===nn?(N.format=Qs,N.minFilter=Pt,N.generateMipmaps=!1):w=Vl.sRGBToLinear(w):(fe!==nn||ue!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=A,this.setTexture3D=F,this.setTextureCube=U,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ye}function Am(a,e,t){const n=t.isWebGL2;function i(r,s=rn){let o;const l=pt.getTransfer(s);if(r===qn)return a.UNSIGNED_BYTE;if(r===Pl)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Il)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Wc)return a.BYTE;if(r===Xc)return a.SHORT;if(r===ha)return a.UNSIGNED_SHORT;if(r===Ll)return a.INT;if(r===kn)return a.UNSIGNED_INT;if(r===sn)return a.FLOAT;if(r===Ln)return n?a.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qc)return a.ALPHA;if(r===nn)return a.RGBA;if(r===Yc)return a.LUMINANCE;if(r===jc)return a.LUMINANCE_ALPHA;if(r===hi)return a.DEPTH_COMPONENT;if(r===Wi)return a.DEPTH_STENCIL;if(r===Qs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Kc)return a.RED;if(r===Nl)return a.RED_INTEGER;if(r===Zc)return a.RG;if(r===Dl)return a.RG_INTEGER;if(r===Ul)return a.RGBA_INTEGER;if(r===us||r===ds||r===fs||r===ps)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===us)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===us)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ds)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ps)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ua||r===Fa||r===Ba||r===Oa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ua)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ba)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$c)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===za||r===Va)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===za)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Va)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ha||r===Ga||r===ka||r===Wa||r===Xa||r===qa||r===Ya||r===ja||r===Ka||r===Za||r===$a||r===Ja||r===Qa||r===eo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ha)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ga)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ka)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ya)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ja)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ka)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Za)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$a)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ja)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ms||r===to||r===no)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ms)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===to)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===no)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jc||r===io||r===ro||r===so)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ms)return o.COMPRESSED_RED_RGTC1_EXT;if(r===io)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ro)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===so)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ci?n?a.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class bm extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cm extends Ht{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=kn),n===void 0&&u===Wi&&(n=ci),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lm extends Ji{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null;const g=t.getContextAttributes();let m=null,p=null;const y=[],x=[],_=new qt;_.layers.enable(1),_.viewport=new xt;const E=new qt;E.layers.enable(2),E.viewport=new xt;const R=[_,E],D=new bm;D.layers.enable(1),D.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let F=y[A];return F===void 0&&(F=new Os,y[A]=F),F.getTargetRaySpace()},this.getControllerGrip=function(A){let F=y[A];return F===void 0&&(F=new Os,y[A]=F),F.getGripSpace()},this.getHand=function(A){let F=y[A];return F===void 0&&(F=new Os,y[A]=F),F.getHandSpace()};function S(A){const F=x.indexOf(A.inputSource);if(F===-1)return;const U=y[F];U!==void 0&&(U.update(A.inputSource,A.frame,c||s),U.dispatchEvent({type:A.type,data:A.inputSource}))}function C(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",H);for(let A=0;A<y.length;A++){const F=x[A];F!==null&&(x[A]=null,y[A].disconnect(F))}L=null,M=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){o=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(A){if(i=A,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",C),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:f}),p=new di(f.framebufferWidth,f.framebufferHeight,{format:nn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,U=null,I=null;g.depth&&(I=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=g.stencil?Wi:hi,U=g.stencil?ci:kn);const b={colorFormat:t.RGBA8,depthFormat:I,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(b),i.updateRenderState({layers:[d]}),p=new di(d.textureWidth,d.textureHeight,{format:nn,type:qn,depthTexture:new Cm(d.textureWidth,d.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const j=e.properties.get(p);j.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function H(A){for(let F=0;F<A.removed.length;F++){const U=A.removed[F],I=x.indexOf(U);I>=0&&(x[I]=null,y[I].disconnect(U))}for(let F=0;F<A.added.length;F++){const U=A.added[F];let I=x.indexOf(U);if(I===-1){for(let j=0;j<y.length;j++)if(j>=x.length){x.push(U),I=j;break}else if(x[j]===null){x[j]=U,I=j;break}if(I===-1)break}const b=y[I];b&&b.connect(U)}}const G=new Q,P=new Q;function k(A,F,U){G.setFromMatrixPosition(F.matrixWorld),P.setFromMatrixPosition(U.matrixWorld);const I=G.distanceTo(P),b=F.projectionMatrix.elements,j=U.projectionMatrix.elements,se=b[14]/(b[10]-1),te=b[14]/(b[10]+1),Z=(b[9]+1)/b[5],he=(b[9]-1)/b[5],le=(b[8]-1)/b[0],X=(j[8]+1)/j[0],Ae=se*le,de=se*X,re=I/(-le+X),oe=re*-le;F.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(oe),A.translateZ(re),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const qe=se+re,Re=te+re,Ge=Ae-oe,ye=de+(I-oe),Ze=Z*te/Re*qe,et=he*te/Re*qe;A.projectionMatrix.makePerspective(Ge,ye,Ze,et,qe,Re),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function $(A,F){F===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(F.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(i===null)return;D.near=E.near=_.near=A.near,D.far=E.far=_.far=A.far,(L!==D.near||M!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,M=D.far);const F=A.parent,U=D.cameras;$(D,F);for(let I=0;I<U.length;I++)$(U[I],F);U.length===2?k(D,_,E):D.projectionMatrix.copy(_.projectionMatrix),B(A,D,F)};function B(A,F,U){U===null?A.matrix.copy(F.matrixWorld):(A.matrix.copy(U.matrixWorld),A.matrix.invert(),A.matrix.multiply(F.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(F.projectionMatrix),A.projectionMatrixInverse.copy(F.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=qi*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(A){l=A,d!==null&&(d.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)};let O=null;function K(A,F){if(u=F.getViewerPose(c||s),v=F,u!==null){const U=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let I=!1;U.length!==D.cameras.length&&(D.cameras.length=0,I=!0);for(let b=0;b<U.length;b++){const j=U[b];let se=null;if(f!==null)se=f.getViewport(j);else{const Z=h.getViewSubImage(d,j);se=Z.viewport,b===0&&(e.setRenderTargetTextures(p,Z.colorTexture,d.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(p))}let te=R[b];te===void 0&&(te=new qt,te.layers.enable(b),te.viewport=new xt,R[b]=te),te.matrix.fromArray(j.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(j.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(se.x,se.y,se.width,se.height),b===0&&(D.matrix.copy(te.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),I===!0&&D.cameras.push(te)}}for(let U=0;U<y.length;U++){const I=x[U],b=y[U];I!==null&&b!==void 0&&b.update(I,F,c||s)}O&&O(A,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),v=null}const W=new Kl;W.setAnimationLoop(K),this.setAnimationLoop=function(A){O=A},this.dispose=function(){}}}function Pm(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ql(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=a._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Im(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=i[y.id];_===void 0&&(v(y),_=u(y),i[y.id]=_,y.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(y,E);const R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function u(y){const x=h();y.__bindingPointIndex=x;const _=a.createBuffer(),E=y.__size,R=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,E,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],_=y.uniforms,E=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let R=0,D=_.length;R<D;R++){const L=_[R];if(f(L,R,E)===!0){const M=L.__offset,S=Array.isArray(L.value)?L.value:[L.value];let C=0;for(let H=0;H<S.length;H++){const G=S[H],P=g(G);typeof G=="number"?(L.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,M+C,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=G.elements[0],L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=G.elements[0],L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=G.elements[0]):(G.toArray(L.__data,C),C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,M,L.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(y,x,_){const E=y.value;if(_[x]===void 0){if(typeof E=="number")_[x]=E;else{const R=Array.isArray(E)?E:[E],D=[];for(let L=0;L<R.length;L++)D.push(R[L].clone());_[x]=D}return!0}else if(typeof E=="number"){if(_[x]!==E)return _[x]=E,!0}else{const R=Array.isArray(_[x])?_[x]:[_[x]],D=Array.isArray(E)?E:[E];for(let L=0;L<R.length;L++){const M=R[L];if(M.equals(D[L])===!1)return M.copy(D[L]),!0}}return!1}function v(y){const x=y.uniforms;let _=0;const E=16;let R=0;for(let D=0,L=x.length;D<L;D++){const M=x[D],S={boundary:0,storage:0},C=Array.isArray(M.value)?M.value:[M.value];for(let H=0,G=C.length;H<G;H++){const P=C[H],k=g(P);S.boundary+=k.boundary,S.storage+=k.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=_,D>0){R=_%E;const H=E-R;R!==0&&H-S.boundary<0&&(_+=E-R,M.__offset=_)}_+=S.storage}return R=_%E,R>0&&(_+=E-R),y.__size=_,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=s.indexOf(x.__bindingPointIndex);s.splice(_,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)a.deleteBuffer(i[y]);s=[],i={},r={}}return{bind:l,update:c,dispose:p}}class ec{constructor(e={}){const{canvas:t=bh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const x=this;let _=!1,E=0,R=0,D=null,L=-1,M=null;const S=new xt,C=new xt;let H=null;const G=new rt(0);let P=0,k=t.width,$=t.height,B=1,O=null,K=null;const W=new xt(0,0,k,$),A=new xt(0,0,k,$);let F=!1;const U=new ma;let I=!1,b=!1,j=null;const se=new ot,te=new ct,Z=new Q,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return D===null?B:1}let X=n;function Ae(T,z){for(let q=0;q<T.length;q++){const Y=T[q],ee=t.getContext(Y,z);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),X=Ae(z,T),X===null)throw Ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let de,re,oe,qe,Re,Ge,ye,Ze,et,N,w,J,fe,ue,me,ze,Te,Be,je,nt,_e,lt,Ke,Ye;function Xe(){de=new kf(X),re=new Bf(X,de,e),de.init(re),lt=new Am(X,de,re),oe=new Tm(X,de,re),qe=new qf(X),Re=new hm,Ge=new wm(X,de,oe,Re,re,lt,qe),ye=new zf(x),Ze=new Gf(x),et=new tu(X,re),Ke=new Uf(X,de,et,re),N=new Wf(X,et,qe,Ke),w=new Zf(X,N,et,qe),je=new Kf(X,re,Ge),ze=new Of(Re),J=new cm(x,ye,Ze,de,re,Ke,ze),fe=new Pm(x,Re),ue=new dm,me=new _m(de,re),Be=new Df(x,ye,Ze,oe,w,d,l),Te=new Em(x,w,re),Ye=new Im(X,qe,re,oe),nt=new Ff(X,de,qe,re),_e=new Xf(X,de,qe,re),qe.programs=J.programs,x.capabilities=re,x.extensions=de,x.properties=Re,x.renderLists=ue,x.shadowMap=Te,x.state=oe,x.info=qe}Xe();const V=new Lm(x,X);this.xr=V,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(k,$,!1))},this.getSize=function(T){return T.set(k,$)},this.setSize=function(T,z,q=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,$=z,t.width=Math.floor(T*B),t.height=Math.floor(z*B),q===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(k*B,$*B).floor()},this.setDrawingBufferSize=function(T,z,q){k=T,$=z,B=q,t.width=Math.floor(T*q),t.height=Math.floor(z*q),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(W)},this.setViewport=function(T,z,q,Y){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,z,q,Y),oe.viewport(S.copy(W).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(A)},this.setScissor=function(T,z,q,Y){T.isVector4?A.set(T.x,T.y,T.z,T.w):A.set(T,z,q,Y),oe.scissor(C.copy(A).multiplyScalar(B).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(T){oe.setScissorTest(F=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(T=!0,z=!0,q=!0){let Y=0;if(T){let ee=!1;if(D!==null){const ne=D.texture.format;ee=ne===Ul||ne===Dl||ne===Nl}if(ee){const ne=D.texture.type,Me=ne===qn||ne===kn||ne===ha||ne===ci||ne===Pl||ne===Il,Ce=Be.getClearColor(),He=Be.getClearAlpha(),Oe=Ce.r,Ie=Ce.g,Se=Ce.b;Me?(f[0]=Oe,f[1]=Ie,f[2]=Se,f[3]=He,X.clearBufferuiv(X.COLOR,0,f)):(v[0]=Oe,v[1]=Ie,v[2]=Se,v[3]=He,X.clearBufferiv(X.COLOR,0,v))}else Y|=X.COLOR_BUFFER_BIT}z&&(Y|=X.DEPTH_BUFFER_BIT),q&&(Y|=X.STENCIL_BUFFER_BIT),X.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ue.dispose(),me.dispose(),Re.dispose(),ye.dispose(),Ze.dispose(),w.dispose(),Ke.dispose(),Ye.dispose(),J.dispose(),V.dispose(),V.removeEventListener("sessionstart",it),V.removeEventListener("sessionend",ae),j&&(j.dispose(),j=null),ce.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=qe.autoReset,z=Te.enabled,q=Te.autoUpdate,Y=Te.needsUpdate,ee=Te.type;Xe(),qe.autoReset=T,Te.enabled=z,Te.autoUpdate=q,Te.needsUpdate=Y,Te.type=ee}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const z=T.target;z.removeEventListener("dispose",De),ve(z)}function ve(T){We(T),Re.remove(T)}function We(T){const z=Re.get(T).programs;z!==void 0&&(z.forEach(function(q){J.releaseProgram(q)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,q,Y,ee,ne){z===null&&(z=he);const Me=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=be(T,z,q,Y,ee);oe.setMaterial(Y,Me);let He=q.index,Oe=1;if(Y.wireframe===!0){if(He=N.getWireframeAttribute(q),He===void 0)return;Oe=2}const Ie=q.drawRange,Se=q.attributes.position;let ht=Ie.start*Oe,ft=(Ie.start+Ie.count)*Oe;ne!==null&&(ht=Math.max(ht,ne.start*Oe),ft=Math.min(ft,(ne.start+ne.count)*Oe)),He!==null?(ht=Math.max(ht,0),ft=Math.min(ft,He.count)):Se!=null&&(ht=Math.max(ht,0),ft=Math.min(ft,Se.count));const _t=ft-ht;if(_t<0||_t===1/0)return;Ke.setup(ee,Y,Ce,q,He);let Lt,ut=nt;if(He!==null&&(Lt=et.get(He),ut=_e,ut.setIndex(Lt)),ee.isMesh)Y.wireframe===!0?(oe.setLineWidth(Y.wireframeLinewidth*le()),ut.setMode(X.LINES)):ut.setMode(X.TRIANGLES);else if(ee.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),oe.setLineWidth(ke*le()),ee.isLineSegments?ut.setMode(X.LINES):ee.isLineLoop?ut.setMode(X.LINE_LOOP):ut.setMode(X.LINE_STRIP)}else ee.isPoints?ut.setMode(X.POINTS):ee.isSprite&&ut.setMode(X.TRIANGLES);if(ee.isInstancedMesh)ut.renderInstances(ht,_t,ee.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,$t=Math.min(q.instanceCount,ke);ut.renderInstances(ht,_t,$t)}else ut.render(ht,_t)},this.compile=function(T,z){function q(Y,ee,ne){Y.transparent===!0&&Y.side===pn&&Y.forceSinglePass===!1?(Y.side=Zt,Y.needsUpdate=!0,Le(Y,ee,ne),Y.side=Nn,Y.needsUpdate=!0,Le(Y,ee,ne),Y.side=pn):Le(Y,ee,ne)}m=me.get(T),m.init(),y.push(m),T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights),T.traverse(function(Y){const ee=Y.material;if(ee)if(Array.isArray(ee))for(let ne=0;ne<ee.length;ne++){const Me=ee[ne];q(Me,T,Y)}else q(ee,T,Y)}),y.pop(),m=null};let Qe=null;function wt(T){Qe&&Qe(T)}function it(){ce.stop()}function ae(){ce.start()}const ce=new Kl;ce.setAnimationLoop(wt),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(T){Qe=T,V.setAnimationLoop(T),T===null?ce.stop():ce.start()},V.addEventListener("sessionstart",it),V.addEventListener("sessionend",ae),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(z),z=V.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,D),m=me.get(T,y.length),m.init(),y.push(m),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),U.setFromProjectionMatrix(se),b=this.localClippingEnabled,I=ze.init(this.clippingPlanes,b),g=ue.get(T,p.length),g.init(),p.push(g),pe(T,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(O,K),this.info.render.frame++,I===!0&&ze.beginShadows();const q=m.state.shadowsArray;if(Te.render(q,T,z),I===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(g,T),m.setupLights(x._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let ee=0,ne=Y.length;ee<ne;ee++){const Me=Y[ee];ge(g,T,Me,Me.viewport)}}else ge(g,T,z);D!==null&&(Ge.updateMultisampleRenderTarget(D),Ge.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(x,T,z),Ke.resetDefaultState(),L=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function pe(T,z,q,Y){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||U.intersectsSprite(T)){Y&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Me=w.update(T),Ce=T.material;Ce.visible&&g.push(T,Me,Ce,q,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||U.intersectsObject(T))){const Me=w.update(T),Ce=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Z.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Z.copy(Me.boundingSphere.center)),Z.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Ce)){const He=Me.groups;for(let Oe=0,Ie=He.length;Oe<Ie;Oe++){const Se=He[Oe],ht=Ce[Se.materialIndex];ht&&ht.visible&&g.push(T,Me,ht,q,Z.z,Se)}}else Ce.visible&&g.push(T,Me,Ce,q,Z.z,null)}}const ne=T.children;for(let Me=0,Ce=ne.length;Me<Ce;Me++)pe(ne[Me],z,q,Y)}function ge(T,z,q,Y){const ee=T.opaque,ne=T.transmissive,Me=T.transparent;m.setupLightsView(q),I===!0&&ze.setGlobalState(x.clippingPlanes,q),ne.length>0&&$e(ee,ne,z,q),Y&&oe.viewport(S.copy(Y)),ee.length>0&&Ne(ee,z,q),ne.length>0&&Ne(ne,z,q),Me.length>0&&Ne(Me,z,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function $e(T,z,q,Y){const ee=re.isWebGL2;j===null&&(j=new di(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Ln:qn,minFilter:Yn,samples:ee?4:0})),x.getDrawingBufferSize(te),ee?j.setSize(te.x,te.y):j.setSize(is(te.x),is(te.y));const ne=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(G),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Me=x.toneMapping;x.toneMapping=Xn,Ne(T,q,Y),Ge.updateMultisampleRenderTarget(j),Ge.updateRenderTargetMipmap(j);let Ce=!1;for(let He=0,Oe=z.length;He<Oe;He++){const Ie=z[He],Se=Ie.object,ht=Ie.geometry,ft=Ie.material,_t=Ie.group;if(ft.side===pn&&Se.layers.test(Y.layers)){const Lt=ft.side;ft.side=Zt,ft.needsUpdate=!0,we(Se,q,Y,ht,ft,_t),ft.side=Lt,ft.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ge.updateMultisampleRenderTarget(j),Ge.updateRenderTargetMipmap(j)),x.setRenderTarget(ne),x.setClearColor(G,P),x.toneMapping=Me}function Ne(T,z,q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let ee=0,ne=T.length;ee<ne;ee++){const Me=T[ee],Ce=Me.object,He=Me.geometry,Oe=Y===null?Me.material:Y,Ie=Me.group;Ce.layers.test(q.layers)&&we(Ce,z,q,He,Oe,Ie)}}function we(T,z,q,Y,ee,ne){T.onBeforeRender(x,z,q,Y,ee,ne),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(x,z,q,Y,T,ne),ee.transparent===!0&&ee.side===pn&&ee.forceSinglePass===!1?(ee.side=Zt,ee.needsUpdate=!0,x.renderBufferDirect(q,z,Y,ee,T,ne),ee.side=Nn,ee.needsUpdate=!0,x.renderBufferDirect(q,z,Y,ee,T,ne),ee.side=pn):x.renderBufferDirect(q,z,Y,ee,T,ne),T.onAfterRender(x,z,q,Y,ee,ne)}function Le(T,z,q){z.isScene!==!0&&(z=he);const Y=Re.get(T),ee=m.state.lights,ne=m.state.shadowsArray,Me=ee.state.version,Ce=J.getParameters(T,ee.state,ne,z,q),He=J.getProgramCacheKey(Ce);let Oe=Y.programs;Y.environment=T.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(T.isMeshStandardMaterial?Ze:ye).get(T.envMap||Y.environment),Oe===void 0&&(T.addEventListener("dispose",De),Oe=new Map,Y.programs=Oe);let Ie=Oe.get(He);if(Ie!==void 0){if(Y.currentProgram===Ie&&Y.lightsStateVersion===Me)return ie(T,Ce),Ie}else Ce.uniforms=J.getUniforms(T),T.onBuild(q,Ce,x),T.onBeforeCompile(Ce,x),Ie=J.acquireProgram(Ce,He),Oe.set(He,Ie),Y.uniforms=Ce.uniforms;const Se=Y.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=ze.uniform),ie(T,Ce),Y.needsLights=Ve(T),Y.lightsStateVersion=Me,Y.needsLights&&(Se.ambientLightColor.value=ee.state.ambient,Se.lightProbe.value=ee.state.probe,Se.directionalLights.value=ee.state.directional,Se.directionalLightShadows.value=ee.state.directionalShadow,Se.spotLights.value=ee.state.spot,Se.spotLightShadows.value=ee.state.spotShadow,Se.rectAreaLights.value=ee.state.rectArea,Se.ltc_1.value=ee.state.rectAreaLTC1,Se.ltc_2.value=ee.state.rectAreaLTC2,Se.pointLights.value=ee.state.point,Se.pointLightShadows.value=ee.state.pointShadow,Se.hemisphereLights.value=ee.state.hemi,Se.directionalShadowMap.value=ee.state.directionalShadowMap,Se.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Se.spotShadowMap.value=ee.state.spotShadowMap,Se.spotLightMatrix.value=ee.state.spotLightMatrix,Se.spotLightMap.value=ee.state.spotLightMap,Se.pointShadowMap.value=ee.state.pointShadowMap,Se.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ht=Ie.getUniforms(),ft=Zr.seqWithValue(ht.seq,Se);return Y.currentProgram=Ie,Y.uniformsList=ft,Ie}function ie(T,z){const q=Re.get(T);q.outputColorSpace=z.outputColorSpace,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function be(T,z,q,Y,ee){z.isScene!==!0&&(z=he),Ge.resetTextureUnits();const ne=z.fog,Me=Y.isMeshStandardMaterial?z.environment:null,Ce=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ft,He=(Y.isMeshStandardMaterial?Ze:ye).get(Y.envMap||Me),Oe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ie=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Se=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let _t=Xn;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=Lt!==void 0?Lt.length:0,ke=Re.get(Y),$t=m.state.lights;if(I===!0&&(b===!0||T!==M)){const yt=T===M&&Y.id===L;ze.setState(Y,T,yt)}let tt=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==$t.state.version||ke.outputColorSpace!==Ce||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ke.envMap!==He||Y.fog===!0&&ke.fog!==ne||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ze.numPlanes||ke.numIntersection!==ze.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==Ie||ke.morphTargets!==Se||ke.morphNormals!==ht||ke.morphColors!==ft||ke.toneMapping!==_t||re.isWebGL2===!0&&ke.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,ke.__version=Y.version);let Bt=ke.currentProgram;tt===!0&&(Bt=Le(Y,z,ee));let Ot=!1,At=!1,Rt=!1;const vt=Bt.getUniforms(),zt=ke.uniforms;if(oe.useProgram(Bt.program)&&(Ot=!0,At=!0,Rt=!0),Y.id!==L&&(L=Y.id,At=!0),Ot||M!==T){vt.setValue(X,"projectionMatrix",T.projectionMatrix),vt.setValue(X,"viewMatrix",T.matrixWorldInverse);const yt=vt.map.cameraPosition;yt!==void 0&&yt.setValue(X,Z.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&vt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,At=!0,Rt=!0)}if(ee.isSkinnedMesh){vt.setOptional(X,ee,"bindMatrix"),vt.setOptional(X,ee,"bindMatrixInverse");const yt=ee.skeleton;yt&&(re.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),vt.setValue(X,"boneTexture",yt.boneTexture,Ge),vt.setValue(X,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Je=q.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0&&re.isWebGL2===!0)&&je.update(ee,q,Bt),(At||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,vt.setValue(X,"receiveShadow",ee.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zt.envMap.value=He,zt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),At&&(vt.setValue(X,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Ue(zt,Rt),ne&&Y.fog===!0&&fe.refreshFogUniforms(zt,ne),fe.refreshMaterialUniforms(zt,Y,B,$,j),Zr.upload(X,ke.uniformsList,zt,Ge)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Zr.upload(X,ke.uniformsList,zt,Ge),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(X,"center",ee.center),vt.setValue(X,"modelViewMatrix",ee.modelViewMatrix),vt.setValue(X,"normalMatrix",ee.normalMatrix),vt.setValue(X,"modelMatrix",ee.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yt=Y.uniformsGroups;for(let bt=0,xn=yt.length;bt<xn;bt++)if(re.isWebGL2){const un=yt[bt];Ye.update(un,Bt),Ye.bind(un,Bt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bt}function Ue(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Ve(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,z,q){Re.get(T.texture).__webglTexture=z,Re.get(T.depthTexture).__webglTexture=q;const Y=Re.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const q=Re.get(T);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,q=0){D=T,E=z,R=q;let Y=!0,ee=null,ne=!1,Me=!1;if(T){const He=Re.get(T);He.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(X.FRAMEBUFFER,null),Y=!1):He.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):He.__hasExternalTextures&&Ge.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Ie=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[z])?ee=Ie[z][q]:ee=Ie[z],ne=!0):re.isWebGL2&&T.samples>0&&Ge.useMultisampledRTT(T)===!1?ee=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?ee=Ie[q]:ee=Ie,S.copy(T.viewport),C.copy(T.scissor),H=T.scissorTest}else S.copy(W).multiplyScalar(B).floor(),C.copy(A).multiplyScalar(B).floor(),H=F;if(oe.bindFramebuffer(X.FRAMEBUFFER,ee)&&re.drawBuffers&&Y&&oe.drawBuffers(T,ee),oe.viewport(S),oe.scissor(C),oe.setScissorTest(H),ne){const He=Re.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+z,He.__webglTexture,q)}else if(Me){const He=Re.get(T.texture),Oe=z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,He.__webglTexture,q||0,Oe)}L=-1},this.readRenderTargetPixels=function(T,z,q,Y,ee,ne,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){oe.bindFramebuffer(X.FRAMEBUFFER,Ce);try{const He=T.texture,Oe=He.format,Ie=He.type;if(Oe!==nn&&lt.convert(Oe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Se=Ie===Ln&&(de.has("EXT_color_buffer_half_float")||re.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ie!==qn&&lt.convert(Ie)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===sn&&(re.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Y&&q>=0&&q<=T.height-ee&&X.readPixels(z,q,Y,ee,lt.convert(Oe),lt.convert(Ie),ne)}finally{const He=D!==null?Re.get(D).__webglFramebuffer:null;oe.bindFramebuffer(X.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(T,z,q=0){const Y=Math.pow(2,-q),ee=Math.floor(z.image.width*Y),ne=Math.floor(z.image.height*Y);Ge.setTexture2D(z,0),X.copyTexSubImage2D(X.TEXTURE_2D,q,0,0,T.x,T.y,ee,ne),oe.unbindTexture()},this.copyTextureToTexture=function(T,z,q,Y=0){const ee=z.image.width,ne=z.image.height,Me=lt.convert(q.format),Ce=lt.convert(q.type);Ge.setTexture2D(q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment),z.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,T.x,T.y,ee,ne,Me,Ce,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Y,T.x,T.y,Me,Ce,z.image),Y===0&&q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,q,Y,ee=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ne=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,He=lt.convert(Y.format),Oe=lt.convert(Y.type);let Ie;if(Y.isData3DTexture)Ge.setTexture3D(Y,0),Ie=X.TEXTURE_3D;else if(Y.isDataArrayTexture)Ge.setTexture2DArray(Y,0),Ie=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=X.getParameter(X.UNPACK_ROW_LENGTH),ht=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ft=X.getParameter(X.UNPACK_SKIP_PIXELS),_t=X.getParameter(X.UNPACK_SKIP_ROWS),Lt=X.getParameter(X.UNPACK_SKIP_IMAGES),ut=q.isCompressedTexture?q.mipmaps[0]:q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,ut.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ut.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,T.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,T.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?X.texSubImage3D(Ie,ee,z.x,z.y,z.z,ne,Me,Ce,He,Oe,ut.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ie,ee,z.x,z.y,z.z,ne,Me,Ce,He,ut.data)):X.texSubImage3D(Ie,ee,z.x,z.y,z.z,ne,Me,Ce,He,Oe,ut),X.pixelStorei(X.UNPACK_ROW_LENGTH,Se),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ht),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ft),X.pixelStorei(X.UNPACK_SKIP_ROWS,_t),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Lt),ee===0&&Y.generateMipmaps&&X.generateMipmap(Ie),oe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){E=0,R=0,D=null,oe.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===da?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===as?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?ui:Bl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ui?Et:Ft}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Nm extends ec{}Nm.prototype.isWebGL1Renderer=!0;class Dm extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Um{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Js,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new Q;class ya{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zo=new Q,$o=new xt,Jo=new xt,Fm=new Q,Qo=new ot,Ii=new Q,zs=new gn,el=new ot,Vs=new _r;class Bm extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ii.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ii),this.boundingBox.expandByPoint(Ii)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ii.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ii),this.boundingSphere.expandByPoint(Ii)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(i),e.ray.intersectsSphere(zs)!==!1&&(el.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(el),!(this.boundingBox!==null&&Vs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;$o.fromBufferAttribute(i.attributes.skinIndex,e),Jo.fromBufferAttribute(i.attributes.skinWeight,e),Zo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Jo.getComponent(r);if(s!==0){const o=$o.getComponent(r);Qo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Fm.copy(Zo).applyMatrix4(Qo),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class tc extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nc extends Ht{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Ut,u=Ut,h,d){super(null,s,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tl=new ot,Om=new ot;class xa{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:Om;tl.multiplyMatrices(o,t[r]),tl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ol(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nc(t,e,e,nn,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new tc),this.bones.push(s),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class nl extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new ot,il=new ot,kr=[],rl=new Dn,zm=new ot,or=new Kt,lr=new gn;class Vm extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),rl.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(rl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),lr.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ni),il.multiplyMatrices(n,Ni),or.matrixWorld=il,or.raycast(e,kr);for(let s=0,o=kr.length;s<o;s++){const l=kr[s];l.instanceId=r,l.object=this,t.push(l)}kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ic extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sl=new Q,al=new Q,ol=new ot,Hs=new _r,Wr=new gn;class Ma extends Tt{constructor(e=new _n,t=new ic){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)sl.fromBufferAttribute(t,i-1),al.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sl.distanceTo(al);e.setAttribute("lineDistance",new In(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;ol.copy(i).invert(),Hs.copy(e.ray).applyMatrix4(ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new Q,u=new Q,h=new Q,d=new Q,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,s.start),y=Math.min(v.count,s.start+s.count);for(let x=p,_=y-1;x<_;x+=f){const E=v.getX(x),R=v.getX(x+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,R),Hs.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),y=Math.min(m.count,s.start+s.count);for(let x=p,_=y-1;x<_;x+=f){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Hs.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const ll=new Q,cl=new Q;class Hm extends Ma{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ll.fromBufferAttribute(t,i),cl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ll.distanceTo(cl);e.setAttribute("lineDistance",new In(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gm extends Ma{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rc extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hl=new ot,na=new _r,Xr=new gn,qr=new Q;class km extends Tt{constructor(e=new _n,t=new rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;hl.copy(i).invert(),na.copy(e.ray).applyMatrix4(hl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let v=d,g=f;v<g;v++){const m=c.getX(v);qr.fromBufferAttribute(h,m),ul(qr,m,l,i,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let v=d,g=f;v<g;v++)qr.fromBufferAttribute(h,v),ul(qr,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ul(a,e,t,n,i,r,s){const o=na.distanceSqToPoint(a);if(o<t){const l=new Q;na.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Sa extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends Sa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sc extends hn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Yr(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Wm(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Xm(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function dl(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function ac(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class yr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qm extends yr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ao,endingEnd:ao}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case oo:r=e,o=2*t-n;break;case lo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oo:s=e,l=2*n-t;break;case lo:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,p=-d*m+2*d*g-d*v,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,x=(-1-f)*m+(1.5+f)*g+.5*v,_=f*m-f*g;for(let E=0;E!==o;++E)r[E]=p*s[u+E]+y*s[c+E]+x*s[l+E]+_*s[h+E];return r}}class Ym extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=s[c+d]*h+s[l+d]*u;return r}}class jm extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ym(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Xi:t=this.InterpolantFactoryMethodLinear;break;case vs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Xi;case this.InterpolantFactoryMethodSmooth:return vs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&Wm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vs,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let v=0;v!==n;++v){const g=t[h+v];if(g!==t[d+v]||g!==t[f+v]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Xi;class tr extends yn{}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=vr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class oc extends yn{}oc.prototype.ValueTypeName="color";class ji extends yn{}ji.prototype.ValueTypeName="number";class Km extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Kn.slerpFlat(r,0,s,c-o,s,c,l);return r}}class pi extends yn{InterpolantFactoryMethodLinear(e){return new Km(this.times,this.values,this.getValueSize(),e)}}pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=Xi;pi.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends yn{}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=vr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends yn{}Ki.prototype.ValueTypeName="vector";class Zm{constructor(e,t=-1,n,i=Qc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(Jm(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Xm(l);l=dl(l,1,u),c=dl(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new ji(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,v,g){if(f.length!==0){const m=[],p=[];ac(f,m,p,v),m.length!==0&&g.push(new h(d,m,p))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let y=0;y!==d[v].morphTargets.length;++y){const x=d[v];m.push(x.time),p.push(x.morphTarget===g?1:0)}i.push(new ji(".morphTargetInfluence["+g+"]",m,p))}l=f.length*s}else{const f=".bones["+t[h].name+"]";n(Ki,f+".position",d,"pos",i),n(pi,f+".quaternion",d,"rot",i),n(Ki,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $m(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return oc;case"quaternion":return pi;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Jm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$m(a.type);if(a.times===void 0){const t=[],n=[];ac(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Zi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Qm{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],v=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const ev=new Qm;class mi{constructor(e){this.manager=e!==void 0?e:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class tv extends Error{constructor(e,t){super(e),this.response=t}}class Ea extends mi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bn[e]!==void 0){bn[e].push({onLoad:t,onProgress:n,onError:i});return}bn[e]=[],bn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:_})=>{if(x)p.close();else{g+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let R=0,D=u.length;R<D;R++){const L=u[R];L.onProgress&&L.onProgress(E)}p.enqueue(_),y()}})}}});return new Response(m)}else throw new tv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(v=>f.decode(v))}}}).then(c=>{Zi.add(e,c);const u=bn[e];delete bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nv extends mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Zi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=gr("img");function l(){u(),Zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class iv extends mi{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new nc,o=new Ea(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:jt,s.wrapT=c.wrapT!==void 0?c.wrapT:jt,s.magFilter=c.magFilter!==void 0?c.magFilter:Pt,s.minFilter=c.minFilter!==void 0?c.minFilter:Pt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?s.colorSpace=c.colorSpace:c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Yn),c.mipmapCount===1&&(s.minFilter=Pt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,i),s}}class rv extends mi{constructor(e){super(e)}load(e,t,n,i){const r=new Ht,s=new nv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class cs extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gs=new ot,fl=new Q,pl=new Q;class Ta{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),Gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sv extends Ta{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class av extends cs{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new sv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ml=new ot,cr=new Q,ks=new Q;class ov extends Ta{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),ks.copy(n.position),ks.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ks),n.updateMatrixWorld(),i.makeTranslation(-cr.x,-cr.y,-cr.z),ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml)}}class lv extends cs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ov}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cv extends Ta{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lc extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new cv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hv extends cs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ia{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class uv extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Zi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Zi.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class dv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vl(){return(typeof performance>"u"?Date:performance).now()}const wa="\\[\\]\\.:\\/",fv=new RegExp("["+wa+"]","g"),Aa="[^"+wa+"]",pv="[^"+wa.replace("\\.","")+"]",mv=/((?:WC+[\/:])*)/.source.replace("WC",Aa),vv=/(WCOD+)?/.source.replace("WCOD",pv),gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Aa),_v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Aa),yv=new RegExp("^"+mv+vv+gv+_v+"$"),xv=["material","materials","bones","map"];class Mv{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fv,"")}static parseTrackName(e){const t=yv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=Mv;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sv{constructor(e,t,n=0,i=1/0){this.ray=new _r(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ra(e,this,n,t),n.sort(gl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ra(e[i],this,n,t);return n.sort(gl),n}}function gl(a,e){return a.distance-e.distance}function ra(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,s=i.length;r<s;r++)ra(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);class Ev extends iv{constructor(e){super(e),this.type=Ln}parse(e){const s=function(L,M){switch(L){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},u=`
`,h=function(L,M,S){M=M||1024;let H=L.pos,G=-1,P=0,k="",$=String.fromCharCode.apply(null,new Uint16Array(L.subarray(H,H+128)));for(;0>(G=$.indexOf(u))&&P<M&&H<L.byteLength;)k+=$,P+=$.length,H+=128,$+=String.fromCharCode.apply(null,new Uint16Array(L.subarray(H,H+128)));return-1<G?(S!==!1&&(L.pos+=P+G+1),k+$.slice(0,G)):!1},d=function(L){const M=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*FORMAT=(\S+)\s*$/,G=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,$;for((L.pos>=L.byteLength||!(k=h(L)))&&s(1,"no header found"),($=k.match(M))||s(3,"bad initial token"),P.valid|=1,P.programtype=$[1],P.string+=k+`
`;k=h(L),k!==!1;){if(P.string+=k+`
`,k.charAt(0)==="#"){P.comments+=k+`
`;continue}if(($=k.match(S))&&(P.gamma=parseFloat($[1])),($=k.match(C))&&(P.exposure=parseFloat($[1])),($=k.match(H))&&(P.valid|=2,P.format=$[1]),($=k.match(G))&&(P.valid|=4,P.height=parseInt($[1],10),P.width=parseInt($[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||s(3,"missing format specifier"),P.valid&4||s(3,"missing image size specifier"),P},f=function(L,M,S){const C=M;if(C<8||C>32767||L[0]!==2||L[1]!==2||L[2]&128)return new Uint8Array(L);C!==(L[2]<<8|L[3])&&s(3,"wrong scanline width");const H=new Uint8Array(4*M*S);H.length||s(4,"unable to allocate buffer space");let G=0,P=0;const k=4*C,$=new Uint8Array(4),B=new Uint8Array(k);let O=S;for(;O>0&&P<L.byteLength;){P+4>L.byteLength&&s(1),$[0]=L[P++],$[1]=L[P++],$[2]=L[P++],$[3]=L[P++],($[0]!=2||$[1]!=2||($[2]<<8|$[3])!=C)&&s(3,"bad rgbe scanline format");let K=0,W;for(;K<k&&P<L.byteLength;){W=L[P++];const F=W>128;if(F&&(W-=128),(W===0||K+W>k)&&s(3,"bad scanline data"),F){const U=L[P++];for(let I=0;I<W;I++)B[K++]=U}else B.set(L.subarray(P,P+W),K),K+=W,P+=W}const A=C;for(let F=0;F<A;F++){let U=0;H[G]=B[F+U],U+=C,H[G+1]=B[F+U],U+=C,H[G+2]=B[F+U],U+=C,H[G+3]=B[F+U],G+=4}O--}return H},v=function(L,M,S,C){const H=L[M+3],G=Math.pow(2,H-128)/255;S[C+0]=L[M+0]*G,S[C+1]=L[M+1]*G,S[C+2]=L[M+2]*G,S[C+3]=1},g=function(L,M,S,C){const H=L[M+3],G=Math.pow(2,H-128)/255;S[C+0]=Lr.toHalfFloat(Math.min(L[M+0]*G,65504)),S[C+1]=Lr.toHalfFloat(Math.min(L[M+1]*G,65504)),S[C+2]=Lr.toHalfFloat(Math.min(L[M+2]*G,65504)),S[C+3]=Lr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),y=p.width,x=p.height,_=f(m.subarray(m.pos),y,x);let E,R,D;switch(this.type){case sn:D=_.length/4;const L=new Float32Array(D*4);for(let S=0;S<D;S++)v(_,S*4,L,S*4);E=L,R=sn;break;case Ln:D=_.length/4;const M=new Uint16Array(D*4);for(let S=0;S<D;S++)g(_,S*4,M,S*4);E=M,R=Ln;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:x,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(s,o){switch(s.type){case sn:case Ln:s.colorSpace=Ft,s.minFilter=Pt,s.magFilter=Pt,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,o)}return super.load(e,r,n,i)}}function _l(a,e){if(e===eh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===$s||e===Fl){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===$s)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class Tv extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Hv(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ia.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ea(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===cc){try{s[dt.KHR_BINARY_GLTF]=new Gv(e)}catch(h){i&&i(h);return}r=JSON.parse(s[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new tg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case dt.KHR_MATERIALS_UNLIT:s[h]=new bv;break;case dt.KHR_DRACO_MESH_COMPRESSION:s[h]=new kv(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:s[h]=new Wv;break;case dt.KHR_MESH_QUANTIZATION:s[h]=new Xv;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function wv(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Av{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new rt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ft);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lc(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lv(u),c.distance=h;break;case"spot":c=new av(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class bv{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return ai}extendParams(e,t,n){const i=[];e.color=new rt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Ft),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}}class Rv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Cv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(o,o)}return Promise.all(r)}}class Lv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Pv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ft)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Et)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Iv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Nv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(o[0],o[1],o[2],Ft),Promise.all(r)}}class Dv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Uv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(o[0],o[1],o[2],Ft),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Et)),Promise.all(r)}}class Fv{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class Bv{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Ov{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zv{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vv{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Hv{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const v of h){const g=new ot,m=new Q,p=new Kn,y=new Q(1,1,1),x=new Vm(v.geometry,v.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,g.compose(m,p,y));for(const _ in l)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&v.geometry.setAttribute(_,l[_]);Tt.prototype.copy.call(x,v),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const cc="glTF",hr=12,yl={JSON:1313821514,BIN:5130562};class Gv{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-hr,r=new DataView(e,hr);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===yl.JSON){const c=new Uint8Array(e,hr+s,o);this.content=n.decode(c)}else if(l===yl.BIN){const c=hr+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=sa[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=sa[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Vi[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const v=d.attributes[f],g=l[f];g!==void 0&&(v.normalized=g)}h(d)},o,c)})})}}class Wv{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Xv{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class hc extends yr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,v=e*c,g=v-c,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+h;for(let _=0;_!==o;_++){const E=s[g+_+o],R=s[g+_+l]*u,D=s[v+_+o],L=s[v+_]*u;r[_]=y*E+x*R+m*D+p*L}return r}}const qv=new Kn;class Yv extends hc{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return qv.fromArray(r).normalize().toArray(r),r}}const tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xl={9728:Ut,9729:Pt,9984:Zs,9985:Cl,9986:Kr,9987:Yn},Ml={33071:jt,33648:Jr,10497:ki},Ws={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jv={CUBICSPLINE:void 0,LINEAR:Xi,STEP:vr},Xs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Sa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),a.DefaultMaterial}function ni(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zv(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function $v(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jv(a){let e;const t=a.extensions&&a.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qs(t.attributes):e=a.indices+":"+qs(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+qs(a.targets[n]);return e}function qs(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function aa(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qv(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const eg=new ot;class tg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new rv(this.options.manager):this.textureLoader=new uv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ea(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return ni(r,o,i),Hn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ia.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Ws[i.type],o=Vi[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new Yt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=Ws[i.type],c=Vi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(g=new c(o,p*f,i.count*f/u),x=new Um(g,f/u),t.cache.add(y,x)),m=new ya(x,l,d%f/u,v)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),m=new Yt(g,l,v);if(i.sparse!==void 0){const p=Ws.SCALAR,y=Vi[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new y(s[1],x,i.sparse.count*p),R=new c(s[2],_,i.sparse.count*l);o!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized));for(let D=0,L=E.length;D<L;D++){const M=E[D];if(m.setX(M,R[D*l]),l>=2&&m.setY(M,R[D*l+1]),l>=3&&m.setZ(M,R[D*l+2]),l>=4&&m.setW(M,R[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=xl[d.magFilter]||Pt,u.minFilter=xl[d.minFilter]||Yn,u.wrapS=Ml[d.wrapS]||ki,u.wrapT=Ml[d.wrapT]||ki,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const m=new Ht(g);m.needsUpdate=!0,d(m)}),t.load(ia.resolveURL(h,r.path),v,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||Qv(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new rc,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ic,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Sa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){const h=i[dt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new rt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ft),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Et)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=pn);const u=r.alphaMode||Xs.OPAQUE;if(u===Xs.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xs.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==ai&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ct(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&s!==ai&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==ai){const h=r.emissiveFactor;o.emissive=new rt().setRGB(h[0],h[1],h[2],Ft)}return r.emissiveTexture!==void 0&&s!==ai&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),Hn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ni(i,h,r),h})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Sl(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Jv(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Sl(new _n,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?Kv(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,v=u.length;f<v;f++){const g=u[f],m=s[f];let p;const y=c[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Bm(g,y):new Kt(g,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=_l(p.geometry,Fl):m.mode===tn.TRIANGLE_FAN&&(p.geometry=_l(p.geometry,$s));else if(m.mode===tn.LINES)p=new Hm(g,y);else if(m.mode===tn.LINE_STRIP)p=new Ma(g,y);else if(m.mode===tn.LINE_LOOP)p=new Gm(g,y);else if(m.mode===tn.POINTS)p=new km(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&$v(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hn(p,r),m.extensions&&ni(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,v=h.length;f<v;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ni(i,h[0],r),h[0];const d=new oi;r.extensions&&ni(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,v=h.length;f<v;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Ah.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const d=new ot;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xa(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,s=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],v=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,y=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(v),u.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],v=h[2],g=h[3],m=h[4],p=[];for(let y=0,x=d.length;y<x;y++){const _=d[y],E=f[y],R=v[y],D=g[y],L=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=n._createAnimationTracks(_,E,R,D,L);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new Zm(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)s.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,eg)});for(let f=0,v=h.length;f<v;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new tc:c.length>1?u=new oi:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),Hn(u,r),r.extensions&&ni(n,u,r),r.matrix!==void 0){const h=new ot;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new oi;n.name&&(r.name=i.createUniqueName(n.name)),Hn(r,n),n.extensions&&ni(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof Ht)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const s=[],o=e.name?e.name:e.uuid,l=[];Vn[r.path]===Vn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Vn[r.path]){case Vn.weights:c=ji;break;case Vn.rotation:c=pi;break;case Vn.position:case Vn.scale:c=Ki;break;default:switch(n.itemSize){case 1:c=ji;break;case 2:case 3:default:c=Ki;break}break}const u=i.interpolation!==void 0?jv[i.interpolation]:Xi,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new c(l[d]+"."+Vn[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),s.push(v)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=aa(t.constructor),i=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof pi?Yv:hc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ng(a,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new Q(l[0],l[1],l[2]),new Q(c[0],c[1],c[2])),o.normalized){const u=aa(Vi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new Q,l=new Q;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=aa(Vi[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new gn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function Sl(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=sa[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return pt.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Hn(a,e),ng(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zv(a,e.targets,t):a})}function jr(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ig={exports:{}};(function(a,e){(function(t){a.exports=t()})(function(){return function t(n,i,r){function s(c,u){if(!i[c]){if(!n[c]){var h=typeof jr=="function"&&jr;if(!u&&h)return h(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}var d=i[c]={exports:{}};n[c][0].call(d.exports,function(f){var v=n[c][1][f];return s(v||f)},d,d.exports,t,n,i,r)}return i[c].exports}for(var o=typeof jr=="function"&&jr,l=0;l<r.length;l++)s(r[l]);return s}({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var r=t("../math/Vec3");t("../utils/Utils"),n.exports=s;function s(c){c=c||{},this.lowerBound=new r,c.lowerBound&&this.lowerBound.copy(c.lowerBound),this.upperBound=new r,c.upperBound&&this.upperBound.copy(c.upperBound)}var o=new r;s.prototype.setFromPoints=function(c,u,h,d){var f=this.lowerBound,v=this.upperBound,g=h;f.copy(c[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<c.length;m++){var p=c[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return u&&(u.vadd(f,f),u.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},s.prototype.copy=function(c){return this.lowerBound.copy(c.lowerBound),this.upperBound.copy(c.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(c){var u=c.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var h=c.upperBound.x;this.upperBound.x<h&&(this.upperBound.x=h);var u=c.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var h=c.upperBound.y;this.upperBound.y<h&&(this.upperBound.y=h);var u=c.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var h=c.upperBound.z;this.upperBound.z<h&&(this.upperBound.z=h)},s.prototype.overlaps=function(c){var u=this.lowerBound,h=this.upperBound,d=c.lowerBound,f=c.upperBound;return(d.x<=h.x&&h.x<=f.x||u.x<=f.x&&f.x<=h.x)&&(d.y<=h.y&&h.y<=f.y||u.y<=f.y&&f.y<=h.y)&&(d.z<=h.z&&h.z<=f.z||u.z<=f.z&&f.z<=h.z)},s.prototype.contains=function(c){var u=this.lowerBound,h=this.upperBound,d=c.lowerBound,f=c.upperBound;return u.x<=d.x&&h.x>=f.x&&u.y<=d.y&&h.y>=f.y&&u.z<=d.z&&h.z>=f.z},s.prototype.getCorners=function(c,u,h,d,f,v,g,m){var p=this.lowerBound,y=this.upperBound;c.copy(p),u.set(y.x,p.y,p.z),h.set(y.x,y.y,p.z),d.set(p.x,y.y,y.z),f.set(y.x,p.y,p.z),v.set(p.x,y.y,p.z),g.set(p.x,p.y,y.z),m.copy(y)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(c,u){var h=l,d=h[0],f=h[1],v=h[2],g=h[3],m=h[4],p=h[5],y=h[6],x=h[7];this.getCorners(d,f,v,g,m,p,y,x);for(var _=0;_!==8;_++){var E=h[_];c.pointToLocal(E,E)}return u.setFromPoints(h)},s.prototype.toWorldFrame=function(c,u){var h=l,d=h[0],f=h[1],v=h[2],g=h[3],m=h[4],p=h[5],y=h[6],x=h[7];this.getCorners(d,f,v,g,m,p,y,x);for(var _=0;_!==8;_++){var E=h[_];c.pointToWorld(E,E)}return u.setFromPoints(h)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var l=o;o=s,s=l}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,l){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}this.matrix[(s*(s+1)>>1)+o-1]=l?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(t,n,i){var r=t("../objects/Body"),s=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var c=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&c||g.sleepState===r.SLEEPING)&&(m.type&c||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,y){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,y):this.doBoundingSphereBroadphase(g,m,p,y)};var u=new s;new s,new o,new s,l.prototype.doBoundingSphereBroadphase=function(g,m,p,y){var x=u;m.position.vsub(g.position,x);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),E=x.norm2();E<_&&(p.push(g),y.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,y){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),y.push(m))};var h={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=h,y=d,x=f,_=g.length,E=0;E!==_;E++)y[E]=g[E],x[E]=m[E];g.length=0,m.length=0;for(var E=0;E!==_;E++){var R=y[E].id,D=x[E].id,L=R<D?R+","+D:D+","+R;p[L]=E,p.keys.push(L)}for(var E=0;E!==p.keys.length;E++){var L=p.keys.pop(),M=p[L];g.push(y[M]),m.push(x[M]),delete p[L]}},l.prototype.setWorld=function(g){};var v=new s;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=l;var r=t("./Broadphase"),s=t("../math/Vec3"),o=t("../shapes/Shape");function l(u,h,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=h||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var c=new s;new s,l.prototype.collisionPairs=function(u,h,d){var f=u.numObjects(),v=u.bodies,se=this.aabbMax,j=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,y=m*p,x=p,_=1,E=se.x,R=se.y,D=se.z,L=j.x,M=j.y,S=j.z,C=g/(E-L),H=m/(R-M),G=p/(D-S),P=(E-L)/g,k=(R-M)/m,$=(D-S)/p,B=Math.sqrt(P*P+k*k+$*$)*.5,O=o.types,K=O.SPHERE,W=O.PLANE;O.BOX,O.COMPOUND,O.CONVEXPOLYHEDRON;for(var A=this.bins,F=this.binLengths,U=this.bins.length,I=0;I!==U;I++)F[I]=0;var b=Math.ceil,j=Math.min,se=Math.max;function te(Te,Be,je,nt,_e,lt,Ke){var Ye=(Te-L)*C|0,Xe=(Be-M)*H|0,V=(je-S)*G|0,Ee=b((nt-L)*C),xe=b((_e-M)*H),Pe=b((lt-S)*G);Ye<0?Ye=0:Ye>=g&&(Ye=g-1),Xe<0?Xe=0:Xe>=m&&(Xe=m-1),V<0?V=0:V>=p&&(V=p-1),Ee<0?Ee=0:Ee>=g&&(Ee=g-1),xe<0?xe=0:xe>=m&&(xe=m-1),Pe<0?Pe=0:Pe>=p&&(Pe=p-1),Ye*=y,Xe*=x,V*=_,Ee*=y,xe*=x,Pe*=_;for(var De=Ye;De<=Ee;De+=y)for(var ve=Xe;ve<=xe;ve+=x)for(var We=V;We<=Pe;We+=_){var Qe=De+ve+We;A[Qe][F[Qe]++]=Ke}}for(var I=0;I!==f;I++){var Z=v[I],he=Z.shape;switch(he.type){case K:var le=Z.position.x,X=Z.position.y,Ae=Z.position.z,de=he.radius;te(le-de,X-de,Ae-de,le+de,X+de,Ae+de,Z);break;case W:he.worldNormalNeedsUpdate&&he.computeWorldNormal(Z.quaternion);var re=he.worldNormal,oe=L+P*.5-Z.position.x,qe=M+k*.5-Z.position.y,Re=S+$*.5-Z.position.z,Ge=c;Ge.set(oe,qe,Re);for(var ye=0,Ze=0;ye!==g;ye++,Ze+=y,Ge.y=qe,Ge.x+=P)for(var et=0,N=0;et!==m;et++,N+=x,Ge.z=Re,Ge.y+=k)for(var w=0,J=0;w!==p;w++,J+=_,Ge.z+=$)if(Ge.dot(re)<B){var fe=Ze+N+J;A[fe][F[fe]++]=Z}break;default:Z.aabbNeedsUpdate&&Z.computeAABB(),te(Z.aabb.lowerBound.x,Z.aabb.lowerBound.y,Z.aabb.lowerBound.z,Z.aabb.upperBound.x,Z.aabb.upperBound.y,Z.aabb.upperBound.z,Z);break}}for(var I=0;I!==U;I++){var ue=F[I];if(ue>1)for(var me=A[I],ye=0;ye!==ue;ye++)for(var Z=me[ye],et=0;et!==ye;et++){var ze=me[et];this.needBroadphaseCollision(Z,ze)&&this.intersectionTest(Z,ze,h,d)}}this.makePairsUnique(h,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=o;var r=t("./Broadphase"),s=t("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,c,u){var h=l.bodies,d=h.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=h[f],m=h[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,c,u)},new s,o.prototype.aabbQuery=function(l,c,u){u=u||[];for(var h=0;h<l.bodies.length;h++){var d=l.bodies[h];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(c)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var l=o;o=s,s=l}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,l){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}l?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(t,n,i){n.exports=h;var r=t("../math/Vec3"),s=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),c=t("../shapes/Shape"),u=t("../collision/AABB");function h(U,I){this.from=U?U.clone():new r,this.to=I?I.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=h.ANY,this.result=new l,this.hasHit=!1,this.callback=function(b){}}h.prototype.constructor=h,h.CLOSEST=1,h.ANY=2,h.ALL=4;var d=new u,f=[];h.prototype.intersectWorld=function(U,I){return this.mode=I.mode||h.ANY,this.result=I.result||new l,this.skipBackfaces=!!I.skipBackfaces,this.collisionFilterMask=typeof I.collisionFilterMask<"u"?I.collisionFilterMask:-1,this.collisionFilterGroup=typeof I.collisionFilterGroup<"u"?I.collisionFilterGroup:-1,I.from&&this.from.copy(I.from),I.to&&this.to.copy(I.to),this.callback=I.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,U.broadphase.aabbQuery(U,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;h.pointInTriangle=m;function m(U,I,b,j){j.vsub(I,W),b.vsub(I,v),U.vsub(I,g);var se=W.dot(W),te=W.dot(v),Z=W.dot(g),he=v.dot(v),le=v.dot(g),X,Ae;return(X=he*Z-te*le)>=0&&(Ae=se*le-te*Z)>=0&&X+Ae<se*he-te*te}var p=new r,y=new s;h.prototype.intersectBody=function(U,I){I&&(this.result=I,this._updateDirection());var b=this.checkCollisionResponse;if(!(b&&!U.collisionResponse)&&!(!(this.collisionFilterGroup&U.collisionFilterMask)||!(U.collisionFilterGroup&this.collisionFilterMask)))for(var j=p,se=y,te=0,Z=U.shapes.length;te<Z;te++){var he=U.shapes[te];if(!(b&&!he.collisionResponse)&&(U.quaternion.mult(U.shapeOrientations[te],se),U.quaternion.vmult(U.shapeOffsets[te],j),j.vadd(U.position,j),this.intersectShape(he,se,j,U),this.result._shouldStop))break}},h.prototype.intersectBodies=function(U,I){I&&(this.result=I,this._updateDirection());for(var b=0,j=U.length;!this.result._shouldStop&&b<j;b++)this.intersectBody(U[b])},h.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},h.prototype.intersectShape=function(U,I,b,j){var se=this.from,te=F(se,this._direction,b);if(!(te>U.boundingSphereRadius)){var Z=this[U.type];Z&&Z.call(this,U,I,b,j)}},new r,new r;var x=new r,_=new r,E=new r,R=new r;new r,new l,h.prototype.intersectBox=function(U,I,b,j){return this.intersectConvex(U.convexPolyhedronRepresentation,I,b,j)},h.prototype[c.types.BOX]=h.prototype.intersectBox,h.prototype.intersectPlane=function(U,I,b,j){var se=this.from,te=this.to,Z=this._direction,he=new r(0,0,1);I.vmult(he,he);var le=new r;se.vsub(b,le);var X=le.dot(he);te.vsub(b,le);var Ae=le.dot(he);if(!(X*Ae>0)&&!(se.distanceTo(te)<X)){var de=he.dot(Z);if(!(Math.abs(de)<this.precision)){var re=new r,oe=new r,qe=new r;se.vsub(b,re);var Re=-he.dot(re)/de;Z.scale(Re,oe),se.vadd(oe,qe),this.reportIntersection(he,qe,U,j,-1)}}},h.prototype[c.types.PLANE]=h.prototype.intersectPlane,h.prototype.getAABB=function(U){var I=this.to,b=this.from;U.lowerBound.x=Math.min(I.x,b.x),U.lowerBound.y=Math.min(I.y,b.y),U.lowerBound.z=Math.min(I.z,b.z),U.upperBound.x=Math.max(I.x,b.x),U.upperBound.y=Math.max(I.y,b.y),U.upperBound.z=Math.max(I.z,b.z)};var D={faceList:[0]};h.prototype.intersectHeightfield=function(U,I,b,j){U.data,U.elementSize;var se=new r,te=new h(this.from,this.to);o.pointToLocalFrame(b,I,te.from,te.from),o.pointToLocalFrame(b,I,te.to,te.to);var Z=[],he=null,le=null,X=null,Ae=null,de=U.getIndexOfPosition(te.from.x,te.from.y,Z,!1);if(de&&(he=Z[0],le=Z[1],X=Z[0],Ae=Z[1]),de=U.getIndexOfPosition(te.to.x,te.to.y,Z,!1),de&&((he===null||Z[0]<he)&&(he=Z[0]),(X===null||Z[0]>X)&&(X=Z[0]),(le===null||Z[1]<le)&&(le=Z[1]),(Ae===null||Z[1]>Ae)&&(Ae=Z[1])),he!==null){var re=[];U.getRectMinMax(he,le,X,Ae,re),re[0],re[1];for(var oe=he;oe<=X;oe++)for(var qe=le;qe<=Ae;qe++){if(this.result._shouldStop||(U.getConvexTrianglePillar(oe,qe,!1),o.pointToWorldFrame(b,I,U.pillarOffset,se),this.intersectConvex(U.pillarConvex,I,se,j,D),this.result._shouldStop))return;U.getConvexTrianglePillar(oe,qe,!0),o.pointToWorldFrame(b,I,U.pillarOffset,se),this.intersectConvex(U.pillarConvex,I,se,j,D)}}},h.prototype[c.types.HEIGHTFIELD]=h.prototype.intersectHeightfield;var L=new r,M=new r;h.prototype.intersectSphere=function(U,I,b,j){var se=this.from,te=this.to,Z=U.radius,he=Math.pow(te.x-se.x,2)+Math.pow(te.y-se.y,2)+Math.pow(te.z-se.z,2),le=2*((te.x-se.x)*(se.x-b.x)+(te.y-se.y)*(se.y-b.y)+(te.z-se.z)*(se.z-b.z)),X=Math.pow(se.x-b.x,2)+Math.pow(se.y-b.y,2)+Math.pow(se.z-b.z,2)-Math.pow(Z,2),Ae=Math.pow(le,2)-4*he*X,de=L,re=M;if(!(Ae<0))if(Ae===0)se.lerp(te,Ae,de),de.vsub(b,re),re.normalize(),this.reportIntersection(re,de,U,j,-1);else{var oe=(-le-Math.sqrt(Ae))/(2*he),qe=(-le+Math.sqrt(Ae))/(2*he);if(oe>=0&&oe<=1&&(se.lerp(te,oe,de),de.vsub(b,re),re.normalize(),this.reportIntersection(re,de,U,j,-1)),this.result._shouldStop)return;qe>=0&&qe<=1&&(se.lerp(te,qe,de),de.vsub(b,re),re.normalize(),this.reportIntersection(re,de,U,j,-1))}},h.prototype[c.types.SPHERE]=h.prototype.intersectSphere;var S=new r;new r,new r;var C=new r;h.prototype.intersectConvex=function(I,b,j,se,te){for(var Z=S,he=C,le=te&&te.faceList||null,X=I.faces,Ae=I.vertices,de=I.faceNormals,re=this._direction,oe=this.from,qe=this.to,Re=oe.distanceTo(qe),Ge=le?le.length:X.length,ye=this.result,Ze=0;!ye._shouldStop&&Ze<Ge;Ze++){var et=le?le[Ze]:Ze,N=X[et],w=de[et],J=b,fe=j;he.copy(Ae[N[0]]),J.vmult(he,he),he.vadd(fe,he),he.vsub(oe,he),J.vmult(w,Z);var ue=re.dot(Z);if(!(Math.abs(ue)<this.precision)){var me=Z.dot(he)/ue;if(!(me<0)){re.mult(me,x),x.vadd(oe,x),_.copy(Ae[N[0]]),J.vmult(_,_),fe.vadd(_,_);for(var ze=1;!ye._shouldStop&&ze<N.length-1;ze++){E.copy(Ae[N[ze]]),R.copy(Ae[N[ze+1]]),J.vmult(E,E),J.vmult(R,R),fe.vadd(E,E),fe.vadd(R,R);var Te=x.distanceTo(oe);!(m(x,_,E,R)||m(x,E,_,R))||Te>Re||this.reportIntersection(Z,x,I,se,et)}}}}},h.prototype[c.types.CONVEXPOLYHEDRON]=h.prototype.intersectConvex;var H=new r,G=new r,P=new r,k=new r,$=new r,B=new r;new u;var O=[],K=new o;h.prototype.intersectTrimesh=function(I,b,j,se,te){var Z=H,he=O,le=K,X=C,Ae=G,de=P,re=k,oe=B,qe=$;te&&te.faceList;var Re=I.indices;I.vertices,I.faceNormals;var Ge=this.from,ye=this.to,Ze=this._direction;le.position.copy(j),le.quaternion.copy(b),o.vectorToLocalFrame(j,b,Ze,Ae),o.pointToLocalFrame(j,b,Ge,de),o.pointToLocalFrame(j,b,ye,re);var et=de.distanceSquared(re);I.tree.rayQuery(this,le,he);for(var N=0,w=he.length;!this.result._shouldStop&&N!==w;N++){var J=he[N];I.getNormal(J,Z),I.getVertex(Re[J*3],_),_.vsub(de,X);var fe=Ae.dot(Z),ue=Z.dot(X)/fe;if(!(ue<0)){Ae.scale(ue,x),x.vadd(de,x),I.getVertex(Re[J*3+1],E),I.getVertex(Re[J*3+2],R);var me=x.distanceSquared(de);!(m(x,E,_,R)||m(x,_,E,R))||me>et||(o.vectorToWorldFrame(b,Z,qe),o.pointToWorldFrame(j,b,x,oe),this.reportIntersection(qe,oe,I,se,J))}}he.length=0},h.prototype[c.types.TRIMESH]=h.prototype.intersectTrimesh,h.prototype.reportIntersection=function(U,I,b,j,se){var te=this.from,Z=this.to,he=te.distanceTo(I),le=this.result;if(!(this.skipBackfaces&&U.dot(this._direction)>0))switch(le.hitFaceIndex=typeof se<"u"?se:-1,this.mode){case h.ALL:this.hasHit=!0,le.set(te,Z,U,I,b,j,he),le.hasHit=!0,this.callback(le);break;case h.CLOSEST:(he<le.distance||!le.hasHit)&&(this.hasHit=!0,le.hasHit=!0,le.set(te,Z,U,I,b,j,he));break;case h.ANY:this.hasHit=!0,le.hasHit=!0,le.set(te,Z,U,I,b,j,he),le._shouldStop=!0;break}};var W=new r,A=new r;function F(U,I,b){b.vsub(U,W);var j=W.dot(I);I.mult(j,A),A.vadd(U,A);var se=b.distanceTo(A);return se}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var r=t("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,l,c,u,h,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(c),this.hitPointWorld.copy(u),this.shape=h,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var r=t("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(c){l.push(c.body)},this._removeBodyHandler=function(c){var u=l.indexOf(c.body);u!==-1&&l.splice(u,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var l=1,c=o.length;l<c;l++){for(var u=o[l],h=l-1;h>=0&&!(o[h].aabb.lowerBound.x<=u.aabb.lowerBound.x);h--)o[h+1]=o[h];o[h+1]=u}return o},s.insertionSortY=function(o){for(var l=1,c=o.length;l<c;l++){for(var u=o[l],h=l-1;h>=0&&!(o[h].aabb.lowerBound.y<=u.aabb.lowerBound.y);h--)o[h+1]=o[h];o[h+1]=u}return o},s.insertionSortZ=function(o){for(var l=1,c=o.length;l<c;l++){for(var u=o[l],h=l-1;h>=0&&!(o[h].aabb.lowerBound.z<=u.aabb.lowerBound.z);h--)o[h+1]=o[h];o[h+1]=u}return o},s.prototype.collisionPairs=function(o,l,c){var u=this.axisList,h=u.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==h;f++){var g=u[f];for(v=f+1;v<h;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,c)}}}},s.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,c=o.length,u=0;u!==c;u++){var h=o[u];h.aabbNeedsUpdate&&h.computeAABB()}l===0?s.insertionSortX(o):l===1?s.insertionSortY(o):l===2&&s.insertionSortZ(o)},s.checkBounds=function(o,l,c){var u,h;c===0?(u=o.position.x,h=l.position.x):c===1?(u=o.position.y,h=l.position.y):c===2&&(u=o.position.z,h=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,v=u+d,g=h-f;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,l=0,c=0,u=0,h=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],y=p.position.x;o+=y,l+=y*y;var x=p.position.y;c+=x,u+=x*x;var _=p.position.z;h+=_,d+=_*_}var E=l-o*o*g,R=u-c*c*g,D=d-h*h*g;E>R?E>D?this.axisIndex=0:this.axisIndex=2:R>D?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,l,c){c=c||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,h="x";u===1&&(h="y"),u===2&&(h="z");var d=this.axisList;l.lowerBound[h],l.upperBound[h];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&c.push(v)}return c}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=c,t("./Constraint");var r=t("./PointToPointConstraint"),s=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function c(u,h,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,u,v,h,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new s(u,h,d),p=this.twistEquation=new o(u,h,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}c.prototype=new r,c.constructor=c,new l,new l,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),h.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),h.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=s;var r=t("../utils/Utils");function s(o,l,c){c=r.defaults(c,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=c.collideConnected,c.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=o;var r=t("./Constraint"),s=t("../equations/ContactEquation");function o(l,c,u,h){r.call(this,l,c),typeof u>"u"&&(u=l.position.distanceTo(c.position)),typeof h>"u"&&(h=1e6),this.distance=u;var d=this.distanceEquation=new s(l,c);this.equations.push(d),d.minForce=-h,d.maxForce=h}o.prototype=new r,o.prototype.update=function(){var l=this.bodyA,c=this.bodyB,u=this.distanceEquation,h=this.distance*.5,d=u.ni;c.position.vsub(l.position,d),d.normalize(),d.mult(h,u.ri),d.mult(-h,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=c,t("./Constraint");var r=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function c(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,d,m,f,p,g);var y=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);y.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);x.normalize();var _=this.rotationalEquation1=new s(d,f,v),E=this.rotationalEquation2=new s(d,f,v),R=this.motorEquation=new o(d,f,g);R.enabled=!1,this.equations.push(_,E,R)}c.prototype=new r,c.constructor=c,c.prototype.enableMotor=function(){this.motorEquation.enabled=!0},c.prototype.disableMotor=function(){this.motorEquation.enabled=!1},c.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},c.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,h=new l;c.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=u,y=h,x=this.axisA,_=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,p),f.quaternion.vmult(_,y),p.tangents(g.axisA,m.axisA),g.axisB.copy(y),m.axisB.copy(y),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=l,t("./Constraint");var r=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function l(c,u,h){h=h||{};var d=typeof h.maxForce<"u"?h.maxForce:1e6,f=new o,v=new o,g=new o;c.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),c.pointToLocalFrame(g,f),r.call(this,c,f,u,v,d);var m=this.rotationalEquation1=new s(c,u,h),p=this.rotationalEquation2=new s(c,u,h),y=this.rotationalEquation3=new s(c,u,h);this.equations.push(m,p,y)}l.prototype=new r,l.constructor=l,new o,new o,l.prototype.update=function(){var c=this.bodyA,u=this.bodyB;this.motorEquation;var h=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),c.vectorToWorldFrame(o.UNIT_X,h.axisA),u.vectorToWorldFrame(o.UNIT_Y,h.axisB),c.vectorToWorldFrame(o.UNIT_Y,d.axisA),u.vectorToWorldFrame(o.UNIT_Z,d.axisB),c.vectorToWorldFrame(o.UNIT_Z,f.axisA),u.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=l;var r=t("./Constraint"),s=t("../equations/ContactEquation"),o=t("../math/Vec3");function l(c,u,h,d,f){r.call(this,c,h),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new s(c,h),g=this.equationY=new s(c,h),m=this.equationZ=new s(c,h);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.equationX,d=this.equationY,f=this.equationZ;c.quaternion.vmult(this.pivotA,h.ri),u.quaternion.vmult(this.pivotB,h.rj),d.ri.copy(h.ri),d.rj.copy(h.rj),f.ri.copy(h.ri),f.rj.copy(h.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,h,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,h,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new s,o.prototype.constructor=o;var l=new r,c=new r;o.prototype.computeB=function(u){var h=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=c,p=this.jacobianElementA,y=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),y.rotational.copy(g);var x=Math.cos(this.angle)-f.dot(v),_=this.computeGW(),E=this.computeGiMf(),R=-x*h-_*d-u*E;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=o;var r=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(m,p,y){y=typeof y<"u"?y:1e6,r.call(this,m,p,0,y),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var l=new s,c=new s,u=new s;o.prototype.computeB=function(m){var p=this.a,y=this.b,x=this.bi,_=this.bj,E=this.ri,R=this.rj,D=l,L=c,M=x.velocity,S=x.angularVelocity;x.force,x.torque;var C=_.velocity,H=_.angularVelocity;_.force,_.torque;var G=u,P=this.jacobianElementA,k=this.jacobianElementB,$=this.ni;E.cross($,D),R.cross($,L),$.negate(P.spatial),D.negate(P.rotational),k.spatial.copy($),k.rotational.copy(L),G.copy(_.position),G.vadd(R,G),G.vsub(x.position,G),G.vsub(E,G);var B=$.dot(G),O=this.restitution+1,K=O*C.dot($)-O*M.dot($)+H.dot(L)-S.dot(D),W=this.computeGiMf(),A=-B*p-K*y-m*W;return A};var h=new s,d=new s,f=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=h,p=d,y=f,x=v,_=g;return this.bi.position.vadd(this.ri,y),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(y,m),this.bj.getVelocityAtWorldPoint(x,p),m.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=o;var r=t("../math/JacobianElement"),s=t("../math/Vec3");function o(g,m,p,y){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof y>"u"?1e6:y,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var y=m,x=g,_=p;this.a=4/(_*(1+4*y)),this.b=4*y/(1+4*y),this.eps=4/(_*_*x*(1+4*y))},o.prototype.computeB=function(g,m,p){var y=this.computeGW(),x=this.computeGq(),_=this.computeGiMf();return-x*g-y*m-_*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,x=p.position,_=y.position;return g.spatial.dot(x)+m.spatial.dot(_)};var l=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,x=p.velocity,_=y.velocity,E=p.angularVelocity||l,R=y.angularVelocity||l;return g.multiplyVectors(x,E)+m.multiplyVectors(_,R)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,x=p.vlambda,_=y.vlambda,E=p.wlambda||l,R=y.wlambda||l;return g.multiplyVectors(x,E)+m.multiplyVectors(_,R)};var c=new s,u=new s,h=new s,d=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,x=p.force,_=p.torque,E=y.force,R=y.torque,D=p.invMassSolve,L=y.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,h):h.set(0,0,0),y.invInertiaWorldSolve?y.invInertiaWorldSolve.vmult(R,d):d.set(0,0,0),x.mult(D,c),E.mult(L,u),g.multiplyVectors(c,h)+m.multiplyVectors(u,d)};var f=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,x=p.invMassSolve,_=y.invMassSolve,E=p.invInertiaWorldSolve,R=y.invInertiaWorldSolve,D=x+_;return E&&(E.vmult(g.rotational,f),D+=f.dot(g.rotational)),R&&(R.vmult(m.rotational,f),D+=f.dot(m.rotational)),D};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,y=this.bi,x=this.bj,_=v;m.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),p.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=o;var r=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(u,h,d){r.call(this,u,h,-d,d),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var l=new s,c=new s;o.prototype.computeB=function(u){this.a;var h=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=c,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,y=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),y.spatial.copy(m),y.rotational.copy(g);var x=this.computeGW(),_=this.computeGiMf(),E=-x*h-u*_;return E}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,h,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,h,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var l=new r,c=new r;o.prototype.computeB=function(u){var h=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=c,p=this.jacobianElementA,y=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),y.rotational.copy(g);var x=Math.cos(this.maxAngle)-f.dot(v),_=this.computeGW(),E=this.computeGiMf(),R=-x*h-_*d-u*E;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(l,c,u){u=typeof u<"u"?u:1e6,s.call(this,l,c,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var c=this.b;this.bi,this.bj;var u=this.axisA,h=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),h.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*c-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var r=t("../utils/Utils");n.exports=s;function s(o,l,c){c=r.defaults(c,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,l],this.friction=c.friction,this.restitution=c.restitution,this.contactEquationStiffness=c.contactEquationStiffness,this.contactEquationRelaxation=c.contactEquationRelaxation,this.frictionEquationStiffness=c.frictionEquationStiffness,this.frictionEquationRelaxation=c.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(t,n,i){n.exports=s;var r=t("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=s;var r=t("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},s.prototype.getTrace=function(l){var l=l||new r,c=this.elements;l.x=c[0],l.y=c[4],l.z=c[8]},s.prototype.vmult=function(o,l){l=l||new r;var c=this.elements,u=o.x,h=o.y,d=o.z;return l.x=c[0]*u+c[1]*h+c[2]*d,l.y=c[3]*u+c[4]*h+c[5]*d,l.z=c[6]*u+c[7]*h+c[8]*d,l},s.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},s.prototype.mmult=function(o,l){for(var c=l||new s,u=0;u<3;u++)for(var h=0;h<3;h++){for(var d=0,f=0;f<3;f++)d+=o.elements[u+f*3]*this.elements[f+h*3];c.elements[u+h*3]=d}return c},s.prototype.scale=function(o,l){l=l||new s;for(var c=this.elements,u=l.elements,h=0;h!==3;h++)u[3*h+0]=o.x*c[3*h+0],u[3*h+1]=o.y*c[3*h+1],u[3*h+2]=o.z*c[3*h+2];return l},s.prototype.solve=function(o,l){l=l||new r;for(var c=3,u=4,h=[],d=0;d<c*u;d++)h.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)h[d+u*f]=this.elements[d+3*f];h[3+4*0]=o.x,h[3+4*1]=o.y,h[3+4*2]=o.z;var v=3,g=v,m,p=4,y;do{if(d=g-v,h[d+u*d]===0){for(f=d+1;f<g;f++)if(h[d+u*f]!==0){m=p;do y=p-m,h[y+u*d]+=h[y+u*f];while(--m);break}}if(h[d+u*d]!==0)for(f=d+1;f<g;f++){var x=h[d+u*f]/h[d+u*d];m=p;do y=p-m,h[y+u*f]=y<=d?0:h[y+u*f]-h[y+u*d]*x;while(--m)}}while(--v);if(l.z=h[2*u+3]/h[2*u+2],l.y=(h[1*u+3]-h[1*u+2]*l.z)/h[1*u+1],l.x=(h[0*u+3]-h[0*u+2]*l.z-h[0*u+1]*l.y)/h[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(o,l,c){if(c===void 0)return this.elements[l+3*o];this.elements[l+3*o]=c},s.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},s.prototype.toString=function(){for(var o="",l=",",c=0;c<9;c++)o+=this.elements[c]+l;return o},s.prototype.reverse=function(o){o=o||new s;for(var l=3,c=6,u=[],h=0;h<l*c;h++)u.push(0);var h,d;for(h=0;h<3;h++)for(d=0;d<3;d++)u[h+c*d]=this.elements[h+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,v=f,g,m=c,p;do{if(h=v-f,u[h+c*h]===0){for(d=h+1;d<v;d++)if(u[h+c*d]!==0){g=m;do p=m-g,u[p+c*h]+=u[p+c*d];while(--g);break}}if(u[h+c*h]!==0)for(d=h+1;d<v;d++){var y=u[h+c*d]/u[h+c*h];g=m;do p=m-g,u[p+c*d]=p<=h?0:u[p+c*d]-u[p+c*h]*y;while(--g)}}while(--f);h=2;do{d=h-1;do{var y=u[h+c*d]/u[h+c*h];g=c;do p=c-g,u[p+c*d]=u[p+c*d]-u[p+c*h]*y;while(--g)}while(d--)}while(--h);h=2;do{var y=1/u[h+c*h];g=c;do p=c-g,u[p+c*h]=u[p+c*h]*y;while(--g)}while(h--);h=2;do{d=2;do{if(p=u[l+d+c*h],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(h,d,p)}while(d--)}while(h--);return o},s.prototype.setRotationFromQuaternion=function(o){var l=o.x,c=o.y,u=o.z,h=o.w,d=l+l,f=c+c,v=u+u,g=l*d,m=l*f,p=l*v,y=c*f,x=c*v,_=u*v,E=h*d,R=h*f,D=h*v,L=this.elements;return L[3*0+0]=1-(y+_),L[3*0+1]=m-D,L[3*0+2]=p+R,L[3*1+0]=m+D,L[3*1+1]=1-(g+_),L[3*1+2]=x-E,L[3*2+0]=p-R,L[3*2+1]=x+E,L[3*2+2]=1-(g+y),this},s.prototype.transpose=function(o){o=o||new s;for(var l=o.elements,c=this.elements,u=0;u!==3;u++)for(var h=0;h!==3;h++)l[3*u+h]=c[3*h+u];return o}},{"./Vec3":30}],28:[function(t,n,i){n.exports=s;var r=t("./Vec3");function s(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new r,l=new r;s.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var c=new r,u=new r,h=new r;s.prototype.mult=function(d,f){f=f||new s;var v=this.w,g=c,m=u,p=h;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},s.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new s,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,y=this.y,x=this.z,_=this.w,E=_*v+y*m-x*g,R=_*g+x*v-p*m,D=_*m+p*g-y*v,L=-p*v-y*g-x*m;return f.x=E*_+L*-p+R*-x-D*-y,f.y=R*_+L*-y+D*-p-E*-x,f.z=D*_+L*-x+E*-y-R*-p,f},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,y=this.y,x=this.z,_=this.w;switch(f){case"YZX":var E=p*y+x*_;if(E>.499&&(v=2*Math.atan2(p,_),g=Math.PI/2,m=0),E<-.499&&(v=-2*Math.atan2(p,_),g=-Math.PI/2,m=0),isNaN(v)){var R=p*p,D=y*y,L=x*x;v=Math.atan2(2*y*_-2*p*x,1-2*D-2*L),g=Math.asin(2*E),m=Math.atan2(2*p*_-2*y*x,1-2*R-2*L)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},s.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),y=Math.cos(v/2),x=Math.sin(d/2),_=Math.sin(f/2),E=Math.sin(v/2);return g==="XYZ"?(this.x=x*p*y+m*_*E,this.y=m*_*y-x*p*E,this.z=m*p*E+x*_*y,this.w=m*p*y-x*_*E):g==="YXZ"?(this.x=x*p*y+m*_*E,this.y=m*_*y-x*p*E,this.z=m*p*E-x*_*y,this.w=m*p*y+x*_*E):g==="ZXY"?(this.x=x*p*y-m*_*E,this.y=m*_*y+x*p*E,this.z=m*p*E+x*_*y,this.w=m*p*y-x*_*E):g==="ZYX"?(this.x=x*p*y-m*_*E,this.y=m*_*y+x*p*E,this.z=m*p*E-x*_*y,this.w=m*p*y+x*_*E):g==="YZX"?(this.x=x*p*y+m*_*E,this.y=m*_*y+x*p*E,this.z=m*p*E-x*_*y,this.w=m*p*y-x*_*E):g==="XZY"&&(this.x=x*p*y-m*_*E,this.y=m*_*y-x*p*E,this.z=m*p*E+x*_*y,this.w=m*p*y+x*_*E),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var r=t("./Vec3"),s=t("./Quaternion");n.exports=o;function o(c){c=c||{},this.position=new r,c.position&&this.position.copy(c.position),this.quaternion=new s,c.quaternion&&this.quaternion.copy(c.quaternion)}var l=new s;o.pointToLocalFrame=function(c,u,h,f){var f=f||new r;return h.vsub(c,f),u.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(c,u){return o.pointToLocalFrame(this.position,this.quaternion,c,u)},o.pointToWorldFrame=function(c,u,h,f){var f=f||new r;return u.vmult(h,f),f.vadd(c,f),f},o.prototype.pointToWorld=function(c,u){return o.pointToWorldFrame(this.position,this.quaternion,c,u)},o.prototype.vectorToWorldFrame=function(c,h){var h=h||new r;return this.quaternion.vmult(c,h),h},o.vectorToWorldFrame=function(c,u,h){return c.vmult(u,h),h},o.vectorToLocalFrame=function(c,u,h,f){var f=f||new r;return u.w*=-1,u.vmult(h,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=s;var r=t("./Mat3");function s(u,h,d){this.x=u||0,this.y=h||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,h){var d=u.x,f=u.y,v=u.z,g=this.x,m=this.y,p=this.z;return h=h||new s,h.x=m*v-p*f,h.y=p*d-g*v,h.z=g*f-m*d,h},s.prototype.set=function(u,h,d){return this.x=u,this.y=h,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,h){if(h)h.x=u.x+this.x,h.y=u.y+this.y,h.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,h){if(h)h.x=this.x-u.x,h.y=this.y-u.y,h.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,h=this.y,d=this.z,f=Math.sqrt(u*u+h*h+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(u){u=u||new s;var h=this.x,d=this.y,f=this.z,v=Math.sqrt(h*h+d*d+f*f);return v>0?(v=1/v,u.x=h*v,u.y=d*v,u.z=f*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,h=this.y,d=this.z;return Math.sqrt(u*u+h*h+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var h=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-h)*(v-h)+(g-d)*(g-d)+(m-f)*(m-f))},s.prototype.distanceSquared=function(u){var h=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return(v-h)*(v-h)+(g-d)*(g-d)+(m-f)*(m-f)},s.prototype.mult=function(u,h){h=h||new s;var d=this.x,f=this.y,v=this.z;return h.x=u*d,h.y=u*f,h.z=u*v,h},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new s,l=new s;s.prototype.tangents=function(u,h){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,h)}else u.set(1,0,0),h.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,h,d){var f=this.x,v=this.y,g=this.z;d.x=f+(u.x-f)*h,d.y=v+(u.y-v)*h,d.z=g+(u.z-g)*h},s.prototype.almostEquals=function(u,h){return h===void 0&&(h=1e-6),!(Math.abs(this.x-u.x)>h||Math.abs(this.y-u.y)>h||Math.abs(this.z-u.z)>h)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var c=new s;s.prototype.isAntiparallelTo=function(u,h){return this.negate(c),c.almostEquals(u,h)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=h;var r=t("../utils/EventTarget");t("../shapes/Shape");var s=t("../math/Vec3"),o=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var c=t("../collision/AABB"),u=t("../shapes/Box");function h(C){C=C||{},r.apply(this),this.id=h.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof C.collisionFilterGroup=="number"?C.collisionFilterGroup:1,this.collisionFilterMask=typeof C.collisionFilterMask=="number"?C.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,C.position&&this.position.copy(C.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,C.velocity&&this.velocity.copy(C.velocity),this.initVelocity=new s,this.force=new s;var H=typeof C.mass=="number"?C.mass:0;this.mass=H,this.invMass=H>0?1/H:0,this.material=C.material||null,this.linearDamping=typeof C.linearDamping=="number"?C.linearDamping:.01,this.type=H<=0?h.STATIC:h.DYNAMIC,typeof C.type==typeof h.STATIC&&(this.type=C.type),this.allowSleep=typeof C.allowSleep<"u"?C.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof C.sleepSpeedLimit<"u"?C.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof C.sleepTimeLimit<"u"?C.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,C.quaternion&&this.quaternion.copy(C.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,C.angularVelocity&&this.angularVelocity.copy(C.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof C.fixedRotation<"u"?C.fixedRotation:!1,this.angularDamping=typeof C.angularDamping<"u"?C.angularDamping:.01,this.aabb=new c,this.aabbNeedsUpdate=!0,this.wlambda=new s,C.shape&&this.addShape(C.shape),this.updateMassProperties()}h.prototype=new r,h.prototype.constructor=h,h.DYNAMIC=1,h.STATIC=2,h.KINEMATIC=4,h.AWAKE=0,h.SLEEPY=1,h.SLEEPING=2,h.idCounter=0,h.prototype.wakeUp=function(){var C=this.sleepState;this.sleepState=0,C===h.SLEEPING&&this.dispatchEvent({type:"wakeup"})},h.prototype.sleep=function(){this.sleepState=h.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},h.sleepyEvent={type:"sleepy"},h.sleepEvent={type:"sleep"},h.prototype.sleepTick=function(C){if(this.allowSleep){var H=this.sleepState,G=this.velocity.norm2()+this.angularVelocity.norm2(),P=Math.pow(this.sleepSpeedLimit,2);H===h.AWAKE&&G<P?(this.sleepState=h.SLEEPY,this.timeLastSleepy=C,this.dispatchEvent(h.sleepyEvent)):H===h.SLEEPY&&G>P?this.wakeUp():H===h.SLEEPY&&C-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(h.sleepEvent))}},h.prototype.updateSolveMassProperties=function(){this.sleepState===h.SLEEPING||this.type===h.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},h.prototype.pointToLocalFrame=function(C,G){var G=G||new s;return C.vsub(this.position,G),this.quaternion.conjugate().vmult(G,G),G},h.prototype.vectorToLocalFrame=function(C,G){var G=G||new s;return this.quaternion.conjugate().vmult(C,G),G},h.prototype.pointToWorldFrame=function(C,G){var G=G||new s;return this.quaternion.vmult(C,G),G.vadd(this.position,G),G},h.prototype.vectorToWorldFrame=function(C,G){var G=G||new s;return this.quaternion.vmult(C,G),G};var d=new s,f=new l;h.prototype.addShape=function(C,H,G){var P=new s,k=new l;return H&&P.copy(H),G&&k.copy(G),this.shapes.push(C),this.shapeOffsets.push(P),this.shapeOrientations.push(k),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},h.prototype.updateBoundingRadius=function(){for(var C=this.shapes,H=this.shapeOffsets,G=C.length,P=0,k=0;k!==G;k++){var $=C[k];$.updateBoundingSphereRadius();var B=H[k].norm(),O=$.boundingSphereRadius;B+O>P&&(P=B+O)}this.boundingRadius=P};var v=new c;h.prototype.computeAABB=function(){for(var C=this.shapes,H=this.shapeOffsets,G=this.shapeOrientations,P=C.length,k=d,$=f,B=this.quaternion,O=this.aabb,K=v,W=0;W!==P;W++){var A=C[W];G[W].mult(B,$),$.vmult(H[W],k),k.vadd(this.position,k),A.calculateWorldAABB(k,$,K.lowerBound,K.upperBound),W===0?O.copy(K):O.extend(K)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,h.prototype.updateInertiaWorld=function(C){var H=this.invInertia;if(!(H.x===H.y&&H.y===H.z&&!C)){var G=g,P=m;G.setRotationFromQuaternion(this.quaternion),G.transpose(P),G.scale(H,G),G.mmult(P,this.invInertiaWorld)}};var p=new s,y=new s;h.prototype.applyForce=function(C,H){if(this.type===h.DYNAMIC){var G=p;H.vsub(this.position,G);var P=y;G.cross(C,P),this.force.vadd(C,this.force),this.torque.vadd(P,this.torque)}};var x=new s,_=new s;h.prototype.applyLocalForce=function(C,H){if(this.type===h.DYNAMIC){var G=x,P=_;this.vectorToWorldFrame(C,G),this.pointToWorldFrame(H,P),this.applyForce(G,P)}};var E=new s,R=new s,D=new s;h.prototype.applyImpulse=function(C,H){if(this.type===h.DYNAMIC){var G=E;H.vsub(this.position,G);var P=R;P.copy(C),P.mult(this.invMass,P),this.velocity.vadd(P,this.velocity);var k=D;G.cross(C,k),this.invInertiaWorld.vmult(k,k),this.angularVelocity.vadd(k,this.angularVelocity)}};var L=new s,M=new s;h.prototype.applyLocalImpulse=function(C,H){if(this.type===h.DYNAMIC){var G=L,P=M;this.vectorToWorldFrame(C,G),this.pointToWorldFrame(H,P),this.applyImpulse(G,P)}};var S=new s;h.prototype.updateMassProperties=function(){var C=S;this.invMass=this.mass>0?1/this.mass:0;var H=this.inertia,G=this.fixedRotation;this.computeAABB(),C.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(C,this.mass,H),this.invInertia.set(H.x>0&&!G?1/H.x:0,H.y>0&&!G?1/H.y:0,H.z>0&&!G?1/H.z:0),this.updateInertiaWorld(!0)},h.prototype.getVelocityAtWorldPoint=function(C,H){var G=new s;return C.vsub(this.position,G),this.angularVelocity.cross(G,H),this.velocity.vadd(H,H),H}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var r=t("../math/Vec3"),s=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=c;function c(B){this.chassisBody=B.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof B.indexRightAxis<"u"?B.indexRightAxis:1,this.indexForwardAxis=typeof B.indexForwardAxis<"u"?B.indexForwardAxis:0,this.indexUpAxis=typeof B.indexUpAxis<"u"?B.indexUpAxis:2}new r,new r,new r;var u=new r,h=new r,d=new r;new o,c.prototype.addWheel=function(B){B=B||{};var O=new l(B),K=this.wheelInfos.length;return this.wheelInfos.push(O),K},c.prototype.setSteeringValue=function(B,O){var K=this.wheelInfos[O];K.steering=B},new r,c.prototype.applyEngineForce=function(B,O){this.wheelInfos[O].engineForce=B},c.prototype.setBrake=function(B,O){this.wheelInfos[O].brake=B},c.prototype.addToWorld=function(B){this.constraints,B.add(this.chassisBody);var O=this;this.preStepCallback=function(){O.updateVehicle(B.dt)},B.addEventListener("preStep",this.preStepCallback),this.world=B},c.prototype.getVehicleAxisWorld=function(B,O){O.set(B===0?1:0,B===1?1:0,B===2?1:0),this.chassisBody.vectorToWorldFrame(O,O)},c.prototype.updateVehicle=function(B){for(var O=this.wheelInfos,K=O.length,W=this.chassisBody,A=0;A<K;A++)this.updateWheelTransform(A);this.currentVehicleSpeedKmHour=3.6*W.velocity.norm();var F=new r;this.getVehicleAxisWorld(this.indexForwardAxis,F),F.dot(W.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var A=0;A<K;A++)this.castRay(O[A]);this.updateSuspension(B);for(var U=new r,I=new r,A=0;A<K;A++){var b=O[A],j=b.suspensionForce;j>b.maxSuspensionForce&&(j=b.maxSuspensionForce),b.raycastResult.hitNormalWorld.scale(j*B,U),b.raycastResult.hitPointWorld.vsub(W.position,I),W.applyImpulse(U,b.raycastResult.hitPointWorld)}this.updateFriction(B);var se=new r,te=new r,Z=new r;for(A=0;A<K;A++){var b=O[A];W.getVelocityAtWorldPoint(b.chassisConnectionPointWorld,Z);var he=1;switch(this.indexUpAxis){case 1:he=-1;break}if(b.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,te);var le=te.dot(b.raycastResult.hitNormalWorld);b.raycastResult.hitNormalWorld.scale(le,se),te.vsub(se,te);var X=te.dot(Z);b.deltaRotation=he*X*B/b.radius}(b.sliding||!b.isInContact)&&b.engineForce!==0&&b.useCustomSlidingRotationalSpeed&&(b.deltaRotation=(b.engineForce>0?1:-1)*b.customSlidingRotationalSpeed*B),Math.abs(b.brake)>Math.abs(b.engineForce)&&(b.deltaRotation=0),b.rotation+=b.deltaRotation,b.deltaRotation*=.99}},c.prototype.updateSuspension=function(B){for(var O=this.chassisBody,K=O.mass,W=this.wheelInfos,A=W.length,F=0;F<A;F++){var U=W[F];if(U.isInContact){var I,b=U.suspensionRestLength,j=U.suspensionLength,se=b-j;I=U.suspensionStiffness*se*U.clippedInvContactDotSuspension;var te=U.suspensionRelativeVelocity,Z;te<0?Z=U.dampingCompression:Z=U.dampingRelaxation,I-=Z*te,U.suspensionForce=I*K,U.suspensionForce<0&&(U.suspensionForce=0)}else U.suspensionForce=0}},c.prototype.removeFromWorld=function(B){this.constraints,B.remove(this.chassisBody),B.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;c.prototype.castRay=function(B){var O=f,K=v;this.updateWheelTransformWorld(B);var W=this.chassisBody,A=-1,F=B.suspensionRestLength+B.radius;B.directionWorld.scale(F,O);var U=B.chassisConnectionPointWorld;U.vadd(O,K);var I=B.raycastResult;I.reset();var b=W.collisionResponse;W.collisionResponse=!1,this.world.rayTest(U,K,I),W.collisionResponse=b;var j=I.body;if(B.raycastResult.groundObject=0,j){A=I.distance,B.raycastResult.hitNormalWorld=I.hitNormalWorld,B.isInContact=!0;var se=I.distance;B.suspensionLength=se-B.radius;var te=B.suspensionRestLength-B.maxSuspensionTravel,Z=B.suspensionRestLength+B.maxSuspensionTravel;B.suspensionLength<te&&(B.suspensionLength=te),B.suspensionLength>Z&&(B.suspensionLength=Z,B.raycastResult.reset());var he=B.raycastResult.hitNormalWorld.dot(B.directionWorld),le=new r;W.getVelocityAtWorldPoint(B.raycastResult.hitPointWorld,le);var X=B.raycastResult.hitNormalWorld.dot(le);if(he>=-.1)B.suspensionRelativeVelocity=0,B.clippedInvContactDotSuspension=1/.1;else{var Ae=-1/he;B.suspensionRelativeVelocity=X*Ae,B.clippedInvContactDotSuspension=Ae}}else B.suspensionLength=B.suspensionRestLength+0*B.maxSuspensionTravel,B.suspensionRelativeVelocity=0,B.directionWorld.scale(-1,B.raycastResult.hitNormalWorld),B.clippedInvContactDotSuspension=1;return A},c.prototype.updateWheelTransformWorld=function(B){B.isInContact=!1;var O=this.chassisBody;O.pointToWorldFrame(B.chassisConnectionPointLocal,B.chassisConnectionPointWorld),O.vectorToWorldFrame(B.directionLocal,B.directionWorld),O.vectorToWorldFrame(B.axleLocal,B.axleWorld)},c.prototype.updateWheelTransform=function(B){var O=u,K=h,W=d,A=this.wheelInfos[B];this.updateWheelTransformWorld(A),A.directionLocal.scale(-1,O),K.copy(A.axleLocal),O.cross(K,W),W.normalize(),K.normalize();var F=A.steering,U=new s;U.setFromAxisAngle(O,F);var I=new s;I.setFromAxisAngle(K,A.rotation);var b=A.worldTransform.quaternion;this.chassisBody.quaternion.mult(U,b),b.mult(I,b),b.normalize();var j=A.worldTransform.position;j.copy(A.directionWorld),j.scale(A.suspensionLength,j),j.vadd(A.chassisConnectionPointWorld,j)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];c.prototype.getWheelTransformWorld=function(B){return this.wheelInfos[B].worldTransform};var m=new r,p=[],y=[],x=1;c.prototype.updateFriction=function(B){for(var O=m,K=this.wheelInfos,W=K.length,A=this.chassisBody,F=y,U=p,I=0;I<W;I++){var b=K[I],j=b.raycastResult.body;b.sideImpulse=0,b.forwardImpulse=0,F[I]||(F[I]=new r),U[I]||(U[I]=new r)}for(var I=0;I<W;I++){var b=K[I],j=b.raycastResult.body;if(j){var se=U[I],te=this.getWheelTransformWorld(I);te.vectorToWorldFrame(g[this.indexRightAxis],se);var Z=b.raycastResult.hitNormalWorld,he=se.dot(Z);Z.scale(he,O),se.vsub(O,se),se.normalize(),Z.cross(se,F[I]),F[I].normalize(),b.sideImpulse=$(A,b.raycastResult.hitPointWorld,j,b.raycastResult.hitPointWorld,se),b.sideImpulse*=x}}var le=1,X=.5;this.sliding=!1;for(var I=0;I<W;I++){var b=K[I],j=b.raycastResult.body,Ae=0;if(b.slipInfo=1,j){var de=0,re=b.brake?b.brake:de;Ae=D(A,j,b.raycastResult.hitPointWorld,F[I],re),Ae+=b.engineForce*B;var oe=re/Ae;b.slipInfo*=oe}if(b.forwardImpulse=0,b.skidInfo=1,j){b.skidInfo=1;var qe=b.suspensionForce*B*b.frictionSlip,Re=qe,Ge=qe*Re;b.forwardImpulse=Ae;var ye=b.forwardImpulse*X,Ze=b.sideImpulse*le,et=ye*ye+Ze*Ze;if(b.sliding=!1,et>Ge){this.sliding=!0,b.sliding=!0;var oe=qe/Math.sqrt(et);b.skidInfo*=oe}}}if(this.sliding)for(var I=0;I<W;I++){var b=K[I];b.sideImpulse!==0&&b.skidInfo<1&&(b.forwardImpulse*=b.skidInfo,b.sideImpulse*=b.skidInfo)}for(var I=0;I<W;I++){var b=K[I],N=new r;if(N.copy(b.raycastResult.hitPointWorld),b.forwardImpulse!==0){var w=new r;F[I].scale(b.forwardImpulse,w),A.applyImpulse(w,N)}if(b.sideImpulse!==0){var j=b.raycastResult.body,J=new r;J.copy(b.raycastResult.hitPointWorld);var fe=new r;U[I].scale(b.sideImpulse,fe),A.pointToLocalFrame(N,N),N["xyz"[this.indexUpAxis]]*=b.rollInfluence,A.pointToWorldFrame(N,N),A.applyImpulse(fe,N),fe.scale(-1,fe),j.applyImpulse(fe,J)}}};var _=new r,E=new r,R=new r;function D(B,O,K,W,A){var F=0,U=K,I=_,b=E,j=R;B.getVelocityAtWorldPoint(U,I),O.getVelocityAtWorldPoint(U,b),I.vsub(b,j);var se=W.dot(j),te=H(B,K,W),Z=H(O,K,W),he=1,le=he/(te+Z);return F=-se*le,A<F&&(F=A),F<-A&&(F=-A),F}var L=new r,M=new r,S=new r,C=new r;function H(B,O,K){var W=L,A=M,F=S,U=C;return O.vsub(B.position,W),W.cross(K,A),B.invInertiaWorld.vmult(A,U),U.cross(W,F),B.invMass+K.dot(F)}var G=new r,P=new r,k=new r;function $(B,O,K,W,A,he){var U=A.norm2();if(U>1.1)return 0;var I=G,b=P,j=k;B.getVelocityAtWorldPoint(O,I),K.getVelocityAtWorldPoint(W,b),I.vsub(b,j);var se=A.dot(j),te=.2,Z=1/(B.invMass+K.invMass),he=-te*se*Z;return he}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var r=t("./Body"),s=t("../shapes/Sphere"),o=t("../shapes/Box"),l=t("../math/Vec3"),c=t("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var y=new c(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(y),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),y=g.x,x=g.y;this.constraints[v].axisA.set(m*y-p*x,p*y+m*x,0)},u.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var h=new l;u.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},u.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,h),m.vectorToWorldFrame(h,h),p.vadd(h,p)},u.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},u.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;u.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=s,t("../shapes/Shape");var r=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,y=this.smoothingRadius*this.smoothingRadius,x=o,_=0;_!==m;_++){var E=this.particles[_];E.position.vsub(v.position,x),p!==E.id&&x.norm2()<y&&g.push(E)}};var l=new r,c=new r,u=new r,h=new r,d=new r,f=new r;s.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,y=0;y!==v;y++){var x=this.particles[y],_=this.neighbors[y];_.length=0,this.getNeighbors(x,_),_.push(this.particles[y]);for(var E=_.length,R=0,D=0;D!==E;D++){x.position.vsub(_[D].position,g);var L=g.norm(),M=this.w(L);R+=_[D].mass*M}this.densities[y]=R,this.pressures[y]=m*m*(this.densities[y]-this.density)}for(var S=c,C=u,H=h,G=d,P=f,y=0;y!==v;y++){var k=this.particles[y];S.set(0,0,0),C.set(0,0,0);for(var $,B,_=this.neighbors[y],E=_.length,D=0;D!==E;D++){var O=_[D];k.position.vsub(O.position,G);var K=G.norm();$=-O.mass*(this.pressures[y]/(this.densities[y]*this.densities[y]+p)+this.pressures[D]/(this.densities[D]*this.densities[D]+p)),this.gradw(G,H),H.mult($,H),S.vadd(H,S),O.velocity.vsub(k.velocity,P),P.mult(1/(1e-4+this.densities[y]*this.densities[D])*this.viscosity*O.mass,P),B=this.nablaw(K),P.mult(B,P),C.vadd(P,C)}C.mult(k.mass,C),S.mult(k.mass,S),k.force.vadd(C,k.force),k.force.vadd(S,k.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var r=t("../math/Vec3");n.exports=s;function s(y,x,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=y,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}s.prototype.setWorldAnchorA=function(y){this.bodyA.pointToLocalFrame(y,this.localAnchorA)},s.prototype.setWorldAnchorB=function(y){this.bodyB.pointToLocalFrame(y,this.localAnchorB)},s.prototype.getWorldAnchorA=function(y){this.bodyA.pointToWorldFrame(this.localAnchorA,y)},s.prototype.getWorldAnchorB=function(y){this.bodyB.pointToWorldFrame(this.localAnchorB,y)};var o=new r,l=new r,c=new r,u=new r,h=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;s.prototype.applyForce=function(){var y=this.stiffness,x=this.damping,_=this.restLength,E=this.bodyA,R=this.bodyB,D=o,L=l,M=c,S=u,C=p,H=h,G=d,P=f,k=v,$=g,B=m;this.getWorldAnchorA(H),this.getWorldAnchorB(G),H.vsub(E.position,P),G.vsub(R.position,k),G.vsub(H,D);var O=D.norm();L.copy(D),L.normalize(),R.velocity.vsub(E.velocity,M),R.angularVelocity.cross(k,C),M.vadd(C,M),E.angularVelocity.cross(P,C),M.vsub(C,M),L.mult(-y*(O-_)-x*M.dot(L),S),E.force.vsub(S,E.force),R.force.vadd(S,R.force),P.cross(S,$),k.cross(S,B),E.torque.vsub($,E.torque),R.torque.vadd(B,R.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var r=t("../math/Vec3"),s=t("../math/Transform"),o=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=c;function c(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var h=new r,u=new r,h=new r;c.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,h);var g=f.hitNormalWorld.dot(h);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=l;var r=t("./Shape"),s=t("../math/Vec3"),o=t("./ConvexPolyhedron");function l(h){r.call(this),this.type=r.types.BOX,this.halfExtents=h,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var h=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=s,g=[new v(-h,-d,-f),new v(h,-d,-f),new v(h,d,-f),new v(-h,d,-f),new v(-h,-d,f),new v(h,-d,f),new v(h,d,f),new v(-h,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(h,d){return d=d||new s,l.calculateInertia(this.halfExtents,h,d),d},l.calculateInertia=function(h,d,f){var v=h;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(h,d){var f=h,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var c=new s;new s,l.prototype.forEachWorldCorner=function(h,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)c.set(g[m][0],g[m][1],g[m][2]),d.vmult(c,c),h.vadd(c,c),f(c.x,c.y,c.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(h,d,f,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];d.vmult(m,m),h.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=u[p];d.vmult(m,m),h.vadd(m,m);var y=m.x,x=m.y,_=m.z;y>v.x&&(v.x=y),x>v.y&&(v.y=x),_>v.z&&(v.z=_),y<f.x&&(f.x=y),x<f.y&&(f.y=x),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=l;var r=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function l(A,F,U){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=A||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=F||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=U?U.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var c=new s;l.prototype.computeEdges=function(){var A=this.faces,F=this.vertices;F.length;var U=this.uniqueEdges;U.length=0;for(var I=c,b=0;b!==A.length;b++)for(var j=A[b],se=j.length,te=0;te!==se;te++){var Z=(te+1)%se;F[j[te]].vsub(F[j[Z]],I),I.normalize();for(var he=!1,le=0;le!==U.length;le++)if(U[le].almostEquals(I)||U[le].almostEquals(I)){he=!0;break}he||U.push(I.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var A=0;A<this.faces.length;A++){for(var F=0;F<this.faces[A].length;F++)if(!this.vertices[this.faces[A][F]])throw new Error("Vertex "+this.faces[A][F]+" not found!");var U=this.faceNormals[A]||new s;this.getFaceNormal(A,U),U.negate(U),this.faceNormals[A]=U;var I=this.vertices[this.faces[A][0]];if(U.dot(I)<0){console.error(".faceNormals["+A+"] = Vec3("+U.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var F=0;F<this.faces[A].length;F++)console.warn(".vertices["+this.faces[A][F]+"] = Vec3("+this.vertices[this.faces[A][F]].toString()+")")}}};var u=new s,h=new s;l.computeNormal=function(A,F,U,I){F.vsub(A,h),U.vsub(F,u),u.cross(h,I),I.isZero()||I.normalize()},l.prototype.getFaceNormal=function(A,F){var U=this.faces[A],I=this.vertices[U[0]],b=this.vertices[U[1]],j=this.vertices[U[2]];return l.computeNormal(I,b,j,F)};var d=new s;l.prototype.clipAgainstHull=function(A,F,U,I,b,j,se,te,Z){for(var he=d,le=-1,X=-Number.MAX_VALUE,Ae=0;Ae<U.faces.length;Ae++){he.copy(U.faceNormals[Ae]),b.vmult(he,he);var de=he.dot(j);de>X&&(X=de,le=Ae)}for(var re=[],oe=U.faces[le],qe=oe.length,Re=0;Re<qe;Re++){var Ge=U.vertices[oe[Re]],ye=new s;ye.copy(Ge),b.vmult(ye,ye),I.vadd(ye,ye),re.push(ye)}le>=0&&this.clipFaceAgainstHull(j,A,F,re,se,te,Z)};var f=new s,v=new s,g=new s,m=new s,p=new s,y=new s;l.prototype.findSeparatingAxis=function(A,F,U,I,b,j,se,te){var Z=f,he=v,le=g,X=m,Ae=p,de=y,re=Number.MAX_VALUE,oe=this;if(oe.uniqueAxes)for(var Re=0;Re!==oe.uniqueAxes.length;Re++){U.vmult(oe.uniqueAxes[Re],Z);var ye=oe.testSepAxis(Z,A,F,U,I,b);if(ye===!1)return!1;ye<re&&(re=ye,j.copy(Z))}else for(var qe=se?se.length:oe.faces.length,Re=0;Re<qe;Re++){var Ge=se?se[Re]:Re;Z.copy(oe.faceNormals[Ge]),U.vmult(Z,Z);var ye=oe.testSepAxis(Z,A,F,U,I,b);if(ye===!1)return!1;ye<re&&(re=ye,j.copy(Z))}if(A.uniqueAxes)for(var Re=0;Re!==A.uniqueAxes.length;Re++){b.vmult(A.uniqueAxes[Re],he);var ye=oe.testSepAxis(he,A,F,U,I,b);if(ye===!1)return!1;ye<re&&(re=ye,j.copy(he))}else for(var Ze=te?te.length:A.faces.length,Re=0;Re<Ze;Re++){var Ge=te?te[Re]:Re;he.copy(A.faceNormals[Ge]),b.vmult(he,he);var ye=oe.testSepAxis(he,A,F,U,I,b);if(ye===!1)return!1;ye<re&&(re=ye,j.copy(he))}for(var et=0;et!==oe.uniqueEdges.length;et++){U.vmult(oe.uniqueEdges[et],X);for(var N=0;N!==A.uniqueEdges.length;N++)if(b.vmult(A.uniqueEdges[N],Ae),X.cross(Ae,de),!de.almostZero()){de.normalize();var w=oe.testSepAxis(de,A,F,U,I,b);if(w===!1)return!1;w<re&&(re=w,j.copy(de))}}return I.vsub(F,le),le.dot(j)>0&&j.negate(j),!0};var x=[],_=[];l.prototype.testSepAxis=function(A,F,U,I,b,j){var se=this;l.project(se,A,U,I,x),l.project(F,A,b,j,_);var te=x[0],Z=x[1],he=_[0],le=_[1],X=te-le,Ae=he-Z,de=X<Ae?X:Ae;return de};var E=new s,R=new s;l.prototype.calculateLocalInertia=function(A,F){this.computeLocalAABB(E,R);var U=R.x-E.x,I=R.y-E.y,b=R.z-E.z;F.x=1/12*A*(2*I*2*I+2*b*2*b),F.y=1/12*A*(2*U*2*U+2*b*2*b),F.z=1/12*A*(2*I*2*I+2*U*2*U)},l.prototype.getPlaneConstantOfFace=function(A){var F=this.faces[A],U=this.faceNormals[A],I=this.vertices[F[0]],b=-U.dot(I);return b};var D=new s,L=new s,M=new s,S=new s,C=new s,H=new s,G=new s,P=new s;l.prototype.clipFaceAgainstHull=function(A,F,U,I,b,j,se){for(var te=D,Z=L,he=M,le=S,X=C,Ae=H,de=G,re=P,oe=this,qe=[],Re=I,Ge=qe,ye=-1,Ze=Number.MAX_VALUE,et=0;et<oe.faces.length;et++){te.copy(oe.faceNormals[et]),U.vmult(te,te);var N=te.dot(A);N<Ze&&(Ze=N,ye=et)}if(!(ye<0)){var w=oe.faces[ye];w.connectedFaces=[];for(var J=0;J<oe.faces.length;J++)for(var fe=0;fe<oe.faces[J].length;fe++)w.indexOf(oe.faces[J][fe])!==-1&&J!==ye&&w.connectedFaces.indexOf(J)===-1&&w.connectedFaces.push(J);Re.length;for(var ue=w.length,me=0;me<ue;me++){var ze=oe.vertices[w[me]],Te=oe.vertices[w[(me+1)%ue]];ze.vsub(Te,Z),he.copy(Z),U.vmult(he,he),F.vadd(he,he),le.copy(this.faceNormals[ye]),U.vmult(le,le),F.vadd(le,le),he.cross(le,X),X.negate(X),Ae.copy(ze),U.vmult(Ae,Ae),F.vadd(Ae,Ae),-Ae.dot(X);var nt;{var Be=w.connectedFaces[me];de.copy(this.faceNormals[Be]);var je=this.getPlaneConstantOfFace(Be);re.copy(de),U.vmult(re,re);var nt=je-re.dot(F)}for(this.clipFaceAgainstPlane(Re,Ge,re,nt);Re.length;)Re.shift();for(;Ge.length;)Re.push(Ge.shift())}de.copy(this.faceNormals[ye]);var je=this.getPlaneConstantOfFace(ye);re.copy(de),U.vmult(re,re);for(var nt=je-re.dot(F),J=0;J<Re.length;J++){var _e=re.dot(Re[J])+nt;if(_e<=b&&(console.log("clamped: depth="+_e+" to minDist="+(b+"")),_e=b),_e<=j){var lt=Re[J];if(_e<=0){var Ke={point:lt,normal:re,depth:_e};se.push(Ke)}}}}},l.prototype.clipFaceAgainstPlane=function(A,F,U,I){var b,j,se=A.length;if(se<2)return F;var te=A[A.length-1],Z=A[0];b=U.dot(te)+I;for(var he=0;he<se;he++){if(Z=A[he],j=U.dot(Z)+I,b<0)if(j<0){var le=new s;le.copy(Z),F.push(le)}else{var le=new s;te.lerp(Z,b/(b-j),le),F.push(le)}else if(j<0){var le=new s;te.lerp(Z,b/(b-j),le),F.push(le),F.push(Z)}te=Z,b=j}return F},l.prototype.computeWorldVertices=function(A,F){for(var U=this.vertices.length;this.worldVertices.length<U;)this.worldVertices.push(new s);for(var I=this.vertices,b=this.worldVertices,j=0;j!==U;j++)F.vmult(I[j],b[j]),A.vadd(b[j],b[j]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(A,F){var U=this.vertices.length,I=this.vertices;A.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),F.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var b=0;b<U;b++){var j=I[b];j.x<A.x?A.x=j.x:j.x>F.x&&(F.x=j.x),j.y<A.y?A.y=j.y:j.y>F.y&&(F.y=j.y),j.z<A.z?A.z=j.z:j.z>F.z&&(F.z=j.z)}},l.prototype.computeWorldFaceNormals=function(A){for(var F=this.faceNormals.length;this.worldFaceNormals.length<F;)this.worldFaceNormals.push(new s);for(var U=this.faceNormals,I=this.worldFaceNormals,b=0;b!==F;b++)A.vmult(U[b],I[b]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var A=0,F=this.vertices,U=0,I=F.length;U!==I;U++){var b=F[U].norm2();b>A&&(A=b)}this.boundingSphereRadius=Math.sqrt(A)};var k=new s;l.prototype.calculateWorldAABB=function(A,F,U,I){for(var b=this.vertices.length,j=this.vertices,se,te,Z,he,le,X,Ae=0;Ae<b;Ae++){k.copy(j[Ae]),F.vmult(k,k),A.vadd(k,k);var de=k;de.x<se||se===void 0?se=de.x:(de.x>he||he===void 0)&&(he=de.x),de.y<te||te===void 0?te=de.y:(de.y>le||le===void 0)&&(le=de.y),de.z<Z||Z===void 0?Z=de.z:(de.z>X||X===void 0)&&(X=de.z)}U.set(se,te,Z),I.set(he,le,X)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(A){A=A||new s;for(var F=this.vertices.length,U=this.vertices,I=0;I<F;I++)A.vadd(U[I],A);return A.mult(1/F,A),A},l.prototype.transformAllPoints=function(A,F){var U=this.vertices.length,I=this.vertices;if(F){for(var b=0;b<U;b++){var j=I[b];F.vmult(j,j)}for(var b=0;b<this.faceNormals.length;b++){var j=this.faceNormals[b];F.vmult(j,j)}}if(A)for(var b=0;b<U;b++){var j=I[b];j.vadd(A,j)}};var $=new s,B=new s,O=new s;l.prototype.pointIsInside=function(A){var F=this.vertices.length,U=this.vertices,I=this.faces,b=this.faceNormals,j=null,se=this.faces.length,te=$;this.getAveragePointLocal(te);for(var Z=0;Z<se;Z++){this.faces[Z].length;var F=b[Z],he=U[I[Z][0]],le=B;A.vsub(he,le);var X=F.dot(le),Ae=O;te.vsub(he,Ae);var de=F.dot(Ae);if(X<0&&de>0||X>0&&de<0)return!1}return j?1:-1},new s;var K=new s,W=new s;l.project=function(A,F,U,I,b){var j=A.vertices.length,se=K,te=0,Z=0,he=W,le=A.vertices;he.setZero(),o.vectorToLocalFrame(U,I,F,se),o.pointToLocalFrame(U,I,he,he);var X=he.dot(se);Z=te=le[0].dot(se);for(var Ae=1;Ae<j;Ae++){var de=le[Ae].dot(se);de>te&&(te=de),de<Z&&(Z=de)}if(Z-=X,te-=X,Z>te){var re=Z;Z=te,te=re}b[0]=te,b[1]=Z}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=l;var r=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function l(c,u,h,d){var f=d,v=[],g=[],m=[],p=[],y=[],x=Math.cos,_=Math.sin;v.push(new s(u*x(0),u*_(0),-h*.5)),p.push(0),v.push(new s(c*x(0),c*_(0),h*.5)),y.push(1);for(var E=0;E<f;E++){var R=2*Math.PI/f*(E+1),D=2*Math.PI/f*(E+.5);E<f-1?(v.push(new s(u*x(R),u*_(R),-h*.5)),p.push(2*E+2),v.push(new s(c*x(R),c*_(R),h*.5)),y.push(2*E+3),m.push([2*E+2,2*E+3,2*E+1,2*E])):m.push([0,1,2*E+1,2*E]),(f%2===1||E<f/2)&&g.push(new s(x(D),_(D),0))}m.push(y),g.push(new s(0,0,1));for(var L=[],E=0;E<p.length;E++)L.push(p[p.length-E-1]);m.push(L),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var r=t("./Shape"),s=t("./ConvexPolyhedron"),o=t("../math/Vec3"),l=t("../utils/Utils");n.exports=c;function c(u,h){h=l.defaults(h,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=h.maxValue,this.minValue=h.minValue,this.elementSize=h.elementSize,h.minValue===null&&this.updateMinValue(),h.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}c.prototype=new r,c.prototype.update=function(){this._cachedPillars={}},c.prototype.updateMinValue=function(){for(var u=this.data,h=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v<h&&(h=v)}this.minValue=h},c.prototype.updateMaxValue=function(){for(var u=this.data,h=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v>h&&(h=v)}this.maxValue=h},c.prototype.setHeightValueAtIndex=function(u,h,d){var f=this.data;f[u][h]=d,this.clearCachedConvexTrianglePillar(u,h,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,h,!0),this.clearCachedConvexTrianglePillar(u-1,h,!1)),h>0&&(this.clearCachedConvexTrianglePillar(u,h-1,!0),this.clearCachedConvexTrianglePillar(u,h-1,!1)),h>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,h-1,!0)},c.prototype.getRectMinMax=function(u,h,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=u;p<=d;p++)for(var y=h;y<=f;y++){var x=g[p][y];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},c.prototype.getIndexOfPosition=function(u,h,d,f){var v=this.elementSize,g=this.data,m=Math.floor(u/v),p=Math.floor(h/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},c.prototype.getHeightAt=function(u,h,d){var f=[];this.getIndexOfPosition(u,h,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},c.prototype.getCacheConvexTrianglePillarKey=function(u,h,d){return u+"_"+h+"_"+(d?1:0)},c.prototype.getCachedConvexTrianglePillar=function(u,h,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,h,d)]},c.prototype.setCachedConvexTrianglePillar=function(u,h,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,h,d)]={convex:f,offset:v}},c.prototype.clearCachedConvexTrianglePillar=function(u,h,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,h,d)]},c.prototype.getConvexTrianglePillar=function(u,h,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,h,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new s,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var y=0;y<6;y++)f.vertices[y]||(f.vertices[y]=new o);p.length=5;for(var y=0;y<5;y++)p[y]||(p[y]=[]);var x=f.vertices,_=(Math.min(g[u][h],g[u+1][h],g[u][h+1],g[u+1][h+1])-this.minValue)/2+this.minValue;d?(v.set((u+.75)*m,(h+.75)*m,_),x[0].set(.25*m,.25*m,g[u+1][h+1]-_),x[1].set(-.75*m,.25*m,g[u][h+1]-_),x[2].set(.25*m,-.75*m,g[u+1][h]-_),x[3].set(.25*m,.25*m,-_-1),x[4].set(-.75*m,.25*m,-_-1),x[5].set(.25*m,-.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((u+.25)*m,(h+.25)*m,_),x[0].set(-.25*m,-.25*m,g[u][h]-_),x[1].set(.75*m,-.25*m,g[u+1][h]-_),x[2].set(-.25*m,.75*m,g[u][h+1]-_),x[3].set(-.25*m,-.25*m,-_-1),x[4].set(.75*m,-.25*m,-_-1),x[5].set(-.25*m,.75*m,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,h,d,f,v)},c.prototype.calculateLocalInertia=function(u,h){return h=h||new o,h.set(0,0,0),h},c.prototype.volume=function(){return Number.MAX_VALUE},c.prototype.calculateWorldAABB=function(u,h,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},c.prototype.updateBoundingSphereRadius=function(){var u=this.data,h=this.elementSize;this.boundingSphereRadius=new o(u.length*h,u[0].length*h,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=o;var r=t("./Shape"),s=t("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,c){return c=c||new s,c.set(0,0,0),c},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,c,u,h){u.copy(l),h.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=o;var r=t("./Shape"),s=t("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(c){var u=this.worldNormal;u.set(0,0,1),c.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(c,u){return u=u||new s,u},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;o.prototype.calculateWorldAABB=function(c,u,h,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;h.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=c.x),l.y===1&&(d.y=c.y),l.z===1&&(d.z=c.z),l.x===-1&&(h.x=c.x),l.y===-1&&(h.y=c.y),l.z===-1&&(h.z=c.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=r;var r=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=o;var r=t("./Shape"),s=t("../math/Vec3");function o(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,c){c=c||new s;var u=2*l*this.radius*this.radius/5;return c.x=u,c.y=u,c.z=u,c},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,c,u,h){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];u[g]=l[g]-d,h[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=u;var r=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),l=t("../collision/AABB"),c=t("../utils/Octree");function u(L,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(L),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new c,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var h=new s;u.prototype.updateTree=function(){var L=this.tree;L.reset(),L.aabb.copy(this.aabb);var M=this.scale;L.aabb.lowerBound.x*=1/M.x,L.aabb.lowerBound.y*=1/M.y,L.aabb.lowerBound.z*=1/M.z,L.aabb.upperBound.x*=1/M.x,L.aabb.upperBound.y*=1/M.y,L.aabb.upperBound.z*=1/M.z;for(var S=new l,C=new s,H=new s,G=new s,P=[C,H,G],k=0;k<this.indices.length/3;k++){var $=k*3;this._getUnscaledVertex(this.indices[$],C),this._getUnscaledVertex(this.indices[$+1],H),this._getUnscaledVertex(this.indices[$+2],G),S.setFromPoints(P),L.insert(S,k)}L.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(L,M){d.copy(L);var S=this.scale,C=S.x,H=S.y,G=S.z,P=d.lowerBound,k=d.upperBound;return P.x/=C,P.y/=H,P.z/=G,k.x/=C,k.y/=H,k.z/=G,this.tree.aabbQuery(d,M)},u.prototype.setScale=function(L){var M=this.scale.x===this.scale.y===this.scale.z,S=L.x===L.y===L.z;M&&S||this.updateNormals(),this.scale.copy(L),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var L=h,M=this.normals,S=0;S<this.indices.length/3;S++){var C=S*3,H=this.indices[C],G=this.indices[C+1],P=this.indices[C+2];this.getVertex(H,p),this.getVertex(G,y),this.getVertex(P,x),u.computeNormal(y,p,x,L),M[C]=L.x,M[C+1]=L.y,M[C+2]=L.z}},u.prototype.updateEdges=function(){for(var L={},M=function($,B){var O=H<G?H+"_"+G:G+"_"+H;L[O]=!0},S=0;S<this.indices.length/3;S++){var C=S*3,H=this.indices[C],G=this.indices[C+1];this.indices[C+2],M(),M(),M()}var P=Object.keys(L);this.edges=new Int16Array(P.length*2);for(var S=0;S<P.length;S++){var k=P[S].split("_");this.edges[2*S]=parseInt(k[0],10),this.edges[2*S+1]=parseInt(k[1],10)}},u.prototype.getEdgeVertex=function(L,M,S){var C=this.edges[L*2+(M?1:0)];this.getVertex(C,S)};var f=new s,v=new s;u.prototype.getEdgeVector=function(L,M){var S=f,C=v;this.getEdgeVertex(L,0,S),this.getEdgeVertex(L,1,C),C.vsub(S,M)};var g=new s,m=new s;u.computeNormal=function(L,M,S,C){M.vsub(L,m),S.vsub(M,g),g.cross(m,C),C.isZero()||C.normalize()};var p=new s,y=new s,x=new s;u.prototype.getVertex=function(L,M){var S=this.scale;return this._getUnscaledVertex(L,M),M.x*=S.x,M.y*=S.y,M.z*=S.z,M},u.prototype._getUnscaledVertex=function(L,M){var S=L*3,C=this.vertices;return M.set(C[S],C[S+1],C[S+2])},u.prototype.getWorldVertex=function(L,M,S,C){return this.getVertex(L,C),o.pointToWorldFrame(M,S,C,C),C},u.prototype.getTriangleVertices=function(L,M,S,C){var H=L*3;this.getVertex(this.indices[H],M),this.getVertex(this.indices[H+1],S),this.getVertex(this.indices[H+2],C)},u.prototype.getNormal=function(L,M){var S=L*3;return M.set(this.normals[S],this.normals[S+1],this.normals[S+2])};var _=new l;u.prototype.calculateLocalInertia=function(L,M){this.computeLocalAABB(_);var S=_.upperBound.x-_.lowerBound.x,C=_.upperBound.y-_.lowerBound.y,H=_.upperBound.z-_.lowerBound.z;return M.set(1/12*L*(2*C*2*C+2*H*2*H),1/12*L*(2*S*2*S+2*H*2*H),1/12*L*(2*C*2*C+2*S*2*S))};var E=new s;u.prototype.computeLocalAABB=function(L){var M=L.lowerBound,S=L.upperBound,C=this.vertices.length;this.vertices;var H=E;this.getVertex(0,H),M.copy(H),S.copy(H);for(var G=0;G!==C;G++)this.getVertex(G,H),H.x<M.x?M.x=H.x:H.x>S.x&&(S.x=H.x),H.y<M.y?M.y=H.y:H.y>S.y&&(S.y=H.y),H.z<M.z?M.z=H.z:H.z>S.z&&(S.z=H.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var L=0,M=this.vertices,S=new s,C=0,H=M.length/3;C!==H;C++){this.getVertex(C,S);var G=S.norm2();G>L&&(L=G)}this.boundingSphereRadius=Math.sqrt(L)},new s;var R=new o,D=new l;u.prototype.calculateWorldAABB=function(L,M,S,C){var H=R,G=D;H.position=L,H.quaternion=M,this.aabb.toWorldFrame(H,G),S.copy(G.lowerBound),C.copy(G.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(L,M,S,C,H){L=L||1,M=M||.5,S=S||8,C=C||6,H=H||Math.PI*2;for(var G=[],P=[],k=0;k<=S;k++)for(var $=0;$<=C;$++){var B=$/C*H,O=k/S*Math.PI*2,K=(L+M*Math.cos(O))*Math.cos(B),W=(L+M*Math.cos(O))*Math.sin(B),A=M*Math.sin(O);G.push(K,W,A)}for(var k=1;k<=S;k++)for(var $=1;$<=C;$++){var F=(C+1)*k+$-1,U=(C+1)*(k-1)+$-1,I=(C+1)*(k-1)+$,b=(C+1)*k+$;P.push(F,U,b),P.push(U,I,b)}return new u(G,P)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=s,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],l=[],c=[];s.prototype.solve=function(u,h){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=h.bodies,y=p.length,x=u,_,E,R,D,L,M;if(m!==0)for(var S=0;S!==y;S++)p[S].updateSolveMassProperties();var C=l,H=c,G=o;C.length=m,H.length=m,G.length=m;for(var S=0;S!==m;S++){var P=g[S];G[S]=0,H[S]=P.computeB(x),C[S]=1/P.computeC()}if(m!==0){for(var S=0;S!==y;S++){var k=p[S],$=k.vlambda,B=k.wlambda;$.set(0,0,0),B&&B.set(0,0,0)}for(d=0;d!==f;d++){D=0;for(var O=0;O!==m;O++){var P=g[O];_=H[O],E=C[O],M=G[O],L=P.computeGWlambda(),R=E*(_-L-P.eps*M),M+R<P.minForce?R=P.minForce-M:M+R>P.maxForce&&(R=P.maxForce-M),G[O]+=R,D+=R>0?R:-R,P.addToWlambda(R)}if(D*D<v)break}for(var S=0;S!==y;S++){var k=p[S],K=k.velocity,W=k.angularVelocity;K.vadd(k.vlambda,K),W&&W.vadd(k.wlambda,W)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,l=o.indexOf(s);l!==-1&&o.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver"),s=t("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var l=[],c=[],u={bodies:[]},h=s.STATIC;function d(p){for(var y=p.length,x=0;x!==y;x++){var _=p[x];if(!_.visited&&!(_.body.type&h))return _}return!1}var f=[];function v(p,y,x,_){for(f.push(p),p.visited=!0,y(p,x,_);f.length;)for(var E=f.pop(),R;R=d(E.children);)R.visited=!0,y(R,x,_),f.push(R)}function g(p,y,x){y.push(p.body);for(var _=p.eqs.length,E=0;E!==_;E++){var R=p.eqs[E];x.indexOf(R)===-1&&x.push(R)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,y){for(var x=l,_=this.nodePool,E=y.bodies,R=this.equations,D=R.length,L=E.length,M=this.subsolver;_.length<L;)_.push(this.createNode());x.length=L;for(var S=0;S<L;S++)x[S]=_[S];for(var S=0;S!==L;S++){var C=x[S];C.body=E[S],C.children.length=0,C.eqs.length=0,C.visited=!1}for(var H=0;H!==D;H++){var G=R[H],S=E.indexOf(G.bi),P=E.indexOf(G.bj),k=x[S],$=x[P];k.children.push($),k.eqs.push(G),$.children.push(k),$.eqs.push(G)}var B,O=0,K=c;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var W=u;B=d(x);){K.length=0,W.bodies.length=0,v(B,g,W.bodies,K);var A=K.length;K=K.sort(m);for(var S=0;S!==A;S++)M.addEquation(K[S]);M.solve(p,W),M.removeAllEquations(),O++}return O};function m(p,y){return y.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(o)===-1&&l[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var c=l[s].indexOf(o);return c!==-1&&l[s].splice(c,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,l=o[s.type];if(l!==void 0){s.target=this;for(var c=0,u=l.length;c<u;c++)l[c].call(this,s)}return this}}},{}],50:[function(t,n,i){var r=t("../collision/AABB"),s=t("../math/Vec3");n.exports=l;function o(h){h=h||{},this.root=h.root||null,this.aabb=h.aabb?h.aabb.clone():new r,this.data=[],this.children=[]}function l(h,d){d=d||{},d.root=null,d.aabb=h,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(h,d){this.children.length=this.data.length=0},o.prototype.insert=function(h,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(h))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(h,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var c=new s;o.prototype.subdivide=function(){var h=this.aabb,d=h.lowerBound,f=h.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),f.vsub(d,c),c.scale(.5,c);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var y=p.aabb.lowerBound;y.x*=c.x,y.y*=c.y,y.z*=c.z,y.vadd(d,y),y.vadd(c,p.aabb.upperBound)}},o.prototype.aabbQuery=function(h,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(h)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var u=new r;o.prototype.rayQuery=function(h,d,f){return h.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},o.prototype.removeEmptyNodes=function(){for(var h=[this];h.length;){for(var d=h.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(h,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var l=o;o=s,s=l}return this.data[s+"-"+o]},r.prototype.set=function(s,o,l){if(s>o){var c=o;o=s,s=c}var u=s+"-"+o;this.get(s,o)||this.data.keys.push(u),this.data[u]=l},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var l=o.pop();delete s[l]}}},{}],53:[function(t,n,i){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var l in o)l in s||(s[l]=o[l]);return s}},{}],54:[function(t,n,i){n.exports=o;var r=t("../math/Vec3"),s=t("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=v;var r=t("../collision/AABB"),s=t("../shapes/Shape"),o=t("../collision/Ray"),l=t("../math/Vec3"),c=t("../math/Transform");t("../shapes/ConvexPolyhedron");var u=t("../math/Quaternion");t("../solver/Solver");var h=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function v(ae){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new h,this.world=ae,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ae,ce,pe,ge,$e,Ne){var we;this.contactPointPool.length?(we=this.contactPointPool.pop(),we.bi=ae,we.bj=ce):we=new d(ae,ce),we.enabled=ae.collisionResponse&&ce.collisionResponse&&pe.collisionResponse&&ge.collisionResponse;var Le=this.currentContactMaterial;we.restitution=Le.restitution,we.setSpookParams(Le.contactEquationStiffness,Le.contactEquationRelaxation,this.world.dt);var ie=pe.material||ae.material,be=ge.material||ce.material;return ie&&be&&ie.restitution>=0&&be.restitution>=0&&(we.restitution=ie.restitution*be.restitution),we.si=$e||pe,we.sj=Ne||ge,we},v.prototype.createFrictionEquationsFromContact=function(ae,ce){var pe=ae.bi,ge=ae.bj,$e=ae.si,Ne=ae.sj,we=this.world,Le=this.currentContactMaterial,ie=Le.friction,be=$e.material||pe.material,Ue=Ne.material||ge.material;if(be&&Ue&&be.friction>=0&&Ue.friction>=0&&(ie=be.friction*Ue.friction),ie>0){var Ve=ie*we.gravity.length(),T=pe.invMass+ge.invMass;T>0&&(T=1/T);var z=this.frictionEquationPool,q=z.length?z.pop():new f(pe,ge,Ve*T),Y=z.length?z.pop():new f(pe,ge,Ve*T);return q.bi=Y.bi=pe,q.bj=Y.bj=ge,q.minForce=Y.minForce=-Ve*T,q.maxForce=Y.maxForce=Ve*T,q.ri.copy(ae.ri),q.rj.copy(ae.rj),Y.ri.copy(ae.ri),Y.rj.copy(ae.rj),ae.ni.tangents(q.t,Y.t),q.setSpookParams(Le.frictionEquationStiffness,Le.frictionEquationRelaxation,we.dt),Y.setSpookParams(Le.frictionEquationStiffness,Le.frictionEquationRelaxation,we.dt),q.enabled=Y.enabled=ae.enabled,ce.push(q,Y),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(ae){var ce=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ce,this.frictionResult)||ae===1)){var pe=this.frictionResult[this.frictionResult.length-2],ge=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var $e=ce.bi;ce.bj;for(var Ne=0;Ne!==ae;Ne++)ce=this.result[this.result.length-1-Ne],ce.bodyA!==$e?(g.vadd(ce.ni,g),m.vadd(ce.ri,m),p.vadd(ce.rj,p)):(g.vsub(ce.ni,g),m.vadd(ce.rj,m),p.vadd(ce.ri,p));var we=1/ae;m.scale(we,pe.ri),p.scale(we,pe.rj),ge.ri.copy(pe.ri),ge.rj.copy(pe.rj),g.normalize(),g.tangents(pe.t,ge.t)}};var y=new l,x=new l,_=new u,E=new u;v.prototype.getContacts=function(ae,ce,pe,ge,$e,Ne,we){this.contactPointPool=$e,this.frictionEquationPool=we,this.result=ge,this.frictionResult=Ne;for(var Le=_,ie=E,be=y,Ue=x,Ve=0,T=ae.length;Ve!==T;Ve++){var z=ae[Ve],q=ce[Ve],Y=null;z.material&&q.material&&(Y=pe.getContactMaterial(z.material,q.material)||null);for(var ee=0;ee<z.shapes.length;ee++){z.quaternion.mult(z.shapeOrientations[ee],Le),z.quaternion.vmult(z.shapeOffsets[ee],be),be.vadd(z.position,be);for(var ne=z.shapes[ee],Me=0;Me<q.shapes.length;Me++){q.quaternion.mult(q.shapeOrientations[Me],ie),q.quaternion.vmult(q.shapeOffsets[Me],Ue),Ue.vadd(q.position,Ue);var Ce=q.shapes[Me];if(!(be.distanceTo(Ue)>ne.boundingSphereRadius+Ce.boundingSphereRadius)){var He=null;ne.material&&Ce.material&&(He=pe.getContactMaterial(ne.material,Ce.material)||null),this.currentContactMaterial=He||Y||pe.defaultContactMaterial;var Oe=this[ne.type|Ce.type];Oe&&(ne.type<Ce.type?Oe.call(this,ne,Ce,be,Ue,Le,ie,z,q,ne,Ce):Oe.call(this,Ce,ne,Ue,be,ie,Le,q,z,ne,Ce))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(ae,ce,pe,ge,$e,Ne,we,Le){ae.convexPolyhedronRepresentation.material=ae.material,ce.convexPolyhedronRepresentation.material=ce.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,ce.convexPolyhedronRepresentation.collisionResponse=ce.collisionResponse,this.convexConvex(ae.convexPolyhedronRepresentation,ce.convexPolyhedronRepresentation,pe,ge,$e,Ne,we,Le,ae,ce)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ae,ce,pe,ge,$e,Ne,we,Le){ae.convexPolyhedronRepresentation.material=ae.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,this.convexConvex(ae.convexPolyhedronRepresentation,ce,pe,ge,$e,Ne,we,Le,ae,ce)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(ae,ce,pe,ge,$e,Ne,we,Le){ae.convexPolyhedronRepresentation.material=ae.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,this.convexParticle(ae.convexPolyhedronRepresentation,ce,pe,ge,$e,Ne,we,Le,ae,ce)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=this.createContactEquation(we,Le,ae,ce);ge.vsub(pe,ie.ni),ie.ni.normalize(),ie.ri.copy(ie.ni),ie.rj.copy(ie.ni),ie.ri.mult(ae.radius,ie.ri),ie.rj.mult(-ce.radius,ie.rj),ie.ri.vadd(pe,ie.ri),ie.ri.vsub(we.position,ie.ri),ie.rj.vadd(ge,ie.rj),ie.rj.vsub(Le.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)};var R=new l,D=new l,L=new l;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=new l,be=R;be.set(0,0,1),$e.vmult(be,be);for(var Ue=0;Ue<ce.vertices.length/3;Ue++){ce.getVertex(Ue,ie);var Ve=new l;Ve.copy(ie),c.pointToWorldFrame(ge,Ne,Ve,ie);var T=D;ie.vsub(pe,T);var z=be.dot(T);if(z<=0){var q=this.createContactEquation(we,Le,ae,ce);q.ni.copy(be);var Y=L;be.scale(T.dot(be),Y),ie.vsub(Y,Y),q.ri.copy(Y),q.ri.vsub(we.position,q.ri),q.rj.copy(ie),q.rj.vsub(Le.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}};var M=new l,S=new l;new l;var C=new l,H=new l,G=new l,P=new l,k=new l,$=new l,B=new l,O=new l,K=new l,W=new l,A=new l,F=new r,U=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=G,be=P,Ue=k,Ve=$,T=B,z=O,q=F,Y=H,ee=S,ne=U;c.pointToLocalFrame(ge,Ne,pe,T);var Me=ae.radius;q.lowerBound.set(T.x-Me,T.y-Me,T.z-Me),q.upperBound.set(T.x+Me,T.y+Me,T.z+Me),ce.getTrianglesInAABB(q,ne);for(var Ce=C,He=ae.radius*ae.radius,Oe=0;Oe<ne.length;Oe++)for(var Ie=0;Ie<3;Ie++)if(ce.getVertex(ce.indices[ne[Oe]*3+Ie],Ce),Ce.vsub(T,ee),ee.norm2()<=He){Y.copy(Ce),c.pointToWorldFrame(ge,Ne,Y,Ce),Ce.vsub(pe,ee);var Se=this.createContactEquation(we,Le,ae,ce);Se.ni.copy(ee),Se.ni.normalize(),Se.ri.copy(Se.ni),Se.ri.scale(ae.radius,Se.ri),Se.ri.vadd(pe,Se.ri),Se.ri.vsub(we.position,Se.ri),Se.rj.copy(Ce),Se.rj.vsub(Le.position,Se.rj),this.result.push(Se),this.createFrictionEquationsFromContact(Se,this.frictionResult)}for(var Oe=0;Oe<ne.length;Oe++)for(var Ie=0;Ie<3;Ie++){ce.getVertex(ce.indices[ne[Oe]*3+Ie],ie),ce.getVertex(ce.indices[ne[Oe]*3+(Ie+1)%3],be),be.vsub(ie,Ue),T.vsub(be,z);var ht=z.dot(Ue);T.vsub(ie,z);var ft=z.dot(Ue);if(ft>0&&ht<0){T.vsub(ie,z),Ve.copy(Ue),Ve.normalize(),ft=z.dot(Ve),Ve.scale(ft,z),z.vadd(ie,z);var _t=z.distanceTo(T);if(_t<ae.radius){var Se=this.createContactEquation(we,Le,ae,ce);z.vsub(T,Se.ni),Se.ni.normalize(),Se.ni.scale(ae.radius,Se.ri),c.pointToWorldFrame(ge,Ne,z,z),z.vsub(Le.position,Se.rj),c.vectorToWorldFrame(Ne,Se.ni,Se.ni),c.vectorToWorldFrame(Ne,Se.ri,Se.ri),this.result.push(Se),this.createFrictionEquationsFromContact(Se,this.frictionResult)}}}for(var Lt=K,ut=W,ke=A,$t=M,Oe=0,tt=ne.length;Oe!==tt;Oe++){ce.getTriangleVertices(ne[Oe],Lt,ut,ke),ce.getNormal(ne[Oe],$t),T.vsub(Lt,z);var _t=z.dot($t);if($t.scale(_t,z),T.vsub(z,z),_t=z.distanceTo(T),o.pointInTriangle(z,Lt,ut,ke)&&_t<ae.radius){var Se=this.createContactEquation(we,Le,ae,ce);z.vsub(T,Se.ni),Se.ni.normalize(),Se.ni.scale(ae.radius,Se.ri),c.pointToWorldFrame(ge,Ne,z,z),z.vsub(Le.position,Se.rj),c.vectorToWorldFrame(Ne,Se.ni,Se.ni),c.vectorToWorldFrame(Ne,Se.ri,Se.ri),this.result.push(Se),this.createFrictionEquationsFromContact(Se,this.frictionResult)}}ne.length=0};var I=new l,b=new l;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=this.createContactEquation(we,Le,ae,ce);if(ie.ni.set(0,0,1),Ne.vmult(ie.ni,ie.ni),ie.ni.negate(ie.ni),ie.ni.normalize(),ie.ni.mult(ae.radius,ie.ri),pe.vsub(ge,I),ie.ni.mult(ie.ni.dot(I),b),I.vsub(b,ie.rj),-I.dot(ie.ni)<=ae.radius){var be=ie.ri,Ue=ie.rj;be.vadd(pe,be),be.vsub(we.position,be),Ue.vadd(ge,Ue),Ue.vsub(Le.position,Ue),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)}};var j=new l,se=new l,te=new l;function Z(ae,ce,pe){for(var ge=null,$e=ae.length,Ne=0;Ne!==$e;Ne++){var we=ae[Ne],Le=j;ae[(Ne+1)%$e].vsub(we,Le);var ie=se;Le.cross(ce,ie);var be=te;pe.vsub(we,be);var Ue=ie.dot(be);if(ge===null||Ue>0&&ge===!0||Ue<=0&&ge===!1){ge===null&&(ge=Ue>0);continue}else return!1}return!0}var he=new l,le=new l,X=new l,Ae=new l,de=[new l,new l,new l,new l,new l,new l],re=new l,oe=new l,qe=new l,Re=new l;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=this.v3pool,be=de;pe.vsub(ge,he),ce.getSideNormals(be,Ne);for(var Ue=ae.radius,Ve=!1,T=oe,z=qe,q=Re,Y=null,ee=0,ne=0,Me=0,Ce=null,He=0,Oe=be.length;He!==Oe&&Ve===!1;He++){var Ie=le;Ie.copy(be[He]);var Se=Ie.norm();Ie.normalize();var ht=he.dot(Ie);if(ht<Se+Ue&&ht>0){var ft=X,_t=Ae;ft.copy(be[(He+1)%3]),_t.copy(be[(He+2)%3]);var Lt=ft.norm(),ut=_t.norm();ft.normalize(),_t.normalize();var ke=he.dot(ft),$t=he.dot(_t);if(ke<Lt&&ke>-Lt&&$t<ut&&$t>-ut){var bt=Math.abs(ht-Se-Ue);(Ce===null||bt<Ce)&&(Ce=bt,ne=ke,Me=$t,Y=Se,T.copy(Ie),z.copy(ft),q.copy(_t),ee++)}}}if(ee){Ve=!0;var Je=this.createContactEquation(we,Le,ae,ce);T.mult(-Ue,Je.ri),Je.ni.copy(T),Je.ni.negate(Je.ni),T.mult(Y,T),z.mult(ne,z),T.vadd(z,T),q.mult(Me,q),T.vadd(q,Je.rj),Je.ri.vadd(pe,Je.ri),Je.ri.vsub(we.position,Je.ri),Je.rj.vadd(ge,Je.rj),Je.rj.vsub(Le.position,Je.rj),this.result.push(Je),this.createFrictionEquationsFromContact(Je,this.frictionResult)}for(var tt=ie.get(),Bt=re,Ot=0;Ot!==2&&!Ve;Ot++)for(var At=0;At!==2&&!Ve;At++)for(var Rt=0;Rt!==2&&!Ve;Rt++)if(tt.set(0,0,0),Ot?tt.vadd(be[0],tt):tt.vsub(be[0],tt),At?tt.vadd(be[1],tt):tt.vsub(be[1],tt),Rt?tt.vadd(be[2],tt):tt.vsub(be[2],tt),ge.vadd(tt,Bt),Bt.vsub(pe,Bt),Bt.norm2()<Ue*Ue){Ve=!0;var Je=this.createContactEquation(we,Le,ae,ce);Je.ri.copy(Bt),Je.ri.normalize(),Je.ni.copy(Je.ri),Je.ri.mult(Ue,Je.ri),Je.rj.copy(tt),Je.ri.vadd(pe,Je.ri),Je.ri.vsub(we.position,Je.ri),Je.rj.vadd(ge,Je.rj),Je.rj.vsub(Le.position,Je.rj),this.result.push(Je),this.createFrictionEquationsFromContact(Je,this.frictionResult)}ie.release(tt),tt=null;for(var vt=ie.get(),zt=ie.get(),Je=ie.get(),yt=ie.get(),bt=ie.get(),xn=be.length,Ot=0;Ot!==xn&&!Ve;Ot++)for(var At=0;At!==xn&&!Ve;At++)if(Ot%3!==At%3){be[At].cross(be[Ot],vt),vt.normalize(),be[Ot].vadd(be[At],zt),Je.copy(pe),Je.vsub(zt,Je),Je.vsub(ge,Je);var un=Je.dot(vt);vt.mult(un,yt);for(var Rt=0;Rt===Ot%3||Rt===At%3;)Rt++;bt.copy(pe),bt.vsub(yt,bt),bt.vsub(zt,bt),bt.vsub(ge,bt);var pc=Math.abs(un),mc=bt.norm();if(pc<be[Rt].norm()&&mc<Ue){Ve=!0;var St=this.createContactEquation(we,Le,ae,ce);zt.vadd(yt,St.rj),St.rj.copy(St.rj),bt.negate(St.ni),St.ni.normalize(),St.ri.copy(St.rj),St.ri.vadd(ge,St.ri),St.ri.vsub(pe,St.ri),St.ri.normalize(),St.ri.mult(Ue,St.ri),St.ri.vadd(pe,St.ri),St.ri.vsub(we.position,St.ri),St.rj.vadd(ge,St.rj),St.rj.vsub(Le.position,St.rj),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}ie.release(vt,zt,Je,yt,bt)};var Ge=new l,ye=new l,Ze=new l,et=new l,N=new l,w=new l,J=new l,fe=new l,ue=new l,me=new l;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=this.v3pool;pe.vsub(ge,Ge);for(var be=ce.faceNormals,Ue=ce.faces,Ve=ce.vertices,T=ae.radius,z=0;z!==Ve.length;z++){var q=Ve[z],Y=N;Ne.vmult(q,Y),ge.vadd(Y,Y);var ee=et;if(Y.vsub(pe,ee),ee.norm2()<T*T){Me=!0;var ne=this.createContactEquation(we,Le,ae,ce);ne.ri.copy(ee),ne.ri.normalize(),ne.ni.copy(ne.ri),ne.ri.mult(T,ne.ri),Y.vsub(ge,ne.rj),ne.ri.vadd(pe,ne.ri),ne.ri.vsub(we.position,ne.ri),ne.rj.vadd(ge,ne.rj),ne.rj.vsub(Le.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);return}}for(var Me=!1,z=0,Ce=Ue.length;z!==Ce&&Me===!1;z++){var He=be[z],Oe=Ue[z],Ie=w;Ne.vmult(He,Ie);var Se=J;Ne.vmult(Ve[Oe[0]],Se),Se.vadd(ge,Se);var ht=fe;Ie.mult(-T,ht),pe.vadd(ht,ht);var ft=ue;ht.vsub(Se,ft);var _t=ft.dot(Ie),Lt=me;if(pe.vsub(Se,Lt),_t<0&&Lt.dot(Ie)>0){for(var ut=[],ke=0,$t=Oe.length;ke!==$t;ke++){var tt=ie.get();Ne.vmult(Ve[Oe[ke]],tt),ge.vadd(tt,tt),ut.push(tt)}if(Z(ut,Ie,pe)){Me=!0;var ne=this.createContactEquation(we,Le,ae,ce);Ie.mult(-T,ne.ri),Ie.negate(ne.ni);var Bt=ie.get();Ie.mult(-_t,Bt);var Ot=ie.get();Ie.mult(-T,Ot),pe.vsub(ge,ne.rj),ne.rj.vadd(Ot,ne.rj),ne.rj.vadd(Bt,ne.rj),ne.rj.vadd(ge,ne.rj),ne.rj.vsub(Le.position,ne.rj),ne.ri.vadd(pe,ne.ri),ne.ri.vsub(we.position,ne.ri),ie.release(Bt),ie.release(Ot),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(var ke=0,At=ut.length;ke!==At;ke++)ie.release(ut[ke]);return}else for(var ke=0;ke!==Oe.length;ke++){var Rt=ie.get(),vt=ie.get();Ne.vmult(Ve[Oe[(ke+1)%Oe.length]],Rt),Ne.vmult(Ve[Oe[(ke+2)%Oe.length]],vt),ge.vadd(Rt,Rt),ge.vadd(vt,vt);var zt=ye;vt.vsub(Rt,zt);var Je=Ze;zt.unit(Je);var yt=ie.get(),bt=ie.get();pe.vsub(Rt,bt);var xn=bt.dot(Je);Je.mult(xn,yt),yt.vadd(Rt,yt);var un=ie.get();if(yt.vsub(pe,un),xn>0&&xn*xn<zt.norm2()&&un.norm2()<T*T){var ne=this.createContactEquation(we,Le,ae,ce);yt.vsub(ge,ne.rj),yt.vsub(pe,ne.ni),ne.ni.normalize(),ne.ni.mult(T,ne.ri),ne.rj.vadd(ge,ne.rj),ne.rj.vsub(Le.position,ne.rj),ne.ri.vadd(pe,ne.ri),ne.ri.vsub(we.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(var ke=0,At=ut.length;ke!==At;ke++)ie.release(ut[ke]);ie.release(Rt),ie.release(vt),ie.release(yt),ie.release(un),ie.release(bt);return}ie.release(Rt),ie.release(vt),ie.release(yt),ie.release(un),ie.release(bt)}for(var ke=0,At=ut.length;ke!==At;ke++)ie.release(ut[ke])}}},new l,new l,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(ae,ce,pe,ge,$e,Ne,we,Le){ce.convexPolyhedronRepresentation.material=ce.material,ce.convexPolyhedronRepresentation.collisionResponse=ce.collisionResponse,this.planeConvex(ae,ce.convexPolyhedronRepresentation,pe,ge,$e,Ne,we,Le)};var ze=new l,Te=new l,Be=new l,je=new l;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=ze,be=Te;be.set(0,0,1),$e.vmult(be,be);for(var Ue=0,Ve=Be,T=0;T!==ce.vertices.length;T++){ie.copy(ce.vertices[T]),Ne.vmult(ie,ie),ge.vadd(ie,ie),ie.vsub(pe,Ve);var z=be.dot(Ve);if(z<=0){var q=this.createContactEquation(we,Le,ae,ce),Y=je;be.mult(be.dot(Ve),Y),ie.vsub(Y,Y),Y.vsub(pe,q.ri),q.ni.copy(be),ie.vsub(ge,q.rj),q.ri.vadd(pe,q.ri),q.ri.vsub(we.position,q.ri),q.rj.vadd(ge,q.rj),q.rj.vsub(Le.position,q.rj),this.result.push(q),Ue++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(q,this.frictionResult)}}this.enableFrictionReduction&&Ue&&this.createFrictionFromAverage(Ue)};var nt=new l,_e=new l;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ae,ce,pe,ge,$e,Ne,we,Le,ie,be,Ue,Ve){var T=nt;if(!(pe.distanceTo(ge)>ae.boundingSphereRadius+ce.boundingSphereRadius)&&ae.findSeparatingAxis(ce,pe,$e,ge,Ne,T,Ue,Ve)){var z=[],q=_e;ae.clipAgainstHull(pe,$e,ce,ge,Ne,T,-100,100,z);for(var Y=0,ee=0;ee!==z.length;ee++){var ne=this.createContactEquation(we,Le,ae,ce,ie,be),Me=ne.ri,Ce=ne.rj;T.negate(ne.ni),z[ee].normal.negate(q),q.mult(z[ee].depth,q),z[ee].point.vadd(q,Me),Ce.copy(z[ee].point),Me.vsub(pe,Me),Ce.vsub(ge,Ce),Me.vadd(pe,Me),Me.vsub(we.position,Me),Ce.vadd(ge,Ce),Ce.vsub(Le.position,Ce),this.result.push(ne),Y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ne,this.frictionResult)}this.enableFrictionReduction&&Y&&this.createFrictionFromAverage(Y)}};var lt=new l,Ke=new l,Ye=new l;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=lt;ie.set(0,0,1),we.quaternion.vmult(ie,ie);var be=Ke;ge.vsub(we.position,be);var Ue=ie.dot(be);if(Ue<=0){var Ve=this.createContactEquation(Le,we,ce,ae);Ve.ni.copy(ie),Ve.ni.negate(Ve.ni),Ve.ri.set(0,0,0);var T=Ye;ie.mult(ie.dot(ge),T),ge.vsub(T,T),Ve.rj.copy(T),this.result.push(Ve),this.createFrictionEquationsFromContact(Ve,this.frictionResult)}};var Xe=new l;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=Xe;ie.set(0,0,1),ge.vsub(pe,ie);var be=ie.norm2();if(be<=ae.radius*ae.radius){var Ue=this.createContactEquation(Le,we,ce,ae);ie.normalize(),Ue.rj.copy(ie),Ue.rj.mult(ae.radius,Ue.rj),Ue.ni.copy(ie),Ue.ni.negate(Ue.ni),Ue.ri.set(0,0,0),this.result.push(Ue),this.createFrictionEquationsFromContact(Ue,this.frictionResult)}};var V=new u,Ee=new l;new l;var xe=new l,Pe=new l,De=new l;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=-1,be=xe,Ue=De,Ve=null,T=Ee;if(T.copy(ge),T.vsub(pe,T),$e.conjugate(V),V.vmult(T,T),ae.pointIsInside(T)){ae.worldVerticesNeedsUpdate&&ae.computeWorldVertices(pe,$e),ae.worldFaceNormalsNeedsUpdate&&ae.computeWorldFaceNormals($e);for(var z=0,q=ae.faces.length;z!==q;z++){var Y=[ae.worldVertices[ae.faces[z][0]]],ee=ae.worldFaceNormals[z];ge.vsub(Y[0],Pe);var ne=-ee.dot(Pe);(Ve===null||Math.abs(ne)<Math.abs(Ve))&&(Ve=ne,ie=z,be.copy(ee))}if(ie!==-1){var Me=this.createContactEquation(Le,we,ce,ae);be.mult(Ve,Ue),Ue.vadd(ge,Ue),Ue.vsub(pe,Ue),Me.rj.copy(Ue),be.negate(Me.ni),Me.ri.set(0,0,0);var Ce=Me.ri,He=Me.rj;Ce.vadd(ge,Ce),Ce.vsub(Le.position,Ce),He.vadd(pe,He),He.vsub(we.position,He),this.result.push(Me),this.createFrictionEquationsFromContact(Me,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ae,ce,pe,ge,$e,Ne,we,Le){ae.convexPolyhedronRepresentation.material=ae.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,this.convexHeightfield(ae.convexPolyhedronRepresentation,ce,pe,ge,$e,Ne,we,Le)};var ve=new l,We=new l,Qe=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=ce.data,be=ce.elementSize,Ue=ae.boundingSphereRadius,Ve=We,T=Qe,z=ve;c.pointToLocalFrame(ge,Ne,pe,z);var q=Math.floor((z.x-Ue)/be)-1,Y=Math.ceil((z.x+Ue)/be)+1,ee=Math.floor((z.y-Ue)/be)-1,ne=Math.ceil((z.y+Ue)/be)+1;if(!(Y<0||ne<0||q>ie.length||ee>ie[0].length)){q<0&&(q=0),Y<0&&(Y=0),ee<0&&(ee=0),ne<0&&(ne=0),q>=ie.length&&(q=ie.length-1),Y>=ie.length&&(Y=ie.length-1),ne>=ie[0].length&&(ne=ie[0].length-1),ee>=ie[0].length&&(ee=ie[0].length-1);var Me=[];ce.getRectMinMax(q,ee,Y,ne,Me);var Ce=Me[0],He=Me[1];if(!(z.z-Ue>He||z.z+Ue<Ce))for(var Oe=q;Oe<Y;Oe++)for(var Ie=ee;Ie<ne;Ie++)ce.getConvexTrianglePillar(Oe,Ie,!1),c.pointToWorldFrame(ge,Ne,ce.pillarOffset,Ve),pe.distanceTo(Ve)<ce.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.convexConvex(ae,ce.pillarConvex,pe,Ve,$e,Ne,we,Le,null,null,T,null),ce.getConvexTrianglePillar(Oe,Ie,!0),c.pointToWorldFrame(ge,Ne,ce.pillarOffset,Ve),pe.distanceTo(Ve)<ce.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.convexConvex(ae,ce.pillarConvex,pe,Ve,$e,Ne,we,Le,null,null,T,null)}};var wt=new l,it=new l;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ae,ce,pe,ge,$e,Ne,we,Le){var ie=ce.data,be=ae.radius,Ue=ce.elementSize,Ve=it,T=wt;c.pointToLocalFrame(ge,Ne,pe,T);var z=Math.floor((T.x-be)/Ue)-1,q=Math.ceil((T.x+be)/Ue)+1,Y=Math.floor((T.y-be)/Ue)-1,ee=Math.ceil((T.y+be)/Ue)+1;if(!(q<0||ee<0||z>ie.length||ee>ie[0].length)){z<0&&(z=0),q<0&&(q=0),Y<0&&(Y=0),ee<0&&(ee=0),z>=ie.length&&(z=ie.length-1),q>=ie.length&&(q=ie.length-1),ee>=ie[0].length&&(ee=ie[0].length-1),Y>=ie[0].length&&(Y=ie[0].length-1);var ne=[];ce.getRectMinMax(z,Y,q,ee,ne);var Me=ne[0],Ce=ne[1];if(!(T.z-be>Ce||T.z+be<Me))for(var He=this.result,Oe=z;Oe<q;Oe++)for(var Ie=Y;Ie<ee;Ie++){var Se=He.length;ce.getConvexTrianglePillar(Oe,Ie,!1),c.pointToWorldFrame(ge,Ne,ce.pillarOffset,Ve),pe.distanceTo(Ve)<ce.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.sphereConvex(ae,ce.pillarConvex,pe,Ve,$e,Ne,we,Le),ce.getConvexTrianglePillar(Oe,Ie,!0),c.pointToWorldFrame(ge,Ne,ce.pillarOffset,Ve),pe.distanceTo(Ve)<ce.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.sphereConvex(ae,ce.pillarConvex,pe,Ve,$e,Ne,we,Le);var ht=He.length-Se;if(ht>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=_;var r=t("../shapes/Shape"),s=t("../math/Vec3"),o=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var c=t("./Narrowphase"),u=t("../utils/EventTarget"),h=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),v=t("../objects/Body"),g=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),p=t("../collision/AABB"),y=t("../collision/Ray"),x=t("../collision/NaiveBroadphase");function _(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new x,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new c(this),this.collisionMatrix=new h,this.collisionMatrixPrevious=new h,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new u,new p;var E=new y;if(_.prototype.getContactMaterial=function(O,K){return this.contactMaterialTable.get(O.id,K.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var O=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=O,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(O){this.bodies.indexOf(O)===-1&&(O.index=this.bodies.length,this.bodies.push(O),O.world=this,O.initPosition.copy(O.position),O.initVelocity.copy(O.velocity),O.timeLastSleepy=this.time,O instanceof v&&(O.initAngularVelocity.copy(O.angularVelocity),O.initQuaternion.copy(O.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=O,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(O){this.constraints.push(O)},_.prototype.removeConstraint=function(O){var K=this.constraints.indexOf(O);K!==-1&&this.constraints.splice(K,1)},_.prototype.rayTest=function(O,K,W){W instanceof m?this.raycastClosest(O,K,{skipBackfaces:!0},W):this.raycastAll(O,K,{skipBackfaces:!0},W)},_.prototype.raycastAll=function(O,K,W,A){return W.mode=y.ALL,W.from=O,W.to=K,W.callback=A,E.intersectWorld(this,W)},_.prototype.raycastAny=function(O,K,W,A){return W.mode=y.ANY,W.from=O,W.to=K,W.result=A,E.intersectWorld(this,W)},_.prototype.raycastClosest=function(O,K,W,A){return W.mode=y.CLOSEST,W.from=O,W.to=K,W.result=A,E.intersectWorld(this,W)},_.prototype.remove=function(O){O.world=null;var K=this.bodies.length-1,W=this.bodies,A=W.indexOf(O);if(A!==-1){W.splice(A,1);for(var F=0;F!==W.length;F++)W[F].index=F;this.collisionMatrix.setNumObjects(K),this.removeBodyEvent.body=O,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(O){this.materials.push(O)},_.prototype.addContactMaterial=function(O){this.contactmaterials.push(O),this.contactMaterialTable.set(O.materials[0].id,O.materials[1].id,O)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var D=new s;_.prototype.step=function(O,K,W){if(W=W||10,K=K||0,K===0)this.internalStep(O),this.time+=O;else{var A=Math.floor((this.time+K)/O)-Math.floor(this.time/O);A=Math.min(A,W);for(var F=performance.now(),U=0;U!==A&&(this.internalStep(O),!(performance.now()-F>O*1e3));U++);this.time+=K;for(var I=this.time%O,b=I/O,j=D,se=this.bodies,te=0;te!==se.length;te++){var Z=se[te];Z.type!==v.STATIC&&Z.sleepState!==v.SLEEPING?(Z.position.vsub(Z.previousPosition,j),j.scale(b,j),Z.position.vadd(j,Z.interpolatedPosition)):(Z.interpolatedPosition.copy(Z.position),Z.interpolatedQuaternion.copy(Z.quaternion))}}};var L={type:"postStep"},M={type:"preStep"},S={type:"collide",body:null,contact:null},C=[],H=[],G=[],P=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var k=new o,$=new o,B=new s;_.prototype.internalStep=function(O){this.dt=O;var K=this.contacts,W=G,A=P,F=this.numObjects(),U=this.bodies,I=this.solver,b=this.gravity,j=this.doProfiling,se=this.profile,te=v.DYNAMIC,Z,he=this.constraints,le=H;b.norm();var X=b.x,Ae=b.y,de=b.z,re=0;for(j&&(Z=performance.now()),re=0;re!==F;re++){var oe=U[re];if(oe.type&te){var qe=oe.force,Re=oe.mass;qe.x+=Re*X,qe.y+=Re*Ae,qe.z+=Re*de}}for(var re=0,Ge=this.subsystems.length;re!==Ge;re++)this.subsystems[re].update();j&&(Z=performance.now()),W.length=0,A.length=0,this.broadphase.collisionPairs(this,W,A),j&&(se.broadphase=performance.now()-Z);var nt=he.length;for(re=0;re!==nt;re++){var ye=he[re];if(!ye.collideConnected)for(var Ze=W.length-1;Ze>=0;Ze-=1)(ye.bodyA===W[Ze]&&ye.bodyB===A[Ze]||ye.bodyB===W[Ze]&&ye.bodyA===A[Ze])&&(W.splice(Ze,1),A.splice(Ze,1))}this.collisionMatrixTick(),j&&(Z=performance.now());var et=C,N=K.length;for(re=0;re!==N;re++)et.push(K[re]);K.length=0;var w=this.frictionEquations.length;for(re=0;re!==w;re++)le.push(this.frictionEquations[re]);this.frictionEquations.length=0,this.narrowphase.getContacts(W,A,this,K,et,this.frictionEquations,le),j&&(se.narrowphase=performance.now()-Z),j&&(Z=performance.now());for(var re=0;re<this.frictionEquations.length;re++)I.addEquation(this.frictionEquations[re]);for(var J=K.length,fe=0;fe!==J;fe++){var ye=K[fe],oe=ye.bi,ue=ye.bj;ye.si,ye.sj;var me;if(oe.material&&ue.material?me=this.getContactMaterial(oe.material,ue.material)||this.defaultContactMaterial:me=this.defaultContactMaterial,me.friction,oe.material&&ue.material&&(oe.material.friction>=0&&ue.material.friction>=0&&oe.material.friction*ue.material.friction,oe.material.restitution>=0&&ue.material.restitution>=0&&(ye.restitution=oe.material.restitution*ue.material.restitution)),I.addEquation(ye),oe.allowSleep&&oe.type===v.DYNAMIC&&oe.sleepState===v.SLEEPING&&ue.sleepState===v.AWAKE&&ue.type!==v.STATIC){var ze=ue.velocity.norm2()+ue.angularVelocity.norm2(),Te=Math.pow(ue.sleepSpeedLimit,2);ze>=Te*2&&(oe._wakeUpAfterNarrowphase=!0)}if(ue.allowSleep&&ue.type===v.DYNAMIC&&ue.sleepState===v.SLEEPING&&oe.sleepState===v.AWAKE&&oe.type!==v.STATIC){var Be=oe.velocity.norm2()+oe.angularVelocity.norm2(),je=Math.pow(oe.sleepSpeedLimit,2);Be>=je*2&&(ue._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(oe,ue,!0),this.collisionMatrixPrevious.get(oe,ue)||(S.body=ue,S.contact=ye,oe.dispatchEvent(S),S.body=oe,ue.dispatchEvent(S))}for(j&&(se.makeContactConstraints=performance.now()-Z,Z=performance.now()),re=0;re!==F;re++){var oe=U[re];oe._wakeUpAfterNarrowphase&&(oe.wakeUp(),oe._wakeUpAfterNarrowphase=!1)}var nt=he.length;for(re=0;re!==nt;re++){var ye=he[re];ye.update();for(var Ze=0,_e=ye.equations.length;Ze!==_e;Ze++){var lt=ye.equations[Ze];I.addEquation(lt)}}I.solve(O,this),j&&(se.solve=performance.now()-Z),I.removeAllEquations();var Ke=Math.pow;for(re=0;re!==F;re++){var oe=U[re];if(oe.type&te){var Ye=Ke(1-oe.linearDamping,O),Xe=oe.velocity;Xe.mult(Ye,Xe);var V=oe.angularVelocity;if(V){var Ee=Ke(1-oe.angularDamping,O);V.mult(Ee,V)}}}for(this.dispatchEvent(M),re=0;re!==F;re++){var oe=U[re];oe.preStep&&oe.preStep.call(oe)}j&&(Z=performance.now());var xe=k,Pe=$,De=this.stepnumber,ve=v.DYNAMIC|v.KINEMATIC,We=De%(this.quatNormalizeSkip+1)===0,Qe=this.quatNormalizeFast,wt=O*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,re=0;re!==F;re++){var it=U[re],ae=it.force,ce=it.torque;if(it.type&ve&&it.sleepState!==v.SLEEPING){var pe=it.velocity,ge=it.angularVelocity,$e=it.position,Ne=it.quaternion,we=it.invMass,Le=it.invInertiaWorld;pe.x+=ae.x*we*O,pe.y+=ae.y*we*O,pe.z+=ae.z*we*O,it.angularVelocity&&(Le.vmult(ce,B),B.mult(O,B),B.vadd(ge,ge)),$e.x+=pe.x*O,$e.y+=pe.y*O,$e.z+=pe.z*O,it.angularVelocity&&(xe.set(ge.x,ge.y,ge.z,0),xe.mult(Ne,Pe),Ne.x+=wt*Pe.x,Ne.y+=wt*Pe.y,Ne.z+=wt*Pe.z,Ne.w+=wt*Pe.w,We&&(Qe?Ne.normalizeFast():Ne.normalize())),it.aabb&&(it.aabbNeedsUpdate=!0),it.updateInertiaWorld&&it.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,j&&(se.integrate=performance.now()-Z),this.time+=O,this.stepnumber+=1,this.dispatchEvent(L),re=0;re!==F;re++){var oe=U[re],ie=oe.postStep;ie&&ie.call(oe)}if(this.allowSleep)for(re=0;re!==F;re++)U[re].sleepTick(this.time)},_.prototype.clearForces=function(){for(var O=this.bodies,K=O.length,W=0;W!==K;W++){var A=O[W];A.force,A.torque,A.force.set(0,0,0),A.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(ig);const jn=new Dm,vn=new qt(75,window.innerWidth/window.innerHeight,.1,1e3);jn.background=new rt(.25,.6,.95);const rg=new hv(14737632,1);jn.add(rg);const uc=new lc(16777215,.6);uc.position.set(0,4,2);jn.add(uc);const $n=new ec;$n.toneMapping=bl;$n.outputColorSpace=Et;$n.setPixelRatio(window.devicePixelRatio);$n.setSize(window.innerWidth,window.innerHeight);const dc=new Qi(1,1,1),sg=new sc({color:"white"}),ag=new sc({color:"blue"}),rs=new Kt(dc,sg),$i=new Kt(dc,ag);jn.add($i);const og=new Ev;og.load("./hdr/solitude_night_4k.hdr",function(a){a.mapping=$r,jn.background=a,jn.environment=a});$n.setSize(window.innerWidth,window.innerHeight);document.body.appendChild($n.domElement);let ur,Di,Ui,xr=[];const ba=new Tv;ba.load("./modelos/Kirby.gltf",function(a){ur=a.scene.children[0],hs++,xr.push(ur),Ra(),ur.position.set(5,0,0),ur.castShadow=!0,ur.traverse(e=>{e.isMesh&&(e.castShadow=!0)})},function(a){console.log(a.loaded/a.total*100+"% loaded")},function(a){console.log("An error happened")});ba.load("./modelos/Nutria.gltf",function(a){Di=a.scene.children[0],hs++,xr.push(Di),Ra();const e=2;Di.scale.set(e,e,e),Di.position.set(0,0,0),Di.castShadow=!0,Di.traverse(t=>{t.isMesh&&(t.castShadow=!0)})},function(a){console.log(a.loaded/a.total*100+"% loaded")},function(a){console.log("An error happened")});ba.load("./modelos/Toad.gltf",function(a){Ui=a.scene.children[0],hs++,xr.push(Ui),Ra(),Ui.scale.set(.5,.5,.5),Ui.position.set(-5,0,0),Ui.castShadow=!0,Ui.traverse(e=>{e.isMesh&&(e.castShadow=!0)})},function(a){console.log(a.loaded/a.total*100+"% loaded")},function(a){console.log("An error happened")});let hs=0;function Ra(){hs>=3&&xr.forEach(a=>{jn.add(a)})}vn.position.set(0,5,10);vn.lookAt(0,0,0);rs.position.set(0,5,10);$i.position.set(0,5,10);let Gn=0,lg=1/.5;const cg=new dv;let dn=document.querySelectorAll(".card");document.addEventListener("mousedown",hg);const El=new Sv,Ys=new ct;let oa=!1;function hg(a){if(a.button==2){rs.position.copy(vn.position.clone()),$i.position.set(0,5,10),Gn=0,oa=!1,li=1,dn.forEach(t=>{t.classList.add("hide"),t.classList.remove("show"),t.scrollIntoView({behavior:"smooth"})});return}Ys.x=a.clientX/window.innerWidth*2-1,Ys.y=-(a.clientY/window.innerHeight)*2+1,El.setFromCamera(Ys,vn);const e=El.intersectObjects(xr);if(e.length>0){rs.position.set(0,5,10);const t=e[0].object.position.clone();console.log(e[0].object),$i.position.copy(t),Gn=0,oa=!0,console.log(e[0].object.name),e[0].object.name==="Merged_Kirby"&&(dn[0].classList.add("show"),dn[0].classList.remove("hide"),dn[0].innerHTML=`
			<h2>Kirby</h2>
            <p>
                Es una escultura de Kirby hecha en Zbrush, proyecto para la escuela, semestre 4 hecho por Carlos Gutierrez
            </p>
            <img class="smallimg" src="/imag/Kirby.PNG" alt="nada">
			`,li=.65),e[0].object.name==="Merged_busto_nutria"&&(dn[0].classList.add("show"),dn[0].classList.remove("hide"),dn[0].innerHTML=`
			<h2>Busto Nutria</h2>
            <p>
				Es un busto de una nutria hecha y pintado en Zbrush, proyecto para la escuela, semestre 4 hecho por Carlos Gutierrez
            </p>
            <img class="smallimg" src="/imag/Busto Nutria.PNG" alt="nada">
			`,li=.75),e[0].object.name==="Merged_Toad"&&(dn[0].classList.add("show"),dn[0].classList.remove("hide"),dn[0].innerHTML=`
			<h2>Toad</h2>
            <p>
				Es una escultura de Toad hecha y pintada en Zbrush,  proyecto para la escuela, semestre 4 hecho por Carlos Gutierrez
            </p>
            <img class="smallimg" src="/imag/Toad.PNG" alt="nada">
			`,li=.7)}}let li=.9;function fc(){requestAnimationFrame(fc);let a=cg.getDelta();Gn<li&&(console.log(Gn),Gn+=a*lg,Gn>li&&(Gn=li)),vn.position.lerpVectors(rs.position,$i.position,Gn),oa?vn.lookAt($i.position):vn.lookAt(0,0,0),$n.render(jn,vn)}window.addEventListener("resize",ug,!1);function ug(){vn.aspect=window.innerWidth/window.innerHeight,vn.updateProjectionMatrix(),$n.setSize(window.innerWidth,window.innerHeight)}fc();
