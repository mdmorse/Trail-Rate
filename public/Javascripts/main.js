$(function(){


	

	$(window).load(function(){
		var logo = document.getElementById("logo-slide");
		TweenLite.to(logo,4, {left:"73%"});
	});

	$(document).on('click',".more-info-btn",function () {
			initialize();				
			$(this).text(function(i, text){
				return text === "More Info" ? "Less Info" : "More Info";
			})
			$(this).closest('.trail-item').find('.map-container').slideToggle();
	});



	//**********************Ajax Call********************

	var displayInfo = function(){
		$('.location-button').click(function(e){
			e.preventDefault();
			var location = $(this).text();
			$.ajax('/trail',{
				data:{location:location},
				success:function(data){
					console.log(data);

					//restart animation on click of nav buttons
					TweenLite.killTweensOf($('#location-slide'));
					$('#location-slide').stop().css({'left':'0px', 'display':'none'});
					
					//animate header info
					var location = $("#location-slide").fadeIn('slow');
					var tweenControll = location.text(data[0].location);
					TweenLite.to(location,3, {left:"35%"});

		    		//animates and filters trail info
		    		$('.trail-info-wrapper').empty();

		    		for(i = 0; i < data.length; i++){
		    			var newItem = $("<div class = 'trail-item'>");
		    			newItem.append('<h3>' + data[i].name + '</h3>');
		    			newItem.append('<p>' + data[i].description + '</p>');
		    			newItem.append('<div class = "btn btn-success more-info-btn">More Info</div>');
		    			newItem.append('<div class = "map-container"><div id = "map-canvas'+ i +'"></div></div>');
		    			newItem.appendTo('.trail-info-wrapper');
		    		}
		    		
		    		$('.main-trail-container').first().delay('1000').slideDown('slow');
		    		// $('.trail-info-wrapper').append('<div class = "btn btn-default map-slide-btn">More Info</div>' );


		    	}		
		    })
});		
}

displayInfo();



//**************************creates map***************************

	$(document).on('click','.more-info-btn',function(){
		$(this).next('.map-container').showToggle('slow',function(){
			initialize();				
		});
	});

	function initialize(){
	        	var mapOptions = {
	          	center: new google.maps.LatLng(-34.397, 150.644),
	          	zoom: 8
	        };

	        var map = new google.maps.Map(document.getElementById("map-canvas"),
	            mapOptions);
	     	}
	


	google.maps.event.addDomListener(window, 'load', initialize);
	
	



	






//******************creates marker on map*****************

  //     var marker=new google.maps.Marker({
  // 		position:myCenter,
  // 		});

		// marker.setMap(map);

	





























});