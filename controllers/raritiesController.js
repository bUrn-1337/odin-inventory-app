const db = require("../db/index");

exports.rarityListGet = async (req, res) => {
    const rarityId = req.params.rarityId;
    try {
        const cards = await db.getCardsOfRarity(rarityId);
        res.render("rarity", { cards });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving cards of this rarity.");
    }
};

exports.rarityCreateGet = (req, res) => {
    res.render("createRarity");
};

exports.rarityUpdateGet = (req, res) => {
    res.render("updateRarity", {
        rarityId: req.params.rarityId,
    });
};

exports.rarityCreatePost = async (req, res) => {
    const { rarityName } = req.body;
    try {
        await db.insertRarity(rarityName);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating rarity.");
    }
};

exports.rarityUpdatePost = async (req, res) => {
    const newRarityName = req.body.rarityName;
    const rarityId = req.params.rarityId;
    try {
        await db.updateRarity(rarityId, newRarityName);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating rarity.");
    }
};

exports.rarityDelete = async (req, res) => {
    const rarityId = req.params.rarityId;
    try {
        await db.deleteRarity(rarityId);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting rarity.");
    }
};
