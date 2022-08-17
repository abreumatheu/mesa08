podeSubir(2.10, "Não")

function podeSubir (alturapessoa, companhia){
    if (alturapessoa >= 1.40  && alturapessoa < 2 ) {
        return console.log("Entrada Autorizada")
    }else if ((alturapessoa < 1.40 && alturapessoa > 1.20) && companhia == "Sim"){
        return console.log("Entrada autorizada apenas com acompanhante")
    }else {
        return console.log("Entrada não autorizada")
    }
}


