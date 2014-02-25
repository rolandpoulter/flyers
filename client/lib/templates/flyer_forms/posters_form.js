
Template.posters_form.created = function () {

};

Template.posters_form.destroyed = function () {

};

Template.posters_form.rendered = function () {

};

Template.posters_form.events({
	'change .poster_files': function (event, template) {

		var poster_meta_data = getPosterMetaData(event.target);

		FlyersFS.storeFiles(event.target.files, poster_meta_data);

	},

	'dragenter .drop_upload, dragover .drop_upload, dragexit .drop_upload, dragend .drop_upload': function (event) {

		event.stopPropagation();

		event.preventDefault();

	},

	'drop .drop_upload': function (event, template) {debugger;

		event.stopPropagation();

		event.preventDefault();

		var poster_meta_data = getPosterMetaData(event.target);

		FlyersFS.storeFiles(event.dataTransfer.files, poster_meta_data);

	}
});

function getPosterMetaData (target) {

	var flyer_id = HandleFlyerForm.getFlyerId(target, 'form.posters');

	return {
		flyer_id: flyer_id
	};

}
