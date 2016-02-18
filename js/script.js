$(document).ready(function() {
	console.log("jQuery started");
	$('.circle').click(function() {
		alert($(this).attr('class'));
	})
});