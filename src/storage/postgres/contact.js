const db = require("../../config/postgres");

let contactStorage = {
    create: async (req, res) => {
        let contact = req.body;
        try {
            let newContact = await db.query(
                "INSERT INTO contacts (first_name, last_name, email, phone, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
                [contact.first_name, contact.last_name, contact.email, contact.phone, new Date(), new Date()]
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
    },
    get: async (req, res) => {
        try {
            let contact = await db.query(
                "SELECT * FROM contacts WHERE id = $1", [req.params.contact_id]
            )
            return res.status(200).json({
                contact: contact.rows[0]
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    update: async (req, res) => {
        try {
            let contact = await db.query(
                "UPDATE contacts SET first_name = $1, last_name = $2, email = $3, phone = $4, updated_at = $5 WHERE id = $6",
                [req.body.first_name, req.body.last_name, req.body.email, req.body.phone, new Date(), req.params.contact_id]
            )
            return res.status(200).json({
                success: true
            })
        } catch (error) {
            throw new Error(error.message);
        }
    },
    delete: async (req, res) => {
        try {
            let deleteContact = await db.query(
                "DELETE FROM contacts WHERE id = $1",
                [req.params.contact_id]
            )
            return res.status(200).json({
                success: true
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = contactStorage;