(function(e){function t(t){for(var o,i,l=t[0],u=t[1],s=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container mx-auto flex flex-col h-screen justify-center",attrs:{id:"app"}},[o("div",{staticClass:"p-3 w-1/2 mx-auto"},[o("img",{attrs:{src:n("8cdf"),alt:"",id:"logo",width:"200"}}),o("div",{staticClass:"row my-4"},[o("date-picker",{staticClass:"w-4/6 border-none outline-none",attrs:{lang:e.lang,"first-day-of-week":1,range:"",format:"DD.MM.YYYY"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.woche,expression:"woche"}],staticClass:"w-3/12 h-8 border rounded float-right p-1 border-gray-400",attrs:{type:"text",placeholder:"Ausbildungs Woche"},domProps:{value:e.woche},on:{input:function(t){t.target.composing||(e.woche=t.target.value)}}})],1),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"border rounded w-full p-3 border-gray-400",attrs:{name:"content",id:"",cols:"30",rows:"10",placeholder:"Bericht einfügen"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),o("button",{staticClass:"bg-blue-400 w-full my-3 text-white text-xl font-medium p-3 rounded",on:{click:e.create}},[o("span",{staticClass:"p-3"},[e._v("Bericht erstellen")])])]),o("img",{staticStyle:{display:"none"},attrs:{src:n("ec67"),alt:"",id:"banner",width:"600"}})])},a=[],i=n("ea76"),l=n.n(i),u=n("e511"),s=n.n(u),c=(n("d9cd"),n("1c46"),{name:"app",components:{DatePicker:l.a},data:function(){return{value:"",woche:"",text:"",lang:{days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Januar","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}}},methods:{create:function(){var e=document.getElementById("logo"),t=document.getElementById("banner");console.log(t);var n=new s.a({orientation:"p",unit:"px",format:"a4"});n.addImage(e,"PNG",225,35,200,48),n.addImage(t,"PNG",80,500,266,18),n.setFontStyle("bold"),n.setFontSize(12),n.text("Ausbildungsnachweis",330,110),n.setFontStyle("normal"),n.setFontSize(12),n.text("".concat(this.woche,".Ausbildungswoche | NeosIT | vom ").concat(this.dateReturn(this.value[0],this.value[1])),425,125,{align:"right"}),n.text("BBS2 Wolfsburg | Max Walter | Ausbildungsjahr: 1",425,135,{align:"right"}),n.setFontStyle("bold"),n.setFontSize(14),n.text("Tätigkeiten:",50,180),n.setFontStyle("normal"),n.setFontSize(12),n.text(this.text,50,200,{align:"left"}),n.save("Tescht")},dateReturn:function(e,t){var n=new Date(Date.parse(e)),o=new Date(Date.parse(t));return n.getDate()+"."+(n.getMonth()+1)+"."+n.getFullYear()+" bis "+o.getDate()+"."+(o.getMonth()+1)+"."+o.getFullYear()}}}),d=c,p=n("2877"),f=Object(p["a"])(d,r,a,!1,null,null,null),g=f.exports;o["a"].config.productionTip=!1,n("a5cb"),new o["a"]({render:function(e){return e(g)}}).$mount("#app")},"8cdf":function(e,t,n){e.exports=n.p+"img/NeosIT-Logo 2017.343b2773.png"},ec67:function(e,t,n){e.exports=n.p+"img/banner.1732f704.png"}});
//# sourceMappingURL=app.f6304289.js.map