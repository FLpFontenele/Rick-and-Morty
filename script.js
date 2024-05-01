async function searchCharacter(searchInput = '') {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput}`);
    const data = await response.json();
    displayResults(data.results);
}

function displayResults(characters) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        const name = document.createElement('h2');
        name.textContent = character.name;

        const image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;

        const status = document.createElement('p');
        status.textContent = `Status: ${character.status}`;

        const species = document.createElement('p');
        species.textContent = `Species: ${character.species}`;

        const gender = document.createElement('p');
        gender.textContent = `Gender: ${character.gender}`;

        const location = document.createElement('p');
        location.textContent = `Location: ${character.location.name}`;

        characterCard.appendChild(name);
        characterCard.appendChild(image);
        characterCard.appendChild(status);
        characterCard.appendChild(species);
        characterCard.appendChild(gender);
        characterCard.appendChild(location);

        resultsContainer.appendChild(characterCard);
    });
}

// Chamada inicial para carregar todos os personagens na tela principal
searchCharacter();

const searchPortal = document.querySelector('.portal');
searchPortal.addEventListener('click', function(){
    const searchInput = document.getElementById('searchInput').value;
    searchCharacter(searchInput);
})

let input = document.querySelector('.bar');
input.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        const searchInput = document.getElementById('searchInput').value;
        searchCharacter(searchInput);
    }
})

