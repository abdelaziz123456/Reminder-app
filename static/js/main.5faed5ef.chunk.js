(this["webpackJsonpreminder-app"]=this["webpackJsonpreminder-app"]||[]).push([[0],{26:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(3),c=r.n(a),i=r(8),s=r(9),o=r(14),d=r(11),h=(r(19),r(4)),j="ADD_REMINDER",v="REMOVE_REMINDER",l="CLEAR_REMINDER",f=r(10),b=r.n(f),u=r(1),m=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={text:"",date:new Date},e.render_Reminder=function(){var t=e.props.reminders;return Object(u.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("div",{children:t.text}),Object(u.jsx)("div",{children:b()(new Date(t.date)).fromNow()}),Object(u.jsx)("div",{className:" btn  closeIcon",onClick:function(){return e.props.remove_Reminder(t.id)},children:"X"})]},t.id)}))})},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(u.jsx)("div",{className:"reminder-title",children:Object(u.jsx)("h2",{children:"What Should You Do?"})}),Object(u.jsxs)("form",{action:"#",children:[Object(u.jsx)("input",{type:"text",placeholder:"what do you think ?",className:"form-control",onChange:function(t){e.setState({text:t.target.value})},value:this.state.text}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"datetime-local",className:"form-control",onChange:function(t){return e.setState({date:t.target.value})},value:this.state.date}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){e.props.add_Reminder(e.state.text,e.state.date),e.setState({text:"",date:""})},className:" btn special  w-100",children:"Add Reminders"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),this.render_Reminder(),Object(u.jsx)("button",{className:" btn special w-100 clear-reminder",onClick:function(){return e.props.clear_Reminder()},children:"Clear Reminders"})]})]})}}]),r}(n.Component);var A=Object(h.b)((function(e){return{reminders:e}}),{add_Reminder:function(e,t){return{type:j,text:e,date:t}},remove_Reminder:function(e){return{type:v,id:e}},clear_Reminder:function(){return{type:l}}})(m),p=r(12),C=r(2),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=[];return e=Object(C.read_cookie)("reminders"),t.type===j?(r=[].concat(Object(p.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(C.bake_cookie)("reminders",r),r):t.type===v?(r=e.filter((function(e){return e.id!==t.id})),Object(C.bake_cookie)("reminders",r),r):t.type===l?(r=[],Object(C.bake_cookie)("reminders",r),r):e},E=r(13),x=(r(26),Object(E.a)(w));c.a.render(Object(u.jsx)(h.a,{store:x,children:Object(u.jsx)(A,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5faed5ef.chunk.js.map