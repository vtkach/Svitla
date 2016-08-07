;(function (app) {

	app.models.EmailModel = Backbone.Model.extend({

		defaults: function () {
			return {
				email: "Sincere@april.biz",
				name: "Vasilis",
				phone: "1-770-736-8031 x56442",
				username: "Username",
				website: "by default.org",
				address: {},
				company: {}
			};
		},

		urlRoot: function (id) {
			return 'https://jsonplaceholder.typicode.com/users/' + id;
		},

		validate: function (attrs) {
			if (attrs.email) {
				
			}
		}

	});

} (app));