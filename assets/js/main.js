const itemProyecto = document.getElementById("item");
const disenoProyecto = document.getElementById("diseno");
const programProyecto = document.getElementById("programacion");
const juegosProyecto = document.getElementById("juegos");
const items = document.getElementsByClassName("item");


// Función para mostrar solo los elementos de la categoría seleccionada
function verCategoria(categoria) {
  // Oculta todos los elementos
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }


// Muestra solo los elementos que coinciden con la categoría seleccionada
  const itemCategoria = document.getElementsByClassName(categoria);
  for (let i = 0; i < itemCategoria.length; i++) {
    itemCategoria[i].style.display = "block";
  }
}


// Asigno  evento 'click' a cada enlace

itemProyecto.addEventListener("click", () => verCategoria("item"));
disenoProyecto.addEventListener("click", () => verCategoria("diseno"));
programProyecto.addEventListener("click", () => verCategoria("programacion"));
juegosProyecto.addEventListener("click", () => verCategoria("juegos"));



//Formulario
const formulario = document.getElementById("formulario");


// Agrega  evento de envío del formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();


// Obtiene los valores de los campos
  const userName = document.getElementById("userName").value;
  console.log("Nombre:", userName);
  const userEmail = document.getElementById("userEmail").value;
  console.log("Correo:", userEmail);
  const userComment = document.getElementById("textarea1").value;
  console.log("Comentario:", userComment);


//Mensaje de exito
  const alertSuccess = document.getElementById("alertSuccess");
  alertSuccess.textContent = "Formulario enviado con éxito.";
  alertSuccess.classList.remove("d-none");

  formulario.reset();
  console.log(formulario);


//para que mensaje desaparesca
  setTimeout(function () {
    alertSuccess.classList.add("d-none");
  }, 2000); //
});
