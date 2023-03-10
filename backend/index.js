import express from 'express';

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();
const port = 3000

app.get('/todos', (req, res) => {
  res.send(TODOS);
})

app.put('/todos/:todoid', (req,res) =>{

  const todo = TODOS.find(element => element.id === req.params.todoid);
  const index = TODOS.indexOf(todo);
  if(todo) {
    todo.title = req.body.title
    todo.due = req.body.due
    todo.status = req.body.status

  }
  res.json(todo)
}) 

app.delete('/todos/:todoid', (req, res) => {
    let todo = TODOS.find(element => element.id === req.params.todoid);
    let index = TODOS.indexOf(todo);
    TODOS.splice(index,1);
    res.send(TODOS);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

/**
 * Liste aller ToDos. 
 * Wird später durch Datenbank ersetzt!
 */
let TODOS = [
    {
        "id": 1671056616571,
        "title": "Übung 4 machen",
        "due": "2022-11-12T00:00:00.000Z",
        "status": 0
    },
    {
        "id": 1671087245763,
        "title": "Für die Klausur Webentwicklung lernen",
        "due": "2023-01-14T00:00:00.000Z",
        "status": 2
    },
];


app.post('/todos', function (req, res) {
  TODOS.push({id:TODOS[TODOS.length-1].id+1,title:req.title,due:req.due,status:req.status})
});
  

// Your code here