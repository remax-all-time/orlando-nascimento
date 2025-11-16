# Linktree - Orlando Nascimento

Um projeto de página de links pessoal moderna e responsiva, desenvolvida com HTML, CSS e JavaScript puro.

## 🎨 Design

- **Cores principais**: Branco, Azul (#0066cc) e Vermelho (#e31837)
- **Estilo**: Minimalista, moderno e atual
- **Responsividade**: Totalmente adaptável para dispositivos móveis

## 📁 Estrutura do Projeto

```
linktree-project/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos principais
│   ├── js/
│   │   └── script.js       # Funcionalidades JavaScript
│   └── images/
│       ├── user-photo.jpg  # Foto do usuário (adicionar)
│       └── company-bg.jpg  # Imagem de fundo da empresa (adicionar)
└── README.md               # Documentação
```

## 🚀 Funcionalidades

- **Perfil do usuário**: Foto, nome e descrição personalizáveis
- **Links de contato**: WhatsApp, E-mail e Website
- **Design responsivo**: Adaptável para todos os dispositivos
- **Animações suaves**: Transições e efeitos visuais modernos
- **Localização**: Footer com informações da empresa

## 📱 Responsividade

- **Desktop**: Layout otimizado para telas grandes
- **Tablet**: Adaptação para telas médias
- **Mobile**: Interface otimizada para smartphones

## ⚙️ Configuração

### 1. Adicionar Imagens

Coloque as seguintes imagens na pasta `assets/images/`:
- `user-photo.jpg`: Foto do usuário (recomendado: 400x400px)
- `company-bg.jpg`: Imagem de fundo da empresa (recomendado: 1920x1080px)

### 2. Personalizar Informações

Edite o arquivo `assets/js/script.js` e modifique o objeto `userConfig`:

```javascript
const userConfig = {
    name: 'Seu Nome',
    description: 'Sua descrição profissional',
    phone: '+5511999999999', // Formato: +55 + DDD + número
    email: 'seu@email.com',
    website: 'https://seusite.com.br',
    location: 'Sua Cidade, Estado - País'
};
```

### 3. Personalizar Links

No arquivo `index.html`, você pode modificar os links dos botões:
- **WhatsApp**: Configurado automaticamente via JavaScript
- **E-mail**: Modifique o `href="mailto:seu@email.com"`
- **Website**: Modifique o `href="https://seusite.com"`

## 🎯 Recursos Técnicos

- **HTML5 Semântico**: Estrutura acessível e bem organizada
- **CSS3 Moderno**: Flexbox, Grid, Custom Properties e animações
- **JavaScript ES6+**: Funcionalidades interativas e configurações dinâmicas
- **Performance**: Lazy loading de imagens e otimizações
- **SEO Friendly**: Meta tags e estrutura semântica

## 🌟 Características do Design

- **Glassmorphism**: Efeitos de vidro com backdrop-filter
- **Micro-interações**: Hover effects e animações suaves
- **Tipografia**: Google Fonts (Inter) para melhor legibilidade
- **Iconografia**: SVG icons otimizados
- **Gradientes**: Uso sutil de gradientes nas cores da marca

## 📋 Como Usar

1. Faça o download ou clone o projeto
2. Adicione suas imagens na pasta `assets/images/`
3. Configure suas informações no arquivo `script.js`
4. Abra o `index.html` em um navegador
5. Publique em seu servidor web favorito

## 🔧 Customização Avançada

### Cores
Modifique as variáveis CSS no arquivo `style.css`:
```css
:root {
    --primary-blue: #0066cc;
    --primary-red: #e31837;
    --white: #ffffff;
}
```

### Animações
Ajuste as animações modificando as propriedades de `transition` e `animation`.

### Layout
O layout é baseado em Flexbox e pode ser facilmente modificado para diferentes necessidades.

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Android Chrome 60+

## 🚀 Deploy no GitHub Pages

### Passos para colocar online:

1. **Criar repositório no GitHub**:
   - Acesse [github.com](https://github.com)
   - Clique em "New repository"
   - Nome: `orlando-nascimento` ou `linktree-orlando`
   - Marque como "Public"
   - Clique em "Create repository"

2. **Fazer upload dos arquivos**:
   - Faça upload de todos os arquivos do projeto
   - Ou use Git commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
   git push -u origin main
   ```

3. **Ativar GitHub Pages**:
   - Vá em "Settings" do repositório
   - Role até "Pages"
   - Em "Source" selecione "Deploy from a branch"
   - Escolha "main" branch e "/ (root)"
   - Clique em "Save"

4. **Acessar o site**:
   - URL será: `https://SEU_USUARIO.github.io/NOME_DO_REPO`
   - Aguarde alguns minutos para o deploy

### 📝 Customização pós-deploy:

- **Domínio personalizado**: Edite o arquivo `CNAME`
- **Imagens**: Substitua as imagens na pasta `assets/images/`
- **Informações**: Edite o `index.html` conforme necessário

## 📄 Licença

Este projeto é de uso livre para fins pessoais e comerciais.

---

Desenvolvido com ❤️ para Orlando Nascimento - RE/MAX