// Função para a rolagem suave
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  });
}

// Quando a página for carregada, verifica se há um hash na URL
window.addEventListener('load', function () {
  const hash = window.location.hash;
  if (hash) {
      smoothScroll(hash); // Rola suavemente até o destino
  }
});

// Adiciona a rolagem suave aos links com href começando com '#'
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link
      const target = link.getAttribute('href'); // Pega o ID da seção
      smoothScroll(target); // Chama a função de rolagem suave
  });
});
