/*************************************************************************************
 * Objetivo: Manipular dados de contatos Whatsapp
 * Autor: Matheus Lucas
 * Data: 08/04/2026
 * Versão: 1.0
 **************************************************************************************/

const whatsapp = require("./contatos")
const contato = whatsapp.contatos["whats-users"]


const getDadosUsuario = function () {
    let listaDadosUsuario = [contato]

    if(listaDadosUsuario == '' || listaDadosUsuario == null){
        return false
    }else{
        return listaDadosUsuario
    }
    
} // Fecha a function

const getContaUsuario = function (numero) {
    let listaConta = []
    let entradaNumero = numero
    contato.forEach(function (itemConta) {
        if (entradaNumero == itemConta.number) {
            dados = {
                nome: itemConta.account,
                nick: itemConta.nickname,
                numero: itemConta.number,
                foto: itemConta["profile-image"],
                corFundo: itemConta.background,
                StartConta: itemConta["created-since"].start,
                EndConta: itemConta["created-since"].end
            }

            listaConta.push(dados)
        } else {
            return false
        }



    })
    if (listaConta == '' || listaConta == null || !listaConta) {
        return false
    } else {
        return listaConta
    }

} // Fecha a function

const getContatosUsuario = function (numero) {
    let listaContato = []
    let entradaNumero = numero

    contato.forEach(function (itemContato) {
        if (entradaNumero == itemContato.number) {
            itemContato.contacts.forEach(function (itemDescricaoContato) {
                dados = {
                    nome: itemDescricaoContato.name,
                    descricao: itemDescricaoContato.description,
                    foto: itemDescricaoContato.image
                }

                listaContato.push(dados)

            }) 

        } // Fecha itemContato

    }) // Fecha contato


    if (listaContato == '' || listaContato == null) {
        return false
    } else {
        return listaContato
    }
} // Fecha a function

const getListaMensagem = function (numero) {
    let listaMensagem = []
    let entradaNumero = numero

    contato.forEach(function (itemUsuario) {
        if (entradaNumero == itemUsuario.number) {
            itemUsuario.contacts.forEach(function (itemMensagem) {
                dados = {
                    mensagem: itemMensagem.messages
                }

                listaMensagem.push(dados)
            })
        } // Fecha itemUsuario

    }) // Fecha contato 
    if (listaMensagem == '' || listaMensagem == null) {
        return false
    } else {
        return listaMensagem
    }

} // Fecha function

const getContatosMensagem = function (numero) {
    let listaDadosContatos = []
    let entradaNumero = numero

    contato.forEach(function (itemContato) {

        if (entradaNumero == itemContato.number) {
            dados = {
                nome: itemContato.account,
                numero: itemContato.number,

            }

            listaDadosContatos.push(dados)

            mensagens = itemContato.contacts.forEach(function (itemMensagem) {
                dadosMensagem = {
                    mensagem: itemMensagem.messages
                }

                listaDadosContatos.push(dadosMensagem)

            }) 




        } // Fecha itemContato


    }) // Fecha contato


    if (listaDadosContatos == '' || listaDadosContatos == null || listaDadosContatos.numero) {
        return false
    } else {
        return listaDadosContatos
    }


} // Fecha a function

const getFiltroMensagem = function (mensagem) {
    
    let palavraBusca = mensagem.toLowerCase()
    let listaPalavra = []

    contato.forEach(function (itemUsuario) {
        itemUsuario.contacts.forEach(function (itemContato) {
            itemContato.messages.forEach(function (itemMensagem) {
                
                // Aqui eu iria transformar os conteudos de itemMensagem em minusculo, 
                // assim posso comparar caso esteja maiusculo ou minusculo
                let conteudoMensagem = itemMensagem.content.toLowerCase()

                // uso includes pra verificar se a mensagem contém a palavra digitada
                if (conteudoMensagem.includes(palavraBusca)) {
                    
                    const dados = {
                        contato: itemContato.name,
                        mensagem: itemMensagem.content,
                        data: itemMensagem.time
                    }

                    listaPalavra.push(dados)
                }

            }) // Fecha itemContato

        }) // Fecha itemUsuario

    }) // Fecha contato

    if(listaPalavra == null || listaPalavra == "" || !listaPalavra){
        return false
    }else{
        return listaPalavra
    }
    
} // Fecha a function

// console.log(getDadosUsuario()) //1
// console.log(getContaUsuario(11966578996)) //2
// console.log(getContatosUsuario(11966578996)) //3
// console.log(getListaMensagem(11966578996)) //4
// console.log(getContatosMensagem(11966578996)) //5
// console.log(getFiltroMensagem("Great")) //6