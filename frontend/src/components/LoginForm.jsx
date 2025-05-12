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
      // Send login credentials to your backend
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, form);

      alert('Connexion réussie');
      localStorage.setItem('token', res.data.token); // Save JWT token if backend provides it
      window.location.href = '/dut.html'; // Redirect to DUT page
    } catch (err) {
      console.warn('Erreur de connexion. Accès quand même pour test.');

      // TEMPORARY: Allow redirection even if backend fails (dev mode)
      window.location.href = '/dut.html';
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
      <button type="submit">Se connecter</button>button
      <a href="https://loginvs.up.railway.app/dut.html">Se connecter</a>
    </form>
  );
};

export default LoginForm;
