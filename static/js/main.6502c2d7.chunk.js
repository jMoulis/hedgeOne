(window["webpackJsonptest-ts"]=window["webpackJsonptest-ts"]||[]).push([[0],{153:function(e,t,n){e.exports=n(180)},179:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),c=n(144),l=n.n(c),i=n(105),u=n(65),o=n.n(u),s=n(85),f=n(32),d=n(24),m=n(78),b=n(25),p=n(149),g=n(125),h=n(86),v=n.n(h),O=n(133),j=n(131),y=n(150),E=n(132);function w(){var e=Object(d.a)(["\n  height: 30rem;\n"]);return w=function(){return e},e}var x=b.a.div(w());var k=function(e){var t=e.retreiveSelectedNode,n=e.datas,c=e.config,l=Object(r.useRef)(),i=Object(r.useRef)(),u=Object(r.useRef)(),o=Object(r.useState)(null),s=Object(f.a)(o,2),d=(s[0],s[1]);return console.log("test"),Object(r.useEffect)(function(){return O.b(y.a),l.current=O.a("chartdiv",E.b),c&&(i.current=new E.a,l.current&&i.current&&(l.current.series.push(i.current),l.current.padding(0,0,0,0),i.current.config=c.series,i.current.nodes.template.togglable=!1,i.current.nodes.template.events.on("hit",function(e){if(!u.current){var n={x:-(e.target.contentWidth+100)/2,y:-(e.target.contentWidth+100)/2};u.current=e.target.createChild(j.a),u.current.isMeasured=!1,u.current.width=e.target.contentWidth+100,u.current.height=e.target.contentWidth+100,u.current.moveTo(n),u.current.toBack(),u.current.data=[{action:"Valorisation",weight:90},{action:"Delete",weight:90},{action:"Enfant",weight:90},{action:"AfterWork",weight:90}];var r=u.current.series.push(new j.b);r.dataFields.value="weight",r.slices.template.strokeWidth=2,r.slices.template.strokeOpacity=1,r.alignLabels=!1,r.labels.template.text="{action}",r.labels.template.bent=!0,r.labels.template.radius=-10,r.labels.template.padding(0,0,0,0),console.log(r.labels.template),r.labels.template.getFillFromObject=!1,r.ticks.template.disabled=!0,r.slices.template.tooltipText="",u.current.isMeasured=!1}d(e.target.dataItem.dataContext),t(e.target.dataItem.dataContext)}),i.current.nodes.template.events.on("drag",function(e){u.current&&u.current.hide(0)}),i.current.nodes.template.events.on("doublehit",function(e){console.log("doubleclick"),console.log(e.target.togglable),e.target.togglable=!0}))),function(){l.current&&l.current.dispose(),u.current&&u.current.dispose()}},[c]),Object(r.useEffect)(function(){if(i.current&&n){var e=n;Array.isArray(e)||(e=[e]),i.current.data=e}},[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{id:"chartdiv"}))};function S(){var e=Object(d.a)(["\n  height: ","rem;\n  width: ","rem;\n  background-color: ",";\n  color: ",";\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-radius: ","px;\n"]);return S=function(){return e},e}function P(){var e=Object(d.a)(["\n  margin-right: 0.5rem;\n  display: inline-block;\n  min-width: 9rem;\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n"]);return P=function(){return e},e}function C(){var e=Object(d.a)(["\n  background-color: ",";\n  height: ","rem;\n  width: ",";\n  margin-bottom: ",";\n"]);return C=function(){return e},e}var D=b.a.div(C(),function(e){return e.color||"#fff"},function(e){return e.height||3},function(e){var t=e.width;return t?"".concat(t,"rem"):"100%"},function(e){var t=e.marginBottom;return t?"".concat(t,"rem"):"0.5rem"}),I=(b.a.label(P()),Object(b.a)(D)(S(),function(e){return e.height||3},function(e){return e.width||7},function(e){return e.bgColor||"lightgreen"},function(e){return e.color||"inherit"},function(e){return e.radius}));function N(){var e=Object(d.a)(["\n  padding: 1rem;\n"]);return N=function(){return e},e}function W(){var e=Object(d.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);return W=function(){return e},e}var A=b.a.ul(W()),B=b.a.li(N());function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return z=function(){return e},e}function R(){var e=Object(d.a)(["\n  background-color: #fff;\n  min-width: 50%;\n"]);return R=function(){return e},e}function K(){var e=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  z-index: 1000;\n"]);return K=function(){return e},e}var L=b.a.aside(K()),J=b.a.div(R()),M=b.a.header(z()),T=function(e){var t=e.children,n=e.close,r=e.entity,c=e.selectItem,l=e.displayedKey,i=e.linkId,u=a.a.useState([]),d=Object(f.a)(u,2),m=d[0],b=d[1];return a.a.useEffect(function(){r&&function(){var e=Object(s.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({method:"get",url:"data/".concat(r,".json")});case 3:t=e.sent,n=t.data,b(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[r]),a.a.createElement(L,null,a.a.createElement(J,null,a.a.createElement(M,null,a.a.createElement(I,{type:"button",onClick:function(){return n()},bgColor:"red",color:"white",width:"2",height:2,radius:200})),a.a.createElement(A,null,m.map(function(e){return e?a.a.createElement(B,{key:e.guid,onClick:function(){c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(g.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({entity:r,name:e[l],value:3e3,link:[i]},e)),n()}},e[l]):null})),t))};function H(){var e=Object(d.a)([""]);return H=function(){return e},e}var U=b.a.div(H()),V=function(e){var t=e.selectItem,n=e.config.context,c=Object(r.useState)(!1),l=Object(f.a)(c,2),i=l[0],u=l[1],o=Object(r.useState)(""),s=Object(f.a)(o,2),d=s[0],m=s[1],b=Object(r.useState)(""),p=Object(f.a)(b,2),g=p[0],h=p[1];if(!n)return null;var v=n.actions,O=n.id;return a.a.createElement(U,null,a.a.createElement("h2",null,"Actions"),i&&a.a.createElement(T,{close:function(){return u(!1)},entity:g,selectItem:t,displayedKey:d,linkId:O}),v&&v.map(function(e,t){return a.a.createElement(I,{key:t,width:20,onClick:function(){!function(e){m(e.displayedKey),h(e.entity),u(!0)}(e)}},e.label)}))};function $(){var e=Object(d.a)(["\n  padding: 1rem;\n"]);return $=function(){return e},e}function _(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  background-color: lightblue;\n  padding: 1rem;\n"]);return _=function(){return e},e}function q(){var e=Object(d.a)(["\n  grid-area: rightPanel;\n  // position: absolute;\n  min-width: 40rem;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n  box-shadow: -4px 0px 4px -3px rgba(219, 219, 219, 1);\n"]);return q=function(){return e},e}var G=b.a.aside(q()),Q=b.a.header(_()),X=b.a.div($()),Y=function(e){var t=e.children,n=e.closePanel,r=e.title;return a.a.createElement(G,null,a.a.createElement(Q,null,a.a.createElement("h1",null,r),a.a.createElement(I,{type:"button",onClick:n,bgColor:"red",color:"white",width:"2",height:2,radius:"200"})),a.a.createElement(X,null,t))};function Z(){var e=Object(d.a)(["\n  display: inline-block;\n  border-radius: 2px;\n  min-width: 3rem;\n  background-color: #17a2b8;\n  color: white;\n"]);return Z=function(){return e},e}function ee(){var e=Object(d.a)(["\n  padding: 2rem;\n  margin: 1rem;\n  min-width: 20rem;\n  text-align: center;\n  text-transform: capitalize;\n  transition: all 150ms;\n  background-color: ",";\n  box-shadow: 0 0 5px 0px rgba(148, 148, 148, 0.5);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  &:hover {\n    box-shadow: 0 0 10px 0px rgba(148, 148, 148, 0.5);\n  }\n  &:active {\n    box-shadow: 0 0 3px 1px rgba(148, 148, 148, 0.5);\n  }\n"]);return ee=function(){return e},e}var te=b.a.li(ee(),function(e){return e.isSelected?"lightBlue":"#fff"}),ne=b.a.span(Z()),re=function(e){var t=e.itemsLength,n=e.handleClick,r=e.entityName,c=e.selectedEntity;return t?a.a.createElement(te,{isSelected:c===r,onClick:function(){n(r)}},a.a.createElement("h3",null,r),a.a.createElement(ne,null,t)):null};function ae(){var e=Object(d.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-wrap: wrap;\n"]);return ae=function(){return e},e}var ce=b.a.ul(ae()),le=function(e){var t=e.lists,n=e.handleClick,c=e.selectedEntity,l=Object(r.useState)({}),i=Object(f.a)(l,2),u=i[0],o=i[1];return Object(r.useEffect)(function(){var e;t&&o((e="entity",t.reduce(function(t,n){var r=n[e];return t[r]||(t[r]=[]),t[r].push(n),t},{})))},[t]),0===Object.keys(u).length?a.a.createElement("span",null,"No item selected"):a.a.createElement(ce,null,Object.keys(u).map(function(e,t){return a.a.createElement(re,{key:t,itemsLength:u[e].length,entityName:e,handleClick:n,selectedEntity:c})}))};function ie(){var e=Object(d.a)(["\n  display: flex;\n"]);return ie=function(){return e},e}function ue(){var e=Object(d.a)([""]);return ue=function(){return e},e}function oe(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: lightblue;\n  padding: 1rem;\n"]);return oe=function(){return e},e}function se(){var e=Object(d.a)(["\n  padding: 1rem;\n  min-width: 20rem;\n  text-align: center;\n  text-transform: capitalize;\n  transition: all 150ms;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  &:hover {\n    background-color: #e4e4e4;\n  }\n"]);return se=function(){return e},e}function fe(){var e=Object(d.a)([""]);return fe=function(){return e},e}function de(){var e=Object(d.a)(["\n  flex: 1;\n  min-width: 100%;\n  grid-area: bottomPanel;\n  box-shadow: 0px -2px 5px -1px rgba(153, 153, 153, 1);\n"]);return de=function(){return e},e}var me=b.a.div(de()),be=b.a.ul(fe()),pe=b.a.li(se()),ge=b.a.header(oe()),he=b.a.div(ue()),ve=b.a.div(ie()),Oe=function(e){var t=e.list,n=e.handleSelect,r=e.closePanel;return a.a.createElement(me,null,a.a.createElement(ge,null,a.a.createElement("h1",null,"D\xe9tail"),a.a.createElement(I,{type:"button",onClick:r,bgColor:"red",color:"white",width:"2",height:2,radius:"200"})),a.a.createElement(he,null,t&&a.a.createElement(be,null,t.map(function(e){return 0===Object.keys(e).length?null:a.a.createElement(pe,{key:e._id,onClick:function(){return n(e)}},a.a.createElement("div",null,e.name),a.a.createElement(ve,null,a.a.createElement(I,{type:"button",bgColor:"blue",color:"white",width:2,height:2,radius:2}),a.a.createElement(I,{type:"button",bgColor:"red",color:"white",width:2,height:2,radius:2})))}))))};function je(){var e=Object(d.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return je=function(){return e},e}function ye(){var e=Object(d.a)(["\n  display: inline-block;\n  margin-right: 1rem;\n  font-weight: bold;\n"]);return ye=function(){return e},e}var Ee=b.a.label(ye()),we=b.a.li(je()),xe=function(e){var t,n=e.item,r=e.selectNode,c=e.prevSelectedNode;return a.a.createElement("div",null,c.current&&a.a.createElement("span",{onClick:function(){r(c.current)}},"<-"),a.a.createElement("div",null,(t=n,Object.entries(t).map(function(e,t){var n=e[0],c=e[1];return c?a.a.createElement("div",{key:t},a.a.createElement(Ee,null,"".concat(n,":")),"children"===n&&a.a.createElement("ul",null,c.map(function(e,t){return a.a.createElement(we,{key:t,onClick:function(){r(e)}},e.name)})),"string"===typeof c||"number"===typeof c?a.a.createElement("span",null,c):null):null}))))};function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Se(){var e=Object(d.a)(["\n  grid-area: content;\n"]);return Se=function(){return e},e}function Pe(){var e=Object(d.a)(["\n  grid-area: header;\n"]);return Pe=function(){return e},e}function Ce(){var e=Object(d.a)(["\n  display: flex;\n  margin-top: 2rem;\n"]);return Ce=function(){return e},e}function De(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]);return De=function(){return e},e}function Ie(){var e=Object(d.a)(["\n  flex: 1;\n"]);return Ie=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  display: grid;\n  position: relative;\n  height: 100%;\n  grid-area: content;\n  grid-template-areas:\n    'header rightPanel'\n    'content rightPanel'\n    'bottomPanel rightPanel';\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 5rem auto 1fr;\n"]);return Ne=function(){return e},e}var We=b.a.main(Ne()),Ae=b.a.article(Ie()),Be=b.a.div(De()),Fe=b.a.section(Ce()),ze=b.a.header(Pe()),Re=b.a.div(Se());var Ke=function(e){var t=e.match,n={series:[],context:{}},c=Object(r.useRef)(null),l=Object(r.useState)(null),i=Object(f.a)(l,2),u=i[0],d=i[1],m=Object(r.useState)(!1),b=Object(f.a)(m,2),h=b[0],O=b[1],j=Object(r.useState)(!1),y=Object(f.a)(j,2),E=y[0],w=y[1],x=Object(r.useState)(""),S=Object(f.a)(x,2),P=S[0],C=S[1],D=Object(r.useState)(null),I=Object(f.a)(D,2),N=I[0],W=I[1],A=Object(r.useState)(),B=Object(f.a)(A,2),F=B[0],z=B[1],R=Object(r.useState)(!0),K=Object(f.a)(R,2),L=K[0],J=K[1],M=Object(r.useState)(n),T=Object(f.a)(M,2),H=T[0],U=T[1],$=function(e){c.current=null,d(e),O(!0)};return Object(r.useEffect)(function(){J(!0),function(){var e=Object(s.a)(o.a.mark(function e(){var r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({method:"get",url:"data/".concat(t.params.entity,"Config.json")});case 3:r=e.sent,a=r.data,U(a),J(!1),C(""),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),J(!1),U(n),C(e.t0.message);case 15:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}()()},[t.params.entity]),Object(r.useEffect)(function(){var e=function(){var e=Object(s.a)(o.a.mark(function e(){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({method:"get",url:"data/".concat(t.params.entity,".json")});case 3:n=e.sent,r=n.data,W(r),C(""),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),W(null),C(e.t0.message);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();0!==Object.keys(H.context).length&&e()},[H,t.params.entity]),L?null:0!==Object.keys(H.context).length||L?a.a.createElement(We,null,P&&a.a.createElement("span",null,P),a.a.createElement(ze,null,a.a.createElement("h1",null,H.context.name)),a.a.createElement(Re,null,a.a.createElement(Fe,null,a.a.createElement(V,{selectItem:function(e){W(function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(n,!0).forEach(function(t){Object(g.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{children:[].concat(Object(p.a)(t.children),[e])})})},config:H}),a.a.createElement(Ae,null,a.a.createElement(k,{retreiveSelectedNode:$,datas:N,config:H}))),a.a.createElement(Be,null,a.a.createElement("h2",null,"S\xe9lection d\xe9tail"),N&&N.children.length>0?a.a.createElement(le,{lists:N.children,handleClick:function(e){z(e),w(!0)},selectedEntity:F}):a.a.createElement("span",null,"Aucune s\xe9lection"))),h&&a.a.createElement(Y,{closePanel:function(){return O(!1)},title:u?u.name:"D\xe9tail"},a.a.createElement(xe,{item:u,selectNode:function(e){c.current?c.current=null:c.current=u,d(e)},prevSelectedNode:c})),E&&a.a.createElement(Oe,{list:N.children.filter(function(e){return e.entity===F}),handleSelect:$,closePanel:function(){return w(!1)}})):a.a.createElement("span",null,"Impossible de charger la configuration")};function Le(){var e=Object(d.a)(["\n  grid-area: leftPanel;\n  background-color: lavender;\n"]);return Le=function(){return e},e}var Je=b.a.aside(Le()),Me=function(e){var t=e.menus;return t?a.a.createElement(Je,null,a.a.createElement("ul",null,t.map(function(e){return a.a.createElement("li",{key:e.label},a.a.createElement(i.b,{to:e.link},e.label))}))):null};function Te(){var e=Object(d.a)(["\n  padding: 1rem;\n"]);return Te=function(){return e},e}function He(){var e=Object(d.a)(["\n  list-style: none;\n  display: flex;\n"]);return He=function(){return e},e}function Ue(){var e=Object(d.a)(["\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  background-color: lightgray;\n"]);return Ue=function(){return e},e}var Ve=b.a.header(Ue()),$e=b.a.ul(He()),_e=b.a.li(Te()),qe=function(){return a.a.createElement(Ve,null,a.a.createElement("div",null,"logo"),a.a.createElement($e,null,a.a.createElement(_e,null,"link1"),a.a.createElement(_e,null,"link2"),a.a.createElement(_e,null,"link3")))};function Ge(){var e=Object(d.a)(["\n  grid-area: content;\n"]);return Ge=function(){return e},e}function Qe(){var e=Object(d.a)(["\n  display: grid;\n  position: relative;\n  height: 100%;\n  grid-template-areas:\n    'header header'\n    'leftPanel content';\n  grid-template-columns: 20rem auto;\n  grid-template-rows: 5rem auto;\n"]);return Qe=function(){return e},e}var Xe=b.a.main(Qe()),Ye=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"HomePage"),a.a.createElement("p",null,"Un dashboard de ouf"))},Ze=b.a.div(Ge()),et=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=(t[0],t[1]),c=Object(r.useState)(!0),l=Object(f.a)(c,2),i=l[0],u=l[1],d=Object(r.useState)(null),b=Object(f.a)(d,2),p=b[0],g=b[1];return Object(r.useEffect)(function(){u(!0),function(){var e=Object(s.a)(o.a.mark(function e(){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({method:"get",url:"data/config.json"});case 3:t=e.sent,r=t.data,g(r.menus),u(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),u(!1),n(e.t0.message);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}()()},[]),a.a.createElement(Xe,null,a.a.createElement(qe,null),i?a.a.createElement("span",null,"Chargement en cours"):a.a.createElement(a.a.Fragment,null,a.a.createElement(Me,{menus:p}),a.a.createElement(Ze,null,a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:Ye}),a.a.createElement(m.a,{path:"/:entity",component:Ke})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(179);l.a.render(a.a.createElement(i.a,{basename:"/hedgeOne"},a.a.createElement(et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[153,1,3]]]);
//# sourceMappingURL=main.6502c2d7.chunk.js.map