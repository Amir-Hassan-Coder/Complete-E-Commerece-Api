import mongoose from "mongoose";

const connectDb =async ()=>{
    try {
        const dbconnect = await mongoose.connect(process.env.DBURL);
        console.log("DB Connected Succsesfully ✔️ ✔️");
        
    } catch (error) {
        console.log("Db Connection error ✂️ ");
        
    }
}

export default connectDb;