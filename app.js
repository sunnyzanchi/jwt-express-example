const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('jwt-express');
const path = require('path');
const secret = require('./secret.json');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(jwt.init(secret, {
  cookies: false
}));
app.use(function(err, req, res, next){
  console.log(err);
  if(err.name === 'JWTExpressError')
    // user is unauthorized
    return res.status(401).send();

  next(err);
});

app.get('/protected', jwt.valid(), function(req, res){
  res.send('Top secret data!');
})
const auth = require('./routes/auth');
app.use(auth);

app.listen(3000);
