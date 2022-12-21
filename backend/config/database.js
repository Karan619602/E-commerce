import  mongoose  from "mongoose"
import dotenv  from 'dotenv';
 

if (process.env.NODE_ENV !== 'production') 
{dotenv.config({ path: 'backend/config/config.env' })}
const connectdatabase =()=>{
   mongoose.connect(process.env.CONNECTION_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    }).then( (con)=>{
console.log(`connect to database : ${con.connection.host}`);
    })
}

export default connectdatabase;