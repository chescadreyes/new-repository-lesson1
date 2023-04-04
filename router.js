var express = require('express');
var controller = require('./controller');
var memberCtlr = require('./memberCtlr')

var routes = express.Router();

routes.get('/get-test', function(req, res) {
	controller.getTest(res);
});

routes.get('/getmember/:id', function(req, res){
	memberCtlr.getmember(req.params.id, res);
});

routes.get('/getallmember', function(req, res){
	memberCtlr.getallmember(res);
});

routes.post('/addmember', function(req, res){
	memberCtlr.addmember(req.body,res);
});

routes.post('/updatemember/:id', function(req, res){
    memberCtlr.updatemember(req.body, res)
});

routes.delete('/deletemember/:id', function(req, res){
    memberCtlr.deletemember(req.params.id, res)
});

module.exports =  routes