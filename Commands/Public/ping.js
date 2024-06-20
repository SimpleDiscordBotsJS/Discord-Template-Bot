const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");

module.exports = {
    cooldown: 10000, // 10 seconds
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Will respond with pong.")
    .setDescriptionLocalizations({ ru: "Ответит понгом." }),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({ content: "Pong!", ephemeral: true });
    }
}