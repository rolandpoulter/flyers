
Template.header.isAdmin = isAdmin;

function isAdmin () {

	return Session.get('is_admin?');

};
