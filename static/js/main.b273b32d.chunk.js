(this.webpackJsonpreactjs_course=this.webpackJsonpreactjs_course||[]).push([[0],[,,,function(e,t,n){},,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(4),o=n.n(s),r=(n(14),n(5)),l=n(6),c=n(1),u=n(8),h=n(7);n(3),n(15);var m=function(e){return i.a.createElement("form",{onChange:e.handleChange},i.a.createElement("div",{className:"form-card"},i.a.createElement("div",{className:"Q-card"},i.a.createElement("h3",null,"Question ",e.id+1," :"),i.a.createElement("p",null,e.Question)),i.a.createElement("div",{className:"options-card"},i.a.createElement("label",{htmlFor:e.Options[0],className:"options"},i.a.createElement("input",{type:"radio",name:e.id,value:e.Options[0],id:e.Options[0]}),i.a.createElement("p",null,e.Options[0])),i.a.createElement("label",{htmlFor:e.Options[1],className:"options"},i.a.createElement("input",{type:"radio",name:e.id,value:e.Options[1],id:e.Options[1]}),i.a.createElement("p",null,e.Options[1])),i.a.createElement("label",{htmlFor:e.Options[2],className:"options"},i.a.createElement("input",{type:"radio",name:e.id,value:e.Options[2],id:e.Options[2]}),i.a.createElement("p",null,e.Options[2])),i.a.createElement("label",{htmlFor:e.Options[3],className:"options"},i.a.createElement("input",{type:"radio",name:e.id,value:e.Options[3],id:e.Options[3]}),i.a.createElement("p",null,e.Options[3])))))};var d=function(){return i.a.createElement("div",{className:"head-1"},i.a.createElement("h1",null,"Take your Quiz "))},p=[{qid:0,Question:"Which one of the following river flows between Vindhyan and Satpura ranges?",Options:["Narmada","Mahanadi","Son","Netravati"],Ans:"Narmada"},{qid:1,Question:"The Central Rice Research Station is situated in",Options:["Chennai","Cuttack","Banglore","Quilon"],Ans:"Cuttack"},{qid:2,Question:"Who among the following wrote Sanskrit grammar?",Options:["Kalidasa","Charak","Panini","Aryabhatt"],Ans:"Panini"},{qid:3,Question:"Which among the following headstreams meets the Ganges in last?",Options:["Alaknanda","Pindar","Mandakini","Bhagirathi"],Ans:"Bhagirathi"},{qid:4,Question:"The metal whose salts are sensitive to light is?",Options:["Zinc","Silver","Copper","Aluminum"],Ans:"Silver"},{qid:5,Question:"The country that has the highest in Barley Production?",Options:["China","India","Russia","France"],Ans:"Russia"}],E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={ansrs:[],score:null,tAndf:[],show:{display:"none"}},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.showScore=a.showScore.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value,n=e.target.name;this.setState((function(e){return e.ansrs[n]=t,{ansrs:e.ansrs}}))}},{key:"showScore",value:function(e){e.preventDefault();for(var t=0,n=[],a={display:"block"},i=0;i<=p.length-1;i++)p[i].Ans===this.state.ansrs[i]?(t+=1,n[i]=!0):n[i]=!1;this.setState((function(e){return e.score=t,e.tAndf=n,e.show=a,{score:e.score,tAndf:e.tAndf,show:e.show}}))}},{key:"render",value:function(){var e=this,t=p.map((function(e){return i.a.createElement("li",{key:e.qid},e.qid+1+". ",e.Ans)})),n=p.map((function(t){return i.a.createElement(m,{key:t.qid,id:t.qid,Question:t.Question,Options:t.Options,handleChange:e.handleChange,true:e.state.tAndf})}));return i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement("section",null,n,i.a.createElement("div",{style:this.state.show,className:"scores"},i.a.createElement("h1",null,"Your Score : ",this.state.score+"/"+p.length),i.a.createElement("div",{className:"answers"},i.a.createElement("h1",null,"Correct Answers:"),i.a.createElement("ul",null,t))),i.a.createElement("div",{className:"s-button"},i.a.createElement("button",{onClick:this.showScore},"Submit Answer"))))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b273b32d.chunk.js.map