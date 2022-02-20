(this["webpackJsonpreact-router-quotes"]=this["webpackJsonpreact-router-quotes"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__3XAEp",logo:"MainNavigation_logo__3Y_IA",nav:"MainNavigation_nav__1mu-S",active:"MainNavigation_active__YND2p"}},14:function(e,t,n){"use strict";var r=n(26),c=n.n(r),s=n(0);t.a=function(){return Object(s.jsx)("div",{className:c.a.spinner})}},18:function(e,t,n){e.exports={list:"QuoteList_list__IAfua",sorting:"QuoteList_sorting__3g7e3"}},19:function(e,t,n){"use strict";var r=n(11),c=n(9),s=n(21),a=n(4),o=n.n(a),u=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),a=Object(s.a)(n,2),j=a[0],l=a[1],d=Object(u.useCallback)(function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:d},j)}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return f}));var r=n(11),c=n(9),s=n(4),a=n.n(s),o="https://react-24348-default-rtdb.firebaseio.com";function u(){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(a.a.mark((function e(){var t,n,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in c=[],n)u=Object(r.a)({id:s},n[s]),c.push(u);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return s=Object(r.a)({id:t},c),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(a.a.mark((function e(t){var n,c,s,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(u in s=[],c)i=Object(r.a)({id:u},c[u]),s.push(i);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},23:function(e,t,n){e.exports={item:"QuoteItem_item__tIDls"}},26:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2mWxi"}},27:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__1GYup"}},28:function(e,t,n){e.exports={main:"Layout_main__19jsX"}},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),s=n(8),a=(n(33),n(1)),o=n.n(a),u=n(2),i=n(19),j=n(20),l=n(23),d=n.n(l),p=n(0),h=function(e){return Object(p.jsxs)("li",{className:d.a.item,children:[Object(p.jsxs)("figure",{children:[Object(p.jsx)("blockquote",{children:Object(p.jsx)("p",{children:e.text})}),Object(p.jsx)("figcaption",{children:e.author})]}),Object(p.jsx)(s.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},b=n(18),f=n.n(b),x=function(e){var t,n,r=Object(u.h)(),c=Object(u.i)(),s="asc"===new URLSearchParams(c.search).get("sort"),o=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("div",{className:f.a.sorting,children:Object(p.jsxs)("button",{onClick:function(){r.push({pathname:c.pathname,search:"?sort=".concat(s?"desc":"asc")})},children:["Sort ",s?"Descending":"Ascending"]})}),Object(p.jsx)("ul",{className:f.a.list,children:o.map((function(e){return Object(p.jsx)(h,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},O=n(14),m=n(27),v=n.n(m),g=function(){return Object(p.jsxs)("div",{className:v.a.noquotes,children:[Object(p.jsx)("p",{children:"No quotes found!"}),Object(p.jsx)(s.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},w=function(){var e=Object(i.a)(j.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(a.useEffect)((function(){t()}),[t]),"pending"===n?Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(O.a,{})}):c?Object(p.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(p.jsx)(x,{quotes:r}):Object(p.jsx)(g,{})},_=n(28),q=n.n(_),y=n(12),N=n.n(y),k=function(){return Object(p.jsxs)("header",{className:N.a.header,children:[Object(p.jsx)("div",{className:N.a.logo,children:"Great Quotes"}),Object(p.jsx)("nav",{className:N.a.nav,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:"/quotes",activeClassName:N.a.active,children:"All quotes"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:"/new-quote",activeClassName:N.a.active,children:"Add a quote"})})]})})]})},S=function(e){return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(k,{}),Object(p.jsx)("main",{className:q.a.main,children:e.children})]})},C=o.a.lazy((function(){return n.e(4).then(n.bind(null,54))})),E=o.a.lazy((function(){return n.e(3).then(n.bind(null,53))})),R=o.a.lazy((function(){return n.e(5).then(n.bind(null,52))})),D=function(){return Object(p.jsx)(S,{children:Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(O.a,{})}),children:Object(p.jsxs)(u.e,{children:[Object(p.jsx)(u.c,{path:"/",exact:!0,children:Object(p.jsx)(u.b,{to:"/quotes"})}),Object(p.jsx)(u.c,{path:"/quotes",exact:!0,children:Object(p.jsx)(w,{})}),Object(p.jsx)(u.c,{path:"/quotes/:quoteId",children:Object(p.jsx)(E,{})}),Object(p.jsx)(u.c,{path:"/new-quote",children:Object(p.jsx)(C,{})}),Object(p.jsx)(u.c,{path:"*",children:Object(p.jsx)(R,{})})]})})})};c.a.render(Object(p.jsx)(s.a,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5b3744e9.chunk.js.map