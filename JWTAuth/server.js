const express=require('express');
const routes=require('./routes/router')

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',routes)

const PORT=7777;

app.listen(PORT,()=>{
    console.log(`Server running on port no. ${PORT}`)
});