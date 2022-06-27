FROM node:16-alpine
WORKDIR /app
COPY . .

RUN npm install --global pm2
RUN npm install
RUN npm run build

CMD ["npm", "run", "start:dev"]
