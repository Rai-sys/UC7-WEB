const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/config/configDb');
const cursoRoutes = require('./src/modules/curso/routes/cursoRoutes');
const alunoRoutes = require('./src/modules/aluno/routes/alunoRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORTA;

app.use(cors());
app.use(express.json());

app.use('/cursos', cursoRoutes);
app.use('/alunos', alunoRoutes);



sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    })
})