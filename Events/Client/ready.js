const { Client, ActivityType } = require("discord.js");
const { Success, Error } = require("../../Structures/Utilities/Logger");
const { loadCommands } = require("../../Structures/Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        try {
            loadCommands(client);
            
            Success(`[BOT] ✅ Launched as a bot: ${client.user.tag}!`);
            client.user.setPresence({
                activities: [{ name: "Best bot template!", type: ActivityType.Custom }],
                status: "online",
            });
        } catch (error) {
            return Error(`[Client/ready] ${error}`);
        }
    }
}