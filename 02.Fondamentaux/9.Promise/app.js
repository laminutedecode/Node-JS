// Les Promises (promesses) sont un autre mécanisme pour gérer les opérations asynchrones en Node.js. Elles offrent une alternative aux callbacks et permettent d'écrire un code plus lisible et plus facilement compréhensible. Les Promises sont standardisées dans le langage JavaScript à partir de l'ES6 (ECMAScript 2015).

// Une Promise représente une valeur qui peut être disponible maintenant, dans le futur ou jamais. Elle est généralement utilisée pour encapsuler une opération asynchrone et peut avoir trois états :

// Pending (en attente) : L'état initial d'une Promise, lorsqu'elle est en cours d'exécution.
// Fulfilled (réalisée) : Lorsque la Promise est exécutée avec succès et a produit une valeur.
// Rejected (rejetée) : Lorsque la Promise a rencontré une erreur ou a été rejetée avec une raison spécifique.
// Voici un exemple d'utilisation des Promises en Node.js :

// Fonction asynchrone qui double un nombre
function doubleNumber(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num)) {
      reject(new Error("Invalid number")); // Rejet de la Promise en cas de nombre invalide
    } else {
      const doubled = num * 2;
      resolve(doubled); // Réalisation de la Promise avec la valeur doublée
    }
  });
}

// Utilisation de la fonction doubleNumber avec les Promises
doubleNumber(5)
  .then((result) => {
    console.log(result); // Affiche 10
  })
  .catch((error) => {
    console.error(error); // Affiche l'erreur si le nombre est invalide
  });


//   Dans cet exemple, nous avons une fonction doubleNumber qui prend un nombre en paramètre et retourne une Promise. À l'intérieur de la Promise, nous vérifions si le nombre est valide. Si ce n'est pas le cas, nous rejetons la Promise avec une nouvelle instance d'erreur. Sinon, nous réalisons la Promise avec la valeur doublée du nombre.

// Lorsque nous utilisons la fonction doubleNumber, nous utilisons la méthode then pour spécifier le code à exécuter lorsque la Promise est réalisée avec succès. Dans notre cas, nous affichons simplement le résultat. Nous utilisons également la méthode catch pour gérer les erreurs qui peuvent se produire pendant l'exécution de la Promise.

// Les Promises permettent également de chaîner des opérations asynchrones de manière plus claire à l'aide de la méthode then. Par exemple :

doubleNumber(5)
  .then((result) => {
    return doubleNumber(result);
  })
  .then((result) => {
    console.log(result); // Affiche 20
  })
  .catch((error) => {
    console.error(error);
  });

//   Dans cet exemple, nous doublons d'abord le nombre 5, puis doublons le résultat obtenu, ce qui donne finalement 20. Les Promises offrent une syntaxe plus fluide pour gérer les opérations asynchrones avec des chaînes de promesses.

// En utilisant les Promises, vous pouvez écrire un code plus lisible, éviter les callbacks en cascade (callback hell) et gérer les erreurs de manière plus efficace.
