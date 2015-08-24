'use strict';

import React from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import NavItem from 'react-bootstrap/lib/NavItem';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Table from 'react-bootstrap/lib/Table';

import ProductsStore from '../stores/Products.js';


var ShoppingCart = React.createClass({
	render: function () {
		var total = 0;
		let inCart = this.props.cart.map(function(item){
			ProductsStore.getProductFromSellableId(item.id)
		});	
		let shoppingCartRows = this.props.cart.map(function (item) {
			let pricePer = ProductsStore.getPriceFromSellable[item.id];
			let price = pricePer * item.units;
			total += price;
			let name = ProductsStore.getProductFromSellableId(item.id).name;
			return ( 
				<tr>
					<td>
						{ name }
					</td>
					<td>
						{ item.units }
					</td>
					<td>
						{ price }
					</td>
				</tr>
			);
		});

		let shoppingOverlay = (
			<Popover title={this.props.name + "'s Shopping Cart"}>
				<Table responsive>
					{shoppingCartRows}
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