(function(e){function t(t){for(var n,l,s=t[0],o=t[1],c=t[2],d=0,p=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"162c":function(e,t,a){"use strict";a("51d7"),a("5cff"),a("6a22"),a("02dd"),a("80cf"),a("270d"),a("dcd4");var n=a("a397"),r=a("e5de");e.exports=function(e){var t=[],a=r(e),i=function e(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i="style"===a.tag,l="script"===a.tag,s=(a.tag,"img"===a.tag);if(!i&&!l){var o=a.attrs||{},c=o.title,u=!!c;if(u&&e(c,"".concat(r,".attrs.title")),s){var d=a.attrs||{},p=d.alt,f=!!p;if(f)return void e(p,"".concat(r,".attrs.alt"))}var v=a.attrs||{},h=v.placeholder,m=!!h;if(m)e(h,"".concat(r,".attrs.placeholder"));else{var g=!!a.content;if(g)a.content.forEach((function(t,a){e(t,"".concat(r,".content[").concat(a,"]"))}));else{var b="string"===typeof a;if(b){var x=a.replace(/\s+/g," ").trim(),k=!x;if(!k){var w=!!x.match(/<!DOCTYPE/),y=!!x.match(/<!--/);if(!w&&!y){var _=n(x).isValid(),I="|"===x;_||I||t.push({paths:r,text:x})}}}}}}};return a.forEach((function(e,t){return i(e,"[".concat(t,"]"))})),{tree:a,texts:t}}},cd49:function(e,t,a){"use strict";a.r(t);a("9a0f"),a("3375"),a("c3fe"),a("2a28");var n=a("a593"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-avatar",{attrs:{color:e.$vuetify.breakpoint.smAndDown?"grey darken-1":"transparent",size:"32"}}),a("v-tabs",{staticClass:"ml-n9",attrs:{centered:"",color:"grey darken-1"}},e._l(e.links,(function(t){return a("v-tab",{key:t.label,attrs:{to:t.link}},[e._v(" "+e._s(t.label)+" ")])})),1),a("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{color:"grey darken-1 shrink",size:"32"}})],1),a("v-main",{staticClass:"grey lighten-3"},[a("router-view")],1)],1)},i=[],l=n["a"].extend({name:"App",components:{},data:function(){return{links:[{label:"主页",link:"/"},{label:"图片处理",link:"/image"},{label:"产品上传",link:"/productUpload"},{label:"数据库翻译",link:"/sqliteTranslation"},{label:"网页翻译",link:"/htmlTranslation"}]}}}),s=l,o=a("5d22"),c=a("7033"),u=a.n(c),d=a("373e"),p=a("1ef8"),f=a("dc26"),v=a("b790"),h=a("5ac8"),m=a("d2e4"),g=Object(o["a"])(s,r,i,!1,null,null,null),b=g.exports;u()(g,{VApp:d["a"],VAppBar:p["a"],VAvatar:f["a"],VMain:v["a"],VTab:h["a"],VTabs:m["a"]});var x=a("a81e"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("main-view")],1)},w=[],y=a("0e4d"),_=a("76ff"),I=a("3a68"),V=a("fd63"),O=a("3c3a"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[e._t("l")],2)],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-sheet",{staticClass:"pa-8 sheet-main",attrs:{"min-height":"80vh",rounded:"lg"}},[e._t("c")],2)],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[e._t("r")],2)],1)],1)],1)},j=[],U=function(e){Object(_["a"])(a,e);var t=Object(I["a"])(a);function a(){return Object(y["a"])(this,a),t.apply(this,arguments)}return a}(O["b"]);U=Object(V["a"])([Object(O["a"])({})],U);var S=U,R=S,P=a("e35b"),$=a("e71b"),T=a("e5d6"),A=a("3aed"),q=Object(o["a"])(R,C,j,!1,null,null,null),z=q.exports;u()(q,{VCol:P["a"],VContainer:$["a"],VRow:T["a"],VSheet:A["a"]});var E=function(e){Object(_["a"])(a,e);var t=Object(I["a"])(a);function a(){return Object(y["a"])(this,a),t.apply(this,arguments)}return a}(O["b"]);E=Object(V["a"])([Object(O["a"])({components:{MainView:z}})],E);var F=E,D=F,N=Object(o["a"])(D,k,w,!1,null,null,null),M=N.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"imageProcess"}},[a("MainView",{scopedSlots:e._u([{key:"l",fn:function(){return[a("div",{staticClass:"pa-5"})]},proxy:!0},{key:"c",fn:function(){return[a("v-row",{attrs:{align:"center"}},[a("v-file-input",{attrs:{accept:"image/*","prepend-icon":"mdi-image",counter:"","show-size":"","small-chips":"",multiple:"",label:"选择上传图片"},on:{change:e.fileChange,"click:clear":function(t){e.imagesInfo.list=[]}}}),e.downloadUrl.length||e.Processing?e._e():a("v-btn",{staticClass:"ml-10",on:{click:e.upload}},[e._v("确认上传")])],1),e.downloadUrl.length?a("v-row",{staticClass:"mt-10"},[a("v-spacer"),a("v-subheader",[e._v("图片处理完成，点击右边按钮下载压缩包")]),a("v-btn",{attrs:{href:e.downloadUrl}},[e._v("下载")])],1):e._e(),a("v-row",{staticClass:"mt-10"},e._l(e.currentImages,(function(t){return a("v-col",{key:t.name,attrs:{cols:"3"}},[a("v-card",{staticStyle:{height:"100%"}},[a("v-img",{attrs:{src:t.url,contain:"",height:"200"}}),a("v-divider"),a("v-card-title",[e._v(e._s(t.name))]),a("v-card-subtitle",[e._v(e._s(e._f("fileSize")(t.size)))])],1)],1)})),1),e.imagesInfo.totalPage?a("v-pagination",{staticClass:"my-5",attrs:{length:e.imagesInfo.totalPage,"total-visible":7},model:{value:e.imagesInfo.page,callback:function(t){e.$set(e.imagesInfo,"page",t)},expression:"imagesInfo.page"}}):e._e()]},proxy:!0},{key:"r",fn:function(){return[a("v-card",[a("v-card-title",[a("v-icon",{staticClass:"pr-4"},[e._v("mdi-scissors-cutting")]),a("span",{staticClass:"text-subtitle-1"},[e._v("尺寸修改")]),a("v-spacer"),a("v-checkbox",{model:{value:e.sharpInfo.isSize,callback:function(t){e.$set(e.sharpInfo,"isSize",t)},expression:"sharpInfo.isSize"}})],1),a("v-card-text",[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"宽度(px)",clearable:""},model:{value:e.sharpInfo.width,callback:function(t){e.$set(e.sharpInfo,"width",e._n(t))},expression:"sharpInfo.width"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"高度(px)",clearable:""},model:{value:e.sharpInfo.height,callback:function(t){e.$set(e.sharpInfo,"height",e._n(t))},expression:"sharpInfo.height"}})],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"X轴边距(px)",clearable:""},model:{value:e.sharpInfo.XPadding,callback:function(t){e.$set(e.sharpInfo,"XPadding",e._n(t))},expression:"sharpInfo.XPadding"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"Y轴边距(px)",clearable:""},model:{value:e.sharpInfo.YPadding,callback:function(t){e.$set(e.sharpInfo,"YPadding",e._n(t))},expression:"sharpInfo.YPadding"}})],1)],1),a("v-row",[a("v-checkbox",{on:{click:function(t){!e.sharpInfo.isSameRate&&(e.sharpInfo.sameRateSize="")}},model:{value:e.sharpInfo.isSameRate,callback:function(t){e.$set(e.sharpInfo,"isSameRate",t)},expression:"sharpInfo.isSameRate"}}),a("v-text-field",{attrs:{label:"保持长宽比(如 1000: 500)"},model:{value:e.sharpInfo.sameRateSize,callback:function(t){e.$set(e.sharpInfo,"sameRateSize",t)},expression:"sharpInfo.sameRateSize"}})],1)],1),a("v-divider"),a("v-card-title",[a("v-icon",{staticClass:"pr-4"},[e._v("mdi-image")]),a("span",{staticClass:"text-subtitle-1"},[e._v("图片压缩")]),a("v-spacer"),a("v-checkbox",{model:{value:e.sharpInfo.isCompress,callback:function(t){e.$set(e.sharpInfo,"isCompress",t)},expression:"sharpInfo.isCompress"}})],1)],1)]},proxy:!0}])}),a("v-snackbar",{attrs:{centered:""},model:{value:e.Uploading,callback:function(t){e.Uploading=t},expression:"Uploading"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"green"}}),e._v(" 正在上传中 ")],1),a("v-snackbar",{attrs:{centered:""},model:{value:e.Processing,callback:function(t){e.Processing=t},expression:"Processing"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"green"}}),e._v(" 正在处理中 ")],1)],1)},L=[],Y=(a("77f1"),a("5cff"),a("957b"),a("eb27"),a("1e6a"),a("65ba"),a("3ced"),a("6a22"),a("5f89"),a("dcd4"),a("6a61"),a("2e91")),X=a("94ef"),H=function(e){Object(_["a"])(a,e);var t=Object(I["a"])(a);function a(){var e;return Object(y["a"])(this,a),e=t.apply(this,arguments),e.data=null,e.imagesInfo={list:[],get totalPage(){return Math.ceil(this.list.length/this.limit)},page:1,limit:12},e.sharpInfo={isSize:!0,isCompress:!0,width:1e3,height:1e3,XPadding:100,YPadding:100,isSameRate:!1,get sameRate(){var e=this.sameRateSize.split(":"),t=(Number(e[0])/Number(e[1])).toFixed(5);return t},sameRateSize:""},e.imageProcess={sharpInfo:e.sharpInfo,files:[]},e.Uploading=!1,e.Processing=!1,e.downloadUrl="",e}return Object(X["a"])(a,[{key:"fileChange",value:function(e){this.downloadUrl="";var t=new FormData;e.forEach((function(e){t.append("files",e)})),this.showImage(e),this.data=t}},{key:"showImage",value:function(e){var t=this;this.imagesInfo.list=[],e.map((function(e){var a=new FileReader;a.onload=function(a){var n;t.imagesInfo.list.push({name:e.name,size:e.size,url:null===(n=a.target)||void 0===n?void 0:n.result})},a.readAsDataURL(e)}))}},{key:"upload",value:function(){var e=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.Uploading=!0,e.next=3,this.$http.post("upload/image",this.data,{headers:{"Content-Type":"multipart/form-data"}});case 3:t=e.sent,a=t.data,this.Uploading=!1,this.imageProcess.files=a,this.process();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"process",value:function(){var e=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.Processing=!0,e.next=3,this.$http.post("image/process",this.imageProcess);case 3:t=e.sent,a=t.data,this.Processing=!1,this.downloadUrl=a.download,n=a.filesInfo,this.imagesInfo.list=this.imagesInfo.list.map((function(e){var t=n.find((function(t){return e.name===t.name}));return{name:e.name,size:t.size,url:t.url}}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"currentImages",get:function(){var e=(this.imagesInfo.page-1)*this.imagesInfo.limit,t=e+this.imagesInfo.limit;return this.imagesInfo.list.slice(e,t)}}]),a}(O["b"]);H=Object(V["a"])([Object(O["a"])({components:{MainView:z},filters:{fileSize:function(e){return e<1024?e+"B":e<1048576?(e/1024).toFixed(2)+"kB":e<1073741824?(e/1024/1024).toFixed(2)+"MB":void 0}}})],H);var J=H,G=J,W=a("23e3"),K=a("8649"),Q=a("52e1"),Z=a("28b5"),ee=a("8723"),te=a("7ae2"),ae=a("1c29"),ne=a("aa51"),re=a("dd03"),ie=a("74bf"),le=a("d704"),se=a("0959"),oe=a("bd22"),ce=a("f55f"),ue=Object(o["a"])(G,B,L,!1,null,null,null),de=ue.exports;u()(ue,{VBtn:W["a"],VCard:K["a"],VCardSubtitle:Q["a"],VCardText:Q["b"],VCardTitle:Q["c"],VCheckbox:Z["a"],VCol:P["a"],VDivider:ee["a"],VFileInput:te["a"],VIcon:ae["a"],VImg:ne["a"],VPagination:re["a"],VProgressCircular:ie["a"],VRow:T["a"],VSnackbar:le["a"],VSpacer:se["a"],VSubheader:oe["a"],VTextField:ce["a"]});var pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"HtmlTranslation"}},[a("v-snackbar",{attrs:{centered:""},model:{value:e.translating,callback:function(t){e.translating=t},expression:"translating"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"green"}}),e._v(" 正在翻译中 ")],1),a("main-view",{scopedSlots:e._u([{key:"l",fn:function(){},proxy:!0},{key:"c",fn:function(){return[a("v-row",{attrs:{align:"center"}},[a("v-file-input",{attrs:{accept:".html","prepend-icon":"mdi-language-html5",counter:"","show-size":"","small-chips":"",multiple:"",label:"选择需要翻译的网页"},on:{change:e.fileChange},nativeOn:{drop:function(t){return e.drop(t)}}}),e.translating||e.translated?e._e():a("v-btn",{staticClass:"ml-10",on:{click:e.upload}},[e._v("确认上传")]),e.translated?a("v-btn",{staticClass:"ml-10",on:{click:e.download}},[e._v("确认并下载")]):e._e()],1),e.translated?a("v-subheader",{staticClass:"pa-0"},[e._v(" 请确认下方翻译后的文本，确认后点击右方下载按钮。如需要修改请自行修改翻译后的文本。 ")]):e._e(),e.htmlArr.length&&e.htmlArr[0].words?a("v-card",{staticClass:"mt-10"},[a("v-card-title",[a("v-tabs",{attrs:{"center-active":""},model:{value:e.html,callback:function(t){e.html=t},expression:"html"}},e._l(e.htmlArr,(function(t){return a("v-tab",{key:t.name,staticStyle:{"text-transform":"none"}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("v-divider"),a("v-card-text",[a("v-tabs-items",{staticStyle:{"overflow-y":"auto",height:"50vh"},model:{value:e.html,callback:function(t){e.html=t},expression:"html"}},e._l(e.htmlArr,(function(t){return a("v-tab-item",{key:t.name},e._l(t.words,(function(t,n){return a("v-row",{key:n},[a("v-col",{attrs:{cols:"6"}},[a("v-textarea",{attrs:{"auto-grow":"",label:"原文本",readonly:""},model:{value:t.origin,callback:function(a){e.$set(t,"origin",a)},expression:"word.origin"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-textarea",{attrs:{"auto-grow":"",label:"翻译后"},model:{value:t.local,callback:function(a){e.$set(t,"local",a)},expression:"word.local"}})],1)],1)})),1)})),1)],1)],1):e._e()]},proxy:!0},{key:"r",fn:function(){return[a("v-sheet",{staticClass:"pa-10"},[a("v-subheader",[a("v-icon",[e._v("mdi-ab-testing")]),e._v("选择翻译语言")],1),a("v-radio-group",{staticClass:"px-5",model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}},[a("v-radio",{attrs:{value:1,label:"中文 翻译为 英文"}}),a("v-radio",{attrs:{value:2,label:"英文 翻译为 中文"}})],1)],1)]},proxy:!0}])})],1)},fe=[],ve=(a("4d20"),a("2181"),a("659e"),a("e5ed"),a("a14a")),he=a("abd5"),me=a("162c"),ge=function(e,t){var a=me(e),n=a.texts,r=a.tree;n.forEach((function(e,a){ve.set(r,e.paths,t[a].local)}));var i=he(r);return i},be=ge,xe=a("a1d6"),ke=a.n(xe),we=function(e){Object(_["a"])(a,e);var t=Object(I["a"])(a);function a(){var e;return Object(y["a"])(this,a),e=t.apply(this,arguments),e.data=null,e.htmlArr=[],e.html=null,e.translatedHtmlArr=[],e.translating=!1,e.translated=!1,e.lang=1,e}return Object(X["a"])(a,[{key:"fileChange",value:function(e){var t=this;this.translated=!1,this.htmlArr=[],e.forEach((function(e){var a=new FileReader;a.onload=function(a){var n;t.htmlArr.push({name:e.name,html:null===(n=a.target)||void 0===n?void 0:n.result})},a.readAsText(e)}))}},{key:"drop",value:function(e){return e.preventDefault(),e.stopPropagation(),console.log(e),!1}},{key:"dragover",value:function(e){return e.preventDefault(),e.stopPropagation(),!1}},{key:"funcDownload",value:function(e,t){var a=document.createElement("a");a.download=t,a.style.display="none";var n=new Blob([e],{type:"application/zip"});a.href=URL.createObjectURL(n),document.body.appendChild(a),a.click(),document.body.removeChild(a)}},{key:"download",value:function(){var e=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new ke.a,a=t.folder("html"),this.htmlRender(),this.translatedHtmlArr.forEach((function(e){null===a||void 0===a||a.file(e.name,e.html)})),e.next=6,t.generateAsync({type:"blob"});case 6:n=e.sent,this.funcDownload(n,"html.zip");case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"htmlRender",value:function(){this.translatedHtmlArr=this.htmlArr.map((function(e){return{name:e.name,html:be(e.html,e.words),words:e.words}}))}},{key:"upload",value:function(){var e=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.translating=!0,t={htmlArr:this.htmlArr,lang:this.lang},e.next=4,this.$http.post("/translation/html",t);case 4:a=e.sent,n=a.data,this.translating=!1,this.translated=!0,this.htmlArr=n.map((function(e){return{name:e.name,html:e.html,words:JSON.parse(e.json)}}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(O["b"]);we=Object(V["a"])([Object(O["a"])({components:{MainView:z}})],we);var ye=we,_e=ye,Ie=a("4425"),Ve=a("0e03"),Oe=a("ce5c"),Ce=a("52e3"),je=a("e740"),Ue=Object(o["a"])(_e,pe,fe,!1,null,null,null),Se=Ue.exports;u()(Ue,{VBtn:W["a"],VCard:K["a"],VCardText:Q["b"],VCardTitle:Q["c"],VCol:P["a"],VDivider:ee["a"],VFileInput:te["a"],VIcon:ae["a"],VProgressCircular:ie["a"],VRadio:Ie["a"],VRadioGroup:Ve["a"],VRow:T["a"],VSheet:A["a"],VSnackbar:le["a"],VSubheader:oe["a"],VTab:h["a"],VTabItem:Oe["a"],VTabs:m["a"],VTabsItems:Ce["a"],VTextarea:je["a"]});var Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"ProductUpload"}},[a("v-snackbar",{attrs:{centered:"",timeout:-1},model:{value:e.isUploading,callback:function(t){e.isUploading=t},expression:"isUploading"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"green"}}),e._v(" 正在上传中 ")],1),a("main-view",{scopedSlots:e._u([{key:"l",fn:function(){return[a("v-sheet",{staticClass:"pa-5"},[a("p",[e._v("* 压缩包内有 product 文件夹 和 数据库文件")]),a("p",[e._v("* product内文件夹根据分类分类,如下示意")]),a("v-divider"),a("v-treeview",{attrs:{items:e.items,activatable:"","item-key":"name","open-on-click":""},scopedSlots:e._u([{key:"prepend",fn:function(t){var n=t.item,r=t.open;return[n.file?a("v-icon",[e._v(" "+e._s(e.files[n.file])+" ")]):a("v-icon",[e._v(" "+e._s(r?"mdi-folder-open":"mdi-folder")+" ")])]}}]),model:{value:e.tree,callback:function(t){e.tree=t},expression:"tree"}})],1)]},proxy:!0},{key:"c",fn:function(){return[a("v-row",{attrs:{align:"center"}},[a("v-file-input",{attrs:{accept:".zip","prepend-icon":"mdi-language-html5",counter:"","show-size":"","small-chips":"",label:"选择产品压缩包.zip上传"},on:{change:e.fileChange}}),e.isUploading||e.hadUploaded?e._e():a("v-btn",{staticClass:"ml-10",on:{click:e.upload}},[e._v("确认上传")]),e.hadUploaded?a("v-btn",{staticClass:"ml-10",attrs:{href:e.downloadUrl}},[e._v("下载")]):e._e()],1)]},proxy:!0},{key:"r",fn:function(){return[a("v-sheet",{staticClass:"pa-5"},[a("v-text-field",{attrs:{label:"站点文件夹名"},model:{value:e.sqliteInfo.sitename,callback:function(t){e.$set(e.sqliteInfo,"sitename",t)},expression:"sqliteInfo.sitename"}}),a("v-card-title",[a("span",{staticClass:"text-subtitle-1"},[e._v("产品名是否为图片名")]),a("v-spacer"),a("v-checkbox",{model:{value:e.sqliteInfo.isFileName,callback:function(t){e.$set(e.sqliteInfo,"isFileName",t)},expression:"sqliteInfo.isFileName"}})],1)],1)]},proxy:!0}])})],1)},Pe=[],$e=function(e){Object(_["a"])(a,e);var t=Object(I["a"])(a);function a(){var e;return Object(y["a"])(this,a),e=t.apply(this,arguments),e.data=null,e.sqliteInfo={sitename:"fushi",pcode:2,acode:"cn",isFileName:!0},e.files={md:"mdi-language-markdown",png:"mdi-file-image",txt:"mdi-file-document-outline"},e.items=[{name:"product",children:[{name:"冰箱",children:[{name:"logo.png",file:"png"}]},{name:"洗衣机",children:[{name:"logo.png",file:"png"}]},{name:"空调",children:[{name:"logo.png",file:"png"}]}]},{name:"878490a6ab380cf5bb4e7c97387e6850.db",file:"txt"}],e.hadUploaded=!1,e.isUploading=!1,e.downloadUrl="",e}return Object(X["a"])(a,[{key:"fileChange",value:function(e){var t;(this.data=new FormData,this.hadUploaded=!1,e)&&(null===(t=this.data)||void 0===t||t.append("file",e))}},{key:"upload",value:function(){var e=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,a,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isUploading=!0,e.next=3,this.$http.post("upload/product",this.data,{headers:{"Content-Type":"multipart/form-data"}});case 3:return t=e.sent,a=t.data,e.next=7,this.$http.post("product",{sqliteInfo:this.sqliteInfo,file:a[0]});case 7:this.downloadUrl=e.sent.data,this.$nextTick().then((function(e){n.hadUploaded=!0,n.isUploading=!1}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(O["b"]);$e=Object(V["a"])([Object(O["a"])({components:{MainView:z}})],$e);var Te=$e,Ae=Te,qe=a("e60c"),ze=Object(o["a"])(Ae,Re,Pe,!1,null,null,null),Ee=ze.exports;u()(ze,{VBtn:W["a"],VCardTitle:Q["c"],VCheckbox:Z["a"],VDivider:ee["a"],VFileInput:te["a"],VIcon:ae["a"],VProgressCircular:ie["a"],VRow:T["a"],VSheet:A["a"],VSnackbar:le["a"],VSpacer:se["a"],VTextField:ce["a"],VTreeview:qe["a"]});var Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"SqliteTranslation"}},[n("v-snackbar",{attrs:{timeout:-1,centered:""},model:{value:e.isUploading,callback:function(t){e.isUploading=t},expression:"isUploading"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"green"}}),e._v(" 正在上传翻译中,还剩"+e._s(e.translatingNumber)+"个翻译中 ")],1),n("main-view",{scopedSlots:e._u([{key:"l",fn:function(){return[n("v-sheet",{staticClass:"pa-5"},[n("p",[e._v("* 选择数据库文件上传")]),n("p",[e._v("* 内容越多翻译时间越久")]),n("p",[e._v("* 目前只能对单一语言数据库翻译（例如只有en或cn）")])])]},proxy:!0},{key:"c",fn:function(){return[n("v-row",{attrs:{align:"center"}},[n("v-file-input",{attrs:{accept:".db","prepend-icon":"mdi-file",counter:"","show-size":"","small-chips":"",label:"选择数据库文件上传"},on:{change:e.fileChange}}),e.isUploading||e.hadUploaded?e._e():n("v-btn",{staticClass:"ml-10",on:{click:e.upload}},[e._v("确认上传")]),e.hadUploaded?n("v-btn",{staticClass:"ml-10",attrs:{href:e.downloadUrl}},[e._v("下载")]):e._e(),n("v-img",{staticClass:"mt-10",attrs:{src:a("eb60")}})],1)]},proxy:!0},{key:"r",fn:function(){return[n("v-sheet",{staticClass:"pa-5"},[n("v-text-field",{attrs:{label:"当前语言代码"},model:{value:e.sqliteInfo.lang,callback:function(t){e.$set(e.sqliteInfo,"lang",t)},expression:"sqliteInfo.lang"}}),n("v-text-field",{attrs:{label:"翻译后语言代码"},model:{value:e.sqliteInfo.translateAcode,callback:function(t){e.$set(e.sqliteInfo,"translateAcode",t)},expression:"sqliteInfo.translateAcode"}}),n("v-text-field",{attrs:{label:"当前区域编码"},model:{value:e.sqliteInfo.acode,callback:function(t){e.$set(e.sqliteInfo,"acode",t)},expression:"sqliteInfo.acode"}}),n("v-text-field",{attrs:{label:"翻译后区域编码"},model:{value:e.sqliteInfo.translateLang,callback:function(t){e.$set(e.sqliteInfo,"translateLang",t)},expression:"sqliteInfo.translateLang"}})],1)]},proxy:!0}])})],1)},De=[],Ne=function(e){Object(_["a"])(a,e);var t=Object(I["a"])(a);function a(){var e;return Object(y["a"])(this,a),e=t.apply(this,arguments),e.data=null,e.sqliteInfo={acode:"cn",lang:"zh",translateAcode:"en",translateLang:"en"},e.hadUploaded=!1,e.isUploading=!1,e.downloadUrl="",e.translatingNumber="",e}return Object(X["a"])(a,[{key:"fileChange",value:function(e){var t;(this.data=new FormData,this.hadUploaded=!1,e)&&(null===(t=this.data)||void 0===t||t.append("file",e))}},{key:"upload",value:function(){var e=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,i,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isUploading=!0,e.next=3,this.$http.post("upload/sqlite",this.data,{headers:{"Content-Type":"multipart/form-data"}});case 3:return t=e.sent,a=t.data,e.next=7,this.$http.post("product/translate",{sqliteInfo:this.sqliteInfo,file:a[0]});case 7:n=e.sent,r=n.data,i=new WebSocket(r),i.onmessage=function(e){e.data.length<5?l.translatingNumber=e.data:(l.downloadUrl=e.data,l.hadUploaded=!0,l.isUploading=!1)},i.onerror=function(){console.log("err")},i.onclose=function(){console.log("close")};case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(O["b"]);Ne=Object(V["a"])([Object(O["a"])({components:{MainView:z}})],Ne);var Me=Ne,Be=Me,Le=Object(o["a"])(Be,Fe,De,!1,null,null,null),Ye=Le.exports;u()(Le,{VBtn:W["a"],VFileInput:te["a"],VImg:ne["a"],VProgressCircular:ie["a"],VRow:T["a"],VSheet:A["a"],VSnackbar:le["a"],VTextField:ce["a"]}),n["a"].use(x["a"]);var Xe=[{path:"/",component:M},{path:"/image",component:de},{path:"/htmlTranslation",component:Se},{path:"/productUpload",component:Ee},{path:"/sqliteTranslation",component:Ye}],He=new x["a"]({routes:Xe}),Je=He,Ge=a("ba35");n["a"].use(Ge["a"]);var We=new Ge["a"]({}),Ke=a("73ef"),Qe=a.n(Ke);console.log(Object({NODE_ENV:"production",BASE_URL:"/"})),n["a"].prototype.$http=Qe.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_URL,timeout:6e4}),n["a"].config.productionTip=!1,new n["a"]({router:Je,vuetify:We,render:function(e){return e(b)}}).$mount("#app")},eb60:function(e,t,a){e.exports=a.p+"img/lang.9e0253b7.png"}});
//# sourceMappingURL=app.eb77950e.js.map