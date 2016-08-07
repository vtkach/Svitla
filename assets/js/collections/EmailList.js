;(function (app) {

	app.collections.EmailCollection = Backbone.Collection.extend({

		url: 'https://jsonplaceholder.typicode.com/users',

		/*initialize: function (id) {
			var options = { reset: true };

			id && (options.data = { id: id });
			this.fetch(options);
		},*/

		model: app.models.EmailModel

	});

} (app));