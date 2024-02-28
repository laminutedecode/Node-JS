// Le "Network I/O" (Input/Output réseau) fait référence aux opérations de communication avec d'autres systèmes ou périphériques via un réseau. En Node.js, cela implique généralement l'utilisation de modules intégrés tels que net pour les connexions TCP ou http pour les communications HTTP.


// Un serveur TCP est un programme informatique qui écoute et répond aux requêtes des clients utilisant le protocole TCP (Transmission Control Protocol). TCP est l'un des principaux protocoles utilisés pour la communication sur Internet. Voici quelques points importants à savoir sur les serveurs TCP :
const net = require('net');

// Création du serveur TCP
const server = net.createServer(socket => {
    // Message à envoyer aux clients connectés
    const message = "Bienvenue sur le serveur TCP!\n";

    // Envoyer le message au client
    socket.write(message);

    // Gérer les données envoyées par le client
    socket.on('data', data => {
        console.log(`Données reçues du client: ${data}`);
    });

    // Gérer la fermeture de la connexion
    socket.on('close', () => {
        console.log('Connexion fermée.');
    });

    // Gérer les erreurs de connexion
    socket.on('error', err => {
        console.error('Erreur de connexion:', err);
    });
});

// Ecouter sur le port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Serveur TCP en attente de connexions sur le port ${port}`);
});
