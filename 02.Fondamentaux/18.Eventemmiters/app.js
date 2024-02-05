// EventEmitter est un module du noyau Node.js qui permet de mettre en œuvre le modèle de conception de l'émetteur d'événements. Cela fournit une manière de publier et de souscrire à des événements dans Node.js.

const EventEmitter = require('events');
// importer le module events dans Node.js et créer une instance d'un émetteur d'événements.
const myEmitter = new EventEmitter();
// nous créons une instance de cette classe avec new EventEmitter() et l'assignons à la variable myEmitter. Vous pouvez maintenant utiliser myEmitter pour émettre et écouter des événements.


// on(event, listener) :
// Explication : Associe une fonction (le gestionnaire d'événements) à un événement spécifique.

myEmitter.on('event', () => {
  console.log('L\'événement a été déclenché !');
});



// addListener(event, listener) :
// Explication : Identique à on(), ajoute un gestionnaire d'événements pour un événement spécifique.
myEmitter.addListener('event', () => {
  console.log('L\'événement a été déclenché !');
});

// once(event, listener) :
// Explication : Associe un gestionnaire d'événements qui ne sera déclenché qu'une seule fois.
myEmitter.once('event', () => {
  console.log('Cet événement ne se produira qu\'une fois !');
});

// emit(event, [arg1], [arg2], [...]) :
// Explication : Déclenche un événement spécifique, avec la possibilité de passer des arguments aux gestionnaires d'événements.
myEmitter.on('sum', (a, b) => {
  console.log(a + b);
});

myEmitter.emit('sum', 2, 3); // Affiche 5

// removeListener(event, listener) :
// Explication : Supprime un gestionnaire d'événements spécifique associé à un événement.
const handler = () => console.log('Gestionnaire d\'événements');
myEmitter.on('event', handler);

// Plus tard, vous pouvez le supprimer
myEmitter.removeListener('event', handler);

// removeAllListeners([event]) :
// Explication : Supprime tous les gestionnaires d'événements pour un événement spécifique ou tous les événements.
// Supprime tous les gestionnaires d'événements pour 'event'
myEmitter.removeAllListeners('event');
// Supprime tous les gestionnaires d'événements pour tous les événements
myEmitter.removeAllListeners();

// listeners(event) :
// Explication : Retourne un tableau des gestionnaires d'événements pour un événement spécifique.
const listeners = myEmitter.listeners('event');
console.log(listeners); // Affiche un tableau des gestionnaires d'événements pour 'event'

// listenerCount(event) :
// Explication : Retourne le nombre de gestionnaires d'événements associés à un événement spécifique.
const count = myEmitter.listenerCount('event');
console.log(count); // Affiche le nombre de gestionnaires d'événement