// La convention Error-First (ou convention "Erreur d'abord") est une pratique courante en Node.js pour gérer les erreurs dans les fonctions asynchrones qui utilisent des callbacks. Elle consiste à définir la première valeur de rappel (callback) comme étant réservée à l'erreur, le cas échéant.

// Voici un exemple pour mieux comprendre :

// Fonction asynchrone qui divise deux nombres
function divideNumbers(dividend, divisor, callback) {
  if (divisor === 0) {
    // Génération d'une erreur si le diviseur est égal à zéro
    const error = new Error("Division by zero");
    callback(error);
  } else {
    const result = dividend / divisor;
    callback(null, result);
  }
}

// Utilisation de la fonction divideNumbers avec un callback
divideNumbers(10, 2, (error, result) => {
  if (error) {
    console.error("Une erreur s'est produite :", error);
  } else {
    console.log("Résultat de la division :", result);
  }
});


// Dans cet exemple, nous avons une fonction divideNumbers qui divise deux nombres donnés. Elle prend le dividende, le diviseur et une fonction de rappel en paramètres. Si le diviseur est égal à zéro, nous générons une nouvelle instance d'erreur et l'envoyons à la fonction de rappel en tant que premier paramètre.

// Sinon, si la division peut être effectuée sans erreur, nous envoyons null en tant que premier paramètre de rappel pour indiquer l'absence d'erreur. Le résultat de la division est ensuite envoyé en tant que deuxième paramètre de rappel.

// Lorsque nous utilisons la fonction divideNumbers, nous passons une fonction de rappel qui prend deux paramètres : error et result. Si error n'est pas null, cela signifie qu'une erreur s'est produite et nous affichons le message d'erreur correspondant. Sinon, nous affichons simplement le résultat de la division.

// La convention Error-First permet de gérer les erreurs de manière plus claire et cohérente dans les fonctions asynchrones avec des callbacks. En vérifiant le premier paramètre de rappel, vous pouvez facilement détecter et traiter les erreurs, le cas échéant, sans interrompre le flux d'exécution normal du programme.