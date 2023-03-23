FROM node
WORKDIR /usr/src/app
COPY ./backend .
COPY .env .
RUN npm i --silent
CMD ["node", "index.js"]
