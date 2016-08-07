;(function (app) {

    app.routers.Router = Backbone.Router.extend({

        _currentView: null,

        routes: {
            'users/:id': 'renderMailList',
            '': 'renderMailList'
        },

        initialize: function () {
            this._currentView = new app.views.EmailListView();
        },

        clear: function () {
            this._currentView && this._currentView.close();
        },

        renderMailList: function (id) {
            this.clear();
            this._currentView.renderNeeded(id);
        }

    });

} (app));