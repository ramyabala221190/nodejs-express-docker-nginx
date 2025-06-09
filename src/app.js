import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send(`Welcome to Express application running in ${process.env.APP_ENV} on port ${process.env.APP_PORT}`)
})

app.listen(process.env.APP_PORT,()=>{
    console.log(`server listening on ${process.env.APP_PORT}`)
})