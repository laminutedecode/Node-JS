// Les conditions if sont une structure fondamentale en JavaScript (et dans de nombreux autres langages de programmation) qui permettent d'exécuter du code conditionnellement, en fonction d'une condition donnée. Une condition if évalue une expression booléenne (une expression qui peut être soit vraie, soit fausse) et exécute le bloc de code associé si la condition est évaluée comme vraie.

// Voici un exemple simple qui illustre l'utilisation d'une condition if :

let nombre = 10;

if (nombre > 0) {
  console.log("Le nombre est positif");
} else if (nombre < 0) {
  console.log("Le nombre est négatif");
} else {
  console.log("Le nombre est égal à zéro");
}


// Dans cet exemple, nous avons une variable nombre initialisée à 10. Nous utilisons une condition if pour vérifier différentes possibilités :

// Si nombre est supérieur à 0, la condition nombre > 0 est évaluée comme vraie, et le bloc de code associé à la première branche if est exécuté. Dans ce cas, le message "Le nombre est positif" est affiché dans la console.
// Si nombre est inférieur à 0, la condition nombre < 0 est évaluée comme vraie, et le bloc de code associé à la deuxième branche else if est exécuté. Dans ce cas, le message "Le nombre est négatif" est affiché.
// Si les deux conditions précédentes sont fausses, cela signifie que nombre est égal à 0. Le bloc de code associé à la dernière branche else est donc exécuté, affichant le message "Le nombre est égal à zéro".
// Il est également possible d'utiliser uniquement une condition if sans else if ou else, ou d'utiliser plusieurs conditions if les unes après les autres pour évaluer différentes possibilités.

// Voici un autre exemple qui illustre l'utilisation de plusieurs conditions if :

let heure = 14;

if (heure < 12) {
  console.log("Bonne matinée !");
} else if (heure < 18) {
  console.log("Bonne après-midi !");
} else {
  console.log("Bonne soirée !");
}


// Dans cet exemple, nous utilisons uniquement des conditions if pour évaluer différentes plages horaires. Selon la valeur de heure, le message approprié est affiché.

// Les conditions if peuvent être utilisées pour prendre des décisions dans le code en fonction de différentes situations. Elles sont essentielles pour contrôler le flux d'exécution du programme et permettre des actions conditionnelles en fonction de certaines valeurs ou conditions.