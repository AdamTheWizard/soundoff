(this.webpackJsonpsoundoff=this.webpackJsonpsoundoff||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),o=(t(14),t(4)),s=t(5),i=t(8),m=t(6),u=t(1),d=t(7);t(15);var b=function(e){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("input",{type:"text",id:"search-box",className:"search-box",value:e.placeholder,onChange:e.handleChange}),r.a.createElement("input",{type:"submit",id:"submit",className:"submit",value:"SUBMIT"}),r.a.createElement("svg",{viewBox:"0 0 20 25",class:""},r.a.createElement("path",{d:"M9.078 3.759a6.22 6.22 0 0 0-3.464 1.035l-.077.076c-1.385.92-2.348 2.338-2.656 3.947-.346 1.648 0 3.296.924 4.675a6.265 6.265 0 0 0 5.197 2.76 6.22 6.22 0 0 0 3.464-1.036l.077-.076c2.848-1.916 3.656-5.748 1.732-8.622a6.265 6.265 0 0 0-5.197-2.759zm7.93 20.692l-3.541-5.288c-.039-.038-.039-.076-.077-.115-.308-.498-.693-.613-1.001-.613-.154 0-.231.039-.231.039l-.732.153a8.895 8.895 0 0 1-2.463.345 8.965 8.965 0 0 1-7.467-3.985c-2.733-4.1-1.617-9.695 2.502-12.416l.077-.077C5.537 1.498 7.269 1 9.04 1c3.04 0 5.85 1.494 7.506 3.985 2.194 3.257 2.001 7.396-.423 10.538l-.424.575c-.038.038-.5.613.039 1.341.038.038.038.077.077.115v.038l3.54 5.288-2.347 1.571z",fill:"#fff","stroke-width":"1px","fill-rule":"evenodd"}))))};var v=function(e){return r.a.createElement("a",{href:e.link},r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:e.artwork}),r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("small",null,"View more")))};function h(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("div",{className:"logo-bar br1-2"}),r.a.createElement("div",{className:"logo-bar br2-2"}),r.a.createElement("div",{className:"logo-bar br3-2"}),r.a.createElement("div",{className:"logo-bar br4-2"}),r.a.createElement("div",{className:"logo-bar br5-2"}),r.a.createElement("div",{className:"logo-bar br6-2"}),r.a.createElement("div",{className:"logo-bar br7-2"})),r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-list"},r.a.createElement("a",{href:"#",className:"nav-item"},r.a.createElement("li",null,"About")))))}function E(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"soundbar br1"}),r.a.createElement("div",{className:"soundbar br2"}),r.a.createElement("div",{className:"soundbar br3"}),r.a.createElement("div",{className:"soundbar br4"}),r.a.createElement("div",{className:"soundbar br5"}),r.a.createElement("div",{className:"soundbar br6"}),r.a.createElement("div",{className:"soundbar br7"})))}var f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={ArrayVA:[]},t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=document.querySelector("#search-box").value;fetch("https://api.soundcloud.com/tracks?q="+t+"&client_id=PGBAyVqBYXvDBjeaz3kSsHAMnr1fndq1").then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({ArrayVA:e.map((function(e){return r.a.createElement(v,{title:e.title,artwork:e.artwork_url,link:e.permalink_url})}))}),console.log()}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(b,{placeholder:"Search...",handleSubmit:this.handleSubmit}),r.a.createElement("div",{className:"cards-container"},this.state.ArrayVA),r.a.createElement(E,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.647a81b1.chunk.js.map