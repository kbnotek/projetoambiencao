/* declaranco uma função no JavaScript
A FUNÇÃO E UM TRECHO DE CODIGO 
(ALGORITMO) QUE REALIZA UMA TAREFA ESPERCIFICA
*/

function validar(){
    // declarar as variáveis -> var - Const

    // O Tipo é Implícito 
    //JS é fracamente Tipada
    var login;
    var senha;
    //Pegar o Elemento (tag)
     login = document.getElementById("login").value;
     senha = document.getElementById("senha").value;
     if(login === ''){
       alert("Login Obrigatório")
       return false; 
     }else if (senha === ''){
        alert("Senha Obrigatória");
        return false
    }else{
        return true;
    }

} 
