const form = document.getElementById('form');
const vistaPrevia = document.getElementById('vista-previa');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario
  const formEntries = formData.entries(); // Convierte los datos del formulario a un array de pares clave-valor

  // Crea una lista con los datos del formulario
  let lista = '<ul>';
  for (const [clave, valor] of formEntries) {
    lista += `<li><strong>${clave}:</strong> ${valor}</li>`;
  }
  lista += '</ul>';

  // Crea el contenido HTML para la vista previa
  const contenidoHtml = `
    <h2>Confirmación de envío</h2>
    <p>Por favor revise la información antes de enviar el formulario:</p>
    ${lista}
  `;

  vistaPrevia.innerHTML = contenidoHtml; // Imprime la vista previa en el div "vista-previa"
  
  form.submit();
  event.preventDefault(); // Envía el formulario
});

  // Selecciona el switch
  function mostrarOpciones2() {
    var opciones2 = document.getElementById("page5");
    if (opciones2.style.display === "none") {
      opciones2.style.display = "block";
    } else {
      opciones2.style.display = "none";
    }
  }
  function mostrarOpciones() {
    var opciones = document.getElementById("opciones");
    if (opciones.style.display === "none") {
      opciones.style.display = "block";
    } else {
      opciones.style.display = "none";
    }
  }

  function mostrarcbu() {
    var opciones2 = document.getElementById("opciones2");
    var opciones = document.getElementById("opciones");
    if (opciones.style.display === "none") {
      opciones2.style.display = "block";
    } else {
      opciones.style.display = "none";
    }
  }


  function pagina6() {
    var opciones2 = document.getElementById("page4");
    var opciones3 = document.getElementById("opciones");
    var opciones = document.getElementById("paginukinashei");
    if (opciones.style.display === "none") {
      opciones.style.display = "block";
      opciones2.style.display = "none";
      opciones3.style.display = "none";
    } else {
      
    }
  }