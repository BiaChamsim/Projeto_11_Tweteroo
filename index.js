import express from 'express';

const app = express();
app.use(express.json());

const usuarios = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);  
    res.send("Ok")  
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("Ok")
});

app.get('/tweets', (req, res) => {
    const ultimosTweets = tweets.slice(-10);
    res.send(ultimosTweets)
});



app.listen(5001);