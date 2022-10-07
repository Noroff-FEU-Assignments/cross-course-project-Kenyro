
const productDetailContainer = document.querySelector(".game-product");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const apiUrl = "https://products.kevin-rundberg.one/wp-json/wc/store/products/" + id;


console.log(id);
async function fetchProduct(){

        const response = await fetch(apiUrl);
        const productDetails = await response.json();

        console.log(productDetails);
        

        createHtml(productDetails);

    }

fetchProduct();

function createHtml(productDetails){

        productDetailContainer.innerHTML = `<div class="product-title">
                                            <h1>${productDetails.name}</h1>
                                            <img class="product-image" src="${productDetails.images[0].src}">
                                            <p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting 
                                            industry. Lorem Ipsum has been the industry's standard dummy text 
                                            ever since the 1500s, when an unknown printer took a galley of type 
                                            and scrambled it to make a type specimen book. 
                                            It has survived not only five centuries, but also the leap into electronic 
                                            typesetting, remaining essentially unchanged. 
                                            It was popularised in the 1960s with the release of Letraset sheets containing 
                                            Lorem Ipsum passages, and more recently with desktop publishing software like 
                                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>`
    
}