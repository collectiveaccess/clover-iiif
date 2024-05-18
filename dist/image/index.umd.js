(function(l,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("openseadragon"),require("@iiif/vault-helpers"),require("react-error-boundary"),require("@stitches/react"),require("react"),require("@iiif/vault"),require("uuid")):typeof define=="function"&&define.amd?define(["exports","openseadragon","@iiif/vault-helpers","react-error-boundary","@stitches/react","react","@iiif/vault","uuid"],g):(l=typeof globalThis<"u"?globalThis:l||self,g(l.CloverIIIFImage={},l.OpenSeadragon,null,l.reactErrorBoundary,l.react,l.React,l.vault,l.uuid))})(this,function(l,g,fe,F,W,r,I,b){"use strict";var A,M,B;let p=window.OpenSeadragon;if(!p&&(p=g,!p))throw new Error("OpenSeadragon is missing.");const C="http://www.w3.org/2000/svg";p.Viewer&&(p.Viewer.prototype.svgOverlay=function(){return this._svgOverlayInfo?this._svgOverlayInfo:(this._svgOverlayInfo=new k(this),this._svgOverlayInfo)});const k=function(e){const t=this;this._viewer=e,this._containerWidth=0,this._containerHeight=0,this._svg=document.createElementNS(C,"svg"),this._svg.style.position="absolute",this._svg.style.left=0,this._svg.style.top=0,this._svg.style.width="100%",this._svg.style.height="100%",this._viewer.canvas.appendChild(this._svg),this._node=document.createElementNS(C,"g"),this._svg.appendChild(this._node),this._viewer.addHandler("animation",function(){t.resize()}),this._viewer.addHandler("open",function(){t.resize()}),this._viewer.addHandler("rotate",function(){t.resize()}),this._viewer.addHandler("flip",function(){t.resize()}),this._viewer.addHandler("resize",function(){t.resize()}),this.resize()};k.prototype={node:function(){return this._node},resize:function(){this._containerWidth!==this._viewer.container.clientWidth&&(this._containerWidth=this._viewer.container.clientWidth,this._svg.setAttribute("width",this._containerWidth)),this._containerHeight!==this._viewer.container.clientHeight&&(this._containerHeight=this._viewer.container.clientHeight,this._svg.setAttribute("height",this._containerHeight));const e=this._viewer.viewport.pixelFromPoint(new p.Point(0,0),!0),t=this._viewer.viewport.getZoom(!0),o=this._viewer.viewport.getRotation(),n=this._viewer.viewport.getFlip(),s=this._viewer.viewport._containerInnerSize.x;let c=s*t;const a=c;n&&(c=-c,e.x=-e.x+s),this._node.setAttribute("transform","translate("+e.x+","+e.y+") scale("+c+","+a+") rotate("+o+")")},onClick:function(e,t){new p.MouseTracker({element:e,clickHandler:t}).setTracking(!0)}};const j=e=>fetch(`${e.replace(/\/$/,"")}/info.json`).then(t=>t.json()).then(t=>t).catch(t=>{console.error(`The IIIF tilesource ${e.replace(/\/$/,"")}/info.json failed to load: ${t}`)}),D=e=>{let t,o;if(Array.isArray(e)&&(t=e[0],t)){let n;"@id"in t?n=t["@id"]:n=t.id,o=n}return o};var x=(e=>(e.TiledImage="tiledImage",e.SimpleImage="simpleImage",e))(x||{});const N=e=>{const t=Array.isArray(e==null?void 0:e.service)&&(e==null?void 0:e.service.length)>0,o=t?D(e==null?void 0:e.service):e==null?void 0:e.id,n=t?x.TiledImage:x.SimpleImage;return{uri:o,imageType:n}},Z=(e,t)=>{const o=t?x.TiledImage:x.SimpleImage;return{uri:e,imageType:o}},y=209,q={colors:{primary:"#1a1d1e",primaryMuted:"#26292b",primaryAlt:"#151718",accent:`hsl(${y} 100% 38.2%)`,accentMuted:`hsl(${y} 80% 61.8%)`,accentAlt:`hsl(${y} 80% 30%)`,secondary:"#FFFFFF",secondaryMuted:"#e6e8eb",secondaryAlt:"#c1c8cd"},fontSizes:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},lineHeights:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},sizes:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},space:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},radii:{1:"4px",2:"6px",3:"8px",4:"12px",round:"50%",pill:"9999px"},transitions:{all:"all 300ms cubic-bezier(0.16, 1, 0.3, 1)"},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"}},U={xxs:"(max-width: 349px)",xs:"(max-width: 575px)",sm:"(max-width: 767px)",md:"(max-width: 991px)",lg:"(max-width: 90rem)",xl:"(min-width: calc(90rem + 1px))"},{styled:h,css:ve,keyframes:xe,createTheme:we}=W.createStitches({theme:q,media:U}),X=h("div",{display:"flex",flexDirection:"column",alignItems:"center"}),Y=h("p",{fontWeight:"bold",fontSize:"x-large"}),G=h("span",{fontSize:"medium"}),J=({error:e})=>{const{message:t}=e;return r.createElement(X,{role:"alert"},r.createElement(Y,{"data-testid":"headline"},"Something went wrong"),t&&r.createElement(G,null,`Error message: ${t}`," "))},S=h("div",{position:"absolute !important",zIndex:"1",top:"1rem",left:"1rem",width:"161.8px",height:"100px",backgroundColor:"#000D",boxShadow:"5px 5px 5px #0002",borderRadius:"3px",".displayregion":{border:" 3px solid $accent !important",boxShadow:"0 0 3px #0006"},"@sm":{width:"123px",height:"76px"},"@xs":{width:"100px",height:"61.8px"}}),K=h("div",{position:"relative",width:"100%",height:"100%",zIndex:"0"}),Q=h("div",{width:"100%",height:"100%",maxHeight:"100vh",background:"transparent",backgroundSize:"contain",color:"white",position:"relative",zIndex:"0",overflow:"hidden",variants:{hasNavigator:{true:{[`${S}`]:{display:"block"}},false:{[`${S}`]:{display:"none"}}}}}),R=h("button",{display:"flex",height:"2rem",width:"2rem",borderRadius:"2rem",padding:"0",margin:"0",fontFamily:"inherit",background:"none",backgroundColor:"$primary",border:"none",color:"white",cursor:"pointer",marginLeft:"0.618rem",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"content-box !important","&:first-child":{marginLeft:"0"},"@xs":{marginBottom:"0.618rem",marginLeft:"0","&:last-child":{marginBottom:"0"}},svg:{height:"60%",width:"60%",padding:"20%",fill:"$secondary",stroke:"$secondary",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"inherit"},"&:hover, &:focus":{backgroundColor:"$accent"},"&[data-button=rotate-right]":{"&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=rotate-left]":{transform:"scaleX(-1)","&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=reset]":{"&:hover, &:focus":{svg:{rotate:"-15deg"}}}}),f=({className:e,id:t,label:o,children:n})=>{const s=o.toLowerCase().replace(/\s/g,"-");return r.createElement(R,{id:t,className:e,"data-testid":"openseadragon-button","data-button":s},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-labelledby":`${t}-svg-title`,"data-testid":"openseadragon-button-svg",focusable:"false",viewBox:"0 0 512 512",role:"img"},r.createElement("title",{id:`${t}-svg-title`},o),n))},ee=h("div",{position:"absolute",zIndex:"1",top:"1rem",right:"1rem",display:"flex","@xs":{flexDirection:"column",zIndex:"2"},variants:{hasPlaceholder:{true:{right:"3.618rem","@xs":{top:"3.618rem",right:"1rem"}},false:{right:"1rem","@xs":{top:"1rem",right:"1rem"}}}}}),m={annotationOverlays:{backgroundColor:"#6666ff",borderColor:"#000099",borderType:"solid",borderWidth:"1px",opacity:"0.5",renderOverlays:!0,zoomLevel:2},background:"transparent",canvasBackgroundColor:"#6662",canvasHeight:"500px",contentSearch:{searchResultsLimit:20,overlays:{backgroundColor:"#ff6666",borderColor:"#990000",borderType:"solid",borderWidth:"1px",opacity:"0.5",renderOverlays:!0,zoomLevel:4}},ignoreCaptionLabels:[],informationPanel:{vtt:{autoScroll:{enabled:!0,settings:{behavior:"smooth",block:"center"}}},open:!0,renderAbout:!0,renderSupplementing:!0,renderToggle:!0,renderAnnotation:!0,renderContentSearch:!0},openSeadragon:{},requestHeaders:{"Content-Type":"application/json"},showDownload:!0,showIIIFBadge:!0,showTitle:!0,withCredentials:!1,localeText:{contentSearch:{tabLabel:"Search Results",formPlaceholder:"Enter search words",noSearchResults:"No search results",loading:"Loading...",moreResults:"more results"}}};function te(e){let t={...m.informationPanel.vtt.autoScroll};return typeof e=="object"&&(t="enabled"in e?e:{enabled:!0,settings:e}),e===!1&&(t.enabled=!1),re(t.settings),t}function re({behavior:e,block:t}){const o=["auto","instant","smooth"],n=["center","end","nearest","start"];if(!o.includes(e))throw TypeError(`'${e}' not in ${o.join(" | ")}`);if(!n.includes(t))throw TypeError(`'${t}' not in ${n.join(" | ")}`)}const oe=te((M=(A=m==null?void 0:m.informationPanel)==null?void 0:A.vtt)==null?void 0:M.autoScroll),z={activeCanvas:"",activeManifest:"",OSDImageLoaded:!1,collection:{},configOptions:m,customDisplays:[],plugins:[],isAutoScrollEnabled:oe.enabled,isAutoScrolling:!1,isInformationOpen:(B=m==null?void 0:m.informationPanel)==null?void 0:B.open,isLoaded:!1,isUserScrolling:void 0,vault:new I.Vault,contentSearchVault:new I.Vault,openSeadragonViewer:null,viewerId:b.v4()},ie=r.createContext(z),ne=r.createContext(z);function $(){const e=r.useContext(ie);if(e===void 0)throw new Error("useViewerState must be used within a ViewerProvider");return e}function L(){const e=r.useContext(ne);if(e===void 0)throw new Error("useViewerDispatch must be used within a ViewerProvider");return e}const se=()=>r.createElement("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M256 112v288M400 256H112"}),ae=()=>r.createElement("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 256H112"}),le=()=>r.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"}),ce=()=>r.createElement("path",{d:"M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z"}),O=()=>r.createElement(r.Fragment,null,r.createElement("path",{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"}),r.createElement("path",{d:"M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z"})),de=({_cloverViewerHasPlaceholder:e,config:t})=>{const o=$(),{activeCanvas:n,configOptions:s,openSeadragonViewer:c,plugins:a,vault:w,activeManifest:i}=o,E=w.get({id:n,type:"Canvas"});function v(){return a.filter(d=>{var u;return(u=d.imageViewer)==null?void 0:u.menu}).map((d,u)=>{var H,T,V,P;const _=(T=(H=d.imageViewer)==null?void 0:H.menu)==null?void 0:T.component;return r.createElement(_,{key:u,...(P=(V=d==null?void 0:d.imageViewer)==null?void 0:V.menu)==null?void 0:P.componentProps,activeManifest:i,canvas:E,viewerConfigOptions:s,openSeadragonViewer:c,useViewerDispatch:L,useViewerState:$})})}return r.createElement(ee,{"data-testid":"clover-iiif-image-openseadragon-controls",hasPlaceholder:e},t.showZoomControl&&r.createElement(r.Fragment,null,r.createElement(f,{id:t.zoomInButton,label:"zoom in"},r.createElement(se,null)),r.createElement(f,{id:t.zoomOutButton,label:"zoom out"},r.createElement(ae,null))),t.showFullPageControl&&r.createElement(f,{id:t.fullPageButton,label:"full page"},r.createElement(le,null)),t.showRotationControl&&r.createElement(r.Fragment,null,r.createElement(f,{id:t.rotateRightButton,label:"rotate right"},r.createElement(O,null)),r.createElement(f,{id:t.rotateLeftButton,label:"rotate left"},r.createElement(O,null))),t.showHomeControl&&r.createElement(f,{id:t.homeButton,label:"reset"},r.createElement(ce,null)),v())},ue=({ariaLabel:e,config:t,uri:o,_cloverViewerHasPlaceholder:n,imageType:s,openSeadragonCallback:c})=>{const[a,w]=r.useState(),[i,E]=r.useState(),v=L(),d=r.useRef(!1);return r.useEffect(()=>(d.current||(d.current=!0,i||E(g(t))),()=>i==null?void 0:i.destroy()),[]),r.useEffect(()=>{i&&c&&c(i)},[i,c]),r.useEffect(()=>{i&&o!==a&&(i==null||i.forceRedraw(),w(o))},[i,a,o]),r.useEffect(()=>{if(a&&i)switch(s){case"simpleImage":i==null||i.addSimpleImage({url:a});break;case"tiledImage":j(a).then(u=>{try{if(!u)throw new Error(`No tile source found for ${a}`);i==null||i.addTiledImage({tileSource:u,success:()=>{typeof v=="function"&&v({type:"updateOSDImageLoaded",OSDImageLoaded:!0})}})}catch(_){console.error(_)}});break;default:i==null||i.close(),console.warn(`Unable to render ${a} in OpenSeadragon as type: "${s}"`);break}},[s,a]),r.createElement(Q,{className:"clover-iiif-image-openseadragon","data-testid":"clover-iiif-image-openseadragon","data-openseadragon-instance":t.id,hasNavigator:t.showNavigator},r.createElement(de,{_cloverViewerHasPlaceholder:n,config:t}),t.showNavigator&&r.createElement(S,{id:t.navigatorId,"data-testid":"clover-iiif-image-openseadragon-navigator"}),r.createElement(K,{id:t.id,"data-testid":"clover-iiif-image-openseadragon-viewport",role:"img",...e&&{"aria-label":e}}))};function he(e){return{id:`openseadragon-${e}`,navigatorId:`openseadragon-navigator-${e}`,loadTilesWithAjax:!0,fullPageButton:`fullPage-${e}`,homeButton:`reset-${e}`,rotateLeftButton:`rotateLeft-${e}`,rotateRightButton:`rotateRight-${e}`,zoomInButton:`zoomIn-${e}`,zoomOutButton:`zoomOut-${e}`,showNavigator:!0,showFullPageControl:!0,showHomeControl:!0,showRotationControl:!0,showZoomControl:!0,navigatorBorderColor:"transparent",gestureSettingsMouse:{clickToZoom:!0,dblClickToZoom:!0,pinchToZoom:!0,scrollToZoom:!1}}}const me=(e,t="none")=>{if(!e)return null;if(typeof e=="string")return[e];if(!e[t]){const o=Object.getOwnPropertyNames(e);if(o.length>0)return e[o[0]]}return!e[t]||!Array.isArray(e[t])?null:e[t]},pe=(e,t="none",o=", ")=>{const n=me(e,t);return Array.isArray(n)?n.join(`${o}`):n},ge=({_cloverViewerHasPlaceholder:e=!1,body:t,instanceId:o,isTiledImage:n=!1,label:s,src:c="",openSeadragonCallback:a,openSeadragonConfig:w={}})=>{const i=o||b.v4(),E=typeof s=="string"?s:pe(s),v={...he(i),...w},{imageType:d,uri:u}=t?N(t):Z(c,n);return u?r.createElement(F.ErrorBoundary,{FallbackComponent:J},r.createElement(ue,{_cloverViewerHasPlaceholder:e,ariaLabel:E,config:v,imageType:d,key:i,uri:u,openSeadragonCallback:a})):null};l.default=ge,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
