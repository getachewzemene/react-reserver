(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,p=d["".concat(a,".").concat(f)]||d[f]||m[f]||s;return t?o.a.createElement(p,i(i({ref:n},c),{},{components:t})):o.a.createElement(p,i({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},104:function(e,n,t){"use strict";t.d(n,"a",(function(){return x})),t.d(n,"b",(function(){return z})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return D})),t.d(n,"f",(function(){return h})),t.d(n,"g",(function(){return C}));var r=t(0),o=t.n(r);function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),s=o[0],a=o[1];return Object(r.useEffect)((function(){if(Array.isArray(n[0]))a(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);a(e[0].apply(e,n))}}),[JSON.stringify(n)]),s}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),s=o[0],a=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw"useFunction takes first argument as a function";var e=n.splice(0,1);a(e[0].apply(e,n))}),[JSON.stringify(n)]),s}var i="_style__row_cell__3TtXw",l="_style__row_cell_invisible__2fzm0",c="_style__row__32f2G",u="_style__row_invisible__kbpmo";function d(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var m=function(e,n,t){return t>=e&&n>=t};function f(e){return!(!Number.isInteger(e)||e<0)}function p(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*t,top:e*t+o}}function j(e,n,t){return Math.floor((n-t)/e)}function b(e,n){return Math.floor(n/e)}function h(e,n){return e.map((function(e){if(e.editing){var t=function(e,n){if(!f(e.column))throw new Error("firstPosition.column expected an integer received "+e.column);if(!f(e.row))throw new Error("firstPosition.row expected an integer received "+e.row);if(!f(n.column))throw new Error("secondPosition.column expected an integer received "+n.column);return{row:e.row,column:e.column,length:n.column-e.column+1}}({column:e.column,row:e.row},n.cell);return Object.assign({},e,t)}return e}))}var g="ADD",y="EDIT",v="DELETE",w="SET_BARS",O="SET_IS_EDITING";var E=function(e,n){return(e=k(e)).collisions[n.id]="",(n=k(n)).collisions[e.id]="",[e,n]},k=function(e){return e.collisions||(e.collisions={}),e},T=function(e,n){return delete(e=k(e)).collisions[n.id],delete(n=k(n)).collisions[e.id],[e,n]};function D(e,n){switch(n.type){case w:return Object.assign({},e,{bars:n.payload});case y:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id})),o=[].concat(t);o.splice(r,1);var s=function(e,n){var t=Object.assign({},n);return[e.map((function(e){if(t.row===e.row){var n=e.column+1,r=t.column+1,o=e.column+e.length,s=t.column+t.length;if(m(n,o,r)||m(n,o,s)||m(r,s,o)||m(r,s,n)){var a=E(e,t),i=a[0],l=a[1];return t=l,i}return e}var c=T(e,t),u=c[0],d=c[1];return t=d,u})),t]}(o,n.payload),a=s[0],i=s[1];return a.push(i),Object.assign({},e,{bars:a});case g:var l=[].concat(e.bars);return l.push(n.payload),Object.assign({},e,{bars:l});case v:var c=[].concat(e.bars),u=c.findIndex((function(e){return n.payload.id===e.id}));return c.splice(u,1),Object.assign({},e,{bars:c});case O:return Object.assign({},e,{isEditing:n.payload});default:return console.log("Unhandled type: "+n.type),e}}function C(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],s=o.bars,a=o.isEditing,i=t[1];return{isEditing:a,setIsEditing:function(e){return i({payload:e,type:O})},bars:s,addBar:function(e){return i({payload:e,type:g})},editBar:function(e){return i({payload:e,type:y})},deleteBar:function(e){return i({payload:e,type:v})},setBars:function(e){return i({payload:e,type:w})}}}function x(e){return o.a.createElement("div",{role:"listitem",onDragStart:e.onDragStart,onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:Object.assign({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length>0?e.length:1)).map((function(n,t){return o.a.createElement("div",{key:t,style:{width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"}})})),e.children)}function M(e){return o.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?c:u,style:{height:e.dimension}},o.a.createElement("div",{className:""+(e.rowTitleWidth>0?i:u),style:{width:e.rowTitleWidth,height:e.dimension+"px"}}),e.columnTitles.map((function(n,t){return o.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:i},n)})))}function N(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||i,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function _(e){var n=a(b,e.dimension,e.height),t=a(j,e.dimension,e.width,e.rowTitleWidth),r=s(e.rowTitles),u=s(e.columnTitles,t);return o.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:Object.assign({},e.style,{position:"relative"})},o.a.createElement(M,{columnTitles:u,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension}),[].concat(Array(n)).map((function(n,s){return o.a.createElement("div",{role:"rowgroup",className:c,key:s,style:{height:e.dimension,display:"flex"}},o.a.createElement("div",{className:r.length>0?i:l,style:{width:e.rowTitleWidth,height:e.dimension+"px",overflow:"hidden"}},r[s]),[].concat(Array(t)).map((function(n,t){return o.a.createElement(N,{key:"r"+s+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:s},e.content["r"+s+"c"+t])})))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:u.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function z(e,n){return Object.assign({id:d(),dimension:e,editing:!0},n)}x.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1},_.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:20,mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.c=_},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(2),o=t(0),s=t.n(o),a=t(104),i=(t(47),t(99)),l=t.n(i);function c(e,n,t,r){return l()(e).add(n,t).format(r)}function u(e){var n=Object(a.g)(a.e,[]),t=n.bars,i=n.isEditing,l=n.setIsEditing,u=n.addBar,d=n.setBars,m=Object(o.useState)(""),f=m[0],p=m[1];return s.a.createElement(s.a.Fragment,null,""!==f&&s.a.createElement("div",{className:"alert alert--success",role:"alert"},"You selected ",s.a.createElement("strong",null,f)),s.a.createElement(a.c,{columnTitles:function(e){return function(e,n,t,r="D"){return[...Array(n)].map((n,o)=>c(e,o,t,r))}(new Date,e,"days").map((function(e,n){return s.a.createElement("div",{style:{background:"#12D3CF",height:"100%",textAlign:"center"},onClick:function(){p(c(new Date,n,"days","dddd, MMMM Do YYYY, h:mm:ss a"))}},e)}))},mouseDownCell:function(e){var n=Object(a.b)(e.dimension,e.cell);u(n),l(!0)},mouseEnterCell:function(e){if(i){var n=Object(a.f)(t,e);d(n)}},mouseUpCell:function(){var e=t.map((function(e){return e.editing?Object.assign({},e,{editing:!1,style:Object.assign({},e.style,{pointerEvents:"auto"})}):e}));d(e),l(!1)}},(function(e){var n=e.columnTitleHeight;return t.map((function(e){return s.a.createElement(a.a,Object(r.a)({key:e.id},e,{style:Object.assign({},e.style,Object(a.d)(e.row,e.column,e.dimension,0,n))}))}))})))}},259:function(e,n,t){var r={"./af":110,"./af.js":110,"./ar":111,"./ar-dz":112,"./ar-dz.js":112,"./ar-kw":113,"./ar-kw.js":113,"./ar-ly":114,"./ar-ly.js":114,"./ar-ma":115,"./ar-ma.js":115,"./ar-sa":116,"./ar-sa.js":116,"./ar-tn":117,"./ar-tn.js":117,"./ar.js":111,"./az":118,"./az.js":118,"./be":119,"./be.js":119,"./bg":120,"./bg.js":120,"./bm":121,"./bm.js":121,"./bn":122,"./bn.js":122,"./bo":123,"./bo.js":123,"./br":124,"./br.js":124,"./bs":125,"./bs.js":125,"./ca":126,"./ca.js":126,"./cs":127,"./cs.js":127,"./cv":128,"./cv.js":128,"./cy":129,"./cy.js":129,"./da":130,"./da.js":130,"./de":131,"./de-at":132,"./de-at.js":132,"./de-ch":133,"./de-ch.js":133,"./de.js":131,"./dv":134,"./dv.js":134,"./el":135,"./el.js":135,"./en-au":136,"./en-au.js":136,"./en-ca":137,"./en-ca.js":137,"./en-gb":138,"./en-gb.js":138,"./en-ie":139,"./en-ie.js":139,"./en-il":140,"./en-il.js":140,"./en-in":141,"./en-in.js":141,"./en-nz":142,"./en-nz.js":142,"./en-sg":143,"./en-sg.js":143,"./eo":144,"./eo.js":144,"./es":145,"./es-do":146,"./es-do.js":146,"./es-us":147,"./es-us.js":147,"./es.js":145,"./et":148,"./et.js":148,"./eu":149,"./eu.js":149,"./fa":150,"./fa.js":150,"./fi":151,"./fi.js":151,"./fil":152,"./fil.js":152,"./fo":153,"./fo.js":153,"./fr":154,"./fr-ca":155,"./fr-ca.js":155,"./fr-ch":156,"./fr-ch.js":156,"./fr.js":154,"./fy":157,"./fy.js":157,"./ga":158,"./ga.js":158,"./gd":159,"./gd.js":159,"./gl":160,"./gl.js":160,"./gom-deva":161,"./gom-deva.js":161,"./gom-latn":162,"./gom-latn.js":162,"./gu":163,"./gu.js":163,"./he":164,"./he.js":164,"./hi":165,"./hi.js":165,"./hr":166,"./hr.js":166,"./hu":167,"./hu.js":167,"./hy-am":168,"./hy-am.js":168,"./id":169,"./id.js":169,"./is":170,"./is.js":170,"./it":171,"./it-ch":172,"./it-ch.js":172,"./it.js":171,"./ja":173,"./ja.js":173,"./jv":174,"./jv.js":174,"./ka":175,"./ka.js":175,"./kk":176,"./kk.js":176,"./km":177,"./km.js":177,"./kn":178,"./kn.js":178,"./ko":179,"./ko.js":179,"./ku":180,"./ku.js":180,"./ky":181,"./ky.js":181,"./lb":182,"./lb.js":182,"./lo":183,"./lo.js":183,"./lt":184,"./lt.js":184,"./lv":185,"./lv.js":185,"./me":186,"./me.js":186,"./mi":187,"./mi.js":187,"./mk":188,"./mk.js":188,"./ml":189,"./ml.js":189,"./mn":190,"./mn.js":190,"./mr":191,"./mr.js":191,"./ms":192,"./ms-my":193,"./ms-my.js":193,"./ms.js":192,"./mt":194,"./mt.js":194,"./my":195,"./my.js":195,"./nb":196,"./nb.js":196,"./ne":197,"./ne.js":197,"./nl":198,"./nl-be":199,"./nl-be.js":199,"./nl.js":198,"./nn":200,"./nn.js":200,"./oc-lnc":201,"./oc-lnc.js":201,"./pa-in":202,"./pa-in.js":202,"./pl":203,"./pl.js":203,"./pt":204,"./pt-br":205,"./pt-br.js":205,"./pt.js":204,"./ro":206,"./ro.js":206,"./ru":207,"./ru.js":207,"./sd":208,"./sd.js":208,"./se":209,"./se.js":209,"./si":210,"./si.js":210,"./sk":211,"./sk.js":211,"./sl":212,"./sl.js":212,"./sq":213,"./sq.js":213,"./sr":214,"./sr-cyrl":215,"./sr-cyrl.js":215,"./sr.js":214,"./ss":216,"./ss.js":216,"./sv":217,"./sv.js":217,"./sw":218,"./sw.js":218,"./ta":219,"./ta.js":219,"./te":220,"./te.js":220,"./tet":221,"./tet.js":221,"./tg":222,"./tg.js":222,"./th":223,"./th.js":223,"./tk":224,"./tk.js":224,"./tl-ph":225,"./tl-ph.js":225,"./tlh":226,"./tlh.js":226,"./tr":227,"./tr.js":227,"./tzl":228,"./tzl.js":228,"./tzm":229,"./tzm-latn":230,"./tzm-latn.js":230,"./tzm.js":229,"./ug-cn":231,"./ug-cn.js":231,"./uk":232,"./uk.js":232,"./ur":233,"./ur.js":233,"./uz":234,"./uz-latn":235,"./uz-latn.js":235,"./uz.js":234,"./vi":236,"./vi.js":236,"./x-pseudo":237,"./x-pseudo.js":237,"./yo":238,"./yo.js":238,"./zh-cn":239,"./zh-cn.js":239,"./zh-hk":240,"./zh-hk.js":240,"./zh-mo":241,"./zh-mo.js":241,"./zh-tw":242,"./zh-tw.js":242};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=259},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),o=t(6),s=(t(0),t(100)),a=t(250),i={id:"columntitle",title:"Column Title",sidebar_label:"Column Title"},l={unversionedId:"columntitle",id:"columntitle",isDocsHomePage:!1,title:"Column Title",description:"So we want to give each column a title, it could be a date or time.",source:"@site/docs\\columntitle.md",permalink:"/react-reserver/docs/columntitle",sidebar_label:"Column Title",sidebar:"docs",previous:{title:"Basic++",permalink:"/react-reserver/docs/basicplusplus"},next:{title:"Row Title",permalink:"/react-reserver/docs/rowtitle"}},c=[],u={rightToc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"So we want to give each column a title, it could be a date or time.\nIn this example I use the library ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://momentjs.com/"}),"moment")," in order to generate the array of dates but you can use any library you want or you can just use a static array. "),Object(s.b)("p",null,"Click on a title to see what happens!"),Object(s.b)(a.a,{mdxType:"ColumnTitle"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{28-54,57-62,95} file=../src/examples/ColumnTitle.js","{28-54,57-62,95}":!0,file:"../src/examples/ColumnTitle.js"}),"import React, { useState } from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBar\n} from 'react-reserver'\nimport 'react-reserver/dist/index.css'\n\nimport { resolveDate, dateRange } from './helpers'\n\nexport default function ColumnTitle(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n  const [selectedDate, setSelectedDate] = useState('')\n  return (\n    <>\n      {selectedDate !== '' && (\n        <div className='alert alert--success' role='alert'>\n          You selected <strong>{selectedDate}</strong>\n        </div>\n      )}\n      <Reserver\n        columnTitles={(columnCount) => {\n          return dateRange(new Date(), columnCount, 'days').map(\n            (val, index) => {\n              return (\n                <div\n                  style={{\n                    background: '#12D3CF',\n                    height: '100%',\n                    textAlign: 'center'\n                  }}\n                  onClick={() => {\n                    setSelectedDate(\n                      resolveDate(\n                        new Date(),\n                        index,\n                        'days',\n                        'dddd, MMMM Do YYYY, h:mm:ss a'\n                      )\n                    )\n                  }}\n                >\n                  {val}\n                </div>\n              )\n            }\n          )\n        }}\n        mouseDownCell={(props) => {\n          const newbar = createBar(props.dimension, props.cell)\n          addBar(newbar)\n          setIsEditing(true)\n        }}\n        mouseEnterCell={(props) => {\n          if (isEditing) {\n            const nBars = resizeBar(bars, props)\n            setBars(nBars)\n          }\n        }}\n        mouseUpCell={() => {\n          const dBars = bars.map((bar) => {\n            if (bar.editing) {\n              return {\n                ...bar,\n                editing: false,\n                style: { ...bar.style, pointerEvents: 'auto' }\n              }\n            }\n            return bar\n          })\n\n          setBars(dBars)\n          setIsEditing(false)\n        }}\n      >\n        {({ columnTitleHeight }) => {\n          return bars.map((bar) => {\n            return (\n              <Bar\n                key={bar.id}\n                {...bar}\n                style={{\n                  ...bar.style,\n                  ...getPosition(\n                    bar.row,\n                    bar.column,\n                    bar.dimension,\n                    0,\n                    columnTitleHeight\n                  )\n                }}\n              />\n            )\n          })\n        }}\n      </Reserver>\n    </>\n  )\n}\n")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"./reserver#columnTitles"}),"columnTitles")," takes either an array or a function and builds the top row.\nThe function passes columnCount as an argument and must return an array. "),Object(s.b)("p",null,"columnCount is necessary in order for you to generate the correct amount of columns for your array.\nIt doesnt check if you are using an incorrct length so you can do more or fewer. "),Object(s.b)("p",null,"if you want to have an empty box among filled boxes have ",Object(s.b)("em",{parentName:"p"},"null")," as one of the elements in the array."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst head = ['0','1',null,'3'];\n\n")),Object(s.b)("p",null,"The next thing to pay attention to is the function that passes an array as props.children to reserver. "),Object(s.b)("p",null,"In order to do so we pull out the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"./reserver#columntitleheight"}),"columnTitleHeight")," from the props that the function receives.\nWe are going to use it to calculate the position of the bar."))}d.isMDXComponent=!0}}]);