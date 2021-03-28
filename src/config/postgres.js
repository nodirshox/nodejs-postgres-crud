// Postgress
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432
});

pool.on("connect", (err, res) => {
    if (err) {
        throw new Error(err.message);
    }

    console.log("Connected to Postgres");
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};
