
// La mise en place d'un système d'authentification est une étape cruciale pour garantir la sécurité des applications et des services en ligne. Il est important de choisir des méthodes d'authentification appropriées en fonction des besoins de sécurité et de la convivialité. Les méthodes courantes incluent les mots de passe, les codes PIN, l'authentification à deux facteurs (2FA) et la biométrie.
// Pour mettre en place un système d'authentification avec Node.js, vous pouvez utiliser le framework Express et le module Passport pour simplifier le processus. V

// npm install express passport passport-local express-session


// Importation des modules nécessaires
const express = require('express');
const passport = require('passport');
// Passport.js est une bibliothèque d'authentification pour Node.js. Elle simplifie le processus d'authentification en fournissant des stratégies pour différents mécanismes d'authentification, tels que local (nom d'utilisateur et mot de passe), OAuth, OpenID, etc.
const LocalStrategy = require('passport-local').Strategy;
// En utilisant Passport.js, la notion de "stratégie" fait référence à un mécanisme spécifique d'authentification. Une stratégie définit comment l'application va vérifier les identités des utilisateurs. Par exemple, si vous utilisez la stratégie locale, les utilisateurs peuvent s'authentifier avec un nom d'utilisateur et un mot de passe.
const session = require('express-session');

// Création d'une application Express
const app = express();

// Définition du port sur lequel le serveur écoutera
const PORT = 3000;

// Configuration des middleware Express

// Middleware pour gérer les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Middleware pour gérer les sessions
app.use(session({ secret: 'votre_cle_secrete', resave: true, saveUninitialized: true }));

// Initialisation de Passport
app.use(passport.initialize());
app.use(passport.session());

// Exemple d'une base de données d'utilisateurs (à simplifier)
const usersDB = {
  'utilisateur1': { id: 'utilisateur1', username: 'utilisateur1', password: 'mot_de_passe1' },
  'utilisateur2': { id: 'utilisateur2', username: 'utilisateur2', password: 'mot_de_passe2' }
};

// Configuration de Passport pour l'authentification locale

// Stratégie locale de Passport
passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = usersDB[username];
    if (user && user.password === password) {
      return done(null, user);
    }
    return done(null, false, { message: 'Nom d\'utilisateur ou mot de passe incorrect' });
  }
));

// Sérialisation et désérialisation des utilisateurs
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = usersDB[id];
  done(null, user);
});

// Définition des routes

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Page d\'accueil - Contenu public');
});

// Route pour la soumission du formulaire de connexion
app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  })
);

// Route pour le tableau de bord sécurisé avec vérification d'authentification
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`Bienvenue ${req.user.username} sur le tableau de bord - Contenu sécurisé`);
});

// Route pour afficher le formulaire de connexion
app.get('/login', (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form method="post" action="/login">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br>
      <input type="submit" value="Login">
    </form>
  `);
});

// Route pour la déconnexion
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Middleware pour vérifier l'authentification
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

// Dans cet exemple, nous utilisons Passport avec la stratégie locale (username/password) pour l'authentification. La gestion des sessions est assurée par express-session. Notez que cet exemple utilise une base de données simulée pour les utilisateurs, et en production, vous devriez utiliser une base de données réelle et des mécanismes de hachage sécurisés pour stocker les mots de passe.