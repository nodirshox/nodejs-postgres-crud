const db = require("../../config/postgres");

let contactStorage = {
    create: async (req, res) => {
        let newContact = req.body;
        try {
            let newContact = await db.query(
                "INSERT INTO contacts (first_name, last_name, email, phone) VALUES ($1, $2, $3, $4) RETURNING id",
                [newContact.first_name, newContact.last_name, newContact.email, newContact.phone]
            )
            
            return res.status(200).send({
                id: newContact.rows[0].id
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },
    find: async (req, res) => {
        try {
            let contacts = await db.query(
                "SELECT * FROM contacts"
            );

            return res.status(200).send({
                contacts: contacts.rows
            });
        } catch (error) {
            throw new Error(error.message);

        }
    }
}

module.exports = contactStorage;