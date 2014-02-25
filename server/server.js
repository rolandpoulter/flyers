
Meteor.publish('flyers', function () {

	return Flyers.find();

});

Meteor.publish('flyers_files', function () {

	return FlyersFS.find();

});

Meteor.startup(function () {});
