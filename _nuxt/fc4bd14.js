(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,6,8],{407:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("69ae73b4",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n.r(e);n(24);var o={name:"ContactForm",data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"O campo nome é obrigatório"},function(t){return t&&t.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(t){return!!t||"O campo email é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(t){return!!t||"O campo de texto é obrigatório"},function(t){return t&&t.length>=10||"Mínimo de 10 caracteres"}]}}},r=n(43),c=n(55),l=n.n(c),d=n(272),v=n(466),m=n(465),h=n(467),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{color:"#a57355",rules:t.nameRules,label:"Name*",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{color:"#a57355",rules:t.emailRules,label:"E-mail*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{attrs:{color:"#a57355",rules:t.textAreaRules,label:"Message*",required:""},model:{value:t.textArea,callback:function(e){t.textArea=e},expression:"textArea"}}),t._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{disabled:!t.valid,color:"#a57355",dark:t.valid,block:"",flat:""},on:{click:t.submit}},[t._v("\n    Submit\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VForm:v.a,VTextField:m.a,VTextarea:h.a})},409:function(t,e,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("31485f93",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(407)},411:function(t,e,n){var o=n(18)(!1);o.push([t.i,"#contact[data-v-21d0183e]{background:url(http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/11/form-bg-pattern.png?id=432);padding:100px 0}#contact h3[data-v-21d0183e]{font-size:36px;font-weight:400;line-height:1.3em;margin-bottom:33px}#contact p[data-v-21d0183e]{font-size:15px;color:#666}#contact .svg-border-waves .v-image[data-v-21d0183e]{position:absolute;bottom:0;left:0;height:3rem;width:100%;overflow:hidden}#contact .contact-box[data-v-21d0183e]{padding:50px 50px 20px!important;border:1px solid #eee!important;background-color:#f7f5f5}",""]),t.exports=o},412:function(t,e,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("63c9496b",content,!0,{sourceMap:!1})},413:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},415:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(92),n(24),{data:function(){return{icons:["fa-facebook","fa-twitter","fa-linkedin","fa-instagram"],valid:!0,name:"",nameRules:[function(t){return!!t||"O campo nome é obrigatório"},function(t){return t&&t.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(t){return!!t||"O campo email é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(t){return!!t||"O campo de texto é obrigatório"},function(t){return t&&t.length>=10||"Mínimo de 10 caracteres"}],lazy:!1,snackbar:{enabled:!1,text:"",color:""}}},beforeDestroy:function(){this.$recaptcha.destroy()},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.init();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},methods:{submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.execute("login");case 3:n=e.sent,console.log("ReCaptcha token:",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Login error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=(n(410),n(43)),l=n(55),d=n.n(l),v=n(272),m=n(403),h=n(398),f=n(159),x=n(400),_=n(2),k=(n(32),n(51),n(65),n(412),n(54)),w=n(38),y=n(37),C=n(83),O=n(127),j=n(15),A=n(1),T=n(13),z=Object(j.a)(k.a,w.a,C.a,Object(O.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:y.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(A.g)(n+footer+o),paddingLeft:Object(A.g)(r),paddingRight:Object(A.g)(c),paddingTop:Object(A.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(T.e)("auto-height",this),0==this.timeout&&Object(T.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(A.m)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(_.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(A.m)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:k.a.options.computed.classes.call(this),style:k.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact"}},[n("v-container",[n("v-row",{staticClass:"d-flex",attrs:{"align-items":"center"}},[n("v-col",{staticClass:"mt-8",attrs:{cols:"12",sm:"5"}},[n("h3",[t._v("Contact me")]),t._v(" "),n("p",[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste\n          explicabo commodi quisquam asperiores dolore ad enim provident\n          veniam perferendis voluptate, perspiciatis.\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("div",{staticClass:"contact-box text-center"},[n("contact-form")],1)])],1)],1),t._v(" "),n("div",{staticClass:"svg-border-waves text-white"},[n("v-img",{attrs:{src:"~@/assets/img/borderWavesBlue.svg"}})],1),t._v(" "),n("v-snackbar",{attrs:{timeout:"3000",right:"",top:"",color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar.enabled=!1}}},"v-btn",o,!1),[t._v("\n        Fechar\n      ")])]}}]),model:{value:t.snackbar.enabled,callback:function(e){t.$set(t.snackbar,"enabled",e)},expression:"snackbar.enabled"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n\n    ")])],1)}),[],!1,null,"21d0183e",null);e.default=component.exports;d()(component,{ContactForm:n(408).default}),d()(component,{VBtn:v.a,VCol:m.a,VContainer:h.a,VImg:f.a,VRow:x.a,VSnackbar:z})},419:function(t,e,n){"use strict";n(409)},420:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.home-hero[data-v-53f382d0]{background:url(http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/10/quote-bg.jpg?id=202);background-size:cover;width:100%;height:400px;position:relative}.home-hero[data-v-53f382d0]:before{content:"";position:absolute;background-color:#151110;height:100%;width:100%;top:0;left:0;z-index:1;opacity:.8}.home-hero .hero-content[data-v-53f382d0]{z-index:1}',""]),t.exports=o},425:function(t,e,n){"use strict";n.r(e);var o={name:"SeparatorComponent"},r=(n(419),n(43)),c=n(55),l=n.n(c),d=n(398),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"home-hero",attrs:{fluid:"","fill-height":"","justify-center":"","pa-5":""}},[n("div",{staticClass:"hero-content font-weight-bold white--text text-center"},[n("div",{staticClass:"display-1 font-italic"},[t._v("\n      Susan is a life changer, having magical\n    ")]),t._v(" "),n("div",{staticClass:"display-1 font-italic"},[t._v("skills for helping people with")]),t._v(" "),n("div",{staticClass:"display-1 font-italic"},[t._v("psychotherapy.")]),t._v(" "),n("p",{staticClass:"subheading font-weight-light mt-5"},[t._v("\n      Amazing therapies and advice to help you achieve your goals and taking\n      important decisions of your life.\n    ")])])])}),[],!1,null,"53f382d0",null);e.default=component.exports;l()(component,{VContainer:d.a})},435:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("1d920934",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";n(435)},445:function(t,e,n){var o=n(18)(!1);o.push([t.i,'#about[data-v-66688224]{background:url(http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/11/form-bg-pattern.png?id=432)}#about .v-image[data-v-66688224]{margin:auto;border-radius:10px}#about .sub-heading[data-v-66688224]{font-size:14px;color:#a47355;line-height:1.2;text-align:left;font-weight:800;padding-left:88px;letter-spacing:1.2px;position:relative;text-transform:uppercase;margin-top:0}#about .sub-heading[data-v-66688224]:before{content:"";position:absolute;height:6px;width:6px;border-radius:50%;background:#a47355;left:0;top:6px}#about .sub-heading[data-v-66688224]:after{content:"";position:absolute;background:#a47355;top:8px;left:14px;height:2px;opacity:1;width:50px;opacity:.5}',""]),t.exports=o},468:function(t,e,n){"use strict";n.r(e);var o={name:"AboutPage"},r=(n(444),n(43)),c=n(55),l=n.n(c),d=n(403),v=n(398),m=n(159),h=n(400),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("section",{staticClass:"pa-10",attrs:{id:"about"}},[n("v-container",[n("v-row",{staticClass:"py-8"},[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-img",{attrs:{width:"350",src:"https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_750,h_752,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("p",{staticClass:"sub-heading"},[t._v("Story of my life")]),t._v(" "),n("div",{staticClass:"display-1 pb-4"},[t._v("About me")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrum exercitationem ullamco laboriosam,\n            nisi ut aliquid ex ea commodi consequatur. Duis aute irure\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint obcaecat cupiditat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrum exercitationem ullamco laboriosam,\n            nisi ut aliquid ex ea commodi consequatur. Duis aute irure\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint obcaecat cupiditat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])])],1)],1)],1),t._v(" "),n("separator"),t._v(" "),n("contact-section")],1)}),[],!1,null,"66688224",null);e.default=component.exports;l()(component,{Separator:n(425).default,ContactSection:n(415).default}),l()(component,{VCol:d.a,VContainer:v.a,VImg:m.a,VRow:h.a})}}]);