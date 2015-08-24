'use strict';

import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Input from 'react-bootstrap/lib/Input';

import randomKey from '../utils/randomKeyGen.js';
import range from 'lodash/utility/range.js';

import find from 'lodash/collection/find.js';

// import ProductsStore from '../stores/Products.js';

var AddToCart = React.createClass({
	getInitialState: function(){
		return {
			selected: this.props.sellable_units[0], 
			open: false,
			quantity: 0
		};
	},
	toggle: function(){
		this.setState({ 
			open: !this.state.open
		});
	},
	handleSelect: function(e){
		let index = e.target.selectedIndex;
		let selected = find(this.props.sellable_units, function(u){
			return u.id = e.target.children[index].id
		});
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
		console.log(this.state);
	},
	render: function () {
		let sellableUnits = this.props.sellable_units.map(function(unit, i){
    	return ( 
    		<option key={ randomKey() } id={unit.id} >
    			{unit.weight_per} lbs || ${unit.price_per}
    		</option>
    	);
		});
		let quantityRange = range( 0, this.state.selected.units_in_stock ).map(function(num){
			debugger;
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
  				<Input type='select' label='Choose Your Type' onChange={this.handleSelect} >
			      {sellableUnits}
			    </Input>
			    <Input type='select' label='Number of Units' onChange={this.handleQuant}>
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

window.range = range;
module.exports = AddToCart;
