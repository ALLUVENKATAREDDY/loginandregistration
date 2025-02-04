const express = require("express")
const mysql = require("mysql")
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "mysql://root:kMUasdifpvaVcmRTPOqEiqWrcjzznKAA@autorack.proxy.rlwy.net:41746/railway",
    user: "root",
    password: "",
    database: "signup1",
      waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

app.post("/signup", (req, res) => {
    const sql = "INSERT INTO login(`name`,`email`,`password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (error, data) => {
        if (error) {
            return res.status(500).json({ message: "Database error" });
        }
        return res.json(data);
    })
})

app.post("/login", (req, res) => {
    const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?"
    db.query(sql, [req.body.email, req.body.password], (error, data) => {
        if (error) {
            return res.status(500).json({ message: "Database error" });
        }
     //   alert(data);
        
        if (data.length > 0) {
            return res.json("SUCCESS")
        } else {
            res.json("FAILED")
        }
    })
})

app.listen(8081, () => {
    console.log("listening");
})
