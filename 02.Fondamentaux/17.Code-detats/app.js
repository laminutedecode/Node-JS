
// Les codes d'état HTTP, également connus sous le nom de codes de réponse HTTP, sont des valeurs numériques fournies dans les en-têtes des réponses HTTP pour indiquer le résultat d'une requête HTTP. Voici quelques-uns des codes d'état HTTP les plus couramment utilisés, classés par catégorie :



// En Node.js, la gestion des erreurs et des codes d'état HTTP peut être réalisée à l'aide de la syntaxe try-catch pour capturer les erreurs et des codes d'état HTTP pour indiquer le résultat de l'opération au client. Node.js offre généralement des modules tels que http ou des frameworks comme Express pour faciliter la manipulation des requêtes et des réponses HTTP. Voici un exemple simple en utilisant Express :

// Installer Express : Si vous n'avez pas déjà installé Express, vous pouvez le faire à l'aide de npm (Node Package Manager).

// npm install express

const express = require('express');
const app = express();
const port = 3000;

// Middleware pour le traitement des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Traitement erreur!');
});

// Route pour démontrer l'utilisation des codes d'état HTTP
app.get('/', (req, res) => {
  try {
    // Simuler une opération qui peut générer une erreur
    const result = 10 / 0;  // Cela va générer une division par zéro
    res.status(200).send(`Le résultat est : ${result}`);
  } catch (error) {
    // Capturer l'erreur et envoyer une réponse avec un code d'état approprié
    res.status(500).send('Une erreur s\'est produite : ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
// Dans cet exemple :

// Le middleware app.use est utilisé pour capturer les erreurs globales et renvoyer une réponse d'erreur avec le code d'état 500 (Internal Server Error).
// La route / contient une opération (division par zéro) qui générera une erreur. Cette erreur est capturée à l'aide du bloc try-catch, et une réponse avec le code d'état 500 est renvoyée en cas d'erreur.
// Exécution de l'exemple : Enregistrez ce script dans un fichier (par exemple, app.js) et exécutez-le avec Node.js.

// 2xx (Succès) : La requête a été reçue, comprise et acceptée avec succès.
// 200 OK : La requête a réussi.
// 201 Created : La requête a été traitée avec succès, et une nouvelle ressource a été créée.
// 204 No Content : La requête a réussi, mais la réponse n'a pas de corps (par exemple, lors d'une suppression).

// 3xx (Redirection) : Indique que des actions supplémentaires doivent être prises pour compléter la requête.
// 301 Moved Permanently : La ressource demandée a été déplacée de manière permanente vers un nouvel emplacement.
// 302 Found : La ressource demandée se trouve temporairement à un autre emplacement.
// 304 Not Modified : Indique que la ressource n'a pas été modifiée depuis la dernière requête.

// 4xx (Erreur client) : La requête contient une syntaxe incorrecte ou ne peut pas être traitée du côté du serveur.
// 400 Bad Request : La requête est incorrecte ou mal formée.
// 401 Unauthorized : L'accès à la ressource est refusé en raison d'informations d'identification manquantes ou non valides.
// 403 Forbidden : L'accès à la ressource est interdit, même avec des informations d'identification valides.
// 404 Not Found : La ressource demandée n'a pas été trouvée.

// 5xx (Erreur serveur) : Le serveur a rencontré une situation qu'il ne sait pas comment gérer.
// 500 Internal Server Error : Une erreur générique côté serveur s'est produite.
// 502 Bad Gateway : Le serveur, tout en agissant comme une passerelle ou un proxy, a reçu une réponse invalide.
// 503 Service Unavailable : Le serveur n'est pas prêt à gérer la requête. Il peut s'agir d'une surcharge temporaire ou de maintenance du serveur.
// Cette liste n'est pas exhaustive, mais elle couvre certains des codes d'état HTTP les plus couramment rencontrés. Les spécifications HTTP définissent de nombreux autres codes d'état, chacun ayant une signification spécifique.