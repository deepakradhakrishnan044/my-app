const express=require('express')
const app=express()
const PORT=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.json({message:'Welcome to the DevOps demo API'});
});
app.get('/health',(req,res)=>{
    res.status(200).json({status:'ok'});
});
app.get('/api/info',(req,res)=>{
    res.json({service:'devops-api',version:'1.0.0'});
});

if (require.main === module) {
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
}
module.exports = app;