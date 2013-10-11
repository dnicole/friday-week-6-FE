(function () {

var product = new Product({
	name: 'stripey socks',
	price: '$10'
});

var productView = new ProductView({
	model: product,
	el: '.product'
}); 
  
$('.store').append(productView.el);  
productView.render();  

})();