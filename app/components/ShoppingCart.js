'use strict';

import React from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import NavItem from 'react-bootstrap/lib/NavItem';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Table from 'react-bootstrap/lib/Table';

import ProductsStore from '../stores/Products.js';
var getPrice = require('../stores/Products.js').getPriceFromSellable;
var getProduct = require('../stores/Products.js').getProductFromSellable;

var ShoppingCart = React.createClass({
	render: function () {
		var total = 0;	
		let shoppingCartRows = this.props.cart.map(function (item) {
			let pricePer = getPrice(item.sellable_unit_id);
			let price = pricePer * +item.quantity;
			// debugger;
			total += price;
			let name = getProduct(item.sellable_unit_id).name;
			return ( 
				<tr>
					<td>
						{ name }
					</td>
					<td>
						{ item.quantity }
					</td>
					<td>
						${ price }
					</td>
				</tr>
			);
		});
		let totalRow = total > 0 ?
			(
				<tr>
					<th>
						Total Cost
					</th>
					<td>
						
					</td>
					<td>
						${total}
					</td>
				</tr>
			) : '';

		let shoppingOverlay = (
			<Popover title={this.props.name + "'s Shopping Cart"}>
				<Table responsive>
					{ shoppingCartRows }
					{ totalRow }
		    </Table>
			</Popover>
		);		

		return (
			<NavItem>
				<OverlayTrigger trigger='click' placement='bottom' overlay={shoppingOverlay}>
		      <Button bsStyle='default'>Show Shopping Cart</Button>
		    </OverlayTrigger>
			</NavItem>
		);
	}	
});

module.exports = ShoppingCart;