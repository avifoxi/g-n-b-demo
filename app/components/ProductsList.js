/**
 * List.js
 * In the Hello.js example, creates a list of elements
 * @author: Ben Gundersen
 */
'use strict';

// 3RD PARTY DEPS
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
var Masonry = require('react-masonry-component')(React);


// STORE / DATA IMPORTS
import ProductStore from '../stores/Products.js';

// UTILS 
import randomKey from '../utils/randomKeyGen.js';

// COMPONENTS
import ProductDetail from './ProductDetail.js';
import AddToCart from './AddToCartUnitSelector.js';

function getState(){
  return {
    products: ProductStore.getProducts()
  };
}

var ProductsList = React.createClass({
  getInitialState: function(){
    return getState();
  },
  addToCart: function(e){

  },
  showDetailView: function(e){

  },
  render: function() {
    // var products = 
    var productItems = this.state.products.map(function(product, index){
      return (
        <Col xs={6} md={4} key={ randomKey() }>
          <Thumbnail src={product.image_urls.thumb} alt='242x200'>
            <h3>{ product.name }</h3>
            <p>{ product.description }</p>
            <p>
              <AddToCart sellable_units={product.sellable_units} triggerParentRefresh={this.props.triggerParentRefresh}/>
              <ProductDetail product={product} />
            </p>
          </Thumbnail>
        </Col>
      );
    }.bind(this));

    return (
      <Grid>
        <Masonry>
          { productItems }
        </Masonry>
      </Grid>
    );
  }
});

module.exports = ProductsList;