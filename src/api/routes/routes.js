const express = require('express');
const routes = express.Router();

const CarController = require('../controllers/CarController');

routes.get('/cars', CarController.index);
routes.get('/cars/:id', CarController.show);
routes.post('/cars', CarController.store);
routes.put('/cars/:id', CarController.update);
routes.delete('/cars/:id', CarController.destroy);

module.exports = routes;