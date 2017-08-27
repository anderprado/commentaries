var app = require('express');
var routes = app.Router();
var Person = require('../controllers/person');

routes.route('/')
	.get(Person.getAll)
	.post(Person.create);

routes.route('/:name')
	.get(Person.getOne);

routes.route('/:id')
	.put(Person.update)
	.delete(Person.delete);

module.exports = routes;