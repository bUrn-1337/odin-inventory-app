const pool = require("./pool");


async function insertRarity(rarityName) {
    await pool.query("INSERT INTO rarities (rarity_name) VALUES ($1);", [rarityName])
}

async function getRarities() {
    const { rows } = await pool.query("SELECT * FROM rarities;");
    return rows;
}

async function deleteRarity(rarityId) {
    await pool.query("DELETE FROM rarities WHERE id = $1;", [rarityId]);    
}

async function updateRarity(rarityId, newRarityName) {
    await pool.query("UPDATE rarities SET rarity_name = $1 WHERE id = $2; ", [newRarityName, rarityId]);
}

async function insertCard(cardName, health, damage, rarityName) {
    await pool.query("INSERT INTO cards (name, health, damage, rarity) VALUES ($1, $2, $3, $4);", [cardName, health, damage, rarityName]);
}

async function getCardsOfRarity(rarityId) {
    const { rows } = await pool.query("SELECT cards.id as id, cards.name as name, cards.health as health, cards.damage as damage, cards.rarity as rarity FROM cards JOIN rarities ON cards.rarity = rarities.rarity_name WHERE rarities.id = $1;", [rarityId]);
    return rows;
}

async function getCardById(cardId) {
    const { rows } = await pool.query("SELECT * FROM cards WHERE id = $1;", [cardId]);
    return rows[0];
}

async function updateCard(newCardName, newHealth, newDamage, newRarityName, cardId) {
    await pool.query("UPDATE cards SET name = $1, health = $2, damage = $3, rarity = $4 WHERE id = $5", [newCardName, newHealth, newDamage, newRarityName, cardId]);
}

async function deleteCard(cardId) {
    await pool.query("DELETE FROM cards WHERE id = $1", [cardId]);
}
module.exports = {
    insertRarity,
    getRarities,
    deleteRarity,
    updateRarity,
    insertCard,
    getCardsOfRarity,
    getCardById,
    updateCard,
    deleteCard,
};