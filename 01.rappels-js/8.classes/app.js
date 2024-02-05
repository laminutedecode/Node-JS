// Les classes sont une fonctionnalité introduite dans JavaScript ES6 (ECMAScript 2015) qui permet de définir des objets et leurs comportements de manière plus orientée objet. Les classes offrent une syntaxe plus claire et plus structurée pour créer des objets et leur attribuer des propriétés et des méthodes.

// Voici un exemple de définition d'une classe en JavaScript :


class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  saluer() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

// Création d'une instance de la classe Personne
const personne1 = new Personne("Alice", 25);

// Appel d'une méthode sur l'instance
personne1.saluer(); // Affiche "Bonjour, je m'appelle Alice et j'ai 25 ans."
// Dans cet exemple, nous définissons une classe Personne. La classe a un constructeur qui est appelé lors de la création d'une nouvelle instance de la classe. Le constructeur accepte des paramètres (nom et age) pour initialiser les propriétés de l'objet. Les propriétés (nom et age) sont définies en utilisant le mot-clé this, qui fait référence à l'objet actuel.

// La classe Personne a également une méthode saluer() qui affiche une salutation personnalisée en utilisant les propriétés de l'objet. Lorsque la méthode est appelée sur une instance de la classe, elle affiche le message approprié.

// Pour créer une instance de la classe Personne, nous utilisons le mot-clé new. Dans notre exemple, nous créons une instance personne1 avec le nom "Alice" et l'âge 25. Ensuite, nous appelons la méthode saluer() sur l'instance personne1, ce qui affiche le message "Bonjour, je m'appelle Alice et j'ai 25 ans."

// Les classes en JavaScript peuvent également avoir des méthodes statiques, qui sont des méthodes attachées à la classe elle-même plutôt qu'à ses instances. Ces méthodes statiques sont accessibles sans avoir besoin de créer une instance de la classe.

// Les classes fournissent une manière plus organisée de structurer et de créer des objets en JavaScript, en regroupant les données et le comportement associé dans une même entité. Elles facilitent la réutilisation du code et permettent une approche plus orientée objet de la programmation en JavaScript.