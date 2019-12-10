window.addEventListener("load", function(){
	var keyvisual={
		key1 : "keyvisual1-1.png",
		key2 : "keyvisual2-1.png",
		key3 : "keyvisual3-1.png",
		key4 : "keyvisual4-1.png",
	};

	var dataN=0;

	var keyvisualInner=document.getElementsByClassName("keyvisual_inner")[0];

	var keyvisualImage=document.createElement("div");
	keyvisualImage.setAttribute("class", "keyvisual_image");
	keyvisualInner.appendChild(keyvisualImage);

	var keyvisualControlls=document.createElement("div");
	keyvisualControlls.setAttribute("class", "keyvisual_controlls");
	keyvisualInner.appendChild(keyvisualControlls);

	var keyString="";
	var controllString="";
	keyString+='<ul>\n'
	controllString+='<ul>\n'
	for(key in keyvisual){
		keyString+='<li><a href=""><img src="images/'+keyvisual[key]+'" alt="키비쥬얼'+(dataN+1)+'"></a></li>\n'
		controllString+='<li><a href="">'+(dataN+1)+'</a></li>'
		dataN++;
	}
	keyString+='</ul>'
	controllString+='</ul>'
	keyvisualImage.innerHTML=keyString;
	keyvisualControlls.innerHTML=controllString;

	var controllsLi=document.querySelectorAll(".keyvisual_inner .keyvisual_controlls li");
	var campusMoving=document.querySelector(".keyvisual .keyvisual_inner .keyvisual_image");
	var n=0;
	var moving;


	for(var i=0; i<controllsLi.length; i++){
		controllsLi[i].index=i;
		if(i == 0){
			controllsLi[0].classList.add("active");
		}
		controllsLi[i].addEventListener("click", function(e){
			e.preventDefault();
			n=e.currentTarget.index;
			for(var i=0; i<controllsLi.length; i++){
				if(i == n){
					controllsLi[i].classList.add("active");
				}
				else{
					controllsLi[i].classList.remove("active");
				}
				moving=n*-1*100+"%";
				campusMoving.style.left=moving;
			}
		});
	}
});
