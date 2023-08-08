const express = require("express");
const braneClient = require("../../client/client");
const signupdata = express.Router();

signupdata.get("/", async (req, res) => {
  try {
    await braneClient.connect();

    // Fetch data from landingpage_leftmenu collection
    const mothertounge =  await braneClient.db("brane").collection("signup_mothertounge").find().toArray();
    const syllabus=await braneClient.db("brane").collection("signup_syllabus").find().toArray();
    const classes=await braneClient.db("brane").collection("signup_class").find().toArray();
    const moi=await braneClient.db("brane").collection("signup_moi").find().toArray();
    const nationality= await braneClient.db("brane").collection("signup_nationality").find().toArray();
    const firstlanguage=await braneClient.db("brane").collection("signup_firstlanguage").find().toArray();
    const secondlanguage= await braneClient.db("brane").collection("signup_secondlanguage").find().toArray();
    const thirdlanguage=await braneClient.db("brane").collection("signup_thirdlanguage").find().toArray();

    // Combine the data into a single JSON object
    const combinedData = {
      mothertounge:mothertounge,
      syllabus:syllabus,
      classes:classes,
      moi:moi,
      nationality:nationality,
      firstlanguage:firstlanguage,
      secondlanguage:secondlanguage,
      thirdlanguage:thirdlanguage
    };

    if (mothertounge.length === 0 || syllabus.length === 0 || classes.length===0 || moi.length===0 || nationality.length===0 || firstlanguage.length===0 || secondlanguage===0 || thirdlanguage===0) {
      res.status(404).json({ error: "Data Not Found" });
    }

    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = signupdata;
