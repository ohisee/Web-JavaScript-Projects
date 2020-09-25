/**
 * @fileoverview using d3.js
 */

(function () {

  const height = 320;
  const INPUT_DATA = [
    { id: "d1", value: 20, region: "Walker" },
    { id: "d2", value: 29, region: "Talker" },
    { id: "d3", value: 18, region: "Runner" },
    { id: "d4", value: 22, region: "Driver" },
    { id: "d5", value: 16, region: "Trader" },
  ];

  // function to compute range from 0 to 320 px in width of a bar (band) 
  const xScale = d3.scaleBand()
    .domain(INPUT_DATA.map(dataPoint => dataPoint.region))
    .rangeRound([0, 320])
    .padding(0.1);

  // function to compute height, domain accepts min and max, 
  // range from max to zero because it starts from top left corner 
  const yScale = d3.scaleLinear().domain([0, 30]).range([320, 0]);

  const container = d3.select("svg")
    .classed("container", true);

  const bars = container
    .selectAll('.bar') // must select all elements so that d3 has elements to work with 
    .data(INPUT_DATA)
    .enter() // for each missing element, append rect to each missing elements 
    .append("rect")
    .classed("bar", true)
    .attr("width", xScale.bandwidth())
    .attr("height", dta => height - yScale(dta.value))
    .attr("x", dta => xScale(dta.region))
    .attr("y", dta => yScale(dta.value));

  setTimeout(() => {
    // exit is opposite of enter, find elements are not in the updated bars div container 
    bars.data(INPUT_DATA.slice(0, 2))
      .exit()
      .transition()
      .duration(1600)
      .style("opacity", "0")
      .remove();
  }, 2000);
})();
