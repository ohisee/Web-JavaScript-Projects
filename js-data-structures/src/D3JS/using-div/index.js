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

  const container = d3.select(".main")
    .classed("container", true);

  container.selectAll('.bar')
    .data(INPUT_DATA)
    .enter()
    .append("div")
    .classed("bar", true)
    .style("width", "50px")
    .style("height", dta => `${dta.value * 10}px`);

  // another way of using div elements to produce bars 
  const barsContainer = d3.select(".second")
    .classed("second-container", true);

  const bars = barsContainer.selectAll(".bars")
    .data(INPUT_DATA)
    .enter()
    .append("div")
    .classed("bars", true);

  // upper
  bars.append("div")
    .style("width", "50px")
    .style("height", dta => `${dta.value}px`)
    .classed("upper", true);

  // lower
  bars.append("div")
    .style("width", "50px")
    .style("height", dta => `${height - dta.value}px`)
    .classed("lower", true);
})();
