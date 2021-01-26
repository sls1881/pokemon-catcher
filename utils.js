//Import data
import pokemon from './poke-data.js';
import { incrementCaught, incrementSeen } from './local-storage-utils.js';

//State for number of turns
let numberOfTurns = 0;

//Create three divs for poke images


////Get Random Poke function should generate three new pokemon each round
export function getRandomPoke() {
    const pokeMath = Math.floor(Math.random * pokemon.length);
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
export function renderPokeImage(pokeItem)

//Declare images to render new pokemon and source

//Add event listener


////Get three pokemon function
export function getThreePoke() {
    //increment turns
    numberOfTurns++;

    //store three pokemon, three images
    let pokeOne = getRandomPoke();
    let pokeTwo = getRandomPoke();
    let pokeThree = getRandomPoke();

    const image1 = renderPokeImage(pokeItem);
    const image2 = renderPokeImage(pokeItem);
    const image3 = renderPokeImage(pokeItem);

    //while loop
    while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree || pokeTwo === pokeThree.id) {

        pokeOne = getRandomPoke();
        pokeTwo = getRandomPoke();
        pokeThree = getRandomPoke();
    }

    incrementSeen(pokeOne.id);
    incrementSeen(pokeTwo.id);
    incrementSeen(pokeThree.id);

    //Store, append, and set textContent to null for div
    const div = document.getElementById('pokemon');
    div.textContent = '';
    div.append('image1, image2, image3');

}



