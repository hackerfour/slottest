(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{471:function(t,e,r){"use strict";var o=r(1),n=(r(9),r(200));e.a={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,t.req,o=t.route,n=o.path,c=window.location.hostname,e.next=4,r.getters["config/currentPage"](n);case 4:return e.t0=e.sent,e.t1=c,e.abrupt("return",{seoData:e.t0,host:e.t1});case 7:case"end":return e.stop()}}),e)})))()},head:n.a}},472:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("fb16f774",content,!0,{sourceMap:!1})},473:function(t,e,r){"use strict";r(44),r(26),r(71),r(149),r(289);var o={name:"Loading",mounted:function(){if("svg"===this.$el.firstElementChild.nodeName){var t=this.$el.firstElementChild,e=t.getAttribute("viewBox").split(" ").map((function(t){return Number(t)})),r=(e[2]/e[3]).toFixed(2);t.setAttribute("width","2em"),t.setAttribute("height","".concat(2/r,"em")),t.classList.add("svg-class")}}},n=(r(474),r(13)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"svg-container"},[r("svg",{attrs:{viewBox:"0 0 49 49",width:"2em",height:"2em",xmlns:"http://www.w3.org/2000/svg"}},[r("title",[t._v("loading")]),t._v(" "),r("circle",{staticClass:"a",attrs:{cx:"24.5",cy:"24.5",r:"15.58"}}),t._v(" "),r("path",{staticClass:"a",attrs:{d:"M11.46,10.42A19.69,19.69,0,0,1,24.57,5V.23A24.4,24.4,0,0,0,8.12,7.08Z",transform:"translate(-0.62 -0.23)"}}),t._v(" "),r("path",{staticClass:"a",attrs:{d:"M5.35,24.18a19.67,19.67,0,0,1,5.34-13L7.35,7.85A24.44,24.44,0,0,0,.62,24.18Z",transform:"translate(-0.62 -0.23)"}}),t._v(" "),r("g",{staticClass:"b"},[r("path",{staticClass:"a",attrs:{d:"M25.66.23V5a19.67,19.67,0,0,1,12.9,5.26l3.35-3.35A24.44,24.44,0,0,0,25.66.23Z",transform:"translate(-0.62 -0.23)"}})]),t._v(" "),r("path",{staticClass:"a",attrs:{d:"M10.61,38.17a19.67,19.67,0,0,1-5.26-12.9H.62A24.38,24.38,0,0,0,7.27,41.51Z",transform:"translate(-0.62 -0.23)"}}),t._v(" "),r("g",{staticClass:"b"},[r("path",{staticClass:"a",attrs:{d:"M39.34,11a19.68,19.68,0,0,1,5.55,13.2h4.73A24.4,24.4,0,0,0,42.68,7.64Z",transform:"translate(-0.62 -0.23)"}})]),t._v(" "),r("g",{staticClass:"c"},[r("path",{staticClass:"a",attrs:{d:"M44.89,25.27a19.74,19.74,0,0,1-5.46,13.12l3.34,3.34a24.43,24.43,0,0,0,6.85-16.46Z",transform:"translate(-0.62 -0.23)"}})]),t._v(" "),r("g",{staticClass:"d"},[r("path",{staticClass:"a",attrs:{d:"M38.65,39.15a19.7,19.7,0,0,1-13,5.35v4.73A24.45,24.45,0,0,0,42,42.5Z",transform:"translate(-0.62 -0.23)"}})]),t._v(" "),r("g",{staticClass:"e"},[r("path",{staticClass:"a",attrs:{d:"M24.57,44.5A19.7,19.7,0,0,1,11.37,39L8,42.29a24.4,24.4,0,0,0,16.54,6.94Z",transform:"translate(-0.62 -0.23)"}})])])])}),[],!1,null,"46304fb9",null);e.a=component.exports},474:function(t,e,r){"use strict";r(472)},475:function(t,e,r){(e=r(29)(!1)).push([t.i,".a[data-v-46304fb9]{fill:#9e9d9d}.b[data-v-46304fb9]{opacity:.2}.c[data-v-46304fb9]{opacity:.5}.d[data-v-46304fb9]{opacity:.7}.e[data-v-46304fb9]{opacity:.9}.svg-container[data-v-46304fb9]{display:inline-flex}.svg-class[data-v-46304fb9]{vertical-align:middle;-webkit-animation-name:spin-data-v-46304fb9;animation-name:spin-data-v-46304fb9;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:steps(8);animation-timing-function:steps(8)}@-webkit-keyframes spin-data-v-46304fb9{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-46304fb9{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=e},479:function(t,e,r){"use strict";r(18),r(16),r(14),r(31),r(19),r(32);var o=r(3),n=(r(15),r(46),r(26),r(71),r(150),r(50),r(11),r(116),r(45),r(51),r(72)),c=r(473),d=r(471);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=function(t){return{name:"gamePage".concat(t),data:function(){return{gameLoading:!1,gameError:!1}},mixins:[d.a],mounted:function(){var e=this;0===this.$store.state.games.list.length?(this.gameLoading=!0,this.$store.dispatch("games/fetchAllGames").then((function(){"casino"!==t&&e.moveToFirstChild()})).catch((function(t){e.gameError=t})).finally((function(){e.gameLoading=!1}))):"casino"!==t&&this.moveToFirstChild(),"lottery"===t&&this.$store.dispatch("games/getLotteryMarketList")},updated:function(){this.$route.params.category||"casino"===t||this.moveToFirstChild()},computed:m(m({},Object(n.c)({categories:"games/getGameCategoryIn".concat(t),lotteryMarketList:"games/getLotteryMarketList"})),{},{typeName:function(){var e;switch(t){case"games":e="Arcade";break;case"sports":e="Sportsbook";break;case"lottery":e="Togel";break;default:e=t.charAt(0).toUpperCase()+t.slice(1)}return e},title:function(){return"Permainan ".concat(this.typeName)}}),methods:{vendorName:function(t){var e=t.split("_");return e.pop(),(t=e.join("_")).toLowerCase()},moveToFirstChild:function(){this.$route.params.category||this.$router.replace("/".concat("lottery"===t?"togel":t,"/").concat(this.$store.state.games.categories.find((function(e){return e.types.includes(t)})).categoryUniqueCode.toLowerCase()))}},components:{loading:c.a}}}},537:function(t,e,r){var content=r(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("582fc39d",content,!0,{sourceMap:!1})},656:function(t,e,r){"use strict";r(537)},657:function(t,e,r){(e=r(29)(!1)).push([t.i,".game[data-v-1964bd8a]{background-size:100%;background-position:top;background-repeat:no-repeat;padding-bottom:50px}.game-img[data-v-1964bd8a]{position:relative}.game-img img[data-v-1964bd8a]{width:100%}.game-top[data-v-1964bd8a]{top:0;bottom:0}.game-top[data-v-1964bd8a],.game-top-heading[data-v-1964bd8a]{position:absolute;left:0;right:0}.game-top-heading[data-v-1964bd8a]{bottom:5rem}.game-top-heading .heading-1[data-v-1964bd8a]{text-shadow:2px 2px 3px #000}.game-content[data-v-1964bd8a]{background-color:var(--mode-light);padding:30px 65px}@media (max-width:1366px){.game-content[data-v-1964bd8a]{padding:25px 35px}}.games-heading[data-v-1964bd8a]{background-color:var(--mode-light-transparent);padding:10px 15px;cursor:pointer;flex:1}.games-heading.active[data-v-1964bd8a]{background-color:var(--mode-light)}.games-header[data-v-1964bd8a]{flex-wrap:wrap;flex-direction:row;width:100%}.games-body[data-v-1964bd8a]{border-radius:5px;overflow:hidden}.games-detail[data-v-1964bd8a]{display:none}.bg-video-wrap[data-v-1964bd8a]{position:absolute;overflow:hidden;width:100%;height:100%;top:0;bottom:0;background:url(/game/sports.jpg) no-repeat 50%/cover;background-repeat:no-repeat}video[data-v-1964bd8a]{min-width:100%;min-height:100vh;z-index:1}.overlay[data-v-1964bd8a]{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;background-image:linear-gradient(45deg,rgba(0,0,0,.3) 50%,rgba(0,0,0,.7) 0);background-size:3px 3px}",""]),t.exports=e},761:function(t,e,r){"use strict";r.r(e);var o=r(479),n=r(471),c={auth:!1,mixins:[Object(o.a)("sports"),n.a]},d=(r(656),r(13)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"game games"},[r("div",{staticClass:"game-img mb-5"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:t.$config.datasetHost+"/assets/images/static/game/m-sports2.jpg",loading:"/loading-highlight.svg"},expression:"{ src: `${$config.datasetHost}/assets/images/static/game/m-sports2.jpg`, loading: '/loading-highlight.svg' }"}],attrs:{alt:"sports banner"}})]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row games-body"},[r("div",{staticClass:"games-header dflex"},t._l(t.categories,(function(e){return r("nuxt-link",{key:e.uuid,staticClass:"games-heading cta-hover-light",attrs:{to:"/sports/"+e.categoryUniqueCode.toLowerCase()}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:t.$config.datasetHost+"/assets/images/vendor/"+t.vendorName(e.categoryUniqueCode)+".png",loading:"/loading-vendor-small.svg"},expression:"{ src: `${$config.datasetHost}/assets/images/vendor/${vendorName(category.categoryUniqueCode)}.png`, loading: '/loading-vendor-small.svg'}"}],staticClass:"img-height",attrs:{alt:e.name}})])})),1),t._v(" "),r("div",{staticClass:"col-12 game-content",attrs:{id:"content-scroll"}},[r("transition",{attrs:{name:"slide-right",mode:"out-in"}},[t.$route.params.category?r("nuxt",{key:t.$route.params.category}):t._e()],1)],1)])])])}),[],!1,null,"1964bd8a",null);e.default=component.exports}}]);