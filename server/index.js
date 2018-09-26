const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const app = express();
const request = require('request');
const querystring = require('querystring');

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = require('../secrets');

// spotify redirect
let redirect_uri = process.env.REDIRECT_URI || 'http://localhost:8080/callback';

module.exports = app;

// Logging middleware
app.use(volleyball);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(
  express.static(
    path.join(__dirname, '..', 'node_modules', 'font-awesome', 'css')
  )
);
app.use(
  '/fonts',
  express.static(
    path.join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts')
  )
);

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./api'));

// spotify login route
app.get('/login', (req, res) => {
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri
      })
  );
});

// callback after the user logs into spotify
app.get('/callback', (req, res) => {
  let code = req.query.code || null;
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString(
          'base64'
        )
    },
    json: true
  };
  request.post(authOptions, (error, response, body) => {
    if (error) throw error;
    const access_token = body.access_token;
    let uri = process.env.FRONTEND_URI || 'http://localhost:8080';
    res.redirect(uri + '?access_token=' + access_token);
  });
});

// This middleware will catch any URLs resembling a file extension
// for example: .js, .html, .css
// This allows for proper 404s instead of the wildcard '#<{(|' catching
// URLs that bypass express.static because the given file does not exist.
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
