(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,o){e.exports=o(26)},,,,,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,function(e,t,o){},,,function(e,t,o){"use strict";o.r(t);var n=o(0),s=o(3);const i=["red","blue","green","yellow"],r=[{x:0,y:0,color:i[0]},{x:1,y:0,color:i[0]},{x:0,y:1,color:i[0]},{x:1,y:1,color:i[0]},{x:9,y:0,color:i[1]},{x:10,y:0,color:i[1]},{x:9,y:1,color:i[1]},{x:10,y:1,color:i[1]},{x:9,y:9,color:i[2]},{x:10,y:9,color:i[2]},{x:9,y:10,color:i[2]},{x:10,y:10,color:i[2]},{x:0,y:9,color:i[3]},{x:1,y:9,color:i[3]},{x:0,y:10,color:i[3]},{x:1,y:10,color:i[3]}],l=[{x:0,y:0,color:i[0],type:"base"},{x:1,y:0,color:i[0],type:"base"},{x:0,y:1,color:i[0],type:"base"},{x:1,y:1,color:i[0],type:"base"},{x:9,y:0,color:i[1],type:"base"},{x:10,y:0,color:i[1],type:"base"},{x:9,y:1,color:i[1],type:"base"},{x:10,y:1,color:i[1],type:"base"},{x:9,y:9,color:i[2],type:"base"},{x:10,y:9,color:i[2],type:"base"},{x:9,y:10,color:i[2],type:"base"},{x:10,y:10,color:i[2],type:"base"},{x:0,y:9,color:i[3],type:"base"},{x:1,y:9,color:i[3],type:"base"},{x:0,y:10,color:i[3],type:"base"},{x:1,y:10,color:i[3],type:"base"}],a=[{x:0,y:4,next:"right",type:"start",color:i[0]},{x:1,y:4,next:"right",type:"path"},{x:2,y:4,next:"right",type:"path"},{x:3,y:4,next:"right",type:"path"},{x:4,y:4,next:"up",type:"path"},{x:4,y:3,next:"up",type:"path"},{x:4,y:2,next:"up",type:"path"},{x:4,y:1,next:"up",type:"path"},{x:4,y:0,next:"right",type:"path"},{x:5,y:0,next:"right",type:"path"},{x:6,y:0,next:"down",type:"start",color:i[1]},{x:6,y:1,next:"down",type:"path"},{x:6,y:2,next:"down",type:"path"},{x:6,y:3,next:"down",type:"path"},{x:6,y:4,next:"right",type:"path"},{x:7,y:4,next:"right",type:"path"},{x:8,y:4,next:"right",type:"path"},{x:9,y:4,next:"right",type:"path"},{x:10,y:4,next:"down",type:"path"},{x:10,y:5,next:"down",type:"path"},{x:10,y:6,next:"left",type:"start",color:i[2]},{x:9,y:6,next:"left",type:"path"},{x:8,y:6,next:"left",type:"path"},{x:7,y:6,next:"left",type:"path"},{x:6,y:6,next:"down",type:"path"},{x:6,y:7,next:"down",type:"path"},{x:6,y:8,next:"down",type:"path"},{x:6,y:9,next:"down",type:"path"},{x:6,y:10,next:"left",type:"path"},{x:5,y:10,next:"left",type:"path"},{x:4,y:10,next:"up",type:"start",color:i[3]},{x:4,y:9,next:"up",type:"path"},{x:4,y:8,next:"up",type:"path"},{x:4,y:7,next:"up",type:"path"},{x:4,y:6,next:"left",type:"path"},{x:3,y:6,next:"left",type:"path"},{x:2,y:6,next:"left",type:"path"},{x:1,y:6,next:"left",type:"path"},{x:0,y:6,next:"up",type:"path"},{x:0,y:5,next:"up",type:"path"}],c=[{x:1,y:5,next:"right",color:i[0],type:"finish"},{x:2,y:5,next:"right",color:i[0],type:"finish"},{x:3,y:5,next:"right",color:i[0],type:"finish"},{x:4,y:5,color:i[0],type:"finish"},{x:5,y:1,next:"down",color:i[1],type:"finish"},{x:5,y:2,next:"down",color:i[1],type:"finish"},{x:5,y:3,next:"down",color:i[1],type:"finish"},{x:5,y:4,color:i[1],type:"finish"},{x:9,y:5,next:"left",color:i[2],type:"finish"},{x:8,y:5,next:"left",color:i[2],type:"finish"},{x:7,y:5,next:"left",color:i[2],type:"finish"},{x:6,y:5,color:i[2],type:"finish"},{x:5,y:9,next:"up",color:i[3],type:"finish"},{x:5,y:8,next:"up",color:i[3],type:"finish"},{x:5,y:7,next:"up",color:i[3],type:"finish"},{x:5,y:6,color:i[3],type:"finish"}];o(9);class p extends n.PureComponent{render(){const{children:e}=this.props;return n.createElement("div",{className:"Dialog"},e)}}const h=(e=0,t=1)=>Math.floor(Math.random()*(t-e+1))+e,y=e=>({blue:"blauw",green:"groen",red:"rood",yellow:"geel"})[e],x=e=>e.charAt(0).toUpperCase()+e.slice(1);o(11);class d extends n.PureComponent{render(){const{show:e,activeColor:t,currentAction:o}=this.props;return n.createElement("div",{className:`Help ${e?"visible":"hidden"}`},n.createElement("span",{className:t},x(y(t)))," is aan de beurt.",n.createElement("br",null),"roll die"===o&&"Gooi de dobbelsteen door er op te klikken.","move pawn"===o&&"Verplaats een pion door er op te klikken.")}}class u{constructor(e,t){this.x=e,this.y=t}static equals(e,t){return e.x===t.x&&e.y===t.y}static add(e,t){return new this(e.x+t.x,e.y+t.y)}static subtract(e,t){return new this(e.x-t.x,e.y-t.y)}}var m=o(1),w=o.n(m);o(13);class f extends n.PureComponent{render(){const{x:e,y:t,size:o,next:s,color:i,type:r}=this.props,l="base"===r||"finish"===r?.35:.15,a=o-o*l,c=e=>e*o+o*l*.5,p=w()("Tile",i,{[s]:"path"===r||"start"===r}),h={height:`${100*a}%`,left:`${100*c(e)}%`,top:`${100*c(t)}%`,width:`${100*a}%`};return n.createElement("div",{className:p,style:h})}}o(15);class v extends n.PureComponent{constructor(){super(...arguments),this.handleClick=(()=>{const{click:e,disabled:t}=this.props;t||e(this.props.pawn)})}render(){const{pawn:e,size:t,disabled:o}=this.props,s=t-.3*t,i=e=>e*t+.3*t*.5,r=w()("Pawn",e.color,{disabled:o}),l={height:`${100*s}%`,left:`${100*i(e.x)}%`,top:`${100*i(e.y)}%`,width:`${100*s}%`};return n.createElement("div",{className:r,style:l,onClick:this.handleClick})}}o(17);const g=()=>n.createElement("h1",{className:"Title"},n.createElement("span",{className:"word"},"Karel"),n.createElement("span",{className:"word"},"erger"),n.createElement("span",{className:"word"},"je"),n.createElement("span",{className:"word"},"niet!"));o(19);class b extends n.PureComponent{constructor(e){super(e),this.tileSize=1/e.size}render(){const{tiles:e,pawns:t,pawnClick:o,disabled:s,enabledPawns:i}=this.props;return n.createElement("div",{className:"Board"},n.createElement(g,null),n.createElement("div",{className:"inner"},e.map((e,t)=>n.createElement(f,Object.assign({key:t},e,{size:this.tileSize}))),t.map((e,t)=>n.createElement(v,{key:t,pawn:e,size:this.tileSize,click:o,disabled:s||!i.includes(e)}))))}}o(21);class C extends n.PureComponent{constructor(e){super(e),this.handleClick=(()=>{const{click:e,disabled:t}=this.props;t||(this.setState({style:this.randomStyle()}),e())}),this.state={style:this.randomStyle()}}render(){const{value:e,disabled:t}=this.props,{style:o}=this.state,s=w()("Die",`value-${e}`,{disabled:t});return n.createElement("div",{className:s,style:o,onClick:this.handleClick},n.createElement("div",{className:"dot top-left"}),n.createElement("div",{className:"dot top-right"}),n.createElement("div",{className:"dot center-left"}),n.createElement("div",{className:"dot center"}),n.createElement("div",{className:"dot center-right"}),n.createElement("div",{className:"dot bottom-left"}),n.createElement("div",{className:"dot bottom-right"}))}randomStyle(){return{left:`${h(63,90)}%`,top:`${h(10,85)}%`,transform:`rotate(${h(0,360)}deg)`}}}var k=class extends n.PureComponent{constructor(e){super(e),this.start=(()=>{this.setState({dialog:n.createElement(p,null,n.createElement("h1",null,x(y(this.state.activeColor))," mag beginnen!"),n.createElement("p",null,"Klik op de dobbelsteen om 'm te gooien."),n.createElement("button",{onClick:()=>{this.moveActiveColorToStart(),this.closeDialog(),this.startHelpTimer()}},"Ok"))})}),this.rollDie=(()=>{this.setState({currentAction:"move pawn",die:h(1,6),showHelp:!1},this.startHelpTimer)}),this.moveActiveColorToStart=(()=>{const{pawns:e,activeColor:t}=this.state,o=e.find(({color:e})=>e===t),n=this.updatePawns(e,o,this.startTileOfActiveColor());this.setState({pawns:n})}),this.closeDialog=(()=>{this.setState({dialog:void 0})}),this.updatePawns=((e,t,o)=>{const n=e.findIndex(e=>u.equals(e,t)),s=e[n];return[...e.slice(0,n),Object.assign({},s,o),...e.slice(n+1)]}),this.pawnClick=(e=>{const{die:t}=this.state;let{pawns:o}=this.state;const n="base"===this.tileAt(e).type,s=n?this.startTileOfActiveColor():this.pointAtStepsFrom(e,t),i=o.find(e=>u.equals(e,s));if(i){const e=l.find(e=>e.color===i.color&&!o.some(t=>u.equals(t,e)));o=this.updatePawns(o,i,e)}o=this.updatePawns(o,e,s),this.setState({currentAction:"roll die",pawns:o,showHelp:!1},this.startHelpTimer),n||setTimeout(this.activateNextColor,1500)}),this.activateNextColor=(()=>{this.setState({activeColor:this.nextColor()},()=>{0===this.activePawns().length&&this.moveActiveColorToStart()})}),this.tileAt=(e=>this.state.tiles.find(t=>u.equals(t,e))),this.pointAtStepsFrom=((e,t)=>{if(0===t)return e;const o=this.tileAt(e);if(!o.next){const{x:t,y:n}=o;return console.error(`This tile has no next tile: [${t}, ${n}]`),e}const n={down:new u(0,1),left:new u(-1,0),right:new u(1,0),up:new u(0,-1)},s=u.add(e,n[o.next]);if(u.equals(s,this.startTileOfActiveColor())){const e=Math.min(3,t-1);return this.finishTilesOfActiveColor()[e]}return this.pointAtStepsFrom(s,--t)}),this.startTileOfActiveColor=(()=>{const{activeColor:e}=this.state;return a.find(({type:t,color:o})=>"start"===t&&o===e)}),this.baseTilesOfActiveColor=(()=>{const{activeColor:e}=this.state;return l.filter(({color:t})=>t===e)}),this.finishTilesOfActiveColor=(()=>{const{activeColor:e}=this.state;return c.filter(({color:t})=>t===e)}),this.nextColor=(()=>{const{activeColor:e}=this.state,t=i.findIndex(t=>t===e)+1;return i[t>3?0:t]}),this.activePawns=(()=>{const{pawns:e,activeColor:t,die:o}=this.state,n=e.filter(e=>e.color===t&&a.some(t=>u.equals(t,e)));return 0===n.length?n:6!==o||e.some(e=>e.color===t&&u.equals(e,this.startTileOfActiveColor()))?n:e.filter(e=>this.baseTilesOfActiveColor().some(t=>u.equals(t,e)))}),this.startHelpTimer=(()=>{clearTimeout(this.helpTimeout),this.helpTimeout=setTimeout(()=>{this.setState({showHelp:!0})},5e3)}),this.state={activeColor:i[h(0,3)],currentAction:"roll die",dialog:n.createElement(p,null,n.createElement("h1",null,"Karel erger je niet!"),n.createElement("p",null,"Klik op start hieronder om een willekeurige speler te kiezen die mag beginnen."),n.createElement("button",{onClick:this.start},"Start")),die:h(1,6),pawns:[...r],showHelp:!1,tiles:l.concat(a,c)}}render(){const{tiles:e,pawns:t,die:o,dialog:s,currentAction:i,activeColor:r,showHelp:l}=this.state;return n.createElement(n.Fragment,null,n.createElement(d,{show:l,activeColor:r,currentAction:i}),n.createElement(b,{size:11,tiles:e,pawns:t,pawnClick:this.pawnClick,disabled:"move pawn"!==i,enabledPawns:this.activePawns()}),n.createElement(C,{value:o,click:this.rollDie,disabled:"roll die"!==i}),s)}};o(23);const E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t&&(t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}s.render(n.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/karel-erger-je-niet",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/karel-erger-je-niet/service-worker.js";E?(function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):A(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):A(e)})}}()}],[[4,2,1]]]);
//# sourceMappingURL=main.8684b33e.chunk.js.map