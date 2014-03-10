$(function(){


	

	$(window).load(function(){
		var logo = document.getElementById("logo-slide");
	    TweenLite.to(logo,4, {left:"73%"});
		});

	






	// $(window).load(function(){
	// 	var location = document.getElementById("location-slide");
	//     TweenLite.to(location,4, {left:"35%"});
	// 	});

	


	$('.location-button').click(function(e){
		e.preventDefault();
		var location = $(this).text();
		$.ajax('/name',{
			data:{location:location},
			success:function(data){
				var location = $("#location-slide").fadeIn('slow');
				location.text(data.location);
	    		TweenLite.to(location,4, {left:"35%"});
	    		
			}		
		})
	});
	
	$('.location-button').click(function(e){
		e.preventDefault();
		var name = $(this).text();
		$.ajax('/name',{
			data:{name:name},
			success:function(data){
				console.log(data);
				var name = $('.trail-name').delay('1000').slideDown('slow');
				name.text(data.name);
			}		
		})
	});







	// $(window).ready(function(){
	// 	$('.trail-name').delay('1000').slideDown('slow')
	// });

	// $(function(){
	//    $("#map-slide-btn").click(function () {
	//       $(this).text(function(i, text){
	//           return text === "More Info" ? "Less Info" : "More Info";
 //      		})
 //   		});
	// });

	

	// $('.trail-name').click(function(){
	// 	$('.description').slideToggle('fast');
	// 	// $('#map-slide').text('Show Map');
	// });
	
	// $('#map-slide-btn').click(function() {
	// 	$('#map-container').slideToggle('slow',function(){
	// 	initialize();
			
	// 	});
		
	

	// });

//**********************creates mapt*********************


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