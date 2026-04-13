/*************************************************************************************
 * Objetivo: Arquivo responsavel para manipular a API
 * Autor: Matheus Lucas
 * Data: 13/04/2026
 * Versão: 1.0
 **************************************************************************************/

/*******************************************************************************************************
 * Para configurar a API:
 *  Instalar o EXPRESS  -> npm install express --save
 *      Dependencia para configurar e utilizar o protocolo HTTP para criar a API
 *  Instalar o CORS     -> npm install cors --save
 *      Dependencia para configurar as permissões de acesso da API
 * 
 *  Assim que a instalação for concluida, uma nova pasta e dois novos arquivos vão aparecer no projeto
 *  
 * OBSERVAÇÃO: SÓ POSSO BAIXAR O EXPRESS E O CORS SE ESTIVER NA PASTA RAIZ DO PROJETO
 * 
*******************************************************************************************************/

const whatsapp = require('./modulo/functions.js')


// Import das dependencias para criar a API
const express   = require('express')
const cors      = require('cors')

// Criando um objeto do express para criar a API
const app = express()

// Configurações do CORS da API
const corsOptions = {
    origin: ['*'], //Configuração de origem da requisição(IP ou Dominio).
    methods: 'GET', //Configuração dos verbos que serão utilizados na API.
    allowedHeaders: ['Content-type', 'Authorization'] //Configurações de permissões.
                    //Tipo de dados  //Autorização de acesso 
}

// Aplicando as configurações do cors no express
app.use(cors(corsOptions))

// Buscando dados completos dos usuarios
app.get('/v1/whatsapp/dados/usuario', function(request, response){

    let dadosCompletos = whatsapp.getDadosUsuario()
    if(dadosCompletos){
        response.status(200)
        response.json(dadosCompletos)
    }else{
        response.status(404)
        response.json({'message' : 'Dados do usuario não encontrado'})
    }


})

// Buscando dados da conta do usuario por número
app.get('/v1/whatsapp/conta/usuario/:numero', function(request, response){
    let numero = request.params.numero
    let contaUsuario = whatsapp.getContaUsuario(numero)

    if(contaUsuario){
        response.status(200)
        response.json(contaUsuario)
    }else{
        response.status(404)
        response.json({'message' : 'Conta de usuario invalida'})
    }
})


app.get('/v1/whatsapp/contato/usuario/:numero', function(request, response){
    let numero = request.params.numero
    let contatosUsuario = whatsapp.getContatosUsuario(numero)

    if(contatosUsuario){
        response.status(200)
        response.json(contatosUsuario)
    }else{
        response.status(404)
        response.json({'message' : 'Número invalido'})
    }
})


app.get('/v1/whatsapp/lista/mensagem/:numero', function(request, response){
    let numero = request.params.numero
    let listaMensagem = whatsapp.getListaMensagem(numero)

    if(listaMensagem){
        response.status(200)
        response.json(listaMensagem)
    }else{
        response.status(404)
        response.json({'message' : 'Número invalido'})
    }
})


app.get('/v1/whatsapp/contato/mensagem/', function(request, response){
    let numero = request.query.numero
    let nomeUsuario = request.query.nome
    let contatoMensagem = whatsapp.getContatosMensagem(numero, nomeUsuario)

    if(contatoMensagem){
        response.status(200)
        response.json(contatoMensagem)
    }else{
        response.status(404)
        response.json({'message' : 'Número ou nome do usuario está invalido'})
    }
})

app.get('/v1/whatsapp/filtro/mensagem/', function(request, response){
    let palavra = request.query.palavra
    let numero = request.query.numero
    let filtroMensagem = whatsapp.getFiltroMensagem(palavra, numero)

    if(filtroMensagem){
        response.status(200)
        response.json(filtroMensagem)
    }else{
        response.status(404)
        response.json({'message' : 'Palavra chave não encontrada'})
    }
})

// Fazendo um Endpoint para a documentação
app.get('/v1/whatsapp/help', function(request,response){
    let docAPI = {
        "api-description" : "API para manipular dados do whatsapp",
        "date" : "2026-04-13",
        "development" : "Matheus Lucas de Freitas Zacarias",
        "version" : 1.0,
        "endpoints" : [
            {"router1" : "/v1/whatsapp/dados/usuario",
             "Description" : "Retorna os dados de todos os usuários"   
            },
            {
                "router2" : "/v1/whatsapp/conta/usuario/:numero",
                "description" : "Retorna os dados do usuário pelo número",
            },
            {
                "router3" : "/v1/whatsapp/contato/usuario/:numero",
                "description" : "Retorna os dados dos contatos de um usuario de acordo com o número",
            },
            {
                "router4" : "/v1/whatsapp/lista/mensagem/:numero",
                "description" : "Retorna uma lista com as mensagem de cada usuário de acordo com o número",
            },
            {
                "router5" : "/v1/whatsapp/contato/mensagem/",
                "description" : "Retorna as mensagem dos contatos do usuário utilizando via Query(numero e nome), mande o número e o nome do contato",
            },
            {
                "router6" : "/v1/whatsapp/filtro/mensagem/:palavra",
                "description" : "Retorna as mensagems que tem uma certa palavra que você encaminhar via Query(palavra)",
            },
            
        ]
            
    } 
    response.status(200)
    response.json(docAPI)
})


// Faz um start na API (Aguardando requisição)
app.listen(8080, function(){
    console.log('API aguardando novas requisições...')
})






