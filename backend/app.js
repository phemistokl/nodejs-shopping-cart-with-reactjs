const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');


const csrfProtection = csrf();

const config = require('./etc/config.json');

const db = require('./utils/DataBaseUtils');

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();
require('./config/passport');
// Using bodyParser middleware
app.use( bodyParser.json() );

app.use( session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(csrfProtection);
// RESTful api handlers
app.get('/', (req, res, next) => {
    db.listProducts().then(data => res.send(data));
});

app.get('/user/signup', (req, res, next) => {
    const myToken = req.csrfToken();
    res.send(myToken);
});

app.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

app.get('/user/profile', (req, res, next) => {
    res.render('user/profile');
});

app.get('/add-to-cart/:id', (req, res, next) => {
    db.addToCart(req.params.id);
});

// app.get('/user/signup', (req, res, next) => {
//     const token = { csrfToken: req.csrfToken() };
//     res.send(token);
// });
//
// app.post('/user/signup', (req, res, next) => {
//     res.redirect('/');
// });

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(config.serverPort, function() {
    console.log(`Server is up and running on port ${config.serverPort}`);
});
