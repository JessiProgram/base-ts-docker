import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the guille!');
});

app.listen(port);