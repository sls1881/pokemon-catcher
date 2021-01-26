//Import functions
import { findById } from './utils.js';
import pokemon from './poke-data.js';
//Magic string
const POKESTATS = 'POKESTATS';
const resetPokemon = [];

////Get poke stats function should check local storage for stats and return stats or an empty array
export function getPokeStats() {
    //Store the parsed cart
    let pStats = JSON.parse(localStorage.getItem(POKESTATS));

    //If they don't have stats in localStorage, set the new stats (initialize it)
    if (!pStats) {
        pStats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(pStats));
    }
    return pStats;
}

//Set poke stats function should set the stats as a string to save to local storage
export function setPokeStats(newStat) {

    localStorage.setItem(POKESTATS, JSON.stringify(newStat));
}

////Increment seen function should increment if the pokemon has been seen or add a new object
export function incrementSeen(id) {
    const stats = getPokeStats();

    //find by id function
    const poke = findById(id, stats);

    //If find by ID does not find a match, initialize a new object
    if (!poke) {
        const dataPoke = findById(id, pokemon);

        const newStat = {
            name: dataPoke.pokebase,
            id: id,
            seen: 1,
            caught: 0,
        };
        stats.push(newStat);

        //Else increment
    } else {
        poke.seen++;
    }

    setPokeStats(stats);
}

////Increment catches function when the pokemon is caught(clicked on)
export function incrementCaught(id) {

    const stats = getPokeStats();

    //find by ID function
    const poke = findById(id, stats);

    poke.caught++;

    setPokeStats(stats);

}

////Clear cart reset button
export function clearStorage() {
    //Stringify the cart
    const clearStorageString = JSON.stringify(resetPokemon);

    //Save cart to local storage
    localStorage.setItem(POKESTATS, clearStorageString);
}
