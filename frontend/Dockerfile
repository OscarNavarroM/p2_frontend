FROM node:17-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm i --silent
COPY . ./
CMD ["npm", "start"]
EXPOSE 3000