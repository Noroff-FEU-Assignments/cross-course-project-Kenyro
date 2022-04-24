const productDetailContainer = document.querySelector(".game-product");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const apiUrl = "https://products.kevin-rundberg.one/wp-json/wc/store/products" + id;

async function fetchProduct(){

        const response = await fetch(apiUrl);
        const productDetails = await response.json();

        createHtml(productDetails);

    }

fetchProduct();

function createHtml(productDetails){
    productDetailContainer.innerHTML = `<h1>${productDetails.name}</h1>
                                        <img class="product-image" src="('${productDetails.images[0].src}')"></div>
                                        <div class="product-description">${productDetails.description}</div>`;

}