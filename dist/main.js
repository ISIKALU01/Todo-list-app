(()=>{"use strict";var n,e,t,r,o,a,i,c,d,p,s,l,u,f,b={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: antiquewhite;\n  color: rgb(37, 34, 34);\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.6;\n}\n\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  outline: none;\n}\n\nbutton {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\ninput {\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: rgb(14, 14, 83);\n  color: antiquewhite;\n}\n\n.applogo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.open-nav-button {\n  display: none;\n  width: 40px;\n  padding: 0;\n  background-color: darkgray;\n  font-size: 40px;\n}\n\n.button-open-nav i {\n  margin-right: 0;\n}\n\n.applogo img{\n  padding: 10px;\n}\n\n.applogo h1{\n  color: antiquewhite;\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 30px;\n}\n\n\n\n/* main */\n\n.main {\n  display: flex;\n  min-height: calc(100vh - 104px - 48px);\n}\n\n\n.nav {\n  width: 300px;\n  min-width: 250px;\n  padding: 20px;\n  background-color: white;\n}\n\n.nav.active {\n  display: block;\n}\n\n\n.default-project-button {\n  background-color:white;\n  text-align: left;\n}\n\n.projects-title{\n  padding: 10px;\n  margin-top: 30px;\n}\n\n.add-project-button{\n  margin-top: 10px;\n  margin-left: 2px;\n  background-color: white;\n  text-align: left;\n}\n\n.default-project-button.active {\n  background-color:rgb(14, 14, 83);\n  font-weight: bold;\n}\n\n.default-project-button:hover {\n  background-color:rgb(14, 14, 83);\n  color: antiquewhite;\n}\n\n.add-project-bar {\n  display: none;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n\n.add-project-bar.active {\n  display: block;\n}\n\n.input-add-project-bar {\n  border: 1px solid #aaa;\n  margin-bottom: 10px;\n}\n\n.add-project-bar-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.button-add-project-bar {\n  border: 1px solid #99dd99;\n  background-color: #aaffaa;\n  font-weight: bold;\n}\n\n.button-cancel-project-bar {\n  border: 1px solid #eeadad;\n  background-color: #ffbebe;\n  font-weight: bold;\n}\n\n\n.button-add-project-bar:hover {\n  background-color: #a6f0a6;\n}\n\n.button-cancel-project-bar:hover {\n  background-color: #f5b2b2;\n}\n\n.project-board {\n  width: 900px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.project-board h1 {\n  padding: 0 10px;\n  margin-bottom: 10px;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],p=r.base?d[0]+r.base:d[0],s=a[p]||0,l="".concat(p," ").concat(s);a[p]=s+1;var u=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var b=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:b,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),p=0;p<a.length;p++){var s=t(a[p]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return b[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),d=h(216),p=h.n(d),s=h(589),l=h.n(s),u=h(426),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();