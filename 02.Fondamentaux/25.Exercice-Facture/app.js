const fs = require('fs');

// Fonction pour générer une facture initiale
function genererFacture() {
    const facture = {
        client: 'Nom du client',
        articles: [
            { nom: 'Article 1', quantite: 2, prixUnitaire: 10 },
            { nom: 'Article 2', quantite: 1, prixUnitaire: 20 },
            // Ajoutez d'autres articles si nécessaire
        ],
        montantTotal: 0, // Le montant total sera calculé dynamiquement
    };

    // Calcul du montant total en fonction des articles
    facture.montantTotal = facture.articles.reduce((total, article) => total + (article.quantite * article.prixUnitaire), 0);

    // Appel de la fonction pour enregistrer la facture dans le fichier facture.txt
    sauvegarderFacture('facture.json', facture);
}

// Fonction pour enregistrer la facture dans un fichier
function sauvegarderFacture(nomFichier, facture) {
    // Utilisation de la méthode writeFile de fs pour écrire dans le fichier de manière asynchrone
    fs.writeFile(nomFichier, JSON.stringify(facture, null, 2), (err) => {
        if (err) {
            console.error("Erreur lors de l'enregistrement de la facture :", err);
        } else {
            console.log(`La facture a été enregistrée avec succès dans le fichier ${nomFichier}`);
        }
    });
}

// Fonction pour éditer le montant total de la facture
function editerMontantTotal(nomFichier, nouveauMontant) {
    // Lecture de la facture depuis le fichier
    fs.readFile(nomFichier, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture de la facture :", err);
        } else {
            // Parse du contenu du fichier en tant qu'objet JSON
            const facture = JSON.parse(data);
            
            // Mise à jour du montant total
            facture.montantTotal = nouveauMontant;

            // Appel de la fonction pour sauvegarder la facture mise à jour dans le fichier
            sauvegarderFacture(nomFichier, facture);

            // Affichage de la facture mise à jour dans la console
            afficherFacture(nomFichier);
        }
    });
}

// Fonction pour afficher le contenu de la facture dans la console
function afficherFacture(nomFichier) {
    // Lecture de la facture depuis le fichier
    fs.readFile(nomFichier, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture de la facture :", err);
        } else {
            // Affichage du contenu de la facture dans la console
            console.log("Contenu de la facture :\n", data);
        }
    });
}

// Appel de la fonction principale pour générer la facture initiale et effectuer les opérations
genererFacture();

// Appel de la fonction pour éditer le montant total de la facture (remplacez 50 par le nouveau montant souhaité)
editerMontantTotal('facture.txt', 50);
