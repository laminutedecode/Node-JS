// Importation d'un module : Pour utiliser un module dans un autre fichier, vous devez l'importer en utilisant la fonction require(). La valeur retournée par require() est l'objet exporté du module. Voici un exemple :

const Module = require('./module')


const resultat = Module.getHelloSync()



console.log(Module.age);

console.log(global.str);

// Cependant, l'utilisation de variables globales de cette manière peut rendre le code plus fragile et peut entraîner des effets de bord indésirables. Il est recommandé d'utiliser des modules et des exports explicites pour gérer la portée des variables et éviter les dépendances implicites entre les modules.