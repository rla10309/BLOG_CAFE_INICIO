//querySelector

const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nuevo Heading";
heading.classList.add("nueva_clase");
console.log(heading);

//querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces[0]);
enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("clase-nueva");
//enlaces[0].classList.remove("navegacion__enlace");


//getElementById

const heading2 = document.getElementById("heading");
console.log(heading2);

// Generar un nuevo enlace con codigo javascript
const nuevoEnlace = document.createElement("A");

//agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

//agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";

//agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

//agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);




console.log(nuevoEnlace);