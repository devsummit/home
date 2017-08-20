
(function() {
	/*****************************
	* Initialize Countdown
	*****************************/
	$('#countdown').countDown({
		targetDate: {
			'day': 		parseInt($('#countdown').data('day')),
			'month': 	parseInt($('#countdown').data('month')),
			'year': 	parseInt($('#countdown').data('year')),
			'hour': 	0,
			'min': 		0,
			'sec': 		0
		},
		omitWeeks: true
	});
	/*****************************
	* Initialize Wow - elements animation on scroll
	*****************************/
	new WOW({mobile: false}).init();
})();
