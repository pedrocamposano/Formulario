
var app = require("./config/server");

//var rotahome =  require('./app/routeshome')(app);
app.listen(3000,function(){
	console.log("Aplicação rodando em Express");
});