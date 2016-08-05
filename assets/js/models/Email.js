;(function (app) {

	app.models.EmailModel = Backbone.Model.extend({

		urlRoot: function (id) {
			return 'https://jsonplaceholder.typicode.com/users/' + id;
		}

	});

} (app));