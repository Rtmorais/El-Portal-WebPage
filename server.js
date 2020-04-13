const express = require('express');
const nunjucks = require('nunjucks');
const productos = require('./data-products');

const server = express();

server.set('view engine', 'njk');

server.use(express.static('public'));

server.use(express.static('assets'));

nunjucks.configure('views', {
	express    : server,
	autoescape : false,
	noCache    : true
});

server.get('/', function(req, res) {
	return res.render('index');
});

server.get('/productos', function(req, res) {
	return res.render('productos', { items: productos });
});

server.get('/servicios', function(req, res) {
	return res.render('servicios');
});

server.get('/contacto', function(req, res) {
	return res.render('contacto');
});

server.get('/layout', function(req, res) {
	return res.render('layout');
});

server.use(function(req, res) {
	res.status(404).render('not-found');
});

server.listen(5000, function() {
	console.log('Server ON');
});
