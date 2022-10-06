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
        <div class="price-and-shop">
        <p class="price">${product.price_html}</p>
        <button class="add-btn" type="button">Add to Cart</button>
        </div>
        </div>`
        
    })

}

getProducts(baseUrl);