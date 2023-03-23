FROM node
WORKDIR /app
COPY /package*.json .
RUN npm i --silent
CMD ["npx", "nodemon", "-L", "./index.js"]
