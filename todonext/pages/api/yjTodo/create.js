import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { content } = req.body;

    if (!content || content.trim() === "") {
      res.status(422).json({ message: "hello" });
      return;
    }

    const newInput = {
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
      const result = await db.collection("yjTodo").insertOne(newInput);
      newInput.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "failed stored" });
      return;
    }

    res.status(201).json({ message: "new input" });
  }
}
export default handler;
