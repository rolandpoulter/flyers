
Template.locations_form.created = function () {

};

Template.locations_form.destroyed = function () {

};


Template.locations_form.rendered = function () {

	var mapOptions = {
		zoom: 15,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};

	this.map = new google.maps.Map(this.find('.map_canvas'), mapOptions);

	this.map.setCenter(new google.maps.LatLng(47.614848, -122.3358425));

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {

			this.map.setCenter(new google.maps.LatLng(
				position.coords.latitude,
				position.coords.longitude
			));

			this.map.setZoom(15);

		}.bind(this));
	}

};

Template.locations_form.events({

	'change .address': 	function (event, template) {console.log('got here');

		clearTimeout(template.timer);

		template.timer = setTimeout(function () {

			var geocoder = new google.maps.Geocoder(),
			    address_value = template.find('.address').value;

			geocoder.geocode(
				{address: address_value}, 
				function(results, status) { 
					if (status == google.maps.GeocoderStatus.OK) { 
						var loc = results[0].geometry.location;
						// use loc.lat(), loc.lng()
						// debugger;
						template.map.setCenter(new google.maps.LatLng(loc.lat(), loc.lng()));
					} 
					else {
						// alert('Not found: ' + status); 
					} 
				}
			);

		}, 250);

	}

})