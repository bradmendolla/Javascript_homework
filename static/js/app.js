// from data.js
var tableData = data;
var searchData = [];
var tbody = d3.select("tbody");
var new_row = tbody.append("tr")
// YOUR CODE HERE!
console.log(tableData)
tableData.forEach(function(ufoReport) {
    var new_row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = new_row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");


button.on("click", function() {
    var inputField = d3.select('#datetime');
    var inputValue = inputField.property("value");
    console.log(inputValue)
    var searchData = tableData.filter(sighting=> sighting.datetime === inputValue);
    tbody.text("")
    
    console.log(searchData);
        searchData.forEach(function(search) {
            var new_row = tbody.append("tr");
            Object.entries(search).forEach(([key, value]) => {
                var cell = new_row.append("td");
                cell.text(value);
            });
    });
        
            
});