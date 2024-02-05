// Les boucles sont des structures de contrôle utilisées en JavaScript pour répéter l'exécution d'un bloc d'instructions. Voici les détails sur les différentes boucles disponibles en JavaScript :

// Boucle for : La boucle for est utilisée lorsque vous connaissez le nombre exact d'itérations à effectuer. Elle est composée de trois parties : l'initialisation, la condition et l'incrémentation. Voici un exemple :


for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Dans cet exemple, la boucle for itère cinq fois, en affichant les valeurs de i de 0 à 4.

// Boucle for...of : La boucle for...of est utilisée pour itérer sur des objets itérables tels que les tableaux, les chaînes de caractères, les ensembles (Sets) ou les maps. Elle permet d'accéder directement aux valeurs de chaque élément. Voici un exemple :


let fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Cette boucle for...of itère sur chaque élément du tableau fruits et affiche les valeurs "pomme", "banane" et "orange".

// Boucle for...in : La boucle for...in est utilisée pour itérer sur les propriétés énumérables d'un objet. Elle permet d'accéder aux clés ou aux indices de chaque propriété. Voici un exemple :


let person = {
  name: "John",
  age: 30,
  city: "Paris"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Cette boucle for...in itère sur chaque propriété de l'objet person et affiche les clés ("name", "age", "city") et les valeurs correspondantes ("John", 30, "Paris").

// Boucle while : La boucle while est utilisée lorsque vous voulez répéter une série d'instructions tant qu'une condition donnée est vraie. Elle évalue la condition avant chaque itération. Voici un exemple :


let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// Cette boucle while affiche les valeurs de i de 0 à 4 tant que la condition i < 5 est vraie.

// Boucle do...while : La boucle do...while est similaire à la boucle while, mais elle évalue la condition après l'exécution du bloc d'instructions. Cela garantit que le bloc d'instructions est exécuté au moins une fois, même si la condition est fausse dès le départ. Voici un exemple :


let j = 0;

do {
  console.log(i);
  j++;
} while (j < 5);
// Cette boucle do...while affiche les valeurs de i de 0 à 4, même si la condition i < 5 est fausse dès le départ.

// Les boucles sont des outils puissants pour automatiser des tâches répétitives en JavaScript. En comprenant les différentes boucles et leurs utilisations, vous pouvez itérer sur des collections, parcourir des propriétés d'objets et exécuter des blocs d'instructions tant qu'une condition est satisfaite.