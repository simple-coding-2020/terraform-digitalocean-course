const mysql = require('mysql')

const connection = mysql.createConnection({
  host     : 'XXX',
  user     : 'YYY',
  password : 'ZZZ'
})

connection.connect((err) => {
  if (err) throw err
})
 
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  connection.query('SELECT text FROM quotes WHERE second = ?', [second], (error, results, fields) => {
    if (error) throw error
    res.send(results[0].quote)
  })
})

app.listen(8080)

