// components/LoginForm.jsx
import { useState } from 'react';
import axios from 'axios';
import './global.css';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', mot_de_passe: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, form);
      alert('Connexion réussie');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert('Erreur de connexion');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="email" onChange={handleChange} required />
      <input name="mot_de_passe" placeholder="Mot de passe" type="password" onChange={handleChange} required />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
