import { useState } from 'react';
import axios from 'axios';
import './global.css';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Envoie des données de connexion au backend
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, form);

      // Sauvegarde du token dans le localStorage (si le backend renvoie un token)
      localStorage.setItem('token', res.data.token);

      // Redirige vers la page DUT sans confirmation
      window.location.href = '/dut.html';
    } catch (err) {
      // En cas d'échec de la connexion, rediriger quand même
      console.warn('Erreur de connexion. Accès quand même pour test.');
      window.location.href = '/dut.html'; // Rediriger même en cas d'erreur
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Mot de passe"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Se connecter</button>
      <a href="https://loginvs.up.railway.app/dut.html">DUT </a>
    </form>
  );
};

export default LoginForm;
