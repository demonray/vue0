FROM node:20-alpine

WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm install -g pnpm

COPY package.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["node", "/app/.output/server/index.mjs"]