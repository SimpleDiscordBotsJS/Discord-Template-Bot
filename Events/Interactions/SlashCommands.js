const { ChatInputCommandInteraction } = require("discord.js");
const cooldownUtil = require("../../Structures/Utilities/CooldownUtil");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client 
     */
    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command) return interaction.reply({
            content: "This command is outdated.", ephemeral: true
        });

        const cooldownTime = command.cooldown || 0;
        const userId = interaction.user.id;

        if(cooldownUtil.inCooldown(userId, interaction.commandName)) {
            const remainingTime = cooldownUtil.getCooldown(userId, interaction.commandName);

            return interaction.reply({
                content: `Wait \`${remainingTime / 1000}\` seconds before using this command again.`, ephemeral: true
            });
        }

        if(command.developer && interaction.user.id !== client.config.DEV_ID) return interaction.reply({
            content: "This command is only available to the developer.", ephemeral: true
        });

        command.execute(interaction, client);

        if(cooldownTime > 0) {
            cooldownUtil.setCooldown(userId, interaction.commandName, command.cooldown);
        }
    }
}