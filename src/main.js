(function () {

var product = new Product({
	name: 'stripey socks'
});

var productView = new ProductView({
	model: product
}); 
  
productView.render();  

})();