window.addEventListener("load", function(){
	var dtA=document.querySelector(".main_campus .sel_local dt a");
	var dd=document.querySelector(".main_campus .sel_local dd");
	var ddA=document.querySelectorAll(".main_campus .sel_local dd a");
	var option=document.querySelectorAll(".main_campus .sel_center select option");
	var n=0;
	var listName="";

	dtA.flag=false;

	dtA.addEventListener("click", function(e){
		e.preventDefault();

		if(dtA.flag == false){
			dtA.flag=true;
			dtA.classList.add("active");
			dtA.parentElement.nextElementSibling.style.display="block";
		}
		else{
			dtA.flag=false;
			dtA.classList.remove("active");
			dtA.parentElement.nextElementSibling.style.display="none";
		}
	});

	var listN;

	for(var i=0; i<ddA.length; i++){
		ddA[i].index=i;

		ddA[i].addEventListener("click", function(e){
			e.preventDefault();
			listN=e.currentTarget.index;
			// console.log("listN : "+listN);
			listName=e.currentTarget.innerHTML;
			listName=listName+"<span></span>"
			// console.log("listName : "+listName);
			dtA.innerHTML=listName;

			for(var j=0; j<ddA.length; j++){
				if(j == listN){
					ddA[j].classList.add("active");
				}
				else{
					ddA[j].classList.remove("active");
				}
			}
			dtA.flag=false;
			dtA.classList.remove("active");
			dtA.parentElement.nextElementSibling.style.display="none";

			for(j=0; j<option.length; j++){
				// console.log(j);
				if(j == (listN+1)){
					option[j].setAttribute("selected", true);
				}
				else{
					option[j].removeAttribute("selected");
				}
			}
		});
	}
});
