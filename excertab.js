var excersizes = ["push-up", "sit-up", "jumping-jack", "stretch"];
var minEx = 1;
var maxEx = 10;
var nextTime = 0;

if(chance.bool({likelihood:5})) createPopup();

function createPopup() {
	var hue = Math.floor(Math.random() * 360);
	var text = document.createElement("div");
	var num = chance.natural({min:minEx, max:maxEx});
	text.innerHTML = "Do " + num + " " + attache.plural(chance.pick(excersizes),num) + " NOW.";
	text.style.position= "relative";
	text.style.top= "calc(50% - 1em / 2)";
	text.style["text-align"]= "center";
	text.style["font-size"]= "1em";
	text.style.color =  'hsl(' + hue + ', 100%, 85%)';
	var container = document.createElement("div");
	container.style["background-color"] =  'hsl(' + hue + ', 50%, 50%)';
	container.style.width = "100%";
	container.style.height = "100%";
	container.style.position = "fixed";
	container.style["z-index"] = 10000;
	container.style.top = 0;
	container.style.left = 0;
	container.appendChild(text);
	container.onclick = function(){
		this.parentElement.removeChild(this);
	}
	document.body.insertBefore(container, document.body.childNodes[0]);
}