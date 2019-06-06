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


data.forEach((sightings) => {
  var row = tbody.append("tr");
  Object.entries(sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
  console.log(data);
});


//select the submit button
var submit = d3.select('.submit');
submit.on('click', function () {
  //prevent the page from refreshing
  d3.event.preventDefault();

  d3.select('.form-control');
  //select the input element and get the html node
  var inputElement = d3.select('#datetime');
  //select the value property of the input element
  var inputValue = inputElement.property('value');

  console.log(inputValue);
  

  var filteredData = data.filter(sightings => {
    return sightings.datetime == inputValue
  });
  console.log(filteredData);

  var filteredSightings = filteredData.map(sightings => {
    return sightings;
  });
  console.log(filteredSightings);
  date.select('tr>td').text(inputValue);
  city.select('tr>td').text(inputValue);
  state.select('tr>td').text(inputValue);
  country.select('tr>td').text(inputValue);
  shape.select('tr>td').text(inputValue);
  duration.select('tr>td').text(inputValue);
  comments.select('tr>td').text(inputValue);

  // tbody.html('');

  filteredData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      console.log(`Key: ${key} and Value ${value}`);
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
