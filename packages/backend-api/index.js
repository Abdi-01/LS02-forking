const express = require('express');
const app = express();
const PORT = 3434;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<h1>monorepo-api with LERNA</h1>')
})

app.listen(PORT, () => console.log('LERNA monorepo-api RUNNING', PORT))