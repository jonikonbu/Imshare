(function(t){function e(e){for(var o,n,l=e[0],r=e[1],c=e[2],m=0,u=[];m<l.length;m++)n=l[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"024c":function(t,e,a){"use strict";var o=a("bcbb"),i=a.n(o);i.a},"0405":function(t,e,a){},"041f":function(t,e,a){},"180a":function(t,e,a){"use strict";var o=a("041f"),i=a.n(o);i.a},"1a12":function(t,e,a){},3295:function(t,e,a){},"3d61":function(t,e,a){},"4f71":function(t,e,a){},"53a2":function(t,e,a){"use strict";var o=a("0405"),i=a.n(o);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("div",{attrs:{id:"app"}},[a("Navbar")],1)])],1)},s=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app-bar",{attrs:{flat:"","Inverted-Scroll":""}},[o("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!0}}}),o("v-container",{staticClass:"mx-auto py-0"},[o("v-row",{attrs:{align:"center"}},[o("v-img",{staticClass:"mr-5",attrs:{src:a("b640"),contain:"",height:"48",width:"48","max-width":"48"}}),o("v-btn",{staticClass:"hidden-sm-and-down",staticStyle:{"margin-left":"20px"},attrs:{depressed:""}},[o("router-link",{staticStyle:{"text-decoration":"none",color:"#000080","font-weight":"bold"},attrs:{to:"/"}},[t._v(" ホーム ")])],1),o("v-btn",{staticClass:"hidden-sm-and-down",staticStyle:{"margin-left":"20px"},attrs:{depressed:""}},[o("router-link",{staticStyle:{"text-decoration":"none",color:"#000080","font-weight":"bold"},attrs:{to:"/post"}},[t._v(" 投稿 ")])],1),o("v-btn",{staticClass:"hidden-sm-and-down",staticStyle:{"margin-left":"20px"},attrs:{depressed:""}},[o("router-link",{staticStyle:{"text-decoration":"none",color:"#000080","font-weight":"bold"},attrs:{to:"/mypage"}},[t._v(" マイページ ")])],1),o("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"hidden-sm-and-down",staticStyle:{"margin-left":"20px",color:"#000080","font-weight":"bold"},attrs:{depressed:""}},"v-btn",i,!1),a),[t._v(" ユーザー ")])]}}])},[o("v-list",[o("v-list-item",[o("v-btn",{staticClass:"login",attrs:{color:"#1E90FF",depressed:""},on:{click:function(e){t.loginModal=!0}}},[o("span",{staticStyle:{color:"#fff"}},[t._v(" ログイン ")])])],1),t.login?o("v-list-item",[o("v-list-item-title",[o("v-btn",{attrs:{color:"#1E90FF",depressed:""},on:{click:t.userLogOut}},[o("span",{staticStyle:{color:"#fff"}},[t._v("ログアウト")])])],1)],1):o("v-list-item",[o("v-list-item-title",[o("v-btn",{staticClass:"signin",attrs:{depressed:"",color:"#1E90FF"},on:{click:function(e){t.signinModal=!0}}},[o("span",{staticStyle:{color:"#fff"}},[t._v("新規登録")])])],1)],1)],1)],1),o("v-spacer"),t.login?o("div",{staticClass:"navbarr-text"},[o("p",{staticClass:"navbar-text-item"},[t._v("ようこそ "+t._s(this.$store.state.user.name)+" 様")])]):o("div",{staticClass:"navbar-text"},[o("p",{staticClass:"navbar-text-item-else"},[t._v("ユーザーボタンからログイン又は新規登録できます。 ")])])],1)],1)],1),o("router-view",{staticClass:"view"}),o("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",[o("v-list-item",[o("v-list-item-icon",[o("v-icon",{attrs:{color:"#000080"}},[t._v("mdi-home")])],1),o("v-list-item-title",[o("router-link",{staticStyle:{"text-decoration":"none",color:"#000080"},attrs:{to:"/"}},[t._v(" ホーム ")])],1)],1),o("v-list-item",[o("v-list-item-icon",[o("v-icon",{attrs:{color:"#000080"}},[t._v("mdi-image")])],1),o("v-list-item-title",[o("router-link",{staticStyle:{"text-decoration":"none",color:"#000080"},attrs:{to:"/post"}},[t._v(" 投稿 ")])],1)],1),o("v-list-item",[o("v-list-item-icon",[o("v-icon",{attrs:{color:"#000080"}},[t._v("mdi-account")])],1),o("v-list-item-title",[o("router-link",{staticStyle:{"text-decoration":"none",color:"#000080"},attrs:{to:"/mypage"}},[t._v(" マイページ ")])],1)],1),o("v-list-group",{attrs:{"no-action":"","sub-group":"",value:"true"},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",{staticStyle:{color:"#000080"}},[t._v("ユーザー")])],1)]},proxy:!0}])},[o("v-list-item",[o("v-list-item-title",[o("v-btn",{staticClass:"login",attrs:{depressed:"",color:"#1E90FF"},on:{click:function(e){t.loginModal=!0}}},[o("span",{staticStyle:{color:"#fff"}},[t._v("ログイン")])])],1)],1),t.login?o("v-list-item",[o("v-list-item-title",[o("v-btn",{attrs:{color:"#1E90FF",depressed:""},on:{click:t.userLogOut}},[o("span",{staticStyle:{color:"#fff"}},[t._v("ログアウト")])])],1)],1):o("v-list-item",[o("v-list-item-title",[o("v-btn",{staticClass:"signin",attrs:{depressed:"",color:"#1E90FF"},on:{click:function(e){t.signinModal=!0}}},[o("span",{staticStyle:{color:"#fff"}},[t._v("新規登録")])])],1)],1)],1)],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.signinModal,callback:function(e){t.signinModal=e},expression:"signinModal"}},[o("v-card",[o("v-card-title",[t._v("新規登録")]),o("v-card-text",[o("v-text-field",{attrs:{label:"Name*",required:""},model:{value:t.signInName,callback:function(e){t.signInName=e},expression:"signInName"}}),o("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.signInEmail,callback:function(e){t.signInEmail=e},expression:"signInEmail"}}),o("v-text-field",{attrs:{label:"PassWord*",type:"password",required:""},model:{value:t.signInPassword,callback:function(e){t.signInPassword=e},expression:"signInPassword"}})],1),o("v-divider"),o("v-card-actions",[o("v-btn",{attrs:{color:"error"},on:{click:function(e){t.signinModal=!1}}},[t._v("閉じる")]),o("v-btn",{attrs:{color:"primary"},on:{click:t.userSignIn}},[t._v("確定")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.loginModal,callback:function(e){t.loginModal=e},expression:"loginModal"}},[o("v-card",[o("v-card-title",[t._v("ログイン")]),o("v-card-text",[o("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.loginEmail,callback:function(e){t.loginEmail=e},expression:"loginEmail"}}),o("v-text-field",{attrs:{label:"PassWord*",type:"password",required:""},model:{value:t.loginPassword,callback:function(e){t.loginPassword=e},expression:"loginPassword"}})],1),o("v-divider"),o("v-card-actions",[o("v-btn",{attrs:{color:"error"},on:{click:function(e){t.loginModal=!1}}},[t._v("閉じる")]),o("v-btn",{attrs:{color:"primary"},on:{click:t.userLogIn}},[t._v("ログイン")])],1)],1)],1)],1)},l=[],r=a("2f62"),c=a("8aa5"),d=a.n(c);a("ea7b"),a("588e"),a("e71f");const m={apiKey:"AIzaSyB4MqJ7aXVwlM8Lh6OAmLSWloOp7Gef48k",authDomain:"original-image-273c8.firebaseapp.com",databaseURL:"https://original-image-273c8.firebaseio.com",projectId:"original-image-273c8",storageBucket:"original-image-273c8.appspot.com",messagingSenderId:"1012864973815",appId:"1:1012864973815:web:f325934fce0435ab1c0cf2",measurementId:"G-YKRL8N3L3L"};var u={init(){d.a.auth().setPersistence(d.a.auth.Auth.Persistence.LOCAL)}};d.a.getCurrentUser=()=>new Promise((t,e)=>{const a=d.a.auth().onAuthStateChanged(e=>{a(),t(e)},e)}),d.a.initializeApp(m);const v=d.a,p=d.a.firestore(),h=d.a.auth(),g=d.a.storage().ref();o["default"].use(r["a"]);var f=new r["a"].Store({strict:!0,state:{userUid:{uid:""},user:{name:"",email:""},login:!1},getters:{uid:t=>t.userUid.uid,user:t=>t.user},actions:{autoLogin({commit:t}){h.onAuthStateChanged(e=>{if(e){t("setUid",{uid:e.uid}),t("switchLogin");const a=p.collection("users").doc(e.uid);a.get().then(e=>{if(e.exists){const a=e.data();return t("setUser",{name:a.name,email:a.email})}})}})},login({commit:t},e){h.signInWithEmailAndPassword(e.email,e.password).then(e=>{console.log(e),h.onAuthStateChanged(e=>{if(e){t("setUid",{uid:e.uid}),t("switchLogin");const a=p.collection("users").doc(e.uid);a.get().then(e=>{if(e.exists){const a=e.data();return t("setUser",{name:a.name,email:a.email})}})}})}).catch(()=>{alert("Eメール又はパスワードが間違っています")})},logOut(){this.commit("logOutSwitch")}},mutations:{setUid(t,e){t.userUid.uid=e.uid},switchLogin(t){t.login=!0},logOutSwitch(t){t.login=!1},setUser(t,e){t.user.name=e.name,t.user.email=e.email}},modules:{}});const b=(t,e,a)=>{h.createUserWithEmailAndPassword(t,e).then(()=>{const e=h.currentUser.uid,o={name:a,email:t},i=p.collection("users").doc(e);i.set(o)}).catch(t=>{alert("エラー！",t.message),console.error("アカウント再登録エラー",t.message)})},k=(t,e)=>{f.dispatch("login",{email:t,password:e}).then(()=>{alert("ログインしました。")}).catch(()=>{alert("Eメール又はパスワードが間違っています")})},w=()=>{h.signOut().then(()=>{alert("ログアウトしました"),f.dispatch("logOut")})};var x={name:"Navbar",data(){return{drawer:!1,logoutBtnShow:!1,loginModal:!1,signinModal:!1,signInName:"",signInEmail:"",signInPassword:"",loginEmail:"",loginPassword:""}},computed:{...Object(r["b"])({loginUser:"login"}),login(){return!!this.loginUser}},created(){0==this.$store.state.login&&this.$store.dispatch("autoLogin")},methods:{userLogOut(){w()},userLogIn(){k(this.loginEmail,this.loginPassword),this.loginModal=!1},userSignIn(){b(this.signInEmail,this.signInPassword,this.signInName),alert("登録が完了しました。"),this.signinModalt=!1,"/"==this.$router?console.log(""):this.$router.push("/")}}},y=x,_=(a("5dfc"),a("2877")),S=a("6544"),C=a.n(S),V=a("40dc"),I=a("5bc1"),P=a("8336"),E=a("b0af"),M=a("99d9"),D=a("a523"),F=a("169a"),U=a("ce7e"),L=a("132d"),N=a("adda"),T=a("8860"),O=a("56b0"),$=a("da13"),B=a("5d23"),A=a("1baa"),j=a("34c3"),W=a("e449"),z=a("f774"),q=a("0fd9"),R=a("2fa4"),G=a("8654"),J=Object(_["a"])(y,n,l,!1,null,null,null),H=J.exports;C()(J,{VAppBar:V["a"],VAppBarNavIcon:I["a"],VBtn:P["a"],VCard:E["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VContainer:D["a"],VDialog:F["a"],VDivider:U["a"],VIcon:L["a"],VImg:N["a"],VList:T["a"],VListGroup:O["a"],VListItem:$["a"],VListItemContent:B["a"],VListItemGroup:A["a"],VListItemIcon:j["a"],VListItemTitle:B["b"],VMenu:W["a"],VNavigationDrawer:z["a"],VRow:q["a"],VSpacer:R["a"],VTextField:G["a"]});var K={name:"App",components:{Navbar:H}},Y=K,X=a("7496"),Q=a("f6c4"),Z=Object(_["a"])(Y,i,s,!1,null,null,null),tt=Z.exports;C()(Z,{VApp:X["a"],VMain:Q["a"]});var et=a("8c4f"),at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("ページが見つかりませんでした。")])},ot=[],it={},st=Object(_["a"])(it,at,ot,!1,null,null,null),nt=st.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("v-container",[a("v-text-field",{staticStyle:{"max-width":"1500px"},attrs:{color:"#1E90FF","append-icon":"mdi-magnify",flat:"","hide-details":"","solo-inverted":""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.keyword)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("div",[a("v-tabs",{attrs:{color:"#000080"},on:{change:t.tabChange},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-tab",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(" 新着順 ")])]),a("v-tab",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(" 人気順 ")])]),a("v-tab",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(" 写真 ")])]),a("v-tab",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(" イラスト ")])])],1),a("v-container",{attrs:{fluid:""}},[a("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-tab-item",[a("v-row",t._l(t.newPosts,(function(e,o){return a("v-col",{key:o,attrs:{cols:"6",sm:"3"}},[a("v-card",{staticStyle:{"border-radius":"15px"}},[a("v-img",{staticClass:"white--text align-end img img-size",attrs:{src:e.imgUrl}},[a("v-card-title",{staticStyle:{"font-weight":"bold","font-size":"15px"},domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"}},[a("router-link",{staticStyle:{color:"#fff","font-weight":"bold","text-decoration":"none"},attrs:{to:{name:"Pickup",params:{post:""+e.docId}}}},[t._v(" more ")])],1)],1)],1)],1)})),1)],1),a("v-tab-item",[a("v-row",t._l(t.popularPosts,(function(e,o){return a("v-col",{key:o,attrs:{cols:"6",sm:"3"}},[a("v-card",{staticStyle:{"border-radius":"15px"}},[a("v-img",{staticClass:"white--text align-end img img-size",attrs:{src:e.imgUrl}},[a("v-card-title",{staticStyle:{"font-weight":"bold","font-size":"15px"},domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"}},[a("router-link",{staticStyle:{color:"#fff","font-weight":"bold","text-decoration":"none"},attrs:{to:{name:"Pickup",params:{post:""+e.docId}}}},[t._v(" more ")])],1)],1)],1)],1)})),1)],1),a("v-tab-item",[a("v-row",t._l(t.photoPosts,(function(e,o){return a("v-col",{key:o,attrs:{cols:"6",sm:"3"}},[a("v-card",{staticStyle:{"border-radius":"15px"}},[a("v-img",{staticClass:"white--text align-end img img-size",attrs:{src:e.imgUrl}},[a("v-card-title",{staticStyle:{"font-weight":"bold","font-size":"15px"},domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"}},[a("router-link",{staticStyle:{color:"#fff","font-weight":"bold","text-decoration":"none"},attrs:{to:{name:"Pickup",params:{post:""+e.docId}}}},[t._v(" more ")])],1)],1)],1)],1)})),1)],1),a("v-tab-item",[a("v-row",t._l(t.illustPosts,(function(e,o){return a("v-col",{key:o,attrs:{cols:"6",sm:"3"}},[a("v-card",{staticStyle:{"border-radius":"15px"}},[a("v-img",{staticClass:"white--text align-end img img-size",attrs:{src:e.imgUrl}},[a("v-card-title",{staticStyle:{"font-weight":"bold","font-size":"15px"},domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"}},[a("router-link",{staticStyle:{color:"#fff","font-weight":"bold","text-decoration":"none"},attrs:{to:{name:"Pickup",params:{post:""+e.docId}}}},[t._v(" more ")])],1)],1)],1)],1)})),1)],1)],1)],1)],1),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.topBtn,expression:"topBtn"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#1E90FF"},on:{click:t.toTop}},[a("v-icon",[t._v("mdi-apple-keyboard-control")])],1)],1)],1)},rt=[],ct={name:"Home",data(){return{keyword:"",tabs:0,newPosts:[],popularPosts:[],photoPosts:[],illustPosts:[],topBtn:!1}},mounted(){const t=p.collection("posts");t.orderBy("date","desc").get().then(t=>{t.forEach(t=>{this.newPosts.push(t.data())})})},methods:{tabChange(t){if(1===t){const t=p.collection("posts");this.popularPosts=[],t.orderBy("likeCount","desc").get().then(t=>{t.forEach(t=>{this.popularPosts.push(t.data())})})}else if(2===t){const t=p.collection("posts");this.photoPosts=[],t.where("category","==","写真").get().then(t=>{t.forEach(t=>{this.photoPosts.push(t.data())})})}else if(3===t){const t=p.collection("posts");this.illustPosts=[],t.where("category","==","イラスト").get().then(t=>{t.forEach(t=>{this.illustPosts.push(t.data())})})}else{const t=p.collection("posts");this.newPosts=[],t.orderBy("date","desc").get().then(t=>{t.forEach(t=>{this.newPosts.push(t.data())})})}},search(t){this.tabs=0,this.newPosts=[],p.collection("posts").orderBy("title").startAt(t).endAt(t+"").get().then(t=>{t.forEach(t=>{this.newPosts.push(t.data())})})},toTop(){this.$vuetify.goTo(0)},onScroll(t){if("undefined"===typeof window)return;const e=window.pageYOffset||t.target.scrollTop||0;this.topBtn=e>500}}},dt=ct,mt=(a("8b71"),a("62ad")),ut=a("71a3"),vt=a("c671"),pt=a("fe57"),ht=a("aac8"),gt=a("269a"),ft=a.n(gt),bt=a("f977"),kt=Object(_["a"])(dt,lt,rt,!1,null,null,null),wt=kt.exports;C()(kt,{VBtn:P["a"],VCard:E["a"],VCardActions:M["a"],VCardTitle:M["c"],VCol:mt["a"],VContainer:D["a"],VIcon:L["a"],VImg:N["a"],VRow:q["a"],VSpacer:R["a"],VTab:ut["a"],VTabItem:vt["a"],VTabs:pt["a"],VTabsItems:ht["a"],VTextField:G["a"]}),ft()(kt,{Scroll:bt["b"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"post"}},[a("v-container",[a("PostUploader")],1)],1)},yt=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"post-uploader"}},[a("v-row",[a("v-col",{staticClass:"img-grid",attrs:{cols:"12",sm:"6"}},[a("v-card",[a("v-img",{directives:[{name:"show",rawName:"v-show",value:t.uploadImage,expression:"uploadImage"}],attrs:{src:t.uploadImage,alt:""}})],1),a("div",[a("label",{directives:[{name:"show",rawName:"v-show",value:!t.uploadImage,expression:"!uploadImage"}],staticClass:"img-btn"},[t._v("ファイル選択 "),a("input",{staticClass:"input",attrs:{type:"file"},on:{change:t.onFileChange}})]),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.uploadImage,expression:"uploadImage"}],staticStyle:{margin:"10px"},attrs:{depressed:""}},[a("v-btn",{attrs:{color:"red"},on:{click:t.remove}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("取消")])])],1)])])],1),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),a("v-col",{staticClass:"post-form",attrs:{cols:"12",sm:"6"}},[a("v-textarea",{attrs:{label:"投稿者コメント","auto-grow":"",outlined:"",rows:"1","row-height":"15"},model:{value:t.postComment,callback:function(e){t.postComment=e},expression:"postComment"}}),a("v-text-field",{attrs:{label:"タイトル"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-select",{staticClass:"select",staticStyle:{"margin-top":"50px"},attrs:{items:t.items,label:"カテゴリー"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),a("br"),a("v-btn",{staticClass:"save-btn",staticStyle:{"margin-top":"50px"},attrs:{depressed:"",color:"#1E90FF"},on:{click:t.addImgFirebase}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("投稿")])])],1)],1)],1)},St=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-overlay",[a("div",{staticClass:"fullview"},[a("div",{staticClass:"loading-spacer"}),a("vue-loading",{attrs:{type:"spin",color:"#aaa",size:{width:"50px",height:"50px"}}})],1)])],1)},Vt=[],It=a("d523"),Pt={name:"loading",components:{VueLoading:It["VueLoading"]}},Et=Pt,Mt=(a("53a2"),a("a797")),Dt=Object(_["a"])(Et,Ct,Vt,!1,null,null,null),Ft=Dt.exports;C()(Dt,{VOverlay:Mt["a"]});var Ut={name:"PostUpload",data(){return{loading:!1,fileName:"",imgDataUrl:"",uploadImage:"",category:"null",items:["写真","イラスト"],title:"",postComment:""}},components:{Loading:Ft},methods:{onFileChange(t){const e=t.target.files||t.dataTransfer.files;this.createImage(e[0]),this.fileName=e[0].name},createImage(t){const e=new FileReader;e.onload=t=>{this.uploadImage=t.target.result},e.readAsDataURL(t),e.onloadend=t=>{this.imgDataUrl=t.target.result}},remove(){this.uploadImage=!1},addImgFirebase(){this.loading=!0;const t=this.$store.state.userUid.uid,e=this.fileName,a=this.imgDataUrl,o={date:new Date,title:this.title,comment:this.postComment,category:this.category,imgUrl:"",fileName:this.fileName,docId:"",likeCount:0,bookMark:0},i=g.child(`${t}/${e}`);i.putString(a,"data_url").then(()=>{i.getDownloadURL().then(e=>{o.imgUrl=e,p.collection("posts").add(o).then(e=>{p.collection("posts").doc(e.id).update({docId:e.id});const a=p.collection("users").doc(t).collection("posts").doc(e.id);a.set({date:new Date,imgUrl:o.imgUrl,title:o.title,docId:e.id}).then(()=>{alert("投稿を完了しました。"),this.loading=!1,location.reload()})}).catch((function(t){console.log(t)}))})})}}},Lt=Ut,Nt=(a("024c"),a("b974")),Tt=a("a844"),Ot=Object(_["a"])(Lt,_t,St,!1,null,null,null),$t=Ot.exports;C()(Ot,{VBtn:P["a"],VCard:E["a"],VCol:mt["a"],VImg:N["a"],VRow:q["a"],VSelect:Nt["a"],VTextField:G["a"],VTextarea:Tt["a"]});var Bt={name:"Post",components:{PostUploader:$t}},At=Bt,jt=(a("c198"),Object(_["a"])(At,xt,yt,!1,null,null,null)),Wt=jt.exports;C()(jt,{VContainer:D["a"]});var zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mypage"}},[a("v-container",[a("Mypagelist"),a("MypageTabs")],1)],1)},qt=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mypage-list"}},[a("div",{staticClass:"mypage-list"},[a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),a("v-row",{staticClass:"mypage-list"},[a("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",md:"6"}},[a("h2",{staticClass:"logo-icon"},[a("v-icon",{staticStyle:{"font-size":"200px","margin-top":"30px"}},[t._v(" mdi-account-circle ")])],1)]),a("v-col",{staticStyle:{"text-align":"left"},attrs:{cols:"12",md:"6"}},[a("ul",{staticClass:"user-list",staticStyle:{margin:"10px"}},[a("li",{staticStyle:{"margin-top":"30px","font-size":"20px"}},[t._v(" Name："+t._s(this.$store.state.user.name)+" ")]),a("hr"),a("li",[a("v-text-field",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"変更したい名前を入力",label:"Name",required:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[t._v(" Name ")])],1)]),a("div",{staticStyle:{"text-align":"right",margin:"20px"}},[a("v-btn",{staticClass:"btn",staticStyle:{"margin-top":"5px","font-weight":"bold"},attrs:{color:"#1E90FF"},on:{click:t.userNameChangePush}},[a("span",{staticStyle:{color:"#fff"}},[t._v(" 名前を変更 ")])])],1),a("ul",{staticClass:"user-list",staticStyle:{"margin-top":"10px","margin-left":"10px"}},[a("li",{staticStyle:{"margin-top":"30px","font-size":"20px"}},[t._v(" Email："+t._s(this.$store.state.user.email)+" ")]),a("hr")]),a("div",{staticStyle:{"text-align":"right"}},[a("ul",[a("li",{staticStyle:{margin:"20px"}},[a("v-btn",{attrs:{color:"#1E90FF"},on:{click:function(e){t.emailDialog=!0}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v(" Emailを変更 ")])])],1),a("li",{staticStyle:{margin:"20px"}},[a("v-btn",{attrs:{color:"#1E90FF"},on:{click:function(e){t.passWordVerificationDialog=!0}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v(" パスワードを変更 ")])])],1)])])])],1)],1),a("br"),a("v-dialog",{attrs:{"max-width":"300"},model:{value:t.passWordVerificationDialog,callback:function(e){t.passWordVerificationDialog=e},expression:"passWordVerificationDialog"}},[a("v-card",[a("v-card-title",[t._v("パスワード変更")]),a("v-card-text",[t._v(" パスワード変更のため、設定中のEmailアドレスに変更手続きメールを送りますが、よろしいですか？ ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"},on:{click:function(e){t.passWordVerificationDialog=!t.passWordVerificationDialog}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("閉じる")])]),a("v-btn",{attrs:{small:"",color:"red"},on:{click:function(e){return t.changePass(t.user.email)}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("はい")])])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"300"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.passWordDialog=!1}},model:{value:t.passWordDialog,callback:function(e){t.passWordDialog=e},expression:"passWordDialog"}},[a("v-card",[a("v-card-title",[t._v("パスワード変更")]),a("v-card-text",[t._v(" 変更手続きメールを送信しました。メールを確認して下さい。 ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"},on:{click:function(e){t.passWordDialog=!t.passWordDialog}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("閉じる")])])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.emailDialog,callback:function(e){t.emailDialog=e},expression:"emailDialog"}},[a("v-card",[a("v-card-title",[t._v("Eメール変更")]),a("v-card-text",[a("v-text-field",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"変更したいEmailアドレスを入力して下さい",label:"Email",required:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}},[t._v(" Email ")]),a("v-text-field",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"設定中のパスワードを入力して下さい",label:"PassWord",required:""},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}},[t._v(" PassWord ")])],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"},on:{click:function(e){t.emailDialog=!t.emailDialog}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("閉じる")])]),a("v-btn",{attrs:{small:"",color:"red"},on:{click:function(e){return t.changeEmail(t.$store.state.user.email,t.userPassword,t.userEmail)}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("送信")])])],1)],1)],1)],1)},Gt=[];const Jt=(t,e)=>{const a=p.collection("users").doc(e);a.collection("bookMark").doc(t).delete(),a.collection("posts").doc(t).delete().then(()=>{const e=p.collection("posts").doc(t);e.collection("bookMark").get().then(t=>{t.forEach(t=>{e.collection("bookMark").doc(t.id).delete()})}),e.collection("like").get().then(t=>{t.forEach(t=>{e.collection("like").doc(t.id).delete()})}),e.collection("comment").get().then(t=>{t.forEach(t=>{e.collection("comment").doc(t.id).delete()})})}).then(()=>{p.collection("posts").doc(t).delete().then(()=>{alert("削除しました。")}).then(()=>{location.reload()})})},Ht=(t,e)=>{t?p.collection("users").doc(e).update({name:t}).then(()=>{alert("名前を変更しました。"),location.reload()}):alert("名前を入力して下さい")};var Kt={conponents:{Loading:Ft},data(){return{loading:!1,userName:"",userEmail:"",userPassword:"",user:this.$store.state.user,passWordVerificationDialog:!1,passWordDialog:!1,emailDialog:!1}},methods:{userNameChangePush(){const t=this.userName,e=this.$store.state.userUid.uid;Ht(t,e)},changePass(t){this.passWordVerificationDialog=!1,h.sendPasswordResetEmail(t).then(()=>{console.log("送信しました"),this.passWordDialog=!0})},changeEmail(t,e,a){const o=h.currentUser,i=v.auth.EmailAuthProvider.credential(t,e);o.reauthenticateWithCredential(i).then(()=>{o.updateEmail(a).then(()=>{p.collection("users").doc(this.$store.state.userUid.uid).update({email:a}).then(()=>{alert("Emailを変更しました。再ログインしてください。"),this.emailDialog=!1}).then(()=>{w()}).then(()=>{this.$router.path("/")})}).catch(t=>{alert(t)})})}}},Yt=Kt,Xt=(a("180a"),Object(_["a"])(Yt,Rt,Gt,!1,null,null,null)),Qt=Xt.exports;C()(Xt,{VBtn:P["a"],VCard:E["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VCol:mt["a"],VDialog:F["a"],VDivider:U["a"],VIcon:L["a"],VRow:q["a"],VSpacer:R["a"],VTextField:G["a"]});var Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Mypage-tabs"}},[a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),a("div",{staticClass:"management-img"},[a("v-tabs",{attrs:{color:"#000080"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-tab",{staticStyle:{"font-weight":"bold"}},[t._v("投稿リスト")]),a("v-tab",{staticStyle:{"font-weight":"bold"}},[t._v("ブックマーク")])],1),a("v-container",{attrs:{fluid:""}},[a("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-tab-item",[a("v-row",t._l(t.postImages,(function(e,o){return a("v-col",{key:o,attrs:{cols:"6",lg:"2"}},[a("v-card",{staticStyle:{"border-radius":"15px"}},[a("v-img",{staticClass:"white--text align-end img img-size",attrs:{src:e.imgUrl}},[a("v-card-title",{staticStyle:{"font-weight":"bold","font-size":"15px"},domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:function(a){return t.deleteImgPush(e.docId)}}},[a("v-icon",{attrs:{color:"#FFF"}},[t._v(" mdi-delete ")])],1),a("v-btn",{attrs:{small:"",color:"#1E90FF"}},[a("router-link",{staticStyle:{color:"#fff","font-weight":"bold","text-decoration":"none"},attrs:{to:{name:"Pickup",params:{post:""+e.docId}}}},[t._v(" more ")])],1)],1)],1)],1)})),1)],1),a("v-tab-item",[a("v-row",t._l(t.bookMarkImg,(function(e){return a("v-col",{key:e.imgUrl,attrs:{cols:"6",lg:"2"}},[a("v-card",[a("v-img",{staticClass:"white--text align-end img img-size",attrs:{src:e.imgUrl}},[a("v-card-title",{staticStyle:{"font-weight":"bold","font-size":"15px"},domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"#1E90FF"}},[a("router-link",{staticStyle:{color:"#fff","font-weight":"bold","text-decoration":"none"},attrs:{to:{name:"Pickup",params:{post:""+e.docId}}}},[t._v(" more ")])],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)},te=[],ee={name:"MypageTabs",data(){return{loading:!1,tabs:null,postImages:[],bookMarkImg:[]}},components:{Loading:Ft},mounted(){const t=this.$store.state.userUid.uid,e=p.collection("users").doc(t).collection("posts");e.get().then(t=>{t.forEach(t=>{this.postImages.push(t.data())})}).catch(t=>{alert(t)}),p.collection("users").doc(t).collection("bookMark").get().then(t=>{t.forEach(t=>{this.bookMarkImg.push(t.data())})}).catch(t=>{alert(t)})},methods:{deleteImgPush(t){const e=confirm("削除してもよろしいですか？");if(1==e){this.loading=!0;const e=this.$store.state.userUid.uid;Jt(t,e)}}}},ae=ee,oe=(a("d27e"),Object(_["a"])(ae,Zt,te,!1,null,null,null)),ie=oe.exports;C()(oe,{VBtn:P["a"],VCard:E["a"],VCardActions:M["a"],VCardTitle:M["c"],VCol:mt["a"],VContainer:D["a"],VIcon:L["a"],VImg:N["a"],VRow:q["a"],VSpacer:R["a"],VTab:ut["a"],VTabItem:vt["a"],VTabs:pt["a"],VTabsItems:ht["a"]});var se={name:"Mypage",components:{MypageTabs:ie,Mypagelist:Qt}},ne=se,le=(a("f0c0"),Object(_["a"])(ne,zt,qt,!1,null,"4d8f8dbd",null)),re=le.exports;C()(le,{VContainer:D["a"]});var ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pickup"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("h2",[t._v(t._s(t.imgData.title))]),a("ul",{staticClass:"like-book-area"},[t.is_like?a("li",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.likeShow,expression:"likeShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"dark"},on:{click:t.addLikePush}},[a("v-icon",[t._v("mdi-thumb-up")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.likeShow,expression:"!likeShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"pink"},on:{click:t.deleteLikePush}},[a("v-icon",[t._v("mdi-thumb-up")])],1),t._v(" "+t._s(t.imgData.likeCount)+" ")],1):a("li",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.likeShow,expression:"!likeShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"dark"},on:{click:t.addLikePush}},[a("v-icon",[t._v("mdi-thumb-up")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.likeShow,expression:"likeShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"pink"},on:{click:t.deleteLikePush}},[a("v-icon",[t._v("mdi-thumb-up")])],1),t._v(" "+t._s(t.imgData.likeCount)+" ")],1),t.is_book_mark?a("li",{staticClass:"book-mark-btn"},[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.bookMarkShow,expression:"bookMarkShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"dark"},on:{click:t.addBookMarkPush}},[a("v-icon",[t._v("mdi-star")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.bookMarkShow,expression:"!bookMarkShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"pink"},on:{click:t.deleteBookMarkPush}},[a("v-icon",[t._v("mdi-star")])],1),t._v(" "+t._s(t.imgData.bookMark)+" ")],1):a("li",{staticClass:"book-mark-btn"},[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.bookMarkShow,expression:"!bookMarkShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"dark"},on:{click:t.addBookMarkPush}},[a("v-icon",[t._v("mdi-star")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.bookMarkShow,expression:"bookMarkShow"}],staticClass:"ma-2",attrs:{text:"",icon:"",color:"pink"},on:{click:t.deleteBookMarkPush}},[a("v-icon",[t._v("mdi-star")])],1),t._v(" "+t._s(t.imgData.bookMark)+" ")],1)]),a("v-card",[a("v-img",{staticStyle:{width:"100%",height:"500px"},attrs:{src:t.imgData.imgUrl,alt:"img"}})],1)],1),a("v-col",{staticStyle:{"margin-top":"20px"},attrs:{cols:"12",md:"6"}},[a("h4",[t._v("投稿者コメント")]),a("div",{staticClass:"post-comment"},[a("p",{staticStyle:{"text-align":"left","margin-left":"10px","margin-top":"5px"}},[t._v(t._s(t.imgData.comment))])]),a("div",{staticClass:"comment-header"},[a("h3",{staticClass:"comment-logo"},[t._v("コメント")]),a("div",{staticClass:"comment-btn"},[a("v-btn",{attrs:{color:"#1E90FF",fab:"",dark:"",small:""}},[a("v-icon",{staticStyle:{color:"#fff"},on:{click:function(e){t.commentDialog=!t.commentDialog}}},[t._v("mdi-plus")])],1)],1)]),a("div",{staticClass:"comment-area"},t._l(t.postComments,(function(e,o){return a("div",{key:o},[a("v-card",{staticClass:"mx-auto",staticStyle:{"border-radius":"10px","margin-top":"15px"},attrs:{"max-width":"400"}},[a("v-card-text",[a("div",[t._v(t._s(e.name))]),a("hr"),a("div",[t._v(t._s(e.commentText))])])],1)],1)})),0)])],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:t.commentDialog,callback:function(e){t.commentDialog=e},expression:"commentDialog"}},[a("v-card",[a("v-card-title",[t._v("コメントを入力して下さい。")]),a("v-card-text",[a("v-textarea",{attrs:{label:"コメント入力"},model:{value:t.commentText,callback:function(e){t.commentText=e},expression:"commentText"}}),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{small:"",color:"red"},on:{click:function(e){t.commentDialog=!t.commentDialog}}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("閉じる")])]),a("v-btn",{attrs:{color:"#1E90FF",small:""},on:{click:t.addComment}},[a("span",{staticStyle:{color:"#fff","font-weight":"bold"}},[t._v("送信")])])],1)],1)],1)],1)],1)],1)},de=[];const me=(t,e)=>{const a=p.collection("posts").doc(t);a.update({likeCount:v.firestore.FieldValue.increment(1)}),a.collection("like").doc(e).set({uid:e,time:new Date})},ue=(t,e)=>{const a=p.collection("posts").doc(t);a.update({likeCount:v.firestore.FieldValue.increment(-1)}),a.collection("like").doc(e).delete()},ve=(t,e,a,o)=>{const i=p.collection("posts").doc(t);i.update({bookMark:v.firestore.FieldValue.increment(1)}),i.collection("bookMark").doc(e).set({uid:e,date:new Date}),p.collection("users").doc(e).collection("bookMark").doc(t).set({title:o,imgUrl:a,docId:t,uid:e})},pe=(t,e)=>{const a=p.collection("posts").doc(t);a.update({bookMark:v.firestore.FieldValue.increment(-1)}),a.collection("bookMark").doc(e).delete(),p.collection("users").doc(e).collection("bookMark").doc(t).delete()};var he={data(){return{imgData:{},postId:this.$route.params.post,bookMarkShow:!1,postBookMarkList:[],likeShow:!1,postLikeList:[],commentDialog:!1,commentText:"",postComments:[]}},computed:{...Object(r["b"])({userId:"userUid",loginUser:"login"}),is_like(){return!!this.loginUser&&!!this.postLikeList.includes(this.userId.uid)},is_book_mark(){return!!this.loginUser&&!!this.postBookMarkList.includes(this.userId.uid)}},mounted(){const t=p.collection("posts").doc(this.postId);t.get().then(t=>{this.imgData=t.data()}),t.collection("like").get().then(t=>{t.forEach(t=>{this.postLikeList.push(t.id)})}),t.collection("bookMark").get().then(t=>{t.forEach(t=>{this.postBookMarkList.push(t.id)})}),t.collection("comment").orderBy("date","desc").onSnapshot(t=>{this.postComments=[],t.forEach(t=>{this.postComments.push(t.data())})})},methods:{addBookMarkPush(){const t=this.$store.state.userUid.uid;this.imgData.bookMark++,this.bookMarkShow=!this.bookMarkShow,ve(this.postId,t,this.imgData.imgUrl,this.imgData.title)},deleteBookMarkPush(){const t=this.$store.state.userUid.uid;this.imgData.bookMark--,this.bookMarkShow=!this.bookMarkShow,pe(this.postId,t)},addLikePush(){const t=this.$store.state.userUid.uid;this.imgData.likeCount++,this.likeShow=!this.likeShow,me(this.postId,t)},deleteLikePush(){const t=this.$store.state.userUid.uid;this.imgData.likeCount--,this.likeShow=!this.likeShow,ue(this.postId,t)},addComment(){p.collection("posts").doc(this.postId).collection("comment").add({uid:this.$store.state.userUid.uid,name:this.$store.state.user.name,date:new Date,commentText:this.commentText}).then(()=>{this.commentText="",this.commentDialog=!1})}}},ge=he,fe=(a("a424"),Object(_["a"])(ge,ce,de,!1,null,null,null)),be=fe.exports;C()(fe,{VBtn:P["a"],VCard:E["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VCol:mt["a"],VContainer:D["a"],VDialog:F["a"],VDivider:U["a"],VIcon:L["a"],VImg:N["a"],VRow:q["a"],VSpacer:R["a"],VTextarea:Tt["a"]}),o["default"].use(et["a"]);const ke=[{path:"/",name:"Home",component:wt,props:!0},{path:"/post",name:"Post",component:Wt,meta:{requiresAuth:!0}},{path:"/mypage",name:"Mypage",component:re,meta:{requiresAuth:!0}},{path:"/pickup/:post",name:"Pickup",component:be,meta:{requiresAuth:!0}},{path:"*",component:nt}],we=new et["a"]({mode:"history",base:"/",routes:ke});we.beforeEach(async(t,e,a)=>{const o=t.matched.some(t=>t.meta.requiresAuth);o&&!await v.getCurrentUser()?(alert("ログインが確認できません"),a({path:"/",query:{redirect:t.fullPath}})):a()});var xe=we,ye=a("f309");o["default"].use(ye["a"]);var _e=new ye["a"]({});u.init(),o["default"].config.productionTip=!1,new o["default"]({router:xe,store:f,vuetify:_e,render:t=>t(tt)}).$mount("#app")},"5dfc":function(t,e,a){"use strict";var o=a("1a12"),i=a.n(o);i.a},"6cb1":function(t,e,a){},"88d7":function(t,e,a){},"8b71":function(t,e,a){"use strict";var o=a("88d7"),i=a.n(o);i.a},a424:function(t,e,a){"use strict";var o=a("6cb1"),i=a.n(o);i.a},b640:function(t,e,a){t.exports=a.p+"img/logo.f73affbb.jpg"},bcbb:function(t,e,a){},c198:function(t,e,a){"use strict";var o=a("3d61"),i=a.n(o);i.a},d27e:function(t,e,a){"use strict";var o=a("4f71"),i=a.n(o);i.a},f0c0:function(t,e,a){"use strict";var o=a("3295"),i=a.n(o);i.a}});
//# sourceMappingURL=app.ed8b1fd5.js.map