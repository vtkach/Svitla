;(function (app) {

	app.models.EmailModel = Backbone.Model.extend({

		defaults: function () {
			return {
				email: '',
				name: 'Vasilis',
				phone: '1-770-736-8031 x56442',
				username: 'Username',
				website: 'by default',
				address: {},
				company: {}
			};
		},

		validate: function (attrs) {
			var email_pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
				hasDot = /[.]/,
				result = {};
			// from this post http://stackoverflow.com/questions/46155/validate-email-address-in-javascript

			if (attrs.email) {
				if (!email_pattern.test(attrs.email)) {
					result['email'] = 'Invalid email';
				}
			}

			if (attrs.website) {
				if (!hasDot.test(attrs.website)) {
					result['website'] = 'Invalid website. You should put dot';
				}
			}

			return _.isEmpty(result) ? undefined : result;
		}

	});

} (app));