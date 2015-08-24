'use strict';

import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';

import CustomerStore from '../stores/Customer.js';

import ShoppingCart from './ShoppingCart.js';

function getState(){
	return CustomerStore.getCustomer();
	// this returns customer name, and items in cart
}

var NavBar = React.createClass({
	getInitialState: function(){
		return getState();
	},
	render: function () {
		return (
			<Navbar brand='TREIF AND MORE TREIF!' toggleNavKey={0}>
				<CollapsibleNav eventKey={0}> 
					<Nav navbar>
			      <NavItem>Link</NavItem>
			      <NavItem>Link</NavItem>
		      </Nav> 
		      <Nav navbar right>
		      	<ShoppingCart name={this.state.name} cart={this.state.cart}/>
					</Nav>		
		    </CollapsibleNav>
		  </Navbar>
		);
	}
});

module.exports = NavBar;
