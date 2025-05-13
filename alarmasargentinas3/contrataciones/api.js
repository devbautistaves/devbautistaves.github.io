const select = document.getElementById('provincia');
const provincias = ['Buenos Aires', 'Capital Federal', 'Santa Fe', 'Córdoba', "Mendoza"];

provincias.forEach(provincia => {
  const option = document.createElement('option');
  option.text = provincia;
  select.add(option);
});

