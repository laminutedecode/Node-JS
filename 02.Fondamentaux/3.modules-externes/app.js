// Utilisation de modules tiers : Node.js offre un gestionnaire de paquets appelé npm (Node Package Manager) pour installer et gérer des modules tiers. Vous pouvez installer un module en utilisant la commande npm install <nom-du-module>. Par exemple :

// npm install lodash


// Une fois le module installé, vous pouvez l'importer et l'utiliser dans votre application :
const moduleExterne = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = moduleExterne.map(numbers, (n) => n * n);

console.log(squaredNumbers); // Affiche [1, 4, 9, 16, 25]


