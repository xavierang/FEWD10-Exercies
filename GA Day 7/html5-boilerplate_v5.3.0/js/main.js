$(document).ready(function(){
	$('.accordion h3').click(function(){
		$(this).next().slideToggle();
	});

	$('.accordion a').click(function(event){
		event.preventDefault();
		
		if($(this).val()==='Expand All'){
			$(this).text('Collapse All');
		}

		if($(this).val()==='Collapse All'){
			$(this).text('Expand All');
		}
		
		$(this).parent().find('p').slideToggle();
	});
});