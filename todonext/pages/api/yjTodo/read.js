import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://a10019610:did8847@cluster0.inu0jfv.mongodb.net/test?retryWrites=true&w=majority"
    );
    const db = client.db();
    const posts = await db
      .collection("yjTodo")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ message: posts });
  }

  // if (req.method === "DELETE") {
  //   const client = await MongoClient.connect(
  //     "mongodb+srv://a10019610:did8847@cluster0.inu0jfv.mongodb.net/test?retryWrites=true&w=majority"
  //   );
  //   const db = client.db();
  //   const remove = await db.collection("yjTodo").deleteOne({ _id: removeId });
  // }
}
export default handler;
