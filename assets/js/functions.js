$(function() {
	smoothScroll(300);
	setDateCountDown();

	$("header .header-body").fitText(1, { minFontSize: '20px', maxFontSize: '50px' });
	$(".biglink").fitText(1.5);
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
function setDateCountDown() {
	var countDownDate = new Date("Jun 23, 2019 09:00").getTime();
	var oldMonths;
	var oldDays;
	var oldHours;
	var oldMinutes;
	var oldSeconds;

	var countInterval = setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;

		if ( distance < 0 ) {
			document.getElementById("countdown-container").innerHTML = 'Thanks for participating and hope you had an amazing time.';
			clearInterval(countInterval);
			return;
		}
		
		var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
		var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (months !== oldMonths) {
			document.getElementById("months").innerHTML = months;
			oldMonths = months;
		}

		if (days !== oldDays) {
			document.getElementById("days").innerHTML = days;
			oldDays = days;
		}


		if (hours !== oldHours) {
			document.getElementById("hours").innerHTML = hours;
			oldHours = hours;
		}

		if (minutes !== oldMinutes) {
			document.getElementById("minutes").innerHTML = minutes;
			oldMinutes = minutes;
		}

		if (seconds !== oldSeconds) {
			document.getElementById("seconds").innerHTML = seconds;
			oldSeconds = seconds;
		}
	}, 1000);
}
