"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{713:function(e,t,n){n.d(t,{I2:function(){return u},oO:function(){return p},vw:function(){return o},wS:function(){return i},y:function(){return l}});var r=n(861),a=n(757),c=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";s.Z.defaults.params={api_key:"e3ec3e6b497e3ef8943e45c84058b3f3"};var u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/credits"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/reviews"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},11:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(781),i=n(791),o=n(713),l="Home_header__1Nkvr",p=n(184);function f(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wS)();case 3:t=e.sent,n=t.results,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:l,children:"Trending Today"}),n&&(0,p.jsx)(u.O,{movies:n})]})}},781:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(689),a=n(87),c={link:"MovieListItem_link__LGsEq",title:"MovieListItem_title__Q3l1Y"},s=n(184),u=function(e){var t=e.id,n=e.title,u=(0,r.TH)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("li",{className:c.li,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:u},className:c.link,children:(0,s.jsx)("h3",{className:c.title,children:n})})})})},i="MovieList_list__yjDCC",o=function(e){var t=e.movies;return(0,s.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,n=e.original_title;return(0,s.jsx)(u,{title:n,id:t},t)}))})}}}]);
//# sourceMappingURL=433.886967c1.chunk.js.map