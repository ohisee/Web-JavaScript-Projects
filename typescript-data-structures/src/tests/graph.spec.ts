/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { Graph } from "../graph-adjacency-list";
import { WeightedGraph } from "../weighted-graph";

describe("Undirected graph using adjaceny list", () => {

  describe('Graph add vertex, add edge, remove edge, remove vertex', () => {
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();
      graph.addVertex('San Francisco');
      graph.addVertex('San Jose');
      graph.addVertex('Bayshore');
      graph.addVertex('Mission');
      graph.addVertex('Alemany');
    });

    it('Should do add vertex', () => {
      expect(graph.getAdjacencyList()).to.have.property('San Francisco');
      expect(graph.getAdjacencyList()).to.have.property('San Jose');
      expect(graph.getAdjacencyList()).to.have.property('Bayshore');
      expect(graph.getAdjacencyList()).to.have.property('Mission');
      expect(graph.getAdjacencyList()).to.have.property('Alemany');
      expect(graph.getAdjacencyList()['San Francisco']).to.eql([]);
      expect(graph.getAdjacencyList()['San Jose']).to.eql([]);
      expect(graph.getAdjacencyList()['Bayshore']).to.eql([]);
      expect(graph.getAdjacencyList()['Mission']).to.eql([]);
      expect(graph.getAdjacencyList()['Alemany']).to.eql([]);
    });

    it('Should do add edge', () => {
      graph.addEdge('San Francisco', 'San Jose');
      graph.addEdge('San Francisco', 'Bayshore');
      expect(graph.getAdjacencyList()['San Francisco']).to.eql(['San Jose', 'Bayshore']);
      expect(graph.getAdjacencyList()['San Jose']).to.eql(['San Francisco']);
      expect(graph.getAdjacencyList()['Bayshore']).to.eql(['San Francisco']);
      expect(graph.getAdjacencyList()['Mission']).to.eql([]);
      expect(graph.getAdjacencyList()['Alemany']).to.eql([]);
    });

    it('Should do remove edge', () => {
      graph.addEdge('San Francisco', 'San Jose');
      graph.addEdge('San Francisco', 'Bayshore');
      graph.removeEdge('San Francisco', 'San Jose');
      expect(graph.getAdjacencyList()['San Francisco']).to.eql(['Bayshore']);
      expect(graph.getAdjacencyList()['San Jose']).to.eql([]);
      expect(graph.getAdjacencyList()['Bayshore']).to.eql(['San Francisco']);
      expect(graph.getAdjacencyList()['Mission']).to.eql([]);
      expect(graph.getAdjacencyList()['Alemany']).to.eql([]);
    });

    it('Should do remove verter', () => {
      graph.addEdge('San Francisco', 'Bayshore');
      graph.addEdge('Mission', 'San Jose');
      graph.addEdge('Mission', 'Bayshore');
      graph.addEdge('Alemany', 'Bayshore');
      graph.removeVertex('Bayshore');
      expect(graph.getAdjacencyList()).to.not.have.property('Bayshore');
      expect(graph.getAdjacencyList()).to.have.property('San Francisco');
      expect(graph.getAdjacencyList()).to.have.property('San Jose');
      expect(graph.getAdjacencyList()).to.have.property('Mission');
      expect(graph.getAdjacencyList()).to.have.property('Alemany');
      expect(graph.getAdjacencyList()['San Francisco']).to.eql([]);
      expect(graph.getAdjacencyList()['San Jose']).to.eql(['Mission']);
      expect(graph.getAdjacencyList()['Mission']).to.eql(['San Jose']);
      expect(graph.getAdjacencyList()['Alemany']).to.eql([]);
    });
  });

  describe('Graph traversal', () => {
    let graph: Graph;

    beforeEach(() => {
      graph = new Graph();
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");
      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");
      /*
            A
          /   \
          B   C
          |   |
          D - E
          \   /
            F
       */
    });

    it('Should do add vertex and add edge', () => {
      expect(graph.getAdjacencyList()["A"]).to.eql(["B", "C"]);
      expect(graph.getAdjacencyList()["B"]).to.eql(["A", "D"]);
      expect(graph.getAdjacencyList()["C"]).to.eql(["A", "E"]);
      expect(graph.getAdjacencyList()["D"]).to.eql(["B", "E", "F"]);
      expect(graph.getAdjacencyList()["E"]).to.eql(["C", "D", "F"]);
      expect(graph.getAdjacencyList()["F"]).to.eql(["D", "E"]);
    });

    it('Should do depth first traversal recursive', () => {
      expect(graph.depthFirstTraverseRecursive("A")).to.eql(
        ["A", "B", "D", "E", "C", "F"]
      );
    });

    it('Should do depth first traversal iterative', () => {
      expect(graph.depthFirstTraverseIterative("A")).to.eql(
        ["A", "C", "E", "F", "D", "B"]
      );
    });

    it('Should do breadth first traversal iterative', () => {
      expect(graph.breadthFirstTraverse("A")).to.eql(
        ["A", "B", "C", "D", "E", "F"]
      );
    });
  });

  describe("Weighted graph", () => {
    let weightedGraph: WeightedGraph;

    it('Should do add vertex and add edge', () => {
      weightedGraph = new WeightedGraph();
      weightedGraph.addVertex("A");
      weightedGraph.addVertex("B");
      weightedGraph.addVertex("C");
      weightedGraph.addEdge("A", "B", 100);
      weightedGraph.addEdge("A", "C", 120);
      weightedGraph.addEdge("B", "C", 110);
      expect(weightedGraph.getAdjacencyList()).to.have.property("A");
      expect(weightedGraph.getAdjacencyList()).to.have.property("B");
      expect(weightedGraph.getAdjacencyList()).to.have.property("C");
      expect(weightedGraph.getAdjacencyList()["A"]).to.eql(
        [{ node: "B", weight: 100 }, { node: "C", weight: 120 }]
      );
      expect(weightedGraph.getAdjacencyList()["B"]).to.eql(
        [{ node: "A", weight: 100 }, { node: "C", weight: 110 }]
      );
      expect(weightedGraph.getAdjacencyList()["C"]).to.eql(
        [{ node: "A", weight: 120 }, { node: "B", weight: 110 }]
      );
    });
  });
});
