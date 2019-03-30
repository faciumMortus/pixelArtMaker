// create the function to make a grid
function makeGrid() {
    // create body reference
    const body = document.getElementsByTagName("body")[0];
    // create elements <table> and a <tableBody>
    const table = document.getElementById('pixelCanvas');
    const tableBody = document.createElement("tbody");
    // select size input
    const heightInput = document.getElementById("inputHeight").value;
    const widthInput = document.getElementById("inputWidth").value;
    // reset table when new grid is created
    table.innerHTML = '';
    // create cells
    for (let r = 1; r <= heightInput; r++) {
      // create table rows
      const row = document.createElement("tr");
      for (let w = 0; w < widthInput; w++) {
        // create table columns (colum + row = cell)
        const column = document.createElement("td");
        row.appendChild(column);
        // detect a click on a cell
        column.addEventListener('click', function(event) {
            // select color input
            let colorInput = document.getElementById('colorPicker').value;
            // apply color to the background of the clicked cell
            event.target.style.backgroundColor = colorInput;
        });
      }
        // add rows (<tr>) to the tableBody (<tbody>)
        tableBody.appendChild(row);
    }
    // add the table body (<tbody>) to the table (<table>)
    table.appendChild(tableBody);
    // add the table (<table>) to the body (<body>)
    body.appendChild(table);
  }

// create reference to the submit button
const submitButton = document.getElementsByTagName('input')[2];
// detect a click on the submit button
submitButton.addEventListener('click', function (event) {
    // prevent refreshing the page
    event.preventDefault();
    // create a new grid
    makeGrid();
});
