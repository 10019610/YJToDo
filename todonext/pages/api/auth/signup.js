import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res
      .status(422)
      .json({ message: "Invalid input - 비밀번호는 최소 7자 이상!" });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    // 사용자 데이터가 있는 객체라면 사용자가 이미 존재한다는 뜻, 그래서 return으로 반환하여 중복을 막음
    res.status(422).json({ message: "이미 가입된 이메일입니다!" });

    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!!" });
  client.close();
}
export default handler;
