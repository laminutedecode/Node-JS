
// La phase d'IO polling dans l'event loop de Node.js est une étape où Node.js vérifie si des opérations d'entrée/sortie (I/O) asynchrones ont été achevées ou si des événements liés à l'I/O sont survenus. C'est une partie importante du cycle de vie de l'event loop de Node.js.


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


// Nous commençons par importer le module fs (file system) de Node.js, qui fournit des fonctionnalités pour travailler avec le système de fichiers.

// Nous affichons "Début de l'exécution du code" pour marquer le début de l'exécution du script.

// Nous effectuons une opération de lecture de fichier asynchrone à l'aide de la fonction fs.readFile(). Cette fonction lit le contenu du fichier example.txt de manière asynchrone. Elle prend en paramètre le nom du fichier, l'encodage ('utf8' dans cet exemple) et un callback qui sera appelé une fois que la lecture du fichier sera terminée.

// Nous affichons "Fin de l'exécution du code".

// Lorsque l'opération de lecture de fichier est terminée, le callback associé est exécuté. Si une erreur s'est produite lors de la lecture du fichier, le callback reçoit cette erreur en premier paramètre. Sinon, le contenu du fichier est transmis en deuxième paramètre.