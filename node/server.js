const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
  const mysql = require('mysql')

app.get('/', (req,res) => {
  const con = mysql.createConnection(config)
  con.query('SELECT name FROM people', (err, rows) => {
  var nomes = ""
    if (err) throw err
    rows.forEach(row => {
      nomes = nomes + "<li>" + row.name + "</li>"
    });
    res.send('<h1>Full Cycle</h1> <br/> ' + "<ul>"+nomes+"</ul>")
    con.end()

  })

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
