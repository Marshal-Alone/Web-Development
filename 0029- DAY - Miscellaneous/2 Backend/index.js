const express = require('express');
const app = express();
const port = 3000;

//      GET Response      
app.get('/register', (req, res) => {
    let { user, pass } = req.query;
    res.send(`Standard GET Response <br>
                Welcome ${user}`)
})

//      POST Response
app.use(express.urlencoded({ extended: true }))

app.post('/register', (req, res) => {
    console.log(req.body)
    let { user, pass } = req.body;
    res.send(`Standard POST Response <br> 
                Welcome ${user}`)
})



app.listen(port, () => {
    console.log(`App is listening on port : ${port}`);
})