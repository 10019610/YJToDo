const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const dummyData = [
  {
    id: 1,
    content: "asdfasdf",
  },
];

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.get("/main", (req, res) => {
  res.json(dummyData);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
