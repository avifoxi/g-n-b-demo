import React from 'react';

import NavBar from './NavBar.js';
import ProductsList from './ProductsList.js';

import ProductStore from '../stores/Products.js';
import CustomerStore from '../stores/Customer.js';

function getState(){
	return {
		products: ProductStore.getProducts(),
		customer: CustomerStore.getCustomer()
	};
}

var PageParent = React.createClass({
	getInitialState: function(){
		return getState();
	},
	render: function (argument) {
		return (
			<div>
				<NavBar name={this.state.customer.name} cart={this.state.customer.cart} />
				<ProductsList products={this.state.products} />
			</div>
		);
	},
	refreshState: function(){
		let newState = getState();
		this.setState(newState);
	}
});

module.exports = PageParent;