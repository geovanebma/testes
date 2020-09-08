//Estamos utilizando a camada MVC para melhor controle
//Model - Responsável pelo acesso e manipulação de dados
//View - Responsável por apresentar a interface ao usuário
//Controller - Responsável pelas orientações ao banco de dados

const exp = require('./model/express.js')
const conexao = require('./controller/conexao')
const express = require('express')
const app = exp()
const bodyParser = require('body-parser')
const path = require('path')
const Tabelas = require('./controller/tabelas')
const Administracao = require('./model/administracao')
// const rotas = require('./controller/rotas')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log("Conexão ao banco de dados realizado com sucesso.")
        // Tabelas.init(conexao)

        //Rota do arquivo html para começar
        app.use('/formulario', express.static(path.join(__dirname, "/view/inicial")))
        
        //parei aqui
        app.get('/formulario', function(req, res) {
            res.render('./view/inicial/formulario.html')
        })

        app.post('/dados_form', function(req, res) {
            // Administracao.adicionar(req.body)
            // let dados = Administracao.selecionar('')
            console.log(Administracao.selecionar('', res))
            res.sendFile(__dirname+'/view/outros/selecionar_dados.html')
        })

        app.get('/aaa', (req, res) => {
            var aaaa = "AAAAAAAAAAAAAAAAAA"
            res.send(aaaa)
        })

        app.listen(3210, function(){
            console.log('Servidor em funcionamento.')
        })
    }
})