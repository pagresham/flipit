// alert('hi there');

$("document").ready(function() {
	// alert('hi');
	
	var pos1 = 1,
		pos2 = 1,
		pos3 = 1;
	
	//  ======= Box 1 =========
	
	$('.box1').click(function() {
		if (pos1 === 1){
			$(this).removeClass('b1b');
			$(this).addClass('b1a');
			pos1 = 2;
		}
		else {
			$(this).removeClass('b1a');
			$(this).addClass('b1b');
			pos1 = 1;
		}
	});

	// ======== Box 2 ===========
	
	$('.box2').click(function() {
		if (pos2 === 1) {
			$(this).removeClass('b2b').addClass('b2a');
			pos2 = 2;	
		}
		else {
			$(this).removeClass('b2a').addClass('b2b');
			pos2 = 1;
		}
	});

	//  ==========  Box 3 ============
	
	$('.box3').click(function() {
		if (pos3 === 1) {
			$(this).removeClass('b3b').addClass('b3a');
			pos3 = 2;	
		}
		else {
			$(this).removeClass('b3a').addClass('b3b');
			pos3 = 1;
		}
	});



});

