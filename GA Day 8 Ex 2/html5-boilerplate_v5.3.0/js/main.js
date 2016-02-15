$(document).ready(function(){
	var counter=0;
	$('.left').click(function(){
		$(this).parent().parent().css('background-color','green');
		counter=counter+1;
		$('.counter').html(counter);
	});

	$('.right').click(function(){
		$(this).parent().parent().css('background-color','red');
	});
});