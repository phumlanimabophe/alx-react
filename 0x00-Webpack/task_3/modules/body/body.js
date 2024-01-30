// Import jQuery thanks to Babel
import $ from 'jquery';

// Import lodash library
import _ from 'lodash';

// Import styles for the body
import './body.css';

// Append elements to the body
$('body').append(`<p>Dashboard data for the students</p>`);
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id="count"></p>`);

// Bind lodash's debounce to the button click event
$('button').on('click', _.debounce(updateCounter, 500));

// Initialize a counter variable
let count = 0;

// Function to update the counter
function updateCounter() {
    count++;
    // Update the text content of the element with the id 'count'
    $('#count').text(`${count} clicks on the button`);
}
