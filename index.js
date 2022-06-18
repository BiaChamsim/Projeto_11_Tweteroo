import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const usuarios = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);  
    console.log(usuarios)
    res.send("Ok")  
});

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;
    const { avatar } = usuarios.filter((usuario) => usuario.username === username)[0]
    tweets.push({
        username,
        avatar,
        tweet
    });
    console.log(tweets)
    res.send("Ok")
});

app.get('/tweets', (req, res) => {
    const ultimosTweets = tweets.slice(-10);
    res.send(ultimosTweets)
});



app.listen(5000);