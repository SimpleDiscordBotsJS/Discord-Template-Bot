const { Client } = require("discord.js");
const { Success } = require("../../Utilities/Logger");
const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        Success(`✅ Launched as a bot: ${client.user.tag}!`);
        client.user.setActivity("Super Bot", {type: "STREAMING"});

        loadCommands(client);
    }
}