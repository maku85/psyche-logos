(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{383:function(e,t,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("7b69f5d6",content,!0,{sourceMap:!1})},384:function(e,t,n){"use strict";n(383)},385:function(e,t,n){var o=n(17)(!1);o.push([e.i,"#contact[data-v-67b9e26f]{background-color:#fff;padding:100px 0}#contact h3[data-v-67b9e26f]{font-size:36px;font-weight:400;line-height:1.3em;margin-bottom:33px}#contact p[data-v-67b9e26f]{font-size:15px;color:#666}#contact .svg-border-waves .v-image[data-v-67b9e26f]{position:absolute;bottom:0;left:0;height:3rem;width:100%;overflow:hidden}",""]),e.exports=o},388:function(e,t,n){"use strict";n.r(t);n(24);var o={data:function(){return{icons:["fa-facebook","fa-twitter","fa-linkedin","fa-instagram"],valid:!0,name:"",nameRules:[function(e){return!!e||"O campo nome é obrigatório"},function(e){return e&&e.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(e){return!!e||"O campo email é obrigatório"},function(e){return/.+@.+\..+/.test(e)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(e){return!!e||"O campo de texto é obrigatório"},function(e){return e&&e.length>=10||"Mínimo de 10 caracteres"}],lazy:!1,snackbar:{enabled:!1,text:"",color:""}}},methods:{submit:function(){}}},r=(n(384),n(47)),l=n(42),c=n.n(l),d=n(253),m=n(457),v=n(399),f=n(458),_=n(157),x=n(459),h=n(460),k=n(456),w=n(461),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"contact"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"5"}},[n("h3",[e._v("Contat me")]),e._v(" "),n("p",[e._v("\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste\n              explicabo commodi quisquam asperiores dolore ad enim provident\n              veniam perferendis voluptate, perspiciatis.\n            ")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing.")]),e._v(" "),n("p",[e._v("Telefone: +xx (xx) xxxxx-xxxx")]),e._v(" "),n("p",[e._v("Email: email@email.com")])]),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-textarea",{attrs:{rules:e.textAreaRules,label:"Message",required:""},model:{value:e.textArea,callback:function(t){e.textArea=t},expression:"textArea"}}),e._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{disabled:!e.valid,color:"primary",dark:e.valid,rounded:"",block:""},on:{click:e.submit}},[e._v("\n                Submit\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"svg-border-waves text-white"},[n("v-img",{attrs:{src:"~@/assets/img/borderWavesBlue.svg"}})],1),e._v(" "),n("v-snackbar",{attrs:{timeout:"3000",right:"",top:"",color:e.snackbar.color},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[n("v-btn",e._b({attrs:{text:""},on:{click:function(t){e.snackbar.enabled=!1}}},"v-btn",o,!1),[e._v("\n        Fechar\n      ")])]}}]),model:{value:e.snackbar.enabled,callback:function(t){e.$set(e.snackbar,"enabled",t)},expression:"snackbar.enabled"}},[e._v("\n    "+e._s(e.snackbar.text)+"\n\n    ")])],1)}),[],!1,null,"67b9e26f",null);t.default=component.exports;c()(component,{VBtn:d.a,VCol:m.a,VContainer:v.a,VForm:f.a,VImg:_.a,VRow:x.a,VSnackbar:h.a,VTextField:k.a,VTextarea:w.a})},400:function(e,t,n){"use strict";n(255);var o=n(382);t.a=Object(o.a)("flex")},401:function(e,t,n){"use strict";n(255);var o=n(382);t.a=Object(o.a)("layout")},410:function(e,t,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("d0612e20",content,!0,{sourceMap:!1})},431:function(e,t,n){"use strict";n(410)},432:function(e,t,n){var o=n(17)(!1);o.push([e.i,"#about[data-v-27b0a44b]{background-color:#d9ed92}#about .v-image[data-v-27b0a44b]{margin:auto}",""]),e.exports=o},462:function(e,t,n){"use strict";n.r(t);var o={name:"AboutPage"},r=(n(431),n(47)),l=n(42),c=n.n(l),d=n(457),m=n(399),v=n(400),f=n(157),_=n(401),x=n(459),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("section",{staticClass:"pa-10",attrs:{id:"about"}},[n("v-container",[n("v-row",{staticClass:"py-8"},[n("v-col",{staticClass:"text-center"},[n("div",{staticClass:"display-1 pb-4"},[e._v("About me")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrum exercitationem ullamco laboriosam,\n            nisi ut aliquid ex ea commodi consequatur. Duis aute irure\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint obcaecat cupiditat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),e._v(" "),n("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrum exercitationem ullamco laboriosam,\n            nisi ut aliquid ex ea commodi consequatur. Duis aute irure\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint obcaecat cupiditat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do\n            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim\n            ad minim veniam, quis nostrum exercitationem ullamco laboriosam,\n            nisi ut aliquid ex ea commodi consequatur. Duis aute irure\n            reprehenderit in voluptate velit esse cillum dolore eu fugiat\n            nulla pariatur. Excepteur sint obcaecat cupiditat non proident,\n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])])],1),e._v(" "),n("v-row",[n("v-col",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-img",{attrs:{width:"350",src:"https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_750,h_752,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("ul",[n("li",[e._v("Depression")]),e._v(" "),n("li",[e._v("Anxiety and Phobias")]),e._v(" "),n("li",[e._v("Relationship Difficulties")]),e._v(" "),n("li",[e._v("Life Transitions")]),e._v(" "),n("li",[e._v("Difficulties with Self-Esteem")]),e._v(" "),n("li",[e._v("Eating Issues")]),e._v(" "),n("li",[e._v("Obsessive Compulsive Disorder (OCD)")]),e._v(" "),n("li",[e._v("Post-Traumatic Stress Disorder")]),e._v(" "),n("li",[e._v("Professional/Career Issues")]),e._v(" "),n("li",[e._v("College/Graduate School Issues")]),e._v(" "),n("li",[e._v("Medical and Health Concerns")]),e._v(" "),n("li",[e._v("Pain Management ")]),e._v(" "),n("li",[e._v("Stress Management")]),e._v(" "),n("li",[e._v("Attention Deficit Disorder (ADD)")])])])],1)],1)],1)],1)],1),e._v(" "),n("contact-section")],1)}),[],!1,null,"27b0a44b",null);t.default=component.exports;c()(component,{ContactSection:n(388).default}),c()(component,{VCol:d.a,VContainer:m.a,VFlex:v.a,VImg:f.a,VLayout:_.a,VRow:x.a})}}]);