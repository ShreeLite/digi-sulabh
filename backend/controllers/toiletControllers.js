const express=require('express')
const Toilet = require('../models/toilet')


//A function to get all the toilets from the database(from the model Toilet)
//GET/api/toilets
const GetToilets=async (req,res)=>{
    try{
        const toilets=await Toilet.find();
        res.status(200).json(toilets);
        console.log('Toilets fetched successfully!')
    }
    catch(err)
    {
        res.status(500).send('Internal Server Error')
        console.log('Couldnt fetch toilets',err.message)
    }

}

//A function to get a single toilet from the database by id(from the Model Toilet)
//GET/api/toilets/:id
const GetSingleToilet=async (req,res)=>{
    try{
        const toilets=await Toilet.findById(req.params.id);
        if(!toilets)
        {
           return res.status(404).send('Toilet not found')
        }
        res.status(200).json(toilets);
        console.log('Toilet fetched successfully!');
    
    }
    catch(err)
    {
        res.status(500).send('Internal Server Error')
        console.log('Couldnt fetch the toilet',err.message)
    }
}

//A function to add a new toilet to the database
//POST/api/toilets

const AddToilet=async (req,res)=>{
    console.log(req.body)
    try{
          const newToilet=new Toilet(req.body);
          const savedToilet=await newToilet.save();
          res.status(201).json(savedToilet);
          console.log('Toilet added successfully!')
    }
    catch(err)
    {
        res.status(400).send('Bad request')
        console.log('Couldnt Add Toilet',err.message)
    }
}

//A function to update toilet details
//PUT/api/toilets/:id

const UpdateToilet=async (req,res)=>{
   try
   { const Updatedtoilet=await Toilet.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!Updatedtoilet)
    {   
        console.log('Cant find the toilet')
        return res.status(404).send('Toilet Not Found')
        
    }
    res.status(200).json(Updatedtoilet);
    console.log('Toilet updated successfully!')
}
catch(err)
{
    res.status(500).send('Internal Server Error');
    console.log('Cant update the toilet',err.message)
}

}

//A function to delete a toilet by id
//DELETE/api/toilets/:id
const DeleteToilet=async (req,res)=>{
    try
   { const ToiletToDelete=await Toilet.findByIdAndDelete(req.params.id);
    if(!ToiletToDelete)
    {
        console.log('Toilet Not Found');
      return  res.status(404).send('Toilet Not Found');
    }
        res.status(200).send('User Deleted Successfully!')}
    catch(err)
    {
         console.log('Cant delete the toilet');
         res.status(500).send('Internal Server Error',err.message)
    }
}

module.exports={
    GetToilets,GetSingleToilet,AddToilet,UpdateToilet,DeleteToilet
}