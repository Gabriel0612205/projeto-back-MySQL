// OBT : Realizar a interaçao do aluno com o banco de dados. 
// Data : 14/04/2023
//Autor : Gabriel
//Versão : 1.0


// inserir um novo registro no banco de dados 
    
    const insertAluno = function(dadosAluno){

    
    }
//Atualizar um registro existente no banco de dados
    const updateAluno = function(dadosAluno){

    
    }
// Excluir um registro no banco de dados
    const deleteAluno = function(id){

    
    }
// Retorna  todos os registros do banco de dados 
    const selectAllAluno = async function(){

        //import do prisma , responsavel por manipular dados no BD
        let { PrismaClient } = require('@prisma/client');

        //instancia da classe do PrismaClient
        let prisma = new PrismaClient();

        //variavel com script sql para executar no banco de dados
        let sql = 'select * from tbl_aluno';

        //executa um script dentro do BD
        //$queryRawUnsafe(sql) é utilizado quando o scriptsql esta em uma variavel
        //$queryRaw é utiizado quando passar o script direto no metodo ; 
        let rsAluno = await prisma.$queryRawUnsafe(sql);
        
        if(rsAluno.length > 0 ){
            
            return rsAluno;
        
        }else{
            
            return false;
        }
         
    };


    // Retorna um registro filtrado pelo ID do banco de dados
    const selectByIdAluno = function(id){

    
    }

module.exports = {
    selectAllAluno
}
