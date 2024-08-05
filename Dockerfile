FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY next.config.mjs ./
COPY . .

RUN npm run build

FROM node:18 AS runner

WORKDIR /app

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

RUN npm install --production

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "start"]
