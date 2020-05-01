/**
 * @fileoverview weighted graph
 */

import { PriorityQueue } from "./naive-priority-queue";

type WeightedGraphNode = { node: string, weight: number };

export class WeightedGraph {

  private adjacencyList: { [key: string]: WeightedGraphNode[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
    }
  }

  findShortestPath(startingVertex: string, endingVertex: string) {
    let distances: { [key: string]: number } = {};
    let previous: { [key: string]: string | null } = {};
    const queue = new PriorityQueue();
    for (let v in this.adjacencyList) {
      distances[v] = startingVertex === v ? 0 : Infinity;
      queue.enqueue(v, startingVertex === v ? 0 : Infinity);
      previous[v] = null;      
    }
    while(!queue.isEmpty()) {
      let vertex = queue.dequeue();
      if (vertex && vertex.value !== endingVertex) {
        let vs = this.adjacencyList[vertex.value];
        for (let v of vs) {
          
        }
      }
    }
  }

  getAdjacencyList() {
    return Object.assign({}, this.adjacencyList);
  }
}
