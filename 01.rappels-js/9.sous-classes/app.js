// Les sous-classes, également connues sous le nom de classes dérivées ou classes enfants, sont des classes qui héritent des propriétés et des méthodes d'une classe parente, également appelée classe de base ou classe parente. Les sous-classes permettent d'étendre ou de spécialiser les fonctionnalités de la classe parente en ajoutant de nouvelles propriétés et méthodes spécifiques à la sous-classe.

// Voici un exemple qui illustre la création d'une sous-classe en JavaScript :


class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  saluer() {
    console.log(`Je suis un animal nommé ${this.nom}`);
  }
}

class Chien extends Animal {
  aboyer() {
    console.log("Woof woof !");
  }
}

// Création d'une instance de la classe Chien
const monChien = new Chien("Rex");

// Appel de méthodes sur l'instance de la sous-classe
monChien.saluer(); // Affiche "Je suis un animal nommé Rex"
monChien.aboyer(); // Affiche "Woof woof !"
// Dans cet exemple, nous avons une classe de base Animal qui a une propriété nom et une méthode saluer(). Ensuite, nous définissons une sous-classe Chien en utilisant le mot-clé extends suivi du nom de la classe parente Animal. La sous-classe Chien hérite ainsi des propriétés et des méthodes de la classe Animal.

// La sous-classe Chien a également sa propre méthode aboyer() qui est spécifique à la classe Chien.

// Lorsque nous créons une instance de la sous-classe Chien en utilisant new Chien("Rex"), elle hérite automatiquement de la propriété nom de la classe parente Animal. Nous pouvons alors appeler les méthodes saluer() et aboyer() sur l'instance de la sous-classe monChien, et elles fonctionneront comme prévu.

// Les sous-classes permettent d'étendre les fonctionnalités d'une classe de base tout en conservant la réutilisabilité du code. Elles favorisent la création de hiérarchies de classes et facilitent l'organisation et la structure du code. Les sous-classes permettent également de mettre en œuvre le concept de polymorphisme, où des méthodes héritées peuvent être redéfinies dans la sous-classe pour un comportement spécifique à la sous-classe.

// Notez que vous pouvez également accéder aux propriétés et méthodes de la classe parente depuis la sous-classe en utilisant le mot-clé super. Cela permet d'appeler les constructeurs, les méthodes et les accesseurs de la classe parente.