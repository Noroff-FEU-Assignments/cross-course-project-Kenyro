if(document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready();
}


function ready(){
    const remove_Button = document.querySelector(".remove-btn");

    remove_Button.addEventListener("click", removeFromCart);

    function removeFromCart(){
        console.log("Removed")
        var removeButtonClicked = event.target;
        removeButtonClicked.parentElement.remove();
    }

    const storedProduct = JSON.parse(localStorage.getItem("productDetails"));

    console.log(storedProduct);
    const productContainer = document.querySelector(".products-container");

    productContainer.innerHTML = `
                                    <div class="shop-product">
                                        <h2 class="shop-title">${storedProduct.name}</h2>
                                        <img class="shop-image" src="${storedProduct.images[0].src}">
                                        <h3 class="price-tag">${storedProduct.prices.price} NOK</h3>
                                        <button class="remove-btn" type="button">X</button>
                                    </div>

    `

}
