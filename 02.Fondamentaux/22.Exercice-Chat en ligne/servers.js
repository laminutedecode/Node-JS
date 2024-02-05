// Import des modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Configuration du serveur Express
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serveur statique pour les fichiers HTML, CSS, etc.
app.use(express.static('public'));


// Gestion de la connexion des utilisateurs
io.on('connection', (socket) => {
  console.log('Nouvelle connexion');

  // Gestion de la réception du pseudo
  socket.on('set pseudo', (pseudo) => {
    socket.pseudo = pseudo;
  });

  // Gestion de la réception des messages
  socket.on('chat message', (message) => {
    console.log(`Message reçu : ${message}`);
  
    // Assurez-vous que socket.pseudo est défini
    const pseudo = socket.pseudo || 'Anonyme';

    // Diffusion du message à tous les utilisateurs
    io.emit('chat message', { pseudo: pseudo, message: message });
  });

  // Gestion de la déconnexion des utilisateurs
  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});



// Démarrage du serveur
const PORT = process.env.PORT ||3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
