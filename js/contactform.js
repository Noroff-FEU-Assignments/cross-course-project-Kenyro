
const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageText = document.querySelector('textarea[name="message"]');

let isFormValid = false;

const resetElm = (elm) => {
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = (elm) => {
    elm.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput);
    resetElm(messageText);

    if(!nameInput.value){
        isFormValid = false;
        invalidateElm(nameInput);
    }

    if(!emailInput.value){
        isFormValid = false;
        invalidateElm(emailInput);
    }

    if(!messageText.value){
        isFormValid = false;
        invalidateElm(messageText);
    }
}

form.addEventListener("submit",(e) => {
e.preventDefault();
validateInputs();
if(isFormValid){
    form.remove();
    thankYou.classList.remove("hidden");
}
});

nameInput.addEventListener("input", () => {
    validateInputs();

    
});

emailInput.addEventListener("input", () => {
    validateInputs();

    
});