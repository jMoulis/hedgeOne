(window["webpackJsonptest-ts"]=window["webpackJsonptest-ts"]||[]).push([[1],{194:function(e,t,n){e.exports=n.p+"static/media/list.b39fb484.svg"},195:function(e,t,n){e.exports=n.p+"static/media/network.c2163f38.svg"},196:function(e,t,n){e.exports=n.p+"static/media/valorisation.ec937b18.svg"},45:function(e,t,n){"use strict";n.r(t);var r=n(192),a=n(0),c=n.n(a),i=n(33),o=n(13),l=n(17),u=n.n(l),s=n(22),f=n(12),d=n(2),p=n(3),m=n(23),b=n.n(m),v=n(213),g=n(214),h=n(211),y=n(212),O=n(194),j=n.n(O),E=n(195),w=n.n(E),x=n(196),k=n.n(x);function S(){var e=Object(d.a)(["\n  height: 30rem;\n"]);return S=function(){return e},e}var C=p.a.div(S()),P=function(e){return[{actionType:"valorisation",weight:90,image:k.a,x:e/2,y:-e/2},{actionType:"show_children",weight:90,image:j.a,x:-15,y:e/2},{actionType:"network",weight:90,image:w.a,x:-e/2-30,y:-e/2}]};var I=function(e){var t=e.retreiveSelectedNodeInformation,n=e.data,r=e.seriesConfig,i=e.setActionType,o=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useRef)(null),s=function(e){var t=e.bbox.height,n={x:-(t+t+45)/2,y:-(t+t+45)/2},r=e.createChild(h.a);r.isMeasured=!1,r.width=t+t+45,r.height=t+t+45,r.moveTo(n),r.isMeasured=!1,r.toBack(),r.data=P(t);var a=r.series.push(new h.b);a.dataFields.value="weight",a.hiddenState.properties.endAngle=-90,a.defaultState.transitionDuration=300,a.ticks.template.disabled=!0,a.slices.template.togglable=!1,a.slices.template.strokeWidth=2,a.slices.template.strokeOpacity=1,a.slices.template.tooltipText="",a.labels.template.text="";var c=a.slices.template.createChild(v.a);return c.isMeasured=!1,c.propertyFields.href="image",c.width=30,c.height=30,c.propertyFields.x="x",c.propertyFields.y="y",c.hoverable=!1,a.slices.template.events.on("hit",function(e){var t=e.target,n=t.dataItem.component.chart,r=t.dataItem.dataContext.actionType;if("show_children"===r){var a=l.current;a&&(a.isActive=!a.isActive)}i(r),n.hide(150),setTimeout(function(){n.dispose()},170)}),r};return Object(a.useEffect)(function(){v.c(g.a);var e,n=v.b("chartdiv",y.b);return n.padding(0,0,0,0),n&&(o.current=new y.a,n.series.push(o.current),o.current.config=r,o.current.nodes.template.togglable=!1,o.current.nodes.template.events.on("hit",function(e){var n=e.target;n.children.values.find(function(e){return e instanceof h.a})||s(n),i(),l.current=n,t(n.dataItem.dataContext)}),o.current.nodes.template.events.on("over",function(t){var n=t.target,r=n.children.values.find(function(e){return e instanceof h.a});!r&&u.current&&u.current.dispose(),e=setTimeout(function(){if(!r){var e=s(n);u.current=e}l.current=n},150)}),o.current.nodes.template.events.on("out",function(){return clearTimeout(e)}),o.current.nodes.template.events.on("doublehit",function(e){var t=e.target.children.values.find(function(e){return e instanceof h.a});t&&t.dispose()})),function(){n&&n.dispose(),clearTimeout(e)}},[r]),Object(a.useEffect)(function(){if(o.current&&n){var e=n;Array.isArray(e)||(e=[e]),o.current.data=e}},[n]),c.a.createElement(C,{id:"chartdiv"})};function T(){var e=Object(d.a)(["\n  height: ","rem;\n  width: ","rem;\n  background-color: ",";\n  color: ",";\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-radius: ","px;\n"]);return T=function(){return e},e}function A(){var e=Object(d.a)(["\n  margin-right: 0.5rem;\n  display: inline-block;\n  min-width: 9rem;\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n"]);return A=function(){return e},e}function D(){var e=Object(d.a)(["\n  background-color: ",";\n  height: ","rem;\n  width: ",";\n  margin-bottom: ",";\n"]);return D=function(){return e},e}var N=p.a.div(D(),function(e){return e.color||"#fff"},function(e){return e.height||3},function(e){var t=e.width;return t?"".concat(t,"rem"):"100%"},function(e){var t=e.marginBottom;return t?"".concat(t,"rem"):"0.5rem"}),R=(p.a.label(A()),Object(p.a)(N)(T(),function(e){return e.height||3},function(e){return e.width||7},function(e){return e.bgColor||"lightgreen"},function(e){return e.color||"inherit"},function(e){return e.radius}));function F(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return F=function(){return e},e}function z(){var e=Object(d.a)(["\n  background-color: #fff;\n  min-width: 80%;\n"]);return z=function(){return e},e}function _(){var e=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  z-index: 1000;\n"]);return _=function(){return e},e}var K=p.a.aside(_()),L=p.a.div(z()),M=p.a.header(F()),B=function(e){var t=e.children,n=e.close;return c.a.createElement(K,null,c.a.createElement(L,null,c.a.createElement(M,null,c.a.createElement(R,{type:"button",onClick:function(){return n()},bgColor:"red",color:"white",width:"2",height:2,radius:200})),t))};function J(){var e=Object(d.a)(["\n  padding: 1rem;\n"]);return J=function(){return e},e}function G(){var e=Object(d.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);return G=function(){return e},e}var W=p.a.ul(G()),q=p.a.li(J());function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(){var e=Object(d.a)([""]);return Q=function(){return e},e}var U=p.a.h2(Q()),V=function(e){var t=e.items,n=e.setSelectedCategory,r=e.selectItem,i=e.entity,l=e.displayedKey,u=e.linkId,s=e.close,d=e.selectedCategory,p=Object(a.useState)([]),m=Object(f.a)(p,2),b=m[0],v=m[1],g=Object(a.useState)(!1),h=Object(f.a)(g,2),y=h[0],O=h[1];return Object(a.useEffect)(function(){v(t.reduce(function(e,t){var n=t.category;return e[n]||(e[n]=[]),e[n].push(t),e},[]))},[t]),c.a.createElement("div",null,Object.keys(b).map(function(e){var t=b[e];return c.a.createElement("div",{key:e},c.a.createElement(U,{onClick:function(){n(e),O(function(e){return!e})}},e),y&&e===d&&c.a.createElement("ul",null,t&&t.map(function(e){return c.a.createElement(q,{key:e.guid,onClick:function(){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({entity:i,name:e[l],value:3e3,link:[u]},e)),s()}},e.name)})))}))};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(){var e=Object(d.a)(["\n  display: flex;\n"]);return Y=function(){return e},e}var Z=p.a.div(Y()),$=function(e){var t=e.items,n=e.selectItem,r=e.close,i=e.linkId,l=e.displayedKey,u=e.entity,s=Object(a.useState)(""),d=Object(f.a)(s,2),p=d[0],m=d[1];return c.a.createElement(Z,null,c.a.createElement(V,{items:t,setSelectedCategory:m,selectItem:n,linkId:i,close:r,entity:u,displayedKey:l,selectedCategory:p}),c.a.createElement(W,null,t.map(function(e){return e&&e.category===p?c.a.createElement(q,{key:e.guid,onClick:function(){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({entity:u,name:e[l],value:3e3,link:[i]},e)),r()}},e[l]):null})))};function ee(){var e=Object(d.a)([""]);return ee=function(){return e},e}var te=p.a.div(ee()),ne=function(e){var t=e.selectItem,n=e.config.context,r=Object(a.useState)(!1),i=Object(f.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(""),p=Object(f.a)(d,2),m=p[0],v=p[1],g=Object(a.useState)(""),h=Object(f.a)(g,2),y=h[0],O=h[1],j=Object(a.useState)([]),E=Object(f.a)(j,2),w=E[0],x=E[1];Object(a.useEffect)(function(){y&&function(){var e=Object(s.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"get",url:"data/".concat(y,".json")});case 3:t=e.sent,n=t.data,x(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[y]);if(!n)return null;var k=n.actions,S=n.id;return 0===k.length?null:c.a.createElement(te,null,c.a.createElement("h2",null,"Actions"),o&&c.a.createElement(B,{close:function(){return l(!1)}},c.a.createElement("label",null,"Search"),c.a.createElement("input",{type:"text"}),c.a.createElement($,{items:w,close:function(){return l(!1)},selectItem:t,displayedKey:m,linkId:S,entity:y})),k&&k.map(function(e,t){return c.a.createElement(R,{key:t,width:20,onClick:function(){!function(e){v(e.displayedKey),O(e.entity),l(!0)}(e)}},e.label)}))};function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ce=c.a.createElement("path",{fill:"currentColor",d:"M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"}),ie=function(e){var t=e.svgRef,n=e.title,r=ae(e,["svgRef","title"]);return c.a.createElement("svg",re({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-circle-left",className:"svg-inline--fa fa-chevron-circle-left fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},r),c.a.createElement("title",null,n),ce)},oe=c.a.forwardRef(function(e,t){return c.a.createElement(ie,re({svgRef:t},e))});n.p;function le(){var e=Object(d.a)(["\n  background-color: lightGray;\n  display: flex;\n  align-items: center;\n"]);return le=function(){return e},e}function ue(){var e=Object(d.a)(["\n  display: block;\n  margin: 0.5rem;\n  cursor: pointer;\n"]);return ue=function(){return e},e}function se(){var e=Object(d.a)(["\n  padding: 1rem;\n"]);return se=function(){return e},e}function fe(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: lightblue;\n  padding: 1rem;\n"]);return fe=function(){return e},e}function de(){var e=Object(d.a)(["\n  grid-area: rightPanel;\n  min-width: 40rem;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n  box-shadow: -4px 0px 4px -3px rgba(219, 219, 219, 1);\n"]);return de=function(){return e},e}var pe=p.a.aside(de()),me=p.a.header(fe()),be=p.a.div(se()),ve=Object(p.a)(oe)(ue()),ge=p.a.div(le()),he=function(e){var t=e.children,n=e.closePanel,r=e.title,a=e.selectNode,i=e.prevSelectedNode;return c.a.createElement(pe,null,c.a.createElement(me,null,c.a.createElement("h1",null,r),c.a.createElement(R,{type:"button",onClick:n,bgColor:"red",color:"white",width:"2",height:2,radius:"200"})),i.current&&c.a.createElement(ge,null,c.a.createElement(ve,{height:"20",width:"20",role:"button",tabIndex:0,onClick:function(){a(i.current)}})),c.a.createElement(be,null,t))};function ye(){var e=Object(d.a)(["\n  display: inline-block;\n  border-radius: 2px;\n  min-width: 3rem;\n  background-color: #17a2b8;\n  color: white;\n"]);return ye=function(){return e},e}function Oe(){var e=Object(d.a)(["\n  padding: 2rem;\n  margin: 1rem;\n  min-width: 20rem;\n  text-align: center;\n  text-transform: capitalize;\n  transition: all 150ms;\n  background-color: ",";\n  box-shadow: 0 0 5px 0px rgba(148, 148, 148, 0.5);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  &:hover {\n    box-shadow: 0 0 10px 0px rgba(148, 148, 148, 0.5);\n  }\n  &:active {\n    box-shadow: 0 0 3px 1px rgba(148, 148, 148, 0.5);\n  }\n"]);return Oe=function(){return e},e}var je=p.a.li(Oe(),function(e){return e.isSelected?"lightBlue":"#fff"}),Ee=p.a.span(ye()),we=function(e){var t=e.itemsLength,n=e.handleClick,r=e.entityName,a=e.selectedEntity;return t?c.a.createElement(je,{isSelected:a===r,onClick:function(){n(r)}},c.a.createElement("h3",null,r),c.a.createElement(Ee,null,t)):null};function xe(){var e=Object(d.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-wrap: wrap;\n"]);return xe=function(){return e},e}var ke=p.a.ul(xe()),Se=function(e){var t=e.lists,n=e.handleClick,r=e.selectedEntity,i=Object(a.useState)({}),o=Object(f.a)(i,2),l=o[0],u=o[1];return Object(a.useEffect)(function(){var e,n;u((e="entity",(n=t)?n.reduce(function(t,n){var r=n[e];return t[r]||(t[r]=[]),t[r].push(n),t},{}):{}))},[t]),0===Object.keys(l).length?c.a.createElement("span",null,"Aucune s\xe9lection"):c.a.createElement(ke,null,Object.keys(l).map(function(e,t){return c.a.createElement(we,{key:t,itemsLength:l[e].length,entityName:e,handleClick:n,selectedEntity:r})}))};function Ce(){var e=Object(d.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(d.a)(["\n  display: flex;\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(d.a)([""]);return Ie=function(){return e},e}function Te(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: lightblue;\n  padding: 1rem;\n"]);return Te=function(){return e},e}function Ae(){var e=Object(d.a)(["\n  padding: 1rem;\n  text-align: center;\n  text-transform: capitalize;\n  transition: all 150ms;\n  // cursor: pointer;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  justify-content: space-between;\n  &:hover {\n    background-color: #e4e4e4;\n  }\n"]);return Ae=function(){return e},e}function De(){var e=Object(d.a)(["\n  display: flex;\n"]);return De=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  flex: 1;\n  min-width: 100%;\n  grid-area: bottomPanel;\n  box-shadow: 0px -2px 5px -1px rgba(153, 153, 153, 1);\n"]);return Ne=function(){return e},e}var Re=p.a.div(Ne()),Fe=p.a.ul(De()),ze=p.a.li(Ae()),_e=p.a.header(Te()),Ke=p.a.div(Ie()),Le=p.a.div(Pe()),Me=p.a.div(Ce()),Be=function(e){var t=e.list,n=(e.selectNodeInformation,e.closePanel),r=(e.setActionType,e.entity),a=(e.actionType,e.actions);console.log(a);var i="https://jmoulis.github.io/hedgeOne";return c.a.createElement(Re,null,c.a.createElement(_e,null,c.a.createElement("h1",null,"D\xe9tail"),c.a.createElement(R,{type:"button",onClick:n,bgColor:"red",color:"white",width:"2",height:2,radius:"200"})),c.a.createElement(Ke,null,t&&c.a.createElement("ul",null,t.map(function(e){return 0===Object.keys(e).length?null:c.a.createElement(ze,{key:e.id},c.a.createElement(Me,{onClick:function(){var t={entity:"serviceFolder",label:"ServiceFolder",tab:!0,tabId:"968fab40-d95b-11sdffe9-8707-8757dcaa404e",type:"Document"};a.setTabsAction(t),a.setActiveTabAction(t);var n="".concat(i,"/").concat(r),c=e.parent_id?"?id=".concat(e.parent_id):"";"".concat(n).concat(c)}},c.a.createElement(Fe,null,Object.keys(e).map(function(t){return"string"!==typeof e[t]?null:c.a.createElement(ze,{key:t},e[t])}))),c.a.createElement(Le,null,c.a.createElement(R,{type:"button",bgColor:"green",color:"white",width:2,height:2,radius:2,onClick:function(){var t="".concat(i,"/").concat(r),n=e.parent_id?"?id=".concat(e.parent_id):"";"".concat(t).concat(n)}}),c.a.createElement(R,{type:"button",bgColor:"red",color:"white",width:2,height:2,radius:2})))}))))};function Je(){var e=Object(d.a)(["\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return Je=function(){return e},e}function Ge(){var e=Object(d.a)(["\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return Ge=function(){return e},e}function We(){var e=Object(d.a)(["\n  display: inline-block;\n  margin-right: 1rem;\n  font-weight: bold;\n"]);return We=function(){return e},e}var qe=p.a.label(We()),He=p.a.li(Ge()),Qe=p.a.span(Je()),Ue=function(e){var t,n=e.item,r=e.selectNode,a=e.setActionType;return c.a.createElement("div",null,c.a.createElement("div",null,(t=n,Object.entries(t).map(function(e,t){var n=e[0],i=e[1];return i?c.a.createElement("div",{key:t},c.a.createElement(qe,null,"".concat(n,":")),"children"===n&&c.a.createElement("ul",null,i.map(function(e,t){return c.a.createElement(He,{key:t,onClick:function(){return r(e)}},e.name)})),"valorisations"===n&&c.a.createElement(c.a.Fragment,null,i.length>0?c.a.createElement(Qe,{onClick:function(){return a("valorisation")}},"Consulter"):null),"string"===typeof i||"number"===typeof i?c.a.createElement("span",null,i):null):null}))))};function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Xe(){var e=Object(d.a)(["\n  grid-area: content;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(d.a)(["\n  grid-area: header;\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(d.a)(["\n  display: flex;\n  margin-top: 2rem;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]);return $e=function(){return e},e}function et(){var e=Object(d.a)(["\n  flex: 1;\n"]);return et=function(){return e},e}function tt(){var e=Object(d.a)(["\n  display: grid;\n  position: relative;\n  height: 100%;\n  grid-area: content;\n  grid-template-areas:\n    'header rightPanel'\n    'content rightPanel'\n    'bottomPanel rightPanel';\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 5rem auto 1fr;\n"]);return tt=function(){return e},e}var nt=p.a.main(tt()),rt=p.a.article(et()),at=p.a.div($e()),ct=p.a.section(Ze()),it=p.a.header(Ye()),ot=p.a.div(Xe());var lt=function(e){var t=e.config,n=e.actions,r=Object(a.useRef)(null),l=Object(a.useState)(null),d=Object(f.a)(l,2),p=d[0],m=d[1],v=Object(a.useState)(""),g=Object(f.a)(v,2),h=g[0],y=g[1],O=Object(a.useState)(!1),j=Object(f.a)(O,2),E=j[0],w=j[1],x=Object(a.useState)(!1),k=Object(f.a)(x,2),S=k[0],C=k[1],P=Object(a.useState)(""),T=Object(f.a)(P,2),A=T[0],D=T[1],N=Object(a.useState)(null),R=Object(f.a)(N,2),F=R[0],z=R[1],_=Object(a.useState)(""),K=Object(f.a)(_,2),L=K[0],M=K[1],B=Object(a.useState)(!0),J=Object(f.a)(B,2),G=J[0],W=J[1],q=Object(a.useState)(null),H=Object(f.a)(q,2),Q=H[0],U=H[1],V=Object(a.useState)([]),X=Object(f.a)(V,2),Y=X[0],Z=X[1],$=function(e){r.current=null,m(e),w(!0)},ee=function(e){r.current?r.current=null:r.current=p,m(e)};return Object(a.useEffect)(function(){W(!0),function(){var e=Object(s.a)(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"get",url:"/data/".concat(t.entity,"Config.json")});case 3:n=e.sent,Z(n.data.series),U(n.data.context),W(!1),D(""),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),W(!1),U(null),Z([]),D(e.t0.message);case 16:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}()()},[]),Object(a.useEffect)(function(){var e=function(){var e=Object(s.a)(u.a.mark(function e(){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"get",url:"/data/".concat(t.entity,".json")});case 3:n=e.sent,r=n.data,z(r),m(r),D(""),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),z(null),D(e.t0.message);case 14:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();Q&&0!==Object.keys(Q).length&&e()},[Q]),Object(a.useEffect)(function(){C(!1)},[h]),G?null:0!==Y.length||G?c.a.createElement(nt,null,A&&c.a.createElement("span",null,A),c.a.createElement(it,null,c.a.createElement("h1",null,Q&&Q.name)),c.a.createElement(ot,null,c.a.createElement(ct,null,c.a.createElement(ne,{selectItem:function(e){return z(function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{children:[].concat(Object(i.a)(t.children),[e])})})},config:{series:Y,context:Q}}),c.a.createElement(rt,null,c.a.createElement(I,{retreiveSelectedNodeInformation:$,data:F,seriesConfig:Y,setActionType:y}))),c.a.createElement(at,null,c.a.createElement("h2",null,"Liste des ".concat("valorisation"===h?"".concat(h,"s"):"enfants"," de ").concat(p&&p.name)),p&&(p.children||p.valorisations)?c.a.createElement(Se,{lists:"valorisation"===h?p.valorisations:p.children,handleClick:function(e){M(e),C(!0)},selectedEntity:L}):c.a.createElement("span",null,"Aucune s\xe9lection"))),E&&c.a.createElement(he,{closePanel:function(){return w(!1)},title:p?p.name:"D\xe9tail",selectNode:ee,prevSelectedNode:r},c.a.createElement(Ue,{item:p,selectNode:ee,prevSelectedNode:r,setActionType:y})),S&&p&&c.a.createElement(Be,{list:"valorisation"===h?p.valorisations&&p.valorisations.filter(function(e){return e.entity===L}):p.children&&p.children.filter(function(e){return e.entity===L}),selectNodeInformation:$,closePanel:function(){return C(!1)},setActionType:y,entity:p.entity,actionType:h,actions:n})):c.a.createElement("span",null,"Impossible de charger la configuration")};t.default=function(e){var t=e.config,n=e.actions,a=Object(r.a)(e,["config","actions"]);return c.a.createElement(lt,Object.assign({},a,{config:t,actions:n}))}}}]);
//# sourceMappingURL=1.cd95dc57.chunk.js.map