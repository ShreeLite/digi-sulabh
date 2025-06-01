const express=require('express')
const router=express.Router();
const {
    GetToilets,GetSingleToilet,AddToilet,UpdateToilet,DeleteToilet
}  =require('../controllers/toiletControllers')

//GET/api/toilets
router.get('/',GetToilets);

//GET/api/toilets/:id
router.get('/:id',GetSingleToilet);

//POST/api/toilets
router.post('/',AddToilet)

//PUT/api/toilets/:id
router.put('/:id',UpdateToilet)

//DELETE/api/toilets/:id
router.delete('/:id',DeleteToilet)

module.exports=router;