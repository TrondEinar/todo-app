(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),s=o(7),n=o.n(s),a=(o(13),o(3)),l=(o(14),o(8)),i=o(0),d=function(t){var e=t.inputText,o=t.setInputText,c=t.todos,s=t.setTodos,n=t.setStatus;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{value:e,onChange:function(t){console.log(t.target.value),o(t.target.value)},type:"text",className:"todo-input"}),Object(i.jsx)("button",{onClick:function(t){t.preventDefault(),s([].concat(Object(l.a)(c),[{text:e,completed:!1,id:1e3*Math.random()}])),o("")},className:"todo-button",type:"submit",children:Object(i.jsx)("i",{className:"fas fa-plus-square"})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{onChange:function(t){n(t.target.value)},name:"todos",className:"filter-todo",children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"}),Object(i.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},r=o(6),u=function(t){var e=t.text,o=t.todo,c=t.todos,s=t.setTodos;return Object(i.jsxs)("div",{className:"todo",children:[Object(i.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(i.jsx)("button",{onClick:function(){s(c.map((function(t){return t.id===o.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(i.jsx)("i",{className:"fas fa-check"})}),Object(i.jsx)("button",{onClick:function(){s(c.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(i.jsx)("i",{className:"fas fa-trash"})})]})},j=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return console.log(e),Object(i.jsx)("div",{className:"todo-container",children:Object(i.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(i.jsx)(u,{setTodos:o,todos:e,todo:t,text:t.text},t.id)}))})})};var b=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),o=e[0],s=e[1],n=Object(c.useState)([]),l=Object(a.a)(n,2),r=l[0],u=l[1],b=Object(c.useState)("all"),f=Object(a.a)(b,2),m=f[0],p=f[1],O=Object(c.useState)([]),x=Object(a.a)(O,2),h=x[0],v=x[1];Object(c.useEffect)((function(){N(),g()}),[r,m]),Object(c.useEffect)((function(){T()}),[]);var N=function(){switch(m){case"completed":v(r.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(r.filter((function(t){return!1===t.completed})));break;default:v(r)}},g=function(){localStorage.setItem("todos",JSON.stringify(r))},T=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:" Trond Einar\xb4s Todo List "})}),Object(i.jsx)(d,{todos:r,setTodos:u,inputText:o,setInputText:s,setStatus:p}),Object(i.jsx)(j,{setTodos:u,todos:r,filteredTodos:h})]})};n.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fe39620f.chunk.js.map