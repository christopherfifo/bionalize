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