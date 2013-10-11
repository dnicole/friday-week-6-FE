(function () {

window.StoreView = Backbone.View.extend({
    initialize: function () {
			this.listenTo(this.collection, 'add', this.onProductAdd);
    },
    onProductAdd: function (newProduct) {
			var productView = new ProductView({
				model: newProduct,
			});
			newProduct = new Product({});
			console.log(productView);
			productView.render();
			$(this.el).append(productView.el);
    }
  });

})();
