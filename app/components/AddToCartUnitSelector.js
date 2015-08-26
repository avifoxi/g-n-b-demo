'use strict';

import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Input from 'react-bootstrap/lib/Input';

import randomKey from '../utils/randomKeyGen.js';
import range from 'lodash/utility/range.js';

import CustomerStore from '../stores/Customer.js';
var sellablesAreInStock = require('../stores/Products.js').sellablesAreInStock;



var AddToCart = React.createClass({
	getInitialState: function(){
		return {
			selected: this.props.sellable_units[0], 
			open: false,
			quantity: 1
		};
	},
	toggle: function(){
		this.setState({ 
			open: !this.state.open
		});
	},
	handleSelect: function(e){
		let index = e.target.selectedIndex;
		let selected = this.props.sellable_units[ index ];
		this.setState({
			selected: selected
		})
	},
	handleQuant: function(e){
		var quant = e.target.value;
		this.setState({
			quantity: quant
		});
	},
	addToCart: function(){
		let id = this.state.selected.id,
			quantity = +this.state.quantity;
		if ( sellablesAreInStock( id, quantity) ) {
			CustomerStore.addToCart({
				sellable_unit_id: id,
				quantity: quantity
			});
			this.props.triggerParentRefresh();
		}
	},
	render: function () {
		let selected = this.state.selected;
		let sellableUnits = this.props.sellable_units.map(function(unit, i){
    	return ( 
    		<option key={ randomKey() } value={unit.id}>
    			{unit.weight_per} lbs || ${unit.price_per}
    		</option>
    	);
		}.bind(this));
		let quantityRange = range( 0, this.state.selected.units_in_stock ).map(function(num){
			return( 
				<option key={ randomKey() } >
    			{ num + 1 }
    		</option>
			);
		}.bind(this));
		return (
			<div>
        <Button bsStyle='primary' onClick={ this.toggle } >
          Order Options
        </Button>
        <Panel collapsible expanded={this.state.open}>
  				<Input type='select' label='Choose Your Type' value={this.state.selected.id} onChange={this.handleSelect} >
			      {sellableUnits}
			    </Input>
			    <Input type='select' label='Number of Units' value={this.state.quantity} onChange={this.handleQuant}>
			      { quantityRange }
			    </Input>
			    <Button bsStyle='success' onClick={ this.addToCart } >
	          Add To Cart!
	        </Button>
        </Panel>
      </div>
		);
	}
});

module.exports = AddToCart;
