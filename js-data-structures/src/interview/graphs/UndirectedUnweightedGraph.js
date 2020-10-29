/**
 * @fileoverview JS undirected unweighted graph using adjacent list 
 */

class Graph {
  /**
   * @typedef {Object<string, []>} GraphType
   */
  constructor() {
    this.nodesCounter = 0;
    /** @type {GraphType} */
    this.adjacentList = {};
  }

  /**
   * @param {string} vertex 
   */
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
      this.nodesCounter += 1;
    }
  }

  /**
   * @param {string} vertex1 
   * @param {string} vertex2 
   */
  addEdge(vertex1, vertex2) {
    if (this.adjacentList[vertex1]) {
      this.adjacentList[vertex1].push(vertex2);
    }
    if (this.adjacentList[vertex2]) {
      this.adjacentList[vertex2].push(vertex1);
    }
  }

  /**
   * remove one vertex from this graph 
   * @param {string} vertex 
   */
  removeVertex(vertex) {
    if (this.adjacentList[vertex]) {
      const connections = this.adjacentList[vertex];
      for (let v of connections) {
        this.removeEdge(vertex, v);
      }
      delete this.adjacentList[vertex];
    }
  }

  /**
   * remove edge connecting vertex1 and vertex2 
   * @param {string} vertex1 
   * @param {string} vertex2 
   */
  removeEdge(vertex1, vertex2) {
    if (this.adjacentList[vertex1]) {
      this.adjacentList[vertex1] =
        this.adjacentList[vertex1].filter(vertex => vertex !== vertex2);
    }
    if (this.adjacentList[vertex2]) {
      this.adjacentList[vertex2] =
        this.adjacentList[vertex2].filter(vertex => vertex !== vertex1);
    }
  }

  /**
   * @returns {string[]} vertices of this graph 
   */
  getAllVertices() {
    return Object.keys(this.adjacentList);
  }

  /**
   * @param {string} vertex 
   * @returns {string[]} of this graph 
   */
  getConnectedVertices(vertex) {
    return this.adjacentList[vertex];
  }

  printGraphConnections() {
    const vertices = Object.keys(this.adjacentList);
    for (let vertex of vertices) {
      let connections = this.adjacentList[vertex];
      if (connections) {
        console.log(`${vertex} --> ${connections.join(" ")}`);
      }
    }
  }
}

module.exports = {
  Graph,
};
