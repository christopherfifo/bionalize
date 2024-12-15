const container = document.querySelector('.container');
let animais = [];

async function fetchData() {
    try {
        const animaisResponse = await fetch('../json/animais.json');

        if (!animaisResponse.ok) {
            throw new Error('Network response was not ok');
        }

        animais = await animaisResponse.json();

        console.log('Animais:', animais);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();

function createCard(animal) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <form class="form_animais" action="" method="post">
        <div class="card_header">
            <h2 class="card-name">${animal.nome}</h2>
            <i class="fa-regular fa-clock icone_amor"></i>
        </div>
        <div class="card_body">
            <img class="body-img" src="../pictures/${animal.imagem}" alt="${animal.nome}"/>
        </div>
        <div class="invisivel">
            <p><strong>Nome Científico:</strong> ${animal.nome_cientifico}</p>
            <p><strong>Habitat:</strong> ${animal.habitat}</p>
            <p><strong>Alimentação:</strong> ${animal.alimentação}</p>
            <p><strong>População:</strong> ${animal.população}</p>
            <p><strong>Estado:</strong> ${animal.estado}</p>
            <p><strong>Dimorfismo:</strong> ${animal.dimorfismo}</p>
            <p><strong>Tamanho:</strong> ${animal.tamanho}</p>
            <p><strong>Expectativa de Vida:</strong> ${animal.expectativa_vida}</p>
            <p><strong>Descrição:</strong> ${animal.descrição}</p>
        </div>
        <div class="card_footer">
            <button class="btn_login" type="submit">Ver mais</button>
        </div>
    </form>
    `;

    // Adiciona o evento de submit no formulário
    const form = card.querySelector('.form_animais');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Salva as informações do animal no LocalStorage
        localStorage.setItem('animalInfo', JSON.stringify(animal));

        // Redireciona para a página info.html
        window.location.href = 'info2.html';
    });

    return card;
}

function renderCards() {
    animais.forEach(animal => {
        const card = createCard(animal);
        container.appendChild(card);
    });
}

fetchData().then(renderCards);
