const titulo = document.querySelector("h1");
const clase = document.querySelector(".menu_items");
console.log(titulo);
console.log(clase);


const parrafo = document.querySelector("#to_do")
console.log(parrafo);


const tareas = document.querySelectorAll("li");
console.log(tareas);

const tituloporid = document.getElementById("to_do");
console.log(tituloporid);

const tituloporclase = document.getElementById("muni_items");
console.log(tituloporclase);


// herencia 

const padre = document.querySelector("ul");
console.log(padre.firstElementChild);
console.log(padre.lastElementChild);

const footer =document.querySelector("footer");
console.log(footer.children);// todos los hijos 

console.log(footer.parentElement); // elemento padre 

console.log(footer.closest("body"));


const input = document.querySelector("input");
console.log(input.value="adrian");
console.log(titulo.textContent="lista");

titulo.style.color="pink";
parrafo.style.color="blue";
parrafo.style.backgroundColor="pink";


const boton = document.querySelector("div");
boton.classList.add("button");
   const seccion = document.querySelector("section");
boton.addEventListener("click",()=> {
   input.classList.toggle("invisible");// swich "suiche"
   seccion.classList.toggle("invisible");
});

// agregar o crear elementos 
const main = document.querySelector("main");
main.innerHTML ="<h1> agregando elemento</h1>";
main.insertAdjacentHTML("beforeend","<h1> nueva </h1>");