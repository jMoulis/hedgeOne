(window["webpackJsonptest-ts"]=window["webpackJsonptest-ts"]||[]).push([[0],{155:function(e,t,n){e.exports=n.p+"static/media/list.b39fb484.svg"},156:function(e,t,n){e.exports=n.p+"static/media/network.c2163f38.svg"},157:function(e,t,n){e.exports=n.p+"static/media/valorisation.ec937b18.svg"},162:function(e,t,n){e.exports=n(202)},201:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),c=n(114),i=n.n(c),o=n(110),l=n(159),u=n(67),s=n.n(u),f=n(88),d=n(33),m=n(21),p=n(81),b=n(22),v=n(89),h=n.n(v),g=n(113),y=n(100),O=n(153),j=n.n(O),E=n(136),w=n(160),x=n(103),k=n(140),S=n(155),P=n.n(S),C=n(156),T=n.n(C),I=n(157),D=n.n(I);function A(){var e=Object(m.a)(["\n  height: 30rem;\n"]);return A=function(){return e},e}var N=b.a.div(A()),_=function(e){return[{actionType:"valorisation",weight:90,image:D.a,x:e/2,y:-e/2},{actionType:"show_children",weight:90,image:P.a,x:-15,y:e/2},{actionType:"network",weight:90,image:T.a,x:-e/2-30,y:-e/2}]};var R=function(e){var t=e.retreiveSelectedNodeInformation,n=e.data,c=e.config,i=e.setActionType,o=Object(r.useRef)(null),l=Object(r.useRef)(null),u=Object(r.useRef)(null),s=function(e){var t=e.bbox.height,n={x:-(t+t+45)/2,y:-(t+t+45)/2},r=e.createChild(x.a);r.isMeasured=!1,r.width=t+t+45,r.height=t+t+45,r.moveTo(n),r.isMeasured=!1,r.toBack(),r.data=_(t);var a=r.series.push(new x.b);a.dataFields.value="weight",a.hiddenState.properties.endAngle=-90,a.defaultState.transitionDuration=300,a.ticks.template.disabled=!0,a.slices.template.togglable=!1,a.slices.template.strokeWidth=2,a.slices.template.strokeOpacity=1,a.slices.template.tooltipText="",a.labels.template.text="";var c=a.slices.template.createChild(E.a);return c.isMeasured=!1,c.propertyFields.href="image",c.width=30,c.height=30,c.propertyFields.x="x",c.propertyFields.y="y",c.hoverable=!1,a.slices.template.events.on("hit",function(e){var t=e.target,n=t.dataItem.component.chart,r=t.dataItem.dataContext.actionType;if("show_children"===r){var a=l.current;a&&(a.isActive=!a.isActive)}i(r),n.hide(150),setTimeout(function(){n.dispose()},170)}),r};return Object(r.useEffect)(function(){E.c(w.a);var e,n=E.b("chartdiv",k.b);return n.padding(0,0,0,0),c&&n&&(o.current=new k.a,n.series.push(o.current),o.current.config=c.series,o.current.nodes.template.togglable=!1,o.current.nodes.template.events.on("hit",function(e){var n=e.target;n.children.values.find(function(e){return e instanceof x.a})||s(n),i(),l.current=n,t(n.dataItem.dataContext)}),o.current.nodes.template.events.on("over",function(t){var n=t.target,r=n.children.values.find(function(e){return e instanceof x.a});!r&&u.current&&u.current.dispose(),e=setTimeout(function(){if(!r){var e=s(n);u.current=e}l.current=n},150)}),o.current.nodes.template.events.on("out",function(){return clearTimeout(e)}),o.current.nodes.template.events.on("doublehit",function(e){var t=e.target.children.values.find(function(e){return e instanceof x.a});t&&t.dispose()})),function(){n&&n.dispose(),clearTimeout(e)}},[c]),Object(r.useEffect)(function(){if(o.current&&n){var e=n;Array.isArray(e)||(e=[e]),o.current.data=e}},[n]),a.a.createElement(N,{id:"chartdiv"})};function z(){var e=Object(m.a)(["\n  height: ","rem;\n  width: ","rem;\n  background-color: ",";\n  color: ",";\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-radius: ","px;\n"]);return z=function(){return e},e}function B(){var e=Object(m.a)(["\n  margin-right: 0.5rem;\n  display: inline-block;\n  min-width: 9rem;\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n"]);return B=function(){return e},e}function F(){var e=Object(m.a)(["\n  background-color: ",";\n  height: ","rem;\n  width: ",";\n  margin-bottom: ",";\n"]);return F=function(){return e},e}var L=b.a.div(F(),function(e){return e.color||"#fff"},function(e){return e.height||3},function(e){var t=e.width;return t?"".concat(t,"rem"):"100%"},function(e){var t=e.marginBottom;return t?"".concat(t,"rem"):"0.5rem"}),K=(b.a.label(B()),Object(b.a)(L)(z(),function(e){return e.height||3},function(e){return e.width||7},function(e){return e.bgColor||"lightgreen"},function(e){return e.color||"inherit"},function(e){return e.radius}));function M(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return M=function(){return e},e}function W(){var e=Object(m.a)(["\n  background-color: #fff;\n  min-width: 80%;\n"]);return W=function(){return e},e}function J(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  z-index: 1000;\n"]);return J=function(){return e},e}var G=b.a.aside(J()),H=b.a.div(W()),U=b.a.header(M()),$=function(e){var t=e.children,n=e.close;return a.a.createElement(G,null,a.a.createElement(H,null,a.a.createElement(U,null,a.a.createElement(K,{type:"button",onClick:function(){return n()},bgColor:"red",color:"white",width:"2",height:2,radius:200})),t))};function q(){var e=Object(m.a)(["\n  padding: 1rem;\n"]);return q=function(){return e},e}function Q(){var e=Object(m.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);return Q=function(){return e},e}var V=b.a.ul(Q()),X=b.a.li(q());function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(){var e=Object(m.a)([""]);return Z=function(){return e},e}var ee=b.a.h2(Z()),te=function(e){var t=e.items,n=e.setSelectedCategory,c=e.selectItem,i=e.entity,o=e.displayedKey,l=e.linkId,u=e.close,s=e.selectedCategory,f=Object(r.useState)([]),m=Object(d.a)(f,2),p=m[0],b=m[1],v=Object(r.useState)(!1),h=Object(d.a)(v,2),g=h[0],O=h[1];return Object(r.useEffect)(function(){b(t.reduce(function(e,t){var n=t.category;return e[n]||(e[n]=[]),e[n].push(t),e},[]))},[t]),a.a.createElement("div",null,Object.keys(p).map(function(e){var t=p[e];return a.a.createElement("div",{key:e},a.a.createElement(ee,{onClick:function(){n(e),O(function(e){return!e})}},e),g&&e===s&&a.a.createElement("ul",null,t&&t.map(function(e){return a.a.createElement(X,{key:e.guid,onClick:function(){c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({entity:i,name:e[o],value:3e3,link:[l]},e)),u()}},e.name)})))}))};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function re(){var e=Object(m.a)(["\n  display: flex;\n"]);return re=function(){return e},e}var ae=b.a.div(re()),ce=function(e){var t=e.items,n=e.selectItem,c=e.close,i=e.linkId,o=e.displayedKey,l=e.entity,u=Object(r.useState)(""),s=Object(d.a)(u,2),f=s[0],m=s[1];return a.a.createElement(ae,null,a.a.createElement(te,{items:t,setSelectedCategory:m,selectItem:n,linkId:i,close:c,entity:l,displayedKey:o,selectedCategory:f}),a.a.createElement(V,null,t.map(function(e){return e&&e.category===f?a.a.createElement(X,{key:e.guid,onClick:function(){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({entity:l,name:e[o],value:3e3,link:[i]},e)),c()}},e[o]):null})))};function ie(){var e=Object(m.a)([""]);return ie=function(){return e},e}var oe=b.a.div(ie()),le=function(e){var t=e.selectItem,n=e.config.context,c=Object(r.useState)(!1),i=Object(d.a)(c,2),o=i[0],l=i[1],u=Object(r.useState)(""),m=Object(d.a)(u,2),p=m[0],b=m[1],v=Object(r.useState)(""),g=Object(d.a)(v,2),y=g[0],O=g[1],j=Object(r.useState)([]),E=Object(d.a)(j,2),w=E[0],x=E[1];Object(r.useEffect)(function(){y&&function(){var e=Object(f.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({method:"get",url:"data/".concat(y,".json")});case 3:t=e.sent,n=t.data,x(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[y]);if(!n)return null;var k=n.actions,S=n.id;return 0===k.length?null:a.a.createElement(oe,null,a.a.createElement("h2",null,"Actions"),o&&a.a.createElement($,{close:function(){return l(!1)}},a.a.createElement("label",null,"Search"),a.a.createElement("input",{type:"text"}),a.a.createElement(ce,{items:w,close:function(){return l(!1)},selectItem:t,displayedKey:p,linkId:S,entity:y})),k&&k.map(function(e,t){return a.a.createElement(K,{key:t,width:20,onClick:function(){!function(e){b(e.displayedKey),O(e.entity),l(!0)}(e)}},e.label)}))};function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var fe=a.a.createElement("path",{fill:"currentColor",d:"M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"}),de=function(e){var t=e.svgRef,n=e.title,r=se(e,["svgRef","title"]);return a.a.createElement("svg",ue({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-circle-left",className:"svg-inline--fa fa-chevron-circle-left fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},r),a.a.createElement("title",null,n),fe)},me=a.a.forwardRef(function(e,t){return a.a.createElement(de,ue({svgRef:t},e))});n.p;function pe(){var e=Object(m.a)(["\n  background-color: lightGray;\n  display: flex;\n  align-items: center;\n"]);return pe=function(){return e},e}function be(){var e=Object(m.a)(["\n  display: block;\n  margin: 0.5rem;\n  cursor: pointer;\n"]);return be=function(){return e},e}function ve(){var e=Object(m.a)(["\n  padding: 1rem;\n"]);return ve=function(){return e},e}function he(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: lightblue;\n  padding: 1rem;\n"]);return he=function(){return e},e}function ge(){var e=Object(m.a)(["\n  grid-area: rightPanel;\n  min-width: 40rem;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n  box-shadow: -4px 0px 4px -3px rgba(219, 219, 219, 1);\n"]);return ge=function(){return e},e}var ye=b.a.aside(ge()),Oe=b.a.header(he()),je=b.a.div(ve()),Ee=Object(b.a)(me)(be()),we=b.a.div(pe()),xe=function(e){var t=e.children,n=e.closePanel,r=e.title,c=e.selectNode,i=e.prevSelectedNode;return a.a.createElement(ye,null,a.a.createElement(Oe,null,a.a.createElement("h1",null,r),a.a.createElement(K,{type:"button",onClick:n,bgColor:"red",color:"white",width:"2",height:2,radius:"200"})),i.current&&a.a.createElement(we,null,a.a.createElement(Ee,{height:"20",width:"20",role:"button",tabIndex:0,onClick:function(){c(i.current)}})),a.a.createElement(je,null,t))};function ke(){var e=Object(m.a)(["\n  display: inline-block;\n  border-radius: 2px;\n  min-width: 3rem;\n  background-color: #17a2b8;\n  color: white;\n"]);return ke=function(){return e},e}function Se(){var e=Object(m.a)(["\n  padding: 2rem;\n  margin: 1rem;\n  min-width: 20rem;\n  text-align: center;\n  text-transform: capitalize;\n  transition: all 150ms;\n  background-color: ",";\n  box-shadow: 0 0 5px 0px rgba(148, 148, 148, 0.5);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  &:hover {\n    box-shadow: 0 0 10px 0px rgba(148, 148, 148, 0.5);\n  }\n  &:active {\n    box-shadow: 0 0 3px 1px rgba(148, 148, 148, 0.5);\n  }\n"]);return Se=function(){return e},e}var Pe=b.a.li(Se(),function(e){return e.isSelected?"lightBlue":"#fff"}),Ce=b.a.span(ke()),Te=function(e){var t=e.itemsLength,n=e.handleClick,r=e.entityName,c=e.selectedEntity;return t?a.a.createElement(Pe,{isSelected:c===r,onClick:function(){n(r)}},a.a.createElement("h3",null,r),a.a.createElement(Ce,null,t)):null};function Ie(){var e=Object(m.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-wrap: wrap;\n"]);return Ie=function(){return e},e}var De=b.a.ul(Ie()),Ae=function(e){var t=e.lists,n=e.handleClick,c=e.selectedEntity,i=Object(r.useState)({}),o=Object(d.a)(i,2),l=o[0],u=o[1];return Object(r.useEffect)(function(){var e,n;u((e="entity",(n=t)?n.reduce(function(t,n){var r=n[e];return t[r]||(t[r]=[]),t[r].push(n),t},{}):{}))},[t]),0===Object.keys(l).length?a.a.createElement("span",null,"Aucune s\xe9lection"):a.a.createElement(De,null,Object.keys(l).map(function(e,t){return a.a.createElement(Te,{key:t,itemsLength:l[e].length,entityName:e,handleClick:n,selectedEntity:c})}))};function Ne(){var e=Object(m.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n"]);return Ne=function(){return e},e}function _e(){var e=Object(m.a)(["\n  display: flex;\n"]);return _e=function(){return e},e}function Re(){var e=Object(m.a)([""]);return Re=function(){return e},e}function ze(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: lightblue;\n  padding: 1rem;\n"]);return ze=function(){return e},e}function Be(){var e=Object(m.a)(["\n  padding: 1rem;\n  text-align: center;\n  text-transform: capitalize;\n  transition: all 150ms;\n  // cursor: pointer;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  justify-content: space-between;\n  &:hover {\n    background-color: #e4e4e4;\n  }\n"]);return Be=function(){return e},e}function Fe(){var e=Object(m.a)(["\n  display: flex;\n"]);return Fe=function(){return e},e}function Le(){var e=Object(m.a)(["\n  flex: 1;\n  min-width: 100%;\n  grid-area: bottomPanel;\n  box-shadow: 0px -2px 5px -1px rgba(153, 153, 153, 1);\n"]);return Le=function(){return e},e}var Ke=b.a.div(Le()),Me=b.a.ul(Fe()),We=b.a.li(Be()),Je=b.a.header(ze()),Ge=b.a.div(Re()),He=b.a.div(_e()),Ue=b.a.div(Ne()),$e=function(e){var t=e.list,n=(e.selectNodeInformation,e.closePanel),r=(e.setActionType,e.setTabs),c=e.entity;e.actionType;return a.a.createElement(Ke,null,a.a.createElement(Je,null,a.a.createElement("h1",null,"D\xe9tail"),a.a.createElement(K,{type:"button",onClick:n,bgColor:"red",color:"white",width:"2",height:2,radius:"200"})),a.a.createElement(Ge,null,t&&a.a.createElement("ul",null,t.map(function(e){return 0===Object.keys(e).length?null:a.a.createElement(We,{key:e.id},a.a.createElement(Ue,{onClick:function(){var t="http://localhost:3000/".concat(c),n=e.parent_id?"?id=".concat(e.parent_id):"",a="".concat(t).concat(n);r(function(e){return[].concat(Object(g.a)(e),[window.open("".concat(a),"_blank")])})}},a.a.createElement(Me,null,Object.keys(e).map(function(t){return"string"!==typeof e[t]?null:a.a.createElement(We,{key:t},e[t])}))),a.a.createElement(He,null,a.a.createElement(K,{type:"button",bgColor:"green",color:"white",width:2,height:2,radius:2,onClick:function(){var t="".concat("https://jmoulis.github.io/hedgeOne","/").concat(c),n=e.parent_id?"?id=".concat(e.parent_id):"",a="".concat(t).concat(n);r(function(e){return[].concat(Object(g.a)(e),[window.open("".concat(a),"_blank")])})}}),a.a.createElement(K,{type:"button",bgColor:"red",color:"white",width:2,height:2,radius:2})))}))))};function qe(){var e=Object(m.a)(["\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return qe=function(){return e},e}function Qe(){var e=Object(m.a)(["\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(m.a)(["\n  display: inline-block;\n  margin-right: 1rem;\n  font-weight: bold;\n"]);return Ve=function(){return e},e}var Xe=b.a.label(Ve()),Ye=b.a.li(Qe()),Ze=b.a.span(qe()),et=function(e){var t,n=e.item,r=e.selectNode,c=e.setActionType;return a.a.createElement("div",null,a.a.createElement("div",null,(t=n,Object.entries(t).map(function(e,t){var n=e[0],i=e[1];return i?a.a.createElement("div",{key:t},a.a.createElement(Xe,null,"".concat(n,":")),"children"===n&&a.a.createElement("ul",null,i.map(function(e,t){return a.a.createElement(Ye,{key:t,onClick:function(){return r(e)}},e.name)})),"valorisations"===n&&a.a.createElement(a.a.Fragment,null,i.length>0?a.a.createElement(Ze,{onClick:function(){return c("valorisation")}},"Consulter"):null),"string"===typeof i||"number"===typeof i?a.a.createElement("span",null,i):null):null}))))};function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function nt(){var e=Object(m.a)(["\n  grid-area: content;\n"]);return nt=function(){return e},e}function rt(){var e=Object(m.a)(["\n  grid-area: header;\n"]);return rt=function(){return e},e}function at(){var e=Object(m.a)(["\n  display: flex;\n  margin-top: 2rem;\n"]);return at=function(){return e},e}function ct(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]);return ct=function(){return e},e}function it(){var e=Object(m.a)(["\n  flex: 1;\n"]);return it=function(){return e},e}function ot(){var e=Object(m.a)(["\n  display: grid;\n  position: relative;\n  height: 100%;\n  grid-area: content;\n  grid-template-areas:\n    'header rightPanel'\n    'content rightPanel'\n    'bottomPanel rightPanel';\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 5rem auto 1fr;\n"]);return ot=function(){return e},e}var lt=b.a.main(ot()),ut=b.a.article(it()),st=b.a.div(ct()),ft=b.a.section(at()),dt=b.a.header(rt()),mt=b.a.div(nt());var pt=function(e){var t=e.match,n=e.location,c={series:[],context:{}},i=Object(r.useRef)(null),o=Object(r.useState)(null),l=Object(d.a)(o,2),u=l[0],m=l[1],p=Object(r.useState)(""),b=Object(d.a)(p,2),v=b[0],O=b[1],E=Object(r.useState)(!1),w=Object(d.a)(E,2),x=w[0],k=w[1],S=Object(r.useState)(!1),P=Object(d.a)(S,2),C=P[0],T=P[1],I=Object(r.useState)(""),D=Object(d.a)(I,2),A=D[0],N=D[1],_=Object(r.useState)(null),z=Object(d.a)(_,2),B=z[0],F=z[1],L=Object(r.useState)(""),K=Object(d.a)(L,2),M=K[0],W=K[1],J=Object(r.useState)(!0),G=Object(d.a)(J,2),H=G[0],U=G[1],$=Object(r.useState)(c),q=Object(d.a)($,2),Q=q[0],V=q[1],X=Object(r.useState)([]),Y=Object(d.a)(X,2),Z=(Y[0],Y[1]),ee=function(e){i.current=null,m(e),k(!0)},te=function(e){i.current?i.current=null:i.current=u,m(e)};return Object(r.useEffect)(function(){U(!0),function(){var e=Object(f.a)(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({method:"get",url:"data/".concat(t.params.entity,"Config.json")});case 3:n=e.sent,V(n.data),U(!1),N(""),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),U(!1),V(c),N(e.t0.message);case 14:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}()()},[t.params.entity]),Object(r.useEffect)(function(){var e=function(){var e=Object(f.a)(s.a.mark(function e(){var r,a,c,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=j.a.parse(n.search),a=r.id,e.next=4,h()({method:"get",url:"data/".concat(t.params.entity,".json")});case 4:c=e.sent,i=c.data,a&&(i=Array.isArray(c.data)?c.data.find(function(e){return e.id===a}):c.data),F(i),m(i),N(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),F(null),N(e.t0.message);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(){return e.apply(this,arguments)}}();0!==Object.keys(Q.context).length&&e()},[Q,t.params.entity]),Object(r.useEffect)(function(){T(!1)},[v]),H?null:0!==Object.keys(Q.context).length||H?a.a.createElement(lt,null,A&&a.a.createElement("span",null,A),a.a.createElement(dt,null,a.a.createElement("h1",null,Q.context.name)),a.a.createElement(mt,null,a.a.createElement(ft,null,a.a.createElement(le,{selectItem:function(e){return F(function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tt(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{children:[].concat(Object(g.a)(t.children),[e])})})},config:Q}),a.a.createElement(ut,null,a.a.createElement(R,{retreiveSelectedNodeInformation:ee,data:B,config:Q,setActionType:O}))),a.a.createElement(st,null,a.a.createElement("h2",null,"Liste des ".concat("valorisation"===v?"".concat(v,"s"):"enfants"," de ").concat(u&&u.name)),u&&(u.children||u.valorisations)?a.a.createElement(Ae,{lists:"valorisation"===v?u.valorisations:u.children,handleClick:function(e){W(e),T(!0)},selectedEntity:M}):a.a.createElement("span",null,"Aucune s\xe9lection"))),x&&a.a.createElement(xe,{closePanel:function(){return k(!1)},title:u?u.name:"D\xe9tail",selectNode:te,prevSelectedNode:i},a.a.createElement(et,{item:u,selectNode:te,prevSelectedNode:i,setActionType:O})),C&&u&&a.a.createElement($e,{list:"valorisation"===v?u.valorisations&&u.valorisations.filter(function(e){return e.entity===M}):u.children&&u.children.filter(function(e){return e.entity===M}),selectNodeInformation:ee,closePanel:function(){return T(!1)},setActionType:O,setTabs:Z,entity:u.entity,actionType:v})):a.a.createElement("span",null,"Impossible de charger la configuration")};function bt(){var e=Object(m.a)(["\n  grid-area: leftPanel;\n  background-color: lavender;\n"]);return bt=function(){return e},e}var vt=b.a.aside(bt()),ht=function(e){var t=e.menus;return t?a.a.createElement(vt,null,a.a.createElement("ul",null,t.map(function(e){return a.a.createElement("li",{key:e.label},a.a.createElement(o.b,{to:e.link},e.label))}))):null};function gt(){var e=Object(m.a)(["\n  padding: 1rem;\n"]);return gt=function(){return e},e}function yt(){var e=Object(m.a)(["\n  list-style: none;\n  display: flex;\n"]);return yt=function(){return e},e}function Ot(){var e=Object(m.a)(["\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  background-color: lightgray;\n"]);return Ot=function(){return e},e}var jt=b.a.header(Ot()),Et=b.a.ul(yt()),wt=b.a.li(gt()),xt=function(){return a.a.createElement(jt,null,a.a.createElement("div",null,"logo"),a.a.createElement(Et,null,a.a.createElement(wt,null,"link1"),a.a.createElement(wt,null,"link2"),a.a.createElement(wt,null,"link3")))};function kt(){var e=Object(m.a)(["\n  grid-area: content;\n"]);return kt=function(){return e},e}function St(){var e=Object(m.a)(["\n  display: grid;\n  position: relative;\n  height: 100%;\n  grid-template-areas:\n    'header header'\n    'leftPanel content';\n  grid-template-columns: 20rem auto;\n  grid-template-rows: 5rem auto;\n"]);return St=function(){return e},e}var Pt=b.a.main(St()),Ct=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"HomePage"),a.a.createElement("p",null,"Un dashboard de ouf"))},Tt=b.a.div(kt()),It=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!0),o=Object(d.a)(i,2),l=o[0],u=o[1],m=Object(r.useState)(null),b=Object(d.a)(m,2),v=b[0],g=b[1];return Object(r.useEffect)(function(){u(!0),function(){var e=Object(f.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({method:"get",url:"data/config.json"});case 3:t=e.sent,n=t.data,g(n.menus),u(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),u(!1),c(e.t0.message);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}()()},[]),a.a.createElement(Pt,null,n&&a.a.createElement("span",null,n),a.a.createElement(xt,null),l?a.a.createElement("span",null,"Chargement en cours"):a.a.createElement(a.a.Fragment,null,a.a.createElement(ht,{menus:v}),a.a.createElement(Tt,null,a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/",component:Ct}),a.a.createElement(p.a,{path:"/:entity",component:pt})))))},Dt=n(106),At=(n(200),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_NODE":default:return e}}),Nt=Object(Dt.createStore)(At);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(201);i.a.render(a.a.createElement(l.a,{store:Nt},a.a.createElement(o.a,{basename:"/hedgeOne"},a.a.createElement(It,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,3]]]);
//# sourceMappingURL=main.234f5028.chunk.js.map