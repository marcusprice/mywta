(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/search.698ee69a.svg"},,,function(e,t,a){e.exports=a.p+"static/media/info.4eb24737.svg"},function(e,t,a){e.exports=a.p+"static/media/hike-info.9ae34461.svg"},function(e,t,a){e.exports=a.p+"static/media/location.84b8f6ae.svg"},function(e,t,a){e.exports=a.p+"static/media/map.d4531081.svg"},function(e,t,a){e.exports=a.p+"static/media/about.096e9c83.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(4),c=a.n(i),r=a(1),l=(a(15),function(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),i=a[0],c=a[1],l=Object(n.useRef)([]),s=Object(n.useRef)(!1);return Object(n.useEffect)((function(){window.initMap=function(){var e=new window.google.maps.Map(document.getElementById("map"),{disableDefaultUI:!0,zoomControl:!0,zoom:6,center:{lat:47.7511,lng:-120.7401},styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]}]});c(e),delete window.initMap};var e=document.createElement("script");e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfQ5HxOGLiG-yBiPzDzuEReLsEmhW-6Ys&callback=initMap",document.getElementsByTagName("body")[0].appendChild(e)}),[]),navigator.geolocation.watchPosition((function(e){if(i){var t=window.google,a={lat:e.coords.latitude,lng:e.coords.longitude},n=e.coords.accuracy,o=[];console.log(a),console.log(n),o.push(new t.maps.Marker({clickable:!1,cursor:"pointer",position:a,icon:{path:t.maps.SymbolPath.CIRCLE,fillColor:"#C8D6EC",fillOpacity:.7,scale:12,strokeWeight:0},draggable:!1,map:i})),o.push(new t.maps.Marker({clickable:!1,cursor:"pointer",position:a,icon:{path:t.maps.SymbolPath.CIRCLE,fillColor:"#4285F4",fillOpacity:1,scale:6,strokeColor:"white",strokeWeight:2},draggable:!1,map:i})),n<1e3&&o.push(new t.maps.Circle({map:i,center:a,clickable:!1,cursor:"pointer",radius:n,strokeColor:"1bb6ff",strokeOpacity:.4,fillColor:"61a0bf",fillOpacity:.4,strokeWeight:1,zIndex:1})),l.current.length>0&&l.current.forEach((function(e){e.setMap(null),e=null})),l.current=o,s.current||(i.setCenter(a),i.setZoom(14),s.current=!0)}})),Object(n.useEffect)((function(){i&&document.querySelector(".location").addEventListener("click",(function(){i.panTo({lat:e.userLocation.lat,lng:e.userLocation.lng})}))}),[i,e.userLocation.lat,e.userLocation.lng]),o.a.createElement("div",{id:"map",style:{width:"100%",height:e.windowHeight-100}})}),s=a(5),u=a.n(s),m=function(){return o.a.createElement("div",{className:"hike-bar"},o.a.createElement("span",{className:"hike-bar-title"},"mywta"),o.a.createElement("img",{className:"info-icon",src:u.a,alt:"info icon"}))},p=a(2),f=a.n(p),d=a(6),h=a.n(d),g=a(7),b=a.n(g),w=a(8),E=a.n(w),k=a(9),y=a.n(k),v=function(e){var t,a,n="";switch(e.icon){case"search":t=f.a,a="search icon";break;case"hike-info":t=h.a,a="hike info";break;case"location":t=b.a,a="location pin icon",n="location";break;case"map":t=E.a,a="map icon";break;case"about":t=y.a,a="bear head";break;default:t=f.a,a="search icon"}return o.a.createElement("li",{className:"menu-item"},o.a.createElement("img",{className:"menu-item-icon "+n,src:t,alt:a}))},C=function(){return o.a.createElement("nav",null,o.a.createElement("ul",{className:"menu"},o.a.createElement(v,{icon:"search"}),o.a.createElement(v,{icon:"hike-info"}),o.a.createElement(v,{icon:"location"}),o.a.createElement(v,{icon:"map"}),o.a.createElement(v,{icon:"about"})))},O=function(){var e=Object(n.useState)({enabled:!1,lat:47.7511,lng:-120.7401,accuracy:0}),t=Object(r.a)(e,2),a=t[0],i=(t[1],Object(n.useState)(window.innerHeight)),c=Object(r.a)(i,2),s=c[0],u=c[1];return window.onresize=function(){u(window.innerHeight)},o.a.createElement("div",{className:"app"},o.a.createElement(m,null),o.a.createElement(l,{userLocation:a,windowHeight:s}),o.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.026168fa.chunk.js.map