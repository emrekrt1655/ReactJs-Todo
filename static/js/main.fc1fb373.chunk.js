(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{18:function(t,e,o){},19:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o(1),a=o.n(n),s=o(10),d=o.n(s),i=(o(18),o(3)),r=o(5),u=o(11),j=o(12),l=o(7),O=Object(n.createContext)(),b=function(t){var e=t.initialState,o=t.reducer,a=t.children;return Object(c.jsx)(O.Provider,{value:Object(n.useReducer)(o,e),children:a})},p=function(){return Object(n.useContext)(O)},f=function(t){var e,o=t.todo,a=p(),s=Object(i.a)(a,2);Object(u.a)(s[0]);var d=s[1],O=Object(n.useState)(!1),b=Object(i.a)(O,2),f=b[0],h=b[1],m=Object(n.useState)(o.content),v=Object(i.a)(m,2),x=v[0],y=v[1],C=Object(j.a)((e={},Object(r.a)(e,"todo-row",!0),Object(r.a)(e,"completed",o.isCompleted),e));return Object(c.jsxs)("div",{className:C,children:[Object(c.jsx)("div",{onClick:function(){return f?"":(t=o.id,void d({type:"COMPLETE_TODO",payload:t}));var t},children:f?Object(c.jsx)("input",{type:"text",value:x,className:"todo-input-edit",onChange:function(t){return y(t.target.value)}}):o.content}),Object(c.jsxs)("div",{className:"todo-icons",children:[Object(c.jsx)(l.b,{className:"todo-icon",onClick:function(){return t=o.id,void d({type:"REMOVE_TODO",payload:t});var t}}),f?Object(c.jsx)(l.a,{className:"todo-icon",onClick:function(){!function(t){var e=t.todoId,o=t.newValue;d({type:"UPDATE_TODO",payload:{todoId:e,newValue:o}})}({todoId:o.id,newValue:x}),h(!1),y("")}}):Object(c.jsx)(l.c,{className:"todo-icon",onClick:function(){return h(!0)}})]})]})},h=function(t){var e=t.todos;return Object(c.jsx)("div",{className:"todo-list",children:e&&e.map((function(t){return Object(c.jsx)(f,{todo:t},t.id)}))})},m=(o(19),function(){var t=p(),e=Object(i.a)(t,2),o=e[0].todos,a=e[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),r=d[0],u=d[1],j=Object(n.useRef)(null);Object(n.useEffect)((function(){j.current.focus()}),[]);var l=[],O=[];o&&o.map((function(t){!(null===t||void 0===t?void 0:t.isCompleted)&&l.push(t),(null===t||void 0===t?void 0:t.isCompleted)&&O.push(t)}));return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"countPart",children:[Object(c.jsxs)("h1",{className:"count",children:[Object(c.jsx)("span",{children:"Todos :"})," ",l.length," "]}),Object(c.jsxs)("h1",{className:"count",children:[Object(c.jsx)("span",{children:"Done :"})," ",O.length," "]})]}),Object(c.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),r){var e={id:Math.floor(39399393*Math.random()),content:r,isCompleted:!1};a({type:"ADD_TODO",payload:e}),u("")}},className:"todo-form",children:[Object(c.jsx)("input",{type:"text",value:r,className:"todo-input",placeholder:"What Are you plaining?",ref:j,onChange:function(t){return u(t.target.value)}}),Object(c.jsx)("button",{className:"todo-button",children:"Add"})]}),Object(c.jsx)(h,{todos:o})]})}),v=o(9),x=o(2),y=function(t,e){switch(e.type){case"ADD_TODO":return Object(x.a)(Object(x.a)({},t),{},{todos:[e.payload].concat(Object(v.a)(t.todos))});case"REMOVE_TODO":return Object(x.a)(Object(x.a)({},t),{},{todos:Object(v.a)(t.todos).filter((function(t){return t.id!==e.payload}))});case"UPDATE_TODO":return Object(x.a)(Object(x.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==e.payload.todoId?t:Object(x.a)(Object(x.a)({},t),{},{content:e.payload.newValue})}))});case"COMPLETE_TODO":return Object(x.a)(Object(x.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==e.payload?t:Object(x.a)(Object(x.a)({},t),{},{isCompleted:!t.isCompleted})}))});default:return Object(x.a)({},t)}};d.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b,{initialState:{todos:[]},reducer:y,children:Object(c.jsx)(m,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fc1fb373.chunk.js.map