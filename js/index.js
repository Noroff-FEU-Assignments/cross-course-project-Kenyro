
import local_products from "/js/products.js";
/*
const gameContainer = document.querySelector(".grid-container");

local_products.forEach((game) => {
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
        <a href="game.html?id=${product.id}">
        <div class="product"><h2>${product.name}</h2>
        <img class="product-image" src="${product.images[0].src}"</div>
        
        <p>${product.price_html}</p>

        </div>`
        
    })

}

getProducts(baseUrl);