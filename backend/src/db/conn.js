const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/form",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection is successful')
}).catch((err)=>{
    console.log('error is '+err)
})