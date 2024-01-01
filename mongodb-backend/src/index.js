const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const useragent = require('express-useragent');
const passport = require('passport')
const { mongoose } = require('./configs/db');
const GitLabStrategy = require('passport-gitlab2')
var feedbackController = require('./controllers/feedbackController');
var logController = require('./controllers/logController');
var resultStoreController = require('./controllers/resultStoreController');
const { session } = require('passport');
const dotenv = require('dotenv');
dotenv.config();

const allowedDomains = ["http://localhost:8080"];
if (process.env.FRONTEND_URL) {
  allowedDomains.push(process.env.FRONTEND_URL);
}

const allowedUsers = [{ "id": 9230501, "name": "Aaron Küsters", "username": "aarkue" }, { "id": 5210071, "name": "Lubna Ali", "username": "Lubna981" }, { "id": 8832084, "name": "Sven Judel", "username": "sven.j" }, { "id": 2364739, "name": "Deekshith", "username": "DeekshithShetty" }, { "id": 15312388, "name": "Md Morshadur Rahman", "username": "mdmorshadur.rahman" }]
const API_URL = process.env.API_URL || "http://localhost:3000";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:8080";
passport.use(new GitLabStrategy({
  clientID: "545ad7cd0173497fc3196b81e68e67d30a02168e2d94e0f3de4ecc70fbfd7a07",
  clientSecret: "2aa44f62741133c9156f844891e143a87c14c115e48b6290536375130ab7e06a",
  callbackURL: `${API_URL}/auth/gitlab/callback`
},
  function (accessToken, refreshToken, profile, cb) {
    const i = allowedUsers.findIndex((user) => (user.id == profile.id));
    if (i >= 0) {
      console.log("Authenticated", profile.username, profile.id);
      cb(null, profile);
    } else {
      cb(null, null);
    }

  }
));


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});


const PORT = process.env.PORT || 3000;

var app = express();
app.use(express.json());
app.use(useragent.express());
app.use(cors({
  origin: function (origin, callback) {
    console.log("Origin: " + origin);
    if (!origin || allowedDomains.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('cookie-parser')());
app.use(
  require("express-session")({
    secret: "JqV#p&7mLRguGPG^GPm&Eb6LK8#p5$$oXE",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(`Server started at port : ${PORT} and is permitting access to users: ${JSON.stringify(allowedUsers)}`));


app.use('/feedbacks', feedbackController);
app.use('/logs', logController);
app.use('/result-store', resultStoreController);

app.get('/auth/gitlab',
  passport.authenticate('gitlab'))


app.get('/auth/gitlab/callback',
  passport.authenticate('gitlab', {
    failureRedirect: '/fail'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(`${FRONTEND_URL}/admin`);
  });

app.get('/fail', function (req, res) {
  res.status(403)
  res.send(`You do not have the required permission to view this resource.<br /> <a href="${FRONTEND_URL}/admin">Return to tool</a>`)
})

app.get('/auth/logout',
  async function (req, res) {
    req.session.destroy();
    req.logOut();
    res.send({
      success: true,
      result: null
    })
  });

app.get('/user', async function (req, res) {

  if (req.isAuthenticated()) {
    res.send({ authenticated: true, user: req.user });
  } else {
    res.send({ authenticated: false });
  }
})



