const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API en ligne ');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(` Serveur backend démarré sur http://localhost:${PORT}`);
});
