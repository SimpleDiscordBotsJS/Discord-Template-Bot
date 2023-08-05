const { Client } = require("discord.js");
const { Success } = require("../../Structures/Utilities/Logger");
const { loadCommands } = require("../../Structures/Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        loadCommands(client);
        
        Success(`✅ Launched as a bot: ${client.user.tag}!`);
        client.user.setActivity("Super Bot", {type: "STREAMING"});
    }
}