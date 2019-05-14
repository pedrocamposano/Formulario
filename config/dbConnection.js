var mysql = require ('mysql');

var connMySQL = function(){
    console.log('Conexão com bd foi estabelecida')
    return  mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '';
	database: 'Formulario_estagio'
 });

}

module.exports = function(){
	console.log('O autoload carregou');
	return connMySQL;
}