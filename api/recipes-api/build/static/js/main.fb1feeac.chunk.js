(this["webpackJsonprecipes-api"]=this["webpackJsonprecipes-api"]||[]).push([[0],{131:function(e,c,t){},147:function(e,c,t){},148:function(e,c,t){},444:function(e,c,t){},471:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t.n(a),i=t(24),n=t.n(i),j=(t(147),t(148),t(149),t(444),t(15)),l=t(1),r=function(e){return Object(l.jsx)("nav",{className:"navbar p-5 d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"navbar-nav p-1",children:[Object(l.jsx)("div",{className:"nav-item ",children:Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("div",{className:"nav-link",children:"G\u0142\xf3wna"})})}),Object(l.jsx)("div",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/sweets",children:Object(l.jsx)("div",{className:"nav-link",children:"S\u0142odko\u015bci"})})}),Object(l.jsx)("div",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/main",children:Object(l.jsx)("div",{className:"nav-link",children:"Dania g\u0142\xf3wne"})})}),Object(l.jsx)("div",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/soups",children:Object(l.jsx)("div",{className:"nav-link",children:"Zupy"})})}),Object(l.jsx)("div",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/cocktails",children:Object(l.jsx)("div",{className:"nav-link",children:"Koktajle"})})}),Object(l.jsx)("div",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/add",children:Object(l.jsx)("div",{className:"nav-link",children:"Dodaj w\u0142asny"})})})]})})},d=t(30),b=t(29),o=(t(131),t(59)),h=t.n(o),O=t.p+"static/media/pot.ac79aa60.jpg",x=function(e){var c=Object(a.useState)([]),t=Object(d.a)(c,2),s=t[0],i=t[1],n=Object(a.useState)(!1),r=Object(d.a)(n,2),o=r[0],x=r[1];return Object(a.useEffect)((function(){h.a.get("/all/api".concat(e.url)).then((function(e){var c=e.data;i(c),x(!0)})).catch((function(){alert("Error received data! ".concat(e.url," "))}))}),[e.url]),Object(l.jsx)(b.a,{className:"col-sm-10 col-lg-8 col-xl-8 min-vh-100",children:o?(console.log(s),console.log(typeof s),s?s.map((function(c,t){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{className:"card-img-top",src:c.img?c.img:O,alt:"Card image"}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:c.name}),Object(l.jsx)(j.b,{to:"/".concat(e.url,"/").concat(c.id),className:"btn btn-primary",children:"Zobacz przepis"})]})]},t)})):null):Object(l.jsx)("i",{className:"fas fa-4x fa-spinner fa-spin"})})},m=function(){var e=Object(a.useState)([]),c=Object(d.a)(e,2),t=c[0],s=c[1],i=Object(a.useState)(!1),n=Object(d.a)(i,2),j=n[0],r=n[1],o=window.location.pathname.substring(1),O=o.indexOf("/"),x=o.substring(O+1);return Object(a.useEffect)((function(){h.a.get("/search/product".concat(x)).then((function(e){var c=e.data;s(c),r(!0)})).catch((function(){alert("Error received data! ")}))}),[]),Object(l.jsx)(b.a,{className:"min-vh-100",children:j?t.map((function(e,c){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h1",{className:"card-title",children:e.name}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h3",{children:"Sk\u0142adniki: "}),e.ingredients.map((function(e,c){return Object(l.jsx)("p",{children:e},c)})),Object(l.jsx)("h3",{children:"Spos\xf3b przygotowania:"}),Object(l.jsx)("p",{children:e.preparation}),e.img?Object(l.jsx)("img",{className:"card-img-top",src:e.img,alt:"Card image"}):null]})]},c)})):Object(l.jsx)("i",{className:"fas fa-4x fa-spinner fa-spin"})})},p=t(4);function u(){return Object(l.jsxs)(b.a,{className:"vh-100",children:[Object(l.jsx)("h1",{className:"mt-4 p-4",children:"Baza przepis\xf3w"}),Object(l.jsx)("h2",{className:"p-3",children:"Witamy w bazie przepis\xf3w. Wybierz interesuj\u0105c\u0105 Ci\u0119 kategorie da\u0144 lub dodaj w\u0142asny przepis"})]})}function v(){var e=Object(a.useState)(void 0),c=Object(d.a)(e,2),t=c[0],s=c[1];function i(){if(this.files&&this.files[0]){var e=new FileReader;e.addEventListener("load",(function(e){document.getElementById("img").src=e.target.result,s(e.target.result)})),e.readAsDataURL(this.files[0])}}return Object(a.useEffect)((function(){document.getElementById("inp").addEventListener("change",i)}),[]),Object(l.jsxs)("div",{className:"min-vh-100",children:[Object(l.jsx)("h1",{children:"Dodaj przepis"}),Object(l.jsx)("form",{className:"form-horizontal",action:"/add",method:"POST",encType:"multipart/form-data",children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Nazwa dania:"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"w-50 p-2",type:"text",name:"title",placeholder:"nazwa",required:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"category",children:"Wybierz kategorie:"}),Object(l.jsx)("br",{}),Object(l.jsxs)("select",{name:"category",id:"cat",required:!0,children:[Object(l.jsx)("option",{value:"sweets",children:"S\u0142odko\u015bci"}),Object(l.jsx)("option",{value:"main",children:"Dania g\u0142\xf3wne"}),Object(l.jsx)("option",{value:"soups",children:"Zupy"}),Object(l.jsx)("option",{value:"cocktails",children:"Koktajle"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"ingredients",children:"Sk\u0142adniki: (oddzielane \u015brednikami)"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"w-50 p-2",type:"text",name:"ingredients",placeholder:"piepsz;s\xf3l",required:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"prepatarion",children:"Opis przygotowania:"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{className:"w-50 p-2",name:"preparation",placeholder:"Zagotuj wod\u0119..",required:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"uploadedFile",children:"Zdj\u0119cie nie jest wymagane"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"file",id:"inp",name:"uploadedFile"}),Object(l.jsx)("br",{}),Object(l.jsx)("img",{id:"img",height:"150"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"hidden",name:"fileValue",value:t}),Object(l.jsx)("input",{type:"submit",value:"Wy\u015blij przepis"})]})})]})}var f=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b.a,{children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-2 col-lg-2 col-sm-4 bg-secondary h-auto",children:Object(l.jsx)(r,{})}),Object(l.jsxs)("div",{className:"col-md-10 col-lg-10 col-sm-8 bg-light",children:[Object(l.jsx)(p.c,{children:Object(l.jsx)(p.a,{exact:!0,path:"/",children:Object(l.jsx)(u,{})})}),Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{exact:!0,path:"/sweets",children:Object(l.jsx)(x,{url:"sweets"})}),Object(l.jsx)(p.a,{exact:!0,path:"/main",children:Object(l.jsx)(x,{url:"main"})}),Object(l.jsx)(p.a,{exact:!0,path:"/soups",children:Object(l.jsx)(x,{url:"soups"})}),Object(l.jsx)(p.a,{exact:!0,path:"/cocktails",children:Object(l.jsx)(x,{url:"cocktails"})}),Object(l.jsx)(p.a,{path:"/(sweets|main|soups|cocktails)/(.*)",children:Object(l.jsx)(m,{})}),Object(l.jsx)(p.a,{path:"/add",children:Object(l.jsx)(v,{})})]})]})]})})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,472)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,i=c.getLCP,n=c.getTTFB;t(e),a(e),s(e),i(e),n(e)}))};t(470);n.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})})}),document.getElementById("root")),g()}},[[471,1,2]]]);
//# sourceMappingURL=main.fb1feeac.chunk.js.map