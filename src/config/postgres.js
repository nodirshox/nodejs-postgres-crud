const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432
});

client.connect((error) => {
    console.log("Started to connecting to Postgres");
    if (error) {
        throw new Error(error.message)
    }
    console.log("Connected to Postgres");
});

module.exports = {
    query: (text, params) => client.query(text, params)
};
