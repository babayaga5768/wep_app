var express=require('express');
var app= express();
var port=4000;
app.use(express.static(__dirname + '/'));
app.listen(port);
console.log('server starts at @https://localhost:' + port);
app.post('/api/login',function(req,res){
	var results=[{title:"maish",
pass:true,work:"free"
},{
	title:"manih",
pass:true,
work:"fee"
},{
	title:"anish",
pass:true,
work:"free"
}];
res.json(results);
})