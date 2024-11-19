const btnsComprar = document.querySelectorAll(".botao-comprar-produto");
const cardsItem = document.querySelector(".cards");

const addItemCarrinho = (event) => {
  const btnComprar = event.target;
  const itemImage = btnComprar.parentElement.querySelector("img").src;
  const itemTitle = btnComprar.parentElement.querySelector("h3").innerHTML;
  const itemPrice = btnComprar.parentElement.querySelector("P").innerHTML;

  console.log(itemTitle)

  const cardItem = document.createElement("div");
  cardItem.classList.add("card");

  cardItem.innerHTML = `
      <img src="${itemImage}">
                                <div class="content">
                                    <h3>${itemTitle}</h3>
                                    <p>${itemPrice}</p>
                                </div>
                                <div class="controle">
                                <button>+</button>
                                <div class="quantidade">0</div>
                                <button>-</button>
                                </div>
                                <div class="remove">X</div>
  `;

  cardsItem.appendChild(cardItem);
};
btnsComprar.forEach((btnComprar) => {
  btnComprar.addEventListener("click", addItemCarrinho);
});
const carrinhoCompra = document.querySelector(".carrinho-compra");

const openLoja = () => {
  const carrinho = document.querySelector(".carrinho");

  carrinho.classList.toggle("carrinho-aberto");
};

carrinhoCompra.addEventListener("click", openLoja);
