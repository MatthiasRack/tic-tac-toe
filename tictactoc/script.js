let fields = [
    'cross',
    'circle',
    null,
    'circle',
    null,
    'cross',
    'cross',
    null,
    'circle',
]

function init() {
    render();
}

function render() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            const index = i * 3 + j;
            const fieldValue = fields[index];

            if (fieldValue === 'circle') {
                cell.textContent = 'o';
            } else if (fieldValue === 'cross') {
                cell.textContent = 'x';
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    contentDiv.appendChild(table);
}

