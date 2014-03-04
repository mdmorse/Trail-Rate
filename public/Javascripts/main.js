$(function(){



	$(window).load(function(){
		var logo = document.getElementById("logo-slide");
	    TweenLite.to(logo,4, {left:"73%"});
		});

	$(window).load(function(){
		var location = document.getElementById("location-slide");
	    TweenLite.to(location,4, {left:"35%"});
		});

	$(document).ready(function(){
		$('.description').delay('1500').slideDown('slow')
	});

	// $(document).ready(function() {
	//     var location = document.getElementById("location-slide");
	//     TweenLite.to(location, 2, {right:"200px", ease:SlowMo.ease});
	// });





























});