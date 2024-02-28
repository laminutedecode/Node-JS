// La "close queue" (file d'attente de fermeture) n'est pas un concept standard dans l'event loop de Node.js. Cependant, lors de la fermeture d'une application Node.js ou d'un serveur, il existe des tâches de nettoyage à effectuer, comme la fermeture de connexions réseau, la libération de ressources, etc. Ces tâches peuvent être exécutées avant que l'application ou le serveur se ferme complètement.

// Voici un exemple simplifié de fermeture d'un serveur HTTP dans Node.js, illustrant comment vous pourriez utiliser une "close queue" pour gérer les opérations de fermeture :

const http = require('http');

// Création du serveur HTTP
const server = http.createServer((req, res) => {
    // Logique de traitement des requêtes
    res.end('Hello World!');
});

// Ecoute sur le port 3000
server.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});

// Gestion de la fermeture du serveur
function closeServer() {
    console.log('Fermeture du serveur...');
    server.close(() => {
        console.log('Serveur fermé.');
    });
}

// Ecoute de l'événement SIGINT (signal d'interruption, généralement envoyé par CTRL+C)
process.on('SIGINT', () => {
    closeServer();
});


// Explication détaillée :

// Nous créons un serveur HTTP qui écoute sur le port 3000 et répond aux requêtes avec "Hello World!".

// Nous définissons une fonction closeServer() pour gérer la fermeture du serveur. Cette fonction ferme le serveur en appelant server.close().

// Nous écoutons l'événement SIGINT (signal d'interruption) envoyé lorsque l'utilisateur appuie sur CTRL+C pour quitter l'application.

// Lorsque l'événement SIGINT est déclenché, nous appelons la fonction closeServer() pour fermer proprement le serveur avant de quitter l'application.

// L'utilisation d'une "close queue" n'est pas nécessaire dans cet exemple, car Node.js fournit des mécanismes de gestion de la fermeture d'applications et de serveurs via des événements et des callbacks. Cependant, dans des scénarios plus complexes, vous pourriez avoir besoin de gérer des opérations de nettoyage plus complexes, et c'est là que vous pourriez utiliser une "close queue" personnalisée pour gérer ces tâches de fermeture.