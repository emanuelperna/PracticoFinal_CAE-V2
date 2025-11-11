//Función para mostrar patrocinadores
function mostrarPatrocinadores() {
  const patrocinadoresHTML = `
    <div class="col-md-3 card p-3">
      <img src="assets/patrocinador1.jpeg" alt="Patrocinador 1" class="img-fluid rounded">
    </div>
    <div class="col-md-3 card p-3">
      <img src="assets/patrocinador2.jpeg" alt="Patrocinador 2" class="img-fluid rounded">
    </div>
    <div class="col-md-3 card p-3">
      <img src="assets/patrocinador3.jpeg" alt="Patrocinador 3" class="img-fluid rounded">
    </div>
    <div class="col-md-3 card p-3">
      <img src="assets/patrocinador4.jpeg" alt="Patrocinador 4" class="img-fluid rounded">
    </div>
    <div class="col-md-3 card p-3">
      <img src="assets/patrocinador5.jpeg" alt="Patrocinador 5" class="img-fluid rounded">
    </div>
  `;

  const patrocinadoresContainer = document.getElementById('patrocinadores-container');
  if (!patrocinadoresContainer) return;

  patrocinadoresContainer.innerHTML = patrocinadoresHTML;
}