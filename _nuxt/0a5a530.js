(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{408:function(t,e,o){"use strict";o.r(e);o(24);var n={name:"ContactForm",data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"O campo nome é obrigatório"},function(t){return t&&t.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(t){return!!t||"O campo email é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(t){return!!t||"O campo de texto é obrigatório"},function(t){return t&&t.length>=10||"Mínimo de 10 caracteres"}]}}},r=o(43),l=o(55),c=o.n(l),d=o(272),m=o(466),v=o(465),f=o(467),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{color:"#a57355",rules:t.nameRules,label:"Name*",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),o("v-text-field",{attrs:{color:"#a57355",rules:t.emailRules,label:"E-mail*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),o("v-textarea",{attrs:{color:"#a57355",rules:t.textAreaRules,label:"Message*",required:""},model:{value:t.textArea,callback:function(e){t.textArea=e},expression:"textArea"}}),t._v(" "),o("v-btn",{staticClass:"mt-3",attrs:{disabled:!t.valid,color:"#a57355",dark:t.valid,block:"",flat:""},on:{click:t.submit}},[t._v("\n    Submit\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VForm:m.a,VTextField:v.a,VTextarea:f.a})},436:function(t,e,o){var content=o(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("60b55b3a",content,!0,{sourceMap:!1})},461:function(t,e,o){"use strict";o(436)},462:function(t,e,o){var n=o(18)(!1);n.push([t.i,'#contact[data-v-cc57d4c8]{color:#5f5f5f}#contact .sub-heading[data-v-cc57d4c8]{font-size:14px;color:#a47355;line-height:1.2;text-align:left;font-weight:800;padding-left:88px;letter-spacing:1.2px;position:relative;text-transform:uppercase;margin-top:0}#contact .sub-heading[data-v-cc57d4c8]:before{content:"";position:absolute;height:6px;width:6px;border-radius:50%;background:#a47355;left:0;top:6px}#contact .sub-heading[data-v-cc57d4c8]:after{content:"";position:absolute;background:#a47355;top:8px;left:14px;height:2px;opacity:1;width:50px;opacity:.5}#contact .contact-box[data-v-cc57d4c8]{border:1px solid #eee;margin-top:0!important;padding-bottom:30px!important;background-color:#f7f5f5!important;border:1px solid #fff!important;border-radius:1px!important;padding:50px;display:block;position:relative;margin:15px 0}',""]),t.exports=n},469:function(t,e,o){"use strict";o.r(e);var n={name:"ContactPage"},r=(o(461),o(43)),l=o(55),c=o.n(l),d=o(403),m=o(398),v=o(189),f=o(122),x=o(86),h=o(107),_=o(400),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("section",{attrs:{id:"contact"}},[o("v-container",{attrs:{"pa-8":""}},[o("v-row",{staticClass:"py-8"},[o("v-col",{staticClass:"mt-8",attrs:{cols:"12",xs:"12",sm:"5"}},[o("p",{staticClass:"sub-heading"},[t._v("Get in touch")]),t._v(" "),o("h2",[t._v("Have queries before the appointment?")]),t._v(" "),o("v-list-item",{staticClass:"mt-4",attrs:{"three-line":""}},[o("v-list-item-icon",[o("v-icon",[t._v(" mdi-message-text")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Let’s Talk")]),t._v(" "),o("v-list-item-subtitle",[o("span",{staticClass:"font-700"},[t._v("Phone:")]),t._v(" +1 921-124-9220"),o("br")]),t._v(" "),o("v-list-item-subtitle",[o("span",{staticClass:"font-700"},[t._v("Email:")]),t._v(" hi@psychare.com\n              ")])],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",xs:"12",sm:"7"}},[o("div",{staticClass:"contact-box text-center"},[o("h4",[t._v("Write Your Queries")]),t._v(" "),o("p",[t._v("Submit your message and I will get in touch within one day.")]),t._v(" "),o("contact-form")],1)])],1)],1)],1)])}),[],!1,null,"cc57d4c8",null);e.default=component.exports;c()(component,{ContactForm:o(408).default}),c()(component,{VCol:d.a,VContainer:m.a,VIcon:v.a,VListItem:f.a,VListItemContent:x.a,VListItemIcon:h.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VRow:_.a})}}]);