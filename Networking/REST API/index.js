const express = require('express')
const app = express()

app.all('/', (req, res)=> {
    res.send('Hi!')
})

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Sever is running at ${PORT}`);
})

/*
This app starts a server and listens on port 3000 for connections. 
The app responds with “Hello World!” for requests to the root URL (/) or route. 
For every other path, it will respond with a 404 Not Found.
*/