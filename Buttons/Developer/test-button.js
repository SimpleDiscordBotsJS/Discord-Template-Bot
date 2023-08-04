const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    id: "TestButton",
    developer: true,
    permission: PermissionFlagsBits.Administrator,
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({ embeds: [ new EmbedBuilder()
            .setDescription(`✅ | Success`)
            .setColor(`#00d26a`) ], ephemeral: true
        });
    },
};
