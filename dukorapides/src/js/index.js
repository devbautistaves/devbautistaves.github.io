let primerTitulo = document.title;



window.addEventListener("focus", () => {
  setInterval(titulo, 5000);
});

function titulo() {
  const estados = [
    "Duko",
    "Insano",
    "Mis redes",
    "𝐋𝐞𝐠𝐞𝐧𝐝𝐬",
    primerTitulo,
  ];
  const random = Math.floor(Math.random() * estados.length);
  document.title = estados[random];
}

window.addEventListener('load', function () {
    document.querySelector('.pre-loader').className += ' hidden';
});

var vido = document.getElementById("video")


vido.autoplay = true;
vido.load();

