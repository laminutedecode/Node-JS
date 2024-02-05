// un middleware est une fonction qui a accès à l'objet de requête (request object - req), à l'objet de réponse (response object - res), et à la fonction suivante dans le cycle de requête-réponse de l'application web. Un middleware peut effectuer des actions sur la requête, la réponse, ou exécuter du code avant que la requête n'atteigne sa destination finale.

// Le cycle de requête-réponse dans Node.js suit généralement l'ordre suivant :

// Requête (req): La requête est générée par le client et reçue par le serveur.

// Middleware(s): Les middlewares interviennent à ce stade. Ils peuvent effectuer des opérations sur la requête, modifier la réponse, ou effectuer des tâches spécifiques. Les middlewares sont exécutés dans l'ordre où ils sont définis.

// Route handler: Le gestionnaire de route (route handler) est la fonction qui traite la requête et génère la réponse finale. C'est généralement là que se trouve la logique principale de votre application.

// Réponse (res): La réponse générée par le gestionnaire de route est renvoyée au client.

// Les middlewares sont souvent utilisés pour effectuer des tâches communes à de nombreuses routes, telles que l'authentification, la gestion des sessions, la journalisation, la compression des données, etc.

const express = require('express');
const app = express();

// Middleware d'exemple
app.use((req, res, next) => {
  console.log('Middleware exécuté.');
  // Vous pouvez effectuer des opérations sur req ou res ici
  next(); // Appel à next() pour passer au middleware suivant ou au gestionnaire de route
});

// Gestionnaire de route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Lancement du serveur
app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
// Dans cet exemple, le middleware utilise la fonction use pour spécifier qu'il doit être exécuté pour toutes les requêtes. Le middleware imprime simplement un message dans la console, mais vous pouvez y ajouter des fonctionnalités plus avancées selon vos besoins.

// N'oubliez pas que l'ordre des middlewares est important. Lorsque vous définissez des middlewares avec use, ils seront exécutés dans l'ordre où ils sont définis.



// Express Middleware:
// body-parser: Pour analyser les corps de requête au format JSON, Raw, Text ou URL-encoded.
// cookie-parser: Pour analyser les cookies de la requête.
// morgan: Pour la journalisation des requêtes HTTP.
// helmet: Pour améliorer la sécurité en configurant divers en-têtes HTTP.
// cors: Pour gérer les politiques de partage des ressources inter-origines (CORS).

// Sécurité:
// csurf: Pour protéger contre les attaques CSRF.
// helmet: Pour configurer divers en-têtes de sécurité.

// Authentification et Autorisation:
// passport: Pour l'authentification.
// express-jwt: Pour l'authentification basée sur JSON Web Tokens (JWT).
// express-session: Pour gérer les sessions.

// Compression et Performance:
// compression: Pour compresser les réponses HTTP.
// response-time: Pour mesurer le temps de réponse du serveur.
// limiter: Pour limiter le taux de requêtes.

// Validation:
// express-validator: Pour valider les données de la requête.

// Gestion des Erreurs:
// errorhandler: Pour la gestion centralisée des erreurs.
// express-status-monitor: Pour surveiller l'état du serveur.

// Traitement des Fichiers:
// multer: Pour le traitement des formulaires de téléchargement de fichiers.

// Templating Engines:
// pug (anciennement Jade)
// ejs: Moteurs de template populaires pour générer des vues HTML.

// Logging:
// winston: Pour la gestion des journaux.

// Monitoring et Profiling:
// newrelic: Pour la surveillance des performances.
// clinicjs: Pour le profilage des applications Node.js.

// Cela représente seulement une petite sélection de middlewares disponibles. En fonction des besoins spécifiques de votre application, vous pouvez choisir d'utiliser certains de ces middlewares ou d'en rechercher d'autres adaptés à vos besoins particuliers.