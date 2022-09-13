import { MongoClient } from "mongodb";

async function handler(req, res) {
  const memberlist = members;

  const client = await MongoClient.connect(
    "mongodb+srv://yank:3212@cluster0.cqddlaq.mongodb.net/rnm?retryWrites=true&w=majority"
  );
  const db = client.db();
  const data = await db.collection("repairs").find({}).toArray();
  console.log(data);

  res.json({ data: memberlist });
}

export default handler;
