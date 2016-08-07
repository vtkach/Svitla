;(function (app) {

	app.views.MapView = Backbone.View.extend({

		el: '#map',

		initialize: function (center) {
			new google.maps.Map(this.el, {
				center: _.mapObject(center, parseFloat),
				zoom: 8
			});
		}

	});

} (app));