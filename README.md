
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

## Run locally (Q2)

`npm run dev`

## Test (Q2)

Component test: `npm run cypress:run`
E2E test (with app running on localhost:5173 )`npm run cypress:run:e2e`

## Docker (Q2)

### Build with Docker (Q2)

`docker build -f Dockerfile . -t my-map-app`

### Run ith Docker

`docker run -p 3000:3000 my-map-app`

## Remarks

## Enhancement

- Pagination: for real case a data source may contains a lot of data, which does not make sense to get the complete list and display at once, so pagination is common
  - if the API allows pagination, i.e. limit & offset paramters, we can limit the API request each time and do pagination with
    - next / previous page button
    - auto loading when user scrolls to bottom
- When user refresh on the people detail page, or directly access the page, we can keep user in the detail page
  - if we use localStorage or any other way to store the user clicked people info
  - if the API supports getting single friend for example `GET /:id`
