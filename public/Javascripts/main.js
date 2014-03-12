$(function(){


	

	$(window).load(function(){
		var logo = document.getElementById("logo-slide");
	    TweenLite.to(logo,4, {left:"73%"});
		});

	$(function(){
	   $(".map-slide-btn").click(function () {
	      $(this).text(function(i, text){
	          return text === "More Info" ? "Less Info" : "More Info";
      		})
   		});
	});
	


	//**********************Ajax Call********************

	var displayInfo = function(){
		$('.location-button').click(function(e){
			e.preventDefault();
			var location = $(this).text();
			$.ajax('/name',{
				data:{location:location},
				success:function(data){
					console.log(data);

					//restart animation on click of nav buttons
					TweenLite.killTweensOf($('#location-slide'));
					$('#location-slide').stop().css({'left':'0px', 'display':'none'});
					
					//animate header info
					var location = $("#location-slide").fadeIn('slow');
					var tweenControll = location.text(data.location);
		    			TweenLite.to(location,3, {left:"35%"});

		    		//animates and filters trail info
		    		$('.trail-info-wrapper').empty();
		    		$('.trail-info-wrapper').append('<h3>' + data.name + '</h3>');
		    		$('.trail-info-wrapper').append('<p>' + data.description + '</p>');
		    		$('.trail-info-wrapper').first().delay('1000').slideDown('slow');
		    		// $('.trail-info-wrapper').append('div class = "btn");


				}		
			})
		});		
	}

displayInfo();	




	$('.map-slide-btn').click(function() {
		$(this).next('.map-container').first().slideToggle('slow',function(){
			initialize();	
			function initialize(){
	        	var mapOptions = {
	          	center: new google.maps.LatLng(-34.397, 150.644),
	          	zoom: 8
	        };
	        var map = new google.maps.Map(document.getElementById("map-canvas"),
	            mapOptions);
	     	}			
		});
	});

//**********************creates map*********************


	// function initialize() {
 //        var mapOptions = {
 //          center: new google.maps.LatLng(-34.397, 150.644),
 //          zoom: 8
 //        };
 //        var map = new google.maps.Map(document.getElementById("map-canvas"),
 //            mapOptions);
 //      }
      





//******************creates marker on map*****************

  //     var marker=new google.maps.Marker({
  // 		position:myCenter,
  // 		});

		// marker.setMap(map);

	





























});