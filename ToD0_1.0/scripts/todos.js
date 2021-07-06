let listadoTareas = [
    {
        description: "Estudiar el material de PG",
        createdAt: "18/06/21",
        tareaTerminada: true
    },
    {
        description: "Terminar la bitácora de Wordpress ",
        createdAt: "20/06/21",
        tareaTerminada: false
    },
    {   
        description: "Hacer Lemmon Pie",
        createdAt: "20/06/21",
        tareaTerminada: false
    },
    {
        description: "Hacer el entregable de Fronty 2",
        createdAt: "20/06/21",
        tareaTerminada: false
    },
    {
      description: "Estudiar para el parcial de Infraestructura",
        createdAt: "20/06/21",
        tareaTerminada: false
    }
];

let agregarTarea = tarea => {
  return `
  <li class="tarea">
    <div class="not-done"></div>
    <div class="description">
      <p class="nombre">${tarea.description}</p>
      <p class="timestamp">${tarea.createdAt}</p>
    </div>
  </li>`;
};


window.addEventListener("load", function(){
  let q = element => document.querySelector(element);
  let tareasPendientes = q(".tareas-pendientes");
  let tareasTerminadas = q(".tareas-terminadas");

for (tarea of listadoTareas){
    if (tarea.tareaTerminada == false) {
      tareasPendientes.innerHTML += agregarTarea(tarea);
    } else {
      tareasTerminadas.innerHTML += agregarTarea(tarea);
    }
  };
});



// function renderizarTodos() {
//     // tareasPendientes.innerHTML
//     console.log("deberiamos renderizar todas las todos del array");
// }

// renderizarTodos()


