const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const petRoutes = require('./routes/petRoutes'); 

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/pets', petRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Servidor rodando na porta ${PORT}'));