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
            let prevStart = previous[vertex.value];
            let path = [v.node, vertex.value];
            console.log(`checking ${v.node} of ${vertex.value}, new distance ${newDistance}, old distance ${oldDistance}, previous start`, prevStart);
            while (prevStart !== null) {
              path.push(prevStart.prev);
              newDistance += prevStart.distance;
              prevStart = previous[prevStart.prev];
            }
            console.log(`new distance ${path.reverse().join(' -> ')} of ${v.node} is ${newDistance}`);
            if (newDistance < oldDistance) {
              distances[v.node] = newDistance;
              previous[v.node] = { prev: vertex.value, distance: v.weight };
              queue.enqueue(v.node, newDistance);
            }
          }
        }
      }
    }
    return previous; // work backward to get the shortest path
  }

  findPath(start: string, finish: string) {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const queue = new PriorityQueue();
    const path: string[] = [];
    let minWeightNode;
    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // loop through node with smallest weight
    while (!queue.isEmpty()) {
      minWeightNode = queue.dequeue();
      let minWeightNodeValue = minWeightNode ? minWeightNode.value : null;
      if (minWeightNodeValue === finish) {
        // build up the path
        while (previous[minWeightNodeValue]) {
          path.push(minWeightNodeValue);
          minWeightNode = previous[minWeightNodeValue]!;
        }
        break;
      }
    }

    return path;
  }

  getAdjacencyList() {
    return Object.assign({}, this.adjacencyList);
  }
}
