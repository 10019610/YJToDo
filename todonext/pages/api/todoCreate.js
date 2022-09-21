import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;

    if (!title || !content || title.trim() === "" || content.trim() === "") {
      res.status(422).json({ message: "hello" });
      return;
    }

    const newInput = {
      title,
      content,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://a10019610:did8847@cluster0.inu0jfv.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "failed connect" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newInput);
      newInput.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "failed storign" });
      return;
    }

    res.status(201).json({ message: "new input" });
  }

  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://a10019610:did8847@cluster0.inu0jfv.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const posts = await db
      .collection("messages")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ message: posts });
  }
}
export default handler;
