import { useState } from 'react';
import axios from 'axios';
import './global.css';

const LoginForm = () => {
  const [form, setForm] = useState({ CNE: '', mot_de_passe: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // ⛳ TEMPORARY: Allow access even without backend success
    // TODO: Replace this with real backend call when ready

    try {
      // Try sending login data to FastAPI backend
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, form);

      // If backend responds with success:
      alert('Connexion réussie');
      localStorage.setItem('token', res.data.token); // Save token
      window.location.href = '/dut.html'; // ✅ Redirect to DUT page
    } catch (err) {
      console.warn('Erreur de connexion. Accès quand même pour test.');

      // TEMP: Allow redirection even if backend fails (for dev only)
      window.location.href = '/dut.html'; // ✅ Always redirect for now
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="CNE"
        placeholder="CNE"
        value={form.CNE}
        onChange={handleChange}
        required
      />
      <input
        name="mot_de_passe"
        type="password"
        placeholder="Mot de passe"
        value={form.mot_de_passe}
        onChange={handleChange}
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
