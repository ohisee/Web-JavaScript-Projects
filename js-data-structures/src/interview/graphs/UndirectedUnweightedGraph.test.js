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

  describe("Graph traversal", () => {
    /** @type {Graph} */
    let graph;

    beforeEach(() => {
      graph = new Graph();
      graph.addVertex("San Francisco");
      graph.addVertex("Mission Bay");
      graph.addVertex("San Jose");
      graph.addVertex("San Mateo");
      graph.addVertex("San Bruno");
      graph.addVertex("Daly City");
      graph.addEdge("San Francisco", "Mission Bay");
      graph.addEdge("San Francisco", "San Jose");
      graph.addEdge("San Jose", "San Mateo");
      graph.addEdge("Mission Bay", "San Bruno");
      graph.addEdge("San Bruno", "Daly City");
      graph.addEdge("San Mateo", "San Bruno");
      graph.addEdge("San Mateo", "Daly City");
      //       San Francisco
      //          /     \
      // Mission Bay   San Jose
      //          |      |
      //   San Bruno - San Mateo
      //          \      /
      //          Daly City
    });

    test("should do breadth first traversal iterative", () => {
      expect(graph.breadthFirstSearchIterative("San Francisco"))
        .toEqual([
          "San Francisco", "Mission Bay", "San Jose",
          "San Bruno", "San Mateo", "Daly City",
        ]);
    });

    test("should do breadth first traversal iterative non existing vertex",
      () => {
        expect(graph.breadthFirstSearchIterative("abc")).toEqual([]);
      });

    test("should do breadth first traversal recursive", () => {
      expect(graph.breadthFirstSearchRecursive("San Francisco"))
        .toEqual([
          "San Francisco", "Mission Bay", "San Jose",
          "San Bruno", "San Mateo", "Daly City",
        ]);
    });

    test("should do breadth first traversal recursive non existing vertex",
      () => {
        expect(graph.breadthFirstSearchRecursive("abc")).toEqual([]);
      });

    test("should do depth first traversal iterative", () => {
      expect(graph.depthFirstSearchIterative("San Francisco"))
        .toEqual([ // order is based on pop from stack 
          "San Francisco", "San Jose", "San Mateo",
          "Daly City", "San Bruno", "Mission Bay",
        ]);
    });

    test("should do depth first traversal iterative non existing vertex",
      () => {
        expect(graph.depthFirstSearchIterative("something")).toEqual([]);
      });

    test("should do depth first traversal resursive", () => {
      expect(graph.depthFirstSearchRecursive("San Francisco"))
        .toEqual([ // recursive start 
          "San Francisco", "Mission Bay", "San Bruno",
          "Daly City", "San Mateo", "San Jose",
        ]);
    });

    test("should do depth first traversal resursive non existing vertex",
      () => {
        expect(graph.depthFirstSearchRecursive("something")).toEqual([]);
      });
  });
});
