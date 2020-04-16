/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { Graph } from "../graph-adjacency-list";

describe("Undirected graph using adjaceny list", () => {
  let graph: Graph;

  before(() => {
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
    graph.removeEdge('San Francisco', 'San Jose');
    expect(graph.getAdjacencyList()['San Francisco']).to.eql(['Bayshore']);
    expect(graph.getAdjacencyList()['San Jose']).to.eql([]);
    expect(graph.getAdjacencyList()['Bayshore']).to.eql(['San Francisco']);
    expect(graph.getAdjacencyList()['Mission']).to.eql([]);
    expect(graph.getAdjacencyList()['Alemany']).to.eql([]);
  });

  it('Should do remove verter', () => {
    graph.removeVertex('Bayshore');
    expect(graph.getAdjacencyList()).to.not.have.property('Bayshore');
    expect(graph.getAdjacencyList()).to.have.property('San Francisco');
    expect(graph.getAdjacencyList()).to.have.property('San Jose');
    expect(graph.getAdjacencyList()).to.have.property('Mission');
    expect(graph.getAdjacencyList()).to.have.property('Alemany');
  });
});
