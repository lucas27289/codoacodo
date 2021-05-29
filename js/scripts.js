function mostrarMenu(){
    var menu = document.getElementById("nav");
    if(menu.classList.contains("inactivo")){
        menu.classList.remove("inactivo")
    }
    else{
        menu.classList.add("inactivo")
    }
}