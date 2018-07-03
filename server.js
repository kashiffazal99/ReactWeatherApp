var express = require('express');
var app = express();

//Set port for server or local
const PORT = process.env.PORT || 3000;

app.use(function(req,res,next){
	console.log(req.header['x-fowarded-proto']);
	console.log('http://'+req.hostname+req.url);
	if(req.header['x-fowarded-proto'] === 'http'){
		next();
	}else{
		res.redirect('http://'+req.hostname+req.url);
	}
});

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express Server started at port ' + PORT);
})
