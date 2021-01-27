// IMPORT MODULES under test here:

import { makeLabelArray, makeSeenArray, makeCaughtArray } from '../results/mungeUtils.js';
import { renderResults } from '../results/render-results.js';

const test = QUnit.test;

test('Get poke stats should check local storage for stats and stringify the result to return the stats or an empty array', (expect) => {

    const pokeStats = {
        name: 'Bulbasaur',
        id: 1,
        seen: 2,
        caught: 2,
    };

    //Arrange
    const expected = `<tr><td class="name-data">Bulbasaur</td><td class="seen-data">2</td><td class="caught-data">2</td></tr>`;

    const actual = renderResults(pokeStats);

    expect.equal(actual.outerHTML, expected);
});

const dataSample = [
    { name: 'metapod', id: 15, seen: 4, caught: 0 },
    { name: 'squirtle', id: 10, seen: 3, caught: 1 },
    { name: 'caterpie', id: 14, seen: 4, caught: 1 },
    { name: 'ivysaur', id: 2, seen: 4, caught: 0 },
    { name: 'pidgey', id: 21, seen: 7, caught: 2 },
    { name: 'bulbasaur', id: 1, seen: 5, caught: 0 },
    { name: 'beedrill', id: 19, seen: 6, caught: 0 }
];

test('The makeLabelArray function should take in dataSample and return an array of names.', (expect) => {

    const expected = ['metapod', 'squirtle', 'caterpie', 'ivysaur', 'pidgey', 'bulbasaur', 'beedrill'];

    const actual = makeLabelArray(dataSample);

    expect.deepEqual(actual, expected);
});

test('The makeSeenArray should take in dataSample and return and array of numbers', (expect) => {

    const expected = [4, 3, 4, 4, 7, 5, 6];

    const actual = makeSeenArray(dataSample);

    expect.deepEqual(actual, expected);
});

test('The makeCaughtArray should take in dataSample and return and array of numbers', (expect) => {

    const expected = [0, 1, 1, 0, 2, 0, 0];

    const actual = makeCaughtArray(dataSample);

    expect.deepEqual(actual, expected);
});