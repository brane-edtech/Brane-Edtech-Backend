const {MongoClient} = require("mongodb");
const urls = require("../urls/urls");
const {url} = urls;
const braneClient = new MongoClient(url);
module.exports = braneClient;