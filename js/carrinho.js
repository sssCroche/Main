// verificar se todo o HTML foi carregado
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    // remover item do carrinho
    const removeProductButtons = document.querySelectorAll(".remover")
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", removeProduct)
    }
}


function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal();
}

let totalAmout = 0.00
 
const btnsComprar = document.querySelectorAll(".botao-comprar-produto");
const cardsItem = document.querySelector(".cards");

const addItemCarrinho = (event) => {
    const btnComprar = event.target;
    const itemImage = btnComprar.parentElement.querySelector("img").src;
    const itemTitle = btnComprar.parentElement.querySelector("h3").innerHTML;
    const itemPrice = btnComprar.parentElement.querySelector("P").innerHTML;

    //fazer com que caso seja adicionado um mesmo produto, fazer com que seja incrementado
    const productCardName = document.querySelectorAll(".product-name")
    for (var i = 0; i < productCardName.length; i++) {
        if(productCardName[i].innerText === itemTitle) {
            productCardName[i].getElementsByClassName("quantidade")[0]++
            return;
        }
    }

    const cardItem = document.createElement("div");
    cardItem.classList.add("card");

    cardItem.innerHTML = `
                                <img src="${itemImage}">
                                <div class="content">
                                    <h3><span class="product-name">${itemTitle}</span></h3>
                                    <p><span class="item-price">${itemPrice}</span></p>
                                </div>
                                <div class="controle">
                                <button class="incremento">+</button>
                                <div><span class="quantidade">1</span></div>
                                <button class="decremento">-</button>
                                </div>
                                <button class="remover">X</button>
  `;

    cardsItem.appendChild(cardItem);
    updateTotal()
    cardsItem.getElementsByClassName("quantidade")[0].addEventListener("change",checkIfInputIsNull)
    cardsItem.querySelectorAll("remover")[0].addEventListener("click", remove)
};

function checkIfInputIsNull(event){
    if(event.target.value === "0"){
        event.target.remove()//ver se afeta p elemento pai
    }

    updateTotal();
}

btnsComprar.forEach((btnComprar) => {
    btnComprar.addEventListener("click", addItemCarrinho);
});

const carrinhoCompra = document.querySelector(".carrinho-compra");

const openLoja = () => {
    const carrinho = document.querySelector(".carrinho");

    carrinho.classList.toggle("carrinho-aberto");
};

carrinhoCompra.addEventListener("click", openLoja);




function updateTotal() {
    
    // quando remover, tirar do total
    const cardsProducts = document.querySelectorAll(".card")
    for (var i = 0; i < cardsProducts.length; i++) {
        // console.log(cardsProducts[i])
        const productPrice = cardsProducts[i].querySelectorAll(".item-price")[0].innerText.replace("R$", "").replace(",", ".")
        console.log(productPrice)
        const productQuantity = cardsProducts[i].querySelectorAll(".quantidade")[0].value

        totalAmout += productPrice * productQuantity;
    }
    totalAmout = totalAmout.toFixed(2)
    totalAmout = totalAmout.replace(".", ",")
    document.querySelector(".totalCompra").innerText = "R$" + totalAmout
}