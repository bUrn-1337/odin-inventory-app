const express = require("express");
const app = express();
const db = require("./db/index");
const raritiesRouter = require("./routes/raritiesRouter");
const cardsRouter = require("./routes/cardsRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/rarities", raritiesRouter);
app.use("/cards", cardsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));

app.get("/", async (req, res) => {
    try {
        const rarities = await db.getRarities(); 
        res.render("index", { 
            rarities: rarities
        });
    } catch (err) {
        console.error("Error fetching rarities:", err);
        res.status(500).send("Error fetching rarities");
    }
});