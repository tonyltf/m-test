package graph

import "fmt"

type Node struct {
	Name string
}

type Vertex struct {
	Weight int
	Node   *Node
}

type Graph struct {
	Nodes map[Node][]Vertex
}

type Path struct {
	Length int
	Nodes  []Node
}

func (g *Graph) AddVertex(from, to Node, weight int) {
	fmt.Printf("Linking nodes %s and %s\n", from.Name, to.Name)
	g.Nodes[from] = append(g.Nodes[from], Vertex{1, &to})
	g.Nodes[to] = append(g.Nodes[to], Vertex{1, &from})
}

func (g *Graph) PrintVertices() {
	for key, item := range g.Nodes {
		fmt.Printf("Node %s, linked nodes are: ", key.Name)
		for _, node := range item {
			fmt.Printf(" %s ", node.Node.Name)
		}
		fmt.Printf("\n")
	}
	fmt.Printf("\n")
}

func (g *Graph) FindAllPaths(start, end Node) []Path {
	fmt.Printf("Finding all paths from %s to %s\n", start.Name, end.Name)
	path := &Path{1, []Node{start}}
	return path.FindNextNodes(g, start, end, false)
}

func (g *Graph) FindShortesPath(start, end Node) []Path {
	fmt.Printf("Finding shortest path from %s to %s\n", start.Name, end.Name)
	path := &Path{1, []Node{start}}
	return path.FindNextNodes(g, start, end, true)
}

// Path related
func (p *Path) FindNextNodes(g *Graph, current Node, end Node, exitOnEnd bool) []Path {
	if current == end {
		fmt.Print("Found target -- ")
		p.PrintPaths()
		return []Path{*p}
	}
	paths := make([]Path, 0)
	for _, next := range g.Nodes[current] {
		if !p.cotainsNode(next.Node) {
			// for each non-vistied nodes next to currecnt node, visit the next node
			newNode := append(p.Nodes, *next.Node)
			newPath := Path{p.Length + next.Weight, newNode}
			// if the next node is the target end node and wants to stop the search, exit the recursion / loop
			if exitOnEnd == true && *next.Node == end {
				return []Path{newPath}
			}
			// extend the struct array for each new path to be visited
			// if X new nodes linked, the path array length will be increased by X
			paths = append(paths, newPath.FindNextNodes(g, *next.Node, end, exitOnEnd)...)
		}
	}
	return paths
}
func (p *Path) PrintPaths() {
	fmt.Print("Printing path: ")
	for index, item := range p.Nodes {
		if len(p.Nodes)-1 == index {
			fmt.Printf("%s (end)", item.Name)
		} else {
			fmt.Printf("%s -> ", item.Name)
		}
	}
	fmt.Println("")
}

func (p *Path) cotainsNode(n *Node) bool {
	for _, node := range p.Nodes {
		if n.Name == node.Name || *n == node {
			return true
		}
	}
	return false
}
