(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{49:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(3),r=a.n(n),c=a(1),i=a.n(c),s=a(0),o=a.n(s),l=a(2),u=a(9),m=a(6),I=a(46),y=a(71),d=a(16),p=a(33),b=a(42),h=a(50),f=a.n(h);function g(){var e=Object(s.useState)(!1),t=r()(e,2),n=t[0],c=t[1],l=Object(s.useState)(p.a.Constants.Type.back),h=r()(l,2),g=h[0],S=(h[1],Object(s.useState)(!1)),E=r()(S,2),j=E[0],w=E[1],C=Object(s.useState)(null),Z=r()(C,2),v=Z[0],x=Z[1],B=Object(s.useState)(!1),G=r()(B,2),M=G[0],N=G[1],O=Object(s.useState)("Scan mode"),W=r()(O,2),z=W[0],D=W[1],H=Object(s.useState)(!1),T=r()(H,2),k=T[0],A=T[1],L=Object(s.useState)(!0),R=r()(L,2),J=R[0],Y=R[1],U=Object(s.useState)(0),F=r()(U,2),q=F[0],Q=F[1],X=Object(s.useState)(0),K=r()(X,2),V=K[0],$=K[1],_=Object(s.useState)(0),ee=r()(_,2),te=ee[0],ae=ee[1];new Date("2022-02-05T13:50:00"),f()(NOW);Object(s.useEffect)((function(){!function(){var e,t;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(p.a.requestCameraPermissionsAsync());case 2:e=a.sent,t=e.status,c("granted"===t);case 5:case"end":return a.stop()}}),null,null,null,Promise)}()}),[]);var ne=[p.a.Constants.WhiteBalance.auto,p.a.Constants.WhiteBalance.continuous];return null===n?o.a.createElement(m.a,null,o.a.createElement(u.a,null,"Loading...")):!1===n?o.a.createElement(u.a,null,"No access to camera"):o.a.createElement(m.a,{style:P.container},o.a.createElement(m.a,{style:P.camContainer},o.a.createElement(p.a,{ref:function(e){return x(e)},type:g,autoFocus:J,zoom:q,whiteBalance:ne[V],focusDepth:te,onCameraReady:function(){return w(!0)},barCodeScannerSettings:M?void 0:{barCodeTypes:[b.a.Constants.BarCodeType.qr]},onBarCodeScanned:k||M?void 0:function(e){e.type;var t=e.data;A(!0),alert("Get: "+t)},style:{height:400,minHeight:400}}),k&&o.a.createElement(I.a,{title:"Press to try again",onPress:function(){A(!1)}}),!k&&o.a.createElement(I.a,{title:z,onPress:function(){return alert(z)}})),o.a.createElement(m.a,{style:P.paramContainer},o.a.createElement(d.a,{style:P.button,onPress:function(){return Y(!J)}},o.a.createElement(u.a,{style:P.param},"Auto focus: ",J?"ON":"OFF")),o.a.createElement(d.a,{style:P.button,onPress:function(){var e=te+.25;e>1&&(e=0),ae(e)}},o.a.createElement(u.a,{style:P.param},"Focus depth: ",te)),o.a.createElement(d.a,{style:P.button,onPress:function(){var e=q+.25;e>1&&(e=0),Q(e)}},o.a.createElement(u.a,{style:P.param},"Zoom: ",q)),o.a.createElement(d.a,{style:P.button,onPress:function(){var e=V+1;e>1&&(e=0),$(e)}},o.a.createElement(u.a,{style:P.param},"White balance:"),o.a.createElement(u.a,{style:P.param},ne[V])),j&&o.a.createElement(d.a,{style:P.button,onPress:function(){N(!M),D("Scan mode"==z?"Photo mode":"Scan mode")}},o.a.createElement(u.a,{style:P.param},"Photo mode:"),o.a.createElement(u.a,{style:P.param},M?"ON":"OFF")),M&&o.a.createElement(d.a,{style:P.button,onPress:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!v){t.next=6;break}return t.next=3,i.a.awrap(v.takePictureAsync({quality:1}));case 3:return e=t.sent,t.next=6,i.a.awrap(b.a.scanFromURLAsync(e.uri,[b.a.Constants.BarCodeType.qr]).then((function(e){alert("Get: "+e[0].data)})).catch((function(e){alert(e)})));case 6:case"end":return t.stop()}}),null,null,null,Promise)}},o.a.createElement(u.a,{style:P.param},"Take photo"))),o.a.createElement(m.a,{style:{marginVertical:20}},o.a.createElement(y.a,{style:{width:228,height:215},source:a(95)})))}var P=l.a.create({container:{width:"100%",height:"100%",alignItems:"center"},camContainer:{width:"100%",height:"70%"},paramContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},button:{width:"45%",maxWidth:"45%",height:60,marginTop:12,justifyContent:"center",textAlign:"center",backgroundColor:"#1572a1",borderRadius:12},param:{color:"white"}})},73:function(e,t,a){e.exports=a(96)},95:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI3IiBoZWlnaHQ9IjIxNyIgdmlld0JveD0iMCAwIDIyNyAyMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxlbGxpcHNlIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlLXdpZHRoPSI1IiByeT0iNzAiIHJ4PSI2OS41IiBpZD0ic3ZnXzEiIGN5PSI3Mi41IiBjeD0iMTIyIiBzdHJva2U9IiM1ZDE2YmYiIGZpbGw9IiMwZmZmZmYiLz4KICA8ZWxsaXBzZSBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZS13aWR0aD0iNSIgcnk9IjcwIiByeD0iNjkuNSIgaWQ9InN2Z18yIiBjeT0iMTQ0LjUiIGN4PSI3MiIgc3Ryb2tlPSIjYWQ4MzA2IiBmaWxsPSIjMGZmZmZmIi8+CiAgPGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2Utd2lkdGg9IjUiIHJ5PSI3MCIgcng9IjY5LjUiIGlkPSJzdmdfMyIgY3k9IjE0Mi41IiBjeD0iMTU1IiBzdHJva2U9IiNlYTEwMzgiIGZpbGw9IiMwZmZmZmYiLz4KIDwvZz4KPC9zdmc+"}},[[73,1,2]]]);
//# sourceMappingURL=app.241fdcaa.chunk.js.map