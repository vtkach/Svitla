;(function (app) {

	app.views.EmailView = Backbone.View.extend({

		tagName: 'li',

		template: app.jst['email'],

		initialize: function () {
			this._modelBinder = new Backbone.ModelBinder();
		},

		render: function () {
			this.$el.html(this.template( this.model.toJSON()) );
			this._modelBinder.bind(this.model, this.el, this.constructor.bindings);

			return this;
		}

	}, {

		bindings: {
			email: '.email',
			name: '.name',
			address: {
				selector: '.address-city',
				converter: function (dir, val) {
					if (dir === Backbone.ModelBinder.Constants.ModelToView) {
						return val.city;
					}
				}
			},

			id: {
				selector: '.name',
				elAttribute: 'href',
				converter: function (dir, val) {
					if (dir === Backbone.ModelBinder.Constants.ModelToView) {
						return '#users/' + val;
					}
				}
			}
		}

	});

} (app));