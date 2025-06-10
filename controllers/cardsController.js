const db = require("../db/index");

exports.cardCreateGet = (req, res) => {
    res.render("createCard");
};

exports.cardGet = async (req, res) => {
    const cardId = req.params.cardId;
    try {
        const card = await db.getCardById(cardId);
        if (!card) {
            return res.status(404).send("Card not found");
        }
        res.render("card", card);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving card.");
    }
};

exports.cardUpdateGet = (req, res) => {
    const cardId = req.params.cardId;
    res.render("createCard", {
        cardId,
    });
};

exports.cardCreatePost = async (req, res) => {
    const { name, health, damage, rarity } = req.body;
    try {
        await db.insertCard(name, health, damage, rarity);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating card.");
    }
};

exports.cardUpdatePost = async (req, res) => {
    const cardId = req.params.cardId;
    const { name, health, damage, rarity } = req.body;
    try {
        await db.updateCard(name, health, damage, rarity, cardId);
        res.redirect(`/cards/${cardId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating card.");
    }
};

exports.cardDelete = async (req, res) => {
    const cardId = req.params.cardId;
    try {
        await db.deleteCard(cardId);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting card.");
    }
};
