const { Client } = require("discord.js");
const { Success } = require("../../Utilities/Logger");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        Success(`✅ Запущен от имени бота: ${client.user.tag}!`);
        client.user.setActivity("Super Bot", {type: "STREAMING"});
    }
}