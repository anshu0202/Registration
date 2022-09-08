const express=require("express");
const app=express();
// const NewUser= require("../src/models/user")
const router=require("./routers/route")
require("../src/db/conn")
const port=process.env.PORT || 5000;

// it is use so tell the express that the data is in json format
app.use(express.json());
app.use(router);
app.get("/", async(req,res)=>{
   res.send("Hello from the back");
})

//now to add new user
app.listen(port,()=>{
    console.log(`connection is to port ${port}`);
})