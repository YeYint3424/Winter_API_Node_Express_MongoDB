const userServices = require("../services/userServices");

const createUser = async (req, res) => {
  const userData = req.body;
  const result = await userServices.createUser(userData);
  res.json(result);
};

const getUserById = async (req, res) => {
  const userId = req.params.userId;

  const result = await userServices.get_user_by_id(userId);
  res.json(result);
};

const userUpdate = async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;

  const result = await userServices.userUpdate(userId, userData);
  res.json(result);
};

const userDelete = async (req, res) => {
  const userId = req.params.userId;
  const userData = {
    status: false,
  };

  const result = await userServices.userUpdate(userId, userData);
  res.json(result);
};

const allUsers = async (req, res) => {
  try {
    const result = await userServices.allUsers();
    res.json(result);
  } catch (err) {
    console.log(err.message);
  }
};

const userFind = async (req,res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const result = await userServices.userFind(email,password)
    res.json(result)
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  createUser,
  getUserById,
  userUpdate,
  userDelete,
  allUsers,
  userFind
};
