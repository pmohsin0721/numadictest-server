const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"mohsin@0721",
    database:"numadic",
    host:"localhost",
    port:5432
});

module.exports= pool;