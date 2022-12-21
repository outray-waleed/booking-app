
import express from"express";
import { countByCityName, countByType, createHotel, deleteHotel, getallHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import  Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const  router=express.Router();


//CREATE
router.post("/",verifyAdmin,createHotel)

//UPDATE
router.put("/:id",verifyAdmin, updateHotel)


//DELETE
router.delete("/:id",verifyAdmin,  deleteHotel)



//GET
router.get("/find/:id",getHotel)


//GET ALL
router.get("/",getallHotel)
router.get("/countByCityName",countByCityName)
router.get("/countByType",countByType)







export default router;







