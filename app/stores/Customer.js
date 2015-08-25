import BaconDispatcher from '../dispatchers/BaconDispatcher.js';

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
		BaconDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    })
		_cart.push( sellableUnitIDQuant );
		PageParent.refreshState();
		debugger;
	},
	removeFromCart: function(){

	}
}

module.exports = CustomerStore;