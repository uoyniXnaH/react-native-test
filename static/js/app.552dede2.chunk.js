(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{46:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(2),r=a.n(n),s=a(1),c=a.n(s),o=a(0),l=a.n(o),u=a(4),i=a(7),m=a(9),p=a(43),y=a(14),f=a(32),b=a(39),d=a(47),h=a.n(d);function E(){var e=Object(o.useState)(!1),t=r()(e,2),a=(t[0],t[1],Object(o.useState)(null)),n=r()(a,2),s=n[0],u=n[1],d=Object(o.useState)(f.a.Constants.Type.back),E=r()(d,2),O=E[0],S=(E[1],Object(o.useState)(!1)),v=r()(S,2),P=v[0],j=v[1],w=Object(o.useState)(null),g=r()(w,2),x=g[0],k=g[1],F=Object(o.useState)(!1),T=r()(F,2),B=T[0],W=T[1],A=Object(o.useState)("Scan mode"),q=r()(A,2),N=q[0],D=q[1],R=Object(o.useState)(!1),G=r()(R,2),I=G[0],J=G[1],L=Object(o.useState)(!0),z=r()(L,2),U=z[0],Z=z[1],H=Object(o.useState)(0),K=r()(H,2),M=K[0],Q=K[1],V=Object(o.useState)(0),X=r()(V,2),Y=X[0],$=X[1],_=Object(o.useState)(0),ee=r()(_,2),te=ee[0],ae=ee[1],ne=new Date("2022-02-05T13:50:00"),re=h()(NOW);Object(o.useEffect)((function(){!function(){var e,t;c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(f.a.requestPermissionsAsync());case 2:e=a.sent,t=e.status,u("granted"===t);case 5:case"end":return a.stop()}}),null,null,null,Promise)}()}),[]);var se=[f.a.Constants.WhiteBalance.auto,f.a.Constants.WhiteBalance.continuous];return null===s?l.a.createElement(m.a,null,l.a.createElement(i.a,null,"Loading...")):!1===s?l.a.createElement(i.a,null,"No access to camera"):l.a.createElement(m.a,{style:C.container},l.a.createElement(m.a,{style:C.camContainer},l.a.createElement(f.a,{ref:function(e){return k(e)},type:O,autoFocus:U,zoom:M,whiteBalance:se[Y],focusDepth:te,onCameraReady:function(){return j(!0)},barCodeScannerSettings:B?void 0:{barCodeTypes:[b.a.Constants.BarCodeType.qr]},onBarCodeScanned:I||B?void 0:function(e){e.type;var t=e.data;J(!0),alert("Get: "+t)}}),I&&l.a.createElement(p.a,{title:"Press to try again",onPress:function(){J(!1)}}),!I&&l.a.createElement(p.a,{title:N,onPress:function(){return alert(N)}})),l.a.createElement(m.a,{style:C.paramContainer},l.a.createElement(y.a,{style:C.button,onPress:function(){return Z(!U)}},l.a.createElement(i.a,{style:C.param},"Auto focus: ",U?"ON":"OFF")),l.a.createElement(y.a,{style:C.button,onPress:function(){var e=te+.25;e>1&&(e=0),ae(e)}},l.a.createElement(i.a,{style:C.param},"Focus depth: ",te)),l.a.createElement(y.a,{style:C.button,onPress:function(){var e=M+.25;e>1&&(e=0),Q(e)}},l.a.createElement(i.a,{style:C.param},"Zoom: ",M)),l.a.createElement(y.a,{style:C.button,onPress:function(){var e=Y+1;e>1&&(e=0),$(e)}},l.a.createElement(i.a,{style:C.param},"White balance:"),l.a.createElement(i.a,{style:C.param},se[Y])),l.a.createElement(y.a,{style:C.button,onPress:void 0},l.a.createElement(i.a,{style:C.param},re.diff(ne,"minute"))),P&&l.a.createElement(y.a,{style:C.button,onPress:function(){W(!B),D(B?"Photo mode":"Scan mode")}},l.a.createElement(i.a,{style:C.param},"Photo mode:"),l.a.createElement(i.a,{style:C.param},B?"ON":"OFF")),B&&l.a.createElement(y.a,{style:C.button,onPress:function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!x){t.next=6;break}return t.next=3,c.a.awrap(x.takePictureAsync({quality:1}));case 3:return e=t.sent,t.next=6,c.a.awrap(b.a.scanFromURLAsync(e.uri,[b.a.Constants.BarCodeType.qr]).then((function(e){alert("Get: "+e[0].data)})).catch((function(e){alert(e)})));case 6:case"end":return t.stop()}}),null,null,null,Promise)}},l.a.createElement(i.a,{style:C.param},"Take photo"))))}var C=u.a.create({container:{width:"100%",height:"100%",alignItems:"center"},camContainer:{width:"100%",height:"70%"},paramContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},button:{width:"45%",maxWidth:"45%",height:60,marginTop:12,justifyContent:"center",textAlign:"center",backgroundColor:"#1572a1",borderRadius:12},param:{color:"white"}})},69:function(e,t,a){e.exports=a(91)}},[[69,1,2]]]);
//# sourceMappingURL=app.552dede2.chunk.js.map