const express = require('express');

const bodyParser = require('body-parser');

const middlewares = require('./models/middlewares');

const User = require('./models/User');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/users', async  (req, res) => {
  try {
    const users = await User.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

app.post('/users', middlewares.createUser, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const users = await User.createUser({ firstName, lastName, email, password });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
