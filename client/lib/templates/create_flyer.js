
Template.create_flyer.created = function () {

	this.object_id = new Meteor.Collection.ObjectID();

	this.handle_flyer_form = new HandleFlyerForm(this);

	this.handle_flyer_form.setId(
		this.object_id.toHexString()
	);

};

Template.create_flyer.destroyed = function () {

	this.handle_flyer_form.destroy();

};

Template.create_flyer.rendered = function () {

	this.handle_flyer_form.render();

};