const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true})

const app = express()
const mainRoutes = require('./routes/main')

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(mainRoutes)

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})