(self.webpackChunkschoenberg_letters=self.webpackChunkschoenberg_letters||[]).push([[671],{5991:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=r(4160);function o(e){let{location:t,title:r,menuLinks:o}=e;return n.createElement("nav",{className:"navbar navbar-expand-lg bg-body-tertiary"},n.createElement("div",{className:"container"},n.createElement(a.rU,{className:"navbar-brand",to:o[0].link},r),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.map((e=>n.createElement("li",{key:e.name,className:t===e.name.toLowerCase()?"nav-item active":"nav-item"},n.createElement(a.rU,{className:"nav-link",to:e.link},e.name))))),n.createElement("form",{className:"d-flex",role:"search"},n.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Suche")))))}var i=e=>{let{location:t,children:r}=e;const i=(0,a.K2)("3232620215"),{title:l,menuLinks:c}=i.site.siteMetadata;return n.createElement(n.Fragment,null,n.createElement(o,{location:t||"",title:l,menuLinks:c}),n.createElement("main",{className:"content"},r),n.createElement("footer",{className:"footer"},n.createElement("div",{className:"container"},n.createElement("p",{className:"text-center"},"Copyright bla bla"))))}},7465:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7294),a=r(94),o=r(4578);function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}var l=r(9611);function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(c())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var a=new(e.bind.apply(e,n));return r&&(0,l.Z)(a,r.prototype),a}(e,arguments,i(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,l.Z)(r,e)},s(e)}var u=function(e){for(const r of e){const e=r.toLowerCase();if(!window.customElements.get(e))try{window.customElements.define(e,function(e){function t(){var t;return(t=e.call(this)||this).matches(":defined")||t.setAttribute("data-processed",""),t}return(0,o.Z)(t,e),t.prototype.connectedCallback=function(){this.hasAttribute("data-processed")||this.setAttribute("data-processed","")},t}(s(HTMLElement)))}catch(t){console.log(r+" couldn't be registered."),console.log(t)}}};const d=e=>{let{children:t,node:a}=e;const o=r.g?new r.g.XMLSerializer:new XMLSerializer;if(1===a.nodeType){const e=a;return n.createElement(e.tagName,{},n.createElement(n.Fragment,null,n.createElement("span",{hidden:!0,"aria-hidden":!0,"data-original":!0,dangerouslySetInnerHTML:{__html:o.serializeToString(e)}}),t))}return n.createElement(n.Fragment,null,n.createElement("span",{hidden:!0,"aria-hidden":!0,"data-original":!0,dangerouslySetInnerHTML:{__html:a.textContent||""}}),t)},f=e=>Array.from(e).reduce(((e,t)=>(e["ref"===t.name?"Ref":t.name]=t.value,e)),{}),p=e=>{if(1===e.teiNode.nodeType){const t=e.teiNode;return n.createElement(t.localName,{...f(t.attributes)},n.createElement(a.Nh,{teiNodes:t.childNodes,availableRoutes:e.availableRoutes}))}return n.createElement(a.DO,e)},m=e=>n.createElement(d,{node:e.teiNode},n.createElement("pre",null,n.createElement(a.Nh,Object.assign({teiNodes:e.teiNode.childNodes},e)))),b=e=>{const t=e.teiNode,r=t.getAttribute("url");if(!r)return null;const a={src:r};return t.getAttribute("width")&&(a.width=t.getAttribute("width")||""),t.getAttribute("height")&&(a.height=t.getAttribute("width")||""),n.createElement(d,{node:e.teiNode},n.createElement("img",a))},h=e=>{const t=e.teiNode;if("gloss"!==t.getAttribute("type"))return n.createElement(p,e);const r=Array.from(t.childNodes);return n.createElement(d,{node:e.teiNode},n.createElement("dl",null,r.map(((t,r)=>{if(1!==t.nodeType)return n.createElement(a.DO,{key:"t-"+r,teiNode:t,availableRoutes:e.availableRoutes});const o=t;switch(o.localName){case"tei-label":return n.createElement("dt",{key:"tt-"+r},n.createElement(a.Nh,Object.assign({teiNodes:o.childNodes},e)));case"tei-item":return n.createElement("dd",{key:"td-"+r},n.createElement(a.Nh,Object.assign({teiNodes:o.childNodes},e)))}}))))},v=e=>{const t=e.teiNode;if("end"!==t.getAttribute("place"))return n.createElement(p,e);const r="_note_"+t.getAttribute("data-idx");return n.createElement(d,{node:e.teiNode},n.createElement("sup",null,n.createElement("a",{id:"src"+r,href:"#"+r},t.getAttribute("data-idx"))))},y=e=>{const t=e.teiNode.getAttribute("target")||"";return n.createElement(d,{node:e.teiNode},n.createElement("a",{href:t},t))},g=e=>{const t=e.teiNode,r=t.getAttribute("target")||"";return n.createElement(d,{node:e.teiNode},n.createElement("a",{href:r},n.createElement(a.Nh,Object.assign({teiNodes:t.childNodes},e))))},E=e=>{const t=e.teiNode,r=[],o=[],i=Array.from(t.getElementsByTagName("tei-note")).reduce(((t,r,o)=>("end"===r.getAttribute("place")&&(r.setAttribute("data-idx",(o+1).toString()),t.push(n.createElement("li",{id:"_note_"+(o+1)},n.createElement(a.Nh,Object.assign({key:"en"+o,teiNodes:r.childNodes},e))))),t)),[]);i.length>0&&o.push(n.createElement("ol",{key:"endnotes",className:"ceteicean-notes"},i));const l=n.createElement("tei-tei",{...f(t.attributes)},n.createElement(a.Nh,Object.assign({teiNodes:e.teiNode.childNodes},e)));return n.createElement(n.Fragment,null,r,l,o)},N=e=>{const t=e.teiNode;return n.createElement(t.localName.toLowerCase(),{...f(t.attributes)},n.createElement(d,{node:e.teiNode}))};function O(e){let{pageContext:t,routes:o}=e;const i=r.g?new r.g.DOMParser:new DOMParser;(0,n.useEffect)((()=>{u(t.elements)}));const{prefixed:l}=t,c=i.parseFromString(l,"text/xml"),s=o||{"tei-tei":E,"tei-eg":m,"tei-graphic":b,"tei-list":h,"tei-note":v,"tei-ptr":y,"tei-ref":g,"tei-teiheader":N},d=Object.keys(s).map(((e,t)=>n.createElement(a.dx,{el:e,component:s[e],key:"tr-"+t})));return n.createElement(a.UM,{data:c.documentElement},d)}var w=e=>{let{teiNode:t}=e;const r=t.getAttribute("n")||"";return r?n.createElement(d,{node:t},n.createElement("span",{className:"Pb text-muted"},"Seite ",r,n.createElement("hr",null))):null};var j=r(4160);var k=e=>{const t=e.teiNode.getAttribute("ref"),r=t.split("/").pop();return n.createElement(d,{node:e.teiNode},n.createElement(j.rU,{to:t,className:"PlaceName","data-gndId":r},n.createElement(a.Nh,Object.assign({teiNodes:e.teiNode.childNodes},e))))};var S=r(5991);var x=e=>{let{pageContext:t}=e;const r={"tei-tei":E,"tei-teiheader":N,"tei-persname":k,"tei-pb":e=>n.createElement(w,e)};return n.createElement(S.Z,null,n.createElement("div",{className:"container"},n.createElement(O,{pageContext:t,routes:r})))}},94:function(e,t,r){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(r(7294));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var a=m(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}var y=a.default.createContext(),g=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self&&self,{exports:{}});g.exports=new function(){var e=this;e.init=function(){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},String.prototype.repeat=function(e){return new Array(1+e).join(this)}},e.init();var t=/\/\*[\s\S]*?\*\//g,r=/([^\:]+):([^\;]*);/,n=/(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gim,a=1,o=2,l=3,c=4,s=function(e){return void 0===e||0==e.length||null==e};e.toJSON=function(u,d){var f={children:{},attributes:{}},p=null,m=0;for(void 0===d&&(d={ordered:!1,comments:!1,stripComments:!1,split:!1}),d.stripComments&&(d.comments=!1,u=u.replace(t,""));null!=(p=n.exec(u));)if(!s(p[a])&&d.comments){var b=p[a].trim();f[m++]=b}else if(s(p[o])){if(!s(p[l]))return f;if(!s(p[c])){var h=p[c].trim(),v=r.exec(h);if(v){E=v[1].trim();var y=v[2].trim();if(d.ordered)(O={}).name=E,O.value=y,O.type="attr",f[m++]=O;else if(E in f.attributes){var g=f.attributes[E];g instanceof Array||(f.attributes[E]=[g]),f.attributes[E].push(y)}else f.attributes[E]=y}else f[m++]=h}}else{var E=p[o].trim(),N=e.toJSON(u,d);if(d.ordered){var O;(O={}).name=E,O.value=N,O.type="rule",f[m++]=O}else{if(d.split)var w=E.split(",");else w=[E];for(i in w){var j=w[i].trim();if(j in f.children)for(var k in N.attributes)f.children[j].attributes[k]=N.attributes[k];else f.children[j]=N}}}return f},e.toCSS=function(e,t,r){var n="";if(void 0===t&&(t=0),void 0===r&&(r=!1),e.attributes)for(i in e.attributes){var a=e.attributes[i];if(a instanceof Array)for(var o=0;o<a.length;o++)n+=u(i,a[o],t);else n+=u(i,a,t)}if(e.children){var l=!0;for(i in e.children)r&&!l?n+="\n":l=!1,n+=d(i,e.children[i],t)}return n};var u=function(e,t,r){return"\t".repeat(r)+e+": "+t+";\n"},d=function(t,r,n){var a="\t".repeat(n)+t+" {\n";return a+=e.toCSS(r,n+1),a+="\t".repeat(n)+"}\n"}};var E=function(e){p(r,e);var t=v(r);function r(){return c(this,r),t.apply(this,arguments)}return u(r,[{key:"render",value:function(){var e=this;return Array.from(this.props.teiNodes).map((function(t,r){return a.default.createElement(N,{key:"".concat(t.tagName).concat(r),teiNode:t,availableRoutes:e.props.availableRoutes})}))}}]),r}(a.default.Component),N=function(e){p(r,e);var t=v(r);function r(){return c(this,r),t.apply(this,arguments)}return u(r,[{key:"forwardTeiAttributes",value:function(){return Array.from(this.props.teiNode.attributes).reduce((function(e,t){switch(t.name){case"ref":e.Ref=t.value;break;case"style":e.style=g.exports.toJSON(t.value);break;default:e[t.name]=t.value}return e}),{})}},{key:"render",value:function(){var e,t,r=this;if(!this.props.teiNode)return null;if(3===this.props.teiNode.nodeType){if(!this.props.availableRoutes.includes("text()"))return this.props.teiNode.nodeValue;e="text()"}else{if(1!==this.props.teiNode.nodeType)return null;var n=this.props.teiNode,o=n.tagName.toLowerCase();if(t=a.default.createElement(E,f({teiNodes:n.childNodes},this.props)),!this.props.availableRoutes.includes(o))return a.default.createElement(o,l({},this.forwardTeiAttributes()),t);e=o}return a.default.createElement(y.Consumer,null,(function(n){var o=n[e];return a.default.isValidElement(o)?a.default.cloneElement(o,l({},r.props),t):a.default.createElement(o,l({},r.props),t)}))}}]),r}(a.default.Component),O=function(e){p(r,e);var t=v(r);function r(){return c(this,r),t.apply(this,arguments)}return u(r,[{key:"componentDidMount",value:function(){this.props.children&&this.props.component}},{key:"render",value:function(){return null}}]),r}(a.default.Component),w=function(e){p(r,e);var t=v(r);function r(e){var n;return c(this,r),d(h(n=t.call(this,e)),"availableRoutes",[]),d(h(n),"routes",{}),a.default.Children.forEach(e.children,(function(e){n.availableRoutes.push(e.props.el),e.props.children?n.routes[e.props.el]=e.props.children:n.routes[e.props.el]=e.props.component})),n}return u(r,[{key:"render",value:function(){return this.props.data?a.default.createElement(y.Provider,{value:this.routes},a.default.createElement(N,{teiNode:this.props.data,availableRoutes:this.availableRoutes})):null}}]),r}(a.default.Component);t.DO=N,t.Nh=E,t.UM=w,t.dx=O}}]);
//# sourceMappingURL=component---src-gatsby-theme-ceteicean-components-ceteicean-js-ad6488d455aed510ad4d.js.map