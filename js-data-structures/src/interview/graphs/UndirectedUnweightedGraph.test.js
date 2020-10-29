/**
 * @fileoverview JS undirected unweighted graph unit test 
 */
const { Graph } = require("./UndirectedUnweightedGraph");

describe("Undirected unweighted graph", () => {
  test("Graph class should be defined", () => {
    expect(Graph.prototype.constructor).toBeDefined();
  });

  test("Graph class should be able to create instance", () => {
    expect(() => {
      new Graph();
    }).not.toThrow();
  });

  test("should do add vertex", () => {
    /** @type {Graph} */
    const graph = new Graph();
    graph.addVertex("0");
    graph.addVertex("1");
    graph.addVertex("2");
    graph.addVertex("3");
    graph.addVertex("4");
    graph.addVertex("5");
    graph.addVertex("6");
    expect(graph.getAllVertices()).toEqual(["0", "1", "2", "3", "4", "5", "6"]);
  });

  test("should do add edge", () => {
    /** @type {Graph} */
    const graph = new Graph();
    graph.addVertex("0");
    graph.addVertex("1");
    graph.addVertex("2");
    graph.addVertex("3");
    graph.addVertex("4");
    graph.addVertex("5");
    graph.addVertex("6");
    graph.addEdge("0", "2");
    expect(graph.getConnectedVertices("0")).toEqual(["2"]);
    expect(graph.getConnectedVertices("2")).toEqual(["0"]);
  });

  test("should do add edge", () => {
    /** @type {Graph} */
    const graph = new Graph();
    graph.addVertex("0");
    graph.addVertex("1");
    graph.addVertex("2");
    graph.addVertex("3");
    graph.addVertex("4");
    graph.addVertex("5");
    graph.addVertex("6");
    graph.addEdge("0", "2");
    graph.addEdge("0", "1");
    expect(graph.getConnectedVertices("0")).toEqual(["2", "1"]);
    expect(graph.getConnectedVertices("1")).toEqual(["0"]);
    expect(graph.getConnectedVertices("2")).toEqual(["0"]);
  });

  test("should do remove edge", () => {
    /** @type {Graph} */
    const graph = new Graph();
    graph.addVertex("0");
    graph.addVertex("1");
    graph.addVertex("2");
    graph.addVertex("3");
    graph.addVertex("4");
    graph.addVertex("5");
    graph.addVertex("6");
    graph.addEdge("0", "2");
    graph.addEdge("0", "1");
    graph.removeEdge("0", "2");
    expect(graph.getConnectedVertices("0")).toEqual(["1"]);
    expect(graph.getConnectedVertices("1")).toEqual(["0"]);
    expect(graph.getConnectedVertices("2")).toEqual([]);
  });

  test("should do remove vertex", () => {
    /** @type {Graph} */
    const graph = new Graph();
    graph.addVertex("0");
    graph.addVertex("1");
    graph.addVertex("2");
    graph.addVertex("3");
    graph.addVertex("4");
    graph.addVertex("5");
    graph.addVertex("6");
    graph.addEdge("0", "2");
    graph.addEdge("0", "1");
    graph.removeVertex("0");
    expect(graph.getConnectedVertices("0")).toEqual(undefined);
    expect(graph.getConnectedVertices("1")).toEqual([]);
    expect(graph.getConnectedVertices("2")).toEqual([]);
  });
});
