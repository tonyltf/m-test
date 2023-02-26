package main

import (
	"fmt"
)

type Node struct {
	name string
	// vertics []*Vertex
}

type Vertex struct {
	weight int
	node   *Node
	// nodes  []*Node
}

type Path struct {
	length int
	nodes  []Node
}

type Graph struct {
	nodes map[Node][]Vertex
}

func createGraph() Graph {
	nodeA := Node{"A"}
	nodeB := Node{"B"}
	nodeC := Node{"C"}
	nodeD := Node{"D"}
	nodeE := Node{"E"}
	nodeF := Node{"F"}
	nodeG := Node{"G"}
	nodeH := Node{"H"}
	graph := Graph{make(map[Node][]Vertex)}
	graph.addVertex(nodeA, nodeB, 1)
	graph.addVertex(nodeA, nodeD, 1)
	graph.addVertex(nodeA, nodeH, 1)
	graph.addVertex(nodeB, nodeC, 1)
	graph.addVertex(nodeB, nodeD, 1)
	graph.addVertex(nodeC, nodeD, 1)
	graph.addVertex(nodeC, nodeF, 1)
	graph.addVertex(nodeD, nodeE, 1)
	graph.addVertex(nodeE, nodeF, 1)
	graph.addVertex(nodeE, nodeH, 1)
	graph.addVertex(nodeF, nodeG, 1)
	graph.addVertex(nodeG, nodeH, 1)

	fmt.Printf("Graph created\n\n")
	return graph
}

func (g *Graph) addVertex(from, to Node, weight int) {
	fmt.Printf("Linking nodes %s and %s\n", from.name, to.name)
	g.nodes[from] = append(g.nodes[from], Vertex{1, &to})
	g.nodes[to] = append(g.nodes[to], Vertex{1, &from})
}

func (g *Graph) printVertices() {
	for key, item := range g.nodes {
		fmt.Printf("Node %s, linked nodes are: ", key.name)
		for _, node := range item {
			fmt.Printf(" %s ", node.node.name)
		}
		fmt.Printf("\n")
	}
	fmt.Printf("\n")
}

func (g *Graph) findAllPaths(start, end Node) []Path {
	fmt.Printf("Find path from %s to %s\n", start.name, end.name)
	paths := make([]Path, len(g.nodes[start]))
	fmt.Printf("Node %s is linked with %d node(s)\n", start.name, len(g.nodes[start]))
	for index, item := range g.nodes[start] {
		fmt.Println(paths[index])
		paths[index].nodes = append(paths[index].nodes, start)
		paths[index].nodes = append(paths[index].nodes, *item.node)
		paths[index].length = paths[index].length + item.weight
		// fmt.Println(key, item)
	}
	// paths = append(paths, )
	return paths
}

func main() {
	graph := createGraph()
	graph.printVertices()

	// Q1a, find all paths from A to H
	paths := graph.findAllPaths(Node{"A"}, Node{"H"})
	fmt.Println(paths)

	// Q1b, find shortest paths from A to H
}
