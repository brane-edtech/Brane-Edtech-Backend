const express = require("express");
const braneClient = require("../../client/client");
const languages = express.Router();

languages.get("/", async (req, res) => {
  try {
    await braneClient.connect();
    let array = await braneClient.db("brane").collection("homepage_languages").find().toArray();
    if (array.length === 0 || array.includes(null)) {
        res.status(204).json({ error: "No data found" });
    }
    res.json(array);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = languages;
