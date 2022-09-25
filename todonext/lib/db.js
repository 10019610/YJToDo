import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const connectDB = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.inu0jfv.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectDB);

  return client;
}
