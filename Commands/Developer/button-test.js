const { CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "button-test",
    description: "Spawn test button",
    permission: "ADMINISTRATOR",
    /**
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({content: "Test button!", components: [new MessageActionRow()
            .addComponents(new MessageButton().setCustomId("test").setLabel("Test Button").setStyle("SUCCESS"))]});
    }
}