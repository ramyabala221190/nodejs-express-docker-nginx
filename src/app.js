import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send(`Welcome to Express application running in ${process.env.APP_ENV} on port ${process.env.PORT}`)
})

app.listen(process.env.PORT,()=>{
    console.log(`server listening on ${process.env.PORT}`)
})