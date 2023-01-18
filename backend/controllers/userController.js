import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc :   Register new user
// @route :  POST /api/users
// @access : Public
export const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields.')
    }

    //check user
    const userExist=await User.findOne({email});
    if (userExist) {
        res.status(400)
        throw new Error('User is already exist.')
    }
    
    //hash password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);

    //create a user 
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    });

    if (user) {
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        });
    } else {
        res.status(400)
        throw new Error('Invalid user data.')
    }

})


// @desc :   Authenticate a user
// @route :  POST /api/users/login
// @access : Public
export const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if (user && (await bcrypt.compare(password,user.password))) {
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        });
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }


})
// @desc :   Get User Data
// @route :  Get /api/users/me
// @access : Private
export const getMe=asyncHandler(async(req,res)=>{
    res.status(200).json(req.user)
})



//Generate JWT
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET_KEY,{
        expiresIn:'1d',
    })
}