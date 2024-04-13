const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.all("/", (req, res) => {
  res.send("Hi!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sever is running at ${PORT}`);
});

/*
This app starts a server and listens on port 3000 for connections. 
The app responds with “Hello World!” for requests to the root URL (/) or route. 
For every other path, it will respond with a 404 Not Found.
*/

//GET/READ TODO
const todo = [
  {
    id: "1",
    name: "Todo 1",
    completed: false,
  },
  { 
    id: "2",
    name: "Todo 2",
    completed: false
},
];

app.get('/todos', (req, res) => {
    res.json(todo)
})

//POST/CREATE TODO
app.post('/todos', (req, res)=>{
    const newTodo = req.body; //parsed to json using body parser
    todo.push(newTodo)
    res.status(201).json({message: 'New todo added!'})

})

//PUT/UPDATE TODO
app.put('/todos/:id', (req,res)=>{
    const todoIndex = todo.find(task => task.id === req.params.id)
    if(todoIndex !== -1){
        todo[todoIndex] = {
            id: req.params.id,
            ...req.body
        }
        res.json({message: 'TODO Updated successfully!'})

    }

})

//DELETE
app.delete('/todos/:id', (req,res)=>{
    const todoIndex = todo.find(task => task.id === req.params.id)
    if(todoIndex !== -1){
        todo.splice(todoIndex,1)
        res.json({message: 'TODO deleted!'})
    } else {
        res.status(400).json({message: 'ID does not exist'})
    }
})