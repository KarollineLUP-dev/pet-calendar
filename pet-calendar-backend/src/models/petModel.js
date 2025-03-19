const db = require(".. /config/db");

const Pet = {
    create: (pet, callback) => {
        const sql = "INSERR INTO pets(name, species, age, owner) VALUES (?, ?, ?, ?)";
        db.query(sql, [pet.name, pet.species, pet.age, pet.owner], callback);
    },

    getAll: (callback) => {
        db.query("SELECT * FROM pets", callback);
    },

    update: (id, pet, callback) => {
        const sql = "UPDATE pets SET name=?, species=?, age=?, owner=? WHERE id=?";
        db.query(sql, [pet.name, pet.species, pet.age, pet.owner, id], callback);
    },

    delete: (id, callback) => {
        db.query("DELETE FROM pets Where id=?", [id], callback);
    },
};

module.exports = Pet;
