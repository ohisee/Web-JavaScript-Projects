/**
 * @fileoverview undirected graph using adjaceny list
 */

export class Graph {

  private adjacencyList: { [key: string]: any[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] =
        this.adjacencyList[vertex1].filter(v => v !== vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] =
        this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  }

  removeVertex(vertex: string) {
    if (this.adjacencyList[vertex]) {
      for (let v of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, v);
      }
      delete this.adjacencyList[vertex];
    }
  }

  depthFirstTraverseRecursive(vertex: string) {
    let result: string[] = [];
    let visited: { [key: string]: boolean } = {};
    function depthFirstTraverse(vertex: string, graph: { [key: string]: any[] }) {
      if (!vertex) {
        return;
      }
      visited[vertex] = true;
      result.push(vertex);
      for (let v of graph[vertex]) {
        if (!visited[v]) {
          depthFirstTraverse(v, graph);
        }
      }
    }

    if (this.adjacencyList[vertex]) {
      depthFirstTraverse(vertex, this.adjacencyList);
    }
    return result;
  }

  getAdjacencyList() {
    return Object.assign({}, this.adjacencyList);
  }
}
