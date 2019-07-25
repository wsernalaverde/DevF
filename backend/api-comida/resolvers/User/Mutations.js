const { User } = require('../../models');

// TODO: Pasar los parámetros de graphql 

const createUser = async (user) => {
  const newUser = User(user);
  newUser.save((err, user) => {
    if (err) throw new Error(err);
    return user;
  });
};

module.exports = {
  createUser,
};
