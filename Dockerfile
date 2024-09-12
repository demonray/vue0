FROM node:20-alpine
WORKDIR /app
COPY . .
EXPOSE 3000

CMD [ "npx", "serve", "./output/server/index.mjs" ]