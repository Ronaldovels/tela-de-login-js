const MeuBotao = document.getElementById("#MeuBotao")
const Registrar = document.getElementById("#Registrar")



function toggle(){
    if (Registrar.style.visibility == "hidden"){
            Registrar.style.visibility = "visible"
        } else {
            Registrar.style.display = "hidden"
        }
}
