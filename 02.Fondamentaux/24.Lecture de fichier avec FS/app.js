// Le module fs de Node.js offre différentes méthodes pour la lecture de fichiers, permettant ainsi de s'adapter aux besoins spécifiques de votre application.

// 2. Méthodes de lecture de fichiers

// 2.1 Méthode fs.readFile (asynchrone)
// La méthode fs.readFile est utilisée pour lire le contenu d'un fichier de manière asynchrone. 


const fs1 = require('fs');

fs1.readFile('monFichier.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenu du fichier :\n', data);
});
// Dans cet exemple, le fichier monFichier.txt est lu de manière asynchrone, et une fois la lecture terminée, la fonction de rappel est appelée avec les éventuelles erreurs et les données lues.

// 2.2 Méthode fs.readFileSync (synchrone)
// La méthode fs.readFileSync est utilisée pour lire le contenu d'un fichier de manière synchrone. Elle bloque le code jusqu'à ce que la lecture soit terminée. Voici un 
const fs2 = require('fs');

try {
  const data = fs2.readFileSync('monFichier.txt', 'utf8');
  console.log('Contenu du fichier :\n', data);
} catch (err) {
  console.error(err);
}