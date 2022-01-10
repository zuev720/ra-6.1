(this["webpackJsonpra-6.1"]=this["webpackJsonpra-6.1"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(9),i=n.n(c),r=(n(17),n(18),n(12)),o=n(10),l=n(3),u=n(4),h=n(7),j=n(6),m=n(5),p=n(0),b=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("label",{htmlFor:this.props.id,className:"label",children:this.props.text})}}]),n}(s.a.Component),d=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("input",{id:this.props.name,type:"text",className:"inputForm",name:this.props.name,value:this.props.value,onChange:this.props.handleChange,pattern:this.props.pattern,required:!0})}}]),n}(s.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("button",{id:this.props.id,className:this.props.className,type:this.props.type,onClick:this.props.click,children:this.props.children})}}]),n}(s.a.Component),f=(n(20),n(11)),v=(n(21),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("p",{className:"clockText",children:this.props.children})}}]),n}(s.a.Component));function k(e){var t=e- -(new Date).getTimezoneOffset()/60;return new Date((new Date).getTime()+3600*t*1e3)}var C=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={date:k(a.props.userOffset)},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:k(this.props.userOffset)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(p.jsxs)("li",{className:"ClockComponent",children:[Object(p.jsx)(v,{children:this.props.name}),Object(p.jsxs)("div",{className:"clockComponentBody",children:[Object(p.jsx)(f.a,{value:this.state.date,size:120,renderNumbers:!0,hourMarksWidth:2,hourMarksLength:8}),Object(p.jsx)(O,{id:this.props.name,className:"deleteClockButton",type:"button",click:this.props.onDeleteClock,children:"\u2573"})]})]})}}]),n}(s.a.Component),x=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={name:"",timeZone:"",timeObjects:[]},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(h.a)(a)),a.onDeleteClock=a.onDeleteClock.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var t=Object(r.a)(e.target.elements).filter((function(e){return e.name})).reduce((function(e,t){return e[t.name]=t.value.trim(),e}),{}),n=this.state.timeObjects;n.push(t),this.setState({name:"",timeZone:"",timeObjects:n})}},{key:"onDeleteClock",value:function(e){var t=e.target.id,n=this.state.timeObjects.filter((function(e){return e.name!==t}));this.setState({timeObjects:n})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"WorldClockApp",children:[Object(p.jsxs)("form",{className:"WorldClockForm",onSubmit:this.handleFormSubmit,children:[Object(p.jsxs)("div",{className:"inputBlock",children:[Object(p.jsx)(b,{id:"name",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(p.jsx)(d,{name:"name",handleChange:this.handleChange,value:this.state.name,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 ]+$"})]}),Object(p.jsxs)("div",{className:"inputBlock",children:[Object(p.jsx)(b,{id:"timeZone",text:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"}),Object(p.jsx)(d,{name:"timeZone",handleChange:this.handleChange,value:this.state.timeZone,pattern:"^[ 0-9]+$"})]}),Object(p.jsx)(O,{className:"formButton",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(p.jsx)("ul",{className:"ClockList",children:this.state.timeObjects.map((function(t,n){return Object(p.jsx)(C,{size:"120px",userOffset:t.timeZone,name:t.name,onDeleteClock:e.onDeleteClock},n)}))})]})}}]),n}(s.a.Component);var y=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),g()}},[[24,1,2]]]);
//# sourceMappingURL=main.cbb1a3e3.chunk.js.map