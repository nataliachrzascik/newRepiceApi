(this["webpackJsonprecipes-api"]=this["webpackJsonprecipes-api"]||[]).push([[0],{133:function(e,c,t){},150:function(e,c,t){},151:function(e,c,t){},447:function(e,c,t){},470:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(2),i=t.n(s),n=t(24),j=t.n(n),r=(t(150),t(151),t(152),t(447),t(17)),l=function(e){return Object(a.jsx)("nav",{className:"navbar p-5 d-flex justify-content-center",children:Object(a.jsxs)("div",{className:"navbar-nav p-1",children:[Object(a.jsx)("div",{className:"nav-item ",children:Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("div",{className:"nav-link",children:"G\u0142\xf3wna"})})}),Object(a.jsx)("div",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/sweets",children:Object(a.jsx)("div",{className:"nav-link",children:"S\u0142odko\u015bci"})})}),Object(a.jsx)("div",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/main",children:Object(a.jsx)("div",{className:"nav-link",children:"Dania g\u0142\xf3wne"})})}),Object(a.jsx)("div",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/soups",children:Object(a.jsx)("div",{className:"nav-link",children:"Zupy"})})}),Object(a.jsx)("div",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/cocktails",children:Object(a.jsx)("div",{className:"nav-link",children:"Koktajle"})})}),Object(a.jsx)("div",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/add",children:Object(a.jsx)("div",{className:"nav-link",children:"Dodaj w\u0142asny"})})})]})})},d=t(30),b=t(29),o=(t(133),t(59)),h=t.n(o),O=t.p+"static/media/pot.ac79aa60.jpg",x=function(e){var c=Object(s.useState)([]),t=Object(d.a)(c,2),i=t[0],n=t[1],j=Object(s.useState)(!1),l=Object(d.a)(j,2),o=l[0],x=l[1];return Object(s.useEffect)((function(){h.a.get("/all/api".concat(e.url)).then((function(e){var c=e.data;n(c),x(!0)})).catch((function(){alert("Error received data! ")}))}),[e.url]),Object(a.jsx)(b.a,{className:"col-sm-10 col-lg-8 col-xl-8 min-vh-100",children:o?i?i.map((function(c,t){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card-img-top",src:c.img?c.img:O,alt:"Card image"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:c.name}),Object(a.jsx)(r.b,{to:"/".concat(e.url,"/").concat(c.id),className:"btn btn-primary",children:"Zobacz przepis"})]})]},t)})):null:Object(a.jsx)("i",{className:"fas fa-4x fa-spinner fa-spin"})})},m=function(){var e=Object(s.useState)([]),c=Object(d.a)(e,2),t=c[0],i=c[1],n=Object(s.useState)(!1),j=Object(d.a)(n,2),r=j[0],l=j[1],o=window.location.pathname.substring(1),O=o.indexOf("/"),x=o.substring(O+1);return Object(s.useEffect)((function(){h.a.get("/search/product".concat(x)).then((function(e){var c=e.data;i(c),l(!0)})).catch((function(){alert("Error received data! ")}))}),[]),Object(a.jsx)(b.a,{className:"min-vh-100",children:r?t.map((function(e,c){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("h1",{className:"card-title",children:e.name}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{children:"Sk\u0142adniki: "}),e.ingredients.map((function(e,c){return Object(a.jsx)("p",{children:e},c)})),Object(a.jsx)("h3",{children:"Spos\xf3b przygotowania:"}),Object(a.jsx)("p",{children:e.preparation}),e.img?Object(a.jsx)("img",{className:"card-img-top",src:e.img,alt:"Card image"}):null]})]},c)})):Object(a.jsx)("i",{className:"fas fa-4x fa-spinner fa-spin"})})},p=t(4);function u(){return Object(a.jsxs)(b.a,{className:"vh-100",children:[Object(a.jsx)("h1",{className:"mt-4 p-4",children:"Baza przepis\xf3w"}),Object(a.jsx)("h2",{className:"p-3",children:"Witamy w bazie przepis\xf3w. Wybierz interesuj\u0105c\u0105 Ci\u0119 kategorie da\u0144 lub dodaj w\u0142asny przepis"})]})}function v(){var e=Object(s.useState)(void 0),c=Object(d.a)(e,2),t=c[0],i=c[1];function n(){if(this.files&&this.files[0]){var e=new FileReader;e.addEventListener("load",(function(e){document.getElementById("img").src=e.target.result,i(e.target.result)})),e.readAsDataURL(this.files[0])}}return Object(s.useEffect)((function(){document.getElementById("inp").addEventListener("change",n)}),[]),Object(a.jsxs)("div",{className:"min-vh-100",children:[Object(a.jsx)("h1",{children:"Dodaj przepis"}),Object(a.jsx)("form",{className:"form-horizontal",action:"/add",method:"POST",encType:"multipart/form-data",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"Nazwa dania:"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"w-50 p-2",type:"text",name:"title",placeholder:"nazwa",required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"category",children:"Wybierz kategorie:"}),Object(a.jsx)("br",{}),Object(a.jsxs)("select",{name:"category",id:"cat",required:!0,children:[Object(a.jsx)("option",{value:"sweets",children:"S\u0142odko\u015bci"}),Object(a.jsx)("option",{value:"main",children:"Dania g\u0142\xf3wne"}),Object(a.jsx)("option",{value:"soups",children:"Zupy"}),Object(a.jsx)("option",{value:"cocktails",children:"Koktajle"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"ingredients",children:"Sk\u0142adniki: (oddzielane \u015brednikami)"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"w-50 p-2",type:"text",name:"ingredients",placeholder:"piepsz;s\xf3l",required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"prepatarion",children:"Opis przygotowania:"}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{className:"w-50 p-2",name:"preparation",placeholder:"Zagotuj wod\u0119..",required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"uploadedFile",children:"Zdj\u0119cie nie jest wymagane"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"file",id:"inp",name:"uploadedFile"}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{id:"img",height:"150"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"hidden",name:"fileValue",value:t}),Object(a.jsx)("input",{type:"submit",value:"Wy\u015blij przepis"})]})})]})}var f=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(b.a,{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-2 col-lg-2 col-sm-4 bg-secondary h-auto",children:Object(a.jsx)(l,{})}),Object(a.jsxs)("div",{className:"col-md-10 col-lg-10 col-sm-8 bg-light",children:[Object(a.jsx)(p.c,{children:Object(a.jsx)(p.a,{exact:!0,path:"/",children:Object(a.jsx)(u,{})})}),Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{exact:!0,path:"/sweets",children:Object(a.jsx)(x,{url:"sweets"})}),Object(a.jsx)(p.a,{exact:!0,path:"/main",children:Object(a.jsx)(x,{url:"main"})}),Object(a.jsx)(p.a,{exact:!0,path:"/soups",children:Object(a.jsx)(x,{url:"soups"})}),Object(a.jsx)(p.a,{exact:!0,path:"/cocktails",children:Object(a.jsx)(x,{url:"cocktails"})}),Object(a.jsx)(p.a,{path:"/(sweets|main|soups|cocktails)/(.*)",children:Object(a.jsx)(m,{})}),Object(a.jsx)(p.a,{path:"/add",children:Object(a.jsx)(v,{})})]})]})]})})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,471)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,i=c.getLCP,n=c.getTTFB;t(e),a(e),s(e),i(e),n(e)}))};t(469);j.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})})}),document.getElementById("root")),g()}},[[470,1,2]]]);
//# sourceMappingURL=main.9020894c.chunk.js.map