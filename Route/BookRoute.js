const express = require('express');
const route = express.Router(); // Use express.Router() to create a router

const { getData, postData, putData, deleteData } = require('../Controller/BookController'); // Adjusted function names for convention

// Define routes
route.get('/', getData); // Use lowerCamelCase for function names
route.post('/', postData);
route.put('/:id', putData);
route.delete('/:id', deleteData);

module.exports = route;
