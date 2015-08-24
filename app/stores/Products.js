import find from 'lodash/collection/find.js';

import _products from './product_mock_data.js';

var _sellableMap = mapSellablesToProducts();

var ProductStore = {
	getProducts: function () {
		return _products;
	},
	getProductFromSellable: function(id, products){
		return _sellableMap[id];
	},
	getNameFromSellable: function(id) {
		return _sellableMap[id].name;
	},
	getPriceFromSellable: function (id) {
		let item = find(_sellableMap[id].sellable_units, function(unit){
			return unit.id === id;
		});
		return item.price_per;
	}
};

window.MAP = _sellableMap;

module.exports = ProductStore;

function mapSellablesToProducts(){
	var map = {};
	_products.forEach(function(pro) {
		pro.sellable_units.forEach(function(unit){
			map[unit.id] = pro;
		});
	});
	return map;
}