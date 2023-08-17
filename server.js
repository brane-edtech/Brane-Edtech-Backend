const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const header = require("./routes/homescreen/header");
const banner = require("./routes/homescreen/banner");
const ourprojects = require("./routes/homescreen/ourprojects");
const leadersvoice = require("./routes/homescreen/leadersvoice");
const parentsvoice = require("./routes/homescreen/parentsvoice");
const newsletter = require("./routes/homescreen/newsletter");
const signup = require("./routes/signup/signup");
const login = require("./routes/login/login");
const mobileno_matching = require("./routes/login/mobileno_matching");
const landingpagenavbar = require("./routes/landingscreen/landingpagenavbar");
const landingpageleftmenu = require("./routes/landingscreen/landingpageleftmenu");
const landingpagebody = require("./routes/landingscreen/landingpagebody");
const signupdata = require('./routes/signup/signupdata');
const bot=require('./routes/voice/voice');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/homepage_header", header);
app.use("/homepage_banner", banner);
app.use("/homepage_ourprojects", ourprojects);
app.use("/homepage_leadersvoice", leadersvoice);
app.use("/homepage_parentsvoice", parentsvoice);
app.use("/homepage_newsletter", newsletter);
app.use("/signup", signup);
app.use("/signup_data",signupdata);
app.use("/login", login);
app.use("/ismobileno_matched", mobileno_matching);
app.use("/landingpage_navbar", landingpagenavbar);
app.use("/landingpage_leftmenu", landingpageleftmenu);
app.use("/landingpage_body", landingpagebody);
app.use('/bot',bot);


app.listen(8080, () => {
  console.log("server listening port no.8080");
});
