(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/search.698ee69a.svg"},,,function(e,a,t){e.exports=t.p+"static/media/info.4eb24737.svg"},function(e,a,t){e.exports=t.p+"static/media/hike-info.9ae34461.svg"},function(e,a,t){e.exports=t.p+"static/media/location.84b8f6ae.svg"},function(e,a,t){e.exports=t.p+"static/media/map.d4531081.svg"},function(e,a,t){e.exports=t.p+"static/media/about.096e9c83.svg"},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(4),i=t.n(o),r=t(1),l=(t(15),function(e){var a=Object(n.useState)(null),t=Object(r.a)(a,2),o=t[0],i=t[1],l=Object(n.useRef)([]),s=Object(n.useRef)(!1);return Object(n.useEffect)((function(){window.initMap=function(){var e=new window.google.maps.Map(document.getElementById("map"),{disableDefaultUI:!0,zoomControl:!0,zoom:6,center:{lat:47.7511,lng:-120.7401}});i(e),delete window.initMap};var e=document.createElement("script");e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfQ5HxOGLiG-yBiPzDzuEReLsEmhW-6Ys&callback=initMap",document.getElementsByTagName("body")[0].appendChild(e)}),[]),Object(n.useEffect)((function(){if(o&&e.userLocation.enabled){var a=window.google,t={lat:e.userLocation.lat,lng:e.userLocation.lng},n=e.userLocation.accuracy,c=[];c.push(new a.maps.Marker({clickable:!1,cursor:"pointer",position:t,icon:{path:a.maps.SymbolPath.CIRCLE,fillColor:"#C8D6EC",fillOpacity:.7,scale:12,strokeWeight:0},draggable:!1,map:o})),c.push(new a.maps.Marker({clickable:!1,cursor:"pointer",position:t,icon:{path:a.maps.SymbolPath.CIRCLE,fillColor:"#4285F4",fillOpacity:1,scale:6,strokeColor:"white",strokeWeight:2},draggable:!1,map:o})),e.userLocation.accuracy<1e3&&c.push(new a.maps.Circle({map:o,center:t,clickable:!1,cursor:"pointer",radius:n,strokeColor:"1bb6ff",strokeOpacity:.4,fillColor:"61a0bf",fillOpacity:.4,strokeWeight:1,zIndex:1})),l.current.length>0&&l.current.forEach((function(e){e.setMap(null),e=null})),l.current=c,s.current||(o.setCenter(t),o.setZoom(14),s.current=!0)}}),[e.userLocation,o]),Object(n.useEffect)((function(){o&&document.querySelector(".location").addEventListener("click",(function(){o.panTo({lat:e.userLocation.lat,lng:e.userLocation.lng})}))}),[o,e.userLocation.lat,e.userLocation.lng]),c.a.createElement("div",{id:"map"})}),s=t(5),u=t.n(s),m=function(){return c.a.createElement("div",{className:"hike-bar"},c.a.createElement("span",{className:"hike-bar-title"},"mywta"),c.a.createElement("img",{className:"info-icon",src:u.a,alt:"info icon"}))},p=t(2),f=t.n(p),d=t(6),g=t.n(d),b=t(7),h=t.n(b),E=t(8),k=t.n(E),w=t(9),v=t.n(w),y=function(e){var a,t,n="";switch(e.icon){case"search":a=f.a,t="search icon";break;case"hike-info":a=g.a,t="hike info";break;case"location":a=h.a,t="location pin icon",n="location";break;case"map":a=k.a,t="map icon";break;case"about":a=v.a,t="bear head";break;default:a=f.a,t="search icon"}return c.a.createElement("li",{className:"menu-item"},c.a.createElement("img",{className:"menu-item-icon "+n,src:a,alt:t}))},L=function(){return c.a.createElement("nav",null,c.a.createElement("ul",{className:"menu"},c.a.createElement(y,{icon:"search"}),c.a.createElement(y,{icon:"hike-info"}),c.a.createElement(y,{icon:"location"}),c.a.createElement(y,{icon:"map"}),c.a.createElement(y,{icon:"about"})))},C=function(){var e=Object(n.useState)({enabled:!1,lat:47.7511,lng:-120.7401,accuracy:0}),a=Object(r.a)(e,2),t=a[0],o=a[1];return navigator.geolocation.watchPosition((function(e){o({enabled:!0,lat:e.coords.latitude,lng:e.coords.longitude,accuracy:e.coords.accuracy})})),c.a.createElement("div",{className:"app"},c.a.createElement(m,null),c.a.createElement(l,{userLocation:t}),c.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.fe30c43a.chunk.js.map