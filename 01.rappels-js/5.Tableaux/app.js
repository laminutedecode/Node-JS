// La manipulation des tableaux est une opération courante en JavaScript. Les tableaux sont utilisés pour stocker et manipuler des collections ordonnées d'éléments. Voici les détails sur la manipulation des tableaux en JavaScript :

// Déclaration d'un tableau : Vous pouvez déclarer un tableau en utilisant des crochets ([]) et en y ajoutant les éléments séparés par des virgules. Voici un exemple :


let fruits = ["pomme", "banane", "orange"];
// Accès aux éléments d'un tableau : Vous pouvez accéder aux éléments d'un tableau en utilisant leur indice. L'indice commence à zéro pour le premier élément. Voici un exemple :




console.log(fruits[0]); // Affiche "pomme"
console.log(fruits[1]); // Affiche "banane"
console.log(fruits[2]); // Affiche "orange"
// Modification des éléments d'un tableau : Vous pouvez modifier les éléments d'un tableau en accédant à leur indice et en leur assignant une nouvelle valeur. Voici un exemple :


fruits[1] = "kiwi";

console.log(fruits); // Affiche ["pomme", "kiwi", "orange"]
// Longueur d'un tableau : Pour obtenir le nombre d'éléments d'un tableau, vous pouvez utiliser la propriété length. Voici un exemple :


console.log(fruits.length); // Affiche 3
// Ajout d'éléments à un tableau : Vous pouvez ajouter de nouveaux éléments à un tableau en utilisant les méthodes push() et unshift(). La méthode push() ajoute un élément à la fin du tableau, tandis que unshift() ajoute un élément au début du tableau. Voici un exemple :



fruits.push("kiwi");
fruits.unshift("raisin");

console.log(fruits); // Affiche ["raisin", "pomme", "banane", "orange", "kiwi"]
// Suppression d'éléments d'un tableau : Vous pouvez supprimer des éléments d'un tableau en utilisant les méthodes pop() et shift(). La méthode pop() supprime le dernier élément du tableau, tandis que shift() supprime le premier élément du tableau. Voici un exemple :




fruits.pop();
fruits.shift();

console.log(fruits); // Affiche ["banane"]
// Concaténation de tableaux : Vous pouvez concaténer plusieurs tableaux en utilisant l'opérateur de concaténation (+) ou la méthode concat(). Voici un exemple :


let fruits1 = ["pomme", "banane"];
let fruits2 = ["orange", "kiwi"];
let fruits3 = fruits1.concat(fruits2);

// console.log(fruits3); // Affiche ["pomme", "banane", "orange", "kiwi"]
// Boucler à travers un tableau : Vous pouvez utiliser une boucle for...of pour itérer sur les éléments d'un tableau. Voici un exemple :


for (let fruit of fruits) {
  console.log(fruit);
}
// Cela affichera chaque élément du tableau fruits ("pomme", "banane", "orange").

// Les tableaux en JavaScript offrent de nombreuses fonctionnalités pour manipuler et travailler avec des collections de données. En comprenant comment déclarer, accéder, modifier, ajouter, supprimer des éléments et effectuer des opérations sur les tableaux, vous pouvez manipuler efficacement les données et réaliser diverses tâches de traitement des données dans vos programmes JavaScript.