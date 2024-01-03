const User = require("../models/user");

const createUser = async (userData) => {
  const user = new User(userData);
  try {
    const result = await user.save();
    return result;
  } catch (error) {
    return error;
  }
};

const get_user_by_id = async (userId) => {
  try {
    const result = await User.findById(userId);
    return result;
  } catch (error) {
    return { error: error };
  }
};

const userUpdate = async (userId, userData) => {
  try {
    const result = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const allUsers = async () => {
  try {
    const result = await User.find();
    return result;
  } catch (error) {
    return error;
  }
};

const userFind = async (email, password) => {
  try {
    const result = await User.findOne({ email: email, password: password });
    return result;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};


module.exports = {
  createUser,
  get_user_by_id,
  userUpdate,
  allUsers,
  userFind
};
