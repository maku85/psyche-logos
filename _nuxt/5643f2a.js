(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{236:function(t,e,c){var content=c(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(19).default)("48517564",content,!0,{sourceMap:!1})},238:function(t,e,c){var content=c(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(19).default)("7901ae7e",content,!0,{sourceMap:!1})},239:function(t,e,c){var content=c(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(19).default)("da18ca26",content,!0,{sourceMap:!1})},240:function(t,e,c){var content=c(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(19).default)("cf47615a",content,!0,{sourceMap:!1})},264:function(t,e,c){var content=c(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(19).default)("74dee80e",content,!0,{sourceMap:!1})},271:function(t,e,c){"use strict";var n={name:"DefaultLayout"},o=(c(312),c(43)),l=c(55),r=c.n(l),d=c(396),v=c(405),f=c(195),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-app",[c("app-header"),t._v(" "),c("v-content",{attrs:{transition:"slide-x-transition"}},[c("v-main",{staticClass:"main-container"},[c("Nuxt")],1)],1),t._v(" "),c("app-footer")],1)}),[],!1,null,"717786fa",null);e.a=component.exports;r()(component,{AppHeader:c(382).default,AppFooter:c(385).default}),r()(component,{VApp:d.a,VContent:v.a,VMain:f.a})},275:function(t,e,c){c(276),t.exports=c(277)},306:function(t,e,c){"use strict";c(236)},307:function(t,e,c){var n=c(18)(!1);n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=n},312:function(t,e,c){"use strict";c(238)},313:function(t,e,c){var n=c(18)(!1);n.push([t.i,".main-container[data-v-717786fa]{margin-top:150px}@media only screen and (max-width:600px){.main-container[data-v-717786fa]{margin-top:100px}}",""]),t.exports=n},314:function(t,e,c){"use strict";c(239)},315:function(t,e,c){var n=c(18)(!1);n.push([t.i,'header[data-v-2f272cbc]{background:#fff}#navigation[data-v-2f272cbc]{position:fixed;width:100%;color:#5f5f5f;z-index:6}#navigation .secondary-header[data-v-2f272cbc]{background:#f3ebe6;padding:6px 0;font-size:14px}#navigation .container[data-v-2f272cbc]{height:100%}#navigation .container .header-logo[data-v-2f272cbc],#navigation .container .header-logo-wrap[data-v-2f272cbc]{height:100%;max-width:90%}#navigation .container .menu-item[data-v-2f272cbc]{font-size:15px;text-decoration:none;padding:25px 0;color:#5f5f5f}#navigation .container .menu-item.nuxt-link-exact-active[data-v-2f272cbc]{font-weight:700;position:relative;color:#a67355}#navigation .container .menu-item.nuxt-link-exact-active[data-v-2f272cbc]:after{content:"";position:absolute;display:block;bottom:0;left:0;width:100%;border-top:4px solid;transition:transform .3s ease,opacity .5s ease}',""]),t.exports=n},316:function(t,e,c){"use strict";c(240)},317:function(t,e,c){var n=c(18)(!1);n.push([t.i,".social-item[data-v-3c619a86]{color:rgba(166,115,85,.7)!important}",""]),t.exports=n},376:function(t,e,c){"use strict";c(264)},377:function(t,e,c){var n=c(18)(!1);n.push([t.i,"#app-footer[data-v-de4d49bc]{color:hsla(0,0%,100%,.75)!important;background-color:#151110}#app-footer .copyright[data-v-de4d49bc]{background-color:#2e2928;padding:10px 15px;margin-top:-40px;border-radius:8px}#app-footer .copyright a[data-v-de4d49bc]{color:hsla(0,0%,100%,.75)!important;text-decoration:none}",""]),t.exports=n},382:function(t,e,c){"use strict";c.r(e);var n={data:function(){return{drawer:null,items:[{icon:"mdi-home-outline",text:"Home",link:"/"},{icon:"mdi-information-outline",text:"About",link:"/about"},{icon:"mdi-ballot-outline",text:"Services",link:"/services"},{icon:"mdi-email-outline",text:"Contacts",link:"/contact"}]}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0});var t=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.getElementById("navigation").style.top=t>e?"0":"-120px",t=e}}},o=(c(314),c(43)),l=c(55),r=c.n(l),d=c(397),v=c(398),f=c(399),h=c(189),m=c(190),x=c(122),_=c(86),w=c(107),M=c(406),k=c(400),y=c(401),z=c(402),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[c("v-list",[c("v-list-item",[c("v-list-item-content",[c("div",{staticClass:"py-8"},[c("logo",{staticClass:"header-logo"})],1)])],1)],1),t._v(" "),c("v-divider"),t._v(" "),c("v-list",t._l(t.items,(function(e,i){var n=e.icon,text=e.text,link=e.link;return c("v-list-item",{key:i,attrs:{link:"",to:link}},[c("v-list-item-icon",{staticClass:"justify-center"},[c("v-icon",[t._v(t._s(n))])],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",{staticClass:"subtitile-1"},[t._v(t._s(text))])],1)],1)})),1)],1),t._v(" "),c("nav",{attrs:{id:"navigation"}},[c("div",{staticClass:"secondary-header hidden-sm-and-down"},[c("v-container",[c("v-row",{staticClass:"d-flex align-center"},[c("div",[t._v("921-124-9220 | info@mysite.com")]),t._v(" "),c("v-spacer"),t._v(" "),c("socials")],1)],1)],1),t._v(" "),c("v-toolbar",{attrs:{flat:"",height:"100px"}},[c("v-container",{staticClass:"d-flex align-center"},[c("div",{staticClass:"header-logo-wrap"},[c("logo",{staticClass:"header-logo"})],1),t._v(" "),c("v-spacer"),t._v(" "),c("div",{staticClass:"hidden-sm-and-down"},t._l(t.items,(function(e,i){var text=e.text,link=e.link;return c("NuxtLink",{key:i,staticClass:"menu-item mr-4",attrs:{to:link}},[t._v("\n            "+t._s(text)+"\n          ")])})),1),t._v(" "),c("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1)],1)],1)}),[],!1,null,"2f272cbc",null);e.default=component.exports;r()(component,{Logo:c(383).default,Socials:c(384).default}),r()(component,{VAppBarNavIcon:d.a,VContainer:v.a,VDivider:f.a,VIcon:h.a,VList:m.a,VListItem:x.a,VListItemContent:_.a,VListItemIcon:w.a,VListItemTitle:_.c,VNavigationDrawer:M.a,VRow:k.a,VSpacer:y.a,VToolbar:z.a})},383:function(t,e,c){"use strict";c.r(e);var n={name:"LogoComponent"},o=c(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("svg",{attrs:{viewBox:"0 0 370.3243243243243 77.36517518975232"}},[c("defs",{attrs:{id:"SvgjsDefs1105"}}),t._v(" "),c("g",{attrs:{id:"SvgjsG1106",featurekey:"symbolFeature-0",transform:"matrix(0.868061968095574,0,0,0.868061968095574,-5.565260566940863,-4.720510809902543)",fill:"#a57355"}},[c("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{d:"M14.2822266,64.0493164h3.1325684l0.126709,1.2246094c1.7270508,16.6967773,15.6879883,29.2880859,32.4746094,29.2880859   s30.7475586-12.5913086,32.4746094-29.2880859l0.126709-1.2246094h3.1003418c4.340332,0,7.8710938-3.5307617,7.8710938-7.8706055   v-4.9731445c0-4.3398438-3.5307617-7.8706055-7.8710938-7.8706055h-1.3543091l0.142395-1.8896484   c1.1337891-10.9609375-3.2910156-21.6748047-11.8359375-28.6601562c-4.0522461-3.3125-8.8901367-5.6196289-13.9912109-6.6723633   c-2.1704102-0.4477539-4.4067383-0.6748047-6.6474609-0.6748047h-4.0302734   c-17.1347656,0-31.4453125,13.3662109-32.5791016,30.4291992c-0.0917969,1.3789062-0.0957031,2.78125-0.0112305,4.1669922   c0.027832,0.46875,0.0668945,0.9389648,0.1132812,1.3842773l0.1461182,1.9165039h-1.3878174   c-4.340332,0-7.8710938,3.5307617-7.8710938,7.8706055v4.9731445C6.4111328,60.5185547,9.9418945,64.0493164,14.2822266,64.0493164   z M17.4174805,36C18.4819336,19.9838867,31.9155273,7.4379883,48.0009766,7.4379883H52.03125   c2.1049805,0,4.2055664,0.2133789,6.2431641,0.6337891c4.7861328,0.9873047,9.3266602,3.152832,13.1298828,6.262207   c8.0224609,6.5576172,12.1767578,16.6157227,11.1098633,26.9331055l-1.2080078,16.0253906   c-0.0415039,0.5507812,0.3710938,1.0307617,0.921875,1.0722656c0.5429688,0.0341797,1.0302734-0.3710938,1.0722656-0.921875   l0.9124146-12.1079102h1.5050659c3.2373047,0,5.8710938,2.6333008,5.8710938,5.8706055v4.9731445   c0,3.2373047-2.6337891,5.8706055-5.8710938,5.8706055h-4.0341797c-0.0646362,0-0.1209717,0.0250854-0.1821899,0.0368042   c-0.0360107,0.0078735-0.0723267,0.0099487-0.1068726,0.0216064c-0.4084473,0.1257324-0.7109375,0.4918823-0.7109375,0.9415894   c0,0.0310059,0.0148926,0.0571289,0.0176392,0.0874023l-0.1997681,1.9311523   c-1.6210938,15.6743164-14.7270508,27.4941406-30.4853516,27.4941406S21.1518555,80.7421875,19.5307617,65.0678711   l-0.7519531-7.2636719L17.515625,41.2392578c-0.0458984-0.4428711-0.0820312-0.8847656-0.1088867-1.3256836   C17.3276367,38.6113281,17.3310547,37.2944336,17.4174805,36z M8.4111328,51.2055664   c0-3.2373047,2.6337891-5.8706055,5.8710938-5.8706055h1.5403442l0.9645386,12.6484375l0.4207153,4.065918h-2.9255981   c-3.2373047,0-5.8710938-2.6333008-5.8710938-5.8706055V51.2055664z M68.9154663,50.0998535   c0,1.0067749-0.8161621,1.822937-1.822937,1.822937s-1.822937-0.8161621-1.822937-1.822937s0.8161621-1.822937,1.822937-1.822937   S68.9154663,49.0930786,68.9154663,50.0998535z M34.7626343,50.0998535c0,1.0067749-0.8161621,1.822937-1.822937,1.822937   s-1.822937-0.8161621-1.822937-1.822937s0.8161621-1.822937,1.822937-1.822937S34.7626343,49.0930786,34.7626343,50.0998535z    M47.5688477,63.9614258c0.4345703,0.4736328,1.027832,0.734375,1.6704102,0.734375h2.8208008c0.5522461,0,1,0.4477539,1,1   s-0.4477539,1-1,1h-2.8208008c-1.1918945,0-2.3378906-0.5039062-3.1435547-1.3818359   c-0.8061523-0.878418-1.2099609-2.0629883-1.1074219-3.2504883l1.1274414-13.1088867   c0.046875-0.5512695,0.534668-0.9711914,1.081543-0.9106445c0.550293,0.046875,0.9580078,0.5317383,0.9106445,1.081543   L46.9804688,62.234375C46.9257812,62.875,47.1347656,63.4882812,47.5688477,63.9614258z M60.1547852,72.5844727   c0.4467773,0.3251953,0.5458984,0.9501953,0.2211914,1.3969727c-2.5507812,3.5083008-6.6499023,5.6030273-10.965332,5.6030273   c-4.3149414,0-8.4140625-2.0947266-10.9648438-5.6030273c-0.3251953-0.4462891-0.2260742-1.0717773,0.2207031-1.3964844   c0.4453125-0.3261719,1.0727539-0.2270508,1.3964844,0.2207031c2.1762695,2.9921875,5.6704102,4.7788086,9.3476562,4.7788086   c3.6777344,0,7.171875-1.7866211,9.347168-4.7788086C59.0830078,72.3588867,59.7094727,72.2597656,60.1547852,72.5844727z    M55.3862305,37.3242188h21.0639648c0.9296875,0,1.8076172-0.4208984,2.4082031-1.1542969   c0.6337891-0.7739258,0.8828125-1.7875977,0.6831055-2.7807617l-0.0957031-0.4750977   c-0.6589355-3.276062-1.8889771-6.3190918-3.5429688-9.0477905c-0.0534058-0.1697998-0.1419067-0.3195801-0.2700195-0.4369507   c-4.4087524-6.980896-11.7172852-11.7421875-19.9614258-12.4205322c-0.8676758-0.0722656-1.7011719,0.21875-2.3491211,0.8164062   c-0.6728516,0.6196289-1.0585938,1.5092773-1.0585938,2.4414062v19.8256836   C52.2636719,35.8745117,53.6645508,37.3242188,55.3862305,37.3242188z M54.2636719,22.5527344h7.4296875   c1.7817383,0,3.2314453-1.5009766,3.2314453-3.3461914v-0.715332c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1v0.715332   c0,0.7421875-0.5522461,1.3461914-1.2314453,1.3461914h-7.4296875v-6.2861328c0-0.375,0.1508789-0.7285156,0.4135742-0.9707031   c0.2099609-0.1933594,0.4711914-0.2973633,0.7426758-0.2973633c0.0288086,0,0.0581055,0.0009766,0.0874023,0.003418   c0.9761353,0.0803223,1.9320679,0.2431641,2.8764648,0.4439087v3.5619507c0,0.5522461,0.4477539,1,1,1s1-0.4477539,1-1V13.965271   c5.0698242,1.5626831,9.5032349,4.8253174,12.6583862,9.1958618h-1.4064331c-0.5522461,0-1,0.4477539-1,1s0.4477539,1,1,1   h2.7192383c0.7255249,1.2300415,1.359314,2.5256348,1.8821411,3.8842773h-5.0584106   c-1.675293,0-3.0385742-1.4560547-3.0385742-3.2460938c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1   c0,2.8925781,2.2602539,5.2460938,5.0385742,5.2460938h5.737793c0.218689,0.741394,0.4136353,1.4938965,0.5683594,2.2631836   l0.0957031,0.4750977c0.0810547,0.402832-0.0170898,0.8110352-0.2695312,1.1191406   c-0.1289062,0.1572266-0.4121094,0.4213867-0.8608398,0.4213867h-8.0507812v-1.8632812c0-0.5522461-0.4477539-1-1-1   s-1,0.4477539-1,1v1.8632812H55.3862305c-0.6191406,0-1.1225586-0.5527344-1.1225586-1.2319336V22.5527344z M56.8813477,27.1987305   c0-0.5522461,0.4477539-1,1-1h1.2802734c1.9350586,0,3.5097656,1.6323242,3.5097656,3.6391602v3.0541992   c0,0.5522461-0.4477539,1-1,1s-1-0.4477539-1-1v-3.0541992c0-0.9038086-0.6772461-1.6391602-1.5097656-1.6391602h-1.2802734   C57.3291016,28.1987305,56.8813477,27.7509766,56.8813477,27.1987305z M24.7514648,37.3242188h21.0639648   c1.7216797,0,3.1225586-1.449707,3.1225586-3.2319336V14.2666016c0-0.9321289-0.3857422-1.8217773-1.0585938-2.4414062   c-0.6479492-0.5976562-1.4765625-0.8881836-2.3491211-0.8164062c-8.2436523,0.6783447-15.552063,5.4395142-19.9609375,12.420166   c-0.12854,0.1176147-0.2172852,0.2677002-0.2706909,0.4380493c-1.6538086,2.7285156-2.883728,5.7713013-3.5427856,9.0470581   l-0.0957031,0.4750977c-0.199707,0.9931641,0.0493164,2.0068359,0.6831055,2.7807617   C22.9438477,36.9033203,23.8217773,37.3242188,24.7514648,37.3242188z M23.6210938,33.7836914l0.0957031-0.4750977   c0.1547241-0.7692871,0.3496704-1.5217896,0.5684204-2.2631836h5.7382202c2.777832,0,5.0380859-2.3535156,5.0380859-5.2460938   c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1c0,1.7900391-1.362793,3.2460938-3.0380859,3.2460938h-5.0587158   c0.5228271-1.3586426,1.1566772-2.6542358,1.8822021-3.8842773h2.7189941c0.5522461,0,1-0.4477539,1-1s-0.4477539-1-1-1H28.15979   c3.1552124-4.3707275,7.5887451-7.633606,12.6585693-9.196106v3.0427856c0,0.5522461,0.4477539,1,1,1s1-0.4477539,1-1v-3.5621338   c0.9442749-0.2006836,1.9000244-0.3634033,2.8759766-0.4437256c0.0292969-0.0024414,0.0585938-0.003418,0.0874023-0.003418   c0.2714844,0,0.5327148,0.1040039,0.7426758,0.2973633c0.2626953,0.2421875,0.4135742,0.5957031,0.4135742,0.9707031v6.2861328   h-7.4296875c-0.6791992,0-1.2314453-0.6040039-1.2314453-1.3461914v-0.715332c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1   v0.715332c0,1.8452148,1.449707,3.3461914,3.2314453,3.3461914h7.4296875v11.5395508   c0,0.6791992-0.503418,1.2319336-1.1225586,1.2319336H34.8022461v-1.8632812c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1   v1.8632812h-8.0507812c-0.4487305,0-0.7319336-0.2641602-0.8608398-0.4213867   C23.6381836,34.5947266,23.5400391,34.1865234,23.6210938,33.7836914z M38.5302734,32.8920898v-3.0541992   c0-2.0068359,1.574707-3.6391602,3.5102539-3.6391602h1.2802734c0.5522461,0,1,0.4477539,1,1s-0.4477539,1-1,1h-1.2802734   c-0.8325195,0-1.5102539,0.7353516-1.5102539,1.6391602v3.0541992c0,0.5522461-0.4477539,1-1,1   S38.5302734,33.4443359,38.5302734,32.8920898z"}})])]),t._v(" "),c("g",{attrs:{id:"SvgjsG1107",featurekey:"nameFeature-0",transform:"matrix(1.5954192406144763,0,0,1.5954192406144763,95.9999998098112,-2.2305326674694754)",fill:"#5f5f5f"}},[c("path",{attrs:{d:"M10.92 21.16 c0 3.72 -2.04 6.96 -5.08 8.6 l5.08 10.24 l-1.32 0 l-4.84 -9.76 c-1.04 0.44 -2.2 0.68 -3.4 0.68 l-0.2 0 l0 9.08 l-1.16 0 l0 -28.6 l1.36 0 c5.28 0 9.56 4.36 9.56 9.76 z M1.16 12.559999999999999 l0 17.2 l0.2 0 c4.64 0 8.4 -3.88 8.4 -8.6 c0 -4.76 -3.76 -8.6 -8.4 -8.6 l-0.2 0 z M20.715 12.600000000000001 l-4.6 0 l0 7.88 l4.6 0 l0 1.2 l-4.6 0 l0 17.12 l4.6 0 l0 1.2 l-5.76 0 l0 -28.6 l5.76 0 l0 1.2 z M30.75 40.56 c-2.36 0 -4.6 -1.12 -6 -3.04 l0.92 -0.68 c1.2 1.6 3.08 2.56 5.08 2.56 c3.4 0 6.2 -2.8 6.2 -6.24 c0 -3.56 -2.72 -6.16 -5.36 -8.72 c-2.56 -2.4 -5.16 -4.92 -5.16 -8.24 c0 -2.96 2.44 -5.4 5.4 -5.4 c1.72 0 3.36 0.84 4.4 2.24 l-0.96 0.68 c-0.8 -1.08 -2.08 -1.76 -3.44 -1.76 c-2.32 0 -4.24 1.92 -4.24 4.24 c0 2.8 2.32 5.04 4.8 7.4 c2.8 2.72 5.72 5.52 5.72 9.56 c0 4.08 -3.32 7.4 -7.36 7.4 z M49.94499999999999 11.399999999999999 l0 1.16 l-4.08 0 l0 27.44 l-1.16 0 l0 -27.44 l-4.16 0 l0 -1.16 l9.4 0 z M59.739999999999995 12.600000000000001 l-4.6 0 l0 7.88 l4.6 0 l0 1.2 l-4.6 0 l0 17.12 l4.6 0 l0 1.2 l-5.76 0 l0 -28.6 l5.76 0 l0 1.2 z M64.935 11.399999999999999 c7.88 0 14.28 6.4 14.28 14.28 s-6.4 14.32 -14.28 14.32 l-1.16 0 l0 -28.6 l1.16 0 z M64.935 38.8 c7.24 0 13.12 -5.88 13.12 -13.12 s-5.88 -13.12 -13.12 -13.12 l0 26.24 z M110.405 11.399999999999999 l1.16 0 l0 28.6 l-1.16 0 l0 -26 l-7.12 14.32 l-1.32 0 l-7.12 -14.32 l0 26 l-1.16 0 l0 -28.6 l1.16 0 l7.76 15.6 z M116.75999999999999 11.399999999999999 l0 28.6 l-1.16 0 l0 -28.6 l1.16 0 z M133.915 11.399999999999999 l1.16 0 l0 28.6 l-1.16 0 l0 -5.16 c-0.2 -9.16 -4.88 -17.2 -11.96 -22.04 l0 27.2 l-1.16 0 l0 -28.6 l1.16 0 c5.72 3.64 10 9.28 11.96 15.96 l0 -15.96 z M140.26999999999998 11.399999999999999 c7.88 0 14.28 6.4 14.28 14.28 s-6.4 14.32 -14.28 14.32 l-1.16 0 l0 -28.6 l1.16 0 z M140.26999999999998 38.8 c7.24 0 13.12 -5.88 13.12 -13.12 s-5.88 -13.12 -13.12 -13.12 l0 26.24 z M164.58499999999998 40.56 c-2.36 0 -4.6 -1.12 -6 -3.04 l0.92 -0.68 c1.2 1.6 3.08 2.56 5.08 2.56 c3.4 0 6.2 -2.8 6.2 -6.24 c0 -3.56 -2.72 -6.16 -5.36 -8.72 c-2.56 -2.4 -5.16 -4.92 -5.16 -8.24 c0 -2.96 2.44 -5.4 5.4 -5.4 c1.72 0 3.36 0.84 4.4 2.24 l-0.96 0.68 c-0.8 -1.08 -2.08 -1.76 -3.44 -1.76 c-2.32 0 -4.24 1.92 -4.24 4.24 c0 2.8 2.32 5.04 4.8 7.4 c2.8 2.72 5.72 5.52 5.72 9.56 c0 4.08 -3.32 7.4 -7.36 7.4 z"}})])])}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,c){"use strict";c.r(e);var n={name:"SocialsSecion",data:function(){return{icons:[{text:"mdi-facebook",link:""},{text:"mdi-twitter",link:""},{text:"mdi-linkedin",link:""},{text:"mdi-instagram",link:""}]}}},o=(c(316),c(43)),l=c(55),r=c.n(l),d=c(272),v=c(189),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("span",t._l(t.icons,(function(e,i){return c("v-btn",{key:i,staticClass:"social-item",attrs:{href:e.link,target:"_blank",icon:""}},[c("v-icon",[t._v(t._s(e.text))])],1)})),1)}),[],!1,null,"3c619a86",null);e.default=component.exports;r()(component,{VBtn:d.a,VIcon:v.a})},385:function(t,e,c){"use strict";c.r(e);c(376);var n=c(43),o=c(55),l=c.n(o),r=c(403),d=c(398),v=c(404),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-footer",{attrs:{id:"app-footer",padless:""}},[c("v-container",[c("v-col",[c("div",{staticClass:"copyright text-center"},[t._v("\n        © "+t._s((new Date).getFullYear())+" - Rested Minds -\n        "),c("NuxtLink",{attrs:{to:"/privacy-policy"}},[t._v("Privacy police")])],1)])],1)],1)}),[],!1,null,"de4d49bc",null);e.default=component.exports;l()(component,{VCol:r.a,VContainer:d.a,VFooter:v.a})},84:function(t,e,c){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(c(306),c(43)),l=c(55),r=c.n(l),d=c(396),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-app",{attrs:{dark:""}},[404===t.error.statusCode?c("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):c("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),c("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;r()(component,{VApp:d.a})}},[[275,15,2,16]]]);