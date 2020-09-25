/**
 * @fileoverview D3 js data binding and joining 
 */

(function () {

  const countryData = {
    items: ["Walker", "Talker", "Runner", "Driver", "Trader"],
    addItem(item) {
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    updateItem(index, newItem) {
      this.items[index] = newItem;
    }
  };

  d3.select("ul")
    .selectAll("li") // select all li elements as missing elements 
    // 2nd function is a key function to bind element by a specific key 
    // or else the elements are bound by index 
    .data(countryData.items, data => data) // to be rendered elements
    .enter()      // which elements are missing 
    .append("li") // should append element which are in selectAll
    .text(data => data);

  setTimeout(() => {
    countryData.addItem("Dreamer");
    // D3 will not re-render all elements, 
    // only renders new element (what changed from initial ul)
    d3.select("ul")
      .selectAll("li")
      // 2nd function is a key function to bind element by a specific key 
      // or else the elements are bound by index 
      .data(countryData.items, data => data) // 2nd function returns key to identify element 
      .enter()
      .append("li")
      .classed("added", true)
      .text(data => data);
  }, 2000);

  setTimeout(() => {
    // remove one item 
    countryData.removeItem(0);
    d3.select("ul")
      .selectAll("li")
      // 2nd function is a key function to bind element by a specific key 
      // or else the elements are bound by index 
      .data(countryData.items, data => data) // 2nd function returns key to identify element 
      .exit() // which elements are removed 
      .classed("redundant", true);
  }, 3000);

  setTimeout(() => {
    // update one item 
    countryData.updateItem(1, "Trader");
    d3.select("ul")
      .selectAll("li")
      // 2nd function is a key function to bind element by a specific key 
      // or else the elements are bound by index 
      .data(countryData.items, data => data) // 2nd function returns key to identify element 
      .exit() // which elements are updated  
      .text("Trader") // hard-code text for updated elements 
      .transition().duration(1000).style("background-color", "orange")
      .classed("updated", true); // not really needed 
  }, 5000);

})();
