import mongoose from "mongoose";
import { use } from "react";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery',true);


    if (initialized) {
        console.log('MongoDB already connected');
        return;
    }

    try{
        await mongoose.connect( process.env.MONGODB_URI, {
            dbName:'travel',
            useNewUrlParser:true,
            useUnifiedTopology:true,
            

        });

    } catch (error) {
        console.log('Error connecting to MongoDB', error.message);
    }

    };

