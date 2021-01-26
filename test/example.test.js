// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getPokeStats } from '../local-storage-utils.js';

const test = QUnit.test;

// //getPokeStats function
// test('Get poke stats should check local storage for stats and stringify the result to return the stats or an empty array', (expect) => {
//     //Arrange
//     const testStats = [];
//     // Set up your arguments and expectations
//     const stringyStats = JSON.stringify(testStats);

//     localStorage.setItem('POKESTATS', stringyStats);

//     const stats = getPokeStats();

//     expect.equal(stats, testStats);
// });
