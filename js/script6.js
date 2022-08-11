function resposta() {
    var recev1 = Number(document.formcalc.v1.value)
    var recev2 = Number(document.formcalc.v2.value)
    var receconta = document.formcalc.conta.value

    if (receconta == "mais") {
        var resposta = recev1 + recev2
    } else if(receconta == "menos"){
        var resposta = recev1 - recev2
    }else if(receconta == "mult"){
        var resposta = recev1 * recev2
    }else if(receconta == "divs"){
        var resposta = recev1/recev2
    }else{
        var resposta = "opção invalida, por favor,  escolha uma das operações"
    }
    
    if (receconta == "") {
        alert(resposta)
    } else {
        alert("A resposta do calculo é: " + resposta)
    }
}