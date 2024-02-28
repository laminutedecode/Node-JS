// La "IO queue" (file d'attente d'entrée/sortie) est une autre file d'attente importante dans l'event loop de Node.js. Elle est utilisée pour gérer les opérations d'entrée/sortie (I/O) asynchrones, telles que la lecture ou l'écriture de fichiers, les requêtes réseau ou les opérations de base de données.

const fs = require('fs');

console.log('Début de l\'exécution du code');

// Lecture de fichier asynchrone
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier :', err);
        return;
    }
    console.log('Contenu du fichier :', data);
});

console.log('Fin de l\'exécution du code');


// Nous commençons par afficher "Début de l'exécution du code".

// Ensuite, nous effectuons une opération de lecture de fichier asynchrone à l'aide de la fonction fs.readFile(). Cette fonction lit le contenu du fichier example.txt de manière asynchrone.

// Nous affichons "Fin de l'exécution du code".

// Lorsque vous exécutez ce code, voici ce qui se passe :

// "Début de l'exécution du code" est affiché.
// Ensuite, une opération de lecture de fichier asynchrone est effectuée. Cette opération est ajoutée à la IO queue pour être traitée de manière asynchrone.
// "Fin de l'exécution du code" est affiché.
// Pendant que l'event loop continue à surveiller la file d'attente, le code suivant est exécuté.
// Lorsque l'opération de lecture de fichier est terminée, elle est retirée de la IO queue et ajoutée à la microstack queue pour exécuter le callback associé.
// Le callback est exécuté, et le contenu du fichier est affiché dans la console.