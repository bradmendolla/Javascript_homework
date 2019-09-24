// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var new_row = tbody.append("tr")
// YOUR CODE HERE!
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var new_row = tbody.append("tr")
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = new_row.append("td");
            cell.text(value);
        });
});