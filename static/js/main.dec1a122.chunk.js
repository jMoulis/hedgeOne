(window["webpackJsonptest-ts"]=window["webpackJsonptest-ts"]||[]).push([[2],{46:function(e,t,n){e.exports=n(77)},75:function(e,t,n){var r={"./Document":[45,0,1],"./Document.tsx":[45,0,1]};function a(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(a)})}a.keys=function(){return Object.keys(r)},a.id=75,e.exports=a},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),i=n(16),u=n(8),l=n(13),s=n(17),f=n.n(s),b=n(22),m=n(12),p=n(2),v=n(35),d=n.n(v),O=n(3),y=n(23),E=n.n(y);function g(){var e=Object(p.a)(["\n  grid-area: leftPanel;\n  background-color: lavender;\n"]);return g=function(){return e},e}var h=O.a.aside(g()),j=function(e){var t=e.menu,n=e.setSelectedMenu;return t?a.a.createElement(h,null,a.a.createElement("ul",null,t.map(function(e){return a.a.createElement("li",{key:e.label},a.a.createElement("div",{onClick:function(){return n(e)}},e.label))}),a.a.createElement("li",null,a.a.createElement(i.b,{to:"/tab"},"Tab")))):null};function w(){var e=Object(p.a)(["\n  padding: 1rem;\n"]);return w=function(){return e},e}function T(){var e=Object(p.a)(["\n  list-style: none;\n  display: flex;\n"]);return T=function(){return e},e}function k(){var e=Object(p.a)(["\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  background-color: lightgray;\n"]);return k=function(){return e},e}var A=O.a.header(k()),P=O.a.ul(T()),S=O.a.li(w()),x=function(){return a.a.createElement(A,null,a.a.createElement("div",null,"logo"),a.a.createElement(P,null,a.a.createElement(S,null,"link1"),a.a.createElement(S,null,"link2"),a.a.createElement(S,null,"link3")))},D=n(38),I=n(39),B=n(42),C=n(40),R=n(43),_=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(B.a)(this,Object(C.a)(t).call(this,e))).state={hasError:!1},n}return Object(R.a)(t,e),Object(I.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),console.log("ErrorBoundary",e)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props,n=t.children,r=t.errorType;return e?a.a.createElement("div",null,a.a.createElement("h1",null,"Something went wrong."),a.a.createElement("h2",null,r||"")):n}}]),t}(a.a.Component);function L(e){var t=e.tab,c=e.actions,o=a.a.lazy(function(){return n(75)("./".concat(t.type))});return a.a.createElement(r.Suspense,{fallback:a.a.createElement("span",null,"Loading")},a.a.createElement(o,{config:t,actions:c}))}var M=function(e){var t=e.tab,n=e.actions;return a.a.createElement(_,{errorType:"Unable to load the module"},a.a.createElement(L,{tab:t,actions:n}))};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N=a.a.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}),U=function(e){var t=e.svgRef,n=e.title,r=F(e,["svgRef","title"]);return a.a.createElement("svg",V({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",className:"svg-inline--fa fa-times fa-w-11",role:"img",viewBox:"0 0 352 512",ref:t},r),a.a.createElement("title",null,n),N)},W=a.a.forwardRef(function(e,t){return a.a.createElement(U,V({svgRef:t},e))}),z=(n.p,n(33));function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $={tabs:[],activeTab:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TABS":return G({},e,{tabs:[].concat(Object(z.a)(e.tabs),[t.payload])});case"SET_ACTIVE_TAB":return G({},e,{activeTab:t.payload});case"REMOVE_TAB":var n=e.tabs.filter(function(e){return e.tabId!==t.payload});return G({},e,{tabs:n});default:return G({},e)}},H=function(e){return{type:"SET_TABS",payload:e}},K=function(e){return{type:"SET_ACTIVE_TAB",payload:e}},Q=function(e){return{type:"REMOVE_TAB",payload:e}};function X(){var e=Object(p.a)(["\n  display: inline-block;\n  margin-right: 0.5rem;\n"]);return X=function(){return e},e}var Y=O.a.span(X());function Z(){var e=Object(p.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"]);return Z=function(){return e},e}var ee=O.a.button(Z());function te(){var e=Object(p.a)(["\n  display: flex;\n  padding: 1rem;\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n"]);return te=function(){return e},e}var ne=O.a.li(te(),function(e){return e.isActive?"#67B7DC":"lightGray"},function(e){return e.isActive?"white":"black"}),re=Object(u.b)(function(e){var t=e.tabReducer;return{tabs:t.tabs,activeTab:t.activeTab}},function(e){return{removeTabAction:function(t){e(Q(t))},setActiveTabAction:function(t){e(K(t))}}})(function(e){var t=e.activeTab,n=e.setActiveTabAction,r=e.tab,c=e.tabs,o=e.removeTabAction;return a.a.createElement(ne,{isActive:t&&r.tabId===t.tabId||!1},a.a.createElement(Y,{onClick:function(){return n(r)}},r.label),a.a.createElement(ee,{type:"button",onClick:function(){return function(e){var t=c.findIndex(function(t){return t.tabId===e})-1;t>=0&&n(c[t]),o(e)}(r.tabId)}},a.a.createElement(W,{height:"2rem",width:"2rem"})))});function ae(){var e=Object(p.a)(["\n  display: flex;\n"]);return ae=function(){return e},e}var ce=O.a.ul(ae());var oe=Object(u.b)(function(e){var t=e.tabReducer;return{tabs:t.tabs,activeTab:t.activeTab}},function(e){return{actions:{setActiveTabAction:function(t){e(K(t))},setTabsAction:function(t){e(H(t))}}}})(function(e){var t=e.tabs,n=e.activeTab,r=e.actions;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ce,null,t.map(function(e){return a.a.createElement(re,{key:e.tabId,tab:e})})),t.map(function(e,t){return n&&e.tabId===n.tabId&&a.a.createElement(M,{key:t,tab:e,actions:r})}))});function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ue(){var e=Object(p.a)(["\n  grid-area: content;\n"]);return ue=function(){return e},e}function le(){var e=Object(p.a)(["\n  display: grid;\n  position: relative;\n  height: 100%;\n  grid-template-areas:\n    'header header'\n    'leftPanel content';\n  grid-template-columns: 20rem auto;\n  grid-template-rows: 5rem auto;\n"]);return le=function(){return e},e}var se=O.a.main(le()),fe=O.a.div(ue()),be=Object(u.b)(function(e){return{tabs:e.tabReducer.tabs}},function(e){return{setTabsAction:function(t){e(H(t))},removeTabAction:function(t){e(Q(t))},setActiveTabAction:function(t){e(K(t))}}})(function(e){var t=e.setTabsAction,n=e.setActiveTabAction,c=Object(r.useState)(""),o=Object(m.a)(c,2),i=o[0],u=o[1],s=Object(r.useState)(!0),p=Object(m.a)(s,2),v=p[0],O=p[1],y=Object(r.useState)([]),g=Object(m.a)(y,2),h=g[0],w=g[1];return Object(r.useEffect)(function(){O(!0),function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E()({method:"get",url:"/data/config.json"});case 3:t=e.sent,n=t.data,w(n.menu),O(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),O(!1),u(e.t0.message);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}()()},[]),a.a.createElement(se,null,i&&a.a.createElement("span",null,i),a.a.createElement(x,null),v?a.a.createElement("span",null,"Chargement en cours"):a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{menu:h,setSelectedMenu:function(e){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{tabId:d()()});n(r),t(r)}}),a.a.createElement(fe,null,a.a.createElement(oe,null))))}),me=n(9),pe=n(41),ve=Object(me.combineReducers)({tabReducer:q}),de=Object(pe.composeWithDevTools)(),Oe=Object(me.createStore)(ve,de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(76);o.a.render(a.a.createElement(u.a,{store:Oe},a.a.createElement(i.a,{basename:"/hedgeOne"},a.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,3,5]]]);
//# sourceMappingURL=main.dec1a122.chunk.js.map