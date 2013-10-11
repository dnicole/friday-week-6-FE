(function () {
	var productTemplateHtml = $('#templates .product').html();
	var productTemplate = _.template(productTemplateHtml);

  window.ProductView = Backbone.View.extend({
    render: function () {
    	$(this.el).html( this.model.get('name') );
    	var newHtml = productTemplate( this.model.toJSON() );
			$('.store').html(newHtml);
    	console.log('productView!', this.model.get('name'));
    }
  });

})();
