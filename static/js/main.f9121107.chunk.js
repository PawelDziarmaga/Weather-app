(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),r=(n(9),n(2)),o=n(0);var j=function(t){var e=t.data,n=t.change,a=t.click,c=e.map((function(t){return t.stacja})).map((function(t){return Object(o.jsx)("option",{value:t},t)}));return Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("label",{htmlFor:"city-input",children:"Wymierz miasto: "}),Object(o.jsx)("input",{onChange:n,list:"city-list",id:"city-input",name:"city-input"}),Object(o.jsx)("datalist",{id:"city-list",children:c}),Object(o.jsx)("button",{onClick:a,children:"Wyszukaj"})]})};var u=function(t){var e=t.choosenCity,n=[["Ci\u015bnienie","hPa",e.cisnienie],["Suma opad\xf3w","mm",e.suma_opadu],["Temperatura","\xb0C",e.temperatura],["Wilgotnosc","%",e.wilgotnosc_wzgledna],["Data pomiaru","",e.data_pomiaru],["Godzina pomiaru","","".concat(e.godzina_pomiaru,":00")]].map((function(t){return Object(o.jsxs)("li",{children:[Object(o.jsxs)("span",{className:"info-list__name",children:[t[0]," - "]}),Object(o.jsxs)("span",{className:"info-list__info",children:[t[2]," ",t[1]]})]})}));return Object(o.jsxs)("div",{className:"info-list",children:[Object(o.jsxs)("h2",{children:["Wybrane miasto: ",Object(o.jsx)("span",{children:e.stacja})]}),Object(o.jsx)("ul",{children:n})]})};var l=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)([]),s=Object(r.a)(i,2),l=s[0],p=s[1],d=Object(a.useState)(""),h=Object(r.a)(d,2),b=h[0],m=h[1];return Object(a.useEffect)((function(){fetch("https://danepubliczne.imgw.pl/api/data/synop").then((function(t){if(t.ok)return t;throw Error(t.status)})).then((function(t){return t.json()})).then((function(t){p(t)})).catch((function(t){return console.log(t)}))}),[]),Object(o.jsxs)("form",{className:"form",children:[Object(o.jsx)(j,{click:function(t){t.preventDefault();var e=l.filter((function(t){return t.stacja===n}));e=e[0],m(e)},change:function(t){var e=t.target.value;c(e)},data:l}),b?Object(o.jsx)(u,{choosenCity:b}):null]})};var p=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("div",{className:"app__bg"}),Object(o.jsxs)("div",{className:"app__content",children:[Object(o.jsx)("h1",{className:"app__header",children:"Sprawdz pogod\u0119"}),Object(o.jsx)(l,{}),Object(o.jsx)("h4",{className:"app__info",children:"\u0179r\xf3d\u0142em pochodzenia danych jest Instytut Meteorologii i Gospodarki Wodnej \u2013 Pa\u0144stwowy Instytut Badawczy"})]})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.f9121107.chunk.js.map