const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/contact', (req, res)=> {
  res.sendFile(path.join(__dirname, 'contact.html'));
})

app.listen(PORT, ()=> {
  console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
})