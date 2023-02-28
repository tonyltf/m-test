FROM node:18-alpine as builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install 

COPY . .

RUN pnpm run build

FROM node:18-alpine as runner

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist .

EXPOSE 3000

CMD [ "serve", "-s" ]