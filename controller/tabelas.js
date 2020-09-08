class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.dadosFormulario()
    }

    dadosFormulario(){
        const sql = `CREATE TABLE IF NOT EXISTS formulario (
            id int NOT NULL AUTO_INCREMENT,
            nome varchar(50) NOT NULL,
            sobrenome varchar(100) NOT NULL,
            cpf varchar(14) NOT NULL,
            email varchar(100),
            cep integer(8) NOT NULL,
            endereco varchar(150) NOT NULL,
            numero integer(5) NOT NULL,
            bairro varchar(150) NOT NULL,
            cidade varchar(150) NOT NULL,
            estado varchar(2) NOT NULL,
            datacri DATE,
            PRIMARY KEY(id)
        )`

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log("Tabela formulário em execução.")
            }
        })
    }
}

module.exports = new Tabelas