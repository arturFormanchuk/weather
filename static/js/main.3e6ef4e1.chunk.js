(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/img.257f9cf0.png"},,,,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(26),a(13)),o=a(10),i=a(1),m=a.n(i),u=a(2),d=a(14),p=a(15),h=a(19),f=a(17),y=a(44),E=a(43),g=(a(28),a(18)),v=Object(n.createContext)(),k=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){window.localStorage.length&&l(JSON.parse(localStorage.getItem("darkTheme")))}),[]),r.a.createElement(v.Provider,{value:{darkMode:c,changeTheme:function(){localStorage.setItem("darkTheme",!c),l(!c)}}},e.children)},w=function(e){var t=Object(n.useContext)(v);return r.a.createElement("div",{className:t.darkMode?"bodyDark body":"body"},e.children)},N=(a(29),a(30),a(16)),D=a.n(N),x=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"opacity"},r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"city"},r.a.createElement("i",{className:"fas color fa-map-marker-alt"})," ",e.weather.name),r.a.createElement("p",{className:"country"},"City in ",e.country)),r.a.createElement("img",{className:"worldMap",src:D.a,alt:""})))},b=(a(31),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"bodyLeft"},r.a.createElement("div",{className:"top"},r.a.createElement("span",null,r.a.createElement("img",{className:"img",src:"http://openweathermap.org/img/wn/".concat(e.img.icon,"@2x.png"),alt:""}))),r.a.createElement("div",{className:"bottom"},r.a.createElement("p",{className:"grades weight"},Math.round(e.temp),r.a.createElement("span",{className:"grades"},"\xb0\u0421")),r.a.createElement("p",{className:"weatherTitle"},e.img.description))))}),O=(a(32),function(e){var t=Object(n.useContext)(v),a=new Date(1e3*e.day.dt).toString().split(" ");return r.a.createElement("div",{className:"positionOne",onClick:e.onclick},r.a.createElement("div",{key:e.day.dt,className:"".concat(t.darkMode?"bodyOneDark":"bodyOne")},r.a.createElement("div",{className:"leftOne"},r.a.createElement("span",null,r.a.createElement("img",{className:"imgOne",src:"http://openweathermap.org/img/wn/".concat(e.day.weather[0].icon,"@2x.png"),alt:""}))),r.a.createElement("div",{className:t.darkMode?"centerOneDark centerOne ":"centerOne"},r.a.createElement("div",null,r.a.createElement("span",null,a[0])),r.a.createElement("div",null,r.a.createElement("p",null,e.day.weather[0].description))),r.a.createElement("div",{className:"".concat(e.isActive===e.day.dt?"activeColor ".concat(t.darkMode?"rightOneDark":""," rightOne "):"rightOne ".concat(t.darkMode?"rightOneDark":""))},r.a.createElement("p",null,r.a.createElement("span",null,Math.round(e.day.temp.day)),"\xb0 / ",r.a.createElement("span",null,Math.round(e.day.temp.min)),"\xb0"))))}),C=(a(33),function(e){var t=new Date(1e3*e.oneDay.sunrise).toString().split(" "),a=new Date(1e3*e.oneDay.sunset).toString().split(" "),c=Object(n.useContext)(v);return r.a.createElement("div",null,r.a.createElement("div",{className:c.darkMode?"mainInfoBodyDark mainInfoBody":"mainInfoBody"},r.a.createElement("h1",null,"Temperature:"),r.a.createElement("h2",null,"Day: ",r.a.createElement("span",null,e.oneDayTemp.day,"\xb0")),r.a.createElement("h2",null,"Night: ",r.a.createElement("span",null,e.oneDayTemp.night,"\xb0")),r.a.createElement("h2",null,"Evening: ",r.a.createElement("span",null,e.oneDayTemp.eve,"\xb0")),r.a.createElement("h2",null,"Min: ",r.a.createElement("span",null,e.oneDayTemp.min,"\xb0")),r.a.createElement("h2",null,"Max: ",r.a.createElement("span",null,e.oneDayTemp.max,"\xb0")),r.a.createElement("h1",null,"Feels Like:"),r.a.createElement("h2",null,"Day: ",r.a.createElement("span",null,e.oneDayFeels.day,"\xb0")),r.a.createElement("h2",null,"Night: ",r.a.createElement("span",null,e.oneDayFeels.night,"\xb0")),r.a.createElement("h2",null,"Evening: ",r.a.createElement("span",null,e.oneDayFeels.eve,"\xb0")),r.a.createElement("h1",null,"Pressure:"),r.a.createElement("h2",null,e.oneDay.pressure," mm."),r.a.createElement("h1",null,"Wind Speed:"),r.a.createElement("h2",null,e.oneDay.wind_speed," m/s"),r.a.createElement("h1",null,"Sunrise:"),r.a.createElement("h2",null,t[4]),r.a.createElement("h1",null,"Sunset:"),r.a.createElement("h2",null,a[4])))}),S=(a(34),function(e){var t=Object(n.useContext)(v);return r.a.createElement("form",{className:t.darkMode?"formDark form":"form",onSubmit:e.search},r.a.createElement("input",{className:e.mistake?"error":"",type:"search",name:"input",placeholder:"Enter your city"}),r.a.createElement("button",{type:"submit"},"Search"))}),j=(a(35),function(){return r.a.createElement("div",{className:"cssload-container position"},r.a.createElement("div",{className:"cssload-speeding-wheel"}))}),T=(a(36),function(e){var t=Object(n.useContext)(v);return r.a.createElement("div",{className:"positionRightAdd"},e.children,r.a.createElement("form",{className:t.darkMode?"posRightAddDark formAdd":"formAdd",onSubmit:e.addi},r.a.createElement("input",{type:"search",name:"city",placeholder:"Enter your city"}),r.a.createElement("button",{type:"submit"},"Add")))}),M=(a(37),function(e){var t=Object(n.useContext)(v);return r.a.createElement("div",{className:t.darkMode?"OtherDark Other":"Other"},r.a.createElement("div",null,r.a.createElement("div",{className:"absolute",onClick:e.delete},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("div",{className:"otherTop",onClick:e.changeCity},r.a.createElement("div",{className:"otherTopLeft"},r.a.createElement("span",null,r.a.createElement("img",{className:"imgOne",src:"http://openweathermap.org/img/wn/".concat(e.city.weather[0].icon,"@2x.png"),alt:""}))),r.a.createElement("div",{className:t.darkMode?"otherTopCenterDark otherTopCenter":"otherTopCenter"},r.a.createElement("p",null,r.a.createElement("span",null,Math.round(e.city.main.temp)),"\xb0")),r.a.createElement("div",{className:t.darkMode?"otherTopRightDark otherTopRight":"otherTopRight"},r.a.createElement("div",{className:"borderLeft"},r.a.createElement("span",null,e.city.name),r.a.createElement("p",null,e.city.sys.country)))),r.a.createElement("div",{className:"otherBottom"},r.a.createElement("div",{className:"bottomLeft"},r.a.createElement("span",null,"Humidity: ",e.city.main.humidity,"%")),r.a.createElement("div",{className:"bottomLeft"},r.a.createElement("span",null,"Pressure: ",e.city.main.pressure)),r.a.createElement("div",{className:"bottomLeft"},r.a.createElement("span",null,"Wind: ",e.city.wind.speed,"m/s")))))}),L=(a(38),function(e){return r.a.createElement("a",{className:"positionButton",onClick:e.onclick},e.darkMode?r.a.createElement("i",{className:"far fa-sun"}):r.a.createElement("i",{className:"far fa-moon"}))}),A="e0e763316f96e5d778ab8ecf7c95b8f2",F=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={defLat:51.51,defLon:-.13,weather:[],country:null,temp:null,img:[],cord:[],weatherWeek:[],isActive:null,oneDay:[],oneDayTemp:[],oneDayFeels:[],isLoaded:!1,input:null,mistake:!1,locations:[],otherCity:[]},e.getWeather=Object(u.a)(m.a.mark((function t(){var a,n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.state.defLat,"&lon=").concat(e.state.defLon,"&appid=").concat(A,"&units=metric&lang=uk"));case 2:return a=t.sent,t.next=5,a.json();case 5:return n=t.sent,e.setState({weather:n,country:n.sys.country,temp:n.main.temp,img:n.weather[0],cord:n.coord}),t.next=9,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.state.cord.lat,"&lon=").concat(e.state.cord.lon,"&appid=").concat(A,"&units=metric&lang=uk"));case 9:return r=t.sent,t.next=12,r.json();case 12:c=t.sent,e.setState({weatherWeek:c.daily,isActive:c.daily[0].dt,oneDay:c.daily[0],oneDayTemp:c.daily[0].temp,oneDayFeels:c.daily[0].feels_like,isLoaded:!0});case 14:case"end":return t.stop()}}),t)}))),e.changeDay=function(t){e.setState({isActive:t.dt,oneDay:t,oneDayTemp:t.temp,oneDayFeels:t.feels_like})},e.changeCity=function(){var t=Object(u.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({defLat:a.coord.lat,defLon:a.coord.lon,isLoaded:!1});case 2:return t.next=4,e.getWeather();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.search=function(){var t=Object(u.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.elements.input.value,t.next=4,e.setState({input:n,mistake:!1});case 4:e.fetchSearch();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addi=function(){var t=Object(u.a)(m.a.mark((function t(a){var n,r,c,l,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.elements.city.value,r=Object(o.a)(e.state.locations),t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(A,"&units=metric&lang=ua"));case 5:return c=t.sent,t.next=8,c.json();case 8:200===(l=t.sent).cod&&((s=Object(o.a)(e.state.otherCity)).push(l),r.push(l.name),localStorage.setItem("Cities",JSON.stringify(r)),e.setState({otherCity:s,locations:r}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.delete=function(t){var a=e.state.otherCity.filter((function(e){return e!==t})),n=JSON.parse(localStorage.getItem("Cities")).filter((function(e){return e!==t.name}));console.log(n),localStorage.setItem("Cities",JSON.stringify(n)),e.setState({otherCity:a})},e.fetchInCycle=Object(u.a)(m.a.mark((function t(){var a,n,r,c,l,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.locations){t.next=27;break}a=Object(s.a)(e.state.locations),t.prev=2,a.s();case 4:if((n=a.n()).done){t.next=19;break}return r=n.value,t.next=8,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&appid=").concat(A,"&units=metric&lang=ua"));case 8:return c=t.sent,t.next=11,c.json();case 11:return l=t.sent,i=Object(o.a)(e.state.otherCity),t.next=15,i.push(l);case 15:e.setState({otherCity:i}),console.log(e.state.otherCity);case 17:t.next=4;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(2),a.e(t.t0);case 24:return t.prev=24,a.f(),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[2,21,24,27]])}))),e.fetchSearch=Object(u.a)(m.a.mark((function t(){var a,n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.input,"&appid=").concat(A,"&units=metric&lang=ua"));case 3:return a=t.sent,t.next=6,a.json();case 6:return n=t.sent,e.setState({weather:n,country:n.sys.country,temp:n.main.temp,img:n.weather[0],cord:n.coord}),console.log(e.state.cord),t.next=11,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.state.cord.lat,"&lon=").concat(e.state.cord.lon,"&appid=").concat(A,"&units=metric&lang=uk"));case 11:return r=t.sent,t.next=14,r.json();case 14:c=t.sent,e.setState({weatherWeek:c.daily,isActive:c.daily[0].dt,oneDay:c.daily[0],oneDayTemp:c.daily[0].temp,oneDayFeels:c.daily[0].feels_like}),t.next=23;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0),e.setState({mistake:!0}),alert("Error in city name");case 23:case"end":return t.stop()}}),t,null,[[0,18]])}))),e.success=function(){var t=Object(u.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({defLat:a.coords.latitude,defLon:a.coords.longitude});case 2:return t.next=4,e.getWeather();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.errorFunc=function(e){console.log(e)},e}return Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("Cities"));console.log(e),e&&this.setState({locations:e})}},{key:"componentDidMount",value:function(){this.getWeather(),navigator.geolocation.getCurrentPosition(this.success,this.errorFunc),this.fetchInCycle()}},{key:"render",value:function(){var e=this,t=this.context,a=t.darkMode,n=t.changeTheme;return r.a.createElement("div",{className:a?"darkApp App":"App"},this.state.isLoaded?r.a.createElement(w,null,r.a.createElement(L,{onclick:n,darkMode:a}),r.a.createElement(S,{search:this.search,mistake:this.state.mistake}),r.a.createElement(b,{temp:this.state.temp,img:this.state.img}),r.a.createElement(x,{weather:this.state.weather,country:this.state.country}),r.a.createElement("div",{className:"mainB"},r.a.createElement("div",{className:"mainBLeft"},r.a.createElement("h1",{className:a?"textDark leftText":"leftText"},"7 Days ",r.a.createElement("span",null,"Forecast")),this.state.weatherWeek.map((function(t,a){return r.a.createElement(O,{day:t,key:a,index:a,onclick:function(){return e.changeDay(t)},isActive:e.state.isActive})}))),r.a.createElement("div",{className:"mainBCenter"},r.a.createElement("h1",{className:a?"textDark leftText":"leftText"},"Current ",r.a.createElement("span",null,"Forecast")),this.state.isLoaded?r.a.createElement(C,{oneDay:this.state.oneDay,oneDayTemp:this.state.oneDayTemp,oneDayFeels:this.state.oneDayFeels}):""),r.a.createElement("div",{className:"mainBRight"},r.a.createElement(T,{addi:this.addi},r.a.createElement(y.a,null,this.state.otherCity.map((function(t){return r.a.createElement(E.a,{key:t.coord.lat,timeout:500,classNames:"item"},r.a.createElement(M,{city:t,changeCity:function(){return e.changeCity(t)},delete:function(){return e.delete(t)}}))}))))))):r.a.createElement(j,null))}}]),a}(n.Component);F.contextType=v;var W=F;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.3e6ef4e1.chunk.js.map