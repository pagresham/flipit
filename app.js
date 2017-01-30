// alert('hi there');

$("document").ready(function() {
	// alert('hi');
	
	var pos = 1;
	

	$('.box').click(function() {
		if (pos === 1){
			$(this).removeClass('f2');
			$(this).addClass('f1');
			pos = 2;
		}
		else {
			$(this).removeClass('f1');
			$(this).addClass('f2');
			pos = 1;
		}
	});	
});

