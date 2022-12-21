import express from 'express';
const app=express();
import connectdatabase from './backend/config/database.js';
import errormiddleware from './backend/middlewares/errors.js'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv  from 'dotenv';
import path  from 'path';
import cors from 'cors';
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());
app.use(cors());

process.on("uncaughtException",err=>{
    console.log(`ERROR: ${err.stack}`);
    console.log("shutting down the server due to the uncaughtException");
    process.exit(1);
})


connectdatabase();
if (process.env.NODE_ENV !== 'production') 
{dotenv.config({ path: 'backend/config/config.env' })}


import products from './backend/routers/products.js';
import users from './backend/routers/usersroutes.js';

import orders from './backend/routers/orderroutes.js';




app.use('/api/v1', products);
app.use('/api/v1',users);
app.use('/api/v1',orders);  


app.use(errormiddleware);


const port =process.env.PORT||8000

if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
const server=app.listen(port,(err)=>{
    console.log(`server start on port :${port}`);

})
//unhandledRejection
process.on("unhandledRejection",err=>{
    console.log(`ERROR:${err.stack}`);
    console.log('shutting down the server due to unhandledRejection');
    server.close(()=>{
        process.exit(1);
    });

})