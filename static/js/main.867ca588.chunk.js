(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{22:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var c,r,o,i,a,d,u,s,b,l,j,x,O,p,f,h,g,v,m,k=t(1),C=t.n(k),y=t(6),w=t.n(y),S=(t(22),function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),o(n),i(n)}))}),E=t(4),P={light:{color:"black",backgroundColor:"white"},dark:{color:"white",backgroundColor:"#222222"}},F=C.a.createContext([P.dark,function(){}]),B=t(10),D=t.n(B),T=t(13),I=t(2),J=t(3),L=t(0),z=J.a.div(c||(c=Object(I.a)(["\n    height: 100%;\n    padding: 36px;\n    color: ",";\n    background-color: ",";\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.backgroundColor})),A=t(17),R=J.a.div(r||(r=Object(I.a)(["\npadding: 12px 64px;\n"]))),G=function(n){var e=n.children,t=n.title;return Object(L.jsxs)(R,{children:[Object(L.jsx)("h4",{children:t}),e]})},H=J.a.div(o||(o=Object(I.a)(["\n  padding: 8px 16px;\n\n  &:nth-child(n+2) {\n    border-top: 1px solid #D9DBDE;\n  }\n"]))),K=function(n){var e=n.langs;return Object(L.jsx)(G,{title:"\u53d6\u308a\u6271\u3044\u8a00\u8a9e\u30ea\u30b9\u30c8",children:Object(L.jsx)("div",{children:e.map((function(n,e){return Object(L.jsx)(H,{children:n},e)}))})})},M=J.a.button(i||(i=Object(I.a)(["\nborder: none;\nborder-radius: 3px;\nbackground-color: #2196F3;\npadding: 8px 16px;\nmin-width: 100px;\nfont-size: 14px;\nfont-weight: bold;\ncolor: white;\ncursor: pointer;\n"]))),q=document.getElementById("modal-root"),N=J.a.div(a||(a=Object(I.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, .5);\n"]))),Q=function(n){return w.a.createPortal(Object(L.jsx)(N,{children:n.children}),q)},U=J.a.div(d||(d=Object(I.a)(["\n    width: 240px;\n    border-radius: 10px;\n    padding: 24px 36px;\n    color: ",";\n    background-color: ",";\n    border: ",";\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme===P.dark?"2px solid #fff":"none"})),V=J.a.div(u||(u=Object(I.a)(["\n    display: flex;\n    justify-content: space-around;\n    margin-top: 24px;\n"]))),W=function(n){var e=n.confirm,t=n.cancel,c=Object(k.useContext)(F),r=Object(E.a)(c,1)[0];return Object(L.jsx)(Q,{children:Object(L.jsxs)(U,{theme:r,children:[Object(L.jsx)("div",{children:"\u672c\u5f53\u306b\u4f5c\u6210\u3057\u307e\u3059\u304b\uff1f"}),Object(L.jsxs)(V,{children:[Object(L.jsx)(M,{onClick:t,children:"Cancel"}),Object(L.jsx)(M,{onClick:e,children:"OK"})]})]})})},X=J.a.div(s||(s=Object(I.a)(["\n    position: relative;\n    display: inline-flex;\n    margin-left: 12px;\n"]))),Y=J.a.div(b||(b=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    border: 1px solid #757575;\n    width: 24px;\n    height: 24px;\n    cursor: pointer;\n"]))),Z=J.a.div(l||(l=Object(I.a)(["\n    position: absolute;\n    left: 40%;\n    bottom: 12px;\n    display: flex;\n    justify-content: center;\n    border: 1px solid black;\n    border-radius: 8px;\n    padding: 8px;\n    width: 140px;\n"]))),$=function(){var n=Object(k.useState)(!1),e=Object(E.a)(n,2),t=e[0],c=e[1],r=Object(k.useRef)(null);return Object(k.useEffect)((function(){r.current&&r.current.focus()})),Object(L.jsxs)(X,{children:[Object(L.jsx)(Y,{onClick:function(){return c(!0)},children:"\uff1f"}),t&&Object(L.jsx)(Z,{ref:r,onBlur:function(){return c(!1)},tabIndex:0,children:"\u8a00\u8a9e\u306e\u540d\u524d\u3067\u3059\u3002"})]})},_=J.a.label(j||(j=Object(I.a)(["\ndisplay: flex;\ncolor: #757575;\nfont-size: 14px;\nfont-weight bold;\n"]))),nn=J.a.input(x||(x=Object(I.a)(["\nborder-radius: 4px;\npadding: 4px 8px;\nborder: 1px solid black;\n"]))),en=J.a.div(O||(O=Object(I.a)(["\nmargin-top: 24px;\n"]))),tn=Object(J.a)(M)(p||(p=Object(I.a)(["\nwidth:120px;\n"]))),cn=function(n){var e=n.onAddLang,t=Object(k.useState)(""),c=Object(E.a)(t,2),r=c[0],o=c[1],i=Object(k.useState)(!1),a=Object(E.a)(i,2),d=a[0],u=a[1];return Object(L.jsxs)(G,{title:"\u65b0\u3057\u3044\u8a00\u8a9e\u306e\u8ffd\u52a0",children:[Object(L.jsxs)("form",{onSubmit:function(n){n.preventDefault(),u(!0)},children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(_,{children:"\u8a00\u8a9e"}),Object(L.jsx)(nn,{type:"text",value:r,onChange:function(n){return o(n.target.value)}}),Object(L.jsx)($,{})]}),Object(L.jsx)(en,{children:Object(L.jsx)(tn,{children:"\u8ffd\u52a0"})})]}),d&&Object(L.jsx)(W,{confirm:function(){return e(r)},cancel:function(){return u(!1)}})]})},rn=J.a.header(f||(f=Object(I.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding: 24px 64px 0;\nborder-bottom: 1px solid #E0E0E0;\n"]))),on=J.a.ul(h||(h=Object(I.a)(["\ndisplay: flex;\nmargin: 0;\npadding: 0;\n"]))),an=J.a.li(g||(g=Object(I.a)(["\nlist-style: none;\npadding: 4px 12px;\ncursor: pointer;\nborder-bottom: ",";\n"])),(function(n){return n.forcused?"2px solid #F44336":"none"})),dn=Object(J.a)(M)(v||(v=Object(I.a)(["\n    padding: 0;\n    margin-bottom: 4px;\n"]))),un=function(n){var e=n.tab,t=n.setTab,c=Object(k.useContext)(F),r=Object(E.a)(c,2),o=(r[0],r[1]);return Object(L.jsxs)(rn,{children:[Object(L.jsxs)(on,{children:[Object(L.jsx)(an,{forcused:"list"===e,onClick:function(){return t("list")},children:"\u30ea\u30b9\u30c8"}),Object(L.jsx)(an,{forcused:"form"===e,onClick:function(){return t("form")},children:"\u30d5\u30a9\u30fc\u30e0"})]}),Object(L.jsx)(dn,{onClick:o,children:"\u30c6\u30fc\u30de\u5909\u66f4"})]})},sn=J.a.div(m||(m=Object(I.a)(["\n  height: 100%;\n  color:",";\n  background-color: ",";\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.backgroundColor}));var bn,ln,jn=["Javascript","C++","Ruby","Java","PHP","Go"],xn=(bn=function(n){var e=n.data,t=Object(k.useState)("list"),c=Object(E.a)(t,2),r=c[0],o=c[1],i=Object(k.useState)(e),a=Object(E.a)(i,2),d=a[0],u=a[1],s=Object(k.useContext)(F),b=Object(E.a)(s,1)[0];return Object(L.jsxs)(sn,{theme:b,children:[Object(L.jsx)(un,{tab:r,setTab:o}),"list"===r?Object(L.jsx)(K,{langs:d}):Object(L.jsx)(cn,{onAddLang:function(n){u([].concat(Object(A.a)(d),[n])),o("list")}})]})},ln=function(){return new Promise((function(n){setTimeout((function(){n(jn)}),1e3)}))},function(){var n=Object(k.useState)(null),e=Object(E.a)(n,2),t=e[0],c=e[1],r=Object(k.useContext)(F),o=Object(E.a)(r,1)[0];Object(k.useEffect)((function(){i()}),[]);var i=function(){var n=Object(T.a)(D.a.mark((function n(){var e;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ln();case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=Object(L.jsx)(z,{theme:o,children:"\u30ed\u30fc\u30c9\u4e2d..."});return t?Object(L.jsx)(bn,{data:t}):a}),On=function(){var n=Object(k.useState)(P.dark),e=Object(E.a)(n,2),t=e[0],c=e[1];return Object(L.jsx)(F.Provider,{value:[t,function(){c(t===P.dark?P.light:P.dark)}],children:Object(L.jsx)(xn,{})})};w.a.render(Object(L.jsx)(C.a.StrictMode,{children:Object(L.jsx)(On,{})}),document.getElementById("root")),S()}},[[27,1,2]]]);
//# sourceMappingURL=main.867ca588.chunk.js.map