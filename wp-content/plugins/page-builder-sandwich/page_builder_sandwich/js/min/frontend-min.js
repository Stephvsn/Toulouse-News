!function(view){if(window.MSInputMethodContext&&document.documentMode||navigator.appVersion.indexOf("MSIE 10")!==-1){var constructors=["SVGSVGElement","SVGGElement"],dummy=document.createElement("dummy");if(!constructors[0]in view)return!1;if(Object.defineProperty){var innerHTMLPropDesc={get:function(){return dummy.innerHTML="",Array.prototype.slice.call(this.childNodes).forEach(function(node,index){dummy.appendChild(node.cloneNode(!0))}),dummy.innerHTML},set:function(content){var self=this,allNodes=Array.prototype.slice.call(self.childNodes),fn=function(to,node){if(1!==node.nodeType)return!1;var newNode=document.createElementNS("http://www.w3.org/2000/svg",node.nodeName);Array.prototype.slice.call(node.attributes).forEach(function(attribute){newNode.setAttribute(attribute.name,attribute.value)}),"TEXT"===node.nodeName&&(newNode.textContent=node.innerHTML),to.appendChild(newNode),node.childNodes.length&&Array.prototype.slice.call(node.childNodes).forEach(function(node,index){fn(newNode,node)})};content=content.replace(/<(\w+)([^<]+?)\/>/,"<$1$2></$1>"),allNodes.forEach(function(node,index){node.parentNode.removeChild(node)}),dummy.innerHTML=content,Array.prototype.slice.call(dummy.childNodes).forEach(function(node){fn(self,node)})},enumerable:!0,configurable:!0};try{constructors.forEach(function(constructor,index){Object.defineProperty(window[constructor].prototype,"innerHTML",innerHTMLPropDesc)})}catch(ex){}}else Object.prototype.__defineGetter__&&constructors.forEach(function(constructor,index){window[constructor].prototype.__defineSetter__("innerHTML",innerHTMLPropDesc.set),window[constructor].prototype.__defineGetter__("innerHTML",innerHTMLPropDesc.get)})}}(window),function(){function CustomEvent(event,params){params=params||{bubbles:!1,cancelable:!1,detail:void 0};var evt=document.createEvent("CustomEvent");return evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail),evt}(window.MSInputMethodContext&&document.documentMode||navigator.appVersion.indexOf("MSIE 10")!==-1)&&(CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent)}(),window.pbsIsRTL=function(){var html=document.querySelector("html");return"rtl"===html.getAttribute("dir")},window.pbsIsMobile=function(){return navigator.userAgent.match(/(Mobi|Android)/)},window._pbsFixRowWidth=function(element){var dataWidth=element.getAttribute("data-width");return dataWidth?(element.parentNode.classList.contains("pbs-col")?window._pbsRowReset(element):"undefined"!=typeof dataWidth&&dataWidth?"full-width"===dataWidth?window._pbsFullWidthRow(element):window._pbsFullWidthRow(element,!0):window._pbsRowReset(element),clearTimeout(window._pbsFixRowWidthsResizeTrigger),void(window._pbsFixRowWidthsResizeTrigger=setTimeout(function(){window._pbsFixRowWidthsResizeNoReTrigger=!0,window.dispatchEvent(new CustomEvent("resize"))},1))):void window._pbsRowReset(element)},window._pbsRowReset=function(element){element.style.width="",element.style.position="",element.style.maxWidth="",window.pbsIsRTL()?element.style.right="":element.style.left="",element.style.webkitTransform="",element.style.mozTransform="",element.style.msTransform="",element.style.transform=""},window._pbsFullWidthRow=function(element,fitToContentWidth){var origWebkitTransform=element.style.webkitTransform,origMozTransform=element.style.mozTransform,origMSTransform=element.style.msTransform,origTransform=element.style.transform;element.style.width="auto",element.style.position="relative",element.style.maxWidth="none",element.style.webkitTransform="",element.style.mozTransform="",element.style.msTransform="",element.style.transform="",element.style.marginLeft="0px",element.style.marginRight="0px","undefined"!=typeof fitToContentWidth&&fitToContentWidth&&(element.style.paddingLeft="",element.style.paddingRight=""),element.parentNode.style.overflowX="visible",window.pbsIsRTL()?element.style.right="0px":element.style.left="0px";var bodyWidth=document.body.clientWidth,rect=element.getBoundingClientRect(),bodyRect=document.body.getBoundingClientRect();if(element.style.width=bodyWidth+"px",element.style.position="relative",element.style.maxWidth=bodyWidth+"px",window.pbsIsRTL()?element.style.right=rect.right-bodyRect.right+"px":element.style.left=-rect.left+bodyRect.left+"px",element.style.webkitTransform=origWebkitTransform,element.style.mozTransform=origMozTransform,element.style.msTransform=origMSTransform,element.style.transform=origTransform,"undefined"!=typeof fitToContentWidth&&fitToContentWidth){var paddingLeft,paddingRight,actualWidth=rect.width;window.pbsIsRTL()?(paddingLeft=bodyWidth-actualWidth+rect.right-bodyRect.right,paddingRight=-rect.right+bodyRect.right):(paddingLeft=rect.left-bodyRect.left,paddingRight=bodyWidth-actualWidth-rect.left+bodyRect.left),actualWidth>bodyWidth&&(paddingLeft=0,paddingRight=0),element.style.paddingLeft=paddingLeft+"px",element.style.paddingRight=paddingRight+"px"}},window.pbsFixRowWidths=function(){var fullRows=document.querySelectorAll(".pbs-row");Array.prototype.forEach.call(fullRows,function(el){window._pbsFixRowWidth(el)})},window.addEventListener("resize",function(){return window._pbsFixRowWidthsResizeNoReTrigger?void delete window._pbsFixRowWidthsResizeNoReTrigger:void window.pbsFixRowWidths()}),window.pbsFixRowWidths(),function(){var ready=function(){setTimeout(function(){window.pbsFixRowWidths()},1)};"loading"!==document.readyState?ready():document.addEventListener("DOMContentLoaded",ready)}(),window.pbsInitAllPretext=function(){var codes;"undefined"!=typeof hljs&&(codes=document.querySelectorAll(".pbs-main-wrapper pre"),Array.prototype.forEach.call(codes,function(el){hljs.highlightBlock(el)}))},function(){var ready=function(){window.pbsInitAllPretext()};"loading"!==document.readyState?ready():document.addEventListener("DOMContentLoaded",ready)}(),window.pbsTabsRefreshActiveTab=function(tabsElement){var radio=tabsElement.querySelector(".pbs-tab-state:checked"),id=radio.getAttribute("id"),tabs=tabsElement.querySelector(".pbs-tab-tabs ");if(tabs){var activeTab=tabs.querySelector(".pbs-tab-active");activeTab&&activeTab.classList.remove("pbs-tab-active"),activeTab=tabs.querySelector('[for="'+id+'"]'),activeTab&&activeTab.classList.add("pbs-tab-active")}},function(){var ready=function(){var elements;document.addEventListener("change",function(ev){ev.target&&ev.target.classList.contains("pbs-tab-state")&&window.pbsTabsRefreshActiveTab(ev.target.parentNode)}),elements=document.querySelectorAll('[data-ce-tag="tabs"]'),Array.prototype.forEach.call(elements,function(el){el=el.querySelector('[data-ce-tag="tab"]'),el&&el.classList.add("pbs-tab-active")})};"loading"!==document.readyState?ready():document.addEventListener("DOMContentLoaded",ready)}(),function(root,factory){"function"==typeof define&&define.amd?define(factory):"object"==typeof exports?module.exports=factory:root.fluidvids=factory()}(this,function(){"use strict";function matches(src){return new RegExp("^(https?:)?//(?:"+fluidvids.players.join("|")+").*$","i").test(src)}function getRatio(height,width){return parseInt(height,10)/parseInt(width,10)*100+"%"}function fluid(elem){if((matches(elem.src)||matches(elem.data))&&!elem.getAttribute("data-fluidvids")){var wrap=document.createElement("div");elem.parentNode.insertBefore(wrap,elem),elem.className+=(elem.className?" ":"")+"fluidvids-item",elem.setAttribute("data-fluidvids","loaded"),wrap.className+="fluidvids",wrap.style.paddingTop=getRatio(elem.height,elem.width),wrap.appendChild(elem)}}function addStyles(){var div=document.createElement("div");div.innerHTML="<p>x</p><style>"+css+"</style>",head.appendChild(div.childNodes[1])}var fluidvids={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},css=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),head=document.head||document.getElementsByTagName("head")[0];return fluidvids.render=function(){for(var nodes=document.querySelectorAll(fluidvids.selector.join()),i=nodes.length;i--;)fluid(nodes[i])},fluidvids.init=function(obj){for(var key in obj)fluidvids[key]=obj[key];fluidvids.render(),addStyles()},fluidvids}),function(){var ready=function(){var mainContainer,style,columns;if(columns=document.querySelectorAll(".pbs-col"),Array.prototype.forEach.call(columns,function(el){el.innerHTML.match(/^\s*$/gi)&&(el.innerHTML="")}),pbsFrontendParams.force_overflow)for(mainContainer=document.querySelector(".pbs-main-wrapper");mainContainer&&"BODY"!==mainContainer.tagName;)style=getComputedStyle(mainContainer),"hidden"===style.overflow&&(mainContainer.style.overflow="visible"),mainContainer=mainContainer.parentNode};"loading"!==document.readyState?ready():document.addEventListener("DOMContentLoaded",ready)}(),function(){var pbsGetWindowSize=function(){return window.innerWidth>800?"desktop":window.innerWidth<400?"phone":"tablet"},ready=function(){var view=pbsGetWindowSize();"desktop"!==view&&window.pbsSwitchResponsiveStylesFrontend(pbsGetWindowSize(),"desktop"),window.addEventListener("resize",function(){var newView=pbsGetWindowSize();window.pbsSwitchResponsiveStylesFrontend(pbsGetWindowSize(),view),view=newView})};"loading"!==document.readyState?ready():document.addEventListener("DOMContentLoaded",ready)}(),window.pbsSwitchResponsiveStylesFrontend=function(screenSize,oldScreenSize){if(screenSize!==oldScreenSize&&!document.querySelector(".pbs-main-wrapper").classList.contains("pbs-editing")){var styles={"margin-top":'.pbs-main-wrapper [style*="margin:"], .pbs-main-wrapper [style*="margin-top:"]',"margin-bottom":'.pbs-main-wrapper [style*="margin:"], .pbs-main-wrapper [style*="margin-bottom:"]'},sizes=["tablet","phone"];for(var style in styles)if(styles.hasOwnProperty(style)){for(var selector=styles[style],i=0;i<sizes.length;i++)selector+=", [data-pbs-"+sizes[i]+"-"+style+"]";var elements=document.querySelectorAll(selector);Array.prototype.forEach.call(elements,function(element){element.style[style]&&element.setAttribute("data-pbs-"+oldScreenSize+"-"+style,element.style[style]),element.getAttribute("data-pbs-"+screenSize+"-"+style)?element.style[style]=element.getAttribute("data-pbs-"+screenSize+"-"+style):"phone"===screenSize&&element.getAttribute("data-pbs-tablet-"+style)?element.style[style]=element.getAttribute("data-pbs-tablet-"+style):element.getAttribute("data-pbs-desktop-"+style)?element.style[style]=element.getAttribute("data-pbs-desktop-"+style):element.style[style]=""}),"desktop"===screenSize&&(elements=document.querySelectorAll("[data-pbs-"+screenSize+"-"+style+"]"),Array.prototype.forEach.call(elements,function(element){element.removeAttribute("data-pbs-"+screenSize+"-"+style)}))}}};