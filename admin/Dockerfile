FROM node:20-alpine
WORKDIR /test-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 778:5173
CMD [ "npm","run","dev" ]
