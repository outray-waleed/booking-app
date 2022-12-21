import Room  from "../models/Room.js"
import Hotel  from "../models/Hotel.js"
import { createError } from "../utils/error.js"

export const createRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try{
    const savedRoom = await newRoom.save()
      try {
          await Hotel.findByIdAndUpdate(hotelId, {$push})
      } catch (err) {
        next(err)
        
      }
     res.status(200).json(savedRoom)
    }catch(err){
        next(err   )
    }
}

//UPDATE HOTEL HOTEL
export const updateRoom= async(req,res,next)=>{
    try {
        const updatedRoom= await Room.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updateRoom)
        } catch (err) {
      next(err)
    }
}
//DELETE HOTEL
export const deleteRoom= async(req,res,next)=>{
    const hotelId = req.params.hotelId;
    try {
    
        await Room.findByIdAndDelete( req.params.id)
        try {
            await Room.findByIdAndUpdate(hotelId,{
                $pull: {rooms: req.params.id}
            })
        } catch (err) {
            next(err)
        }
       res.status(200).json("hotel has been deleted")
       } catch (err) {
      next(err)
    }
}
//GET HOTEL
export const getRoom= async(req,res,next)=>{
    try {
        const room= await Room.findById(req.params.id)
        
        res.status(200).json(room)
        }  catch (err) {
      next(err)
    }
}
//GETALL HOTEL
export const getallRoom= async(req,res,next)=>{
    
    try {
        const rooms= await Room.find()
        
        res.status(200).json(rooms)
        } catch (err) {
      next(err)
    }
}