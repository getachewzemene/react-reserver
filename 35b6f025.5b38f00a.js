(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return n?a.a.createElement(h,o(o({ref:t},l),{},{components:n})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),c=(n(0),n(113)),i={id:"bar",title:"Bar",sidebar_label:"Bar"},o={unversionedId:"bar",id:"bar",isDocsHomePage:!1,title:"Bar",description:"id",source:"@site/docs\\bar.md",slug:"/bar",permalink:"/react-reserver/docs/bar",version:"current",sidebar_label:"Bar",sidebar:"docs",previous:{title:"Reserver",permalink:"/react-reserver/docs/reserver"},next:{title:"Helpers",permalink:"/react-reserver/docs/helpers"}},b=[{value:"id",id:"id",children:[]},{value:"className",id:"classname",children:[]},{value:"style",id:"style",children:[]},{value:"dimension",id:"dimension",children:[]},{value:"length",id:"length",children:[]},{value:"content",id:"content",children:[]},{value:"firstContent",id:"firstcontent",children:[]},{value:"lastContent",id:"lastcontent",children:[]},{value:"children",id:"children",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"id"},"id"),Object(c.b)("h4",{id:"type-string"},"type: ",Object(c.b)("em",{parentName:"h4"},"string")),Object(c.b)("p",null,"Gives the Bar component an id attribute"),Object(c.b)("h3",{id:"classname"},"className"),Object(c.b)("h4",{id:"type-string-1"},"type: ",Object(c.b)("em",{parentName:"h4"},"string")),Object(c.b)("p",null,"Passes Bar className"),Object(c.b)("h3",{id:"style"},"style"),Object(c.b)("h4",{id:"type-object"},"type: ",Object(c.b)("em",{parentName:"h4"},"object")),Object(c.b)("p",null,"Passes style to Reserver"),Object(c.b)("h3",{id:"dimension"},"dimension"),Object(c.b)("h4",{id:"type-object-width-number-height-number--number"},"type: ",Object(c.b)("em",{parentName:"h4"},"object")," {width: ",Object(c.b)("em",{parentName:"h4"},"number"),", height: ",Object(c.b)("em",{parentName:"h4"},"number"),"} | ",Object(c.b)("em",{parentName:"h4"},"number")),Object(c.b)("p",null,"Takes either an object with the properties width and height or a number.\nThis is the dimension of each cell "),Object(c.b)("h3",{id:"length"},"length"),Object(c.b)("h4",{id:"type-number"},"type: ",Object(c.b)("em",{parentName:"h4"},"number")),Object(c.b)("p",null,"Is used to calculate the width of the component by takes the width of the dimension and multiples by length"),Object(c.b)("h3",{id:"content"},"content"),Object(c.b)("h4",{id:"type-object-1"},"type: ",Object(c.b)("em",{parentName:"h4"},"object")),Object(c.b)("p",null,"An object where each key corresponds to a cell. the format of the keys is just the index.\nThe reason to use an object instead of an array is because you are more likely to have a single cell you might want to format.\n",Object(c.b)("em",{parentName:"p"},"In terms of order of importance, firstContent and lastContent take precedence over content, so if you put content={0:x} and firstContent={y} y will appear in the cell")),Object(c.b)("h3",{id:"firstcontent"},"firstContent"),Object(c.b)("h4",{id:"type-any"},"type: ",Object(c.b)("em",{parentName:"h4"},"any")),Object(c.b)("p",null,"The first cell in the bar"),Object(c.b)("h3",{id:"lastcontent"},"lastContent"),Object(c.b)("h4",{id:"type-any-1"},"type: ",Object(c.b)("em",{parentName:"h4"},"any")),Object(c.b)("p",null,"The last cell in the bar"),Object(c.b)("h3",{id:"children"},"children"),Object(c.b)("h4",{id:"type-any-2"},"type: ",Object(c.b)("em",{parentName:"h4"},"any")),Object(c.b)("p",null,"Pass any jsx in here I suggest to use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/helpers#tag"}),"Tag")))}s.isMDXComponent=!0}}]);