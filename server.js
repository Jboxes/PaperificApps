var port = (process.env.PORT || process.env.VMC_APP_PORT);
var host = (process.env.IP || process.env.VCAP_APP_HOST);

var express = require('express');
var JProxy = require("./serverJs/JProxy.js");
var app = express();
app.use(express.static('./web'));
app.use(express.bodyParser());
app.post('/proxy', function(req, res){
    
    var ArkAddress =req.body.q;
    var ArkData = req.body.q0;
    
     JProxy.Ark.Proxy(ArkAddress,ArkData,function(data){
         res.send(data);
         
     });
    

});

app.listen(8123, "192.168.2.106");
console.log('Server running at http://192.168.2.106:8123/');// JavaScript Document

