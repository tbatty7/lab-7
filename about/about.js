$(function () {
	// $("li a").click(function () {
	// 	$(this).css('background', 'grey');  // This is just changing the background color
	// });
	$('li a').click(function() {
		$(this).html('Clicked!');
		$(this).toggleClass('background');
	});
});