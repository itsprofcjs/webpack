const path = require('path');
const fs = require('fs');

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');

    const fileContent = fs.readFileSync(pathToHtmlFile, 'utf-8');

    res.send(fileContent);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
