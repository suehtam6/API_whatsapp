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

const getContaUsuario = function(numero){
    let listaConta = []
    let entradaNumero = numero
    contato.forEach(function(itemConta){
        if(entradaNumero == itemConta.number){
            dados = {
                nome : itemConta.account,
                nick : itemConta.nickname,
                numero : itemConta.number,
                foto : itemConta["profile-image"],
                corFundo : itemConta.background,
                StartConta : itemConta["created-since"].start,
                EndConta : itemConta["created-since"].end
            }

            listaConta.push(dados)
        }else{
            return false
        }

        

    })
    if(listaConta == ''){
        return false
    }else{
        return listaConta
    }
    
}

const getContatosUsuario = function(numero){
    let listaContato = []
    let entradaNumero = numero

    contato.forEach(function(itemContato){
        if(entradaNumero == itemContato.number){
            itemContato.contacts.forEach(function(itemDescricaoContato){
                dados = {
                    nome : itemDescricaoContato.name,
                    descricao : itemDescricaoContato.description,
                    foto : itemDescricaoContato.image
                }

                listaContato.push(dados)

            })
        }
    })

    return listaContato
}

const getListaMensagem = function(numero){
    let listaMensagem = []
    let entradaNumero = numero
}


// console.log(getDadosUsuario())
// console.log(getContaUsuario(11966578996))
// console.log(getContatosUsuario(11966578996))
