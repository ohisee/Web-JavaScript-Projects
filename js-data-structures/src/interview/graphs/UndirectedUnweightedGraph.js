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
   * breadth first search on this graph, explore node's all child nodes first 
   * using a queue to hold visited nodes while traversing 
   * @param {string} startVertex 
   */
  breadthFirstSearchIterative(startVertex) {
    /** @type {string[]} */
    const queue = [startVertex];
    /** @type {Object<string, boolean>} */
    const visitedNodes = {};
    /** @type {string[]} */
    const visited = [];
    if (this.adjacentList[startVertex]) {
      visitedNodes[startVertex] = true;
      while (queue.length > 0) {
        let vertex = queue.shift();
        let neighbors = this.adjacentList[vertex];
        if (neighbors) {
          visited.push(vertex);
          for (let neighbor of neighbors) {
            if (!visitedNodes[neighbor]) {
              visitedNodes[neighbor] = true;
              queue.push(neighbor);
            }
          }
        }
      }
    }
    return visited;
  }

  /**
   * breadth first search on this graph, explore node's all child nodes first 
   * using a queue to hold visited nodes while traversing 
   * @param {string} startVertex 
   * @param {string[]} queue 
   * @param {string[]} visited 
   * @param {Object<string, boolean>} visitedNodes 
   */
  breadthFirstSearchRecursive(startVertex, queue = [startVertex], visited = [], visitedNodes = {}) {
    if (queue.length === 0) {
      return visited;
    }
    let vertex = queue.shift();
    let neighbors = this.adjacentList[vertex];
    if (neighbors) {
      visitedNodes[vertex] = true;
      visited.push(vertex);
      for (let neighbor of neighbors) {
        if (!visitedNodes[neighbor]) {
          visitedNodes[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return this.breadthFirstSearchRecursive(startVertex, queue, visited, visitedNodes);
  }

  /**
   * explore as far as it can down one branch before back tracking 
   * using a stack to hold visited nodes while traversing  
   * @param {string} startVertex 
   */
  depthFirstSearchIterative(startVertex) {
    /** @type {string[]} */
    const stack = [startVertex];
    /** @type {Object<string, boolean>} */
    const visitedNodes = {};
    /** @type {string[]} */
    const visited = [];
    if (this.adjacentList[startVertex]) {
      while (stack.length > 0) {
        let vertex = stack.pop();
        if (vertex && !visitedNodes[vertex]) {
          visitedNodes[vertex] = true; // mark this vertex as visited
          visited.push(vertex); // store this vertex 
          stack.push(...this.adjacentList[vertex]); // track all edges in stack 
        }
      }
    }
    return visited;
  }

  /**
   * explore as far as it can down one branch before back tracking 
   * recursively call this function to visit every vertex of a node 
   * @param {string} startVertex 
   * @param {string[]} visited 
   * @param {Object<string, boolean>} visitedNodes 
   */
  depthFirstSearchRecursive(startVertex, visited = [], visitedNodes = {}) {
    let neighbors = this.adjacentList[startVertex];
    if (!neighbors) {
      return visited;
    }
    visited.push(startVertex);
    visitedNodes[startVertex] = true;
    for (let vertex of neighbors) {
      if (!visitedNodes[vertex]) {
        this.depthFirstSearchRecursive(vertex, visited, visitedNodes);
      }
    }
    return visited;
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
