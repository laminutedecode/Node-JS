// L'event loop (boucle événementielle) est un concept essentiel à la compréhension du fonctionnement de Node.js. C'est le mécanisme qui permet à Node.js d'être asynchrone et non bloquant, ce qui lui permet de gérer de nombreuses connexions simultanées sans sacrifier les performances.

// L'event loop est une boucle qui s'exécute en permanence tant que l'application Node.js est en cours d'exécution.
// Son rôle principal est de surveiller en permanence la pile d'appels (call stack) pour savoir si elle est vide ou non.

// Ce processus de vérification de la pile d'appels, suivi de l'exécution des tâches en attente dans la file d'attente des tâches, se répète en permanence tant que l'application Node.js est en cours d'exécution.
// Cela permet à Node.js de gérer de nombreuses opérations asynchrones de manière efficace sans bloquer l'exécution du code.

// Fonction asynchrone qui simule une opération longue
function asynchronousOperation(callback) {
  setTimeout(() => {
      console.log("Opération asynchrone terminée.");
      callback(); // Appel du callback une fois l'opération terminée
  }, 2000); // Simulation d'une opération prenant 2 secondes
}

// Fonction callback à exécuter après l'opération asynchrone
function callbackFunction() {
  console.log("Callback exécuté.");
}

console.log("Début de l'exécution du code.");

// Appel de la fonction asynchrone
asynchronousOperation(callbackFunction);

console.log("Fin de l'exécution du code.");



// Nous définissons une fonction asynchronousOperation qui simule une opération asynchrone en utilisant setTimeout. Cette fonction prend un callback en paramètre et sera appelée après un délai de 2 secondes.

// Nous définissons également une fonction callbackFunction qui sera utilisée comme callback après l'opération asynchrone.

// Nous affichons un message "Début de l'exécution du code." pour marquer le début de l'exécution du code.

// Nous appelons la fonction asynchronousOperation avec callbackFunction comme argument. Cependant, cette fonction est asynchrone, donc l'exécution ne sera pas bloquée.

// Nous affichons un message "Fin de l'exécution du code." après l'appel de la fonction asynchrone.

// Lorsque vous exécutez ce code, voici ce qui se passe :

// Le message "Début de l'exécution du code." est affiché.

// La fonction asynchronousOperation est appelée. Elle commence à exécuter son code, puis planifie l'exécution du callback après 2 secondes.

// Pendant ce temps, le script ne reste pas bloqué. Il continue à exécuter les lignes suivantes.
// Le message "Fin de l'exécution du code." est affiché.

// Après 2 secondes, l'opération asynchrone se termine et le callback callbackFunction est appelé, affichant "Callback exécuté.".
// Cela démontre comment Node.js gère les opérations asynchrones de manière non bloquante en utilisant l'event loop.