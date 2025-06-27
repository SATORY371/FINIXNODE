document.addEventListener('DOMContentLoaded', () => {
  const imagenes = document.querySelectorAll('.port-item > img'); // Solo imágenes directas de port-item
  const modal = document.getElementById('modal-carrusel');
  const modalImg = document.getElementById('imagenAmpliada');
  const cerrarModal = document.getElementById('cerrarModal');
  const anterior = document.getElementById('anterior');
  const siguiente = document.getElementById('siguiente');

  let indiceActual = 0;
  const rutas = Array.from(imagenes).map(img => img.src); // Solo las imágenes principales

  imagenes.forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = rutas[index];
      indiceActual = index;
    });
  });

  cerrarModal.onclick = () => modal.style.display = 'none';

  anterior.onclick = () => {
    indiceActual = (indiceActual - 1 + rutas.length) % rutas.length;
    modalImg.src = rutas[indiceActual];
  };

  siguiente.onclick = () => {
    indiceActual = (indiceActual + 1) % rutas.length;
    modalImg.src = rutas[indiceActual];
  };

  window.onclick = e => {
    if (e.target === modal) modal.style.display = 'none';
  };
});