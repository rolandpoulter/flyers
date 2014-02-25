Template.header.events({

	'click .toggle_create_flyer': function (event) {

		event.preventDefault();

		Session.set('is_creating_a_flyer?', !Session.get('is_creating_a_flyer?'));

	}

});
