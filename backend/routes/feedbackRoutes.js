const express=require('express')
const {GetAllFeedbacks,GetSingleFeedback,AddFeedback,UpdateFeedback,DeleteFeedback,getAverageFeedback}=require('../controllers/feedbackController')
const router=express.Router();

//GET/api/feedback
//getting all feedbacks
router.get('/',GetAllFeedbacks);
//GET/api/feedback/id(From toilet Id)
router.get('/:id',GetSingleFeedback);
//POST/api/feedback
router.post('/',AddFeedback);
//PUT/api/feedback
router.put('/:id',UpdateFeedback);
//DELETE/api/feedback
router.delete('/:id',DeleteFeedback);

router.get('/average/:id',getAverageFeedback)

module.exports=router;

