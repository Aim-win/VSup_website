import React, { useState } from 'react';
import './App.css';
import BackgroundImage from './assets/ss.JPEG';
import Logo from './assets/ESTLOGO.JPEG';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    CNE: '',
    nom: '',
    email: '',
    mot_de_passe: '',
    DN: ''
  });
  const [error, setError] = useState('');

  const [language, setLanguage] = useState('fr'); // 'en' pour anglais, 'fr' pour français

  // Fonction pour basculer entre les langues
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  // Traductions pour chaque langue
  const translations = {
    en: {
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      cne: 'CNE (10 characters)',
      name: 'Name',
      birthDate: 'Date of Birth',
      submitLogin: 'Login',
      submitRegister: 'Register',
      toggleToRegister: "Need an account? Register",
      toggleToLogin: "Already have an account? Login",
    },
    fr: {
      login: 'Se connecter',
      register: 'S\'inscrire',
      email: 'E-mail',
      password: 'Mot de passe',
      cne: 'CNE (10 caractères)',
      name: 'Nom',
      birthDate: 'Date de naissance',
      submitLogin: 'Se connecter',
      submitRegister: 'S\'inscrire',
      toggleToRegister: 'Besoin d\'un compte ? S\'inscrire',
      toggleToLogin: 'Vous avez déjà un compte ? Se connecter',
    }
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation du CNE (10 caractères)
    if (!isLogin && formData.CNE.length !== 10) {
      setError('CNE must be exactly 10 characters');
      return;
    }

    setError('');
    console.log(formData);
    alert(isLogin ? translations[language].submitLogin : translations[language].submitRegister);
  };

  // Fonction pour basculer entre les formulaires Login et Register
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <div className="form-content">
          <img src={Logo} alt="Logo" className="logo" />
          <h1>{isLogin ? translations[language].login : translations[language].register}</h1>

          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <>
          <input
            type="text"
            name="CNE"
            placeholder={translations[language].cne}
            value={formData.CNE}
            onChange={handleChange}
            maxLength="10"
          />
                <input type="password" placeholder={translations[language].password} />
                  <button type="submit">{translations[language].submitLogin}</button>
                  <a href="/dut.html" className="direct-access-btn">Login</a>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="CNE"
                  placeholder={translations[language].cne}
                  value={formData.CNE}
                  onChange={handleChange}
                  maxLength="10" // Restriction à 10 caractères
                />
                <input
                  type="text"
                  name="nom"
                  placeholder={translations[language].name}
                  value={formData.nom}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={translations[language].email}
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="mot_de_passe"
                  placeholder={translations[language].password}
                  value={formData.mot_de_passe}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="DN"
                  placeholder={translations[language].birthDate}
                  value={formData.DN}
                  onChange={handleChange}
                />
                <button type="submit">{translations[language].submitRegister}</button>
              </>
            )}

            {error && <p className="error">{error}</p>}
          </form>

          <button className="toggle-btn" onClick={toggleForm}>
            {isLogin ? translations[language].toggleToRegister : translations[language].toggleToLogin}
          </button>
        </div>
      </div>

      <div
        className="image-section"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Bouton pour changer la langue */}
      <button onClick={toggleLanguage} className="language-toggle">
        {language === 'en' ? 'Français' : 'English'}
      </button>
    </div>
  );
}

export default App;
