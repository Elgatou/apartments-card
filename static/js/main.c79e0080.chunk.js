(this.webpackJsonpapartments=this.webpackJsonpapartments||[]).push([[0],{11:function(A){A.exports=JSON.parse('{"response":[{"type":"flat","id":1,"attributes":{"title":"3-\u0445 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u041c\u0438\u043d\u0441\u043a\u043e\u0439","rooms":3,"address":{"city":"Tyumen","street":"\u041c\u0438\u043d\u0441\u043a\u0430\u044f","house":"3a","room":"123"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":2,"attributes":{"first_name":"\u0412\u0430\u0441\u0438\u043b\u0438\u0439","last_name":"\u0414\u0440\u043e\u0437\u0434\u043e\u0432","middle_name":"\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":2,"attributes":{"title":"1 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u0411\u0430\u0440\u0430\u0431\u0430\u0438\u043d\u0441\u043a\u043e\u0439","rooms":2,"address":{"city":"Tyumen","street":"\u0411\u0430\u0440\u0430\u0431\u0438\u043d\u0441\u043a\u0430\u044f","house":"12","room":"45"},"area":34,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":10,"attributes":{"first_name":"\u041c\u0438\u0445\u0430\u0438\u043b","last_name":"\u0418\u0432\u0430\u043d\u043e\u0432","middle_name":"\u0414\u0435\u043c\u0438\u0434\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":3,"attributes":{"title":"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u041b\u0435\u043d\u0438\u043d\u0430","rooms":4,"address":{"city":"Tyumen","street":"\u041b\u0435\u043d\u0438\u043d\u0430","house":"134","room":"24"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":44,"attributes":{"first_name":"\u0421\u0442\u0435\u043f\u0430\u043d","last_name":"\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432","middle_name":"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447"}}}]}')},16:function(A,t,e){},23:function(A,t,e){},24:function(A,t,e){"use strict";e.r(t);var a=e(0),n=e.n(a),r=e(5),s=e.n(r),o=(e(16),e(2)),g=e(9),Q=e.n(g),i=e(10),B=e(3),d=e(11);var c=Object(B.b)("apartments/get",function(){var A=Object(i.a)(Q.a.mark((function A(t){var e;return Q.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,new Promise((function(A,t){setTimeout((function(){A(d)}),1500)}));case 2:return e=(e=A.sent).response.map((function(A){return A.like=!1,A})),A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()),u=Object(B.c)({name:"apartments",initialState:{data:[],status:"idle"},reducers:{toggleLike:function(A,t){A.data[t.payload].like=!A.data[t.payload].like}},extraReducers:function(A){A.addCase(c.pending,(function(A){A.status="loading"})).addCase(c.fulfilled,(function(A,t){A.status="idle",A.data=t.payload}))}}),N=u.actions.toggleLike,p=function(A){return A.apartments.data},E=function(A){return A.apartments.status},b=u.reducer,C=e(4),l=e.n(C),j=e(1);function m(A){var t=A.isActive?"#F44336":"lightgray";return Object(j.jsx)("svg",{version:"1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48",children:Object(j.jsx)("path",{fill:t,d:"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"})})}function D(){var A=Object(o.c)(p),t=Object(o.c)(E),e=Object(o.b)(),n={Tyumen:"\u0422\u044e\u043c\u0435\u043d\u044c"},r={agent:"\u0410\u0433\u0435\u043d\u0442"};return Object(a.useEffect)((function(){e(c())}),[]),Object(j.jsxs)("div",{className:l.a.wrapper,children:["loading"===t&&Object(j.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),A.map((function(A,t){var a=A.attributes.address,s=A.relationships,o=s.attributes;return Object(j.jsxs)("div",{className:l.a.card,children:[Object(j.jsx)("img",{width:"200px",height:"200px",alt:"placeholder",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAIAAADytinCAAAACXBIWXMAAC4jAAAuIwF4pT92AAARrklEQVR42u3dW2wU5f/AYbBIKYdSPCEazocoAhorkpggF8IfNGI4iQh4BIKpigoiGiUaLyTxcIFRsFEEMUFCiIcLY6IRkVBEQVCRABcoCBQCpbY/aWkB5f+GN25qi7WyW7orz3PRbLfT2emEfPplOjPb7CQAaamZXQAg0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDYBAAwg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AACDYBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0gEADINAACDSAQAMg0AACDYBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0gEADINAACDSAQAMg0AACDYBAAyDQAAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAACDSAQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAACDSAQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg055I//vjj+PHjJ0ipsEv900KgSbbOgf3QSPvWTkCgSaogJSUlTz755LBhw/6PFBkxYsT8+fOrq6tlGoEmKTfddFOzZs0uvPDCjh07XkLSwm7My8sLu7SgoCDs3t9//92/MQSafyeGY+vWrSEljzzyiJSk9v8lQ4cOzcnJ+e233wzRCDT/2okTJ8LHDRs2hEAvWbIkPPZ3rZSIu/GBBx4IO7a0tFSgEWiSCvSiRYvC42PHjv1B0sJuDDtz+vTpYcf++uuvAo1Ak1Sg3377bRN0Y0zQAo1AI9AC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"}),Object(j.jsxs)("div",{className:l.a.info,children:[Object(j.jsx)("h1",{children:A.attributes.title}),Object(j.jsxs)("p",{children:[A.attributes.rooms," \u043a\u043e\u043c\u043d\u0430\u0442\u044b, ",A.attributes.area," ",A.attributes.unit]}),Object(j.jsxs)("p",{children:[n[a.city],", \u0443\u043b\u0438\u0446\u0430 ",a.street,", ",a.house,", \u043a\u0432. ",a.room]}),Object(j.jsxs)("p",{children:[r[s.type]," ",o.first_name," ",o.last_name," ",o.middle_name]}),Object(j.jsx)("div",{onClick:function(){return e(N(t))},className:l.a.like,children:Object(j.jsx)(m,{isActive:A.like})})]})]},A.id)}))]})}e(23);var f=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header"}),Object(j.jsx)(D,{})]})},v=Object(B.a)({reducer:{apartments:b}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(o.a,{store:v,children:Object(j.jsx)(f,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},4:function(A,t,e){A.exports={card:"Apartments_card__3UbAs",wrapper:"Apartments_wrapper__39IVx",info:"Apartments_info__3s3MH",like:"Apartments_like__1CPZ_"}}},[[24,1,2]]]);
//# sourceMappingURL=main.c79e0080.chunk.js.map