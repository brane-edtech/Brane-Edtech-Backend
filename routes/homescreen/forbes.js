const express = require("express");
const braneClient = require("../../client/client");
const forbes = express.Router();

forbes.get("/", async (req, res)=>{
    try{
        await braneClient.connect()
        let data = await braneClient.db("brane").collection("homepage_forbes").find().toArray();
        if(data.length === 0 || data.includes(null)){
            res.status(404).json({error:"Data Not Found"});
        }
        res.json(data);
    }
    catch(error){
        res.status(500).json({error: "Internal server error"});
    }
})

module.exports = forbes;