$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		if($(".tab").hasClass("active") == false){
			$(".mobile").show();
			$(".tab").addClass("active");
			$("body").addClass("fixed");
		}
		else{
			$(".mobile").hide();
			$(".tab").removeClass("active");
			$("body").removeClass("fixed");
		}
	});

	$(".sub").hide();
	$(".main").click(function(e){
		e.preventDefault();
		if($(".main").hasClass("active") == false){
			$(".sub").slideUp(300);
			$(this).next(".sub").slideDown(300);
			$(this).addClass("active");
		}
		else{
			$(this).next(".sub").slideUp(300);
			$(this).removeClass("active");
		}
	});
});
