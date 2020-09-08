const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// app.get('/formulario', function(req, res) {
//     res.render('./view/inicial/formulario.html')
// })

app.post('/dados_form', (req, res) => {
    res.send("Formulário Recebido: "+req.body)
    console.log(req.body)
    Administracao.adicionar(req.body)
})

app.listen(3210, function(){
    console.log('Servidor em funcionamento.')
})

module.exports = router