let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]
const inputField = document.getElementById("text-input");


let button = document.getElementById("submit-button");

let pass = document.getElementById("password");

button.addEventListener("click", gen)

function gen(event) {
    event.preventDefault();
    
    const inputValue = parseInt(inputField.value)
    if(inputValue) {
        pass.textContent = "";


        for(let i=0; i<inputValue; i++) {
            let random = Math.floor(Math.random() * characters.length);
            pass.textContent += characters[random]
        }
    }
    else 
    {
        pass.textContent = "";


    for(let i=0; i<10; i++) {
        let random = Math.floor(Math.random() * characters.length);
        pass.textContent += characters[random]
    }
    }
    
}

