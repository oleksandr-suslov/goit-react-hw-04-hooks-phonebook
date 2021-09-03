(this["webpackJsonpgoit-react-hw-04-phonebook"]=this["webpackJsonpgoit-react-hw-04-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={mainTitle:"PhoneBook_mainTitle__2fwx4",title:"PhoneBook_title__3kbfz"}},12:function(t,e,n){t.exports={btn:"Button_btn__1ss6v"}},18:function(t,e,n){},29:function(t,e,n){},3:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2-P3s",inputLabel:"ContactForm_inputLabel__1m-b6",input:"ContactForm_input__2D0pr"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),i=n.n(c),o=(n(18),n(13)),s=n(2),l=n(12),u=n.n(l),m=n(0);function b(t){var e=t.type,n=t.name,a=t.clickOnBtn,r=t.id,c=t.children;return Object(m.jsxs)("button",{className:u.a.btn,type:e,onClick:a,id:r,children:[n,c]})}var d,h,j=n(3),f=n.n(j),p=n(20);function v(t){var e=Object(a.useState)(""),n=Object(s.a)(e,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(s.a)(i,2),l=o[0],u=o[1],d=p.generate(),h=p.generate(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},v=function(){c(""),u("")};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onSubmit({name:r,number:l,id:p.generate()}),v()},className:f.a.contactForm,children:[Object(m.jsxs)("label",{className:f.a.inputLabel,htmlFor:d,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:j,className:f.a.input,id:d})]}),Object(m.jsxs)("label",{className:f.a.inputLabel,htmlFor:h,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:j,className:f.a.input,id:h})]}),Object(m.jsx)(b,{name:"Add contact",type:"submit",id:d})]})}var O=["title","titleId"];function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function x(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function g(t,e){var n=t.title,r=t.titleId,c=x(t,O);return a.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"bin"):n?a.createElement("title",{id:r},n):null,d||(d=a.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"})),h||(h=a.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"})))}var w=a.forwardRef(g),y=(n.p,n(5)),N=n.n(y);function C(t){var e=t.arr,n=t.nameBtn,a=t.onSubmit;return Object(m.jsx)("ul",{className:N.a.list,children:e.map((function(t){return Object(m.jsxs)("li",{className:N.a.item,children:[Object(m.jsxs)("span",{className:N.a.itemName,children:[t.name,":"]}),Object(m.jsxs)("span",{className:N.a.itemPhone,children:[" ",t.number]}),Object(m.jsx)(b,{name:n,clickOnBtn:function(t){t.preventDefault(),a(t.currentTarget.id)},id:t.id,children:Object(m.jsx)(w,{width:"20",height:"20",fill:"rgb(71, 71, 71)"})})]},t.id)}))})}var S=n(8),k=n.n(S);function F(t){var e=t.value,n=t.findContact;return Object(m.jsx)("form",{className:k.a.contactForm,children:Object(m.jsxs)("label",{className:k.a.inputLabel,children:["Find contact by name",Object(m.jsx)("input",{className:k.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)},required:!0})]})})}var L=n(10),B=n.n(L);function z(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){return window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,i]}("contacts",[{name:"David",number:"3235-43-21",id:"12"},{name:"Rony",number:"3235-43-51",id:"13"},{name:"Bob",number:"3235-43-81",id:"14"},{name:"Ivan",number:"3235-43-91",id:"15"},{name:"Jhon",number:"3235-43-51",id:"16"},{name:"Clark",number:"3235-43-21",id:"17"}]),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:B.a.mainTitle,children:"Phonebook"}),Object(m.jsx)(v,{nameBtn:"Add contact",onSubmit:function(t){n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):r((function(e){return[].concat(Object(o.a)(e),[t])}))}}),Object(m.jsx)("h2",{className:B.a.title,children:"Contacts"}),Object(m.jsx)(F,{value:l,findContact:function(t){u(t)}}),Object(m.jsx)(C,{arr:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),nameBtn:"Delete",onSubmit:function(t){r((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}n(29);var P=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(z,{})})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={list:"ContactList_list__1P2Ho",item:"ContactList_item__2ur5K",itemName:"ContactList_itemName__30C6K",itemPhone:"ContactList_itemPhone__2sG0P"}},8:function(t,e,n){t.exports={contactForm:"Filter_contactForm__1RsBm",inputLabel:"Filter_inputLabel__A2yEX",input:"Filter_input__23vUB"}}},[[30,1,2]]]);
//# sourceMappingURL=main.35d7eeae.chunk.js.map