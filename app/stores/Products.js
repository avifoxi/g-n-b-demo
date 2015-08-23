import _products from './product_mock_data.js';

var ProductStore = {
	getProducts: function () {
		return _products;
	}
};

// window.PRODUCTS = _products;
module.exports = ProductStore;