tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener('mousemove', e => {
      const confeti = document.createElement('div');
      confeti.classList.add('confeti');
      const size = Math.floor(Math.random() * 30 + 10) + 'px';
      confeti.style.width = size;
      confeti.style.height = size;
      confeti.style.left = e.offsetX + 'px';
      confeti.style.top = e.offsetY + 'px';
      tarjeta.appendChild(confeti);
      setTimeout(() => {
          confeti.remove();
      }, 2000);
  });


});
