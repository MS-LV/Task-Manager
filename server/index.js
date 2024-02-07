const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { signIn, signUp, verify, refresh, logout } = require('./handlers')

const app = express()
// app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true, //included origin as true
    credentials: true, //included credentials as true
    origin: "http://localhost:3000"
}));


app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/signin', signIn);
app.post('/signup', signUp);
app.get('/verify', verify);
app.get('/refresh', refresh);
app.get('/logout', logout);

app.listen(8000)
