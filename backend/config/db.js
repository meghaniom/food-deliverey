import mongoose from "mongoose";

 export    const connectDB = async() => {
    await mongoose.connect('mongodb+srv://ommeghani:om3538@cluster0.ig82k7r.mongodb.net/food-deliverey').then(()=> console.log("DB Connected"));

    

}