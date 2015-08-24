import React from 'react';

import NavBar from './NavBar.js';
import ProductsList from './ProductsList.js';

var PageParent = React.createClass({
	render: function (argument) {
		return (
			<div>
				<NavBar />
				<ProductsList />
			</div>
		);
	}
});

module.exports = PageParent;