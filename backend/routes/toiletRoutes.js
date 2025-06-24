const express=require('express')
const router=express.Router();
const {
    GetToilets,GetSingleToilet,AddToilet,UpdateToilet,DeleteToilet,NearbyToilets
}  =require('../controllers/toiletControllers')

//GET/api/toilet
router.get('/',GetToilets);

//To get toilets based on user location
//GET/api/toilet/nearby
router.get('/nearby',NearbyToilets);

//GET/api/toilet/:id
 router.get('/:id',GetSingleToilet);

//POST/api/toilet
router.post('/',AddToilet)

//PUT/api/toilet/:id
router.put('/:id',UpdateToilet)

//DELETE/api/toilet/:id
router.delete('/:id',DeleteToilet)

module.exports=router;