// Configurações do usuário
const userConfig = {
    name: 'Orlando Nascimento',
    description: 'Consultor Imobiliário - CRECI-AL 9796F',
    phone: '+5582991366223',
    email: 'contato.orlandonascimento@creci.org.br',
    website: 'https://www.remax.com.br/pt-br/corretores/alagoas/maceio-farol/orlando-nascimento/850711044',
    location: 'Imobiliária RE/MAX All Time CRECI/AL 9006-J - Maceió-AL\nFarol, Rua Dr Adalberto Marroquim, 66 A'
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    handleImageErrors();
});

// Função principal de inicialização
function initializeApp() {
    updateUserInfo();
    setupWhatsAppLink();
    addLoadingStates();
}

// Atualiza informações do usuário
function updateUserInfo() {
    const nameElement = document.querySelector('.profile-name');
    const locationElement = document.querySelector('.location p');
    
    if (nameElement) nameElement.textContent = userConfig.name;
    if (locationElement) locationElement.innerHTML = userConfig.location.replace('\n', '<br>');
}

// Configura o link do WhatsApp
function setupWhatsAppLink() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn && userConfig.phone) {
        const message = encodeURIComponent(`Olá, ${userConfig.name}!  Vi seu perfil e gostaria de conversar sobre Imóveis.`);
        whatsappBtn.href = `https://wa.me/${userConfig.phone.replace(/\D/g, '')}?text=${message}`;
    }
}

// Configura event listeners
function setupEventListeners() {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Tracking de cliques nos botões
    document.querySelectorAll('.link-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonType = this.classList.contains('whatsapp') ? 'WhatsApp' : 
                              this.classList.contains('email') ? 'Email' : 'Website';
            
            // Analytics tracking (se necessário)
            console.log(`Clique no botão: ${buttonType}`);
            
            // Feedback visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Gerencia erros de carregamento de imagens
function handleImageErrors() {
    const userPhoto = document.getElementById('userPhoto');
    
    if (userPhoto) {
        userPhoto.addEventListener('error', function() {
            // Fallback para avatar padrão
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjhGOUZBIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDUiIHI9IjIwIiBmaWxsPSIjNkM3NTdEIi8+CjxwYXRoIGQ9Ik0yMCA5NUMyMCA4Mi4yOTc3IDMxLjI5NzcgNzEgNDQgNzFIOTZDMTA4LjcwMyA3MSAxMjAgODIuMjk3NyAxMjAgOTVWMTIwSDIwVjk1WiIgZmlsbD0iIzZDNzU3RCIvPgo8L3N2Zz4K';
            this.alt = 'Avatar padrão';
        });

        // Adiciona loading state
        userPhoto.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
}

// Estados de loading
function addLoadingStates() {
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Adiciona estado de loading apenas para links externos
            if (this.getAttribute('href').startsWith('http')) {
                const originalText = this.innerHTML;
                const icon = this.querySelector('.icon');
                
                // Simula loading por 500ms
                if (icon) {
                    icon.style.animation = 'spin 1s linear infinite';
                }
                
                setTimeout(() => {
                    if (icon) {
                        icon.style.animation = '';
                    }
                }, 500);
            }
        });
    });
}

// Utilitários
const utils = {
    // Formata número de telefone
    formatPhone: (phone) => {
        return phone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    },

    // Valida email
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Detecta dispositivo móvel
    isMobile: () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    // Copia texto para clipboard
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Erro ao copiar texto:', err);
            return false;
        }
    }
};

// Animação de spin para loading
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Modal da foto de perfil
function setupPhotoModal() {
    const profileImageBtn = document.getElementById('profileImageBtn');
    const modal = document.getElementById('photoModal');
    const closeBtn = document.getElementById('closeModal');
    
    if (profileImageBtn && modal && closeBtn) {
        profileImageBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Inicializar modal
document.addEventListener('DOMContentLoaded', function() {
    setupPhotoModal();
});

// Exporta configurações para uso global
window.userConfig = userConfig;
window.utils = utils;