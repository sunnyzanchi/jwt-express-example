const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('jwt-express');
const path = require('path');
const secret = require('./secret.json');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(jwt.init(secret, {
  /* We're using the Authorization header instead
   * Expects the token like so:
   * Authorization: Bearer <token>
   */
  cookies: false
}));

app.get('/protected', jwt.valid(), function(req, res){
  res.send('Top secret data!');
})

app.get('/non-protected', function(req, res){
  res.send('Regular non-privileged data');
});

const auth = require('./routes/auth');
app.use(auth);

app.use(function(err, req, res, next){
  if(err.name === 'JWTExpressError')
    // user is unauthorized
    return res.status(401).send();

  next(err);
});

// app level error handler
app.use(function(err, req, res, next){
  return res.status(500).send(err);
});

app.listen(3000);
