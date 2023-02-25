import express from 'express';

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();
const port = 3000

app.get('/todos', (req, res) => {
  res.send(TODOS);
})

app.put('/todos/:todoid', (req, res) => {
    res.send('Update Completed');
})

app.delete('/todos/:todoid', (req, res) => {
    let todo = TODOS.find(element => element.id === req.params.todoid)
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

// Your code here