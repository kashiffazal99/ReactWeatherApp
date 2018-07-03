var express = require('express');
var app = express();

//Set port for server or local
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(function(req,res,next){
	if(req.header['x-fowarded-proto'] === 'https'){
		console.log("Heroku Server");
		res.redirect('http://'+req.hostname+req.url);
	}else{
		next();
	}
});



app.listen(PORT, function(){
	console.log('Express Server started at port ' + PORT);
})
