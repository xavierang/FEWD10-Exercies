/*document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}*/

$(document).ready(function(){
	//document is ready to use the following behaviours
	$('#grayButton').click(function(){
		$('body').css('background-color','grey');
		$('body').css('color','white');
	});

	$('#whiteButton').click(function(){
		$('body').css('background-color','white');
		$('body').css('color','black');
	});
});
