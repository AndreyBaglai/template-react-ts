(this["webpackJsonpweb-template"]=this["webpackJsonpweb-template"]||[]).push([[0],{110:function(e,t,r){e.exports={login:"styles_login__Srsip",form:"styles_form__d5HOI",icon:"styles_icon__2BhNv",alert:"styles_alert__1YLw4",search:"styles_search__3YnJS"}},146:function(e,t,r){e.exports={img:"styles_img__1B22x"}},158:function(e,t,r){e.exports={content:"styles_content__3sTjA",posts:"styles_posts__3ppSY"}},159:function(e,t,r){e.exports={wrapSearch:"styles_wrapSearch__1ybxq",search:"styles_search__1bMcB"}},161:function(e,t,r){e.exports={layout:"styles_layout__1s-rR",content:"styles_content__3Kcco"}},186:function(e,t,r){e.exports={footer:"styles_footer__2qAln"}},308:function(e,t,r){},309:function(e,t,r){"use strict";r.r(t);var s,n,a,c,o,i,u,p,l,b,j,h,d,O,f=r(181),m=r.n(f).a.create({baseURL:"https://jsonplaceholder.typicode.com/",validateStatus:function(e){return!0}}),y=r(0),g=r(27),x=r.n(g),v=r(22),_=r(35),w=Object(_.a)(),S=r(39),P=r(65),k=r(26),N=(r(111),r(19)),U=r(33),B=r.n(U),C=r(55),I=r(82),z=new(s=function(){function e(){Object(P.a)(this,e),Object(S.a)(this,"posts",n,this),Object(S.a)(this,"post",a,this),Object(S.a)(this,"postsOnPage",c,this),Object(S.a)(this,"postsByUser",o,this),Object(N.e)(this)}return Object(I.a)(e,[{key:"getPostsByPage",value:function(){var e=Object(C.a)(B.a.mark((function e(t,r){var s,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("posts?_page=".concat(t,"&_limit=").concat(r));case 3:s=e.sent,(n=s.data)&&(this.postsOnPage=n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"error");case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getPosts",value:function(){var e=Object(C.a)(B.a.mark((function e(){var t,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("posts");case 3:t=e.sent,(r=t.data)&&(this.posts=r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"error");case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getPost",value:function(){var e=Object(C.a)(B.a.mark((function e(){var t,r,s,n=arguments;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"1",e.prev=1,e.next=4,m.get("posts/".concat(t));case 4:r=e.sent,(s=r.data)&&(this.post=s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0,"error");case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"getPostsByUser",value:function(){var e=Object(C.a)(B.a.mark((function e(){var t,r,s,n=arguments;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"1",e.prev=1,e.next=4,m.get("posts?userId=".concat(t));case 4:r=e.sent,(s=r.data)&&(this.postsByUser=s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0,"error");case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),n=Object(k.a)(s.prototype,"posts",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),a=Object(k.a)(s.prototype,"post",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),c=Object(k.a)(s.prototype,"postsOnPage",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=Object(k.a)(s.prototype,"postsByUser",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(k.a)(s.prototype,"getPostsByPage",[N.b],Object.getOwnPropertyDescriptor(s.prototype,"getPostsByPage"),s.prototype),Object(k.a)(s.prototype,"getPosts",[N.b],Object.getOwnPropertyDescriptor(s.prototype,"getPosts"),s.prototype),Object(k.a)(s.prototype,"getPost",[N.b],Object.getOwnPropertyDescriptor(s.prototype,"getPost"),s.prototype),Object(k.a)(s.prototype,"getPostsByUser",[N.b],Object.getOwnPropertyDescriptor(s.prototype,"getPostsByUser"),s.prototype),s),D=new(i=function(){function e(){Object(P.a)(this,e),Object(S.a)(this,"comments",u,this),Object(N.e)(this)}return Object(I.a)(e,[{key:"getCommentsById",value:function(){var e=Object(C.a)(B.a.mark((function e(){var t,r,s,n=arguments;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"1",e.prev=1,e.next=4,m.get("comments?postId=".concat(t));case 4:r=e.sent,(s=r.data)&&(this.comments=s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0,"error");case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),u=Object(k.a)(i.prototype,"comments",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(k.a)(i.prototype,"getCommentsById",[N.b],Object.getOwnPropertyDescriptor(i.prototype,"getCommentsById"),i.prototype),i),Y=r(74),L=new(p=function(){function e(){Object(P.a)(this,e),Object(S.a)(this,"users",l,this),Object(S.a)(this,"user",b,this),Object(N.e)(this)}return Object(I.a)(e,[{key:"getUsers",value:function(){var e=Object(C.a)(B.a.mark((function e(){var t,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("users");case 3:t=e.sent,(r=t.data)&&(this.users=r.map((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{key:e.id})}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"error");case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(C.a)(B.a.mark((function e(){var t,r,s,n=arguments;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"1",e.prev=1,e.next=4,m.get("users/".concat(t));case 4:r=e.sent,(s=r.data)&&(this.user=s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0,"error");case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"setUser",value:function(e){this.user=e,localStorage.setItem("user",JSON.stringify(e))}},{key:"unsetUser",value:function(){this.user={},localStorage.removeItem("user"),w.replace("/")}},{key:"authUser",value:function(){try{var e=localStorage.getItem("user");if(e){var t=JSON.parse(e);this.setUser(t)}}catch(r){return null}}}]),e}(),l=Object(k.a)(p.prototype,"users",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=Object(k.a)(p.prototype,"user",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(k.a)(p.prototype,"getUsers",[N.b],Object.getOwnPropertyDescriptor(p.prototype,"getUsers"),p.prototype),Object(k.a)(p.prototype,"getUser",[N.b],Object.getOwnPropertyDescriptor(p.prototype,"getUser"),p.prototype),Object(k.a)(p.prototype,"setUser",[N.b],Object.getOwnPropertyDescriptor(p.prototype,"setUser"),p.prototype),Object(k.a)(p.prototype,"unsetUser",[N.b],Object.getOwnPropertyDescriptor(p.prototype,"unsetUser"),p.prototype),Object(k.a)(p.prototype,"authUser",[N.b],Object.getOwnPropertyDescriptor(p.prototype,"authUser"),p.prototype),p);Object(N.c)({enforceActions:"observed"});var A=(j=function e(){Object(P.a)(this,e),Object(S.a)(this,"postsStore",h,this),Object(S.a)(this,"commentsStore",d,this),Object(S.a)(this,"usersStore",O,this)},h=Object(k.a)(j.prototype,"postsStore",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return z}}),d=Object(k.a)(j.prototype,"commentsStore",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return D}}),O=Object(k.a)(j.prototype,"usersStore",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return L}}),j),E=new A,T=Object(y.createContext)(E),M=function(){var e=Object(y.useContext)(T);if(!e)throw new Error("You have forgot to use StoreProvider, shame on you.");return e},q=(new A,r(198)),H=r(7),J=function(e){var t;return(t=e.user.id&&1===e.user.id)||q.b.warning(e.message?e.message:"You have not access to this page"),t?Object(H.jsx)(v.b,Object(Y.a)({},e)):Object(H.jsx)(v.a,{to:e.redirectTo?e.redirectTo:"/"})},F=r(314),R=r(97),X=r(195),G=r(60),V=r(50),K=r(71),Q=r(324),W=r(325),Z=r(63),$=r.n(Z),ee=function(){var e=M().usersStore,t=e.user;return Object(H.jsx)(F.a.Header,{children:Object(H.jsx)(R.a,{className:$.a.header,justify:"space-between",align:"top",children:t.id?Object(H.jsxs)("div",{className:$.a.user,children:[Object(H.jsx)(X.a,{icon:"user",className:$.a.avatar}),Object(H.jsx)("span",{children:t.name}),1===t.id&&Object(H.jsxs)("span",{children:["\xa0",Object(H.jsx)(K.a,{to:"/admin",children:Object(H.jsx)(G.a,{type:"dashed",size:"small",children:"Admin panel"})})]}),",\xa0",Object(H.jsx)("span",{className:$.a.signOut,onClick:function(){e.unsetUser(),q.b.success("Goodbye! You sign out",3)},children:"Sign Out"}),"."]}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V.a,{span:12,className:$.a.wrapBtn,children:Object(H.jsx)(K.a,{to:"/",children:Object(H.jsx)(G.a,{type:"primary",icon:Object(H.jsx)(Q.a,{}),className:$.a.btn,children:"Posts"})})}),Object(H.jsx)(V.a,{span:12,className:$.a.wrapBtn,children:Object(H.jsx)(K.a,{to:"/table",children:Object(H.jsx)(G.a,{type:"primary",icon:Object(H.jsx)(W.a,{}),className:$.a.btn,children:"Users table"})})})]})})})},te=r(318),re=r(186),se=r.n(re),ne=function(){return Object(H.jsx)(F.a.Footer,{className:se.a.footer,children:Object(H.jsx)(te.a.Text,{children:"Application template footer \xa9"})})},ae=r(73),ce=r(92),oe=r(320),ie=r(133),ue=r(4),pe=r.n(ue),le=r(317),be=r(146),je=r.n(be),he=function(e){return Object(H.jsx)(K.a,{to:"/post/".concat(e.id),children:Object(H.jsx)(le.a,{className:pe()(je.a.card),hoverable:!0,cover:Object(H.jsx)("img",{className:je.a.img,alt:"example",src:"".concat("https://picsum.photos/300/200/","?random=").concat(e.id)}),children:Object(H.jsx)(le.a.Meta,{title:e.title,description:e.body,className:je.a.text})},e.id)})},de=r(98),Oe=r.n(de),fe=Object(ce.a)((function(){var e=M().postsStore,t=e.posts,r=e.postsOnPage,s=Object(y.useState)(r),n=Object(ae.a)(s,2),a=n[0],c=n[1],o=Object(y.useState)(1),i=Object(ae.a)(o,2),u=i[0],p=i[1];Object(y.useEffect)((function(){e.getPosts(),e.getPostsByPage(u,8)}),[]),Object(y.useEffect)((function(){c(r)}),[r]);return Object(H.jsxs)("div",{className:"container",children:[Object(H.jsx)(R.a,{justify:"center",children:Object(H.jsx)(V.a,{span:5,xs:20,sm:11,md:6,className:Oe.a.wrapSearch,children:Object(H.jsx)(oe.a.Search,{placeholder:"Search by post name and description",size:"large",onSearch:function(){},className:Oe.a.search,onChange:function(e){var t=e.target.value.toLocaleLowerCase();""===t&&c(r);var s=r.filter((function(e){var r=e.title.toLowerCase(),s=e.body.toLowerCase();return r.indexOf(t)>-1||s.indexOf(t)>-1}));c(s)}})})}),a.length>0?Object(H.jsx)(R.a,{gutter:[16,16],justify:"center",align:"top",className:pe()(Oe.a.posts),children:a.map((function(e){return Object(H.jsx)(V.a,{span:5,xs:20,sm:11,md:6,children:Object(H.jsx)(he,Object(Y.a)({},e),e.id)},e.id)}))}):Object(H.jsx)(te.a.Text,{type:"secondary",className:Oe.a.info,children:"No searching posts..."}),Object(H.jsx)(ie.a,{className:Oe.a.pagination,current:u,defaultCurrent:u,pageSize:8,total:t.length,showSizeChanger:!1,onChange:function(t){p(t),e.getPostsByPage(t,8)}})]})})),me=r(46),ye=r(319),ge=r(321),xe=r(322),ve=r(315),_e=r(189),we=r.n(_e),Se=r(158),Pe=r.n(Se),ke=Object(ce.a)((function(){var e=Object(v.g)(),t=M(),r=t.postsStore,s=t.commentsStore,n=r.post,a=r.posts,c=s.comments;Object(y.useEffect)((function(){r.getPost(e.id),s.getCommentsById(e.id),r.getPosts()}),[]);var o=c.map((function(e){return{actions:[Object(H.jsx)("span",{children:"Reply to"})],author:e.email,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:Object(H.jsx)("p",{children:e.body}),datetime:function(){var e=we()().format("DD/MM/YYYY HH:MM:SS");return Object(H.jsx)(me.a,{title:"Time: ",children:Object(H.jsx)("span",{children:e})})}}}));return Object(H.jsxs)("div",{children:[Object(H.jsx)(ye.a,{onBack:function(){return w.push("/")},title:n.title}),Object(H.jsxs)(R.a,{className:Pe.a.content,children:[Object(H.jsxs)(V.a,{md:10,sm:20,children:[Object(H.jsx)("p",{children:n.body}),Object(H.jsx)(ge.a,{value:4}),Object(H.jsx)(xe.b,{header:"".concat(o.length," comments"),itemLayout:"horizontal",dataSource:o,renderItem:function(e){return Object(H.jsx)(ve.a,{actions:e.actions,author:e.author,avatar:e.avatar,content:e.content,datetime:e.datetime()})}})]}),Object(H.jsx)(V.a,{md:10,sm:20,xs:24,className:Pe.a.posts,children:Object(H.jsx)(xe.b,{itemLayout:"horizontal",dataSource:a,renderItem:function(e){return Object(H.jsx)(xe.b.Item,{children:Object(H.jsx)(xe.b.Item.Meta,{avatar:Object(H.jsx)(X.a,{src:"".concat("https://picsum.photos/300/200/","?random=").concat(e.id)}),title:Object(H.jsx)(K.a,{to:"".concat(e.id),children:e.title}),description:e.body})})}})})]})]})})),Ne=r(199),Ue=r(323),Be=r(108),Ce=r(110),Ie=r.n(Ce),ze=function(){var e=M().usersStore,t=e.users,r=Object(y.useState)(null),s=Object(ae.a)(r,2),n=s[0],a=s[1];Object(y.useEffect)((function(){e.getUsers()}),[]);return Object(H.jsx)("div",{className:Ie.a.login,children:Object(H.jsxs)("div",{className:Ie.a.form,children:[Object(H.jsx)(Ue.a,{message:"Admin section available for Leanne Graham.",type:"info",className:Ie.a.alert}),Object(H.jsx)(Be.a,{className:Ie.a.search,size:"large",showSearch:!0,placeholder:"Select a person",optionFilterProp:"children",onChange:function(e){a(e)},children:t.map((function(e){return Object(H.jsx)(Be.a.Option,{value:e.id,children:e.name},e.id)}))}),Object(H.jsx)(G.a,{type:"primary",size:"large",loading:!1,onClick:function(){if(!n)return q.b.info("Please, select user",3);var r=t.find((function(e){return e.id===n}));e.setUser(r),w.replace("/"),q.b.success("Perfect! You signed in as ".concat(r.name),3),1===r.id&&Ne.a.open({message:"Admin section",description:'You have admin permissions. You can go to admin section using link "Admin section" in header'})},block:!0,children:"Sign In"})]})})},De=r(191),Ye=r.n(De),Le=r(316),Ae=r(159),Ee=r.n(Ae),Te=[{title:"ID",dataIndex:"id",sortDirections:["ascend","descend"],sorter:function(e,t){return e.id-t.id}},{title:"Name",dataIndex:"name",sortDirections:["ascend","descend"],sorter:function(e,t){return e.name.localeCompare(t.name)}},{title:"User name",dataIndex:"username",responsive:["md"]},{title:"Email",dataIndex:"email",responsive:["sm"]},{title:"Website",dataIndex:"website",responsive:["md"],showOnResponse:!1,render:function(e){return Object(H.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:e},Ye.a.uniqueId())}}],Me=Object(ce.a)((function(){var e=M().usersStore,t=e.users,r=Object(y.useState)(t),s=Object(ae.a)(r,2),n=s[0],a=s[1];Object(y.useEffect)((function(){e.getUsers()}),[]),Object(y.useEffect)((function(){a(t)}),[t]);return Object(H.jsxs)("div",{children:[Object(H.jsx)(R.a,{justify:"center",children:Object(H.jsx)(V.a,{span:5,xs:20,sm:11,md:6,className:Ee.a.wrapSearch,children:Object(H.jsx)(oe.a.Search,{placeholder:"Search user by name",size:"large",onSearch:function(){},className:Ee.a.search,onChange:function(e){var r=e.target.value.toLocaleLowerCase(),s=t.filter((function(e){return e.name.toLowerCase().indexOf(r)>-1}));a(s)}})})}),Object(H.jsx)(Le.a,{size:"small",columns:Te,dataSource:n,pagination:!1,onChange:function(e){}})]})})),qe=r(161),He=r.n(qe),Je=function(){return Object(H.jsxs)(F.a,{className:He.a.layout,children:[Object(H.jsx)(ee,{}),Object(H.jsx)(F.a.Content,{className:He.a.content,children:Object(H.jsxs)(v.d,{children:[Object(H.jsx)(v.b,{path:"/login",component:ze}),Object(H.jsx)(v.b,{path:"/post/:id",component:Object(v.h)(ke)}),Object(H.jsx)(v.b,{path:"/table",component:Me}),Object(H.jsx)(v.b,{path:"/",component:fe})]})}),Object(H.jsx)(ne,{})]})},Fe=function(){return Object(H.jsx)("div",{children:"Admin"})},Re=function(){var e=M().usersStore;return Object(y.useEffect)((function(){e.authUser()}),[]),Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(v.c,{history:w,children:Object(H.jsxs)(v.d,{children:[Object(H.jsx)(J,{roles:["admin"],path:"/admin",component:Fe}),Object(H.jsx)(v.b,{path:"/",component:Je})]})})})};r(305),r(306),r(307),r(308);x.a.render(Object(H.jsx)(Re,{}),document.getElementById("root"))},63:function(e,t,r){e.exports={header:"styles_header__2nzay",user:"styles_user__1QrNT",avatar:"styles_avatar__39q0P",signOut:"styles_signOut__1kUs4",wrapBtn:"styles_wrapBtn__1qs6C",btn:"styles_btn__39byB"}},98:function(e,t,r){e.exports={wrapSearch:"styles_wrapSearch__1CHx1",search:"styles_search__3y8XD",info:"styles_info__2mhPf",posts:"styles_posts__3e1k0",pagination:"styles_pagination__1cV5g"}}},[[309,1,2]]]);
//# sourceMappingURL=main.9bbc9d60.chunk.js.map