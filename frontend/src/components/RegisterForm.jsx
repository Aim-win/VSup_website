// components/RegisterForm.jsx
import { useState } from 'react';
import axios from 'axios';
import './global.css';

const RegisterForm = () => {
  const [form, setForm] = useState({ CNE: '', nom: '', email: '', mot_de_passe: '', DN: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, form);
      alert('Inscription réussie');
    } catch (err) {
      alert('Erreur d\'inscription');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="CNE" placeholder="CNE" onChange={handleChange} required />
      <input name="nom" placeholder="Nom" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="mot_de_passe" placeholder="Mot de passe" type="password" onChange={handleChange} required />
      <input name="DN" placeholder="Date de naissance" type="date" onChange={handleChange} required />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default RegisterForm;
