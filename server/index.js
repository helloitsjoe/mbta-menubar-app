!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("styled-components")},function(t){t.exports=JSON.parse('{"enabled":{"winthrop":{"route":71,"stop":2056,"waitStart":3,"waitLength":6,"morning":true},"holyoke":{"route":1,"stop":110,"waitStart":3,"waitLength":6,"morning":true},"harvardWatertown":{"customName":"Harvard - 71","route":71,"stop":"place-harsq","waitStart":3,"waitLength":6},"backBayCR":{"stop":"Back Bay","direction":1,"waitStart":5,"waitLength":6},"copley":{"stop":70154,"direction":1,"waitStart":5,"waitLength":6},"clearway":{"stop":91,"waitStart":10,"waitLength":6}},"disabled":{"backBayOrange":{"stop":70015,"waitStart":5,"waitLength":6},"southStation":{"stop":70080,"waitStart":20,"waitLength":10}}}')},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("react-dom/server")},function(t,e){t.exports=require("mbta-client")},function(t){t.exports=JSON.parse('{"mbtaKey":"220358def8604846865a08546e986961"}')},function(t,e,r){"use strict";r.r(e);var n,o=r(5),i=r.n(o),a=r(6),c=r.n(a),u=r(4),l=r.n(u),s=r(0),f=r.n(s),d=r(7),p=r(1),m=r.n(p),b=r(2),v=r.n(b),y=r(8),g=r.n(y),h=r(3),x=Object.values(h.enabled);try{var O=r(9);n=O.mbtaKey}catch(t){console.warn("Missing API key, making call without key...")}var w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.routes,r=void 0===e?x:e,o=t.mbta,i=void 0===o?new g.a(n):o,a=Promise.all(r.map((function(t){return i.fetchPredictions({stop:t.stop,direction_id:t.direction,sort:"departure_time",include:["stop","route"]})})));return a.then((function(t){return console.log("Fetched live data"),t.map((function(t,e){if(!t)throw new Error("No predictions");var n=r[e],o=n.waitStart,a=n.waitLength,c=n.route,u=n.morning,l=n.customName,s=i.selectDepartures,f=i.selectIncluded,d=t.data.filter((function(t){return!c||t.relationships.route.data.id===c.toString()})),p=s({data:d},{convertTo:"min"}),m=f(t,"stop")[0].attributes.name,b=f(t,"route")[0].attributes,v=d.length>0&&d[0].attributes.direction_id,y=b.direction_destinations,g=b.direction_names,h=b.color,x=b.text_color,O=y[v]||g[v]||"",w=p.filter((function(t){return t>=1&&t<60})).slice(0,4);return{id:e,color:h,morning:u,stopName:m,direction:O,textColor:x,isWalkable:w.some((function(t){return t>=o&&t<=o+a})),customName:l,departMins:w,_pastDepartMins:p.filter((function(t){return t<=2})),_predictions:t,_filtered:d}}))})).catch((function(t){return console.error("Error during fetch:",t),{error:{message:t.message,stack:t.stack}}}))};function j(){var t=S(["\n  font-size: 1rem;\n  border-radius: 10px;\n  height: 20px;\n  line-height: 20px;\n  padding: 0px 20px;\n  margin: 0px;\n  color: #666;\n"]);return j=function(){return t},t}function E(){var t=S(["\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 10px;\n"]);return E=function(){return t},t}function S(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var k=v.a.div(E()),C=v.a.button(j());function P(t){var e=t.reFetch;return f.a.createElement(k,null,f.a.createElement(C,{onClick:e},"REFRESH"))}function A(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  color: red;\n  text-align: center;\n  margin-top: 5px;\n  font-weight: 300;\n"]);return A=function(){return t},t}P.propTypes={reFetch:m.a.func.isRequired};var T=v.a.div(A());function z(t){var e=t.error;return f.a.createElement(T,null,f.a.createElement("h3",{className:"header"},"Error!"),f.a.createElement("p",null,e.message),f.a.createElement("pre",null,e.stack),f.a.createElement("p",null,"Open devtools for more information"))}z.propTypes={error:m.a.shape({message:m.a.string,stack:m.a.string})},z.defaultProps={error:null};function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function D(){var t=_(["\n  color: #999;\n  padding: 10px 0px 0px 10px;\n  font-weight: 300;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: ",";\n  opacity: ",";\n  transition: opacity ",";\n"]);return D=function(){return t},t}function L(){var t=_(["\n  color: #",";\n  font-size: 200%;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return L=function(){return t},t}function N(){var t=_(["\n  height: 40px;\n  text-align: center;\n  border-radius: 20px;\n  width: ",";\n  margin-left: ",";\n  background-color: #",";\n  transition: ",";\n"]);return N=function(){return t},t}function _(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var M=v.a.div(N(),(function(t){return t.isCompact?"40px":"100%"}),(function(t){return t.isCompact?"6px":"0"}),(function(t){return t.color}),"0.3s"),q=v.a.h3(L(),(function(t){return t.textColor})),F=v.a.div(D(),(function(t){return t.isCompact&&"40px"}),(function(t){return t.isCompact?"0":"1"}),"0.3s");function H(t){var e=t.color,r=t.textColor,n=t.name,o=t.direction,i=t.isCompact,a=I(Object(s.useState)(!0),2),c=a[0],u=a[1];Object(s.useEffect)((function(){if(i)return u(!1);var t=setTimeout((function(){u(!0)}),100);return function(){return clearTimeout(t)}}),[i]);var l=I(n.split("@"),2),d=l[0],p=l[1],m=p?p.trim():d.trim();return f.a.createElement("div",null,f.a.createElement(M,{"data-testid":"color-pill",color:e,isCompact:i},f.a.createElement(q,{"data-testid":"stop-name",textColor:r},c?m:m[0])),f.a.createElement(F,{"data-enzyme-id":"direction",isCompact:!c},"➔ ".concat(o)))}function W(){var t=G(["\n  font-size: ",";\n"]);return W=function(){return t},t}function U(){var t=G(["\n  display: inline-block;\n  padding: 10px 0;\n  font-size: ",";\n"]);return U=function(){return t},t}function B(){var t=G(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-weight: 700;\n  width: 60px;\n  transition: color ",";\n  color: ",";\n"]);return B=function(){return t},t}function $(){var t=G(["\n  display: flex;\n  align-items: flex-end;\n"]);return $=function(){return t},t}function G(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}H.propTypes={name:m.a.string,color:m.a.string,textColor:m.a.string,direction:m.a.string,isCompact:m.a.bool},H.defaultProps={name:"",color:"",textColor:"",direction:"",isCompact:!1};var J=v.a.div($()),K=v.a.div(B(),"0.3s",(function(t){var e=t.clicked,r=t.idx;return e||0===r?"#FFF":"#888"})),Y=v.a.div(U(),(function(t){return t.idx>0?"2.5rem":"3.5rem"})),Q=v.a.div(W(),(function(t){return t.idx>0?"1.25rem":"1.5rem"}));function V(t){var e=t.mins,r=t.clicked;return f.a.createElement(J,{"data-testid":"minutes-list"},e.map((function(t,e){return f.a.createElement(K,{"data-testid":"minutes",key:"".concat(t,"-").concat(e),clicked:r,idx:e},f.a.createElement(Y,{idx:e},t),f.a.createElement(Q,{idx:e},"min"))})))}function X(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function tt(){var t=nt(["\n  flex: '0 0 auto';\n  width: 500px;\n  border-bottom: 6px solid ",";\n"]);return tt=function(){return t},t}function et(){var t=nt(["\n  padding: 10px 15px;\n  flex: ",";\n  transition: ",";\n"]);return et=function(){return t},t}function rt(){var t=nt(["\n  text-align: left;\n  border-bottom: 1px solid #666;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: hidden;\n"]);return rt=function(){return t},t}function nt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}V.propTypes={mins:m.a.arrayOf(m.a.number).isRequired,clicked:m.a.bool},V.defaultProps={clicked:!1};var ot=v.a.div(rt()),it=v.a.div(et(),(function(t){return t.clicked?"0 0 13%":"0 0 60%"}),"0.3s"),at=v.a.div(tt(),(function(t){return t.isWalkable?"#228822":"#bb2222"}));function ct(t){var e=t.color,r=t.stopName,n=t.direction,o=t.textColor,i=t.customName,a=t.isWalkable,c=t.departMins,u=X(Object(s.useState)(!1),2),l=u[0],d=u[1];return f.a.createElement(ot,{onClick:function(){return d((function(t){return!t}))}},f.a.createElement(it,{clicked:l},f.a.createElement(H,{color:e,textColor:o,name:i||r,direction:n,isCompact:l})),f.a.createElement(at,{isWalkable:a},f.a.createElement(V,{clicked:l,mins:c})))}function ut(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  height: 20px;\n  line-height: 20px;\n  background-color: #333;\n  border-bottom: 1px solid #666;\n  padding-left: 10px;\n"]);return ut=function(){return t},t}ct.propTypes={color:m.a.string,stopName:m.a.string,direction:m.a.string,textColor:m.a.string,customName:m.a.string,isWalkable:m.a.bool,departMins:m.a.arrayOf(m.a.number)},ct.defaultProps={color:"333",stopName:"",direction:"",textColor:null,customName:"",isWalkable:null,departMins:[]};var lt=v.a.div(ut());function st(t){var e=t.text;return f.a.createElement(lt,{"data-testid":"spacer"},e)}function ft(){return(ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function dt(t){return function(t){if(Array.isArray(t))return bt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||mt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||mt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mt(t,e){if(t){if("string"==typeof t)return bt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?bt(t,e):void 0}}function bt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(r),!0).forEach((function(e){gt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function gt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ht(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  max-width: 380px;\n  margin: auto;\n  background-color: #191919;\n"]);return ht=function(){return t},t}st.propTypes={text:m.a.string.isRequired};var xt=Object.values(h.enabled),Ot=v.a.div(ht()),wt=function(t,e){var r=e.type,n=e.payload;switch(r){case"FETCH":return yt({},t,{status:"LOADING",error:null});case"SUCCESS":return yt({},t,{status:"IDLE",routes:n,error:null});case"ERROR":return yt({},t,{status:"ERROR",error:n});default:return t}};function jt(t){var e=t.getHourOfDay,r=t.fetchData,n=pt(Object(s.useReducer)(wt,{status:"LOADING",error:null,routes:xt.map((function(t){return{morning:t.morning,id:t.stop}}))}),2),o=n[0],i=n[1],a=pt(Object(s.useState)(0),2),c=a[0],u=a[1];Object(s.useEffect)((function(){var t=function(){r({routes:xt}).then((function(t){return new Promise((function(t){return setTimeout(t,500)})).then((function(){return t}))})).then((function(t){if(t.error)throw t.error;i({type:"SUCCESS",payload:t})})).catch((function(t){console.error(t.stack),i({type:"ERROR",payload:t})}))};i({type:"FETCH"}),t();var e=setInterval((function(){t()}),3e4);return function(){return clearInterval(e)}}),[r,c]);var l,d=Object(s.useCallback)((function(){return u((function(t){return t+1}))}),[]);l=d,Object(s.useEffect)((function(){var t,e=function(e){t=e.targetTouches[0].clientY},r=function(e){e.changedTouches[0].clientY>t&&l()};return document.addEventListener("touchstart",e),document.addEventListener("touchend",r),function(){document.removeEventListener("touchstart",e),document.removeEventListener("touchend",r)}}),[l]);var p=o.routes,m=o.status,b=o.error;return f.a.createElement(Ot,{"data-testid":"app"},f.a.createElement(P,{reFetch:d}),"ERROR"===m?f.a.createElement(z,{error:b}):function(t){var r=["Inbound"].concat(dt(t.filter((function(t){return t.morning})))),n=["Outbound"].concat(dt(t.filter((function(t){return!t.morning}))));return e()<12?[].concat(dt(r),dt(n)):[].concat(dt(n),dt(r))}(p).map((function(t){return"string"==typeof t?f.a.createElement(st,{key:t,text:t}):f.a.createElement(ct,ft({key:t.id},t))})))}jt.propTypes={fetchData:m.a.func,getHourOfDay:m.a.func},jt.defaultProps={fetchData:w,getHourOfDay:function(){return(new Date).getHours()}};var Et=l()();Et.get("/",(function(t,e){var r=c.a.resolve("./dist/index.html");i.a.readFile(r,"utf-8",(function(t,r){if(t)return console.error(t),e.status(500).send({message:t.message});var n=Object(d.renderToString)(f.a.createElement(jt,null)),o=r.replace('<div id="main" />','<div id="main">'.concat(n,"</div>"));return e.status(200).send(o)}))})),Et.use(l.a.static("./dist")),Et.listen(3e3,(function(){console.log("App listening at http://localhost:".concat(3e3))}))}]);