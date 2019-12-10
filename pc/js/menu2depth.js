window.addEventListener("load", function(){
	var gnbs=document.querySelector(".GNB");
	var gnbLi=document.querySelectorAll("nav > ul > li");
	var gnbLiFirst=document.querySelector("nav > ul > li > ul > li:first-child");
	var gnbLiLast=document.querySelector("nav > ul > li:last-child > ul > li:last-child");
	var timer;
	var h=40;

	for(var i=0; i<gnbLi.length; i++){
		gnbLi[i].addEventListener("mouseenter", function(e){
			gnbs.classList.add("over");
		});
		gnbLi[i].addEventListener("mouseleave", function(e){
			gnbs.classList.remove("over");
		});
	};
	gnbLiFirst.addEventListener("focusin", function(){
		gnbs.classList.add("over");
	});
	gnbLiLast.addEventListener("focusout", function(){
		gnbs.classList.remove("over");
	});
});
