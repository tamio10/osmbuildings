var OSMBuildings=function(ja){var O=Math.PI,xa=O/2,Ea=O/4,Fa=180/O,Ga=256,ka=14,S=400,ya=S-50,T="latitude",U="longitude",I=0,H=1,J=2,da=3,za=za||Array,Ha=Math.exp,Ia=Math.log,Ja=Math.tan,Ka=Math.atan,la=Math.min,La=Math.max,ma=ja.document,E=function(){function V(i,l,m){if(m<0)m+=1;if(m>1)m-=1;if(m<1/6)return i+(l-i)*6*m;if(m<0.5)return l;if(m<2/3)return i+(l-i)*(2/3-m)*6;return i}function D(i,l,m,n){this.r=i;this.g=l;this.b=m;this.a=arguments.length<4?1:n}var W=D.prototype;W.toString=function(){return"rgba("+
[this.r,this.g,this.b,this.a].join(",")+")"};W.adjustLightness=function(i){var l=E.toHSLA(this);l.l+=i;l.l=Math.min(1,Math.max(0,l.l));var m,n;if(l.s===0)i=m=n=l.l;else{n=l.l<0.5?l.l*(1+l.s):l.l+l.s-l.l*l.s;var w=2*l.l-n;i=V(w,n,l.h+1/3);m=V(w,n,l.h);n=V(w,n,l.h-1/3)}return new E(~~(i*255),~~(m*255),~~(n*255),l.a)};W.adjustAlpha=function(i){return new E(this.r,this.g,this.b,this.a*i)};D.parse=function(i){if(~i.indexOf("#")){i=i.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);return new E(parseInt(i[1],
16),parseInt(i[2],16),parseInt(i[3],16),i[4]?parseInt(i[4],16)/255:1)}if(i=i.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new E(i[1],i[2],i[3],i[4]?i[5]:1)};D.toHSLA=function(i){var l=i.r/255,m=i.g/255,n=i.b/255,w=Math.max(l,m,n),x=Math.min(l,m,n),A,X=(w+x)/2,F;if(w===x)A=x=0;else{F=w-x;x=X>0.5?F/(2-w-x):F/(w+x);switch(w){case l:A=(m-n)/F+(m<n?6:0);break;case m:A=(n-l)/F+2;break;case n:A=(l-m)/F+4;break}A/=6}return{h:A,s:x,l:X,a:i.a}};return D}();return function(){function V(a){q=
ma.createElement("canvas");q.style.webkitTransform="translate3d(0,0,0)";q.style.position="absolute";q.style.pointerEvents="none";q.style.left=0;q.style.top=0;q.style.imageRendering="optimizeSpeed";a.appendChild(q);h=q.getContext("2d");h.lineCap="round";h.lineJoin="round";h.lineWidth=1;try{h.mozImageSmoothingEnabled=false}catch(e){}}function D(a,e){var b={};a/=Y;e/=Y;b[T]=e<=0?90:e>=1?-90:Fa*(2*Ka(Ha(O*(1-2*e)))-xa);b[U]=(a===1?1:(a%1+1)%1)*360-180;return b}function W(a,e){return a.replace(/\{ *([\w_]+) *\}/g,
function(b,d){return e[d]||""})}function i(a,e){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<200||b.status>299||b.responseText&&e(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function l(){if(!(!na||y<ka)){var a=D(P-Q,R-oa),e=D(P+K+Q,R+B+oa);ea&&ea.abort();ea=i(W(na,{w:a[U],n:a[T],e:e[U],s:e[T],z:y}),m)}}function m(a){var e,b,d,c=[],f=0,j=0;Z=ka;fa(y);ea=null;if(!(!a||a.meta.z!==y)){d=a.meta;b=a.data;if(u&&o&&u.z===d.z){f=u.x-
d.x;j=u.y-d.y;a=0;for(e=o.length;a<e;a++)c[a]=o[a][H][0]+f+","+(o[a][H][1]+j)}u=d;o=[];a=0;for(e=b.length;a<e;a++){o[a]=b[a];o[a][I]=la(o[a][I],ya);d=o[a][H][0]+","+o[a][H][1];o[a][da]=!(c&&~c.indexOf(d))}Aa()}}function n(a,e){var b=[],d,c,f,j,g,v,s,k,p=pa-y;d=0;for(c=a.length;d<c;d++){g=a[d];v=g[H];s=new za(v.length);f=0;for(j=v.length-1;f<j;f+=2){k=v[f+1];var r=la(1,La(0,0.5-Ia(Ja(Ea+xa*v[f]/180))/O/2));k={x:~~((k/360+0.5)*Y),y:~~(r*Y)};s[f]=k.x;s[f+1]=k.y}b[d]=[];b[d][I]=la(g[I]>>p,ya);b[d][H]=
s;b[d][J]=g[J];b[d][da]=e}return b}function w(a,e){if(typeof a==="object")A(a,!e);else{var b=ma.documentElement,d=ma.createElement("script");ja.jsonpCallback=function(c){delete ja.jsonpCallback;b.removeChild(d);A(c,!e)};b.insertBefore(d,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function x(a,e,b){if(b===undefined)b=[];var d,c,f,j=a[0]?a:a.features,g,v,s,k,p=e?1:0,r=e?0:1;if(j){d=0;for(a=j.length;d<a;d++)x(j[d],e,b);return b}if(a.type==="Feature"){g=a.geometry;d=a.properties}if(g.type===
"Polygon")v=[g.coordinates];if(g.type==="MultiPolygon")v=g.coordinates;if(v){e=d.height;j=E.parse(d.color||d.style.fillColor);d=0;for(a=v.length;d<a;d++){s=v[d][0];g=[];c=k=0;for(f=s.length;c<f;c++){g.push(s[c][p],s[c][r]);k+=e||s[c][2]||0}if(k){c=[];c[I]=~~(k/s.length);s=H;k=void 0;f=void 0;var t=void 0,M=void 0,C=0,z=void 0,ga=void 0;z=0;for(ga=g.length-3;z<ga;z+=2){k=g[z];f=g[z+1];t=g[z+2];M=g[z+3];C+=k*M-t*f}if((C/2>0?"CW":"CCW")==="CW")g=g;else{k=[];for(f=g.length-2;f>=0;f-=2)k.push(g[f],g[f+
1]);g=k}c[s]=g;if(j)c[J]=[j,j.adjustLightness(0.2)];b.push(c)}}}return b}function A(a,e){if(a){$=x(a,e);Z=0;fa(y);u={n:90,w:-180,s:-90,e:180,x:0,y:0,z:y};o=n($,true);Aa()}else{$=null;G()}}function X(a,e){K=a;B=e;Q=~~(K/2);oa=~~(B/2);aa=Q;ba=B;q.width=K;q.height=B}function F(a,e){P=a;R=e}function fa(a){y=a;Y=Ga<<y;N=1-(y-Z)*0.3/(pa-Z)}function Ba(){qa=true;G()}function Aa(){ca=0;clearInterval(ra);ra=setInterval(function(){ca+=0.1;if(ca>1){clearInterval(ra);ca=1;for(var a=0,e=o.length;a<e;a++)o[a][da]=
0}G()},33)}function G(){h.clearRect(0,0,K,B);if(u&&o)if(!(y<Z||qa)){var a,e,b,d,c,f,j,g,v=P-u.x,s=R-u.y,k,p,r,t,M,C,z,ga=ha.adjustAlpha(N),Ma=Ca.adjustAlpha(N);if(ia)h.strokeStyle=Da.adjustAlpha(N)+"";a=0;for(e=o.length;a<e;a++){c=o[a];p=false;f=c[H];k=[];b=0;for(d=f.length-1;b<d;b+=2){k[b]=j=f[b]-v;k[b+1]=g=f[b+1]-s;p||(p=j>0&&j<K&&g>0&&g<B)}if(p){h.fillStyle=(c[J]?c[J][0].adjustAlpha(N):ga)+"";b=c[da]?c[I]*ca:c[I];f=S/(S-b);j=[];g=[];b=0;for(d=k.length-3;b<d;b+=2){p=k[b];r=k[b+1];t=k[b+2];M=k[b+
3];C=sa(p,r,f);z=sa(t,M,f);if((t-p)*(C.y-r)>(C.x-p)*(M-r)){if(!g.length){g.unshift(r);g.unshift(p);g.push(C.x,C.y)}g.unshift(M);g.unshift(t);g.push(z.x,z.y)}else{ta(g);g=[]}j[b]=C.x;j[b+1]=C.y}ta(g);h.fillStyle=(c[J]?c[J][1].adjustAlpha(N):Ma)+"";ta(j,ia);h.fillStyle="rgba(240,0,0,0.25)";h.strokeStyle=Da.adjustAlpha(N)+"";c=[(j[0]+j[2]+j[4]+j[6])/4,(j[1]+j[3]+j[5]+j[7])/4];k=sa(c[0],c[1],S/(S-10));b=c[0];d=c[1];f=32.5*0.5522848;j=32.5*0.5522848;g=b+32.5;p=d+32.5;r=b;t=d;b-=32.5;d-=32.5;h.beginPath();
h.moveTo(b,t);h.bezierCurveTo(b,t-j,r-f,d,r,d);h.bezierCurveTo(r+f,d,g,t-j,g,t);h.bezierCurveTo(g,t+j,r+f,p,r,p);h.bezierCurveTo(r-f,p,b,t+j,b,t);h.closePath();h.fill();h.stroke();b=k.x;d=k.y;h.fillStyle="#ffcc00";h.beginPath();h.arc(b,d,3,0,O*2,true);h.closePath();h.fill();b=c[0]-32.5;d=c[0]+32.5;f=c[1]-32.5;j=c[1]+32.5;h.beginPath();h.moveTo(b,c[1]);h.bezierCurveTo((k.x+b)/2.05,c[1]+(k.y-c[1])*1.5,(k.x+d)/1.95,c[1]+(k.y-c[1])*1.5,d,c[1]);h.stroke();h.beginPath();h.moveTo(c[0],f);h.bezierCurveTo(c[0]+
(k.x-c[0])*1.5,(k.y+f)/2.05,c[0]+(k.x-c[0])*1.5,(k.y+j)/1.95,c[0],j);h.stroke()}}}}function ta(a,e){if(a.length){h.beginPath();h.moveTo(a[0],a[1]);for(var b=2,d=a.length;b<d;b+=2)h.lineTo(a[b],a[b+1]);h.closePath();e&&h.stroke();h.fill()}}function sa(a,e,b){return{x:~~((a-aa)*b+aa),y:~~((e-ba)*b+ba)}}var K=0,B=0,Q=0,oa=0,P=0,R=0,y,Y,ea,q,h,na,ia,ha=new E(200,190,180),Ca=ha.adjustLightness(0.2),Da=new E(145,140,135),$,u,o,N=1,ca=1,ra,Z=ka,pa=20,aa,ba,qa=false;this.VERSION="0.1.5a";this.render=function(){G();
return this};this.setStyle=function(a){a=(a=a)||{};ia=a.strokeRoofs!==undefined?a.strokeRoofs:ia;if(a.fillColor){ha=E.parse(a.fillColor);Ca=ha.adjustLightness(0.2)}G();return this};this.setData=function(a,e){console.warn("OSMBuildings.loadData() is deprecated and will be removed soon.\nUse OSMBuildings.loadData({url|object}, isLatLon?) instead.");A(a,e);return this};this.loadData=function(a){na=a;l();return this};this.geoJSON=function(a,e){w(a,e);return this};var ua,va,wa;this.VERSION+="-leaflet";
this.addTo=function(a){a.addLayer(this);return this};this.onAdd=function(a){this.map=a;V(a._panes.overlayPane);pa=a._layersMaxZoom;X(a._size.x,a._size.y);var e=a.getPixelOrigin();F(e.x,e.y);fa(a._zoom);var b=0,d=0;ua=function(){var c=L.DomUtil.getPosition(a._mapPane);aa=Q-(c.x-b);ba=B-(c.y-d);G()};va=function(){var c=L.DomUtil.getPosition(a._mapPane);b=c.x;d=c.y;q.style.left=-c.x+"px";q.style.top=-c.y+"px";aa=Q;ba=B;X(a._size.x,a._size.y);var f=a.getPixelOrigin();F(f.x-c.x,f.y-c.y);c=D(P,R);f=D(P+
K,R+B);if(u&&(c[T]>u.n||c[U]<u.w||f[T]<u.s||f[U]>u.e))l();G()};wa=function(){var c={zoom:a._zoom};qa=false;fa(c.zoom);if($){o=n($);G()}else l()};a.on({move:ua,moveend:va,zoomstart:Ba,zoomend:wa});if(a.options.zoomAnimation)q.className="leaflet-zoom-animated";a.attributionControl.addAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');G()};this.onRemove=function(a){a.attributionControl.removeAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');
a.off({move:ua,moveend:va,zoomstart:Ba,zoomend:wa});q.parentNode.removeChild(q);this.map=null};arguments.length&&this.addTo(arguments[0])}}(this);
