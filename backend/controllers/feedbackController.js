const express=require('express')
const feedback=require('../models/feedback')
const mongoose = require('mongoose');


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



const getAverageFeedback = async (req, res) => {
  try {
    const toiletId = req.params.id; // Match your route param name (`:id`)
    
    const result = await feedback.aggregate([
      { $match: { toilet: new mongoose.Types.ObjectId(toiletId) } },
      {
        $group: {
          _id: "$toilet",
          avgRating: { $avg: "$rating" },
          avgCleanliness: { $avg: "$cleanliness" },
          avgSoap: { $avg: "$soap" },
          avgWater: { $avg: "$water" },
          avgLock: { $avg: "$lock" },
          avgLight: { $avg: "$light" },
          avgFlush: { $avg: "$flush" },
          totalFeedbacks: { $sum: 1 }
        }
      }
    ]);

    if (result.length === 0) {
      return res.status(200).json({
        avgRating: 0,
        avgCleanliness: 0,
        avgSoap: 0,
        avgWater: 0,
        avgLock: 0,
        avgLight: 0,
        avgFlush: 0,
        totalFeedbacks: 0
      });
    }

    return res.status(200).json(result[0]);
  } catch (err) {
    console.error("Error fetching average feedback:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports={
    GetAllFeedbacks,GetSingleFeedback,AddFeedback,UpdateFeedback,DeleteFeedback,getAverageFeedback
}