import products from "/js/products.js";

const gameContainer = document.querySelector(".grid-container");

products.forEach((game) => {
    gameContainer.innerHTML += `<div class="gameproduct">
                                <a href="game.html"
                                <h2>${game.name}</h2> 
                                <img id=${game.id} src=${game.srcImage}" alt=${game.name}>
                                </a>
                                <h3>Price: $${game.price}</h3>
                                <button class="btn-addtocart">Add to Cart</button>
                                
                                </div>`;
});