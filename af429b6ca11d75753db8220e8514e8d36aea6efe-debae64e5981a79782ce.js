/*! For license information please see af429b6ca11d75753db8220e8514e8d36aea6efe-debae64e5981a79782ce.js.LICENSE.txt */
(self.webpackChunkschoenberg_letters=self.webpackChunkschoenberg_letters||[]).push([[526],{2092:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(7294);function i(){return(0,r.useState)(null)}},2029:function(t,e,n){"use strict";var r=n(7294);e.Z=function(t){const e=(0,r.useRef)(t);return(0,r.useEffect)((()=>{e.current=t}),[t]),e}},8146:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7294),i=n(2029);function a(t){const e=(0,i.Z)(t);return(0,r.useCallback)((function(...t){return e.current&&e.current(...t)}),[e])}},9585:function(t,e,n){"use strict";var r=n(7294);const i=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,a="undefined"!=typeof document;e.Z=a||i?r.useLayoutEffect:r.useEffect},5654:function(t,e,n){"use strict";var r=n(7294);const i=t=>t&&"function"!=typeof t?e=>{t.current=e}:t;e.Z=function(t,e){return(0,r.useMemo)((()=>function(t,e){const n=i(t),r=i(e);return t=>{n&&n(t),r&&r(t)}}(t,e)),[t,e])}},6454:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(7294);function i(){const t=(0,r.useRef)(!0),e=(0,r.useRef)((()=>t.current));return(0,r.useEffect)((()=>(t.current=!0,()=>{t.current=!1})),[]),e.current}},861:function(t,e,n){"use strict";n.d(e,{FT:function(){return o}});var r=n(7294),i=n(5893);const a=["as","disabled"];function o({tagName:t,disabled:e,href:n,target:r,rel:i,role:a,onClick:o,tabIndex:s=0,type:u}){t||(t=null!=n||null!=r||null!=i?"a":"button");const c={tagName:t};if("button"===t)return[{type:u||"button",disabled:e},c];const l=r=>{(e||"a"===t&&function(t){return!t||"#"===t.trim()}(n))&&r.preventDefault(),e?r.stopPropagation():null==o||o(r)};return"a"===t&&(n||(n="#"),e&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:e?void 0:s,href:n,target:"a"===t?r:void 0,"aria-disabled":e||void 0,rel:"a"===t?i:void 0,onClick:l,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),l(t))}},c]}const s=r.forwardRef(((t,e)=>{let{as:n,disabled:r}=t,s=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,a);const[u,{tagName:c}]=o(Object.assign({tagName:n,disabled:r},s));return(0,i.jsx)(c,Object.assign({},s,u,{ref:e}))}));s.displayName="Button"},3004:function(t,e){"use strict";e.Z=!("undefined"==typeof window||!window.document||!window.document.createElement)},8076:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(3004),i=!1,a=!1;try{var o={get passive(){return i=!0},get once(){return a=i=!0}};r.Z&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(l){}var s=function(t,e,n,r){if(r&&"boolean"!=typeof r&&!a){var o=r.once,s=r.capture,u=n;!a&&o&&(u=n.__once||function t(r){this.removeEventListener(e,t,s),n.call(this,r)},n.__once=u),t.addEventListener(e,u,i?r:s)}t.addEventListener(e,n,r)};var u=function(t,e,n,r){var i=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)};var c=function(t,e,n,r){return s(t,e,n,r),function(){u(t,e,n,r)}}},7216:function(t,e,n){"use strict";function r(t){return t&&t.ownerDocument||document}n.d(e,{Z:function(){return r}})},9712:function(t,e){},5991:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(7294),i=n(4160);function a(t){let{location:e,title:n,menuLinks:a}=t;return r.createElement("nav",{className:"navbar navbar-expand-lg bg-body-tertiary"},r.createElement("div",{className:"container"},r.createElement(i.rU,{className:"navbar-brand",to:a[0].link},n),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},a.map((t=>r.createElement("li",{key:t.name,className:e===t.name.toLowerCase()?"nav-item active":"nav-item"},r.createElement(i.rU,{className:"nav-link",to:t.link},t.name))))),r.createElement("form",{className:"d-flex",role:"search"},r.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Suche")))))}var o=t=>{let{location:e,children:n}=t;const o=(0,i.K2)("3232620215"),{title:s,menuLinks:u}=o.site.siteMetadata;return r.createElement(r.Fragment,null,r.createElement(a,{location:e||"",title:s,menuLinks:u}),r.createElement("main",{className:"content"},n),r.createElement("footer",{className:"footer"},r.createElement("div",{className:"container"},r.createElement("p",{className:"text-center"}))))}},5005:function(t,e,n){"use strict";var r=n(3967),i=n.n(r),a=n(7294),o=n(861),s=n(6792),u=n(5893);const c=a.forwardRef((({as:t,bsPrefix:e,variant:n="primary",size:r,active:a=!1,disabled:c=!1,className:l,...f},d)=>{const p=(0,s.vE)(e,"btn"),[v,{tagName:m}]=(0,o.FT)({tagName:t,disabled:c,...f}),E=m;return(0,u.jsx)(E,{...v,...f,ref:d,disabled:c,className:i()(l,p,a&&"active",n&&`${p}-${n}`,r&&`${p}-${r}`,f.href&&c&&"disabled")})}));c.displayName="Button",e.Z=c},8598:function(t,e,n){"use strict";n.d(e,{Z:function(){return F}});var r=n(3967),i=n.n(r),a=n(7294),o=n(3366),s=n(4578),u=n(3935),c=!1,l=a.createContext(null),f="unmounted",d="exited",p="entering",v="entered",m="exiting",E=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var i,a=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?a?(i=d,r.appearStatus=p):i=v:i=e.unmountOnExit||e.mountOnEnter?f:d,r.state={status:i},r.nextCallback=null,r}(0,s.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==v&&(e=p):n!==p&&n!==v||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:f})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[u.findDOMNode(this),r],a=i[0],o=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!t&&!n||c?this.safeSetState({status:v},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:p},(function(){e.props.onEntering(a,o),e.onTransitionEnd(l,(function(){e.safeSetState({status:v},(function(){e.props.onEntered(a,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.findDOMNode(this);e&&!c?(this.props.onExit(r),this.safeSetState({status:m},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,o.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(l.Provider,{value:null},"function"==typeof n?n(t,r):a.cloneElement(a.Children.only(n),r))},e}(a.Component);function h(){}E.contextType=l,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED=f,E.EXITED=d,E.ENTERING=p,E.ENTERED=v,E.EXITING=m;var b=E,x=n(7216);function g(t,e){return function(t){var e=(0,x.Z)(t);return e&&e.defaultView||window}(t).getComputedStyle(t,e)}var y=/([A-Z])/g;var k=/^ms-/;function C(t){return function(t){return t.replace(y,"-$1").toLowerCase()}(t).replace(k,"-ms-")}var N=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var S=function(t,e){var n="",r="";if("string"==typeof e)return t.style.getPropertyValue(C(e))||g(t).getPropertyValue(C(e));Object.keys(e).forEach((function(i){var a=e[i];a||0===a?!function(t){return!(!t||!N.test(t))}(i)?n+=C(i)+": "+a+";":r+=i+"("+a+") ":t.style.removeProperty(C(i))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n},O=n(8076);function w(t,e,n){void 0===n&&(n=5);var r=!1,i=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}(t,"transitionend",!0)}),e+n),a=(0,O.Z)(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),a()}}function Z(t,e,n,r){var i,a;null==n&&(i=S(t,"transitionDuration")||"",a=-1===i.indexOf("ms")?1e3:1,n=parseFloat(i)*a||0);var o=w(t,n,r),s=(0,O.Z)(t,"transitionend",e);return function(){o(),s()}}function R(t,e){const n=S(t,e)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function T(t,e){const n=R(t,"transitionDuration"),r=R(t,"transitionDelay"),i=Z(t,(n=>{n.target===t&&(i(),e(n))}),n+r)}var L=n(5654),D=n(8285),j=n(5893);var P=a.forwardRef((({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:o,addEndListener:s,children:u,childRef:c,...l},f)=>{const d=(0,a.useRef)(null),p=(0,L.Z)(d,c),v=t=>{p((0,D.Z)(t))},m=t=>e=>{t&&d.current&&t(d.current,e)},E=(0,a.useCallback)(m(t),[t]),h=(0,a.useCallback)(m(e),[e]),x=(0,a.useCallback)(m(n),[n]),g=(0,a.useCallback)(m(r),[r]),y=(0,a.useCallback)(m(i),[i]),k=(0,a.useCallback)(m(o),[o]),C=(0,a.useCallback)(m(s),[s]);return(0,j.jsx)(b,{ref:f,...l,onEnter:E,onEntered:x,onEntering:h,onExit:g,onExited:k,onExiting:y,addEndListener:C,nodeRef:d,children:"function"==typeof u?(t,e)=>u(t,{...e,ref:v}):a.cloneElement(u,{ref:v})})}));const M={[p]:"show",[v]:"show"},_=a.forwardRef((({className:t,children:e,transitionClasses:n={},onEnter:r,...o},s)=>{const u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},c=(0,a.useCallback)(((t,e)=>{!function(t){t.offsetHeight}(t),null==r||r(t,e)}),[r]);return(0,j.jsx)(P,{ref:s,addEndListener:T,...u,onEnter:c,childRef:e.ref,children:(r,o)=>a.cloneElement(e,{...o,className:i()("fade",t,e.props.className,M[r],n[r])})})}));_.displayName="Fade";var F=_},6792:function(t,e,n){"use strict";n.d(e,{SC:function(){return c},vE:function(){return u}});var r=n(7294);n(5893);const i=["xxl","xl","lg","md","sm","xs"],a=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"}),{Consumer:o,Provider:s}=a;function u(t,e){const{prefixes:n}=(0,r.useContext)(a);return t||n[e]||e}function c(){const{dir:t}=(0,r.useContext)(a);return"rtl"===t}},8285:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(3935);function i(t){return t&&"setState"in t?r.findDOMNode(t):null!=t?t:null}},2081:function(t,e,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,{Ch:function(){return c},$c:function(){return u}});var i=n(3366),a=n(7294);n(1143);function o(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function s(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function u(t,e,n){var r=(0,a.useRef)(void 0!==t),i=(0,a.useState)(e),o=i[0],s=i[1],u=void 0!==t,c=r.current;return r.current=u,!u&&c&&o!==e&&s(e),[u?t:o,(0,a.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];n&&n.apply(void 0,[t].concat(r)),s(t)}),[n])]}function c(t,e){return Object.keys(e).reduce((function(n,a){var c,l=n,f=l[o(a)],d=l[a],p=(0,i.Z)(l,[o(a),a].map(s)),v=e[a],m=u(d,f,t[v]),E=m[0],h=m[1];return r({},p,((c={})[a]=E,c[v]=h,c))}),t)}n(9712)},3967:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=o(t,a(n)))}return t}function a(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=o(e,n));return e}function o(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},3366:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=af429b6ca11d75753db8220e8514e8d36aea6efe-debae64e5981a79782ce.js.map