const { response, request } = require("express");
const User = require("../models/userModel");

exports.getFormUser = async (req, res) => {
  try {
    const formData = await User.find({});
    res.json(formData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.saveFormUser = async (req, res) => {
  const { name, email, type, date, phone, city, impo, comments } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      type,
      date,
      phone,
      city,
      impo,
      comments,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserCount = async (req, res) => {
  try {
    const result = await User.find({}).countDocuments();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
};

exports.editUser = async (req,res) => {
  let user = req.body;
  const editUser = new User(user);
  try{
    await User.updateOne({email: req.params.email}, editUser);
    res.status(201).json(editUser);
  }catch(error){
    res.status(409).json({message: error.message});
  }
}

exports.deleteUser = async (req, res) => {
  try{
    await User.deleteOne({email: req.params.email});
    res.status(200).json({message: "User Deleted"});
  }catch (error) {
    response.status(409).json({message: error.message});
  }
}