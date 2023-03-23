FROM node
WORKDIR /app
COPY /backend/package.json .
RUN npm i --silent
CMD ["npx", "nodemon", "-L", "./index.js"]
