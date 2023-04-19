import User from "../models/userModel.js";
import {validateSignUp, validateUpdate} from "../utilities/validation/userValidation.js";
import {errorMessage, successMessage, errorHandler} from "../utilities/responses.js";
import generateToken from "../utilities/jwt.js";


const createUser = async (req, res) => {
  try {
    const valid = validateSignUp(req.body);
    if (!valid) {
      return res.status(400).send(valid.error.message);
    }
    const {name, gender} = req.body;
    const newUser = new User({
      name,
      gender
    })
   ; await newUser.save();
    return successMessage(res, 201, "User created succesfully.", {newUser});
  } catch (error) {
    errorHandler(error, req);
    return errorMessage( res, 500, error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await User.findById({_id: userId});
    if (!user) {
      return errorMessage(res, 404, "User not found");
    }
    const token = await generateToken({_id: userId});
    return successMessage(res, 200, "user fetched successfully", {user, token});
  } catch (error) {
    errorHandler(error, req);
    return errorMessage(res, 500, error.message);
  }
};

const updateUsers = async ( req, res) =>{
  try {
    const valid = validateUpdate(req.body);
    if (!valid) {
      return errorMessage(res, 400, valid.error.mesage);
    }
    const {userId} = req.params;
    const user = await User.findByIdAndUpdate({_id: userId});
    if (!user) {
      return errorMessage( res, 404, "user not found");
    }
    return successMessage(res, 200, "User updated Successfully", {result});
  } catch (error) {
    errorHandler(error, req);
    return errorMessage(res, 500, error.message);
  }
};

const deleteUser = async (req, res) =>{
  try {
    const {userId} = req.params;
    const user = await User.findByIdAndDelete({_id: userId});
    if (!user) {
      return errorMessage(res, 404, "User not found");
    }
    return successMessage(res, 200, "User successfully deleted");
  } catch (error) {
    errorHandler(error, req);
    errorMessage(res, 500, error.message);
  }
};

const findAllUsers = async (req, res) =>{
  try {
    const users = await User.find();
    return successMessage(res, 200, "Users found successfully", {users});
  } catch (error) {
    errorHandler(error, req);
    return errorMessage(res, 500, error.message);
  }
};

const findMaleUsers = async (req, res) => {
  try {
    const {genderType} = req.params;
    const {_id} = req.user;
    const user = await User.findById({_id});
    if (!user) {
      return errorMessage(res, 404, "Authentication user not found");
    }
    const maleUsers = await User.find({gender: genderType});
    return successMessage( res, 200, "male users successfully fetched", {maleUsers});
  } catch (error) {
    errorHandler(error, req);
    return errorMessage( res, 500, error.message);
  }
};

export {createUser, getUserById, updateUsers, deleteUser, findAllUsers, findMaleUsers};
