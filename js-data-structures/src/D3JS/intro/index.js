/**
 * @fileoverview using d3.js
 */

(function () {

  const INPUT_DATA = [
    { id: "d1", value: 20, region: "Walker" },
    { id: "d2", value: 29, region: "Talker" },
    { id: "d3", value: 18, region: "Runner" },
    { id: "d4", value: 22, region: "Driver" },
    { id: "d5", value: 16, region: "Trader" },
  ];

  d3.select("div")    // select div
    .selectAll("p")   // select all p elements inside div, so that d3 has elements to work with 
    .data(INPUT_DATA) // some data
    .enter()          // for each missing p element
    .append("p")      // append a p element
    .text(dta => `${dta.region} ${dta.value}`); // enter some text into p element

})();
