(this.webpackJsonpwiki=this.webpackJsonpwiki||[]).push([[0],{11:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var r=s(1),c=s.n(r),n=s(5),a=s.n(n),i=(s(11),s(2)),l=s(4),o=s.n(l),u=s(6),j=s(0),d=function(e){var t=e.search,s=e.setSearch,c=e.results,n=e.setResults,a=e.searchInfo,l=e.setSearchInfo,d=Object(r.useState)(!1),h=Object(i.a)(d,2),b=h[0],m=h[1],p=function(){var e=Object(u.a)(o.a.mark((function e(s){var r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),""!==t){e.next=3;break}return e.abrupt("return");case 3:return r="https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=".concat(t),m(!0),e.next=7,fetch(r);case 7:return c=e.sent,console.log(c),e.next=11,c.json();case 11:a=e.sent,console.log(a.query),n(a.query.search),l(a.query.searchinfo),m(!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"form from--wrapper",children:[Object(j.jsx)("div",{className:"media from__media",children:Object(j.jsx)("h1",{className:"media__brandname",children:"Wikipedia"})}),Object(j.jsx)("div",{children:Object(j.jsx)("form",{className:"search search__form",onSubmit:p,children:Object(j.jsx)("input",{value:t,onChange:function(e){s(e.target.value)},className:"search__input",placeholder:"Please enter your search term..."})})}),a.totalhits?Object(j.jsxs)("span",{className:"quantity quantity--wrapper",children:["Search Results:",Object(j.jsx)("span",{className:"quantity__numbers",children:a.totalhits})]}):"",b?Object(j.jsxs)("div",{className:"lds-facebook",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}):Object(j.jsx)("div",{className:"result form__result",children:c.map((function(e,t){var s="https://en.wikipedia.org/?curid=".concat(e.pageid);return Object(j.jsxs)("div",{className:"result__wrapper",children:[Object(j.jsx)("h3",{className:"result__title",children:e.title}),Object(j.jsx)("span",{className:"result__content",dangerouslySetInnerHTML:{__html:e.snippet}}),Object(j.jsx)("a",{href:s,className:"result__link",target:"_blank",children:"Read More"})]},t)}))})]})})},h=function(e){var t=e.scrollTop;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"progressMainWrapper",children:Object(j.jsx)("div",{className:"progressMainStyle",style:{width:"".concat(t,"%")}})})})},b=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(r.useState)([]),a=Object(i.a)(n,2),l=a[0],o=a[1],u=Object(r.useState)({}),b=Object(i.a)(u,2),m=b[0],p=b[1],O=Object(r.useState)(0),f=Object(i.a)(O,2),x=f[0],v=f[1],_=function(){var e=document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;v(e/t*100)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",_),function(){return window.removeEventListener("scroll",_)}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{scrollTop:x}),Object(j.jsx)(d,{search:s,setSearch:c,results:l,setResults:o,searchInfo:m,setSearchInfo:p})]})};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0afaab61.chunk.js.map