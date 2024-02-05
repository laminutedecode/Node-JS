1) npm Init  : Initialise un nouveau projet avec la configuration par défaut. (-y ou -yes)
2) node app.js : Execute le script
3) npm run app.js: Exécute un script spécifique défini dans la section "scripts" du fichier 
4) npm install : Installer une dependance
5) npm update : Mise a jour des dependences
6) npm outdated: Affiche une liste des packages installés qui ne sont pas à jour par rapport aux dernières versions disponibles.
7) npm list : Liste de toutes les dependances
8) npm info : Affiche des informations détaillées sur un package spécifique.
9) npm search : Recherche des packages sur le registre npm. Par exemple : npm search react.
10) npm config list : Affiche la configuration npm actuelle.
11) npm uninstall : Desinstalle une dépendance
12) npm prune : Supprime les packages qui ne sont pas listés dans le fichier package.json.
13) npm audit: Analyse les dépendances du projet à la recherche de vulnérabilités de sécurité.



L'option -g signifie "global". Lorsque vous utilisez cette option avec npm install, le package spécifié sera installé de manière globale sur votre système plutôt que localement dans le répertoire du projet en cours. Cela signifie que le package sera accessible de n'importe où sur votre machine. Cette option est généralement utilisée pour installer des outils en ligne de commande ou des utilitaires qui doivent être disponibles de manière globale. 

Option --save : Avant npm version 5.0.0, l'option --save était utilisée pour ajouter un package en tant que dépendance dans la section "dependencies" du fichier package.json. Cependant, à partir de la version 5.0.0, npm a introduit le comportement par défaut d'enregistrer automatiquement les dépendances, il n'est donc plus nécessaire d'inclure explicitement --save.


L'option --save-dev est utilisée avec la commande npm install pour spécifier qu'un package doit être enregistré comme dépendance de développement dans le fichier package.json. Cela signifie que le package ne sera nécessaire que pendant le développement du projet et n'est pas requis pour le fonctionnement normal de l'application en production.