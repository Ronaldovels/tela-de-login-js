const divContainer = document.querySelector("#Login")

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

const divContainer2 = document.querySelector("#Registrar")

let isClicked2 = true

let showOrHide2 = function(){
    if(isClicked2){
        
        isClicked2 = false
        divContainer.style.display = "none"
        divContainer2.style.opacity = "1"
        divContainer2.style.display = "block"
    } else {
        
        divContainer2.style.display = "none"
        isClicked2 = true
    }
}


let isClicked3 = true

let showOrHide3 = function(){
    if(isClicked3){
        
        isClicked2 = false
        divContainer.style.opacity = "1"
        divContainer.style.display = "block"
        divContainer2.style.display = "none"
    } else {
        
        divContainer2.style.display = "none"
        isClicked2 = true
    }
}

let closeWindow = function(){
    
        divContainer.style.opacity = "0"
        divContainer2.style.opacity = "0"
       
    
}