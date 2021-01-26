import { incrementCaught, incrementSeen } from "../local-storage-utils.js";

// export function renderResults(seen, caught) {



// // const resetButton = document.createElement('reset-button');
// // const caught = document.createElement('caught');
// // const seen = document.createElement('seen');

// // const caughtResult = incrementCaught();
// // console.log(caughtResult);

// // caught.textContent = `You caught ${}`;
// // seen.textContent = `You saw this ${}`;

// //Get the data from local storage

//Event listener to reset the button
resetButton.addEventListener('click', () => {
    caught.textContent = '';
    seen.textContent = '';
    clearStorage();
    window.location = '../index.html';
});