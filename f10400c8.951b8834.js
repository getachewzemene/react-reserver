(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return j})),t.d(n,"metadata",(function(){return v})),t.d(n,"rightToc",(function(){return y})),t.d(n,"default",(function(){return b}));var r=t(2),o=t(6),s=t(0),i=t.n(s),a=t(113),c=t(114),l=t(112),u=t.n(l),f=t(277),d=(t(52),t(47)),m=t.n(d),p=t(259);function h(e){var n=Object(c.l)(c.j,[]),t=n.bars,o=n.isEditing,a=n.setIsEditing,l=n.addBar,d=n.setBars,h=Object(s.useState)(u()("01-08-2020","DD-MM-YYYY"))[0],j=Object(p.b)("Shift"),v=Object(p.c)(j),y=Object(s.useState)({}),g=y[0],b=y[1],w=Object(s.useState)({date:"",room:""}),E=w[0],O=w[1],C=Object(s.useState)({visibile:!1,top:0,left:0}),M=C[0],k=C[1];return i.a.createElement("div",null,i.a.createElement("div",{style:{marginBottom:"10px"}},"Start date:"," ",i.a.createElement("span",{className:"button button--success"}," ",h.format("LL"))),i.a.createElement(c.f,{cellClassName:m.a.row_cell,content:g,mouseDownCell:function(e){var n=Object(c.e)(e.dimension,e.cell);l(n),a(!0)},mouseEnterCell:function(e,n){if(o){var r=Object(c.k)(t,e);d(r)}else if(j){var s={};[].concat(Array(e.cell.column+1)).forEach((function(n,t){s["r"+e.cell.row+"c"+t]=i.a.createElement(c.b,null)})),[].concat(Array(e.cell.row+1)).forEach((function(n,t){s["r"+t+"c"+e.cell.column]=i.a.createElement(c.b,null)})),k({visible:!0,top:n.clientY,left:n.clientX+20}),b(s),O({room:"Room: "+(e.cell.row+1),date:h.clone().add(e.cell.column,"days").format("LL")})}!j&&v&&(b({}),k({visibile:!1}))},mouseUpCell:function(){var e=t.map((function(e){return e.editing?Object.assign({},e,{editing:!1,style:Object.assign({},e.style,{pointerEvents:"auto"})}):e}));d(e),a(!1)}},(function(){return t.map((function(e){return i.a.createElement(c.a,Object(r.a)({key:e.id},e,{style:Object.assign({},e.style,Object(c.i)(e.row,e.column,e.dimension))}))}))})),i.a.createElement(f.b,Object(r.a)({className:"cmenu"},M),i.a.createElement(f.a,null,E.date),i.a.createElement(f.a,null,E.room)))}var j={id:"contentcrosshairs",title:"Content Crosshairs",sidebar_label:"Content Crosshairs"},v={unversionedId:"contentcrosshairs",id:"contentcrosshairs",isDocsHomePage:!1,title:"Content Crosshairs",description:"Just another example for content.",source:"@site/docs\\contentcrosshairs.md",slug:"/contentcrosshairs",permalink:"/react-reserver/docs/contentcrosshairs",version:"current",sidebar_label:"Content Crosshairs",sidebar:"docs",previous:{title:"Grid Content",permalink:"/react-reserver/docs/content"},next:{title:"Right To Left",permalink:"/react-reserver/docs/righttoleft"}},y=[],g={rightToc:y};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Just another example for content.\nHold the shift key down and move your cursor over a cell.\nIt will color the row and column green and will display the date and room you are hovering over"),Object(a.b)(h,{mdxType:"ContentCrosshairs"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"file=../src/examples/ContentCrosshairs.js",file:"../src/examples/ContentCrosshairs.js"}),"import React, { useState } from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars,\n  Peg\n} from 'react-reserver'\nimport moment from 'moment'\n\nimport {\n  SimpleContextMenu,\n  ContextMenuItem\n} from '../components/SimpleContextMenu'\nimport '../components/SimpleContextMenu/menuStyle.css'\nimport styles from './basicexamples.module.css'\nimport { usePrevious, useKeyPress } from './hooks'\nexport default function ContentCrosshairs(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n  const [startDate] = useState(moment('01-08-2020', 'DD-MM-YYYY'))\n  const shiftPressed = useKeyPress('Shift')\n  const wasPressed = usePrevious(shiftPressed)\n\n  const [content, setContent] = useState({})\n  const [currentDateRoom, setCurrentDateRoom] = useState({ date: '', room: '' })\n  const [contextMenuState, setContextMenuState] = useState({\n    visibile: false,\n    top: 0,\n    left: 0\n  })\n\n  return (\n    <div>\n      <div style={{ marginBottom: '10px' }}>\n        Start date:{' '}\n        <span className='button button--success'>\n          {' '}\n          {startDate.format('LL')}\n        </span>\n      </div>\n      <Reserver\n        cellClassName={styles.row_cell}\n        content={content}\n        mouseDownCell={(props) => {\n          const newbar = createBar(props.dimension, props.cell)\n          addBar(newbar)\n          setIsEditing(true)\n        }}\n        mouseEnterCell={(props, event) => {\n          if (isEditing) {\n            const nBars = resizeBars(bars, props)\n            setBars(nBars)\n          } else if (shiftPressed) {\n            const nContent = {}\n            ;[...Array(props.cell.column + 1)].forEach((nu, i) => {\n              nContent[`r${props.cell.row}c${i}`] = <Peg />\n            })\n            ;[...Array(props.cell.row + 1)].forEach((nu, i) => {\n              nContent[`r${i}c${props.cell.column}`] = <Peg />\n            })\n\n            setContextMenuState({\n              visible: true,\n              top: event.clientY,\n              left: event.clientX + 20\n            })\n            setContent(nContent)\n            setCurrentDateRoom({\n              room: `Room: ${props.cell.row + 1}`,\n              date: startDate\n                .clone()\n                .add(props.cell.column, 'days')\n                .format('LL')\n            })\n          }\n          if (!shiftPressed && wasPressed) {\n            setContent({})\n            setContextMenuState({ visibile: false })\n          }\n        }}\n        mouseUpCell={() => {\n          const dBars = bars.map((bar) => {\n            if (bar.editing) {\n              return {\n                ...bar,\n                editing: false,\n                style: { ...bar.style, pointerEvents: 'auto' }\n              }\n            }\n            return bar\n          })\n\n          setBars(dBars)\n          setIsEditing(false)\n        }}\n      >\n        {() => {\n          return bars.map((bar) => {\n            return (\n              <Bar\n                key={bar.id}\n                {...bar}\n                style={{\n                  ...bar.style,\n                  ...getPosition(bar.row, bar.column, bar.dimension)\n                }}\n              />\n            )\n          })\n        }}\n      </Reserver>\n      <SimpleContextMenu className='cmenu' {...contextMenuState}>\n        <ContextMenuItem>{currentDateRoom.date}</ContextMenuItem>\n        <ContextMenuItem>{currentDateRoom.room}</ContextMenuItem>\n      </SimpleContextMenu>\n    </div>\n  )\n}\n")))}b.isMDXComponent=!0},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return p}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=r,p=f["".concat(i,".").concat(m)]||f[m]||d[m]||s;return t?o.a.createElement(p,a(a({ref:n},l),{},{components:t})):o.a.createElement(p,a({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return N})),t.d(n,"b",(function(){return P})),t.d(n,"c",(function(){return z})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return B})),t.d(n,"g",(function(){return p})),t.d(n,"h",(function(){return m})),t.d(n,"i",(function(){return l})),t.d(n,"j",(function(){return C})),t.d(n,"k",(function(){return d})),t.d(n,"l",(function(){return M}));var r=t(0),o=t.n(r);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),s=o[0],i=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);i(e[0].apply(e,n))}),[JSON.stringify(n)]),s}var a=function(e,n,t){return t>=e&&n>=t};function c(e){return isNaN(e)?e:{width:e,height:e}}function l(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*(t=c(t)).width,top:e*t.height+o}}function u(e,n,t){return e=c(e),Math.floor((n-t)/e.width)}function f(e,n){return e=c(e),Math.floor(n/e.height)}function d(e,n,t){return e.map((function(e){if(e.editing){var r=p(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function m(e){return e.map((function(e){return e.editing?s({},e,{editing:!1}):e}))}function p(e,n){return e.column>n.column||"right"===e.stick&&e.length>1?(e.stick="right",s({},e,{row:e.row,column:n.column,length:e.column-n.column+e.length})):(e.stick="left",s({},e,{row:e.row,column:e.column,length:n.column-e.column+1}))}function h(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=s({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,o=t.column+1,s=e.column+e.length,i=t.column+t.length;if(a(r,s,o)||a(r,s,i)||a(o,i,s)||a(o,i,r)){var c=j(e,t),l=c[0],u=c[1];return t=u,l}var f=y(e,t),d=f[0],m=f[1];return t=m,d}var p=y(e,t),h=p[0],v=p[1];return t=v,h})),t]}(n,e),r=t[0],o=t[1];r.push(o),n=r})),n}var j=function(e,n){return(e=v(e)).collisions[n.id]="",(n=v(n)).collisions[e.id]="",[e,n]},v=function(e){return e.collisions||(e.collisions={}),e},y=function(e,n){return delete(e=v(e)).collisions[n.id],delete(n=v(n)).collisions[e.id],[e,n]},g="ADD",b="EDIT",w="DELETE",E="SET_BARS",O="SET_IS_EDITING";function C(e,n){switch(n.type){case E:return s({},e,{bars:n.payload});case b:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,s({},e,{bars:t});case g:var o=[].concat(e.bars);return o.push(n.payload),s({},e,{bars:o});case w:var i=[].concat(e.bars),a=i.findIndex((function(e){return n.payload.id===e.id}));return i.splice(a,1),s({},e,{bars:i});case O:return s({},e,{isEditing:n.payload})}}function M(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],s=o.bars,i=o.isEditing,a=t[1];return{isEditing:i,setIsEditing:function(e){return a({payload:e,type:O})},bars:s,addBar:function(e){return a({payload:e,type:g})},editBar:function(e){return a({payload:e,type:b})},deleteBar:function(e){return a({payload:e,type:w})},setBars:function(e){return a({payload:e,type:E})}}}function k(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function D(e,n,t){if(void 0===n&&(n=0),void 0===t&&(t=4),n!==t)return Array.isArray(e)?e.map((function(e){return D(e,n+1)})):k(e)?Object.keys(e).map((function(t){return t+" : "+D(e[t],n+1)})):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function x(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)({}),s=o[0],i=o[1];return Object(r.useEffect)((function(){if(k(n[0]))i(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);i(e[0].apply(e,n))}}),[JSON.stringify(D(n))]),s}function N(e){var n=x(e.content,e.length);return o.a.createElement("div",{id:e.id,role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onDragEnd:function(n){e.onDragEnd(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},onMouseMove:function(n){e.onMouseMove(n,e)},onMouseDown:function(n){e.onMouseDown(n,e)},onMouseUp:function(n){e.onMouseUp(n,e)},draggable:e.draggable,style:s({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(t,r){var i=function(e,n,t,r,s){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?s||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(r,e.length,n,e.firstContent,e.lastContent),a=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return o.a.createElement(o.a.Fragment,{key:r},o.a.cloneElement(i,s({},i.props,{style:a}),i.props.children))})),e.children)}function S(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:function(n){e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:s({overflow:"hidden",width:e.dimension.width,height:e.dimension.height},e.style)},e.children)}function T(e){return o.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&o.a.createElement(S,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((function(n,t){return o.a.createElement(S,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)})),"rtl"===e.dir&&o.a.createElement(S,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function P(e){return o.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function z(e){return o.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function I(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function B(e,n,t){return s({id:I(),length:1,dimension:e,editing:!0},n,t)}function A(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),s=o[0],i=o[1];return Object(r.useEffect)((function(){if(k(n[0])){var e=n[0].func;"function"==typeof e&&(n.splice(0,1),i(e.apply(void 0,n)))}else if("function"==typeof n[0]){var t=n.splice(0,1);i(t[0].apply(t,n))}else Array.isArray(n[0])&&i(n[0])}),[JSON.stringify(n)]),s}N.defaultProps={style:{},dimension:{width:20,height:20},onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onDragEnd:function(){},onContextMenu:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseMove:function(){},length:1,content:{}},S.defaultProps={onMouseEnter:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseOver:function(){},onDrop:function(){}},T.defaultProps={onMouseOverCell:function(){}};var L=o.a.forwardRef((function(e,n){var t=i(f,e.dimension,e.height),a=i(u,e.dimension,e.width,e.rowTitleWidth),c=A(e.rowTitles,t),l=A(e.columnTitles,a),d=x(e.content,a,t),m=function(e){var n=Object(r.useState)({width:0,height:0}),t=n[0],o=n[1];return Object(r.useEffect)((function(){isNaN(e)?k(e)?o(e):o({width:-1,height:-1}):o({width:e,height:e})}),[JSON.stringify(e)]),t}(e.dimension);return o.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,style:s({},e.style,{position:"relative"})},o.a.createElement(T,{columnTitles:l,columnCount:a,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:l.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[].concat(Array(t)).map((function(n,t){return o.a.createElement("div",{role:"rowgroup",key:t,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&o.a.createElement(S,{style:{display:c.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},c[t]),[].concat(Array(a)).map((function(n,r){return o.a.createElement(S,{key:"r"+t+"c"+r,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:m,className:e.cellClassName,column:r,row:t},d["r"+t+"c"+r])})),"rtl"===e.dir&&o.a.createElement(S,{style:{display:c.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},c[t]))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:a,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:l.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))}));L.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){},mouseMoveGrid:function(){}},n.f=L},253:function(e,n,t){var r={"./af":115,"./af.js":115,"./ar":116,"./ar-dz":117,"./ar-dz.js":117,"./ar-kw":118,"./ar-kw.js":118,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":120,"./ar-ma.js":120,"./ar-sa":121,"./ar-sa.js":121,"./ar-tn":122,"./ar-tn.js":122,"./ar.js":116,"./az":123,"./az.js":123,"./be":124,"./be.js":124,"./bg":125,"./bg.js":125,"./bm":126,"./bm.js":126,"./bn":127,"./bn.js":127,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":136,"./de-at":137,"./de-at.js":137,"./de-ch":138,"./de-ch.js":138,"./de.js":136,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-in":146,"./en-in.js":146,"./en-nz":147,"./en-nz.js":147,"./en-sg":148,"./en-sg.js":148,"./eo":149,"./eo.js":149,"./es":150,"./es-do":151,"./es-do.js":151,"./es-us":152,"./es-us.js":152,"./es.js":150,"./et":153,"./et.js":153,"./eu":154,"./eu.js":154,"./fa":155,"./fa.js":155,"./fi":156,"./fi.js":156,"./fil":157,"./fil.js":157,"./fo":158,"./fo.js":158,"./fr":159,"./fr-ca":160,"./fr-ca.js":160,"./fr-ch":161,"./fr-ch.js":161,"./fr.js":159,"./fy":162,"./fy.js":162,"./ga":163,"./ga.js":163,"./gd":164,"./gd.js":164,"./gl":165,"./gl.js":165,"./gom-deva":166,"./gom-deva.js":166,"./gom-latn":167,"./gom-latn.js":167,"./gu":168,"./gu.js":168,"./he":169,"./he.js":169,"./hi":170,"./hi.js":170,"./hr":171,"./hr.js":171,"./hu":172,"./hu.js":172,"./hy-am":173,"./hy-am.js":173,"./id":174,"./id.js":174,"./is":175,"./is.js":175,"./it":176,"./it-ch":177,"./it-ch.js":177,"./it.js":176,"./ja":178,"./ja.js":178,"./jv":179,"./jv.js":179,"./ka":180,"./ka.js":180,"./kk":181,"./kk.js":181,"./km":182,"./km.js":182,"./kn":183,"./kn.js":183,"./ko":184,"./ko.js":184,"./ku":185,"./ku.js":185,"./ky":186,"./ky.js":186,"./lb":187,"./lb.js":187,"./lo":188,"./lo.js":188,"./lt":189,"./lt.js":189,"./lv":190,"./lv.js":190,"./me":191,"./me.js":191,"./mi":192,"./mi.js":192,"./mk":193,"./mk.js":193,"./ml":194,"./ml.js":194,"./mn":195,"./mn.js":195,"./mr":196,"./mr.js":196,"./ms":197,"./ms-my":198,"./ms-my.js":198,"./ms.js":197,"./mt":199,"./mt.js":199,"./my":200,"./my.js":200,"./nb":201,"./nb.js":201,"./ne":202,"./ne.js":202,"./nl":203,"./nl-be":204,"./nl-be.js":204,"./nl.js":203,"./nn":205,"./nn.js":205,"./oc-lnc":206,"./oc-lnc.js":206,"./pa-in":207,"./pa-in.js":207,"./pl":208,"./pl.js":208,"./pt":209,"./pt-br":210,"./pt-br.js":210,"./pt.js":209,"./ro":211,"./ro.js":211,"./ru":212,"./ru.js":212,"./sd":213,"./sd.js":213,"./se":214,"./se.js":214,"./si":215,"./si.js":215,"./sk":216,"./sk.js":216,"./sl":217,"./sl.js":217,"./sq":218,"./sq.js":218,"./sr":219,"./sr-cyrl":220,"./sr-cyrl.js":220,"./sr.js":219,"./ss":221,"./ss.js":221,"./sv":222,"./sv.js":222,"./sw":223,"./sw.js":223,"./ta":224,"./ta.js":224,"./te":225,"./te.js":225,"./tet":226,"./tet.js":226,"./tg":227,"./tg.js":227,"./th":228,"./th.js":228,"./tk":229,"./tk.js":229,"./tl-ph":230,"./tl-ph.js":230,"./tlh":231,"./tlh.js":231,"./tr":232,"./tr.js":232,"./tzl":233,"./tzl.js":233,"./tzm":234,"./tzm-latn":235,"./tzm-latn.js":235,"./tzm.js":234,"./ug-cn":236,"./ug-cn.js":236,"./uk":237,"./uk.js":237,"./ur":238,"./ur.js":238,"./uz":239,"./uz-latn":240,"./uz-latn.js":240,"./uz.js":239,"./vi":241,"./vi.js":241,"./x-pseudo":242,"./x-pseudo.js":242,"./yo":243,"./yo.js":243,"./zh-cn":244,"./zh-cn.js":244,"./zh-hk":245,"./zh-hk.js":245,"./zh-mo":246,"./zh-mo.js":246,"./zh-tw":247,"./zh-tw.js":247};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=253},259:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return i}));var r=t(0);function o(e){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current=e}),[e]),n.current}function s(e,n){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current()}),n);return function(){return clearInterval(e)}}}),[n])}function i(e){var n=Object(r.useState)(!1),t=n[0],o=n[1];function s(n){n.key===e&&o(!0)}var i=function(n){n.key===e&&o(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",i)}}),[]),t}},277:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return i}));var r=t(0),o=t.n(r);function s(e){return o.a.createElement("div",{className:e.className,style:{display:e.visible?"block":"none",position:"absolute",left:e.left,top:e.top,zIndex:e.zIndex||1e4}},o.a.createElement("ul",null," ",e.children))}var i=function(e){return o.a.createElement("li",{onClick:e.onClick},e.children)};s.defaultProps={visible:!1,left:0,top:0}}}]);