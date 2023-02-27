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

var (
	nodeA Node
	nodeB Node
	nodeC Node
	nodeD Node
	nodeE Node
	nodeF Node
	nodeG Node
	nodeH Node
)

// Graph related

func createGraph() Graph {
	nodeA = Node{"A"}
	nodeB = Node{"B"}
	nodeC = Node{"C"}
	nodeD = Node{"D"}
	nodeE = Node{"E"}
	nodeF = Node{"F"}
	nodeG = Node{"G"}
	nodeH = Node{"H"}
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
	paths := make([]Path, 1)
	paths[0].nodes = append(paths[0].nodes, start)
	// fmt.Printf("Node %s is linked with %d node(s)\n", start.name, len(g.nodes[start]))
	return paths[0].findNextNode(g, start, &end)
	// return paths
}

func (g *Graph) findShortesPaths(start, end Node) []Path {
	return make([]Path, 0)
}

// Path related

func (p *Path) findNextNode(g *Graph, current Node, end *Node) []Path {
	numOfNewVertex := 0
	paths := make([]Path, 0)
	if current == *end || p.cotainsNode(end) {
		// fmt.Printf("Found target %s\n", current.name)
		return paths
	}
	if current.name == "H" {
		fmt.Printf("1. Current node %s is linked with %d node(s)\n", current.name, len(g.nodes[current]))
	}
	// p.printPaths()
	for _, next := range g.nodes[current] {
		if current.name == "H" {
			fmt.Printf("2. Current node %s -> Next node %s visited? %t \n", current.name, next.node.name, p.cotainsNode(next.node))
		}
		if !p.cotainsNode(next.node) {
			numOfNewVertex++
			newPath := Path{p.length + next.weight, append(p.nodes, *next.node)}
			// fmt.Println(newPath)
			paths = append(paths, newPath)
			// for _, pp := range paths {
			// pp.printPaths()
			if current.name == "H" {
				fmt.Printf("Next end? %t", *next.node != *end)
			}
			if *next.node != *end {
				paths = append(paths, newPath.findNextNode(g, *next.node, end)...)
			}
			// }
			// paths[index].nodes = append(p.nodes, *next.node)
			// paths[index].length += next.weight
		}
		nodeH := Node{"H"}
		if numOfNewVertex == 0 && p.cotainsNode(&nodeH) {
			fmt.Printf("4. Current node %s is linked with %d node(s)\n", current.name, len(g.nodes[current]))
			p.printPaths()
		}
	}
	// if current.name == "H" {
	// 	fmt.Printf("4. Current node %s, Returning paths with length = %d\n", current.name, len(paths))
	// }
	return paths
}
func (p *Path) printPaths() {
	fmt.Print("Printing path: ")
	for index, item := range p.nodes {
		if len(p.nodes)-1 == index {
			fmt.Printf("%s (end)", item.name)
		} else {
			fmt.Printf("%s -> ", item.name)
		}
	}
	fmt.Println("")
}

// func (p *Path) visitedNode(node Node) bool {

// 	for _, item := range p.nodes {
// 		visited := p.cotainsNode(item)
// 		fmt.Printf("Next node %s, visited? %t\n ", node.name, visited)
// 		if visited {
// 			return true
// 		}
// 	}
// 	return false
// }

func (g *Graph) getNextNonVisitedNodes(p *Path) []Node {
	// p.cotainsNode()
	node := p.nodes[len(p.nodes)-1]

	v := g.nodes[node]
	for _, item := range v {
		visited := p.cotainsNode(item.node)
		fmt.Printf("Next node %s, visited? %t\n ", item.node.name, visited)
	}
	fmt.Println("")
	return make([]Node, 0)
}

func (p *Path) cotainsNode(n *Node) bool {
	for _, node := range p.nodes {
		if n.name == node.name || *n == node {
			return true
		}
	}
	return false
}

func main() {
	graph := createGraph()
	graph.printVertices()

	// Q1a, find all paths from A to H
	paths := graph.findAllPaths(nodeA, nodeH)
	var shortestPath = &Path{0, nil}
	fmt.Printf("# paths = %d\n", len(paths))
	for _, path := range paths {
		// fmt.Println(path)
		nodes := path.nodes
		if nodes[0] == nodeA {
			if nodes[len(nodes)-1] == nodeH {
				if shortestPath.nodes == nil || path.length < shortestPath.length {
					shortestPath = &path
				}
				path.printPaths()
			}
		}
	}

	// Q1b, find shortest paths from A to H
	fmt.Println("Shortest path from A to H is:")
	shortestPath.printPaths()
}
