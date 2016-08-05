;(function (app) {

	app.views.EmailListView = Backbone.View.extend({

		events: {
			//'click .name': 'goToDetailedView'
		},

		initialize: function () {
			this.collection = new app.collections.EmailCollection();
			this.listenTo(this.collection, 'reset', this.onReset);
		},

		goToDetailedView: function (event) {
			var href= event.target.href,
				userId = href[href.length - 1],
				detailedView = new app.views.DetailedInfoView({
					model: this.collection.get(userId)
				});

			this.$el.html(detailedView.render().el);

		},

		renderAll: function (fragment, model) {
			var view = new app.views.EmailView({
				model: model
			});

			fragment.appendChild(view.render().el);
		},

		onReset: function () {
			var fragment = document.createDocumentFragment();

			this.collection.each(this.renderAll.bind(this, fragment));
			this.$el.append(fragment);
		}

	});

} (app));