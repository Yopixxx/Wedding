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
    heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dab9b3" viewBox="0 0 16 16">
<path d="M8 2.748-.717-.737C5.6-.387 4.412.28 3.053 1.392 1.165 2.94.7 5.314 2.25 7.232L8 13l5.75-5.768c1.55-1.918 1.085-4.292-.803-5.84C11.588.28 10.4-.387 8.717 1.07L8 2.748z"/>
</svg>`;

    // Posicionar el corazón donde está el segundero
    heart.style.left = rect.left + window.scrollX + rect.width / 2 + 'px';
    heart.style.top = rect.top + window.scrollY + rect.height / 2 + 'px';

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
