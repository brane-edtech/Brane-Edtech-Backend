const express = require("express");
const bodyParser = require("body-parser"); // Import the body-parser module
const braneClient = require("../../client/client");
const mobileno_matching = express.Router();

mobileno_matching.use(bodyParser.json()); // Use bodyParser to parse JSON in the request body

mobileno_matching.post("/", async (req, res) => {
  try {
    const { parentsmobileno } = req.body;

    if (!parentsmobileno) {
      return res.status(400).json({ error: "Mobile number not provided." });
    }

    await braneClient.connect();

    const user = await braneClient
      .db("brane")
      .collection("signup_details")
      .findOne({ parentsmobileno });

    if (!user) {
      return res.status(200).json({ match: false });
    }

    res.status(200).json({ match: true });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = mobileno_matching;
