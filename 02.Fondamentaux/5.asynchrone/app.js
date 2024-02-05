// En programmation, une opération asynchrone est une opération qui est exécutée de manière non bloquante, ce qui signifie que le programme ne doit pas attendre que cette opération se termine avant de passer à l'opération suivante. Au lieu de bloquer l'exécution, le programme peut continuer à exécuter d'autres tâches ou à répondre à d'autres événements pendant que l'opération asynchrone est en cours.

// Dans le contexte de Node.js, les opérations asynchrones sont souvent utilisées pour effectuer des tâches qui prennent du temps ou qui sont bloquantes, telles que les opérations d'entrée/sortie (lecture/écriture de fichiers, requêtes réseau, etc.) ou les opérations de base de données. Au lieu de bloquer le thread principal d'exécution, Node.js utilise un mécanisme appelé "callbacks", "promises" ou "async/await" pour gérer les opérations asynchrones.

// Exemple d'opération asynchrone avec une fonction simple
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function performTask() {
  console.log('Début de la tâche');
  await wait(2000); // Attente de 2 secondes
  console.log('Fin de la tâche');
}

performTask();
console.log('Le programme continue à s\'exécuter...');


// Dans cet exemple, nous avons une fonction wait qui renvoie une promesse qui se résout après un délai spécifié en millisecondes. Ensuite, nous avons une fonction performTask déclarée avec le mot-clé async, ce qui indique que cette fonction contient des opérations asynchrones.

// Dans la fonction performTask, nous affichons "Début de la tâche", puis nous attendons pendant 2 secondes en utilisant await avec la fonction wait. L'utilisation de await permet à l'exécution de la fonction de se mettre en pause jusqu'à ce que la promesse retournée par wait soit résolue. Après l'attente de 2 secondes, nous affichons "Fin de la tâche".

// Lorsque nous appelons performTask(), cela démarre l'exécution de la fonction asynchrone. Cependant, le programme peut continuer à s'exécuter et afficher "Le programme continue à s'exécuter..." sans attendre la fin de la tâche asynchrone.

// L'utilisation de async/await facilite la gestion des opérations asynchrones en les écrivant de manière plus linéaire, ce qui rend le code plus lisible et plus proche de la syntaxe synchrone. Cependant, il est important de noter que les fonctions utilisant await doivent être marquées avec le mot-clé async pour pouvoir utiliser await.
