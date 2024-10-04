import mongoose from "mongoose";

const MONGODB_URL = "mongodb+srv://simonadjei70:fEAzRvC46lfg3rVx@focus.kv1prmo.mongodb.net/?retryWrites=true&w=majority&appName=focus";
console.log(MONGODB_URL);

// Define a type for the cached object
interface Cached {
  conn: typeof mongoose | null;
  promise: ReturnType<typeof mongoose.connect> | null;
}

// Extend the global object with mongoose cache
const globalWithMongoose = global as typeof global & { mongoose: Cached };

// Initialize cached object for connection and promise
const cached: Cached = globalWithMongoose.mongoose || { conn: null, promise: null };

export const connectToDB = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("MONGODB_URL is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect('mongodb+srv://simonadjei70:ZHGEos0zxxZVNcBJ@cluster0.zjh2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: "testing-mentee",
      bufferCommands: false,
      connectTimeoutMS: 40000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
