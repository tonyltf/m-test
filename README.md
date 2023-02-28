
# Q1

## Go installed

### Run dev

`go run q1/main.go`

### Build

`go build`

### Run

`./my-graph-app`

### Build Q1 with Docker

`docker build -f q1/Dockerfile q1/. -t my-graph-app`

### Run Q1 with Docker

`docker run my-graph-app`

# Q2

## Docker

### Build Q2 with Docker

`docker build -f Dockerfile . -t my-map-app`

### Run Q2 with Docker

`docker run -p 3000:3000 my-map-app`
