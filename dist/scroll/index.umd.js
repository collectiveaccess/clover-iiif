(function(g,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("react"),require("@iiif/vault"),require("sanitize-html"),require("@stitches/react"),require("hls.js"),require("openseadragon"),require("@iiif/vault-helpers"),require("react-error-boundary"),require("uuid"),require("@nulib/use-markdown"),require("flexsearch")):typeof define=="function"&&define.amd?define(["exports","react","@iiif/vault","sanitize-html","@stitches/react","hls.js","openseadragon","@iiif/vault-helpers","react-error-boundary","uuid","@nulib/use-markdown","flexsearch"],r):(g=typeof globalThis<"u"?globalThis:g||self,r(g.CloverIIIFScroll={},g.React,g.vault,g.sanitizeHtml,g.react,null,g.OpenSeadragon,null,g.reactErrorBoundary,g.uuid,g.useMarkdown,g.FlexSearch))})(this,function(g,r,C,ee,te,At,T,_t,re,F,ne,oe){"use strict";var K,Y,J;const I={annotations:[],manifest:void 0,searchString:void 0,options:{offset:0},vault:new C.Vault};function ie(e,t){switch(t.type){case"updateAnnotations":return{...e,annotations:t.payload};case"updateSearchString":return{...e,searchString:t.payload};default:return e}}const v=r.createContext({dispatch:()=>null,state:I}),se=e=>{const{children:t,manifest:n}=e,s={...I.options,...e.options},[o,i]=r.useReducer(ie,I);return r.createElement(v.Provider,{value:{state:{...o,manifest:n,options:s},dispatch:i}},t)},le=(e,t="none")=>{if(!e)return null;if(typeof e=="string")return[e];if(!e[t]){const n=Object.getOwnPropertyNames(e);if(n.length>0)return e[n[0]]}return!e[t]||!Array.isArray(e[t])?null:e[t]},k=(e,t="none",n=", ")=>{const s=le(e,t);return Array.isArray(s)?s.join(`${n}`):s};function ae(e){return{__html:ce(e)}}function z(e,t){const n=Object.keys(e).filter(o=>t.includes(o)?null:o),s=new Object;return n.forEach(o=>{s[o]=e[o]}),s}function ce(e){return ee(e,{allowedAttributes:{a:["href"],img:["alt","src","height","width"]},allowedSchemes:["http","https","mailto"],allowedTags:["a","b","br","i","img","p","small","span","sub","sup"]})}const $=209,de={colors:{primary:"#1a1d1e",primaryMuted:"#26292b",primaryAlt:"#151718",accent:`hsl(${$} 100% 38.2%)`,accentMuted:`hsl(${$} 80% 61.8%)`,accentAlt:`hsl(${$} 80% 30%)`,secondary:"#FFFFFF",secondaryMuted:"#e6e8eb",secondaryAlt:"#c1c8cd"},fontSizes:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},lineHeights:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},sizes:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},space:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},radii:{1:"4px",2:"6px",3:"8px",4:"12px",round:"50%",pill:"9999px"},transitions:{all:"all 300ms cubic-bezier(0.16, 1, 0.3, 1)"},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"}},ue={xxs:"(max-width: 349px)",xs:"(max-width: 575px)",sm:"(max-width: 767px)",md:"(max-width: 991px)",lg:"(max-width: 90rem)",xl:"(min-width: calc(90rem + 1px))"},{styled:c,css:Bt,keyframes:Pt,createTheme:Mt}=te.createStitches({theme:de,media:ue}),me=c("span",{}),L=e=>{const{as:t,label:n}=e,o=z(e,["as","label"]);return r.createElement(me,{as:t,...o},k(n,o.lang))};c("img",{objectFit:"cover"}),c("a",{});const pe={delimiter:", "},A=r.createContext(void 0),he=()=>{const e=r.useContext(A);if(e===void 0)throw new Error("usePrimitivesContext must be used with a PrimitivesProvider");return e},fe=({children:e,initialState:t=pe})=>{const n=ge(t,"delimiter");return r.createElement(A.Provider,{value:{delimiter:n}},e)},ge=(e,t)=>Object.hasOwn(e,t)?e[t].toString():void 0,xe=c("span",{}),O=e=>{const{as:t,markup:n}=e,{delimiter:s}=he();if(!n)return r.createElement(r.Fragment,null);const i=z(e,["as","markup"]),l=ae(k(n,i.lang,s));return r.createElement(xe,{as:t,...i,dangerouslySetInnerHTML:l})},ve=e=>r.useContext(A)?r.createElement(O,{...e}):r.createElement(fe,null,r.createElement(O,{...e}));c("span",{}),c("dl",{}),c("li",{}),c("ul",{}),c("li",{}),c("ul",{}),c("dl",{}),c("li",{}),c("ul",{});const we=e=>{const{as:t,summary:n}=e,o=z(e,["as","customValueDelimiter","summary"]);return r.createElement(ve,{as:t,markup:n,...o})},_=c("div",{display:"flex",flexDirection:"column",justifyContent:"space-between"}),ye=c("aside",{margin:"0",padding:"0",position:"relative",zIndex:2,flexGrow:"1",flexShrink:"0",[`& ${_}`]:{position:"absolute",width:"50%",top:0},"&.anchor":{[`& ${_}`]:{position:"fixed",width:"50%"}}}),Se=c("header",{display:"flex",justifyContent:"space-between",fontSize:"1",flexGrow:"1",flexShrink:"0",marginBottom:"1.618rem",strong:{fontWeight:"400",fontSize:"1.33rem"}}),Ee=c("section",{margin:"0",gap:"1rem"}),be=({label:e})=>r.createElement(Se,null,r.createElement("strong",null,r.createElement(L,{label:e}))),Ce=c("article",{transition:"all 0.382s ease-in-out",display:"flex",flexDirection:"row",flexWrap:"nowrap",gap:"2.618rem"}),H=c("div",{transition:"$all",width:"50%",opacity:0,transform:"translateX(2.618rem)",zIndex:-1}),Ie=c("div",{width:"50%",display:"flex",flexDirection:"column",justifyContent:"flex-start"}),ke=c("hr",{margin:"0",borderColor:"transparent",height:"1.618rem",position:"relative",zIndex:0,display:"flex",justifyContent:"flex-end",marginTop:"2.618rem","&::before":{content:"attr(aria-label)",position:"absolute",right:"1.618rem",bottom:"0",zIndex:1,display:"flex",fontSize:"0.7222rem",fontWeight:"400",lineHeight:"1rem",background:"inherit",opacity:.7},"&::after":{content:"",width:"100%",position:"absolute",zIndex:0,height:"1px",background:"#6662"}}),ze=c("div",{position:"relative",zIndex:"1",display:"flex",flexDirection:"column",gap:"2.618rem","&[data-figures-visible='true']":{[`& ${H}`]:{opacity:1,zIndex:0,transform:"translateX(0)"}}}),$e=({canvas:e,canvasInfo:{current:t,total:n}})=>r.createElement("figcaption",null,r.createElement("em",null,t," / ",n),(e==null?void 0:e.label)&&r.createElement(L,{label:e==null?void 0:e.label}),(e==null?void 0:e.summary)&&r.createElement(we,{summary:e==null?void 0:e.summary,as:"p"}));let y=window.OpenSeadragon;if(!y&&(y=T,!y))throw new Error("OpenSeadragon is missing.");const V="http://www.w3.org/2000/svg";y.Viewer&&(y.Viewer.prototype.svgOverlay=function(){return this._svgOverlayInfo?this._svgOverlayInfo:(this._svgOverlayInfo=new W(this),this._svgOverlayInfo)});const W=function(e){const t=this;this._viewer=e,this._containerWidth=0,this._containerHeight=0,this._svg=document.createElementNS(V,"svg"),this._svg.style.position="absolute",this._svg.style.left=0,this._svg.style.top=0,this._svg.style.width="100%",this._svg.style.height="100%",this._viewer.canvas.appendChild(this._svg),this._node=document.createElementNS(V,"g"),this._svg.appendChild(this._node),this._viewer.addHandler("animation",function(){t.resize()}),this._viewer.addHandler("open",function(){t.resize()}),this._viewer.addHandler("rotate",function(){t.resize()}),this._viewer.addHandler("flip",function(){t.resize()}),this._viewer.addHandler("resize",function(){t.resize()}),this.resize()};W.prototype={node:function(){return this._node},resize:function(){this._containerWidth!==this._viewer.container.clientWidth&&(this._containerWidth=this._viewer.container.clientWidth,this._svg.setAttribute("width",this._containerWidth)),this._containerHeight!==this._viewer.container.clientHeight&&(this._containerHeight=this._viewer.container.clientHeight,this._svg.setAttribute("height",this._containerHeight));const e=this._viewer.viewport.pixelFromPoint(new y.Point(0,0),!0),t=this._viewer.viewport.getZoom(!0),n=this._viewer.viewport.getRotation(),s=this._viewer.viewport.getFlip(),o=this._viewer.viewport._containerInnerSize.x;let i=o*t;const l=i;s&&(i=-i,e.x=-e.x+o),this._node.setAttribute("transform","translate("+e.x+","+e.y+") scale("+i+","+l+") rotate("+n+")")},onClick:function(e,t){new y.MouseTracker({element:e,clickHandler:t}).setTracking(!0)}};const Le=e=>fetch(`${e.replace(/\/$/,"")}/info.json`).then(t=>t.json()).then(t=>t).catch(t=>{console.error(`The IIIF tilesource ${e.replace(/\/$/,"")}/info.json failed to load: ${t}`)}),Ae=e=>{let t,n;if(Array.isArray(e)&&(t=e[0],t)){let s;"@id"in t?s=t["@id"]:s=t.id,n=s}return n};var b=(e=>(e.TiledImage="tiledImage",e.SimpleImage="simpleImage",e))(b||{});const _e=e=>{const t=Array.isArray(e==null?void 0:e.service)&&(e==null?void 0:e.service.length)>0,n=t?Ae(e==null?void 0:e.service):e==null?void 0:e.id,s=t?b.TiledImage:b.SimpleImage;return{uri:n,imageType:s}},Be=(e,t)=>{const n=t?b.TiledImage:b.SimpleImage;return{uri:e,imageType:n}},Pe=c("div",{display:"flex",flexDirection:"column",alignItems:"center"}),Me=c("p",{fontWeight:"bold",fontSize:"x-large"}),Te=c("span",{fontSize:"medium"}),Fe=({error:e})=>{const{message:t}=e;return r.createElement(Pe,{role:"alert"},r.createElement(Me,{"data-testid":"headline"},"Something went wrong"),t&&r.createElement(Te,null,`Error message: ${t}`," "))},B=c("div",{position:"absolute !important",zIndex:"1",top:"1rem",left:"1rem",width:"161.8px",height:"100px",backgroundColor:"#000D",boxShadow:"5px 5px 5px #0002",borderRadius:"3px",".displayregion":{border:" 3px solid $accent !important",boxShadow:"0 0 3px #0006"},"@sm":{width:"123px",height:"76px"},"@xs":{width:"100px",height:"61.8px"}}),Oe=c("div",{position:"relative",width:"100%",height:"100%",zIndex:"0"}),He=c("div",{width:"100%",height:"100%",maxHeight:"100vh",background:"transparent",backgroundSize:"contain",color:"white",position:"relative",zIndex:"0",overflow:"hidden",variants:{hasNavigator:{true:{[`${B}`]:{display:"block"}},false:{[`${B}`]:{display:"none"}}}}}),Ve=c("button",{display:"flex",height:"2rem",width:"2rem",borderRadius:"2rem",padding:"0",margin:"0",fontFamily:"inherit",background:"none",backgroundColor:"$primary",border:"none",color:"white",cursor:"pointer",marginLeft:"0.618rem",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"content-box !important","&:first-child":{marginLeft:"0"},"@xs":{marginBottom:"0.618rem",marginLeft:"0","&:last-child":{marginBottom:"0"}},svg:{height:"60%",width:"60%",padding:"20%",fill:"$secondary",stroke:"$secondary",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"inherit"},"&:hover, &:focus":{backgroundColor:"$accent"},"&[data-button=rotate-right]":{"&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=rotate-left]":{transform:"scaleX(-1)","&:hover, &:focus":{svg:{rotate:"45deg"}}},"&[data-button=reset]":{"&:hover, &:focus":{svg:{rotate:"-15deg"}}}}),S=({className:e,id:t,label:n,children:s})=>{const o=n.toLowerCase().replace(/\s/g,"-");return r.createElement(Ve,{id:t,className:e,"data-testid":"openseadragon-button","data-button":o},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-labelledby":`${t}-svg-title`,"data-testid":"openseadragon-button-svg",focusable:"false",viewBox:"0 0 512 512",role:"img"},r.createElement("title",{id:`${t}-svg-title`},n),s))},We=c("div",{position:"absolute",zIndex:"1",top:"1rem",right:"1rem",display:"flex","@xs":{flexDirection:"column",zIndex:"2"},variants:{hasPlaceholder:{true:{right:"3.618rem","@xs":{top:"3.618rem",right:"1rem"}},false:{right:"1rem","@xs":{top:"1rem",right:"1rem"}}}}}),w={annotationOverlays:{backgroundColor:"#6666ff",borderColor:"#000099",borderType:"solid",borderWidth:"1px",opacity:"0.5",renderOverlays:!0,zoomLevel:2},background:"transparent",canvasBackgroundColor:"#6662",canvasHeight:"500px",contentSearch:{searchResultsLimit:20,overlays:{backgroundColor:"#ff6666",borderColor:"#990000",borderType:"solid",borderWidth:"1px",opacity:"0.5",renderOverlays:!0,zoomLevel:4}},ignoreCaptionLabels:[],informationPanel:{vtt:{autoScroll:{enabled:!0,settings:{behavior:"smooth",block:"center"}}},open:!0,renderAbout:!0,renderSupplementing:!0,renderToggle:!0,renderAnnotation:!0,renderContentSearch:!0},openSeadragon:{},requestHeaders:{"Content-Type":"application/json"},showDownload:!0,showIIIFBadge:!0,showTitle:!0,withCredentials:!1,localeText:{contentSearch:{tabLabel:"Search Results",formPlaceholder:"Enter search words",noSearchResults:"No search results",loading:"Loading...",moreResults:"more results"}}};function De(e){let t={...w.informationPanel.vtt.autoScroll};return typeof e=="object"&&(t="enabled"in e?e:{enabled:!0,settings:e}),e===!1&&(t.enabled=!1),je(t.settings),t}function je({behavior:e,block:t}){const n=["auto","instant","smooth"],s=["center","end","nearest","start"];if(!n.includes(e))throw TypeError(`'${e}' not in ${n.join(" | ")}`);if(!s.includes(t))throw TypeError(`'${t}' not in ${s.join(" | ")}`)}const Ne=De((Y=(K=w==null?void 0:w.informationPanel)==null?void 0:K.vtt)==null?void 0:Y.autoScroll),D={activeCanvas:"",activeManifest:"",OSDImageLoaded:!1,collection:{},configOptions:w,customDisplays:[],plugins:[],isAutoScrollEnabled:Ne.enabled,isAutoScrolling:!1,isInformationOpen:(J=w==null?void 0:w.informationPanel)==null?void 0:J.open,isLoaded:!1,isUserScrolling:void 0,vault:new C.Vault,contentSearchVault:new C.Vault,openSeadragonViewer:null,viewerId:F.v4()},qe=r.createContext(D),Ze=r.createContext(D);function j(){const e=r.useContext(qe);if(e===void 0)throw new Error("useViewerState must be used within a ViewerProvider");return e}function N(){const e=r.useContext(Ze);if(e===void 0)throw new Error("useViewerDispatch must be used within a ViewerProvider");return e}const Ue=()=>r.createElement("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M256 112v288M400 256H112"}),Xe=()=>r.createElement("path",{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 256H112"}),Ge=()=>r.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"}),Ke=()=>r.createElement("path",{d:"M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z"}),q=()=>r.createElement(r.Fragment,null,r.createElement("path",{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"}),r.createElement("path",{d:"M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z"})),Ye=({_cloverViewerHasPlaceholder:e,config:t})=>{const n=j(),{activeCanvas:s,configOptions:o,openSeadragonViewer:i,plugins:l,vault:u,activeManifest:a}=n,p=u.get({id:s,type:"Canvas"});function m(){return l.filter(d=>{var f;return(f=d.imageViewer)==null?void 0:f.menu}).map((d,f)=>{var x,E,Q,R;const h=(E=(x=d.imageViewer)==null?void 0:x.menu)==null?void 0:E.component;return r.createElement(h,{key:f,...(R=(Q=d==null?void 0:d.imageViewer)==null?void 0:Q.menu)==null?void 0:R.componentProps,activeManifest:a,canvas:p,viewerConfigOptions:o,openSeadragonViewer:i,useViewerDispatch:N,useViewerState:j})})}return r.createElement(We,{"data-testid":"clover-iiif-image-openseadragon-controls",hasPlaceholder:e},t.showZoomControl&&r.createElement(r.Fragment,null,r.createElement(S,{id:t.zoomInButton,label:"zoom in"},r.createElement(Ue,null)),r.createElement(S,{id:t.zoomOutButton,label:"zoom out"},r.createElement(Xe,null))),t.showFullPageControl&&r.createElement(S,{id:t.fullPageButton,label:"full page"},r.createElement(Ge,null)),t.showRotationControl&&r.createElement(r.Fragment,null,r.createElement(S,{id:t.rotateRightButton,label:"rotate right"},r.createElement(q,null)),r.createElement(S,{id:t.rotateLeftButton,label:"rotate left"},r.createElement(q,null))),t.showHomeControl&&r.createElement(S,{id:t.homeButton,label:"reset"},r.createElement(Ke,null)),m())},Je=({ariaLabel:e,config:t,uri:n,_cloverViewerHasPlaceholder:s,imageType:o,openSeadragonCallback:i})=>{const[l,u]=r.useState(),[a,p]=r.useState(),m=N(),d=r.useRef(!1);return r.useEffect(()=>(d.current||(d.current=!0,a||p(T(t))),()=>a==null?void 0:a.destroy()),[]),r.useEffect(()=>{a&&i&&i(a)},[a,i]),r.useEffect(()=>{a&&n!==l&&(a==null||a.forceRedraw(),u(n))},[a,l,n]),r.useEffect(()=>{if(l&&a)switch(o){case"simpleImage":a==null||a.addSimpleImage({url:l});break;case"tiledImage":Le(l).then(f=>{try{if(!f)throw new Error(`No tile source found for ${l}`);a==null||a.addTiledImage({tileSource:f,success:()=>{typeof m=="function"&&m({type:"updateOSDImageLoaded",OSDImageLoaded:!0})}})}catch(h){console.error(h)}});break;default:a==null||a.close(),console.warn(`Unable to render ${l} in OpenSeadragon as type: "${o}"`);break}},[o,l]),r.createElement(He,{className:"clover-iiif-image-openseadragon","data-testid":"clover-iiif-image-openseadragon","data-openseadragon-instance":t.id,hasNavigator:t.showNavigator},r.createElement(Ye,{_cloverViewerHasPlaceholder:s,config:t}),t.showNavigator&&r.createElement(B,{id:t.navigatorId,"data-testid":"clover-iiif-image-openseadragon-navigator"}),r.createElement(Oe,{id:t.id,"data-testid":"clover-iiif-image-openseadragon-viewport",role:"img",...e&&{"aria-label":e}}))};function Qe(e){return{id:`openseadragon-${e}`,navigatorId:`openseadragon-navigator-${e}`,loadTilesWithAjax:!0,fullPageButton:`fullPage-${e}`,homeButton:`reset-${e}`,rotateLeftButton:`rotateLeft-${e}`,rotateRightButton:`rotateRight-${e}`,zoomInButton:`zoomIn-${e}`,zoomOutButton:`zoomOut-${e}`,showNavigator:!0,showFullPageControl:!0,showHomeControl:!0,showRotationControl:!0,showZoomControl:!0,navigatorBorderColor:"transparent",gestureSettingsMouse:{clickToZoom:!0,dblClickToZoom:!0,pinchToZoom:!0,scrollToZoom:!1}}}const Re=({_cloverViewerHasPlaceholder:e=!1,body:t,instanceId:n,isTiledImage:s=!1,label:o,src:i="",openSeadragonCallback:l,openSeadragonConfig:u={}})=>{const a=n||F.v4(),p=typeof o=="string"?o:k(o),m={...Qe(a),...u},{imageType:d,uri:f}=t?_e(t):Be(i,s);return f?r.createElement(re.ErrorBoundary,{FallbackComponent:Fe},r.createElement(Je,{_cloverViewerHasPlaceholder:e,ariaLabel:p,config:m,imageType:d,key:a,uri:f,openSeadragonCallback:l})):null},et=c("div",{width:"100%",height:"400px",background:"#6662",backgroundSize:"contain",color:"white",position:"relative",zIndex:"1",overflow:"hidden"}),tt=({body:e,label:t})=>r.createElement(et,{"data-testid":"scroll-figure-image"},r.createElement(Re,{body:e,openSeadragonConfig:{showNavigator:!1,showHomeControl:!1},...t&&{label:t}})),rt=c("figure",{figcaption:{display:"flex",flexDirection:"column",margin:"1.618rem 0 0",opacity:.9,em:{fontSize:"0.9em",fontStyle:"normal",opacity:.7}}}),nt=(e,t,n,s)=>{var l,u;const o={canvas:void 0,accompanyingCanvas:void 0,annotationPage:void 0,annotations:[]},i=a=>{if(a){if(!a.body||!a.motivation){console.error("Invalid annotation after Hyperion parsing: missing either 'body' or 'motivation'",a);return}let p=a.body;Array.isArray(p)&&(p=p[0]);const m=e.get(p.id);if(!m)return;switch(n){case"painting":return a.target===t.id&&a.motivation&&a.motivation[0]==="painting"&&s.includes(m.type)&&(a.body=m),!!a;case"supplementing":return;default:throw new Error("Invalid annotation motivation.")}}};if(o.canvas=e.get(t),o.canvas&&(o.annotationPage=e.get(o.canvas.items[0]),o.accompanyingCanvas=(l=o.canvas)!=null&&l.accompanyingCanvas?e.get((u=o.canvas)==null?void 0:u.accompanyingCanvas):void 0),o.annotationPage){const a=e.get(o.annotationPage.items).map(m=>({body:e.get(m.body[0].id),motivation:m.motivation,type:"Annotation"})),p=[];a.forEach(m=>{m.body.type==="Choice"?m.body.items.forEach(d=>p.push({...m,id:d.id,body:e.get(d.id)})):p.push(m)}),o.annotations=p.filter(i)}return o},ot=(e,t)=>{const n=nt(e,{id:t,type:"Canvas"},"painting",["Image","Sound","Video"]);if(n.annotations.length!==0&&n.annotations&&n.annotations)return n.annotations.map(s=>s==null?void 0:s.body)},it=({canvas:e,canvasInfo:t})=>{const{state:n}=r.useContext(v),{vault:s}=n,o=ot(s,e.id);return o?r.createElement(rt,null,o==null?void 0:o.map(i=>r.createElement(tt,{body:i,key:i==null?void 0:i.id,label:e==null?void 0:e.label})),r.createElement($e,{canvas:e,canvasInfo:t})):null},P="255, 197, 32",st=c("div",{ul:{padding:"1rem"},li:{listStyleType:"disc",li:{listStyleType:"circle"}},"span.highlight":{position:"relative",fontWeight:"bold","&::before":{top:"0",position:"absolute",display:"inline",content:"",width:"calc(100% + 4px)",height:"calc(100% + 2px) ",marginLeft:"-2px",borderRadius:"3px",border:`1px solid rgba(${P}, 0.2)`,borderBottom:`1px solid rgba(${P}, 0.618)`,boxShadow:"1px 1px 1px #6661"},"&::after":{left:"0",top:"0",position:"absolute",display:"inline",content:"",width:"calc(100% + 4px)",height:"calc(100% + 2px) ",marginLeft:"-2px",marginTop:"-1px",borderRadius:"3px",backgroundColor:`rgba(${P}, 0.2)`,zIndex:-1}}}),lt=({searchString:e="",content:t,stringLength:n=150})=>{const s=t.toLowerCase().indexOf(e.toLowerCase());if(s!==-1){let o=Math.max(0,s-n/2),i=Math.min(t.length,s+e.length+n/2);if(o>0){const l=t.lastIndexOf(" ",o+1);o=l>0?l+1:o}if(i<t.length){const l=t.indexOf(" ",i-1);i=l>-1?l:i}t=(o>0?"... ":"")+t.substring(o,i)+(i<t.length?" ...":"")}else t=t.substring(0,n)+"...";return t},Z=({body:e,stringLength:t,type:n="content"})=>{const{state:s}=r.useContext(v),{searchString:o}=s;let i=String(e.value);n=="snippet"&&(i=lt({searchString:o,content:i,stringLength:t}));let l;const u=ne(i);if(e.format==="text/plain"){const f=/\n/g;l=i==null?void 0:i.replace(f,"<br />")}if(e.format==="text/markdown"&&(l=u==null?void 0:u.html),e.format==="text/html"&&(l=i),o&&l){const f=new RegExp(`(${o})`,"gi");l=l==null?void 0:l.replace(f,h=>`<span class="highlight">${h}</span>`)}const a=[e.id,n].join("-"),p=["ar"].includes(String(e.language)),m=p?"rtl":"ltr",d=p?"1.3em":"1em";return l?r.createElement(st,{dangerouslySetInnerHTML:{__html:l},"data-body-id":a,"data-testid":"scroll-item-body",id:a,dir:m,css:{fontSize:d}}):null},at=({hasItemBreak:e,isLastItem:t,item:n,itemCount:s,itemNumber:o})=>{var d;const{state:i}=r.useContext(v),{annotations:l,vault:u}=i,a=u==null?void 0:u.get(n),p=(d=l==null?void 0:l.filter(f=>f.target===n.id))==null?void 0:d.map(f=>{var h;return(h=f==null?void 0:f.body)==null?void 0:h.map((x,E)=>r.createElement(Z,{body:x,key:E}))}),m={current:o,total:s};return r.createElement(Ce,{"data-page-break":e,"data-page-number":o,"data-last-item":t},r.createElement(H,null,a&&r.createElement(it,{canvas:a,canvasInfo:m})),r.createElement(Ie,null,(a==null?void 0:a.label)&&r.createElement("strong",null,r.createElement(L,{label:a==null?void 0:a.label})," ",`(${m.current} / ${m.total})`),r.createElement("div",null,p||r.createElement("p",null,"[Blank]")),e&&r.createElement(ke,{"aria-label":"Page Break"})))},ct=r.memo(at),M="255, 197, 32",dt=c("span",{fontWeight:"700"}),ut=c("div",{display:"flex",gap:"0.25rem"}),mt=c("div",{fontSize:"0.9rem",padding:"1rem 0.618rem"}),pt=c("div",{display:"flex",flexDirection:"column",gap:"0.5rem",hr:{margin:"0.618rem",border:"none",borderBottom:"1px solid #6662"},button:{backgroundColor:"#6660",opacity:"0.7",transition:"$all",padding:"0.5rem 0.618rem",fontSize:"0.9rem",lineHeight:"1.1rem",textAlign:"left",borderRadius:"6px",border:"1px solid #6662",display:"flex",flexDirection:"column",gap:"0.25rem","&:hover":{opacity:"1",boxShadow:"5px 5px 13px #6662"},"&[data-result=true]":{backgroundColor:`rgba(${M}, 0.2)`,borderColor:`rgba(${M}, 0.2)`,opacity:"1","&:hover":{backgroundColor:`rgba(${M}, 0.2)`}}}}),U=c("input",{margin:"0",padding:"0 1rem 0 2rem",background:"none",zIndex:"2",height:"2rem",marginLeft:"1rem",marginTop:"1rem",justifyContent:"center",display:"flex",alignItems:"center",fontSize:"1rem",borderRadius:"2rem",fontFamily:"inherit",backgroundColor:"$primary",border:"none",color:"$secondary",cursor:"text",filter:"drop-shadow(2px 2px 5px #0003)",transition:"$all",boxSizing:"content-box !important",flexGrow:"0",width:"100%","&:placeholder":{color:"inherit"}}),X=c("span",{position:"absolute",zIndex:"3",width:"2rem",height:"2rem",padding:"8px",marginTop:"1rem",marginLeft:"1rem",color:"$secondary",fill:"$secondary",stroke:"$secondary",transition:"$all",cursor:"text"}),ht=c("button",{opacity:"1",display:"flex",alignItems:"center",borderRadius:"2rem",width:"2rem",height:"2rem",alignSelf:"center",marginTop:"1rem",gap:"0.35rem",backgroundColor:"$accent",fill:"$secondary",flexShrink:"0",svg:{padding:"6px",color:"inherit",fill:"inherit"},'&[aria-disabled="true"]':{opacity:"0",display:"none"}}),ft=c("form",{display:"flex",justifyContent:"space-between",gap:"1rem",width:"100%",variants:{isPanelExpanded:{true:{[`${X}`]:{marginLeft:"0"},[`& ${U}`]:{marginLeft:"0",backgroundColor:"$primary",width:"auto",flexGrow:"1"}},false:{}}}}),gt=c("div",{}),G=({annotation:e,isResult:t})=>{var o,i;const n=[(o=e==null?void 0:e.body)==null?void 0:o.id,"content"].join("-"),s=l=>{var u;l&&((u=document.getElementById(l))==null||u.scrollIntoView({behavior:"smooth"}))};return r.createElement("button",{"data-result":t?"true":"false",onClick:()=>s(n),key:n},r.createElement(ut,null,r.createElement(dt,null,e.motivation),r.createElement("span",null,(i=e==null?void 0:e.body)==null?void 0:i.language)),r.createElement(Z,{body:e.body,stringLength:144,type:"snippet"}))},xt=({results:e})=>r.createElement(pt,null,e.found.map(t=>r.createElement(G,{annotation:t,isResult:!0,key:t.id})),r.createElement("hr",null),e.notFound.map(t=>r.createElement(G,{annotation:t,key:t.id}))),vt={charset:"latin:extra, arabic:extra, cyrillic:extra, cjk:extra",optimize:!0,tokenize:"full",resolution:9,document:{id:"id",index:"content"}},wt=()=>{var a;const{state:e}=r.useContext(v),{annotations:t,searchString:n=""}=e,s=new oe.Document(vt),o=[];t==null||t.forEach(p=>{var m;(m=p==null?void 0:p.body)==null||m.forEach(d=>{var h;const f=(h=d==null?void 0:d.value)==null?void 0:h.replace(/\n/g,"");o.push(d==null?void 0:d.id),s.add({id:d==null?void 0:d.id,content:f})})});function i(p){return p.map(m=>t==null?void 0:t.filter(d=>d.body.find(f=>f.id===m)).map(d=>{const f=d.body.findIndex(h=>h.id===m);return{...d,body:d.body[f]}}).shift())}const l=s==null?void 0:s.search(n).reduce((p,m)=>[...new Set([...p,...m.result])],[]),u={found:i(l),notFound:i(o.filter(p=>!l.includes(p)))};return r.createElement(gt,null,n&&r.createElement(mt,null,(a=u.found)==null?void 0:a.length," results for ",r.createElement("strong",null,n)),r.createElement(xt,{results:u}))},yt=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("title",null,"Search"),r.createElement("path",{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"})),St=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("title",null,"Close"),r.createElement("path",{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})),Et=({togglePanel:e,isPanelExpanded:t})=>{const{dispatch:n,state:s}=r.useContext(v),{searchString:o}=s,i=r.useRef(null),l=()=>i.current===document.activeElement&&e(!0),u=()=>{var h;return(h=i==null?void 0:i.current)==null?void 0:h.focus()},a=()=>{var h;(h=i.current)==null||h.blur(),p(),e(!1),n({payload:"",type:"updateSearchString"})},p=()=>{i.current&&(i.current.value="")},m=h=>{h.preventDefault(),a()},d=h=>{h.key==="Escape"&&(h.preventDefault(),a())};r.useEffect(()=>(document==null||document.addEventListener("keydown",d),()=>{document==null||document.removeEventListener("keydown",d)}),[]),r.useEffect(()=>{if(i!=null&&i.current)return i.current.addEventListener("focus",l),i.current.addEventListener("blur",l),()=>{i.current&&(i.current.removeEventListener("focus",l),i.current.removeEventListener("blur",l))}},[]);const f=h=>{var x;n({payload:(x=h==null?void 0:h.target)==null?void 0:x.value,type:"updateSearchString"})};return r.createElement(ft,{id:"scroll-search",autoComplete:"off",isPanelExpanded:t},r.createElement(X,{onClick:u},r.createElement(yt,null)),r.createElement(U,{ref:i,name:"clover-search",type:"text",placeholder:"Search...",defaultValue:o,onChange:f}),r.createElement(ht,{"aria-disabled":!t,"aria-label":"Close search panel",onClick:m,disabled:!t},r.createElement(St,null)))},bt=c("div",{display:"flex",flexDirection:"column",flexGrow:"1",flexShrink:"0",position:"relative",zIndex:"1",maxWidth:"100%",marginTop:"1rem",transition:"$all",variants:{isPanelExpanded:{true:{zIndex:1,opacity:1,transform:"translateX(0)"},false:{zIndex:-1,opacity:0,transform:"translateX(-2.618rem)",transitionDelay:"0",transition:"none"}}}}),Ct=e=>{const[t,n]=r.useState({top:0,left:0});return r.useEffect(()=>{const s=()=>{if(e.current){const o=e.current.getBoundingClientRect();n({top:o.top,left:o.left})}};return window.addEventListener("scroll",s),window.addEventListener("resize",s),s(),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[e]),t},It=({isPanelExpanded:e,handlePanel:t})=>{var f;const n=r.useRef(null),{state:s}=r.useContext(v),{options:o}=s,{offset:i}=o,{top:l}=Ct(n),u=l?l<i:!1,a=(f=n==null?void 0:n.current)==null?void 0:f.offsetWidth,p=a&&a*.5,m=p?p-315:180,d={top:u?i:0,width:`calc(${p}px - 1.318rem)`,maxWidth:e?"100%":`${m}px`,minWidth:"130px"};return r.createElement(ye,{ref:n,className:u?"anchor":"","data-testid":"scroll-panel"},r.createElement(_,{style:d},r.createElement(Et,{togglePanel:t,isPanelExpanded:e}),r.createElement(bt,{"data-testid":"scroll-panel-results","data-panel-expanded":e,isPanelExpanded:e},e&&r.createElement(wt,null))))},kt=({items:e})=>{const[t,n]=r.useState(!1),s=o=>n(o);return r.createElement(r.Fragment,null,r.createElement(It,{isPanelExpanded:t,handlePanel:s}),r.createElement(ze,{"data-figures-visible":!t},e.map((o,i)=>{const l=i+1,u=l===e.length;return r.createElement(ct,{item:o,hasItemBreak:l<e.length,isLastItem:u,key:o.id,itemCount:e.length,itemNumber:l})})))},zt=(e,t)=>{const[n,s]=r.useState([]);return r.useEffect(()=>{if(!t)return;const o=[];e==null||e.forEach(l=>{var a;const u=t.get(l);(a=u==null?void 0:u.annotations)==null||a.forEach(p=>{var d;const m=t.get(p);(d=m==null?void 0:m.items)==null||d.forEach(f=>{var x;const h=t.get(f);h&&o.push({...h,body:(x=h==null?void 0:h.body)==null?void 0:x.map(E=>t.get(E))})})})});const i=o.reduce((l,u)=>(l.some(a=>a.id===u.id)||l.push(u),l),[]);s(i)},[e,t]),n},$t=({iiifContent:e})=>{const[t,n]=r.useState(),{state:s,dispatch:o}=r.useContext(v),{vault:i}=s,l=zt(t==null?void 0:t.items,i);return r.useEffect(()=>{i&&i.load(e).then(u=>u&&n(u)).catch(u=>console.error(`Manifest ${e} failed to load: ${u}`))},[e,i]),r.useEffect(()=>{o({type:"updateAnnotations",payload:l})},[l,o]),t?r.createElement(Ee,null,t.label&&r.createElement(be,{label:t.label}),t.items&&r.createElement(kt,{items:t.items})):null},Lt=({iiifContent:e,options:t})=>r.createElement(se,{options:t},r.createElement($t,{iiifContent:e}));g.default=Lt,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.umd.js.map
