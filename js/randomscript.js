$(document).ready(function() {
	console.log("jQuery started");
	$('#libai_container').click(function() {
		$('#libai_container').css('visibility', 'hidden');
		$('#nightshining_container').css('visibility', 'visible');
	});
	$('#nightshining_container').click(function() {
		$('#nightshining_container').css('visibility', 'hidden');
		$('#portals').css('visibility', 'visible');
	});
	$('.circle').click(function() {
		alert($(this).attr('class'));
	});
});