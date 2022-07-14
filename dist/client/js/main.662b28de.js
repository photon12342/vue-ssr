(()=>{var t={366:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var n=a(8081),r=a.n(n),o=a(3645),s=a.n(o),i=s()(r());i.push([t.id,".app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}nav{padding:30px}nav a{font-weight:700;color:#2c3e50}nav a.router-link-exact-active{color:#42b983}",""]);const l=i},174:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var n=a(8081),r=a.n(n),o=a(3645),s=a.n(o),i=s()(r());i.push([t.id,"h3[data-v-7794d48a]{margin:40px 0 0}ul[data-v-7794d48a]{list-style-type:none;padding:0;margin-bottom:20px}li[data-v-7794d48a]{margin:0 10px}a[data-v-7794d48a]{color:#42b983}",""]);const l=i},2014:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var n=a(8081),r=a.n(n),o=a(3645),s=a.n(o),i=s()(r());i.push([t.id,"h3[data-v-17a1a036]{margin:40px 0 0}ul[data-v-17a1a036]{list-style-type:none;padding:0;margin-bottom:20px}li[data-v-17a1a036]{margin:0 10px}",""]);const l=i},144:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var n=a(8081),r=a.n(n),o=a(3645),s=a.n(o),i=s()(r());i.push([t.id,"ul[data-v-397cce24]{list-style-type:none}",""]);const l=i},6590:(t,e,a)=>{"use strict";var n=a(6369),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/other"}},[t._v("other")])],1),t._v(" "),e("router-view")],1)},o=[],s=(a(4902),a(1001)),i={},l=(0,s.Z)(i,r,o,!1,null,null,null);const u=l.exports;var c=a(2631),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"天气预报"}})],1)},d=[],_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.data.city)+t._s(t.msg))]),t._v(" "),e("span",[t._v("提示："+t._s(t.data.ganmao))]),t._v(" "),e("ul",t._l(t.data.forecast,(function(a){return e("li",{key:a.date},[e("h4",{staticClass:"date"},[t._v(t._s(a.date)+"：")]),t._v(" "),e("ul",[e("li",[e("b",[t._v("天气状况：")]),e("span",[t._v(t._s(a.type))]),t._v(" | \n          "),e("b",[t._v("高温：")]),e("span",[t._v(t._s(a.high))]),t._v(" | \n          "),e("b",[t._v("低温：")]),e("span",[t._v(t._s(a.low))]),t._v(" | \n          "),e("b",[t._v("风向：")]),e("span",[t._v(t._s(a.fengxiang))])])])])})),0)])},p=[],h=a(6265),f=a.n(h);const g={name:"HelloWorld",props:{msg:String},data(){return{data:{}}},asyncData({app:t}){return t.getWeather()},methods:{getWeather(){f().get("http://wthrcdn.etouch.cn/weather_mini?city=南京").then((t=>{this.data=t.data.data}))}}},m=g;a(4754);var b=(0,s.Z)(m,_,p,!1,null,"7794d48a",null);const y=b.exports,w={name:"HomeView",components:{HelloWorld:y}},x=w;var Z=(0,s.Z)(x,v,d,!1,null,null,null);const M=Z.exports;var k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")]),t._v(" "),e("button",{on:{click:t.getWeather}},[t._v("获取天气数据")]),t._v(" "),e("ul",t._l(t.data.forecast,(function(a){return e("li",{key:a.date},[e("h4",{staticClass:"date"},[t._v(t._s(a.date)+"：")]),t._v(" "),e("ul",[e("li",[e("b",[t._v("天气状况：")]),e("span",[t._v(t._s(a.type))]),t._v(" | \n          "),e("b",[t._v("高温：")]),e("span",[t._v(t._s(a.high))]),t._v(" | \n          "),e("b",[t._v("低温：")]),e("span",[t._v(t._s(a.low))]),t._v(" | \n          "),e("b",[t._v("风向：")]),e("span",[t._v(t._s(a.fengxiang))])])])])})),0)])},T=[];const O={data(){return{data:{}}},methods:{getWeather(){f().get("http://wthrcdn.etouch.cn/weather_mini?city=南京").then((t=>{this.data=t.data.data}))}}},P=O;a(8116);var W=(0,s.Z)(P,k,T,!1,null,"17a1a036",null);const S=W.exports;var A=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("在asyncData中通过vuex获取数据")]),t._v(" "),e("ul",t._l(t.weather.forecast,(function(a){return e("li",{key:a.date},[e("h4",{staticClass:"date"},[t._v(t._s(a.date)+"：")]),t._v(" "),e("ul",[e("li",[e("b",[t._v("天气状况：")]),e("span",[t._v(t._s(a.type))]),t._v(" | \n          "),e("b",[t._v("高温：")]),e("span",[t._v(t._s(a.high))]),t._v(" | \n          "),e("b",[t._v("低温：")]),e("span",[t._v(t._s(a.low))]),t._v(" | \n          "),e("b",[t._v("风向：")]),e("span",[t._v(t._s(a.fengxiang))])])])])})),0)])},C=[],E=a(3822);const H={computed:{...(0,E.rn)(["weather"])},asyncData({store:t}){return t.dispatch("getWeatherData")}},I=H;a(8589);var j=(0,s.Z)(I,A,C,!1,null,"397cce24",null);const D=j.exports;n.ZP.use(c.Z);const R=[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:S},{path:"/other",name:"other",component:D}],$=c.Z.prototype.push;c.Z.prototype.push=function(t){return $.call(this,t).catch((t=>t))};const G=new c.Z({mode:"history",routes:R});function L(){return G}function N(){return new E.ZP.Store({state:{weather:{}},getters:{},mutations:{GETWEATHER(t,e){t.weather=e}},actions:{getWeatherData({commit:t}){return new Promise((e=>{f().get("http://wthrcdn.etouch.cn/weather_mini?city="+encodeURI("南京")).then((a=>{t("GETWEATHER",a.data.data),e()}))}))}},modules:{}})}function z(t){const e=L(),a=N(),r=new n.ZP({router:e,store:a,context:t,render:t=>t(u)});return{router:e,app:r,store:a}}n.ZP.use(E.ZP),n.ZP.config.productionTip=!1,n.ZP.mixin({beforeMount(){const{asyncData:t}=this.$options;t&&(this.dataPromise=t({app:this,store:this.$store,route:this.$route}))}});const{app:U,router:V,store:q}=z();window.__INITIAL_STATE__&&q.replaceState(window.__INITIAL_STATE__),V.onReady((()=>{U.$mount("#app")}))},4902:(t,e,a)=>{var n=a(366);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var r=a(7037).Z;r("7e7591d0",n,!0,{sourceMap:!1,shadowMode:!1})},4754:(t,e,a)=>{var n=a(174);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var r=a(7037).Z;r("569ef88a",n,!0,{sourceMap:!1,shadowMode:!1})},8116:(t,e,a)=>{var n=a(2014);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var r=a(7037).Z;r("4ac3d2c5",n,!0,{sourceMap:!1,shadowMode:!1})},8589:(t,e,a)=>{var n=a(144);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var r=a(7037).Z;r("d61bb5da",n,!0,{sourceMap:!1,shadowMode:!1})}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,(()=>{var t=[];a.O=(e,n,r,o)=>{if(!n){var s=1/0;for(c=0;c<t.length;c++){for(var[n,r,o]=t[c],i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((t=>a.O[t](n[l])))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,r,o]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{var t={179:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,[s,i,l]=n,u=0;if(s.some((e=>0!==t[e]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(e&&e(n);u<s.length;u++)o=s[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},n=self["webpackChunkvue_ssr"]=self["webpackChunkvue_ssr"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var n=a.O(void 0,[998],(()=>a(6590)));n=a.O(n)})();
//# sourceMappingURL=main.662b28de.js.map