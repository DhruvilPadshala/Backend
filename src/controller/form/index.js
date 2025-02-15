const Form = require("../../model/formModel");

const createForm = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const { name, email, phone, message, date } = req.body;

  const emailFind = await Form.findOne({ email });

  if (emailFind) {
    return res.status(400).json({ error: "Email already exists" });
  }

  try {
    const form = new Form({
      name,
      email,
      phone,
      message,
      image: req.file.filename,
      date,
    });

    await form.save();
    res.status(200).json({ data: form, message: "Form created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createForm };
