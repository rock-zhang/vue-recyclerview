!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RecyclerView=e():t.RecyclerView=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=30)}([function(t,e,n){var i=n(22)("wks"),o=n(26),r=n(2).Symbol,s="function"==typeof r;(t.exports=function(t){return i[t]||(i[t]=s&&r[t]||(s?r:o)("Symbol."+t))}).store=i},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(4),o=n(43),r=n(59),s=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(i(t),e=r(e,!0),i(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(10);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(3),o=n(12);t.exports=n(1)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(2),o=n(5),r=n(17),s=n(7),c=function(t,e,n){var u,a,h,l=t&c.F,f=t&c.G,d=t&c.S,m=t&c.P,p=t&c.B,_=t&c.W,v=f?o:o[e]||(o[e]={}),y=v.prototype,g=f?i:d?i[e]:(i[e]||{}).prototype;f&&(n=e);for(u in n)(a=!l&&g&&void 0!==g[u])&&u in v||(h=a?g[u]:n[u],v[u]=f&&"function"!=typeof g[u]?n[u]:p&&a?r(h,i):_&&g[u]==h?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):m&&"function"==typeof h?r(Function.call,h):h,m&&((v.virtual||(v.virtual={}))[u]=h,t&c.R&&y&&!y[u]&&s(y,u,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(22)("keys"),o=n(26);t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";function i(t){if(!t)return c;if(a.test(t.type)){var e=t.touches[0];return{x:e.clientX,y:e.clientY}}return u.test(t.type)?{x:t.clientX,y:t.clientY}:c}function o(t,e){for(var n in e)if(e[n].test(t[n]))return!0;return!1}function r(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=t.getBoundingClientRect();return n.top<window.innerHeight*e&&n.bottom>0&&n.left<window.innerWidth*e&&n.right>0}Object.defineProperty(e,"__esModule",{value:!0}),e.getEventPosition=i,e.preventDefaultException=o,e.assign=r,e.inView=s;var c={x:0,y:0},u=/mouse(down|move|up)/,a=/touch(start|move|end)/;e.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(38);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(10),o=n(2).document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(3).f,o=n(6),r=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,r)&&i(t,r,{configurable:!0,value:e})}},function(t,e,n){var i=n(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var i=n(44),o=n(8);t.exports=function(t){return i(o(t))}},function(t,e,n){var i=n(14),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},function(t,e,n){var i=n(8);t.exports=function(t){return Object(i(t))}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(31),r=i(o),s=n(29),c=i(s),u=n(15),a={render:function(t){return t("div",{attrs:{class:"recyclerview-loading"}},"Loading...")}},h={render:function(t){return t("div",{attrs:{class:"recyclerview-item tombstone"},style:{height:"100px",width:"100%"}},"")}},l={preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/},distance:50,animation_duration_ms:200,tombstone_class:"tombstone",invisible_class:"invisible",prerender:20,remain:10,preventDefault:!1,column:1,waterflow:!0};e.default=function(t){return{name:"RecyclerView",props:{fetch:Function,list:Array,item:Object,loading:Object,tombstone:{type:Object,default:function(){return h}},column:Number,prerender:Number,remain:Number,waterflow:Boolean,preventDefault:Boolean,options:Object,tag:{type:String,default:"div"}},render:function(t){return t(this.tag,{attrs:{class:"recyclerview-container"}},[t(this.loading||a),t(this.tag,{attrs:{class:"recyclerview"},on:{touchstart:this._start,touchmove:this._move,touchend:this._end,touchcancel:this._end,mousedown:this._start,mousemove:this._move,mouseup:this._end}})])},data:function(){return{startPointer:{x:0,y:0},_options:{},distance:0,pulling:!1,contentSource:new c.default(this.fetch,this.item,this.tombstone,t),scroller:null}},mounted:function(){this.init()},beforeDestroy:function(){this.scroller.destroy()},methods:{init:function(){this._options=(0,u.assign)({},l,{prerender:this.prerender,remain:this.remain,column:this.column,waterflow:this.waterflow},this.options),this.$list=this.$el.querySelector(".recyclerview"),this.scroller=new r.default(this.$list,this.list,this.contentSource,this._options)},scrollToIndex:function(t){var e=this;t=Number(t),this.scroller.scrollToIndex(t),this.$nextTick(function(){e._scrollToBottom()})},_scrollTo:function(t){t=t||0,this.$list.scrollTop=Number(t)},_scrollToBottom:function(){this._scrollTo(this.$list.scrollHeight)},_renderListStyle:function(){this.$list.style.transform="translate3d(0, "+this.distance+"px, 0)"},_start:function(t){this.$list.scrollTop>0||(this.pulling=!0,this.startPointer=(0,u.getEventPosition)(t),this.$list.style.transition="transform .2s",this.preventDefault&&!(0,u.preventDefaultException)(t.target,this._options.preventDefaultException)&&t.preventDefault())},_move:function(t){if(this.pulling){var e=(0,u.getEventPosition)(t),n=e.y-this.startPointer.y;if(n<0)return void this._scrollTo(-n);this.preventDefault&&!(0,u.preventDefaultException)(t.target,this._options.preventDefaultException)&&t.preventDefault(),this.distance=Math.floor(.5*n),this.distance>this._options.distance&&(this.distance=this._options.distance),(0,u.requestAnimationFrame)(this._renderListStyle.bind(this))}},_end:function(t){var e=this;this.pulling&&(this.preventDefault&&!(0,u.preventDefaultException)(t.target,this._options.preventDefaultException)&&t.preventDefault(),this.pulling=!1,this.$list.style.transition="transform .3s",this.$nextTick(function(){e.$list.style.transform=""}),this.distance>=this._options.distance&&(this.distance=0,this.scroller.clear()))}}}}},function(t,e,n){var i=n(64);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(66)("400fffea",i,!0)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(34),r=i(o),s=n(35),c=i(s),u=function(){function t(e,n,i,o){(0,r.default)(this,t),this.itemRender=n,this.TombstoneRender=i,this.fetch=e,this.Vue=o}return(0,c.default)(t,[{key:"createTombstone",value:function(t){var e=this;return new this.Vue({el:t,render:function(t){return t(e.TombstoneRender)}}).$el}},{key:"render",value:function(t,e,n){var i=this,o=new this.Vue({el:e,render:function(e){return e(i.itemRender,{props:{data:t}})}});return n.vm=o,o.$el}}]),t}();e.default=u},function(t,e,n){"use strict";function i(t){var e=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],(0,r.default)(t));return t.component(e.name,e),e}Object.defineProperty(e,"__esModule",{value:!0});var o=n(27),r=function(t){return t&&t.__esModule?t:{default:t}}(o);n(28),e.default={install:i},"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)},function(t,e,n){"use strict";function i(t,e,n,i){this.RUNWAY_ITEMS=i.prerender,this.RUNWAY_ITEMS_OPPOSITE=i.remain,this.ANIMATION_DURATION_MS=i.animation_duration_ms,this.TOMBSTONE_CLASS=i.tombstone_class,this.INVISIBLE_CLASS=i.invisible_class,this.MAX_COUNT=c,this.column=i.column||1,this.waterflow=i.waterflow,this.anchorItem={index:0,offset:0},this.firstAttachedItem_=0,this.lastAttachedItem_=0,this.anchorScrollTop=0,this.tombstoneSize_=0,this.tombstoneWidth_=0,this.tombstones_=[],this.scroller_=t,this.source_=n,this.items_=e||[],this.loadedItems_=0,this.requestInProgress_=!1,this.source_.fetch||this.setItems(e),this.curPos=0,this.unusedNodes=[],this.baseNode=document.createElement("div"),this.scroller_.addEventListener("scroll",this.onScroll_.bind(this)),window.addEventListener("resize",this.onResize_.bind(this)),window.addEventListener("orientationchange",this.onResize_.bind(this)),this.onResize_()}Object.defineProperty(e,"__esModule",{value:!0});var o=n(32),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=i;var s=n(15),c=1/0;i.prototype={onResize_:function(){var t=this.source_.createTombstone(this.baseNode.cloneNode(!0));t.style.position="absolute",this.scroller_.appendChild(t),t.classList.remove(this.INVISIBLE_CLASS),this.tombstoneSize_=t.offsetHeight/this.column,this.tombstoneWidth_=t.offsetWidth,this.scroller_.removeChild(t);for(var e=0;e<this.items_.length;e++)this.items_[e].top=-1,this.items_[e].height=this.items_[e].width=0;this.onScroll_()},onScroll_:function(){var t=this.scroller_.scrollTop-this.anchorScrollTop;0==this.scroller_.scrollTop?this.anchorItem={index:0,offset:0}:this.anchorItem=this.calculateAnchoredItem(this.anchorItem,t),this.anchorScrollTop=this.scroller_.scrollTop;var e=this.calculateAnchoredItem(this.anchorItem,this.scroller_.offsetHeight);t<0?this.fill(this.anchorItem.index-this.RUNWAY_ITEMS,e.index+this.RUNWAY_ITEMS_OPPOSITE):this.fill(this.anchorItem.index-this.RUNWAY_ITEMS_OPPOSITE,e.index+this.RUNWAY_ITEMS)},calculateAnchoredItem:function(t,e){if(0==e)return t;e+=t.offset;var n=t.index,i=0;if(e<0){for(;e<0&&n>0&&this.items_[n-1].height;)e+=this.items_[n-1].height,n--;i=Math.max(-n,Math.ceil(Math.min(e,0)/this.tombstoneSize_))}else{for(;e>0&&n<this.items_.length&&this.items_[n].height&&this.items_[n].height<e;)e-=this.items_[n].height,n++;(n>=this.items_.length||!this.items_[n].height)&&(i=Math.floor(Math.max(e,0)/this.tombstoneSize_))}return n+=i,e-=i*this.tombstoneSize_,n=Math.min(n,this.MAX_COUNT-1),{index:Math.floor(n/this.column)*this.column,offset:e}},fill:function(t,e){this.firstAttachedItem_=Math.max(0,t),this.lastAttachedItem_=e,this.attachContent()},getTombstone:function(){var t=this.tombstones_.pop();return t?(t.classList.remove(this.INVISIBLE_CLASS),t.style.opacity=1,t.style.transform="",t.style.transition="",t):this.source_.createTombstone(this.baseNode.cloneNode(!0))},getUnUsedNodes:function(){if(this.waterflow)for(var t=0;t<this.items_.length;t++)this.items_[t].node&&!(0,s.inView)(this.items_[t].node)&&(this.items_[t].vm?this.clearItem(this.items_[t]):this.clearTombstone(this.items_[t]),this.items_[t].vm=null,this.items_[t].node=null);else for(var e=0;e<this.items_.length;e++)e!==this.firstAttachedItem_?(this.items_[e].vm?this.clearItem(this.items_[e]):this.clearTombstone(this.items_[e]),this.items_[e].vm=null,this.items_[e].node=null):e=this.lastAttachedItem_-1},clearItem:function(t){t.vm&&(t.vm.$destroy(),t.node&&this.unusedNodes.push(t.node))},clearTombstone:function(t){t.node&&(t.node.classList.contains(this.TOMBSTONE_CLASS)?(this.tombstones_.push(t.node),this.tombstones_[this.tombstones_.length-1].classList.add(this.INVISIBLE_CLASS)):this.unusedNodes.push(t.node))},clearUnUsedNodes:function(){for(;this.unusedNodes.length;)this.scroller_.removeChild(this.unusedNodes.pop())},getNodePosition:function(){this.anchorScrollTop=0;for(var t=0;t<this.anchorItem.index;t++)this.anchorScrollTop+=this.items_[t].height||this.tombstoneSize_;this.anchorScrollTop+=this.anchorItem.offset,this.curPos=this.anchorScrollTop-this.anchorItem.offset;for(var e=this.anchorItem.index;e>this.firstAttachedItem_;)this.curPos-=this.items_[e-1].height||this.tombstoneSize_,e--;for(;e<this.firstAttachedItem_;)this.curPos+=this.items_[e].height||this.tombstoneSize_,e++},tombstoneLayout:function(t){var e=void 0,n=void 0,i=void 0;for(e in t)n=t[e],i=e%this.column*this.items_[e].width,this.items_[e].node.style.transform="translate3d("+i+"px,"+(this.anchorScrollTop+n[1])*this.column+"px, 0) scale("+this.tombstoneWidth_/this.items_[e].width+", "+this.tombstoneSize_/this.items_[e].height+")",this.items_[e].node.offsetTop,n[0].offsetTop,this.items_[e].node.style.transition="transform "+this.ANIMATION_DURATION_MS+"ms"},itemLayout:function(t){var e=void 0,n=void 0,i=0,o=0,s=void 0;for(this.waterflow&&!this.posList&&(this.posList={0:(0,r.default)({length:this.column}).map(function(t){return 0})}),e=this.firstAttachedItem_;e<this.lastAttachedItem_;e++)n=t[e],this.waterflow&&(s=this.posList[Math.floor(e/this.column)].slice()),i=e%this.column*(this.items_[e].width||this.tombstoneWidth_),o=this.waterflow?s[e%this.column]:this.curPos,n&&(n[0].style.transition="transform "+this.ANIMATION_DURATION_MS+"ms, opacity "+this.ANIMATION_DURATION_MS+"ms",n[0].style.transform="translate3d("+i+"px,"+o+"px, 0) scale("+this.items_[e].width/this.tombstoneWidth_+", "+this.items_[e].height/this.tombstoneSize_+")",n[0].style.opacity=0),this.curPos!==this.items_[e].top&&(n||(this.items_[e].node.style.transition=""),this.items_[e].node.style.transform="translate3d("+i+"px,"+o+"px, 0)"),this.items_[e].top=this.curPos,(e+1)%this.column==0&&(this.curPos+=(this.items_[e].height|this.tombstoneSize_)*this.column),this.waterflow&&(this.posList[Math.floor(e/this.column)+1]?this.posList[Math.floor(e/this.column)+1][e%this.column]=s[e%this.column]+this.items_[e].height*this.column:this.posList[Math.floor(e/this.column)+1]=s.slice())},setAnimatePosition:function(t){this.tombstoneLayout(t),this.itemLayout(t)},renderItems:function(){var t={},e=void 0,n=[],i=void 0,o=Math.floor((this.lastAttachedItem_+this.RUNWAY_ITEMS)/this.column)*this.column;for(o>this.MAX_COUNT&&(this.lastAttachedItem_=this.MAX_COUNT),i=this.firstAttachedItem_;i<this.lastAttachedItem_;i++){for(;this.items_.length<=i;)this.addItem_();if(this.items_[i].node){if(!this.items_[i].node.classList.contains(this.TOMBSTONE_CLASS)||!this.items_[i].data)continue;this.ANIMATION_DURATION_MS?(this.items_[i].node.style.zIndex=1,t[i]=[this.items_[i].node,this.items_[i].top-this.anchorScrollTop]):(this.items_[i].node.classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(this.items_[i].node)),this.items_[i].node=null}e=this.items_[i].data?this.source_.render(this.items_[i].data,this.unusedNodes.pop()||this.baseNode.cloneNode(!0),this.items_[i]):this.getTombstone(),e.style.position="absolute",this.items_[i].top=-1,this.items_[i].node=e,n.push(e)}var r=n.length;for(i=0;i<r;i++)this.scroller_.appendChild(n[i]);return t},cacheItemHeight:function(){for(var t=this.firstAttachedItem_;t<this.lastAttachedItem_;t++)this.items_[t].data&&!this.items_[t].height&&(this.items_[t].height=this.items_[t].node.offsetHeight/this.column,this.items_[t].width=this.items_[t].node.offsetWidth)},attachContent:function(){var t=this;this.getUnUsedNodes();var e=this.renderItems();this.clearUnUsedNodes(),this.cacheItemHeight(),this.getNodePosition(),this.setAnimatePosition(e),this.ANIMATION_DURATION_MS&&setTimeout(function(){t.tombstoneAnimation(e)},this.ANIMATION_DURATION_MS),this.maybeRequestContent()},setItems:function(t){t=t||[],this.items_=t,this.MAX_COUNT=t.length},scrollToIndex:function(t){this.fill(0,t+1)},setScrollRunway:function(){this.scrollRunwayEnd_=Math.max(this.scrollRunwayEnd_,this.curPos+this.SCROLL_RUNWAY),this.scrollRunway_.style.transform="translate(0, "+this.scrollRunwayEnd_+"px)",this.scroller_.scrollTop=this.anchorScrollTop},tombstoneAnimation:function(t){var e=void 0;for(var n in t)e=t[n],e[0].classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(e[0]);t=null},maybeRequestContent:function(){var t=this;if(!this.requestInProgress_){var e=this.lastAttachedItem_-this.loadedItems_;e<=0||(this.requestInProgress_=!0,this.source_.fetch&&this.source_.fetch(e,this.loadedItems_).then(function(e){t.MAX_COUNT=e.count,t.addContent(e.list)}))}},addItem_:function(){this.items_.push({vm:null,data:null,node:null,height:0,width:0,top:0})},addContent:function(t){if(t.length){this.requestInProgress_=!1;for(var e=void 0,n=0;n<t.length;n++)this.items_.length<=this.loadedItems_&&this.addItem_(),this.loadedItems_<=this.MAX_COUNT&&(e=this.loadedItems_++,this.items_[e].data=t[n]);this.attachContent()}},clear:function(){this.loadedItems_=0,this.requestInProgress_=!1,this.firstAttachedItem_=-1,this.lastAttachedItem_=-1,this.getUnUsedNodes(),this.clearUnUsedNodes(),this.items_=[],this.onResize_()},destroy:function(){this.scroller_.removeEventListener("scroll",this.onScroll_),window.removeEventListener("resize",this.onResize_),window.removeEventListener("orientationchange",this.onResize_),this.clear()}}},function(t,e,n){t.exports={default:n(36),__esModule:!0}},function(t,e,n){t.exports={default:n(37),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var i=n(33),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){n(63),n(61),t.exports=n(5).Array.from},function(t,e,n){n(62);var i=n(5).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(23),o=n(24),r=n(58);t.exports=function(t){return function(e,n,s){var c,u=i(e),a=o(u.length),h=r(s,a);if(t&&n!=n){for(;a>h;)if((c=u[h++])!=c)return!0}else for(;a>h;h++)if((t||h in u)&&u[h]===n)return t||h||0;return!t&&-1}}},function(t,e,n){var i=n(16),o=n(0)("toStringTag"),r="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),o))?n:r?i(e):"Object"==(c=i(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){"use strict";var i=n(3),o=n(12);t.exports=function(t,e,n){e in t?i.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){t.exports=n(2).document&&document.documentElement},function(t,e,n){t.exports=!n(1)&&!n(20)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e,n){var i=n(11),o=n(0)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||r[o]===t)}},function(t,e,n){var i=n(4);t.exports=function(t,e,n,o){try{return o?e(i(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&i(r.call(t)),e}}},function(t,e,n){"use strict";var i=n(51),o=n(12),r=n(21),s={};n(7)(s,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:o(1,n)}),r(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(50),o=n(9),r=n(56),s=n(7),c=n(6),u=n(11),a=n(47),h=n(21),l=n(53),f=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,p,_,v,y){a(n,e,p);var g,b,w,x=function(t){if(!d&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},I=e+" Iterator",S="values"==_,T=!1,A=t.prototype,N=A[f]||A["@@iterator"]||_&&A[_],O=N||x(_),M=_?S?x("entries"):O:void 0,E="Array"==e?A.entries||N:N;if(E&&(w=l(E.call(new t)))!==Object.prototype&&(h(w,I,!0),i||c(w,f)||s(w,f,m)),S&&N&&"values"!==N.name&&(T=!0,O=function(){return N.call(this)}),i&&!y||!d&&!T&&A[f]||s(A,f,O),u[e]=O,u[I]=m,_)if(g={values:S?O:x("values"),keys:v?O:x("keys"),entries:M},y)for(b in g)b in A||r(A,b,g[b]);else o(o.P+o.F*(d||T),e,g);return g}},function(t,e,n){var i=n(0)("iterator"),o=!1;try{var r=[7][i]();r.return=function(){o=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r=[7],s=r[i]();s.next=function(){return{done:n=!0}},r[i]=function(){return s},t(r)}catch(t){}return n}},function(t,e){t.exports=!0},function(t,e,n){var i=n(4),o=n(52),r=n(19),s=n(13)("IE_PROTO"),c=function(){},u=function(){var t,e=n(18)("iframe"),i=r.length;for(e.style.display="none",n(42).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;i--;)delete u.prototype[r[i]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=i(t),n=new c,c.prototype=null,n[s]=t):n=u(),void 0===e?n:o(n,e)}},function(t,e,n){var i=n(3),o=n(4),r=n(55);t.exports=n(1)?Object.defineProperties:function(t,e){o(t);for(var n,s=r(e),c=s.length,u=0;c>u;)i.f(t,n=s[u++],e[n]);return t}},function(t,e,n){var i=n(6),o=n(25),r=n(13)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),i(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var i=n(6),o=n(23),r=n(39)(!1),s=n(13)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,a=[];for(n in c)n!=s&&i(c,n)&&a.push(n);for(;e.length>u;)i(c,n=e[u++])&&(~r(a,n)||a.push(n));return a}},function(t,e,n){var i=n(54),o=n(19);t.exports=Object.keys||function(t){return i(t,o)}},function(t,e,n){t.exports=n(7)},function(t,e,n){var i=n(14),o=n(8);t.exports=function(t){return function(e,n){var r,s,c=String(o(e)),u=i(n),a=c.length;return u<0||u>=a?t?"":void 0:(r=c.charCodeAt(u),r<55296||r>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?t?c.charAt(u):r:t?c.slice(u,u+2):s-56320+(r-55296<<10)+65536)}}},function(t,e,n){var i=n(14),o=Math.max,r=Math.min;t.exports=function(t,e){return t=i(t),t<0?o(t+e,0):r(t,e)}},function(t,e,n){var i=n(10);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var i=n(40),o=n(0)("iterator"),r=n(11);t.exports=n(5).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||r[i(t)]}},function(t,e,n){"use strict";var i=n(17),o=n(9),r=n(25),s=n(46),c=n(45),u=n(24),a=n(41),h=n(60);o(o.S+o.F*!n(49)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,f=r(t),d="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,_=void 0!==p,v=0,y=h(f);if(_&&(p=i(p,m>2?arguments[2]:void 0,2)),void 0==y||d==Array&&c(y))for(e=u(f.length),n=new d(e);e>v;v++)a(n,v,_?p(f[v],v):f[v]);else for(l=y.call(f),n=new d;!(o=l.next()).done;v++)a(n,v,_?s(l,p,[o.value,v],!0):o.value);return n.length=v,n}})},function(t,e,n){var i=n(9);i(i.S+i.F*!n(1),"Object",{defineProperty:n(3).f})},function(t,e,n){"use strict";var i=n(57)(!0);n(48)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){e=t.exports=n(65)(),e.push([t.i,".recyclerview-container{position:relative}.recyclerview-loading{position:absolute;top:0;left:0;width:100%;text-align:center;padding:10px;font-size:14px;color:#9e9e9e}.recyclerview{margin:0;padding:0;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:absolute;box-sizing:border-box;contain:layout;will-change:transform}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=h[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));h[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(m)return p;i.parentNode.removeChild(i)}if(_){var r=d++;i=f||(f=o()),e=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=o(),e=c.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function c(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=n(67),h={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,m=!1,p=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){m=n;var o=a(t,e);return i(o),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r],c=h[s.id];c.refs--,n.push(c)}e?(o=a(t,e),i(o)):o=[];for(var r=0;r<n.length;r++){var c=n[r];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],c=r[1],u=r[2],a=r[3],h={id:t+":"+o,css:c,media:u,sourceMap:a};i[s]?i[s].parts.push(h):n.push(i[s]={id:s,parts:[h]})}return n}}])});