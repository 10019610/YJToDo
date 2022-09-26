import { MongoClient } from "mongodb";

async function handler(req, res) {
  const removeId = req.body;

  if (req.method === "DELETE") {
    const client = await MongoClient.connect(
      "mongodb+srv://a10019610:did8847@cluster0.inu0jfv.mongodb.net/test?retryWrites=true&w=majority"
    );
    const db = client.db();
    const result = await db
      .collection("yjTodo")
      .deleteOne({ _id: removeId.id });
  }
  res.status(200).json({ message: "Success" });
  console.log(removeId.id);
}

export default handler;
