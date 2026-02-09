FROM node:20-alpine
WORKDIR /test-admin
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 777:5173
CMD [ "npm","run","dev" ]
