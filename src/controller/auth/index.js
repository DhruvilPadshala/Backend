const User = require("../../model/userModel");
const jwt = require("jsonwebtoken");
const { compare } = require("bcrypt");
const { hash } = require("bcrypt");

// login

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await User.findOne({ email });
    if (!users) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await compare(password, users.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const tokenData = createToken({
      id: users._id.toString(),
      email: users.email,
      fullname: users.fullname,
      phone: users.phone,
      address: users.address,
      gender: users.gender,
    });

    res.status(200).json({
      message: "Login successful",
      token: tokenData.token,
    });
  } catch (error) {
    res.status(500).json({ error, error: "Internal Server Error" });
  }
};

// signup

const signup = async (req, res) => {
  const { email, password, fullname, phone, address, gender } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      fullname,
      phone,
      address,
      gender,
    });

    await newUser.save();

    const tokenData = createToken({
      id: newUser._id,
      email: newUser.email,
      fullname: newUser.fullname,
      phone: newUser.phone,
      address: newUser.address,
      gender: newUser.gender,
    });

    res.status(201).json({
      newUser,
      token: tokenData.token,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
function createToken(userData) {
  const dataStoredInToken = { ...userData, password: undefined };
  const secretKey = process.env.SECRET_KEY || "yourSecretKey";
  return { token: jwt.sign(dataStoredInToken, secretKey) };
}

module.exports = { login, signup, createToken };
