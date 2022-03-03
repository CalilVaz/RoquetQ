const express = require('express') // O express tá dentro do arquivo package.json, esta linha serve para importar o express

const route = require('./route') // Esta linha serve para importar o route.js para o arquivo server.js, assim poderá usar as funcionalidades ques estão dentro do arquivo route.js

const path = require('path') // O path é um módulo que está sendo importado para o arquivo atual

const server = express(); // Esta variável está sendo responsável por executar a funcionalidade da variável express (linha 1)

server.set('view engine', 'ejs') // Esta linha está definindo o 'ejs' como view engine

server.use(express.static("public")) // Server usa o express statico (Conteúdo público e estático) E passa o nome da pasta

server.set('views', path.join(__dirname, 'views')) // Está passando a pasta views que é a pasta que está sendo usada atualmente, o módulo path está sendo usado e junto com ele o .join que é uma funcionalidade do path, __dirname significa que vai pegar a pasta pai do arquivo atual e dentro da pasta atual vai passar o nome da pasta que está sendo necessário pegar (views)

server.use(express.urlencoded({extended: true}))

server.use(route) // Está sendo responsável por pegar os dados já definidos acima e passar para a variável route que está no arquivo route.js

server.listen(3000, () => console.log('vai')) // Está definindo a porta do localhost ser a 3000 e inprimindo a palavra "vai" no terminal
