const { Client } = require("discord.js");
const Logger = require("../../Utilites/Logger");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        Logger.Info(`✅ Запущен от имени бота: ${client.user.tag}!`);
        client.user.setActivity("Pinguins sex", {type: "STREAMING"});
    }
}