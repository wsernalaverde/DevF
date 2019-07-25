const { User } = require('../../models');

const getAllUsers = async () => {
  const users = await User.find({ is_active: true }).exec(); // exec lo convierte en una promesa
  if (!users) throw new Error('Error en los usuarios');
  return users;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email }).exec();
  if (!user) throw new Error('No existe el usuario');
  return user;
};

const getUserById = async (id) => {
  const user = await User.findOne({ _id: id }).exec();
  if (!user) throw new Error('No existe el usuario');
  return user;
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserById,
};
