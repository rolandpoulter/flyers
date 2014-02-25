
Flyers = new Meteor.Collection('flyers');

Flyers.allow({

  insert: function (user_id, flyer) {
		return userPermissions() > 0;
  },

  update: function (user_id, flyer, fields, modifier) {
		return userPermissions() > 0;
  },

  remove: function (user_id, flyer) {
		return userPermissions() > 0;
  }

});

FlyersFS = new CollectionFS('flyers', {autopublish: false});

FlyersFS.allow({

	insert: function (user_id, flyer) {
		return userPermissions() > 0;
	},

	update: function (user_id, flyer, fields, modifier) {
		return userPermissions() > 0;
	},

	remove: function (user_id, flyer) {
		return userPermissions() > 0;
	}

});

FlyersFS.filter({

	allow: {
		contentTypes: 'image/*'
	}

});


if (Meteor.isServer) FlyersFS.fileHandlers({

	defaultHandler: function (options) {

		return {blob: options.blob, fileRecord: options.fileRecord};

	}

});
