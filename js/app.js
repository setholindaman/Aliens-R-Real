// from data.js
var sightings = data;
// console.log(sightings);

var tbody = d3.select('tbody');
var date = d3.select('#datetime');
var city = d3.select('city');
var state = d3.select('state');
var country = d3.select('country');
var shape = d3.select('shape');
var duration = d3.select('durationMinutes');
var comment = d3.select('comments');


data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



// sightings.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//         console.log(`Key: ${key} and Value ${value}`);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// var row = d3.select("tbody").append("tr").text(value);




//select the submit button
var submit = d3.select('#filter-btn');
submit.on('click', function () {
  //prevent the page from refreshing
  d3.event.preventDefault();

  d3.select('#filtered-results').html();
  //select the input element and get the html node
  var inputElement = d3.select('#datetime');
  //select the value property of the input element
  var inputValue = inputElement.property('value');

  console.log(inputValue);
  
  var filteredData = sightings.filter(sightings => sightings.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      console.log(`Key: ${key} and Value ${value}`);
      var cell = row.append("td");
      cell.text(value);
    });
    // tbody.html('');
  });
});
