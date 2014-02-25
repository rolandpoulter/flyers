
HandleFlyerForm = function HandleFlyerForm (template) {

	this.template = template;

};

HandleFlyerForm.prototype.destroy = function () {};

HandleFlyerForm.prototype.render = function () {

	var id = this.id,
	    forms = this.template.findAll('form');

	forms.forEach(function (form) {

		form.dataset.flyer_id = id;

	});

};

HandleFlyerForm.prototype.setId = function (id) {

	this.id = id;

};

HandleFlyerForm.getFlyerId = function (target, selector) {

	selector = selector || 'form';

	if (jQuery(target).is(selector)) return target.dataset.flyer_id;

	return jQuery(target).closest(selector).data('flyer_id');

};