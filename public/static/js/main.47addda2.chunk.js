(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[10],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(109);const a=e=>e.auth,s=Object(r.a)([a],(e=>e));Object(r.a)([a],(e=>e.current)),Object(r.a)([a],(e=>e.isLoggedIn))},223:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(19),s=n.n(a),c=n(18),o=n(94),i=n(232),l=n(230),u=n(96),d=n(6);var j=e=>{let{component:t,...n}=e;return Object(d.jsx)(c.b,{...n,render:e=>u.c.get()?Object(d.jsx)(c.a,{to:"/"}):Object(d.jsx)(l.a.div,{initial:{x:200},animate:{x:0},exit:{scale:0},children:Object(d.jsx)(t,{...e})})})},h=n(228);var b=()=>Object(d.jsx)("div",{className:"center",children:Object(d.jsx)(h.a,{size:"large"})});const O=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,368)))),g=Object(r.lazy)((()=>n.e(7).then(n.bind(null,358))));function p(){const e=Object(c.g)();return Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)(b,{}),children:Object(d.jsx)(i.a,{exitBeforeEnter:!0,initial:!1,children:Object(d.jsxs)(c.d,{location:e,children:[Object(d.jsx)(j,{path:"/",component:O,render:()=>Object(d.jsx)(c.a,{to:"/login"})}),Object(d.jsx)(j,{component:O,path:"/login",exact:!0}),Object(d.jsx)(c.b,{path:"*",component:g,render:()=>Object(d.jsx)(c.a,{to:"/notfound"})})]},e.pathname)})})}var m=e=>{let{component:t,...n}=e;const r={type:"spring",damping:20,stiffness:100};return Object(d.jsx)(c.b,{...n,render:e=>u.c.get()?Object(d.jsx)(l.a.div,{transition:r,initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:-20,opacity:0},children:Object(d.jsx)(t,{...e})}):Object(d.jsx)(c.a,{to:"/login"})})};const x=Object(r.lazy)((()=>n.e(4).then(n.bind(null,359)))),v=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,369)))),E=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(13),n.e(3)]).then(n.bind(null,370)))),S=Object(r.lazy)((()=>n.e(9).then(n.bind(null,360)))),f=Object(r.lazy)((()=>n.e(8).then(n.bind(null,361)))),_=Object(r.lazy)((()=>n.e(6).then(n.bind(null,362)))),y=Object(r.lazy)((()=>n.e(7).then(n.bind(null,358))));function T(){const e=Object(c.g)();return Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)(b,{}),children:Object(d.jsx)(i.a,{exitBeforeEnter:!0,initial:!1,children:Object(d.jsxs)(c.d,{location:e,children:[Object(d.jsx)(m,{component:x,path:"/",exact:!0}),Object(d.jsx)(m,{component:f,path:"/reports",exact:!0}),Object(d.jsx)(m,{component:E,path:"/apartments",exact:!0}),Object(d.jsx)(m,{component:v,path:"/managers",exact:!0}),Object(d.jsx)(m,{component:S,path:"/reservations",exact:!0}),Object(d.jsx)(m,{component:_,path:"/logout",exact:!0}),Object(d.jsx)(j,{path:"/login",render:()=>Object(d.jsx)(c.a,{to:"/"})}),Object(d.jsx)(c.b,{path:"*",component:y,render:()=>Object(d.jsx)(c.a,{to:"/notfound"})})]},e.pathname)})})}var w=n(229),R=n(36),C=n(227);const{Sider:A}=w.a,{SubMenu:I}=C.a;var U=function(){const e=Object(c.g)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(A,{style:{zIndex:1e3,background:"white",width:"190px"},children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:Object(d.jsx)("path",{d:"M15 15L11.2286 11.2286M11.2286 11.2286C12.3129 10.1443 12.9835 8.64635 12.9835 6.99177C12.9835 3.68261 10.3009 1 6.99177 1C3.68261 1 1 3.68261 1 6.99177C1 10.3009 3.68261 12.9835 6.99177 12.9835C8.64635 12.9835 10.1443 12.3129 11.2286 11.2286Z",stroke:"black"})})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)(C.a,{defaultSelectedKeys:[e.pathname],mode:"inline",style:{height:"100%",borderRight:0},children:[Object(d.jsx)(C.a.Item,{children:Object(d.jsx)(R.a,{to:"/",children:"Home"})},"/home"),Object(d.jsx)(C.a.Item,{children:Object(d.jsx)(R.a,{to:"/reports",children:"Reports"})},"/reports"),Object(d.jsx)(C.a.Item,{children:Object(d.jsx)(R.a,{to:"/apartments",children:"Apartments"})},"/apartments"),Object(d.jsx)(C.a.Item,{children:Object(d.jsx)(R.a,{to:"/managers",children:"Managers"})},"/managers"),Object(d.jsxs)(C.a.Item,{children:[Object(d.jsx)(R.a,{to:"/reservations"}),"Reservations"]},"/reservations"),Object(d.jsx)(C.a.Item,{children:Object(d.jsx)("hr",{})},"hr133"),Object(d.jsxs)(C.a.Item,{children:[Object(d.jsx)(R.a,{to:"edit-site"}),"Edit the site"]},"/edit-site")]})]})})},L=n(146);function D(){const{isLoggedIn:e}=Object(o.c)(L.a);return!1===e?Object(d.jsx)(w.a,{style:{minHeight:"100vh"},children:Object(d.jsx)(p,{})}):Object(d.jsxs)(w.a,{style:{minHeight:"100vh"},children:[Object(d.jsx)(U,{}),Object(d.jsx)(w.a,{style:{minHeight:"100vh"},children:Object(d.jsx)(T,{})})]})}var k=n(90),N=n(73),H=n(156),z=n(155),P=n(58);const q={current:{},loading:!1,isLoggedIn:!1};var F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.b:return{...e,loading:!0};case P.a:return q;case P.c:return{current:t.payload,loading:!1,isLoggedIn:!0};case P.d:return q;default:return e}};const M={result:null,current:null,isLoading:!1,isSuccess:!1},Q={current:{result:null},list:{result:{items:[],pagination:{current:1,pageSize:10,total:1}},isLoading:!1,isSuccess:!1},create:M,update:M,delete:M,read:M,search:{...M,result:[]}};var B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;const{payload:n,keyState:r}=t;switch(t.type){case"CRUD_RESET_STATE":return Q;case"CRUD_CURRENT_ITEM":return{...e,current:{result:n}};case"CRUD_REQUEST_LOADING":return{...e,[r]:{...e[r],isLoading:!0}};case"CRUD_REQUEST_FAILED":return{...e,[r]:{...e[r],isLoading:!1,isSuccess:!1}};case"CRUD_REQUEST_SUCCESS":return{...e,[r]:{...e[r],result:n,isLoading:!1,isSuccess:!0}};case"CRUD_CURRENT_ACTION":return{...e,[r]:{...M,current:n}};case"CRUD_RESET_ACTION":return{...e,[r]:{...Q[r]}};default:return e}};const G={result:[],selected:null,isLoading:!1,isSuccess:!1},J={};var W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;const{payload:n=null,keyState:r=null}=t;switch(t.type){case"SEARCH_INIT_STATE":{let e={};return n.map((t=>e[t]=G)),e}case"SEARCH_RESET_STATE":return J;case"SEARCH_RESET_REF":return{...e,[r]:G};case"SEARCH_CURRENT_SELECTED":return{...e,[r]:{...e[r],selected:n}};case"SEARCH_REQUEST_LOADING":return{...e,[r]:{...G,isLoading:!0}};case"SEARCH_REQUEST_FAILED":return{...e,[r]:G};case"SEARCH_REQUEST_SUCCESS":return{...e,[r]:{...G,result:n,isSuccess:!0}};default:return e}};const K=Object(N.b)({auth:F,crud:B,search:W});var V=(e,t)=>(t.type===P.d&&(e=void 0),K(e,t)),X=n(77);Object(z.createLogger)();let Z=[H.a],$=Object(N.a)(...Z);window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.c;const Y=X.a.get("auth")?{auth:X.a.get("auth")}:{};var ee=Object(N.d)(V,Y,$),te=n(231),ne=n(226);var re=function(){const{isOnline:e}=function(){const[e,t]=Object(r.useState)(window.navigator.onLine);return Object(r.useEffect)((()=>{t(window.navigator.onLine)}),[window.navigator.onLine]),{isOnline:e}}();return e?Object(d.jsx)(c.c,{history:k.a,children:Object(d.jsx)(o.a,{store:ee,children:Object(d.jsx)(D,{})})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(te.a,{status:"404",title:"No Internet Connection",subTitle:"Check your Internet Connection or your network.",extra:Object(d.jsx)(ne.a,{href:"/",type:"primary",children:"Try Again"})})})};n(222),n(223);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("process env","production"),s.a.render(Object(d.jsx)(re,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c}));const r="AUTH_FAILED_REQUEST",a="AUTH_LOADING_REQUEST",s="AUTH_LOGIN_SUCCESS",c="AUTH_LOGOUT_SUCCESS"},77:function(e,t,n){"use strict";const r={set:(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},get:e=>{const t=window.localStorage.getItem(e);return JSON.parse(t)},remove:e=>{window.localStorage.removeItem(e)},getAll:()=>window.localStorage,clear:()=>{window.localStorage.clear()}};t.a=r},90:function(e,t,n){"use strict";var r=n(28);t.a=Object(r.a)()},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b})),console.log("process env REACT_APP_DEV_REMOTE",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEV_REMOTE);const r="x-auth-token";var a=n(152),s=n.n(a),c=n(158),o=n(90);var i={200:"The server successfully returned the requested data. ",201:"Create or modify data successfully. ",202:"A request has entered the background queue (asynchronous task). ",204:"Delete data successfully. ",400:"There was an error in the request sent, and the server did not create or modify data. ",401:"The admin does not have permission please try to login again. ",403:"The admin is authorized, but access is forbidden. ",404:"The request sent is for a record that does not exist, and the server is not operating. ",406:"The requested format is not available. ",410:"The requested resource has been permanently deleted and will no longer be available. ",422:"When creating an object, a validation error occurred. ",500:"An error occurred in the server, please check the server. ",502:"Gateway error. ",503:"The service is unavailable, the server is temporarily overloaded or maintained. ",504:"The gateway has timed out. "};var l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const{response:n}=e;if(n){if(n&&n.status){const t=n.data&&n.data.message||i[n.status],{status:r}=n;return c.a.config({duration:20}),c.a.error({message:"Request error ".concat(r),description:t}),e.response.data.jwtExpired&&o.a.push("/logout"),n.data}return c.a.config({duration:20}),c.a.error({message:"Unknown Error",description:"An unknown error occurred in the app, please try again. "}),{success:!1,result:t,message:"An unknown error occurred in the app, please try again. "}}return{success:!1,result:t,message:"Cannot connect to the server, Check your internet network"}};var u=function(e){e.data.result||(e={...e,status:404,url:null,data:{success:!1,result:null}});const{data:t}=e;if(!1===t.success){const n=t&&t.message||i[e.status],{status:r}=e;c.a.config({duration:20}),c.a.error({message:"Request error ".concat(r),description:n})}else{t&&t.message||e.status;const{status:n}=e}return t},d=n(77);const j=async e=>{try{const t=await s.a.post("https://erp-crm.idurarapp.com/api/"+"login?timestamp=".concat((new Date).getTime()),e);return b.set(t.data.result.token),u(t)}catch(t){return l(t)}},h=()=>{b.remove(),d.a.clear()},b={get:()=>function(e){var t;const n=window.localStorage.getItem(e);return null!==(t=void 0!=n)&&void 0!==t?t:JSON.parse(n)}(r),set:e=>{return t=r,n=e,void window.localStorage.setItem(t,JSON.stringify(n));var t,n},remove:()=>{return e=r,window.localStorage.removeItem(e),!0;var e}}}},[[224,11,12]]]);
//# sourceMappingURL=main.47addda2.chunk.js.map