(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{51:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(3),r=a.n(n),o=a(1),s=a.n(o),c=a(0),u=a.n(c),l=a(5),i=a(8),m=a(9),p=a(45),y=a(15),f=a(40),b=a(38),d=a(97),h=a(39);function E(){var e=d.a(h.a,{ask:!0}),t=r()(e,2),a=(t[0],t[1],Object(c.useState)(f.a.Constants.Type.back)),n=r()(a,2),o=n[0],l=(n[1],Object(c.useState)(!1)),E=r()(l,2),O=E[0],S=E[1],P=Object(c.useState)(null),v=r()(P,2),w=v[0],j=v[1],g=Object(c.useState)(!1),x=r()(g,2),k=x[0],F=x[1],T=Object(c.useState)("Scan mode"),B=r()(T,2),W=B[0],A=B[1],q=Object(c.useState)(!1),D=r()(q,2),N=D[0],R=D[1],G=Object(c.useState)(!0),I=r()(G,2),J=I[0],z=I[1],L=Object(c.useState)(0),U=r()(L,2),Z=U[0],H=U[1],K=Object(c.useState)(0),M=r()(K,2),Q=M[0],V=M[1],X=Object(c.useState)(0),Y=r()(X,2),$=Y[0],_=Y[1],ee=new Date("2022-02-05T13:50:00"),te=[f.a.Constants.WhiteBalance.auto,f.a.Constants.WhiteBalance.continuous];return u.a.createElement(m.a,{style:C.container},u.a.createElement(m.a,{style:C.camContainer},u.a.createElement(f.a,{ref:function(e){return j(e)},type:o,autoFocus:J,zoom:Z,whiteBalance:te[Q],focusDepth:$,onCameraReady:function(){return S(!0)},barCodeScannerSettings:k?void 0:{barCodeTypes:[b.a.Constants.BarCodeType.qr]},onBarCodeScanned:N||k?void 0:function(e){e.type;var t=e.data;R(!0),alert("Get: "+t)}}),N&&u.a.createElement(p.a,{title:"Press to try again",onPress:function(){R(!1)}}),!N&&u.a.createElement(p.a,{title:W,onPress:function(){return alert(W)}})),u.a.createElement(m.a,{style:C.paramContainer},u.a.createElement(y.a,{style:C.button,onPress:function(){return z(!J)}},u.a.createElement(i.a,{style:C.param},"Auto focus: ",J?"ON":"OFF")),u.a.createElement(y.a,{style:C.button,onPress:function(){var e=$+.25;e>1&&(e=0),_(e)}},u.a.createElement(i.a,{style:C.param},"Focus depth: ",$)),u.a.createElement(y.a,{style:C.button,onPress:function(){var e=Z+.25;e>1&&(e=0),H(e)}},u.a.createElement(i.a,{style:C.param},"Zoom: ",Z)),u.a.createElement(y.a,{style:C.button,onPress:function(){var e=Q+1;e>1&&(e=0),V(e)}},u.a.createElement(i.a,{style:C.param},"White balance:"),u.a.createElement(i.a,{style:C.param},te[Q])),u.a.createElement(y.a,{style:C.button,onPress:void 0},u.a.createElement(i.a,{style:C.param},NOW.diff(ee,"minute"))),O&&u.a.createElement(y.a,{style:C.button,onPress:function(){F(!k),A(k?"Photo mode":"Scan mode")}},u.a.createElement(i.a,{style:C.param},"Photo mode:"),u.a.createElement(i.a,{style:C.param},k?"ON":"OFF")),k&&u.a.createElement(y.a,{style:C.button,onPress:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!w){t.next=6;break}return t.next=3,s.a.awrap(w.takePictureAsync({quality:1}));case 3:return e=t.sent,t.next=6,s.a.awrap(b.a.scanFromURLAsync(e.uri,[b.a.Constants.BarCodeType.qr]).then((function(e){alert("Get: "+e[0].data)})).catch((function(e){alert(e)})));case 6:case"end":return t.stop()}}),null,null,null,Promise)}},u.a.createElement(i.a,{style:C.param},"Take photo"))))}var C=l.a.create({container:{width:"100%",height:"100%",alignItems:"center"},camContainer:{width:"100%",height:"70%"},paramContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},button:{width:"45%",maxWidth:"45%",height:60,marginTop:12,justifyContent:"center",textAlign:"center",backgroundColor:"#1572a1",borderRadius:12},param:{color:"white"}})},73:function(e,t,a){e.exports=a(96)}},[[73,1,2]]]);
//# sourceMappingURL=app.e5057dd0.chunk.js.map