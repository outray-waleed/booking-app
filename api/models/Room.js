import mongoose from"mongoose";
const { Schema } = mongoose;



const RoomSchema= new mongoose.Schema({

    username:{
        type:String,
        required:true
        
    },
    price:{
        type:String,
        required:true
        
    },
    maxPeople:{
        type:String,
        required:true
        
    },
    desc :{
        type:String,
        required:true
    },
    roomNUmbers:[{number:Number, unavailableDates:{type: [Date]}}],
},{timestamps:true})


export  default mongoose.model("Room",RoomSchema)