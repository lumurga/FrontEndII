
window.addEventListener("load", function(){
let qs = element => document.querySelector(element);
let botonOscuro = qs("#botonOscuro");
botonOscuro.addEventListener("click", function(){
    let body = qs("body");
    body.classList.toggle("dark");
    // if(botonOscuro.innerHTML == "Modo oscuro"){
    //     botonOscuro.innerHTML = "Modo claro";
    // } else{
    //     botonOscuro.innerHTML = "Modo oscuro";
    // }
    
        }
    )
})

