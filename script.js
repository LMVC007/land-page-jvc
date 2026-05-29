
lucide.createIcons();

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
            { src: './assets/dinamico-1.jpeg', alt: 'Minha Nova Foto do Cavaquinho' },
            { src: './assets/dinamico-3.jpeg', alt: 'Minha Nova Foto do Cavaquinho' },
            { src: './assets/dinamico-4.jpeg', alt: 'Minha Nova Foto do Cavaquinho' },
            { src: './assets/dinamico-2.jpeg', alt: 'Minha Nova Foto do Cavaquinho' },
            { src: './assets/teste.jpeg', alt: 'Minha Nova Foto do Cavaquinho' },
            { src: './assets/cabeca.jpeg', alt: 'Minha Nova Foto do Cavaquinho' },
            { src: './assets/diversos-1.jpeg', alt: 'Minha Nova Foto do Cavaquinho' },
            { src: './assets/diversos-2.jpeg', alt: 'Minha Nova Foto do Cavaquinho' }

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
    <img src="${img.src}" alt="${img.alt}" class="w-full h-[auto] object-cover rounded-lg">
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

