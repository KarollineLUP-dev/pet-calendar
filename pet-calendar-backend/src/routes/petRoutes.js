const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.post("/", petController.createPet);
router.get("/", petController.getAllPets);
router.get("/", petController.getPetById);
router.put("/", petController.updatePet);
router.delete("/", petController.deletePet);

module.exports = router;