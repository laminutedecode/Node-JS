// Les blocs try et catch sont utilisés en programmation pour gérer les erreurs de manière contrôlée. En JavaScript (et donc Node.js), ils sont utilisés pour entourer un bloc de code où des erreurs peuvent se produire, et pour capturer ces erreurs de manière à ce que votre programme ne s'arrête pas brusquement en cas de problème.

// Voici un exemple simple en utilisant Node.js pour lire un fichier avec le module fs. Dans cet exemple, nous allons essayer de lire un fichier qui n'existe pas, ce qui déclenchera une erreur. Nous allons utiliser try et catch pour gérer cette erreur.

const fs = require('fs');

// Nom du fichier qui n'existe pas
const nomFichier = 'fichier-inexistant.txt';

try {
  // Tentative de lecture du fichier
  const contenuFichier = fs.readFileSync(nomFichier, 'utf-8');
  console.log('Contenu du fichier :', contenuFichier);
} catch (erreur) {
  // Si une erreur se produit, elle est capturée ici
  console.error('Une erreur s\'est produite :', erreur.message);
}

// Ce code sera exécuté même s'il y a eu une erreur
console.log('Le programme continue...');


// Dans cet exemple :

// Nous tentons de lire le contenu d'un fichier (fs.readFileSync). Si le fichier n'existe pas, cela déclenchera une erreur.

// Le bloc try entoure le code où l'erreur peut se produire. Si une erreur survient à l'intérieur du bloc try, le contrôle est transféré au bloc catch.

// Le bloc catch est là pour gérer l'erreur. Nous affichons simplement le message d'erreur à la console. Vous pourriez également effectuer d'autres actions ici, comme enregistrer l'erreur dans un journal ou prendre des mesures pour résoudre le problème.

// Le programme continue à s'exécuter normalement après le bloc catch. Si vous n'utilisiez pas de try et catch, le programme s'arrêterait brusquement dès qu'une erreur se produirait.

// L'utilisation de try et catch permet de rendre votre code plus robuste en gérant les erreurs de manière appropriée.