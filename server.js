const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const mysqlSession = require("express-mysql-session")(session);
const db = require("./data/database");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const options = {
    host: "144.24.68.69",
    port: 3306,
    user: "yang",
    password: "Rlagus12!@",
    database: "testdb",
};

const sessionStore = new mysqlSession(options);

app.use(
    session({
        secret: "super-secret",
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
    })
);

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

app.get("/approvalList", async function (req, res) {

    const query = `
          SELECT *
          FROM Approval
      `;
    const [approvals] = await db.query(query);
    console.log(approvals);

    res.send(approvals);


});

app.listen(port, () => console.log(`Listening on port ${port}`));
