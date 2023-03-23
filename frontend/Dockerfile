FROM node:current-alpine3.16
WORKDIR /app
COPY package*.json ./
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i --silent
CMD ["npm", "start"]
