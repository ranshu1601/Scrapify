const express = require('express')
const app = express()
const port = 4000
const request = require('./request');
var cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/request',request);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})