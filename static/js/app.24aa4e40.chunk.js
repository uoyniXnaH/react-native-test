(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{51:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(3),r=a.n(n),o=a(1),s=a.n(o),c=a(0),u=a.n(c),l=a(5),i=a(8),m=a(9),p=a(45),y=a(15),f=a(40),b=a(38),d=a(98),h=a(39),E=a(52),C=a.n(E);function O(){var e=d.a(h.a,{ask:!0}),t=r()(e,2),a=(t[0],t[1],Object(c.useState)(f.a.Constants.Type.back)),n=r()(a,2),o=n[0],l=(n[1],Object(c.useState)(!1)),E=r()(l,2),O=E[0],S=E[1],v=Object(c.useState)(null),w=r()(v,2),j=w[0],g=w[1],x=Object(c.useState)(!1),k=r()(x,2),F=k[0],B=k[1],T=Object(c.useState)("Scan mode"),W=r()(T,2),A=W[0],q=W[1],D=Object(c.useState)(!1),R=r()(D,2),G=R[0],I=R[1],J=Object(c.useState)(!0),N=r()(J,2),z=N[0],L=N[1],U=Object(c.useState)(0),Z=r()(U,2),H=Z[0],K=Z[1],M=Object(c.useState)(0),Q=r()(M,2),V=Q[0],X=Q[1],Y=Object(c.useState)(0),$=r()(Y,2),_=$[0],ee=$[1],te=new Date("2022-02-05 13:16:00"),ae=[f.a.Constants.WhiteBalance.auto,f.a.Constants.WhiteBalance.continuous];return u.a.createElement(m.a,{style:P.container},u.a.createElement(m.a,{style:P.camContainer},u.a.createElement(f.a,{ref:function(e){return g(e)},type:o,autoFocus:z,zoom:H,whiteBalance:ae[V],focusDepth:_,onCameraReady:function(){return S(!0)},barCodeScannerSettings:F?void 0:{barCodeTypes:[b.a.Constants.BarCodeType.qr]},onBarCodeScanned:G||F?void 0:function(e){e.type;var t=e.data;I(!0),alert("Get: "+t)}}),G&&u.a.createElement(p.a,{title:"Press to try again",onPress:function(){I(!1)}}),!G&&u.a.createElement(p.a,{title:A,onPress:function(){return alert(A)}})),u.a.createElement(m.a,{style:P.paramContainer},u.a.createElement(y.a,{style:P.button,onPress:function(){return L(!z)}},u.a.createElement(i.a,{style:P.param},"Auto focus: ",z?"ON":"OFF")),u.a.createElement(y.a,{style:P.button,onPress:function(){var e=_+.25;e>1&&(e=0),ee(e)}},u.a.createElement(i.a,{style:P.param},"Focus depth: ",_)),u.a.createElement(y.a,{style:P.button,onPress:function(){var e=H+.25;e>1&&(e=0),K(e)}},u.a.createElement(i.a,{style:P.param},"Zoom: ",H)),u.a.createElement(y.a,{style:P.button,onPress:function(){var e=V+1;e>1&&(e=0),X(e)}},u.a.createElement(i.a,{style:P.param},"White balance:"),u.a.createElement(i.a,{style:P.param},ae[V])),u.a.createElement(y.a,{style:P.button,onPress:void 0},u.a.createElement(i.a,{style:P.param},C()().diff(te,"minutes"))),O&&u.a.createElement(y.a,{style:P.button,onPress:function(){B(!F),q("Photo mode")}},u.a.createElement(i.a,{style:P.param},"Photo mode:"),u.a.createElement(i.a,{style:P.param},F?"ON":"OFF")),F&&u.a.createElement(y.a,{style:P.button,onPress:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j){t.next=6;break}return t.next=3,s.a.awrap(j.takePictureAsync({quality:1}));case 3:return e=t.sent,t.next=6,s.a.awrap(b.a.scanFromURLAsync(e.uri,[b.a.Constants.BarCodeType.qr]).then((function(e){alert("Get: "+e[0].data)})).catch((function(e){alert(e)})));case 6:case"end":return t.stop()}}),null,null,null,Promise)}},u.a.createElement(i.a,{style:P.param},"Take photo"))))}var P=l.a.create({container:{width:"100%",height:"100%",alignItems:"center"},camContainer:{width:"100%",height:"70%"},paramContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},button:{width:"45%",maxWidth:"45%",height:60,marginTop:12,justifyContent:"center",textAlign:"center",backgroundColor:"#1572a1",borderRadius:12},param:{color:"white"}})},74:function(e,t,a){e.exports=a(97)}},[[74,1,2]]]);
//# sourceMappingURL=app.24aa4e40.chunk.js.map