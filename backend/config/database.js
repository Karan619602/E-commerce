import  mongoose  from "mongoose"
import dotenv  from 'dotenv';
 

{dotenv.config({ path: 'backend/config/config.env' })}
const  CONNECTION_URL= "mongodb+srv://karan619:11014803119@cluster0.ivb6v.mongodb.net/ecommerce?retryWrites=true&w=majority"

const connectdatabase =()=>{
   mongoose.connect(CONNECTION_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    }).then( (con)=>{
console.log(`connect to database : ${con.connection.host}`);
    })
}

export default connectdatabase;