
Meteor.subscribe('flyers');

Meteor.subscribe('flyers_files');


Session.set('permissions', null);

Session.set('is_admin?', false);

Session.set('is_creating_a_flyer?', false);


var last_user_id = null;

function getPermissions () {

	var user_id = Meteor.userId();

	if (last_user_id === null || last_user_id !== user_id) {
		Meteor.call('permissions', function (error, permissions) {

			if (!error) {
				Session.set('permissions', permissions);

				Session.set('is_admin?', permissions > 0);

				if (permissions === 0) {
					Session.set('is_creating_a_flyer?', false);
				}
			}

		});
	}

	last_user_id = last_user_id;

};

userPermissions = function () {

	return Session.get('permissions');

};


Meteor.startup(function () {

	GoogleMaps.init(
		{
			key: 'AIzaSyBfAJgrbU4qRuo5rHmOOC2CQ1A85bSAMC8',
			sensor: true,
			language: 'en'
		}, 
		function () {

			Deps.autorun(function () {

				getPermissions();

			});

		}
	);

});
