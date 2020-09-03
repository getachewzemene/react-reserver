(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return t?o.a.createElement(f,a(a({ref:n},c),{},{components:t})):o.a.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return D})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return B})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return W})),t.d(n,"g",(function(){return p})),t.d(n,"h",(function(){return m})),t.d(n,"i",(function(){return l})),t.d(n,"j",(function(){return j})),t.d(n,"k",(function(){return d})),t.d(n,"l",(function(){return M}));var r=t(0),o=t.n(r);function i(...e){const[n,t]=Object(r.useState)();return Object(r.useEffect)(()=>{if("function"!=typeof e[0])throw new Error("useFunction takes first argument as a function");{const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(e)]),n}const s=(e,n,t)=>t>=e&&n>=t;function a(e){return isNaN(e)?e:{width:e,height:e}}function l(e,n,t,r=0,o=0){return{left:r+n*(t=a(t)).width,top:e*t.height+o}}function c(e,n,t){return e=a(e),Math.floor((n-t)/e.width)}function u(e,n){return e=a(e),Math.floor(n/e.height)}function d(e,n,t){return e.map(e=>{if(e.editing){let r=p(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e})}function m(e){return e.map(e=>e.editing?{...e,editing:!1}:e)}function p(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";const t={row:e.row,column:n.column,length:e.column-n.column+e.length};return{...e,...t}}e.stick="left";const t={row:e.row,column:e.column,length:n.column-e.column+1};return{...e,...t}}function f(e){let n=[...e];return e.filter(e=>e.editing).forEach(e=>{const[t,r]=function(e,n){let t={...n};return[e.flatMap(e=>{if(e.id===n.id)return[];if(t.row===e.row){const n=e.column+1,r=t.column+1,o=e.column+e.length,i=t.column+t.length;if(s(n,o,r)||s(n,o,i)||s(r,i,o)||s(r,i,n)){const[n,r]=h(e,t);return t=r,n}{const[n,r]=w(e,t);return t=r,n}}{const[n,r]=w(e,t);return t=r,n}}),t]}(n,e);t.push(r),n=t}),n}const h=(e,n)=>((e=g(e)).collisions[n.id]="",(n=g(n)).collisions[e.id]="",[e,n]),g=e=>(e.collisions||(e.collisions={}),e),w=(e,n)=>(delete(e=g(e)).collisions[n.id],delete(n=g(n)).collisions[e.id],[e,n]),b="ADD",y="EDIT",v="DELETE",O="SET_BARS",E="SET_IS_EDITING";function j(e,n){switch(n.type){case O:return{...e,bars:n.payload};case y:{const t=[...e.bars],r=t.findIndex(e=>n.payload.id===e.id);return t[r]=n.payload,{...e,bars:t}}case b:{const t=[...e.bars];return t.push(n.payload),{...e,bars:t}}case v:{const t=[...e.bars],r=t.findIndex(e=>n.payload.id===e.id);return t.splice(r,1),{...e,bars:t}}case E:return{...e,isEditing:n.payload}}}function M(e,n){const[{bars:t,isEditing:o},i]=Object(r.useReducer)(e,{bars:n,isEditing:!1});return{isEditing:o,setIsEditing:e=>i({payload:e,type:E}),bars:t,addBar:e=>i({payload:e,type:b}),editBar:e=>i({payload:e,type:y}),deleteBar:e=>i({payload:e,type:v}),setBars:e=>i({payload:e,type:O})}}function T(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function N(e,n=0,t=4){if(n!==t)return Array.isArray(e)?e.map(e=>N(e,n+1)):T(e)?Object.keys(e).map(t=>t+" : "+N(e[t],n+1)):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function C(...e){const[n,t]=Object(r.useState)({});return Object(r.useEffect)(()=>{if(T(e[0]))t(e[0]);else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}},[JSON.stringify(N(e))]),n}function D(e){const n=C(e.content,e.length);return o.a.createElement("div",{id:e.id,role:"listitem",onDragStart:n=>{e.onDragStart(n,e)},onDragEnd:n=>{e.onDragEnd(n,e)},onClick:n=>{e.onClick(n,e)},onMouseOver:n=>{e.onMouseOver(n,e)},onContextMenu:n=>{e.onContextMenu(n,e)},onMouseEnter:n=>{e.onMouseEnter(n,e)},onMouseLeave:n=>{e.onMouseLeave(n,e)},onMouseMove:n=>{e.onMouseMove(n,e)},onMouseDown:n=>{e.onMouseDown(n,e)},onMouseUp:n=>{e.onMouseUp(n,e)},draggable:e.draggable,style:{...e.style,pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"},className:e.className},[...Array(e.length)].map((t,r)=>{const i=function(e,n,t,r,i){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?i||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(r,e.length,n,e.firstContent,e.lastContent),s=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return o.a.createElement(o.a.Fragment,{key:r},o.a.cloneElement(i,{...i.props,style:s},i.props.children))}),e.children)}function k(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:e=>{e.preventDefault()},onDragOver:n=>{n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:n=>{e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:n=>{e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:n=>{e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:n=>{e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:n=>{e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension.width,height:e.dimension.height,...e.style}},e.children)}function x(e){return o.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&o.a.createElement(k,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((n,t)=>o.a.createElement(k,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)),"rtl"===e.dir&&o.a.createElement(k,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function S(e){return o.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function B(e){return o.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function P(e=15){let n="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function W(e,n,t){return{id:P(),length:1,dimension:e,editing:!0,...n,...t}}function R(...e){const[n,t]=Object(r.useState)([]);return Object(r.useEffect)(()=>{if(T(e[0])){const n=e[0].func;"function"==typeof n&&(e.splice(0,1),t(n(...e)))}else if("function"==typeof e[0]){const n=e.splice(0,1);t(n[0](...e))}else Array.isArray(e[0])&&t(e[0])},[JSON.stringify(e)]),n}D.defaultProps={style:{},dimension:{width:20,height:20},onClick:()=>{},onMouseOver:()=>{},onDragStart:()=>{},onDragEnd:()=>{},onContextMenu:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{},onMouseMove:()=>{},length:1,content:{}},k.defaultProps={onMouseEnter:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseOver:()=>{},onDrop:()=>{}},x.defaultProps={onMouseOverCell:()=>{}};const I=o.a.forwardRef((e,n)=>{const t=i(u,e.dimension,e.height),s=i(c,e.dimension,e.width,e.rowTitleWidth),a=R(e.rowTitles,t),l=R(e.columnTitles,s),d=C(e.content,s,t),m=function(e){const[n,t]=Object(r.useState)({width:0,height:0});return Object(r.useEffect)(()=>{isNaN(e)?T(e)?t(e):t({width:-1,height:-1}):t({width:e,height:e})},[JSON.stringify(e)]),n}(e.dimension);return o.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,style:{...e.style,position:"relative"}},o.a.createElement(x,{columnTitles:l,columnCount:s,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:l.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[...Array(t)].map((n,t)=>o.a.createElement("div",{role:"rowgroup",key:t,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&o.a.createElement(k,{style:{display:a.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},a[t]),[...Array(s)].map((n,r)=>o.a.createElement(k,{key:`r${t}c${r}`,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:m,className:e.cellClassName,column:r,row:t},d[`r${t}c${r}`])),"rtl"===e.dir&&o.a.createElement(k,{style:{display:a.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},a[t]))),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:s,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:l.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))});I.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:()=>{},mouseDownCell:()=>{},mouseUpCell:()=>{},mouseDragOverCell:()=>{},mouseDropCell:()=>{},mouseLeaveGrid:()=>{},mouseMoveGrid:()=>{}},n.f=I},250:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return s})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return l}));const r=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],o=[{id:1,type:"full",to:2,from:4,start:"26-04-2019",end:"28-04-2019",img:"32.jpg",text:"Reach out to potention guest speakers",row:3},{id:2,type:"empty",from:1,start:"28-04-2019",end:"30-04-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:5},{id:4,type:"empty",to:1,start:"27-04-2019",end:"01-05-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:8}],i=[{id:563,start:"26-04-2019",end:"28-04-2019",name:"Jorge Vega",row:3},{id:9901,start:"28-04-2019",end:"30-04-2019",name:"Trevor Mathis",row:5},{id:1234,start:"27-04-2019",end:"01-05-2019",name:"Clifford Campbell",row:8}],s={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},a=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],l=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return f})),t.d(n,"rightToc",(function(){return h})),t.d(n,"default",(function(){return w}));var r=t(2),o=t(6),i=t(0),s=t.n(i),a=t(113),l=t(114),c=t(250),u=t(47),d=t.n(u);function m(e){const{bars:n,isEditing:t,setIsEditing:o,addBar:a,setBars:u}=Object(l.l)(l.j,[]),[m,p]=Object(i.useState)("");return s.a.createElement(s.a.Fragment,null,""!==m&&s.a.createElement("div",{className:"alert alert--success",role:"alert"},s.a.createElement("strong",null,m,"'s")," Card"),s.a.createElement(l.f,{cellClassName:d.a.row_cell,rowTitles:()=>c.c.map((e,n)=>s.a.createElement("div",{key:n,style:{background:"#12D3CF",height:"100%",textAlign:"center",cursor:"pointer",fontSize:"15px"},onClick:()=>{p(e)}},e)),rowTitleWidth:140,mouseDownCell:e=>{const n=Object(l.e)(e.dimension,e.cell);a(n),o(!0)},mouseEnterCell:e=>{if(t){const t=Object(l.k)(n,e);u(t)}},mouseUpCell:()=>{const e=n.map(e=>e.editing?{...e,editing:!1,style:{...e.style,pointerEvents:"auto"}}:e);u(e),o(!1)}},({columnTitleHeight:e,rowTitleWidth:t})=>n.map(n=>s.a.createElement(l.a,Object(r.a)({key:n.id},n,{style:{...n.style,...Object(l.i)(n.row,n.column,n.dimension,t,e)}})))))}var p={id:"rowtitle",title:"Row Title",sidebar_label:"Row Title"},f={unversionedId:"rowtitle",id:"rowtitle",isDocsHomePage:!1,title:"Row Title",description:"How about giving each row a title?",source:"@site/docs\\rowtitle.md",slug:"/rowtitle",permalink:"/react-reserver/docs/rowtitle",version:"current",sidebar_label:"Row Title",sidebar:"docs",previous:{title:"Column Title",permalink:"/react-reserver/docs/columntitle"},next:{title:"Bar Basics",permalink:"/react-reserver/docs/basicbar"}},h=[],g={rightToc:h};function w(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"How about giving each row a title?\nMaybe it represents a room, a vehicle or person.\nSo here we are going to create a list of people so we can assign their work times"),Object(a.b)("p",null,"Click on a title to see what happens!"),Object(a.b)(m,{mdxType:"RowTitle"}),Object(a.b)("p",null,"We are going to use the prop rowTitles which takes an array or a function that returns an array. "),Object(a.b)("p",null,"In order to control the width of the row title we use the prop rowTitleWidth"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Notice the width of the row titles are taken into account when calculating the width of Reserver.\nSo if you pass ",Object(a.b)("em",{parentName:"p"},"500")," as the width prop of the component and ",Object(a.b)("em",{parentName:"p"},"140")," to rowTitleWidth the number of columns will be smaller\nthan if you did not have row titles"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{29-45,47} file=../src/examples/RowTitle.js","{29-45,47}":!0,file:"../src/examples/RowTitle.js"}),"import React, { useState } from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars\n} from 'react-reserver'\n\nimport { names } from './testdata'\nimport styles from './basicexamples.module.css'\nexport default function RowTitle(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n\n  const [selectedWorker, setSelectedWorker] = useState('')\n  return (\n    <>\n      {selectedWorker !== '' && (\n        <div className='alert alert--success' role='alert'>\n          <strong>{selectedWorker}'s</strong> Card\n        </div>\n      )}\n      <Reserver\n        cellClassName={styles.row_cell}\n        rowTitles={() => {\n          return names.map((val, index) => {\n            return (\n              <div\n                key={index}\n                style={{\n                  background: '#12D3CF',\n                  height: '100%',\n                  textAlign: 'center',\n                  cursor:\"pointer\",\n                  fontSize:\"15px\"\n                }}\n                onClick={() => {\n                  setSelectedWorker(val)\n                }}\n              >\n                {val}\n              </div>\n            )\n          })\n        }}\n        rowTitleWidth={140}\n        mouseDownCell={(props) => {\n          const newbar = createBar(props.dimension, props.cell)\n          addBar(newbar)\n          setIsEditing(true)\n        }}\n        mouseEnterCell={(props) => {\n          if (isEditing) {\n            const nBars = resizeBars(bars, props)\n            setBars(nBars)\n          }\n        }}\n        mouseUpCell={() => {\n          const dBars = bars.map((bar) => {\n            if (bar.editing) {\n              return {\n                ...bar,\n                editing: false,\n                style: { ...bar.style, pointerEvents: 'auto' }\n              }\n            }\n            return bar\n          })\n\n          setBars(dBars)\n          setIsEditing(false)\n        }}\n      >\n        {({ columnTitleHeight, rowTitleWidth }) => {\n          return bars.map((bar) => {\n            return (\n              <Bar\n                key={bar.id}\n                {...bar}\n                style={{\n                  ...bar.style,\n                  ...getPosition(\n                    bar.row,\n                    bar.column,\n                    bar.dimension,\n                    rowTitleWidth,\n                    columnTitleHeight\n                  )\n                }}\n              />\n            )\n          })\n        }}\n      </Reserver>\n    </>\n  )\n}\n")))}w.isMDXComponent=!0}}]);