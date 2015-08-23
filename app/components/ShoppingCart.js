'use strict';

import React from 'react';
import Bootstrap from 'react-bootstrap';

import CustomerStore from '../stores/Customer.js';

var ShoppingCart = React.createClass({
	render: function () {
		return (
			<h3>{this.props.text}</h3>
		);
	}
});

module.exports = ShoppingCart;