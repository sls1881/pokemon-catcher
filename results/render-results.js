export function renderResults(pokeStorage) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = pokeStorage.name;
    tdName.classList.add('name-data');
    tr.append(tdName);

    const tdSeen = document.createElement('td');
    tdSeen.textContent = pokeStorage.seen;
    tdSeen.classList.add('seen-data');
    tr.append(tdSeen);

    const tdCaught = document.createElement('td');
    tdCaught.textContent = pokeStorage.caught;
    tdCaught.classList.add('caught-data');
    tr.append(tdCaught);

    return tr;

}