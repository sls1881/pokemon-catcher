// IMPORT MODULES under test here:

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
