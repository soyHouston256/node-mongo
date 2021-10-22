const express = require('express')
const mongoose = require('mongoose')
const Mascota = require('./models/mascota')


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const user =  '';
const password = '';
//const uri = 'mongodb://localhost:27017/store';
const uri = 'mongodb+srv://tuchamba:ebcnemj987@tuchamba.ikhxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
