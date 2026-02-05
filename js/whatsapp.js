// js/whatsapp.js
function comprar(nombre, precio, imagen) {
  const telefono = "51927208885";

  // Construye la URL correcta incluso en GitHub Pages
  const basePath = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
  const imgUrl = basePath + '/' + imagen;

  const mensaje =
    `Hola 👋, estoy interesado en este producto:%0A%0A` +
    `🛍️ ${nombre}%0A` +
    `💰 Precio: S/ ${precio}%0A%0A` +
    `📸 Imagen:%0A${imgUrl}`;

  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, "_blank", "noopener");
}
