(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},104:function(e,n,t){"use strict";t.d(n,"a",(function(){return C})),t.d(n,"b",(function(){return _})),t.d(n,"d",(function(){return m})),t.d(n,"e",(function(){return B})),t.d(n,"f",(function(){return g})),t.d(n,"g",(function(){return T}));var r=t(0),a=t.n(r);function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=Object(r.useState)([]),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(Array.isArray(n[0]))i(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);i(e[0].apply(e,n))}}),[JSON.stringify(n)]),o}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=Object(r.useState)(),o=a[0],i=a[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw"useFunction takes first argument as a function";var e=n.splice(0,1);i(e[0].apply(e,n))}),[JSON.stringify(n)]),o}var s="_style__row_cell__3TtXw",c="_style__row_cell_invisible__2fzm0",l="_style__row__32f2G",u="_style__row_invisible__kbpmo";function d(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var p=function(e,n,t){return t>=e&&n>=t};function b(e){return!(!Number.isInteger(e)||e<0)}function m(e,n,t,r,a){return void 0===r&&(r=0),void 0===a&&(a=0),{left:r+n*t,top:e*t+a}}function h(e,n,t){return Math.floor((n-t)/e)}function f(e,n){return Math.floor(n/e)}function g(e,n){return e.map((function(e){if(e.editing){var t=function(e,n){if(!b(e.column))throw new Error("firstPosition.column expected an integer received "+e.column);if(!b(e.row))throw new Error("firstPosition.row expected an integer received "+e.row);if(!b(n.column))throw new Error("secondPosition.column expected an integer received "+n.column);return{row:e.row,column:e.column,length:n.column-e.column+1}}({column:e.column,row:e.row},n.cell);return Object.assign({},e,t)}return e}))}var v="ADD",O="EDIT",j="DELETE",w="SET_BARS",y="SET_IS_EDITING";var N=function(e,n){return(e=E(e)).collisions[n.id]="",(n=E(n)).collisions[e.id]="",[e,n]},E=function(e){return e.collisions||(e.collisions={}),e},x=function(e,n){return delete(e=E(e)).collisions[n.id],delete(n=E(n)).collisions[e.id],[e,n]};function B(e,n){switch(n.type){case w:return Object.assign({},e,{bars:n.payload});case O:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id})),a=[].concat(t);a.splice(r,1);var o=function(e,n){var t=Object.assign({},n);return[e.map((function(e){if(t.row===e.row){var n=e.column+1,r=t.column+1,a=e.column+e.length,o=t.column+t.length;if(p(n,a,r)||p(n,a,o)||p(r,o,a)||p(r,o,n)){var i=N(e,t),s=i[0],c=i[1];return t=c,s}return e}var l=x(e,t),u=l[0],d=l[1];return t=d,u})),t]}(a,n.payload),i=o[0],s=o[1];return i.push(s),Object.assign({},e,{bars:i});case v:var c=[].concat(e.bars);return c.push(n.payload),Object.assign({},e,{bars:c});case j:var l=[].concat(e.bars),u=l.findIndex((function(e){return n.payload.id===e.id}));return l.splice(u,1),Object.assign({},e,{bars:l});case y:return Object.assign({},e,{isEditing:n.payload});default:return console.log("Unhandled type: "+n.type),e}}function T(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),a=t[0],o=a.bars,i=a.isEditing,s=t[1];return{isEditing:i,setIsEditing:function(e){return s({payload:e,type:y})},bars:o,addBar:function(e){return s({payload:e,type:v})},editBar:function(e){return s({payload:e,type:O})},deleteBar:function(e){return s({payload:e,type:j})},setBars:function(e){return s({payload:e,type:w})}}}function C(e){return a.a.createElement("div",{role:"listitem",onDragStart:e.onDragStart,onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:Object.assign({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length>0?e.length:1)).map((function(n,t){return a.a.createElement("div",{key:t,style:{width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"}})})),e.children)}function k(e){return a.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?l:u,style:{height:e.dimension}},a.a.createElement("div",{className:""+(e.rowTitleWidth>0?s:u),style:{width:e.rowTitleWidth,height:e.dimension+"px"}}),e.columnTitles.map((function(n,t){return a.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:s},n)})))}function D(e){return a.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||s,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function M(e){var n=i(f,e.dimension,e.height),t=i(h,e.dimension,e.width,e.rowTitleWidth),r=o(e.rowTitles),u=o(e.columnTitles,t);return a.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:Object.assign({},e.style,{position:"relative"})},a.a.createElement(k,{columnTitles:u,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension}),[].concat(Array(n)).map((function(n,o){return a.a.createElement("div",{role:"rowgroup",className:l,key:o,style:{height:e.dimension,display:"flex"}},a.a.createElement("div",{className:r.length>0?s:c,style:{width:e.rowTitleWidth,height:e.dimension+"px",overflow:"hidden"}},r[o]),[].concat(Array(t)).map((function(n,t){return a.a.createElement(D,{key:"r"+o+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:o},e.content["r"+o+"c"+t])})))})),a.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:u.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function _(e,n){return Object.assign({id:d(),dimension:e,editing:!0},n)}C.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1},M.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:20,mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.c=M},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return m}));var r=t(2),a=t(6),o=t(0),i=t.n(o),s=t(100),c=t(104);t(47);function l(e){var n=Object(c.g)(c.e,[]),t=n.bars,a=(n.isEditing,n.setIsEditing),o=n.addBar,s=n.setBars;n.editBar;return i.a.createElement(c.c,{mouseDownCell:function(e){var n=Object(c.b)(e.dimension,e.cell);o(n)},mouseEnterCell:function(e){var n=Object(c.f)(t,e);s(n)},mouseUpCell:function(){var e=t.map((function(e){return e.editing?Object.assign({},e,{editing:!1,style:{pointerEvents:"auto"}}):e}));s(e),a(!1)}},t.map((function(e){return i.a.createElement(c.a,Object(r.a)({key:e.id},e,{style:Object.assign({},e.style,Object(c.d)(e.row,e.column,e.dimension))}))})))}var u={id:"basic",title:"Basic",sidebar_label:"Basic"},d={unversionedId:"basic",id:"basic",isDocsHomePage:!1,title:"Basic",description:"This is the most basic example.",source:"@site/docs\\basic.mdx",permalink:"/react-reserver/docs/basic",sidebar_label:"Basic",sidebar:"docs",previous:{title:"Getting Started",permalink:"/react-reserver/docs/"},next:{title:"Basic++",permalink:"/react-reserver/docs/basicplusplus"}},p=[],b={rightToc:p};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This is the most basic example.\nA grid, 500px wide and 500px high is created, since those are the default props."),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Click and drag on any square in the grid to create a new bar"))),Object(s.b)(l,{mdxType:"Basic"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport 'react-reserver/dist/index.css'\nimport Reserver, \n{ Bar, \nuseReserver,\nreserverReducer,\ncreateBar, \ngetPosition, \nresizeBar } from 'react-reserver'\n\nexport default function Basic(props) {\n    const { bars, addBar, setBars } = useReserver(reserverReducer, [])    \n    return <Reserver \n        mouseDownCell={(props) => {\n            const newbar = createBar(props.dimension, props.cell);\n            addBar(newbar)\n        }}\n        mouseEnterCell={(props) => {\n            const nBars = resizeBar(bars, props)\n            setBars(nBars)\n        }}\n        mouseUpCell={() => {  \n            const dBars = bars.map((bar) => {\n                if (bar.editing) {\n                    return { ...bar, editing: false }\n                }\n                return bar;\n            })\n            setBars(dBars)\n        }}\n    >\n        {\n            bars.map((bar) => {\n            return <Bar \n            key={bar.id}\n             {...bar} \n            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })\n        }\n    </Reserver>\n")),Object(s.b)("p",null,"So whats going on here?\nIn order to allow you to control the state of Reserver we use a reducer"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"})," const { bars, addBar, setBars } = useReserver(reserverReducer, [])   \n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"useReserver")," is a the hook.\n",Object(s.b)("strong",{parentName:"p"},"reserverReducer")," is the reducer. "),Object(s.b)("p",null,"The hook returns ",Object(s.b)("strong",{parentName:"p"},"bars")," which is an array holding the current bars.\n",Object(s.b)("strong",{parentName:"p"},"addBar")," takes a single object to add to the array and ",Object(s.b)("strong",{parentName:"p"},"setBars")," sets all the bars.\nThere are more functions returned from the hook. We will start with these. "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"mouseDownCell={(props) => {\n            const newbar = createBar(props.dimension, props.cell);\n            addBar(newbar)\n        }}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"mouseDownCell")," is a prop that takes function which runs when you click down on one of the cells.\nThe prop passes a dimension which is defined in an initial props of Reserver. "),Object(s.b)("p",null,"The dimension defines how large each cell is in pixels.\nThe cell is an object that looks like this "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"})," { row: r, column: c }\n")),Object(s.b)("p",null,"dimension and cell get passed to the function ",Object(s.b)("strong",{parentName:"p"},"createBar")),Object(s.b)("p",null,"createBar is a helper function that takes dimension and cell as arguments and returns an object containing\na new id, the dimension, editing as a boolean set to true, the location which is the cell.\nAll these get passed as props into the bar and are necessary as basic properties for the bars array. "),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"addBar")," is a function that takes an object representing bar and adds it to the array bars."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"    mouseEnterCell={(props) => {\n            const nBars = resizeBar(bars, props)\n            setBars(nBars)\n        }}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"mouseEnterCell")," is a prop that takes a function which receives an object with dimension and cell and runs whenever a mouse hovers over a cell."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"resizeBar")," is a function that takes all bars and the props and calculates the new size of the bars.\nIt does this by finding all the bars that have the property ",Object(s.b)("strong",{parentName:"p"},"editing = true")," and editing them accordinly. "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"   mouseUpCell={() => {  \n            const dBars = bars.map((bar) => {\n                if (bar.editing) {\n                    return { ...bar, editing: false }\n                }\n                return bar;\n            })\n            setBars(dBars)\n        }}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"mouseUpCell")," is a prop that takes a function which runs when there is a onMouseUp over a cell.\nHere, the bars are mapped over and all the edited bars that have true on ",Object(s.b)("strong",{parentName:"p"},"editing")," becomes false. "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"     {\n            bars.map((bar) => {\n            return <Bar \n            key={bar.id}\n             {...bar} \n            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })\n        }\n")),Object(s.b)("p",null,"The children of the Reserver component are an array of the component Bar."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"getPosition")," is a helper function that takes the row,column and dimension and calculates the absolute position (top and left) of the bar and passes it into style. "),Object(s.b)("p",null,"Thats it! Thats the most basic code that allows you to run the example. "),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This is not the best way to use Reserver. Its only an example to simplify the process of getting started. "))),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Go to Basic++ to see a more robust example of how to use Reserver"))))}m.isMDXComponent=!0}}]);