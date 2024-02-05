// Dans Node.js, les fonctions setTimeout() et setInterval() sont utilisées pour exécuter des actions avec un délai de temps spécifié. Voici comment elles fonctionnent :

// setTimeout(callback, delay)
// callback : La fonction à exécuter après le délai spécifié.
// delay : Le délai en millisecondes avant l'exécution de la fonction.
// La fonction setTimeout() est utilisée pour exécuter une fonction une seule fois après un certain délai. Voici un exemple :


setTimeout(function() {
  console.log("Fonction exécutée après 2 secondes");
}, 2000);
// Dans cet exemple, la fonction console.log() sera exécutée après un délai de 2 secondes (2000 millisecondes).

// setInterval(callback, delay)
// callback : La fonction à exécuter à intervalles réguliers.
// delay : L'intervalle en millisecondes entre chaque exécution de la fonction.
// La fonction setInterval() est utilisée pour exécuter une fonction à intervalles réguliers jusqu'à ce qu'elle soit annulée. Voici un exemple :


let counter = 0;
let interval = setInterval(function() {
  counter++;
  console.log("Compteur :", counter);
}, 1000);
// Dans cet exemple, la fonction console.log() sera exécutée toutes les 1 seconde (1000 millisecondes). Le compteur est également incrémenté à chaque exécution.

// Pour arrêter l'exécution répétée d'une fonction avec setInterval(), vous pouvez utiliser la fonction clearInterval() en passant l'ID de l'intervalle retourné par setInterval(). Par exemple :


clearInterval(interval);
// Cela arrêtera l'exécution de la fonction associée à l'intervalle.

// Il est important de noter que setTimeout() et setInterval() sont des fonctions asynchrones, ce qui signifie que le reste du code continue à s'exécuter sans attendre la fin du délai ou de l'intervalle. Si vous avez besoin d'effectuer une action après la fin du délai ou de l'intervalle, vous devrez le faire dans la fonction de rappel.
