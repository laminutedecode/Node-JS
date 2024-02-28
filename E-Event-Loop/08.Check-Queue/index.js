// La "check queue" (file d'attente de vérification) est une file d'attente qui fait partie de l'event loop de Node.js. Elle intervient après la phase d'IO polling et avant la phase de fermeture. La check queue est utilisée pour gérer les callbacks de certaines opérations asynchrones, comme les timers (setTimeout() et setInterval()) et les fonctions setImmediate().

// Voici un exemple illustrant l'utilisation de la check queue avec setImmediate() :


console.log('Début de l\'exécution du code');

// Callback de setImmediate
setImmediate(() => {
    console.log('Callback de setImmediate exécuté');
});

console.log('Fin de l\'exécution du code');


// Explication détaillée :

// Nous commençons par afficher "Début de l'exécution du code".

// Ensuite, nous utilisons la fonction setImmediate() pour planifier un callback à être exécuté lors de la prochaine itération de la boucle d'event loop.

// Nous affichons "Fin de l'exécution du code".

// Lorsque vous exécutez ce code, voici ce qui se passe :

// "Début de l'exécution du code" est affiché.
// Ensuite, le callback de setImmediate() est planifié pour être exécuté lors de la prochaine itération de l'event loop.
// "Fin de l'exécution du code" est affiché.
// Lorsque toutes les étapes précédentes sont terminées, l'event loop vérifie s'il y a des callbacks dans la check queue à exécuter. Il trouve le callback de setImmediate() et l'exécute.
// "Callback de setImmediate exécuté" est affiché.
// Cela montre comment la check queue est utilisée pour planifier et exécuter des callbacks asynchrones à l'aide de setImmediate() dans l'event loop de Node.js.