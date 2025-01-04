const carousel = document.querySelector('.carousel-content');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Atualiza a posição do carrossel
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Evento para o botão "Avançar"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Avança para o próximo item
    updateCarousel();
});

// Evento para o botão "Retroceder"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Retrocede para o item anterior
    updateCarousel();
});
