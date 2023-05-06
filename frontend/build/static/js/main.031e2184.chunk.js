(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{154:function(e,t,c){"use strict";c.r(t);var r=c(6),a=c(2),n=c(21),s=c.n(n),o=c(11),i=c(17),l=c(14),d=c(8),u=c.n(d),j=c(15),b="LOGIN_REQUEST",p="LOGIN_SUCCESS",m="LOGIN_FAIL",O="REGISTER_USER_REQUEST",h="REGISTER_USER_SUCCESS",f="REGISTER_USER_FAIL",x="LOAD_USER_REQUEST",g="LOAD_USER_SUCCESS",v="LOAD_USER_FAIL",y="LOGOUT_SUCCESS",N="LOGOUT_FAIL",w="UPDATE_PROFILE_REQUEST",S="UPDATE_PROFILE_SUCCESS",_="UPDATE_PROFILE_FAIL",E="UPDATE_PROFILE_RESET",C="FORGOT_PASSWORD_REQUEST",R="FORGOT_PASSWORD_SUCCESS",k="FORGOT_PASSWORD_FAIL",I="RESET_PASSWORD_REQUEST",A="RESET_PASSWORD_SUCCESS",P="RESET_PASSWORD_FAIL",F="CLEAR_ERRORS",T=c(18),L=c.n(T),D=(new(c(97).a),function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:F});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),U=c(7),q=c(12),M=c(3),G=function(){return Object(M.jsx)("div",{className:"loader"})},Q=c(77),J=function(e){var t=e.title;return Object(M.jsx)(Q.a,{children:Object(M.jsx)("title",{children:"".concat(t,"-ecommerce")})})},W=function(e){var t=e.history,c=Object(a.useState)(""),r=Object(l.a)(c,2),n=r[0],s=r[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),O=d[0],h=d[1],f=Object(q.d)(),x=Object(U.b)(),g=Object(U.c)((function(e){return e.auth})),v=g.isAuthenicated,y=g.loading,N=g.error;Object(a.useEffect)((function(){v&&t.push("/"),N&&x(D())}),[x,f,v,N,t]);return Object(M.jsx)(a.Fragment,{children:y?Object(M.jsx)(G,{}):Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"Login"}),Object(M.jsx)("div",{className:"row wrapper",children:Object(M.jsx)("div",{className:"col-10 col-lg-5",children:Object(M.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){e.preventDefault(),x(function(e,t){return function(){var c=Object(j.a)(u.a.mark((function c(r){var a,n,s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(e,t),c.prev=1,r({type:b}),a={headers:{"Content-Type":"application/json"}},c.next=6,L.a.post("/api/v1/login",{email:e,password:t},a);case 6:n=c.sent,s=n.data,console.log(s.token),r({type:p,payload:s.user}),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(1),r({type:m,payload:c.t0.response.data.message});case 15:case"end":return c.stop()}}),c,null,[[1,12]])})));return function(e){return c.apply(this,arguments)}}()}(n,O))},children:[Object(M.jsx)("h1",{className:"mb-3 login",children:"Login"}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"email_field",children:"Email"}),Object(M.jsx)("input",{type:"email",id:"email_field",className:"form-control",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"password_field",children:"Password"}),Object(M.jsx)("input",{type:"password",id:"password_field",className:"form-control",value:O,onChange:function(e){return h(e.target.value)}})]}),Object(M.jsx)("button",{id:"login_button",type:"submit",className:"btn btn-block py-3 buttoncolor",children:"LOGIN"}),Object(M.jsx)(o.b,{to:"/registers",className:"float-right mt-3",children:"New User?"})]})})})]})})},Y=function(e){var t=e.history,c=Object(a.useState)(""),r=Object(l.a)(c,2),n=r[0],s=r[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),d=i[0],b=i[1],p=Object(a.useState)(""),m=Object(l.a)(p,2),x=m[0],g=m[1],v=Object(q.d)(),y=Object(U.b)(),N=Object(U.c)((function(e){return e.auth})),w=N.isAuthenicated,S=N.loading,_=N.error;Object(a.useEffect)((function(){w&&t.push("/"),_&&y(D())}),[y,v,w,_,t]);return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"Register user"}),Object(M.jsx)("div",{className:"row wrapper",children:Object(M.jsx)("div",{className:"col-10 col-lg-5",children:Object(M.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){e.preventDefault(),console.log(x),console.log(n),console.log(d),y(function(e,t,c){return function(){var r=Object(j.a)(u.a.mark((function r(a){var n,s,o;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(e),console.log(c),console.log(t),r.prev=3,a({type:O}),n={headers:{"Content-Type":"application/json"}},r.next=8,L.a.post("/api/v1/register",{name:e,email:t,password:c},n);case 8:s=r.sent,o=s.data,a({type:h,payload:o.user}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),a({type:f,payload:r.t0.response.data.message});case 16:case"end":return r.stop()}}),r,null,[[3,13]])})));return function(e){return r.apply(this,arguments)}}()}(x,n,d))},children:[Object(M.jsx)("h1",{className:"mb-3",children:"Register"}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"email_field",children:"Name"}),Object(M.jsx)("input",{type:"name",id:"name_field",className:"form-control",name:"name",value:x,onChange:function(e){return g(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"email_field",children:"Email"}),Object(M.jsx)("input",{type:"email",id:"email_field",className:"form-control",name:"email",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"password_field",children:"Password"}),Object(M.jsx)("input",{type:"password",id:"password_field",className:"form-control",name:"password",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(M.jsx)("button",{id:"register_button",type:"submit",className:"btn btn-block py-3",disabled:!!S,children:"REGISTER"})]})})})]})},B=function(){var e=Object(U.c)((function(e){return e.auth})),t=e.user,c=e.loading;return Object(M.jsx)(a.Fragment,{children:c?Object(M.jsx)(G,{}):Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"Your Profile"}),Object(M.jsx)("h2",{className:"mt-5 ml-5",children:"My Profile"}),Object(M.jsx)("div",{className:"row justify-content-around mt-5 user-info",children:Object(M.jsxs)("div",{className:"col-12 col-md-5",children:[Object(M.jsx)("h4",{children:"Full Name"}),Object(M.jsx)("p",{children:t.name}),Object(M.jsx)("h4",{children:"Email Address"}),Object(M.jsx)("p",{children:t.email}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"admin"!==t.role&&Object(M.jsx)(o.b,{to:"/orders/me",className:"btn btn-danger btn-block mt-5",children:"My Orders"})]})})]})})},V=c(99),z=["component"],H=function(e){var t=e.component,c=Object(V.a)(e,z),n=Object(U.c)((function(e){return e.auth})),s=n.isAuthenicated,o=n.loading;return Object(M.jsx)(a.Fragment,{children:!1===o&&Object(M.jsx)(i.b,Object(r.a)(Object(r.a)({},c),{},{render:function(e){return!1===s?Object(M.jsx)(i.a,{to:"/login"}):Object(M.jsx)(t,Object(r.a)({},e))}}))})},$=function(e){var t=e.history,c=Object(a.useState)(""),r=Object(l.a)(c,2),n=r[0],s=r[1];return Object(M.jsx)("form",{onSubmit:function(e){e.preventDefault(),n.trim()?t.push("/search/".concat(n)):t.push("/")},children:Object(M.jsxs)("div",{className:"input-group",children:[Object(M.jsx)("input",{type:"text",id:"search_field",className:"form-control",placeholder:"Enter Product Name ...",onChange:function(e){return s(e.target.value)}}),Object(M.jsx)("div",{className:"input-group-append",children:Object(M.jsx)("button",{id:"search_btn",className:"btn",children:Object(M.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})})]})})},K=c(81),X=c.n(K),Z=c(80),ee=c.n(Z),te=(c(63),function(){var e=Object(q.d)(),t=Object(U.b)(),c=Object(U.c)((function(e){return e.cart})).cartItems,r=Object(U.c)((function(e){return e.auth})),n=r.user,s=r.loading;return Object(M.jsx)(a.Fragment,{children:Object(M.jsxs)("nav",{className:"navbar row naviga",children:[Object(M.jsx)("div",{className:"col-12 col-md-3 mt-md-0 ",children:Object(M.jsx)("div",{className:"navbar-brand",children:Object(M.jsx)(o.b,{to:"/",children:Object(M.jsx)(ee.a,{className:"homebutton"})})})}),Object(M.jsx)("div",{className:"col-12 col-md-6 mt-2 ",children:Object(M.jsx)(i.b,{render:function(e){var t=e.history;return Object(M.jsx)($,{history:t})}})}),Object(M.jsxs)("div",{className:"col-12 col-md-3 mt-4 mt-md-0 text-center",children:[Object(M.jsxs)(o.b,{to:"/cart",children:[Object(M.jsx)("span",{id:"cart",className:"ml-3",children:Object(M.jsx)(X.a,{})}),Object(M.jsx)("span",{className:"ml-1",id:"cart_count",children:c.length})]}),n?Object(M.jsxs)("div",{className:"ml-4 dropdown d-inline",children:[Object(M.jsx)(o.b,{to:"#!",className:"btn dropdown-toggle text-white mr-4",type:"button",id:"dropDownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(M.jsx)("span",{children:n&&n.name})}),Object(M.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropDownMenuButton",children:[n&&"admin"===n.role&&Object(M.jsx)(o.b,{className:"dropdown-item",to:"/dashboard",children:"Dashboard"}),Object(M.jsx)(o.b,{className:"dropdown-item",to:"/orders/me",children:"Orders"}),Object(M.jsx)(o.b,{className:"dropdown-item",to:"/me",children:"Profile"}),Object(M.jsx)(o.b,{className:"dropdown-item text-danger",to:"/",onClick:function(){t(function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("/api/v1/logout");case 3:t({type:y}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:N,payload:e.t0.response.data.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),e.success("logout successfully"),c.length=0},children:"Logout"})]})]}):!s&&Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(o.b,{to:"/login",id:"login_btn",children:"Login"}),Object(M.jsx)(o.b,{to:"/registers",id:"signup_btn",children:"signup"})]})]})]})})}),ce=function(){return Object(M.jsx)(a.Fragment,{children:Object(M.jsx)("footer",{className:"py-1 footer",children:Object(M.jsx)("p",{className:"text-center mt-1 ",children:"Shopping Cart - 2021-2022, All Rights Reserved"})})})},re=c(82),ae=c.n(re),ne="ALL_PRODUCTS_REQUESTS",se="ALL_PRODUCTS_SUCCESS",oe="ALL_PRODUCTS_FAIL",ie="CLEAR_ERRORS",le="ALL_PRODUCTS_REQUESTS",de="ALL_PRODUCTS_SUCCESS",ue="ALL_PRODUCTS_FAIL",je=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:ie});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(e){var t=e.product;return Object(M.jsx)("div",{className:"col-sm-12 col-md-6 col-lg- my-3",children:Object(M.jsxs)("div",{className:"card p-3 rounded",children:[Object(M.jsx)("img",{className:"card-img-top mx-auto",src:t.images[0].url,alt:""}),Object(M.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(M.jsx)("h5",{className:"card-title",children:Object(M.jsx)(o.b,{to:"/product/".concat(t._id),children:t.name})}),Object(M.jsx)("div",{className:"ratings mt-auto"}),Object(M.jsxs)("p",{className:"card-text",children:["\u20b9",t.price]}),Object(M.jsx)(o.b,{to:"/product/".concat(t._id),id:"view_btn",className:"btn btn-block",children:"View Details"})]})]})})},pe=function(e){var t=e.match,c=Object(a.useState)(1),r=Object(l.a)(c,2),n=r[0],s=r[1],o=Object(q.d)(),i=Object(U.b)(),d=Object(U.c)((function(e){return e.products})),b=d.loading,p=d.Products,m=d.error,O=d.productsCount,h=d.resPerPage,f=t.params.keyword;return Object(a.useEffect)((function(){if(m)return o.error(m);i(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var c=Object(j.a)(u.a.mark((function c(r){var a,n;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r({type:ne}),c.next=4,L.a.get("https://e-commerce-six-murex.vercel.app/api/v1/products?keyword=".concat(e,"&page=").concat(t));case 4:a=c.sent,n=a.data,r({type:se,payload:n}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),r({type:oe,payload:c.t0.response.data.message});case 12:case"end":return c.stop()}}),c,null,[[0,9]])})));return function(e){return c.apply(this,arguments)}}()}(f,n))}),[i,o,m,f,n]),Object(M.jsx)(a.Fragment,{children:b?Object(M.jsx)(G,{}):Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:" products"}),Object(M.jsx)("h1",{id:"products_heading",children:" Products"}),Object(M.jsx)("section",{id:"products",className:" container mt-10 change",children:Object(M.jsx)("div",{className:"row ",children:p&&p.map((function(e){return Object(M.jsx)(be,{product:e},e._id)}))})}),h<=O&&Object(M.jsx)("div",{className:"d-flex justify-content-center mt-5 pagination",children:Object(M.jsx)(ae.a,{activePage:n,itemsCountPerPage:h,totalItemsCount:O,onChange:function(e){s(e)},nextPageText:"Next",prevPageText:"Prev",firstPageText:"First",lastPageText:"Last",itemClass:"page-item",linkClass:"page-link"})})]})})},me=c(172),Oe=c(86),he="ADD_TO_CART",fe="REMOVE_TO_CART",xe="SAVE_SHIPPING_INFO",ge=function(e,t){return function(){var c=Object(j.a)(u.a.mark((function c(r,a){var n,s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,L.a.get("https://e-commerce-six-murex.vercel.app/api/v1/product/".concat(e));case 2:n=c.sent,s=n.data,r({type:he,payload:{product:s.product._id,name:s.product.name,price:s.product.price,image:s.product.images[0].url,stock:s.product.stock,quantity:t}}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},ve=function(e){var t=e.match,c=e.history,r=Object(a.useState)(1),n=Object(l.a)(r,2),s=n[0],o=n[1],i=Object(U.b)(),d=Object(U.c)((function(e){return e.productDetails})),b=d.loading,p=d.error,m=d.product,O=Object(U.c)((function(e){return e.auth})).isAuthenicated,h=Object(q.d)();Object(a.useEffect)((function(){var e;p&&(h.error(p),i(je())),i((e=t.params.id,function(){var t=Object(j.a)(u.a.mark((function t(c){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:le}),t.next=4,L.a.get("https://e-commerce-six-murex.vercel.app/api/v1/product/".concat(e));case 4:r=t.sent,a=r.data,c({type:de,payload:a.product}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:ue,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[i,h,p,t.params.id]);return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:m.name}),b?Object(M.jsx)(G,{}):Object(M.jsx)(a.Fragment,{children:Object(M.jsxs)("div",{className:"row f-flex justify-content-around",children:[Object(M.jsx)("div",{className:"col-12 col-lg-5 img-fluid ",id:"product_image",children:Object(M.jsx)(me.a,{pause:"hover",className:"imagesize",children:m.images&&m.images.map((function(e){return Object(M.jsx)(Oe.a,{children:Object(M.jsx)("img",{className:"d-block w-100 ",src:e.url,alt:m.title})},e.public_id)}))})}),Object(M.jsxs)("div",{className:"col-12 col-lg-5 mt-5",children:[Object(M.jsx)("h3",{children:m.name}),Object(M.jsxs)("p",{id:"product_id",children:["Product # ",m._id]}),Object(M.jsxs)("p",{id:"product_price",children:["\u20b9",m.price]}),Object(M.jsxs)("div",{className:"stockCounter d-inline",children:[Object(M.jsx)("span",{className:"btn btn-danger minus",onClick:function(){var e=document.querySelector(".count");if(!(e.valueAsNumber<=1)){var t=e.valueAsNumber-1;o(t)}},children:"-"}),Object(M.jsx)("input",{type:"number",className:"form-control count d-inline",value:s,readOnly:!0}),Object(M.jsx)("span",{className:"btn btn-primary plus",onClick:function(){var e=document.querySelector(".count");if(!(e.valueAsNumber>=m.stock)){var t=e.valueAsNumber+1;o(t)}},children:"+"})]}),Object(M.jsx)("button",{type:"button",id:"cart_btn",className:"btn btn-primary d-inline ml-4",disabled:0===m.stock,onClick:function(){O?(i(ge(t.params.id,s)),h.success("item added to cart")):(c.push("/login"),h.error("Please login before add product to cart"))},children:"Add to Cart"}),Object(M.jsx)("hr",{}),Object(M.jsxs)("p",{children:["Status: ",Object(M.jsx)("span",{id:"stock_status",className:m.stock>0?"greenColor":"redColor",children:m.stock>0?"In Stock":"out of stock"})]}),Object(M.jsx)("hr",{}),Object(M.jsx)("h4",{className:"mt-2",children:"Description:"}),Object(M.jsx)("p",{children:m.description}),Object(M.jsx)("hr",{}),Object(M.jsxs)("p",{id:"product_seller mb-3",children:["Sold by: ",Object(M.jsx)("strong",{children:m.seller})]}),Object(M.jsx)("div",{className:"row mt-2 mb-5",children:Object(M.jsx)("div",{className:"rating w-50",children:Object(M.jsx)("div",{className:"modal fade",id:"ratingModal",tabIndex:"-1",role:"dialog","aria-labelledby":"ratingModalLabel","aria-hidden":"true",children:Object(M.jsx)("div",{className:"modal-dialog",role:"document",children:Object(M.jsxs)("div",{className:"modal-content",children:[Object(M.jsxs)("div",{className:"modal-header",children:[Object(M.jsx)("h5",{className:"modal-title",id:"ratingModalLabel",children:"Submit Review"}),Object(M.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(M.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(M.jsxs)("div",{className:"modal-body",children:[Object(M.jsxs)("ul",{className:"stars",children:[Object(M.jsx)("li",{className:"star",children:Object(M.jsx)("i",{className:"fa fa-star"})}),Object(M.jsx)("li",{className:"star",children:Object(M.jsx)("i",{className:"fa fa-star"})}),Object(M.jsx)("li",{className:"star",children:Object(M.jsx)("i",{className:"fa fa-star"})}),Object(M.jsx)("li",{className:"star",children:Object(M.jsx)("i",{className:"fa fa-star"})}),Object(M.jsx)("li",{className:"star",children:Object(M.jsx)("i",{className:"fa fa-star"})})]}),Object(M.jsx)("textarea",{name:"review",id:"review",className:"form-control mt-3"}),Object(M.jsx)("button",{className:"btn my-3 float-right review-btn px-4 text-white","data-dismiss":"modal","aria-label":"Close",children:"Submit"})]})]})})})})})]})]})})]})},ye=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(q.d)(),s=Object(U.b)(),o=Object(U.c)((function(e){return e.forgotpassword})),i=o.error,d=o.loading,b=o.message;Object(a.useEffect)((function(){i&&(n.error(i),s(D())),b&&n.success(b)}),[s,n,i,b]);return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"Forgot Password"}),Object(M.jsx)("div",{className:"row wrapper",children:Object(M.jsx)("div",{className:"col-10 col-lg-5",children:Object(M.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){e.preventDefault();var t=new FormData;t.set("email",c),s(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(c){var r,a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:C}),r={headers:{"Content-Type":"application/json"}},t.next=5,L.a.post("/api/v1/password/forgot",e,r);case 5:a=t.sent,n=a.data,c({type:R,payload:n.message}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:k,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},children:[Object(M.jsx)("h1",{className:"mb-3",children:"Forgot Password"}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"email_field",children:"Enter Email"}),Object(M.jsx)("input",{type:"email",id:"email_field",className:"form-control",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(M.jsx)("button",{id:"forgot_password_button",type:"submit",className:"btn btn-block py-3",disabled:!!d,children:"Send Email"})]})})})]})},Ne=function(e){var t=e.history,c=e.match,r=Object(a.useState)(""),n=Object(l.a)(r,2),s=n[0],o=n[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),b=d[0],p=d[1],m=Object(q.d)(),O=Object(U.b)(),h=Object(U.c)((function(e){return e.forgotpassword})),f=h.error,x=h.success;Object(a.useEffect)((function(){f&&(m.error(f),O(D())),x&&(m.success("password updated successfully"),t.push("/login"))}),[O,m,f,x,t]);return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:" New Password Reset"}),Object(M.jsx)("div",{className:"row wrapper",children:Object(M.jsx)("div",{className:"col-10 col-lg-5",children:Object(M.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){e.preventDefault();var t,r,a=new FormData;a.set("password",s),a.set("confirmpassword",b),O((t=c.params.token,r=a,function(){var e=Object(j.a)(u.a.mark((function e(c){var a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c({type:I}),a={headers:{"Content-Type":"application/json"}},e.next=5,L.a.put("/api/v1/password/reset/".concat(t),r,a);case 5:n=e.sent,s=n.data,c({type:A,payload:s.message}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c({type:P,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(M.jsx)("h1",{className:"mb-3",children:"New Password"}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"password_field",children:"Password"}),Object(M.jsx)("input",{type:"password",id:"password_field",className:"form-control",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"confirm_password_field",children:"Confirm Password"}),Object(M.jsx)("input",{type:"password",id:"confirm_password_field",className:"form-control",value:b,onChange:function(e){return p(e.target.value)}})]}),Object(M.jsx)("button",{id:"new_password_button",type:"submit",className:"btn btn-block py-3",children:"Set Password"})]})})})]})},we=function(e){var t=e.history,c=Object(U.b)(),r=Object(U.c)((function(e){return e.cart})).cartItems,n=Object(U.c)((function(e){return e.auth})).isAuthenicated,s=function(e){c(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(c,r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:fe,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}(e))};return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"Your Cart"}),0===r.length?Object(M.jsx)("h2",{className:"mt-5",children:"Your Cart is Empty"}):Object(M.jsxs)(a.Fragment,{children:[Object(M.jsxs)("h2",{className:"mt-5",children:["Your Cart: ",Object(M.jsxs)("b",{children:[1===r.length?"".concat(r.length," item"):"".concat(r.length," items")," "]})]}),Object(M.jsxs)("div",{className:"row d-flex justify-content-between",children:[Object(M.jsx)("div",{className:"col-12 col-lg-8",children:r.map((function(e){return Object(M.jsx)(a.Fragment,{children:Object(M.jsx)("div",{className:"cart-item",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-4 col-lg-3",children:Object(M.jsx)("img",{src:e.image,alt:"Laptop",height:"90",width:"115"})}),Object(M.jsx)("div",{className:"col-5 col-lg-3",children:Object(M.jsx)(o.b,{to:"/product/".concat(e.product),children:e.name})}),Object(M.jsx)("div",{className:"col-4 col-lg-2 mt-4 mt-lg-0",children:Object(M.jsxs)("p",{id:"card_item_price",children:["\u20b9",e.price]})}),Object(M.jsx)("div",{className:"col-4 col-lg-3 mt-4 mt-lg-0",children:Object(M.jsxs)("div",{className:"stockCounter d-inline",children:[Object(M.jsx)("span",{className:"btn btn-danger minus",onClick:function(){return function(e,t){var r=t-1;r<=0||c(ge(e,r))}(e.product,e.quantity)},children:"-"}),Object(M.jsx)("input",{type:"number",className:"form-control count d-inline",value:e.quantity,readOnly:!0}),Object(M.jsx)("span",{className:"btn btn-primary plus",onClick:function(){return function(e,t,r){var a=t+1;a>r||c(ge(e,a))}(e.product,e.quantity,e.stock)},children:"+"})]})}),Object(M.jsx)("div",{className:"col-4 col-lg-1 mt-4 mt-lg-0",children:Object(M.jsx)("i",{id:"delete_cart_item",className:"fa fa-trash btn btn-danger",onClick:function(){return s(e.product)}})})]})})},e.product)}))}),Object(M.jsx)("div",{className:"col-10 col-lg-3 my-4",children:Object(M.jsxs)("div",{id:"order_summary",children:[Object(M.jsx)("h4",{children:"Order Summary"}),Object(M.jsxs)("p",{children:["Subtotal:  ",Object(M.jsxs)("span",{className:"order-summary-values",children:[r.reduce((function(e,t){return e+Number(t.quantity)}),0)," (Units)"]})]}),Object(M.jsxs)("p",{children:["Est. total: ",Object(M.jsxs)("span",{className:"order-summary-values",children:["\u20b9",r.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2)]})]}),Object(M.jsx)("button",{onClick:function(){n?t.push("/shipping"):t.push("/login")},id:"checkout_btn",className:"btn btn-primary btn-block",children:"Check out"})]})})]})]})]})},Se=function(e){var t=e.history,c=Object(U.c)((function(e){return e.cart})),r=c.cartItems,n=c.shippinginfo,s=(Object(q.d)(),Object(U.b)()),o=Object(a.useState)(n.address),i=Object(l.a)(o,2),d=i[0],b=i[1],p=Object(a.useState)(n.city),m=Object(l.a)(p,2),O=m[0],h=m[1],f=Object(a.useState)(n.postalCode),x=Object(l.a)(f,2),g=x[0],v=x[1],y=Object(a.useState)(n.phoneNo),N=Object(l.a)(y,2),w=N[0],S=N[1];return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"Shipping info"}),Object(M.jsx)("div",{className:"row wrapper",children:Object(M.jsx)("div",{className:"col-10 col-lg-5",children:Object(M.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){var c;e.preventDefault(),s((c={address:d,city:O,postalCode:g,phoneNo:w},function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:xe,payload:c}),localStorage.setItem("shippinginfo",JSON.stringify(c));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t.push("/confirmorder")},children:[Object(M.jsx)("h1",{className:"mb-4",children:"Shipping Info"}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"address_field",children:"Address"}),Object(M.jsx)("input",{type:"text",id:"address_field",className:"form-control",value:d,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"city_field",children:"City"}),Object(M.jsx)("input",{type:"text",id:"city_field",className:"form-control",required:!0,value:O,onChange:function(e){return h(e.target.value)}})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"phone_field",children:"Phone No"}),Object(M.jsx)("input",{type:"phone",id:"phone_field",className:"form-control",value:w,onChange:function(e){return S(e.target.value)},required:!0})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{htmlFor:"postal_code_field",children:"Postal Code"}),Object(M.jsx)("input",{type:"number",id:"postal_code_field",className:"form-control",value:g,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(M.jsxs)("button",{id:"shipping_btn",type:"submit",className:"btn btn-block py-3",children:["Place Order Of $",r.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2)]})]})})})]})},_e=c(95),Ee="CREATE_ORDER_REQUEST",Ce="CREATE_ORDER_SUCCESS",Re="CREATE_ORDER_FAIL",ke="MY_ORDERS_REQUEST",Ie="MY_ORDERS_SUCCESS",Ae="MY_ORDERS_FAIL",Pe="CLEAR_ERRORS",Fe=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(c,r){var a,n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:Ee}),a={headers:{"Content-Type":"application/json"}},t.next=5,L.a.post("https://e-commerce-six-murex.vercel.app/api/v1/order/new",e,a);case 5:n=t.sent,s=n.data,c({type:Ce,payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:Re,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,c){return t.apply(this,arguments)}}()},Te=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Pe});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(q.d)(),t=Object(U.b)(),c=Object(U.c)((function(e){return e.myorders})),r=c.loading,n=c.error,s=c.orders;Object(a.useEffect)((function(){t(function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:ke}),e.next=4,L.a.get("https://e-commerce-six-murex.vercel.app/api/v1/orders/me");case 4:c=e.sent,r=c.data,t({type:Ie,payload:r.orders}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:Ae,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),n&&(e.error(n),t(Te()))}),[t,e,n]);return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"My Orders"}),Object(M.jsx)("h1",{className:"my-5",children:"My Orders"}),r?Object(M.jsx)(G,{}):Object(M.jsx)(_e.c,{data:function(){var e={columns:[{label:"Order ID",field:"id",sort:"asc"},{label:"Num of Items",field:"numOfItems",sort:"asc"},{label:"Amount",field:"amount",sort:"asc"},{label:"Status",field:"status",sort:"asc"}],rows:[]};return s.forEach((function(t){e.rows.push({id:t._id,numOfItems:t.orderItems.length,amount:"\u20b9".concat(t.itemsPrice),status:t.orderStatus&&String(t.orderStatus).includes("Delivered")?Object(M.jsx)("p",{style:{color:"green"},children:t.orderStatus}):Object(M.jsx)("p",{style:{color:"red"},children:t.orderStatus})})})),e}(),className:"px-3",bordered:!0,striped:!0,hover:!0})]})},De=c(40),Ue=c(92),qe=c(93),Me=c(96),Ge=Object(De.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return{loading:!0,products:[]};case se:return{loading:!1,Products:t.payload.Products,productsCount:t.payload.productsCount,resPerPage:t.payload.resPerPage};case oe:return{loading:!1,error:t.payload};case ie:return Object(r.a)(Object(r.a)({},e),{},{error:null});default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case de:return{loading:!1,product:t.payload};case ue:case ie:return Object(r.a)(Object(r.a)({},e),{},{error:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:case O:case x:return{loading:!0,isAuthenicated:!1};case p:case h:case g:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,isAuthenicated:!0,user:t.payload});case y:return{loading:!1,isAuthenicated:!1,user:null};case v:return{loading:!1,isAuthenicated:!1,user:null,error:t.payload};case N:return Object(r.a)(Object(r.a)({},e),{},{error:t.payload});case m:case f:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,isAuthenicated:!1,user:null,error:t.payload});case F:return Object(r.a)(Object(r.a)({},e),{},{error:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(r.a)(Object(r.a)({},e),{},{loading:!0,isAuthenicated:!0});case S:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,isUpdated:t.payload});case E:return Object(r.a)(Object(r.a)({},e),{},{isUpdated:!1});case _:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload});case F:return Object(r.a)(Object(r.a)({},e),{},{error:t.payload});default:return e}},forgotpassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case I:return Object(r.a)(Object(r.a)({},e),{},{loading:!0,error:null});case R:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,message:t.payload});case A:return Object(r.a)(Object(r.a)({},e),{},{success:t.payload});case k:case P:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload});case F:return Object(r.a)(Object(r.a)({},e),{},{error:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shippinginfo:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:var c=t.payload,a=e.cartItems.find((function(e){return e.product===c.product}));return a?Object(r.a)(Object(r.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===a.product?c:e}))}):Object(r.a)(Object(r.a)({},e),{},{cartItems:[].concat(Object(Me.a)(e.cartItems),[c])});case fe:return Object(r.a)(Object(r.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case xe:return Object(r.a)(Object(r.a)({},e),{},{shippinginfo:t.payload});default:return e}},neworder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case Ce:return{loading:!1,order:t.payload};case Re:return{loading:!1,error:t.payload};case Pe:return Object(r.a)(Object(r.a)({},e),{},{error:null});default:return e}},myorders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return{loading:!0};case Ie:return{loading:!1,orders:t.payload};case Ae:return{loading:!1,error:t.payload};case Pe:return Object(r.a)(Object(r.a)({},e),{},{error:null,loading:!1});default:return e}}}),Qe={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],shippinginfo:localStorage.getItem("shippinginfo")?JSON.parse(localStorage.getItem("shippinginfo")):{}}},Je=[Ue.a],We=Object(De.createStore)(Ge,Qe,Object(qe.composeWithDevTools)(De.applyMiddleware.apply(void 0,Je))),Ye=function(e){var t=e.history,c=Object(q.d)(),r=Object(U.b)(),n=(Object(U.c)((function(e){return e.auth})).user,Object(U.c)((function(e){return e.cart}))),s=n.cartItems,o=n.shippinginfo,i=Object(U.c)((function(e){return e.neworder})).error;Object(a.useEffect)((function(){i&&(c.error(i),console.log(i),r(Te()))}),[c,r,i]);var l={orderItems:s,shippingInfo:o,itemsPrice:s.reduce((function(e,t){return e+t.quantity*t.price}),0)},d=function(){var e=Object(j.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),console.log(l),r(Fe(l)),c.success("Order Placed Succesfully"),t.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsx)(J,{title:"Payment "}),Object(M.jsx)("div",{className:"row wrapper",children:Object(M.jsx)("div",{className:"col-10 col-lg-5",children:Object(M.jsx)("form",{className:"shadow-lg",onSubmit:d,children:Object(M.jsxs)("button",{id:"pay_btn",type:"submit",className:"btn btn-block py-3",children:["Confirm COD Order Of \u20b9",s.reduce((function(e,t){return e+t.quantity*t.price}),0)]})})})})]})};var Be=function(){return Object(a.useEffect)((function(){We.dispatch(function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x}),e.next=4,L.a.get("/api/v1/me");case 4:c=e.sent,r=c.data,t({type:g,payload:r.user}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:v,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(M.jsx)(o.a,{children:Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(te,{}),Object(M.jsx)("div",{className:"container conatiner-fluid"}),Object(M.jsx)(i.b,{path:"/",component:pe,exact:!0}),Object(M.jsx)(i.b,{path:"/search/:keyword",component:pe,exact:!0}),Object(M.jsx)(i.b,{path:"/product/:id",component:ve,exact:!0}),Object(M.jsx)(i.b,{path:"/cart",component:we,exact:!0}),Object(M.jsx)(H,{path:"/shipping",component:Se}),Object(M.jsx)(H,{path:"/confirmorder",component:Ye}),Object(M.jsx)(H,{path:"/orders/me",component:Le,exact:!0}),Object(M.jsx)(i.b,{path:"/login",component:W}),Object(M.jsx)(i.b,{path:"/registers",component:Y}),Object(M.jsx)(i.b,{path:"/password/forgot",component:ye,exact:!0}),Object(M.jsx)(H,{path:"/password/reset/:token",component:Ne,exact:!0}),Object(M.jsx)(H,{path:"/me",component:B,exact:!0}),Object(M.jsx)(ce,{})]})})},Ve=c(94),ze={timeout:5e3,position:q.b.BOTTOM_CENTER,transitions:q.c.SCALE};s.a.render(Object(M.jsx)(U.a,{store:We,children:Object(M.jsx)(q.a,Object(r.a)(Object(r.a)({template:Ve.a},ze),{},{children:Object(M.jsx)(Be,{})}))}),document.getElementById("root"))},63:function(e,t,c){}},[[154,1,2]]]);
//# sourceMappingURL=main.031e2184.chunk.js.map