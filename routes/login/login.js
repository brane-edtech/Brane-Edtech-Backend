const express = require("express");
const braneClient = require("../../client/client");
const login = express.Router();

login.get("/", async (req, res) => {
  try {
    await braneClient.connect();

    let data = await braneClient
      .db("brane")
      .collection("signup_details")
      .find()
      .toArray();
    if (data.length === 0 || data.includes(null)) {
      console.log("Data not found or contains null values.");
      res.status(204).json({ error: "Data Not Found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = login;
