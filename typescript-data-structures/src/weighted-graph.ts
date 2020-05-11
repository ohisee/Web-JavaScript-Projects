/**
 * @fileoverview weighted graph
 */

import { SimplePriorityQueue } from "./naive-priority-queue";
import { PriorityQueue } from "./priority-queue";

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
    const queue = new SimplePriorityQueue();
    for (let v in this.adjacencyList) {
      distances[v] = startingVertex === v ? 0 : Infinity;
      queue.enqueue(v, startingVertex === v ? 0 : Infinity);
      previous[v] = null;
    }
    while (!queue.isEmpty()) {
      let minWeightVertex = queue.dequeue()!;
      visited[minWeightVertex.value] = true;
      if (minWeightVertex && minWeightVertex.value !== endingVertex) {
        let neighborNodes = this.adjacencyList[minWeightVertex.value];
        for (let neighborNode of neighborNodes) {
          if (!visited[neighborNode.node]) {
            let newDistance = neighborNode.weight;
            let oldDistance = distances[neighborNode.node];
            let prevStart = previous[minWeightVertex.value];
            let path = [neighborNode.node, minWeightVertex.value];
            //console.log(`checking ${v.node} of ${vertex.value}, new distance ${newDistance}, old distance ${oldDistance}, previous start`, prevStart);
            // add previous distances to the current neighbor node
            while (prevStart !== null) {
              path.push(prevStart.prev);
              newDistance += prevStart.distance;
              prevStart = previous[prevStart.prev];
            }
            //console.log(`new distance ${path.reverse().join(' -> ')} of ${v.node} is ${newDistance}`);
            if (newDistance < oldDistance) {
              distances[neighborNode.node] = newDistance;
              previous[neighborNode.node] = { prev: minWeightVertex.value, distance: neighborNode.weight };
              queue.enqueue(neighborNode.node, newDistance);
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
    const queue: PriorityQueue<string> = new PriorityQueue();
    const path: string[] = [];

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
      let minWeightNode = queue.dequeue();
      let minWeightNodeValue = minWeightNode ? minWeightNode.val : null;
      if (minWeightNodeValue === finish) {
        // build up the path
        while (previous[minWeightNodeValue]) {
          path.push(minWeightNodeValue);
          minWeightNodeValue = previous[minWeightNodeValue]!;
        }
        path.push(minWeightNodeValue);
        break;
      }
      if (minWeightNodeValue && distances[minWeightNodeValue] !== Infinity) {
        for (let neighborNode of this.adjacencyList[minWeightNodeValue]) {
          // calculate distance to neighbor node
          let newDistance = distances[minWeightNodeValue] + neighborNode.weight;
          if (newDistance < distances[neighborNode.node]) {
            distances[neighborNode.node] = newDistance;
            previous[neighborNode.node] = minWeightNodeValue;
            queue.enqueue(neighborNode.node, newDistance);
          }
        }
      }
    }
    return path.reverse();
  }

  findMinWeightPath(start: string, finish: string) {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const queue = new PriorityQueue<string>();
    const path: string[] = [];

    // build initial distances, previsous, and priority queue
    for (let v in this.adjacencyList) {
      distances[v] = start === v ? 0 : Infinity;
      queue.enqueue(v, start === v ? 0 : Infinity);
      previous[v] = null;
    }

    // loop through nodes
    while (!queue.isEmpty()) {
      let minWeightNode = queue.dequeue();
      if (minWeightNode.val !== finish) {
        for (let neighborNode of this.adjacencyList[minWeightNode.val]) {
          let newDistance = neighborNode.weight;
          let distanceFromMinWeightNodeToCurrentNeighborNode = distances[minWeightNode.val];
          if (distanceFromMinWeightNodeToCurrentNeighborNode !== Infinity) {
            newDistance = newDistance + distanceFromMinWeightNodeToCurrentNeighborNode;
          }
          if (newDistance < distances[neighborNode.node]) {
            distances[neighborNode.node] = newDistance;
            previous[neighborNode.node] = minWeightNode.val;
            queue.enqueue(neighborNode.node, newDistance);
          }
        }
      } else {
        path.push(minWeightNode.val);
        let prevNode = previous[minWeightNode.val];
        while (prevNode) {
          path.push(prevNode);
          prevNode = previous[prevNode];
        }
        break;
      }
    }

    return path.reverse();
  }

  getAdjacencyList() {
    return Object.assign({}, this.adjacencyList);
  }
}
