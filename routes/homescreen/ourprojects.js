const express = require("express");
const braneClient = require("../../client/client");
const ourprojects = express.Router();

ourprojects.get("/", async (req, res)=>{
    try{
        await braneClient.connect();
        let data = await braneClient.db("brane").collection("homepage_ourprojects").find().toArray();
        if(data.length === 0 || data.includes(null)){
            res.status(404).json({error:"Data Not Found"});
        }
        res.json(data);
    }
    catch(error){
        res.status(500).json({error:error});
    }
})

module.exports = ourprojects;