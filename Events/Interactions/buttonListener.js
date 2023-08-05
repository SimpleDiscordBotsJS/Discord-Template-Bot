const { ButtonInteraction, Client } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {ButtonInteraction} interaction
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if(!interaction.isButton()) return;

        const button = client.buttons.get(interaction.customId);
        if(!button) return interaction.reply({ 
            content: "This button is outdated.", ephemeral: true
        });

        if(button == undefined) return;

        if(button.permission && !interaction.member.permissions.has(button.permission)) return interaction.reply({ 
            content: "You don't have the required permissions to use this.", ephemeral: true 
        });

        if(button.developer && interaction.user.id !== client.config.DEV_ID) return interaction.reply({ 
            content: "This button is only available to the developer.", ephemeral: true
        });

        button.execute(interaction, client);
    },
};