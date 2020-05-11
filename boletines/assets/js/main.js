//DOM
//querySelector(devuelve sólo un objeto)|querySelectorAll(devuelve una lista con los objetos encontrados)
/*
let container = document.querySelectorAll("a");

container.forEach(function(link){
    console.log(link);
});
console.log(container);

Eventos
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
    td.addEventListener("click", function(){
        console.log(this)
    });
});
*/

/* Evitar que los elementos ejecuten su evento por defecto
let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click", function(evento){
        evento.preventDefault();
        // también se puede retornar false: return false;
    });
});
*/

/* Remover clases de una etiqueta
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icon){
    icon.classList.remove("fa-star-o")
});
*/

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click", function(evento){
        evento.preventDefault();
        // también se puede retornar false: return false;
        let contenido = document.querySelector(".content");
        //Quitar las clases
        contenido.classList.remove("animate__zoomInDown");
        contenido.classList.remove("animate__animated");
        //Agregar clases para animar su salida
        contenido.classList.add("animate__zoomOutUp");
        contenido.classList.add("animate__animated");

        //setTimeout()
        //setInterval()
        
        setTimeout(function(){
            location.href = "../index.html";
        }, 800);

    });
});