import mongoose from "mongoose";

const connectDB = async () =>{
try{
    await mongoose.connect("mongodb+srv://kathir2004:5ljhFIOpTKlFtMyA@cluster0.gx5de.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('mongodb is connected successfully');
}
catch(error)
{
    console.error(error.message);
    process.exit(1);
}
}
export default connectDB;
