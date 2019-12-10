$(function(){
	var w=150;
	var amount=0;
	$(".rel_site_inner .direction a.prev").click(function(e){
		e.preventDefault();
		amount-=w;
		$(".rel_site_inner .site_wrapper ul").animate({left:amount}, 500, function(){
			$(this).append($(".rel_site_inner .site_wrapper ul li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	});
	$(".rel_site_inner .direction a.next").click(function(e){
		e.preventDefault();
		$(".rel_site_inner .site_wrapper ul").prepend($(".rel_site_inner .site_wrapper ul li:last-child"));
		amount-=w;
		$(".rel_site_inner .site_wrapper ul").css({left:amount});
		amount+=w;
		$(".rel_site_inner .site_wrapper ul").animate({left:amount}, 500);
	});
});
