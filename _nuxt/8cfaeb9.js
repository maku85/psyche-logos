(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5,6,7,9],{407:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("69ae73b4",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n.r(e);n(24);var o={name:"ContactForm",data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"O campo nome é obrigatório"},function(t){return t&&t.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(t){return!!t||"O campo email é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(t){return!!t||"O campo de texto é obrigatório"},function(t){return t&&t.length>=10||"Mínimo de 10 caracteres"}]}}},r=n(43),c=n(55),l=n.n(c),d=n(272),v=n(466),f=n(465),m=n(467),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{color:"#a57355",rules:t.nameRules,label:"Name*",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{color:"#a57355",rules:t.emailRules,label:"E-mail*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{attrs:{color:"#a57355",rules:t.textAreaRules,label:"Message*",required:""},model:{value:t.textArea,callback:function(e){t.textArea=e},expression:"textArea"}}),t._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{disabled:!t.valid,color:"#a57355",dark:t.valid,block:"",flat:""},on:{click:t.submit}},[t._v("\n    Submit\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VForm:v.a,VTextField:f.a,VTextarea:m.a})},410:function(t,e,n){"use strict";n(407)},411:function(t,e,n){var o=n(18)(!1);o.push([t.i,"#contact[data-v-21d0183e]{background:url(http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/11/form-bg-pattern.png?id=432);padding:100px 0}#contact h3[data-v-21d0183e]{font-size:36px;font-weight:400;line-height:1.3em;margin-bottom:33px}#contact p[data-v-21d0183e]{font-size:15px;color:#666}#contact .svg-border-waves .v-image[data-v-21d0183e]{position:absolute;bottom:0;left:0;height:3rem;width:100%;overflow:hidden}#contact .contact-box[data-v-21d0183e]{padding:50px 50px 20px!important;border:1px solid #eee!important;background-color:#f7f5f5}",""]),t.exports=o},412:function(t,e,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("63c9496b",content,!0,{sourceMap:!1})},413:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},415:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(92),n(24),{data:function(){return{icons:["fa-facebook","fa-twitter","fa-linkedin","fa-instagram"],valid:!0,name:"",nameRules:[function(t){return!!t||"O campo nome é obrigatório"},function(t){return t&&t.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(t){return!!t||"O campo email é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(t){return!!t||"O campo de texto é obrigatório"},function(t){return t&&t.length>=10||"Mínimo de 10 caracteres"}],lazy:!1,snackbar:{enabled:!1,text:"",color:""}}},beforeDestroy:function(){this.$recaptcha.destroy()},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.init();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},methods:{submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.execute("login");case 3:n=e.sent,console.log("ReCaptcha token:",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Login error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=(n(410),n(43)),l=n(55),d=n.n(l),v=n(272),f=n(403),m=n(398),h=n(159),x=n(400),_=n(2),k=(n(32),n(51),n(65),n(412),n(54)),w=n(38),y=n(37),C=n(83),O=n(127),z=n(15),V=n(1),j=n(13),A=Object(z.a)(k.a,w.a,C.a,Object(O.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:y.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(V.g)(n+footer+o),paddingLeft:Object(V.g)(r),paddingRight:Object(V.g)(c),paddingTop:Object(V.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(j.e)("auto-height",this),0==this.timeout&&Object(j.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(V.m)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(_.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(V.m)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:k.a.options.computed.classes.call(this),style:k.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact"}},[n("v-container",[n("v-row",{staticClass:"d-flex",attrs:{"align-items":"center"}},[n("v-col",{staticClass:"mt-8",attrs:{cols:"12",sm:"5"}},[n("h3",[t._v("Contact me")]),t._v(" "),n("p",[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste\n          explicabo commodi quisquam asperiores dolore ad enim provident\n          veniam perferendis voluptate, perspiciatis.\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("div",{staticClass:"contact-box text-center"},[n("contact-form")],1)])],1)],1),t._v(" "),n("div",{staticClass:"svg-border-waves text-white"},[n("v-img",{attrs:{src:"~@/assets/img/borderWavesBlue.svg"}})],1),t._v(" "),n("v-snackbar",{attrs:{timeout:"3000",right:"",top:"",color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar.enabled=!1}}},"v-btn",o,!1),[t._v("\n        Fechar\n      ")])]}}]),model:{value:t.snackbar.enabled,callback:function(e){t.$set(t.snackbar,"enabled",e)},expression:"snackbar.enabled"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n\n    ")])],1)}),[],!1,null,"21d0183e",null);e.default=component.exports;d()(component,{ContactForm:n(408).default}),d()(component,{VBtn:v.a,VCol:f.a,VContainer:m.a,VImg:h.a,VRow:x.a,VSnackbar:A})},421:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("9801c5ce",content,!0,{sourceMap:!1})},422:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("d1155e16",content,!0,{sourceMap:!1})},423:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("aa98f446",content,!0,{sourceMap:!1})},424:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("3c93df28",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n(421)},428:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.home-hero[data-v-3cf890aa]{background:url(https://images.unsplash.com/photo-1461468611824-46457c0e11fd?auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1770);background-size:cover;width:100%;max-height:800px;height:100vh}.sub-heading[data-v-3cf890aa]{font-size:14px;color:#a47355;line-height:1.2;text-align:left;font-weight:800;padding-left:88px;letter-spacing:1.2px;position:relative;text-transform:uppercase;margin-top:0}.sub-heading[data-v-3cf890aa]:before{height:6px;width:6px;border-radius:50%;left:0;top:6px}.sub-heading[data-v-3cf890aa]:after,.sub-heading[data-v-3cf890aa]:before{content:"";position:absolute;background:#a47355}.sub-heading[data-v-3cf890aa]:after{top:8px;left:14px;height:2px;opacity:1;width:50px;opacity:.5}',""]),t.exports=o},429:function(t,e,n){"use strict";n(422)},430:function(t,e,n){var o=n(18)(!1);o.push([t.i,"#approach[data-v-2d505d8e]{margin-top:-120px;color:#5f5f5f}#approach .card-1[data-v-2d505d8e],#approach .card-2[data-v-2d505d8e]{border-radius:8px;padding:50px 35px!important;box-shadow:0 6px 60px 0 rgba(51,51,51,.1)}#approach .card-1[data-v-2d505d8e]{background:#fff}#approach .card-2[data-v-2d505d8e]{color:#fff;background:#6f4839}#approach .card-2 p[data-v-2d505d8e]{opacity:.7}#approach .card-2 i[data-v-2d505d8e]{font-size:50px}#approach .card-2 .text-dimmer[data-v-2d505d8e]{color:#fff;font-weight:700;font-size:15px;letter-spacing:1px;margin-bottom:0;margin-top:5px;opacity:.7;text-transform:uppercase}#approach .card-2 .text-phone[data-v-2d505d8e]{font-size:23px;line-height:30px;font-weight:800;color:#fff}#approach .box-title[data-v-2d505d8e]{font-size:23px}",""]),t.exports=o},431:function(t,e,n){"use strict";n(423)},432:function(t,e,n){var o=n(18)(!1);o.push([t.i,'#about[data-v-43f8ff68]{background:url(/brush-effect-1-1.png);background-size:100%;padding:100px 0;color:#5f5f5f}#about .sub-heading[data-v-43f8ff68]{font-size:14px;color:#a47355;line-height:1.2;text-align:left;font-weight:800;padding-left:88px;letter-spacing:1.2px;position:relative;text-transform:uppercase;margin-top:0}#about .sub-heading[data-v-43f8ff68]:before{content:"";position:absolute;height:6px;width:6px;border-radius:50%;background:#a47355;left:0;top:6px}#about .sub-heading[data-v-43f8ff68]:after{content:"";position:absolute;background:#a47355;top:8px;left:14px;height:2px;opacity:1;width:50px;opacity:.5}#about h3[data-v-43f8ff68]{font-size:36px;font-weight:400;line-height:1.3em;margin-bottom:33px;color:#1f1f1f}#about p[data-v-43f8ff68]{font-size:15px;color:#5f5f5f}#about .v-image[data-v-43f8ff68]{margin:auto}',""]),t.exports=o},433:function(t,e,n){"use strict";n(424)},434:function(t,e,n){var o=n(18)(!1);o.push([t.i,'#services[data-v-0db97fe1]{background-color:#151110;border-top:5px solid #a47355;color:#fff}#services .sub-heading[data-v-0db97fe1]{font-size:14px;color:#fff;line-height:1.2;text-align:left;font-weight:800;padding-left:88px;letter-spacing:1.2px;position:relative;text-transform:uppercase;margin-top:0}#services .sub-heading[data-v-0db97fe1]:before{content:"";position:absolute;height:6px;width:6px;border-radius:50%;background:#fff;left:0;top:6px}#services .sub-heading[data-v-0db97fe1]:after{content:"";position:absolute;background:#fff;top:8px;left:14px;height:2px;opacity:1;width:50px;opacity:.5}#services h2[data-v-0db97fe1]{font-size:36px;font-weight:400;line-height:1.3em;margin-bottom:33px}#services p[data-v-0db97fe1]{font-size:15px;color:hsla(0,0%,100%,.75)}#services .service-block[data-v-0db97fe1]{padding-left:15px;padding-right:15px;margin-bottom:22px}#services .service-block h4[data-v-0db97fe1]{font-size:19px;color:#fff;font-weight:600;margin-top:0;padding-bottom:8px;border-bottom:1px solid hsla(0,0%,100%,.1)}#services .service-block p[data-v-0db97fe1]{font-size:15px;color:#fff;font-weight:600;opacity:.7}',""]),t.exports=o},438:function(t,e,n){"use strict";n(196);var o=n(197);e.a=Object(o.a)("flex")},439:function(t,e,n){"use strict";n(196);var o=n(197);e.a=Object(o.a)("layout")},440:function(t,e,n){"use strict";n.r(e);var o={name:"HomeHero"},r=(n(427),n(43)),c=n(55),l=n.n(c),d=n(398),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"home-hero",attrs:{fluid:"","fill-height":""}},[n("v-container",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[n("div",{staticClass:"sub-heading mb-5"},[t._v("Best psychologist")]),t._v(" "),n("div",{staticClass:"font-weight-bold white--text"},[n("div",{staticClass:"display-2 font-weight-bold"},[t._v("Tranform your")]),t._v(" "),n("div",{staticClass:"display-2 font-italic font-weight-bold"},[t._v("\n        mindset & achieve\n      ")]),t._v(" "),n("div",{staticClass:"display-2 font-weight-bold"},[t._v("your Goals.")]),t._v(" "),n("p",{staticClass:"mt-5",staticStyle:{"max-width":"500px"}},[t._v("\n        Amazing therapies and advice to help you achieve your goals and taking\n        important decisions of your life.\n      ")])])])],1)}),[],!1,null,"3cf890aa",null);e.default=component.exports;l()(component,{VContainer:d.a})},441:function(t,e,n){"use strict";n.r(e);var o={name:"HomeDetails"},r=(n(429),n(43)),c=n(55),l=n.n(c),d=n(272),v=n(403),f=n(398),m=n(189),h=n(400),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{id:"approach"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("div",{staticClass:"card-1"},[n("h3",{staticClass:"box-title"},[t._v("How can I help you?")]),t._v(" "),n("p",{staticClass:"subheading mt-3"},[t._v("\n          If you’re experiencing any kind of mental illness or problem in\n          relations.\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"#a47355",dark:"",text:"",to:"/services"}},[t._v("explore services")])],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("div",{staticClass:"card-2"},[n("h3",{staticClass:"box-title"},[t._v("Call for Consultation")]),t._v(" "),n("div",{staticClass:"d-flex align-center mt-8"},[n("div",{staticClass:"mr-4"},[n("v-icon",[t._v("mdi-phone")])],1),t._v(" "),n("div",[n("div",{staticClass:"text-dimmer"},[t._v("Dial now")]),t._v(" "),n("div",{staticClass:"text-phone"},[t._v("921-124-9220")])])])])])],1)],1)}),[],!1,null,"2d505d8e",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:f.a,VIcon:m.a,VRow:h.a})},442:function(t,e,n){"use strict";n.r(e);var o={name:"ServicesSection"},r=(n(433),n(43)),c=n(55),l=n.n(c),d=n(272),v=n(403),f=n(398),m=n(405),h=n(438),x=n(189),_=n(439),k=n(400),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",{attrs:{id:"services"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("div",{staticClass:"px-5 py-15"},[n("p",{staticClass:"sub-heading"},[t._v("My practice")]),t._v(" "),n("h2",[t._v("Personal & Individual therapy sessions.")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\n            mauris felis, varius rutrum massa a, dignissim ornare dui. Cras\n            eget velit eu dui tristique lobortis sit amet vel tellus.\n          ")]),t._v(" "),n("v-btn",{attrs:{to:"/services",text:""}},[t._v("leggi altro")])],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-layout",{staticClass:"px-5 py-15 mt-4",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"service-block",attrs:{sm12:"",md6:""}},[n("h4",[n("v-icon",{attrs:{color:"#a57355"}},[t._v("mdi-star")]),t._v(" Adults")],1),t._v(" "),n("p",[t._v("\n              Life-changing sessions for adults, no matter what age group they\n              belong to.\n            ")])]),t._v(" "),n("v-flex",{staticClass:"service-block",attrs:{sm12:"",md6:""}},[n("h4",[n("v-icon",{attrs:{color:"#a57355"}},[t._v("mdi-star")]),t._v(" Children")],1),t._v(" "),n("p",[t._v("\n              A special session for your kids regarding personal problems and\n              study.\n            ")])]),t._v(" "),n("v-flex",{staticClass:"service-block",attrs:{sm12:"",md6:""}},[n("h4",[n("v-icon",{attrs:{color:"#a57355"}},[t._v("mdi-star")]),t._v(" Families")],1),t._v(" "),n("p",[t._v("\n              Join me with your family and we’ll dicuss your issues to make\n              your bonds better.\n            ")])]),t._v(" "),n("v-flex",{staticClass:"service-block",attrs:{sm12:"",md6:""}},[n("h4",[n("v-icon",{attrs:{color:"#a57355"}},[t._v("mdi-star")]),t._v(" Business")],1),t._v(" "),n("p",[t._v("\n              Arrange a business session for your organization to boost the\n              outcome.\n            ")])])],1)],1)],1)],1)],1)}),[],!1,null,"0db97fe1",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:f.a,VContent:m.a,VFlex:h.a,VIcon:x.a,VLayout:_.a,VRow:k.a})},443:function(t,e,n){"use strict";n.r(e);n(431);var o=n(43),r=n(55),c=n.n(r),l=n(272),d=n(398),v=n(438),f=n(159),m=n(439),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{id:"about",fluid:"","grid-list-lg":""}},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"about-details",attrs:{sm12:"",md6:""}},[n("div",{staticClass:"px-5 py-15"},[n("p",{staticClass:"sub-heading"},[t._v("Let me introduce")]),t._v(" "),n("h3",[t._v("\n            I’m Dr. Susan Lopez - Expert "),n("em",[t._v("Psychologist")]),t._v(" from New York.\n          ")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua minim\n            veniam.\n          ")]),t._v(" "),n("p",[t._v("\n            Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\n            quae ab illo inventore veritatis et quasi architecto beatae vitae\n            dicta sunt explicabo. Diam nascetur ad varius curabitur ante donec\n            de proin auctor felis hendrerit.\n          ")]),t._v(" "),n("v-btn",{attrs:{color:"#a47355",text:"",to:"/about"}},[t._v("about me >")])],1)]),t._v(" "),n("v-flex",{staticClass:"about-image hidden-sm-and-down",attrs:{sm12:"",md6:""}},[n("v-img",{attrs:{height:"450px",width:"300px",src:"https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_488,h_918,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"}})],1)],1)],1)],1)}),[],!1,null,"43f8ff68",null);e.default=component.exports;c()(component,{VBtn:l.a,VContainer:d.a,VFlex:v.a,VImg:f.a,VLayout:m.a})},472:function(t,e,n){"use strict";n.r(e);var o={name:"IndexPage"},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("home-hero"),t._v(" "),n("areas-section"),t._v(" "),n("about-section"),t._v(" "),n("services-section"),t._v(" "),n("contact-section")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeHero:n(440).default,AreasSection:n(441).default,AboutSection:n(443).default,ServicesSection:n(442).default,ContactSection:n(415).default})}}]);