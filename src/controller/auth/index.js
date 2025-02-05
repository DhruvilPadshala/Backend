const Auth = require("../../model/authModel");

// login

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await Auth.findOne({ email, password });
    if (!users) {
      return res.status(404).json({ error: "User not found" });
    }
    if (users.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }
    res.status(200).json({ data: users, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// signup

const signup = async (req, res) => {
  const { email, password, fullname, phone, address, gender } = req.body;
  try {
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }
    const hashpaaword = await hash(password, 10);
    const newUser = new Auth({
      email,
      password: hashpaaword,
      fullname,
      phone,
      address,
      gender,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { login, signup };
