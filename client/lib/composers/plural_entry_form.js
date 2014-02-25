
PluralEntryForm = function PluralEntryForm (template) {

	this.template = template;

	this.removable = true;

};

PluralEntryForm.prototype.destroy = function () {

	delete this.entry;

	delete this.add_entry.onclick;

	delete this.add_entry;

};

PluralEntryForm.prototype.render = function () {

	if (this.entry) return;

	this.entry = this.template.find('.entry').cloneNode(true);

	this.add_entry = this.template.find('.add_entry')

	this.add_entry.onclick = function (event) {

		event.preventDefault();

		var entry = this.entry.cloneNode(true);

		this.add_entry.parentNode.insertBefore(entry, this.add_entry);

		if (this.onAddEntry) this.onAddEntry();

		if (this.removable) {
			jQuery('<button class="remove_entry negative ui button">-</button>').appendTo(entry);
		}

	}.bind(this);

	jQuery(this.template.firstNode).on('click', '.remove_entry', function (event) {

		event.preventDefault();

		jQuery(event.target).closest('.entry').remove();

	});

};
