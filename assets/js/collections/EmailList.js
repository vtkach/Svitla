;(function (app) {

	app.collections.EmailCollection = Backbone.Collection.extend({

		url: 'https://jsonplaceholder.typicode.com/users',

		initialize: function () {
			this.fetch({
				reset: true
			});
		},

		model: app.models.EmailModel

	});

} (app));