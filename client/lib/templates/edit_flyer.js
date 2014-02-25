

Template.edit_flyer.created = function () {

	this.handle_flyer_form = new HandleFlyerForm(this);

};

Template.edit_flyer.destroyed = function () {

	this.handle_flyer_form.destroy();

};

Template.edit_flyer.rendered = function () {

	this.handle_flyer_form.render();

};
