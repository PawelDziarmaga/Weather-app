(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),o=(n(9),n(2)),r=n(0);var l=function(t){var e=t.data,n=t.change,a=t.click,c=e.map((function(t){return t.stacja})).map((function(t){return Object(r.jsx)("option",{value:t},t)}));return Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"city-input",children:"Wymierz miasto: "}),Object(r.jsx)("input",{onChange:n,list:"city-list",id:"city-input",name:"city-input"}),Object(r.jsx)("datalist",{id:"city-list",children:c}),Object(r.jsx)("button",{onClick:a,children:"Wyszukaj"})]})};var u=function(t){var e=t.choosenCity,n=[["Ci\u015bnienie","hPa",e.cisnienie],["Suma opad\xf3w","mm",e.suma_opadu],["Temperatura","\xb0C",e.temperatura],["Wilgotnosc","%",e.wilgotnosc_wzgledna],["Data pomiaru","",e.data_pomiaru],["Godzina pomiaru","","".concat(e.godzina_pomiaru,":00")]].map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("span",{className:"info-list__name",children:[t[0]," - "]}),Object(r.jsxs)("span",{className:"info-list__info",children:[t[2]," ",t[1]]})]},t[0])}));return Object(r.jsxs)("div",{className:"info-list",children:[Object(r.jsxs)("h2",{children:["Wybrane miasto: ",Object(r.jsx)("span",{children:e.stacja})]}),Object(r.jsx)("ul",{children:n})]})};var j=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),j=s[0],p=s[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),b=h[0],m=h[1];return Object(a.useEffect)((function(){fetch("https://danepubliczne.imgw.pl/api/data/synop").then((function(t){if(t.ok)return t;throw Error(t.status)})).then((function(t){return t.json()})).then((function(t){p(t)})).catch((function(t){return console.log(t)}))}),[]),Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)(l,{click:function(t){t.preventDefault();var e=j.filter((function(t){return t.stacja===n}));e=e[0],m(e),document.getElementById("city-input").value=""},change:function(t){var e=t.target.value;c(e)},data:j}),b?Object(r.jsx)(u,{choosenCity:b}):null]})};var p=function(){return console.log(function(t){for(var e={},n=0;n<t.length;n++)isNaN(parseInt(t[n]))||(e[t[n]]=!0);console.log(e);for(var a=0;a<10;a++)return console.log(e[a]),!!e[a]}("fawfwa")),Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"app__bg"}),Object(r.jsxs)("div",{className:"app__content",children:[Object(r.jsx)("h1",{className:"app__header",children:"Sprawdz pogod\u0119"}),Object(r.jsx)(j,{}),Object(r.jsx)("h4",{className:"app__info",children:"\u0179r\xf3d\u0142em pochodzenia danych jest Instytut Meteorologii i Gospodarki Wodnej \u2013 Pa\u0144stwowy Instytut Badawczy"})]})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.32d85405.chunk.js.map