(this.webpackJsonpsoundoff=this.webpackJsonpsoundoff||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(14),a(4)),i=a(5),s=a(8),m=a(6),u=a(1),d=a(7);a(15);var h=function(e){return l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("input",{type:"text",id:"search-box",className:"search-box",value:e.placeholder,onChange:e.handleChange}),l.a.createElement("input",{type:"submit",id:"submit",className:"submit",value:"SUBMIT"}),l.a.createElement("svg",{viewBox:"0 0 20 25",class:""},l.a.createElement("path",{d:"M9.078 3.759a6.22 6.22 0 0 0-3.464 1.035l-.077.076c-1.385.92-2.348 2.338-2.656 3.947-.346 1.648 0 3.296.924 4.675a6.265 6.265 0 0 0 5.197 2.76 6.22 6.22 0 0 0 3.464-1.036l.077-.076c2.848-1.916 3.656-5.748 1.732-8.622a6.265 6.265 0 0 0-5.197-2.759zm7.93 20.692l-3.541-5.288c-.039-.038-.039-.076-.077-.115-.308-.498-.693-.613-1.001-.613-.154 0-.231.039-.231.039l-.732.153a8.895 8.895 0 0 1-2.463.345 8.965 8.965 0 0 1-7.467-3.985c-2.733-4.1-1.617-9.695 2.502-12.416l.077-.077C5.537 1.498 7.269 1 9.04 1c3.04 0 5.85 1.494 7.506 3.985 2.194 3.257 2.001 7.396-.423 10.538l-.424.575c-.038.038-.5.613.039 1.341.038.038.038.077.077.115v.038l3.54 5.288-2.347 1.571z",fill:"#fff","stroke-width":"1px","fill-rule":"evenodd"}))))};var f=function(e){return l.a.createElement("a",{href:e.link},l.a.createElement("div",{className:"card-container"},l.a.createElement("img",{src:e.artwork}),l.a.createElement("h4",{className:"card-title"},e.title),l.a.createElement("small",null,"View more")))};function v(e){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"logo-container"}),l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav-list"},l.a.createElement("a",{href:"#",className:"nav-item"},l.a.createElement("li",null,"About")))))}function p(){return l.a.createElement("div",{className:"splash-container",id:"splash-container"},l.a.createElement("img",{src:"https://static.collectui.com/shots/3227273/loader-motion-exploration-for-ai-product-large"}))}var E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={ArrayVA:[]},a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=document.querySelector("#search-box"),n=a.value;a.blur(),fetch("https://api.soundcloud.com/tracks?q="+n+"&client_id=PGBAyVqBYXvDBjeaz3kSsHAMnr1fndq1").then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({ArrayVA:e.map((function(e){return l.a.createElement(f,{title:e.title,artwork:e.artwork_url,link:e.permalink_url})}))}),console.log()}))}},{key:"componentDidMount",value:function(){setTimeout((function(){document.getElementById("splash-container").style.display="none"}),5300)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(h,{placeholder:"Search...",handleSubmit:this.handleSubmit}),l.a.createElement("div",{className:"cards-container"},this.state.ArrayVA),l.a.createElement(p,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a30ffae8.chunk.js.map