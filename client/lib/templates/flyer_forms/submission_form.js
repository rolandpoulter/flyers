
Template.submission_form.events({

	'click .cancel_create_flyer': function (event) {

		event.preventDefault();

		Session.set('is_creating_a_flyer?', false);

	}

});
