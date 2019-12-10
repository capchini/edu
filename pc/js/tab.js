window.addEventListener("load", function(){
	var n=0;
	var title=document.querySelectorAll(".tab_title > ul > li");
	var desc=document.querySelectorAll(".tab_content .desc");
	for(var i=0; i<title.length; i++){
		title[i].index=i;

		if(i == 0){
			title[i].classList.add("active");
			desc[i].classList.add("on");
		}
		title[i].addEventListener("click", function(e){
				e.preventDefault();
				n=e.currentTarget.index;

				for(var j=0; j<title.length; j++){
					if(n == j){
						title[j].classList.add("active");
						desc[j].classList.add("on");
					}
					else{
						title[j].classList.remove("active");
						desc[j].classList.remove("on");
					}
				}
		});
	};
});
