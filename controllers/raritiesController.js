const getFromDb = require("../db/index");
exports.rarityListGet = (req, res) => {
    const rarityId = req.params.rarityId;
    const cards = db.card
};