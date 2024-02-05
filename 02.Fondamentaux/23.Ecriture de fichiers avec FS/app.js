
// comment écrire des fichiers en utilisant le module fs de Node.js. 

// Le module fs est un module intégré à Node.js qui offre des fonctionnalités pour interagir avec le système de fichiers local. Il permet de lire, écrire, mettre à jour, supprimer des fichiers, et bien plus encore.


// Méthode fs.writeFile
// La méthode fs.writeFile est utilisée pour écrire des données dans un fichier. Voici un exemple simple :


const func = require('fs');

const dataToWrite = 'Contenu à écrire dans le fichier.';

func.writeFile('monFichier.txt', dataToWrite, (err) => {
  if (err) throw err;
  console.log('Le fichier a été créé avec succès!');
});
// Dans cet exemple, le fichier monFichier.txt sera créé (ou écrasé s'il existe déjà) avec le contenu spécifié.

// 3.2 Méthode fs.appendFile
// La méthode fs.appendFile est utilisée pour ajouter des données à la fin d'un fichier existant. Si le fichier n'existe pas, il sera créé.


const fs = require('fs');

const dataToAppend = 'Nouveau contenu à ajouter au fichier.';

fs.appendFile('monFichier.txt', dataToAppend, (err) => {
  if (err) throw err;
  console.log('Le contenu a été ajouté avec succès!');
});