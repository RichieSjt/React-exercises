(this["webpackJsonpreact-router-quotes"]=this["webpackJsonpreact-router-quotes"]||[]).push([[4],{45:function(t,e,c){t.exports={card:"Card_card__2uLWc"}},46:function(t,e,c){t.exports={form:"QuoteForm_form__2uoWY",loading:"QuoteForm_loading__2t9pC",control:"QuoteForm_control__2zRQq",actions:"QuoteForm_actions__URTv9"}},54:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c(2),r=c(21),s=c(45),a=c.n(s),u=c(0),i=function(t){return Object(u.jsx)("div",{className:a.a.card,children:t.children})},l=c(14),d=c(46),j=c.n(d),b=function(t){var e=Object(n.useState)(!1),c=Object(r.a)(e,2),s=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(o.a,{when:s,message:function(t){return"Are you sure you want to go to ".concat(t.pathname,"? All your entered data will be lost!")}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{className:j.a.form,onSubmit:function(e){e.preventDefault();var c=d.current.value,n=b.current.value;t.onAddQuote({author:c,text:n})},onFocus:function(){a(!0)},children:[t.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(19),f=c(20);e.default=function(){var t=Object(h.a)(f.b),e=t.sendRequest,c=t.status,r=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(t){e(t)}})}}}]);
//# sourceMappingURL=4.824bc78e.chunk.js.map