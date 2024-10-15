import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect("mongodb+srv://tanishqjain7310:Tanishq071003@cluster0.pky1d1d.mongodb.net/food-del").then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.