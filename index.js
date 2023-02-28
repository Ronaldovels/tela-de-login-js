const divContainer = document.querySelector("#Registrar")

let isClicked = true

let showOrHide = function(){
    if(isClicked){
        
        isClicked = false
        divContainer.style.opacity = "1"
    } else {
        
        divContainer.style.opacity = "0"
        isClicked = true
    }
}



    



