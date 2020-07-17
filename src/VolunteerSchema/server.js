const express = require('express')
const app = express()
const PORT = process.env.PORT||4000
app.use(express.json());
const cors = require('cors')
app.use(cors ());
const db = require('./index.js')


app.post('/Vol', function (req, res) {
  var data = req.body
  console.log(data)
 db.saveData(data)
 res.statusCode = 201;
  res.end("saved");
})
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))