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
        updateCartTotal();
    }
    
    function updateCartTotal(){
    
        let cartItemContainer = document.getElementsByClassName(".products-container")[0];
    
        let currentProducts = cartItemContainer.getElementsByClassName(".shop-product");
    
        for(let i = 0; i < currentProducts.length; i++){
            let product = currentProducts[i];
            let priceElement = product.getElementsByClassName(".price-tag")[0];
            let price = priceElement.innerText;
    
    
            console.log(price);
        }
    
    
    }
    
}


