import React from 'react';

import ShoppingCart from './ShoppingCart.js';
import ProductsList from './ProductsList.js';

var PageParent = React.createClass({
	render: function (argument) {
		return (
			<div>
				<h2>I'm a parent Container</h2>
				<ShoppingCart text='and I am a ShoppingCart' />
				<ProductsList />
			</div>
		);
	}
});

module.exports = PageParent;