// Inicializa os ícones do Lucide Pack
lucide.createIcons();
    
// Banco de dados local para alimentar as modais dinamicamente
const catalogData = {
  violao: {
    name: 'Violão',
    images: [
      { src: 'https://images.pexels.com/photos/10315092/pexels-photo-10315092.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Violão' },
      { src: 'https://images.pexels.com/photos/34156008/pexels-photo-34156008.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Detalhe Violão' }
    ]
  },
  cavaquinho: {
    name: 'Cavaquinho',
    images: [
      { src: 'https://images.pexels.com/photos/13025804/pexels-photo-13025804.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cavaquinho' },
      { src: 'https://images.pexels.com/photos/34215022/pexels-photo-34215022.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Detalhe Cavaquinho' }
    ]
  },
  viola: {
    name: 'Viola',
    images: [
      { src: 'https://images.pexels.com/photos/13364646/pexels-photo-13364646.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Viola' },
      { src: 'https://images.pexels.com/photos/10428450/pexels-photo-10428450.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Detalhe Viola' }
    ]
  },
  violino: {
    name: 'Violino',
    images: [
      { src: 'https://images.pexels.com/photos/36881008/pexels-photo-36881008.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Violino' },
      { src: 'https://images.pexels.com/photos/34613832/pexels-photo-34613832.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Detalhe Violino' }
    ]
  }
};
    
// Seleção de Elementos do DOM
const modal = document.getElementById('catalog-modal');
const closeBtn = document.getElementById('catalog-close');
const catalogTitle = document.getElementById('catalog-title');
const catalogContent = document.getElementById('catalog-content');
    
// Adiciona evento de clique para cada card de instrumento
document.querySelectorAll('[data-instrument]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const instrument = btn.dataset.instrument;
    const data = catalogData[instrument];
    
    if (data) {
      catalogTitle.textContent = data.name;
      // Injeta as imagens correspondentes no container da modal
      catalogContent.innerHTML = data.images.map(img => `
        <div class="rounded-lg overflow-hidden">
          <img src="${img.src}" alt="${img.alt}" class="w-full h-96 object-cover rounded-lg">
        </div>
      `).join('');
      
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Trava o scroll da página de fundo
    }
  });
});
    
// Fechar modal no botão X
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
});
    
// Fechar modal clicando na área escura de fora
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}); 
 
 