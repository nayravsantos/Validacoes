// BLOCO PARA VALIDAÇÃO DE EMAIL
// ---------------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" || 
       document.forms[0].email.value.indexOF('@') == -1 ||
       document.forms[0].email.value.indexOF('.') == -1)
       {
        alert("Por favor, informe um email válido");
        return false;
    }else{
        alert("Email informado com sucesso!");
    }
}



// ---------------------------------------



// CÓDIGO DE VEREFICAÇÃO DE EMAIL DIGITADO
// ---------------------------------------
