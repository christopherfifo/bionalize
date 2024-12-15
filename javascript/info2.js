const container = document.querySelector('.container');

// Função para criar o card dinamicamente
function createCard(animal) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
  
            <input
                type="text"
                class="header-title rato-title"
                placeholder="${animal.nome}"
                readonly
            />
            <div class="card_body">
                <img class="body-img" src="../pictures/${animal.imagem}" alt="${animal.nome}" />
                <p class="body-description">
                    <h1 class="detalhamentos">DETALHAMENTOS</h1>
                    <span class="detalhes">
                        <i class="fa-solid fa-dna nome_cienci"></i> Nome científico: ${animal.nome_cientifico}
                    </span>
                    <span class="detalhes">
                        <i class="fa-solid fa-map-marker-alt mapa"></i> Habitat: ${animal.habitat}
                    </span>
                    <span class="detalhes">
                        <i class="fa-solid fa-skull caveira"></i> Situação: ${animal.estado}
                    </span>
                    <span class="detalhes">
                        <i class="fa-solid fa-utensils alimento"></i> Alimentação: ${animal.alimentação}
                    </span>
                    <span class="detalhes">
                        <i class="fa-solid fa-hourglass-half vida"></i> Expectativa de vida: ${animal.expectativa_vida}
                    </span>
                    <span class="detalhes">
                        <i class="fa-solid fa-venus-mars dimorfismo"></i> Dimorfismo: ${animal.dimorfismo}
                    </span>
                    <span class="detalhes">
                        <i class="fa-solid fa-users populacao"></i> População: ${animal.população}
                    </span>
                </p>
                <p class="body-detalhamentos">${animal.descrição}</p>
            </div>
            <div class="card_footer">
                <button class="btn_footer" id="voltar-btn">Voltar</button>
            </div>

    `;

    return card;
}

// Função para renderizar os dados do LocalStorage
function renderAnimalInfo() {
    // Recuperar os dados do LocalStorage
    const animalData = localStorage.getItem('animalInfo');

    if (!animalData) {
        console.error("Nenhuma informação encontrada no LocalStorage.");
        return;
    }

    const animal = JSON.parse(animalData);
    const card = createCard(animal);
    container.appendChild(card);

    // Adicionar evento ao botão "Voltar"
    const voltarBtn = document.getElementById('voltar-btn');
    voltarBtn.addEventListener('click', () => {
        localStorage.removeItem('animalInfo'); // Apagar a chave do LocalStorage
        window.location.href = 'historico.html'; // Redirecionar para a página inicial
    });
}

// Chamar a função de renderização ao carregar a página
renderAnimalInfo();
