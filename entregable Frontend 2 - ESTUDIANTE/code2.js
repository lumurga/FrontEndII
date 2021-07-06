let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
  };
  
  let qs = element => document.querySelector(element);
  function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    let presente = 2021;
    let anioNac;
  
    datosPersona.nombre = prompt("Ingrese su nombre");
    while (datosPersona.nombre == "" || datosPersona.nombre == null){
      datosPersona.nombre = prompt("Por favor, ingresá tu nombre")
    };
  
    anioNac = prompt("Ingresá tu año de nacimento");
    while (anioNac == "" || anioNac == null || isNaN(anioNac)){
      anioNac = prompt("Por favor, ingresá tu nombre")
    };
    datosPersona.edad = presente - anioNac;
  
    datosPersona.ciudad = prompt("Ingresá su ciudad");
    while (datosPersona.ciudad == "" || datosPersona.ciudad == null){
      datosPersona.ciudad = prompt("Por favor, ingresá tu ciudad")
    };
    datosPersona.interesPorJs = confirm("Tenés interés por aprender JavaScript?");
  }
  
  
  
  function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
         
          let spanNombre = qs("#nombre");
          let spanEdad = qs("#edad");
          let spanCiudad = qs("#ciudad");
          let spanJavascript = qs("#javascript");
  
          spanNombre.innerText = datosPersona.nombre;
          spanEdad.innerText = datosPersona.edad;
          spanCiudad.innerText = datosPersona.ciudad;
          let interes = datosPersona.interesPorJs ? "Si" : "No";
          spanJavascript.innerText = interes;
  }
  
  
  /* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
  const listado = [
    {
      imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
      lenguajes: "HTML y CSS",
      bimestre: "1er bimestre",
    },
    {
      imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
      lenguajes: "Javascript",
      bimestre: "2do bimestre",
    },
    {
      imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
      lenguajes: "React JS",
      bimestre: "3er bimestre",
    },
  ];
  
  
  let contenedor = qs("#fila")
  function recorrerListadoYRenderizarTarjetas() {
      
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    if(contenedor.innerHTML == ""){
    for (materia of listado) {
        contenedor.innerHTML += `
        <div class="caja">
          <img src="${materia.imgUrl}" alt= "${materia.lenguajes}">
          <p class="lenguajes">Lenguaje: ${materia.lenguajes}</p>
          <p class="bimestre">Bimestre: ${materia.bimestre}</p>
          </div>
       `
      }
    } else {contenedor.innerHTML = "";
   }
  }
  
  
  function mostrarYOcultarDescripcionCompleta() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
   let sobreMi = qs(".sobre-mi");
   sobreMi.classList.toggle("sobre-mi-completo")
  }