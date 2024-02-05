// Les callbacks en Node.js sont des fonctions qui sont utilisées pour gérer des opérations asynchrones. Lorsque vous effectuez une opération asynchrone, comme une requête à une base de données ou une lecture de fichier, Node.js ne bloque pas l'exécution du reste du code et continue à exécuter les autres instructions.

// Cependant, vous avez besoin d'un moyen de savoir quand cette opération asynchrone est terminée, afin de pouvoir traiter les résultats ou effectuer d'autres actions. C'est là que les callbacks entrent en jeu.

// Un callback est simplement une fonction qui est passée en tant que paramètre à une autre fonction. Lorsque l'opération asynchrone est terminée, la fonction de rappel est invoquée avec les résultats de cette opération.

// Fonction asynchrone qui double un nombre
function doubleNumber(num, callback) {
  setTimeout(() => {
    const doubled = num * 2;
    callback(doubled);
  }, 1000);
}

// Utilisation de la fonction doubleNumber avec un callback
doubleNumber(5, (result) => {
  console.log(result); // Affiche 10 après 1 seconde
});

console.log("Le programme continue à s'exécuter...");


// Dans cet exemple simplifié, nous avons une fonction doubleNumber qui double un nombre donné. Elle prend le nombre et une fonction de rappel en paramètres. À l'intérieur de cette fonction, nous utilisons setTimeout pour simuler une opération asynchrone qui prend 1 seconde.

// Après 1 seconde, lorsque l'opération asynchrone est terminée, nous invoquons la fonction de rappel callback avec le résultat du doublement du nombre.

// Ensuite, nous appelons la fonction doubleNumber en passant le nombre 5 et une fonction de rappel qui affiche le résultat. Cependant, avant même que l'opération asynchrone soit terminée, le programme continue à s'exécuter et affiche "Le programme continue à s'exécuter..." dans la console.

// Après 1 seconde, lorsque l'opération asynchrone est terminée, la fonction de rappel est invoquée avec le résultat, et "10" est affiché dans la console.

// J'espère que cette explication simplifiée vous aidera à mieux comprendre les callbacks en Node.js ! N'hésitez pas si vous avez d'autres questions.