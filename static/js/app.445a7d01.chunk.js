(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{46:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(2),r=a.n(n),s=a(1),c=a.n(s),o=a(0),u=a.n(o),l=a(4),i=a(8),m=a(9),p=a(43),y=a(14),f=a(32),h=a(39),b=a(47),d=a.n(b);function E(){var e=Object(o.useState)(null),t=r()(e,2),a=(t[0],t[1]),n=Object(o.useState)(f.a.Constants.Type.back),s=r()(n,2),l=s[0],b=(s[1],Object(o.useState)(!1)),E=r()(b,2),O=E[0],v=E[1],P=Object(o.useState)(null),S=r()(P,2),w=S[0],j=S[1],g=Object(o.useState)(!1),x=r()(g,2),k=x[0],F=x[1],T=Object(o.useState)("Scan mode"),B=r()(T,2),W=B[0],A=B[1],q=Object(o.useState)(!1),D=r()(q,2),N=D[0],R=D[1],G=Object(o.useState)(!0),I=r()(G,2),J=I[0],z=I[1],H=Object(o.useState)(1),L=r()(H,2),U=L[0],Z=L[1],K=Object(o.useState)(0),M=r()(K,2),Q=M[0],V=M[1],X=Object(o.useState)(0),Y=r()(X,2),$=Y[0],_=Y[1],ee=new Date("2022-02-05T13:50:00"),te=d()(NOW);Object(o.useEffect)((function(){!function(){var e,t;c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(f.a.requestCameraPermissionsAsync());case 2:e=n.sent,t=e.status,a("granted"===t);case 5:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]);var ae=[f.a.Constants.WhiteBalance.auto,f.a.Constants.WhiteBalance.continuous];return u.a.createElement(m.a,{style:C.container},u.a.createElement(m.a,{style:C.camContainer},u.a.createElement(f.a,{ref:function(e){return j(e)},type:l,autoFocus:J,zoom:U,whiteBalance:ae[Q],focusDepth:$,onCameraReady:function(){return v(!0)},barCodeScannerSettings:k?void 0:{barCodeTypes:[h.a.Constants.BarCodeType.qr]},onBarCodeScanned:N||k?void 0:function(e){e.type;var t=e.data;R(!0),alert("Get: "+t)},style:{height:"70%",minHeight:400}}),N&&u.a.createElement(p.a,{title:"Press to try again",onPress:function(){R(!1)}}),!N&&u.a.createElement(p.a,{title:W,onPress:function(){return alert(W)}})),u.a.createElement(m.a,{style:C.paramContainer},u.a.createElement(y.a,{style:C.button,onPress:function(){return z(!J)}},u.a.createElement(i.a,{style:C.param},"Auto focus: ",J?"ON":"OFF")),u.a.createElement(y.a,{style:C.button,onPress:function(){var e=$+.25;e>1&&(e=0),_(e)}},u.a.createElement(i.a,{style:C.param},"Focus depth: ",$)),u.a.createElement(y.a,{style:C.button,onPress:function(){var e=U+.25;e>1&&(e=0),Z(e)}},u.a.createElement(i.a,{style:C.param},"Zoom: ",U)),u.a.createElement(y.a,{style:C.button,onPress:function(){var e=Q+1;e>1&&(e=0),V(e)}},u.a.createElement(i.a,{style:C.param},"White balance:"),u.a.createElement(i.a,{style:C.param},ae[Q])),u.a.createElement(y.a,{style:C.button,onPress:void 0},u.a.createElement(i.a,{style:C.param},te.diff(ee,"minute"))),O&&u.a.createElement(y.a,{style:C.button,onPress:function(){F(!k),A(k?"Photo mode":"Scan mode")}},u.a.createElement(i.a,{style:C.param},"Photo mode:"),u.a.createElement(i.a,{style:C.param},k?"ON":"OFF")),k&&u.a.createElement(y.a,{style:C.button,onPress:function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!w){t.next=6;break}return t.next=3,c.a.awrap(w.takePictureAsync({quality:1}));case 3:return e=t.sent,t.next=6,c.a.awrap(h.a.scanFromURLAsync(e.uri,[h.a.Constants.BarCodeType.qr]).then((function(e){alert("Get: "+e[0].data)})).catch((function(e){alert(e)})));case 6:case"end":return t.stop()}}),null,null,null,Promise)}},u.a.createElement(i.a,{style:C.param},"Take photo"))))}var C=l.a.create({container:{width:"100%",height:"100%",alignItems:"center"},camContainer:{width:"100%",height:"70%"},paramContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},button:{width:"45%",maxWidth:"45%",height:60,marginTop:12,justifyContent:"center",textAlign:"center",backgroundColor:"#1572a1",borderRadius:12},param:{color:"white"}})},69:function(e,t,a){e.exports=a(91)}},[[69,1,2]]]);
//# sourceMappingURL=app.445a7d01.chunk.js.map