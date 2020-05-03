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
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: { prev: string, distance: number } | null } = {};
    const visited: { [key: string]: boolean } = {};
    const queue = new PriorityQueue();
    for (let v in this.adjacencyList) {
      distances[v] = startingVertex === v ? 0 : Infinity;
      queue.enqueue(v, startingVertex === v ? 0 : Infinity);
      previous[v] = null;
    }
    while (!queue.isEmpty()) {
      let vertex = queue.dequeue()!;
      visited[vertex.value] = true;
      if (vertex && vertex.value !== endingVertex) {
        let vs = this.adjacencyList[vertex.value];
        for (let v of vs) {
          if (!visited[v.node]) {
            let newDistance = v.weight;
            let oldDistance = distances[v.node];
            let start = previous[v.node];
            while (start !== null) {
              newDistance += start.distance;
              start = previous[start.prev];
            }
            if (newDistance < oldDistance) {
              distances[v.node] = newDistance;
              previous[v.node] = { prev: vertex.value, distance: newDistance };
              queue.enqueue(v.node, newDistance);
            }
          }
        }
      }
    }
  }

  getAdjacencyList() {
    return Object.assign({}, this.adjacencyList);
  }
}
