const express = require("express");
const braneClient = require("../../client/client");
const signup = express.Router();

signup.post("/", async (req, res) => {    
    try {
        await braneClient.connect();
        const formData = req.body; // Assuming form data is sent as JSON in the request body
        await braneClient.db("brane").collection("signup_details").insertOne(formData);
        // Process the form data and save it to the database using braneClient or any other database operations
        // Example: await braneClient.db("brane").collection("your_collection_name").insertOne(formData);
    
        res.status(200).json({ message: "Form submitted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
});

module.exports = signup;
