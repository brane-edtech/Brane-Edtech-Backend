const express = require("express");
const braneClient = require("../../client/client");
const login = express.Router();

login.get("/", async (req, res) => {
    try {
      console.log("Attempting to connect to MongoDB...");
      await braneClient.connect();
      console.log("Connected to MongoDB successfully.");
  
      let data = await braneClient.db("brane").collection("signup_details").find().toArray();
      console.log("Fetched data from MongoDB:", data);
  
      if (data.length === 0 || data.includes(null)) {
        console.log("Data not found or contains null values.");
        res.status(204).json({ error: "Data Not Found" });
      }
      
      console.log("Sending data to client:", data);
      res.json(data);
    } catch (error) {
      console.error("Error occurred during data retrieval:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
module.exports = login;