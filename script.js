document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const btn3 = document.getElementById('btn-3');
  const factContainer = document.getElementById('fact-text');

  btn1.addEventListener('click', (e) => {
    e.preventDefault();
    factContainer.innerHTML = 'Arthur foi o craque da partida com uma avaliação de <span class="highlight">8,7.</span>';
  });

  btn2.addEventListener('click', (e) => {
    e.preventDefault();
    factContainer.innerHTML = 'Hector acertou a trave 1 vezes em um total de 4 chutes. <span class="highlight">1/4</span>';
  });
});