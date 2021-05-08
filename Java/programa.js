const fila = document.querySelector('.carrusel__videojuegos');
const videojuego = document.querySelector('.videojuego');

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

/* programa para mover carrusel*/

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth; });



