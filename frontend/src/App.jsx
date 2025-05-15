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
  const [language, setLanguage] = useState('fr'); 

  const translations = {
    en: {
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password (8 - 12)',
      cne: 'CNE (10 characters)',
      name: 'Last name (family)'
,
      birthDate: 'Date of Birth',
      submitLogin: 'Login',
      submitRegister: 'Register',
      toggleToRegister: "Need an account? Register",
      toggleToLogin: "Already have an account? Login",
       cneError: 'CNE must be exactly 10 characters (1 Alphabet and 9 digits)',
      dateError: 'Invalid date',
      passwordError: 'The password must contain numbers, letters, and special characters (8 to 12 characters)',
      nameError: 'Name must contain letters only'
    },
    fr: {
      login: 'Se connecter',
      register: 'S\'inscrire',
      email: 'E-mail',
      password: 'Mot de passe (8 - 12)',
      cne: 'CNE (10 caractères)',
      name: 'Nom de famille',
      birthDate: 'Date de naissance',
      submitLogin: 'Se connecter',
      submitRegister: 'S\'inscrire',
      toggleToRegister: 'Besoin d\'un compte ? S\'inscrire',
      toggleToLogin: 'Vous avez déjà un compte ? Se connecter',
      cneError: 'CNE doit comporter exactement 10 caractères (1 lettre au debut et 9 chiffres )',
      dateError: 'Date invalide ',
      passwordError: 'Le mot de passe doit être composé de chiffres, de lettres et de caractères spéciaux (8 à 12 caractères)',
      nameError: 'Le nom doit contenir uniquement des lettres'

    },
    ar: {
      login: 'دخول',
      register: 'إنشاء حساب',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور(8 - 12)',
      cne: 'الرمز الوطني للطالب (10 أرقام)',
      name: 'الاسم العائلي',
      birthDate: 'تاريخ الميلاد',
      submitLogin:  'تسجيل الدخول',
      submitRegister: 'تسجيل',
      toggleToRegister: 'ليس لديك حساب؟ سجل الآن',
      toggleToLogin: 'هل لديك حساب؟ سجل الدخول',
       cneError: 'يجب أن يكون طول الرمز 10 أحرف بالضبط (حرف واحد في البداية و 9 أرقام)',
      dateError: 'تاريخ غير صالح',
      passwordError: 'يجب أن تحتوي كلمة المرور على أرقام وحروف ورموز خاصة (من 8 إلى 12 خانة).',
      nameError: 'يجب أن يحتوي الاسم على حروف فقط'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


const handleSubmit = (e) => {
  e.preventDefault();

  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
  // Vérif CNE
 if (
  !isLogin &&
  !/^[A-Za-z]{1}\d{9}$/.test(formData.CNE)
) {
  setError(translations[language].cneError);
  return;
}

//verf nom
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/;
if (!isLogin && !nameRegex.test(formData.nom)) {
  setError(
    translations[language].nameError || "Le nom doit contenir uniquement des lettres"
  );
  return;
}


const birthDate = new Date(formData.DN);
const today = new Date();
const age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--; // ajuste si l'anniversaire n'est pas encore passé cette année
    }
      // Vérif de l'age

    if (!isLogin && (age < 16 || age > 125)) {
      setError(translations[language].dateError);
      return;
    }
  // Vérif mot de passe alphanumérique (8 à 12 caractères, lettres et chiffres)
  const password = formData.mot_de_passe;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,12}$/;

  if (!isLogin && !passwordRegex.test(password)) {
    setError(translations[language].passwordError);
    return;
  }

  setError('');
  console.log(formData);
  alert(isLogin ? translations[language].submitLogin : translations[language].submitRegister);
};

  const toggleForm = () => {
    setIsLogin(!isLogin);  
    
    if (error) {
    setError('');
  }

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
                  minLength="10"
                  required
                />
                <input type="password" placeholder={translations[language].password} 
                    maxLength="12"
                    minLength="8"
                    required
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
                  required
                />
                <input
                  type="text"
                  name="nom"
                  placeholder={translations[language].name}
                  value={formData.nom}
                  onChange={handleChange}required
                  maxLength="25"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={translations[language].email}
                  value={formData.email}
                  onChange={handleChange}
                  maxLength= "35"
                  required
                />
                <input
                  type="text"
                  name="mot_de_passe"
                  placeholder={translations[language].password}
                  value={formData.mot_de_passe}
                  onChange={handleChange}
                  maxLength="12"
                 
                  
                />
                <input
                  type="date"
                  name="DN"
                  placeholder={translations[language].birthDate}
                  value={formData.DN}
                  onChange={handleChange}
                  required
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
