let array=[{id:1, nombre: "estudiar", completada: false},
          {id:2, nombre: "hacer ejercicio", completada: true},
            {id:3, nombre: "leer un libro", completada: false}
];

function mostrarTareas() {
    console.clear(); 
    console.log("Lista de Tareas:");
    array.forEach(array => {
       const estado = array.completada ? "👍" : "👎";
       console.log(`${estado} ${array.nombre} `);
    })
}

function agregarTarea(nombre) {
const tareanueva ={
    id: array.length > 0 ? array[array.length - 1].id + 1 : 1,
    nombre: nombre,
    completada: false
};
array.push(tareanueva);
}
function eliminar(id){
    const index = array.findIndex(array => array.id === id);
    if(index !== -1){
        array.splice(index,1);
        mostrarTareas();
    }else{
        console.log("Tarea no encontrada");
    }
    
}

const formulario = document.querySelector("form");

formulario.addEventListener("submit", () => {
    
    input = document.querySelector("input");
    agregarTarea(input.value);
    const li = document.createElement("li");
    li.textContent = input.value;
    const ul = document.querySelector("ul");
    // /li.innerHTML = input.value;
    ul.appendChild(li);
    mostrarTareas(); 
    console.log(li);  
    
});


eliminar(2);

agregarTarea("comprar alimentos");

mostrarTareas();
