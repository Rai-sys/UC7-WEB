const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const router = require('../back-end/modules/routes/AlunoRoutes');

app.use(cors());

app.use(express.json())
app.use(router);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});