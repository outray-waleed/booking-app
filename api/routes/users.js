
import express from "express";
import { deleteUser, getallUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();

router.get("/checkAuthentication", verifyToken,(req,res,next)=>{
    res.send("hello User,you are logged in")
})
router.get("/checkUser", verifyUser,(req,res,next)=>{
    res.send("hello User,you are logged in and you can delete your account")
})
router.get("/checkAdmin", verifyAdmin,(req,res,next)=>{
    res.send("hello Admin,you are logged in and you can delete all accounts")
})

//UPDATE
router.put("/:id",verifyUser, updateUser)


//DELETE
router.delete("/:id",verifyUser,deleteUser)



//GET
router.get("/:id",verifyUser, getUser)


//GET ALL
router.get("/",verifyAdmin,getallUser)



export default router