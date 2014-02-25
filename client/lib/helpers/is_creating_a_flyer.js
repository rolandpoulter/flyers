
Template.create_flyer.isCreatingAFlyer =
Template.header.isCreatingAFlyer = isCreatingAFlyer;

function isCreatingAFlyer () {

	return Session.get('is_admin?') && Session.get('is_creating_a_flyer?');

};
