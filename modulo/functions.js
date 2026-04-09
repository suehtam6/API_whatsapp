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

    return listaDadosUsuario
}

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
    if (listaConta == '') {
        return false
    } else {
        return listaConta
    }

}

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
        }
    })

    return listaContato
}

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
        }

    })
    if (listaMensagem == '' || listaMensagem == null) {
        return false
    } else {
        return listaMensagem
    }
}

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

            
            

        }


    })

    return listaDadosContatos

}


// console.log(getDadosUsuario()) 1
// console.log(getContaUsuario(11966578996)) 2
// console.log(getContatosUsuario(11966578996)) 3
//console.log(getListaMensagem(11966578996)) 4
console.log(getContatosMensagem(11966578996))