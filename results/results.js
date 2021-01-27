import { clearStorage, getPokeStats } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import { renderResults } from './render-results.js';
import { makeLabelArray, makeSeenArray, makeCaughtArray } from './mungeUtils.js';

const tbody = document.querySelector('tbody');

const dynamicStats = getPokeStats();

const resetButton = document.getElementById('reset-button');

for (let item of dynamicStats) {
    const poke = findById(item.id, dynamicStats);
    const dom = renderResults(poke);

    tbody.append(dom);

}

const pokeStats = getPokeStats();

var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontColor = 'black'; //eslint-disable-line
Chart.defaults.global.defaultFontFamily = 'Titillium Web', 'sans-serif;'; //eslint-disable-line

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'horizontalBar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [
            {
                label: 'Number of times seen',
                data: makeSeenArray(pokeStats),
                backgroundColor: 'rgb(229, 221, 143)',
                borderColor: 'lightgray',
                fontColor: 'black',
                borderWidth: 1
            },
            {
                label: 'Number of times caught',
                data: makeCaughtArray(pokeStats), // DATA ARRAY GOES HERE
                backgroundColor: 'rgb(235, 170, 109)',
                borderColor: 'lightgray',
                fontColor: 'black',
                borderWidth: 1
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            // create x axis with step size 1 to show integers instead of ugly decimals
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});

//Event listener to reset the button
resetButton.addEventListener('click', () => {
    clearStorage();
    window.location = '../';
});

