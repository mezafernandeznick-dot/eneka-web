// js/whatsapp.js
function comprar(nombre, precio, imagen) {
  const telefono = "51945061025";

  // URL robusta para imagen (funciona en hosting/localhost/subcarpetas)
  const imgUrl = new URL(imagen, window.location.href).href;

  const mensaje =
    `Hola 👋, estoy interesado en este producto:%0A%0A` +
    `🛍️ *${encodeURIComponent(nombre)}*%0A` +
    `💰 Precio: S/ ${encodeURIComponent(precio)}%0A%0A` +
    `📸 Imagen:%0A${encodeURIComponent(imgUrl)}`;

  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  // noopener para seguridad
  window.open(url, "_blank", "noopener");
}