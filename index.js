const express = require('express');
const app = express();
const pool = require("./db");
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/vehicledata", async (req,res) => {
    try {
        const alldata = await pool.query("SELECT * FROM LOGISTIC");
        res.json(alldata.rows)
    }catch (err) {
        console.log(err.message);
    }
});


app.listen(8080 , console.log("port listening to", 8080));