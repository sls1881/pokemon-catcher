//Import functions
import { findById } from './utils.js';

//Magic string
const POKESTATS = 'POKESTATS';
const resetPokemon = [];

////Get poke stats function should check local storage for stats and return stats or an empty array
export function getPokeStats() {

    let pStats = JSON.parse(localStorage.getItem(POKESTATS));

    //If they don't have stats in localStorage, set the new stats (initialize it)
    if (!pStats) {
        pStats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(pStats));
    }
    return pStats;
}

//Set poke stats function should set the stats as a string to save to local storage
export function setPokeStats(newItem) {

    localStorage.setItem(POKESTATS, JSON.stringify(newItem));
}

////Increment seen function should increment if the pokemon has been seen or add a new object
export function incrementSeen(id) {
    const stats = getPokeStats();

    //find by id function
    const poke = findById(stats, id);

    //If find by ID shows they have been seen, increment
    if (poke) {
        poke.seen++;

        //Else add new object
    } else {
        const newStat = {
            id: id,
            seen: 1,
            caught: 0,
        };
        setPokeStats(stats);
    }
}

////Increment catches function when the pokemon is caught(clicked on)
export function incrementCaught() {

    const stats = getPokeStats();

    //find by ID function
    const poke = findById(stats, id);

}

////Clear cart reset button
export function clearCart() {
    //Stringify the cart
    const clearCartString = JSON.stringify(resetPokemon);

    //Save cart to local storage
    localStorage.setItem(POKESTATS, clearCartString);
}
