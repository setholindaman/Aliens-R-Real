// from data.js
var sightings = data;
// console.log(sightings);

var tbody = d3.select("tbody");

function populateTable(data) {

  tbody.html("");

  data.forEach((sighting) => {
    var row = tbody.append("tr");

    Object.entries(sighting).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}


function handleClick() {

  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}


// Keep Track of all filters
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}



// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
populateTable(sightings);

