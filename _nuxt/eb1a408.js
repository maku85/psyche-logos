(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7],{404:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("d49cc5b6",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";n(404)},406:function(t,e,n){var o=n(18)(!1);o.push([t.i,"#contact[data-v-2d1102b3]{background-color:#fff;padding:100px 0}#contact h3[data-v-2d1102b3]{font-size:36px;font-weight:400;line-height:1.3em;margin-bottom:33px}#contact p[data-v-2d1102b3]{font-size:15px;color:#666}#contact .svg-border-waves .v-image[data-v-2d1102b3]{position:absolute;bottom:0;left:0;height:3rem;width:100%;overflow:hidden}",""]),t.exports=o},407:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("63c9496b",content,!0,{sourceMap:!1})},408:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},409:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(92),n(24),{data:function(){return{icons:["fa-facebook","fa-twitter","fa-linkedin","fa-instagram"],valid:!0,name:"",nameRules:[function(t){return!!t||"O campo nome é obrigatório"},function(t){return t&&t.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(t){return!!t||"O campo email é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(t){return!!t||"O campo de texto é obrigatório"},function(t){return t&&t.length>=10||"Mínimo de 10 caracteres"}],lazy:!1,snackbar:{enabled:!1,text:"",color:""}}},beforeDestroy:function(){this.$recaptcha.destroy()},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.init();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},methods:{submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.execute("login");case 3:n=e.sent,console.log("ReCaptcha token:",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Login error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=(n(405),n(43)),l=n(55),v=n.n(l),d=n(271),m=n(400),h=n(395),f=n(466),x=n(159),k=n(397),_=n(2),w=(n(32),n(51),n(65),n(407),n(54)),y=n(37),C=n(36),O=n(74),j=n(127),T=n(15),A=n(1),B=n(13),R=Object(T.a)(w.a,y.a,O.a,Object(j.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:C.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(A.g)(n+footer+o),paddingLeft:Object(A.g)(r),paddingRight:Object(A.g)(c),paddingTop:Object(A.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(B.e)("auto-height",this),0==this.timeout&&Object(B.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(A.m)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(_.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(A.m)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:w.a.options.computed.classes.call(this),style:w.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),E=n(465),z=n(467),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"5"}},[n("h3",[t._v("Contat me")]),t._v(" "),n("p",[t._v("\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste\n              explicabo commodi quisquam asperiores dolore ad enim provident\n              veniam perferendis voluptate, perspiciatis.\n            ")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing.")]),t._v(" "),n("p",[t._v("Telefone: +xx (xx) xxxxx-xxxx")]),t._v(" "),n("p",[t._v("Email: email@email.com")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{attrs:{rules:t.textAreaRules,label:"Message",required:""},model:{value:t.textArea,callback:function(e){t.textArea=e},expression:"textArea"}}),t._v(" "),n("recaptcha"),t._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{disabled:!t.valid,color:"primary",dark:t.valid,rounded:"",block:""},on:{click:t.submit}},[t._v("\n                Submit\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"svg-border-waves text-white"},[n("v-img",{attrs:{src:"~@/assets/img/borderWavesBlue.svg"}})],1),t._v(" "),n("v-snackbar",{attrs:{timeout:"3000",right:"",top:"",color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar.enabled=!1}}},"v-btn",o,!1),[t._v("\n        Fechar\n      ")])]}}]),model:{value:t.snackbar.enabled,callback:function(e){t.$set(t.snackbar,"enabled",e)},expression:"snackbar.enabled"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n\n    ")])],1)}),[],!1,null,"2d1102b3",null);e.default=component.exports;v()(component,{VBtn:d.a,VCol:m.a,VContainer:h.a,VForm:f.a,VImg:x.a,VRow:k.a,VSnackbar:R,VTextField:E.a,VTextarea:z.a})},431:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("f4d4f20e",content,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";n(431)},462:function(t,e,n){var o=n(18)(!1);o.push([t.i,"#services .services-1[data-v-8193113e]{background-color:#b5e48c}#services .services-2[data-v-8193113e]{background-color:#99d98c}#services .services-3[data-v-8193113e]{background-color:#76c893}#services .services-4[data-v-8193113e]{background-color:#52b69a}",""]),t.exports=o},473:function(t,e,n){"use strict";n.r(e);var o={name:"ServicesPage"},r=(n(461),n(43)),c=n(55),l=n.n(c),v=n(400),d=n(395),m=n(397),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("section",{attrs:{id:"services"}},[n("section",{staticClass:"services-1"},[n("v-container",[n("v-row",{staticClass:"py-8"},[n("v-col",{staticClass:"text-center"},[n("div",{staticClass:"display-1 pb-4"},[t._v("Psicoterapia individuale")]),t._v(" "),n("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrum exercitationem ullamco\n              laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute\n              irure reprehenderit in voluptate velit esse cillum dolore eu\n              fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non\n              proident, sunt in culpa qui officia deserunt mollit anim id est\n              laborum.\n            ")])])],1)],1)],1),t._v(" "),n("section",{staticClass:"services-2"},[n("v-container",[n("v-row",{staticClass:"py-8"},[n("v-col",{staticClass:"text-center"},[n("div",{staticClass:"display-1 pb-4"},[t._v("Sostegno piscologico")]),t._v(" "),n("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrum exercitationem ullamco\n              laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute\n              irure reprehenderit in voluptate velit esse cillum dolore eu\n              fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non\n              proident, sunt in culpa qui officia deserunt mollit anim id est\n              laborum.\n            ")])])],1)],1)],1),t._v(" "),n("section",{staticClass:"services-3"},[n("v-container",[n("v-row",{staticClass:"py-8"},[n("v-col",{staticClass:"text-center"},[n("div",{staticClass:"display-1 pb-4"},[t._v("Supporto specialistico BES/DSA")]),t._v(" "),n("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrum exercitationem ullamco\n              laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute\n              irure reprehenderit in voluptate velit esse cillum dolore eu\n              fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non\n              proident, sunt in culpa qui officia deserunt mollit anim id est\n              laborum.\n            ")])])],1)],1)],1)]),t._v(" "),n("contact-section")],1)}),[],!1,null,"8193113e",null);e.default=component.exports;l()(component,{ContactSection:n(409).default}),l()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})}}]);