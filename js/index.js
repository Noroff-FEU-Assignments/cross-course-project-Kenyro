/*
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

*/
const baseUrl = "https://products.kevin-rundberg.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".grid-container");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function(product) {
        productContainer.innerHTML += `
        <div class="product"><h2>${product.name}</h2>
        <div class="product-image" style="background-image:url("${product.images}")</div>
        </div>`
    })

}

getProducts(baseUrl);