 function Vermais(){
    const botao = document.getElementById("botao")
    const conteudoExtra = document.getElementById("conteudo-extra")
    const conteudoExtraa = document.getElementById("conteudo-extraa")
    
    if(conteudoExtra.style.display === "none"){
        conteudoExtra.style.display = "flex"
        conteudoExtraa.style.display = "flex"
        botao.textContent = "Fechar"
    }
    else{
        conteudoExtra.style.display = "none"
        conteudoExtraa.style.display = "none"
        botao.textContent = "Ver Tudo"
    }
}
