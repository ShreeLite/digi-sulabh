const express=require('express')
const path=require('path')
const dotenv=require('dotenv').config();
const mongoose=require('mongoose');
const app=express();

async function connect()
{
    try{
       await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongodb')
    }
    catch(err)
    {
        console.log(err)
    }
}

app.listen(process.env.PORT,()=>{
    console.log('SERVER IS UP')
})

connect();