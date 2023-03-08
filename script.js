let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
//OCULTA EL MENU UNA VEZ QUE SE SELECCIONO UNA OPCION
document.getElementById("nav").classList ="";
menuVisible = false;
}
//FUNCION QUE APLICA LAS ANIMACIONES DE LAS HABILIDADES

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skill = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skill >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("comunicacion");
        habilidades[3].classList.add("trabajoenequipo");
    }

}