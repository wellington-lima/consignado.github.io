var http = require('http');
	const express = require('express');
	const app = express();
	
	const port = 21028; //essa porta é a que aparece no nome da aplicação Node no painel de controle da Kinghost
	app.listen(port);
	
	const baseDir = `${__dirname}/`
	app.use(express.static(`${baseDir}`))
	app.get('/', (req, res) => res.sendfile('index.html', { root: baseDir} ))
	
	app.use(express.static('img'));
	app.use(express.static('css'));
	app.use(express.static('js'));

  console.log('Servidor rodando na porta: '+ port)