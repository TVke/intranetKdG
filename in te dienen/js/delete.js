var crosses = document.getElementsByClassName("cross");
var articles = document.getElementsByTagName("article");

for (let i = 0,ilen = crosses.length;i<ilen;++i) {
	crosses[i].addEventListener("mouseover",function () {
		articles[i].classList.add("open");
	});
	crosses[i].addEventListener("mouseout",function () {
		articles[i].classList.remove("open");
		articles[i].classList.remove("sluit");
	});
	crosses[i].addEventListener("click",function () {
		articles[i].classList.add("sluit");
		setTimeout(function () {
			articles[i].classList.add("delete");
		},1750);
	});
}