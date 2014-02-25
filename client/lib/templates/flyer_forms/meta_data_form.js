
Template.meta_data_form.created = function () {

	this.plural_entry_form = new PluralEntryForm(this);

};

Template.meta_data_form.destroyed = function () {

	this.plural_entry_form.destroy();

};

Template.meta_data_form.rendered = function () {

	this.plural_entry_form.render();

};