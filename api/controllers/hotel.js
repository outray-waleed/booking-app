import Hotel from"../models/Hotel.js";
//CREATE HOTEL
export const createHotel = async(req,res,next)=>{
    const newHotel= new Hotel(req.body)

    try {
    const savedHotel= await newHotel.save();
    res.status(200).json(savedHotel)
    } catch (err) {
      next(err)
    }
}
//UPDATE HOTEL HOTEL
export const updateHotel= async(req,res,next)=>{
    try {
        const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updatedHotel)
        } catch (err) {
      next(err)
    }
}
//DELETE HOTEL
export const deleteHotel= async(req,res,next)=>{
    try {
    
        await Hotel.findByIdAndDelete( req.params.id)
       res.status(200).json("hotel has been deleted")
       } catch (err) {
      next(err)
    }
}
//GET HOTEL
export const getHotel= async(req,res,next)=>{
    try {
        const hotel= await Hotel.findById(req.params.id)
        
        res.status(200).json(hotel)
        }  catch (err) {
      next(err)
    }
}
//GETALL HOTEL
export const getallHotel= async(req,res,next)=>{
    
    try {
        const hotels= await Hotel.find()
        
        res.status(200).json(hotels)
        } catch (err) {
      next(err)
    }
}
//COUNT BY CITY NAME
export const countByCityName= async(req,res,next)=>{
    const cities= req.query.cities.split(",")
    try {
        const list= await Promise.all(cities.map(city=>{
           return Hotel.countDocuments({city:city})
        }))
        
        res.status(200).json(list)
        } catch (err) {
      next(err)
    }
}
//COUNT BY TYPE
export const countByType= async(req,res,next)=>{
  try {
      const hotelCount =Hotel.countDocuments({type:"hotel"})
      const apartmentCount =Hotel.countDocuments({type:"apartment"})
      const villaCount =Hotel.countDocuments({type:"villa"})
      const resortCount =Hotel.countDocuments({type:"resort"})
      const cabinCount =Hotel.countDocuments({type:"cabin"})
        
        res.status(200).json([
          {type:"hotels",count:hotelCount},
          {type:"apartments",count:apartmentCount},
          {type:"villas",count:villaCount},
          {type:"resorts",count:resortCount},
          {type:"cabins",count: cabinCount},
        ])
        } catch (err) {
      next(err)
    }
}