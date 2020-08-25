document.createElement("canvas").getContext||function(){function t(){return this.context_||(this.context_=new a(this))}function e(t){var e=t.srcElement;switch(t.propertyName){case"width":e.style.width=e.attributes.width.nodeValue+"px",e.getContext().clearRect();break;case"height":e.style.height=e.attributes.height.nodeValue+"px",e.getContext().clearRect()}}function i(t){var e=t.srcElement;e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}function r(t,e){for(var i=[[1,0,0],[0,1,0],[0,0,1]],r=0;r<3;r++)for(var s=0;s<3;s++){for(var n=0,a=0;a<3;a++)n+=t[r][a]*e[a][s];i[r][s]=n}return i}function s(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function n(t){var e,i=1;if("rgb"==(t=String(t)).substring(0,3)){var r=t.indexOf("(",3),s=t.indexOf(")",r+1),n=t.substring(r+1,s).split(",");e="#";for(var a=0;a<3;a++)e+=S[Number(n[a])];4==n.length&&"a"==t.substr(3,1)&&(i=n[3])}else e=t;return{color:e,alpha:i}}function a(t){this.m_=[[1,0,0],[0,1,0],[0,0,1]],this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*x,this.globalAlpha=1,this.canvas=t;var e=t.ownerDocument.createElement("div");e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",e.style.overflow="hidden",e.style.position="absolute",t.appendChild(e),this.element_=e,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function o(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),t.currentX_=r.x,t.currentY_=r.y}function h(t,e,i){if(function(t){for(var e=0;e<3;e++)for(var i=0;i<2;i++)if(!isFinite(t[e][i])||isNaN(t[e][i]))return!1;return!0}(e)&&(t.m_=e,i)){var r=e[0][0]*e[1][1]-e[0][1]*e[1][0];t.lineScale_=d(y(r))}}function l(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function c(){}var u=Math,_=u.round,f=u.sin,p=u.cos,y=u.abs,d=u.sqrt,x=10,g=x/2,m=Array.prototype.slice,v={init:function(t){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var e=t||document;e.createElement("canvas"),e.attachEvent("onreadystatechange",function(t,e,i){var r=m.call(arguments,2);return function(){return t.apply(e,r.concat(m.call(arguments)))}}(this.init_,this,e))}},init_:function(t){if(t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!t.styleSheets.ex_canvas_)var e=null,i="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}";try{(e=t.createStyleSheet()).owningElement.id="ex_canvas_",e.cssText=i}catch(t){(e=document.styleSheets[document.styleSheets.length-1]).cssText+="\r\n"+i}for(var r=t.getElementsByTagName("canvas"),s=0;s<r.length;s++)this.initElement(r[s])},initElement:function(r){if(!r.getContext){r.getContext=t,r.innerHTML="",r.attachEvent("onpropertychange",e),r.attachEvent("onresize",i);var s=r.attributes;s.width&&s.width.specified?r.style.width=s.width.nodeValue+"px":r.width=r.clientWidth,s.height&&s.height.specified?r.style.height=s.height.nodeValue+"px":r.height=r.clientHeight}return r}};v.init();for(var S=[],w=0;w<16;w++)for(var C=0;C<16;C++)S[16*w+C]=w.toString(16)+C.toString(16);var b=a.prototype;b.clearRect=function(){this.element_.innerHTML=""},b.beginPath=function(){this.currentPath_=[]},b.moveTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},b.lineTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},b.bezierCurveTo=function(t,e,i,r,s,n){var a=this.getCoords_(s,n);o(this,this.getCoords_(t,e),this.getCoords_(i,r),a)},b.quadraticCurveTo=function(t,e,i,r){var s=this.getCoords_(t,e),n=this.getCoords_(i,r),a={x:this.currentX_+2/3*(s.x-this.currentX_),y:this.currentY_+2/3*(s.y-this.currentY_)};o(this,a,{x:a.x+(n.x-this.currentX_)/3,y:a.y+(n.y-this.currentY_)/3},n)},b.arc=function(t,e,i,r,s,n){i*=x;var a=n?"at":"wa",o=t+p(r)*i-g,h=e+f(r)*i-g,l=t+p(s)*i-g,c=e+f(s)*i-g;o!=l||n||(o+=.125);var u=this.getCoords_(t,e),_=this.getCoords_(o,h),y=this.getCoords_(l,c);this.currentPath_.push({type:a,x:u.x,y:u.y,radius:i,xStart:_.x,yStart:_.y,xEnd:y.x,yEnd:y.y})},b.rect=function(t,e,i,r){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath()},b.strokeRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.stroke(),this.currentPath_=s},b.fillRect=function(t,e,i,r){var s=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.fill(),this.currentPath_=s},b.createLinearGradient=function(t,e,i,r){var s=new l("gradient");return s.x0_=t,s.y0_=e,s.x1_=i,s.y1_=r,s},b.createRadialGradient=function(t,e,i,r,s,n){var a=new l("gradientradial");return a.x0_=t,a.y0_=e,a.r0_=i,a.x1_=r,a.y1_=s,a.r1_=n,a},b.drawImage=function(t,e){var i,r,s,n,a,o,h,l,c=t.runtimeStyle.width,f=t.runtimeStyle.height;t.runtimeStyle.width="auto",t.runtimeStyle.height="auto";var p=t.width,y=t.height;if(t.runtimeStyle.width=c,t.runtimeStyle.height=f,3==arguments.length)i=arguments[1],r=arguments[2],a=o=0,h=s=p,l=n=y;else if(5==arguments.length)i=arguments[1],r=arguments[2],s=arguments[3],n=arguments[4],a=o=0,h=p,l=y;else{if(9!=arguments.length)throw Error("Invalid number of arguments");a=arguments[1],o=arguments[2],h=arguments[3],l=arguments[4],i=arguments[5],r=arguments[6],s=arguments[7],n=arguments[8]}var d=this.getCoords_(i,r),g=[];if(g.push(" <g_vml_:group",' coordsize="',10*x,",",10*x,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var m=[];m.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",_(d.x/x),",","Dy=",_(d.y/x),"");var v=d,S=this.getCoords_(i+s,r),w=this.getCoords_(i,r+n),C=this.getCoords_(i+s,r+n);v.x=u.max(v.x,S.x,w.x,C.x),v.y=u.max(v.y,S.y,w.y,C.y),g.push("padding:0 ",_(v.x/x),"px ",_(v.y/x),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",m.join(""),", sizingmethod='clip');")}else g.push("top:",_(d.y/x),"px;left:",_(d.x/x),"px;");g.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',x*s,"px;"," height:",x*n,'px;"',' cropleft="',a/p,'"',' croptop="',o/y,'"',' cropright="',(p-a-h)/p,'"',' cropbottom="',(y-o-l)/y,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",g.join(""))},b.stroke=function(t){var e=[],i=n(t?this.fillStyle:this.strokeStyle),r=i.color,s=i.alpha*this.globalAlpha;e.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',10*x," ",10*x,'"',' stroked="',!t,'"',' path="');for(var a={x:null,y:null},o={x:null,y:null},h=0;h<this.currentPath_.length;h++){var l=this.currentPath_[h];switch(l.type){case"moveTo":l,e.push(" m ",_(l.x),",",_(l.y));break;case"lineTo":e.push(" l ",_(l.x),",",_(l.y));break;case"close":e.push(" x "),l=null;break;case"bezierCurveTo":e.push(" c ",_(l.cp1x),",",_(l.cp1y),",",_(l.cp2x),",",_(l.cp2y),",",_(l.x),",",_(l.y));break;case"at":case"wa":e.push(" ",l.type," ",_(l.x-this.arcScaleX_*l.radius),",",_(l.y-this.arcScaleY_*l.radius)," ",_(l.x+this.arcScaleX_*l.radius),",",_(l.y+this.arcScaleY_*l.radius)," ",_(l.xStart),",",_(l.yStart)," ",_(l.xEnd),",",_(l.yEnd))}l&&((null==a.x||l.x<a.x)&&(a.x=l.x),(null==o.x||l.x>o.x)&&(o.x=l.x),(null==a.y||l.y<a.y)&&(a.y=l.y),(null==o.y||l.y>o.y)&&(o.y=l.y))}if(e.push(' ">'),t)if("object"==typeof this.fillStyle){var c=this.fillStyle,f=0,p={x:0,y:0},y=0,d=1;if("gradient"==c.type_){var g=c.x0_/this.arcScaleX_,m=c.y0_/this.arcScaleY_,v=c.x1_/this.arcScaleX_,S=c.y1_/this.arcScaleY_,w=this.getCoords_(g,m),C=this.getCoords_(v,S),b=C.x-w.x,T=C.y-w.y;(f=180*Math.atan2(b,T)/Math.PI)<0&&(f+=360),f<1e-6&&(f=0)}else{w=this.getCoords_(c.x0_,c.y0_);var P=o.x-a.x,k=o.y-a.y;p={x:(w.x-a.x)/P,y:(w.y-a.y)/k},P/=this.arcScaleX_*x,k/=this.arcScaleY_*x;var E=u.max(P,k);y=2*c.r0_/E,d=2*c.r1_/E-y}var M=c.colors_;M.sort(function(t,e){return t.offset-e.offset});var X=M.length,Y=M[0].color,L=M[X-1].color,A=M[0].alpha*this.globalAlpha,j=M[X-1].alpha*this.globalAlpha,V=[];for(h=0;h<X;h++){var z=M[h];V.push(z.offset*d+y+" "+z.color)}e.push('<g_vml_:fill type="',c.type_,'"',' method="none" focus="100%"',' color="',Y,'"',' color2="',L,'"',' colors="',V.join(","),'"',' opacity="',j,'"',' g_o_:opacity2="',A,'"',' angle="',f,'"',' focusposition="',p.x,",",p.y,'" />')}else e.push('<g_vml_:fill color="',r,'" opacity="',s,'" />');else{var H=this.lineScale_*this.lineWidth;H<1&&(s*=H),e.push("<g_vml_:stroke",' opacity="',s,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',function(t){switch(t){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}(this.lineCap),'"',' weight="',H,'px"',' color="',r,'" />')}e.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",e.join(""))},b.fill=function(){this.stroke(!0)},b.closePath=function(){this.currentPath_.push({type:"close"})},b.getCoords_=function(t,e){var i=this.m_;return{x:x*(t*i[0][0]+e*i[1][0]+i[2][0])-g,y:x*(t*i[0][1]+e*i[1][1]+i[2][1])-g}},b.save=function(){var t={};s(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=r([[1,0,0],[0,1,0],[0,0,1]],this.m_)},b.restore=function(){s(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},b.translate=function(t,e){h(this,r([[1,0,0],[0,1,0],[t,e,1]],this.m_),!1)},b.rotate=function(t){var e=p(t),i=f(t);h(this,r([[e,i,0],[-i,e,0],[0,0,1]],this.m_),!1)},b.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e,h(this,r([[t,0,0],[0,e,0],[0,0,1]],this.m_),!0)},b.transform=function(t,e,i,s,n,a){h(this,r([[t,e,0],[i,s,0],[n,a,1]],this.m_),!0)},b.setTransform=function(t,e,i,r,s,n){h(this,[[t,e,0],[i,r,0],[s,n,1]],!0)},b.clip=function(){},b.arcTo=function(){},b.createPattern=function(){return new c},l.prototype.addColorStop=function(t,e){e=n(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})},G_vmlCanvasManager=v,CanvasRenderingContext2D=a,CanvasGradient=l,CanvasPattern=c}();