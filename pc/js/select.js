$(function(){
	var n;
	var listName="";
	$(".main_campus .sel_local dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
	});
	$(".main_campus .sel_local dd a").click(function(e){
		e.preventDefault();
		$(".main_campus .sel_local dd a").removeClass("active");
		$(this).addClass("active");

		listName=$(this).text();
		$(".main_campus .sel_local dt a").html(listName+"<span></span>");
		$(".main_campus .sel_local dt a").removeClass("active");
		$(".main_campus .sel_local dd").slideUp(300);

		n=$(this).parent().index();
		$(".main_campus .sel_center select option").prop("selected", false);
		$(".main_campus .sel_center select option").eq(n+1).prop("selected", true);
	});
});
