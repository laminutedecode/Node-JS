// Importation des modules express et express-session
const express = require('express');
const session = require('express-session');

// Création d'une instance de l'application Express
const app = express();

// Configuration du middleware de session
app.use(session({
  secret: 'votreClefSecrete',  // Clé secrète utilisée pour signer les cookies de session
  resave: false,  // Désactive la sauvegarde de la session à chaque requête
  saveUninitialized: true,  // Sauvegarde la session même si elle n'a pas été modifiée
  // Vous pouvez ajouter d'autres options selon vos besoins
}));

// Autres middlewares et routes
// ...

// Configuration du serveur pour écouter sur le port 3000
app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});

// Route pour stocker des données dans la session
app.get('/storeData/:data', (req, res) => {
  // Récupération des données depuis les paramètres de l'URL
  const data = req.params.data;
  
  // Stockage des données dans la session sous la clé 'myData'
  req.session.myData = data;

  // Réponse envoyée au client indiquant que les données ont été stockées dans la session
  res.send('Données stockées dans la session');
});

// Route pour récupérer les données stockées dans la session
app.get('/getData', (req, res) => {
  // Récupération des données stockées dans la session, ou 'Aucune donnée enregistrée' si aucune donnée n'est présente
  const storedData = req.session.myData || 'Aucune donnée enregistrée';

  // Réponse envoyée au client avec les données stockées dans la session
  res.send(`Données stockées dans la session : ${storedData}`);
});
