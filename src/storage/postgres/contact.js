const db = require("../../config/postgres");

let contactStorage = {
    create: async (req) => {
        try {
            let result = await db.query(
                "INSERT INTO contacts (first_name, last_name, email, phone) VALUES ($1, $2, $3, $4)",
                [req.first_name, req.last_name, req.email, req.phone]
            )
            return true
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = contactStorage;