let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let jsonObj = JSON.parse(this.responseText);

        jsonData = jsonObj;

        // Adding property details on the main page
        document.getElementById('name').append(jsonObj.properies.name);
        document.getElementById('address').append(jsonObj.properies.address);
        document.getElementById('propertyType').append(jsonObj.properies.propertyType[1]);
        document.getElementById('totalBuildingArea').append(jsonObj.properies.totalBuildingArea);
        document.getElementById('tenancy').append(jsonObj.properies.tenancy);
        document.getElementById('noOfTenant').append(jsonObj.properies.noOfTenant);
        document.getElementById('website').append(jsonObj.properies.website);
        document.getElementById('propertyClass').append(jsonObj.properies.propertyClass[1]);
        document.getElementById('yearBuilt').append(jsonObj.properies.yearBuilt);
        document.getElementById('floors').append(jsonObj.properies.floors);
        document.getElementById('description').append(jsonObj.properies.description);

        // Adding Availabilities on the main page
        let tableNameNumber = document.getElementById('table');
        for (let i = 1; i < tableNameNumber.rows.length; i++) {
            let row = tableNameNumber.rows[i];
            row.cells[0].append(jsonObj.properies.availability.unitNameNumber[i - 1]);
        }

        let row = tableNameNumber.rows[1];
        row.cells[1].append(jsonObj.properies.availability.recordType[0]);
        row = tableNameNumber.rows[2];
        row.cells[1].append(jsonObj.properies.availability.recordType[1]);
        row = tableNameNumber.rows[3];
        row.cells[1].append(jsonObj.properies.availability.recordType[1]);
        row = tableNameNumber.rows[4];
        row.cells[1].append(jsonObj.properies.availability.recordType[1]);

        for (let i = 1; i < tableNameNumber.rows.length; i++) {
            let row = tableNameNumber.rows[i];
            row.cells[2].append(jsonObj.properies.availability.availableArea);
        }
    }
};
xmlhttp.open('GET', 'properties.json', true);
xmlhttp.send();

let jsonData = '';
