import asyncHandler from 'express-async-handler';
import Goal from '../models/goalModel.js'
import User from '../models/userModel.js'

// @desc   Get Goals
// @route  GET /api/goals
// @access Private
export const getGoals= asyncHandler(async(req,res)=>{
    const goals=await Goal.find({user:req.user.id});
    res.status(200).json(goals);
})

// @desc   Add Goal
// @route  POST /api/goals
// @access Private
export const setGoal=asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please fill the text input.')
    }
    const goal=await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.status(200).json(goal);
})

// @desc   Update Goal
// @route  PUT /api/goals/:id
// @access Private
export const updateGoal=asyncHandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found.')
    }

    //check user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found.')
    } 
    //check the goal owner and the person who want to update goal
    if(goal.user.toString() !==req.user.id){
        res.status(400)
        throw new Error('User not authorized.')
    }
    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedGoal);
})

// @desc   Delte Goal
// @route  Delete /api/goals/:id
// @access Private
export const deleteGoal=asyncHandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found.')
    }
    //check user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found.')
    } 
    //check the goal owner and the person who want to delete goal
    if(goal.user.toString() !==req.user.id){
        res.status(400)
        throw new Error('User not authorized.')
    }
    await goal.remove();
    res.status(200).json({id:req.params.id});
})