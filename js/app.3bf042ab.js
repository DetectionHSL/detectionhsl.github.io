(function(e){function t(t){for(var i,a,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2211:function(e,t,n){"use strict";n("439d")},"439d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("7a23");const o={class:"center"};function r(e,t,n,r,a,s){const c=Object(i["f"])("navbar");return Object(i["e"])(),Object(i["c"])(i["a"],null,[Object(i["d"])(c,{onUpdate:s.updateLang},null,8,["onUpdate"]),Object(i["d"])("h3",o,Object(i["g"])(a.description),1)],64)}const a={class:"navbar"},s=Object(i["d"])("li",null,[Object(i["d"])("a",{href:"index.html"},"Home")],-1),c=Object(i["d"])("li",null,[Object(i["d"])("a",{href:"https://github.com/DetectionHSL",target:"_blank"},"GitHub")],-1),u=Object(i["d"])("p",null,"Switch lang",-1);function l(e,t,n,o,r,l){return Object(i["e"])(),Object(i["c"])("ul",a,[s,c,Object(i["d"])("li",{onClick:t[1]||(t[1]=(...e)=>l.update(...e))},[u])])}var d={name:"Navbar",methods:{update(){this.$emit("update")}}};n("2211");d.render=l;var p=d,f={name:"App",components:{navbar:p},data(){return{description:"DetectionHSL is a script written in PowerShell which has the goal to get some informations about a computer running Windows or Linux to remotely solve technical issues. It is designed to filter informations to protect the user privacy and is based on a modules system which allows anyone to easily add / disable functionalities. It includes some utilities which contain useful functionnalities (installing a package, detecting the presence of a software...) and a CLI which permit to easily configure it.",lang:"en",frdesc:"DetectionHSL est un script écrit en PowerShell qui a pour but de récupérer des informations sur un ordinateur sous Windows ou Linux dans le cadre, par exemple, de dépannage informatique à distance. De plus, il est conçu pour filtrer les informations qu'il produit afin de protéger un maximum la vie privée des utilisateurs. Il est basé sur un système de \"modules\" qui permettent à n'importe qui de lui rajouter des fonctionnalités / d'en désactiver assez facilement. Il dispose aussi d'un certain nombre d'utilitaires contenant des fonctions utiles(installation d'un paquet, detection de la présence d'un logiciel,...). Il dispose d'une interface en CLI qui permet de le configurer de façon simple. ",endesc:"DetectionHSL is a script written in PowerShell which has the goal to get some informations about a computer running Windows or Linux to remotely solve technical issues. It is designed to filter informations to protect the user privacy and is based on a modules system which allows anyone to easily add / disable functionalities. It includes some utilities which contain useful functionnalities (installing a package, detecting the presence of a software...) and a CLI which permit to easily configure it."}},methods:{updateLang(){this.lang="en"===this.lang?"fr":"en",this.description="en"===this.lang?this.endesc:this.frdesc}}};n("ccae");f.render=r;var h=f;Object(i["b"])(h).mount("#app")},ccae:function(e,t,n){"use strict";n("df3f")},df3f:function(e,t,n){}});
//# sourceMappingURL=app.3bf042ab.js.map