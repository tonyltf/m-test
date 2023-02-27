FROM golang:1.17-alpine as build

WORKDIR /app

RUN apk add build-base
COPY go.mod ./
RUN go mod download
COPY . /app/
RUN go build 

ENTRYPOINT [ "./my-graph-app" ]
