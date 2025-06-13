document.addEventListener("DOMContentLoaded", function () {
  const countdown = document.getElementById('countdown');
  const weddingDate = new Date('2025-07-19T18:00:00');

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

    countdown.innerHTML = `${days} días ${hours}h ${minutes}m <span class="segundos">${seconds}s</span>`;

    animateHeart();
  }

  function animateHeart() {
    const segundos = document.querySelector('.segundos');
    if (!segundos) return;

    const rect = segundos.getBoundingClientRect();
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    // Posicionar el corazón donde está el segundero
    heart.style.left = rect.left + window.scrollX + rect.width / 2 + 'px';
    heart.style.top = rect.top + window.scrollY + rect.height / 2 + 'px';

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
