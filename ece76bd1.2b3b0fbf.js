(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return N})),t.d(n,"b",(function(){return T})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return D})),t.d(n,"f",(function(){return p})),t.d(n,"g",(function(){return M}));var s=t(0),r=t.n(s);function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=Object(s.useState)([]),o=r[0],a=r[1];return Object(s.useEffect)((function(){if(Array.isArray(n[0]))a(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);a(e[0].apply(e,n))}}),[JSON.stringify(n)]),o}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=Object(s.useState)(),o=r[0],a=r[1];return Object(s.useEffect)((function(){if("function"!=typeof n[0])throw"useFunction takes first argument as a function";var e=n.splice(0,1);a(e[0].apply(e,n))}),[JSON.stringify(n)]),o}var i="_style__row_cell__3TtXw",l="_style__row_cell_invisible__2fzm0",c="_style__row__32f2G",u="_style__row_invisible__kbpmo";function d(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<e;s++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var m=function(e,n,t){return t>=e&&n>=t};function j(e){return!(!Number.isInteger(e)||e<0)}function f(e,n,t,s,r){return void 0===s&&(s=0),void 0===r&&(r=0),{left:s+n*t,top:e*t+r}}function g(e,n,t){return Math.floor((n-t)/e)}function h(e,n){return Math.floor(n/e)}function p(e,n){return e.map((function(e){if(e.editing){var t=function(e,n){if(!j(e.column))throw new Error("firstPosition.column expected an integer received "+e.column);if(!j(e.row))throw new Error("firstPosition.row expected an integer received "+e.row);if(!j(n.column))throw new Error("secondPosition.column expected an integer received "+n.column);return{row:e.row,column:e.column,length:n.column-e.column+1}}({column:e.column,row:e.row},n.cell);return Object.assign({},e,t)}return e}))}var y="ADD",v="EDIT",b="DELETE",w="SET_BARS",E="SET_IS_EDITING";var k=function(e,n){return(e=O(e)).collisions[n.id]="",(n=O(n)).collisions[e.id]="",[e,n]},O=function(e){return e.collisions||(e.collisions={}),e},_=function(e,n){return delete(e=O(e)).collisions[n.id],delete(n=O(n)).collisions[e.id],[e,n]};function D(e,n){switch(n.type){case w:return Object.assign({},e,{bars:n.payload});case v:var t=[].concat(e.bars),s=t.findIndex((function(e){return n.payload.id===e.id})),r=[].concat(t);r.splice(s,1);var o=function(e,n){var t=Object.assign({},n);return[e.map((function(e){if(t.row===e.row){var n=e.column+1,s=t.column+1,r=e.column+e.length,o=t.column+t.length;if(m(n,r,s)||m(n,r,o)||m(s,o,r)||m(s,o,n)){var a=k(e,t),i=a[0],l=a[1];return t=l,i}return e}var c=_(e,t),u=c[0],d=c[1];return t=d,u})),t]}(r,n.payload),a=o[0],i=o[1];return a.push(i),Object.assign({},e,{bars:a});case y:var l=[].concat(e.bars);return l.push(n.payload),Object.assign({},e,{bars:l});case b:var c=[].concat(e.bars),u=c.findIndex((function(e){return n.payload.id===e.id}));return c.splice(u,1),Object.assign({},e,{bars:c});case E:return Object.assign({},e,{isEditing:n.payload});default:return console.log("Unhandled type: "+n.type),e}}function M(e,n){var t=Object(s.useReducer)(e,{bars:n,isEditing:!1}),r=t[0],o=r.bars,a=r.isEditing,i=t[1];return{isEditing:a,setIsEditing:function(e){return i({payload:e,type:E})},bars:o,addBar:function(e){return i({payload:e,type:y})},editBar:function(e){return i({payload:e,type:v})},deleteBar:function(e){return i({payload:e,type:b})},setBars:function(e){return i({payload:e,type:w})}}}function N(e){return r.a.createElement("div",{role:"listitem",onDragStart:e.onDragStart,onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:Object.assign({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length>0?e.length:1)).map((function(n,t){return r.a.createElement("div",{key:t,style:{width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"}})})),e.children)}function x(e){return r.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?c:u,style:{height:e.dimension}},r.a.createElement("div",{className:""+(e.rowTitleWidth>0?i:u),style:{width:e.rowTitleWidth,height:e.dimension+"px"}}),e.columnTitles.map((function(n,t){return r.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:i},n)})))}function z(e){return r.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||i,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function C(e){var n=a(h,e.dimension,e.height),t=a(g,e.dimension,e.width,e.rowTitleWidth),s=o(e.rowTitles),u=o(e.columnTitles,t);return r.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:Object.assign({},e.style,{position:"relative"})},r.a.createElement(x,{columnTitles:u,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension}),[].concat(Array(n)).map((function(n,o){return r.a.createElement("div",{role:"rowgroup",className:c,key:o,style:{height:e.dimension,display:"flex"}},r.a.createElement("div",{className:s.length>0?i:l,style:{width:e.rowTitleWidth,height:e.dimension+"px",overflow:"hidden"}},s[o]),[].concat(Array(t)).map((function(n,t){return r.a.createElement(z,{key:"r"+o+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:o},e.content["r"+o+"c"+t])})))})),r.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:u.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function T(e,n){return Object.assign({id:d(),dimension:e,editing:!0},n)}N.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1},C.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:20,mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.c=C},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var s=t(2),r=t(0),o=t.n(r),a=t(104),i=(t(47),t(99)),l=t.n(i);function c(e,n,t,s){return l()(e).add(n,t).format(s)}function u(e){var n=Object(a.g)(a.e,[]),t=n.bars,i=n.isEditing,l=n.setIsEditing,u=n.addBar,d=n.setBars,m=Object(r.useState)(""),j=m[0],f=m[1];return o.a.createElement(o.a.Fragment,null,""!==j&&o.a.createElement("div",{className:"alert alert--success",role:"alert"},"You selected ",o.a.createElement("strong",null,j)),o.a.createElement(a.c,{columnTitles:function(e){return function(e,n,t,s="D"){return[...Array(n)].map((n,r)=>c(e,r,t,s))}(new Date,e,"days").map((function(e,n){return o.a.createElement("div",{style:{background:"#12D3CF",height:"100%",textAlign:"center"},onClick:function(){f(c(new Date,n,"days","dddd, MMMM Do YYYY, h:mm:ss a"))}},e)}))},mouseDownCell:function(e){var n=Object(a.b)(e.dimension,e.cell);u(n),l(!0)},mouseEnterCell:function(e){if(i){var n=Object(a.f)(t,e);d(n)}},mouseUpCell:function(){var e=t.map((function(e){return e.editing?Object.assign({},e,{editing:!1,style:Object.assign({},e.style,{pointerEvents:"auto"})}):e}));d(e),l(!1)}},(function(e){var n=e.columnTitleHeight;return t.map((function(e){return o.a.createElement(a.a,Object(s.a)({key:e.id},e,{style:Object.assign({},e.style,Object(a.d)(e.row,e.column,e.dimension,0,n))}))}))})))}},259:function(e,n,t){var s={"./af":110,"./af.js":110,"./ar":111,"./ar-dz":112,"./ar-dz.js":112,"./ar-kw":113,"./ar-kw.js":113,"./ar-ly":114,"./ar-ly.js":114,"./ar-ma":115,"./ar-ma.js":115,"./ar-sa":116,"./ar-sa.js":116,"./ar-tn":117,"./ar-tn.js":117,"./ar.js":111,"./az":118,"./az.js":118,"./be":119,"./be.js":119,"./bg":120,"./bg.js":120,"./bm":121,"./bm.js":121,"./bn":122,"./bn.js":122,"./bo":123,"./bo.js":123,"./br":124,"./br.js":124,"./bs":125,"./bs.js":125,"./ca":126,"./ca.js":126,"./cs":127,"./cs.js":127,"./cv":128,"./cv.js":128,"./cy":129,"./cy.js":129,"./da":130,"./da.js":130,"./de":131,"./de-at":132,"./de-at.js":132,"./de-ch":133,"./de-ch.js":133,"./de.js":131,"./dv":134,"./dv.js":134,"./el":135,"./el.js":135,"./en-au":136,"./en-au.js":136,"./en-ca":137,"./en-ca.js":137,"./en-gb":138,"./en-gb.js":138,"./en-ie":139,"./en-ie.js":139,"./en-il":140,"./en-il.js":140,"./en-in":141,"./en-in.js":141,"./en-nz":142,"./en-nz.js":142,"./en-sg":143,"./en-sg.js":143,"./eo":144,"./eo.js":144,"./es":145,"./es-do":146,"./es-do.js":146,"./es-us":147,"./es-us.js":147,"./es.js":145,"./et":148,"./et.js":148,"./eu":149,"./eu.js":149,"./fa":150,"./fa.js":150,"./fi":151,"./fi.js":151,"./fil":152,"./fil.js":152,"./fo":153,"./fo.js":153,"./fr":154,"./fr-ca":155,"./fr-ca.js":155,"./fr-ch":156,"./fr-ch.js":156,"./fr.js":154,"./fy":157,"./fy.js":157,"./ga":158,"./ga.js":158,"./gd":159,"./gd.js":159,"./gl":160,"./gl.js":160,"./gom-deva":161,"./gom-deva.js":161,"./gom-latn":162,"./gom-latn.js":162,"./gu":163,"./gu.js":163,"./he":164,"./he.js":164,"./hi":165,"./hi.js":165,"./hr":166,"./hr.js":166,"./hu":167,"./hu.js":167,"./hy-am":168,"./hy-am.js":168,"./id":169,"./id.js":169,"./is":170,"./is.js":170,"./it":171,"./it-ch":172,"./it-ch.js":172,"./it.js":171,"./ja":173,"./ja.js":173,"./jv":174,"./jv.js":174,"./ka":175,"./ka.js":175,"./kk":176,"./kk.js":176,"./km":177,"./km.js":177,"./kn":178,"./kn.js":178,"./ko":179,"./ko.js":179,"./ku":180,"./ku.js":180,"./ky":181,"./ky.js":181,"./lb":182,"./lb.js":182,"./lo":183,"./lo.js":183,"./lt":184,"./lt.js":184,"./lv":185,"./lv.js":185,"./me":186,"./me.js":186,"./mi":187,"./mi.js":187,"./mk":188,"./mk.js":188,"./ml":189,"./ml.js":189,"./mn":190,"./mn.js":190,"./mr":191,"./mr.js":191,"./ms":192,"./ms-my":193,"./ms-my.js":193,"./ms.js":192,"./mt":194,"./mt.js":194,"./my":195,"./my.js":195,"./nb":196,"./nb.js":196,"./ne":197,"./ne.js":197,"./nl":198,"./nl-be":199,"./nl-be.js":199,"./nl.js":198,"./nn":200,"./nn.js":200,"./oc-lnc":201,"./oc-lnc.js":201,"./pa-in":202,"./pa-in.js":202,"./pl":203,"./pl.js":203,"./pt":204,"./pt-br":205,"./pt-br.js":205,"./pt.js":204,"./ro":206,"./ro.js":206,"./ru":207,"./ru.js":207,"./sd":208,"./sd.js":208,"./se":209,"./se.js":209,"./si":210,"./si.js":210,"./sk":211,"./sk.js":211,"./sl":212,"./sl.js":212,"./sq":213,"./sq.js":213,"./sr":214,"./sr-cyrl":215,"./sr-cyrl.js":215,"./sr.js":214,"./ss":216,"./ss.js":216,"./sv":217,"./sv.js":217,"./sw":218,"./sw.js":218,"./ta":219,"./ta.js":219,"./te":220,"./te.js":220,"./tet":221,"./tet.js":221,"./tg":222,"./tg.js":222,"./th":223,"./th.js":223,"./tk":224,"./tk.js":224,"./tl-ph":225,"./tl-ph.js":225,"./tlh":226,"./tlh.js":226,"./tr":227,"./tr.js":227,"./tzl":228,"./tzl.js":228,"./tzm":229,"./tzm-latn":230,"./tzm-latn.js":230,"./tzm.js":229,"./ug-cn":231,"./ug-cn.js":231,"./uk":232,"./uk.js":232,"./ur":233,"./ur.js":233,"./uz":234,"./uz-latn":235,"./uz-latn.js":235,"./uz.js":234,"./vi":236,"./vi.js":236,"./x-pseudo":237,"./x-pseudo.js":237,"./yo":238,"./yo.js":238,"./zh-cn":239,"./zh-cn.js":239,"./zh-hk":240,"./zh-hk.js":240,"./zh-mo":241,"./zh-mo.js":241,"./zh-tw":242,"./zh-tw.js":242};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=259},88:function(e,n,t){"use strict";t.r(n);var s=t(2),r=t(0),o=t.n(r),a=t(103),i=t(106),l=t(102),c=t(101),u=t(105),d=t(89),m=t.n(d),j=t(250);const f=[{title:o.a.createElement(o.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:o.a.createElement(o.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:o.a.createElement(o.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/undraw_docusaurus_tree.svg",description:o.a.createElement(o.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",o.a.createElement("code",null,"docs")," directory.")},{title:o.a.createElement(o.a.Fragment,null,"Powered by React"),imageUrl:"img/undraw_docusaurus_react.svg",description:o.a.createElement(o.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function g({imageUrl:e,title:n,description:t}){const s=Object(u.a)(e);return o.a.createElement("div",{className:Object(a.a)("col col--4",m.a.feature)},s&&o.a.createElement("div",{className:"text--center"},o.a.createElement("img",{className:m.a.featureImage,src:s,alt:n})),o.a.createElement("h3",null,n),o.a.createElement("p",null,t))}n.default=function(){const e=Object(c.a)(),{siteConfig:n={}}=e;return o.a.createElement(i.a,{title:"Docs for "+n.title,description:"Description will go into a meta tag in <head />"},o.a.createElement("header",{className:Object(a.a)("hero hero--primary",m.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"hero__title"},n.title),o.a.createElement("p",{className:"hero__subtitle"},o.a.createElement("span",{style:{background:"red",padding:"10px",borderRadius:"10px"}},n.tagline)),o.a.createElement("div",{className:m.a.buttons},o.a.createElement(l.a,{className:Object(a.a)("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),o.a.createElement("main",null,f&&f.length>0&&o.a.createElement("section",{className:m.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},f.map((e,n)=>o.a.createElement(g,Object(s.a)({key:n},e)))))),o.a.createElement(j.a,null)))}}}]);