$(function() {
    /* Get the data using GET */
    $.ajax({
        type: 'GET',
        url: 'https://app-academy-neu-codechallenge.azurewebsites.net/api/2d/cut',
        headers: {
            'Authorization': 'Basic bGFudGVrYWNhZGVteTpdWEVhMVJkdlFGaDdd',
            'Accept': 'application/json'
        },
        success: function(data) {
            printMachines(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
});

function printMachines(responseData) {
    $.each(responseData, function(key, item) {
        // console.log(item);

        let tableRow = document.createElement('tr');

        let tableCell = document.createElement('td');
        if (Object.hasOwn(item, 'name')) tableCell.innerText = item.name;
        tableRow.appendChild(tableCell);

        tableCell = document.createElement('td');
        if (Object.hasOwn(item, 'manufacturer')) tableCell.innerText = item.manufacturer;
        tableRow.appendChild(tableCell);

        document.getElementById('table-body').appendChild(tableRow);
    });
}