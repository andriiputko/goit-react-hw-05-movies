"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{713:function(e,r,t){t.d(r,{I2:function(){return s},vw:function(){return i},wS:function(){return o}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";c.Z.defaults.params={api_key:"e3ec3e6b497e3ef8943e45c84058b3f3"};var s=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?query=".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day");case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},97:function(e,r,t){t.d(r,{O:function(){return c}});var n=t(87),a=t(184),u=function(e){var r=e.id,t=e.title;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(r),children:(0,a.jsx)("h3",{children:t})})})})},c=function(e){var r=e.movies;return(0,a.jsx)("ul",{children:r.map((function(e){var r=e.id,t=e.original_title;return(0,a.jsx)(u,{title:t,id:r},r)}))})}},115:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(87),o=t(705),i=t(596),l=t(791),f=t(713),p=t(97),v=t(184);function h(){var e,r=(0,l.useState)([]),t=(0,a.Z)(r,2),u=t[0],h=t[1],d=(0,s.lr)(),m=(0,a.Z)(d,2),x=m[0],g=m[1],w=null!==(e=x.get("query"))&&void 0!==e?e:"";return(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.I2)(r);case 3:if((t=e.sent).results.length){e.next=6;break}throw new Error("No results found");case 6:h(t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),i.Am.error("No results found",{duration:3e3});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}();""!==w&&e(w)}),[w]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.J9,{initialValues:{query:""},onSubmit:function(e,r){var t=e.query,n=r.resetForm;g({query:t}),n()},children:(0,v.jsxs)(o.l0,{children:[(0,v.jsx)(o.gN,{name:"query",type:"text",placeholder:"Search movies"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})}),Object.keys(u).length>0&&(0,v.jsx)(p.O,{movies:u})]})}}}]);
//# sourceMappingURL=115.db1043b4.chunk.js.map