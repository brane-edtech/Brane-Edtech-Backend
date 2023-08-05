const express = require("express");
const braneClient = require("../../client/client");
const landingpageleftmenu = express.Router();

landingpageleftmenu.get("/", async (req, res) => {
  try {
    await braneClient.connect();

    // Fetch data from landingpage_leftmenu collection
    const landingpageData = await braneClient
      .db("brane")
      .collection("landingpage_leftmenu")
      .find()
      .toArray();

    // Fetch data from signup_details collection
    const signupData = await braneClient
      .db("brane")
      .collection("signup_details")
      .find()
      .toArray();

    // Combine the data into a single JSON object
    const combinedData = {
      landingpage: landingpageData,
      signup: signupData,
    };

    if (landingpageData.length === 0 || signupData.length === 0) {
      res.status(404).json({ error: "Data Not Found" });
    }

    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = landingpageleftmenu;
