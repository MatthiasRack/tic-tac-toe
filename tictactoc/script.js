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

    let table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            const index = i * 3 + j;
            const fieldValue = fields[index];

            if (fieldValue === 'circle') {
                cell.innerHTML = generateCircleSVG();
            } else if (fieldValue === 'cross') {
                cell.innerHTML = generateCrossSVG();
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    contentDiv.appendChild(table);
   
}

function generateCircleSVG() {
    const color = '#00B0EF';
    const width = 70;
    const height = 70;

    return `<svg width="${width}" height="${height}">
              <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="none">
                <animate attributeName="stroke-dasharray" from="0 188.5" to="188.5 0" dur="0.8s" fill="freeze" />
              </circle>
            </svg>`;
}

function generateCrossSVG() {
    const color = '#FFC000';
    const width = 70;
    const height = 70;


    const svgCode = `
    <svg width="${width}" height="${height}">
    <line x1="0" y1="0" x2="${width}" y2="${height}"
      stroke="${color}" stroke-width="5">
      <animate attributeName="x2" values="0; ${width}" dur="300ms" />
      <animate attributeName="y2" values="0; ${height}" dur="300ms" />
    </line>
    <line x1="${width}" y1="0" x2="0" y2="${height}"
      stroke="${color}" stroke-width="5">
      <animate attributeName="x2" values="${width}; 0" dur="300ms" />
      <animate attributeName="y2" values="0; ${height}" dur="300ms" />
    </line>
  </svg>
`;

    return svgCode;
}