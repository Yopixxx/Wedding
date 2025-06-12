// countdown.js
document.addEventListener("DOMContentLoaded", function () {
  const countdown = document.getElementById('countdown');
  const weddingDate = new Date('2025-07-19T18:00:00'); // Cambiado a 6:00 pm

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) {
      countdown.innerHTML = "¡Ya es el gran día!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdown.innerHTML = `${days} días ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown(); // Llamada inicial
  setInterval(updateCountdown, 1000); // Actualizar cada segundo
});
