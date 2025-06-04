const { Router } = require("express");
const raritiesController = require("../controllers/raritiesController");
const raritiesRouter = Router();

raritiesRouter.get("/:rarityId", raritiesController.rarityListGet);
raritiesRouter.get("/create", raritiesController.rarityCreateGet);
raritiesRouter.get("/:rarityId/update", raritiesController.rarityUpdateGet);

raritiesRouter.post("/create", raritiesController.rarityCreatePost);
raritiesRouter.post("/:rarityId/update", raritiesController.rarityUpdatePost);
raritiesRouter.post("/:rarityId/delete", raritiesController.rarityDelete);

module.exports = raritiesRouter;