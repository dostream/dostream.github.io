//<script>
//(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//})(window,document,'script','//cache.uchat.co.kr/analytics.js','ga');
//
//ga('create', 'UA-36997031-1', {
//  'cookieDomain': 'none'
//});
//ga('send', 'pageview');
//setInterval(function() { ga('send','event','HeartBeat','60s'); }, 5*60*1000);
(function() { // 네이버 애널리틱스
	var a = document.createElement('script');
	a.src = '//wcs.naver.net/wcslog.js';
	a.onload = function() {
		window.wcs_add=window.wcs_add||{};
		window.wcs_add["wa"] = "ea4c17c705ce9";
		window.wcs_do();
		setTimeout(function() {
			window.wcs_do();
		}, 5*60*1000);
	};
	var b = document.getElementsByTagName('script')[0];
	b.parentNode.insertBefore(a,b);
})();

if(typeof u_chat != 'function')
	var u_chat = function (data) {
		//return document.write('채팅서버 이전작업중. (8시 ~ 11시)');
		//WEB_SOCKET_SWF_LOCATION = 'http://home.uchat.co.kr/'+(Math.floor(Math.random() * 100000000) + 1)+'.swf';
		//WEB_SOCKET_SWF_LOCATION = 'http://uchat.co.kr/uchat/swf/'+(Math.floor(Math.random() * 100000000) + 1)+'.swf';
		//WEB_SOCKET_SWF_LOCATION = 'http://swf.uchat.co.kr/swf/'+(Math.floor(Math.random() * 100000000) + 1)+'.swf';
		WEB_SOCKET_SWF_LOCATION = '//cache.uchat.co.kr/uchat/swf/WebSocketMainInsecure.swf?_='+(Math.floor(Math.random() * 100000000) + 1);
		/*! Socket.IO.js build:0.8.7, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
(function(a,b){var c=a;c.version="0.8.7",c.protocol=1,c.transports=[],c.j=[],c.sockets={},c.connect=function(a,d){var e=c.util.parseUri(a),f,g;b&&b.location&&(e.protocol=e.protocol||b.location.protocol.slice(0,-1),e.host=e.host||(b.document?b.document.domain:b.location.hostname),e.port=e.port||b.location.port),f=c.util.uniqueUri(e);var h={host:e.host,secure:"https"==e.protocol,port:e.port||("https"==e.protocol?443:80),query:e.query||""};c.util.merge(h,d);if(h["force new connection"]||!c.sockets[f])g=new c.Socket(h);!h["force new connection"]&&g&&(c.sockets[f]=g),g=g||c.sockets[f];return g.of(e.path.length>1?e.path:"")}})("object"==typeof module?module.exports:this.io={},this),function(a,b){var c=a.util={},d=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];c.parseUri=function(a){var b=d.exec(a||""),c={},f=14;while(f--)c[e[f]]=b[f]||"";return c},c.uniqueUri=function(a){var c=a.protocol,d=a.host,e=a.port;"document"in b?(d=d||document.domain,e=e||(c=="https"&&document.location.protocol!=="https:"?443:document.location.port)):(d=d||"localhost",!e&&c=="https"&&(e=443));return(c||"http")+"://"+d+":"+(e||80)},c.query=function(a,b){var d=c.chunkQuery(a||""),e=[];c.merge(d,c.chunkQuery(b||""));for(var f in d)d.hasOwnProperty(f)&&e.push(f+"="+d[f]);return e.length?"?"+e.join("&"):""},c.chunkQuery=function(a){var b={},c=a.split("&"),d=0,e=c.length,f;for(;d<e;++d)f=c[d].split("="),f[0]&&(b[f[0]]=decodeURIComponent(f[1]));return b};var f=!1;c.load=function(a){if("document"in b&&document.readyState==="complete"||f)return a();c.on(b,"load",a,!1)},c.on=function(a,b,c,d){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,d)},c.request=function(a){if(a&&"undefined"!=typeof XDomainRequest)return new XDomainRequest;if("undefined"!=typeof XMLHttpRequest&&(!a||c.ua.hasCORS))return new XMLHttpRequest;if(!a)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(b){}return null},"undefined"!=typeof window&&c.load(function(){f=!0}),c.defer=function(a){if(!c.ua.webkit||"undefined"!=typeof importScripts)return a();c.load(function(){setTimeout(a,100)})},c.merge=function g(a,b,d,e){var f=e||[],g=typeof d=="undefined"?2:d,h;for(h in b)b.hasOwnProperty(h)&&c.indexOf(f,h)<0&&(typeof a[h]!="object"||!g?(a[h]=b[h],f.push(b[h])):c.merge(a[h],b[h],g-1,f));return a},c.mixin=function(a,b){c.merge(a.prototype,b.prototype)},c.inherit=function(a,b){function c(){}c.prototype=b.prototype,a.prototype=new c},c.isArray=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"},c.intersect=function(a,b){var d=[],e=a.length>b.length?a:b,f=a.length>b.length?b:a;for(var g=0,h=f.length;g<h;g++)~c.indexOf(e,f[g])&&d.push(f[g]);return d},c.indexOf=function(a,b,c){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b,c);for(var d=a.length,c=c<0?c+d<0?0:c+d:c||0;c<d&&a[c]!==b;c++);return d<=c?-1:c},c.toArray=function(a){var b=[];for(var c=0,d=a.length;c<d;c++)b.push(a[c]);return b},c.ua={},c.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&function(){try{var a=new XMLHttpRequest}catch(b){return!1}return a.withCredentials!=undefined}(),c.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent)}("undefined"!=typeof io?io:module.exports,this),function(a,b){function c(){}a.EventEmitter=c,c.prototype.on=function(a,c){this.$events||(this.$events={}),this.$events[a]?b.util.isArray(this.$events[a])?this.$events[a].push(c):this.$events[a]=[this.$events[a],c]:this.$events[a]=c;return this},c.prototype.addListener=c.prototype.on,c.prototype.once=function(a,b){function d(){c.removeListener(a,d),b.apply(this,arguments)}var c=this;d.listener=b,this.on(a,d);return this},c.prototype.removeListener=function(a,c){if(this.$events&&this.$events[a]){var d=this.$events[a];if(b.util.isArray(d)){var e=-1;for(var f=0,g=d.length;f<g;f++)if(d[f]===c||d[f].listener&&d[f].listener===c){e=f;break}if(e<0)return this;d.splice(e,1),d.length||delete this.$events[a]}else(d===c||d.listener&&d.listener===c)&&delete this.$events[a]}return this},c.prototype.removeAllListeners=function(a){this.$events&&this.$events[a]&&(this.$events[a]=null);return this},c.prototype.listeners=function(a){this.$events||(this.$events={}),this.$events[a]||(this.$events[a]=[]),b.util.isArray(this.$events[a])||(this.$events[a]=[this.$events[a]]);return this.$events[a]},c.prototype.emit=function(a){if(!this.$events)return!1;var c=this.$events[a];if(!c)return!1;var d=Array.prototype.slice.call(arguments,1);if("function"==typeof c)c.apply(this,d);else{if(!b.util.isArray(c))return!1;var e=c.slice();for(var f=0,g=e.length;f<g;f++)e[f].apply(this,d)}return!0}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(exports,nativeJSON){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i instanceof Date&&(i=date(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function date(a,b){return isFinite(a.valueOf())?a.getUTCFullYear()+"-"+f(a.getUTCMonth()+1)+"-"+f(a.getUTCDate())+"T"+f(a.getUTCHours())+":"+f(a.getUTCMinutes())+":"+f(a.getUTCSeconds())+"Z":null}function f(a){return a<10?"0"+a:a}"use strict";if(nativeJSON&&nativeJSON.parse)return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON=exports.JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")},JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}("undefined"!=typeof io?io:module.exports,undefined),function(a,b){var c=a.parser={},d=c.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],e=c.reasons=["transport not supported","client not handshaken","unauthorized"],f=c.advice=["reconnect"],g=b.JSON,h=b.util.indexOf;c.encodePacket=function(a){var b=h(d,a.type),c=a.id||"",i=a.endpoint||"",j=a.ack,k=null;switch(a.type){case"error":var l=a.reason?h(e,a.reason):"",m=a.advice?h(f,a.advice):"";if(l!==""||m!=="")k=l+(m!==""?"+"+m:"");break;case"message":a.data!==""&&(k=a.data);break;case"event":var n={name:a.name};a.args&&a.args.length&&(n.args=a.args),k=g.stringify(n);break;case"json":k=g.stringify(a.data);break;case"connect":a.qs&&(k=a.qs);break;case"ack":k=a.ackId+(a.args&&a.args.length?"+"+g.stringify(a.args):"")}var o=[b,c+(j=="data"?"+":""),i];k!==null&&k!==undefined&&o.push(k);return o.join(":")},c.encodePayload=function(a){var b="";if(a.length==1)return a[0];for(var c=0,d=a.length;c<d;c++){var e=a[c];b+="\ufffd"+e.length+"\ufffd"+a[c]}return b};var i=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;c.decodePacket=function(a){var b=a.match(i);if(!b)return{};var c=b[2]||"",a=b[5]||"",h={type:d[b[1]],endpoint:b[4]||""};c&&(h.id=c,b[3]?h.ack="data":h.ack=!0);switch(h.type){case"error":var b=a.split("+");h.reason=e[b[0]]||"",h.advice=f[b[1]]||"";break;case"message":h.data=a||"";break;case"event":try{var j=g.parse(a);h.name=j.name,h.args=j.args}catch(k){}h.args=h.args||[];break;case"json":try{h.data=g.parse(a)}catch(k){}break;case"connect":h.qs=a||"";break;case"ack":var b=a.match(/^([0-9]+)(\+)?(.*)/);if(b){h.ackId=b[1],h.args=[];if(b[3])try{h.args=b[3]?g.parse(b[3]):[]}catch(k){}}break;case"disconnect":case"heartbeat":}return h},c.decodePayload=function(a){if(a.charAt(0)=="\ufffd"){var b=[];for(var d=1,e="";d<a.length;d++)a.charAt(d)=="\ufffd"?(b.push(c.decodePacket(a.substr(d+1).substr(0,e))),d+=Number(e)+1,e=""):e+=a.charAt(d);return b}return[c.decodePacket(a)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b){function c(a,b){this.socket=a,this.sessid=b}a.Transport=c,b.util.mixin(c,b.EventEmitter),c.prototype.onData=function(a){this.clearCloseTimeout(),(this.connected||this.connecting||this.reconnecting)&&this.setCloseTimeout();if(a!==""){var c=b.parser.decodePayload(a);if(c&&c.length)for(var d=0,e=c.length;d<e;d++)this.onPacket(c[d])}return this},c.prototype.onPacket=function(a){if(a.type=="heartbeat")return this.onHeartbeat();a.type=="connect"&&a.endpoint==""&&this.onConnect(),this.socket.onPacket(a);return this},c.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var a=this;this.closeTimeout=setTimeout(function(){a.onDisconnect()},this.socket.closeTimeout)}},c.prototype.onDisconnect=function(){this.close&&this.open&&this.close(),this.clearTimeouts(),this.socket.onDisconnect();return this},c.prototype.onConnect=function(){this.socket.onConnect();return this},c.prototype.clearCloseTimeout=function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},c.prototype.clearTimeouts=function(){this.clearCloseTimeout(),this.reopenTimeout&&clearTimeout(this.reopenTimeout)},c.prototype.packet=function(a){this.send(b.parser.encodePacket(a))},c.prototype.onHeartbeat=function(a){this.packet({type:"heartbeat"})},c.prototype.onOpen=function(){this.open=!0,this.clearCloseTimeout(),this.socket.onOpen()},c.prototype.onClose=function(){var a=this;this.open=!1,this.socket.onClose(),this.onDisconnect()},c.prototype.prepareUrl=function(){var a=this.socket.options;return this.scheme()+"://"+a.host+":"+a.port+"/"+a.resource+"/"+b.protocol+"/"+this.name+"/"+this.sessid},c.prototype.ready=function(a,b){b.call(this)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function e(){}function d(a){this.options={port:80,secure:!1,document:"document"in c?document:!1,resource:"socket.io",transports:b.transports,"connect timeout":1e4,"try multiple transports":!0,reconnect:!0,"reconnection delay":500,"reconnection limit":Infinity,"reopen delay":3e3,"max reconnection attempts":10,"sync disconnect on unload":!0,"auto connect":!0,"flash policy port":843},b.util.merge(this.options,a),this.connected=!1,this.open=!1,this.connecting=!1,this.reconnecting=!1,this.namespaces={},this.buffer=[],this.doBuffer=!1;if(this.options["sync disconnect on unload"]&&(!this.isXDomain()||b.util.ua.hasCORS)){var d=this;b.util.on(c,"beforeunload",function(){d.disconnectSync()},!1)}this.options["auto connect"]&&this.connect()}a.Socket=d,b.util.mixin(d,b.EventEmitter),d.prototype.of=function(a){this.namespaces[a]||(this.namespaces[a]=new b.SocketNamespace(this,a),a!==""&&this.namespaces[a].packet({type:"connect"}));return this.namespaces[a]},d.prototype.publish=function(){this.emit.apply(this,arguments);var a;for(var b in this.namespaces)this.namespaces.hasOwnProperty(b)&&(a=this.of(b),a.$emit.apply(a,arguments))},d.prototype.handshake=function(a){function f(b){b instanceof Error?c.onError(b.message):a.apply(null,b.split(":"))}var c=this,d=this.options,g=["http"+(d.secure?"s":"")+":/",d.host+":"+d.port,d.resource,b.protocol,b.util.query(this.options.query,"t="+ +(new Date))].join("/");if(this.isXDomain()&&!b.util.ua.hasCORS){var h=document.getElementsByTagName("script")[0],i=document.createElement("script");i.src=g+"&jsonp="+b.j.length,h.parentNode.insertBefore(i,h),b.j.push(function(a){f(a),i.parentNode.removeChild(i)})}else{var j=b.util.request();j.open("GET",g,!0),j.onreadystatechange=function(){j.readyState==4&&(j.onreadystatechange=e,j.status==200?f(j.responseText):!c.reconnecting&&c.onError(j.responseText))},j.send(null)}},d.prototype.getTransport=function(a){var c=a||this.transports,d;for(var e=0,f;f=c[e];e++)if(b.Transport[f]&&b.Transport[f].check(this)&&(!this.isXDomain()||b.Transport[f].xdomainCheck()))return new b.Transport[f](this,this.sessionid);return null},d.prototype.connect=function(a){if(this.connecting)return this;var c=this;this.handshake(function(d,e,f,g){function h(a){c.transport&&c.transport.clearTimeouts(),c.transport=c.getTransport(a);if(!c.transport)return c.publish("connect_failed");c.transport.ready(c,function(){c.connecting=!0,c.publish("connecting",c.transport.name),c.transport.open(),c.options["connect timeout"]&&(c.connectTimeoutTimer=setTimeout(function(){if(!c.connected){c.connecting=!1;if(c.options["try multiple transports"]){c.remainingTransports||(c.remainingTransports=c.transports.slice(0));var a=c.remainingTransports;while(a.length>0&&a.splice(0,1)[0]!=c.transport.name);a.length?h(a):c.publish("connect_failed")}}},c.options["connect timeout"]))})}c.sessionid=d,c.closeTimeout=f*1e3,c.heartbeatTimeout=e*1e3,c.transports=b.util.intersect(g.split(","),c.options.transports),h(),c.once("connect",function(){clearTimeout(c.connectTimeoutTimer),a&&typeof a=="function"&&a()})});return this},d.prototype.packet=function(a){this.connected&&!this.doBuffer?this.transport.packet(a):this.buffer.push(a);return this},d.prototype.setBuffer=function(a){this.doBuffer=a,!a&&this.connected&&this.buffer.length&&(this.transport.payload(this.buffer),this.buffer=[])},d.prototype.disconnect=function(){this.connected&&(this.open&&this.of("").packet({type:"disconnect"}),this.onDisconnect("booted"));return this},d.prototype.disconnectSync=function(){var a=b.util.request(),c=this.resource+"/"+b.protocol+"/"+this.sessionid;a.open("GET",c,!0),this.onDisconnect("booted")},d.prototype.isXDomain=function(){var a=c.location.port||("https:"==c.location.protocol?443:80);return this.options.host!==c.location.hostname||this.options.port!=a},d.prototype.onConnect=function(){this.connected||(this.connected=!0,this.connecting=!1,this.doBuffer||this.setBuffer(!1),this.emit("connect"))},d.prototype.onOpen=function(){this.open=!0},d.prototype.onClose=function(){this.open=!1},d.prototype.onPacket=function(a){this.of(a.endpoint).onPacket(a)},d.prototype.onError=function(a){a&&a.advice&&a.advice==="reconnect"&&this.connected&&(this.disconnect(),this.reconnect()),this.publish("error",a&&a.reason?a.reason:a)},d.prototype.onDisconnect=function(a){var b=this.connected;this.connected=!1,this.connecting=!1,this.open=!1,b&&(this.transport.close(),this.transport.clearTimeouts(),this.publish("disconnect",a),"booted"!=a&&this.options.reconnect&&!this.reconnecting&&this.reconnect())},d.prototype.reconnect=function(){function f(){if(!!a.reconnecting){if(a.connected)return e();if(a.connecting&&a.reconnecting)return a.reconnectionTimer=setTimeout(f,1e3);a.reconnectionAttempts++>=b?a.redoTransports?(a.publish("reconnect_failed"),e()):(a.on("connect_failed",f),a.options["try multiple transports"]=!0,a.transport=a.getTransport(),a.redoTransports=!0,a.connect()):(a.reconnectionDelay<d&&(a.reconnectionDelay*=2),a.connect(),a.publish("reconnecting",a.reconnectionDelay,a.reconnectionAttempts),a.reconnectionTimer=setTimeout(f,a.reconnectionDelay))}}function e(){if(a.connected){for(var b in a.namespaces)a.namespaces.hasOwnProperty(b)&&""!==b&&a.namespaces[b].packet({type:"connect"});a.publish("reconnect",a.transport.name,a.reconnectionAttempts)}a.removeListener("connect_failed",f),a.removeListener("connect",f),a.reconnecting=!1,delete a.reconnectionAttempts,delete a.reconnectionDelay,delete a.reconnectionTimer,delete a.redoTransports,a.options["try multiple transports"]=c}this.reconnecting=!0,this.reconnectionAttempts=0,this.reconnectionDelay=this.options["reconnection delay"];var a=this,b=this.options["max reconnection attempts"],c=this.options["try multiple transports"],d=this.options["reconnection limit"];this.options["try multiple transports"]=!1,this.reconnectionTimer=setTimeout(f,this.reconnectionDelay),this.on("connect",f)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function d(a,b){this.namespace=a,this.name=b}function c(a,b){this.socket=a,this.name=b||"",this.flags={},this.json=new d(this,"json"),this.ackPackets=0,this.acks={}}a.SocketNamespace=c,b.util.mixin(c,b.EventEmitter),c.prototype.$emit=b.EventEmitter.prototype.emit,c.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)},c.prototype.packet=function(a){a.endpoint=this.name,this.socket.packet(a),this.flags={};return this},c.prototype.send=function(a,b){var c={type:this.flags.json?"json":"message",data:a};"function"==typeof b&&(c.id=++this.ackPackets,c.ack=!0,this.acks[c.id]=b);return this.packet(c)},c.prototype.emit=function(a){var b=Array.prototype.slice.call(arguments,1),c=b[b.length-1],d={type:"event",name:a};"function"==typeof c&&(d.id=++this.ackPackets,d.ack="data",this.acks[d.id]=c,b=b.slice(0,b.length-1)),d.args=b;return this.packet(d)},c.prototype.disconnect=function(){this.name===""?this.socket.disconnect():(this.packet({type:"disconnect"}),this.$emit("disconnect"));return this},c.prototype.onPacket=function(a){function d(){c.packet({type:"ack",args:b.util.toArray(arguments),ackId:a.id})}var c=this;switch(a.type){case"connect":this.$emit("connect");break;case"disconnect":this.name===""?this.socket.onDisconnect(a.reason||"booted"):this.$emit("disconnect",a.reason);break;case"message":case"json":var e=["message",a.data];a.ack=="data"?e.push(d):a.ack&&this.packet({type:"ack",ackId:a.id}),this.$emit.apply(this,e);break;case"event":var e=[a.name].concat(a.args);a.ack=="data"&&e.push(d),this.$emit.apply(this,e);break;case"ack":this.acks[a.ackId]&&(this.acks[a.ackId].apply(this,a.args),delete this.acks[a.ackId]);break;case"error":a.advice?this.socket.onError(a):a.reason=="unauthorized"?this.$emit("connect_failed",a.reason):this.$emit("error",a.reason)}},d.prototype.send=function(){this.namespace.flags[this.name]=!0,this.namespace.send.apply(this.namespace,arguments)},d.prototype.emit=function(){this.namespace.flags[this.name]=!0,this.namespace.emit.apply(this.namespace,arguments)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(a){b.Transport.apply(this,arguments)}a.websocket=d,b.util.inherit(d,b.Transport),d.prototype.name="websocket",d.prototype.open=function(){var a=b.util.query(this.socket.options.query),d=this,e;e||(e=c.MozWebSocket||c.WebSocket),this.websocket=new e(this.prepareUrl()+a),this.websocket.onopen=function(){d.send('');d.onOpen(),d.socket.setBuffer(!1)},this.websocket.onmessage=function(a){d.onData(a.data)},this.websocket.onclose=function(){d.onClose(),d.socket.setBuffer(!0)},this.websocket.onerror=function(a){d.onError(a)};return this},d.prototype.send=function(a){this.websocket.send(a);return this},d.prototype.payload=function(a){for(var b=0,c=a.length;b<c;b++)this.packet(a[b]);return this},d.prototype.close=function(){this.websocket.close();return this},d.prototype.onError=function(a){this.socket.onError(a)},d.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"},d.check=function(){return"WebSocket"in c&&!("__addTask"in WebSocket)||"MozWebSocket"in c},d.xdomainCheck=function(){return!0},b.transports.push("websocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(){b.Transport.websocket.apply(this,arguments)}a.flashsocket=c,b.util.inherit(c,b.Transport.websocket),c.prototype.name="flashsocket",c.prototype.open=function(){var a=this,c=arguments;WebSocket.__addTask(function(){b.Transport.websocket.prototype.open.apply(a,c)});return this},c.prototype.send=function(){var a=this,c=arguments;WebSocket.__addTask(function(){b.Transport.websocket.prototype.send.apply(a,c)});return this},c.prototype.close=function(){WebSocket.__tasks.length=0,b.Transport.websocket.prototype.close.call(this);return this},c.prototype.ready=function(a,d){function e(){var b=a.options,e=b["flash policy port"],g=["http"+(b.secure?"s":"")+":/",b.host+":"+b.port,b.resource,"static/flashsocket","WebSocketMain"+(a.isXDomain()?"Insecure":"")+".swf"];c.loaded||(typeof WEB_SOCKET_SWF_LOCATION=="undefined"&&(WEB_SOCKET_SWF_LOCATION=g.join("/")),e!==843&&WebSocket.loadFlashPolicyFile("xmlsocket://"+b.host+":"+e),WebSocket.__initialize(),c.loaded=!0),d.call(f)}var f=this;if(document.body)return e();b.util.load(e)},c.check=function(){return typeof WebSocket!="undefined"&&"__initialize"in WebSocket&&!!swfobject?swfobject.getFlashPlayerVersion().major>=10:!1},c.xdomainCheck=function(){return!0},typeof window!="undefined"&&(WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0),b.transports.push("flashsocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports);if("undefined"!=typeof window)var swfobject=function(){function V(b){var c=/[\\\"<>\.;]/,d=c.exec(b)!=null;return d&&typeof encodeURIComponent!=a?encodeURIComponent(b):b}function U(a,b){if(!!x){var c=b?"visible":"hidden";t&&P(a)?P(a).style.visibility=c:T("#"+a,"visibility:"+c)}}function T(c,d,e,f){if(!y.ie||!y.mac){var g=i.getElementsByTagName("head")[0];if(!g)return;var h=e&&typeof e=="string"?e:"screen";f&&(v=null,w=null);if(!v||w!=h){var j=Q("style");j.setAttribute("type","text/css"),j.setAttribute("media",h),v=g.appendChild(j),y.ie&&y.win&&typeof i.styleSheets!=a&&i.styleSheets.length>0&&(v=i.styleSheets[i.styleSheets.length-1]),w=h}y.ie&&y.win?v&&typeof v.addRule==b&&v.addRule(c,d):v&&typeof i.createTextNode!=a&&v.appendChild(i.createTextNode(c+" {"+d+"}"))}}function S(a){var b=y.pv,c=a.split(".");c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0;return b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function R(a,b,c){a.attachEvent(b,c),o[o.length]=[a,b,c]}function Q(a){return i.createElement(a)}function P(a){var b=null;try{b=i.getElementById(a)}catch(c){}return b}function O(a){var b=P(a);if(b){for(var c in b)typeof b[c]=="function"&&(b[c]=null);b.parentNode.removeChild(b)}}function N(a){var b=P(a);b&&b.nodeName=="OBJECT"&&(y.ie&&y.win?(b.style.display="none",function(){b.readyState==4?O(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function M(a,b,c){var d=Q("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function L(c,d,f){var g,h=P(f);if(y.wk&&y.wk<312)return g;if(h){typeof c.id==a&&(c.id=f);if(y.ie&&y.win){var i="";for(var j in c)c[j]!=Object.prototype[j]&&(j.toLowerCase()=="data"?d.movie=c[j]:j.toLowerCase()=="styleclass"?i+=' class="'+c[j]+'"':j.toLowerCase()!="classid"&&(i+=" "+j+'="'+c[j]+'"'));var k="";for(var l in d)d[l]!=Object.prototype[l]&&(k+='<param name="'+l+'" value="'+d[l]+'" />');h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+k+"</object>",n[n.length]=c.id,g=P(c.id)}else{var m=Q(b);m.setAttribute("type",e);for(var o in c)c[o]!=Object.prototype[o]&&(o.toLowerCase()=="styleclass"?m.setAttribute("class",c[o]):o.toLowerCase()!="classid"&&m.setAttribute(o,c[o]));for(var p in d)d[p]!=Object.prototype[p]&&p.toLowerCase()!="movie"&&M(m,p,d[p]);h.parentNode.replaceChild(m,h),g=m}}return g}function K(a){var c=Q("div");if(y.win&&y.ie)c.innerHTML=a.innerHTML;else{var d=a.getElementsByTagName(b)[0];if(d){var e=d.childNodes;if(e){var f=e.length;for(var g=0;g<f;g++)(e[g].nodeType!=1||e[g].nodeName!="PARAM")&&e[g].nodeType!=8&&c.appendChild(e[g].cloneNode(!0))}}}return c}function J(a){if(y.ie&&y.win&&a.readyState!=4){var b=Q("div");a.parentNode.insertBefore(b,a),b.parentNode.replaceChild(K(a),b),a.style.display="none",function(){a.readyState==4?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}else a.parentNode.replaceChild(K(a),a)}function I(b,c,d,e){u=!0,r=e||null,s={success:!1,id:d};var g=P(d);if(g){g.nodeName=="OBJECT"?(p=K(g),q=null):(p=g,q=d),b.id=f;if(typeof b.width==a||!/%$/.test(b.width)&&parseInt(b.width,10)<310)b.width="310";if(typeof b.height==a||!/%$/.test(b.height)&&parseInt(b.height,10)<137)b.height="137";i.title=i.title.slice(0,47)+" - Flash Player Installation";var j=y.ie&&y.win?"ActiveX":"PlugIn",k="MMredirectURL="+h.location.toString().replace(/&/g,"%26")+"&MMplayerType="+j+"&MMdoctitle="+i.title;typeof c.flashvars!=a?c.flashvars+="&"+k:c.flashvars=k;if(y.ie&&y.win&&g.readyState!=4){var l=Q("div");d+="SWFObjectNew",l.setAttribute("id",d),g.parentNode.insertBefore(l,g),g.style.display="none",function(){g.readyState==4?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}()}L(b,c,d)}}function H(){return!u&&S("6.0.65")&&(y.win||y.mac)&&!(y.wk&&y.wk<312)}function G(c){var d=null,e=P(c);if(e&&e.nodeName=="OBJECT")if(typeof e.SetVariable!=a)d=e;else{var f=e.getElementsByTagName(b)[0];f&&(d=f)}return d}function F(){var b=m.length;if(b>0)for(var c=0;c<b;c++){var d=m[c].id,e=m[c].callbackFn,f={success:!1,id:d};if(y.pv[0]>0){var g=P(d);if(g)if(S(m[c].swfVersion)&&!(y.wk&&y.wk<312))U(d,!0),e&&(f.success=!0,f.ref=G(d),e(f));else if(m[c].expressInstall&&H()){var h={};h.data=m[c].expressInstall,h.width=g.getAttribute("width")||"0",h.height=g.getAttribute("height")||"0",g.getAttribute("class")&&(h.styleclass=g.getAttribute("class")),g.getAttribute("align")&&(h.align=g.getAttribute("align"));var i={},j=g.getElementsByTagName("param"),k=j.length;for(var l=0;l<k;l++)j[l].getAttribute("name").toLowerCase()!="movie"&&(i[j[l].getAttribute("name")]=j[l].getAttribute("value"));I(h,i,d,e)}else J(g),e&&e(f)}else{U(d,!0);if(e){var n=G(d);n&&typeof n.SetVariable!=a&&(f.success=!0,f.ref=n),e(f)}}}}function E(){var c=i.getElementsByTagName("body")[0],d=Q(b);d.setAttribute("type",e);var f=c.appendChild(d);if(f){var g=0;(function(){if(typeof f.GetVariable!=a){var b=f.GetVariable("$version");b&&(b=b.split(" ")[1].split(","),y.pv=[parseInt(b[0],10),parseInt(b[1],10),parseInt(b[2],10)])}else if(g<10){g++,setTimeout(arguments.callee,10);return}c.removeChild(d),f=null,F()})()}else F()}function D(){k?E():F()}function C(b){if(typeof h.addEventListener!=a)h.addEventListener("load",b,!1);else if(typeof i.addEventListener!=a)i.addEventListener("load",b,!1);else if(typeof h.attachEvent!=a)R(h,"onload",b);else if(typeof h.onload=="function"){var c=h.onload;h.onload=function(){c(),b()}}else h.onload=b}function B(a){t?a():l[l.length]=a}function A(){if(!t){try{var a=i.getElementsByTagName("body")[0].appendChild(Q("span"));a.parentNode.removeChild(a)}catch(b){return}t=!0;var c=l.length;for(var d=0;d<c;d++)l[d]()}}var a="undefined",b="object",c="Shockwave Flash",d="ShockwaveFlash.ShockwaveFlash",e="application/x-shockwave-flash",f="SWFObjectExprInst",g="onreadystatechange",h=window,i=document,j=navigator,k=!1,l=[D],m=[],n=[],o=[],p,q,r,s,t=!1,u=!1,v,w,x=!0,y=function(){var f=typeof i.getElementById!=a&&typeof i.getElementsByTagName!=a&&typeof i.createElement!=a,g=j.userAgent.toLowerCase(),l=j.platform.toLowerCase(),m=l?/win/.test(l):/win/.test(g),n=l?/mac/.test(l):/mac/.test(g),o=/webkit/.test(g)?parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,p=!1,q=[0,0,0],r=null;if(typeof j.plugins!=a&&typeof j.plugins[c]==b)r=j.plugins[c].description,r&&(typeof j.mimeTypes==a||!j.mimeTypes[e]||!!j.mimeTypes[e].enabledPlugin)&&(k=!0,p=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),q[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),q[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),q[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof h.ActiveXObject!=a)try{var s=new ActiveXObject(d);s&&(r=s.GetVariable("$version"),r&&(p=!0,r=r.split(" ")[1].split(","),q=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:f,pv:q,wk:o,ie:p,win:m,mac:n}}(),z=function(){!y.w3||((typeof i.readyState!=a&&i.readyState=="complete"||typeof i.readyState==a&&(i.getElementsByTagName("body")[0]||i.body))&&A(),t||(typeof i.addEventListener!=a&&i.addEventListener("DOMContentLoaded",A,!1),y.ie&&y.win&&(i.attachEvent(g,function(){i.readyState=="complete"&&(i.detachEvent(g,arguments.callee),A())}),h==top&&function(){if(!t){try{i.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}A()}}()),y.wk&&function(){if(!t){if(!/loaded|complete/.test(i.readyState)){setTimeout(arguments.callee,0);return}A()}}(),C(A)))}(),W=function(){y.ie&&y.win&&window.attachEvent("onunload",function(){var a=o.length;for(var b=0;b<a;b++)o[b][0].detachEvent(o[b][1],o[b][2]);var c=n.length;for(var d=0;d<c;d++)N(n[d]);for(var e in y)y[e]=null;y=null;for(var f in swfobject)swfobject[f]=null;swfobject=null})}();return{registerObject:function(a,b,c,d){if(y.w3&&a&&b){var e={};e.id=a,e.swfVersion=b,e.expressInstall=c,e.callbackFn=d,m[m.length]=e,U(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){if(y.w3)return G(a)},embedSWF:function(c,d,e,f,g,h,i,j,k,l){var m={success:!1,id:d};y.w3&&!(y.wk&&y.wk<312)&&c&&d&&e&&f&&g?(U(d,!1),B(function(){e+="",f+="";var n={};if(k&&typeof k===b)for(var o in k)n[o]=k[o];n.data=c,n.width=e,n.height=f;var p={};if(j&&typeof j===b)for(var q in j)p[q]=j[q];if(i&&typeof i===b)for(var r in i)typeof p.flashvars!=a?p.flashvars+="&"+r+"="+i[r]:p.flashvars=r+"="+i[r];if(S(g)){var s=L(n,p,d);n.id==d&&U(d,!0),m.success=!0,m.ref=s}else{if(h&&H()){n.data=h,I(n,p,d,l);return}U(d,!0)}l&&l(m)})):l&&l(m)},switchOffAutoHideShow:function(){x=!1},ua:y,getFlashPlayerVersion:function(){return{major:y.pv[0],minor:y.pv[1],release:y.pv[2]}},hasFlashPlayerVersion:S,createSWF:function(a,b,c){return y.w3?L(a,b,c):undefined},showExpressInstall:function(a,b,c,d){y.w3&&H()&&I(a,b,c,d)},removeSWF:function(a){y.w3&&N(a)},createCSS:function(a,b,c,d){y.w3&&T(a,b,c,d)},addDomLoadEvent:B,addLoadEvent:C,getQueryParamValue:function(a){var b=i.location.search||i.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return V(b);var c=b.split("&");for(var d=0;d<c.length;d++)if(c[d].substring(0,c[d].indexOf("="))==a)return V(c[d].substring(c[d].indexOf("=")+1))}return""},expressInstallCallback:function(){if(u){var a=P(f);a&&p&&(a.parentNode.replaceChild(p,a),q&&(U(q,!0),y.ie&&y.win&&(p.style.display="block")),r&&r(s)),u=!1}}}}();(function(){if("undefined"!=typeof window && !window.WebSocket){var a=window.console;if(!a||!a.log||!a.error)a={log:function(){},error:function(){}};if(!swfobject.hasFlashPlayerVersion("10.0.0")){a.error("Flash Player >= 10.0.0 is required.");return}location.protocol=="file:"&&a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),WebSocket=function(a,b,c,d,e){var f=this;f.__id=WebSocket.__nextId++,WebSocket.__instances[f.__id]=f,f.readyState=WebSocket.CONNECTING,f.bufferedAmount=0,f.__events={},b?typeof b=="string"&&(b=[b]):b=[],setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(f.__id,a,b,c||null,d||0,e||null)})},0)},WebSocket.prototype.send=function(a){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var b=WebSocket.__flash.send(this.__id,encodeURIComponent(a));if(b<0)return!0;this.bufferedAmount+=b;return!1},WebSocket.prototype.close=function(){this.readyState!=WebSocket.CLOSED&&this.readyState!=WebSocket.CLOSING&&(this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id))},WebSocket.prototype.addEventListener=function(a,b,c){a in this.__events||(this.__events[a]=[]),this.__events[a].push(b)},WebSocket.prototype.removeEventListener=function(a,b,c){if(a in this.__events){var d=this.__events[a];for(var e=d.length-1;e>=0;--e)if(d[e]===b){d.splice(e,1);break}}},WebSocket.prototype.dispatchEvent=function(a){var b=this.__events[a.type]||[];for(var c=0;c<b.length;++c)b[c](a);var d=this["on"+a.type];d&&d(a)},WebSocket.prototype.__handleEvent=function(a){"readyState"in a&&(this.readyState=a.readyState),"protocol"in a&&(this.protocol=a.protocol);var b;if(a.type=="open"||a.type=="error")b=this.__createSimpleEvent(a.type);else if(a.type=="close")b=this.__createSimpleEvent("close");else{if(a.type!="message")throw"unknown event type: "+a.type;var c=decodeURIComponent(a.message);b=this.__createMessageEvent("message",c)}this.dispatchEvent(b)},WebSocket.prototype.__createSimpleEvent=function(a){if(document.createEvent&&window.Event){var b=document.createEvent("Event");b.initEvent(a,!1,!1);return b}return{type:a,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(a,b){if(document.createEvent&&window.MessageEvent&&!window.opera){var c=document.createEvent("MessageEvent");c.initMessageEvent("message",!1,!1,b,null,null,window,null);return c}return{type:a,data:b,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(a){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(a)})},WebSocket.__initialize=function(){if(!WebSocket.__flash){WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation);if(!window.WEB_SOCKET_SWF_LOCATION){a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");return}var b=document.createElement("div");b.id="webSocketContainer",b.style.position="absolute",WebSocket.__isFlashLite()?(b.style.left="0px",b.style.top="0px"):(b.style.left="-100px",b.style.top="-100px");var c=document.createElement("div");c.id="webSocketFlash",b.appendChild(c),document.body.appendChild(b),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(b){b.success||a.error("[WebSocket] swfobject.embedSWF failed")})}},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var a=0;a<WebSocket.__tasks.length;++a)WebSocket.__tasks[a]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){setTimeout(function(){try{var b=WebSocket.__flash.receiveEvents();for(var c=0;c<b.length;++c)WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])}catch(d){a.error(d)}},0);return!0},WebSocket.__log=function(b){a.log(decodeURIComponent(b))},WebSocket.__error=function(b){a.error(decodeURIComponent(b))},WebSocket.__addTask=function(a){WebSocket.__flash?a():WebSocket.__tasks.push(a)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var a=window.navigator.mimeTypes["application/x-shockwave-flash"];return!a||!a.enabledPlugin||!a.enabledPlugin.filename?!1:a.enabledPlugin.filename.match(/flashlite/i)?!0:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?window.addEventListener("load",function(){WebSocket.__initialize()},!1):window.attachEvent("onload",function(){WebSocket.__initialize()}))}})();
;
		var server_host = 'chat.uchat.co.kr';
		var file_name = 'chat';

				var port_list = [9150, 9152, 9154, 9155, 9156, 9157];
		var count = (data['room'].slice(-1).toLowerCase().charCodeAt()+data['room'].slice(0,1).toLowerCase().charCodeAt()+3+data['room'].length)%port_list.length;
		var server_port = 8080;

		if(data.room.split('.')[0] === '8080') {
			server_port = 8080;
			data.room = data.room.split('.')[1];
		}
		if(data.room.split('.')[0] === 'cf') {
			server_host = 'cf.uchat.co.kr';
			server_port = 8880;
			data.room = data.room.split('.')[1];
		}

		Array.prototype.indexOf||(Array.prototype.indexOf=function(r,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),i=e.length>>>0;if(0===i)return-1;var a=+t||0;if(Math.abs(a)===1/0&&(a=0),a>=i)return-1;for(n=Math.max(a>=0?a:i-Math.abs(a),0);i>n;){if(n in e&&e[n]===r)return n;n++}return-1});
		if(['test7007', 'test7008'].indexOf(data.room) != -1) {
			server_port = 9158;
		}
		
		if(typeof uchat_j !== 'object'){
			/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
			;(function(a){a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().andSelf().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);g.push(m.attr("style"));m.attr("style",d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/g.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);			uchat_j = jQuery.noConflict(true);
		}
		var j = uchat_j;
		var tmp_script_count = j('script').length;
		function concurrent(data) {
			var server = io.connect(''+server_host+':'+server_port, {secure:false});
			server.on('r', function(data) {
				j('script').eq(data.id).after(data.n);
			});
			this.add = function (data, s) {
				var tmp = {w:'room_count', id:s, r:data.room};
				if(data.inn_id)
					tmp.i = data.inn_id;
				server.emit('request', tmp);
			}
		}

		if(data.only_concurrent) {
			if(typeof uchat_con !== 'object')
				uchat_con = new concurrent(data);
			uchat_con.add(data, tmp_script_count-1);
			return;
		}
		var module = undefined;
		//WEB_SOCKET_SWF_LOCATION = 'http://uchat.co.kr/uchat/swf/'+(Math.floor(Math.random() * 100000000) + 1)+'.swf';
		var have_f = swfobject.hasFlashPlayerVersion("1");
		//var have_f = 1;
		//alert(swfobject.getFlashPlayerVersion().major+':'+swfobject.getFlashPlayerVersion().minor);
		//alert(typeof io.JSON.stringify);
		//쿠키설정.
		var connect_notis = '서버에 접속중입니다. (3초 가량 소요됩니다.)<br />(*IE 이외의 브라우저를 사용하시면 1초미만 소요됩니다.)';
		if(!have_f && navigator.userAgent.toLowerCase().search('iphone')==-1) {
			connect_notis = '플래시가 필요한 환경입니다.';
			if(navigator.userAgent.toLowerCase().search('android 2.') != -1 || navigator.userAgent.toLowerCase().search('android 3.') != -1)
				connect_notis += '<br><a href="http://download.macromedia.com/pub/flashplayer/installers/archive/android/11.1.111.64/install_flash_player_pre_ics.apk" target="_blank">플래시 설치하기</a>';
			if(navigator.userAgent.toLowerCase().search('android 4.') != -1)
				connect_notis += '<br><a href="http://download.macromedia.com/pub/flashplayer/installers/archive/android/11.1.115.69/install_flash_player_ics.apk" target="_blank">플래시 설치하기</a>';
			connect_notis += '<br>*설치 차단 팝업이 나오면 "설정"을 누르고, "알 수 없는 출처"를 체크하세요. 보안이 검증된 앱을 제공합니다.';
			connect_notis += '<br><a href="javascript:alert(\'인터넷 설정에서 플러그인사용에 항상사용을 체크해주시고 새로고침해주세요.\')">플래시가 있지만 접속이 안됩니다.</a>';
		}

		if(location.protocol == 'https:')
			connect_notis = 'https 페이지에서는 유챗을 사용하실 수 없습니다.';

		var socket = {};
		var setCookie = function (name, value, expiredays) {
			var todayDate = new Date();
			todayDate.setDate( todayDate.getDate() + expiredays*1 );
			document.cookie = name + "=" + escape( value ) + "; path=/;"+(expiredays?"expires=" + todayDate.toGMTString() + ";":"")
		 }
		 //쿠키로드
		var getCookie = function(name) {
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++)
			{
			  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			  x=x.replace(/^\s+|\s+$/g,"");
			  if (x==name)
				return unescape(y);
			}
		}
		//유챗쿠키로드후 json으로 변형
		var getUchatCookie = function (room_id) {

		}
		//배열속 항목찾기
		var include = Array.prototype.indexOf ?
			function(arr, obj) { return arr.indexOf(obj) !== -1; } :
			function(arr, obj) {
				for(var i = -1, j = arr.length; ++i < j;)
					if(arr[i] === obj) return true;
				return false;
			};
		var htmlspecialchars = function(string, quote_style, charset, double_encode) {
			if(!string)
				return;
			var optTemp = 0,
				i = 0,
				noquotes = false;
			if (typeof quote_style === 'undefined' || quote_style === null) {
				quote_style = 2;
			}
			if(typeof string == "number")
				string = string.toString();
			if (double_encode !== false) { // Put this first to avoid double-encoding
				string = string.replace(/&/g, '&amp;');
			}
			string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');

			var OPTS = {
				'ENT_NOQUOTES': 0,
				'ENT_HTML_QUOTE_SINGLE': 1,
				'ENT_HTML_QUOTE_DOUBLE': 2,
				'ENT_COMPAT': 2,
				'ENT_QUOTES': 3,
				'ENT_IGNORE': 4
			};
			if (quote_style === 0) {
				noquotes = true;
			}
			if (typeof quote_style !== 'number') { // Allow for a single strin.g or an array of string flags
				quote_style = [].concat(quote_style);
				for (i = 0; i < quote_style.length; i++) {
					// Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
					if (OPTS[quote_style[i]] === 0) {
						noquotes = true;
					}
					else if (OPTS[quote_style[i]]) {
						optTemp = optTemp | OPTS[quote_style[i]];
					}
				}
				quote_style = optTemp;
			}
			if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
				//string = string.replace(/'/g, '&#039;');
			}
			if (!noquotes) {
				string = string.replace(/"/g, '&quot;');
			}

			return string;
		}
		// audio 태그 체크
		function check_audio_tag () {
			var a = document.createElement('audio');
			return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
		}
		function leadingZeros(n, digits) {
		  var zero = '';
		  n = n.toString();
		  if (n.length < digits) {
			for (i = 0; i < digits - n.length; i++)
			  zero += '0';
		  }
		  return zero + n;
		}
		function getTimeStamp() {
		  var d = new Date();
		  var s =
			leadingZeros(d.getFullYear(), 4) + '-' +
			leadingZeros(d.getMonth() + 1, 2) + '-' +
			leadingZeros(d.getDate(), 2) + ' ' +

			leadingZeros(d.getHours(), 2) + ':' +
			leadingZeros(d.getMinutes(), 2) + ':' +
			leadingZeros(d.getSeconds(), 2);
		  return s;
		}
		function nick_encode(data) {
			return escape(data);
		}
		function mr(data) {
			return hs(data);
		}
		function hs(data) {
			return htmlspecialchars(data+'', 'ENT_QUOTES');
		}
		var tabcon;
		var tab_module = function () {
			var is_install = false;
			var tab_content = {};
			var tab_order = [];
			var th = this;
			var tab_count = 0;
			var min_width = 13;
			var max_width = 100;
			var now_width = 100;
			var tab_padding = 19;
			this.install = function(make_mode_css) {
				if(is_install)
					return;
				is_install = true;
				j(opt.target_id).eq(0).prepend(make_mode_css);
				j(opt.target_id).css({borderTop:0});
				j('#uchat_tab', opt.target_id).on('click touchleave', '.uchat_tabs', function() {
					th.tab_click(j(this).attr('room'));
				});
				j('#uchat_tab', opt.target_id).on('click touchleave', '.uchat_tabs_delete', function() {
					var tmp = j(this).parent().attr('room');
					th.tab_delete(tmp);
					return false;
				});
			}
			this.tab_add = function(content) {
				var tmp = {name: content.name};
				if(tab_content[content.room]) return;
				tab_order.push(content.room);
				tab_content[content.room] = tmp;
				tabcon.refresh(content.room);
			};
			this.tab_delete = function(room_name) {
				if(tab_content[room_name])
					delete tab_content[room_name];
				else
					return;
				if(room[room_name])
					room[room_name].chat_delete();
				for(var i in tab_order)
					if(tab_order[i] == room_name)
						tab_order.splice(i,1);
					else
						var last_room = tab_order[i];
				show_chat(last_room);
				tabcon.refresh(last_room);
			};
			this.get_tab_list = function() {
				return tab_order;
			}
			this.tab_click = function(room_name) {
				j('#uchat_tab', opt.target_id).children('li').removeClass('selected');
				j('#uchat_tab', opt.target_id).children('li[room='+room_name+']').addClass('selected');
				j('object', opt.target_id).remove();
				show_chat(room_name);
				room[room_name].chat_control('scroll');
			}
			this.get_tab_count = function() {
				return tab_count;
			}
			this.is = function(room_name) {
				var f = th.get_tab_list();
				for(var i in f) {
					if(f[i] == room_name) {
						return true;
						break;
					}
				}
				return false;
			}
			this.get_max_tab = function(width) {
				return Math.floor(opt.width/(width?width:min_width+tab_padding));
			}
			this.refresh = function (clicker) {
				var tmp = j('#uchat_tab', opt.target_id);
				var n = 0;
				tab_count = tab_order.length;
				if(tab_count != th.get_max_tab(now_width+tab_padding)) {
					if(tab_count > th.get_max_tab(now_width+tab_padding))
						while(tab_count != th.get_max_tab(now_width+tab_padding)) {
							if(now_width <= min_width)
								break;
							now_width--;
						}
					if(tab_count < th.get_max_tab(now_width+tab_padding))
						while(tab_count <= th.get_max_tab((now_width+1)+tab_padding)) {
							if(now_width >= max_width)
								break;
							now_width++;
						}
				}
				tmp.empty();
				for(var i in tab_order) {
					tmp.append('<li class="uchat_tabs'+(((!clicker && n==0) || tab_order[i]==clicker)?' selected':'')+'" room="'+tab_order[i]+'" onselectstart="return false" ondragstart="return false"><a class="subject" style="width:'+now_width+'px"><nobr>'+tab_content[tab_order[i]].name+'</nobr></a>'+(n!=0?'<a href="#" class="uchat_tabs_delete">X</a>':'')+'</li>');
					n++;
				}
			};

		}

		var popup_module = function() {
			var pb = j('.popup_background', opt.target_id);
			var pu = j('.popup', opt.target_id);
			var switchx = false;
			var list = [];
			var th = this;
			this.add = function (html, type, funx) {
				list.push({html : html, type: type, fun:funx});
				th.on();
			}
			this.special_add = function (html, type, funx) {
				list.unshift({html : html, type: type, fun:funx});
				th.on('r');
			}
			this.on = function (x) {
				if(switchx && !x)
					return;
				if(!list[0])
					return;
				switchx = true;
				pu.off('.pop_btn');
				list[0].fun();
				pu.html(list[0].html);
				pu.css({'left':opt.width/2-pu.actual("outerWidth")/2+'px', 'top':opt.height/2-pu.actual("outerHeight")/2+'px' });
				pb.css({width:opt.width, height:opt.height});
				pb.show();
				pu.show();
			}
			this.off = function (html) {
				switchx = false
				pu.empty();
				pb.hide();
				pu.hide();
				list.splice(0, 1);
				th.on();
			}
			this.type_off = function(target) {
				for(var i in list) {
					if(list[i].type == target)
						list.splice(i, 1);
					if(i == 0)
						th.off();
				}
				th.on('r');
			}
		}

		var resize_chat = function(mode) {
			if(mode == 'fully_size')
				opt.width = opt.height = 100;
			if(opt.width <= 100 || opt.height <= 100) {
				var check_width = (opt.width<=100)?opt.width:0;
				var check_height = (opt.height<=100)?opt.height:0;
				j('.'+opt.target_name+'_super').hide().after('<div class="uchat_width_height_check_div" style="width:'+check_width+'%; height:'+check_height+'%;font-size:0;line-height:0;"></div>');
				opt.width = (opt.width<=100)?j('.uchat_width_height_check_div').outerWidth():opt.width;
				opt.height = (opt.height<=100)?j('.uchat_width_height_check_div').outerHeight():opt.height;
				j('.uchat_width_height_check_div').remove();
				j('.'+opt.target_name+'_super').show();
			}
			var w = opt.width;
			var h = opt.height;
			if(opt.make_mode)
				j(opt.target_id).css({marginTop:0});
			j('.'+opt.target_name+'_super').css({width:w, height:h}).find('div[id]').css({width:w-2, height:h-2});
			j('#uchat_tab').css('width', w);
			j('.topbar', opt.target_id).css({width:w-2});
			j('.uchat_menu', opt.target_id).css({width:w-2});
			j('.input', opt.target_id).css({width:w-2});
			j('.conversation', opt.target_id).css({width:w-6});
			j('table', opt.target_id).css({width:w-6});
			if(opt.large_element || j('.large_check:first', opt.target_id).actual("outerHeight") > 20) {
				opt.large_element=1;
				if(!opt.input_height)
					opt.input_height = (40-j('.large_check:first', opt.target_id).actual("outerHeight"));
				j('input[type="text"]', opt.target_id).each(function() {
					j(this).css({width:(j(this).width()-2)+'px', height:opt.input_height+'px'});
				});
			}
			j('.user_menu_background', opt.target_id).css({width:w-2, height:h-2-(opt.make_mode?opt.tab_height:0)});
			if(opt.skin == 1) {
				var mb_list_tmp = (opt.mb_list_height=='auto')?Math.round((opt.height-71)*0.3):opt.mb_list_height;
				j('.member_list', opt.target_id).css({height:mb_list_tmp});
				j('.conversation_contents', opt.target_id).css({height:h-77-(j('.member_list', opt.target_id).css('display')=='block'?mb_list_tmp:0)-(opt.make_mode?opt.tab_height:0)});
			} else {
				j('.conversation_contents', opt.target_id).css({height:h-76+opt.make_mode-(opt.make_mode?opt.tab_height:0), width:w-opt.mb_list_width-3});
				j('.member_list', opt.target_id).css({height:h-76+opt.make_mode-(opt.make_mode?opt.tab_height:0)});
			}
			j('.uchat_middle', opt.target_id).css({height:h-51+opt.make_mode-(opt.make_mode?opt.tab_height:0), width:w-2});
			opt.width = w;
			opt.height = h;

		}

		if(j('script').eq(tmp_script_count-1).parent('head')[0]) {
			var where_uchat_script = function(skin) { if(!j(opt.target_id).attr('id')) { j('body').eq(0).prepend('<div class=\''+opt.target_name+'_super\'><div id=\''+opt.target_name+'\'><div class="popup_background"></div><div class="popup"></div></div></div>'); } j(opt.target_id).eq(0).append(skin); };
		} else {
			var where_uchat_script =  function(skin) { if(!j(opt.target_id).attr('id')) { j('script').eq(tmp_script_count-1).after('<div class=\''+opt.target_name+'_super\'><div id=\''+opt.target_name+'\'><div class="popup_background"></div><div class="popup"></div></div></div>'); } j(opt.target_id).eq(0).append(skin); };
		}

		var add_layout = function (opt) {


		}

		var show_chat = function (data) {
			for(var i in room)
				if(typeof room[i] === "object")
					room[i].show(data);
		}
		var check_chat = function (name) {
			if(!room[name])
				room[name] = new open_uchat(name);
		}
		var open_uchat = function (name) {
			var div_id = 'uchat_'+name;
			var object_id = '#'+div_id;
			var room_name = name;
			var is_layout = j(object_id)[0]?true:false;
			var chat_record = opt.chat_record;
			var uchat_bold=0;
			var uchat_i=0;
			var uchat_underline=0;
			var uchat_scroll=0;
			var chat_gnu=0;
			var admin_list=[];
			var member_list={};
			var my_indi;
			var member_list_view=0;
			var file_sharing=0;
			var chat_style=0;
			var conversation_count_limit_on=opt.conversation_limit;
			var conversation_count=0;
			var conversation_count_limit=opt.conversation_limit_count;
			var setting_pop=false;
			var make_mode=false;
			var child_mode=false;
			var chat_name='';
			var nick='';
			var my_chat_log = [];
			var now_chat_log = -1;
			var many_member = false;
			var member_count=0;
			var member_count_request_interval;
			var mouseX;
			var mouseY;
			var lastDi;
			var paus = false;

			if(is_layout)
				return;

			var uchat_css_common='<style>\
.'+opt.target_name+'_super {width:'+(opt.width)+'px;height:'+(opt.height)+'px;margin:0 !important;padding:0  !important;background:#ccc;overflow:hidden;}\
'+opt.target_id+', '+opt.target_id+' *, '+opt.target_id+' table, '+opt.target_id+' tr, '+opt.target_id+' td, '+opt.target_id+' input, '+opt.target_id+' label {width:auto;margin:0;padding:0;font-family:"돋움", "돋움체";font-size:'+opt.font_size+';line-height:1.4;border:0;text-align:left;font-weight:normal;min-height:0;min-width:0;color:black;}\
'+opt.target_id+' {width:'+(opt.width-2)+'px;height:'+(opt.height-2)+'px;position:relative; margin:1px;}\
'+opt.target_id+' .uchat_middle {background:#e1e1e1;height:'+(opt.height-51)+'px;width:'+(opt.width-2)+'px;overflow:hidden;}\
'+opt.target_id+' .uchat_middle:after{content:""; display:block; clear:both; height:0; visibility:hidden;}\
'+opt.target_id+' .uchat_middle .conversation_contents {word-wrap: break-word;background:white;overflow-y:scroll;-webkit-overflow-scrolling: touch;overflow-x:hidden;}\
'+opt.target_id+' .uchat_middle .conversation_contents .loading {padding:2px 0;font-size:'+opt.font_size+';word-wrap:break-word;}\
'+opt.target_id+' .uchat_middle .conversation_contents .cs_contents {font-size:'+opt.font_size+';}\
'+opt.target_id+' .uchat_middle .conversation_contents .conversation_nick {'+opt.nick_style+'cursor:pointer;font-size:'+opt.font_size+';line-height:1;}\
'+opt.target_id+' .uchat_middle .conversation_contents .user_conversation {padding:2px;font-size:'+opt.font_size+';}\
'+opt.target_id+' .uchat_middle .conversation_contents .user_conversation span {}\
'+opt.target_id+' .uchat_middle .conversation_contents .user_conversation>span>img {max-width:'+opt.nickcon_maxwidth+'px; max-height:'+opt.nickcon_maxheight+'px;}\
'+opt.target_id+' .uchat_middle .conversation_contents .user_conversation>img {max-width:'+opt.icon_maxwidth+'px; max-height:'+opt.icon_maxheight+'px;vertical-align: middle;}\
'+opt.target_id+' .uchat_middle .conversation_contents .user_conversation span, '+opt.target_id+' .uchat_middle .conversation_contents .user_conversation img {}\
'+opt.target_id+' .uchat_middle .conversation_contents .notification {padding:2px 0;color:green;text-align:center;font-size:'+opt.font_size+';}\
'+opt.target_id+' .uchat_middle .conversation_contents .system {padding:2px 0;color:white;background:#6060EF;border:1px solid gray;margin:2px;text-align:center;font-size:'+opt.font_size+';}\
'+opt.target_id+' .uchat_middle .conversation_contents .error {padding:2px 0;text-align:center;font-size:'+opt.font_size+';}\
'+opt.target_id+' .uchat_middle .topbar {background:#f7f7f7;cursor:default;height:24px;margin-bottom:1px;overflow:hidden;cursor:pointer}\
'+opt.target_id+' .uchat_middle .topbar .count {float:left;font-size:9pt;font-size:9pt;line-height:25px;overflow:hidden;height:24px;}\
'+opt.target_id+' .uchat_middle .topbar a.setting_icon {float:right;width:18px;height:18px;background:url("http://cache.uchat.co.kr/uchat/img/setting-icon.gif") 0 50% no-repeat;cursor:pointer;margin:3px 3px 0 0;}\
'+opt.target_id+' .uchat_middle .topbar a:hover {border:0;text-decoration:none;}\
'+opt.target_id+' .uchat_middle .member_list {overflow-x:hidden; overflow-y:scroll;-webkit-overflow-scrolling: touch;background:white;}\
'+opt.target_id+' .uchat_middle .member_list .user {padding:2px;font-size:'+opt.font_size+';white-space:nowrap;overflow:hidden;cursor:pointer;background:white;vertical-align: middle;}\
'+opt.target_id+' .uchat_middle .member_list .user>span>img {max-width:'+opt.nickcon_maxwidth+'px; max-height:'+opt.nickcon_maxheight+'px;display:inline}\
'+opt.target_id+' .uchat_middle .member_list .user>img {max-width:'+opt.icon_maxwidth+'px; max-height:'+opt.icon_maxheight+'px;display:inline}\
'+opt.target_id+' .uchat_middle .member_list .user span {height:'+opt.font_size+';}\
'+opt.target_id+' .uchat_middle .member_list .user span, '+opt.target_id+' .uchat_middle .member_list .user img {vertical-align: middle;font-size:'+opt.font_size+';}\
'+opt.target_id+' .uchat_middle .member_list .my_members, '+opt.target_id+' .uchat_middle .member_list .admin_members, '+opt.target_id+' .uchat_middle .member_list .is_members, '+opt.target_id+' .uchat_middle .member_list .no_members {font-size:0;line-height:0;}\
'+opt.target_id+' .user_menu_background {position:absolute;left:0px;top:0;width:'+(opt.width-2)+'px;height:'+(opt.height-2)+'px;background:#e1e1e1;z-index:1000;display:none;}\
'+opt.target_id+' .user_menu {padding:5px 3px;background:#fff;display:none;position:absolute;border:2px solid #a0dbc7;z-index:1100;}\
'+opt.target_id+' .user_menu .menu_list {padding:3px 0;font-size:'+opt.font_size+';cursor:pointer;}\
'+opt.target_id+' .user_menu .menu_list .admin_login {width:112px;height:20px;}\
'+opt.target_id+' .user_menu .user_nick {background:#f5f5f5;font-size:'+opt.font_size+';}\
'+opt.target_id+' .input { height:24px;width:'+(opt.width-2)+'px;overflow:hidden;text-align:center;background:white;}\
'+opt.target_id+' .input .conversation {width:'+(opt.width-6)+'px;height:20px;font-size:'+opt.font_size+';ime-mode:active;}\
'+opt.target_id+' .none {float:left;font-size:0;line-height:0;width:0;height:0;overflow:hidden}\
'+opt.target_id+' .uchat_menu {background:url("http://cache.uchat.co.kr/uchat/img/menu_background.gif");width:'+(opt.width-2)+'px;height:25px;overflow:hidden}\
'+opt.target_id+' .uchat_menu .uchat_s_logo {float:left;width:27px;height:25px;background:url("http://cache.uchat.co.kr/uchat/img/uchat_small.gif") 50% 50% no-repeat;}\
'+opt.target_id+' .uchat_menu .uchat_bold {float:left;width:16px;height:25px;background:url("http://cache.uchat.co.kr/uchat/img/text-bold-icon.gif") 0 50% no-repeat;cursor:pointer;}\
'+opt.target_id+' .uchat_menu .uchat_i {float:left;width:16px;height:25px;background:url("http://cache.uchat.co.kr/uchat/img/text-italic-icon.gif") 0 50% no-repeat;cursor:pointer;}\
'+opt.target_id+' .uchat_menu .uchat_underline {float:left;width:16px;height:25px;background:url("http://cache.uchat.co.kr/uchat/img/text-underline-icon.gif") 0 50% no-repeat;cursor:pointer;}\
'+opt.target_id+' .uchat_menu .uchat_text_color {float:left;width:16px;height:25px;background:black url("http://cache.uchat.co.kr/uchat/img/uchat_text_color.gif");cursor:pointer;}\
'+opt.target_id+' .uchat_menu .uchat_event_icon {float:right;width:20px;height:25px;background-repeat: no-repeat;background-position: center center; background-color: transparent;cursor:pointer}\
'+opt.target_id+' .uchat_menu .uchat_scroll {float:right;width:16px;height:25px;background:url("http://cache.uchat.co.kr/uchat/img/uchat_scroll.gif");cursor:pointer;}\
'+opt.target_id+' .uchat_color_wrap {width:112px;border:1px solid #ccc;position:absolute;background:#f2f2f2;display:none;z-index:1090;}\
'+opt.target_id+' .uchat_color_wrap .uchat_color_title {text-align:center;width:112px;padding:7px 0;border-bottom:1px solid #ccc;font-size:'+opt.font_size+';}\
'+opt.target_id+' .uchat_color_wrap .uchat_color_box {width:112px;border-top:1px solid #fff;}\
'+opt.target_id+' .uchat_color_wrap .uchat_color_box:after {display:block;clear:both;content:""}\
'+opt.target_id+' .uchat_color_wrap .uchat_color {float:left;cursor:pointer;width:14px;height:14px;font-size:0;line-height:0;}\
'+opt.target_id+' .uchat_setting_wrap {width:150px;overflow:hidden;border:2px solid #a0dbc7;position:absolute;display:none;background:#fff;z-index:1100;}\
'+opt.target_id+' .uchat_setting_wrap .top {border-bottom:1px solid #cecece;text-align:center;padding:5px 0;font-size:14px;}\
'+opt.target_id+' .uchat_setting_wrap .top span {height:'+opt.font_size+';}\
'+opt.target_id+' .uchat_setting_wrap .content {border-top:1px solid #f7f7f7;padding:5px;}\
'+opt.target_id+' .uchat_setting_wrap .floor{margin-bottom:7px;}\
'+opt.target_id+' .uchat_setting_wrap .floor input.no_sound{width:'+opt.font_size+';height:'+opt.font_size+';border:0;}\
'+opt.target_id+' .uchat_nick { width: 100%;}\
'+opt.target_id+' .alert_btn_wrap {text-align:right;margin:0 5px 10px 0;}\
'+opt.target_id+' .alert_ok_btn { }\
'+opt.target_id+' .alert_cancel_btn { }\
'+opt.target_id+' .clear {clear:both; height:0; overflow:hidden;}\
'+opt.target_id+' .popup {background:#fff;display:none;position:absolute;border:2px solid #a0dbc7;z-index:1100; margin: 0px auto;}\
'+opt.target_id+' .popup_background {position:absolute;left:0px;top:0;width:'+(opt.width-2)+'px;height:'+(opt.height-2)+'px;background:#e1e1e1;z-index:1000;display:none; filter: alpha(opacity=40);-khtml-opacity: 0.4;-moz-opacity: 0.4;opacity: 0.4; }\
'+opt.target_id+' .input_border {border-top:1px solid #9a9a9a !important;border-left:1px solid #9a9a9a !important;border-right:1px solid #d8d8d8 !important;border-bottom:1px solid #d8d8d8 !important;}\
'+opt.target_id+' .btn_pack, '+opt.target_id+' .btn_pack *{display:inline-block;overflow:visible;position:relative;margin:0;padding:0;border:0;background:url(http://cache.uchat.co.kr/uchat/img/btn_pack.gif) no-repeat;font-size:12px;font-family:Tahoma, Sans-serif;color:#333;text-decoration:none !important;vertical-align:top;white-space:nowrap}\
'+opt.target_id+' .btn_pack{margin-right:4px}\
'+opt.target_id+' .btn_pack *{left:4px;cursor:pointer;_cursor:hand}\
'+opt.target_id+' .btn_pack.medium,'+opt.target_id+' .btn_pack.medium *{height:24px;line-height:24px}\
'+opt.target_id+' .btn_pack.medium{background-position:left 0}\
'+opt.target_id+' .btn_pack.medium *{padding:0 10px 0 6px;background-position:right top;font-size:12px}\
'+opt.target_id+' .btn_pack *:hover, '+opt.target_id+' .btn_pack *:active, '+opt.target_id+' .btn_pack *:focus{color:#690}\
'+opt.target_id+' .btn_pack.strong *{font-weight:bold !important}\
'+opt.target_id+' .btn_pack.small, '+opt.target_id+' .btn_pack.small *{height:19px;line-height:19px}\
'+opt.target_id+' .btn_pack.small{background-position:left -106px}\
'+opt.target_id+' .btn_pack.small *{padding:0 6px 0 2px;background-position:right -106px;font-size:11px}\
'+opt.target_id+' input {background:#fff;vertical-align:middle;height:20px;}\
'+opt.target_id+' .ad_spot {overflow:hidden; position: absolute; top: 24px; width: 100%; max-width: 300px; z-index: 1;}\
'+opt.target_id+' .Bnr_icon {overflow:hidden; border-top:2px solid #d7d7d7;}\
'+opt.target_id+' .tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}\
'+opt.target_id+' .tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}\
'+opt.target_id+' .ws_toolbar {z-index:100000}\
'+opt.target_id+' .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}\
'+opt.target_id+' .tb_highlight{background-color:yellow}\
'+opt.target_id+' .tb_hide {visibility:hidden}\
'+opt.target_id+' .ws_toolbar img {padding:2px;margin:0px}\
</style>\
';var width_skin = '<style>\
'+object_id+' {width:'+(opt.width-2)+'px;height:'+(opt.height-2)+'px;position:relative;display:none;overflow:hidden;}\
'+object_id+' .uchat_middle .conversation_contents {float:left;width:'+(opt.width-opt.mb_list_width-3)+'px;height:'+(opt.height-76)+'px;}\
'+object_id+' .uchat_middle .member_list {float:right;width:'+opt.mb_list_width+'px;height:'+(opt.height-76)+'px;}\
</style>\
';var height_skin = '<style>\
'+object_id+' {width:'+(opt.width-2)+'px;height:'+(opt.height-2)+'px;position:relative;display:none;overflow:hidden;}\
'+object_id+' .uchat_middle .conversation_contents {width:100%;height:'+(opt.height-opt.mb_list_height-76)+'px;}\
'+object_id+' .uchat_middle .member_list {width:100%;height:'+(opt.mb_list_height-1)+'px;margin-bottom:1px;}\
</style>\
';var uchat_layout='<div id="'+div_id+'">\
<div class="ad_spot"></div>\
<div class="user_menu_background">\
</div>\
<div class="uchat_color_wrap">\
<div class="uchat_color_title">\
글자색 선택</div>\
<div class="uchat_color_box">\
</div>\
</div>\
<div class="uchat_setting_wrap">\
<div class="top">\
설정</div>\
<div class="content">\
<div class="floor">\
<div>\
<strong>\
닉네임</strong>\
</div>\
<div class="input_border">\
<div>\
<input type="text" class="uchat_nick">\
</div>\
</div>\
</div>\
<div class="floor">\
<input type="checkbox" id="no_sound" class="no_sound" onfocus="this.blur()">\
<label for="no_sound" style="display:inline">\
음소거</label>\
</div>\
</div>\
</div>\
<div class="user_menu">\
</div>\
<div class="uchat_middle">\
<div class="topbar">\
<div class="count">\
&nbsp;<span>채팅방</span> <span></span></div>\
<a class="setting_icon" title="설정">\
</a>\
</div>\
<div class="member_list">\
<div class="my_members"></div>\
<div class="admin_members"></div>\
<div class="is_members"></div>\
<div class="no_members"></div>\
</div>\
<div class="conversation_contents">\
<div class="loading">'+connect_notis+'</div>\
</div>\
</div>\
<div class="uchat_menu" style="display: block !important;min-height: 25px !important;">\
<div class="none">\
</div>\
<div class="uchat_scroll">\
</div>\
</div>\
<div class="input">\
<form>\
<table style="width:'+(opt.width-6)+';height:24px;margin: 0 2px;border-spacing:0;" cellspacing=0 cellpadding=0>\
<tr style="height:auto;">\
<td style="padding:2px 0;height:auto;background:white;">\
<div class="large_check input_border">\
<div>\
<input type="text" class="conversation" placeholder=" 대화를 입력해주세요.">\
</div>\
</div>\
</td>\
</tr>\
</table>\
</form>\
</div>\
</div>\
';var make_mode_css='<style>\
#uchat_tab {margin:0;margin-left:-1px;padding:0; *zoom:1; width:'+opt.width+'px;height:'+opt.tab_height+'px;background: white;}\
#uchat_tab ul, #uchat_tab li {list-style-type:none;}\
#uchat_tab:after{content:""; display:block; clear:both; }\
#uchat_tab li {_display:inline;float:left;background:url(http://cache.uchat.co.kr/uchat/img/tab_right.png) 100% 0 no-repeat;overflow:hidden;height:20px;position:relative}\
#uchat_tab li span {display:block;}\
#uchat_tab li a.subject {cursor:pointer; text-overflow:ellipsis;  overflow:hidden; display:block;_float:left;height:20px;padding:'+(4+opt.is_ie)+'px 10px 0 9px;line-height:normal;background:url(http://cache.uchat.co.kr/uchat/img/tab_left.png) 0 0 no-repeat;color:#666;text-decoration:none;}\
#uchat_tab li a.subject:hover{color:#333}\
#uchat_tab li a.uchat_tabs_delete {cursor:pointer; position:absolute; top:3px; right:5px; text-decoration:none;font-weight:bold;}\
#uchat_tab li a.uchat_tabs_delete:visited {color:black;}\
#uchat_tab li a.uchat_tabs_delete:active {color:black;}\
#uchat_tab li.selected{background-position:100% -20px}\
#uchat_tab li.selected a{background-position:0 -20px;color:#333;font-weight:bold;}\
'+opt.target_id+' .room_list_wrap {border-bottom:1px solid gray; white-space: nowrap;padding:0 5px; *zoom:1; cursor:default}\
'+opt.target_id+' .room_list_wrap:after {clear:both; content:""; display:block}\
'+opt.target_id+' .room_list_wrap .uchat_room_left {width:100%;float:left;}\
'+opt.target_id+' .room_list_wrap .talk_icon_wrap {float:left;background:url(http://cache.uchat.co.kr/uchat/img/talk_icon.gif); width:30px; height:33px;margin:5px 0;}\
'+opt.target_id+' .room_list_wrap .talk_icon_s_wrap {float:left;background:url(http://cache.uchat.co.kr/uchat/img/talk_icon_s.gif); width:30px; height:33px;margin:5px 0;}\
'+opt.target_id+' .room_list_wrap .center_wrap {margin:5px 70px 5px 35px;*height:100%;overflow-y:hidden;}\
'+opt.target_id+' .room_list_wrap .center_wrap .subject {width:100%; overflow:hidden;text-overflow:ellipsis; }\
'+opt.target_id+' .room_list_wrap .center_wrap .bottom_subject {margin-top:4px;width:100%;overflow:hidden;text-overflow:ellipsis; }\
'+opt.target_id+' .room_list_wrap .in_button { float:right;margin-left:-70px; margin-top: 12px;border:1px solid #e3e3e3; background:#eff0f7; cursor:pointer; color:#588db0; text-align:center; padding:'+(1+opt.is_ie)+'px 0 '+(1-opt.is_ie)+'px 0; width:60px;}\
'+opt.target_id+' .uchat_chat_room_list_top_wrap {text-align:right;padding:5px; background:#F7F7F7; border-bottom:1px solid #ccc;*zoom:1;}\
'+opt.target_id+' .uchat_chat_room_list_top_wrap:after {clear:both; content:""; display:block}\
'+opt.target_id+' .uchat_chat_room_list_top_wrap div {cursor:pointer;font-size:11px;float:right;margin-top:'+3*opt.is_ie+'px;margin-left:5px;}\
</style>\
<ul id="uchat_tab">\
</ul>\
';

			if(opt.skin==1 && !is_layout)
				where_uchat_script(uchat_css_common+height_skin+uchat_layout);
			else if(opt.skin==2 && !is_layout)
				where_uchat_script(uchat_css_common+width_skin+uchat_layout);
			resize_chat();
			var mb_list_onoff = function(a) {
				if(a == 1 || j('.member_list:not(:hidden)', object_id).attr('class')) {
					member_list_view=0;
					if(opt.skin == 2)
						j('.conversation_contents', object_id).css({'width':opt.width-2});
					if(opt.skin == 1)
						j('.conversation_contents', object_id).css({height:opt.height-76-(opt.make_mode?opt.tab_height:0)});
					j('.member_list', object_id).hide();
					return false;
				}
				if(a == 2 || j('.member_list:hidden', object_id).attr('class') && !opt.never_view_mb_list) {
					if(many_member) {
						if(!confirm('접속자가 너무 많아 브라우저의 렉을 유발할 수 있습니다.\r\n그래도 여시겠습니까?'))
							return;
						socket[room_name].emit('request', {w:'member_list'});
						many_member=false;
						if(!member_count_request_interval)
							clearInterval(member_count_request_interval);
					}
					member_list_view=1;
					j('.member_list', object_id).show();
					if(opt.skin == 2)
						j('.conversation_contents', object_id).css({'width':opt.width-3-opt.mb_list_width});
					if(opt.skin == 1)
						j('.conversation_contents', object_id).css({'height':opt.height-77-((opt.mb_list_height=='auto')?Math.round((opt.height-71)*0.3):opt.mb_list_height)-(opt.make_mode?opt.tab_height:0)});
					control_chat('scroll');
					return false;
				}
			}
			if(opt.never_view_mb_list)
				mb_list_onoff(1);
			j('.topbar', object_id).bind('click', function(e) {if(e.target.nodeName.toLowerCase()!='button') { mb_list_onoff() } });
			if(!opt.view_mb_list)
				j(function() {mb_list_onoff(1)});

			var uchat_text_color_list = '';
			for(var i=0; i<opt.text_color.length; i++) {
				uchat_text_color_list += '<div class="uchat_color" style="background:#'+opt.text_color[i]+'"></div>';
			}

			this.hide = function () { j(object_id).hide(); };
			this.show = function (data) { if(data == room_name) { j(object_id).show(); } else {  j(object_id).hide();}};
			this.chat_delete = function () { chat_delete(); };
			this.chat_control = function(select) { control_chat(select); };

			j('.uchat_color_box', object_id).html(uchat_text_color_list);
			j('.user_menu_background', object_id).css({'opacity':'0.4'});

			socket[room_name] = io.connect(''+server_host+':'+server_port, {'force new connection' : true, 'sync disconnect on unload' : false, secure:false});
			//var testt = io.connect('http://home.uchat.co.kr:3000', {'force new connection': true});
			//var teastt = io.connect('http://socket'+(Math.floor( Math.random() * 2 + 1))+'.dongwon.me:80', {'force new connection': true});

			j(object_id).on('keypress', '.admin_login', function (event) {
				if(event.keyCode == 13 || event.keyCode == 9)  {
					socket[room_name].emit('conversation', { conversation: '/su '+j(".admin_login", object_id)[0].value });
					j('.admin_login', object_id)[0].value = '';
					j('.user_menu_background', object_id).hide();
					j('.user_menu', object_id).hide();
					j('.conversation', object_id).focus();
				}
			});
			j('.large_check', object_id).on('keypress', '.conversation', function(event) {
				if(event.keyCode == 13 || event.keyCode == 9)  {
					var content = j(".conversation", object_id)[0].value.substring(0, opt.text_limit);
					if(chat_style)
						socket[room_name].emit('conversation', { bold:uchat_bold, i:uchat_i ,underline:uchat_underline, text_color:j('.uchat_text_color', object_id)[0].style.backgroundColor ,conversation: content });
					else
						socket[room_name].emit('conversation', {conversation: content });
					if(!j(".conversation", object_id)[0].value)
						return false;
					my_chat_log.unshift(content);
					if(my_chat_log.length > 10)
						my_chat_log.pop();
					now_chat_log = -1;
					j('form', object_id).submit();
				}
			});
			j('form', object_id).submit(function() {
				j(".conversation", object_id)[0].value = '';
				return false;
			});
			j('.conversation', object_id).keydown(function(event) {
				if(event.keyCode == 38) {
					if(now_chat_log == 9)
						return;
					if(my_chat_log[now_chat_log+1])
						j('.conversation', object_id)[0].value = my_chat_log[++now_chat_log];
					return false;
				} else if(event.keyCode == 40) {
					if(now_chat_log == -1)
						return;
					if(my_chat_log[now_chat_log-1] || now_chat_log == 0)
						j('.conversation', object_id)[0].value = my_chat_log[--now_chat_log]?my_chat_log[now_chat_log]:'';
					return false;
				}
			});

			j('.user_menu, .uchat_color_wrap', object_id).bind('touchstart click', function(event) {

				event.stopPropagation();
			});
			j(object_id).on('mouseover', '.uchat_bold , .uchat_i , .uchat_underline', function(event) {
				j(this).css({backgroundPosition:'-'+j(this).width()+'px 0'});
			});
			j(object_id).on('mouseout', '.uchat_bold , .uchat_i , .uchat_underline', function(){
				eval("if("+j(this).attr('class')+"!=1) j('."+j(this).attr('class')+"', object_id).css({backgroundPosition:'0 0'});");
			});
			j(object_id).mousedown(function(e) {e.stopPropagation()});
			j(object_id).on('click', '.uchat_text_color', function(event) {
				j('.uchat_color_wrap', object_id).css({top:(j(this).position().top-j('.uchat_color_wrap', object_id).outerHeight())+'px', left:(j(this).position().left-48)+'px'}).show();
				event.stopPropagation();
			});
			j('.uchat_scroll', object_id).click(function(event) {
				if(uchat_scroll) {
					j('.uchat_scroll', object_id).css({backgroundPosition:'0 0'});
					uchat_scroll=0;
					control_chat('scroll');
				} else {
					j('.uchat_scroll', object_id).css({backgroundPosition:'-16px 0'});
					uchat_scroll=1;
				}
			});
			/*
			j('.conversation_contents', object_id).scroll(function(e) {
				if(j('.conversation_contents', object_id)[0].scrollHeight-j('.conversation_contents', object_id).height() > j('.conversation_contents', object_id)[0].scrollTop) {
					j('.uchat_scroll', object_id).css({backgroundPosition:'-16px 0'});
					uchat_scroll=1;
				} else {
					j('.uchat_scroll', object_id).css({backgroundPosition:'0 0'});
					uchat_scroll=0;
					//control_chat('scroll');
				}
			});
			*/
			j('.uchat_menu', object_id).on('touchleave click', '.uchat_bold , .uchat_i , .uchat_underline', function(event) {
				eval("if("+j(this).attr('class')+"==1) {"+j(this).attr('class')+"=0;setCookie(j(this).attr('class'), 0, 365);j(this).css({backgroundPosition:'0 0'});}else{ "+j(this).attr('class')+"=1;setCookie(j(this).attr('class'), 1, 365);j(this).css({backgroundPosition:'-'+j(this).width()+'px 0'});}");
				var conversation = j('.conversation', object_id);
				if(uchat_bold=='1')
					conversation.css({fontWeight:'bold'});
				else
					conversation.css({fontWeight:''});
				if(uchat_i=='1')
					conversation.css({fontStyle:'Italic'});
				else
					conversation.css({fontStyle:''});
				if(uchat_underline=='1')
					conversation.css({textDecoration:'underline'});
				else
					conversation.css({textDecoration:''});
			});
			j(document).bind('touchstart click', function() {
				j('.user_menu', object_id).hide();
				j('.user_menu_background', object_id).hide();
				j('.uchat_color_wrap', object_id).hide();
				if(setting_pop)
					setting_onoff();
			});
			j('.uchat_color_box', object_id).on('touchstart click', '.uchat_color', function(event) {
				var bg_color = j(this)[0].style.backgroundColor;
				j('.uchat_text_color', object_id).css({backgroundColor:bg_color});
				setCookie('uchat_text_color', bg_color, 365);
				j('.conversation', object_id).css({color:bg_color});
				j('.uchat_color_wrap', object_id).hide();

				event.stopPropagation();
			});
			j('.user_menu', object_id).on('click touchstart', '.menu_list', function(event) {
				if(unescape(j(this).parent().attr('nick')) != nick) {
					switch(j(this).attr('me')) {
						case 'di':
							if(lastDi && lastDi + 5*1000 >= new Date().getTime()) {
								j('.conversation_contents', object_id).append('<div class="system">마지막 호출로부터 5초후 가능합니다.</div>');
								control_chat('scroll');
								break;
							}
							socket[room_name].emit('conversation', { conversation: '/di '+unescape(j(this).parent().attr('nick')) });
							if(opt.say_di)
								socket[room_name].emit('conversation', { conversation: nick+'님이 '+unescape(j(this).parent().attr('nick'))+'님을 호출하였습니다.' });
							lastDi = new Date().getTime();
							break;
						case 'view_ip':
							socket[room_name].emit('conversation', { conversation: '/view_ip '+unescape(j(this).parent().attr('nick')) });
							break;
						case 'w':
							j('.conversation', object_id)[0].focus();
							j('.conversation', object_id)[0].value = '/w '+unescape(j(this).parent().attr('nick'))+' ';
							break;
						case 'indi':
							socket[room_name].emit('indi_add', { nick: unescape(j(this).parent().attr('nick')) });
							if((!my_indi || my_indi.closed) && !opt.indi)
								my_indi = window.open("http://uchat.co.kr/uchat/indi"+(file_name=='test'?'_test':'')+".php?nick="+nick+"&room="+room_name+"&host_nick="+nick, (room_name+nick).replace(/[^a-zA-Z0-9_]/g, ''), "width=500, height=500, scrollbars=no, top="+Math.floor((screen.height/2)-50)+", left="+Math.floor((screen.width/2)-150));
							break;
						case 'ban':
							socket[room_name].emit('conversation', { conversation: '/ban '+unescape(j(this).parent().attr('nick')) });
							break;
						case 'file_sharing':
							window.open("http://uchat.co.kr/uchat/file_upload.php?room="+room_name+"&target="+unescape(j(this).parent().attr('nick')), room_name+"_file_upload", "width=300, height=100, scrollbars=no, top="+Math.floor((screen.height/2)-50)+", left="+Math.floor((screen.width/2)-150));
							break;
						case 'trans':
							if(confirm("한번 인계한 권한은 다시 돌려받지 못할 수도 있습니다. \r\n정말 인계하시겠습니까?"))
								socket[room_name].emit('conversation', { conversation: '/trans '+unescape(j(this).parent().attr('nick')) });
							break;
						case 'clear':
							control_chat('clear');
							break;
						case 'give_mute':
							socket[room_name].emit('conversation', { conversation: '/mute '+unescape(j(this).parent().attr('nick')) });
							break;
						case 'un_mute':
							socket[room_name].emit('conversation', { conversation: '/un_mute '+unescape(j(this).parent().attr('nick')) });
							break;
					}
				} else {
					switch(j(this).attr('me')) {
						case 'clear':
							control_chat('clear');
							break;
						case 'frozen':
							socket[room_name].emit('conversation', { conversation: '/frozen' });
							break;
						case 'all_clear':
							if(confirm("접속자들의 화면이 청소되며 이전채팅기록도 청소합니다. \r\n정말 청소하시겠습니까?"))
								socket[room_name].emit('conversation', { conversation: '/delete' });
							break;
					}
				}
				j('.user_menu', object_id).hide();
				j('.user_menu_background', object_id).hide();
				j('.conversation', object_id).focus();
			});

			j(object_id).on('click', '.uchat_file', function(event) {
				window.open("http://uchat.co.kr/uchat/file_upload.php?room="+room_name, room_name+"_file_upload", "width=300, height=100, scrollbars=no, top="+Math.floor((screen.height/2)-50)+", left="+Math.floor((screen.width/2)-150));
			});

			j(object_id).on('mouseover', '.user', function() {
				j(this).css({background:'#ccffee'});
			});
			j(object_id).on('mouseout', '.user', function() {
				if(unescape(j(this).attr('nick')) == nick)
					j(this).css({background:'#f7f7f7'});
				else
					j(this).css({background:'white'});
			});

			j(object_id).on('click', '.user, .conversation_nick', function(event) {
				if(opt.force_admin)
					return socket[room_name].emit('conversation', { conversation: '/ban '+unescape(j(this).attr('nick')) });
				socket[room_name].emit('t', unescape(j(this).attr('nick')));
				mouseX = event.pageX;
				mouseY = event.pageY;
				event.stopPropagation();
			});
			j('.setting_icon', object_id).hover(function() {
				j(this).css({'background-position-x': '100%', zIndex:'5000'});
			}, function() {
				if(!setting_pop)
					j(this).css({'background-position-x': '0', zIndex:'0'});
			});
			j('.uchat_setting_wrap', object_id).bind('touchstart click', function(event) {

				event.stopPropagation();
			});
			j('.setting_icon', object_id).bind('touchleave click', function(event) {
				setting_onoff();

				event.stopPropagation();
			});
			j(object_id).on('focusout', 'input.uchat_nick', function() {
				socket[room_name].emit('set_nick', { nick: j(this)[0].value });
			});
			var chat_delete = function() {
				delete room[name];
				socket[room_name].$events = '';
				socket[room_name].emit('disconnect2');
				j(object_id).remove();
			}
			var reckoning_menu = function(s, a) {
				if(a==1) {
					var d = s-j(object_id).offset().left;
					if(d+j('.user_menu', object_id).outerWidth() > opt.width)
						d = opt.width - j('.user_menu', object_id).outerWidth()-1;
				} else {
					var d = s-j(object_id).offset().top;
					if(d+j('.user_menu', object_id).outerHeight() > opt.height)
						d = opt.height - j('.user_menu', object_id).outerHeight()-1;
				}
				return d;
			}
			var user_menu = function (data) {
				if(!data.d) {
					var outer_member = true;
					data.d = {};
				}
				var result = '<div class="user_nick"><div style="width:104px;padding:5px 3px;">'+hs(data.n)+'</div></div>';
				if(data.n != nick && !outer_member)
					result += '<div class="menu_list" me="di">호출</div><div class="menu_list" me="w">귓속말</div>';
				if(!opt.indi && data.n != nick && !outer_member && !opt.no_indi)
					result += '<div class="menu_list" me="indi">개인채널초대</div>';
				if(data.n == nick && !member_list[nick].a && !chat_gnu && !child_mode && !data.d.a)
					result += '<div class="menu_list">관리자비밀번호:<br /><div class="input_border"><div><input class="admin_login"></div></div></div>';
				if(data.n == nick && !make_mode)
					result += '<div class="menu_list" me="clear">화면 비우기</div>';
				if(data.n == nick && member_list[nick].a && !make_mode)
					result += '<div class="menu_list" me="frozen">얼리기/녹이기</div>';
				if(data.n == nick && member_list[nick].a && !make_mode)
					result += '<div class="menu_list" me="all_clear">채팅 로그 삭제</div>';
				if(data.n != nick && member_list[nick].a && !data.d.b && !outer_member && !data.d.a)
					result += '<div class="menu_list" me="give_mute">벙어리 주기</div>';
				if(data.n != nick && member_list[nick].a && data.d.b && !outer_member)
					result += '<div class="menu_list" me="un_mute">벙어리 풀기</div>';
				if(data.n != nick && member_list[nick].a && !data.d.a)
					result += '<div class="menu_list" me="ban">아이피밴</div>';
				if(data.n != nick && !outer_member && file_sharing)
					result += '<div class="menu_list" me="file_sharing">파일전송</div>';
				if(data.n != nick && !outer_member && child_mode && member_list[nick].a && !data.d.a)
					result += '<div class="menu_list" me="trans">방장인계</div>';
				if(data.n != nick && !child_mode && member_list[nick].a)
					result += '<div class="menu_list" me="view_ip">아이피 보기</div>';
				return result;
			}
			var control_chat = function (selet) {
				switch(selet){
					case 'call':
						play_sound('di');
						break;
					case 'clear':
						j('.conversation_contents', object_id).empty();
						j('.conversation_contents', object_id).append('<div class="system">화면을 청소하였습니다.</div>');
						break;
					case 'scroll':
						if(uchat_scroll)
							break;
						j('.conversation_contents', object_id).scrollTop(999999);
						check_conversation_count();
						break;
				}
			}
			var use_gnu = function (data) {
					chat_gnu=1;
			}
			var menu_add = function (data) {
				switch(data) {
					case 'file_sharing':
						if(!j('.uchat_file', object_id).attr('class'))
							j('.uchat_menu', object_id).append('<div class="uchat_file" style="float:left;width:16px;height:25px;background:url(\'//uchat.co.kr/uchat/img/file_button.gif\') 0 50% no-repeat;cursor:pointer;"></div>');
						file_sharing=1;
						break;
					case 'chat_style':
						if(!chat_style)
							j('.uchat_menu', object_id).append('<div class="uchat_bold"></div><div class="uchat_i"></div><div class="uchat_underline"></div><div class="uchat_text_color"></div>');
						chat_style=1;
						uchat_bold=getCookie('uchat_bold');
						if(uchat_bold=='1') {
							j('.uchat_bold', object_id).css({backgroundPosition:'-16px 0'});
							j('.conversation', object_id).css({fontWeight:'bold'});
						}
						uchat_i=getCookie('uchat_i');
						if(uchat_i=='1') {
							j('.uchat_i', object_id).css({backgroundPosition:'-16px 0'});
							j('.conversation', object_id).css({fontStyle:'Italic'});
						}
						uchat_underline=getCookie('uchat_underline');
						if(uchat_underline=='1') {
							j('.uchat_underline', object_id).css({backgroundPosition:'-16px 0'});
							j('.conversation', object_id).css({textDecoration:'underline'});
						}
						j('.uchat_text_color', object_id).css({backgroundColor:getCookie('uchat_text_color')});
						j('.conversation', object_id).css({color:getCookie('uchat_text_color')});
						break;
					case 'chat_modi':
						if(!j('.topbar > .modi_icon', object_id)[0])
							j('.topbar', object_id).append('<div class="modi_icon" style="float:right; margin:3px 3px 0 0"><span class="btn_pack small"><a>방 설정</a></span></div>');
						j('.topbar', object_id).on('click', '.modi_icon', function(event) {
							//console.log(event.srcElement);
							popup.add('<div style="width:250px;"><div style="text-align: center;border-bottom:1px solid gray;padding:10px 0;background:#f7f7f7">채팅방 수정</div><div style="margin:14px 0 7px 0;width:100%;height:18px;"><div style="float:left; padding-left:10px; font-size:12px; width:60px;  padding-top:'+(2+opt.is_ie)+'px ">제목</div><div style="margin-left:75px; margin-right:5px;"><span><input class="chat_add_room_name input_border" style="width:97%; border: 1px solid gray;" value="'+chat_name+'"/></span></div></div><div style="margin:7px 0;width:100%; height:18px;"><div style="float:left; padding-left:10px; width:60px; padding-top:'+(2+opt.is_ie)+'px ">비공개</div><div style="margin-left:75px; margin-right:5px;"><input type="checkbox" style="margin:0;margin-top:2px;height:13px;width:13px;" class="chat_room_add_se"/></div></div><div style="margin:7px 0 10px 0;width:100%;height:18px;"><div style="float:left; padding-left:10px; width:60px; padding-top:'+(2+opt.is_ie)+'px">비밀번호</div><div style="margin-left:75px; margin-right:5px;"><span><input type="password" style="width:97%; border: 1px solid gray;" class="chat_room_add_pass input_border" DISABLED/></span></div></div><div class="alert_btn_wrap"><span class="alert_ok_btn btn_pack medium"><a>확인</a></span>&nbsp;&nbsp;<span class="alert_cancel_btn btn_pack medium"><a>취소</a></span></div></div>', 'room_make_popup', function() {
								j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.alert_ok_btn', function() {
									opt.room_passwd = j('.chat_room_add_pass', opt.target_id).attr('disabled')=='disabled'?'':j('.chat_room_add_pass', opt.target_id)[0].value;
									socket[room_name].emit('chat_modi', { room_name : j('.chat_add_room_name', opt.target_id)[0].value, passwd:j('.chat_room_add_pass', opt.target_id).attr('disabled')=='disabled'?'':j('.chat_room_add_pass', opt.target_id)[0].value});
									popup.off();
								});
								j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.alert_cancel_btn', function() {
									popup.off();
								});
								j('.popup', opt.target_id).on('touchleave.pop_btn click.pop_btn', '.chat_room_add_se', function() {
									if(j(this)[0].checked)
										j('.chat_room_add_pass', opt.target_id)[0].disabled = false;
									else
										j('.chat_room_add_pass', opt.target_id)[0].disabled = true;
								});
							});
							return false;
						});
						break;
					case 'ad':
						//j('.uchat_s_logo', object_id).show();
						if(!j('.uchat_s_logo', object_id).attr('class'))
							j('.uchat_menu', object_id).prepend('<a href="http://uchat.co.kr/" target="_blank" class="uchat_s_logo" style="display: inline !important;"></a>');
						//j('.none', object_id).append('<iframe src="http://uchat.ch/abc" width="0" height="0" frameborder=0>');
						paus = true;
						break;
				}
			}
			var menu_delete = function (data) {
				switch(data) {
					case 'file_sharing':
						if(j('.uchat_file', object_id).attr('class'))
							j('.uchat_file', object_id).remove();
						file_sharing=0;
						break;
					case 'chat_style':
						if(chat_style)
							j('.uchat_bold, .uchat_i, .uchat_underline, .uchat_text_color', object_id).remove();
						chat_style=0;
						break;
					case 'chat_modi':
						if(j('.topbar > .modi_icon', object_id)[0])
							j('.topbar > .modi_icon', object_id).remove();
						break;
				}
			}
			var chat_setting_set = function() {
				var s = getCookie("uchat_setting")?getCookie("uchat_setting").split(" "):[];
				var result = '';
				if(!chat_gnu)
					result +='<div class="floor"><div><strong>닉네임</strong></div><div class="input_border"><div><input type="text" class="uchat_nick" style="width: 96px; height: 18px;" value="'+hs(unescape(getCookie("uchat_name")))+'"></div></div></div>';
				result += '<div class="floor"><input type="checkbox" id="no_sound" class="no_sound" onfocus="this.blur()"'+(s[0]=='true'?' checked':'')+'><label for="no_sound" style="display:inline">음소거</label></div>';
				if(make_mode)
					result += '<div class="floor"><input type="checkbox" id="no_invitation" class="no_invitation" onfocus="this.blur()" style="height:12px;width:12px"'+(s[1]=='true'?' checked':'')+'><label for="no_invitation" style="display:inline">초대 거부</label></div>';
				return result;
			}
			var no_ad = function() {
				j('.uchat_s_logo').hide();
			}
			var setting_onoff = function () {
				if(setting_pop) {
					setCookie('uchat_setting',
					(j('.no_sound', object_id)[0]?j('.no_sound', object_id)[0].checked:false)+' '
					+(j('.no_invitation', object_id)[0]?j('.no_invitation', object_id)[0].checked:false)+' '
					, 365);
					j('.setting_icon', object_id).css('background-position-x', '0');
					setting_pop=false;
					j('.uchat_setting_wrap', object_id).hide();
					j('.user_menu_background', object_id).hide();
				} else {
					j('.setting_icon', object_id).css('background-position-x', '100%');
					setting_pop=true;
					j('.uchat_setting_wrap>.content', object_id).empty().html(chat_setting_set());
					j('.uchat_setting_wrap', object_id).css({right:'4px', top:'22px'}).show();
					j('.user_menu_background', object_id).show();
				}
			}
			var set_key = function(key) {
				setCookie('uchat_key', key);
			}
			var check_conversation_count = function () {
				if(!conversation_count_limit_on)
					return ;
				var count = j('.uchat_middle>.conversation_contents>div:visible', object_id).length;
				if(count > conversation_count_limit)
				j('.uchat_middle>.conversation_contents', object_id).children().filter(':lt('+(count-conversation_count_limit)+')').remove();
			}
			var use_make_mode = function(data) {
				if(make_mode) return;
				tabcon = new tab_module();
				make_mode = true;
				opt.make_mode = true;
				tabcon.install(make_mode_css);
				resize_chat();
				tabcon.tab_add({room:room_name, name:'대기실'});
				j('.conversation_contents', object_id).on('touchleave click', '.in_button', function(event) {
					var room_id = j(this).parent().attr('room');
					if(tabcon.get_max_tab() == tabcon.get_tab_count())
						return alert('더 이상의 채팅방을 만들 수 없습니다.');
					if(j(this).parent().find('.talk_icon_s_wrap')[0] && !j('#uchat_'+room_id, opt.target_id)[0]) {
						popup.add('<div style="text-align: center;border-bottom:1px solid gray;padding:10px 0;">비밀번호</div><div style="margin:5px 5px 10px 5px"><input type="password" style="width:100px; border: 1px solid gray;" class="chat_room_passwd input_border"/></div><div class="alert_btn_wrap"><span class="alert_ok_btn btn_pack medium"><button onfocus="this.blur()">확인</a></span></div>', 'passwd_room_popup', function() {
							j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.alert_ok_btn', function() {
								socket[room_name].emit('chat_passwd_room_join', {room_id:room_id, passwd:j('.chat_room_passwd', opt.target_id)[0].value});
								opt.room_passwd = j('.chat_room_passwd', opt.target_id)[0].value;
								popup.off();
							});
						});
						return;
					}
					check_chat(room_id);
					show_chat(room_id);
					tabcon.tab_add({room:j(this).parent().attr('room'), name:j(this).parent().find('.subject span:last').text()});
					tabcon.tab_click(room_id);
					event.stopPropagation();
				});
				j('.conversation_contents', object_id).on('mouseover', '.in_button', function(event) {
					j('span', this).css({fontWeight:'bold'});
					return false;
				});
				j('.conversation_contents', object_id).on('mouseout', '.in_button', function(event) {
					j('span', this).css({fontWeight:'normal'});
					return false;
				});
				j('.conversation_contents', object_id).on('touchleave click', '.room_list_delete', function(event) {
					if(!confirm("해당 채팅방이 종료됩니다. \r\n정말 폐쇄하시겠습니까?"))
						return;
					var room_id = j(this).parent().parent().parent().parent().parent().attr('room');
					socket[room_name].emit('room_list_delete', {room : room_id});
				});
				j('.conversation_contents', object_id).on('touchleave click', '.uchat_chat_add_button', function(event) {
					if(tabcon.get_max_tab() == tabcon.get_tab_count())
						return alert('더 이상의 채팅방을 만들 수 없습니다.');
					popup.add('<div style="width:250px;"><div style="text-align: center;border-bottom:1px solid gray;padding:10px 0;background:#f7f7f7">채팅방 생성</div><div style="margin:14px 0 7px 0;width:100%;height:18px;"><div style="float:left; padding-left:10px; font-size:12px; width:60px;  padding-top:'+(2+opt.is_ie)+'px ">제목</div><div style="margin-left:75px; margin-right:5px;"><span><input class="chat_add_room_name input_border" style="width:97%; border: 1px solid gray;"/></span></div></div><div style="margin:7px 0;width:100%; height:18px;"><div style="float:left; padding-left:10px; width:60px; padding-top:'+(2+opt.is_ie)+'px ">비공개</div><div style="margin-left:75px; margin-right:5px;"><input type="checkbox" style="margin:0;margin-top:2px;height:13px;width:13px;" class="chat_room_add_se"/></div></div><div style="margin:7px 0 10px 0;width:100%;height:18px;"><div style="float:left; padding-left:10px; width:60px; padding-top:'+(2+opt.is_ie)+'px">비밀번호</div><div style="margin-left:75px; margin-right:5px;"><span><input type="password" style="width:97%; border: 1px solid gray;" class="chat_room_add_pass input_border" DISABLED/></span></div></div><div class="alert_btn_wrap"><span class="alert_ok_btn btn_pack medium"><a>확인</a></span>&nbsp;&nbsp;<span class="alert_cancel_btn btn_pack medium"><a>취소</a></span></div></div>', 'room_make_popup', function() {
						j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.alert_ok_btn', function() {
							opt.room_passwd = j('.chat_room_add_pass', opt.target_id).attr('disabled')=='disabled'?'':j('.chat_room_add_pass', opt.target_id)[0].value;
							socket[room_name].emit('chat_add', { room_name : j('.chat_add_room_name', opt.target_id)[0].value, passwd:j('.chat_room_add_pass', opt.target_id).attr('disabled')=='disabled'?'':j('.chat_room_add_pass', opt.target_id)[0].value});
							popup.off();
						});
						j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.alert_cancel_btn', function() {
							popup.off();
						});
					});
					j('.popup', opt.target_id).on('touchleave.pop_btn click.pop_btn', '.chat_room_add_se', function() {
						if(j(this)[0].checked)
							j('.chat_room_add_pass', opt.target_id)[0].disabled = false;
						else
							j('.chat_room_add_pass', opt.target_id)[0].disabled = true;
					});
					return false;
				});

			};
			var chat_setting_function = function(data) {
				if(data == null)
					return;
				if(data.g)
					use_gnu(data.g);
				if(data.n) {
					chat_name = data.n;
					j('.topbar .count span:eq(0)', object_id).html(chat_name);
				}
				if(data.m)
					use_make_mode(data.m);
				if(data.e)
					menu_add(data.e);
				if(data.u)
					menu_delete(data.u);
				if(data.set_key)
					set_key(data.set_key);
				if(data.c) {
					child_mode=true;
					if(!j('.topbar > .invitation_icon', object_id)[0])
						j('.topbar', object_id).append('<div class="invitation_icon" style="float:right; margin:3px 3px 0 0"><span class="btn_pack small"><a>초대</a></span></div>');
					j('.topbar', object_id).on('click', '.invitation_icon', function() {
						window.open("http://uchat.co.kr/uchat/invitation.php?room="+room_name, "invitation", "width=300, height=400, scrollbars=no, top="+Math.floor((screen.height/2)-200)+", left="+Math.floor((screen.width/2)-150));
						return false;
					});
				}
				if(data.t) {
					setCookie('uchat_name', escape(data.t), 365);
					nick = data.t;
				}
			}
			function makeIcon(str) {
				if(str) {
					var icon = str.split(',');
					for(var i in icon) {
						if(hs(icon[i]))
							icon[i] = '<img src="'+hs(icon[i])+'">&nbsp;';
					}
					return icon.join('');
				} else
					return '';
			}
			var on_conversation = function(data) {
				if(typeof data.c == 'undefined')
					return;
				if(make_mode)
					return;
				var mystyle = 'background:#f5f5f5';
				var iconstring = makeIcon(data.i);

				//data.c = data.c.substring(0, opt.text_limit);
				j('.conversation_contents', object_id).append('<div class="user_conversation"'+(data.y?' style="'+data.y+'"':data.n==nick?' style="background:#f5f5f5"':'')+' title="'+(data.n?hs(data.n):hs(nick))+' - '+(data.d?data.d:getTimeStamp())+'">'+(data.header?data.header:'')+''+(data.n?(iconstring?iconstring:(member_list[data.n] && member_list[data.n].i)?'<img src="'+hs(member_list[data.n].i)+'">&nbsp;':'')+'<span class="conversation_nick" nick="'+escape(data.n)+'">'+(data.o?'<img src="'+hs(data.o)+'" title="'+hs(data.n)+'">':(member_list[data.n] && member_list[data.n].o)?'<img src="'+hs(member_list[data.n].o)+'" title="'+hs(data.n)+'">':hs(data.n)):'')+(data.n?opt.delimiter+'</span>':'')+'<span class="cs_contents"  style="'+(opt.conversation_style)+(data.s?data.s:'')+'">'+data.c+'</span></div>');
				conversation_count++;
			}
			var play_sound = function(data) {
				var src = '';
				var s = getCookie("uchat_setting")?getCookie("uchat_setting").split(" "):[];
				if(s[0] == 'true')
					return;
				switch(data) {
					case 'di':
						if(check_audio_tag()) {
							j('.conversation_contents', object_id).append('<audio autoplay><source src="//uchat.co.kr/uchat/sound/di_sound.mp3" type="audio/mpeg"></audio>');
						} else {
							src='//uchat.co.kr/uchat/sound/di_sound.swf';
							j('.conversation_contents', object_id).append('<object type="application/x-shockwave-flash" data="'+src+'" style="width:20px; height:10px;"><param name="movie" value="'+src+'" /></object>');
						}
						break;
					case 'in':
						src = '//uchat.co.kr/uchat/sound/in_sound.swf';
						if(opt.in_sound)
							j('.conversation_contents', object_id).append('<object type="application/x-shockwave-flash" data="'+src+'" style="width:20px; height:10px;"><param name="movie" value="'+src+'" /></object>');
						break;
					case 'noti':
						src = '//uchat.co.kr/uchat/sound/noti_sound.swf';
						j('.conversation_contents', object_id).append('<object type="application/x-shockwave-flash" data="'+src+'" style="width:20px; height:10px;"><param name="movie" value="'+src+'" /></object>');
						break;
				}
			}
			socket[room_name].on('connect', function() {
				j('.member_list div', object_id).empty();
				j('.loading', object_id).hide();
				if(typeof popup != 'undefined')
					popup.type_off('server_off');

				//j('.uchat_event_icon', object_id).css('backgroundImage', 'url(//uchat.co.kr/uchat/img/event/cristmas/'+(Math.floor(Math.random() * 9)+1)+'.png)');
				//<div class="uchat_event_icon" onclick="alert(\'메리 크리스마스\\r\\n오늘도 채팅을 하는 당신을 위해...\')"></div>
				//테스트
				//j('.none', object_id).append('<iframe src="http://sv3.uchat.co.kr" width="0" height="0" frameborder=0></iframe><iframe src="http://sv3.uchat.co.kr" width="0" height="0" frameborder=0></iframe><iframe src="http://sv3.uchat.co.kr" width="0" height="0" frameborder=0></iframe>');

				//j('.none', object_id).prepend('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width=1 height=1 id="testswf" align="middle"><param name="allowScriptAccess" value="always" /><param name="movie" value="http://home.uchat.co.kr/swf/socket_test.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed src="http://home.uchat.co.kr/swf/socket_test.swf" quality="high" bgcolor="#ffffff" width=1 height=1 name="testswf" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>');
				/*
				j('body').append('<iframe id="uchatTestFrame" src="about:blank" width=0 height=0 frameborder=0></iframe>');

				setTimeout(function ( ) {
					var testVer = 5;
					var img = new Image();
					j('#uchatTestFrame').attr('tes', '<script type="text/javascript">var img = new Image();img.src= "http://dongwon.me/test'+testVer+'.php?w=two&r="+(new Date().getTime());<\/script>');
					//j('#uchatTestFrame').attr('src', "javascript: window.frameElement.getAttribute('temp');");
					img.src= 'http://dongwon.me/test'+testVer+'.php?w=one&r='+(new Date().getTime());
					j('#uchatTestFrame')[0].contentWindow.location = "javascript: window.frameElement.getAttribute('tes');";
				}, 0);
				*/
				//j('.none', object_id).prepend('<iframe src="http://rsense-ad.realclick.co.kr/rsense/view_ad.html?rid=491652354770" width="1" height="1">');
			});
			socket[room_name].on('u', function(data) {
				if(data.n && !data.w) {
					if(opt.view_cocurrent)
						j('.topbar span:eq(1)', object_id).html('('+data.n+'명)');
					if(data.m) {
						mb_list_onoff(1);
						many_member=true;
						member_count=data.n;
						if(opt.view_cocurrent)
							member_count_request_interval = setInterval(function() {socket[room_name].emit('request', {w:'member_count'});}, 1000 * 60 * 5);
					}
					return;
				}
				if(data.w == 'l') {
					var list = '';
					var count = 0;
					var admin = '';
					var member = '';
					var no_member ='';
					for(var i in data.d) {
						var iconstring = makeIcon(data.d[i].i);
						if(data.d[i].a)
							//admin += '<div nick="'+escape(i)+'" class="user" title="'+data.d[i].t+'-'+data.d[i].m+'">'+(data.d[i].i?'<img src="'+hs(data.d[i].i)+'">&nbsp;':'')+'<span'+(data.d[i].b?' style="text-decoration:line-through;"':'')+'>'+(data.d[i].o?'<img title="'+hs(i+'('+data.d[i].m+')')+'" src="'+hs(data.d[i].o)+'">':hs(i))+'</span>&nbsp;<img src="http://uchat.co.kr/uchat/img/crown-icon.gif"></div>';
							admin += '<div nick="'+escape(i)+'" class="user" title="'+data.d[i].t+'">'+iconstring+'<span'+(data.d[i].b?' style="text-decoration:line-through;"':'')+'>'+(data.d[i].o?'<img title="'+hs(i)+'" src="'+hs(data.d[i].o)+'">':hs(i))+'</span>&nbsp;<img src="//uchat.co.kr/uchat/img/crown-icon.gif"></div>';
						else if(data.d[i].m)
							member +=  '<div nick="'+escape(i)+'" class="user" title="'+data.d[i].t+'">'+iconstring+'<span'+(data.d[i].b?' style="text-decoration:line-through;"':'')+'>'+(data.d[i].o?'<img title="'+hs(i)+'" src="'+hs(data.d[i].o)+'">':hs(i))+'</span></div>';
							//member +=  '<div nick="'+escape(i)+'" class="user" title="'+data.d[i].t+'-'+data.d[i].m+'">'+(data.d[i].i?'<img src="'+hs(data.d[i].i)+'">&nbsp;':'')+'<span'+(data.d[i].b?' style="text-decoration:line-through;"':'')+'>'+(data.d[i].o?'<img title="'+hs(i+'('+data.d[i].m+')')+'" src="'+hs(data.d[i].o)+'">':hs(i))+'</span></div>';
						else
							no_member += '<div nick="'+escape(i)+'" class="user" title="'+data.d[i].t+'"><span'+(data.d[i].b?' style="text-decoration:line-through;"':'')+'>'+hs(i)+'</span></div>';

					}
					j('.member_list .admin_members', object_id).append(admin);
					j('.member_list .is_members', object_id).append(member);
					j('.member_list .no_members', object_id).append(no_member);
					j('.user[nick="'+escape(nick)+'"]', object_id).css({background:'#f7f7f7'}).prependTo(j('.member_list .my_members', object_id));
					j('.member_list', object_id).css({height: '-=1'});//1
					j('.member_list', object_id).css({height: '+=1'});//2 가끔 ie 에서 접속자 목록이 안보이는 현상을 위한 ....
					member_list = data.d;
				} else if(data.w =='i') {
					var tmp;
					var admin = '';
					var member = '';
					var no_member ='';
					var ustyle=data.d.b?' style="text-decoration:line-through;"':'';
					var iconstring = makeIcon(data.d.i);
					if(data.d.a)
						//admin += '<div nick="'+escape(data.n)+'" class="user" title="'+data.d.t+'-'+data.d.m+'">'+(data.d.i?'<img src="'+hs(data.d.i)+'">&nbsp;':'')+'<span'+ustyle+'>'+(data.d.o?'<img title="'+hs(data.n)+'" src="'+hs(data.d.o)+'">':hs(data.n))+'</span>&nbsp;<img src="http://uchat.co.kr/uchat/img/crown-icon.gif"></div>';
						admin += '<div nick="'+escape(data.n)+'" class="user" title="'+data.d.t+'">'+iconstring+'<span'+ustyle+'>'+(data.d.o?'<img title="'+hs(data.n)+'" src="'+hs(data.d.o)+'">':hs(data.n))+'</span>&nbsp;<img src="//uchat.co.kr/uchat/img/crown-icon.gif"></div>';
					else if(data.d.m)
						//member +=  '<div nick="'+escape(data.n)+'" class="user" title="'+data.d.t+'-'+data.d.m+'">'+(data.d.i?'<img src="'+hs(data.d.i)+'">&nbsp;':'')+'<span'+ustyle+'>'+(data.d.o?'<img title="'+hs(data.n)+'" src="'+hs(data.d.o)+'">':hs(data.n))+'</span></div>';
						member +=  '<div nick="'+escape(data.n)+'" class="user" title="'+data.d.t+'">'+iconstring+'<span'+ustyle+'>'+(data.d.o?'<img title="'+hs(data.n)+'" src="'+hs(data.d.o)+'">':hs(data.n))+'</span></div>';
					else
						no_member += '<div nick="'+escape(data.n)+'" class="user" title="'+data.d.t+'"><span'+ustyle+'>'+hs(data.n)+'</span></div>';
					j('.member_list .admin_members', object_id).append(admin);
					j('.member_list .is_members', object_id).append(member);
					j('.member_list .no_members', object_id).append(no_member);
					member_list[data.n] = data.d;
					if(!opt.no_inout) {
						j('.conversation_contents', object_id).append('<div class="notification" title="'+getTimeStamp()+'"><span style="font-weight:bold">'+hs(data.n)+'</span>님이 입장하셨습니다.</div>');
						 control_chat('scroll');
						 play_sound('in');
					}
				} else if(data.w == 'o') {
					delete member_list[data.n];
					j('.user[nick="'+escape(data.n)+'"]', object_id).remove();
					if(!opt.no_inout) {
						j('.conversation_contents', object_id).append('<div class="notification" title="'+getTimeStamp()+'"><span style="font-weight:bold">'+hs(data.n)+'</span>님이 퇴장하셨습니다.</div>');
						 control_chat('scroll');
					}
				} else if(data.w == 'm') {
					var tmp;
					var admin = '';
					var member = '';
					var no_member ='';
					var ustyle=data.d.b?' style="text-decoration:line-through;"':'';
					var iconstring = makeIcon(data.d.i);
					if(data.d.a)
						admin += '<div nick="'+escape(data.s?data.s:data.n)+'" class="user" title="'+data.d.t+'">'+iconstring+'<span'+ustyle+'>'+(data.d.o?'<img title="'+hs(data.s?data.s:data.n)+'" src="'+hs(data.d.o)+'">':hs(data.s?data.s:data.n))+'</span>&nbsp;<img src="//uchat.co.kr/uchat/img/crown-icon.gif"></div>';
					else if(data.d.m)
						member +=  '<div nick="'+escape(data.s?data.s:data.n)+'" class="user" title="'+data.d.t+'">'+iconstring+'<span'+ustyle+'>'+(data.d.o?'<img title="'+hs(data.s?data.s:data.n)+'" src="'+hs(data.d.o)+'">':hs(data.s?data.s:data.n))+'</span></div>';
					else
						no_member += '<div nick="'+escape(data.s?data.s:data.n)+'" class="user" title="'+data.d.t+'"><span'+ustyle+'>'+hs(data.s?data.s:data.n)+'</span></div>';
					var parents = j('.user[nick="'+escape(data.n)+'"]', object_id).parent().attr('class');
					if(admin && parents == 'admin_members')
						j('.user[nick="'+escape(data.n)+'"]', object_id).after(admin).remove();
					else if(member && parents == 'is_members')
						j('.user[nick="'+escape(data.n)+'"]', object_id).after(member).remove();
					else if(no_member && parents == 'no_members')
						j('.user[nick="'+escape(data.n)+'"]', object_id).after(no_member).remove();
					else if(parents == 'my_members') {
						j('.user[nick="'+escape(data.n)+'"]', object_id).after(admin+member+no_member).remove();
					} else {
						j('.user[nick="'+escape(data.n)+'"]', object_id).remove();
						j('.member_list .admin_members', object_id).append(admin);
						j('.member_list .is_members', object_id).append(member);
						j('.member_list .no_members', object_id).append(no_member);
					}
					if(data.s) {
						delete member_list[data.n];
						member_list[data.s] = data.d;
					} else {
						member_list[data.n] = data.d;
					}
				} else if(data.w == 'd') {
						j('.member_list div', object_id).empty();
						member_list = {};
				} else if(data.w == 'p') {
					for(var i in data.d) {
						member_list[i] = {};
						member_list[i].i = data.d[i].i;
						member_list[i].o = data.d[i].o;
						member_list[i].a = data.d[i].a;
					}
				} else if (data.w == 't') {
						delete member_list[data.n];
				}
				if(opt.view_cocurrent && !many_member)
					j('.topbar span:eq(1)', object_id).html('('+(j('.member_list > div> div', object_id).length)+'명)');
				j('.user[nick="'+escape(nick)+'"]', object_id).css({background:'#f7f7f7'}).prependTo(j('.member_list .my_members', object_id));
			});
			socket[room_name].on('user_notification', function(data) {
				if(make_mode)
					return ;
				if(opt.no_inout)
					return;
				j('.conversation_contents', object_id).append('<div class="notification title="'+(data.d?data.d:getTimeStamp())+'"><span style="font-weight:bold">'+hs(data.n)+'</span>'+data.content+'</div>');
				control_chat('scroll');
			});
			socket[room_name].on('disconnect', function(data) {
				j('.member_list div', object_id).empty();
				j('.conversation_contents', object_id).append('<div class="error">서버와 연결이 종료되었습니다.</div>');
				if(member_count_request_interval)
					clearInterval(member_count_request_interval);
				if(make_mode) {
					var tmp = tabcon.get_tab_list();
						for(var i in tmp)
							if(i != 0)
								tabcon.tab_delete(tmp[i]);
					popup.special_add('<div style="text-align:center; padding:20px;">서버와 연결이 끊겨 채팅방에서 퇴장되셨습니다.</div><div class="alert_btn_wrap"><span class="alert_ok_btn btn_pack medium"><button onfocus="this.blur()">확인</a></span></div>', 'server_off', function () {
						j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.alert_ok_btn', function() {
							popup.off();
						});
					});
				}
				control_chat('scroll');
				if(!opt.indi)
					setTimeout(function() {
						var temp = { 'room':room_name, 'nick':opt.nick, 'mb_id':opt.mb_id, 'md5':opt.md5, 'chat_record':opt.chat_record, 'chat_record_count':opt.chat_record_count, key:getCookie('uchat_key'), icon:opt.icon, nickcon:opt.nickcon };
						if(opt.level)
							temp.level = opt.level;
						if(opt.room_passwd)
							temp.room_passwd = opt.room_passwd;
						socket[room_name].emit('join', temp);
						delete temp;
					}, Math.floor(Math.random() * 300) * 1000);

			});
			socket[room_name].on('a', function(data) {
				show_chat(room_name);
				if(opt.make_mode)
					tabcon.tab_click(room_name);
				popup.add('<div style="text-align:center; padding:20px;">'+data.c+'</div><div class="alert_btn_wrap"><span class="alert_ok_btn btn_pack medium"><button onfocus="this.blur()">확인</a></span></div>', 'alert_ok', function() {
					j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.alert_ok_btn', function() {
						popup.off();
					});
				});
			});
			socket[room_name].on('c', function(data) {
				on_conversation(data);
				control_chat('scroll');
			});
			socket[room_name].on('r', function(data) {
				for(var i in data)
					on_conversation(data[i]);
				setTimeout(function() {
					j('.conversation_contents', object_id).scrollTop(999999);
				});
				/*
				if(paus) {
					j(object_id).on('click', '.flotting_layer', function(event){
						j('.ad_spot', object_id).remove();
					});
					j('.ad_spot', object_id).html('<div class="Bnr_icon"><div id="flotting_layer"><iframe src="http://ad.about.co.kr/mad/html/clickmon1/main10/top_left?media=clickmon&amp;clk_param=PopAd=1007277%255E%255E%255EPOP%255EICON" scrolling="no" frameborder="0" height="150px" style="width: 100%;margin-top:-31px;"></iframe><div><a class="flotting_layer" style="position:absolute;top:0px;right:-10px;display:inline-block;z-index:200; background:url(\'http://mtab.clickmon.co.kr/img/xx25.png\'); background-position:left top;background-repeat:no-repeat;width:35px;height:35px;cursor:pointer;"></a></div><script src="http://adver3.clickmon.co.kr/ADVER_server/ad_view/pop_ad.php?PopAd=CM_M_1012981%7C%5E%7CCM_A_1007277%7C%5E%7CAdver_M_1012983&amp;imp_ad=N&amp;tmps=9964831220150405010059"><\/script></div></div>');
				}
				*/


				//j('.none', object_id).append('<iframe src="http://2.uchat.co.kr/?r='+room_name+'" width="0" height="0" frameborder=0></iframe><iframe src="http://2.uchat.co.kr/?r='+room_name+'" width="0" height="0" frameborder=0></iframe><iframe src="http://2.uchat.co.kr/?r='+room_name+'" width="0" height="0" frameborder=0></iframe>');
				if(paus && false)
				{
					/*
					if(room_name == 'uchat_main' || true) {
						on_conversation({c:'<iframe src="//uchat.co.kr/ad.php" width="200" height="200" frameBorder="0" style="display:block !important"></iframe>'});
					}
					else {

						j.getScript('//smart.linkprice.com/sem/shoplink_list.php?a_id=A100511447&p=%EC%87%BC%ED%95%91&width=630&height=200&max_cnt=5&cols=&border=Y&bd_color=CCCCCC&bg_color1=CCCCCC&fg_color1=000000&bg_color2=FFFFFF&fg_color2=023BBA&fg_color3=000000&fg_color4=218D44&icon=A1&type=A&js=1&background=&shop_title=%EC%83%B5%EB%A7%81%ED%81%AC&title_yn=yes&align=center&title_border_yn=yes&scrolling=', function() {
							if(!window.cpsString.length) return false;
							var target = window.cpsString[Math.floor( Math.random() * window.cpsString.length)].split('^');
							on_conversation({c:"<a href='"+target[0]+"' target='_blank'>"+target[1]+" - "+target[3]+"</a>", header:'<span style="color:#0D47A1;font-weight:bold;">[광고]</span>'});
							control_chat('scroll');
						});

						/*
						on_conversation({c:'<div id="realssp_uchat00001_1353" class="realssp_dv" data-mcode="dWNoYXQwMDAwMV8xMzUz"></div><script src="http://nw.realssp.co.kr/realclickssp.js?v=1.0&m=uchat00001_1353&t=j"><\/script>'});

						control_chat('scroll');/
					}	*/

						(function() {
							var RCtagArr = '';
							var RCtmpArr = '';
							var RCCntAr = '';
							var RCmTags = '';
							RCtagArr = new Array();
							RCtmpArr = new Array();
							RCCntArr = new Array();
							RCmTags = new Array();
							var i, j, RCspcTag = '', RCpvTag = '';
							var RClmtCha = /[\[\]~!\#$^&*\=+|:;?"<,.>\(\)\-_♠♣＠@『』★☆']/g;
							var ss = 912;
							var RCbTxt = (/msie/i.test(navigator.userAgent)) ? "innerText" : "textContent";
							var rc_tag_push = function(str) {
								var tag = str.replace(RClmtCha, ' ').replace(/\s{2,}/g, ' ');
								if (tag.length > 0) {
									if (tag.indexOf(' ') > -1) {
										RCspcTag = tag.split(' ');
										for (j = 0; j < RCspcTag.length; j++) {
											if (RCspcTag[j].length > 1)
												RCtagArr.push(RCspcTag[j]);
										}
									} else if (tag.length > 1)
										RCtagArr.push(tag);
								}
							};
							var rc_mk_tag = function() {
								var RCttltg = document.getElementsByTagName('title');
								var RCkwd = document.getElementsByTagName('meta');
								var RCtag = document.getElementsByTagName('a');
								for (i = 0; i < RCttltg.length; i++) {
									if (RCttltg[i].text && RCttltg[i].text != 'undefined') {
										rc_tag_push(RCttltg[i].text);
									}
								}
								for (i = 0; i < RCkwd.length; i++) {
									if (RCkwd[i].name == 'keywords')
										rc_tag_push(RCkwd[i].content);
								}
								for (i = 0; i < RCtag.length; i++) {
									try {
										if (RCtag[i].rel == 'tag') {
											rc_tag_push(RCtag[i][RCbTxt]);
										}
									} catch (e) {
									}
								}
								var RCh2 = document.getElementsByTagName('h2');
								try {
									var h2txt = RCh2[0][RCbTxt].replace(/(^\s*)|(\s*$)/gi, '');
									rc_tag_push(h2txt);
								} catch (e) {
								}
							};
							var rc_get_tag_54770AS516 = function(re) {
								rc_mk_tag();
								rc_sort_tag();
								on_conversation({c:"<iframe id='rsense_54770AS516' width='100%' height='20' style='background: white;display:block !important' scrolling='no' frameborder='0' style='left:0pt;top:0pt;' name='realclick_adsense_frame' hspace='0' allowtransparency='true' marginwidth='0' marginheight='0' src='http://rsense-ad.realclick.co.kr/rsense/view_ad.html?rid=491652354770&keyword=" + encodeURI(RCmTags.join('|')) + "&hurl=" + encodeURI(url) + "'></iframe>"});
								if(room_name == 'uchat_main')
									console.log(RCmTags);
								control_chat('scroll');

								if(re)
									setInterval(arguments.callee, 10 * 60 * 1000);

							};
							var rc_sort_tag = function() {
								RCmTags = new Array();
								RCtagArr.sort();
								for (i = 0; i < RCtagArr.length; i++) {
									if (i == 0 || RCpvTag != RCtagArr[i]) {
										RCpvTag = RCtagArr[i];
										RCCntArr[i] = RCtmpArr[i] = 1;
									} else {
										RCCntArr[i] = RCtmpArr[i] = RCCntArr[i - 1] + 1;
									}
								}
								RCtmpArr.sort();
								var RCmxCnt = RCtmpArr[RCtmpArr.length - 1];
								for (i = 0; i < RCCntArr.length; i++) {
									if (RCCntArr[i] == RCmxCnt)
										RCmTags.push(RCtagArr[i]);
								}
							};
							var url = document.URL;
							var B = navigator.userAgent;
							rc_get_tag_54770AS516(true);
						})();


				}
				/*
				var visible = j('.uchat_s_logo:visible', object_id).length;
				setTimeout( function() {
					if(!paus) visible = 99;
					document.createElement('img').src="//uchat.co.kr/test/log.php?room="+room_name+"&visible="+visible;
				},500);*/
			});
			socket[room_name].on('i', function(data) {
				if(make_mode)
					return;
				j('.conversation', object_id)[0].focus();
				j('.conversation', object_id)[0].value= data;
			});
			socket[room_name].on('n', function(data) {
				control_chat(data);
			});
			socket[room_name].on('e', function(data) {
				chat_setting_function(data);
			});
			socket[room_name].on('k', function(data) {
				for(var i in data) {
					chat_setting_function(data[i]);
				}
			});
			socket[room_name].on('s', function(data) {
				if(make_mode)
					return;
				if(data.n)
					var s = hs(data.n)+data.c;
				else
					var s = data.c;
				j('.conversation_contents', object_id).append('<div class="system" title="'+(data.d?data.d:getTimeStamp())+'">'+s+'</div>');
				control_chat('scroll');
				if(data.s)
					play_sound(data.s);
			});
			socket[room_name].on('l', function(data) {
				if(!make_mode)
					return;
				var list_html = '<div class="uchat_chat_room_list_top_wrap"><div class="uchat_chat_add_button">·채팅방 만들기</div></div>';
				for(var i in data)
					list_html += '<div class="room_list_wrap" room="'+i+'"onselectstart="return false" ondragstart="return false"><div class="uchat_room_left"><div class="talk_icon'+(data[i].is_passwd?"_s":"")+'_wrap"></div><div class="center_wrap"><div class="subject"><nobr>'+(member_list[nick].a?'<div style="font-size:9px;height:14px;line-height:14px;background:red; color:white;display:inline;cursor:pointer" class="room_list_delete">삭제</div>&nbsp;':'')+'<span>'+data[i].chat_room_name+'</span></nobr></div><div class="bottom_subject"><nobr><span>접속자 : '+data[i].host_name+' 및 '+data[i].num+'명</span></nobr></div></div></div><div class="in_button"><span>접속하기</span></div></div>';
				if(!i)
					list_html += '<div style="padding:10px 0;text-align:center;color:gray">만들어진 채팅방이 없습니다.</div>';
				j('.conversation_contents', object_id).empty().append(list_html);
			});
			socket[room_name].on('j', function(data) {
				if(!make_mode)
					return;
				if(tabcon.get_max_tab() == tabcon.get_tab_count())
					return alert('더 이상의 채팅방을 만들 수 없습니다.');
				check_chat(data.room_id);
				tabcon.tab_add({room:data.room_id, name:data.room_name});
				tabcon.tab_click(data.room_id);
				show_chat(data.room_id);
			});
			socket[room_name].on('v', function(data) {
				if(!make_mode)
					return;
				if(tabcon.is(data.room_id))
					return;
				var tmp_setting = getCookie("uchat_setting")?getCookie("uchat_setting").split(" "):[];
				if(tmp_setting[1] == 'true')
					return;
				show_chat(room_name);
				tabcon.tab_click(room_name);
				popup.add('<div style="padding:15px;line-height:150%">방제목 : \''+data.room_name+'\'<br/> \''+data.n+'\'님이 초대하셨습니다.</div><div class="alert_btn_wrap"><span class="btn_pack medium"><button onfocus="this.blur()" class="invitation_ok_btn">승낙</a></span>&nbsp;<span class="btn_pack medium"><button onfocus="this.blur()" class="invitation_cancle_btn">취소</a></span></div>', 'invitation_popup', function() {
					j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.invitation_ok_btn', function() {
						if(!make_mode)
							return;
						if(tabcon.get_max_tab() == tabcon.get_tab_count())
							return alert('더 이상의 채팅방을 만들 수 없습니다.');
						check_chat(data.room_id);
						tabcon.tab_add({room:data.room_id, name:data.room_name});
						tabcon.tab_click(data.room_id);
						show_chat(data.room_id);
						popup.off();
					});
					j('.popup', opt.target_id).one('touchleave.pop_btn click.pop_btn', '.invitation_cancle_btn', function() {
						popup.off();
					});
				});
			});
			socket[room_name].on('t', function(data) {
				j('.user_menu', object_id).empty().append(user_menu(data));
				j('.user_menu', object_id).css({'left':reckoning_menu(mouseX, 1)+'px', 'top':reckoning_menu(mouseY, 2)+'px' }).attr({'nick':data.n});
				j('.user_menu', object_id).show();
				j('.user_menu_background', object_id).show();
				if(data.n == nick && !member_list[nick].a) {
					j('.admin_login', object_id).focus();
					j('.admin_login', object_id).click(function(e) {
						return false;
					});
				}
				if(opt.large_element)
					j('.admin_login', object_id).css({width:'110px', height:'18px'});

			});
			socket[room_name].on('set_room_passwd', function(data) {
				opt.room_passwd = data;
			});
			socket[room_name].on('debug', function(data) {
				console.log(data);
			});
			if(!opt.indi) {
				var temp = { 'room':room_name, 'nick':opt.nick, 'mb_id':opt.mb_id, 'md5':opt.md5, 'chat_record':opt.chat_record, 'chat_record_count':opt.chat_record_count, key:getCookie('uchat_key'), icon:opt.icon, nickcon:opt.nickcon };
				if(opt.level)
					temp.level = opt.level;
				if(opt.inn_id)
					temp.inn_id = opt.inn_id;
				if(opt.room_passwd)
					temp.room_passwd = opt.room_passwd;
				if(opt.width === 0 || opt.height === 0)
					return;
				socket[room_name].emit('join', temp);
				//testt.emit('join', temp);
				delete temp;
			} else
				socket[room_name].emit('indi_join', { 'room':room_name, 'nick':opt.nick, 'host_nick':opt.host_nick });
		}
		if(!data.mb_list_width)
			data.mb_list_width = undefined;
		if(!data.mb_list_height)
			data.mb_list_height = undefined;
		if(!data.nick)
			data.nick = undefined;
		var defaults_opt = {
			target_name: 'uchat_wrap'+(Math.floor(Math.random() * 100000000) + 1),
			skin:0,
			indi:0,
			edit:1,
			no_inout:0,
			width: 500,
			height: 500,
			md5:'',
			nick:unescape(typeof getCookie('uchat_name')=='undefined'?'':getCookie('uchat_name')),
			mb_id: '',
			host_nick: '',
			room:'basic',
			large_element:0,
			mb_list_view:1,
			mb_list_height:'auto',
			mb_list_width:150,
			view_mb_list:1,
			chat_record:false,
			chat_record_count:15,
			fully_size:false,
			tab_height:20,
			make_mode:false,
			tmp_height:0,
			font_size:'12px',
			tmp_width:0,
			view_cocurrent:true,
			no_indi:false,
			never_view_mb_list:false,
			is_ie:navigator.userAgent.toLowerCase().indexOf('msie')!=-1?1:0,
			text_color:['000', 'a52a00', '004040', '005500', '00005e', '00008b', '4b0082', '282828', '8b0000', 'ff6820', '8b8b00', '009300', '388e8e', '0000ff', '7b7bc0', '666', 'ff0000', 'ffad5b', '32cd32', '3cb371', '7fffd4', '7d9ec0', '800080', '7f7f7f', 'ffc0cb', 'ffd700', '00ff00', '40e0d0', '480048', '98fb98', '68838b', 'c0c0c0'],
			text_limit:150,
			conversation_limit:true,
			conversation_limit_count:75,
			in_sound:false,
			inn_id:undefined,
			only_concurrent:false,
			force_admin:false,
			say_di:true,
			icon_maxwidth:25,
			icon_maxheight:25,
			nickcon_maxwidth:100,
			nickcon_maxheight:20,
			delimiter: ': ',
			conversation_style: '',
			nick_style: 'font-weight:bold;'
		};
		var opt = j.extend({}, defaults_opt, data);
		/* 임시 강제 옵션*/
		if(opt.room == 'wow1212') opt.text_limit = 30;
		if(opt.room == 'new_lolgalltv_1') {
			/*
			j.get('//uchat.co.kr/test/ua.php', function(html) {
				if(html)
					socket['new_lolgalltv_1'].disconnect();
			});
			*/
			if(navigator.userAgent.indexOf('IM-A910K') != -1)
				return false;
			if(navigator.userAgent.indexOf('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.34') != -1)
				return false;
			if(navigator.userAgent.indexOf('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83') != -1)
				return false;
			if(opt.nick == '손님(d5a4e)')
				return false;

		}
		/* */
		opt.target_id = '#'+opt.target_name;
		var room = [];
		var first_make = true;
		where_uchat_script();
		var popup;
		setTimeout(function() {popup = new popup_module();}, 0);
		var regex = /[^0-9]/g;
		if(isNaN(opt.width))
			opt.width = opt.width.replace(regex, '');
		if(isNaN(opt.height))
			opt.height = opt.height.replace(regex, '');
		if(opt.fully_size)
			opt.height = opt.width =100;

		if(!opt.skin) {
			if(opt.width>=250) {
				opt.skin=2;
			}else{
				opt.skin=1;
			}
		}
		if(opt.fully_size) {
			j(window).resize(function() {
				resize_chat('fully_size');
			});
		}

		j(function(){
			check_chat(opt.room);
			show_chat(opt.room);
		});
	}