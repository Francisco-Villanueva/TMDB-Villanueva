const { User } = require("../../models/User");
const { generateToken, validateToken } = require("../../config/tokens");

const register = async (req, res) => {
  try {
    const { email, password, name, lastname } = req.body;

    const newUser = await User.create({
      email: email,
      lastname: lastname,
      name: name,
      password: password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log({ error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userToCheck = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!userToCheck) {
      return res.sendStatus(401);
    }

    const pwCheck = await userToCheck.validatePassword(password);

    if (!pwCheck) {
      return res.sendStatus(401);
    } else {
      const payload = {
        email: userToCheck.email,
        name: userToCheck.name,
      };

      const token = generateToken(payload);

      console.log("USER LOGGED!");

      res.cookie("token", token);

      res.json(payload);
    }
  } catch (error) {
    console.log({ error });
  }
};
const secret = async (req, res) => {
  const { token } = req.cookies;
  const { user } = validateToken(token);

  // console.log(user);
  req.user = user;
  res.send(user);
};

const logOut = (req, res) => {
  const { token } = req.cookies;
  res.clearCookie(token);

  res.sendStatus(204);
};
const me = (req, res) => {
  res.send(req.user);
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(401).send(error);
  }
};
module.exports = {
  register,
  login,
  secret,
  logOut,
  me,
  getAllUsers,
};
