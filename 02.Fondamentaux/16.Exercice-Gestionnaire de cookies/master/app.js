// Importer le module HTTP intégré à Node.js
const http = require('http');

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
    // Analyser les cookies de la requête
    const cookies = parseCookies(req);

    // Initialiser le compteur à 1 si le cookie n'existe pas
    const counter = cookies.counter ? parseInt(cookies.counter) + 1 : 1;

    // Mettre à jour le cookie avec le nouveau compteur
    res.setHeader('Set-Cookie', `counter=${counter}`);

    // Envoyer la réponse au client
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Nombre de visites : ${counter}`);
});

// Fonction pour analyser les cookies de la requête
function parseCookies(req) {
    const cookieHeader = req.headers.cookie;
    const cookies = {};

    if (cookieHeader) {
        cookieHeader.split(';').forEach(cookie => {
            const parts = cookie.split('=');
            cookies[parts[0].trim()] = parts[1].trim();
        });
    }

    return cookies;
}

// Écouter le serveur sur le port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
