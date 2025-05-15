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
  const [language, setLanguage] = useState('fr'); // 'fr', 'en', 'ar'

  // Traductions
  const translations = {
    en: {
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password (8 - 12)',
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
      password: 'Mot de passe (8 - 12)',
      cne: 'CNE (10 caractères)',
      name: 'Nom',
      birthDate: 'Date de naissance',
      submitLogin: 'Se connecter',
      submitRegister: 'S\'inscrire',
      toggleToRegister: 'Besoin d\'un compte ? S\'inscrire',
      toggleToLogin: 'Vous avez déjà un compte ? Se connecter',
    },
    ar: {
      login: 'دخول',
      register: 'إنشاء حساب',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور(8 - 12)',
      cne: 'الرمز الوطني للطالب (10 أرقام)',
      name: 'الاسم',
      birthDate: 'تاريخ الميلاد',
      submitLogin:  'تسجيل الدخول',
      submitRegister: 'تسجيل',
      toggleToRegister: 'ليس لديك حساب؟ سجل الآن',
      toggleToLogin: 'هل لديك حساب؟ سجل الدخول',
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.CNE.length !== 10) {
      setError('CNE doit comporter exactement 10 caractères');
      return;
    }
    setError('');
    console.log(formData);
    alert(isLogin ? translations[language].submitLogin : translations[language].submitRegister);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
                <input type="password" placeholder={translations[language].password} 
                    maxLength="12"
                    minLength="8"
                />
                <button type="submit">{translations[language].submitLogin}</button>
                <a href="/dut.html" className="direct-access-btn">{translations[language].login}</a>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="CNE"
                  placeholder={translations[language].cne}
                  value={formData.CNE}
                  onChange={handleChange}
                  maxLength="10"
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
                  type="text"
                  name="mot_de_passe"
                  placeholder={translations[language].password}
                  value={formData.mot_de_passe}
                  onChange={handleChange}
                  maxLength="12"
                  minLength="8"
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
  style={{ backgroundImage: `url(${BackgroundImage})`, position: 'relative' }}
>
      <div className="language-toggle-group">
        <button onClick={() => setLanguage('fr')}>Français</button>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('ar')}>العربية</button>
      </div>
    </div>

    </div>
    
  );
}

export default App;
