jQuery(function() {
	
	new WOW().init();

	$('button').addClass('draw');
	
	$('.popup-slide_1').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	$('.popup-slide_2').magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	$('.popup-slide_3').magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	$('.popup-slide_4').magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	$('.popup-slide_5').magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

//$('.gallery').each(function() { // the containers for all your galleries
//    $(this).magnificPopup({
//        delegate: 'a', // the selector for gallery item
//        type: 'image',
//        gallery: {
//          enabled:true
//        }
//    });
//});
	
	$(window).scroll(function() {
		
		var st = $(this).scrollTop();
		
		if (st > 1) { 
			$('.head__navbar').addClass("glide");
		}
		
		else {
			$('.head__navbar').removeClass("glide");
		}
		
		
		
	});
	

	
	
}); //end ready