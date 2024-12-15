const container = document.querySelector('.container');
let usuarios = [];

async function fetchData() {
    try {
        const usuariosResponse = await fetch('../json/usuarios.json');

        if (!usuariosResponse.ok) {
            throw new Error('Network response was not ok');
        }

        usuarios = await usuariosResponse.json();

        console.log('Usuarios:', usuarios);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();

function createCard(usuario) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card_header">
            <img class="perfil-img" src="../pictures/${usuario.foto_perfil}" alt=""/>
            <h2 class="card-name">${usuario.nome}</h2>
            <p class="card_data">${usuario.data}</p>
        </div>
        <div class="card_body">
            <p class="body-description">${usuario.apresentacao}</p>
            <img class="body-img" src="../pictures/${usuario.foto}" alt=""/>
        </div>
        <div class="card_footer">
            <button class="btn_interacao"><i class="fa-solid fa-comment"></i><p>Comentar</p></button>
            <button class="btn_interacao"><i class="fa-solid fa-share"></i><p>Compartilhar</p></button>
        </div>
    `;

    return card;
}

function renderCards() {
    usuarios.forEach(usuario => {
        const card = createCard(usuario);
        container.appendChild(card);
    });
}

fetchData().then(renderCards);