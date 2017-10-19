webpackJsonp([2],{AcIL:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("header",{staticStyle:{"background-image":"url('https://images.unsplash.com/photo-1486591978090-58e619d37fe7?dpr=1&auto=format&fit=crop&w=2850&q=60&cs=tinysrgb')","background-position":"center left","background-size":"cover"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"d-flex h-100"},[t("div",{staticClass:"display-3 text-light"},[t("HeaderTitle",[e._v("Conference Schedule")])],1)])])]),e._v(" "),t("section",{staticClass:"bg-light py-5"},[t("div",{staticClass:"container"},[t("div",{staticClass:"rundown-box"},[t("div",{staticClass:"row no-gutters text-center"},[t("div",{staticClass:"col-4"},[t("a",{class:{tab:!0,active:1===e.currentSchedule},on:{click:function(n){e.currentSchedule=1}}},[t("h2",[e._v("NOV 21")]),e._v(" "),t("div",{staticClass:"lead"},[e._v("Artificial intelligence")])])]),e._v(" "),t("div",{staticClass:"col-4"},[t("a",{class:{tab:!0,active:2===e.currentSchedule},on:{click:function(n){e.currentSchedule=2}}},[t("h2",[e._v("NOV 22")]),e._v(" "),t("div",{staticClass:"lead"},[e._v("BlockChain")])])]),e._v(" "),t("div",{staticClass:"col-4"},[t("a",{class:{tab:!0,active:3===e.currentSchedule},on:{click:function(n){e.currentSchedule=3}}},[t("h2",[e._v("NOV 23")]),e._v(" "),t("div",{staticClass:"lead"},[e._v("Open Source")])])])]),e._v(" "),1===e.currentSchedule?t("div",[t("RundownItem",{attrs:{schedules:e.firstDay}})],1):e._e(),e._v(" "),2===e.currentSchedule?t("div",[t("RundownItem",{attrs:{schedules:e.secondDay}})],1):e._e(),e._v(" "),3===e.currentSchedule?t("div",[t("RundownItem",{attrs:{schedules:e.thirdDay}})],1):e._e()])])])])},i=[],s={render:a,staticRenderFns:i};n.a=s},c6oE:function(e,n,t){"use strict";function a(e){t("cye4")}Object.defineProperty(n,"__esModule",{value:!0});var i=t("y80I"),s=t("AcIL"),c=t("VU/8"),o=a,r=c(i.a,s.a,!1,o,"data-v-4d095c11",null);n.default=r.exports},cye4:function(e,n,t){var a=t("mKaw");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("314c1a53",a,!0)},mKaw:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,".display-3[data-v-4d095c11]{padding:200px 0;text-shadow:1px 1px #666;text-transform:uppercase;font-weight:700}.rundown-box[data-v-4d095c11]{background:#fff;-webkit-box-shadow:rgba(0,0,0,.18) 0 1px 2px;box-shadow:0 1px 2px rgba(0,0,0,.18)}.tab[data-v-4d095c11]{padding:20px 0}a[data-v-4d095c11]{background:#fff;display:block;cursor:pointer;border-top:5px solid transparent}.active[data-v-4d095c11]{background:#5b90dc;color:#fff!important;border-top:5px solid #4682d8}","",{version:3,sources:["/Users/mul14/Code/devsummit-home/summit/src/containers/ScheduleConference.vue"],names:[],mappings:"AACA,4BACE,gBAAiB,AACjB,yBAA0B,AAC1B,yBAA0B,AAC1B,eAAkB,CACnB,AACD,8BACE,gBAAkB,AAClB,6CAAkD,AAC1C,oCAA0C,CACnD,AACD,sBACE,cAAgB,CACjB,AACD,mBACE,gBAAkB,AAClB,cAAe,AACf,eAAgB,AAChB,gCAAkC,CACnC,AACD,yBACE,mBAAoB,AACpB,qBAAwB,AACxB,4BAA8B,CAC/B",file:"ScheduleConference.vue",sourcesContent:["\n.display-3[data-v-4d095c11] {\n  padding: 200px 0;\n  text-shadow: 1px 1px #666;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.rundown-box[data-v-4d095c11] {\n  background: white;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.18) 0 1px 2px;\n          box-shadow: rgba(0, 0, 0, 0.18) 0 1px 2px;\n}\n.tab[data-v-4d095c11] {\n  padding: 20px 0;\n}\na[data-v-4d095c11] {\n  background: white;\n  display: block;\n  cursor: pointer;\n  border-top: 5px solid transparent;\n}\n.active[data-v-4d095c11] {\n  background: #5b90dc;\n  color: white !important;\n  border-top: 5px solid #4682d8;\n}\n"],sourceRoot:""}])},y80I:function(e,n,t){"use strict";n.a={name:"Schedule",components:{RundownItem:function(){return t.e(21).then(t.bind(null,"pP76"))}},data:function(){return{currentSchedule:1,firstDay:[{time:"8:00 - 11:00",name:"Registration Open"},{time:"11:30 - 12:00",name:"Opening"},{time:"12:00 - 13:00",name:"Keynote Speaker: Talking about Artificial intelligence",image:"/home/static/speakers/ariya.jpg",image_title:"Ariya Hidayat",image_description:"Someone"},{time:"14:00 - 15:00",name:"Panel discussion lima pelaku industri AI"},{time:"16:00 - 17:00",name:"Keynote speaker 2 tentang Machine Learning"},{time:"17:00",name:"Closing"}],secondDay:[{time:"8:00 - 11:00",name:"Registration Open"},{time:"11:30 - 12:00",name:"Opening"},{time:"12:00",name:"Keynote Speaker: Talking about Fintech"},{time:"14:00",name:"Panel discussion tentang regulasi dan industri fintech pada lima stakeholder"},{time:"16:00",name:"Keynote Speaker: Talking about BlockChain"},{time:"17:00",name:"Closing"}],thirdDay:[{time:"8:00",name:"Registration Open"},{time:"11:30",name:"Opening"},{time:"12:00",name:"Keynote speaker 1 tentang perjalanan Aryo Hidayat di Silicon Valley"},{time:"14:00",name:"Panel discussion untuk komunitas dan open source pada lima stakeholder"},{time:"16:00",name:"Keynote speaker 2 tentang open source mengundang Alexander Makarov"},{time:"17:00",name:"Closing"}]}}}}});
//# sourceMappingURL=2.4efdfe3d402d498fcbab.js.map