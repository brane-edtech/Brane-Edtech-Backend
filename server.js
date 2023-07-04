const cors=require("cors");
const express=require("express");
const app=express();
const header = require("./routes/homescreen/header");
const child1 = require("./routes/homescreen/child1");
const ourfeatures = require("./routes/homescreen/ourfeatures");
const ourprojects = require("./routes/homescreen/ourprojects");
const leadersvoice = require("./routes/homescreen/leadersvoice");
const parentsvoice = require("./routes/homescreen/parentsvoice");
const languages = require("./routes/homescreen/languages");
const forbes = require("./routes/homescreen/forbes");
const footer = require("./routes/homescreen/footer");

app.use(cors());
app.use(express.json());

app.use("/homepage_header", header);
app.use("/homepage_child1", child1);
app.use("/homepage_ourfeatures", ourfeatures);
app.use("/homepage_ourprojects", ourprojects);
app.use("/homepage_leadersvoice", leadersvoice);
app.use("/homepage_parentsvoice", parentsvoice);
app.use("/homepage_languages", languages);
app.use("/homepage_forbes", forbes);
app.use("/homepage_footer", footer);

app.listen(8080,()=>{
    console.log("server listening port no.8080");
});




