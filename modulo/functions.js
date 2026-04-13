/*************************************************************************************
 * Objetivo: Manipular dados de contatos Whatsapp
 * Autor: Matheus Lucas
 * Data: 08/04/2026
 * Versão: 1.0
 **************************************************************************************/

const whatsapp = require("./contatos")
const contato = whatsapp.contatos["whats-users"]


const getDadosUsuario = function () {
    let listaDadosUsuario = []
    let dados = {
        'status' : true,
        'status_code' : 200,
        'development' : 'Matheus Lucas de Freitas Zacarias',
        contato
    }

    listaDadosUsuario.push(dados)
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
                'status'        : true,
                'status_code'   : 200,
                'development'   : 'Matheus Lucas de Freitas Zacarias',
                nome            : itemConta.account,
                nick            : itemConta.nickname,
                numero          : itemConta.number,
                foto            : itemConta["profile-image"],
                corFundo        : itemConta.background,
                StartConta      : itemConta["created-since"].start,
                EndConta        : itemConta["created-since"].end
            }

            listaConta.push(dados)
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
                    'status'        : true,
                    'status_code'   : 200,
                    'development'   : 'Matheus Lucas de Freitas Zacarias',
                    nome            : itemDescricaoContato.name,
                    descricao       : itemDescricaoContato.description,
                    foto            : itemDescricaoContato.image
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
                    'status' : true,
                    'status_code' : 200,
                    'development' : 'Matheus Lucas de Freitas Zacarias',
                    contato       : itemMensagem.name,
                    descrição     : itemMensagem.description,
                    imagem        : itemMensagem.image,
                    mensagem      : itemMensagem.messages,

                    
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

const getContatosMensagem = function (numero, nome) {
    let listaDadosContatos = []
    let dadosMensagem = {}
    let nomeContato = nome
    let entradaNumero = numero

    contato.forEach(function (itemContato) {

        if (entradaNumero == itemContato.number) {
           
            itemContato.contacts.forEach(function (itemMensagem) {

                if(nomeContato == itemMensagem.name){
                    dadosMensagem = {
                    'status'        : true,
                    'status_code'   : 200,
                    'development'   : 'Matheus Lucas de Freitas Zacarias',
                    nome            : itemContato.account,
                    numero          : itemContato.number,
                    Contato         : itemMensagem.name,
                    mensagem        : itemMensagem.messages
                }

                listaDadosContatos.push(dadosMensagem)

                } // fecha if dadosMensagem

                
            }) // Fecha mensagem


        } // Fecha itemContato


    }) // Fecha contato


    if (listaDadosContatos == '' || listaDadosContatos == null || listaDadosContatos.numero) {
        return false
    } else {
        return listaDadosContatos
    }


} // Fecha a function

const getFiltroMensagem = function (Palavra) {
    
    let filtroMensagem = Palavra.toLowerCase()
    let listaPalavra = []
    let conteudoMensagem = ''


    contato.forEach(function (itemUsuario) {
        itemUsuario.contacts.forEach(function (itemContato) {
            itemContato.messages.forEach(function (itemMensagem) {
                
                // Aqui eu iria transformar os conteudos de itemMensagem em minusculo, 
                // assim posso comparar as mensagens
                conteudoMensagem = itemMensagem.content.toLowerCase()

                // uso includes pra verificar se a mensagem contém a palavra digitada
                if (conteudoMensagem.includes(filtroMensagem)) {
                    
                    
                    dados = {
                        'status' : true,
                        'status_code'   : 200,
                        'development'   : 'Matheus Lucas de Freitas Zacarias',
                        nome            : itemUsuario.account,
                        número          : itemUsuario.number,
                        contato         : itemContato.name,
                        mensagem        : itemMensagem.content,
                        data            : itemMensagem.time
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

module.exports = {
    getDadosUsuario,
    getContaUsuario,
    getContatosUsuario,
    getListaMensagem,
    getContatosMensagem,
    getFiltroMensagem
}

