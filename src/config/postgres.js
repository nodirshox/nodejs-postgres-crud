// Postgress
const { Pool } = require("pg");

//const connectionURL = `postgresql://${cfg.user}:${cfg.password}@${cfg.host}:${cfg.port}/${cfg.database}`;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432
});

pool.on("connect", () => {
    console.log("Connected to Postgres");
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};
