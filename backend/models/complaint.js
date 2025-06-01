const mongoose=require('mongoose')
const complaintSchema=new mongoose.Schema({
    toiletId:{
        type:mongoose.Schema.Types.ObjectId
        ,ref:"Toilet",
        required:true

    },
    description:{
        type:String,
        required:true

    },
    statusofComplaint:{
        type:String,
        enum:['open','in progress','resolved'],
        default:'open'

    },
    submittedAt:{
        type:Date,
        default:Date.now

    },
    resolvedAt:Date,
    resolutionNote:String,
    submittedBy:String

})

module.exports=mongoose.model('Complaint',complaintSchema);