(function () {

window.StoreView = Backbone.View.extend({
    initialize: function () {
			this.listenTo(this.collection, 'add', this.onProductAdd);
    },
    onProductAdd: function (newProduct) {
			newProduct = ProductView.new({
				model: Product,
			});
			console.log(newProduct);
			productView.render();
    }
  });

})();
