(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{50:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(3),r=a.n(n),o=a(0),c=a.n(o),s=a(5),l=a(13),i=a(8),u=a(44),m=a(19),p=a(39),y=a(71),h=a(97),b=a(38);function d(){var e=h.a(b.a,{ask:!0}),t=r()(e,2),a=t[0],n=t[1],s=Object(o.useState)(p.a.Constants.Type.back),d=r()(s,2),f=d[0],C=(d[1],Object(o.useState)(!1)),g=r()(C,2),w=g[0],v=g[1],S=Object(o.useState)(!0),j=r()(S,2),O=j[0],P=j[1],k=Object(o.useState)(0),x=r()(k,2),B=x[0],T=x[1],W=Object(o.useState)(0),F=r()(W,2),A=F[0],D=F[1],I=Object(o.useState)(0),J=r()(I,2),N=J[0],q=J[1],z=[p.a.Constants.WhiteBalance.auto,p.a.Constants.WhiteBalance.continuous];return null===a?c.a.createElement(i.a,null):"granted"!==(null==a?void 0:a.status)?(n(),c.a.createElement(l.a,null,"No access to camera")):c.a.createElement(i.a,{style:E.container},c.a.createElement(i.a,{style:E.camContainer},c.a.createElement(p.a,{type:f,autoFocus:O,zoom:B,whiteBalance:z[A],focusDepth:N,barCodeScannerSettings:{barCodeTypes:[y.a.Constants.BarCodeType.qr]},onBarCodeScanned:w?void 0:function(e){e.type;var t=e.data;v(!0),alert("Get: "+t)}},c.a.createElement(l.a,null,"0.0.8")),w&&c.a.createElement(u.a,{title:"Try again",onPress:function(){v(!1)}}),!w&&c.a.createElement(u.a,{title:"waiting...",onPress:function(){return alert("waiting...")}})),c.a.createElement(i.a,{style:E.paramContainer},c.a.createElement(m.a,{style:E.button,onPress:function(){return P(!O)}},c.a.createElement(l.a,{style:E.param},"Auto focus: ",O?"ON":"OFF")),c.a.createElement(m.a,{style:E.button,onPress:function(){var e=N+.25;e>1&&(e=0),q(e)}},c.a.createElement(l.a,{style:E.param},"Focus depth: ",N)),c.a.createElement(m.a,{style:E.button,onPress:function(){var e=B+.25;e>1&&(e=0),T(e)}},c.a.createElement(l.a,{style:E.param},"Zoom: ",B)),c.a.createElement(m.a,{style:E.button,onPress:function(){var e=A+1;e>1&&(e=0),D(e)}},c.a.createElement(l.a,{style:E.param},"White balance:"),c.a.createElement(l.a,{style:E.param},z[A]))))}var E=s.a.create({container:{width:"100%",height:"100%",alignItems:"center"},camContainer:{width:"100%",height:"70%"},paramContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},button:{width:"45%",maxWidth:"45%",height:60,marginTop:12,justifyContent:"center",textAlign:"center",backgroundColor:"#1572a1",borderRadius:12},param:{color:"white"}})},73:function(e,t,a){e.exports=a(96)}},[[73,1,2]]]);
//# sourceMappingURL=app.7249334f.chunk.js.map