import { MongoClient } from "mongodb";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  const client = await connectToDatabase();

  if (req.method === "GET") {
    const db = client.db();
    const data = await db
      .collection("users")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ message: data });
  }
}
export default handler;
