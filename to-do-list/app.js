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


agregarTarea("comprar alimentos");
mostrarTareas();