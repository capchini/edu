window.addEventListener("load", function(){
	var controllsLi=document.querySelectorAll(".campus_wrap_controlls li");
	var campusMoving=document.querySelector(".campus_wrap_moving");
	var n=0;
	var moving;

	for(var i=0; i<controllsLi.length; i++){
		controllsLi[i].index=i;
		controllsLi[i].addEventListener("click", function(e){
			e.preventDefault();
			n=e.currentTarget.index;
			for(var i=0; i<controllsLi.length; i++){
				if(i == n){
					controllsLi[i].classList.add("active")
				}
				else{
					controllsLi[i].classList.remove("active")
				}
				moving=n*-1*100+"%";
				campusMoving.style.left=moving;
			}
		});

	}

});
