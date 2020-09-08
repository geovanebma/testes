let conexao = require('../controller/conexao')
const moment = require('moment')
const validacoes = require('../model/validacoes')
const gulp = require('gulp')
const series = gulp.series

class Administracao{
    //Inserir no BD
    adicionar(dados, resp){
        var valid0 = validacoes.validar_nome(dados.nome)
        var valid1 = validacoes.validar_sobrenome(dados.sobrenome)
        var valid2 = validacoes.validar_cpf(dados.cpf)
        var valid3 = validacoes.validar_email(dados.email)
        var valid4 = validacoes.validar_cep(dados.cep)
        var valid5 = validacoes.validar_campo(dados.endereco, "Endereço")
        var valid6 = validacoes.validar_campo(dados.numero, "Número")
        var valid7 = validacoes.validar_campo(dados.bairro, "Bairro")
        var valid8 = validacoes.validar_campo(dados.cidade, "Cidade")
        var valid9 = validacoes.validar_campo(dados.estados, "Estado")

        if(valid0 && valid1 && valid2 && valid3 && valid4 && valid5 && valid6 && valid7 && valid8 && valid9){
            let now = new Date
            let data_atual = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`
            let sql = `INSERT INTO formulario (nome, sobrenome, cpf, email, cep, endereco, numero, bairro, cidade, estado, datacri)    
                VALUES (
                '${dados.nome}',
                '${dados.sobrenome}',
                '${dados.cpf}',
                '${dados.email}',
                '${dados.cep}',
                '${dados.endereco}',
                '${dados.numero}',
                '${dados.bairro}',
                '${dados.cidade}',
                '${dados.estados}',
                '${data_atual}'
            )`

            conexao.query(sql, (erro) => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log("Formulário inserido com sucesso.")
                }
            })    
        }
    }

    remover(dado, resp){
        const sql = `DELETE FROM formulario WHERE id = '${dado}'`
        conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Formulário removido com sucesso.')
            }
        })
    }

    selecionar(dado, resp){
        if(dado){
            var sql = `SELECT * FROM formulario WHERE cpf = '${dado}'`
        }else{
            var sql = `SELECT * FROM formulario`
        }

        var dados_de_envio = []
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                resultados.forEach(function(elemento, indice){
                    dados_de_envio.push(elemento)
                })

                var resposta = dados_de_envio
            }
        })

        return resposta
    }
}

module.exports = new Administracao