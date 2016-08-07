;(function (app) {

	app.views.EmailListView = Backbone.View.extend({

		el: 'body',

		savedCollection: null,

		initialize: function () {
			this.collection = new app.collections.EmailCollection();
			this.cacheElements();
			this.listenToOnce(this.collection, 'reset', this.saveCollection)
				.listenTo(Backbone, 'show-address-by-coords', this.showMap)
				.listenTo(this.collection, 'reset', this.onReset);
		},

		saveCollection: function () {
			this.savedCollection = this.collection.clone();
		},

		showMap: function (center) {
			new app.views.MapView(center);
		},

		cacheElements: function () {
			this.$detailedInfo = this.$('.detailed-info, #map');
			this.$tbody = this.$('tbody');
		},

		close: function () {
			this.$tbody.empty();
		},

		renderNeeded: function (id) {
			var options = { reset: true };

			this.neededView = id ? 'DetailedInfoView' : 'EmailView';

			if (this.collection.length) {
				this.collection.reset(id ? [this.collection.get(id)] : this.savedCollection.models);
			} else {
				id && (options.data = { id: id });
				this.collection.fetch(options);
			}
			
			this.$detailedInfo.toggleClass('hide', !id);
		},

		renderAll: function (fragment, model) {
			var view = new app.views[this.neededView]({
				model: model
			});

			fragment.appendChild(view.render().el);

			return fragment;
		},

		onReset: function () {
			this.$tbody.append(this.collection.reduce(this.renderAll, document.createDocumentFragment(), this));
		}

	});

} (app));