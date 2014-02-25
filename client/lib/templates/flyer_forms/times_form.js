

Template.times_form.created = function () {

	this.plural_entry_form = new PluralEntryForm(this);

	this.plural_entry_form.onAddEntry = initPickers.bind(this)

};

Template.times_form.destroyed = function () {

	this.plural_entry_form.destroy();

};

Template.times_form.rendered = function () {

	this.plural_entry_form.render();

	initPickers.call(this);

};

function initPickers () {

	jQuery('.datepicker', this.firstNode).pickadate();
	jQuery('.timepicker', this.firstNode).pickatime();

}