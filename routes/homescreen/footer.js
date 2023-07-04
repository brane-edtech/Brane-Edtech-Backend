const express = require("express");
const braneClient = require("../../client/client");
const footer = express.Router();

footer.get("/", async (req, res)=>{
    try{
        await braneClient.connect();
        let data = await braneClient.db("brane").collection("homepage_footer").find().toArray();
        if(data.length === 0 || data.includes(null)){
            res.status(204).json({error: "Data Not Found"});
        }
        res.json(data);
    }
    catch(error){
        res.status(500).json({error:"Internal Server Error"});
    }
})

module.exports = footer;
