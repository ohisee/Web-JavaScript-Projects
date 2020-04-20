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

  depthFirstTraverseRecursive(startVertex: string) {
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    const graph: { [key: string]: any[] } = this.adjacencyList;
    function depthFirstTraverse(startVertex: string) {
      if (!startVertex) {
        return;
      }
      visited[startVertex] = true;
      result.push(startVertex);
      for (let v of graph[startVertex]) {
        if (!visited[v]) {
          depthFirstTraverse(v);
        }
      }
    }

    if (this.adjacencyList[startVertex]) {
      depthFirstTraverse(startVertex);
    }
    return result;
  }

  depthFirstTraverseIterative(startVertex: string) {
    const stack: any[] = [startVertex];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    if (this.adjacencyList[startVertex]) {
      while (stack.length > 0) {
        let vertex = stack.pop();
        if (vertex && !visited[vertex]) {
          visited[vertex] = true;
          result.push(vertex);
          stack.push(...this.adjacencyList[vertex]);
        }
      }
    }
    return result;
  }

  breadthFirstTraverse(startVertex: string) {
    const queue: any[] = [startVertex];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    if (this.adjacencyList[startVertex]) {
      visited[startVertex] = true;
      while (queue.length > 0) {
        let vertex = queue.shift();
        result.push(vertex);
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
    return result;
  }

  getAdjacencyList() {
    return Object.assign({}, this.adjacencyList);
  }
}
