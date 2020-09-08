const validacoes = {
    validar_nome : (dado) => {
        if(!dado) {
            return "Campo vazio, por favor, informe o nome."
        } else if (dado.length == 1) { 
            return "Nome inválido, por favor, informe o nome corretamente."
        } else { 
            return true
        }
    },
    validar_sobrenome : (dado) => {
        
            if(!dado){ 
                return "Campo vazio, por favor, informe o sobrenome." 
            } else { 
                return true 
            }
    },
    validar_cpf : (dado) => {
        var soma = 0
        var resto
        var inputCPF = dado
        var erro = false

        if(inputCPF == '00000000000') erro = true;
        for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) resto = 0;
        if(resto != parseInt(inputCPF.substring(9, 10))) erro = true;

        soma = 0;
        for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) resto = 0;
        if(resto != parseInt(inputCPF.substring(10, 11))) erro = true;
        
        if(erro == true){ 
            return "CPF inválido, preencha corretamente."
        } else { 
            return true
        }
    },
    validar_email : (dado) => {
        var usuario = dado.substring(0, dado.indexOf("@"))
        var dominio = dado.substring(dado.indexOf("@")+ 1, dado.length)

            if(!((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1))){
                return "E-mail inválido, digite corretamente."
            }else{
                return true
            }
    },
    validar_cep : (dado) => {
        function pesquisacep(dado) {
            var cep = dado.replace(/\D/g, '');

            if (cep != "") {
                var validacep = /^[0-9]{8}$/;

                if(validacep.test(cep)) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        let resultado = pesquisacep(dado)
        
        if(!resultado){
            return "Formato de CEP inválido."
        } else {
            return true
        }
    },
    validar_campo : (dado, nome_campo) => {
            if(!dado){
                return nome_campo+" vazio, informe o "+nome_campo
            } else {
                return true
            }
    }
}

module.exports = validacoes