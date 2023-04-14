// OBT : API para interagir com o banco de dados
// Data : 14/04/2023
//Autor : Gabriel
//Versão : 1.0

//para utilizar a conexao com o banco de dados iremos  utilizar o PRISMA 
//npm install prisma --save
//npm prisma
//npm prisma init 
//npm install @prisma/client

//import das bibliotecas do projeto

const express = require('express')

const cors = require('cors')

const bodyParser = require('bodyParser')

const { response } = require('express')

const { next } = require('process')

const { request } = require('http')

const bodyParser = querire('bodyParser')

// Cria o obt app utilizando a classe do express

const app = express();

app.use(( request , response , next)=>{
    response.header('Acess-Control-Allow-Origin' , '*');
   
    response.header('Acess-Control-Allow-Methods' , 'Get,Post,Put,Delete,Opitions')
   
    app.use(cors());
    //Continua para a leitura dos endpoints
    next();
});

//CRUD(create , read , update e delete)

//EndPoints 01: Retorna  todos os dados de alunos
  
app.get ('/v1/lion-school/aluno' , cors(),async function(request,response){



});

// EndPonit : 02 Retorna dados do aluno pelo ID

app.get ('/v1/lion-school/aluno/:id' , cors(),async function(request,response){



});
 
 //EndPoint: 03 
  
 app.post ('/v1/lion-school/aluno/:id' , cors(),async function(request,response){



});
//EndPoint 04 : Atualizar um aluno pelo ID
 
app.put('/v1/lion-school/aluno/:id' , cors(),async function(request,response){



});

//EndPoint 05 : 
app.delete ('/v1/lion-school/aluno/:id' , cors(),async function(request,response){



});



    
