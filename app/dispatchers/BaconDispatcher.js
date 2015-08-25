var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var BaconDispatcher = new Dispatcher();

// Convenience method to handle dispatch requests
BaconDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: 'VIEW',
    action: action
  });
}

module.exports = BaconDispatcher;