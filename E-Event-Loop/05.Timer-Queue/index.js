// La "timer queue" (file d'attente de temporisation) fait également partie du fonctionnement de l'event loop de Node.js. Elle est utilisée pour gérer les temporisations, c'est-à-dire les fonctions planifiées pour être exécutées après un certain délai à l'aide de la fonction setTimeout().


console.log('Début de l\'exécution du code');

// Tâche asynchrone planifiée avec setTimeout
setTimeout(() => {
    console.log('Tâche asynchrone planifiée avec setTimeout exécutée');
}, 2000); // Exécution après 2 secondes

console.log('Fin de l\'exécution du code');

// Nous commençons par afficher "Début de l'exécution du code".

// Ensuite, nous planifions une tâche asynchrone à exécuter après un délai de 2000 millisecondes (2 secondes) en utilisant setTimeout.

// Nous affichons "Fin de l'exécution du code".



// Lorsque vous exécutez ce code, voici ce qui se passe :
// "Début de l'exécution du code" est affiché.
// Ensuite, une tâche asynchrone est planifiée avec setTimeout. Cette tâche est ajoutée à la timer queue avec un délai de 2000 millisecondes.
// "Fin de l'exécution du code" est affiché.
// Pendant ce temps, l'event loop surveille en permanence la timer queue.
// Après que le délai spécifié par setTimeout s'est écoulé (2 secondes dans cet exemple), la tâche asynchrone est retirée de la timer queue et ajoutée à la microstack queue pour être exécutée.
// L'event loop exécute alors la tâche asynchrone et affiche "Tâche asynchrone planifiée avec setTimeout exécutée".