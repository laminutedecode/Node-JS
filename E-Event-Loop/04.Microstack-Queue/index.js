// "microstack queue" (file d'attente de microtâches), qui fait partie du fonctionnement de l'event loop de Node.js. La microstack queue est utilisée pour gérer les microtâches, qui sont des tâches asynchrones de priorité élevée qui doivent être exécutées avant que le code puisse reprendre son exécution normale.


console.log('Début de l\'exécution du code');

// Tâche asynchrone 1
setTimeout(() => {
    console.log('Tâche asynchrone 1 terminée');
}, 0);

// Tâche asynchrone 2
Promise.resolve().then(() => {
    console.log('Tâche asynchrone 2 terminée');
});

console.log('Fin de l\'exécution du code');


// Nous commençons par afficher "Début de l'exécution du code".
// Ensuite, nous avons deux tâches asynchrones :
// La première est une tâche planifiée avec setTimeout avec un délai de 0 milliseconde. Même si le délai est de 0 milliseconde, cette fonction est toujours exécutée de manière asynchrone.
// La deuxième tâche est une microtâche, créée par la résolution d'une promesse avec Promise.resolve().then().
// Nous affichons "Fin de l'exécution du code".

// Lorsque vous exécutez ce code, voici ce qui se passe :

// "Début de l'exécution du code" est affiché.
// Ensuite, la première tâche asynchrone (setTimeout) est planifiée pour être exécutée, mais elle est mise en attente car il y a du code synchrone à exécuter avant.
// La deuxième tâche asynchrone (la microtâche créée par la promesse) est ajoutée à la microstack queue.
// "Fin de l'exécution du code" est affiché.
// Une fois que le code synchrone est terminé, l'event loop regarde la microstack queue. Puisqu'il y a une microtâche en attente, elle est retirée de la queue et exécutée. "Tâche asynchrone 2 terminée" est affiché.
// Enfin, l'event loop regarde la file d'attente des tâches et exécute la tâche planifiée par setTimeout. "Tâche asynchrone 1 terminée" est affiché.
