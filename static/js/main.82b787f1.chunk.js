(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a.n(c),n=a(4),i=(a(14),a(15),a(16),a(1)),b=a(8),r=a.n(b),j=a(2),l=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Home"}),Object(j.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Tabs"})]})})})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(e){var t=e.tab,a=t.id,c=t.title;return Object(j.jsx)("li",{"data-cy":"Tab",className:"is-active",children:Object(j.jsx)(n.b,{to:"/tabs/".concat(a),children:c})})},h=function(){var e,t=Object(i.g)().tabId;return Object(j.jsx)("div",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:d.map((function(e){return Object(j.jsx)(o,{tab:e},e.id)}))})}),Object(j.jsxs)("div",{className:"block","data-cy":"TabContent",children:[t&&(null===(e=d.find((function(e){return e.id===t})))||void 0===e?void 0:e.content),!t&&"Please select a tab"]})]})})},x=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)("h1",{className:"title",children:"Home page"})}),Object(j.jsxs)(i.a,{path:"tabs",children:[Object(j.jsx)(i.a,{index:!0,element:Object(j.jsx)(h,{})}),Object(j.jsx)(i.a,{path:":tabId/*",element:Object(j.jsx)(h,{})})]}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})]})]})};s.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.82b787f1.chunk.js.map