const mongoose=require('mongoose')
const feedbackSchema=new mongoose.Schema({
 toilet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Toilet",
        required:true
    },rating:{
        type:Number,
        min:1,
        max:5,
        required:true

    },
    cleanliness:{
        type:Number,
        min:1,
        max:5
    },
    soap:{
        type:Number,
        min:1,
        max:5
    },
    water:{
        type:Number,
        min:1,
        max:5
    },
    lock:{
        type:Number,
        min:1,
        max:5
    },
    light:{
        type:Number,
        min:1,
        max:5
    },
    flush:{
        type:Number,
        min:1,
        max:5
    },
    comments:String,
    submittedAt:{
        type:Date,
        default:Date.now
    }


})

module.exports=mongoose.model('Feedback',feedbackSchema);