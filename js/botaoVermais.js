 function Vermais(){
    const botao = document.getElementById("botao")
    const conteudoExtra01 = document.getElementById("conteudo-extra01")
    const conteudoExtra02 = document.getElementById("conteudo-extra02")
    const conteudoExtra03 = document.getElementById("conteudo-extra03")
    
    if(conteudoExtra01.style.display === "none"){
        conteudoExtra01.style.display = "flex"
        conteudoExtra02.style.display = "flex"
        conteudoExtra03.style.display = "flex"
        botao.textContent = "Fechar"
    }
    else{
        conteudoExtra01.style.display = "none"
        conteudoExtra02.style.display = "none"
        conteudoExtra03.style.display = "none"
        botao.textContent = "Ver Tudo"
    }
}
