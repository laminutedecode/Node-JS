// En programmation, une opération synchrone est une opération qui est exécutée de manière séquentielle, une étape à la fois, et qui bloque l'exécution du programme jusqu'à ce qu'elle soit terminée. Cela signifie que chaque instruction est exécutée dans l'ordre, et le programme attend que chaque instruction soit complétée avant de passer à la suivante.


// L'exécution synchrone est simple à comprendre et à suivre, car chaque instruction est exécutée dans l'ordre, ce qui facilite la compréhension du flux de contrôle du programme. Cependant, cela peut poser problème lorsque des opérations prennent du temps ou sont bloquantes, car cela peut entraîner un blocage de l'exécution du programme. Par exemple, si vous effectuez une opération de lecture de fichier synchrone dans Node.js et que le fichier est volumineux ou que l'opération prend du temps, le programme sera bloqué et ne pourra pas répondre à d'autres requêtes ou effectuer d'autres tâches pendant cette période.

const math = require('./module.js');

console.log('Avant la fonction');
const result = math.addition(2, 3);
console.log(result); // Affiche: 5
console.log('Apres la fonction');







