;(function (app) {

    app.views.DetailedInfoView = Backbone.View.extend({

        template: app.jst['detailedinfo'],

        events: {
            'input td': 'setNewData'
        },

        tagName: 'tr',

        setNewData: function (event) {
            var target = event.target;

            this.model.set(target.className, target.textContent, { validate: true });
        },

        initialize: function () {
            this._modelBinder = new Backbone.ModelBinder();
            this.listenTo(this.model, 'invalid', this.showError);
        },

        setTooltips: function (error, index) {
            this.$('.' + index).addClass('error').tooltip({
                placement: 'bottom',
                title: error
            });
        },

        showError: function (model, error) {
            this.$('.email, .website').removeClass('error');
            _.each(error, this.setTooltips, this);
        },

        render: function () {
            this.$el.html(this.template());
            Backbone.trigger('show-address-by-coords', this.model.get('address').geo);
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