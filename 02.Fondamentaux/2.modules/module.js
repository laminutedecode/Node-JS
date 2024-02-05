
// Création d'un module : Pour créer un module, vous pouvez définir une fonction, une classe, ou assigner des objets et des variables à module.exports ou exports. Voici un exemple :

exports.getHelloSync = () => {
console.log('Hello');

}

// Exports:
// Le mot-clé "exports" est utilisé pour exposer des variables, fonctions ou objets depuis un module Node.js afin qu'ils puissent être utilisés par d'autres modules. Lorsque vous créez un module en Node.js, vous pouvez définir des membres à exporter en les assignant à la propriété "exports" de l'objet module.exports.



// vous pouvez egalement exporter des variables fonction etc...

exports.age = 30;

// /Vous pouvez créer des variables globales

global.str = 'Jonathan';


// Global:
// Le mot-clé "global" est un objet spécial en Node.js qui représente l'espace de noms global. Il permet d'accéder à des variables ou des fonctions à partir de n'importe quel module sans avoir à les importer explicitement. Cependant, il est généralement déconseillé d'utiliser "global" de manière abusive, car cela peut rendre le code moins maintenable et plus difficile à comprendre.

