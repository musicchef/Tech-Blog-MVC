const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'user1',
    password: bcrypt.hashSync('password1', 10),
  },
  {
    username: 'johndoe',
    password: bcrypt.hashSync('password2', 10),
  },
  {
    username: 'iH8griffith',
    password: bcrypt.hashSync('password3', 10),
  },
  {
    username: 'LaniJ99',
    password: bcrypt.hashSync('password4', 10),
  },
  {
    username: 'raymond.b077',
    password: bcrypt.hashSync('password5', 10),
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
