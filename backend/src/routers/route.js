const express= require("express")
const router= new express.Router();

const NewUser=require("../models/user");
router.post("/register1",async(req,res)=>{
    const {name, password}=req.body;
    // console(req.body);
    if(!name|| !password){
        return res.status(422).json({error:"Plz filled the field properly"});
    }
    try{
        //adding new user to db
      // req.body se postman se data milega
        console.log(req.body);
       const user= new NewUser({name,password});
       await user.save();
      res.status(201).json({message:"User resgistered successfully"});

    //   const addUser= new NewUser(req.body);
    //   const insertUser= await addUser.save();
      //201 for new user
      
    //   res.status(201).send(insertUser)
    }
    catch(err){
       console.log("error")
       res.status(400).send(err);
    }
})

router.get("/users",async(req,res)=>{
    try{
        //adding new user to db
      // req.body se postman se data milega
        console.log(req.body);

     const getUsers=await NewUser.find({});
      res.status(201).send(getUsers)
    }
    catch(err){
       console.log("error");
       res.status(400).send(err);
    }
})
router.get("/user/:id",async(req,res)=>{
    try{
        //adding new user to db
      // req.body se postman se data milega
    
      const _id=req.params.id;
     
      const getUser=await NewUser.findById({_id:_id});
      console.log(getUser);
      res.status(201).send(getUser)
    }
    catch(err){
       console.log("error");
       res.status(400).send(err);
    }
})

router.patch("/user/:id",async(req,res)=>{
    try{
        //adding new user to db
      // req.body se postman se data milega
      const _id=req.params.id;
      const getUser=await NewUser.findByIdAndUpdate(_id,req.body,{
        new:true
      });
      console.log(getUser);
      res.status(201).send(getUser)
    }
    catch(err){
       console.log("error");
       //server related error is shown by 500
       res.status(500).send(err);
    }
})

router.delete("/user/:id",async(req,res)=>{
    try{
        //adding new user to db
      // req.body se postman se data milega
    console.log("deleted data")
      const _id=req.params.id;
     
      const delUser=await NewUser.findByIdAndDelete({_id:_id});
      console.log(delUser);
      res.status(201).send(delUser)
    }
    catch(err){
       console.log("error");
       res.status(400).send(err);
    }
})

module.exports =router;