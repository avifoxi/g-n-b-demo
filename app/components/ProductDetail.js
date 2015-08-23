'use strict';

// 3RD PARTY DEPS
import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';


var ProductDetail = React.createClass({
	getInitialState: function(){
		return {
			showModal: false
		};
	},
	showDetailView: function(){
		this.setState({
			showModal: true
		});
	},
	close: function(){
		this.setState({
			showModal: false
		});
	},
	render: function () {
		var imgSize = {
			maxWidth: '8em'
		}
		// var foo = 'foo';
		return (
			<div>
				<Button bsStyle='default' onClick={ this.showDetailView }>More Info?</Button>
				<Modal show={this.state.showModal} onHide={this.close}>
	        <Modal.Header closeButton>
	          <Modal.Title>{this.props.product.name}</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	        	<img src={this.props.product.image_urls.thumb} style={imgSize}/>
	          <p>
	          	{this.props.product.description}
	          </p>


	          <hr />
	        </Modal.Body>
	        <Modal.Footer>
	          <Button onClick={this.close}>Close</Button>
	        </Modal.Footer>
	      </Modal>
      </div>
		);
	}
});

module.exports = ProductDetail;


// small
// price_per
// weight_per
// units_in_stock
// medium
// large





