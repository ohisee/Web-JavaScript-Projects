/**
 * @fileoverview memory leak
 */

// Global variable
var ga = 1;
var gb = 2;
var gc = 3;

// Event listener
var element = document.getElementById('#button');
element.addEventListener('click', function () {

});
// if more event listener and not removing event listener

// setInterval
setInterval(function () {
  // Reference objects
});
// Unless clear, setInterval will continue running 
