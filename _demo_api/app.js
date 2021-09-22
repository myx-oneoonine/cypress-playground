const express = require('express')
const app = express()
const port = 8080
const apiVersion1 = express.Router();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

apiVersion1.get('/', (req, res) => {
    res.send('HELLO WORLD !!')
})

apiVersion1.post('/', (req, res) => {
    console.log(req.body);
    res.send({ "result": "complete testing" });
})


app.use('/api/v1', apiVersion1)
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`server start on localhost:${port}`)
})