var express = require('express');
var app = express();

//Set port for server or local
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(function(req,res,next){
	if(req.header['x-fowarded-proto'] === 'https'){
		next();
	}else{
		res.redirect('http://'+req.hostname+req.url);
	}
});



app.listen(PORT, function(){
	console.log('Express Server started at port ' + PORT);
})
