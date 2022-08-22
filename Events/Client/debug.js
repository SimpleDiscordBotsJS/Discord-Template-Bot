const { Debug } = require("../../Utilities/Logger");

module.exports = {
    name: "debug",
    execute(message) {
        if(client.config.DEBUG_EVENT == true) Debug(message);
    }
}