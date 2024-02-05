// Les fonctions sont un élément clé de la programmation JavaScript. Elles permettent de regrouper un ensemble d'instructions et de les exécuter lorsque nécessaire. Voici les détails sur les fonctions en JavaScript :

// Déclaration de fonctions : En JavaScript, vous pouvez déclarer une fonction en utilisant le mot-clé function, suivi du nom de la fonction et des parenthèses contenant éventuellement des paramètres. Voici un exemple de déclaration de fonction :


function sayHello() {
  console.log("Bonjour !");
}
// Appel de fonctions : Une fois qu'une fonction est déclarée, vous pouvez l'appeler en utilisant son nom suivi de parenthèses. Voici un exemple :


sayHello(); // Appel de la fonction 'sayHello', affiche "Bonjour !" dans la console
// Paramètres de fonction : Les fonctions peuvent prendre des paramètres, qui sont des valeurs fournies lors de l'appel de la fonction. Les paramètres permettent de transmettre des informations à une fonction pour qu'elle les utilise dans ses instructions. Voici un exemple de fonction prenant un paramètre :


function greet(name) {
  console.log("Bonjour " + name + " !");
}
// Lors de l'appel de la fonction greet, vous devez fournir une valeur pour le paramètre name. Par exemple :


greet("John"); // Appel de la fonction 'greet' avec le paramètre "John", affiche "Bonjour John !" dans la console
// Valeur de retour : Les fonctions peuvent renvoyer une valeur à l'endroit où elles sont appelées. Pour cela, vous utilisez le mot-clé return suivi de la valeur à renvoyer. Voici un exemple :


function addNumbers(a, b) {
  return a + b;
}
// Lors de l'appel de la fonction addNumbers, elle renvoie la somme des deux paramètres fournis. Par exemple :


let sum = addNumbers(5, 3); // Appel de la fonction 'addNumbers' avec les paramètres 5 et 3
console.log(sum); // Affiche 8 dans la console
// Fonctions anonymes et expressions de fonction : En JavaScript, vous pouvez également définir des fonctions anonymes et les assigner à des variables ou les utiliser comme arguments d'autres fonctions. Voici un exemple :


let multiply = function(a, b) {
  return a * b;
};

let result = multiply(4, 6); // Appel de la fonction anonyme assignée à la variable 'multiply'
console.log(result); // Affiche 24 dans la console
// Fonctions fléchées : À partir d'ES6 (ECMAScript 2015), JavaScript prend en charge les fonctions fléchées, qui sont une syntaxe concise pour définir des fonctions. Elles offrent une syntaxe simplifiée et conservent le contexte de la fonction parente. Voici un exemple :


let divide = (a, b) => {
  return a / b;
};

let result2 = divide(10, 2); // Appel de la fonction fléchée assignée à la variable 'divide'
console.log(result2); // Affiche 5 dans la console
// Les fonctions sont un concept fondamental en JavaScript. Comprendre comment déclarer, appeler des fonctions, utiliser des paramètres et gérer les valeurs de retour est essentiel pour développer efficacement avec Node.js. Les fonctions permettent d'organiser le code, de le réutiliser et de le rendre plus modulaire et maintenable.