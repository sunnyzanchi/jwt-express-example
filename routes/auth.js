const bcrypt = require('bcrypt');
const bluebird = require('bluebird');
const express = require('express');
const router = express.Router();

// redis connection
const redis = require('redis');
const config = require('../redis.json');
const client = redis.createClient(config);
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// jwt
const jwt = require('jsonwebtoken');
const secret = require('../secret.json');
bluebird.promisifyAll(jwt);

router.post('/login', async function(req, res){
  const {user, pass} = req.body;
  if(!user || !pass) return res.status(400).send('user and pass are required');

  // get password hash from redis
  const hash = await client.getAsync(user);
  if(!hash) return res.status(401).send('User doesn\'t exist');

  const isCorrect = await bcrypt.compare(pass, hash);

  if(isCorrect){
    const token = await jwt.signAsync({user}, secret, {expiresIn: '1h'});
    res.status(200).send(token);
  }
  else res.status(401).send();
});

router.post('/create', async function(req, res){
  const {user, pass} = req.body;

  const saltRounds = 12;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(pass, salt);

  // put new user in redis
  client.set(user, hash);

  res.status(201).send('User created!');
});

module.exports = router;
