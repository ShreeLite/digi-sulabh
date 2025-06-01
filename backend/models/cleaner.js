const mongoose=require('mongooose')
const cleanerSchema=new mongoose.Schema({
    toilet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Toilet",
        required:true
    },
    cleanerName:{
        type:String,
        required:true
    },
    photos:[String],   //urls for cloudinary images
    inspectionResult:{
        type:String,
        enum:['clean','not clean'],
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Cleaner',cleanerSchema)