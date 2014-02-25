
Meteor.methods({

	'permissions': permissions

});


userPermissions = function () {

	return permissions();

};


var email_permissions = {
	'rolandpoulter@gmail.com': 10
};


function permissions (user) {

	user = user || Meteor.user();

	var power = 0;

	if (!user) return power;

	if (user.services) {
		power = getGreaterServiceEmailPower(user, power, 'google');

		power = getGreaterServiceEmailPower(user, power, 'facebook');
	}

	if (user.emails) {
		user.emails.forEach(function (email_object) {

			power = getGreaterEmailPower(power, email_object.address);

		});
	}

	power = getGreaterEmailPower(power, user.email);

	return power;

}

function getGreaterServiceEmailPower (user, power, service, attribute) {

	attribute = attribute || 'email';

	var email = user.services[service] && user.services[service][attribute];

	return getGreaterEmailPower(power, email);

}

function getGreaterEmailPower (power, email) {

	var potential_power = email_permissions[email] || 0;

	return potential_power > power ? potential_power : power;

}
