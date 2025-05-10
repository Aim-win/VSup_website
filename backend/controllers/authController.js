// backend/controllers/authController.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Enregistrement d'un utilisateur
const registerUser = (req, res) => {
  const { CNE, nom, email, mot_de_passe, DN } = req.body;

  // Validation des champs
  if (!CNE || !nom || !email || !mot_de_passe || !DN) {
    return res.status(400).json({ message: 'Tous les champs doivent être remplis' });
  }

  // Vérifier que le CNE a 10 caractères
  if (CNE.length !== 10) {
    return res.status(400).json({ message: 'Le CNE doit contenir exactement 10 caractères' });
  }

  // Vérifier si l'email est déjà utilisé
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur interne du serveur' });
    }
    if (results.length > 0) {
      return res.status(400).json({ message: 'L\'email est déjà utilisé' });
    }

    // Hash du mot de passe
    bcrypt.hash(mot_de_passe, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur lors du hashage du mot de passe' });
      }

      // Insertion dans la base de données
      const query = 'INSERT INTO users (CNE, nom, email, mot_de_passe, DN) VALUES (?, ?, ?, ?, ?)';
      db.query(query, [CNE, nom, email, hashedPassword, DN], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
        }

        // Répondre avec un message de succès
        return res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
      });
    });
  });
};

// Login d'un utilisateur
const loginUser = (req, res) => {
  const { email, mot_de_passe } = req.body;

  // Vérification si les champs sont remplis
  if (!email || !mot_de_passe) {
    return res.status(400).json({ message: 'Tous les champs doivent être remplis' });
  }

  // Vérifier si l'utilisateur existe
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur interne du serveur' });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: 'L\'email n\'existe pas' });
    }

    // Comparer le mot de passe avec celui de la base de données
    const user = results[0];
    bcrypt.compare(mot_de_passe, user.mot_de_passe, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur lors de la comparaison du mot de passe' });
      }
      if (!isMatch) {
        return res.status(400).json({ message: 'Mot de passe incorrect' });
      }

      // Générer un token JWT
      const token = jwt.sign({ CNE: user.CNE, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return res.status(200).json({ message: 'Connexion réussie', token });
    });
  });
};

module.exports = { registerUser, loginUser };
