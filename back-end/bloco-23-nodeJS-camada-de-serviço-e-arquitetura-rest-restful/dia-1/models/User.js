const connection = require('./connection');

const serialize = (user) => {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    password: user.password,
  }
}

const getAllUsers = async() => {
  const [ users ] = await connection.execute(`SELECT * FROM users_crud.users`);
  return users.map(serialize);
};

const createUser = async ({ firstName, lastName, email, password }) => {
  const [{ insertId }] = await connection.execute(`INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)`,
    [firstName, lastName, email, password]);
  return {
    id: insertId,
    firstName,
    lastName,
    email,
    password,
  }
}

module.exports = {
  getAllUsers,
  createUser,
};
