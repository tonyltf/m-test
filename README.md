
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

E2E test:

`npm run dev`

`npm run cypress:run:e2e`

Note: it is suggested to set the local development server ourselves for testing - `https://docs.cypress.io/guides/end-to-end-testing/testing-your-app`

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
- When user directly access the friend detail page, we only have the latest select people info
  - if the API supports getting single friend for example `GET /:id`, it can get individual people from the API
