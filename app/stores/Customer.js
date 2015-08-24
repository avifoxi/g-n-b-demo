var _name = 'Madam Customer';
var _cart = [
	// { 
	// 	sellable_id: ,
	// 	units: 4
	// },
	// { 
	// 	sellable_id: ,
	// 	sellable_units: 2
	// },
	// { 
	// 	sellable_id: ,
	// 	sellable_units: 7
	// }
];


var CustomerStore = {
	getCustomer: function(){
		return {
			name: _name,
			cart: _cart
		}
	},
	addToCart: function(){

	},
	removeFromCart: function(){

	}
}

module.exports = CustomerStore;