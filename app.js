const express = require("express");
const app = express();
const raritiesRouter = require("./routes/raritiesRouter");
const cardsRouter = require("./routes/cardsRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/rarities", raritiesRouter);
app.use("/cards", cardsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));