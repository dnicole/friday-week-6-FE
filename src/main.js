(function () {

var stuff = new Inventory();

var stuffListView = new StoreView({
	collection: stuff,
	el: '#store'
});

stuff.add([
    { name: 'stripey socks', price: '$10' },
    { name: 'spotted socks', price: '$9' },
    { name: 'space pants', price: '$15' },
  ]);

// var product = new Product({
//	name: 'stripey socks',
//	price: '$10'
// });

// var productView = new ProductView({
//	model: product,
//	el: '.product'
// });

// $('.store').append(productView.el);
// productView.render();

})();