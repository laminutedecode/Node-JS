// Le call stack (ou pile d'appels) est une structure de données utilisée par Node.js pour gérer l'exécution des fonctions. Il suit le modèle Last-In-First-Out (LIFO), ce qui signifie que la dernière fonction ajoutée à la pile est la première à être retirée et exécutée.

// Lorsque vous appelez une fonction en JavaScript, elle est ajoutée au sommet de la pile d'appels. Si cette fonction appelle une autre fonction, celle-ci est ajoutée au-dessus de la précédente dans la pile. Ce processus se répète pour toutes les fonctions appelées en cascade, créant une pile de fonctions en attente d'exécution.

// Voici un exemple simplifié pour illustrer le fonctionnement de la pile d'appels :

function foo() {
  console.log("Je suis la fonction foo");
  bar();
}

function bar() {
  console.log("Je suis la fonction bar");
}

function baz() {
  console.log("Je suis la fonction baz");
}

foo();
baz();


// Lorsque ce code est exécuté, voici comment le call stack se déroule :

// La fonction foo est appelée depuis le programme principal. Elle est ajoutée au sommet de la pile d'appels.
// À l'intérieur de foo, la fonction bar est appelée. Elle est ajoutée au-dessus de foo dans la pile.
// bar est exécutée et retirée de la pile. Elle affiche "Je suis la fonction bar".
// De retour à l'intérieur de foo, la fonction bar est terminée et retirée de la pile.
// foo est également terminée et retirée de la pile. Elle affiche "Je suis la fonction foo".
// La fonction baz est appelée depuis le programme principal. Elle est ajoutée au sommet de la pile d'appels.
// baz est exécutée et retirée de la pile. Elle affiche "Je suis la fonction baz".
// Le programme principal est terminé et la pile d'appels est vide.
// Le call stack est important car il permet de garder une trace de l'état d'exécution des fonctions. Lorsqu'une fonction est terminée, elle est retirée de la pile et la fonction précédente peut reprendre son exécution.

// Cependant, si vous avez une cascade de fonctions trop importante, cela peut entraîner un dépassement de capacité de la pile d'appels, communément appelé "stack overflow". Cela se produit lorsque la pile devient trop grande pour être gérée, généralement en raison d'une récursion infinie ou d'un appel de fonction répétitif.

// En comprenant le fonctionnement du call stack, vous pouvez mieux appréhender l'ordre d'exécution des fonctions et éviter les erreurs liées à un dépassement de capacité de la pile.

