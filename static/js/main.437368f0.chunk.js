(this["webpackJsonpapp-covid-inf"]=this["webpackJsonpapp-covid-inf"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),s=n.n(c),i=n(2),o=n(3),u=n.n(o),l=n(5),d={start_period:1,end_period:2},j={start_period:1,end_period:8},b={start_period:1,end_period:31},f={start:!1,labelForStart:"Wrong PERIOD START."},h={end:!1,labelForEnd:"Wrong PERIOD END."},O=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("Please add url to request");case 2:return e.next=4,fetch("https://api.covid19api.com/"+t);case 4:if((n=e.sent).ok){e.next=9;break}throw new Error("Response status fetch is : ".concat(n.status));case 9:return e.next=11,n.json();case 11:return a=e.sent,e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=O,x=(n(13),n(0)),v=function(e){var t=e.children,n=e.handleOnChange;return Object(x.jsxs)("select",{name:"countries",id:"countriesList",autoFocus:!0,defaultValue:"default",className:"form-select","aria-label":"Default select example",onChange:function(e){return n(e.target.value)},children:[Object(x.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Choose a country:"}),t]})},m=function(e){var t=e.data,n=e.setCountry;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{handleOnChange:n,children:t.map((function(e,t){return Object(x.jsxs)("option",{value:e.Slug,children:[t+1,". ",e.Country]},e.Slug)}))})})},S=(n(15),function(e){var t=e.callback,n=e.label;return Object(x.jsx)("button",{className:"button",onClick:function(){t&&t()},children:n})}),y=function(e){var t=e.name,n=e.date,a=e.period,r=e.active,c=e.confirmed,s=e.deaths;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:["Country: ",t]}),Object(x.jsxs)("p",{children:["Last statistics day: ",n]}),Object(x.jsxs)("p",{children:["Statistical period : ",a]}),Object(x.jsxs)("p",{children:["Amount of active : ",r]}),Object(x.jsxs)("p",{children:["Amount confirmed : ",c]}),Object(x.jsxs)("p",{children:["Amount of deaths : ",s]})]})},g=(n(16),function(e){var t=e.label;return Object(x.jsx)("h2",{className:"warning",children:t})}),w=function(e){var t=e.label,n=e.value,a=e.callback;return Object(x.jsx)("input",{id:t,value:n,type:"date",onChange:function(e){a&&a(e.currentTarget.value)}})},k=function(){return Object(x.jsxs)("div",{className:"d-flex justify-content-center",style:{width:"100%",marginTop:"50px"},children:[Object(x.jsx)("div",{className:"spinner-border",role:"status"}),Object(x.jsx)("span",{children:"Loading..."})]})},C=function(e){var t=e.setCountry,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("countries");case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),c.length?Object(x.jsx)("header",{children:Object(x.jsx)("nav",{children:Object(x.jsxs)("form",{id:"form",children:[Object(x.jsx)("label",{form:"countriesList"}),Object(x.jsx)(m,{data:c,setCountry:t})]})})}):Object(x.jsx)(k,{})},_=(n(17),function(e){var t=e.country,n=e.countryData,r=e.setCountryData,c=e.setPeriod,s=e.setShowInputMenu,o=e.setShowStatistics,f=Object(a.useState)(!1),h=Object(i.a)(f,2),O=h[0],v=h[1];if(Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("country/".concat(t));case 2:n=e.sent,r(n),v(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.length&&(v(!0),e())}),[t]),O)return Object(x.jsx)(k,{});if(!n.length)return Object(x.jsx)(g,{label:"No information about covid in this country"});var m=n[n.length-1],w=m.Country,C=m.Date.slice(0,10),_=n.length,D=m.Active,E=m.Confirmed,I=m.Deaths,M=function(e){c(e),o(!0)};return Object(x.jsxs)("div",{className:"countryInfo",children:[Object(x.jsx)(y,{name:w,date:C,period:_,active:D,confirmed:E,deaths:I}),Object(x.jsxs)("a",{href:"#statisticsInfo",children:[Object(x.jsx)(S,{callback:function(){return M(d)},label:"For last day"}),Object(x.jsx)(S,{callback:function(){return M(j)},label:"For last week"}),Object(x.jsx)(S,{callback:function(){return M(b)},label:"For last month"})]}),Object(x.jsx)("a",{href:"#inputMenu",children:Object(x.jsx)(S,{callback:function(){return s(!0)},label:"Input your period"})})]})}),D=(n(18),function(e){var t=e.period,n=e.countryData,a=e.setShowStatistics,r=t.start_period,c=t.end_period;if(n.length){var s=function(e){return Math.abs(n[n.length-r-1][e]-n[n.length-c-1][e])},i=n[0].Country,o=Math.abs(r-c),u=s("Active"),l=s("Confirmed"),d=s("Deaths");return Object(x.jsxs)("div",{className:"statisticsInfo",id:"statisticsInfo",children:[Object(x.jsx)(y,{name:i,period:o,active:u,confirmed:l,deaths:d}),Object(x.jsx)(S,{callback:function(){return a(!1)},label:"Hidden Statistics"})]})}}),E=n(4);n(19);var I=function(e){var t=e.maxPeriod,n=e.period,r=e.setPeriod,c=e.setShowInputMenu,s=e.setShowStatistics,o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),O=b[0],p=b[1],v=Object(a.useState)(f),m=Object(i.a)(v,2),y=m[0],k=m[1],C=Object(a.useState)(h),_=Object(i.a)(C,2),D=_[0],I=_[1];return Object(a.useEffect)((function(){!function(e,t,n,a,r,c,s,i,o){var u,l,d,j,b=new Date,f=function(e){var t=new Date(e);return Math.ceil((b-t)/864e5)},h=function(e){return e<1||e>n.length},O=function(e,t){if(e)switch(o(!1),t){case"start":c(Object(E.a)(Object(E.a)({},r),{},{start:!0}));break;case"end":i(Object(E.a)(Object(E.a)({},s),{},{end:!0}));break;default:return}if(!e)switch(t){case"start":c(Object(E.a)(Object(E.a)({},r),{},{start:!1}));break;case"end":i(Object(E.a)(Object(E.a)({},s),{},{end:!1}));break;default:return}};e.length&&O(j=h(l=f(e)),"start"),t.length&&O(d=h(u=f(t)),"end"),!1===d&&!1===j&&(a({start_period:l,end_period:u}),o(!0))}(l,O,n,r,y,k,D,I,s)}),[l,O]),Object(x.jsxs)("div",{className:"inputMenu",id:"inputMenu",children:[Object(x.jsxs)("h3",{children:["Period must bee limited max ",t," days ago to yesterday"]}),Object(x.jsx)("label",{name:"start_period",children:"Enter periods start"}),Object(x.jsx)(w,{label:"start_period",value:l,callback:d}),Object(x.jsx)("label",{name:"end_period",children:"Enter periods end"}),Object(x.jsx)(w,{label:"end_period",value:O,callback:p}),Object(x.jsx)(S,{label:"Hidden input menu",callback:function(){return c(!1)}}),y.start&&Object(x.jsx)(g,{label:y.labelForStart}),D.end&&Object(x.jsx)(g,{label:D.labelForEnd})]})},M=(n(20),n(21),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)({start_period:0,end_period:0}),d=Object(i.a)(l,2),j=d[0],b=d[1],f=Object(a.useState)(!1),h=Object(i.a)(f,2),O=h[0],p=h[1],v=Object(a.useState)(!1),m=Object(i.a)(v,2),S=m[0],y=m[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{setCountry:r}),Object(x.jsxs)("main",{className:"content",children:[O&&Object(x.jsx)(I,{maxPeriod:o.length,period:j,setPeriod:b,setShowInputMenu:p,setShowStatistics:y}),!!n.length&&Object(x.jsx)(_,{country:n,countryData:o,setCountryData:u,setPeriod:b,setShowInputMenu:p,setShowStatistics:y}),S&&Object(x.jsx)(D,{period:j,countryData:o,setShowStatistics:y})]})]})});s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.437368f0.chunk.js.map