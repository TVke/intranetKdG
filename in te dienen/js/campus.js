// kaart
document.querySelector(".bovenkant h3").addEventListener("click",function() {
	document.getElementById("controller").classList.toggle("openMap");
});// antwerpen
document.querySelectorAll(".bovenkant h3")[1].addEventListener("click",function() {
	document.getElementById("controller").classList.toggle("openMap");
});

// bovenblok
function toon(classname) {
	document.getElementById("controller").classList.toggle(classname);
}
var bovenBlocks = document.querySelectorAll(".bovenkant div[class^='blok-']");

for(let i=0,ilen=bovenBlocks.length;i<ilen;++i) {
	bovenBlocks[i].addEventListener("mouseover", function (){toon("toon");});
	bovenBlocks[i].addEventListener("mouseout", function (){toon("toon");});
}

// onderblok
var onderBlocks = document.querySelectorAll(".onderkant div[class^='blok-']");

for(let i=0,ilen=onderBlocks.length;i<ilen;++i) {
	onderBlocks[i].addEventListener("mouseover", function (){toon("toononder");});
	onderBlocks[i].addEventListener("mouseout", function (){toon("toononder");});
}

// testbutton
document.querySelector("header button").addEventListener("click",testButton);
function testButton() {
	var links = document.querySelectorAll(".hyperlinks p");
	for (let i = 0, ilen = links.length; i < ilen; ++i) {
		links[i].classList.toggle("hidden");
	}
}

// glow function

var glow = function(element,time=500) {
	if(!element.classList.contains("glow")){
		element.classList.add("glow");
	}
	setTimeout(function () {
		if(element.classList.contains("glow")){
			element.classList.remove("glow");
		}
	},time);
};

var hyperlinks=[];
hyperlinks[0] = document.querySelectorAll(".hyperlinks p:first-child a");
hyperlinks[1] = document.querySelectorAll(".hyperlinks p:last-child a");

hyperlinks[0][0].addEventListener("click",function () {
	glow(document.getElementsByClassName("bovenkant")[0]);
	glow(document.getElementsByClassName("onderkant")[0]);
});
hyperlinks[0][1].addEventListener("click",function () {
	var wholeBlock = document.querySelectorAll(".blok-C, .blok-C div[class^='verdieping-']");
	for(let i=0,ilen=wholeBlock.length;i<ilen;++i){
		glow(wholeBlock[i]);
	}
});
hyperlinks[0][2].addEventListener("click",function () {
	toon("toon");
	setTimeout(function () {
		document.querySelector(".blok-C .verdieping-4").classList.add("hidden");
		document.querySelector(".blok-C").classList.add("hide");
	},500);
	setTimeout(function () {
		document.querySelector(".blok-C .verdieping-3").classList.add("hidden");
	},1000);
	setTimeout(function () {
		document.querySelector(".blok-C .verdieping-2").classList.add("hidden");
	},1500);
	setTimeout(function () {
		glow(document.querySelector(".blok-C .verdieping-1"));
	},2500);
	setTimeout(function () {
		document.querySelector(".verdieping-2").classList.remove("hidden");
	},3500);
	setTimeout(function () {
		document.querySelector(".verdieping-3").classList.remove("hidden");
	},4000);
	setTimeout(function () {
		document.querySelector(".verdieping-4").classList.remove("hidden");
		document.querySelector(".blok-C").classList.remove("hide");
	},4500);
	setTimeout(function () {
		toon("toon");
	},5000);
});
hyperlinks[0][3].addEventListener("click",function () {
	toon("zoom");
	setTimeout(function () {
		document.querySelector(".blok-C .verdieping-4").classList.add("hidden");
		document.querySelector(".blok-C").classList.add("hide");
	},500);
	setTimeout(function () {
		document.querySelector(".blok-C .verdieping-3").classList.add("hidden");
	},1000);
	setTimeout(function () {
		document.querySelector(".blok-C .verdieping-2").classList.add("hidden");
	},1500);
	setTimeout(function () {
		glow(document.querySelector(".blok-C .verdieping-1 .lokaal-06"),1000);
	},2500);
	setTimeout(function () {
		document.querySelector(".verdieping-2").classList.remove("hidden");
	},5500);
	setTimeout(function () {
		document.querySelector(".verdieping-3").classList.remove("hidden");
	},6000);
	setTimeout(function () {
		document.querySelector(".verdieping-4").classList.remove("hidden");
		document.querySelector(".blok-C").classList.remove("hide");
	},6500);
	setTimeout(function () {
		toon("zoom");
	},7000);
});
hyperlinks[1][0].addEventListener("click",function () {
	toon("toon");
	setTimeout(function () {
		toon("links");
		testButton();
	},500);
	setTimeout(function () {
		toon("toon");
	},1000);
});
hyperlinks[0][4].addEventListener("click",function () {
	glow(document.getElementsByClassName("bovenkant")[1]);
	glow(document.getElementsByClassName("onderkant")[1]);
});
hyperlinks[0][5].addEventListener("click",function () {
	toon("zoom");
	setTimeout(function () {
		document.querySelector("#antwerpen .blok-B .verdieping-3").classList.add("hidden");
		document.querySelector("#antwerpen .blok-B").classList.add("hide");
	},500);
	setTimeout(function () {
		glow(document.querySelector("#antwerpen .blok-B .verdieping-2 .lokaal-06"),1000);
	},1000);
	setTimeout(function () {
		document.querySelector("#antwerpen .blok-B .verdieping-3").classList.remove("hidden");
		document.querySelector("#antwerpen .blok-B").classList.remove("hide");
	},3000);
	setTimeout(function () {
		toon("zoom");
	},4500);
});
hyperlinks[1][1].addEventListener("click",function () {
	toon("toon");
	setTimeout(function () {
		toon("links");
		testButton();
	},500);
	setTimeout(function () {
		toon("toon");
	},1000);
});