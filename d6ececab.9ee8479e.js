(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return M})),n.d(t,"rightToc",(function(){return x})),n.d(t,"default",(function(){return T}));var r=n(2),o=n(6),i=n(0),s=n.n(i),a=n(113),c=n(114),l=n(112),u=n.n(l),d=n(250),m=n(248);function f(e){var t=document.createDocumentFragment();return e.forEach((function(e){t.appendChild(function(e){var t=document.createElementNS("http://www.w3.org/2000/svg",e.type);Object.keys(e).forEach((function(n){"type"!==n&&"children"!==n&&t.setAttribute(n,e[n])})),Array.isArray(e.children)&&(console.log(e.children),t.appendChild(f(e.children)));return t}(e))})),t}function h(e){return s.a.createElement("div",{style:{width:e.width,display:"inline-block",color:"#adb3b8",paddingLeft:"10px",borderLeft:"1px solid #d2d2d2"}},e.children," ")}function g(e){return Object(m.a)(e.date,e.columnCount,"days").map((function(t,n){return s.a.createElement("div",{key:t,style:{background:e.titleRange[n]?"#1ca3f9":"#fff",height:"100%",width:"100%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",fontWeight:500},onMouseOver:function(){return e.setPointerLocation(w(n,e.cellDimesions.width,e.rowTitleWidth,e.columnTitleHeight))},onClick:function(){console.log(isDragging)}},s.a.createElement("div",null,t))}))}function p(e){return"M "+e.start.x+" "+e.start.y+" C  "+e.centerA.x+" "+e.centerA.y+", "+e.centerB.x+" "+e.centerB.y+" ,"+e.center.x+" "+e.center.y+"  S "+e.endA.x+" "+e.endA.y+", "+e.end.x+" "+e.end.y}function y(e,t,n){return{centerA:{x:e.x+100,y:e.y},centerB:{x:e.x+100,y:t.y},endA:{x:n.x-150,y:n.y}}}function j(e){return s.a.createElement("div",{style:Object.assign({pointerEvents:"none",zIndex:"999",position:"absolute"},e.dimensions)},s.a.createElement("svg",{viewBox:"0 0 "+e.dimensions.width+" "+e.dimensions.height,xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("defs",null,s.a.createElement("marker",{id:"arrow",viewBox:"0 -5 10 10",refX:"8",refY:"0",markerWidth:"10",markerHeight:"10",orient:"auto"},s.a.createElement("path",{d:"M0,-5L10,0L0,5"}))),e.bars.flatMap((function(t,n){if(e.exceptions["from"+t.id])return[];if(t.moving)return[];if(t.to){var r=e.bars.findIndex((function(e){return e.id===t.to})),o=(i=t,a=e.bars[r],c=e.rowTitleWidth,l=e.columnTitleHeight,u=b(i.column+i.length,i.dimension.width,l,i.row,i.dimension.height,c),d=b(a.column,a.dimension.width,l,a.row,a.dimension.height,c),m=v(u,d),f=y(u,m,d),Object.assign({start:u,center:m},f,{end:d}));return s.a.createElement("path",{key:e.bars[r].id+"=>"+t.id,d:p(o),stroke:"black",fill:"transparent",markerEnd:"url(#arrow)"})}var i,a,c,l,u,d,m,f;return[]})),s.a.createElement("circle",{cx:e.pointerLocation.x,cy:e.pointerLocation.y,r:"5",fill:"#13aaf5"}),s.a.createElement("line",{x1:e.pointerLocation.x,y1:e.pointerLocation.y,x2:e.pointerLocation.x,y2:e.dimensions.height,stroke:"#13aaf5"})))}function w(e,t,n,r){return{x:e*t+t/2+n,y:r}}function v(e,t){return{x:(e.x-t.x)/2+t.x,y:(t.y-e.y)/2+e.y}}function b(e,t,n,r,o,i){return{x:e*t+i,y:(r+.5)*o+n}}function E(e){var t,n=Object(c.l)(c.j,[]),o=n.bars,a=n.isEditing,l=n.setIsEditing,E=n.addBar,O=n.setBars,M=n.editBar,x=Object(i.useState)([]),k=x[0],T=x[1],C=Object(i.useRef)(),D=u()("26/04/2019","DD/MM/YYYY"),N={width:80,height:40},S=Object(i.useState)(0),A=S[0],L=S[1],I=Object(i.useState)({width:0,height:0}),z=I[0],P=I[1],B=Object(i.useState)({width:0,height:0}),R=B[0],W=B[1],H=function(e,t){if("undefined"==typeof window||"undefined"==typeof document)return function(){};var n=Object(i.useRef)(document.createElementNS("http://www.w3.org/2000/svg","svg"));return Object(i.useEffect)((function(){Object.keys(e).forEach((function(t){var r=e[t];if("style"===t){var o="";Object.keys(r).forEach((function(t){var n=r[t];"number"==typeof e[t]&&(n+="px"),o+=t+":"+n+";"})),r=o}n.current.setAttribute(t,r)}));var r=document.querySelector("body");if(r.appendChild(n.current),t){var o=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=f(t);o.appendChild(i),n.current.appendChild(o)}return function(){r.removeChild(n.current)}}),[JSON.stringify(e),JSON.stringify(t)]),function(e){n.current.innerHTML="";var t=f(e);n.current.appendChild(t)}}(R),Y=Object(i.useState)({x:50,y:50}),F=Y[0],J=Y[1],U=Object(i.useState)(!1),G=U[0],X=U[1],V=Object(i.useState)({}),_=V[0],q=V[1],$=Object(i.useState)({}),K=$[0],Q=$[1],Z=Object(i.useRef)(),ee=function(e,t,n,r){void 0===r&&(r=0);var o=Object(i.useState)([]),a=o[0],c=o[1],l=t.format("MMMM"),u=0;return Object(i.useEffect)((function(){var r=[];[].concat(Array(e)).forEach((function(e,o){var i=t.clone().add(o,"days").format("MMMM");l!==i&&u>0&&(r.push(s.a.createElement(h,{key:l,width:u},l)),u=0,l=i),u+=n})),u>0&&r.push(s.a.createElement(h,{key:l,width:u},l)),c(r)}),[e,t.format("MMMM"),n]),a}(A,D,N.width,200),te=function(){if("undefined"==typeof window||"undefined"==typeof document)return function(){};var e=Object(i.useRef)(document.createElement("style"));return Object(i.useEffect)((function(){e.current.type="text/css",document.querySelector("head").appendChild(e.current)}),[]),function(t){e.current.innerHTML=t}}();return Object(i.useEffect)((function(){var e=C.current.getBoundingClientRect(),t=Z.current.getBoundingClientRect(),n=t.width,r=t.height;P({width:n,height:r,winWidth:e.width}),J(w(0,N.width,200,30))}),[Z.current]),Object(i.useEffect)((function(){var e=Z.current.getBoundingClientRect(),t=e.width,n=e.height;W({width:t,height:n,style:{"pointer-events":"none",position:"absolute",top:Z.current.offsetTop,left:Z.current.offsetLeft}})}),[Z.current,ee]),Object(i.useEffect)((function(){var e=d.e.map((function(e){return e.dimension=N,e.start&&e.end&&(e.length=Object(m.g)(e.start,e.end)),e.start&&e.end&&(e.column=Object(m.g)(D,e.start)),e.roomId&&(e.row=Object(m.h)(rooms,e.roomId)),e}));O(e)}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},s.a.createElement("div",{style:{width:z.width-200,marginLeft:200,marginBottom:"5px"}},ee),s.a.createElement("div",{ref:C,style:{display:"flex",flexDirection:"column",justifyContent:"center"}},s.a.createElement(j,{exceptions:k,bars:o,rowTitleWidth:200,dimensions:z,columnTitleHeight:30,pointerLocation:F}),s.a.createElement(c.f,((t={ref:Z,width:z.winWidth,columnTitleHeight:30,dimension:N,rowTitleWidth:200,rowTitles:function(){return[{name:"Foundational",rows:6},{name:"Travel + lodging",rows:1}].flatMap((function(e){return[].concat(Array(e.rows)).map((function(t,n){return 0===n?s.a.createElement("div",null,s.a.createElement("div",{style:{padding:"10px"}},e.name)):s.a.createElement("div",null)}))}))},columnTitles:{func:function(e){return L(e),g({date:D,columnCount:e,titleRange:K,setPointerLocation:J,cellDimesions:N,rowTitleWidth:200,columnTitleHeight:30})},titleRange:K},content:function(e,t){var n={};return[].concat(Array(t)).forEach((function(t,r){[].concat(Array(e)).forEach((function(e,t){n["r"+r+"c"+t]=s.a.createElement(c.b,{style:{background:t%2==0?"#EDF1F2":"#F6F8F9"}})}))})),n},mouseDownCell:function(e){var t=Object(c.e)(e.dimension,e.cell),n={};[].concat(Array(t.length)).forEach((function(e,r){n[r+t.column]=!0})),Q(n),E(t),q(t),l(!0)},mouseMoveGrid:function(e){if(G){var t=[];if(_.to){e.pageX,e.pageY;var n=e.currentTarget.getBoundingClientRect(),r=e.pageX-n.left,o=e.pageY-n.top,i=k.to,s={x:r+k.barEnd.x,y:o+k.barEnd.y},a=v(s,i),c=y(s,a,i);t.push({type:"path",d:p(Object.assign({},c,{start:s,center:a,end:i})),stroke:"black",fill:"transparent","marker-end":"url(#arrow)"})}if(_.from){var l=e.currentTarget.getBoundingClientRect(),u=e.pageX-l.left,d=e.pageY-l.top,m={x:u-k.barStart.x,y:d-k.barStart.y},f=k.from,h=v(f,m),g=y(f,h,m);t.push({type:"path",d:p(Object.assign({},g,{start:f,center:h,end:m})),stroke:"black",fill:"transparent","marker-end":"url(#arrow)"})}H(t),te(".reserver-drag{transform: translate("+(e.pageX-_.draggingLeft)+"px,"+(e.pageY-_.draggingTop)+"px)}")}},mouseEnterCell:function(e){if(a){var t=Object(c.k)(o,e,(function(e){return positionToDate(e,D)}));t=checkCollisions(t),O(t)}}}).mouseEnterCell=function(e){if(G&&!a){var t={};[].concat(Array(_.length)).forEach((function(n,r){t[r+e.cell.column-_.selectedCell]=!0})),Q(t)}if(a){var n=Object(c.g)(_,e.cell);console.log(n.length);var r={};[].concat(Array(n.length)).forEach((function(e,t){r[t+n.column]=!0})),Q(r),q(n),M(n)}},t.mouseUpCell=function(e){var t=e.cell;if(G){var n=Object.assign({},_,{row:t.row,column:t.column-_.selectedCell,moving:!1});M(n),H([]),T({}),te(".reserver-drag{transform: translate(0px,0px)}"),Q({}),X(!1)}if(a){var r=Object(c.h)(o);O(r),Q({}),l(!1)}},t),(function(e){var t=e.columnTitleHeight,n=e.rowTitleWidth;return o.map((function(e){return s.a.createElement(c.a,Object(r.a)({draggable:!0},e,{onDragStart:function(e,r){if(a)e.preventDefault();else{var i=e.currentTarget.getBoundingClientRect(),s=e.pageX-i.left,c=e.pageY-i.top,l=parseInt(s/r.dimension.width),u=Object.assign({},r,{selectedCell:l,moving:!0,draggingLeft:e.pageX,draggingTop:e.pageY}),d={};if(d.barEnd={x:r.dimension.width*r.length-s,y:r.dimension.height-.5*r.dimension.height-c},d.barStart={x:s,y:c-.5*r.dimension.height},r.to){var m=o.findIndex((function(e){return e.id===r.to})),f=o[m];m>-1&&(console.log(o),console.log("toColumn",f.column),d.to=b(f.column,f.dimension.width,t,f.row,f.dimension.height,n))}if(r.from){var h=o.findIndex((function(e){return e.id===r.from})),g=o[h];if(d["from"+g.id]=g.id,h>-1){var p=b(g.column,g.dimension.width,t,g.row,g.dimension.height,n);d.from={x:g.dimension.width*g.length+p.x,y:p.y}}}T(d),M(u),q(u),X(!0)}},key:e.id,className:e.moving?"reserver-drag":"",lastContent:s.a.createElement("div",{style:{zIndex:1e4}},s.a.createElement("img",{style:{float:"right"},onMouseDown:function(){var t=Object.assign({},e,{stick:"left",editing:!0});M(t),q(t),l(!0)},src:"/react-reserver/resources/images/dragicon.png"})),style:Object.assign({},e.style,{borderRadius:"6px",pointerEvents:e.editing||e.moving?"none":"auto",zIndex:1e3},Object(c.i)(e.row,e.column,e.dimension,n,t))}),s.a.createElement(c.c,{style:{display:"flex",alignItems:"center"}},s.a.createElement("div",{style:{margin:"5px",width:25}},s.a.createElement("img",{style:{borderRadius:"100%"},src:"/react-reserver/resources/images/"+(e.img||"default.jpg")})),s.a.createElement("div",{style:{width:e.length*e.dimension.width-40,overflow:"hidden",color:"#fff"}},e.text)))}))})))))}var O={id:"projecttimeline",title:"Project Timeline",sidebar_label:"Project Timeline"},M={unversionedId:"projecttimeline",id:"projecttimeline",isDocsHomePage:!1,title:"Project Timeline",description:"This is a work in progress but I wanted to see if I could replicate the Asana Timeline",source:"@site/docs\\projecttimeline.md",slug:"/projecttimeline",permalink:"/react-reserver/docs/projecttimeline",version:"current",sidebar_label:"Project Timeline",sidebar:"docs",previous:{title:"Right To Left",permalink:"/react-reserver/docs/righttoleft"},next:{title:"Hotel Reservation",permalink:"/react-reserver/docs/hotelreservation"}},x=[],k={rightToc:x};function T(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},k,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a work in progress but I wanted to see if I could replicate the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://luna1.co/330812.png"}),"Asana Timeline"),"\nI need to improve the SVG curves between the bars. But it works\nFeel free to drag the bars around and see how everything moves."),Object(a.b)(E,{mdxType:"ProjectTimeline"}))}T.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(s,".").concat(f)]||d[f]||m[f]||i;return n?o.a.createElement(h,a(a({ref:t},l),{},{components:n})):o.a.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return I})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return M}));var r=n(0),o=n.n(r);function i(...e){const[t,n]=Object(r.useState)();return Object(r.useEffect)(()=>{if("function"!=typeof e[0])throw new Error("useFunction takes first argument as a function");{const t=e.splice(0,1);n(t[0](...e))}},[JSON.stringify(e)]),t}const s=(e,t,n)=>n>=e&&t>=n;function a(e){return isNaN(e)?e:{width:e,height:e}}function c(e,t,n,r=0,o=0){return{left:r+t*(n=a(n)).width,top:e*n.height+o}}function l(e,t,n){return e=a(e),Math.floor((t-n)/e.width)}function u(e,t){return e=a(e),Math.floor(t/e.height)}function d(e,t,n){return e.map(e=>{if(e.editing){let r=f(e,t.cell);return"function"==typeof n&&(r=n(r)),r}return e})}function m(e){return e.map(e=>e.editing?{...e,editing:!1}:e)}function f(e,t){if(e.column>t.column||"right"===e.stick&&e.length>1){e.stick="right";const n={row:e.row,column:t.column,length:e.column-t.column+e.length};return{...e,...n}}e.stick="left";const n={row:e.row,column:e.column,length:t.column-e.column+1};return{...e,...n}}function h(e){let t=[...e];return e.filter(e=>e.editing).forEach(e=>{const[n,r]=function(e,t){let n={...t};return[e.flatMap(e=>{if(e.id===t.id)return[];if(n.row===e.row){const t=e.column+1,r=n.column+1,o=e.column+e.length,i=n.column+n.length;if(s(t,o,r)||s(t,o,i)||s(r,i,o)||s(r,i,t)){const[t,r]=g(e,n);return n=r,t}{const[t,r]=y(e,n);return n=r,t}}{const[t,r]=y(e,n);return n=r,t}}),n]}(t,e);n.push(r),t=n}),t}const g=(e,t)=>((e=p(e)).collisions[t.id]="",(t=p(t)).collisions[e.id]="",[e,t]),p=e=>(e.collisions||(e.collisions={}),e),y=(e,t)=>(delete(e=p(e)).collisions[t.id],delete(t=p(t)).collisions[e.id],[e,t]),j="ADD",w="EDIT",v="DELETE",b="SET_BARS",E="SET_IS_EDITING";function O(e,t){switch(t.type){case b:return{...e,bars:t.payload};case w:{const n=[...e.bars],r=n.findIndex(e=>t.payload.id===e.id);return n[r]=t.payload,{...e,bars:n}}case j:{const n=[...e.bars];return n.push(t.payload),{...e,bars:n}}case v:{const n=[...e.bars],r=n.findIndex(e=>t.payload.id===e.id);return n.splice(r,1),{...e,bars:n}}case E:return{...e,isEditing:t.payload}}}function M(e,t){const[{bars:n,isEditing:o},i]=Object(r.useReducer)(e,{bars:t,isEditing:!1});return{isEditing:o,setIsEditing:e=>i({payload:e,type:E}),bars:n,addBar:e=>i({payload:e,type:j}),editBar:e=>i({payload:e,type:w}),deleteBar:e=>i({payload:e,type:v}),setBars:e=>i({payload:e,type:b})}}function x(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function k(e,t=0,n=4){if(t!==n)return Array.isArray(e)?e.map(e=>k(e,t+1)):x(e)?Object.keys(e).map(n=>n+" : "+k(e[n],t+1)):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function T(...e){const[t,n]=Object(r.useState)({});return Object(r.useEffect)(()=>{if(x(e[0]))n(e[0]);else if("function"==typeof e[0]){const t=e.splice(0,1);n(t[0](...e))}},[JSON.stringify(k(e))]),t}function C(e){const t=T(e.content,e.length);return o.a.createElement("div",{id:e.id,role:"listitem",onDragStart:t=>{e.onDragStart(t,e)},onDragEnd:t=>{e.onDragEnd(t,e)},onClick:t=>{e.onClick(t,e)},onMouseOver:t=>{e.onMouseOver(t,e)},onContextMenu:t=>{e.onContextMenu(t,e)},onMouseEnter:t=>{e.onMouseEnter(t,e)},onMouseLeave:t=>{e.onMouseLeave(t,e)},onMouseMove:t=>{e.onMouseMove(t,e)},onMouseDown:t=>{e.onMouseDown(t,e)},onMouseUp:t=>{e.onMouseUp(t,e)},draggable:e.draggable,style:{...e.style,pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"},className:e.className},[...Array(e.length)].map((n,r)=>{const i=function(e,t,n,r,i){return 0===e?r||n[e]||o.a.createElement("div",null):t-1===e?i||n[t-1]||o.a.createElement("div",null):n[e]||o.a.createElement("div",null)}(r,e.length,t,e.firstContent,e.lastContent),s=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return o.a.createElement(o.a.Fragment,{key:r},o.a.cloneElement(i,{...i.props,style:s},i.props.children))}),e.children)}function D(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:e=>{e.preventDefault()},onDragOver:t=>{t.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},t)},className:e.className,onMouseOver:t=>{e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onMouseEnter:t=>{e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onMouseDown:t=>{e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onMouseUp:t=>{e.onMouseUp({cell:{row:e.row,column:e.column}},t)},onDrop:t=>{e.onDrop({cell:{row:e.row,column:e.column}},t)},style:{overflow:"hidden",width:e.dimension.width,height:e.dimension.height,...e.style}},e.children)}function N(e){return o.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&o.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((t,n)=>o.a.createElement(D,{"aria-colindex":n,key:n,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:n,row:-1,className:e.columnTitleClassName},t)),"rtl"===e.dir&&o.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function S(e){return o.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function A(e){return o.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function L(e=15){let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function I(e,t,n){return{id:L(),length:1,dimension:e,editing:!0,...t,...n}}function z(...e){const[t,n]=Object(r.useState)([]);return Object(r.useEffect)(()=>{if(x(e[0])){const t=e[0].func;"function"==typeof t&&(e.splice(0,1),n(t(...e)))}else if("function"==typeof e[0]){const t=e.splice(0,1);n(t[0](...e))}else Array.isArray(e[0])&&n(e[0])},[JSON.stringify(e)]),t}C.defaultProps={style:{},dimension:{width:20,height:20},onClick:()=>{},onMouseOver:()=>{},onDragStart:()=>{},onDragEnd:()=>{},onContextMenu:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{},onMouseMove:()=>{},length:1,content:{}},D.defaultProps={onMouseEnter:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseOver:()=>{},onDrop:()=>{}},N.defaultProps={onMouseOverCell:()=>{}};const P=o.a.forwardRef((e,t)=>{const n=i(u,e.dimension,e.height),s=i(l,e.dimension,e.width,e.rowTitleWidth),a=z(e.rowTitles,n),c=z(e.columnTitles,s),d=T(e.content,s,n),m=function(e){const[t,n]=Object(r.useState)({width:0,height:0});return Object(r.useEffect)(()=>{isNaN(e)?x(e)?n(e):n({width:-1,height:-1}):n({width:e,height:e})},[JSON.stringify(e)]),t}(e.dimension);return o.a.createElement("div",{ref:t,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,style:{...e.style,position:"relative"}},o.a.createElement(N,{columnTitles:c,columnCount:s,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:c.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[...Array(n)].map((t,n)=>o.a.createElement("div",{role:"rowgroup",key:n,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&o.a.createElement(D,{style:{display:a.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},a[n]),[...Array(s)].map((t,r)=>o.a.createElement(D,{key:`r${n}c${r}`,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:m,className:e.cellClassName,column:r,row:n},d[`r${n}c${r}`])),"rtl"===e.dir&&o.a.createElement(D,{style:{display:a.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},a[n]))),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:s,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:c.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))});P.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:()=>{},mouseDownCell:()=>{},mouseUpCell:()=>{},mouseDragOverCell:()=>{},mouseDropCell:()=>{},mouseLeaveGrid:()=>{},mouseMoveGrid:()=>{}},t.f=P},248:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n(112),o=n.n(r);function i(e,t,n,r="D"){return[...Array(t)].map((t,o)=>a(e,o,n,r))}function s(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function a(e,t,n,r){return o()(e).add(t,n).format(r)}function c(e,t,n="DD-MM-YYYY"){const r=o()(e,n).startOf("day");return o()(t,n).startOf("day").diff(r,"days")}function l(e,t){return e[t].row}function u(e,t,n="unit",r="DD-MM-YYYY"){return e.start=t.clone().add(e.column,n).format(r),e.end=t.clone().add(e.column+e.length,n).format(r),e}function d(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function m(e){for(const t in e)return!1;return!0}},250:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));const r=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],o=[{id:1,type:"full",to:2,from:4,start:"26-04-2019",end:"28-04-2019",img:"32.jpg",text:"Reach out to potention guest speakers",row:3},{id:2,type:"empty",from:1,start:"28-04-2019",end:"30-04-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:5},{id:4,type:"empty",to:1,start:"27-04-2019",end:"01-05-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:8}],i=[{id:563,start:"26-04-2019",end:"28-04-2019",name:"Jorge Vega",row:3},{id:9901,start:"28-04-2019",end:"30-04-2019",name:"Trevor Mathis",row:5},{id:1234,start:"27-04-2019",end:"01-05-2019",name:"Clifford Campbell",row:8}],s={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},a=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],c=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},253:function(e,t,n){var r={"./af":115,"./af.js":115,"./ar":116,"./ar-dz":117,"./ar-dz.js":117,"./ar-kw":118,"./ar-kw.js":118,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":120,"./ar-ma.js":120,"./ar-sa":121,"./ar-sa.js":121,"./ar-tn":122,"./ar-tn.js":122,"./ar.js":116,"./az":123,"./az.js":123,"./be":124,"./be.js":124,"./bg":125,"./bg.js":125,"./bm":126,"./bm.js":126,"./bn":127,"./bn.js":127,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":136,"./de-at":137,"./de-at.js":137,"./de-ch":138,"./de-ch.js":138,"./de.js":136,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-in":146,"./en-in.js":146,"./en-nz":147,"./en-nz.js":147,"./en-sg":148,"./en-sg.js":148,"./eo":149,"./eo.js":149,"./es":150,"./es-do":151,"./es-do.js":151,"./es-us":152,"./es-us.js":152,"./es.js":150,"./et":153,"./et.js":153,"./eu":154,"./eu.js":154,"./fa":155,"./fa.js":155,"./fi":156,"./fi.js":156,"./fil":157,"./fil.js":157,"./fo":158,"./fo.js":158,"./fr":159,"./fr-ca":160,"./fr-ca.js":160,"./fr-ch":161,"./fr-ch.js":161,"./fr.js":159,"./fy":162,"./fy.js":162,"./ga":163,"./ga.js":163,"./gd":164,"./gd.js":164,"./gl":165,"./gl.js":165,"./gom-deva":166,"./gom-deva.js":166,"./gom-latn":167,"./gom-latn.js":167,"./gu":168,"./gu.js":168,"./he":169,"./he.js":169,"./hi":170,"./hi.js":170,"./hr":171,"./hr.js":171,"./hu":172,"./hu.js":172,"./hy-am":173,"./hy-am.js":173,"./id":174,"./id.js":174,"./is":175,"./is.js":175,"./it":176,"./it-ch":177,"./it-ch.js":177,"./it.js":176,"./ja":178,"./ja.js":178,"./jv":179,"./jv.js":179,"./ka":180,"./ka.js":180,"./kk":181,"./kk.js":181,"./km":182,"./km.js":182,"./kn":183,"./kn.js":183,"./ko":184,"./ko.js":184,"./ku":185,"./ku.js":185,"./ky":186,"./ky.js":186,"./lb":187,"./lb.js":187,"./lo":188,"./lo.js":188,"./lt":189,"./lt.js":189,"./lv":190,"./lv.js":190,"./me":191,"./me.js":191,"./mi":192,"./mi.js":192,"./mk":193,"./mk.js":193,"./ml":194,"./ml.js":194,"./mn":195,"./mn.js":195,"./mr":196,"./mr.js":196,"./ms":197,"./ms-my":198,"./ms-my.js":198,"./ms.js":197,"./mt":199,"./mt.js":199,"./my":200,"./my.js":200,"./nb":201,"./nb.js":201,"./ne":202,"./ne.js":202,"./nl":203,"./nl-be":204,"./nl-be.js":204,"./nl.js":203,"./nn":205,"./nn.js":205,"./oc-lnc":206,"./oc-lnc.js":206,"./pa-in":207,"./pa-in.js":207,"./pl":208,"./pl.js":208,"./pt":209,"./pt-br":210,"./pt-br.js":210,"./pt.js":209,"./ro":211,"./ro.js":211,"./ru":212,"./ru.js":212,"./sd":213,"./sd.js":213,"./se":214,"./se.js":214,"./si":215,"./si.js":215,"./sk":216,"./sk.js":216,"./sl":217,"./sl.js":217,"./sq":218,"./sq.js":218,"./sr":219,"./sr-cyrl":220,"./sr-cyrl.js":220,"./sr.js":219,"./ss":221,"./ss.js":221,"./sv":222,"./sv.js":222,"./sw":223,"./sw.js":223,"./ta":224,"./ta.js":224,"./te":225,"./te.js":225,"./tet":226,"./tet.js":226,"./tg":227,"./tg.js":227,"./th":228,"./th.js":228,"./tk":229,"./tk.js":229,"./tl-ph":230,"./tl-ph.js":230,"./tlh":231,"./tlh.js":231,"./tr":232,"./tr.js":232,"./tzl":233,"./tzl.js":233,"./tzm":234,"./tzm-latn":235,"./tzm-latn.js":235,"./tzm.js":234,"./ug-cn":236,"./ug-cn.js":236,"./uk":237,"./uk.js":237,"./ur":238,"./ur.js":238,"./uz":239,"./uz-latn":240,"./uz-latn.js":240,"./uz.js":239,"./vi":241,"./vi.js":241,"./x-pseudo":242,"./x-pseudo.js":242,"./yo":243,"./yo.js":243,"./zh-cn":244,"./zh-cn.js":244,"./zh-hk":245,"./zh-hk.js":245,"./zh-mo":246,"./zh-mo.js":246,"./zh-tw":247,"./zh-tw.js":247};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=253}}]);