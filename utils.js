//Import data
import pokemon from './poke-data.js';
import { incrementCaught, incrementSeen } from './local-storage-utils.js';

//State for number of turns
let numberOfTurns = 0;

////Get Random Poke function should generate three new pokemon each round
export function getRandomPoke() {
    const pokeMath = Math.floor(Math.random() * pokemon.length);

    return pokemon[pokeMath];
}

////Find by ID function
export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

////Render pokemon image function
export function renderPokeImage(pokeItem) {

    //Declare images to render new pokemon and source
    const image = document.createElement('img');

    image.src = pokeItem.url_image;

    image.classList.add('poke-img');

    //Add event listener
    image.addEventListener('click', () => {
        incrementCaught(pokeItem.id);

        if (numberOfTurns <= 10) {
            getThreePoke();

        } else {
            window.location = 'results';
        }
    });
    return image;
}


////Get three pokemon function
export function getThreePoke() {
    //increment turns
    numberOfTurns++;

    //store three pokemon, three images
    let pokeOne = getRandomPoke();
    let pokeTwo = getRandomPoke();
    let pokeThree = getRandomPoke();


    //while loop
    while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {

        pokeOne = getRandomPoke();
        pokeTwo = getRandomPoke();
        pokeThree = getRandomPoke();
    }

    const image1 = renderPokeImage(pokeOne);
    const image2 = renderPokeImage(pokeTwo);
    const image3 = renderPokeImage(pokeThree);

    incrementSeen(pokeOne.id);
    incrementSeen(pokeTwo.id);
    incrementSeen(pokeThree.id);

    //Store, append, and set textContent to null for div
    const div = document.getElementById('pokemon');
    div.textContent = '';
    div.append(image1, image2, image3);

}



