(()=>{"use strict";var n={28:(n,t,e)=>{e.d(t,{Z:()=>s});var l=e(81),r=e.n(l),o=e(645),i=e.n(o)()(r());i.push([n.id,"* {\n  font-family: 'Dancing Script', 'Times New Roman', Times, serif;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  overflow: hidden;\n  display: flex;\n  background: rgb(25, 27, 28);\n}\n\n/* Styling for left side */\n.left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px\n}\n\nh1 {\n  font-weight: 100;\n  font-size: calc(30px + 3vw);\n  color: white;\n  text-shadow: rgba(109, 196, 247, .95) 0px 5px 15px;\n  transition: transform .3s ease;\n}\n\nh1:hover {\n  transform: scale(1.05);\n}\n\nbutton {\n  width: 200px;\n  padding: 5px;\n  font-size: 30px;\n  text-shadow: rgba(109, 196, 247, .95) 0px 5px 15px;\n  background: rgb(24,26,27);\n  color: white;\n  border: 1px solid white;\n  box-shadow: rgba(109, 196, 247, 0.35) 0px 5px 15px;\n  transition: transform .3s ease-in-out;\n}\n\nbutton:hover {\n  transform: scale(1.05);\n  border: 2px solid white;\n}\n\n.right {\n  flex: 1;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n/* Styling for chessboard */\n.chessboard {\n  display: flex;\n  border: 1px solid gray;\n  flex-direction: column;\n  margin-right: 20px;\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.row {\n  display: flex;\n}\n\n.square {\n  width: calc(20px + 4vw);\n  height: calc(20px + 4vw);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}\n\n/* Add styling for alternating squares */\n.row:nth-child(even) .square:nth-child(even) {\n  background-color: rgb(51, 55, 58);\n}\n\n.row:nth-child(even) .square:nth-child(odd) {\n  background-color: rgb(39, 42, 44);\n}\n\n.row:nth-child(odd) .square:nth-child(even) {\n  background-color: rgb(39, 42, 44);\n}\n\n.row:nth-child(odd) .square:nth-child(odd) {\n  background-color: rgb(51, 55, 58);\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",l=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),l&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),l&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,l,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(l)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(i[a]=!0)}for(var u=0;u<n.length;u++){var c=[].concat(n[u]);l&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,l=0;l<t.length;l++)if(t[l].identifier===n){e=l;break}return e}function l(n,l){for(var o={},i=[],s=0;s<n.length;s++){var a=n[s],u=l.base?a[0]+l.base:a[0],c=o[u]||0,h="".concat(u," ").concat(c);o[u]=c+1;var d=e(h),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var p=r(f,l);l.byIndex=s,t.splice(s,0,{identifier:h,updater:p,references:1})}i.push(h)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var o=l(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=e(o[i]);t[s].references--}for(var a=l(n,r),u=0;u<o.length;u++){var c=e(o[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=a}}},569:n=>{var t={};n.exports=function(n,e){var l=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var l="";e.supports&&(l+="@supports (".concat(e.supports,") {")),e.media&&(l+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(l+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),l+=e.css,r&&(l+="}"),e.media&&(l+="}"),e.supports&&(l+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(l,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(l){var r=t[l];if(void 0!==r)return r.exports;var o=t[l]={id:l,exports:{}};return n[l](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var l in t)e.o(t,l)&&!e.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:t[l]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),l=e(795),r=e.n(l),o=e(569),i=e.n(o),s=e(565),a=e.n(s),u=e(216),c=e.n(u),h=e(589),d=e.n(h),f=e(28),p={};p.styleTagTransform=d(),p.setAttributes=a(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=c(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;const g=[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]];class v{constructor(n,t=[n[0]-2,n[1]-1],e=[n[0]-1,n[1]-2],l=[n[0]-2,n[1]+1],r=[n[0]-1,n[1]+2],o=[n[0]+1,n[1]-2],i=[n[0]+2,n[1]-1],s=[n[0]+1,n[1]+2],a=[n[0]+2,n[1]+1]){this.coord=n,n[0]>=2&&n[1]>=1?this.highestLeft=t:this.highestLeft=null,n[0]>=1&&n[1]>=2?this.highLeft=e:this.highLeft=null,n[0]>=2&&n[1]<=6?this.highestRight=l:this.highestRight=null,n[0]>=1&&n[1]<=5?this.highRight=r:this.highRight=null,n[0]<=6&&n[1]>=2?this.lowLeft=o:this.lowLeft=null,n[0]<=5&&n[1]>=1?this.lowestLeft=i:this.lowestLeft=null,n[0]<=6&&n[1]<=5?this.lowRight=s:this.lowRight=null,n[0]<=5&&n[1]<=6?this.lowestRight=a:this.lowestRight=null}}for(let n=0;n<8;n++)for(let t=0;t<8;t++){const e=new v([n,t]);g[n][t]=e}console.log(function(n,t){const e=[],l=[],r=new Set;for(e.unshift(n);e.length>0;){const n=e.pop();if(n.coord===t.coord)return l;if(!r.has(n)){r.add(n);const t=[n.highLeft,n.highRight,n.lowLeft,n.lowRight,n.highestLeft,n.highestRight,n.lowestLeft,n.lowestRight];for(const n of t)n&&!r.has(g[n[0]][n[1]])&&e.unshift(g[n[0]][n[1]])}}return null}(g[0][0],g[2][4]))})()})();