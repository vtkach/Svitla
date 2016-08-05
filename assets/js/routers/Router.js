;(function (app) {

    app.routers.Router = Backbone.Router.extend({

        _currentView: null,

        $mainElement: 'ul',

        routes: {
            'users/:id': 'renderById',
            '': 'renderByDefault'
        },

        clear: function () {
            this._currentView && this._currentView.remove();
        },

        renderByDefault: function () {
            this.clear();
            this._currentView = new app.views.EmailListView({
                el: this.$mainElement
            });
        },

        renderById: function (id) {
            this._currentView && this._currentView.remove();

            this._currentView = new app.views.DetailedInfoView({
                model: new app.models.EmailModel,
                el: this.$mainElement,
                id: id
            });

        }

    });

} (app));