
Template.flyer_poster.rendered = function () {

	console.log('rendered poster');

	var img = this.find('img'),
	    fileHandler = this.data.fileHandler.defaultHandler;

	img.className = 'loading';

	img.src = fileHandler && fileHandler.url;

	img.onload = function () {

		img.style.width =
		this.firstNode.style.width = (img.clientWidth * 0.25) + 'px';

		img.className = 'scale';

		console.log('loaded poster');

	}.bind(this);

};


Template.flyer_poster.events({
	'click .delete': function (event) {

		FlyersFS.remove(this._id);

	}
})