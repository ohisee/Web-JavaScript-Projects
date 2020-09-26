/**
 * @fileoverview D3 js chart 
 */
// import d3 from "d3";
(function () {

  const INPUT_DATA = [
    { id: "d1", value: 20, region: "Walker" },
    { id: "d2", value: 29, region: "Talker" },
    { id: "d3", value: 18, region: "Runner" },
    { id: "d4", value: 22, region: "Driver" },
    { id: "d5", value: 16, region: "Trader" },
    { id: "d6", value: 10, region: "Watcher" },
  ];

  let selectedData = INPUT_DATA;

  const MARGIN = { top: 50, bottom: 20, left: 20, right: 20 };
  const CHART_WIDTH = 600 - MARGIN.left;
  const CHART_HEIGHT = 500 - MARGIN.top - MARGIN.bottom;

  const BAR_HEIGHT = CHART_HEIGHT / 2;
  const xScale = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
  const yScale = d3.scaleLinear().range([BAR_HEIGHT, 0]);

  xScale.domain(INPUT_DATA.map(d => d.region));
  yScale.domain([0, d3.max(INPUT_DATA, d => d.value) + 3]); // extra space 10 

  const line = d3.line()
    .x(data => xScale(data.region) + (xScale.bandwidth() / 2))
    .y(data => yScale(data.value) - 50)
    .curve(d3.curveMonotoneX);

  const area = d3.area()
    .x(data => xScale(data.region) + (xScale.bandwidth() / 2))
    .y0(data => yScale(data.value) - 20)
    .y1(data => yScale(data.value) - 80)
    .curve(d3.curveMonotoneX);

  const chartContainer = d3.select("#root #chart svg")
    // add the left margin back to chart width  
    .attr("width", CHART_WIDTH + MARGIN.left)
    // add the top and bottom margins back to chart height 
    .attr("height", CHART_HEIGHT + MARGIN.top + MARGIN.bottom);

  // group
  const chart = chartContainer.append('g')
    // shift the chart to start at left margin 
    .attr("transform", `translate(${MARGIN.left}, ${BAR_HEIGHT})`);

  // x -axis 
  // axix bottom means the labels are below the axis 
  // axix top means the labels are above the axis  
  chart.append("g")
    .call(d3.axisBottom(xScale).tickSizeOuter(0))
    .attr("transform", `translate(0, ${BAR_HEIGHT})`)
    .attr("color", "#7e29d3");

  // y - axis 
  chart.append("g")
    .call(d3.axisLeft(yScale))
    .attr("color", "#7e29d3");

  // a curve line using path 
  chart.append("path")
    .datum(INPUT_DATA)
    .classed("pathline", true)
    .attr("d", line);

  // a band area using path 
  chart.append("path")
    .datum(INPUT_DATA)
    .classed("patharea", true)
    .attr("d", area);

  // another extended line 
  // const start = [
  //   { value: 0, region: "r1" },
  // ];

  // start.push(...INPUT_DATA);
  // start.push({ value: 9, region: "r2" });

  // const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
  // const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

  // x.domain(start.map(d => d.region));
  // y.domain([0, d3.max(start, d => d.value)]);

  // chart.append("path")
  //   .datum(start)
  //   .classed("longpathline", true)
  //   .attr("d",
  //     d3.line()
  //       .x(data => x(data.region))
  //       .y(data => y(data.value))
  //       .curve(d3.curveMonotoneX)
  //   );

  function renderChart(chart, selectedData) {
    // bars
    chart.selectAll(".bar")
      // use key function to identify data instead of using index 
      .data(selectedData, data => data.id)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("width", xScale.bandwidth())
      // chart height minus y 
      .attr("height", data => BAR_HEIGHT - yScale(data.value))
      // position x
      .attr("x", data => xScale(data.region))
      // position y
      .attr("y", data => yScale(data.value));

    // remove bars
    chart.selectAll(".bar")
      // use key function to identify data instead of using index 
      .data(selectedData, data => data.id)
      .exit()
      .transition()
      .duration(1000)
      .style("opacity", "0")
      .remove();

    // labels
    chart.selectAll("label")
      // use key function to identify data instead of using index 
      .data(selectedData, data => data.id)
      .enter()
      // svg element 
      .append("text")
      .text(data => data.value)
      // position x 
      .attr("x", data => xScale(data.region) + xScale.bandwidth() / 2)
      // position y 
      .attr("y", data => yScale(data.value) - 20)
      .attr("text-anchor", "middle")
      .classed("label", true);

    // remove labels
    chart.selectAll(".label")
      // use key function to identify data instead of using index 
      .data(selectedData, data => data.id)
      .exit()
      .transition()
      .duration(1000)
      .style("opacity", "0")
      .remove();
  }

  // initial display 
  renderChart(chart, selectedData);

  let unselectedIds = [];

  const listItems = d3.select("#data")
    .select("ul")
    .selectAll("li")
    .data(INPUT_DATA)
    .enter()
    .append("li");

  listItems.append("span")
    .text(data => data.region);

  listItems.append("input")
    .attr("type", "checkbox")
    .attr("checked", true)
    // add event listener 
    // 2nd function's first parameter is the HTML input element 
    // 2nd function's second parameter is the data point 
    .on("change", (_, data) => {
      if (unselectedIds.indexOf(data.id) === -1) {
        unselectedIds.push(data.id);
      } else {
        unselectedIds = unselectedIds.filter(id => id !== data.id);
      }
      selectedData = INPUT_DATA.filter(
        (d) => unselectedIds.indexOf(d.id) === -1
      );
      renderChart(chart, selectedData);
    });

})();
