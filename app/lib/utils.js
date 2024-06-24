import mongoose from "mongoose";

const connection = {}; // Moved outside the function to maintain state

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing database connection");
            return;
        }

        console.log("Creating new database connection");
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections.readyState;

        console.log("Database connection established");
    } catch (err) {
        console.error("Database connection error:", err);
        throw new Error(err);
    }
};

