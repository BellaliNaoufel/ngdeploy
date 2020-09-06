const express = require('express');

const app = express();

app.use(express.static('./dist/cat-mash'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/cat-mash/'}),
);

app.listen(process.env.PORT || 8080);