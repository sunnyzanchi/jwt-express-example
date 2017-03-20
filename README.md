Build
-----
The app needs to be able to connect to a Redis server to run, so start one up before running the app.
Set your options for your Redis server in `redis.json` in the root. If you want to use the default options, set `redis.json` to be an empty object (`{}`).

The app needs a secret to generate its JWTs with.
Add your secret as a plain string in `secret.json` in the root. Look at `example-secret.json` if you're unsure.

1. Run `yarn`
2. Run `gulp`

You can see it in action at https://jwt-auth-example.herokuapp.com/ (it might take a second to load, it's hosted on the free tier)
