$(document).ready(function() {
	$('#left-arrow').hover(
		function() { $('#left-arrow').css('opacity', 1); },
		function() { $('#left-arrow').css('opacity', .4); });


	$('#right-arrow').hover(
		function() { $('#right-arrow').css('opacity', 1); },
		function() { $('#right-arrow').css('opacity', .4); });


	$('#carousel-next').click(function() {
    var left = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (left == -2100) {
      return false;
    } else {
      $('#carousel').css("margin-left", left - 1050);
    }
  });


	$('#carousel-prev').click(function() {
    var right = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (right == 0) {
      return false;
    } else {
      $('#carousel').css('margin-left', right + 1050);
    }
  });

	$('#circle-interests').hover(
		function() { $('#circle-interests').css('opacity', 1); },
		function() { $('#circle-interests').css('opacity', .4); });

	$('#circle-work').hover(
		function() { $('#circle-work').css('opacity', 1);
		 },
		function() { $('#circle-work').css('opacity', .4); });

	$('#circle-education').hover(
		function() { $('#circle-education').css('opacity', 1); },
		function() { $('#circle-education').css('opacity', .4); });

	$('#circle-facebook').hover(
		function() { $('#circle-facebook').css('opacity', 1); },
		function() { $('#circle-facebook').css('opacity', .4); });

	$('#circle-linkedIn').hover(
		function() { $('#circle-linkedIn').css('opacity', 1); },
		function() { $('#circle-linkedIn').css('opacity', .4); });

	$('#circle-interests').click(function() {
		$('html, body').animate({
			scrollTop: $('#interests').offset().top}, 800);
	});

	$('#circle-work').click(function() {
		$('html, body').animate({
			scrollTop: $('#work-experience').offset().top}, 800);
	});

	$('#circle-education').click(function() {
		$('html, body').animate({
			scrollTop: $('#education').offset().top}, 800);
	});

	$('#show1').click(function() {
		var text = $('#show1').text();
		if (text == "Show") {
			$("#vista-show-text").slideDown("slow");
			$("#show1").text("Hide");
		} else{
			$("#vista-show-text").slideUp("slow");
			$("#show1").text("Show");
		}
	});

	$('#show2').click(function() {
		var text = $('#show2').text();
		if (text == "Show") {
			$("#folsom-show-text").slideDown("slow");
			$("#show2").text("Hide");
		} else{
			$("#folsom-show-text").slideUp("slow");
			$("#show2").text("Show");
		}
	});

	$('#show3').click(function() {
		var text = $('#show3').text();
		if (text == "Show") {
			$("#berkeley-show-text").slideDown("slow");
			$("#show3").text("Hide");
		} else{
			$("#berkeley-show-text").slideUp("slow");
			$("#show3").text("Show");
		}
	});


	$('#show4').click(function() {
		var text = $('#show4').text();
		if (text == "Show") {
			$("#street-show-text").slideDown("slow");
			$("#show4").text("Hide");
		} else{
			$("#street-show-text").slideUp("slow");
			$("#show4").text("Show");
		}
	});

	$('#show5').click(function() {
		var text = $('#show5').text();
		if (text == "Show") {
			$("#keas-show-text").slideDown("slow");
			$("#show5").text("Hide");
		} else{
			$("#keas-show-text").slideUp("slow");
			$("#show5").text("Show");
		}
	});

	$('#show6').click(function() {
		var text = $('#show6').text();
		if (text == "Show") {
			$("#atdp-show-text").slideDown("slow");
			$("#show6").text("Hide");
		} else{
			$("#atdp-show-text").slideUp("slow");
			$("#show6").text("Show");
		}
	});

	$('#show1').hover(function() {
		$('#show1').css('background', '#000000');
		$('#show1').css('color', '#FFFFFF'); },
		function() {
			$('#show1').css('background', '#FFFFFF');
			$('#show1').css('color', '#000000');
		});

	$('#show2').hover(function() {
		$('#show2').css('background', '#000000');
		$('#show2').css('color', '#FFFFFF'); },
		function() {
			$('#show2').css('background', '#FFFFFF');
			$('#show2').css('color', '#000000');
	});

	$('#show4').hover(function() {
		$('#show4').css('background', '#000000');
		$('#show4').css('color', '#FFFFFF'); },
		function() {
			$('#show4').css('background', '#FFFFFF');
			$('#show4').css('color', '#000000');
	});

	$('#show5').hover(function() {
		$('#show5').css('background', '#000000');
		$('#show5').css('color', '#FFFFFF'); },
		function() {
			$('#show5').css('background', '#FFFFFF');
			$('#show5').css('color', '#000000');
	});

	$('#show6').hover(function() {
		$('#show6').css('background', '#000000');
		$('#show6').css('color', '#FFFFFF'); },
		function() {
			$('#show6').css('background', '#FFFFFF');
			$('#show6').css('color', '#000000');
	});


});