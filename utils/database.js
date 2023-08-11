import mongoose from 'mongoose';

let isConnected = false; // track database connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Database is connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "lonsbureau",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("MongoDB connected")
    }catch (error){
        console.log(error)
    }
}

