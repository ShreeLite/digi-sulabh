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

const NearbyToilets=async(req,res)=>{
//     Toilet.collection.getIndexes({ full: true }).then(indexes => {
//   console.log('Current indexes:', indexes);
// }).catch(err => {
//   console.error('Error fetching indexes:', err);
// });

    const { lat, lng, isFree, cleanliness } = req.query;

  if (!lat || !lng) return res.status(400).json({ error: 'Latitude and longitude are required' });

  const query = {
    coordinates: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [parseFloat(lng), parseFloat(lat)]
        },
        // $maxDistance: 5000 // 3km radius
      }
    }
  };

  // Filter: Free toilets
  if (isFree === 'true') {
    query.isPaid = false;
  }

  // Filter: Cleaned toilets
  if (cleanliness === 'clean') {
    query.isCleaned = true;
  }

  try {
    const toilets = await Toilet.find(query).limit(20);

    const enriched = toilets.map((toilet) => {
      
      return {
        _id: toilet._id,
        name: toilet.name,
        address: toilet.address,
        isFree: !toilet.isPaid,
        cleanliness: toilet.isCleaned ? 'clean' : 'dirty',
        lastCleaned: toilet.lastCleanedAt ? toilet.lastCleanedAt.toLocaleString() : 'N/A',
        rating: (Math.random() * 2 + 3).toFixed(1), // placeholder rating
        distance: '≈1 km' // placeholder
      };
    });

    res.json(enriched);
  } catch (error) {
    console.error('Error fetching nearby toilets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



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
    GetToilets,GetSingleToilet,AddToilet,UpdateToilet,DeleteToilet,NearbyToilets
}