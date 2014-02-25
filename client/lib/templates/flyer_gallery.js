
Template.flyer_gallery.created = function () {



}

Template.flyer_gallery.destroyed = function () {

	if (this.layout) {
		this.layout.destroy();
	}

}

Template.flyer_gallery.rendered = function () {

	console.log('rendered gallery');

	clearInterval(this.interval);

	this.interval = setInterval(function () {

		if (!this.find('img.loading') && this.find('img.scale')) {
			this.layout = new Packery(this.firstNode, {
				gutter: 10,
				itemSelector: '.flyer_poster'
			});

			console.log('layout gallery');

			clearInterval(this.interval);
		}

	}.bind(this), 50);

};

Template.flyer_gallery.flyers_files = function () {

	return FlyersFS.find({}, {sort: {uploadDate: -1}});

};
