// Fetch the summary data from the json file.
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => addSummaryItem(item));
    })
    .catch((error) => {
        console.log('Failed to fetch the json data.')
    });


/**
 * Adds a item to the summary column .
 * 
 * @param {Object} item Details for the item to add to the list.
 */
const addSummaryItem = (item) => {
    const { category, score, icon } = item;

    const row = document.createElement('div');
    row.classList.add('row');

    const titleSpan = document.createElement('span');
    titleSpan.innerHTML = category;
    titleSpan.classList.add('row-title');

    const scoreSpan = document.createElement('span');
    scoreSpan.innerHTML = `<span>${score}</span> / 100`;
    scoreSpan.classList.add('score');

    row.appendChild(titleSpan);
    row.appendChild(scoreSpan);

    const summaryContainer = document.querySelector('.summary .col');
    summaryContainer.appendChild(row);
}