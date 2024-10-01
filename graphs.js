const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);

  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
  }

  return adjList;
};

const bFs = (node, adjList, visited) => {
  const queue = [node];
  visited[node] = true;

  while (queue.length) {
    let curNode = queue.shift();

    for (let neighbor of adjList[curNode]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
};
