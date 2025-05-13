import { useState } from 'react';
import './global.css';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('token', 'fake-token'); // simulate login
    window.location.href = '/dut.html'; // redirect
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
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

      {/* Direct access button */}
      <button
        type="button"
        onClick={() => window.location.href = '/dut.html'}
        style={{ marginTop: '1rem', backgroundColor: '#ccc', color: '#000' }}
      >
        Accès direct à DUT
      </button>
    </form>
  );
};

export default LoginForm;
