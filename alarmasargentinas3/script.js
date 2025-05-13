let primerTitulo = document.title;



window.addEventListener("focus", () => {
  setInterval(titulo, 5000);
});

function titulo() {
  const estados = [
    "Alarmas Argentinas",
    "Seguridad",
    "Protege tu casa",
    "Proteccion 24hs",
    "Contrataciones Alarmas",
    primerTitulo,
    "Alarmas Argentinas",
  ];
  const random = Math.floor(Math.random() * estados.length);
  document.title = estados[random];
}

var myCarousel = document.querySelector('#mySlider')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000 // Tiempo en milisegundos
})

// Animación de entrada del modal
var tl = gsap.timeline({defaults: {duration: 0.5}});
tl.from('.modal-dialog', {y: '-100%', ease: 'back.out(1.7)'});

// Animación de salida del modal
$('#exampleModal').on('hidden.bs.modal', function () {
  tl.reverse();
});
  
  