const express = require('express'); // O express tá dentro do arquivo package.json, esta linha serve para importar o express 

const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() // Variável

/* Os dois parâmetros abaixo significa requisição e resposta */
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}) )
route.get('/create-pass', (req, res) => res.render('index', {page: "create-pass"}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route