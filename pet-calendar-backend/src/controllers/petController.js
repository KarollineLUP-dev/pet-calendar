const Pet = require("../models/petModel");

exports.createPet = (req, res) => {
    Pet.create(req.body, (err, result) => {
        if(err) return res.status(500).send(err);
        res.status(201).send({ message: "Pet Cadastrado!", id: result.InsertId });
    });
};

exports.getAllPets = (req, res) => {
    Pet.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};

exports.getPetById = (req, res) => {
    Pet.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) return res.status(404).send({ message: "Pet não encontrado" });
        res.send(result[0]);
    });
};

exports.updatePet = (req, res) => {
    Pet.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Pet Atualizado!" });
    });
};

exports.deletePet = (req, res) => {
    Pet.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Pet removido" });
    });
};

