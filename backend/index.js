require('dotenv').config()
const express = require("express");
const config = require("./db.config");

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});

const cors = require("cors");
const app = express();

const port = process.env.BACKEND_PORT
app.use(express.json());
app.use(cors());

db.schema.hasTable('todo').then(function(exists) {
  if (!exists) {
    console.log('Table todo successfully created')
    return db.schema.createTable('todo', function(t) {
      t.increments('id').primary();
      t.string('content');
    });
  }
});

app.get("/todos", async (req, res) => {
  const todos = await db.select().table('todo')
  res.send({
    success: true,
    todos: todos
  })
});

app.post("/todos", async (req, res) => {
  if (req.body.content){
    const result = await db('todo').insert({
      content: req.body.content
    })
    res.send({
      success: result
    })
  }else{
    res.status(400).send({
      success: false,
      message: 'Invalid body'
    })
  }
});

app.delete("/todos/:todoId", async (req, res) => {
  const result = await db('todo').where('id',  req.params.todoId).del()
  res.send({
    success: result === 1
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
