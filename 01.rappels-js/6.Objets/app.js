// La manipulation des objets est un aspect essentiel de la programmation JavaScript. Les objets permettent de stocker des données structurées sous forme de paires clé-valeur. Voici les détails sur la manipulation des objets en JavaScript :

// Déclaration d'un objet : Vous pouvez déclarer un objet en utilisant des accolades ({}). Les paires clé-valeur sont définies en utilisant la syntaxe clé: valeur, séparées par des virgules. Voici un exemple :

let person = {
  name: "John",
  age: 30,
  city: "Paris"
};
// Accès aux propriétés d'un objet : Vous pouvez accéder aux propriétés d'un objet en utilisant la notation point (.) ou la notation entre crochets ([]). Voici un exemple :


console.log(person.name); // Affiche "John"
console.log(person["age"]); // Affiche 30
// Modification des propriétés d'un objet : Vous pouvez modifier les propriétés d'un objet en utilisant la notation point (.) ou la notation entre crochets ([]) et en leur assignant une nouvelle valeur. Voici un exemple :



person.age = 35;
person["city"] = "London";

console.log(person); // Affiche {name: "John", age: 35, city: "London"}
// Ajout de propriétés à un objet : Vous pouvez ajouter de nouvelles propriétés à un objet en utilisant la notation point (.) ou la notation entre crochets ([]). Voici un exemple :




person.city = "Paris";
person["country"] = "France";

console.log(person); // Affiche {name: "John", age: 30, city: "Paris", country: "France"}
// Suppression de propriétés d'un objet : Vous pouvez supprimer une propriété d'un objet en utilisant l'opérateur delete. Voici un exemple :


delete person.age;

console.log(person); // Affiche {name: "John", city: "Paris"}
// Boucler à travers les propriétés d'un objet : Vous pouvez utiliser une boucle for...in pour itérer sur les propriétés énumérables d'un objet. Voici un exemple :



for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Cela affichera chaque propriété de l'objet person et sa valeur ("name: John", "age: 30", "city: Paris").

// Les objets en JavaScript offrent une flexibilité énorme pour représenter des données structurées. En comprenant comment déclarer, accéder, modifier, ajouter, supprimer des propriétés d'un objet et itérer sur ses propriétés, vous pouvez manipuler efficacement les données et créer des structures de données complexes dans vos programmes JavaScript.