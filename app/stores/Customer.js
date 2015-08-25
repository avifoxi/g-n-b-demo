import PageParent from '../components/PageParent.js';

var _name = 'Madam Customer';
var _cart = [
	// {
	// 	sellable_unit_id:
	// 	quantity:
	// }
];


var CustomerStore = {
	getCustomer: function(){
		return {
			name: _name,
			cart: _cart
		}
	},
	addToCart: function( sellableUnitIDQuant ){
		_cart.push( sellableUnitIDQuant );
		PageParent.refreshState();
		debugger;
	},
	removeFromCart: function(){

	}
}

module.exports = CustomerStore;