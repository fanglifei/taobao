$(function(){
	//$('.sec:gt(0)').hide();
	$('#xs_container li').click(function(){
		var i=$(this).index()-1;
		$('.sec').hide();
		$('.sec').eq(i).show();
	});
});