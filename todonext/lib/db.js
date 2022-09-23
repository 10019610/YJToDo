import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://a10019610:did8847@cluster0.inu0jfv.mongodb.net/auth?retryWrites=true&w=majority"
  );
  return client;
}
