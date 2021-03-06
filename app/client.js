/**
 * client.js
 * =========
 * Client-side entry point.
 *
 * @author: Ben Gundersen
 */
'use strict';

// For ES6/Babel, this is the exact same thing as: var React = require('react');
import React from 'react';

import PageParent from './components/PageParent.js';

// Our first component!
// import Hello from './components/Hello.js';

// Renders to the 'root' div (see index.html)
React.render(<PageParent />, document.getElementById('root'));