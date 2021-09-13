(this["webpackJsonpproject-react-redux-hooks"]=this["webpackJsonpproject-react-redux-hooks"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(15),i=n.n(r),o=(n(85),n(16)),s=n(36),j=n(71),l=n(72),d=n(3),b={email:"",password:"",isLogged:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ACTION":return Object(d.a)(Object(d.a)({},e),{},{email:t.payload.email,password:t.payload.password,isLogged:!0});default:return e}},O=n(21),h={register:[],editSwitch:!1,idForEdit:0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_REGISTER":return Object(d.a)(Object(d.a)({},e),{},{register:[].concat(Object(O.a)(e.register),[t.payload.objectRegister])});case"ACTION_DELECT":return Object(d.a)(Object(d.a)({},e),{},{register:Object(O.a)(e.register.filter((function(e){return e.id!==t.id})))});case"ACTION_EDIT":return Object(d.a)(Object(d.a)({},e),{},{idForEdit:t.payload.id,editSwitch:!0});case"SAVE_EDIT":return Object(d.a)(Object(d.a)({},e),{},{register:Object(O.a)(e.register.map((function(e){return e.id===t.payload.id?Object(d.a)(Object(d.a)({},e),t.payload.objForEdit):e})))});case"CLOSE_MODAL":return Object(d.a)(Object(d.a)({},e),{},{editSwitch:!1});default:return e}},m=Object(s.combineReducers)({loginReducer:u,registerReducer:x}),p=n(73),v=n.n(p),g=Object(s.createStore)(m,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(j.a,v.a))),f=n(48),C=n(7),y=n(111),S=n(110),N=n(106),I=n(114),E=(n(89),function(e,t){return{type:"LOGIN_ACTION",payload:{email:e,password:t}}}),w=n(2);var A={loginAction:E},L=Object(o.b)(null,A)((function(e){var t=e.loginAction,n=Object(c.useState)(""),a=Object(C.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(C.a)(o,2),j=s[0],l=s[1];return Object(w.jsx)("div",{className:"Login",children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)("h4",{children:" Sign in \ud83d\ude3b "}),Object(w.jsxs)(y.a.Group,{size:"lg",controlId:"email",children:[Object(w.jsx)(y.a.Label,{children:"Email"}),Object(w.jsx)(y.a.Control,{autoFocus:!0,placeholder:"example@bol.com",type:"email",onChange:function(e){var t=e.target;return i(t.value)}})]}),Object(w.jsxs)(y.a.Group,{size:"lg",controlId:"password",children:[Object(w.jsx)(y.a.Label,{children:"Password"}),Object(w.jsx)(y.a.Control,{type:"password",onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(w.jsx)(f.b,{to:"/home",children:Object(w.jsx)(S.a,{overlay:Object(w.jsx)(N.a,{id:"tooltip-disabled",children:"Type a password and email correct"}),children:Object(w.jsx)("span",{className:"d-inline-block",children:Object(w.jsx)(I.a,{disabled:function(e,t){return!(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi.test(e)&&t.length>6)}(r,j),onClick:function(){return t(r,j)},children:"Login"})})})})]})})})),T=n(9),F=n(19),R=n.n(F),G=(n(95),n(4)),k=n(69),_=n.n(k),D=n(77),P=n(113),M=n(107),q=(n(97),["name"]);var B=Object(o.b)((function(e){return{emaill:e.loginReducer.email}}))((function(e){var t=e.emaill,n=Object(c.useState)([]),a=Object(C.a)(n,2),r=a[0],i=a[1],o=function(){var e=Object(D.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.weatherapi.com/v1/current.json?key=53c8ec1e1de54dfaa9d132030211009&&q=Passos&aqi=no");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function s(e){var t=e.name,n=Object(G.a)(e,q),a=Object(c.useState)(!1),i=Object(C.a)(a,2),o=i[0],s=i[1];return Object(w.jsxs)("div",{id:"offCanvas",children:[Object(w.jsx)(I.a,{style:{height:"40px",marginTop:"10px"},variant:"primary",size:"sm",onClick:function(){return s(!0)},className:"me-2",children:t}),Object(w.jsxs)(P.a,Object(d.a)(Object(d.a)({show:o,onHide:function(){return s(!1)}},n),{},{children:[Object(w.jsx)(P.a.Header,{closeButton:!0,children:Object(w.jsx)(P.a.Title,{children:"Weather on your city"})}),Object(w.jsx)(P.a.Body,{children:0!==r.length?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{children:"Country: ".concat(r.location.country)}),Object(w.jsx)("p",{children:"Localtime: ".concat(r.location.localtime)}),Object(w.jsx)("p",{children:"City: ".concat(r.location.name)}),Object(w.jsx)("p",{children:"State: ".concat(r.location.region)}),Object(w.jsx)("p",{children:"Temperature Celcius: ".concat(r.current.temp_c)}),Object(w.jsx)("span",{children:"Weather descriptions: ".concat(r.current.condition.text)}),Object(w.jsx)("img",{src:r.current.condition.icon,alt:"icon"})]}):Object(w.jsx)(M.a,{animation:"grow"})})]}))]})}return Object(c.useEffect)((function(){o()}),[]),Object(w.jsxs)("header",{className:"header",children:[Object(w.jsx)("p",{id:"title",children:"Welcome ".concat(t.split("@")[0],"!")}),["end"].map((function(e,t){return Object(w.jsx)(s,{placement:e,name:"See weather"},t)}))]})})),z=n(109),H=n(74),W=(n(98),[{nome:"Acre"},{nome:"Alagoas"},{nome:"Amap\xe1"},{nome:"Amazonas"},{nome:"Bahia"},{nome:"Cear\xe1"},{nome:"Distrito Federal"},{nome:"Espirito Santo"},{nome:"Goi\xe1s"},{nome:"Maranh\xe3o"},{nome:"Mato Grosso do Sul"},{nome:"Mato Grosso"},{nome:"Minas Gerais"},{nome:"Par\xe1"},{nome:"Para\xedba"},{nome:"Paran\xe1"},{nome:"Pernambuco"},{nome:"Piau\xed"},{nome:"Rio de Janeiro"},{nome:"Rio Grande do Norte"},{nome:"Rio Grande do Sul"},{nome:"Rond\xf4nia"},{nome:"Roraima"},{nome:"Santa Catarina"},{nome:"S\xe3o Paulo"},{nome:"Sergipe"},{nome:"Tocantins"}]),J=n(108),K=n(42),Z=n(45);var V={delectAction:function(e){return{type:"ACTION_DELECT",id:e}},idForEdit:function(e){return{type:"ACTION_EDIT",payload:{id:e}}}},Q=Object(o.b)((function(e){return{register:e.registerReducer.register}}),V)((function(e){var t=e.register,n=e.delectAction,c=e.idForEdit;return Object(w.jsx)("fieldset",{children:Object(w.jsxs)(J.a,{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Id"}),Object(w.jsx)("th",{children:"First Name"}),Object(w.jsx)("th",{children:"Last name"}),Object(w.jsx)("th",{children:"City"}),Object(w.jsx)("th",{children:"State"})]})}),Object(w.jsxs)("tbody",{children:[console.log(t),t.map((function(e){var t=e.id,a=e.fName,r=e.lName,i=e.city,o=e.state;return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:t}),Object(w.jsx)("td",{children:a}),Object(w.jsx)("td",{children:r}),Object(w.jsx)("td",{children:i}),Object(w.jsx)("td",{children:o}),Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{onClick:function(){return c(t)},variant:"outline-warning",children:Object(w.jsx)(K.c,{})}),Object(w.jsx)(I.a,{onClick:function(){return function(e){Z.b.error("Register deleted"),n(e)}(t)},variant:"outline-danger",children:Object(w.jsx)(K.b,{})})]})]})}))]})]})})})),U=n(112);var X={closeModal:function(){return{type:"CLOSE_MODAL"}},saveChangesEdit:function(e,t){return{type:"SAVE_EDIT",payload:{objForEdit:e,id:t}}}},Y=Object(o.b)((function(e){return{sw:e.registerReducer.editSwitch}}),X)((function(e){var t=e.sw,n=e.closeModal,a=e.saveChangesEdit,r=function(){A(E+1),n(),a(L,E)},i=Object(c.useState)(""),o=Object(C.a)(i,2),s=o[0],j=o[1],l=Object(c.useState)(""),d=Object(C.a)(l,2),b=d[0],u=d[1],O=Object(c.useState)(""),h=Object(C.a)(O,2),x=h[0],m=h[1],p=Object(c.useState)(""),v=Object(C.a)(p,2),g=v[0],f=v[1],S=Object(c.useState)(0),N=Object(C.a)(S,2),E=N[0],A=N[1],L={fName:s,lName:b,city:x,state:g};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(U.a,{show:t,onHide:function(){return n()},children:[Object(w.jsx)(U.a.Header,{closeButton:!0,children:Object(w.jsx)(U.a.Title,{children:"Edit"})}),Object(w.jsx)(U.a.Body,{children:Object(w.jsxs)(y.a,{children:[Object(w.jsxs)(z.a,{className:"mb-4",children:[Object(w.jsxs)(y.a.Group,{as:H.a,md:"6",controlId:"validationCustom01",children:[Object(w.jsx)(y.a.Label,{children:"First name"}),Object(w.jsx)(y.a.Control,{value:s,onChange:function(e){var t=e.target;return j(t.value)},required:!0,type:"text",placeholder:"First name"})]}),Object(w.jsxs)(y.a.Group,{as:H.a,md:"6",controlId:"validationCustom01",children:[Object(w.jsx)(y.a.Label,{children:"Last Name"}),Object(w.jsx)(y.a.Control,{value:b,onChange:function(e){var t=e.target;return u(t.value)},required:!0,type:"text",placeholder:"First name"})]})]}),Object(w.jsxs)(z.a,{className:"md-2",children:[Object(w.jsxs)(y.a.Group,{as:H.a,md:"6",controlId:"validationCustom01",children:[Object(w.jsx)(y.a.Label,{children:"City"}),Object(w.jsx)(y.a.Control,{value:x,onChange:function(e){var t=e.target;return m(t.value)},required:!0,type:"text",placeholder:"First name"})]}),Object(w.jsxs)(y.a.Group,{as:H.a,md:"5",controlId:"validationCustom01",children:[Object(w.jsx)(y.a.Label,{children:"Select a state"}),Object(w.jsxs)(y.a.Select,{value:g,"aria-label":"Default select example",onChange:function(e){var t=e.target;return f(t.value)},children:[Object(w.jsx)("option",{children:"Select a state"}),W.map((function(e){var t=e.nome;return Object(w.jsx)("option",{children:t})}))]})]})]})]})}),Object(w.jsxs)(U.a.Footer,{children:[Object(w.jsx)(I.a,{variant:"secondary",onClick:r,children:"Close"}),Object(w.jsx)(I.a,{variant:"primary",onClick:r,children:"Save Changes"})]})]})})}));var $={reducerAction:function(e){return{type:"ACTION_REGISTER",payload:{objectRegister:e}}}},ee=Object(o.b)((function(e){return{editSwitch:e.registerReducer.editSwitch}}),$)((function(e){var t=e.reducerAction,n=(e.editSwitch,Object(c.useState)("")),a=Object(C.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(C.a)(o,2),j=s[0],l=s[1],d=Object(c.useState)(""),b=Object(C.a)(d,2),u=b[0],O=b[1],h=Object(c.useState)(""),x=Object(C.a)(h,2),m=x[0],p=x[1],v=Object(c.useState)(0),g=Object(C.a)(v,2),f=g[0],S=g[1],N={id:f,fName:r,lName:j,city:u,state:m},E=function(e){S(f+1),t(e),i(""),l(""),O(""),p("Select a state"),Z.b.success("Register sucess")};return Object(w.jsxs)("section",{className:"register",children:[Object(w.jsxs)(y.a,{children:[Object(w.jsx)(Z.a,{position:"top-right"}),Object(w.jsx)(Y,{}),Object(w.jsxs)(z.a,{className:"mb-3",children:[Object(w.jsxs)(y.a.Group,{as:H.a,md:"4",controlId:"validationCustom01",children:[Object(w.jsx)(y.a.Label,{children:"First name"}),Object(w.jsx)(y.a.Control,{value:r,onChange:function(e){var t=e.target;return i(t.value)},required:!0,type:"text",placeholder:"First name"})]}),Object(w.jsxs)(y.a.Group,{as:H.a,md:"4",controlId:"validationCustom02",children:[Object(w.jsx)(y.a.Label,{children:"Last names"}),Object(w.jsx)(y.a.Control,{value:j,onChange:function(e){var t=e.target;return l(t.value)},required:!0,type:"text",placeholder:"Last name"})]})]}),Object(w.jsxs)(z.a,{className:"mb-3",children:[Object(w.jsxs)(y.a.Group,{as:H.a,md:"4",controlId:"validationCustom03",children:[Object(w.jsx)(y.a.Label,{children:"City"}),Object(w.jsx)(y.a.Control,{value:u,type:"text",placeholder:"City",onChange:function(e){var t=e.target;return O(t.value)},required:!0}),Object(w.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}),Object(w.jsxs)(y.a.Group,{as:H.a,md:"3",controlId:"validationCustom04",children:[Object(w.jsx)(y.a.Label,{children:"State"}),Object(w.jsxs)(y.a.Select,{value:m,"aria-label":"Default select example",onChange:function(e){var t=e.target;return p(t.value)},children:[Object(w.jsx)("option",{children:"Select a state"}),W.map((function(e){var t=e.nome;return Object(w.jsx)("option",{children:t})}))]})]})]}),Object(w.jsx)(I.a,{onClick:function(){return E(N)},type:"button",children:"Register"})]}),Object(w.jsx)("div",{className:"tableOfRegister",children:Object(w.jsx)(Q,{})})]})}));var te=function(){return Object(w.jsx)("h1",{children:"Aquisdfaadsfdfasdfsadfdsfhfdjfgkjhlhgl"})},ne=n(80),ce=n(79);n(99);var ae=function(){return Object(w.jsx)("div",{className:"home",children:"Bem vindo!"})};var re=function(){return Object(w.jsx)(T.a,{render:function(e){var t=e.location,n=e.history;return Object(w.jsxs)(a.a.Fragment,{children:[Object(w.jsxs)(R.a,{style:{background:"#ADA996"},onSelect:function(e){var c="/"+e;t.pathname!==c&&n.push(c)},children:[Object(w.jsx)(R.a.Toggle,{}),Object(w.jsxs)(R.a.Nav,{defaultSelected:"home",children:[Object(w.jsxs)(F.NavItem,{eventKey:"home",children:[Object(w.jsx)(F.NavIcon,{children:Object(w.jsx)(K.a,{})}),Object(w.jsx)(F.NavText,{children:"Home"})]}),Object(w.jsxs)(F.NavItem,{eventKey:"register",children:[Object(w.jsx)(F.NavIcon,{children:Object(w.jsx)(ce.a,{})}),Object(w.jsx)(F.NavText,{children:"Register"})]}),Object(w.jsxs)(F.NavItem,{eventKey:"addEmployee",children:[Object(w.jsx)(F.NavIcon,{children:Object(w.jsx)(ne.a,{})}),Object(w.jsx)(F.NavText,{children:"Add-Employee"})]})]})]}),Object(w.jsxs)("main",{children:[Object(w.jsx)(B,{}),Object(w.jsx)(T.a,{path:"/home",exact:!0,component:ae}),Object(w.jsx)(T.a,{path:"/register",component:ee}),Object(w.jsx)(T.a,{path:"/addEmployee",component:te})]})]})}})};var ie=Object(o.b)((function(e){return{logged:e.loginReducer.email}}))((function(e){return e.logged?Object(w.jsx)("div",{children:Object(w.jsx)(re,{})}):Object(w.jsx)(L,{})})),oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(100);i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(f.a,{basename:"/react-redux-studies",children:Object(w.jsx)(o.a,{store:g,children:Object(w.jsx)(ie,{})})})}),document.getElementById("root")),oe()},85:function(e,t,n){},89:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.55cccdaa.chunk.js.map