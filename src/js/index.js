// OBJETIVO 1: quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
// Passo 1: pegar o personagem no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

//Passo 2: Adicionar a classe selecionada no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Passo 3: Verificar se já existe personagem selecionado. Se sim, devemos remover a sua seleção.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        // Passo 1: Pegar o elemento
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Passo 2: Alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;

        // Passo 3: Alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 4: Alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})