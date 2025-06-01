const express=require('express')
const path=require('path')
const dotenv=require('dotenv').config();
const mongoose=require('mongoose');

//importing the routers
const toiletRouter=require('./routes/toiletRoutes');
const feedbackRouter=require('./routes/feedbackRoutes')
const complaintRouter=require('./routes/complaintRoutes')
const cleanerRouter=require('./routes/cleanerRoutes')

const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/toilet',toiletRouter)
app.use('/api/feedback',feedbackRouter)
app.use('/api/complaint',complaintRouter);
app.use('/api/cleaner',cleanerRouter)

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