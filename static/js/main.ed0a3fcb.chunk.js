(this["webpackJsonpe-commerce-website"]=this["webpackJsonpe-commerce-website"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(10),c(5)),o=c(3),u=(c(11),c(0)),l=function(e){var t=e.image,c=e.title;return Object(u.jsxs)("div",{className:"product-box",children:[Object(u.jsx)("div",{className:"product-image",children:Object(u.jsx)("img",{className:"image",src:t,alt:c})}),Object(u.jsx)("h4",{className:"product-title",children:c})]})},j="https://fakestoreapi.com/products",d=[];var h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(o.a)(r,2),h=a[0],b=a[1];Object(n.useEffect)((function(){f(j)}),[]);var f=function(e){b(""),fetch(e).then((function(e){return e.json()})).then((function(e){s(e),d=e}))};Object(n.useEffect)((function(){var e=h.toLowerCase().replace(/\s/g,"");p(e)}),[h]);var p=function(e){var t=d.filter((function(t){return t.title.toLowerCase().replace(/\s/g,"").includes(e.toLowerCase())}));s(t)};return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h2",{onClick:function(){return f(j)},children:"Shopify"}),Object(u.jsxs)("span",{className:"search-bar",children:[Object(u.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(u.jsx)("input",{type:"text",className:"search-input",placeholder:"Search",value:h,onChange:function(e){e.preventDefault(),b(e.target.value)}})]})]}),Object(u.jsx)("div",{className:"product-container",children:c.length>0&&c.map((function(e){return Object(u.jsx)(l,Object(i.a)({},e),e.id)}))})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.ed0a3fcb.chunk.js.map