(this.webpackJsonptwitter_clone=this.webpackJsonptwitter_clone||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(36),s=n.n(r),i=n(10),o=n(23),u=n(9),l=n(11),j=n.n(l),b=n(17),d=n(25),p=(n(47),n(48),n(49),{apiKey:"AIzaSyCR7Adsss0CWJlS-65BsEUOvn3HwSEgspg",authDomain:"twitter-clone-coding-968a0.firebaseapp.com",projectId:"twitter-clone-coding-968a0",storageBucket:"twitter-clone-coding-968a0.appspot.com",messagingSenderId:"981010010855",appId:Object({NODE_ENV:"production",PUBLIC_URL:"/twitter-clone-coding",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyCR7Adsss0CWJlS-65BsEUOvn3HwSEgspg",REACT_APP_AUTH_DOMAIN:"twitter-clone-coding-968a0.firebaseapp.com",REACT_APP_MESSAGING_ID:"981010010855",REACT_APP_PROJECT_ID:"twitter-clone-coding-968a0",REACT_APP_STORAGE_BUCKET:"twitter-clone-coding-968a0.appspot.com"}).REACT_APP_APP_ID});d.a.initializeApp(p);var O=d.a,f=d.a.firestore(),h=d.a.auth(),m=d.a.storage(),x=n(2),v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],f=Object(a.useState)(""),m=Object(i.a)(f,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:y,className:"container",children:[Object(x.jsx)("input",{name:"email",type:"email",placeholder:"email",required:!0,value:n,onChange:w,className:"authInput"}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"password",required:!0,value:o,onChange:w,className:"authInput"}),Object(x.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778"}),v&&Object(x.jsx)("span",{className:"authError",children:v})]}),Object(x.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"\ub85c\uadf8\uc778":"\uacc4\uc815 \uc0dd\uc131\ud558\uae30"})]})},g=n(14),w=n(24),y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new O.auth.GoogleAuthProvider:"github"===n&&(a=new O.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"authContainer",children:[Object(x.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:"authBtns",children:[Object(x.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(x.jsx)(g.a,{icon:w.b})]}),Object(x.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(x.jsx)(g.a,{icon:w.a})]})]})]})},_=n(38),S=n(19),N=function(e){var t=e.tweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc774 \ud2b8\uc717\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}if(""===t.attachmentUrl){e.next=5;break}return e.next=5,m.refFromURL(t.attachmentUrl).delete();case 5:return e.next=7,f.doc("tweets/".concat(t.id)).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return o((function(e){return!e}))},v=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f.doc("tweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"tweet",children:s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,className:"container tweetEdit",children:[Object(x.jsx)("input",{type:"text",placeholder:"\uc218\uc815\ub41c \ub0b4\uc6a9\uc744 \uc801\uc73c\uc138\uc694!",value:d,onChange:function(e){var t=e.target.value;p(t)},autoFocus:!0,className:"formInput",required:!0}),Object(x.jsx)("input",{type:"submit",className:"formBtn",value:"\ud2b8\uc717 \uc218\uc815\ud558\uae30"})]}),Object(x.jsx)("button",{onClick:h,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(x.jsx)("img",{src:t.attachmentUrl}),n&&Object(x.jsxs)("div",{class:"tweet__actions",children:[Object(x.jsx)("span",{onClick:O,children:Object(x.jsx)(g.a,{icon:S.d})}),Object(x.jsx)("span",{onClick:h,children:Object(x.jsx)(g.a,{icon:S.a})})]})]})})},A=n(60),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=m.ref().child("".concat(t.uid,"/").concat(Object(A.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,f.collection("tweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(x.jsxs)("div",{className:"factoryInput__container",children:[Object(x.jsx)("input",{value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",className:"factoryInput__input",placeholder:"\uc9c0\uae08 \ubb34\uc5bc \ud558\uace0 \uc788\ub098\uc694?",maxLength:120}),Object(x.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(x.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(x.jsx)("span",{children:"\uc774\ubbf8\uc9c0 \ucd94\uac00\ud558\uae30"}),Object(x.jsx)(g.a,{icon:S.b})]}),Object(x.jsx)("input",{id:"attach-file",style:{opacity:0},type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)}}),Object(x.jsx)("input",{type:"submit",value:"\ud2b8\uc717\ud558\uae30"}),l&&Object(x.jsxs)("div",{className:"factoryForm__attachment",children:[Object(x.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(x.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d(null)},children:[Object(x.jsx)("span",{children:"Remove"}),Object(x.jsx)(g.a,{icon:S.c})]})]})]})},I=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){f.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(_.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(C,{userObj:t}),Object(x.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(x.jsx)(N,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},P=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(x.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"2x"})})}),Object(x.jsx)("li",{children:Object(x.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(x.jsx)(g.a,{icon:S.e,color:"#04AAFF",size:"2x"}),Object(x.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},E=function(e){var t=e.refreshUser,n=e.userObj,c=Object(u.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,l(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(x.jsx)("input",{type:"text",onChange:d,autoFocus:!0,value:o,className:"formInput",placeholder:"\ubc14\uafb8\uc2e4 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694."}),Object(x.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8\ud558\uae30",className:"formBtn",style:{marginTop:10}})]}),Object(x.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(e){e.userObj;h.signOut(),c.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})},k=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(x.jsxs)(o.a,{children:[n&&Object(x.jsx)(P,{userObj:a}),Object(x.jsxs)(u.c,{children:[n?Object(x.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(I,{userObj:a})}),Object(x.jsx)(u.a,{exact:!0,path:"/profile",children:Object(x.jsx)(E,{refreshUser:t,userObj:a})})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(y,{})})}),";"]})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(h.currentUser),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(null),j=Object(i.a)(l,2),b=j[0],d=j[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){e?(u(!0),d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(u(!1),d(null)),c(!0)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[n?Object(x.jsx)(k,{refreshUser:function(){var e=h.currentUser;d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:o,userObj:b}):"Initializing...",Object(x.jsxs)("footer",{children:["\xa9 Twitter Clone Coding ",(new Date).getFullYear()]})]})};n(57);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.9d2b43d6.chunk.js.map