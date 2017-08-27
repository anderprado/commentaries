var connection = require('../config/database');

var Person = {
	create: function(req, res) {
		var data = req.body;
		connection.query('insert into person set = ?', [data], function(err, result) {
			if (err) return res.status(400).json(err);
			return res.status(200).json(result);
		});
	},
	delete: function(req, res) {
		var id = req.params.id;
		connection.query('delete * from person where id = ?', [id], function(err, result) {
			if (err) return res.status(400).json(err);
			return res.status(200).json(result);
		});
	},
	getAll: function(req, res) {
		connection.query('select * from person', [], function(err, result) {
			if (err) return res.status(400).json(err);
			return res.status(200).json(result);
		});
	},
	getOne: function(req, res) {
		var name = req.params.name;
		connection.query('select * from person where name = ?', [name], function(err, result) {
			if (err) return res.status(400).json(err);
			return res.status(200).json(result);
		});
	},
	update: function(req, res) {
		var data = req.body,
			id = req.params.id;
		connection.query('update person set ? where id = ?', [data, id], function(err, result) {
			if (err) return res.status(400).json(err);
			return res.status(200).json(result);
		});
	}

}

module.exports = Person;
