// OBT : implementa a regra de negocio entre o app e a model 
// Data : 24/04/2023
//Autor : Gabriel
//Versão : 1.0


//funçao 01 : para receber os dados do app e enviar para a model  
const inserirAluno = function(dadosAluno){

}
//funçao 02 : para receber os dados do app e enviar para a model para atualizar um item existente
const atualizarAluno = function(dadosAluno){

}
// funçao03 : para escluir um aluno filtrado pelo id , que sera encaminhado para model
const deletarAluno = function(id){

}
//funçao 04 : para retornar todos os dados do app e enviar para model
const selecionarTodosAluno = async function(){

    //import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');
    
    //solicita ao DAO todos os alunos ao BD
    let dadosAluno = await alunoDAO.selectAllAluno();
    
    //cria um obj do tipo SJON
    let dadosJSON ={};
    
    //valida se o BD teve registro
    if(dadosAluno ){
        //adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.alunos = dadosAluno;
         return dadosJSON;
    }else{
         return false;
    };
};


//funçao 05 : para buscar um item filtrado pelo id que sera encaminhado para a model
const buscarIdAluno = function(id){

};

module.exports = {
    selecionarTodosAluno
}