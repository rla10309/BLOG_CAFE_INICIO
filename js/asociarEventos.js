// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (e) {
//   console.log(e);
//   e.preventDefault(); // impide que el evento haga su función, en este caso submit

//   //validar un formulario
//   console.log("enviando formulario");
// });



// Eventos de los inputs y textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// El evento de submit
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    //Validar el formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === "" || email ==="" || mensaje === ""){
        mostrarAlerta("Todos los campos son obligatorios", "error");
        return; //Corta la ejecución del código
    } 
    mostrarAlerta("Los datos son correctos")
});

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  console.log(datos);
}


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }
    formulario.appendChild(alerta);
    setTimeout(() => alerta.remove(), 3000);
}

