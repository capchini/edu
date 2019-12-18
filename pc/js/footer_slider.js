window.addEventListener("load", function(){
	var w=150;
	var amount=0;
	var prev=document.querySelector(".rel_site_inner .direction a.prev");
	var next=document.querySelector(".rel_site_inner .direction a.next");
	var siteUl=document.querySelector(".rel_site_inner .site_wrapper ul");

	prev.addEventListener("click", function(e){
		e.preventDefault();
		amount-=w;
		var current=window.getComputedStyle(siteUl).left;
		current=parseInt(current);

		var timer=setInterval(function(){
			if(Math.abs(amount-current) > 10){
				current-=10;
				siteUl.style.left=current+"px";
			}
			else{
				current=amount;
				clearInterval(timer);
				var firstchild=siteUl.firstElementChild;
				var firstclone=firstchild.cloneNode(true);
				firstchild.remove(true);
				siteUl.appendChild(firstclone);
				amount+=w;
				siteUl.style.left=amount+"px";
			}
		}, 10);
	})

	next.addEventListener("click", function(e){
		e.preventDefault();
		var lastchild=siteUl.lastElementChild;
		var firstchild=siteUl.firstElementChild;
		var lastclone=lastchild.cloneNode(true);
		lastchild.remove(true);
		siteUl.insertBefore(lastclone, firstchild);
		amount-=w;
		siteUl.style.left=amount+"px";
		amount+=w;
		var current=window.getComputedStyle(siteUl).left;
		current=parseInt(current);
		var timer=setInterval(function(){
			if(Math.abs(current-amount) > 10){
				current+=10;
			}
			else{
				current=amount;
				clearInterval(timer);
			}
			siteUl.style.left=current+"px";
		}, 10);
	});
});
