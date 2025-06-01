const express=require('express')
const feedback=require('../models/feedback')

const GetAllFeedbacks=async (req,res)=>{
    try{
        const feedbacks=await feedback.find();
        res.status(200).json(feedbacks);
        console.log('Feedbacks fetched successfully!');

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}

const GetSingleFeedback=async (req,res)=>{
    const id=req.params.id;
    try
  {  const fetchedfeedback= await feedback.findById(id);
    if(!fetchedfeedback)
    {
        console.log('Feedback Not Found');
        return res.status(404).json('Feedback Not Found');

    }
    res.status(200).json(fetchedfeedback);
    
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json('Internal Server Error')
  }

}
const AddFeedback=async (req,res)=>{
    try{
          const newFeedback=new feedback(req.body);
          const savedFeedback=await newFeedback.save();
          console.log('Feedback Added Successfully!')
          res.status(201).json(savedFeedback);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}
const UpdateFeedback=async (req,res)=>{
    const id=req.params.id;
    try{
    const Updatedfeedback= await feedback.findByIdAndUpdate(id,req.body,{new:true})
    if(!Updatedfeedback)
    {   console.log('Feedback Not Found!')
        return res.status(404).json('Feedback Not Found')
    }
      console.log('Feedback Uploaded Successfully!')
    res.status(200).json(Updatedfeedback)}
    catch(err)
    {
        console.log(err);
        res.status(500).json("Internal Server Error!")
    }
}

const DeleteFeedback=async (req,res)=>{
    try{
    const id=req.params.id;
    const Feedbacktodelete=await feedback.findByIdAndDelete(id);
    if(!Feedbacktodelete)
    {
        console.log('Feedback Not Found!')
      return  res.status(404).json('User Not Found')
    }
    console.log('Feedback Deleted Successfully!')
    res.status(200).json('Feedback Deleted Succesfully!')}
    catch(err)
    {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}

module.exports={
    GetAllFeedbacks,GetSingleFeedback,AddFeedback,UpdateFeedback,DeleteFeedback
}