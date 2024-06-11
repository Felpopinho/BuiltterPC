const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu-usuario-mysql',
  password: 'sua-senha-mysql',
  database: 'seu-banco-de-dados'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados Mysql:', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados Mysql');
});

app.get('/api/dados', (req, res) => {
  connection.query('SELECT * FROM tabela', (err, results) => {
    if (err) {
      console.error('Erro ao executar a query:', err);
      res.status(500).json({ error: 'Erro ao buscar dados.' });
      return;
    }
    res.json(results);
  });
});

app.listen(5173, () => {
  console.log('Servidor backend rodando na porta 5173');
});