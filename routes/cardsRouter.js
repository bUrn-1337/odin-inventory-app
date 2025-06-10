const { Router } = require("express");
const cardsController = require("../controllers/cardsController");
const cardsRouter = Router();

cardsRouter.get("/create", cardsController.cardCreateGet);
cardsRouter.get("/:cardId", cardsController.cardGet);
cardsRouter.get("/:cardId/update", cardsController.cardUpdateGet);

cardsRouter.post("/create", cardsController.cardCreatePost);
cardsRouter.post("/:cardId/update", cardsController.cardUpdatePost);
cardsRouter.post("/:cardId/delete", cardsController.cardDelete);

module.exports = cardsRouter;