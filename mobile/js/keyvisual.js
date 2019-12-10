$(function(){
	var n=0;
	var pos=0;

	setInterval(function(){
		n=n+1;
		pos=-1*100*n;
		$("#start	.keyvisual ul").animate({"margin-left" : pos+"vw"},300,function(){
			if(n == 3){
				n=0;
				pos=0;
				$("#start	.keyvisual ul").animate({"margin-left" : 0},0);
			}
		});
	},3000);
});﻿
