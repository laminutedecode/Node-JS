// Les variables sont des éléments fondamentaux de la programmation JavaScript. Elles permettent de stocker et de manipuler des données. Voici les détails sur les variables en JavaScript :

// Déclaration de variables : En JavaScript, vous pouvez déclarer des variables en utilisant le mot-clé var, let, ou const. Voici quelques exemples :


var age; // Déclaration d'une variable sans valeur initiale
let name = "John"; // Déclaration d'une variable avec une valeur initiale
const PI = 3.14; // Déclaration d'une constante avec une valeur initiale

// La différence entre var, let, et const réside dans la portée et la mutabilité de la variable. var a une portée de fonction, let a une portée de bloc et permet la réaffectation de la valeur, tandis que const a une portée de bloc et ne peut pas être réaffecté.

// Types de données : JavaScript est un langage à typage dynamique, ce qui signifie que les variables peuvent contenir des valeurs de différents types de données. Les types de données de base en JavaScript sont les suivants :

// Nombre : utilisé pour stocker des valeurs numériques (entiers et décimaux).
// Chaîne de caractères : utilisée pour stocker du texte entre des guillemets simples ou doubles.
// Booléen : utilisé pour stocker des valeurs true ou false.
// Null : utilisé pour représenter l'absence de valeur intentionnelle.
// Undefined : utilisé lorsque la variable est déclarée mais n'a pas de valeur assignée.
// Objet : utilisé pour stocker des collections de propriétés et de méthodes.
// Tableau : utilisé pour stocker des collections ordonnées d'éléments.
// Affectation de valeurs : Vous pouvez affecter une valeur à une variable en utilisant l'opérateur d'affectation (=). Par exemple :


let age = 25; // Affectation d'une valeur numérique à la variable 'age'
let name1 = "John"; // Affectation d'une chaîne de caractères à la variable 'name'
// Utilisation des variables : Une fois qu'une variable est déclarée et que lui a été assignée une valeur, vous pouvez l'utiliser dans vos opérations. Voici quelques exemples :


let x = 10;
let y = 5;
let sum = x + y; // Addition des variables 'x' et 'y', et stockage du résultat dans 'sum'
let message = "Le résultat est : " + sum; // Concaténation de variables et de chaînes de caractères
console.log(message); // Affiche "Le résultat est : 15" dans la console du navigateur
// Réaffectation de valeurs : En utilisant les variables, vous pouvez modifier leur valeur au cours de l'exécution du programme. Par exemple :


let count = 1;
count = count + 1; // Réaffectation de la variable 'count' avec une nouvelle valeur
console.log(count); // Affiche 2 dans la console du navigateur

// Portée des variables : La portée d'une variable détermine la partie du programme où elle est accessible. En JavaScript, les variables déclarées avec var ont une portée de fonction, tandis que celles déclarées avec let ou const ont une portée de bloc. Par exemple :


function example() {
  var x = 10; // Portée de fonction
  if (x > 5) {
    let y = 5; // Portée de bloc
    console.log(y); // Accès à la variable 'y' à l'intérieur du bloc
  }
  console.log(x); // Accès à la variable 'x' à l'intérieur de la fonction
  console.log(y); // Erreur : 'y' n'est pas accessible ici en dehors du bloc
}
// Dans cet exemple, la variable x est accessible à l'intérieur de la fonction example, tandis que la variable y est uniquement accessible à l'intérieur du bloc if.

// Les variables sont essentielles pour stocker et manipuler des données en JavaScript. Comprendre les concepts de déclaration, d'affectation, de types de données et de portée vous permettra d'utiliser efficacement les variables dans vos programmes Node.js.