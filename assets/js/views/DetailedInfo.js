;(function (app) {

    app.views.DetailedInfoView = Backbone.View.extend({

        tagName: 'li',

        template: app.jst['detailedinfo'],

        initialize: function (options) {
            if (options && options.id) {
                this.model.fetch({
                    url: this.model.urlRoot(options.id)
                }).done(this.render.bind(this));
            }
            this._modelBinder = new Backbone.ModelBinder();
        },

        render: function () {
            this.$el.html(this.template( this.model.toJSON()) );
            this._modelBinder.bind(this.model, this.el, this.constructor.bindings);

            return this;
        }

    }, {

        bindings: {
            username: '.username',
            website: '.website',
            phone: '.phone',
            email: '.email',
            name: '.name',
            address: {
                selector: '.address',
                converter: function (dir, val) {
                    if (dir === Backbone.ModelBinder.Constants.ModelToView) {
                        return [val.city, val.street, val.suite, val.zipcode].join(', ');
                    }
                }
            }
        }

    });

} (app));