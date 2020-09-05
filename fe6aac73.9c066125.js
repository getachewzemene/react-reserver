(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return g})),t.d(n,"metadata",(function(){return j})),t.d(n,"rightToc",(function(){return v})),t.d(n,"default",(function(){return y}));var r=t(2),o=t(6),s=t(0),i=t.n(s),a=t(113),l=t(114),c=t(112),u=t.n(c),d=t(248),f=t(250),m=(t(48),t(47)),p=t.n(m);function h(e){const{bars:n,isEditing:t,setIsEditing:o,addBar:a,setBars:c}=Object(l.l)(l.j,[]),[m]=Object(s.useState)(u()("01-08-2020","DD-MM-YYYY"));return Object(s.useEffect)(()=>{const e=f.d.map(e=>(e.start&&e.end&&(e.length=Object(d.g)(e.start,e.end)),e.start&&e.end&&(e.column=Object(d.g)(m,e.start)),e.roomId&&(e.row=Object(d.h)(f.f,e.roomId)),e));c(e)},[f.d]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{marginBottom:"10px"}},"Start date:"," ",i.a.createElement("span",{className:"button button--success"}," ",m.format("LL"))),i.a.createElement(l.f,{cellClassName:p.a.row_cell,mouseDownCell:e=>{const n=Object(l.e)(e.dimension,e.cell);a(n),o(!0)},mouseEnterCell:e=>{if(t){const t=Object(l.k)(n,e);c(t)}},mouseUpCell:()=>{const e=Object(l.h)(n);c(e),o(!1)}},({dimension:e,columnCount:t})=>n.map(n=>(n.column<0&&(n.leftOverflow=!0,n.length=n.length+n.column,n.column=0),t<n.column+n.length&&(n.rightOverflow=!0,n.length=t-n.column),i.a.createElement(l.a,Object(r.a)({key:n.id},n,{style:{overflow:"hidden",pointerEvents:n.editing?"none":"auto",...n.style,...Object(l.i)(n.row,n.column,e)}}),i.a.createElement(l.c,{style:{pointerEvents:"none",color:"#fff",width:e.width*n.length}},n.guestName))))))}var g={id:"dateoverflow",title:"Date Overflow",sidebar_label:"Date Overflow"},j={unversionedId:"dateoverflow",id:"dateoverflow",isDocsHomePage:!1,title:"Date Overflow",description:"As you see here before every render we clip the sides that overflow.",source:"@site/docs\\dateoverflow.md",slug:"/dateoverflow",permalink:"/react-reserver/docs/dateoverflow",version:"current",sidebar_label:"Date Overflow",sidebar:"docs",previous:{title:"Resolve Date Time",permalink:"/react-reserver/docs/resolvedatetime"},next:{title:"Bar Advanced",permalink:"/react-reserver/docs/baradvanced"}},v=[],b={rightToc:v};function y(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(h,{mdxType:"DateOverflow"}),Object(a.b)("p",null,"As you see here before every render we clip the sides that overflow.\nWe leave a flag in case we want a way to have a visual identification of the change.\nBut how would we have such an identification?\nWe will se in the next section "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"  if (bar.column < 0) {\n              bar.leftOverflow = true\n              bar.length = bar.length + bar.column\n              bar.column = 0\n            }\n\n            if (columnCount < bar.column + bar.length) {\n              bar.rightOverflow = true\n              bar.length = columnCount - bar.column\n            }\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{74-83} file=../src/examples/DateOverflow.js","{74-83}":!0,file:"../src/examples/DateOverflow.js"}),"import React, { useState, useEffect } from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars,\n  finishEditingBars,\n  Tag\n} from 'react-reserver'\n\nimport moment from 'moment'\nimport { resolveRow, resolveDateDiff } from './helpers'\nimport { rooms, preMadeReservations } from './testdata'\nimport './example.css'\nimport styles from './basicexamples.module.css'\nexport default function DateOverflow(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n  const [startDate] = useState(moment('01-08-2020', 'DD-MM-YYYY'))\n\n  useEffect(() => {\n    const nBars = preMadeReservations.map((bar) => {\n      if (bar.start && bar.end) {\n        bar.length = resolveDateDiff(bar.start, bar.end)\n      }\n\n      if (bar.start && bar.end) {\n        bar.column = resolveDateDiff(startDate, bar.start)\n      }\n\n      if (bar.roomId) {\n        bar.row = resolveRow(rooms, bar.roomId)\n      }\n      return bar\n    })\n\n    setBars(nBars)\n  }, [preMadeReservations])\n\n  return (\n    <React.Fragment>\n      <div style={{ marginBottom: '10px' }}>\n        Start date:{' '}\n        <span className='button button--success'>\n          {' '}\n          {startDate.format('LL')}\n        </span>\n      </div>\n      <Reserver\n        cellClassName={styles.row_cell}\n        mouseDownCell={(props) => {\n          const newbar = createBar(props.dimension, props.cell)\n          addBar(newbar)\n          setIsEditing(true)\n        }}\n        mouseEnterCell={(props) => {\n          if (isEditing) {\n            const nBars = resizeBars(bars, props)\n            setBars(nBars)\n          }\n        }}\n        mouseUpCell={() => {\n          const dBars = finishEditingBars(bars)\n          setBars(dBars)\n          setIsEditing(false)\n        }}\n      >\n        {({ dimension, columnCount }) => {\n          return bars.map((bar) => {\n            if (bar.column < 0) {\n              bar.leftOverflow = true\n              bar.length = bar.length + bar.column\n              bar.column = 0\n            }\n\n            if (columnCount < bar.column + bar.length) {\n              bar.rightOverflow = true\n              bar.length = columnCount - bar.column\n            }\n\n            return (\n              <Bar\n                key={bar.id}\n                {...bar}\n                style={{\n                  overflow: 'hidden',\n                  pointerEvents: bar.editing ? 'none' : 'auto',\n                  ...bar.style,\n                  ...getPosition(bar.row, bar.column, dimension)\n                }}\n              >\n                <Tag\n                  style={{\n                    pointerEvents: 'none',\n                    color: '#fff',\n                    width: dimension.width * bar.length\n                  }}\n                >\n                  {bar.guestName}\n                </Tag>\n              </Bar>\n            )\n          })\n        }}\n      </Reserver>\n    </React.Fragment>\n  )\n}\n")))}y.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,p=d["".concat(i,".").concat(m)]||d[m]||f[m]||s;return t?o.a.createElement(p,a(a({ref:n},c),{},{components:t})):o.a.createElement(p,a({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return T})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return z})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return A})),t.d(n,"g",(function(){return p})),t.d(n,"h",(function(){return m})),t.d(n,"i",(function(){return c})),t.d(n,"j",(function(){return M})),t.d(n,"k",(function(){return f})),t.d(n,"l",(function(){return D}));var r=t(0),o=t.n(r);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),s=o[0],i=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);i(e[0].apply(e,n))}),[JSON.stringify(n)]),s}var a=function(e,n,t){return t>=e&&n>=t};function l(e){return isNaN(e)?e:{width:e,height:e}}function c(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*(t=l(t)).width,top:e*t.height+o}}function u(e,n,t){return e=l(e),Math.floor((n-t)/e.width)}function d(e,n){return e=l(e),Math.floor(n/e.height)}function f(e,n,t){return e.map((function(e){if(e.editing){var r=p(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function m(e){return e.map((function(e){return e.editing?s({},e,{editing:!1}):e}))}function p(e,n){return e.column>n.column||"right"===e.stick&&e.length>1?(e.stick="right",s({},e,{row:e.row,column:n.column,length:e.column-n.column+e.length})):(e.stick="left",s({},e,{row:e.row,column:e.column,length:n.column-e.column+1}))}function h(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=s({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,o=t.column+1,s=e.column+e.length,i=t.column+t.length;if(a(r,s,o)||a(r,s,i)||a(o,i,s)||a(o,i,r)){var l=g(e,t),c=l[0],u=l[1];return t=u,c}var d=v(e,t),f=d[0],m=d[1];return t=m,f}var p=v(e,t),h=p[0],j=p[1];return t=j,h})),t]}(n,e),r=t[0],o=t[1];r.push(o),n=r})),n}var g=function(e,n){return(e=j(e)).collisions[n.id]="",(n=j(n)).collisions[e.id]="",[e,n]},j=function(e){return e.collisions||(e.collisions={}),e},v=function(e,n){return delete(e=j(e)).collisions[n.id],delete(n=j(n)).collisions[e.id],[e,n]},b="ADD",y="EDIT",w="DELETE",O="SET_BARS",E="SET_IS_EDITING";function M(e,n){switch(n.type){case O:return s({},e,{bars:n.payload});case y:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,s({},e,{bars:t});case b:var o=[].concat(e.bars);return o.push(n.payload),s({},e,{bars:o});case w:var i=[].concat(e.bars),a=i.findIndex((function(e){return n.payload.id===e.id}));return i.splice(a,1),s({},e,{bars:i});case E:return s({},e,{isEditing:n.payload})}}function D(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],s=o.bars,i=o.isEditing,a=t[1];return{isEditing:i,setIsEditing:function(e){return a({payload:e,type:E})},bars:s,addBar:function(e){return a({payload:e,type:b})},editBar:function(e){return a({payload:e,type:y})},deleteBar:function(e){return a({payload:e,type:w})},setBars:function(e){return a({payload:e,type:O})}}}function C(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function N(e,n,t){if(void 0===n&&(n=0),void 0===t&&(t=4),n!==t)return Array.isArray(e)?e.map((function(e){return N(e,n+1)})):C(e)?Object.keys(e).map((function(t){return t+" : "+N(e[t],n+1)})):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function k(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)({}),s=o[0],i=o[1];return Object(r.useEffect)((function(){if(C(n[0]))i(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);i(e[0].apply(e,n))}}),[JSON.stringify(N(n))]),s}function T(e){var n=k(e.content,e.length);return o.a.createElement("div",{id:e.id,role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onDragEnd:function(n){e.onDragEnd(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},onMouseMove:function(n){e.onMouseMove(n,e)},onMouseDown:function(n){e.onMouseDown(n,e)},onMouseUp:function(n){e.onMouseUp(n,e)},draggable:e.draggable,style:s({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(t,r){var i=function(e,n,t,r,s){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?s||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(r,e.length,n,e.firstContent,e.lastContent),a=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return o.a.createElement(o.a.Fragment,{key:r},o.a.cloneElement(i,s({},i.props,{style:a}),i.props.children))})),e.children)}function x(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:function(n){e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:s({overflow:"hidden",width:e.dimension.width,height:e.dimension.height},e.style)},e.children)}function B(e){return o.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&o.a.createElement(x,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((function(n,t){return o.a.createElement(x,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)})),"rtl"===e.dir&&o.a.createElement(x,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function S(e){return o.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function z(e){return o.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function P(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function A(e,n,t){return s({id:P(),length:1,dimension:e,editing:!0},n,t)}function I(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),s=o[0],i=o[1];return Object(r.useEffect)((function(){if(C(n[0])){var e=n[0].func;"function"==typeof e&&(n.splice(0,1),i(e.apply(void 0,n)))}else if("function"==typeof n[0]){var t=n.splice(0,1);i(t[0].apply(t,n))}else Array.isArray(n[0])&&i(n[0])}),[JSON.stringify(n)]),s}T.defaultProps={style:{},dimension:{width:20,height:20},onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onDragEnd:function(){},onContextMenu:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseMove:function(){},length:1,content:{}},x.defaultProps={onMouseEnter:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseOver:function(){},onDrop:function(){}},B.defaultProps={onMouseOverCell:function(){}};var L=o.a.forwardRef((function(e,n){var t=i(d,e.dimension,e.height),a=i(u,e.dimension,e.width,e.rowTitleWidth),l=I(e.rowTitles,t),c=I(e.columnTitles,a),f=k(e.content,a,t),m=function(e){var n=Object(r.useState)({width:0,height:0}),t=n[0],o=n[1];return Object(r.useEffect)((function(){isNaN(e)?C(e)?o(e):o({width:-1,height:-1}):o({width:e,height:e})}),[JSON.stringify(e)]),t}(e.dimension);return o.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,style:s({},e.style,{position:"relative"})},o.a.createElement(B,{columnTitles:c,columnCount:a,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:c.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[].concat(Array(t)).map((function(n,t){return o.a.createElement("div",{role:"rowgroup",key:t,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&o.a.createElement(x,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]),[].concat(Array(a)).map((function(n,r){return o.a.createElement(x,{key:"r"+t+"c"+r,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:m,className:e.cellClassName,column:r,row:t},f["r"+t+"c"+r])})),"rtl"===e.dir&&o.a.createElement(x,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:a,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:c.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))}));L.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){},mouseMoveGrid:function(){}},n.f=L},248:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"c",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return l})),t.d(n,"h",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return f}));var r=t(112),o=t.n(r);function s(e,n,t,r="D"){return[...Array(n)].map((n,o)=>a(e,o,t,r))}function i(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function a(e,n,t,r){return o()(e).add(n,t).format(r)}function l(e,n,t="DD-MM-YYYY"){const r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function c(e,n){return e[n].row}function u(e,n,t="unit",r="DD-MM-YYYY"){return e.start=n.clone().add(e.column,t).format(r),e.end=n.clone().add(e.column+e.length,t).format(r),e}function d(){let e="#";for(let n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function f(e){for(const n in e)return!1;return!0}},250:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return s})),t.d(n,"f",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return l}));const r=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],o=[{id:1,type:"full",to:2,from:4,start:"26-04-2019",end:"28-04-2019",img:"32.jpg",text:"Reach out to potention guest speakers",row:3},{id:2,type:"empty",from:1,start:"28-04-2019",end:"30-04-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:5},{id:4,type:"empty",to:1,start:"27-04-2019",end:"01-05-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:8}],s=[{id:563,start:"26-04-2019",end:"28-04-2019",name:"Jorge Vega",row:3},{id:9901,start:"28-04-2019",end:"30-04-2019",name:"Trevor Mathis",row:5},{id:1234,start:"27-04-2019",end:"01-05-2019",name:"Clifford Campbell",row:8}],i={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},a=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],l=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},253:function(e,n,t){var r={"./af":115,"./af.js":115,"./ar":116,"./ar-dz":117,"./ar-dz.js":117,"./ar-kw":118,"./ar-kw.js":118,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":120,"./ar-ma.js":120,"./ar-sa":121,"./ar-sa.js":121,"./ar-tn":122,"./ar-tn.js":122,"./ar.js":116,"./az":123,"./az.js":123,"./be":124,"./be.js":124,"./bg":125,"./bg.js":125,"./bm":126,"./bm.js":126,"./bn":127,"./bn.js":127,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":136,"./de-at":137,"./de-at.js":137,"./de-ch":138,"./de-ch.js":138,"./de.js":136,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-in":146,"./en-in.js":146,"./en-nz":147,"./en-nz.js":147,"./en-sg":148,"./en-sg.js":148,"./eo":149,"./eo.js":149,"./es":150,"./es-do":151,"./es-do.js":151,"./es-us":152,"./es-us.js":152,"./es.js":150,"./et":153,"./et.js":153,"./eu":154,"./eu.js":154,"./fa":155,"./fa.js":155,"./fi":156,"./fi.js":156,"./fil":157,"./fil.js":157,"./fo":158,"./fo.js":158,"./fr":159,"./fr-ca":160,"./fr-ca.js":160,"./fr-ch":161,"./fr-ch.js":161,"./fr.js":159,"./fy":162,"./fy.js":162,"./ga":163,"./ga.js":163,"./gd":164,"./gd.js":164,"./gl":165,"./gl.js":165,"./gom-deva":166,"./gom-deva.js":166,"./gom-latn":167,"./gom-latn.js":167,"./gu":168,"./gu.js":168,"./he":169,"./he.js":169,"./hi":170,"./hi.js":170,"./hr":171,"./hr.js":171,"./hu":172,"./hu.js":172,"./hy-am":173,"./hy-am.js":173,"./id":174,"./id.js":174,"./is":175,"./is.js":175,"./it":176,"./it-ch":177,"./it-ch.js":177,"./it.js":176,"./ja":178,"./ja.js":178,"./jv":179,"./jv.js":179,"./ka":180,"./ka.js":180,"./kk":181,"./kk.js":181,"./km":182,"./km.js":182,"./kn":183,"./kn.js":183,"./ko":184,"./ko.js":184,"./ku":185,"./ku.js":185,"./ky":186,"./ky.js":186,"./lb":187,"./lb.js":187,"./lo":188,"./lo.js":188,"./lt":189,"./lt.js":189,"./lv":190,"./lv.js":190,"./me":191,"./me.js":191,"./mi":192,"./mi.js":192,"./mk":193,"./mk.js":193,"./ml":194,"./ml.js":194,"./mn":195,"./mn.js":195,"./mr":196,"./mr.js":196,"./ms":197,"./ms-my":198,"./ms-my.js":198,"./ms.js":197,"./mt":199,"./mt.js":199,"./my":200,"./my.js":200,"./nb":201,"./nb.js":201,"./ne":202,"./ne.js":202,"./nl":203,"./nl-be":204,"./nl-be.js":204,"./nl.js":203,"./nn":205,"./nn.js":205,"./oc-lnc":206,"./oc-lnc.js":206,"./pa-in":207,"./pa-in.js":207,"./pl":208,"./pl.js":208,"./pt":209,"./pt-br":210,"./pt-br.js":210,"./pt.js":209,"./ro":211,"./ro.js":211,"./ru":212,"./ru.js":212,"./sd":213,"./sd.js":213,"./se":214,"./se.js":214,"./si":215,"./si.js":215,"./sk":216,"./sk.js":216,"./sl":217,"./sl.js":217,"./sq":218,"./sq.js":218,"./sr":219,"./sr-cyrl":220,"./sr-cyrl.js":220,"./sr.js":219,"./ss":221,"./ss.js":221,"./sv":222,"./sv.js":222,"./sw":223,"./sw.js":223,"./ta":224,"./ta.js":224,"./te":225,"./te.js":225,"./tet":226,"./tet.js":226,"./tg":227,"./tg.js":227,"./th":228,"./th.js":228,"./tk":229,"./tk.js":229,"./tl-ph":230,"./tl-ph.js":230,"./tlh":231,"./tlh.js":231,"./tr":232,"./tr.js":232,"./tzl":233,"./tzl.js":233,"./tzm":234,"./tzm-latn":235,"./tzm-latn.js":235,"./tzm.js":234,"./ug-cn":236,"./ug-cn.js":236,"./uk":237,"./uk.js":237,"./ur":238,"./ur.js":238,"./uz":239,"./uz-latn":240,"./uz-latn.js":240,"./uz.js":239,"./vi":241,"./vi.js":241,"./x-pseudo":242,"./x-pseudo.js":242,"./yo":243,"./yo.js":243,"./zh-cn":244,"./zh-cn.js":244,"./zh-hk":245,"./zh-hk.js":245,"./zh-mo":246,"./zh-mo.js":246,"./zh-tw":247,"./zh-tw.js":247};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=253}}]);