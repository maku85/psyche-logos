(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6],{383:function(e,t,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("d49cc5b6",content,!0,{sourceMap:!1})},385:function(e,t,n){"use strict";n(383)},386:function(e,t,n){var r=n(17)(!1);r.push([e.i,"#contact[data-v-2d1102b3]{background-color:#fff;padding:100px 0}#contact h3[data-v-2d1102b3]{font-size:36px;font-weight:400;line-height:1.3em;margin-bottom:33px}#contact p[data-v-2d1102b3]{font-size:15px;color:#666}#contact .svg-border-waves .v-image[data-v-2d1102b3]{position:absolute;bottom:0;left:0;height:3rem;width:100%;overflow:hidden}",""]),e.exports=r},388:function(e,t,n){"use strict";n.r(t);var r=n(31),o=(n(89),n(26),{data:function(){return{icons:["fa-facebook","fa-twitter","fa-linkedin","fa-instagram"],valid:!0,name:"",nameRules:[function(e){return!!e||"O campo nome é obrigatório"},function(e){return e&&e.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(e){return!!e||"O campo email é obrigatório"},function(e){return/.+@.+\..+/.test(e)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(e){return!!e||"O campo de texto é obrigatório"},function(e){return e&&e.length>=10||"Mínimo de 10 caracteres"}],lazy:!1,snackbar:{enabled:!1,text:"",color:""}}},beforeDestroy:function(){this.$recaptcha.destroy()},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.init();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},methods:{submit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.execute("login");case 3:n=t.sent,console.log("ReCaptcha token:",n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Login error:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),c=(n(385),n(47)),l=n(42),d=n.n(l),m=n(254),v=n(465),f=n(396),x=n(466),h=n(158),_=n(467),k=n(468),w=n(464),C=n(469),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"contact"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"5"}},[n("h3",[e._v("Contat me")]),e._v(" "),n("p",[e._v("\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste\n              explicabo commodi quisquam asperiores dolore ad enim provident\n              veniam perferendis voluptate, perspiciatis.\n            ")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing.")]),e._v(" "),n("p",[e._v("Telefone: +xx (xx) xxxxx-xxxx")]),e._v(" "),n("p",[e._v("Email: email@email.com")])]),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-textarea",{attrs:{rules:e.textAreaRules,label:"Message",required:""},model:{value:e.textArea,callback:function(t){e.textArea=t},expression:"textArea"}}),e._v(" "),n("recaptcha"),e._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{disabled:!e.valid,color:"primary",dark:e.valid,rounded:"",block:""},on:{click:e.submit}},[e._v("\n                Submit\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"svg-border-waves text-white"},[n("v-img",{attrs:{src:"~@/assets/img/borderWavesBlue.svg"}})],1),e._v(" "),n("v-snackbar",{attrs:{timeout:"3000",right:"",top:"",color:e.snackbar.color},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.snackbar.enabled=!1}}},"v-btn",r,!1),[e._v("\n        Fechar\n      ")])]}}]),model:{value:e.snackbar.enabled,callback:function(t){e.$set(e.snackbar,"enabled",t)},expression:"snackbar.enabled"}},[e._v("\n    "+e._s(e.snackbar.text)+"\n\n    ")])],1)}),[],!1,null,"2d1102b3",null);t.default=component.exports;d()(component,{VBtn:m.a,VCol:v.a,VContainer:f.a,VForm:x.a,VImg:h.a,VRow:_.a,VSnackbar:k.a,VTextField:w.a,VTextarea:C.a})},430:function(e,t,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("773c8c80",content,!0,{sourceMap:!1})},460:function(e,t,n){"use strict";n(430)},461:function(e,t,n){var r=n(17)(!1);r.push([e.i,"#approach[data-v-564d0cb4]{background-color:#b5e48c}",""]),e.exports=r},472:function(e,t,n){"use strict";n.r(t);var r={name:"ApproachPage"},o=(n(460),n(47)),c=n(42),l=n.n(c),d=n(465),m=n(396),v=n(467),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("section",{staticClass:"pa-10",attrs:{id:"approach"}},[n("v-container",[n("v-row",{staticClass:"py-8"},[n("v-col",{staticClass:"text-center"},[n("div",{staticClass:"display-1 pb-4"},[e._v("Aree di intervento")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrum exercitationem ullamco laboriosam,\n            nisi ut aliquid ex ea commodi consequatur. Duis aute irure\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint obcaecat cupiditat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrum exercitationem ullamco laboriosam,\n            nisi ut aliquid ex ea commodi consequatur. Duis aute irure\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint obcaecat cupiditat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est\n            laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed\n            do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut\n            enim ad minim veniam, quis nostrum exercitationem ullamco\n            laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute\n            irure reprehenderit in voluptate velit esse cillum dolore eu\n            fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non\n            proident, sunt in culpa qui officia deserunt mollit anim id est\n            laborum.\n          ")])])],1)],1)],1),e._v(" "),n("contact-section")],1)}),[],!1,null,"564d0cb4",null);t.default=component.exports;l()(component,{ContactSection:n(388).default}),l()(component,{VCol:d.a,VContainer:m.a,VRow:v.a})}}]);