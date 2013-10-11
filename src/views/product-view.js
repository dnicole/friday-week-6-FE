(function () {

  window.ProductView = Backbone.View.extend({
    render: function () {
    	$(this.el).html( this.model.get('name') );
    	console.log('productView!', this.model.get('name'));
    }
  });

})();
