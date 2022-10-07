
const productDetailContainer = document.querySelector(".game-product");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const apiUrl = "https://products.kevin-rundberg.one/wp-json/wc/store/products";


console.log(id);
async function fetchProduct(){

        const response = await fetch(apiUrl);
        const productDetails = await response.json();

        console.log(productDetails);
        

        createHtml(productDetails);

    }

fetchProduct();

function createHtml(productDetails){

    for(let i = 0; i < productDetails.length; i++){
        productDetailContainer.innerHTML = `<div class="product-title">
        <h1>${productDetails[i].name}</h1>
        
        </div>`
    }
    
}