package main

import (
	"fmt"
	"my-graph-app/graph"
)

var (
	nodeA graph.Node
	nodeB graph.Node
	nodeC graph.Node
	nodeD graph.Node
	nodeE graph.Node
	nodeF graph.Node
	nodeG graph.Node
	nodeH graph.Node
)

func createGraph() graph.Graph {
	nodeA = graph.Node{Name: "A"}
	nodeB = graph.Node{Name: "B"}
	nodeC = graph.Node{Name: "C"}
	nodeD = graph.Node{Name: "D"}
	nodeE = graph.Node{Name: "E"}
	nodeF = graph.Node{Name: "F"}
	nodeG = graph.Node{Name: "G"}
	nodeH = graph.Node{Name: "H"}

	graph := graph.Graph{Nodes: make(map[graph.Node][]graph.Vertex)}
	graph.AddVertex(nodeA, nodeB, 1)
	graph.AddVertex(nodeA, nodeD, 1)
	graph.AddVertex(nodeA, nodeH, 1)
	graph.AddVertex(nodeB, nodeC, 1)
	graph.AddVertex(nodeB, nodeD, 1)
	graph.AddVertex(nodeC, nodeD, 1)
	graph.AddVertex(nodeC, nodeF, 1)
	graph.AddVertex(nodeD, nodeE, 1)
	graph.AddVertex(nodeE, nodeF, 1)
	graph.AddVertex(nodeE, nodeH, 1)
	graph.AddVertex(nodeF, nodeG, 1)
	graph.AddVertex(nodeG, nodeH, 1)

	fmt.Printf("Graph created\n\n")
	return graph
}

func main() {
	// init graph
	graph := createGraph()
	graph.PrintVertices()

	// Q1a, find all paths from A to H
	fmt.Printf("Q1. All paths from A to H: ")
	paths := graph.FindAllPaths(nodeA, nodeH)
	fmt.Printf("# paths = %d\n", len(paths))

	// Q1b, find shortest paths from A to H
	fmt.Println("-------")
	fmt.Println("Q2. Shortest path from A to H is:")
	path := graph.FindShortesPath(nodeA, nodeH)
	path[0].PrintPaths()
}
