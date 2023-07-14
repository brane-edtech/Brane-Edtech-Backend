const credentials = require("../credentials/credentials");
const {password} = credentials;

const urls = {
    url: `mongodb+srv://Brane:${password}@brane.2mfirsd.mongodb.net/?retryWrites=true&w=majority`
}

module.exports = urls;