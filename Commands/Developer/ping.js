const { CommandInteraction } = require("discord.js");
const Logger = require("../../Utilities/Logger");

module.exports = {
    name: "ping",
    nameLocalizations: {
        "ru": "пинг"
    },
    description: "ping command",
    descriptionLocalizations: {
        "ru": "команда пинг"
    },
    permission: "ADMINISTRATOR",
    /**
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({content: "POING"});
        Logger.Warning("PONG");
        Logger.Success("PONG");
        Logger.Message("PONG");
        Logger.Debug("PONG");
        Logger.Error("PONG");
        Logger.Info("PONG");
    }
}