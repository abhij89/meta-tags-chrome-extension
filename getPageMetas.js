var metas = document.getElementsByTagName('meta'); 
var metaArr = [];
for (var i=0; i<metas.length; i++) { 
	var name = metas[i].getAttribute("name");
	var property = metas[i].getAttribute("property");
	var httpequiv = metas[i].getAttribute("http-equiv");
	var content = metas[i].getAttribute("content");
	var charset = metas[i].getAttribute("charset");
	
	metaArr.push([name, property, httpequiv, content, charset]);
} 

chrome.runtime.sendMessage({
	method:"getMetas",
	metas:metaArr
});