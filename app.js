const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
const dbUrl = "mongodb://kjg1:99openthis99@ds235788.mlab.com:35788/crudexercizesa"
mongoose.connect(dbUrl).catch(err => console.error(`ERROR: ${err}`));

// Middlewares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', (req, res) => res.send("Hello World!"))
app.use('/posts', require('./server/routes/post.js'))

app.listen(port, () => console.log(`App is listening on ${port}!`))
