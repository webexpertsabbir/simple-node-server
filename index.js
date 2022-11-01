const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Simple Node Server Running');
})

const users = [
    {id: 1, name: "Sabbir", email: "wpdevsabbir@gmail.com"},
    {id: 2, name: "Sabbir1", email: "wpdevsabbir1@gmail.com"},
    {id: 3, name: "Sabbir2", email: "wpdevsabbir2@gmail.com"},
    {id: 4, name: "Sabbir3", email: "wpdevsabbir3@gmail.com"},
    {id: 5, name: "Sabbir4", email: "wpdevsabbir4@gmail.com"}
]

app.get('/users', (req, res) =>{
    res.send(users)
})

app.listen(port, () => {
    console.log(`Simple Node server runnig on port ${port}`);
})