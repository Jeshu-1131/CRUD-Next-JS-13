import mongoose from "mongoose";

const connectMDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected')
    }catch(error){
        console,log(error);
    }
};

export default connectMDB;