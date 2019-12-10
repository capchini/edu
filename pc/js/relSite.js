window.addEventListener("load", function(){
	var prev=document.querySelector(".prev");
	var next=document.querySelector(".next");
	var siteUl=document.querySelector(".site_wrapper ul");
	var siteLi=document.querySelectorAll(".site_wrapper ul li");
	var w=127;
	var amount=0;

	prev.addEventListener("click", function(e){
		e.preventDefault();
		amount-=w;
		
	})
})
