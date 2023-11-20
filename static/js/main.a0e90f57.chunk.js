(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),r=c(7),s=(c(31),c(32),c(4)),a=c(3),j=c(0),l=c(8),i=c.n(l),d=(c(33),c(1)),b=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{className:"title",children:"Home Page"})})},h=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})},o=(c(35),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t=e.person;return Object(d.jsx)(r.b,{to:"/people/".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},O=function(e){var t=e.peopleList,c=e.loadingError,n=e.loading,r=Object(a.q)().slug;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("div",{className:"box table-container",children:[n&&Object(d.jsx)(o,{}),c&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===t.length&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsxs)("tbody",{children:[t.map((function(e){var c=t.find((function(t){return t.name===e.fatherName})),n=t.find((function(t){return t.name===e.motherName}));return Object(d.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":r===e.slug}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(x,{person:e})}),Object(d.jsx)("td",{children:e.sex}),Object(d.jsx)("td",{children:e.born}),Object(d.jsx)("td",{children:e.died}),Object(d.jsx)("td",{children:n?Object(d.jsx)(x,{person:n}):e.motherName||"-"}),Object(d.jsx)("td",{children:c?Object(d.jsx)(x,{person:c}):e.fatherName||"-"})]},e.name)})),Object(d.jsxs)("tr",{"data-cy":"person",children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/jan-van-brussel-1714",children:"Jan van Brussel"})}),Object(d.jsx)("td",{children:"m"}),Object(d.jsx)("td",{children:"1714"}),Object(d.jsx)("td",{children:"1748"}),Object(d.jsx)("td",{children:"Joanna van Rooten"}),Object(d.jsx)("td",{children:"Jacobus van Brussel"})]}),Object(d.jsxs)("tr",{"data-cy":"person",children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/philibert-haverbeke-1907",children:"Philibert Haverbeke"})}),Object(d.jsx)("td",{children:"m"}),Object(d.jsx)("td",{children:"1907"}),Object(d.jsx)("td",{children:"1997"}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{className:"has-text-danger",href:"#/people/emma-de-milliano-1876",children:"Emma de Milliano"})}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/emile-haverbeke-1877",children:"Emile Haverbeke"})})]}),Object(d.jsxs)("tr",{"data-cy":"person",className:"has-background-warning",children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/jan-frans-van-brussel-1761",children:"Jan Frans van Brussel"})}),Object(d.jsx)("td",{children:"m"}),Object(d.jsx)("td",{children:"1761"}),Object(d.jsx)("td",{children:"1833"}),Object(d.jsx)("td",{children:"-"}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/jacobus-bernardus-van-brussel-1736",children:"Jacobus Bernardus van Brussel"})})]}),Object(d.jsxs)("tr",{"data-cy":"person",children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{className:"has-text-danger",href:"#/people/lievijne-jans-1542",children:"Lievijne Jans"})}),Object(d.jsx)("td",{children:"f"}),Object(d.jsx)("td",{children:"1542"}),Object(d.jsx)("td",{children:"1582"}),Object(d.jsx)("td",{children:"-"}),Object(d.jsx)("td",{children:"-"})]}),Object(d.jsxs)("tr",{"data-cy":"person",children:[Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/bernardus-de-causmaecker-1721",children:"Bernardus de Causmaecker"})}),Object(d.jsx)("td",{children:"m"}),Object(d.jsx)("td",{children:"1721"}),Object(d.jsx)("td",{children:"1789"}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{className:"has-text-danger",href:"#/people/livina-haverbeke-1692",children:"Livina Haverbeke"})}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"#/people/lieven-de-causmaecker-1696",children:"Lieven de Causmaecker"})})]})]})]})]})})]})},p=function(){var e=Object(j.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],l=Object(j.useState)(""),o=Object(s.a)(l,2),x=o[0],p=o[1],m=Object(j.useState)(!1),u=Object(s.a)(m,2),v=u[0],f=u[1];return Object(j.useEffect)((function(){f(!0),fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(){return p("Something went wrong")})).finally((function(){return f(!1)}))}),[]),Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(r.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(d.jsx)(r.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(a.d,{children:[Object(d.jsx)(a.b,{path:"*",element:Object(d.jsx)(h,{})}),Object(d.jsx)(a.b,{path:"/",element:Object(d.jsx)(b,{})}),Object(d.jsx)(a.b,{path:"/home",element:Object(d.jsx)(a.a,{to:"/",replace:!0})}),Object(d.jsx)(a.b,{path:"people",element:Object(d.jsx)(O,{peopleList:c,loadingError:x,loading:v}),children:Object(d.jsx)(a.b,{path:":slug",element:Object(d.jsx)(O,{peopleList:c,loadingError:x,loading:v})})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(r.a,{children:Object(d.jsx)(p,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a0e90f57.chunk.js.map