const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController")

// GET
// POST
// PATCH/PUT
// DELETE

// Index = Home Page
router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.post("/save/:id/:name?", userController.save);
router.patch("/:id", userController.update);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);


router.get("*", userController.notFound);
router.post("*", userController.notFound);
router.patch("*", userController.notFound);
router.put("*", userController.notFound);
router.delete("*", userController.notFound);



module.exports = router;