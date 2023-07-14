const express = require("express");
const braneClient = require("../../client/client");
const header = express.Router();

header.get("/", async (req, res) => {
  try {
    await braneClient.connect();
    let data = await braneClient.db("brane").collection("homepage_header").find().toArray();
    if (data.length === 0 || data.includes(null)) {
        res.status(404).json({ error: "No data found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = header;
